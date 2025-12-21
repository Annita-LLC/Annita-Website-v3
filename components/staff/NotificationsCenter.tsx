'use client'

import { useState } from 'react'
import { Bell, CheckCircle2, X, AlertCircle, Info, CheckCircle } from 'lucide-react'

export default function NotificationsCenter() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'info',
      title: 'Weekly Report Due',
      message: 'Your weekly report for the week ending December 15 is due tomorrow.',
      time: '2 hours ago',
      read: false
    },
    {
      id: 2,
      type: 'success',
      title: 'Leave Request Approved',
      message: 'Your leave request for December 25-31 has been approved.',
      time: '1 day ago',
      read: false
    },
    {
      id: 3,
      type: 'warning',
      title: 'Deadline Reminder',
      message: 'Project review meeting scheduled for December 22 at 10:00 AM.',
      time: '2 days ago',
      read: true
    },
    {
      id: 4,
      type: 'info',
      title: 'New Announcement',
      message: 'Q4 Company Meeting scheduled for December 20.',
      time: '3 days ago',
      read: true
    },
  ])

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })))
  }

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id))
  }

  const getNotificationIcon = (type: string) => {
    switch(type) {
      case 'success': return <CheckCircle className="w-5 h-5 text-green-600" />
      case 'warning': return <AlertCircle className="w-5 h-5 text-yellow-600" />
      case 'error': return <X className="w-5 h-5 text-red-600" />
      default: return <Info className="w-5 h-5 text-blue-600" />
    }
  }

  const getNotificationColor = (type: string) => {
    switch(type) {
      case 'success': return 'bg-green-50 border-green-200'
      case 'warning': return 'bg-yellow-50 border-yellow-200'
      case 'error': return 'bg-red-50 border-red-200'
      default: return 'bg-blue-50 border-blue-200'
    }
  }

  const unreadCount = notifications.filter(n => !n.read).length

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Notifications</h2>
          {unreadCount > 0 && (
            <p className="text-xs sm:text-sm text-gray-600 mt-1">{unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}</p>
          )}
        </div>
        {unreadCount > 0 && (
          <button
            onClick={markAllAsRead}
            className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 active:bg-orange-800 text-xs sm:text-sm font-medium touch-manipulation"
          >
            Mark All as Read
          </button>
        )}
      </div>

      <div className="space-y-2 sm:space-y-3">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`bg-white rounded-lg border-2 p-3 sm:p-4 ${
              !notification.read ? getNotificationColor(notification.type) : 'border-gray-200'
            }`}
          >
            <div className="flex items-start space-x-2 sm:space-x-3">
              <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                {getNotificationIcon(notification.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-1.5 sm:space-x-2 mb-1">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900 break-words">{notification.title}</h3>
                      {!notification.read && (
                        <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2 break-words">{notification.message}</p>
                    <p className="text-xs text-gray-500">{notification.time}</p>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2 ml-2 sm:ml-4 flex-shrink-0">
                    {!notification.read && (
                      <button
                        onClick={() => markAsRead(notification.id)}
                        className="p-1.5 sm:p-1 text-gray-400 hover:text-green-600 active:text-green-700 touch-manipulation"
                        title="Mark as read"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </button>
                    )}
                    <button
                      onClick={() => deleteNotification(notification.id)}
                      className="p-1.5 sm:p-1 text-gray-400 hover:text-red-600 active:text-red-700 touch-manipulation"
                      title="Delete"
                    >
                      <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {notifications.length === 0 && (
        <div className="text-center py-8 sm:py-12 bg-white rounded-lg border border-gray-200">
          <Bell className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 mx-auto mb-3 sm:mb-4" />
          <p className="text-sm sm:text-base text-gray-600">No notifications</p>
        </div>
      )}
    </div>
  )
}

