'use client'

import { useState } from 'react'
import { Crown, TrendingUp, DollarSign, Users, Target, AlertTriangle, CheckCircle2, Clock, BarChart3, FileText, Settings, Shield, Building2, Globe, Award, Zap } from 'lucide-react'

export default function CEODashboard() {
  const [selectedMetric, setSelectedMetric] = useState<'overview' | 'financial' | 'operations' | 'hr'>('overview')

  const companyMetrics = {
    totalRevenue: 1250000,
    monthlyGrowth: 12.5,
    activeEmployees: 25,
    employeeSatisfaction: 92,
    projectsActive: 8,
    projectsCompleted: 15,
    clientRetention: 94,
    marketShare: 18.5
  }

  const financialOverview = {
    revenue: { current: 1250000, target: 1500000, growth: 12.5 },
    expenses: { current: 850000, budget: 900000, variance: -5.6 },
    profit: { current: 400000, margin: 32 },
    cashFlow: { current: 350000, status: 'positive' }
  }

  const operationalMetrics = {
    productivity: 88,
    efficiency: 92,
    quality: 95,
    deliveryTime: 4.2,
    customerSatisfaction: 4.6
  }

  const hrMetrics = {
    totalEmployees: 25,
    newHires: 3,
    turnover: 4.2,
    avgTenure: 2.5,
    trainingHours: 120,
    openPositions: 5
  }

  const criticalAlerts = [
    { id: 1, type: 'warning', title: 'Budget Overrun Risk', description: 'Marketing department approaching budget limit', priority: 'high' },
    { id: 2, type: 'info', title: 'New Client Acquisition', description: '3 new enterprise clients signed this week', priority: 'medium' },
    { id: 3, type: 'success', title: 'Project Milestone', description: 'Q4 Product Launch completed ahead of schedule', priority: 'low' },
  ]

  const strategicInitiatives = [
    { id: 1, name: 'Market Expansion', progress: 75, status: 'on-track', deadline: '2025-03-31' },
    { id: 2, name: 'Digital Transformation', progress: 60, status: 'on-track', deadline: '2025-06-30' },
    { id: 3, name: 'Team Scaling', progress: 45, status: 'at-risk', deadline: '2025-04-15' },
  ]

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* CEO Header */}
      <div className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 rounded-xl p-4 sm:p-6 text-white shadow-lg">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Crown className="w-6 h-6 sm:w-8 sm:h-8" />
              <h2 className="text-xl sm:text-2xl font-bold">CEO Executive Dashboard</h2>
            </div>
            <p className="text-sm sm:text-base text-orange-100">Complete company overview and strategic insights</p>
          </div>
          <div className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm font-medium">Full Access</span>
          </div>
        </div>
      </div>

      {/* Metric Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex border-b border-gray-200 overflow-x-auto scrollbar-hide">
          {[
            { id: 'overview' as const, label: 'Overview', icon: BarChart3 },
            { id: 'financial' as const, label: 'Financial', icon: DollarSign },
            { id: 'operations' as const, label: 'Operations', icon: Target },
            { id: 'hr' as const, label: 'HR & People', icon: Users },
          ].map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedMetric(tab.id)}
                className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap touch-manipulation ${
                  selectedMetric === tab.id
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
          {/* Overview Tab */}
          {selectedMetric === 'overview' && (
            <div className="space-y-4 sm:space-y-6">
              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3 sm:p-4 border border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-xs sm:text-sm text-blue-700 font-medium mb-1">Revenue</p>
                  <p className="text-lg sm:text-xl font-bold text-blue-900">${(companyMetrics.totalRevenue / 1000).toFixed(0)}K</p>
                  <p className="text-xs text-green-600 mt-1">+{companyMetrics.monthlyGrowth}%</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3 sm:p-4 border border-green-200">
                  <div className="flex items-center justify-between mb-2">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-xs sm:text-sm text-green-700 font-medium mb-1">Employees</p>
                  <p className="text-lg sm:text-xl font-bold text-green-900">{companyMetrics.activeEmployees}</p>
                  <p className="text-xs text-green-600 mt-1">{companyMetrics.employeeSatisfaction}% satisfied</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-3 sm:p-4 border border-purple-200">
                  <div className="flex items-center justify-between mb-2">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                    <Zap className="w-4 h-4 text-purple-600" />
                  </div>
                  <p className="text-xs sm:text-sm text-purple-700 font-medium mb-1">Projects</p>
                  <p className="text-lg sm:text-xl font-bold text-purple-900">{companyMetrics.projectsActive}</p>
                  <p className="text-xs text-purple-600 mt-1">{companyMetrics.projectsCompleted} completed</p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-3 sm:p-4 border border-orange-200">
                  <div className="flex items-center justify-between mb-2">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                    <TrendingUp className="w-4 h-4 text-orange-600" />
                  </div>
                  <p className="text-xs sm:text-sm text-orange-700 font-medium mb-1">Market Share</p>
                  <p className="text-lg sm:text-xl font-bold text-orange-900">{companyMetrics.marketShare}%</p>
                  <p className="text-xs text-orange-600 mt-1">{companyMetrics.clientRetention}% retention</p>
                </div>
              </div>

              {/* Critical Alerts */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-orange-600" />
                  Critical Alerts & Updates
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {criticalAlerts.map((alert) => (
                    <div
                      key={alert.id}
                      className={`p-3 sm:p-4 rounded-lg border ${
                        alert.type === 'warning'
                          ? 'bg-yellow-50 border-yellow-200'
                          : alert.type === 'info'
                          ? 'bg-blue-50 border-blue-200'
                          : 'bg-green-50 border-green-200'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-sm sm:text-base font-semibold text-gray-900">{alert.title}</p>
                          <p className="text-xs sm:text-sm text-gray-600 mt-1">{alert.description}</p>
                        </div>
                        <span className={`px-2 py-1 text-xs font-medium rounded ${
                          alert.priority === 'high'
                            ? 'bg-red-100 text-red-700'
                            : alert.priority === 'medium'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-green-100 text-green-700'
                        }`}>
                          {alert.priority}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic Initiatives */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-orange-600" />
                  Strategic Initiatives
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {strategicInitiatives.map((initiative) => (
                    <div key={initiative.id} className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm sm:text-base font-semibold text-gray-900">{initiative.name}</h4>
                        <span className={`px-2 py-1 text-xs font-medium rounded ${
                          initiative.status === 'on-track'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {initiative.status}
                        </span>
                      </div>
                      <div className="mb-2">
                        <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                          <span>Progress</span>
                          <span>{initiative.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              initiative.status === 'on-track' ? 'bg-green-500' : 'bg-yellow-500'
                            }`}
                            style={{ width: `${initiative.progress}%` }}
                          />
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">Deadline: {initiative.deadline}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Financial Tab */}
          {selectedMetric === 'financial' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 sm:p-6 border border-green-200">
                  <h4 className="text-sm font-semibold text-green-700 mb-3">Revenue</h4>
                  <p className="text-2xl sm:text-3xl font-bold text-green-900 mb-2">
                    ${(financialOverview.revenue.current / 1000).toFixed(0)}K
                  </p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-green-600">Target: ${(financialOverview.revenue.target / 1000).toFixed(0)}K</span>
                    <span className="text-green-700 font-medium">+{financialOverview.revenue.growth}%</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 sm:p-6 border border-blue-200">
                  <h4 className="text-sm font-semibold text-blue-700 mb-3">Profit</h4>
                  <p className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">
                    ${(financialOverview.profit.current / 1000).toFixed(0)}K
                  </p>
                  <p className="text-xs text-blue-600">Margin: {financialOverview.profit.margin}%</p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 sm:p-6 border border-orange-200">
                  <h4 className="text-sm font-semibold text-orange-700 mb-3">Expenses</h4>
                  <p className="text-2xl sm:text-3xl font-bold text-orange-900 mb-2">
                    ${(financialOverview.expenses.current / 1000).toFixed(0)}K
                  </p>
                  <p className="text-xs text-green-600">Under budget by {Math.abs(financialOverview.expenses.variance)}%</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 sm:p-6 border border-purple-200">
                  <h4 className="text-sm font-semibold text-purple-700 mb-3">Cash Flow</h4>
                  <p className="text-2xl sm:text-3xl font-bold text-purple-900 mb-2">
                    ${(financialOverview.cashFlow.current / 1000).toFixed(0)}K
                  </p>
                  <p className="text-xs text-green-600 capitalize">{financialOverview.cashFlow.status}</p>
                </div>
              </div>
            </div>
          )}

          {/* Operations Tab */}
          {selectedMetric === 'operations' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Productivity</span>
                    <Target className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{operationalMetrics.productivity}%</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Efficiency</span>
                    <Zap className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{operationalMetrics.efficiency}%</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Quality Score</span>
                    <Award className="w-5 h-5 text-purple-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{operationalMetrics.quality}%</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Avg Delivery Time</span>
                    <Clock className="w-5 h-5 text-orange-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{operationalMetrics.deliveryTime} days</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Customer Satisfaction</span>
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{operationalMetrics.customerSatisfaction}/5.0</p>
                </div>
              </div>
            </div>
          )}

          {/* HR Tab */}
          {selectedMetric === 'hr' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">Total Employees</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900">{hrMetrics.totalEmployees}</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">New Hires</p>
                  <p className="text-xl sm:text-2xl font-bold text-green-600">+{hrMetrics.newHires}</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">Turnover Rate</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900">{hrMetrics.turnover}%</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">Avg Tenure</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900">{hrMetrics.avgTenure} yrs</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">Training Hours</p>
                  <p className="text-xl sm:text-2xl font-bold text-blue-600">{hrMetrics.trainingHours}</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">Open Positions</p>
                  <p className="text-xl sm:text-2xl font-bold text-orange-600">{hrMetrics.openPositions}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

