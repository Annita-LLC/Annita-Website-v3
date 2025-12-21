'use client'

import { useState } from 'react'
import { DollarSign, Calendar, Users, FileText, Download, CheckCircle2, Clock, AlertCircle, Plus } from 'lucide-react'

interface PayrollManagementProps {
  userRole: string
}

export default function PayrollManagement({ userRole }: PayrollManagementProps) {
  const [activeTab, setActiveTab] = useState<'processing' | 'salaries' | 'reports'>('processing')

  const payrollRuns = [
    { id: 1, period: 'December 2024', payDate: '2024-12-31', status: 'pending', employees: 25, totalAmount: 125000, processed: false },
    { id: 2, period: 'November 2024', payDate: '2024-11-30', status: 'completed', employees: 25, totalAmount: 125000, processed: true },
    { id: 3, period: 'October 2024', payDate: '2024-10-31', status: 'completed', employees: 24, totalAmount: 120000, processed: true },
  ]

  const employees = [
    { id: 1, name: 'John Doe', department: 'IT & Technology', baseSalary: 75000, deductions: 500, netPay: 5750, status: 'active' },
    { id: 2, name: 'Jane Smith', department: 'IT & Technology', baseSalary: 95000, deductions: 600, netPay: 7316, status: 'active' },
    { id: 3, name: 'Sarah Johnson', department: 'Human Resources', baseSalary: 65000, deductions: 450, netPay: 4958, status: 'active' },
  ]

  const payrollStats = {
    totalEmployees: 25,
    activeEmployees: 25,
    totalMonthlyPayroll: 125000,
    averageSalary: 60000,
    pendingPayments: 1
  }

  if (userRole !== 'hr' && userRole !== 'ceo') {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 sm:p-12 text-center">
        <DollarSign className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Access Denied</h3>
        <p className="text-sm sm:text-base text-gray-600">You need HR or CEO access to manage payroll.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Payroll Management</h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">Process payroll and manage salaries</p>
        </div>
        <button
          onClick={() => alert('Process New Payroll\n\nIn production, this would start a new payroll run.')}
          className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation flex items-center justify-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Process Payroll</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-200">
          <p className="text-xs text-gray-600 mb-1">Total Employees</p>
          <p className="text-xl sm:text-2xl font-bold text-gray-900">{payrollStats.totalEmployees}</p>
        </div>
        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-200">
          <p className="text-xs text-gray-600 mb-1">Monthly Payroll</p>
          <p className="text-xl sm:text-2xl font-bold text-blue-600">${(payrollStats.totalMonthlyPayroll / 1000).toFixed(0)}K</p>
        </div>
        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-200">
          <p className="text-xs text-gray-600 mb-1">Avg Salary</p>
          <p className="text-xl sm:text-2xl font-bold text-green-600">${(payrollStats.averageSalary / 1000).toFixed(0)}K</p>
        </div>
        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-200">
          <p className="text-xs text-gray-600 mb-1">Pending</p>
          <p className="text-xl sm:text-2xl font-bold text-orange-600">{payrollStats.pendingPayments}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex border-b border-gray-200 overflow-x-auto scrollbar-hide">
          {[
            { id: 'processing' as const, label: 'Payroll Runs', icon: Calendar },
            { id: 'salaries' as const, label: 'Salaries', icon: DollarSign },
            { id: 'reports' as const, label: 'Reports', icon: FileText },
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
          {/* Payroll Runs Tab */}
          {activeTab === 'processing' && (
            <div className="space-y-4">
              {payrollRuns.map((run) => (
                <div key={run.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{run.period}</h4>
                      <p className="text-xs text-gray-500 mb-2">Pay Date: {run.payDate} • {run.employees} employees</p>
                      <p className="text-xs sm:text-sm font-semibold text-gray-900">Total Amount: ${(run.totalAmount / 1000).toFixed(0)}K</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {run.status === 'completed' ? (
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      ) : run.status === 'pending' ? (
                        <Clock className="w-5 h-5 text-orange-600" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-600" />
                      )}
                      <span className={`px-2 py-1 text-xs font-medium rounded ${
                        run.status === 'completed' ? 'bg-green-100 text-green-700' :
                        run.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {run.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {!run.processed && (
                      <button
                        onClick={() => alert(`Processing payroll for ${run.period}\n\nIn production, this would process the payroll.`)}
                        className="flex-1 px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
                      >
                        Process Payroll
                      </button>
                    )}
                    <button
                      onClick={() => alert(`Viewing payroll details for ${run.period}\n\nIn production, this would show detailed payroll information.`)}
                      className="flex-1 px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => alert(`Exporting payroll report for ${run.period}\n\nIn production, this would export payroll data.`)}
                      className="px-3 sm:px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-xs sm:text-sm font-medium transition-colors touch-manipulation flex items-center space-x-1"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Export</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Salaries Tab */}
          {activeTab === 'salaries' && (
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500">Employee</th>
                      <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 hidden sm:table-cell">Department</th>
                      <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500">Base Salary</th>
                      <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 hidden md:table-cell">Deductions</th>
                      <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500">Net Pay</th>
                      <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {employees.map((emp) => (
                      <tr key={emp.id} className="hover:bg-gray-50">
                        <td className="px-3 sm:px-4 py-2 sm:py-3 text-sm font-medium text-gray-900">
                          <div className="sm:hidden">
                            <div className="font-semibold">{emp.name}</div>
                            <div className="text-xs text-gray-500">{emp.department}</div>
                          </div>
                          <span className="hidden sm:inline">{emp.name}</span>
                        </td>
                        <td className="px-3 sm:px-4 py-2 sm:py-3 text-sm text-gray-600 hidden sm:table-cell">{emp.department}</td>
                        <td className="px-3 sm:px-4 py-2 sm:py-3 text-sm text-gray-600">${(emp.baseSalary / 1000).toFixed(0)}K</td>
                        <td className="px-3 sm:px-4 py-2 sm:py-3 text-sm text-gray-600 hidden md:table-cell">${emp.deductions}</td>
                        <td className="px-3 sm:px-4 py-2 sm:py-3 text-sm font-semibold text-green-600">${emp.netPay.toLocaleString()}</td>
                        <td className="px-3 sm:px-4 py-2 sm:py-3">
                          <button
                            onClick={() => alert(`Editing salary for ${emp.name}\n\nIn production, this would open salary edit form.`)}
                            className="text-xs sm:text-sm text-orange-600 hover:text-orange-700 font-medium touch-manipulation"
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Reports Tab */}
          {activeTab === 'reports' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => alert('Generating Payroll Summary Report\n\nIn production, this would generate and download the report.')}>
                  <FileText className="w-8 h-8 text-blue-600 mb-2" />
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">Payroll Summary</h4>
                  <p className="text-xs text-gray-600">Monthly payroll summary report</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => alert('Generating Tax Report\n\nIn production, this would generate tax reports.')}>
                  <FileText className="w-8 h-8 text-green-600 mb-2" />
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">Tax Reports</h4>
                  <p className="text-xs text-gray-600">Tax deduction and filing reports</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => alert('Generating Salary Analysis\n\nIn production, this would generate salary analysis.')}>
                  <FileText className="w-8 h-8 text-purple-600 mb-2" />
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">Salary Analysis</h4>
                  <p className="text-xs text-gray-600">Salary trends and analysis</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => alert('Generating Employee Cost Report\n\nIn production, this would generate cost reports.')}>
                  <FileText className="w-8 h-8 text-orange-600 mb-2" />
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">Employee Costs</h4>
                  <p className="text-xs text-gray-600">Total employee cost breakdown</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
