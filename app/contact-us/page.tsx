'use client'

import { useState } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import { 
  Mail,
  Phone,
  MessageSquare,
  Clock,
  MapPin,
  Send,
  CheckCircle,
  User,
  Building2,
  Globe,
  FileText,
  AlertCircle,
  Star,
  ArrowRight,
  Download,
  ExternalLink,
  Award
} from 'lucide-react'
import Link from 'next/link'
import { useFormSubmission, formValidations } from '@/lib/hooks/useFormSubmission'
import WaitlistForm from '@/components/ui/WaitlistForm'

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    subject: '',
    message: '',
    inquiry_type: '',
    urgency: 'normal',
    preferred_contact: 'email',
    newsletter: false
  })
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  const { submitForm, isSubmitting, isSubmitted, error, success, reset } = useFormSubmission({
    validateForm: formValidations.contact,
    onSuccess: (data) => {
      console.log('Contact form submitted successfully:', data)
      // Reset form after successful submission
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        company: '',
        country: '',
        subject: '',
        message: '',
        inquiry_type: '',
        urgency: 'normal',
        preferred_contact: 'email',
        newsletter: false
      })
    },
    onError: (error) => {
      console.error('Contact form submission failed:', error)
    }
  })

  const inquiryTypes = [
    {
      id: 'general',
      name: 'General Inquiry',
      description: 'General questions about Annita',
      icon: MessageSquare,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'technical',
      name: 'Technical Support',
      description: 'Technical issues or problems',
      icon: AlertCircle,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'account',
      name: 'Account Issues',
      description: 'Login, billing, or account problems',
      icon: User,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'business',
      name: 'Business Partnership',
      description: 'Partnership or business opportunities',
      icon: Building2,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'feature',
      name: 'Feature Request',
      description: 'Suggest new features or improvements',
      icon: Star,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'feedback',
      name: 'Feedback',
      description: 'Share your experience or feedback',
      icon: FileText,
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  const urgencyLevels = [
    { value: 'low', label: 'Low', description: 'General question, no rush', color: 'text-green-600' },
    { value: 'normal', label: 'Normal', description: 'Standard inquiry', color: 'text-blue-600' },
    { value: 'high', label: 'High', description: 'Important, need help soon', color: 'text-orange-600' },
    { value: 'urgent', label: 'Urgent', description: 'Critical issue, immediate attention', color: 'text-red-600' }
  ]

  const countries = [
    'Liberia', 'Nigeria', 'Ghana', 'Kenya', 'South Africa', 'Uganda', 'Tanzania', 'Ethiopia',
    'United States', 'United Kingdom', 'Canada', 'Germany', 'France', 'Australia', 'Other'
  ]

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await submitForm('contact', formData)
  }

  return (
    <>
      <SEOHead 
        title="Contact Us - Annita"
        description="Get in touch with our support team for any questions, technical issues, or general inquiries about Annita. We're here to help you succeed."
        keywords={[
          'contact us',
          'support',
          'help',
          'customer service',
          'technical support',
          'Annita support',
          'contact form'
        ]}
        canonical="/contact-us"
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
                <MessageSquare className="w-4 h-4 mr-2" />
                  Premium Support
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                  We're Here to <span className="text-orange-200">Help</span>
                </h1>
                <p className="text-lg sm:text-xl text-orange-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
                  Get expert support from our dedicated team. Whether you need technical assistance, 
                  have questions about our platform, or want to explore partnership opportunities - 
                  we're committed to your success.
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold">24/7</div>
                    <div className="text-xs sm:text-sm text-orange-200">Support</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold">2hrs</div>
                    <div className="text-xs sm:text-sm text-orange-200">Response</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold">100%</div>
                    <div className="text-xs sm:text-sm text-orange-200">Expert</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <button 
                    onClick={() => window.open('/contact-us', '_blank')}
                    className="bg-white text-orange-600 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-200 flex items-center justify-center shadow-lg text-sm sm:text-base"
                  >
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Start Chat
                  </button>
                  <button 
                    onClick={() => window.open('tel:+231775057227', '_blank')}
                    className="border-2 border-white text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200 flex items-center justify-center text-sm sm:text-base"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Call Us
                  </button>
                </div>
              </div>
              
              {/* Right Column - Interactive Elements */}
              <div className="relative">
                {/* Support Visualization */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center">Support Excellence</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">24/7 Support</span>
                      <span className="font-semibold text-white">Always available</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">Quick Response</span>
                      <span className="font-semibold text-white">Under 2 hours</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">Expert Team</span>
                      <span className="font-semibold text-white">Certified professionals</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">Success Rate</span>
                      <span className="font-semibold text-white">99.9%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {!isSubmitted || !success ? (
        <div className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Fill out the form and our support team will get back to you within 24 hours.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Email Support</div>
                        <div className="text-gray-600">annitallc@gmail.com</div>
                        <div className="text-sm text-gray-500">Response within 24 hours</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Phone Support</div>
                        <div className="text-gray-600">+231 77 505 7227</div>
                        <div className="text-sm text-gray-500">Available 24/7</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Business Hours</div>
                        <div className="text-gray-600">
                          Mon-Fri: 8:30AM-5:30PM GMT<br />
                          Sat: 8:30AM-2:00PM GMT<br />
                          Sun: Closed
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Office Address</div>
                        <div className="text-gray-600">
                          Duazon, Silver Beach Road<br />
                          Monrovia, Liberia
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Why Choose Us */}
                  <div className="mt-8 bg-white rounded-xl p-6 shadow-soft border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Why Choose Our Support?
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-600">24/7 availability for urgent issues</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-600">Multilingual support team</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-600">Average response time under 2 hours</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-600">Expert technical assistance</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-600">Personalized solutions</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Form</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Inquiry Type Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        What can we help you with? *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {inquiryTypes.map((type) => (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => handleInputChange('inquiry_type', type.id)}
                            className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                              formData.inquiry_type === type.id
                                ? 'border-orange-500 bg-orange-50'
                                : 'border-gray-200 hover:border-gray-300 bg-white'
                            }`}
                          >
                            <div className={`w-8 h-8 bg-gradient-to-br ${type.color} rounded-lg flex items-center justify-center mb-2`}>
                              <type.icon className="w-4 h-4 text-white" />
                            </div>
                            <div className="font-medium text-gray-900 text-sm">{type.name}</div>
                            <div className="text-xs text-gray-600">{type.description}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                                          value={formData.first_name}
                onChange={(e) => handleInputChange('first_name', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                          placeholder="Your first name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                                          value={formData.last_name}
                onChange={(e) => handleInputChange('last_name', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                          placeholder="+1234567890"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company/Organization
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                          placeholder="Your company name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Country *
                        </label>
                        <select
                          required
                          value={formData.country}
                          onChange={(e) => handleInputChange('country', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="">Select country</option>
                          {countries.map((country) => (
                            <option key={country} value={country}>{country}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        placeholder="Brief description of your inquiry"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        placeholder="Please provide detailed information about your inquiry..."
                      />
                    </div>

                    {/* Additional Options */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Urgency Level
                        </label>
                        <div className="space-y-2">
                          {urgencyLevels.map((urgency) => (
                            <label
                              key={urgency.value}
                              className="flex items-center space-x-3 cursor-pointer"
                            >
                              <input
                                type="radio"
                                name="urgency"
                                value={urgency.value}
                                checked={formData.urgency === urgency.value}
                                onChange={(e) => handleInputChange('urgency', e.target.value)}
                                className="text-orange-500 focus:ring-orange-500"
                              />
                              <div>
                                <div className={`font-medium ${urgency.color}`}>{urgency.label}</div>
                                <div className="text-xs text-gray-600">{urgency.description}</div>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Preferred Contact Method
                        </label>
                        <div className="space-y-2">
                          <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="preferred_contact"
                              value="email"
                              checked={formData.preferred_contact === 'email'}
                              onChange={(e) => handleInputChange('preferred_contact', e.target.value)}
                              className="text-orange-500 focus:ring-orange-500"
                            />
                            <span className="text-gray-700">Email</span>
                          </label>
                          <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="preferred_contact"
                              value="phone"
                              checked={formData.preferred_contact === 'phone'}
                              onChange={(e) => handleInputChange('preferred_contact', e.target.value)}
                              className="text-orange-500 focus:ring-orange-500"
                            />
                            <span className="text-gray-700">Phone</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="newsletter"
                        checked={formData.newsletter}
                        onChange={(e) => handleInputChange('newsletter', e.target.checked)}
                        className="text-orange-500 focus:ring-orange-500 rounded"
                      />
                      <label htmlFor="newsletter" className="text-sm text-gray-700">
                        Subscribe to our newsletter for updates and announcements
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Success/Error Message */
        <div className={`py-16 sm:py-20 ${success ? 'bg-gradient-to-br from-green-50 to-emerald-50' : 'bg-gradient-to-br from-red-50 to-pink-50'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className={`w-20 h-20 ${success ? 'bg-green-100' : 'bg-red-100'} rounded-full flex items-center justify-center mx-auto mb-6`}>
                {success ? (
                  <CheckCircle className="w-10 h-10 text-green-600" />
                ) : (
                  <AlertCircle className="w-10 h-10 text-red-600" />
                )}
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {success ? 'Message Sent Successfully!' : 'Submission Failed'}
              </h2>
              
              <p className="text-gray-600 mb-8">
                {success 
                  ? 'Thank you for reaching out! Our support team will review your message and get back to you within 24 hours.'
                  : error || 'There was an error submitting your form. Please try again.'
                }
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                    <span className="text-gray-600">We'll review your inquiry and assign it to the appropriate team</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                    <span className="text-gray-600">You'll receive a confirmation email with a reference number</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                    <span className="text-gray-600">Our team will respond via your preferred contact method</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact-sales"
                  className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200"
                >
                  <Building2 className="w-4 h-4 mr-2" />
                  Contact Sales
                </Link>
                <button
                  onClick={() => {
                    reset()
                    setFormData({
                      first_name: '',
                      last_name: '',
                      email: '',
                      phone: '',
                      company: '',
                      country: '',
                      subject: '',
                      message: '',
                      inquiry_type: '',
                      urgency: 'normal',
                      preferred_contact: 'email',
                      newsletter: false
                    })
                  }}
                  className="inline-flex items-center px-6 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition-colors duration-200"
                >
                  Send Another Message
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
