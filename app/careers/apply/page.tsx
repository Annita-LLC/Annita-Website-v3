'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SEOHead from '@/components/seo/SEOHead'
import { 
  Upload,
  FileText,
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Linkedin,
  Globe,
  Send,
  ArrowLeft,
  ArrowRight,
  Download,
  CheckCircle,
  Building,
  Star,
  Calendar,
  MessageSquare,
  ExternalLink
} from 'lucide-react'
import Link from 'next/link'
import { useFormSubmission, formValidations } from '@/lib/hooks/useFormSubmission'

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    location: '',
    position: '',
    experience: '',
    company: '',
    currentRole: '',
    education: '',
    fieldOfStudy: '',
    linkedin: '',
    portfolio: '',
    resume: null as File | null,
    coverLetter: '',
    source: '',
    relocate: '',
    salary: '',
    message: ''
  })
  const { submitForm, isSubmitting, isSubmitted, error, success, reset } = useFormSubmission({
    validateForm: formValidations.career,
    onSuccess: (data) => {
      console.log('career form submitted successfully:', data)
    },
    onError: (error) => {
      console.error('career form submission failed:', error)
    }
  })

  const positions = [
    'Software Engineer',
    'Product Manager',
    'Marketing Specialist',
    'Sales Representative',
    'Customer Success Manager',
    'Data Analyst',
    'UX/UI Designer',
    'DevOps Engineer',
    'Business Development',
    'Finance Manager',
    'Human Resources',
    'Other'
  ]

  const experienceLevels = [
    'Entry Level (0-2 years)',
    'Mid Level (3-5 years)',
    'Senior Level (6-8 years)',
    'Lead/Manager (8+ years)',
    'Executive Level'
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData(prev => ({
        ...prev,
        resume: file
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await submitForm('career', formData)
  }

  return (
    <>
      <SEOHead
        title="Apply for a Position - Annita Careers"
        description="Join our team and help shape the future of Africa's digital economy. Submit your application today."
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
                  <Briefcase className="w-4 h-4 mr-2" />
                Submit Your Application
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                  Apply for a <span className="text-orange-200">Position</span>
                </h1>
                <p className="text-lg sm:text-xl text-orange-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
                  Join our mission to empower Africa's MSMEs through innovative technology. Tell us about yourself and why you'd be a great fit for our team.
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold">50+</div>
                    <div className="text-xs sm:text-sm text-orange-200">Open Roles</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold">Remote</div>
                    <div className="text-xs sm:text-sm text-orange-200">Work Style</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold">Impact</div>
                    <div className="text-xs sm:text-sm text-orange-200">Driven</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <button 
                    onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-white text-orange-600 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-200 flex items-center justify-center shadow-lg text-sm sm:text-base"
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Start Application
                  </button>
                  <Link
                    href="/careers"
                    className="border-2 border-white text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200 flex items-center justify-center text-sm sm:text-base"
                  >
                    <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Back to Careers
                  </Link>
                </div>
              </div>
              
              {/* Right Column - Interactive Elements */}
              <div className="relative">
                {/* Application Excellence Visualization */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center">Application Excellence</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">50+ Open Roles</span>
                      <span className="font-semibold text-white">Growing</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">Remote Work</span>
                      <span className="font-semibold text-white">Flexible</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">Impact Driven</span>
                      <span className="font-semibold text-white">Passionate</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">Success Rate</span>
                      <span className="font-semibold text-white">98%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {!isSubmitted ? (
        <div className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 lg:p-12 xl:p-16 border border-gray-200">
                <div className="text-center mb-8 sm:mb-12">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Submit Your Application
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                    Tell us about yourself and why you'd be a great fit for our team
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-10 sm:space-y-12">
                  {/* Enhanced Personal Information */}
                  <div className="space-y-6 sm:space-y-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center">
                      <User className="w-6 h-6 sm:w-8 sm:h-8 mr-3 text-orange-600" />
                      Personal Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                      <div>
                        <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2 sm:mb-3">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.first_name}
                          onChange={(e) => handleInputChange('first_name', e.target.value)}
                          className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                          placeholder="Enter your first name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2 sm:mb-3">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.last_name}
                          onChange={(e) => handleInputChange('last_name', e.target.value)}
                          className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                          placeholder="Enter your last name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter your email address"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Current Location *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.location}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                          placeholder="City, Country"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                      <Briefcase className="w-5 h-5 mr-2 text-orange-600" />
                      Professional Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Position Applied For *
                        </label>
                        <select
                          required
                          value={formData.position}
                          onChange={(e) => handleInputChange('position', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="">Select a position</option>
                          {positions.map((position) => (
                            <option key={position} value={position}>{position}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Experience Level *
                        </label>
                        <select
                          required
                          value={formData.experience}
                          onChange={(e) => handleInputChange('experience', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="">Select experience level</option>
                          {experienceLevels.map((level) => (
                            <option key={level} value={level}>{level}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Current Company
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                          placeholder="Where do you currently work?"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Current Position
                        </label>
                        <input
                          type="text"
                          value={formData.currentRole}
                          onChange={(e) => handleInputChange('currentRole', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                          placeholder="What's your current role?"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                      <GraduationCap className="w-5 h-5 mr-2 text-orange-600" />
                      Education
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Highest Education Level
                        </label>
                        <select 
                          value={formData.education}
                          onChange={(e) => handleInputChange('education', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="">Select education level</option>
                          <option value="high-school">High School</option>
                          <option value="bachelor">Bachelor's Degree</option>
                          <option value="master">Master's Degree</option>
                          <option value="phd">PhD</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Field of Study
                        </label>
                        <input
                          type="text"
                          value={formData.fieldOfStudy}
                          onChange={(e) => handleInputChange('fieldOfStudy', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                          placeholder="e.g., Computer Science, Business"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                      <Globe className="w-5 h-5 mr-2 text-orange-600" />
                      Professional Links
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          LinkedIn Profile
                        </label>
                        <input
                          type="url"
                          value={formData.linkedin}
                          onChange={(e) => handleInputChange('linkedin', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                          placeholder="https://linkedin.com/in/yourprofile"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Portfolio/Website
                        </label>
                        <input
                          type="url"
                          value={formData.portfolio}
                          onChange={(e) => handleInputChange('portfolio', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                          placeholder="https://yourwebsite.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Resume Upload */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-orange-600" />
                      Resume & Cover Letter
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Resume/CV *
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-orange-500 transition-colors duration-200">
                          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-600 mb-2">
                            <span className="font-medium text-orange-600">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-sm text-gray-500">PDF, DOC, or DOCX (max 10MB)</p>
                          <input
                            type="file"
                            required
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileUpload}
                            className="hidden"
                            id="resume-upload"
                          />
                          <label htmlFor="resume-upload" className="cursor-pointer">
                            <div className="mt-4 inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200">
                              Choose File
                            </div>
                          </label>
                          {formData.resume && (
                            <p className="mt-2 text-sm text-green-600">
                              ✓ {formData.resume.name} selected
                            </p>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Cover Letter
                        </label>
                        <textarea
                          rows={6}
                          value={formData.coverLetter}
                          onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                          placeholder="Tell us why you're interested in this position and why you'd be a great fit for our team..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Questions */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900">
                      Additional Questions
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          How did you hear about this position?
                        </label>
                        <select 
                          value={formData.source}
                          onChange={(e) => handleInputChange('source', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="">Select an option</option>
                          <option value="linkedin">LinkedIn</option>
                          <option value="job-board">Job Board</option>
                          <option value="referral">Employee Referral</option>
                          <option value="company-website">Company Website</option>
                          <option value="social-media">Social Media</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Are you willing to relocate?
                        </label>
                        <div className="space-y-2">
                          <label className="flex items-center">
                            <input 
                              type="radio" 
                              name="relocate" 
                              value="yes" 
                              checked={formData.relocate === 'yes'}
                              onChange={(e) => handleInputChange('relocate', e.target.value)}
                              className="mr-2" 
                            />
                            <span>Yes, I'm willing to relocate</span>
                          </label>
                          <label className="flex items-center">
                            <input 
                              type="radio" 
                              name="relocate" 
                              value="no" 
                              checked={formData.relocate === 'no'}
                              onChange={(e) => handleInputChange('relocate', e.target.value)}
                              className="mr-2" 
                            />
                            <span>No, I prefer remote work</span>
                          </label>
                          <label className="flex items-center">
                            <input 
                              type="radio" 
                              name="relocate" 
                              value="maybe" 
                              checked={formData.relocate === 'maybe'}
                              onChange={(e) => handleInputChange('relocate', e.target.value)}
                              className="mr-2" 
                            />
                            <span>Maybe, depending on the location</span>
                          </label>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Expected Salary Range (USD)
                        </label>
                        <input
                          type="text"
                          value={formData.salary}
                          onChange={(e) => handleInputChange('salary', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                          placeholder="e.g., $50,000 - $70,000"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Submit Button */}
                  <div className="pt-8 sm:pt-12 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-orange-500 text-white font-semibold rounded-lg sm:rounded-xl hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 text-base sm:text-lg shadow-lg"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 sm:h-6 sm:w-6 border-b-2 border-white mr-2"></div>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                            Submit Application
                          </>
                        )}
                      </button>
                      <Link href="/careers">
                        <button
                          type="button"
                          className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg sm:rounded-xl hover:bg-gray-50 transition-all duration-200 text-base sm:text-lg"
                        >
                          <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                          Back to Careers
                        </button>
                      </Link>
                    </div>
                    <p className="text-sm sm:text-base text-gray-500 mt-6 sm:mt-8 text-center">
                      By submitting this application, you agree to our{' '}
                      <Link href="/privacy" className="text-orange-600 hover:underline">
                        Privacy Policy
                      </Link>
                      {' '}and{' '}
                      <Link href="/terms" className="text-orange-600 hover:underline">
                        Terms of Service
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
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
                Application Submitted Successfully!
              </h2>
              
              <p className="text-gray-600 mb-8">
                Thank you for your interest in joining our team! Our HR team will review your application and get back to you within 5-7 business days.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                    <span className="text-gray-600">We'll review your application and experience</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                    <span className="text-gray-600">If selected, we'll schedule an initial interview</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                    <span className="text-gray-600">You'll receive updates on your application status</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Contact HR
                </Link>
                <Link
                  href="/careers"
                  className="inline-flex items-center px-6 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition-colors duration-200"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Careers
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced CTA Section */}
      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center p-6 sm:p-8 lg:p-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl text-white shadow-2xl"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                🚨 Something BIG is Coming - Annita 3.0
              </h3>
              <p className="text-orange-100 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
                Experience our live marketplace V1.0 today, and join the waitlist for the revolutionary V3.0 - offline-ready, AI-powered, and built for everyone in Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a 
                  href="https://annita.company.site/products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 shadow-lg text-sm sm:text-base"
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Try Marketplace V1.0
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Waitlist Modal */}
    </>
  )
}
