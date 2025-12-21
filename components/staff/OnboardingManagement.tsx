'use client'

import { useState } from 'react'
import { UserCheck, CheckCircle2, Clock, AlertCircle, FileText, Mail } from 'lucide-react'

interface OnboardingManagementProps {
  userRole: string
}

export default function OnboardingManagement({ userRole }: OnboardingManagementProps) {
  const [activeTab, setActiveTab] = useState<'new-hires' | 'checklists' | 'templates'>('new-hires')

  const newHires = [
    { id: 1, name: 'Robert Smith', position: 'Software Engineer', startDate: '2025-01-02', progress: 0, status: 'pending' },
    { id: 2, name: 'Lisa Anderson', position: 'Marketing Specialist', startDate: '2024-12-20', progress: 60, status: 'in-progress' },
    { id: 3, name: 'James Wilson', position: 'Sales Representative', startDate: '2024-12-15', progress: 100, status: 'completed' },
  ]

  const checklistItems = [
    { id: 1, task: 'Send welcome email', assignedTo: 'HR Team', dueDate: '2024-12-18', status: 'completed' },
    { id: 2, task: 'Setup workstation', assignedTo: 'IT Team', dueDate: '2024-12-19', status: 'pending' },
    { id: 3, task: 'Collect documents', assignedTo: 'HR Team', dueDate: '2024-12-20', status: 'in-progress' },
    { id: 4, task: 'Schedule orientation', assignedTo: 'HR Team', dueDate: '2024-12-21', status: 'pending' },
  ]

  if (userRole !== 'hr' && userRole !== 'ceo' && userRole !== 'manager') {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 sm:p-12 text-center">
        <UserCheck className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Access Denied</h3>
        <p className="text-sm sm:text-base text-gray-600">You need HR or higher access to manage onboarding.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Onboarding Management</h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">Manage new employee onboarding process</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex border-b border-gray-200 overflow-x-auto scrollbar-hide">
          {[
            { id: 'new-hires' as const, label: 'New Hires', icon: UserCheck },
            { id: 'checklists' as const, label: 'Checklists', icon: CheckCircle2 },
            { id: 'templates' as const, label: 'Templates', icon: FileText },
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
          {activeTab === 'new-hires' && (
            <div className="space-y-4">
              {newHires.map((hire) => (
                <div key={hire.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{hire.name}</h4>
                      <p className="text-xs text-gray-500 mb-2">{hire.position} • Start Date: {hire.startDate}</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div className="h-2 rounded-full bg-orange-500" style={{ width: `${hire.progress}%` }} />
                      </div>
                      <p className="text-xs text-gray-600">Progress: {hire.progress}%</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      hire.status === 'completed' ? 'bg-green-100 text-green-700' :
                      hire.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {hire.status}
                    </span>
                  </div>
                  <button
                    onClick={() => alert(`Managing onboarding for ${hire.name}\n\nIn production, this would show onboarding details.`)}
                    className="w-full px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
                  >
                    Manage Onboarding
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'checklists' && (
            <div className="space-y-3">
              {checklistItems.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg p-3 sm:p-4 flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">{item.task}</h4>
                    <p className="text-xs text-gray-500">Assigned to: {item.assignedTo} • Due: {item.dueDate}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {item.status === 'completed' ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    ) : item.status === 'in-progress' ? (
                      <Clock className="w-5 h-5 text-blue-600" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-yellow-600" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'templates' && (
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Standard Onboarding Template</h4>
                <p className="text-xs text-gray-600 mb-3">Default checklist for all new employees</p>
                <button className="px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation">
                  Use Template
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

