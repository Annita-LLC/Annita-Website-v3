'use client'

import { useState } from 'react'
import { Heart, Users, Calendar, FileText, CheckCircle2, Plus, Search, Download, Edit, Trash2 } from 'lucide-react'

interface BenefitsAdministrationProps {
  userRole: string
}

export default function BenefitsAdministration({ userRole }: BenefitsAdministrationProps) {
  const [activeTab, setActiveTab] = useState<'plans' | 'enrollment' | 'analytics'>('plans')
  const [searchTerm, setSearchTerm] = useState('')

  const benefitPlans = [
    { id: 1, name: 'Health Insurance - Basic', type: 'Medical', provider: 'BlueCross BlueShield', cost: 500, employeeContribution: 200, status: 'active', enrolled: 15 },
    { id: 2, name: 'Health Insurance - Premium', type: 'Medical', provider: 'BlueCross BlueShield', cost: 800, employeeContribution: 320, status: 'active', enrolled: 10 },
    { id: 3, name: 'Dental Insurance', type: 'Dental', provider: 'Delta Dental', cost: 150, employeeContribution: 50, status: 'active', enrolled: 20 },
    { id: 4, name: 'Vision Insurance', type: 'Vision', provider: 'VSP', cost: 100, employeeContribution: 30, status: 'active', enrolled: 18 },
    { id: 5, name: '401(k) Retirement Plan', type: 'Retirement', provider: 'Fidelity', cost: 0, employeeContribution: 0, status: 'active', enrolled: 25 },
  ]

  const enrollmentPeriods = [
    { id: 1, name: 'Open Enrollment 2025', startDate: '2025-01-01', endDate: '2025-01-31', status: 'upcoming', participants: 0 },
    { id: 2, name: 'Open Enrollment 2024', startDate: '2024-11-01', endDate: '2024-11-30', status: 'completed', participants: 25 },
  ]

  const enrollmentStats = {
    totalEmployees: 25,
    enrolled: 23,
    enrollmentRate: 92,
    totalCost: 12500,
    companyContribution: 8750
  }

  if (userRole !== 'hr' && userRole !== 'ceo') {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 sm:p-12 text-center">
        <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Access Denied</h3>
        <p className="text-sm sm:text-base text-gray-600">You need HR or CEO access to manage benefits.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Benefits Administration</h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">Manage employee benefits and enrollment</p>
        </div>
        <button
          onClick={() => alert('Create New Benefit Plan\n\nIn production, this would open a form to create a new benefit plan.')}
          className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation flex items-center justify-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>New Plan</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-200">
          <p className="text-xs text-gray-600 mb-1">Total Employees</p>
          <p className="text-xl sm:text-2xl font-bold text-gray-900">{enrollmentStats.totalEmployees}</p>
        </div>
        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-200">
          <p className="text-xs text-gray-600 mb-1">Enrolled</p>
          <p className="text-xl sm:text-2xl font-bold text-green-600">{enrollmentStats.enrolled}</p>
        </div>
        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-200">
          <p className="text-xs text-gray-600 mb-1">Enrollment Rate</p>
          <p className="text-xl sm:text-2xl font-bold text-blue-600">{enrollmentStats.enrollmentRate}%</p>
        </div>
        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-200">
          <p className="text-xs text-gray-600 mb-1">Monthly Cost</p>
          <p className="text-xl sm:text-2xl font-bold text-orange-600">${(enrollmentStats.totalCost / 1000).toFixed(1)}K</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex border-b border-gray-200 overflow-x-auto scrollbar-hide">
          {[
            { id: 'plans' as const, label: 'Benefit Plans', icon: Heart },
            { id: 'enrollment' as const, label: 'Enrollment Periods', icon: Calendar },
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
          {/* Benefit Plans Tab */}
          {activeTab === 'plans' && (
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Search benefit plans..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-3 sm:space-y-4">
                {benefitPlans.map((plan) => (
                  <div key={plan.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{plan.name}</h4>
                        <p className="text-xs text-gray-500 mb-2">{plan.type} • Provider: {plan.provider}</p>
                        <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-600">
                          <span>Total Cost: ${plan.cost}/month</span>
                          <span>Employee Pays: ${plan.employeeContribution}/month</span>
                          <span>Enrolled: {plan.enrolled} employees</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded ${
                          plan.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                        }`}>
                          {plan.status}
                        </span>
                        <button
                          onClick={() => alert(`Editing ${plan.name}\n\nIn production, this would open edit form.`)}
                          className="p-1.5 text-orange-600 hover:bg-orange-50 rounded touch-manipulation"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => alert(`Viewing enrollment for ${plan.name}\n\nIn production, this would show enrolled employees.`)}
                        className="flex-1 px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
                      >
                        View Enrollments
                      </button>
                      <button
                        onClick={() => alert(`Exporting data for ${plan.name}\n\nIn production, this would export enrollment data.`)}
                        className="px-3 sm:px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-xs sm:text-sm font-medium transition-colors touch-manipulation flex items-center space-x-1"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Export</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Enrollment Periods Tab */}
          {activeTab === 'enrollment' && (
            <div className="space-y-4">
              {enrollmentPeriods.map((period) => (
                <div key={period.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{period.name}</h4>
                      <p className="text-xs text-gray-500 mb-2">{period.startDate} to {period.endDate}</p>
                      <p className="text-xs text-gray-600">Participants: {period.participants} employees</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      period.status === 'completed' ? 'bg-green-100 text-green-700' :
                      period.status === 'active' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {period.status}
                    </span>
                  </div>
                  <button
                    onClick={() => alert(`Managing ${period.name}\n\nIn production, this would show enrollment management.`)}
                    className="w-full px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
                  >
                    Manage Enrollment
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Enrollment by Plan</h4>
                  <div className="space-y-2">
                    {benefitPlans.slice(0, 3).map((plan) => (
                      <div key={plan.id} className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm text-gray-700">{plan.name}</span>
                        <span className="text-xs sm:text-sm font-semibold text-gray-900">{plan.enrolled}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Cost Breakdown</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm text-gray-700">Company Contribution</span>
                      <span className="text-xs sm:text-sm font-semibold text-green-600">${(enrollmentStats.companyContribution / 1000).toFixed(1)}K</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm text-gray-700">Employee Contribution</span>
                      <span className="text-xs sm:text-sm font-semibold text-blue-600">${((enrollmentStats.totalCost - enrollmentStats.companyContribution) / 1000).toFixed(1)}K</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
