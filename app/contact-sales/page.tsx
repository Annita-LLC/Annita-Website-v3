'use client'

import { useState } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import { 
  Phone,
  Mail,
  MessageSquare,
  Calendar,
  Users,
  Building2,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  MapPin,
  Zap,
  Target,
  TrendingUp,
  Shield,
  Play,
  Download,
  ArrowLeft,
  Send
} from 'lucide-react'
import Link from 'next/link'

export default function ContactSalesPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    businessSize: '',
    industry: '',
    goals: '',
    timeline: '',
    budget: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const businessSizes = [
    '1-10 employees',
    '11-50 employees', 
    '51-200 employees',
    '201-500 employees',
    '500+ employees'
  ]

  const industries = [
    'E-commerce',
    'Retail',
    'Manufacturing',
    'Technology',
    'Healthcare',
    'Education',
    'Finance',
    'Real Estate',
    'Food & Beverage',
    'Other'
  ]

  const timelines = [
    'Immediately',
    'Within 1 month',
    'Within 3 months',
    'Within 6 months',
    'More than 6 months'
  ]

  const budgets = [
    'Under $1,000',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+'
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <>
      <SEOHead 
        title="Contact Sales - Annita"
        description="Get in touch with our sales team to learn how Annita can help grow your business. Schedule a consultation and discover the perfect solution for your needs."
        keywords={[
          'contact sales',
          'business consultation',
          'Annita sales',
          'enterprise solutions',
          'business growth',
          'sales team',
          'business development',
          'consultation'
        ]}
        canonical="/contact-sales"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Link 
                href="/contact-us" 
                className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors duration-200 mr-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Contact
              </Link>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
                <Phone className="w-4 h-4 mr-2" />
                Sales Team
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Let's <span className="text-orange-500">Grow</span> Together
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Ready to transform your business? Our sales team is here to help you 
                find the perfect solution and get you started on your growth journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {!isSubmitted ? (
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
                    Fill out the form and our sales team will get back to you within 24 hours.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Call Us</div>
                        <div className="text-gray-600">+231 77 505 7227</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Email Us</div>
                        <div className="text-gray-600">annitallc@gmail.com</div>
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
                  </div>

                  {/* Why Choose Us */}
                  <div className="mt-8 bg-white rounded-xl p-6 shadow-soft border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Why Choose Our Sales Team?
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-600">Personalized consultation</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-600">Industry expertise</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-600">Custom solutions</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-600">Ongoing support</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Sales</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
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
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
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
                          placeholder="your.email@company.com"
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

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your company name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Business Size
                        </label>
                        <select
                          value={formData.businessSize}
                          onChange={(e) => handleInputChange('businessSize', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="">Select size</option>
                          {businessSizes.map((size) => (
                            <option key={size} value={size}>{size}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Industry
                        </label>
                        <select
                          value={formData.industry}
                          onChange={(e) => handleInputChange('industry', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="">Select industry</option>
                          {industries.map((industry) => (
                            <option key={industry} value={industry}>{industry}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        What are you looking to achieve? *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.goals}
                        onChange={(e) => handleInputChange('goals', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        placeholder="Tell us about your business goals and how we can help..."
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Timeline
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => handleInputChange('timeline', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="">Select timeline</option>
                          {timelines.map((timeline) => (
                            <option key={timeline} value={timeline}>{timeline}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Budget Range
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => handleInputChange('budget', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="">Select budget</option>
                          {budgets.map((budget) => (
                            <option key={budget} value={budget}>{budget}</option>
                          ))}
                        </select>
                      </div>
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
        /* Success Message */
        <div className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Message Sent Successfully!
              </h2>
              
              <p className="text-gray-600 mb-8">
                Thank you for reaching out! Our sales team will review your information and get back to you within 24 hours.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                    <span className="text-gray-600">We'll review your requirements and prepare a customized proposal</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                    <span className="text-gray-600">Our sales team will contact you to schedule a consultation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                    <span className="text-gray-600">We'll work together to find the perfect solution for your business</span>
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
                    setIsSubmitted(false)
                    setFormData({
                      firstName: '',
                      lastName: '',
                      email: '',
                      company: '',
                      phone: '',
                      businessSize: '',
                      industry: '',
                      goals: '',
                      timeline: '',
                      budget: ''
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
                Ready to Transform Your Business?
              </h3>
              <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
                Join thousands of MSMEs already using Annita to grow their revenue, reach new customers, 
                and streamline their operations across Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/download"
                  className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download App
                </a>
                <a 
                  href="/contact-sales"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200"
                >
                  Contact Sales
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
