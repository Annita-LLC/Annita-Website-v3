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
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Company Calendar</h2>
        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <button onClick={previousMonth} className="p-2 hover:bg-gray-100 active:bg-gray-200 rounded-lg touch-manipulation">
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 flex-1 sm:min-w-[200px] text-center sm:flex-none">
            {monthNames[month]} {year}
          </h3>
          <button onClick={nextMonth} className="p-2 hover:bg-gray-100 active:bg-gray-200 rounded-lg touch-manipulation">
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Calendar */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-3 sm:p-6">
          <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-3 sm:mb-4">
            {dayNames.map(day => (
              <div key={day} className="text-center text-xs sm:text-sm font-semibold text-gray-600 py-1 sm:py-2">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1 sm:gap-2">
            {days.map((day, index) => {
              const dayEvents = getEventsForDate(day)
              const isToday = day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()
              return (
                <div
                  key={index}
                  className={`min-h-[60px] sm:min-h-[80px] p-1 sm:p-2 border rounded-lg ${
                    isToday ? 'bg-orange-50 border-orange-300' : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  {day && (
                    <>
                      <div className={`text-xs sm:text-sm font-medium mb-0.5 sm:mb-1 ${isToday ? 'text-orange-600' : 'text-gray-900'}`}>
                        {day}
                      </div>
                      <div className="space-y-0.5 sm:space-y-1">
                        {dayEvents.slice(0, 1).map(event => (
                          <div
                            key={event.id}
                            className={`text-[10px] sm:text-xs px-0.5 sm:px-1 py-0.5 rounded border ${getEventTypeColor(event.type)} truncate`}
                            title={event.title}
                          >
                            {event.title}
                          </div>
                        ))}
                        {dayEvents.length > 1 && (
                          <div className="text-[10px] sm:text-xs text-gray-500">+{dayEvents.length - 1}</div>
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
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Upcoming Events</h3>
          <div className="space-y-3 sm:space-y-4">
            {events
              .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
              .slice(0, 5)
              .map(event => (
                <div key={event.id} className="p-2.5 sm:p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-start justify-between mb-1.5 sm:mb-2 gap-2">
                    <h4 className="font-medium text-gray-900 text-xs sm:text-sm flex-1 min-w-0 break-words">{event.title}</h4>
                    <span className={`px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs font-semibold rounded-full border flex-shrink-0 ${getEventTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                  </div>
                  <div className="space-y-0.5 sm:space-y-1 text-[10px] sm:text-xs text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1 flex-shrink-0" />
                      <span className="truncate">{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1 flex-shrink-0" />
                      <span className="truncate">{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
                      <span className="truncate">{event.location}</span>
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

