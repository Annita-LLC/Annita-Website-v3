'use client'

import { useState } from 'react'
import { Receipt, Plus, CheckCircle2, Clock, AlertCircle, DollarSign, Search, Download, FileText } from 'lucide-react'

export default function ExpenseManagement() {
  const [activeTab, setActiveTab] = useState<'submit' | 'pending' | 'approved' | 'rejected'>('submit')
  const [showForm, setShowForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const [expenseForm, setExpenseForm] = useState({
    category: '',
    amount: '',
    date: '',
    description: '',
    receipt: null as File | null
  })

  const pendingExpenses = [
    { id: 1, category: 'Travel', amount: 250, date: '2024-12-15', description: 'Flight to Accra', status: 'pending', submittedDate: '2024-12-16' },
    { id: 2, category: 'Meals', amount: 45, date: '2024-12-14', description: 'Client lunch meeting', status: 'pending', submittedDate: '2024-12-15' },
  ]

  const approvedExpenses = [
    { id: 3, category: 'Office Supplies', amount: 120, date: '2024-12-10', description: 'Printer paper and ink', status: 'approved', approvedDate: '2024-12-12', reimbursement: 120 },
    { id: 4, category: 'Software', amount: 299, date: '2024-12-05', description: 'Annual software license', status: 'approved', approvedDate: '2024-12-08', reimbursement: 299 },
  ]

  const rejectedExpenses = [
    { id: 5, category: 'Entertainment', amount: 150, date: '2024-12-01', description: 'Team dinner', status: 'rejected', rejectedDate: '2024-12-03', reason: 'Not within policy guidelines' },
  ]

  const categories = ['Travel', 'Meals', 'Office Supplies', 'Software', 'Training', 'Equipment', 'Other']

  const handleSubmit = () => {
    if (!expenseForm.category || !expenseForm.amount || !expenseForm.date || !expenseForm.description) {
      alert('Please fill in all required fields')
      return
    }
    alert(`Expense submitted successfully!\n\nCategory: ${expenseForm.category}\nAmount: $${expenseForm.amount}\n\nIn production, this would submit the expense for approval.`)
    setExpenseForm({ category: '', amount: '', date: '', description: '', receipt: null })
    setShowForm(false)
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Expense Management</h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">Submit and track expenses</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation flex items-center justify-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>New Expense</span>
        </button>
      </div>

      {/* Submit Form */}
      {showForm && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Submit New Expense</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                <select
                  value={expenseForm.category}
                  onChange={(e) => setExpenseForm({ ...expenseForm, category: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select category...</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Amount ($) *</label>
                <input
                  type="number"
                  value={expenseForm.amount}
                  onChange={(e) => setExpenseForm({ ...expenseForm, amount: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="0.00"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date *</label>
              <input
                type="date"
                value={expenseForm.date}
                onChange={(e) => setExpenseForm({ ...expenseForm, date: e.target.value })}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
              <textarea
                value={expenseForm.description}
                onChange={(e) => setExpenseForm({ ...expenseForm, description: e.target.value })}
                rows={3}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                placeholder="Describe the expense..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Receipt (Optional)</label>
              <input
                type="file"
                accept="image/*,.pdf"
                onChange={(e) => setExpenseForm({ ...expenseForm, receipt: e.target.files?.[0] || null })}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleSubmit}
                className="flex-1 px-4 py-2.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-sm font-medium transition-colors touch-manipulation"
              >
                Submit Expense
              </button>
              <button
                onClick={() => {
                  setShowForm(false)
                  setExpenseForm({ category: '', amount: '', date: '', description: '', receipt: null })
                }}
                className="px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm font-medium transition-colors touch-manipulation"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex border-b border-gray-200 overflow-x-auto scrollbar-hide">
          {[
            { id: 'pending' as const, label: 'Pending', icon: Clock, count: pendingExpenses.length },
            { id: 'approved' as const, label: 'Approved', icon: CheckCircle2, count: approvedExpenses.length },
            { id: 'rejected' as const, label: 'Rejected', icon: AlertCircle, count: rejectedExpenses.length },
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
                {tab.count > 0 && (
                  <span className="px-1.5 py-0.5 text-xs font-medium bg-orange-100 text-orange-700 rounded-full">
                    {tab.count}
                  </span>
                )}
              </button>
            )
          })}
        </div>

        <div className="p-4 sm:p-6">
          {/* Pending Tab */}
          {activeTab === 'pending' && (
            <div className="space-y-4">
              {pendingExpenses.length > 0 ? (
                pendingExpenses.map((expense) => (
                  <div key={expense.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <Receipt className="w-5 h-5 text-blue-600" />
                          <h4 className="text-sm sm:text-base font-semibold text-gray-900">{expense.category}</h4>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 mb-1">{expense.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span>Date: {expense.date}</span>
                          <span>Submitted: {expense.submittedDate}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg sm:text-xl font-bold text-gray-900">${expense.amount}</p>
                        <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 rounded">{expense.status}</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <Clock className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm text-gray-600">No pending expenses</p>
                </div>
              )}
            </div>
          )}

          {/* Approved Tab */}
          {activeTab === 'approved' && (
            <div className="space-y-4">
              {approvedExpenses.map((expense) => (
                <div key={expense.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <Receipt className="w-5 h-5 text-green-600" />
                        <h4 className="text-sm sm:text-base font-semibold text-gray-900">{expense.category}</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 mb-1">{expense.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>Date: {expense.date}</span>
                        <span>Approved: {expense.approvedDate}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg sm:text-xl font-bold text-green-600">${expense.reimbursement}</p>
                      <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded">{expense.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Rejected Tab */}
          {activeTab === 'rejected' && (
            <div className="space-y-4">
              {rejectedExpenses.map((expense) => (
                <div key={expense.id} className="border border-red-200 rounded-lg p-4 bg-red-50">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <Receipt className="w-5 h-5 text-red-600" />
                        <h4 className="text-sm sm:text-base font-semibold text-gray-900">{expense.category}</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 mb-1">{expense.description}</p>
                      <p className="text-xs text-red-600 mb-2"><strong>Reason:</strong> {expense.reason}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>Date: {expense.date}</span>
                        <span>Rejected: {expense.rejectedDate}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg sm:text-xl font-bold text-gray-900">${expense.amount}</p>
                      <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-700 rounded">{expense.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
