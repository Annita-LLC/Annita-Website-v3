'use client'

import { useState } from 'react'
import { DollarSign, TrendingUp, TrendingDown, AlertCircle, PieChart, FileText, CheckCircle2 } from 'lucide-react'

interface BudgetManagementProps {
  userRole: string
}

export default function BudgetManagement({ userRole }: BudgetManagementProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'expenses' | 'approvals'>('overview')

  const budgetOverview = {
    totalBudget: 500000,
    spent: 385000,
    remaining: 115000,
    utilization: 77,
    monthlyAverage: 96250
  }

  const expenses = [
    { id: 1, category: 'Salaries', budgeted: 300000, spent: 300000, remaining: 0, status: 'on-budget' },
    { id: 2, category: 'Marketing', budgeted: 100000, spent: 65000, remaining: 35000, status: 'under-budget' },
    { id: 3, category: 'Operations', budgeted: 50000, spent: 12000, remaining: 38000, status: 'under-budget' },
    { id: 4, category: 'Technology', budgeted: 30000, spent: 8000, remaining: 22000, status: 'under-budget' },
    { id: 5, category: 'Travel', budgeted: 20000, spent: 0, remaining: 20000, status: 'under-budget' },
  ]

  const pendingApprovals = [
    { id: 1, requester: 'John Doe', amount: 5000, category: 'Marketing', description: 'Q4 Campaign Materials', date: '2024-12-18' },
    { id: 2, requester: 'Sarah Johnson', amount: 2500, category: 'Technology', description: 'Software Licenses', date: '2024-12-17' },
  ]

  if (userRole !== 'manager' && userRole !== 'ceo' && userRole !== 'hr') {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 sm:p-12 text-center">
        <DollarSign className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Access Denied</h3>
        <p className="text-sm sm:text-base text-gray-600">You need manager or higher access to view budget management.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Budget Management</h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">Track and manage department budget</p>
        </div>
      </div>

      {/* Budget Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 sm:p-6 border border-blue-200">
          <div className="flex items-center justify-between mb-2">
            <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            <TrendingUp className="w-4 h-4 text-green-600" />
          </div>
          <p className="text-xs sm:text-sm text-blue-700 font-medium mb-1">Total Budget</p>
          <p className="text-xl sm:text-2xl font-bold text-blue-900">${(budgetOverview.totalBudget / 1000).toFixed(0)}K</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 sm:p-6 border border-green-200">
          <div className="flex items-center justify-between mb-2">
            <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
          </div>
          <p className="text-xs sm:text-sm text-green-700 font-medium mb-1">Remaining</p>
          <p className="text-xl sm:text-2xl font-bold text-green-900">${(budgetOverview.remaining / 1000).toFixed(0)}K</p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 sm:p-6 border border-orange-200">
          <div className="flex items-center justify-between mb-2">
            <PieChart className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
          </div>
          <p className="text-xs sm:text-sm text-orange-700 font-medium mb-1">Utilization</p>
          <p className="text-xl sm:text-2xl font-bold text-orange-900">{budgetOverview.utilization}%</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 sm:p-6 border border-purple-200">
          <div className="flex items-center justify-between mb-2">
            <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
          </div>
          <p className="text-xs sm:text-sm text-purple-700 font-medium mb-1">Monthly Avg</p>
          <p className="text-xl sm:text-2xl font-bold text-purple-900">${(budgetOverview.monthlyAverage / 1000).toFixed(0)}K</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex border-b border-gray-200 overflow-x-auto scrollbar-hide">
          {[
            { id: 'overview' as const, label: 'Overview', icon: PieChart },
            { id: 'expenses' as const, label: 'Expenses', icon: DollarSign },
            { id: 'approvals' as const, label: 'Approvals', icon: FileText },
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
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Budget Utilization</span>
                  <span className="text-sm font-bold text-gray-900">{budgetOverview.utilization}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${
                      budgetOverview.utilization >= 90 ? 'bg-red-500' :
                      budgetOverview.utilization >= 75 ? 'bg-yellow-500' :
                      'bg-green-500'
                    }`}
                    style={{ width: `${budgetOverview.utilization}%` }}
                  />
                </div>
              </div>

              <div className="space-y-3">
                {expenses.map((expense) => (
                  <div key={expense.id} className="border border-gray-200 rounded-lg p-3 sm:p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900">{expense.category}</h4>
                      <span className={`px-2 py-1 text-xs font-medium rounded ${
                        expense.status === 'on-budget' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {expense.status === 'on-budget' ? 'On Budget' : 'Under Budget'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 mb-2">
                      <span>Spent: ${(expense.spent / 1000).toFixed(0)}K</span>
                      <span>Remaining: ${(expense.remaining / 1000).toFixed(0)}K</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-blue-500"
                        style={{ width: `${(expense.spent / expense.budgeted) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Expenses Tab */}
          {activeTab === 'expenses' && (
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500">Category</th>
                      <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500">Budgeted</th>
                      <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500">Spent</th>
                      <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500">Remaining</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {expenses.map((expense) => (
                      <tr key={expense.id} className="hover:bg-gray-50">
                        <td className="px-3 sm:px-4 py-2 sm:py-3 text-sm font-medium text-gray-900">{expense.category}</td>
                        <td className="px-3 sm:px-4 py-2 sm:py-3 text-sm text-gray-600">${(expense.budgeted / 1000).toFixed(0)}K</td>
                        <td className="px-3 sm:px-4 py-2 sm:py-3 text-sm text-gray-600">${(expense.spent / 1000).toFixed(0)}K</td>
                        <td className="px-3 sm:px-4 py-2 sm:py-3 text-sm text-gray-600">${(expense.remaining / 1000).toFixed(0)}K</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Approvals Tab */}
          {activeTab === 'approvals' && (
            <div className="space-y-4">
              {pendingApprovals.length > 0 ? (
                pendingApprovals.map((approval) => (
                  <div key={approval.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{approval.requester}</h4>
                        <p className="text-xs sm:text-sm text-gray-600 mb-1">{approval.description}</p>
                        <p className="text-xs text-gray-500">Category: {approval.category} • Date: {approval.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg sm:text-xl font-bold text-orange-600">${approval.amount.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => alert(`Approving expense request from ${approval.requester}\n\nIn production, this would approve the request.`)}
                        className="flex-1 px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => alert(`Rejecting expense request from ${approval.requester}\n\nIn production, this would reject the request.`)}
                        className="flex-1 px-3 sm:px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm text-gray-600">No pending approvals</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

