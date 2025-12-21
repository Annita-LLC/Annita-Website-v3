'use client'

import { useState } from 'react'
import { Calendar, Clock, User, MessageSquare, Plus, CheckCircle2, X } from 'lucide-react'

interface OneOnOneMeetingsProps {
  userRole: string
}

export default function OneOnOneMeetings({ userRole }: OneOnOneMeetingsProps) {
  const [showScheduleForm, setShowScheduleForm] = useState(false)

  const upcomingMeetings = [
    { id: 1, teamMember: 'John Doe', date: '2024-12-20', time: '10:00 AM', duration: '30 min', status: 'scheduled', notes: '' },
    { id: 2, teamMember: 'Sarah Johnson', date: '2024-12-22', time: '2:00 PM', duration: '45 min', status: 'scheduled', notes: '' },
  ]

  const pastMeetings = [
    { id: 3, teamMember: 'Mike Wilson', date: '2024-12-15', time: '11:00 AM', duration: '30 min', status: 'completed', notes: 'Discussed Q4 goals and performance. Mike is on track with all objectives.' },
    { id: 4, teamMember: 'Emily Brown', date: '2024-12-10', time: '3:00 PM', duration: '45 min', status: 'completed', notes: 'Reviewed marketing campaign progress. Emily exceeded expectations.' },
  ]

  if (userRole !== 'manager' && userRole !== 'ceo' && userRole !== 'hr') {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 sm:p-12 text-center">
        <Calendar className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Access Denied</h3>
        <p className="text-sm sm:text-base text-gray-600">You need manager or higher access to schedule one-on-one meetings.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">One-on-One Meetings</h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">Schedule and manage meetings with your team members</p>
        </div>
        <button
          onClick={() => setShowScheduleForm(!showScheduleForm)}
          className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation flex items-center justify-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Schedule Meeting</span>
        </button>
      </div>

      {/* Schedule Form */}
      {showScheduleForm && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">Schedule New Meeting</h3>
            <button
              onClick={() => setShowScheduleForm(false)}
              className="text-gray-400 hover:text-gray-600 touch-manipulation"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Team Member</label>
              <select className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                <option>Select team member...</option>
                <option>John Doe</option>
                <option>Sarah Johnson</option>
                <option>Mike Wilson</option>
                <option>Emily Brown</option>
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input type="date" className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                <input type="time" className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
              <select className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                <option>15 minutes</option>
                <option>30 minutes</option>
                <option>45 minutes</option>
                <option>1 hour</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Agenda/Notes</label>
              <textarea
                rows={3}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                placeholder="Meeting agenda or notes..."
              />
            </div>
            <button
              onClick={() => {
                alert('Meeting scheduled successfully!\n\nIn production, this would schedule the meeting and send notifications.')
                setShowScheduleForm(false)
              }}
              className="w-full px-4 py-2.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-sm font-medium transition-colors touch-manipulation"
            >
              Schedule Meeting
            </button>
          </div>
        </div>
      )}

      {/* Upcoming Meetings */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Clock className="w-5 h-5 mr-2 text-orange-600" />
          Upcoming Meetings
        </h3>
        <div className="space-y-3 sm:space-y-4">
          {upcomingMeetings.map((meeting) => (
            <div key={meeting.id} className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <User className="w-5 h-5 text-gray-400" />
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900">{meeting.teamMember}</h4>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{meeting.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{meeting.time}</span>
                    </div>
                    <span>{meeting.duration}</span>
                  </div>
                </div>
                <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded">{meeting.status}</span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => alert(`Adding notes for meeting with ${meeting.teamMember}\n\nIn production, this would open a form to add meeting notes.`)}
                  className="flex-1 px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Add Notes</span>
                </button>
                <button
                  onClick={() => alert(`Rescheduling meeting with ${meeting.teamMember}\n\nIn production, this would open a reschedule form.`)}
                  className="px-3 sm:px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
                >
                  Reschedule
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Past Meetings */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <CheckCircle2 className="w-5 h-5 mr-2 text-green-600" />
          Past Meetings
        </h3>
        <div className="space-y-3 sm:space-y-4">
          {pastMeetings.map((meeting) => (
            <div key={meeting.id} className="border border-gray-200 rounded-lg p-3 sm:p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <User className="w-5 h-5 text-gray-400" />
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900">{meeting.teamMember}</h4>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-600 mb-2">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{meeting.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{meeting.time}</span>
                    </div>
                  </div>
                  {meeting.notes && (
                    <div className="bg-gray-50 rounded-lg p-3 mt-2">
                      <p className="text-xs sm:text-sm text-gray-700">{meeting.notes}</p>
                    </div>
                  )}
                </div>
                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded">{meeting.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

