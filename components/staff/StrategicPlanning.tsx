'use client'

import { useState } from 'react'
import { Target, TrendingUp, Calendar, Plus, BarChart3, CheckCircle2, Clock, AlertCircle } from 'lucide-react'

interface StrategicPlanningProps {
  userRole: string
}

export default function StrategicPlanning({ userRole }: StrategicPlanningProps) {
  const [activeView, setActiveView] = useState<'initiatives' | 'goals' | 'kpis'>('initiatives')

  const strategicInitiatives = [
    { id: 1, name: 'Market Expansion to West Africa', description: 'Expand operations to 3 new countries', progress: 75, deadline: '2025-06-30', status: 'on-track', priority: 'high', budget: 500000, spent: 375000 },
    { id: 2, name: 'Digital Transformation Initiative', description: 'Complete digital infrastructure upgrade', progress: 60, deadline: '2025-12-31', status: 'on-track', priority: 'high', budget: 1000000, spent: 600000 },
    { id: 3, name: 'Product Line Expansion', description: 'Launch 5 new product lines', progress: 40, deadline: '2025-09-30', status: 'at-risk', priority: 'medium', budget: 750000, spent: 300000 },
  ]

  const longTermGoals = [
    { id: 1, goal: 'Reach $10M Annual Revenue', timeframe: '2026', progress: 35, status: 'on-track' },
    { id: 2, goal: 'Expand to 10 African Countries', timeframe: '2027', progress: 30, status: 'on-track' },
    { id: 3, goal: 'Achieve 1M Active Users', timeframe: '2026', progress: 25, status: 'on-track' },
  ]

  const kpis = [
    { id: 1, name: 'Revenue Growth', target: 25, current: 18.5, unit: '%', status: 'below-target' },
    { id: 2, name: 'Customer Acquisition', target: 1000, current: 850, unit: 'customers', status: 'on-track' },
    { id: 3, name: 'Market Share', target: 25, current: 18.5, unit: '%', status: 'below-target' },
    { id: 4, name: 'Employee Satisfaction', target: 95, current: 92, unit: '%', status: 'on-track' },
  ]

  if (userRole !== 'ceo') {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 sm:p-12 text-center">
        <Target className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Access Denied</h3>
        <p className="text-sm sm:text-base text-gray-600">CEO access required for strategic planning.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Strategic Planning</h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">Strategic initiatives and long-term goals</p>
        </div>
        <button
          onClick={() => alert('Create New Initiative\n\nIn production, this would open a form to create a new strategic initiative.')}
          className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation flex items-center justify-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>New Initiative</span>
        </button>
      </div>

      {/* View Toggle */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex space-x-2">
          {[
            { id: 'initiatives' as const, label: 'Initiatives' },
            { id: 'goals' as const, label: 'Long-term Goals' },
            { id: 'kpis' as const, label: 'KPIs' },
          ].map((view) => (
            <button
              key={view.id}
              onClick={() => setActiveView(view.id)}
              className={`flex-1 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors touch-manipulation ${
                activeView === view.id
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {view.label}
            </button>
          ))}
        </div>
      </div>

      {/* Initiatives View */}
      {activeView === 'initiatives' && (
        <div className="space-y-4">
          {strategicInitiatives.map((initiative) => (
            <div key={initiative.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Target className="w-5 h-5 text-orange-600" />
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900">{initiative.name}</h4>
                    <span className={`px-2 py-0.5 text-xs font-medium rounded ${
                      initiative.priority === 'high' ? 'bg-red-100 text-red-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {initiative.priority}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3">{initiative.description}</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
                    <div>
                      <p className="text-gray-500">Deadline</p>
                      <p className="font-semibold text-gray-900">{initiative.deadline}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Budget</p>
                      <p className="font-semibold text-gray-900">${(initiative.budget / 1000).toFixed(0)}K</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Spent</p>
                      <p className="font-semibold text-gray-900">${(initiative.spent / 1000).toFixed(0)}K</p>
                    </div>
                  </div>
                </div>
                <div>
                  {initiative.status === 'on-track' ? (
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  ) : (
                    <AlertCircle className="w-6 h-6 text-red-600" />
                  )}
                </div>
              </div>
              <div className="mb-3">
                <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                  <span>Progress</span>
                  <span className="font-semibold">{initiative.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      initiative.status === 'on-track' ? 'bg-green-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${initiative.progress}%` }}
                  />
                </div>
              </div>
              <button
                onClick={() => alert(`Viewing details for ${initiative.name}\n\nIn production, this would show detailed initiative information.`)}
                className="w-full px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Goals View */}
      {activeView === 'goals' && (
        <div className="space-y-4">
          {longTermGoals.map((goal) => (
            <div key={goal.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{goal.goal}</h4>
                  <p className="text-xs text-gray-500">Target Date: {goal.timeframe}</p>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded ${
                  goal.status === 'on-track' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {goal.status}
                </span>
              </div>
              <div className="mb-3">
                <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                  <span>Progress</span>
                  <span className="font-semibold">{goal.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="h-2 rounded-full bg-orange-500" style={{ width: `${goal.progress}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* KPIs View */}
      {activeView === 'kpis' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {kpis.map((kpi) => (
            <div key={kpi.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900">{kpi.name}</h4>
                <BarChart3 className="w-5 h-5 text-blue-600" />
              </div>
              <div className="mb-3">
                <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                  <span>Current</span>
                  <span className="font-semibold text-gray-900">{kpi.current} {kpi.unit}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>Target</span>
                  <span className="font-semibold text-gray-900">{kpi.target} {kpi.unit}</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className={`h-2 rounded-full ${
                    kpi.status === 'on-track' ? 'bg-green-500' : 'bg-orange-500'
                  }`}
                  style={{ width: `${(kpi.current / kpi.target) * 100}%` }}
                />
              </div>
              <span className={`text-xs font-medium ${
                kpi.status === 'on-track' ? 'text-green-600' : 'text-orange-600'
              }`}>
                {kpi.status === 'on-track' ? 'On Track' : 'Below Target'}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
