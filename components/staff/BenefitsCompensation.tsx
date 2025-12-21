'use client'

import { useState } from 'react'
import { DollarSign, Heart, Shield, Calendar, FileText, Download, Building2, Users } from 'lucide-react'

export default function BenefitsCompensation() {
  const [activeTab, setActiveTab] = useState<'overview' | 'paystubs' | 'benefits' | 'time-off'>('overview')

  const compensation = {
    baseSalary: 75000,
    bonus: 5000,
    total: 80000,
    payFrequency: 'Monthly',
    nextPayDate: '2024-12-31'
  }

  const benefits = [
    { id: 1, name: 'Health Insurance', type: 'Medical', status: 'Active', coverage: 'Family', provider: 'BlueCross BlueShield' },
    { id: 2, name: 'Dental Insurance', type: 'Dental', status: 'Active', coverage: 'Family', provider: 'Delta Dental' },
    { id: 3, name: 'Vision Insurance', type: 'Vision', status: 'Active', coverage: 'Individual', provider: 'VSP' },
    { id: 4, name: '401(k) Retirement Plan', type: 'Retirement', status: 'Active', coverage: 'Individual', provider: 'Fidelity' },
    { id: 5, name: 'Life Insurance', type: 'Life', status: 'Active', coverage: 'Family', provider: 'MetLife' },
  ]

  const timeOffBalance = {
    vacation: { total: 20, used: 8, remaining: 12 },
    sick: { total: 10, used: 2, remaining: 8 },
    personal: { total: 5, used: 1, remaining: 4 },
    total: { total: 35, used: 11, remaining: 24 }
  }

  const paystubs = [
    { id: 1, period: 'November 2024', grossPay: 6666.67, netPay: 5200.00, date: '2024-11-30' },
    { id: 2, period: 'October 2024', grossPay: 6666.67, netPay: 5200.00, date: '2024-10-31' },
    { id: 3, period: 'September 2024', grossPay: 6666.67, netPay: 5200.00, date: '2024-09-30' },
  ]

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Benefits & Compensation</h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">View your compensation, benefits, and time-off balance</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex border-b border-gray-200 overflow-x-auto scrollbar-hide">
          {[
            { id: 'overview' as const, label: 'Overview', icon: DollarSign },
            { id: 'paystubs' as const, label: 'Pay Stubs', icon: FileText },
            { id: 'benefits' as const, label: 'Benefits', icon: Heart },
            { id: 'time-off' as const, label: 'Time Off', icon: Calendar },
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
            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 sm:p-6 border border-green-200">
                  <div className="flex items-center justify-between mb-2">
                    <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </div>
                  <p className="text-xs sm:text-sm text-green-700 font-medium mb-1">Annual Salary</p>
                  <p className="text-xl sm:text-2xl font-bold text-green-900">${compensation.baseSalary.toLocaleString()}</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 sm:p-6 border border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <p className="text-xs sm:text-sm text-blue-700 font-medium mb-1">Total Compensation</p>
                  <p className="text-xl sm:text-2xl font-bold text-blue-900">${compensation.total.toLocaleString()}</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 sm:p-6 border border-purple-200">
                  <div className="flex items-center justify-between mb-2">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                  </div>
                  <p className="text-xs sm:text-sm text-purple-700 font-medium mb-1">Next Pay Date</p>
                  <p className="text-lg sm:text-xl font-bold text-purple-900">{compensation.nextPayDate}</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Quick Summary</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Pay Frequency</p>
                    <p className="text-sm sm:text-base font-semibold text-gray-900">{compensation.payFrequency}</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Active Benefits</p>
                    <p className="text-sm sm:text-base font-semibold text-gray-900">{benefits.length} Plans</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Time Off Remaining</p>
                    <p className="text-sm sm:text-base font-semibold text-gray-900">{timeOffBalance.total.remaining} days</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Retirement Contribution</p>
                    <p className="text-sm sm:text-base font-semibold text-gray-900">6% matched</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Pay Stubs Tab */}
          {activeTab === 'paystubs' && (
            <div className="space-y-4">
              <div className="space-y-3 sm:space-y-4">
                {paystubs.map((stub) => (
                  <div key={stub.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{stub.period}</h4>
                        <p className="text-xs text-gray-500">Pay Date: {stub.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-600">Net Pay</p>
                        <p className="text-lg font-bold text-green-600">${stub.netPay.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                      <span>Gross Pay: ${stub.grossPay.toLocaleString()}</span>
                      <span>Deductions: ${(stub.grossPay - stub.netPay).toLocaleString()}</span>
                    </div>
                    <button
                      onClick={() => alert(`Downloading pay stub for ${stub.period}\n\nIn production, this would download your pay stub PDF.`)}
                      className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation flex items-center justify-center space-x-2"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Pay Stub</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <Shield className="w-5 h-5 text-blue-600" />
                        <h4 className="text-sm sm:text-base font-semibold text-gray-900">{benefit.name}</h4>
                      </div>
                      <p className="text-xs text-gray-500 mb-1">Provider: {benefit.provider}</p>
                      <p className="text-xs text-gray-500">Coverage: {benefit.coverage}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      benefit.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {benefit.status}
                    </span>
                  </div>
                  <button
                    onClick={() => alert(`Viewing ${benefit.name} details\n\nIn production, this would show detailed benefit information.`)}
                    className="text-xs sm:text-sm text-orange-600 hover:text-orange-700 font-medium touch-manipulation"
                  >
                    View Details →
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Time Off Tab */}
          {activeTab === 'time-off' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
                  <p className="text-xs sm:text-sm text-blue-700 font-medium mb-2">Vacation Days</p>
                  <p className="text-2xl font-bold text-blue-900 mb-1">{timeOffBalance.vacation.remaining}</p>
                  <p className="text-xs text-blue-600">of {timeOffBalance.vacation.total} days</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border border-green-200">
                  <p className="text-xs sm:text-sm text-green-700 font-medium mb-2">Sick Days</p>
                  <p className="text-2xl font-bold text-green-900 mb-1">{timeOffBalance.sick.remaining}</p>
                  <p className="text-xs text-green-600">of {timeOffBalance.sick.total} days</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200">
                  <p className="text-xs sm:text-sm text-purple-700 font-medium mb-2">Personal Days</p>
                  <p className="text-2xl font-bold text-purple-900 mb-1">{timeOffBalance.personal.remaining}</p>
                  <p className="text-xs text-purple-600">of {timeOffBalance.personal.total} days</p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 border border-orange-200">
                  <p className="text-xs sm:text-sm text-orange-700 font-medium mb-2">Total Remaining</p>
                  <p className="text-2xl font-bold text-orange-900 mb-1">{timeOffBalance.total.remaining}</p>
                  <p className="text-xs text-orange-600">of {timeOffBalance.total.total} days</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Request Time Off</h4>
                <button
                  onClick={() => alert('Requesting Time Off\n\nIn production, this would open the leave request form.')}
                  className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-sm font-medium transition-colors touch-manipulation"
                >
                  Request Time Off
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

