'use client'

import { useState } from 'react'
import { Megaphone, Calendar, User, Plus, X } from 'lucide-react'

interface AnnouncementsProps {
  userRole: string
}

export default function Announcements({ userRole }: AnnouncementsProps) {
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: 'Q4 Company Meeting',
      content: 'Join us for our quarterly company meeting on December 20th at 2 PM. We will discuss Q4 achievements and Q1 goals.',
      author: 'CEO Christopher O. Fallah',
      date: '2024-12-18',
      type: 'company',
      priority: 'high',
      read: false
    },
    {
      id: 2,
      title: 'New HR Policies',
      content: 'Updated employee handbook and new HR policies are now available in the Documents section.',
      author: 'HR Department',
      date: '2024-12-15',
      type: 'hr',
      priority: 'medium',
      read: false
    },
    {
      id: 3,
      title: 'Holiday Schedule',
      content: 'Company will be closed from December 24th to January 2nd for the holiday season.',
      author: 'Administration',
      date: '2024-12-10',
      type: 'company',
      priority: 'low',
      read: true
    },
  ])

  const [showCreateForm, setShowCreateForm] = useState(false)
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: '',
    content: '',
    type: 'company',
    priority: 'medium'
  })

  const canCreate = userRole === 'ceo' || userRole === 'hr' || userRole === 'manager'

  const markAsRead = (id: number) => {
    setAnnouncements(announcements.map(a => a.id === id ? { ...a, read: true } : a))
  }

  const deleteAnnouncement = (id: number) => {
    if (confirm('Are you sure you want to delete this announcement?')) {
      setAnnouncements(announcements.filter(a => a.id !== id))
    }
  }

  const createAnnouncement = () => {
    if (!newAnnouncement.title || !newAnnouncement.content) {
      alert('Please fill in all required fields')
      return
    }
    const announcement = {
      id: Date.now(),
      ...newAnnouncement,
      author: userRole === 'ceo' ? 'CEO Christopher O. Fallah' : 'Management',
      date: new Date().toISOString().split('T')[0],
      read: false
    }
    setAnnouncements([announcement, ...announcements])
    setNewAnnouncement({ title: '', content: '', type: 'company', priority: 'medium' })
    setShowCreateForm(false)
    alert('Announcement created successfully!')
  }

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-300'
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-300'
      case 'low': return 'bg-green-100 text-green-800 border-green-300'
      default: return 'bg-gray-100 text-gray-800 border-gray-300'
    }
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Company Announcements</h2>
        {canCreate && (
          <button
            onClick={() => setShowCreateForm(!showCreateForm)}
            className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 active:bg-orange-800 font-medium flex items-center justify-center space-x-2 touch-manipulation"
          >
            <Plus className="w-4 h-4" />
            <span>New Announcement</span>
          </button>
        )}
      </div>

      {/* Create Form */}
      {showCreateForm && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">Create New Announcement</h3>
            <button onClick={() => setShowCreateForm(false)} className="text-gray-400 hover:text-gray-600 active:text-gray-800 touch-manipulation p-1">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
              <input
                type="text"
                value={newAnnouncement.title}
                onChange={(e) => setNewAnnouncement({ ...newAnnouncement, title: e.target.value })}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Announcement title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Content *</label>
              <textarea
                value={newAnnouncement.content}
                onChange={(e) => setNewAnnouncement({ ...newAnnouncement, content: e.target.value })}
                rows={4}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                placeholder="Announcement content"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <select
                  value={newAnnouncement.type}
                  onChange={(e) => setNewAnnouncement({ ...newAnnouncement, type: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="company">Company</option>
                  <option value="hr">HR</option>
                  <option value="department">Department</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                <select
                  value={newAnnouncement.priority}
                  onChange={(e) => setNewAnnouncement({ ...newAnnouncement, priority: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
            <button
              onClick={createAnnouncement}
              className="w-full px-4 sm:px-6 py-2.5 sm:py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 active:bg-orange-800 font-medium touch-manipulation"
            >
              Publish Announcement
            </button>
          </div>
        </div>
      )}

      {/* Announcements List */}
      <div className="space-y-3 sm:space-y-4">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className={`bg-white rounded-lg shadow-sm border-2 p-4 sm:p-6 ${
              !announcement.read ? 'border-blue-300 bg-blue-50' : 'border-gray-200'
            }`}
          >
            <div className="flex items-start justify-between mb-3 gap-2">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 break-words">{announcement.title}</h3>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full border flex-shrink-0 ${getPriorityColor(announcement.priority)}`}>
                    {announcement.priority}
                  </span>
                  {!announcement.read && (
                    <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                  )}
                </div>
                <p className="text-sm sm:text-base text-gray-700 mb-3 break-words">{announcement.content}</p>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500">
                  <span className="flex items-center">
                    <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                    <span className="truncate">{announcement.author}</span>
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                    {announcement.date}
                  </span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs whitespace-nowrap">{announcement.type}</span>
                </div>
              </div>
              {canCreate && (
                <button
                  onClick={() => deleteAnnouncement(announcement.id)}
                  className="text-red-500 hover:text-red-700 active:text-red-800 ml-2 flex-shrink-0 touch-manipulation p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            {!announcement.read && (
              <button
                onClick={() => markAsRead(announcement.id)}
                className="text-xs sm:text-sm text-blue-600 hover:text-blue-700 active:text-blue-800 font-medium touch-manipulation"
              >
                Mark as Read
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

