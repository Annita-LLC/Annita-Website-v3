'use client'

import { useState, useEffect } from 'react'
import { Clock, Calendar, CheckCircle2, AlertCircle, TrendingUp, Users, FileText, Bell, ArrowRight, Briefcase } from 'lucide-react'
import Link from 'next/link'

interface DashboardOverviewProps {
  userRole: string
}

export default function DashboardOverview({ userRole }: DashboardOverviewProps) {
  const [stats, setStats] = useState({
    pendingReports: 0,
    completedTasks: 12,
    upcomingDeadlines: 3,
    teamMembers: 25,
    unreadAnnouncements: 2,
    pendingLeaves: 0
  })

  const recentAnnouncements = [
    { id: 1, title: 'Q4 Company Meeting', date: '2024-12-18', type: 'company', read: false },
    { id: 2, title: 'New HR Policies', date: '2024-12-15', type: 'hr', read: false },
    { id: 3, title: 'Holiday Schedule', date: '2024-12-10', type: 'company', read: true },
  ]

  const upcomingDeadlines = [
    { id: 1, title: 'Weekly Report Submission', date: '2024-12-20', type: 'report' },
    { id: 2, title: 'Project Review Meeting', date: '2024-12-22', type: 'meeting' },
    { id: 3, title: 'Performance Review', date: '2024-12-25', type: 'review' },
  ]

  const quickActions = [
    { label: 'Submit Weekly Report', icon: FileText, href: '#work-tracker', color: 'bg-blue-500' },
    { label: 'Request Time Off', icon: Calendar, href: '#leave', color: 'bg-green-500' },
    { label: 'View Team Directory', icon: Users, href: '#team', color: 'bg-purple-500' },
    { label: 'Check Documents', icon: FileText, href: '#documents', color: 'bg-orange-500' },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Welcome back!</h2>
        <p className="text-orange-100">Here's what's happening with your work this week.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Pending Reports</p>
              <p className="text-2xl font-bold text-gray-900">{stats.pendingReports}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Completed Tasks</p>
              <p className="text-2xl font-bold text-gray-900">{stats.completedTasks}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Upcoming Deadlines</p>
              <p className="text-2xl font-bold text-gray-900">{stats.upcomingDeadlines}</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Unread Announcements</p>
              <p className="text-2xl font-bold text-gray-900">{stats.unreadAnnouncements}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Bell className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Announcements */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Announcements</h3>
            <button className="text-sm text-orange-600 hover:text-orange-700 font-medium">
              View All
            </button>
          </div>
          <div className="space-y-3">
            {recentAnnouncements.map((announcement) => (
              <div
                key={announcement.id}
                className={`p-3 rounded-lg border ${
                  !announcement.read ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{announcement.title}</p>
                    <p className="text-sm text-gray-500 mt-1">{announcement.date}</p>
                  </div>
                  {!announcement.read && (
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Deadlines */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Upcoming Deadlines</h3>
            <button className="text-sm text-orange-600 hover:text-orange-700 font-medium">
              View Calendar
            </button>
          </div>
          <div className="space-y-3">
            {upcomingDeadlines.map((deadline) => (
              <div key={deadline.id} className="p-3 rounded-lg border border-gray-200 bg-gray-50">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{deadline.title}</p>
                    <p className="text-sm text-gray-500 mt-1">{deadline.date}</p>
                  </div>
                  <span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded-full">
                    {deadline.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon
            return (
              <button
                key={index}
                className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all group"
              >
                <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center text-white`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-orange-600">
                  {action.label}
                </span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-600 ml-auto" />
              </button>
            )
          })}
        </div>
      </div>

      {/* Performance Summary (for employees) */}
      {userRole === 'employee' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">This Week's Summary</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-blue-900">42</p>
              <p className="text-sm text-gray-600">Hours Worked</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <CheckCircle2 className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-green-900">8</p>
              <p className="text-sm text-gray-600">Tasks Completed</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Briefcase className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-purple-900">3</p>
              <p className="text-sm text-gray-600">Projects Active</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

