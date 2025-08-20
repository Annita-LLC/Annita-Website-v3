'use client'

import { useState } from 'react'
import { 
  Bug, 
  AlertTriangle, 
  MessageSquare, 
  Upload, 
  Send, 
  CheckCircle,
  Monitor,
  Smartphone,
  Globe,
  Clock,
  User,
  FileText,
  Image,
  Video,
  Link,
  Info,
  X,
  Plus,
  Trash2
} from 'lucide-react'
import Button from '@/components/ui/Button'
import SEOHead from '@/components/seo/SEOHead'

const ReportIssuesPage = () => {
  const [formData, setFormData] = useState({
    issueType: '',
    priority: 'medium',
    service: '',
    title: '',
    description: '',
    stepsToReproduce: '',
    expectedBehavior: '',
    actualBehavior: '',
    frequency: 'sometimes',
    firstOccurrence: '',
    contactEmail: '',
    contactPhone: '',
    userName: '',
    userType: 'customer',
    deviceType: 'desktop',
    browser: '',
    operatingSystem: '',
    appVersion: '',
    attachments: [] as File[],
    screenshots: [] as File[],
    errorMessages: '',
    accountId: '',
    transactionId: '',
    url: '',
    additionalInfo: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const issueTypes = [
    { value: 'bug', label: 'Bug Report', icon: Bug, description: 'Technical issues or errors' },
    { value: 'feature', label: 'Feature Request', icon: Plus, description: 'Suggest new functionality' },
    { value: 'feedback', label: 'General Feedback', icon: MessageSquare, description: 'Share your thoughts' },
    { value: 'account', label: 'Account Issue', icon: User, description: 'Login, security, or account problems' },
    { value: 'payment', label: 'Payment Issue', icon: FileText, description: 'Transaction or billing problems' },
    { value: 'performance', label: 'Performance Issue', icon: Clock, description: 'Slow loading or responsiveness' },
    { value: 'security', label: 'Security Concern', icon: AlertTriangle, description: 'Privacy or security issues' },
    { value: 'accessibility', label: 'Accessibility Issue', icon: Info, description: 'Accessibility or usability problems' }
  ]

  const services = [
    { value: 'annitapay', label: 'AnnitaPay' },
    { value: 'shopping', label: 'Shopping/Marketplace' },
    { value: 'logistics', label: 'Logistics' },
    { value: 'ai', label: 'AI Services' },
    { value: 'connect', label: 'Connect' },
    { value: 'website', label: 'Website' },
    { value: 'mobile-app', label: 'Mobile App' },
    { value: 'api', label: 'API/Integrations' },
    { value: 'other', label: 'Other' }
  ]

  const priorities = [
    { value: 'low', label: 'Low', description: 'Minor issue, doesn\'t affect functionality' },
    { value: 'medium', label: 'Medium', description: 'Moderate impact on user experience' },
    { value: 'high', label: 'High', description: 'Significant impact on functionality' },
    { value: 'critical', label: 'Critical', description: 'Blocks core functionality or security issue' }
  ]

  const frequencies = [
    { value: 'once', label: 'Once', description: 'Happened only once' },
    { value: 'sometimes', label: 'Sometimes', description: 'Happens occasionally' },
    { value: 'often', label: 'Often', description: 'Happens frequently' },
    { value: 'always', label: 'Always', description: 'Happens every time' }
  ]

  const deviceTypes = [
    { value: 'desktop', label: 'Desktop/Laptop', icon: Monitor },
    { value: 'mobile', label: 'Mobile Phone', icon: Smartphone },
    { value: 'tablet', label: 'Tablet', icon: Monitor },
    { value: 'other', label: 'Other Device', icon: Monitor }
  ]

  const browsers = [
    'Chrome', 'Firefox', 'Safari', 'Edge', 'Opera', 'Internet Explorer', 'Other'
  ]

  const operatingSystems = [
    'Windows 10', 'Windows 11', 'macOS', 'Linux', 'iOS', 'Android', 'Other'
  ]

  const handleInputChange = (field: string, value: string | File[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, type: 'attachments' | 'screenshots') => {
    const files = Array.from(event.target.files || [])
    setFormData(prev => ({ 
      ...prev, 
      [type]: [...prev[type], ...files]
    }))
  }

  const removeFile = (type: 'attachments' | 'screenshots', index: number) => {
    setFormData(prev => ({
      ...prev,
      [type]: prev[type].filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setShowSuccess(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setShowSuccess(false)
      setFormData({
        issueType: '',
        priority: 'medium',
        service: '',
        title: '',
        description: '',
        stepsToReproduce: '',
        expectedBehavior: '',
        actualBehavior: '',
        frequency: 'sometimes',
        firstOccurrence: '',
        contactEmail: '',
        contactPhone: '',
        userName: '',
        userType: 'customer',
        deviceType: 'desktop',
        browser: '',
        operatingSystem: '',
        appVersion: '',
        attachments: [],
        screenshots: [],
        errorMessages: '',
        accountId: '',
        transactionId: '',
        url: '',
        additionalInfo: ''
      })
    }, 3000)
  }

  return (
    <>
      <SEOHead
        title="Report Issues - Annita Support"
        description="Report bugs, issues, or problems with Annita services. Help us improve by providing detailed information about any problems you encounter."
        keywords={['report issues', 'bug report', 'support', 'feedback', 'Annita', 'technical support']}
        canonical="/support/report-issues"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Bug className="w-10 h-10" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Report Issues
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 mb-8">
                Help us improve by reporting bugs, issues, or suggesting new features
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg">
                  <CheckCircle className="w-4 h-4" />
                  <span>Detailed information helps us resolve faster</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Clock className="w-4 h-4" />
                  <span>We respond within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Report Form Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              {showSuccess ? (
                <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Report Submitted Successfully!
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Thank you for your detailed report. Our team will review it and get back to you within 24 hours.
                  </p>
                  <div className="bg-blue-50 rounded-xl p-4 text-sm text-blue-800">
                    <p><strong>Reference ID:</strong> #REP-{Date.now().toString().slice(-6)}</p>
                    <p>Please save this reference ID for future communication.</p>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Submit Your Report
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Issue Type Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Issue Type *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {issueTypes.map((type) => (
                          <label
                            key={type.value}
                            className={`relative cursor-pointer border-2 rounded-xl p-4 transition-all duration-200 ${
                              formData.issueType === type.value
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <input
                              type="radio"
                              name="issueType"
                              value={type.value}
                              checked={formData.issueType === type.value}
                              onChange={(e) => handleInputChange('issueType', e.target.value)}
                              className="sr-only"
                            />
                            <div className="flex items-center space-x-3">
                              <type.icon className="w-5 h-5 text-gray-600" />
                              <div>
                                <div className="font-medium text-gray-900">{type.label}</div>
                                <div className="text-xs text-gray-500">{type.description}</div>
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Priority and Service */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Priority Level *
                        </label>
                        <select
                          value={formData.priority}
                          onChange={(e) => handleInputChange('priority', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          {priorities.map((priority) => (
                            <option key={priority.value} value={priority.value}>
                              {priority.label} - {priority.description}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Service/Platform *
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => handleInputChange('service', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select service</option>
                          {services.map((service) => (
                            <option key={service.value} value={service.value}>
                              {service.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Title */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Issue Title *
                      </label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => handleInputChange('title', e.target.value)}
                        placeholder="Brief, descriptive title for the issue"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>

                    {/* Description */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Detailed Description *
                      </label>
                      <textarea
                        rows={4}
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        placeholder="Please provide a detailed description of the issue, including what you were trying to do when it occurred..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        required
                      />
                    </div>

                    {/* Steps to Reproduce */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Steps to Reproduce *
                      </label>
                      <textarea
                        rows={4}
                        value={formData.stepsToReproduce}
                        onChange={(e) => handleInputChange('stepsToReproduce', e.target.value)}
                        placeholder="1. Go to...&#10;2. Click on...&#10;3. Enter...&#10;4. The issue occurs when..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        required
                      />
                    </div>

                    {/* Expected vs Actual Behavior */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Expected Behavior *
                        </label>
                        <textarea
                          rows={3}
                          value={formData.expectedBehavior}
                          onChange={(e) => handleInputChange('expectedBehavior', e.target.value)}
                          placeholder="What should happen when you perform these steps?"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Actual Behavior *
                        </label>
                        <textarea
                          rows={3}
                          value={formData.actualBehavior}
                          onChange={(e) => handleInputChange('actualBehavior', e.target.value)}
                          placeholder="What actually happens when you perform these steps?"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                          required
                        />
                      </div>
                    </div>

                    {/* Frequency and First Occurrence */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          How Often Does This Happen? *
                        </label>
                        <select
                          value={formData.frequency}
                          onChange={(e) => handleInputChange('frequency', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          {frequencies.map((freq) => (
                            <option key={freq.value} value={freq.value}>
                              {freq.label} - {freq.description}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          When Did This First Occur?
                        </label>
                        <input
                          type="date"
                          value={formData.firstOccurrence}
                          onChange={(e) => handleInputChange('firstOccurrence', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Technical Information */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Information</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Device Type
                          </label>
                          <select
                            value={formData.deviceType}
                            onChange={(e) => handleInputChange('deviceType', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            {deviceTypes.map((device) => (
                              <option key={device.value} value={device.value}>
                                {device.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Browser
                          </label>
                          <select
                            value={formData.browser}
                            onChange={(e) => handleInputChange('browser', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            <option value="">Select browser</option>
                            {browsers.map((browser) => (
                              <option key={browser} value={browser}>
                                {browser}
                              </option>
                            ))}
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Operating System
                          </label>
                          <select
                            value={formData.operatingSystem}
                            onChange={(e) => handleInputChange('operatingSystem', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            <option value="">Select OS</option>
                            {operatingSystems.map((os) => (
                              <option key={os} value={os}>
                                {os}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          App Version (if applicable)
                        </label>
                        <input
                          type="text"
                          value={formData.appVersion}
                          onChange={(e) => handleInputChange('appVersion', e.target.value)}
                          placeholder="e.g., 2.1.0"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Error Messages */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Error Messages (if any)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.errorMessages}
                        onChange={(e) => handleInputChange('errorMessages', e.target.value)}
                        placeholder="Copy and paste any error messages, codes, or stack traces here..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      />
                    </div>

                    {/* URLs and IDs */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          URL (if applicable)
                        </label>
                        <input
                          type="url"
                          value={formData.url}
                          onChange={(e) => handleInputChange('url', e.target.value)}
                          placeholder="https://..."
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Account ID (if applicable)
                        </label>
                        <input
                          type="text"
                          value={formData.accountId}
                          onChange={(e) => handleInputChange('accountId', e.target.value)}
                          placeholder="Your account ID or username"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Transaction ID for payment issues */}
                    {formData.issueType === 'payment' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Transaction ID (if applicable)
                        </label>
                        <input
                          type="text"
                          value={formData.transactionId}
                          onChange={(e) => handleInputChange('transactionId', e.target.value)}
                          placeholder="Transaction ID from your receipt or confirmation"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    )}

                    {/* File Attachments */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Screenshots
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
                          <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={(e) => handleFileUpload(e, 'screenshots')}
                            className="hidden"
                            id="screenshots"
                          />
                          <label htmlFor="screenshots" className="cursor-pointer">
                            <Image className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-600">
                              Click to upload screenshots or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              PNG, JPG, GIF up to 10MB each
                            </p>
                          </label>
                        </div>
                        {formData.screenshots.length > 0 && (
                          <div className="mt-4 space-y-2">
                            {formData.screenshots.map((file, index) => (
                              <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                                <span className="text-sm text-gray-700">{file.name}</span>
                                <button
                                  type="button"
                                  onClick={() => removeFile('screenshots', index)}
                                  className="text-red-500 hover:text-red-700"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Additional Files
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
                          <input
                            type="file"
                            multiple
                            onChange={(e) => handleFileUpload(e, 'attachments')}
                            className="hidden"
                            id="attachments"
                          />
                          <label htmlFor="attachments" className="cursor-pointer">
                            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-600">
                              Click to upload additional files or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              PDF, DOC, TXT, LOG files up to 25MB each
                            </p>
                          </label>
                        </div>
                        {formData.attachments.length > 0 && (
                          <div className="mt-4 space-y-2">
                            {formData.attachments.map((file, index) => (
                              <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                                <span className="text-sm text-gray-700">{file.name}</span>
                                <button
                                  type="button"
                                  onClick={() => removeFile('attachments', index)}
                                  className="text-red-500 hover:text-red-700"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-blue-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            value={formData.userName}
                            onChange={(e) => handleInputChange('userName', e.target.value)}
                            placeholder="Your full name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            value={formData.contactEmail}
                            onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                            placeholder="your.email@example.com"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={formData.contactPhone}
                            onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                            placeholder="+1234567890"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          User Type
                        </label>
                        <select
                          value={formData.userType}
                          onChange={(e) => handleInputChange('userType', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="customer">Customer</option>
                          <option value="business">Business User</option>
                          <option value="developer">Developer</option>
                          <option value="partner">Partner</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Additional Information
                      </label>
                      <textarea
                        rows={3}
                        value={formData.additionalInfo}
                        onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                        placeholder="Any other information that might be helpful for our team to understand and resolve the issue..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center pt-6">
                      <Button 
                        type="submit"
                        variant="gradient" 
                        size="lg" 
                        className="px-12"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Submit Report
                          </>
                        )}
                      </Button>
                      <p className="text-sm text-gray-500 mt-4">
                        By submitting this report, you agree to our privacy policy and terms of service.
                      </p>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ReportIssuesPage
