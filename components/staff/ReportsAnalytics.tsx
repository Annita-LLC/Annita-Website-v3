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
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
        <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Access Denied</h3>
        <p className="text-gray-600">You don't have permission to view reports and analytics.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Reports & Analytics</h2>
          <p className="text-sm text-gray-600 mt-1">Weekly work reports and team performance insights</p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
          </select>
          <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 font-medium flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <Users className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">{summaryStats.totalEmployees}</span>
          </div>
          <p className="text-sm text-gray-600">Total Employees</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <FileText className="w-8 h-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">{summaryStats.activeReports}</span>
          </div>
          <p className="text-sm text-gray-600">Active Reports</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <Clock className="w-8 h-8 text-orange-600" />
            <span className="text-2xl font-bold text-gray-900">{summaryStats.totalHours}</span>
          </div>
          <p className="text-sm text-gray-600">Total Hours</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-8 h-8 text-purple-600" />
            <span className="text-2xl font-bold text-gray-900">{summaryStats.completionRate}%</span>
          </div>
          <p className="text-sm text-gray-600">Completion Rate</p>
        </div>
      </div>

      {/* Department Performance */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Department Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Department</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Employees</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Avg Hours</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Completion</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {departmentStats.map((stat, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{stat.department}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{stat.employees}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{stat.avgHours} hrs</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            stat.completion === 100 ? 'bg-green-600' :
                            stat.completion >= 80 ? 'bg-yellow-600' : 'bg-red-600'
                          }`}
                          style={{ width: `${stat.completion}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 min-w-[50px]">{stat.completion}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Reports</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Employee</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Department</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Week Ending</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Hours</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentReports.map((report, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{report.employee}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{report.department}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{report.weekEnding}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{report.hours} hrs</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      report.status === 'submitted' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-sm text-orange-600 hover:text-orange-700 font-medium">
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
  )
}

