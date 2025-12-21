'use client'

import { useState } from 'react'
import { Shield, Users, FileText, BarChart3, Settings, Download, Eye, Edit, Trash2 } from 'lucide-react'

interface AdminPanelProps {
  userRole: string
}

export default function AdminPanel({ userRole }: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState<'employees' | 'reports' | 'settings' | 'system'>('employees')

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
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 sm:p-12 text-center">
        <Shield className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Access Denied</h3>
        <p className="text-sm sm:text-base text-gray-600">You don't have permission to access the admin panel.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Admin Panel</h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">Manage employees, reports, and system settings</p>
        </div>
        <div className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-orange-100 text-orange-700 rounded-lg">
          <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-xs sm:text-sm font-medium capitalize">{userRole}</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex border-b border-gray-200 overflow-x-auto scrollbar-hide">
          {[
            { id: 'employees' as const, label: 'Employees', icon: Users },
            { id: 'reports' as const, label: 'Weekly Reports', icon: FileText },
            { id: 'settings' as const, label: 'Settings', icon: Settings },
            ...(userRole === 'ceo' ? [{ id: 'system' as const, label: 'System Control', icon: Shield }] : []),
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
          {/* Employees Tab */}
          {activeTab === 'employees' && (
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-3 sm:mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Employee Management</h3>
                <button 
                  onClick={() => {
                    alert('Add Employee functionality\n\nIn production, this would open a form to add a new employee.')
                  }}
                  className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 active:bg-orange-800 text-xs sm:text-sm font-medium touch-manipulation"
                >
                  Add Employee
                </button>
              </div>
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <div className="inline-block min-w-full align-middle">
                  <div className="overflow-hidden sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                          <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase hidden sm:table-cell">Email</th>
                          <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Department</th>
                          <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase hidden lg:table-cell">Role</th>
                          <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                          <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {employees.map((employee) => (
                          <tr key={employee.id} className="hover:bg-gray-50">
                            <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-gray-900">
                              <div className="sm:hidden">
                                <div className="font-semibold">{employee.name}</div>
                                <div className="text-xs text-gray-500 mt-0.5">{employee.email}</div>
                                <div className="text-xs text-gray-500">{employee.department}</div>
                              </div>
                              <span className="hidden sm:inline">{employee.name}</span>
                            </td>
                            <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-600 hidden sm:table-cell">{employee.email}</td>
                            <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-600 hidden md:table-cell">{employee.department}</td>
                            <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-600 hidden lg:table-cell">{employee.role}</td>
                            <td className="px-3 sm:px-4 py-2 sm:py-3">
                              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 whitespace-nowrap">
                                {employee.status}
                              </span>
                            </td>
                            <td className="px-3 sm:px-4 py-2 sm:py-3">
                              <div className="flex items-center space-x-1 sm:space-x-2">
                            <button 
                              onClick={() => alert(`Viewing details for ${employee.name}\n\nIn production, this would show employee details.`)}
                              className="p-1.5 sm:p-1 text-blue-600 hover:text-blue-700 active:text-blue-800 touch-manipulation" 
                              title="View"
                            >
                              <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </button>
                            <button 
                              onClick={() => alert(`Editing ${employee.name}\n\nIn production, this would open the edit form.`)}
                              className="p-1.5 sm:p-1 text-orange-600 hover:text-orange-700 active:text-orange-800 touch-manipulation" 
                              title="Edit"
                            >
                              <Edit className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </button>
                            <button 
                              onClick={() => {
                                if (confirm(`Are you sure you want to delete ${employee.name}?`)) {
                                  alert(`${employee.name} deleted.\n\nIn production, this would remove the employee from the system.`)
                                }
                              }}
                              className="p-1.5 sm:p-1 text-red-600 hover:text-red-700 active:text-red-800 touch-manipulation" 
                              title="Delete"
                            >
                              <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </button>
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
          )}

          {/* Reports Tab */}
          {activeTab === 'reports' && (
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-3 sm:mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Weekly Reports</h3>
                <button 
                  onClick={() => {
                    alert('Exporting all weekly reports...\n\nIn production, this would generate and download a CSV/PDF file with all reports.')
                  }}
                  className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 active:bg-gray-800 text-xs sm:text-sm font-medium flex items-center justify-center space-x-2 touch-manipulation"
                >
                  <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Export All</span>
                </button>
              </div>
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <div className="inline-block min-w-full align-middle">
                  <div className="overflow-hidden sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase">Employee</th>
                          <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase hidden sm:table-cell">Week Ending</th>
                          <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase">Hours</th>
                          <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                          <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {weeklyReports.map((report) => (
                          <tr key={report.id} className="hover:bg-gray-50">
                            <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-gray-900">
                              <div className="sm:hidden">
                                <div className="font-semibold">{report.employee}</div>
                                <div className="text-xs text-gray-500 mt-0.5">{report.weekEnding}</div>
                              </div>
                              <span className="hidden sm:inline">{report.employee}</span>
                            </td>
                            <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-600 hidden sm:table-cell">{report.weekEnding}</td>
                            <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-600">{report.hours} hrs</td>
                            <td className="px-3 sm:px-4 py-2 sm:py-3">
                              <span className={`px-2 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${
                                report.status === 'submitted' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {report.status}
                              </span>
                            </td>
                            <td className="px-3 sm:px-4 py-2 sm:py-3">
                              <button 
                                onClick={() => alert(`Viewing report details for ${report.employee}\n\nWeek Ending: ${report.weekEnding}\nHours: ${report.hours}\nStatus: ${report.status}\n\nIn production, this would show the full report.`)}
                                className="text-xs sm:text-sm text-orange-600 hover:text-orange-700 active:text-orange-800 font-medium touch-manipulation"
                              >
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
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">System Settings</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="p-3 sm:p-4 border border-gray-200 rounded-lg">
                  <h4 className="text-sm sm:text-base font-medium text-gray-900 mb-1 sm:mb-2">Report Submission Deadline</h4>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">Set the deadline for weekly report submissions</p>
                  <input
                    type="time"
                    defaultValue="17:00"
                    className="w-full sm:w-auto px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div className="p-3 sm:p-4 border border-gray-200 rounded-lg">
                  <h4 className="text-sm sm:text-base font-medium text-gray-900 mb-1 sm:mb-2">Company Information</h4>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">Update company details and policies</p>
                  <button 
                    onClick={() => alert('Edit Company Information\n\nIn production, this would open a form to edit company details.')}
                    className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 active:bg-orange-800 text-xs sm:text-sm font-medium touch-manipulation"
                  >
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

