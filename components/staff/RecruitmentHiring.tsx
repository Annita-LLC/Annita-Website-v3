'use client'

import { useState } from 'react'
import { UserPlus, Search, Filter, Calendar, CheckCircle2, Clock, X, FileText } from 'lucide-react'

interface RecruitmentHiringProps {
  userRole: string
}

export default function RecruitmentHiring({ userRole }: RecruitmentHiringProps) {
  const [activeTab, setActiveTab] = useState<'postings' | 'candidates' | 'interviews'>('postings')
  const [searchTerm, setSearchTerm] = useState('')

  const jobPostings = [
    { id: 1, title: 'Senior Software Engineer', department: 'IT & Technology', status: 'open', applicants: 12, postedDate: '2024-12-01' },
    { id: 2, title: 'Marketing Manager', department: 'Sales & Marketing', status: 'open', applicants: 8, postedDate: '2024-12-05' },
    { id: 3, title: 'HR Coordinator', department: 'Human Resources', status: 'closed', applicants: 15, postedDate: '2024-11-20' },
  ]

  const candidates = [
    { id: 1, name: 'Alex Johnson', position: 'Senior Software Engineer', stage: 'Interview', status: 'scheduled', interviewDate: '2024-12-20', rating: 4.5 },
    { id: 2, name: 'Maria Garcia', position: 'Marketing Manager', stage: 'Application Review', status: 'pending', interviewDate: null, rating: null },
    { id: 3, name: 'David Lee', position: 'Senior Software Engineer', stage: 'Offer', status: 'pending', interviewDate: null, rating: 4.8 },
  ]

  const interviews = [
    { id: 1, candidate: 'Alex Johnson', position: 'Senior Software Engineer', date: '2024-12-20', time: '10:00 AM', interviewer: 'Jane Smith', status: 'scheduled' },
    { id: 2, candidate: 'Sarah Williams', position: 'Marketing Manager', date: '2024-12-21', time: '2:00 PM', interviewer: 'John Doe', status: 'scheduled' },
  ]

  if (userRole !== 'hr' && userRole !== 'ceo' && userRole !== 'manager') {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 sm:p-12 text-center">
        <UserPlus className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Access Denied</h3>
        <p className="text-sm sm:text-base text-gray-600">You need HR or higher access to view recruitment.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Recruitment & Hiring</h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">Manage job postings, candidates, and interviews</p>
        </div>
        <button
          onClick={() => alert('Create New Job Posting\n\nIn production, this would open a form to create a new job posting.')}
          className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation flex items-center justify-center space-x-2"
        >
          <UserPlus className="w-4 h-4" />
          <span>New Posting</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex border-b border-gray-200 overflow-x-auto scrollbar-hide">
          {[
            { id: 'postings' as const, label: 'Job Postings', icon: FileText },
            { id: 'candidates' as const, label: 'Candidates', icon: UserPlus },
            { id: 'interviews' as const, label: 'Interviews', icon: Calendar },
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
          {/* Job Postings Tab */}
          {activeTab === 'postings' && (
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Search job postings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-3 sm:space-y-4">
                {jobPostings.map((posting) => (
                  <div key={posting.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{posting.title}</h4>
                        <p className="text-xs text-gray-500 mb-2">{posting.department} • Posted: {posting.postedDate}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-600">
                          <span>{posting.applicants} applicants</span>
                        </div>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded ${
                        posting.status === 'open' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {posting.status}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => alert(`Viewing ${posting.title} details\n\nIn production, this would show job posting details.`)}
                        className="flex-1 px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => alert(`Managing applicants for ${posting.title}\n\nIn production, this would show all applicants.`)}
                        className="px-3 sm:px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
                      >
                        View Applicants
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Candidates Tab */}
          {activeTab === 'candidates' && (
            <div className="space-y-4">
              {candidates.map((candidate) => (
                <div key={candidate.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{candidate.name}</h4>
                      <p className="text-xs text-gray-500 mb-2">{candidate.position}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-600">
                        <span>Stage: {candidate.stage}</span>
                        {candidate.rating && (
                          <span>Rating: {candidate.rating}/5.0</span>
                        )}
                      </div>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      candidate.status === 'scheduled' ? 'bg-blue-100 text-blue-700' :
                      candidate.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {candidate.status}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => alert(`Viewing ${candidate.name}'s profile\n\nIn production, this would show candidate details.`)}
                      className="flex-1 px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
                    >
                      View Profile
                    </button>
                    {candidate.stage === 'Offer' && (
                      <button
                        onClick={() => alert(`Sending offer to ${candidate.name}\n\nIn production, this would send an offer letter.`)}
                        className="px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
                      >
                        Send Offer
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Interviews Tab */}
          {activeTab === 'interviews' && (
            <div className="space-y-4">
              {interviews.map((interview) => (
                <div key={interview.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{interview.candidate}</h4>
                      <p className="text-xs text-gray-500 mb-2">{interview.position}</p>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{interview.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{interview.time}</span>
                        </div>
                        <span>Interviewer: {interview.interviewer}</span>
                      </div>
                    </div>
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded">{interview.status}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => alert(`Viewing interview details for ${interview.candidate}\n\nIn production, this would show interview details.`)}
                      className="flex-1 px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => alert(`Rescheduling interview with ${interview.candidate}\n\nIn production, this would open reschedule form.`)}
                      className="px-3 sm:px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
                    >
                      Reschedule
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

