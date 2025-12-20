'use client'

import React, { useState } from 'react'
import { Calendar, Download, Plus, Trash2, Clock, CheckCircle2, AlertCircle, Briefcase, Target, TrendingUp, Award, User, Mail, Phone, Building2, ChevronDown, ChevronUp } from 'lucide-react'

export default function WorkTracker() {
  const [formData, setFormData] = useState({
    employeeName: '',
    employeeId: '',
    department: '',
    role: '',
    supervisorName: '',
    email: '',
    phone: '',
    weekEnding: '',
    weekStarting: '',
    totalHours: 0,
    additionalNotes: ''
  })

  const [tasks, setTasks] = useState([
    { id: 1, date: '', description: '', hoursSpent: '', status: 'In Progress', priority: 'Medium', project: '', deliverables: '' }
  ])

  const [achievements, setAchievements] = useState('')
  const [challenges, setChallenges] = useState('')
  const [nextWeekGoals, setNextWeekGoals] = useState('')
  const [supportNeeded, setSupportNeeded] = useState('')
  const [expandedSections, setExpandedSections] = useState({
    employee: true,
    tasks: true,
    summary: true,
    additional: true
  })

  const departments = [
    'Executive Management',
    'Human Resources',
    'Finance & Accounting',
    'Sales & Marketing',
    'Operations',
    'IT & Technology',
    'Customer Service',
    'Legal & Compliance',
    'Research & Development',
    'Product Management',
    'Quality Assurance',
    'Supply Chain',
    'Business Development',
    'Administration',
    'Other'
  ]

  const statusOptions = ['Not Started', 'In Progress', 'Completed', 'On Hold', 'Blocked']
  const priorityOptions = ['Low', 'Medium', 'High', 'Critical']

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }))
  }

  const addTask = () => {
    setTasks([...tasks, {
      id: Date.now(),
      date: '',
      description: '',
      hoursSpent: '',
      status: 'In Progress',
      priority: 'Medium',
      project: '',
      deliverables: ''
    }])
  }

  const removeTask = (id: number) => {
    if (tasks.length > 1) {
      const updatedTasks = tasks.filter(task => task.id !== id)
      setTasks(updatedTasks)
      calculateTotalHours(updatedTasks)
    }
  }

  const updateTask = (id: number, field: string, value: string) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, [field]: value } : task
    )
    setTasks(updatedTasks)
    if (field === 'hoursSpent') {
      calculateTotalHours(updatedTasks)
    }
  }

  const calculateTotalHours = (taskList: typeof tasks) => {
    const total = taskList.reduce((sum, task) => {
      return sum + (parseFloat(task.hoursSpent) || 0)
    }, 0)
    setFormData(prev => ({ ...prev, totalHours: parseFloat(total.toFixed(1)) }))
  }

  const calculateWeekStarting = (weekEnding: string) => {
    if (!weekEnding) return ''
    const endDate = new Date(weekEnding)
    const startDate = new Date(endDate)
    startDate.setDate(endDate.getDate() - 6)
    return startDate.toISOString().split('T')[0]
  }

  const handleWeekEndingChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      weekEnding: value,
      weekStarting: calculateWeekStarting(value)
    }))
  }

  const validateForm = () => {
    const errors: string[] = []
    
    if (!formData.employeeName) errors.push('Employee Name')
    if (!formData.employeeId) errors.push('Employee ID')
    if (!formData.department) errors.push('Department')
    if (!formData.role) errors.push('Job Role')
    if (!formData.weekEnding) errors.push('Week Ending Date')
    
    const incompleteTasks = tasks.filter(task => 
      !task.date || !task.description || !task.hoursSpent
    )
    
    if (errors.length > 0) {
      alert(`Please fill in the following required fields:\n${errors.join(', ')}`)
      return false
    }
    
    if (incompleteTasks.length > 0) {
      alert('Please complete all required task fields (Date, Description, and Hours Spent).')
      return false
    }
    
    return true
  }

  const handleSubmit = () => {
    if (validateForm()) {
      alert('✓ Work tracker submitted successfully!\n\nYour weekly report has been recorded and will be reviewed for payroll processing.\n\nThank you for your submission!')
    }
  }

  const exportToPDF = () => {
    window.print()
  }

  const clearForm = () => {
    if (confirm('Are you sure you want to clear all fields? This action cannot be undone.')) {
      setFormData({
        employeeName: '',
        employeeId: '',
        department: '',
        role: '',
        supervisorName: '',
        email: '',
        phone: '',
        weekEnding: '',
        weekStarting: '',
        totalHours: 0,
        additionalNotes: ''
      })
      setTasks([
        { id: 1, date: '', description: '', hoursSpent: '', status: 'In Progress', priority: 'Medium', project: '', deliverables: '' }
      ])
      setAchievements('')
      setChallenges('')
      setNextWeekGoals('')
      setSupportNeeded('')
    }
  }

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'Critical': return 'bg-red-100 text-red-800 border-red-300'
      case 'High': return 'bg-orange-100 text-orange-800 border-orange-300'
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-300'
      case 'Low': return 'bg-green-100 text-green-800 border-green-300'
      default: return 'bg-gray-100 text-gray-800 border-gray-300'
    }
  }

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Completed': return 'bg-green-100 text-green-800 border-green-300'
      case 'In Progress': return 'bg-blue-100 text-blue-800 border-blue-300'
      case 'On Hold': return 'bg-yellow-100 text-yellow-800 border-yellow-300'
      case 'Blocked': return 'bg-red-100 text-red-800 border-red-300'
      case 'Not Started': return 'bg-gray-100 text-gray-800 border-gray-300'
      default: return 'bg-gray-100 text-gray-800 border-gray-300'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-2 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-t-xl sm:rounded-t-2xl shadow-xl p-4 sm:p-6 md:p-8 border-b-4 border-indigo-600">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="w-full sm:w-auto">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-1 sm:mb-2">
                Annita LLC
              </h1>
              <p className="text-base sm:text-lg text-indigo-600 font-semibold">Weekly Work Activity Tracker</p>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 bg-indigo-50 px-3 py-2 rounded-lg">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="whitespace-nowrap">Week Ending Report</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-b-xl sm:rounded-b-2xl shadow-xl p-4 sm:p-6 md:p-8">
          
          {/* Employee Information Section */}
          <div className="mb-6 sm:mb-8">
            <button
              type="button"
              onClick={() => toggleSection('employee')}
              className="w-full flex items-center justify-between text-left mb-4 group"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <User className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                  Employee Information
                </h2>
              </div>
              {expandedSections.employee ? 
                <ChevronUp className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" /> : 
                <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
              }
            </button>
            
            {expandedSections.employee && (
              <>
                <div className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="sm:col-span-2 lg:col-span-1">
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.employeeName}
                      onChange={(e) => setFormData({ ...formData, employeeName: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      Employee ID <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.employeeId}
                      onChange={(e) => setFormData({ ...formData, employeeId: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder="e.g., EMP001"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      Department <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select Department</option>
                      {departments.map(dept => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      Job Role/Position <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder="e.g., Software Engineer"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      Supervisor/Manager Name
                    </label>
                    <input
                      type="text"
                      value={formData.supervisorName}
                      onChange={(e) => setFormData({ ...formData, supervisorName: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder="Supervisor's name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder="your.email@annita.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      Week Starting (Monday)
                    </label>
                    <input
                      type="date"
                      value={formData.weekStarting}
                      readOnly
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border-2 border-gray-200 rounded-lg bg-gray-50 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      Week Ending (Friday) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={formData.weekEnding}
                      onChange={(e) => handleWeekEndingChange(e.target.value)}
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      Total Hours This Week
                    </label>
                    <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-lg">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 flex-shrink-0" />
                      <span className="text-base sm:text-lg font-bold text-indigo-600">
                        {formData.totalHours} hours
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Weekly Activities Section */}
          <div className="mb-6 sm:mb-8">
            <button
              type="button"
              onClick={() => toggleSection('tasks')}
              className="w-full flex items-center justify-between text-left mb-4 group"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                  Weekly Activities & Tasks
                </h2>
              </div>
              {expandedSections.tasks ? 
                <ChevronUp className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" /> : 
                <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
              }
            </button>
            
            {expandedSections.tasks && (
              <>
                <div className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4"></div>
                <button
                  type="button"
                  onClick={addTask}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-indigo-600 text-white text-sm sm:text-base rounded-lg hover:bg-indigo-700 transition-all mb-4 shadow-lg hover:shadow-xl"
                >
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                  Add New Task
                </button>

                <div className="space-y-4">
                  {tasks.map((task, index) => (
                    <div key={task.id} className="border-2 border-gray-200 rounded-xl p-3 sm:p-4 md:p-5 hover:border-indigo-300 transition-all bg-gradient-to-br from-white to-gray-50 shadow-sm">
                      <div className="flex items-center justify-between mb-3 sm:mb-4 flex-wrap gap-2">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-gray-700 text-sm sm:text-base">Task #{index + 1}</span>
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full border ${getPriorityColor(task.priority)}`}>
                            {task.priority}
                          </span>
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full border ${getStatusColor(task.status)}`}>
                            {task.status}
                          </span>
                        </div>
                        {tasks.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeTask(task.id)}
                            className="text-red-500 hover:text-red-700 transition-colors p-1 hover:bg-red-50 rounded"
                          >
                            <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                            Date <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="date"
                            value={task.date}
                            onChange={(e) => updateTask(task.id, 'date', e.target.value)}
                            className="w-full px-3 py-2 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                            Hours Spent <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="number"
                            min="0"
                            step="0.5"
                            value={task.hoursSpent}
                            onChange={(e) => updateTask(task.id, 'hoursSpent', e.target.value)}
                            className="w-full px-3 py-2 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                            placeholder="0.0"
                          />
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                            Status <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={task.status}
                            onChange={(e) => updateTask(task.id, 'status', e.target.value)}
                            className="w-full px-3 py-2 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                          >
                            {statusOptions.map(status => (
                              <option key={status} value={status}>{status}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                            Priority <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={task.priority}
                            onChange={(e) => updateTask(task.id, 'priority', e.target.value)}
                            className="w-full px-3 py-2 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                          >
                            {priorityOptions.map(priority => (
                              <option key={priority} value={priority}>{priority}</option>
                            ))}
                          </select>
                        </div>
                        <div className="sm:col-span-2">
                          <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                            Project/Initiative Name
                          </label>
                          <input
                            type="text"
                            value={task.project}
                            onChange={(e) => updateTask(task.id, 'project', e.target.value)}
                            className="w-full px-3 py-2 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                            placeholder="e.g., Q4 Marketing Campaign, Website Redesign"
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                            Task Description / Activity Details <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            value={task.description}
                            onChange={(e) => updateTask(task.id, 'description', e.target.value)}
                            rows={3}
                            className="w-full px-3 py-2 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none resize-none transition-colors"
                            placeholder="Describe what you worked on: meetings attended, documents created, code written, analysis performed, etc."
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                            Key Deliverables / Outcomes
                          </label>
                          <textarea
                            value={task.deliverables}
                            onChange={(e) => updateTask(task.id, 'deliverables', e.target.value)}
                            rows={2}
                            className="w-full px-3 py-2 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none resize-none transition-colors"
                            placeholder="What was completed or produced? (e.g., Report submitted, Feature deployed, Client presentation delivered)"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Weekly Summary Section */}
          <div className="mb-6 sm:mb-8">
            <button
              type="button"
              onClick={() => toggleSection('summary')}
              className="w-full flex items-center justify-between text-left mb-4 group"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                  Weekly Summary & Performance
                </h2>
              </div>
              {expandedSections.summary ? 
                <ChevronUp className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" /> : 
                <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
              }
            </button>
            
            {expandedSections.summary && (
              <>
                <div className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4"></div>
                <div className="grid grid-cols-1 gap-4 sm:gap-5">
                  <div>
                    <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                      Key Achievements & Accomplishments This Week
                    </label>
                    <textarea
                      value={achievements}
                      onChange={(e) => setAchievements(e.target.value)}
                      rows={3}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none resize-none transition-colors"
                      placeholder="List your major wins, milestones reached, goals completed, or positive outcomes..."
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                      Challenges & Obstacles Encountered
                    </label>
                    <textarea
                      value={challenges}
                      onChange={(e) => setChallenges(e.target.value)}
                      rows={3}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none resize-none transition-colors"
                      placeholder="What roadblocks, difficulties, or issues did you face? Technical problems, resource constraints, delays, etc."
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      <Target className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                      Goals & Priorities for Next Week
                    </label>
                    <textarea
                      value={nextWeekGoals}
                      onChange={(e) => setNextWeekGoals(e.target.value)}
                      rows={3}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none resize-none transition-colors"
                      placeholder="What do you plan to work on next week? List your top 3-5 priorities..."
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                      Support or Resources Needed
                    </label>
                    <textarea
                      value={supportNeeded}
                      onChange={(e) => setSupportNeeded(e.target.value)}
                      rows={3}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none resize-none transition-colors"
                      placeholder="What help, tools, training, or resources would help you be more effective? Any requests or escalations?"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Additional Notes Section */}
          <div className="mb-6 sm:mb-8">
            <button
              type="button"
              onClick={() => toggleSection('additional')}
              className="w-full flex items-center justify-between text-left mb-4 group"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                  Additional Notes & Comments
                </h2>
              </div>
              {expandedSections.additional ? 
                <ChevronUp className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" /> : 
                <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
              }
            </button>
            
            {expandedSections.additional && (
              <>
                <div className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4"></div>
                <textarea
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none resize-none transition-colors"
                  placeholder="Any other information you'd like to share: team collaboration notes, client feedback, suggestions for improvement, time off planned, etc."
                />
              </>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-end pt-6 border-t-2 border-gray-200">
            <button
              type="button"
              onClick={clearForm}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-500 text-white text-sm sm:text-base rounded-lg hover:bg-gray-600 transition-all font-semibold shadow-md hover:shadow-lg"
            >
              <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
              Clear Form
            </button>
            <button
              type="button"
              onClick={exportToPDF}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-600 text-white text-sm sm:text-base rounded-lg hover:bg-gray-700 transition-all font-semibold shadow-md hover:shadow-lg"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              Export/Print
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-green-600 to-green-700 text-white text-sm sm:text-base rounded-lg hover:from-green-700 hover:to-green-800 transition-all font-semibold shadow-lg hover:shadow-xl"
            >
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
              Submit Weekly Report
            </button>
          </div>

          {/* Footer Instructions */}
          <div className="mt-6 sm:mt-8 space-y-4">
            <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-lg">
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                <strong className="text-blue-700">📋 Submission Instructions:</strong> Complete this form every Friday by 5:00 PM. 
                Ensure all required fields marked with <span className="text-red-500">*</span> are filled. Your weekly submissions are used for payroll processing, 
                performance tracking, and resource allocation. Contact HR at hr@annita.com if you have questions.
              </p>
            </div>
            
            <div className="p-3 sm:p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-lg">
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                <strong className="text-green-700">✓ Helpful Tips:</strong> Be specific in task descriptions. Include metrics and outcomes where possible. 
                Document all meetings, trainings, and collaborative work. Track time accurately for proper payroll processing. 
                Use the priority and status fields to help your manager understand your workload.
              </p>
            </div>
            
            <div className="p-3 sm:p-4 bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 rounded-lg">
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                <strong className="text-purple-700">🔒 Privacy Notice:</strong> All information submitted is confidential and used solely for internal HR, 
                payroll, and management purposes. Your data is protected under company privacy policies and applicable employment laws.
              </p>
            </div>
          </div>

          {/* Statistics Summary */}
          <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 sm:p-4 rounded-lg border-2 border-blue-200">
              <div className="text-xs sm:text-sm font-semibold text-blue-700 mb-1">Total Tasks</div>
              <div className="text-xl sm:text-2xl font-bold text-blue-900">{tasks.length}</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-3 sm:p-4 rounded-lg border-2 border-green-200">
              <div className="text-xs sm:text-sm font-semibold text-green-700 mb-1">Completed</div>
              <div className="text-xl sm:text-2xl font-bold text-green-900">
                {tasks.filter(t => t.status === 'Completed').length}
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-3 sm:p-4 rounded-lg border-2 border-orange-200">
              <div className="text-xs sm:text-sm font-semibold text-orange-700 mb-1">In Progress</div>
              <div className="text-xl sm:text-2xl font-bold text-orange-900">
                {tasks.filter(t => t.status === 'In Progress').length}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-3 sm:p-4 rounded-lg border-2 border-purple-200">
              <div className="text-xs sm:text-sm font-semibold text-purple-700 mb-1">Total Hours</div>
              <div className="text-xl sm:text-2xl font-bold text-purple-900">{formData.totalHours}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          .bg-gradient-to-br { background: white !important; }
          button { display: none !important; }
        }
      `}</style>
    </div>
  )
}

