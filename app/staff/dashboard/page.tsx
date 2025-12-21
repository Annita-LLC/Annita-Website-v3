'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { LogOut, Clock, Calendar, User, Briefcase, Home, Bell, FileText, Users, Settings, BarChart3, Shield, Megaphone, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  // Close mobile menu on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const handleLogout = () => {
    localStorage.removeItem('staff-authenticated')
    localStorage.removeItem('staff-role')
    router.push('/staff/login')
  }

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab)
    setIsMobileMenuOpen(false)
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
        return <DashboardOverview userRole={userRole} onNavigate={handleTabChange} />
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
        return <DashboardOverview userRole={userRole} onNavigate={handleTabChange} />
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
          <div className="container mx-auto px-3 sm:px-4 lg:px-8 py-3 sm:py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h1 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 truncate">Staff Portal</h1>
                  <p className="text-xs sm:text-sm text-gray-500 hidden sm:block">Annita LLC</p>
                  {/* Mobile Current Page Indicator */}
                  <p className="text-xs text-orange-600 font-medium lg:hidden mt-0.5 truncate">
                    {tabs.find(t => t.id === activeTab)?.label}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
                <div className="hidden sm:block text-xs sm:text-sm text-gray-600">
                  <span className="font-medium capitalize">{userRole}</span>
                </div>
                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden p-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors touch-manipulation"
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 active:bg-red-100 rounded-lg transition-colors touch-manipulation"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="text-xs sm:text-sm font-medium hidden sm:inline">Logout</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block bg-white border-b border-gray-200 sticky top-[57px] sm:top-[73px] z-40">
          <div className="container mx-auto px-3 sm:px-4 lg:px-8">
            <div className="flex space-x-0.5 sm:space-x-1 overflow-x-auto scrollbar-hide pb-1 -mb-1">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium whitespace-nowrap border-b-2 transition-colors touch-manipulation ${
                      activeTab === tab.id
                        ? 'text-orange-600 border-orange-600'
                        : 'text-gray-600 border-transparent hover:text-orange-500 hover:border-orange-300 active:text-orange-600'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              
              {/* Mobile Menu Panel */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
              >
                <div className="flex flex-col h-full">
                  {/* Menu Header */}
                  <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-orange-500 to-red-500">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h2 className="text-sm font-bold text-white">Menu</h2>
                        <p className="text-xs text-orange-100 capitalize">{userRole}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors touch-manipulation"
                      aria-label="Close menu"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Menu Items */}
                  <div className="flex-1 overflow-y-auto py-2">
                    {tabs.map((tab) => {
                      const Icon = tab.icon
                      const isActive = activeTab === tab.id
                      return (
                        <button
                          key={tab.id}
                          onClick={() => handleTabChange(tab.id)}
                          className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors touch-manipulation ${
                            isActive
                              ? 'bg-orange-50 text-orange-600 border-r-4 border-orange-600'
                              : 'text-gray-700 hover:bg-gray-50 active:bg-gray-100'
                          }`}
                        >
                          <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-orange-600' : 'text-gray-500'}`} />
                          <span className="text-sm font-medium flex-1">{tab.label}</span>
                          {isActive && (
                            <div className="w-2 h-2 bg-orange-600 rounded-full flex-shrink-0"></div>
                          )}
                        </button>
                      )
                    })}
                  </div>

                  {/* Menu Footer */}
                  <div className="border-t border-gray-200 p-4 bg-gray-50">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 active:bg-red-800 font-medium transition-colors touch-manipulation"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="container mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6">
          {renderContent()}
        </main>
      </div>
    </>
  )
}
