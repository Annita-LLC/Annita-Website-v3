'use client'

import { useState } from 'react'
import { Shield, FileText, Search, Plus, Edit, Trash2, CheckCircle2, Clock, AlertCircle, Download } from 'lucide-react'

interface CompliancePoliciesProps {
  userRole: string
}

export default function CompliancePolicies({ userRole }: CompliancePoliciesProps) {
  const [activeTab, setActiveTab] = useState<'policies' | 'compliance' | 'training'>('policies')
  const [searchTerm, setSearchTerm] = useState('')

  const policies = [
    { id: 1, title: 'Employee Code of Conduct', category: 'HR', version: '2.1', lastUpdated: '2024-11-15', status: 'active', required: true },
    { id: 2, title: 'Data Privacy Policy', category: 'IT', version: '1.5', lastUpdated: '2024-10-20', status: 'active', required: true },
    { id: 3, title: 'Remote Work Policy', category: 'HR', version: '1.2', lastUpdated: '2024-09-10', status: 'active', required: false },
    { id: 4, title: 'Expense Reimbursement Policy', category: 'Finance', version: '2.0', lastUpdated: '2024-12-01', status: 'active', required: true },
  ]

  const complianceItems = [
    { id: 1, requirement: 'Annual Safety Training', department: 'All', dueDate: '2025-01-31', status: 'pending', completion: 0, total: 25 },
    { id: 2, requirement: 'Data Security Certification', department: 'IT', dueDate: '2025-02-15', status: 'in-progress', completion: 8, total: 10 },
    { id: 3, requirement: 'HR Policy Acknowledgment', department: 'All', dueDate: '2024-12-31', status: 'completed', completion: 25, total: 25 },
  ]

  const trainingRequirements = [
    { id: 1, name: 'Workplace Safety', category: 'Safety', required: true, frequency: 'Annual', employees: 25, completed: 20 },
    { id: 2, name: 'Anti-Harassment Training', category: 'HR', required: true, frequency: 'Biannual', employees: 25, completed: 25 },
    { id: 3, name: 'Data Protection', category: 'IT', required: true, frequency: 'Annual', employees: 10, completed: 8 },
  ]

  if (userRole !== 'hr' && userRole !== 'ceo') {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 sm:p-12 text-center">
        <Shield className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Access Denied</h3>
        <p className="text-sm sm:text-base text-gray-600">You need HR or CEO access to manage compliance.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Compliance & Policies</h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">Manage company policies and compliance tracking</p>
        </div>
        <button
          onClick={() => alert('Create New Policy\n\nIn production, this would open a form to create a new policy.')}
          className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation flex items-center justify-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>New Policy</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex border-b border-gray-200 overflow-x-auto scrollbar-hide">
          {[
            { id: 'policies' as const, label: 'Policies', icon: FileText },
            { id: 'compliance' as const, label: 'Compliance', icon: Shield },
            { id: 'training' as const, label: 'Training Requirements', icon: CheckCircle2 },
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
          {/* Policies Tab */}
          {activeTab === 'policies' && (
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Search policies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-3 sm:space-y-4">
                {policies.map((policy) => (
                  <div key={policy.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <FileText className="w-5 h-5 text-blue-600" />
                          <h4 className="text-sm sm:text-base font-semibold text-gray-900">{policy.title}</h4>
                          {policy.required && (
                            <span className="px-2 py-0.5 text-xs font-medium bg-red-100 text-red-700 rounded">Required</span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mb-2">{policy.category} • Version {policy.version} • Updated: {policy.lastUpdated}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded ${
                          policy.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                        }`}>
                          {policy.status}
                        </span>
                        <button
                          onClick={() => alert(`Editing ${policy.title}\n\nIn production, this would open edit form.`)}
                          className="p-1.5 text-orange-600 hover:bg-orange-50 rounded touch-manipulation"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => alert(`Viewing ${policy.title}\n\nIn production, this would show policy details.`)}
                        className="flex-1 px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
                      >
                        View Policy
                      </button>
                      <button
                        onClick={() => alert(`Downloading ${policy.title}\n\nIn production, this would download the policy PDF.`)}
                        className="px-3 sm:px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-xs sm:text-sm font-medium transition-colors touch-manipulation flex items-center space-x-1"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Download</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Compliance Tab */}
          {activeTab === 'compliance' && (
            <div className="space-y-4">
              {complianceItems.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{item.requirement}</h4>
                      <p className="text-xs text-gray-500 mb-2">Department: {item.department} • Due: {item.dueDate}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-600">
                        <span>{item.completion} of {item.total} completed</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {item.status === 'completed' ? (
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      ) : item.status === 'in-progress' ? (
                        <Clock className="w-5 h-5 text-blue-600" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-orange-600" />
                      )}
                      <span className={`px-2 py-1 text-xs font-medium rounded ${
                        item.status === 'completed' ? 'bg-green-100 text-green-700' :
                        item.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                    <div className="h-2 rounded-full bg-orange-500" style={{ width: `${(item.completion / item.total) * 100}%` }} />
                  </div>
                  <button
                    onClick={() => alert(`Managing compliance for ${item.requirement}\n\nIn production, this would show compliance details.`)}
                    className="w-full px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
                  >
                    Manage Compliance
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Training Requirements Tab */}
          {activeTab === 'training' && (
            <div className="space-y-4">
              {trainingRequirements.map((training) => (
                <div key={training.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="text-sm sm:text-base font-semibold text-gray-900">{training.name}</h4>
                        {training.required && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-red-100 text-red-700 rounded">Required</span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mb-2">{training.category} • Frequency: {training.frequency}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-600">
                        <span>{training.completed} of {training.employees} completed</span>
                      </div>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      training.completed === training.employees ? 'bg-green-100 text-green-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {Math.round((training.completed / training.employees) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                    <div className="h-2 rounded-full bg-orange-500" style={{ width: `${(training.completed / training.employees) * 100}%` }} />
                  </div>
                  <button
                    onClick={() => alert(`Viewing training details for ${training.name}\n\nIn production, this would show training details.`)}
                    className="w-full px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
