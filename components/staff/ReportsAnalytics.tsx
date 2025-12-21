'use client'

import { useState } from 'react'
import { BarChart3, TrendingUp, Users, Clock, Download, Calendar, FileText } from 'lucide-react'

interface ReportsAnalyticsProps {
  userRole: string
}

export default function ReportsAnalytics({ userRole }: ReportsAnalyticsProps) {
  const [selectedPeriod, setSelectedPeriod] = useState('week')

  const summaryStats = {
    totalEmployees: 25,
    activeReports: 22,
    totalHours: 880,
    averageHours: 40,
    completionRate: 88
  }

  const departmentStats = [
    { department: 'IT & Technology', employees: 8, avgHours: 42, completion: 100 },
    { department: 'Sales & Marketing', employees: 5, avgHours: 40, completion: 80 },
    { department: 'Operations', employees: 4, avgHours: 38, completion: 100 },
    { department: 'Human Resources', employees: 3, avgHours: 40, completion: 100 },
    { department: 'Executive Management', employees: 2, avgHours: 45, completion: 100 },
    { department: 'Finance & Accounting', employees: 3, avgHours: 40, completion: 67 },
  ]

  const recentReports = [
    { employee: 'John Doe', department: 'IT & Technology', weekEnding: '2024-12-15', hours: 42, status: 'submitted' },
    { employee: 'Jane Smith', department: 'IT & Technology', weekEnding: '2024-12-15', hours: 40, status: 'submitted' },
    { employee: 'Sarah Johnson', department: 'Human Resources', weekEnding: '2024-12-15', hours: 38, status: 'pending' },
    { employee: 'Michael Brown', department: 'Sales & Marketing', weekEnding: '2024-12-15', hours: 40, status: 'submitted' },
  ]

  if (userRole !== 'ceo' && userRole !== 'hr' && userRole !== 'manager') {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 sm:p-12 text-center">
        <BarChart3 className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Access Denied</h3>
        <p className="text-sm sm:text-base text-gray-600">You don't have permission to view reports and analytics.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Reports & Analytics</h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">Weekly work reports and team performance insights</p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="w-full sm:w-auto px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
          </select>
          <button className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 active:bg-gray-800 text-xs sm:text-sm font-medium flex items-center justify-center space-x-2 touch-manipulation">
            <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center justify-between mb-1 sm:mb-2">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
            <span className="text-xl sm:text-2xl font-bold text-gray-900">{summaryStats.totalEmployees}</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-600">Total Employees</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center justify-between mb-1 sm:mb-2">
            <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
            <span className="text-xl sm:text-2xl font-bold text-gray-900">{summaryStats.activeReports}</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-600">Active Reports</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center justify-between mb-1 sm:mb-2">
            <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />
            <span className="text-xl sm:text-2xl font-bold text-gray-900">{summaryStats.totalHours}</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-600">Total Hours</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center justify-between mb-1 sm:mb-2">
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
            <span className="text-xl sm:text-2xl font-bold text-gray-900">{summaryStats.completionRate}%</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-600">Completion Rate</p>
        </div>
      </div>

      {/* Department Performance */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Department Performance</h3>
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase">Department</th>
                    <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase">Employees</th>
                    <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase hidden sm:table-cell">Avg Hours</th>
                    <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase">Completion</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {departmentStats.map((stat, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-gray-900">
                        <div className="sm:hidden">
                          <div className="font-semibold">{stat.department}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{stat.avgHours} hrs avg</div>
                        </div>
                        <span className="hidden sm:inline">{stat.department}</span>
                      </td>
                      <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-600">{stat.employees}</td>
                      <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-600 hidden sm:table-cell">{stat.avgHours} hrs</td>
                      <td className="px-3 sm:px-4 py-2 sm:py-3">
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                            <div
                              className={`h-1.5 sm:h-2 rounded-full ${
                                stat.completion === 100 ? 'bg-green-600' :
                                stat.completion >= 80 ? 'bg-yellow-600' : 'bg-red-600'
                              }`}
                              style={{ width: `${stat.completion}%` }}
                            ></div>
                          </div>
                          <span className="text-xs sm:text-sm text-gray-600 min-w-[40px] sm:min-w-[50px]">{stat.completion}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Recent Reports</h3>
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase">Employee</th>
                    <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase hidden sm:table-cell">Department</th>
                    <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Week Ending</th>
                    <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase">Hours</th>
                    <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentReports.map((report, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-gray-900">
                        <div className="sm:hidden">
                          <div className="font-semibold">{report.employee}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{report.department}</div>
                          <div className="text-xs text-gray-500">{report.weekEnding}</div>
                        </div>
                        <span className="hidden sm:inline">{report.employee}</span>
                      </td>
                      <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-600 hidden sm:table-cell">{report.department}</td>
                      <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-600 hidden md:table-cell">{report.weekEnding}</td>
                      <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-600">{report.hours} hrs</td>
                      <td className="px-3 sm:px-4 py-2 sm:py-3">
                        <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs font-semibold rounded-full whitespace-nowrap ${
                          report.status === 'submitted' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {report.status}
                        </span>
                      </td>
                      <td className="px-3 sm:px-4 py-2 sm:py-3">
                        <button className="text-xs sm:text-sm text-orange-600 hover:text-orange-700 active:text-orange-800 font-medium touch-manipulation">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

