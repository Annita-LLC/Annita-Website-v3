'use client'

import { useState } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import { 
  Award, 
  Trophy, 
  Star, 
  TrendingUp, 
  Users, 
  Target, 
  Heart, 
  Globe, 
  Zap, 
  Shield, 
  ExternalLink, 
  Linkedin,
  ArrowRight,
  Download,
  Mail,
  Phone,
  MessageSquare
} from 'lucide-react'
import Link from 'next/link'

// LinkedIn Embed Component
const LinkedInEmbed = ({ url }: { url: string }) => {
  if (!url) return null

  // Convert LinkedIn post URL to embed URL
  const getEmbedUrl = (postUrl: string) => {
    // Handle different LinkedIn URL formats
    if (postUrl.includes('/posts/')) {
      const postId = postUrl.split('/posts/')[1]?.split('?')[0]
      return `https://www.linkedin.com/embed/feed/update/urn:li:activity:${postId}/`
    }
    return postUrl
  }

  return (
    <div className="mt-4">
      <div className="flex items-center gap-2 mb-3">
        <Linkedin className="w-4 h-4 text-blue-600" />
        <span className="text-sm font-medium text-gray-700">LinkedIn Post</span>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
        <iframe
          src={getEmbedUrl(url)}
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen
          title="LinkedIn Post"
          className="rounded-lg"
        />
      </div>
    </div>
  )
}

export default function AwardsPage() {
  const [selectedAward, setSelectedAward] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const awards = [
    {
      id: 'orange-prize',
      title: "1st Place - Orange Social Venture Prize 2024",
      organization: "Orange Social Venture Prize",
      year: "2024",
      image: "/images/awards/orange-social-venture-prize-2024.jpg",
      description: "Annita was awarded 1st Place in the Orange Social Venture Prize 2024 – Liberia National Grand Prize, receiving a $3,000 USD grant for our innovative digital platform.",
      impact: "Received $3,000 USD grant for platform development",
      featured: true,
      linkedinUrl: "https://www.linkedin.com/posts/christopher-o-fallah-15058ab4_i-give-all-the-glory-to-my-lord-and-savior-activity-7235399030187397120-Otrb"
    },
    {
      id: 'ean-fellowship',
      title: "Enterprise African Network (EAN) Fellowship",
      organization: "African Union",
      year: "2024",
      image: "/images/awards/ean-fellowship-2024.jpg",
      description: "Annita has been selected as one of the 50 innovative small businesses for the inaugural Enterprise African Network (EAN) Fellowship Programme, participating in the prestigious third AU Micro, Small, and Medium Enterprise (MSME) Forum.",
      impact: "Selected among 50 innovative businesses across Africa",
      featured: true,
      linkedinUrl: "https://www.linkedin.com/posts/christopher-o-fallah-15058ab4_annita-has-been-selected-as-one-of-the-50-activity-7231565059083104256-NRVM"
    },
    {
      id: 'smart-liberia',
      title: "9th Place Winner - SMART Liberia ESP",
      organization: "SMART Liberia",
      year: "2024",
      image: "/images/awards/smart-liberia-esp-2024.jpg",
      description: "Back-to-back wins as the 9th place winner at SMART Liberia's ESP, receiving the L$75,000 prize for our innovative business model and social impact.",
      impact: "Received L$75,000 prize for business innovation",
      featured: true,
      linkedinUrl: "https://www.linkedin.com/posts/christopher-o-fallah-15058ab4_back-to-back-wins-not-luck-grace-humbled-activity-7235717012008697857-B4fQ"
    },
    {
      id: 'mansa-platform',
      title: "Mansa Platform Partnership",
      organization: "Mansa Due Diligence",
      year: "2024",
      image: "/images/awards/mansa-platform-2024.jpg",
      description: "Annita joins the Mansa platform, strengthening our position in the African business ecosystem and expanding our reach across the continent.",
      impact: "Enhanced business credibility and continental reach",
      featured: false,
      linkedinUrl: "https://www.linkedin.com/posts/christopher-o-fallah-15058ab4_annita-joins-the-mansa-platform-strengthening-activity-7303127700020350977-ykKT"
    }
  ]

  const stats = [
    { icon: Award, value: "4", label: "Awards Won" },
    { icon: Users, value: "50", label: "Innovative Businesses Selected" },
    { icon: Target, value: "3", label: "Major Prizes" },
    { icon: TrendingUp, value: "100%", label: "Success Rate" }
  ]

  const handleAwardSelect = (awardId: string) => {
    setSelectedAward(awardId)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedAward) return
    
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <>
      <SEOHead
        title="Awards & Recognition - Annita LLC"
        description="Discover Annita's achievements, awards, and recognition for our innovative contributions to Africa's digital transformation."
        keywords={[
          'awards',
          'recognition',
          'achievements',
          'Annita',
          'Africa',
          'tech awards',
          'innovation awards',
          'business awards',
          'community awards',
          'digital transformation',
          'fintech awards',
          'startup awards',
          'technology recognition',
          'African tech',
          'Liberia awards',
          'West Africa',
          'digital innovation',
          'business excellence',
          'community impact',
          'youth empowerment',
          'technology leadership',
          'industry recognition',
          'achievement awards',
          'excellence awards',
          'innovation recognition',
          'business success',
          'technology advancement',
          'digital excellence',
          'community development',
          'social impact',
          'entrepreneurship awards',
          'MSME recognition',
          'African innovation',
          'tech ecosystem',
          'digital economy',
          'business growth',
          'technology adoption',
          'digital inclusion',
          'economic development',
          'sustainable technology'
        ]}
        canonical="/awards"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                Awards & Recognition
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-orange-500">Achievements</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Celebrating our achievements and the impact we've made across Africa 
                through innovative technology and digital transformation.
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
                {/* Awards Information */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                    Awards & Recognition
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Discover our prestigious awards and recognitions that showcase our commitment 
                    to innovation and impact across Africa.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {stats.map((stat, index) => (
                      <div key={index} className="bg-white rounded-xl p-4 shadow-soft border border-gray-200 text-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <stat.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Awards List */}
                  <div className="space-y-6">
                    {awards.map((award) => (
                      <button
                        key={award.id}
                        onClick={() => handleAwardSelect(award.id)}
                        className={`w-full p-6 rounded-xl border-2 transition-all duration-200 text-left ${
                          selectedAward === award.id
                            ? 'border-orange-500 bg-orange-50'
                            : 'border-gray-200 hover:border-gray-300 bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                              <Award className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-gray-900">{award.title}</h3>
                              <p className="text-sm text-gray-600">{award.organization}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-bold text-orange-600">{award.year}</div>
                            {award.featured && (
                              <div className="text-xs text-orange-500">Featured</div>
                            )}
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-3">{award.description}</p>
                        
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <TrendingUp className="w-4 h-4 text-orange-500" />
                            <span className="text-sm font-medium text-gray-700">Impact:</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{award.impact}</p>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* LinkedIn Posts */}
                  <div className="mt-8 bg-white rounded-xl p-6 shadow-soft border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Latest LinkedIn Updates
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Follow our journey and stay updated with our latest achievements and announcements.
                    </p>
                    <div className="space-y-3">
                      {awards.slice(0, 2).map((award) => (
                        <div key={award.id} className="flex items-center space-x-3">
                          <Linkedin className="w-5 h-5 text-blue-600" />
                          <span className="text-sm text-gray-600">{award.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    {selectedAward ? `Learn More About ${awards.find(a => a.id === selectedAward)?.title}` : 'Get in Touch'}
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {!selectedAward && (
                      <div className="bg-orange-50 rounded-lg p-4 mb-6">
                        <p className="text-sm text-orange-700">
                          Please select an award above to learn more, or contact us for general inquiries.
                        </p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                          placeholder="Your full name"
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
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
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
                        Message
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        placeholder="Tell us about your interest in our awards or how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          {selectedAward ? 'Learn More' : 'Send Message'}
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </button>
                  </form>

                  {/* Contact Information */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-orange-500" />
                        <span className="text-gray-600">annitallc@gmail.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-orange-500" />
                        <span className="text-gray-600">+231 77 505 7227</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MessageSquare className="w-5 h-5 text-orange-500" />
                        <span className="text-gray-600">Live chat available</span>
                      </div>
                    </div>
                  </div>
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
                <Award className="w-10 h-10 text-green-600" />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Message Sent Successfully!
              </h2>
              
              <p className="text-gray-600 mb-8">
                Thank you for your interest in our awards and achievements! Our team will get back to you within 24 hours.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                    <span className="text-gray-600">We'll review your inquiry and gather relevant information</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                    <span className="text-gray-600">Our team will contact you with detailed information</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                    <span className="text-gray-600">You'll receive updates about our latest achievements</span>
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
                    setSelectedAward('')
                    setFormData({
                      name: '',
                      email: '',
                      company: '',
                      phone: '',
                      message: ''
                    })
                  }}
                  className="inline-flex items-center px-6 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition-colors duration-200"
                >
                  Learn About Another Award
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
