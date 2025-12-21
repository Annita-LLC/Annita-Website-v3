'use client'

import { useState } from 'react'
import { Users, TrendingUp, Target, BarChart3, User, CheckCircle2, Clock, AlertCircle, Award } from 'lucide-react'

interface TeamPerformanceDashboardProps {
  userRole: string
}

export default function TeamPerformanceDashboard({ userRole }: TeamPerformanceDashboardProps) {
  const [selectedTeamMember, setSelectedTeamMember] = useState<number | null>(null)

  const teamMembers = [
    { id: 1, name: 'John Doe', role: 'Software Engineer', department: 'IT & Technology', performance: 92, tasksCompleted: 45, avgHours: 42, status: 'excellent' },
    { id: 2, name: 'Sarah Johnson', role: 'Product Manager', department: 'Product Management', performance: 88, tasksCompleted: 38, avgHours: 40, status: 'good' },
    { id: 3, name: 'Mike Wilson', role: 'UX Designer', department: 'Design', performance: 85, tasksCompleted: 32, avgHours: 38, status: 'good' },
    { id: 4, name: 'Emily Brown', role: 'Marketing Specialist', department: 'Sales & Marketing', performance: 90, tasksCompleted: 40, avgHours: 41, status: 'excellent' },
  ]

  const teamMetrics = {
    totalMembers: teamMembers.length,
    avgPerformance: Math.round(teamMembers.reduce((sum, m) => sum + m.performance, 0) / teamMembers.length),
    totalTasksCompleted: teamMembers.reduce((sum, m) => sum + m.tasksCompleted, 0),
    avgHours: Math.round(teamMembers.reduce((sum, m) => sum + m.avgHours, 0) / teamMembers.length),
    onTrack: teamMembers.filter(m => m.status === 'excellent' || m.status === 'good').length,
    needsAttention: teamMembers.filter(m => m.status === 'needs-improvement').length
  }

  const teamGoals = [
    { id: 1, title: 'Q4 Product Launch', progress: 85, deadline: '2024-12-31', status: 'on-track' },
    { id: 2, title: 'Client Satisfaction Target', progress: 92, deadline: '2025-01-15', status: 'on-track' },
    { id: 3, title: 'Team Training Completion', progress: 75, deadline: '2025-02-01', status: 'on-track' },
  ]

  if (userRole !== 'manager' && userRole !== 'ceo' && userRole !== 'hr') {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 sm:p-12 text-center">
        <Users className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Access Denied</h3>
        <p className="text-sm sm:text-base text-gray-600">You need manager or higher access to view team performance.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Team Performance Dashboard</h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">Monitor and manage your team's performance</p>
        </div>
      </div>

      {/* Team Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-200">
          <p className="text-xs text-gray-600 mb-1">Team Size</p>
          <p className="text-xl sm:text-2xl font-bold text-gray-900">{teamMetrics.totalMembers}</p>
        </div>
        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-200">
          <p className="text-xs text-gray-600 mb-1">Avg Performance</p>
          <p className="text-xl sm:text-2xl font-bold text-blue-600">{teamMetrics.avgPerformance}%</p>
        </div>
        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-200">
          <p className="text-xs text-gray-600 mb-1">Tasks Completed</p>
          <p className="text-xl sm:text-2xl font-bold text-green-600">{teamMetrics.totalTasksCompleted}</p>
        </div>
        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-200">
          <p className="text-xs text-gray-600 mb-1">Avg Hours/Week</p>
          <p className="text-xl sm:text-2xl font-bold text-purple-600">{teamMetrics.avgHours}</p>
        </div>
        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-200">
          <p className="text-xs text-gray-600 mb-1">On Track</p>
          <p className="text-xl sm:text-2xl font-bold text-green-600">{teamMetrics.onTrack}</p>
        </div>
        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-200">
          <p className="text-xs text-gray-600 mb-1">Needs Attention</p>
          <p className="text-xl sm:text-2xl font-bold text-red-600">{teamMetrics.needsAttention}</p>
        </div>
      </div>

      {/* Team Goals */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Target className="w-5 h-5 mr-2 text-orange-600" />
          Team Goals
        </h3>
        <div className="space-y-3 sm:space-y-4">
          {teamGoals.map((goal) => (
            <div key={goal.id} className="border border-gray-200 rounded-lg p-3 sm:p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900">{goal.title}</h4>
                <span className="text-sm font-bold text-orange-600">{goal.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div className="h-2 rounded-full bg-orange-500" style={{ width: `${goal.progress}%` }} />
              </div>
              <p className="text-xs text-gray-500">Deadline: {goal.deadline}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Members */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Users className="w-5 h-5 mr-2 text-orange-600" />
          Team Members
        </h3>
        <div className="space-y-3 sm:space-y-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`border rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow cursor-pointer ${
                selectedTeamMember === member.id ? 'border-orange-500 bg-orange-50' : 'border-gray-200'
              }`}
              onClick={() => setSelectedTeamMember(selectedTeamMember === member.id ? null : member.id)}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <User className="w-5 h-5 text-gray-400" />
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900">{member.name}</h4>
                  </div>
                  <p className="text-xs text-gray-500 mb-1">{member.role} • {member.department}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-600">
                    <span>Tasks: {member.tasksCompleted}</span>
                    <span>Hours: {member.avgHours}/week</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg sm:text-xl font-bold text-blue-600 mb-1">{member.performance}%</p>
                  <span className={`px-2 py-1 text-xs font-medium rounded ${
                    member.status === 'excellent' ? 'bg-green-100 text-green-700' :
                    member.status === 'good' ? 'bg-blue-100 text-blue-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {member.status}
                  </span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    member.performance >= 90 ? 'bg-green-500' :
                    member.performance >= 80 ? 'bg-blue-500' :
                    'bg-yellow-500'
                  }`}
                  style={{ width: `${member.performance}%` }}
                />
              </div>
              {selectedTeamMember === member.id && (
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      alert(`Viewing detailed performance for ${member.name}\n\nIn production, this would show detailed performance metrics.`)
                    }}
                    className="w-full px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
                  >
                    View Detailed Performance
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

