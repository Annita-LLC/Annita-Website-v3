'use client'

import { useState } from 'react'
import { Star, Target, TrendingUp, FileText, Calendar, CheckCircle2, Clock, Award, User, BarChart3 } from 'lucide-react'

export default function PerformanceReviews() {
  const [activeTab, setActiveTab] = useState<'self-assessment' | 'goals' | 'history'>('self-assessment')

  const currentGoals = [
    { id: 1, title: 'Complete Q4 Project', progress: 75, deadline: '2024-12-31', status: 'on-track' },
    { id: 2, title: 'Improve Team Collaboration', progress: 60, deadline: '2025-01-15', status: 'on-track' },
    { id: 3, title: 'Complete Training Course', progress: 100, deadline: '2024-12-20', status: 'completed' },
  ]

  const reviewHistory = [
    { id: 1, period: 'Q3 2024', rating: 4.5, reviewer: 'Jane Smith', date: '2024-09-30', status: 'completed' },
    { id: 2, period: 'Q2 2024', rating: 4.2, reviewer: 'Jane Smith', date: '2024-06-30', status: 'completed' },
    { id: 3, period: 'Q1 2024', rating: 4.0, reviewer: 'Jane Smith', date: '2024-03-31', status: 'completed' },
  ]

  const selfAssessment = {
    strengths: '',
    areasForImprovement: '',
    achievements: '',
    challenges: '',
    futureGoals: ''
  }

  const [assessment, setAssessment] = useState(selfAssessment)

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Performance & Reviews</h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">Track your performance, goals, and reviews</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex border-b border-gray-200 overflow-x-auto scrollbar-hide">
          {[
            { id: 'self-assessment' as const, label: 'Self Assessment', icon: FileText },
            { id: 'goals' as const, label: 'Goals & Objectives', icon: Target },
            { id: 'history' as const, label: 'Review History', icon: Calendar },
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
          {/* Self Assessment Tab */}
          {activeTab === 'self-assessment' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>Current Review Period:</strong> Q4 2024 (Oct - Dec 2024)
                </p>
                <p className="text-xs text-blue-600 mt-1">Deadline: December 31, 2024</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Key Strengths & Achievements
                  </label>
                  <textarea
                    value={assessment.strengths}
                    onChange={(e) => setAssessment({ ...assessment, strengths: e.target.value })}
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                    placeholder="Describe your key strengths and major achievements this period..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Areas for Improvement
                  </label>
                  <textarea
                    value={assessment.areasForImprovement}
                    onChange={(e) => setAssessment({ ...assessment, areasForImprovement: e.target.value })}
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                    placeholder="Identify areas where you'd like to improve..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Major Accomplishments
                  </label>
                  <textarea
                    value={assessment.achievements}
                    onChange={(e) => setAssessment({ ...assessment, achievements: e.target.value })}
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                    placeholder="List your major accomplishments and contributions..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Challenges Faced
                  </label>
                  <textarea
                    value={assessment.challenges}
                    onChange={(e) => setAssessment({ ...assessment, challenges: e.target.value })}
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                    placeholder="Describe any challenges you encountered and how you addressed them..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Future Goals & Development Plans
                  </label>
                  <textarea
                    value={assessment.futureGoals}
                    onChange={(e) => setAssessment({ ...assessment, futureGoals: e.target.value })}
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                    placeholder="Outline your goals and development plans for the next period..."
                  />
                </div>

                <button
                  onClick={() => alert('Self-assessment submitted successfully!\n\nYour assessment has been saved and will be reviewed by your manager.')}
                  className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 active:bg-orange-800 font-medium transition-colors touch-manipulation"
                >
                  Submit Self-Assessment
                </button>
              </div>
            </div>
          )}

          {/* Goals Tab */}
          {activeTab === 'goals' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Current Goals</h3>
                <button
                  onClick={() => alert('Add New Goal\n\nIn production, this would open a form to create a new goal.')}
                  className="px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium touch-manipulation"
                >
                  + Add Goal
                </button>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {currentGoals.map((goal) => (
                  <div key={goal.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{goal.title}</h4>
                        <p className="text-xs text-gray-500">Deadline: {goal.deadline}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded ${
                        goal.status === 'completed'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {goal.status === 'completed' ? 'Completed' : 'In Progress'}
                      </span>
                    </div>
                    <div className="mb-2">
                      <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{goal.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            goal.progress === 100 ? 'bg-green-500' : 'bg-orange-500'
                          }`}
                          style={{ width: `${goal.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Review History Tab */}
          {activeTab === 'history' && (
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">Past Performance Reviews</h3>
              <div className="space-y-3 sm:space-y-4">
                {reviewHistory.map((review) => (
                  <div key={review.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{review.period}</h4>
                        <p className="text-xs text-gray-500">Reviewed by {review.reviewer} on {review.date}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-bold text-gray-900">{review.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span className="text-xs text-green-600 font-medium">{review.status}</span>
                    </div>
                    <button
                      onClick={() => alert(`Viewing ${review.period} Review Details\n\nIn production, this would show the full review details.`)}
                      className="mt-3 text-xs sm:text-sm text-orange-600 hover:text-orange-700 font-medium touch-manipulation"
                    >
                      View Details →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

