'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { LogOut, Clock, Calendar, User, Briefcase, Home, Bell, FileText, Users, Settings, BarChart3, Shield, Megaphone, Menu, X, Crown, Target, BookOpen, DollarSign, Heart, TrendingUp, UserPlus, UserCheck, Receipt, Package, MessageSquare, BarChart3 as BarChartIcon } from 'lucide-react'
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
import CEODashboard from '@/components/staff/CEODashboard'
import PerformanceReviews from '@/components/staff/PerformanceReviews'
import TrainingDevelopment from '@/components/staff/TrainingDevelopment'
import BenefitsCompensation from '@/components/staff/BenefitsCompensation'
import GoalsObjectives from '@/components/staff/GoalsObjectives'
import TeamPerformanceDashboard from '@/components/staff/TeamPerformanceDashboard'
import OneOnOneMeetings from '@/components/staff/OneOnOneMeetings'
import BudgetManagement from '@/components/staff/BudgetManagement'
import ProjectManagement from '@/components/staff/ProjectManagement'
import RecruitmentHiring from '@/components/staff/RecruitmentHiring'
import OnboardingManagement from '@/components/staff/OnboardingManagement'
import PerformanceReviewSystem from '@/components/staff/PerformanceReviewSystem'
import BenefitsAdministration from '@/components/staff/BenefitsAdministration'
import PayrollManagement from '@/components/staff/PayrollManagement'
import CompliancePolicies from '@/components/staff/CompliancePolicies'
import StrategicPlanning from '@/components/staff/StrategicPlanning'
import BoardMeetings from '@/components/staff/BoardMeetings'
import InvestorRelations from '@/components/staff/InvestorRelations'
import MarketAnalysis from '@/components/staff/MarketAnalysis'
import MessagingChat from '@/components/staff/MessagingChat'
import KnowledgeBase from '@/components/staff/KnowledgeBase'
import ExpenseManagement from '@/components/staff/ExpenseManagement'
import AssetManagement from '@/components/staff/AssetManagement'
import SEOHead from '@/components/seo/SEOHead'

type TabType = 'overview' | 'ceo-dashboard' | 'work-tracker' | 'profile' | 'announcements' | 'team' | 'leave' | 'calendar' | 'documents' | 'notifications' | 'performance-reviews' | 'training' | 'benefits' | 'goals' | 'team-performance' | 'one-on-one' | 'budget' | 'projects' | 'recruitment' | 'onboarding' | 'review-system' | 'benefits-admin' | 'payroll' | 'compliance' | 'strategic-planning' | 'board-meetings' | 'investor-relations' | 'market-analysis' | 'messaging' | 'knowledge-base' | 'expenses' | 'assets' | 'reports' | 'admin'

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
  const isCEO = userRole === 'ceo'
  const isManager = userRole === 'manager' || userRole === 'ceo'
  const isHR = userRole === 'hr' || userRole === 'ceo'

  const tabs = [
    { id: 'overview' as TabType, label: 'Overview', icon: Home },
    ...(isCEO ? [{ id: 'ceo-dashboard' as TabType, label: 'CEO Dashboard', icon: Crown }] : []),
    { id: 'work-tracker' as TabType, label: 'Work Tracker', icon: Clock },
    { id: 'announcements' as TabType, label: 'Announcements', icon: Megaphone },
    { id: 'team' as TabType, label: 'Team Directory', icon: Users },
    { id: 'leave' as TabType, label: 'Leave Requests', icon: Calendar },
    { id: 'calendar' as TabType, label: 'Calendar', icon: Calendar },
    { id: 'documents' as TabType, label: 'Documents', icon: FileText },
    { id: 'notifications' as TabType, label: 'Notifications', icon: Bell },
    { id: 'performance-reviews' as TabType, label: 'Performance', icon: FileText },
    { id: 'training' as TabType, label: 'Training', icon: BookOpen },
    { id: 'benefits' as TabType, label: 'Benefits', icon: Heart },
    { id: 'goals' as TabType, label: 'Goals', icon: Target },
    { id: 'messaging' as TabType, label: 'Messages', icon: MessageSquare },
    { id: 'knowledge-base' as TabType, label: 'Knowledge Base', icon: BookOpen },
    { id: 'expenses' as TabType, label: 'Expenses', icon: Receipt },
    { id: 'assets' as TabType, label: 'Assets', icon: Package },
    ...(isManager ? [{ id: 'team-performance' as TabType, label: 'Team Performance', icon: BarChart3 }] : []),
    ...(isManager ? [{ id: 'one-on-one' as TabType, label: '1-on-1 Meetings', icon: Users }] : []),
    ...(isManager ? [{ id: 'budget' as TabType, label: 'Budget', icon: DollarSign }] : []),
    ...(isManager ? [{ id: 'projects' as TabType, label: 'Projects', icon: Briefcase }] : []),
    ...(isHR ? [{ id: 'recruitment' as TabType, label: 'Recruitment', icon: UserPlus }] : []),
    ...(isHR ? [{ id: 'onboarding' as TabType, label: 'Onboarding', icon: UserCheck }] : []),
    ...(isHR ? [{ id: 'review-system' as TabType, label: 'Review System', icon: FileText }] : []),
    ...(isHR ? [{ id: 'benefits-admin' as TabType, label: 'Benefits Admin', icon: Heart }] : []),
    ...(isHR ? [{ id: 'payroll' as TabType, label: 'Payroll', icon: DollarSign }] : []),
    ...(isHR ? [{ id: 'compliance' as TabType, label: 'Compliance', icon: Shield }] : []),
    ...(isCEO ? [{ id: 'strategic-planning' as TabType, label: 'Strategic Planning', icon: Target }] : []),
    ...(isCEO ? [{ id: 'board-meetings' as TabType, label: 'Board Meetings', icon: Users }] : []),
    ...(isCEO ? [{ id: 'investor-relations' as TabType, label: 'Investor Relations', icon: TrendingUp }] : []),
    ...(isCEO ? [{ id: 'market-analysis' as TabType, label: 'Market Analysis', icon: BarChartIcon }] : []),
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
      case 'ceo-dashboard':
        return <CEODashboard />
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
      case 'performance-reviews':
        return <PerformanceReviews />
      case 'training':
        return <TrainingDevelopment />
      case 'benefits':
        return <BenefitsCompensation />
      case 'goals':
        return <GoalsObjectives />
      case 'team-performance':
        return <TeamPerformanceDashboard userRole={userRole} />
      case 'one-on-one':
        return <OneOnOneMeetings userRole={userRole} />
      case 'budget':
        return <BudgetManagement userRole={userRole} />
      case 'projects':
        return <ProjectManagement userRole={userRole} />
      case 'recruitment':
        return <RecruitmentHiring userRole={userRole} />
      case 'onboarding':
        return <OnboardingManagement userRole={userRole} />
      case 'review-system':
        return <PerformanceReviewSystem userRole={userRole} />
      case 'benefits-admin':
        return <BenefitsAdministration userRole={userRole} />
      case 'payroll':
        return <PayrollManagement userRole={userRole} />
      case 'compliance':
        return <CompliancePolicies userRole={userRole} />
      case 'strategic-planning':
        return <StrategicPlanning userRole={userRole} />
      case 'board-meetings':
        return <BoardMeetings userRole={userRole} />
      case 'investor-relations':
        return <InvestorRelations userRole={userRole} />
      case 'market-analysis':
        return <MarketAnalysis userRole={userRole} />
      case 'messaging':
        return <MessagingChat />
      case 'knowledge-base':
        return <KnowledgeBase />
      case 'expenses':
        return <ExpenseManagement />
      case 'assets':
        return <AssetManagement />
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
        {/* Staff Portal Header */}
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
