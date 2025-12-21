'use client'

import { useState } from 'react'
import { Calendar, Plus, CheckCircle2, XCircle, Clock, FileText } from 'lucide-react'

interface LeaveRequestsProps {
  userRole: string
}

export default function LeaveRequests({ userRole }: LeaveRequestsProps) {
  const [showRequestForm, setShowRequestForm] = useState(false)
  const [leaveRequest, setLeaveRequest] = useState({
    type: 'vacation',
    startDate: '',
    endDate: '',
    days: 0,
    reason: ''
  })

  const [requests, setRequests] = useState([
    {
      id: 1,
      employee: 'John Doe',
      type: 'Vacation',
      startDate: '2024-12-25',
      endDate: '2024-12-31',
      days: 5,
      status: 'pending',
      reason: 'Holiday vacation with family',
      submittedDate: '2024-12-15'
    },
    {
      id: 2,
      employee: 'Jane Smith',
      type: 'Sick Leave',
      startDate: '2024-12-20',
      endDate: '2024-12-21',
      days: 2,
      status: 'approved',
      reason: 'Medical appointment',
      submittedDate: '2024-12-18'
    },
  ])

  const canApprove = userRole === 'ceo' || userRole === 'hr' || userRole === 'manager'

  const calculateDays = (start: string, end: string) => {
    if (!start || !end) return 0
    const startDate = new Date(start)
    const endDate = new Date(end)
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1
    return diffDays
  }

  const handleDateChange = (field: string, value: string) => {
    setLeaveRequest({ ...leaveRequest, [field]: value })
    if (field === 'startDate' && leaveRequest.endDate) {
      const days = calculateDays(value, leaveRequest.endDate)
      setLeaveRequest({ ...leaveRequest, startDate: value, days })
    } else if (field === 'endDate' && leaveRequest.startDate) {
      const days = calculateDays(leaveRequest.startDate, value)
      setLeaveRequest({ ...leaveRequest, endDate: value, days })
    }
  }

  const submitRequest = () => {
    if (!leaveRequest.startDate || !leaveRequest.endDate || !leaveRequest.reason) {
      alert('Please fill in all required fields')
      return
    }
    const newRequest = {
      id: Date.now(),
      employee: 'Current User',
      type: leaveRequest.type.charAt(0).toUpperCase() + leaveRequest.type.slice(1),
      startDate: leaveRequest.startDate,
      endDate: leaveRequest.endDate,
      days: leaveRequest.days,
      status: 'pending' as const,
      reason: leaveRequest.reason,
      submittedDate: new Date().toISOString().split('T')[0]
    }
    setRequests([newRequest, ...requests])
    setLeaveRequest({ type: 'vacation', startDate: '', endDate: '', days: 0, reason: '' })
    setShowRequestForm(false)
    alert('Leave request submitted successfully!')
  }

  const handleApproval = (id: number, status: 'approved' | 'rejected') => {
    setRequests(requests.map(r => r.id === id ? { ...r, status } : r))
    alert(`Leave request ${status}!`)
  }

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'approved': return 'bg-green-100 text-green-800 border-green-300'
      case 'rejected': return 'bg-red-100 text-red-800 border-red-300'
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-300'
      default: return 'bg-gray-100 text-gray-800 border-gray-300'
    }
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Leave Requests</h2>
        {!canApprove && (
          <button
            onClick={() => setShowRequestForm(!showRequestForm)}
            className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 active:bg-orange-800 font-medium flex items-center justify-center space-x-2 touch-manipulation"
          >
            <Plus className="w-4 h-4" />
            <span>Request Leave</span>
          </button>
        )}
      </div>

      {/* Request Form */}
      {showRequestForm && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">New Leave Request</h3>
          <div className="space-y-3 sm:space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Leave Type *</label>
              <select
                value={leaveRequest.type}
                onChange={(e) => setLeaveRequest({ ...leaveRequest, type: e.target.value })}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="vacation">Vacation</option>
                <option value="sick">Sick Leave</option>
                <option value="personal">Personal</option>
                <option value="emergency">Emergency</option>
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Date *</label>
                <input
                  type="date"
                  value={leaveRequest.startDate}
                  onChange={(e) => handleDateChange('startDate', e.target.value)}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">End Date *</label>
                <input
                  type="date"
                  value={leaveRequest.endDate}
                  onChange={(e) => handleDateChange('endDate', e.target.value)}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Total Days</label>
              <div className="px-3 sm:px-4 py-2.5 sm:py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm sm:text-base">
                {leaveRequest.days} day{leaveRequest.days !== 1 ? 's' : ''}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Reason *</label>
              <textarea
                value={leaveRequest.reason}
                onChange={(e) => setLeaveRequest({ ...leaveRequest, reason: e.target.value })}
                rows={3}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                placeholder="Please provide a reason for your leave request"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 sm:space-x-3">
              <button
                onClick={submitRequest}
                className="flex-1 px-4 sm:px-6 py-2.5 sm:py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 active:bg-orange-800 font-medium touch-manipulation"
              >
                Submit Request
              </button>
              <button
                onClick={() => setShowRequestForm(false)}
                className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 active:bg-gray-400 font-medium touch-manipulation"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Requests List */}
      <div className="space-y-3 sm:space-y-4">
        {requests.map((request) => (
          <div key={request.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
            <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900">{request.employee}</h3>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full border flex-shrink-0 ${getStatusColor(request.status)}`}>
                    {request.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                  <div>
                    <span className="text-gray-500">Type:</span> <span className="break-words">{request.type}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Start:</span> {request.startDate}
                  </div>
                  <div>
                    <span className="text-gray-500">End:</span> {request.endDate}
                  </div>
                  <div>
                    <span className="text-gray-500">Days:</span> {request.days}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 mt-2 break-words">{request.reason}</p>
                <p className="text-xs text-gray-500 mt-2">Submitted: {request.submittedDate}</p>
              </div>
              {canApprove && request.status === 'pending' && (
                <div className="flex flex-col sm:flex-row gap-2 sm:space-x-2 ml-2 sm:ml-4 flex-shrink-0">
                  <button
                    onClick={() => handleApproval(request.id, 'approved')}
                    className="p-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 active:bg-green-300 touch-manipulation"
                    title="Approve"
                  >
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={() => handleApproval(request.id, 'rejected')}
                    className="p-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 active:bg-red-300 touch-manipulation"
                    title="Reject"
                  >
                    <XCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

