'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { LogOut, Clock, Calendar, User, Briefcase, Home, Bell, FileText, Users, Settings, BarChart3, Shield, Megaphone } from 'lucide-react'
import WorkTracker from '@/components/staff/WorkTracker'
import DashboardOverview from '@/components/staff/DashboardOverview'
import ProfileSettings from '@/components/staff/ProfileSettings'
import Announcements from '@/components/staff/Announcements'
import TeamDirectory from '@/components/staff/TeamDirectory'
import LeaveRequests from '@/components/staff/LeaveRequests'
import AdminPanel from '@/components/staff/AdminPanel'
import CompanyCalendar from '@/components/staff/CompanyCalendar'
import DocumentLibrary from '@/components/staff/DocumentLibrary'
import NotificationsCenter from '@/components/staff/NotificationsCenter'
import ReportsAnalytics from '@/components/staff/ReportsAnalytics'
import SEOHead from '@/components/seo/SEOHead'

type TabType = 'overview' | 'work-tracker' | 'profile' | 'announcements' | 'team' | 'leave' | 'calendar' | 'documents' | 'notifications' | 'reports' | 'admin'

export default function StaffDashboard() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeTab, setActiveTab] = useState<TabType>('overview')
  const [userRole, setUserRole] = useState<string>('employee') // 'employee', 'manager', 'ceo', 'hr'

  useEffect(() => {
    // Check if user is authenticated
    const authStatus = localStorage.getItem('staff-authenticated')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
      // Get user role (in real app, this would come from auth)
      const role = localStorage.getItem('staff-role') || 'employee'
      setUserRole(role)
    } else {
      router.push('/staff/login')
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('staff-authenticated')
    localStorage.removeItem('staff-role')
    router.push('/staff/login')
  }

  const isAdmin = userRole === 'ceo' || userRole === 'hr' || userRole === 'manager'

  const tabs = [
    { id: 'overview' as TabType, label: 'Overview', icon: Home },
    { id: 'work-tracker' as TabType, label: 'Work Tracker', icon: Clock },
    { id: 'announcements' as TabType, label: 'Announcements', icon: Megaphone },
    { id: 'team' as TabType, label: 'Team Directory', icon: Users },
    { id: 'leave' as TabType, label: 'Leave Requests', icon: Calendar },
    { id: 'calendar' as TabType, label: 'Calendar', icon: Calendar },
    { id: 'documents' as TabType, label: 'Documents', icon: FileText },
    { id: 'notifications' as TabType, label: 'Notifications', icon: Bell },
    { id: 'profile' as TabType, label: 'Profile', icon: User },
    ...(isAdmin ? [{ id: 'reports' as TabType, label: 'Reports', icon: BarChart3 }] : []),
    ...(isAdmin ? [{ id: 'admin' as TabType, label: 'Admin Panel', icon: Shield }] : []),
  ]

  if (!isAuthenticated) {
    return null
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <DashboardOverview userRole={userRole} />
      case 'work-tracker':
        return <WorkTracker />
      case 'profile':
        return <ProfileSettings />
      case 'announcements':
        return <Announcements userRole={userRole} />
      case 'team':
        return <TeamDirectory />
      case 'leave':
        return <LeaveRequests userRole={userRole} />
      case 'calendar':
        return <CompanyCalendar />
      case 'documents':
        return <DocumentLibrary />
      case 'notifications':
        return <NotificationsCenter />
      case 'reports':
        return <ReportsAnalytics userRole={userRole} />
      case 'admin':
        return <AdminPanel userRole={userRole} />
      default:
        return <DashboardOverview userRole={userRole} />
    }
  }

  return (
    <>
      <SEOHead
        title="Staff Dashboard - Annita"
        description="Staff portal dashboard for Annita employees"
        keywords={['staff', 'dashboard', 'employee', 'portal']}
        noIndex={true}
        noFollow={true}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Staff Portal</h1>
                  <p className="text-sm text-gray-500">Annita LLC</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="hidden sm:block text-sm text-gray-600">
                  <span className="font-medium capitalize">{userRole}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="text-sm font-medium">Logout</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav className="bg-white border-b border-gray-200 sticky top-[73px] z-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-1 overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? 'text-orange-600 border-orange-600'
                        : 'text-gray-600 border-transparent hover:text-orange-500 hover:border-orange-300'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {renderContent()}
        </main>
      </div>
    </>
  )
}
