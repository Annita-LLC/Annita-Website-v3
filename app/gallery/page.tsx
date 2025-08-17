"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import { Play, Instagram, Youtube, Facebook, Twitter, ExternalLink, Filter, Grid, List } from 'lucide-react'

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Annita Gallery",
    "description": "Explore our collection of images, videos, and media showcasing Annita's journey, team, events, and achievements.",
    "url": "https://annita.com/gallery",
    "publisher": {
      "@type": "Organization",
      "name": "Annita LLC",
      "url": "https://annita.com"
    }
  }

  const filters = [
    { id: 'all', label: 'All Media', count: 24 },
    { id: 'events', label: 'Events', count: 8 },
    { id: 'team', label: 'Team', count: 6 },
    { id: 'office', label: 'Office', count: 4 },
    { id: 'videos', label: 'Videos', count: 6 }
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
    {
      id: 5,
      type: 'image',
      category: 'events',
      title: 'Partnership Signing',
      description: 'Strategic partnership with major tech companies',
      image: '/images/gallery/partnership.jpg',
      date: 'November 2023'
    },
    {
      id: 6,
      type: 'video',
      category: 'events',
      title: 'AnnitaPay Demo',
      description: 'Live demonstration of our payment platform',
      videoUrl: 'https://www.youtube.com/embed/9bZkp7q19f0',
      platform: 'youtube',
      date: 'October 2023'
    },
    {
      id: 7,
      type: 'image',
      category: 'events',
      title: 'Community Workshop',
      description: 'Digital literacy workshop in rural communities',
      image: '/images/gallery/workshop.jpg',
      date: 'September 2023'
    },
    {
      id: 8,
      type: 'image',
      category: 'events',
      title: 'Award Ceremony',
      description: 'Receiving the Best Tech Startup Award',
      image: '/images/gallery/award-ceremony.jpg',
      date: 'August 2023'
    },

    // Team
    {
      id: 9,
      type: 'image',
      category: 'team',
      title: 'Leadership Team',
      description: 'Our executive leadership team',
      image: '/images/gallery/leadership-team.jpg',
      date: '2024'
    },
    {
      id: 10,
      type: 'image',
      category: 'team',
      title: 'Development Team',
      description: 'Our talented software development team',
      image: '/images/gallery/dev-team.jpg',
      date: '2024'
    },
    {
      id: 11,
      type: 'video',
      category: 'team',
      title: 'Meet Our Team',
      description: 'Get to know the people behind Annita',
      videoUrl: 'https://www.youtube.com/embed/ZZ5LpwO-An4',
      platform: 'youtube',
      date: '2024'
    },
    {
      id: 12,
      type: 'image',
      category: 'team',
      title: 'Marketing Team',
      description: 'Our creative marketing professionals',
      image: '/images/gallery/marketing-team.jpg',
      date: '2024'
    },
    {
      id: 13,
      type: 'image',
      category: 'team',
      title: 'Customer Support',
      description: 'Our dedicated customer support team',
      image: '/images/gallery/support-team.jpg',
      date: '2024'
    },
    {
      id: 14,
      type: 'image',
      category: 'team',
      title: 'Internship Program',
      description: 'Young talents from The 100 program',
      image: '/images/gallery/interns.jpg',
      date: '2024'
    },

    // Office
    {
      id: 15,
      type: 'image',
      category: 'office',
      title: 'Main Office',
      description: 'Our headquarters in Monrovia',
      image: '/images/gallery/main-office.jpg',
      date: '2024'
    },
    {
      id: 16,
      type: 'image',
      category: 'office',
      title: 'Meeting Room',
      description: 'Modern meeting spaces for collaboration',
      image: '/images/gallery/meeting-room.jpg',
      date: '2024'
    },
    {
      id: 17,
      type: 'image',
      category: 'office',
      title: 'Workstation Area',
      description: 'Comfortable work environment for our team',
      image: '/images/gallery/workstation.jpg',
      date: '2024'
    },
    {
      id: 18,
      type: 'image',
      category: 'office',
      title: 'Recreation Area',
      description: 'Break room and relaxation space',
      image: '/images/gallery/recreation-area.jpg',
      date: '2024'
    },

    // Videos
    {
      id: 19,
      type: 'video',
      category: 'videos',
      title: 'Company Overview',
      description: 'Learn about Annita\'s mission and vision',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      platform: 'youtube',
      date: '2024'
    },
    {
      id: 20,
      type: 'video',
      category: 'videos',
      title: 'Product Demo',
      description: 'Comprehensive walkthrough of our platform',
      videoUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw',
      platform: 'youtube',
      date: '2024'
    },
    {
      id: 21,
      type: 'video',
      category: 'videos',
      title: 'Customer Testimonials',
      description: 'Hear from our satisfied customers',
      videoUrl: 'https://www.youtube.com/embed/9bZkp7q19f0',
      platform: 'youtube',
      date: '2024'
    },
    {
      id: 22,
      type: 'video',
      category: 'videos',
      title: 'Behind the Scenes',
      description: 'A day in the life at Annita',
      videoUrl: 'https://www.youtube.com/embed/ZZ5LpwO-An4',
      platform: 'youtube',
      date: '2024'
    },
    {
      id: 23,
      type: 'video',
      category: 'videos',
      title: 'Tech Talk',
      description: 'Our CTO discussing future technologies',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      platform: 'youtube',
      date: '2024'
    },
    {
      id: 24,
      type: 'video',
      category: 'videos',
      title: 'Community Impact',
      description: 'How Annita is transforming communities',
      videoUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw',
      platform: 'youtube',
      date: '2024'
    }
  ]

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

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
        ogImage="/images/gallery/launch-event.jpg"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600"></div>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Our <span className="text-orange-200">Gallery</span>
              </h1>
              <p className="text-xl sm:text-2xl text-orange-100 max-w-3xl mx-auto mb-8">
                Explore our journey through images, videos, and moments that define Annita's story
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white/20 px-4 py-2 rounded-full">24+ Media Items</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">Events & Team</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">Videos & Photos</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters and Controls */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              {/* Filters */}
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      activeFilter === filter.id
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {filter.label} ({filter.count})
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === 'grid' ? 'bg-white text-orange-500 shadow-sm' : 'text-gray-600'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === 'list' ? 'bg-white text-orange-500 shadow-sm' : 'text-gray-600'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 sm:py-20" ref={ref}>
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`group cursor-pointer ${
                      item.featured ? 'md:col-span-2 lg:col-span-2' : ''
                    }`}
                  >
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      {item.type === 'image' ? (
                        <div className="relative aspect-video bg-gray-200">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                        </div>
                      ) : (
                        <div className="relative aspect-video bg-gray-200">
                          <iframe
                            src={item.videoUrl}
                            title={item.title}
                            className="w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                          {item.platform && (
                            <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2">
                              {getPlatformIcon(item.platform)}
                            </div>
                          )}
                        </div>
                      )}
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium text-orange-600 uppercase tracking-wide">
                            {item.category}
                          </span>
                          <span className="text-xs text-gray-500">{item.date}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-200">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-1/3">
                        {item.type === 'image' ? (
                          <div className="relative aspect-video bg-gray-200">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="relative aspect-video bg-gray-200">
                            <iframe
                              src={item.videoUrl}
                              title={item.title}
                              className="w-full h-full"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                            {item.platform && (
                              <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2">
                                {getPlatformIcon(item.platform)}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                      
                      <div className="lg:w-2/3 p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-orange-600 uppercase tracking-wide">
                            {item.category}
                          </span>
                          <span className="text-sm text-gray-500">{item.date}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Stay Connected
              </h2>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
                Follow us on social media for the latest updates, behind-the-scenes content, and more
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://instagram.com/annita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 flex items-center gap-2"
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
                <a
                  href="https://youtube.com/annita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 flex items-center gap-2"
                >
                  <Youtube className="w-5 h-5" />
                  YouTube
                </a>
                <a
                  href="https://facebook.com/annita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 flex items-center gap-2"
                >
                  <Facebook className="w-5 h-5" />
                  Facebook
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default GalleryPage
