'use client'

import { useState } from 'react'
import { FileText, Calendar, Users, CheckCircle2, Clock, Star } from 'lucide-react'

interface PerformanceReviewSystemProps {
  userRole: string
}

export default function PerformanceReviewSystem({ userRole }: PerformanceReviewSystemProps) {
  const [activeTab, setActiveTab] = useState<'cycles' | 'assignments' | 'analytics'>('cycles')

  const reviewCycles = [
    { id: 1, name: 'Q4 2024 Review', period: 'Oct - Dec 2024', status: 'active', startDate: '2024-12-01', endDate: '2024-12-31', completed: 18, total: 25 },
    { id: 2, name: 'Q3 2024 Review', period: 'Jul - Sep 2024', status: 'completed', startDate: '2024-09-01', endDate: '2024-09-30', completed: 25, total: 25 },
  ]

  const assignments = [
    { id: 1, employee: 'John Doe', reviewer: 'Jane Smith', cycle: 'Q4 2024 Review', status: 'in-progress', dueDate: '2024-12-25' },
    { id: 2, employee: 'Sarah Johnson', reviewer: 'Mike Wilson', cycle: 'Q4 2024 Review', status: 'pending', dueDate: '2024-12-25' },
  ]

  if (userRole !== 'hr' && userRole !== 'ceo' && userRole !== 'manager') {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 sm:p-12 text-center">
        <FileText className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Access Denied</h3>
        <p className="text-sm sm:text-base text-gray-600">You need HR or higher access to manage performance reviews.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Performance Review System</h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">Manage performance review cycles and assignments</p>
        </div>
        <button
          onClick={() => alert('Create New Review Cycle\n\nIn production, this would open a form to create a new review cycle.')}
          className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
        >
          New Cycle
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex border-b border-gray-200 overflow-x-auto scrollbar-hide">
          {[
            { id: 'cycles' as const, label: 'Review Cycles', icon: Calendar },
            { id: 'assignments' as const, label: 'Assignments', icon: Users },
            { id: 'analytics' as const, label: 'Analytics', icon: FileText },
          ].map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap touch-manipulation ${
                  activeTab === tab.id
                    ? 'border-orange-600 text-orange-600'
                    : 'border-transparent text-gray-600 hover:text-orange-600 active:text-orange-600'
                }`}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        <div className="p-4 sm:p-6">
          {activeTab === 'cycles' && (
            <div className="space-y-4">
              {reviewCycles.map((cycle) => (
                <div key={cycle.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{cycle.name}</h4>
                      <p className="text-xs text-gray-500 mb-2">{cycle.period} • {cycle.startDate} to {cycle.endDate}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-600">
                        <span>{cycle.completed} of {cycle.total} completed</span>
                      </div>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      cycle.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {cycle.status}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                    <div className="h-2 rounded-full bg-orange-500" style={{ width: `${(cycle.completed / cycle.total) * 100}%` }} />
                  </div>
                  <button
                    onClick={() => alert(`Managing ${cycle.name}\n\nIn production, this would show cycle details.`)}
                    className="w-full px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
                  >
                    Manage Cycle
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'assignments' && (
            <div className="space-y-4">
              {assignments.map((assignment) => (
                <div key={assignment.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{assignment.employee}</h4>
                      <p className="text-xs text-gray-500 mb-2">Reviewer: {assignment.reviewer} • Cycle: {assignment.cycle}</p>
                      <p className="text-xs text-gray-500">Due: {assignment.dueDate}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      assignment.status === 'completed' ? 'bg-green-100 text-green-700' :
                      assignment.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {assignment.status}
                    </span>
                  </div>
                  <button
                    onClick={() => alert(`Viewing review assignment for ${assignment.employee}\n\nIn production, this would show review details.`)}
                    className="w-full px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
                  >
                    View Review
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-xs text-gray-600 mb-1">Avg Rating</p>
                  <p className="text-2xl font-bold text-gray-900">4.3</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-xs text-gray-600 mb-1">Completion Rate</p>
                  <p className="text-2xl font-bold text-green-600">92%</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-xs text-gray-600 mb-1">Total Reviews</p>
                  <p className="text-2xl font-bold text-blue-600">43</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

