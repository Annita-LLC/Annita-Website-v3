'use client'

import { useState } from 'react'
import { Users, Calendar, FileText, Plus, CheckCircle2, Clock, Download, Edit } from 'lucide-react'

interface BoardMeetingsProps {
  userRole: string
}

export default function BoardMeetings({ userRole }: BoardMeetingsProps) {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past' | 'materials'>('upcoming')

  const upcomingMeetings = [
    { id: 1, title: 'Q4 2024 Board Meeting', date: '2024-12-28', time: '10:00 AM', location: 'Conference Room A', status: 'scheduled', agenda: 'Q4 Review, 2025 Planning' },
    { id: 2, title: 'Annual Strategy Meeting', date: '2025-01-15', time: '2:00 PM', location: 'Virtual', status: 'scheduled', agenda: 'Strategic Planning for 2025' },
  ]

  const pastMeetings = [
    { id: 3, title: 'Q3 2024 Board Meeting', date: '2024-09-30', time: '10:00 AM', location: 'Conference Room A', status: 'completed', minutes: 'Q3 performance review completed. Approved budget for Q4.' },
    { id: 4, title: 'Q2 2024 Board Meeting', date: '2024-06-30', time: '10:00 AM', location: 'Conference Room A', status: 'completed', minutes: 'Q2 review and strategic initiatives discussion.' },
  ]

  const materials = [
    { id: 1, name: 'Q4 Financial Report', meeting: 'Q4 2024 Board Meeting', type: 'PDF', size: '2.5 MB', uploadDate: '2024-12-20' },
    { id: 2, name: 'Strategic Plan 2025', meeting: 'Annual Strategy Meeting', type: 'PDF', size: '1.8 MB', uploadDate: '2024-12-18' },
    { id: 3, name: 'Market Analysis Report', meeting: 'Q4 2024 Board Meeting', type: 'PDF', size: '3.2 MB', uploadDate: '2024-12-19' },
  ]

  if (userRole !== 'ceo') {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 sm:p-12 text-center">
        <Users className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Access Denied</h3>
        <p className="text-sm sm:text-base text-gray-600">CEO access required for board meetings.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Board Meetings</h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">Manage board meetings and materials</p>
        </div>
        <button
          onClick={() => alert('Schedule New Board Meeting\n\nIn production, this would open a form to schedule a new meeting.')}
          className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation flex items-center justify-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>New Meeting</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex border-b border-gray-200 overflow-x-auto scrollbar-hide">
          {[
            { id: 'upcoming' as const, label: 'Upcoming', icon: Calendar },
            { id: 'past' as const, label: 'Past Meetings', icon: CheckCircle2 },
            { id: 'materials' as const, label: 'Materials', icon: FileText },
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
          {/* Upcoming Meetings Tab */}
          {activeTab === 'upcoming' && (
            <div className="space-y-4">
              {upcomingMeetings.map((meeting) => (
                <div key={meeting.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{meeting.title}</h4>
                      <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-600 mb-2">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{meeting.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{meeting.time}</span>
                        </div>
                        <span>{meeting.location}</span>
                      </div>
                      <p className="text-xs text-gray-500">Agenda: {meeting.agenda}</p>
                    </div>
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded">{meeting.status}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => alert(`Managing ${meeting.title}\n\nIn production, this would show meeting management options.`)}
                      className="flex-1 px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
                    >
                      Manage Meeting
                    </button>
                    <button
                      onClick={() => alert(`Uploading materials for ${meeting.title}\n\nIn production, this would open file upload.`)}
                      className="px-3 sm:px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
                    >
                      Upload Materials
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Past Meetings Tab */}
          {activeTab === 'past' && (
            <div className="space-y-4">
              {pastMeetings.map((meeting) => (
                <div key={meeting.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{meeting.title}</h4>
                      <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-600 mb-2">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{meeting.date}</span>
                        </div>
                        <span>{meeting.location}</span>
                      </div>
                      {meeting.minutes && (
                        <div className="bg-gray-50 rounded-lg p-3 mt-2">
                          <p className="text-xs sm:text-sm text-gray-700">{meeting.minutes}</p>
                        </div>
                      )}
                    </div>
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded">{meeting.status}</span>
                  </div>
                  <button
                    onClick={() => alert(`Viewing minutes for ${meeting.title}\n\nIn production, this would show full meeting minutes.`)}
                    className="w-full px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
                  >
                    View Minutes
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Materials Tab */}
          {activeTab === 'materials' && (
            <div className="space-y-4">
              {materials.map((material) => (
                <div key={material.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <FileText className="w-5 h-5 text-blue-600" />
                        <h4 className="text-sm sm:text-base font-semibold text-gray-900">{material.name}</h4>
                      </div>
                      <p className="text-xs text-gray-500 mb-2">Meeting: {material.meeting} • Uploaded: {material.uploadDate}</p>
                      <p className="text-xs text-gray-600">{material.type} • {material.size}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => alert(`Downloading ${material.name}\n\nIn production, this would download the file.`)}
                      className="flex-1 px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation flex items-center justify-center space-x-2"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </button>
                    <button
                      onClick={() => alert(`Editing ${material.name}\n\nIn production, this would open edit options.`)}
                      className="px-3 sm:px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
                    >
                      <Edit className="w-3.5 h-3.5" />
                    </button>
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
