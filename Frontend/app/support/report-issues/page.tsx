'use client'

import { useState } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import { 
  Bug, 
  AlertTriangle, 
  Info, 
  Upload, 
  Send, 
  CheckCircle,
  Clock,
  MessageSquare,
  Smartphone,
  Monitor,
  Globe,
  Shield,
  CreditCard,
  ShoppingBag,
  Truck,
  Users,
  FileText,
  Camera,
  ArrowLeft,
  Download,
  ArrowRight,
  ExternalLink,
  Star,
  Award
} from 'lucide-react'
import Link from 'next/link'
import { useFormSubmission, formValidations } from '@/lib/hooks/useFormSubmission'
import WaitlistForm from '@/components/ui/WaitlistForm'

export default function ReportIssuesPage() {
  const [formData, setFormData] = useState({
    issue_type: '',
    priority: 'medium',
    title: '',
    description: '',
    steps: '',
    expectedBehavior: '',
    actualBehavior: '',
    browser: '',
    device: '',
    email: '',
    attachments: [] as File[]
  })
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  const { submitForm, isSubmitting, isSubmitted, error, success, reset } = useFormSubmission({
    validateForm: formValidations.support,
    onSuccess: (data) => {
      console.log('support form submitted successfully:', data)
    },
    onError: (error) => {
      console.error('support form submission failed:', error)
    }
  })

  const issueTypes = [
    {
      id: 'bug',
      name: 'Bug Report',
      description: 'Something is not working as expected',
      icon: Bug,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'feature',
      name: 'Feature Request',
      description: 'Suggest a new feature or improvement',
      icon: Info,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'security',
      name: 'Security Issue',
      description: 'Report a security vulnerability',
      icon: Shield,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'performance',
      name: 'Performance Issue',
      description: 'Slow loading or performance problems',
      icon: Clock,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'ui',
      name: 'UI/UX Issue',
      description: 'Design or user experience problems',
      icon: Monitor,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'payment',
      name: 'Payment Issue',
      description: 'Problems with payments or transactions',
      icon: CreditCard,
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const priorityLevels = [
    { value: 'low', label: 'Low', description: 'Minor issue, doesn\'t affect functionality', color: 'text-green-600' },
    { value: 'medium', label: 'Medium', description: 'Moderate impact on user experience', color: 'text-yellow-600' },
    { value: 'high', label: 'High', description: 'Significant impact on functionality', color: 'text-orange-600' },
    { value: 'critical', label: 'Critical', description: 'Blocks core functionality or security issue', color: 'text-red-600' }
  ]

  const browsers = [
    'Chrome', 'Firefox', 'Safari', 'Edge', 'Opera', 'Other'
  ]

  const devices = [
    'Desktop', 'Mobile (iOS)', 'Mobile (Android)', 'Tablet', 'Other'
  ]

  const handleInputChange = (field: string, value: string | File[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setFormData(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...files]
    }))
  }

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await submitForm('support', formData)
  }

  const selectedIssueType = issueTypes.find(type => type.id === formData.issue_type)

  return (
    <>
      <SEOHead 
        title="Report Issues - Annita Support"
        description="Report bugs, issues, or suggest improvements for the Annita platform. Our team will investigate and resolve your concerns promptly."
        keywords={[
          'report issues',
          'bug report',
          'technical support',
          'Annita support',
          'report bugs',
          'feature request',
          'security issue',
          'customer support'
        ]}
        canonical="/support/report-issues"
      />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-white/5 rounded-full animate-bounce delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Main Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
                <Bug className="w-4 h-4 mr-2" />
                  Community Support
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                  Help Us <span className="text-orange-200">Improve</span>
                </h1>
                <p className="text-lg sm:text-xl text-orange-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
                  Your feedback drives our innovation. Report bugs, suggest features, or share your ideas 
                  to help us build the best platform for African businesses.
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold">24hrs</div>
                    <div className="text-xs sm:text-sm text-orange-200">Response</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold">Priority</div>
                    <div className="text-xs sm:text-sm text-orange-200">Handling</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold">100%</div>
                    <div className="text-xs sm:text-sm text-orange-200">Impact</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <button 
                    onClick={() => document.getElementById('issue-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-white text-orange-600 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-200 flex items-center justify-center shadow-lg text-sm sm:text-base"
                  >
                    <Bug className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Report Issue
                  </button>
                  <button 
                    onClick={() => window.open('/ideas', '_blank')}
                    className="border-2 border-white text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200 flex items-center justify-center text-sm sm:text-base"
                  >
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Share Ideas
                  </button>
                </div>
              </div>
              
              {/* Right Column - Interactive Elements */}
              <div className="relative">
                {/* Community Impact Visualization */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center">Community Impact</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">Quick Response</span>
                      <span className="font-semibold text-white">Within 24 hours</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">Priority Handling</span>
                      <span className="font-semibold text-white">Critical issues first</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">Community Impact</span>
                      <span className="font-semibold text-white">Your voice matters</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">Innovation Rate</span>
                      <span className="font-semibold text-white">95%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {!isSubmitted ? (
        <div className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Issue Type Selection */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What type of issue are you reporting?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {issueTypes.map((type) => (
                    <button
                      key={type.id}
                                              onClick={() => handleInputChange('issue_type', type.id)}
                        className={`p-6 rounded-xl border-2 transition-all duration-200 text-left ${
                          formData.issue_type === type.id
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${type.color} rounded-lg flex items-center justify-center mb-4`}>
                        <type.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{type.name}</h3>
                      <p className="text-sm text-gray-600">{type.description}</p>
                    </button>
                  ))}
                </div>
              </div>

                                    {formData.issue_type && (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Priority Level */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Priority Level</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {priorityLevels.map((priority) => (
                        <label
                          key={priority.value}
                          className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                            formData.priority === priority.value
                              ? 'border-orange-500 bg-orange-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="priority"
                            value={priority.value}
                            checked={formData.priority === priority.value}
                            onChange={(e) => handleInputChange('priority', e.target.value)}
                            className="sr-only"
                          />
                          <div className="flex-1">
                            <div className={`font-medium ${priority.color}`}>{priority.label}</div>
                            <div className="text-sm text-gray-600">{priority.description}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Issue Details */}
                  <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Issue Details</h3>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Issue Title *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.title}
                          onChange={(e) => handleInputChange('title', e.target.value)}
                          placeholder="Brief description of the issue"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Detailed Description *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        placeholder="Please provide a detailed description of the issue..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Steps to Reproduce
                        </label>
                        <textarea
                          rows={3}
                          value={formData.steps}
                          onChange={(e) => handleInputChange('steps', e.target.value)}
                          placeholder="1. Go to...&#10;2. Click on...&#10;3. Notice that..."
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Expected vs Actual Behavior
                        </label>
                        <div className="space-y-3">
                          <input
                            type="text"
                            value={formData.expectedBehavior}
                            onChange={(e) => handleInputChange('expectedBehavior', e.target.value)}
                            placeholder="Expected behavior"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          />
                          <input
                            type="text"
                            value={formData.actualBehavior}
                            onChange={(e) => handleInputChange('actualBehavior', e.target.value)}
                            placeholder="Actual behavior"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Environment Information */}
                  <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Environment Information</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Browser
                        </label>
                        <select
                          value={formData.browser}
                          onChange={(e) => handleInputChange('browser', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        >
                          <option value="">Select browser</option>
                          {browsers.map((browser) => (
                            <option key={browser} value={browser}>{browser}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Device Type
                        </label>
                        <select
                          value={formData.device}
                          onChange={(e) => handleInputChange('device', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        >
                          <option value="">Select device</option>
                          {devices.map((device) => (
                            <option key={device} value={device}>{device}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Attachments */}
                  <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Attachments (Optional)</h3>
                    
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-4">
                        Upload screenshots, videos, or other files that help illustrate the issue
                      </p>
                      <input
                        type="file"
                        multiple
                        accept="image/*,video/*,.pdf,.txt"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                      />
                      <label
                        htmlFor="file-upload"
                        className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200 cursor-pointer"
                      >
                        Choose Files
                      </label>
                    </div>

                    {formData.attachments.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-3">Selected Files:</h4>
                        <div className="space-y-2">
                          {formData.attachments.map((file, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <div className="flex items-center">
                                <FileText className="w-4 h-4 text-gray-500 mr-2" />
                                <span className="text-sm text-gray-700">{file.name}</span>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeFile(index)}
                                className="text-red-500 hover:text-red-700"
                              >
                                Remove
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Submit Issue Report
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Success Message */
        <div className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Issue Report Submitted Successfully!
              </h2>
              
              <p className="text-gray-600 mb-8">
                Thank you for reporting this issue. Our team will review it and get back to you within 24-48 hours. 
                We'll send updates to your email address.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                    <span className="text-gray-600">We'll review your report and assign it to the appropriate team</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                    <span className="text-gray-600">You'll receive an email confirmation with a ticket number</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                    <span className="text-gray-600">Our team will investigate and provide updates on the resolution</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Contact Support
                </Link>
                <button
                  onClick={() => {
                    reset()
                    setFormData({
                      issue_type: '',
                      priority: 'medium',
                      title: '',
                      description: '',
                      steps: '',
                      expectedBehavior: '',
                      actualBehavior: '',
                      browser: '',
                      device: '',
                      email: '',
                      attachments: []
                    })
                  }}
                  className="inline-flex items-center px-6 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition-colors duration-200"
                >
                  Report Another Issue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Home Page CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center p-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                🚨 Something BIG is Coming - Annita 3.0
              </h3>
              <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
                Experience our live marketplace V1.0 today, and join the waitlist for the revolutionary V3.0 - 
                offline-ready, AI-powered, and built for everyone in Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://annita.company.site/products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Try Marketplace V1.0
                </a>
                <button 
                  onClick={() => setIsWaitlistOpen(true)}
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200"
                >
                  <Star className="w-5 h-5 mr-2" />
                  Join V3.0 Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form Modal */}
      <WaitlistForm 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </>
  )
}
