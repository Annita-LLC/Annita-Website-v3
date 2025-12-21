'use client'

import { useState } from 'react'
import { Users, Mail, Phone, Building2, Search, User } from 'lucide-react'

export default function TeamDirectory() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('all')

  const teamMembers = [
    {
      id: 1,
      name: 'Christopher O. Fallah',
      role: 'CEO & Founder',
      department: 'Executive Management',
      email: 'christopher@annita.com',
      phone: '+231 77 505 7227',
      location: 'Monrovia, Liberia'
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'CTO',
      department: 'IT & Technology',
      email: 'jane.smith@annita.com',
      phone: '+231 77 123 4567',
      location: 'Monrovia, Liberia'
    },
    {
      id: 3,
      name: 'John Doe',
      role: 'Software Engineer',
      department: 'IT & Technology',
      email: 'john.doe@annita.com',
      phone: '+231 77 234 5678',
      location: 'Monrovia, Liberia'
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      role: 'HR Manager',
      department: 'Human Resources',
      email: 'sarah.johnson@annita.com',
      phone: '+231 77 345 6789',
      location: 'Monrovia, Liberia'
    },
    {
      id: 5,
      name: 'Michael Brown',
      role: 'Marketing Director',
      department: 'Sales & Marketing',
      email: 'michael.brown@annita.com',
      phone: '+231 77 456 7890',
      location: 'Monrovia, Liberia'
    },
  ]

  const departments = ['all', ...Array.from(new Set(teamMembers.map(m => m.department)))]

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = selectedDepartment === 'all' || member.department === selectedDepartment
    return matchesSearch && matchesDepartment
  })

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Team Directory</h2>
        <div className="text-xs sm:text-sm text-gray-600">
          {filteredMembers.length} team member{filteredMembers.length !== 1 ? 's' : ''}
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 sm:p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
            <input
              type="text"
              placeholder="Search by name, role, or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <div>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>
                  {dept === 'all' ? 'All Departments' : dept}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {filteredMembers.map((member) => (
          <div key={member.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-base sm:text-lg font-bold flex-shrink-0">
                {member.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 truncate">{member.name}</h3>
                <p className="text-xs sm:text-sm text-gray-600 truncate">{member.role}</p>
                <p className="text-xs text-gray-500 mt-1 flex items-center">
                  <Building2 className="w-3 h-3 mr-1 flex-shrink-0" />
                  <span className="truncate">{member.department}</span>
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <a
                href={`mailto:${member.email}`}
                className="flex items-center text-xs sm:text-sm text-gray-600 hover:text-orange-600 active:text-orange-700 transition-colors touch-manipulation break-all"
              >
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                <span className="truncate">{member.email}</span>
              </a>
              <a
                href={`tel:${member.phone}`}
                className="flex items-center text-xs sm:text-sm text-gray-600 hover:text-orange-600 active:text-orange-700 transition-colors touch-manipulation"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                {member.phone}
              </a>
              <p className="text-xs text-gray-500 flex items-center">
                <User className="w-3 h-3 mr-1 flex-shrink-0" />
                <span className="truncate">{member.location}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <div className="text-center py-8 sm:py-12 bg-white rounded-lg border border-gray-200">
          <Users className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 mx-auto mb-3 sm:mb-4" />
          <p className="text-sm sm:text-base text-gray-600">No team members found matching your search.</p>
        </div>
      )}
    </div>
  )
}

