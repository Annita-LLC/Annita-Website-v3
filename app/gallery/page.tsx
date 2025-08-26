'use client'

import { useState } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import { 
  Play, 
  Instagram, 
  Youtube, 
  Facebook, 
  Twitter, 
  ExternalLink, 
  Filter, 
  Grid, 
  List,
  ArrowRight,
  Download,
  Mail,
  Phone,
  MessageSquare,
  Camera,
  Video,
  Users
} from 'lucide-react'
import Link from 'next/link'

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const categories = [
    {
      id: 'events',
      name: 'Events',
      description: 'Launch events, conferences, and special occasions',
      icon: Play,
      count: 8,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'team',
      name: 'Team',
      description: 'Our amazing team members and company culture',
      icon: Users,
      count: 6,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'office',
      name: 'Office',
      description: 'Our workspace and facilities',
      icon: Camera,
      count: 4,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'videos',
      name: 'Videos',
      description: 'Product demos, company overview, and behind-the-scenes',
      icon: Video,
      count: 6,
      color: 'from-orange-500 to-red-500'
    }
  ]

  const galleryItems = [
    // Events
    {
      id: 1,
      type: 'image',
      category: 'events',
      title: 'Annita Launch Event 2024',
      description: 'The grand launch of Annita platform in Monrovia',
      image: '/images/gallery/launch-event.jpg',
      date: 'March 2024',
      featured: true
    },
    {
      id: 2,
      type: 'video',
      category: 'events',
      title: 'The 100 Initiative Kickoff',
      description: 'Youth empowerment program launch ceremony',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      platform: 'youtube',
      date: 'February 2024',
      featured: true
    },
    {
      id: 3,
      type: 'image',
      category: 'events',
      title: 'Tech Conference 2024',
      description: 'Annita presenting at Liberia Tech Summit',
      image: '/images/gallery/tech-conference.jpg',
      date: 'January 2024'
    },
    {
      id: 4,
      type: 'video',
      category: 'events',
      title: 'Customer Success Stories',
      description: 'Real stories from our users across Africa',
      videoUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw',
      platform: 'youtube',
      date: 'December 2023'
    },

    // Team
    {
      id: 5,
      type: 'image',
      category: 'team',
      title: 'Leadership Team',
      description: 'Our executive leadership team',
      image: '/images/gallery/leadership-team.jpg',
      date: '2024'
    },
    {
      id: 6,
      type: 'image',
      category: 'team',
      title: 'Development Team',
      description: 'Our talented software development team',
      image: '/images/gallery/dev-team.jpg',
      date: '2024'
    },
    {
      id: 7,
      type: 'video',
      category: 'team',
      title: 'Meet Our Team',
      description: 'Get to know the people behind Annita',
      videoUrl: 'https://www.youtube.com/embed/ZZ5LpwO-An4',
      platform: 'youtube',
      date: '2024'
    },
    {
      id: 8,
      type: 'image',
      category: 'team',
      title: 'Marketing Team',
      description: 'Our creative marketing professionals',
      image: '/images/gallery/marketing-team.jpg',
      date: '2024'
    },

    // Office
    {
      id: 9,
      type: 'image',
      category: 'office',
      title: 'Main Office',
      description: 'Our headquarters in Monrovia',
      image: '/images/gallery/main-office.jpg',
      date: '2024'
    },
    {
      id: 10,
      type: 'image',
      category: 'office',
      title: 'Meeting Room',
      description: 'Modern meeting spaces for collaboration',
      image: '/images/gallery/meeting-room.jpg',
      date: '2024'
    },
    {
      id: 11,
      type: 'image',
      category: 'office',
      title: 'Workstation Area',
      description: 'Comfortable work environment for our team',
      image: '/images/gallery/workstation.jpg',
      date: '2024'
    },
    {
      id: 12,
      type: 'image',
      category: 'office',
      title: 'Recreation Area',
      description: 'Break room and relaxation space',
      image: '/images/gallery/recreation-area.jpg',
      date: '2024'
    },

    // Videos
    {
      id: 13,
      type: 'video',
      category: 'videos',
      title: 'Company Overview',
      description: 'Learn about Annita\'s mission and vision',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      platform: 'youtube',
      date: '2024'
    },
    {
      id: 14,
      type: 'video',
      category: 'videos',
      title: 'Product Demo',
      description: 'Comprehensive walkthrough of our platform',
      videoUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw',
      platform: 'youtube',
      date: '2024'
    },
    {
      id: 15,
      type: 'video',
      category: 'videos',
      title: 'Behind the Scenes',
      description: 'A day in the life at Annita',
      videoUrl: 'https://www.youtube.com/embed/ZZ5LpwO-An4',
      platform: 'youtube',
      date: '2024'
    },
    {
      id: 16,
      type: 'video',
      category: 'videos',
      title: 'Tech Talk',
      description: 'Our CTO discussing future technologies',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      platform: 'youtube',
      date: '2024'
    }
  ]

  const filteredItems = selectedCategory === '' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  const getPlatformIcon = (platform?: string) => {
    if (!platform) return null
    switch (platform) {
      case 'youtube': return <Youtube className="w-5 h-5" />
      case 'instagram': return <Instagram className="w-5 h-5" />
      case 'facebook': return <Facebook className="w-5 h-5" />
      case 'twitter': return <Twitter className="w-5 h-5" />
      default: return <ExternalLink className="w-5 h-5" />
    }
  }

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId)
  }

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
        title="Gallery - Annita LLC"
        description="Explore our collection of images, videos, and media showcasing Annita's journey, team, events, and achievements."
        keywords={[
          'gallery',
          'photos',
          'videos',
          'events',
          'team',
          'office',
          'Annita',
          'Liberia',
          'tech company',
          'company photos',
          'event photos',
          'team photos',
          'office photos',
          'company videos',
          'event videos',
          'team videos',
          'office videos',
          'company media',
          'event media',
          'team media',
          'office media',
          'company gallery',
          'event gallery',
          'team gallery',
          'office gallery',
          'company images',
          'event images',
          'team images',
          'office images',
          'company pictures',
          'event pictures',
          'team pictures',
          'office pictures',
          'company footage',
          'event footage',
          'team footage',
          'office footage'
        ]}
        canonical="/gallery"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
                <Camera className="w-4 h-4 mr-2" />
                Media Gallery
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-orange-500">Gallery</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Explore our journey through images, videos, and moments that define 
                Annita's story and showcase our team, events, and achievements.
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
                {/* Gallery Information */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                    Media Categories
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Browse through our collection of photos and videos organized by category. 
                    From team events to product demos, discover what makes Annita special.
                  </p>

                  {/* Categories */}
                  <div className="space-y-6">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => handleCategorySelect(category.id)}
                        className={`w-full p-6 rounded-xl border-2 transition-all duration-200 text-left ${
                          selectedCategory === category.id
                            ? 'border-orange-500 bg-orange-50'
                            : 'border-gray-200 hover:border-gray-300 bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                              <category.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-gray-900">{category.name}</h3>
                              <p className="text-sm text-gray-600">{category.description}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-bold text-orange-600">{category.count} items</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Gallery Preview */}
                  <div className="mt-8 bg-white rounded-xl p-6 shadow-soft border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      {selectedCategory ? `${categories.find(c => c.id === selectedCategory)?.name} Preview` : 'Featured Media'}
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {filteredItems.slice(0, 4).map((item) => (
                        <div key={item.id} className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                          {item.type === 'image' ? (
                            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                              <Camera className="w-8 h-8 text-gray-500" />
                            </div>
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-red-300 to-red-400 flex items-center justify-center">
                              <Play className="w-8 h-8 text-white" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="mt-8 bg-white rounded-xl p-6 shadow-soft border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Follow Our Journey
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Stay connected with us on social media for the latest updates and behind-the-scenes content.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Instagram className="w-5 h-5 text-pink-600" />
                        <span className="text-sm text-gray-600">@annita - Latest photos and stories</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Youtube className="w-5 h-5 text-red-600" />
                        <span className="text-sm text-gray-600">Annita Channel - Product demos and updates</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Facebook className="w-5 h-5 text-blue-600" />
                        <span className="text-sm text-gray-600">Annita - Company news and events</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Get in Touch
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="bg-orange-50 rounded-lg p-4 mb-6">
                      <p className="text-sm text-orange-700">
                        Interested in our media content? Want to use our photos or videos? 
                        Contact us for licensing and collaboration opportunities.
                      </p>
                    </div>

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
                        placeholder="Tell us about your interest in our media content or how we can help..."
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
                          Send Message
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
                <Camera className="w-10 h-10 text-green-600" />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Message Sent Successfully!
              </h2>
              
              <p className="text-gray-600 mb-8">
                Thank you for your interest in our media content! Our team will get back to you within 24 hours.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                    <span className="text-gray-600">We'll review your request and gather relevant media</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                    <span className="text-gray-600">Our team will contact you with licensing information</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                    <span className="text-gray-600">You'll receive access to our media library</span>
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
                    setSelectedCategory('')
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
                  Browse Another Category
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
