'use client'

import { useState } from 'react'
import { BookOpen, PlayCircle, Award, CheckCircle2, Clock, TrendingUp, Download, Search } from 'lucide-react'

export default function TrainingDevelopment() {
  const [activeTab, setActiveTab] = useState<'available' | 'in-progress' | 'completed' | 'certifications'>('available')
  const [searchTerm, setSearchTerm] = useState('')

  const availableCourses = [
    { id: 1, title: 'Leadership Fundamentals', category: 'Leadership', duration: '8 hours', level: 'Intermediate', rating: 4.8 },
    { id: 2, title: 'Project Management Essentials', category: 'Management', duration: '12 hours', level: 'Beginner', rating: 4.6 },
    { id: 3, title: 'Advanced React Development', category: 'Technical', duration: '16 hours', level: 'Advanced', rating: 4.9 },
    { id: 4, title: 'Effective Communication', category: 'Soft Skills', duration: '6 hours', level: 'Beginner', rating: 4.7 },
  ]

  const inProgressCourses = [
    { id: 1, title: 'Data Analytics Fundamentals', progress: 65, totalModules: 10, completedModules: 6.5, deadline: '2025-01-15' },
    { id: 2, title: 'Agile Methodology', progress: 40, totalModules: 8, completedModules: 3.2, deadline: '2025-02-01' },
  ]

  const completedCourses = [
    { id: 1, title: 'Introduction to Cloud Computing', completedDate: '2024-11-30', score: 95, certificate: true },
    { id: 2, title: 'Time Management Mastery', completedDate: '2024-10-15', score: 88, certificate: true },
  ]

  const certifications = [
    { id: 1, name: 'Certified Project Manager', issuer: 'PMI', issueDate: '2024-09-15', expiryDate: '2027-09-15', status: 'active' },
    { id: 2, name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issueDate: '2024-06-20', expiryDate: '2027-06-20', status: 'active' },
  ]

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Training & Development</h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">Enhance your skills and advance your career</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex border-b border-gray-200 overflow-x-auto scrollbar-hide">
          {[
            { id: 'available' as const, label: 'Available Courses', icon: BookOpen },
            { id: 'in-progress' as const, label: 'In Progress', icon: PlayCircle },
            { id: 'completed' as const, label: 'Completed', icon: CheckCircle2 },
            { id: 'certifications' as const, label: 'Certifications', icon: Award },
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
          {/* Available Courses Tab */}
          {activeTab === 'available' && (
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {availableCourses.map((course) => (
                  <div key={course.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{course.title}</h4>
                        <p className="text-xs text-gray-500">{course.category}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="text-xs font-medium text-yellow-600">{course.rating}</span>
                        <span className="text-yellow-400">★</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-xs text-gray-600 mb-3">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{course.duration}</span>
                      </div>
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded">{course.level}</span>
                    </div>
                    <button
                      onClick={() => alert(`Enrolling in ${course.title}\n\nIn production, this would enroll you in the course.`)}
                      className="w-full px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
                    >
                      Enroll Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* In Progress Tab */}
          {activeTab === 'in-progress' && (
            <div className="space-y-4">
              {inProgressCourses.map((course) => (
                <div key={course.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{course.title}</h4>
                      <p className="text-xs text-gray-500">Deadline: {course.deadline}</p>
                    </div>
                    <span className="text-sm font-bold text-orange-600">{course.progress}%</span>
                  </div>
                  <div className="mb-2">
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                      <span>Module {course.completedModules} of {course.totalModules}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-orange-500"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => alert(`Continue ${course.title}\n\nIn production, this would take you to the next module.`)}
                    className="w-full px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
                  >
                    Continue Learning
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Completed Tab */}
          {activeTab === 'completed' && (
            <div className="space-y-4">
              {completedCourses.map((course) => (
                <div key={course.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{course.title}</h4>
                      <p className="text-xs text-gray-500">Completed: {course.completedDate}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-bold text-green-600">{course.score}%</span>
                      {course.certificate && <Award className="w-4 h-4 text-yellow-500" />}
                    </div>
                  </div>
                  {course.certificate && (
                    <button
                      onClick={() => alert(`Downloading certificate for ${course.title}\n\nIn production, this would download your certificate.`)}
                      className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation flex items-center justify-center space-x-2"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Certificate</span>
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <Award className="w-5 h-5 text-yellow-500" />
                        <h4 className="text-sm sm:text-base font-semibold text-gray-900">{cert.name}</h4>
                      </div>
                      <p className="text-xs text-gray-500 mb-1">Issued by: {cert.issuer}</p>
                      <p className="text-xs text-gray-500">Issued: {cert.issueDate} | Expires: {cert.expiryDate}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      cert.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                  <button
                    onClick={() => alert(`Downloading ${cert.name} certificate\n\nIn production, this would download your certificate.`)}
                    className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation flex items-center justify-center space-x-2"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Certificate</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

