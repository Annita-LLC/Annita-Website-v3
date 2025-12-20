'use client'

import { useState } from 'react'
import { Shield, Users, FileText, BarChart3, Settings, Download, Eye, Edit, Trash2 } from 'lucide-react'

interface AdminPanelProps {
  userRole: string
}

export default function AdminPanel({ userRole }: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState<'employees' | 'reports' | 'settings'>('employees')

  const employees = [
    { id: 1, name: 'John Doe', email: 'john.doe@annita.com', department: 'IT & Technology', role: 'Software Engineer', status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@annita.com', department: 'IT & Technology', role: 'CTO', status: 'active' },
    { id: 3, name: 'Sarah Johnson', email: 'sarah.johnson@annita.com', department: 'Human Resources', role: 'HR Manager', status: 'active' },
  ]

  const weeklyReports = [
    { id: 1, employee: 'John Doe', weekEnding: '2024-12-15', hours: 40, status: 'submitted' },
    { id: 2, employee: 'Jane Smith', weekEnding: '2024-12-15', hours: 42, status: 'submitted' },
    { id: 3, employee: 'Sarah Johnson', weekEnding: '2024-12-15', hours: 38, status: 'pending' },
  ]

  if (userRole !== 'ceo' && userRole !== 'hr' && userRole !== 'manager') {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
        <Shield className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Access Denied</h3>
        <p className="text-gray-600">You don't have permission to access the admin panel.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Admin Panel</h2>
          <p className="text-sm text-gray-600 mt-1">Manage employees, reports, and system settings</p>
        </div>
        <div className="flex items-center space-x-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-lg">
          <Shield className="w-5 h-5" />
          <span className="font-medium capitalize">{userRole}</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex border-b border-gray-200">
          {[
            { id: 'employees' as const, label: 'Employees', icon: Users },
            { id: 'reports' as const, label: 'Weekly Reports', icon: FileText },
            { id: 'settings' as const, label: 'Settings', icon: Settings },
          ].map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-orange-600 text-orange-600'
                    : 'border-transparent text-gray-600 hover:text-orange-600'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        <div className="p-6">
          {/* Employees Tab */}
          {activeTab === 'employees' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Employee Management</h3>
                <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 font-medium">
                  Add Employee
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Department</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {employees.map((employee) => (
                      <tr key={employee.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{employee.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{employee.email}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{employee.department}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{employee.role}</td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                            {employee.status}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center space-x-2">
                            <button className="p-1 text-blue-600 hover:text-blue-700" title="View">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-1 text-orange-600 hover:text-orange-700" title="Edit">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-1 text-red-600 hover:text-red-700" title="Delete">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
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
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Weekly Reports</h3>
                <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 font-medium flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Export All</span>
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Employee</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Week Ending</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Hours</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {weeklyReports.map((report) => (
                      <tr key={report.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{report.employee}</td>
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
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">System Settings</h3>
              <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Report Submission Deadline</h4>
                  <p className="text-sm text-gray-600 mb-3">Set the deadline for weekly report submissions</p>
                  <input
                    type="time"
                    defaultValue="17:00"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Company Information</h4>
                  <p className="text-sm text-gray-600 mb-3">Update company details and policies</p>
                  <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 font-medium">
                    Edit Company Info
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

