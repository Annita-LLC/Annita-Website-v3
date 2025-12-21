'use client'

import { useState } from 'react'
import { Briefcase, Plus, Users, Calendar, CheckCircle2, Clock, AlertCircle, Target } from 'lucide-react'

interface ProjectManagementProps {
  userRole: string
}

export default function ProjectManagement({ userRole }: ProjectManagementProps) {
  const [activeView, setActiveView] = useState<'all' | 'active' | 'completed'>('all')

  const projects = [
    { id: 1, name: 'Q4 Product Launch', status: 'active', progress: 85, deadline: '2024-12-31', teamSize: 8, priority: 'high', description: 'Launch new product features and ensure all testing is complete' },
    { id: 2, name: 'Website Redesign', status: 'active', progress: 60, deadline: '2025-01-15', teamSize: 5, priority: 'medium', description: 'Complete redesign of company website' },
    { id: 3, name: 'Mobile App Development', status: 'active', progress: 45, deadline: '2025-02-28', teamSize: 6, priority: 'high', description: 'Develop new mobile application' },
    { id: 4, name: 'Marketing Campaign Q3', status: 'completed', progress: 100, deadline: '2024-09-30', teamSize: 4, priority: 'medium', description: 'Q3 marketing campaign execution' },
  ]

  const filteredProjects = projects.filter(project => {
    if (activeView === 'active') return project.status === 'active'
    if (activeView === 'completed') return project.status === 'completed'
    return true
  })

  if (userRole !== 'manager' && userRole !== 'ceo' && userRole !== 'hr') {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 sm:p-12 text-center">
        <Briefcase className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Access Denied</h3>
        <p className="text-sm sm:text-base text-gray-600">You need manager or higher access to manage projects.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Project Management</h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">Manage team projects and track progress</p>
        </div>
        <button
          onClick={() => alert('Create New Project\n\nIn production, this would open a form to create a new project.')}
          className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation flex items-center justify-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>New Project</span>
        </button>
      </div>

      {/* View Toggle */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex space-x-2">
          {[
            { id: 'all' as const, label: 'All Projects', count: projects.length },
            { id: 'active' as const, label: 'Active', count: projects.filter(p => p.status === 'active').length },
            { id: 'completed' as const, label: 'Completed', count: projects.filter(p => p.status === 'completed').length },
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
              {view.label} ({view.count})
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <Briefcase className="w-5 h-5 text-orange-600" />
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900">{project.name}</h4>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-3">{project.description}</p>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Users className="w-3.5 h-3.5" />
                    <span>{project.teamSize} members</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{project.deadline}</span>
                  </div>
                  <span className={`px-2 py-1 rounded ${
                    project.priority === 'high' ? 'bg-red-100 text-red-700' :
                    project.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {project.priority} priority
                  </span>
                </div>
              </div>
              <div>
                {project.status === 'completed' ? (
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                ) : project.progress < 50 ? (
                  <AlertCircle className="w-6 h-6 text-red-600" />
                ) : (
                  <Clock className="w-6 h-6 text-blue-600" />
                )}
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                <span>Progress</span>
                <span className="font-semibold">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    project.progress === 100 ? 'bg-green-500' :
                    project.progress < 50 ? 'bg-red-500' :
                    'bg-orange-500'
                  }`}
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => alert(`Viewing ${project.name} details\n\nIn production, this would show detailed project information.`)}
                className="flex-1 px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
              >
                View Details
              </button>
              <button
                onClick={() => alert(`Managing team for ${project.name}\n\nIn production, this would open team management.`)}
                className="px-3 sm:px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
              >
                Manage Team
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 sm:p-12 text-center">
          <Briefcase className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">No Projects Found</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4">Get started by creating your first project!</p>
          <button
            onClick={() => alert('Create New Project\n\nIn production, this would open a form to create a new project.')}
            className="px-4 sm:px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-sm font-medium transition-colors touch-manipulation"
          >
            Create Project
          </button>
        </div>
      )}
    </div>
  )
}

