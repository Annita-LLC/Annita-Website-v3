'use client'

import { useState } from 'react'
import { Calendar, ChevronLeft, ChevronRight, Clock, MapPin } from 'lucide-react'

export default function CompanyCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const events = [
    { id: 1, title: 'Q4 Company Meeting', date: '2024-12-20', time: '14:00', type: 'meeting', location: 'Main Office' },
    { id: 2, title: 'Holiday - Christmas', date: '2024-12-25', time: 'All Day', type: 'holiday', location: 'Company Wide' },
    { id: 3, title: 'New Year Holiday', date: '2025-01-01', time: 'All Day', type: 'holiday', location: 'Company Wide' },
    { id: 4, title: 'Project Review', date: '2024-12-22', time: '10:00', type: 'meeting', location: 'Conference Room' },
    { id: 5, title: 'Weekly Report Deadline', date: '2024-12-20', time: '17:00', type: 'deadline', location: 'Online' },
  ]

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    // Add all days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i)
    }
    return days
  }

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const days = getDaysInMonth(currentDate)
  const month = currentDate.getMonth()
  const year = currentDate.getFullYear()

  const getEventsForDate = (day: number | null) => {
    if (!day) return []
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    return events.filter(e => e.date === dateStr)
  }

  const previousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1))
  }

  const getEventTypeColor = (type: string) => {
    switch(type) {
      case 'holiday': return 'bg-green-100 text-green-800 border-green-300'
      case 'meeting': return 'bg-blue-100 text-blue-800 border-blue-300'
      case 'deadline': return 'bg-red-100 text-red-800 border-red-300'
      default: return 'bg-gray-100 text-gray-800 border-gray-300'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Company Calendar</h2>
        <div className="flex items-center space-x-2">
          <button onClick={previousMonth} className="p-2 hover:bg-gray-100 rounded-lg">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h3 className="text-lg font-semibold text-gray-900 min-w-[200px] text-center">
            {monthNames[month]} {year}
          </h3>
          <button onClick={nextMonth} className="p-2 hover:bg-gray-100 rounded-lg">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="grid grid-cols-7 gap-2 mb-4">
            {dayNames.map(day => (
              <div key={day} className="text-center text-sm font-semibold text-gray-600 py-2">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {days.map((day, index) => {
              const dayEvents = getEventsForDate(day)
              const isToday = day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()
              return (
                <div
                  key={index}
                  className={`min-h-[80px] p-2 border rounded-lg ${
                    isToday ? 'bg-orange-50 border-orange-300' : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  {day && (
                    <>
                      <div className={`text-sm font-medium mb-1 ${isToday ? 'text-orange-600' : 'text-gray-900'}`}>
                        {day}
                      </div>
                      <div className="space-y-1">
                        {dayEvents.slice(0, 2).map(event => (
                          <div
                            key={event.id}
                            className={`text-xs px-1 py-0.5 rounded border ${getEventTypeColor(event.type)} truncate`}
                            title={event.title}
                          >
                            {event.title}
                          </div>
                        ))}
                        {dayEvents.length > 2 && (
                          <div className="text-xs text-gray-500">+{dayEvents.length - 2} more</div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h3>
          <div className="space-y-4">
            {events
              .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
              .slice(0, 5)
              .map(event => (
                <div key={event.id} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-gray-900 text-sm">{event.title}</h4>
                    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full border ${getEventTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                  </div>
                  <div className="space-y-1 text-xs text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {event.location}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

