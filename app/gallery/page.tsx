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
  ArrowRight,
  Download,
  Camera,
  Video,
  Users,
  Globe
} from 'lucide-react'
import Link from 'next/link'

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('')

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
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
                <Camera className="w-4 h-4 mr-2" />
                Media Gallery
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
                Our <span className="text-orange-600">Gallery</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                Explore our journey through images, videos, and moments that define 
                Annita's story and showcase our team, events, and achievements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://annita.company.site/products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-700 hover:to-orange-800 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Try V1.0 Now
                </a>
                <a
                  href="/download"
                  className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-200 flex items-center justify-center transform hover:-translate-y-1"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Join V3.0 Waitlist
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Enhanced Gallery Information */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                Media <span className="text-orange-500">Categories</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 text-center max-w-4xl mx-auto leading-relaxed">
                Browse through our collection of photos and videos organized by category. 
                From team events to product demos, discover what makes Annita special.
              </p>

              {/* Enhanced Categories */}
              <div className="space-y-6 sm:space-y-8">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategorySelect(category.id)}
                    className={`w-full p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border-2 transition-all duration-300 text-left hover:shadow-lg ${
                      selectedCategory === category.id
                        ? 'border-orange-500 bg-orange-50 shadow-lg'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6">
                      <div className="flex items-center space-x-4 sm:space-x-6 mb-4 sm:mb-0">
                        <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${category.color} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg`}>
                          <category.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{category.name}</h3>
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{category.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg sm:text-xl font-bold text-orange-600 mb-1">{category.count} items</div>
                        <div className="text-xs sm:text-sm text-gray-500">Click to view</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Enhanced Gallery Preview */}
              <div className="mt-12 sm:mt-16 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg border border-gray-200">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                  {selectedCategory ? `${categories.find(c => c.id === selectedCategory)?.name} Preview` : 'Featured Media'}
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {filteredItems.slice(0, 4).map((item) => (
                    <div key={item.id} className="aspect-video bg-gray-200 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      {item.type === 'image' ? (
                        <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                          <Camera className="w-8 h-8 sm:w-12 sm:h-12 text-gray-500" />
                        </div>
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-red-300 to-red-400 flex items-center justify-center">
                          <Play className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Social Media */}
              <div className="mt-12 sm:mt-16 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg border border-gray-200">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                  Follow Our Journey
                </h3>
                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  Stay connected with us on social media for the latest updates and behind-the-scenes content.
                </p>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                    <Instagram className="w-6 h-6 sm:w-8 sm:h-8 text-pink-600" />
                    <span className="text-sm sm:text-base text-gray-700 font-medium">@annita - Latest photos and stories</span>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                    <Youtube className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
                    <span className="text-sm sm:text-base text-gray-700 font-medium">Annita Channel - Product demos and updates</span>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                    <Facebook className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                    <span className="text-sm sm:text-base text-gray-700 font-medium">Annita - Company news and events</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center p-8 sm:p-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl text-white shadow-2xl">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg text-orange-100 mb-8 max-w-4xl mx-auto">
                Join thousands of MSMEs already using Annita to grow their revenue, reach new customers, 
                and streamline their operations across Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://annita.company.site/products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-colors duration-200 shadow-lg"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Try V1.0 Now
                </a>
                <a 
                  href="/download"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Join V3.0 Waitlist
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
