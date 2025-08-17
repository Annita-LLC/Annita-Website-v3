"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Play, Filter, Grid, List, Award } from 'lucide-react'

const TestimonialsGrid = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const filters = [
    { id: 'all', label: 'All Testimonials', count: 20 },
    { id: 'reviews', label: 'Written Reviews', count: 12 },
    { id: 'videos', label: 'Video Testimonials', count: 8 },
    { id: 'business', label: 'Business', count: 10 },
    { id: 'personal', label: 'Personal', count: 10 }
  ]

  const testimonials = [
    {
      id: 1,
      type: 'review',
      category: 'business',
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Africa',
      company: 'TechStart Africa',
      content: 'Annita has transformed our business operations completely. The platform\'s ease of use and comprehensive features have helped us scale from a small startup to serving thousands of customers across Africa.',
      rating: 5,
      date: 'March 2024',
      avatar: 'SJ',
      verified: true
    },
    {
      id: 2,
      type: 'review',
      category: 'personal',
      name: 'Michael Chen',
      role: 'Student',
      company: 'University of Liberia',
      content: 'The personal AI assistant has been a game-changer for my studies. It helps me stay organized, provides study tips, and even helps with research.',
      rating: 5,
      date: 'February 2024',
      avatar: 'MC',
      verified: true
    },
    {
      id: 3,
      type: 'video',
      category: 'business',
      name: 'Maria Santos',
      role: 'Operations Manager',
      company: 'RetailPlus Liberia',
      content: 'Our inventory management has never been better. The predictive analytics help us stock exactly what we need.',
      rating: 5,
      date: 'January 2024',
      avatar: 'MS',
      videoUrl: 'https://www.youtube.com/embed/9bZkp7q19f0',
      platform: 'youtube',
      duration: '2:34',
      verified: true
    },
    {
      id: 4,
      type: 'review',
      category: 'personal',
      name: 'David Okafor',
      role: 'Fitness Enthusiast',
      company: 'Personal Trainer',
      content: 'The AI fitness coach is incredible! It creates personalized workout plans, tracks my progress, and keeps me motivated.',
      rating: 5,
      date: 'December 2023',
      avatar: 'DO',
      verified: true
    },
    {
      id: 5,
      type: 'review',
      category: 'business',
      name: 'Emma Davis',
      role: 'Marketing Director',
      company: 'DigitalCommerce',
      content: 'The marketing automation tools have revolutionized our customer acquisition. We\'ve seen a 300% increase in leads.',
      rating: 5,
      date: 'November 2023',
      avatar: 'ED',
      verified: true
    },
    {
      id: 6,
      type: 'video',
      category: 'personal',
      name: 'Lisa Mwangi',
      role: 'Creative Professional',
      company: 'Freelance Designer',
      content: 'The creative AI assistant helps me overcome creative blocks and generates amazing ideas for my projects.',
      rating: 5,
      date: 'October 2023',
      avatar: 'LM',
      videoUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw',
      platform: 'youtube',
      duration: '2:52',
      verified: true
    }
  ]

  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : testimonials.filter(item => item.category === activeFilter)

  const getPlatformIcon = (platform?: string) => {
    if (!platform) return null
    switch (platform) {
      case 'youtube': return <Play className="w-4 h-4" />
      case 'instagram': return <Play className="w-4 h-4" />
      case 'facebook': return <Play className="w-4 h-4" />
      case 'twitter': return <Play className="w-4 h-4" />
      default: return <Play className="w-4 h-4" />
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        {/* Filters and Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                }`}
              >
                {filter.label}
                <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                  {filter.count}
                </span>
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === 'grid'
                  ? 'bg-white text-orange-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === 'list'
                  ? 'bg-white text-orange-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Testimonials Display */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {testimonial.type === 'video' ? (
                  <div className="relative aspect-video bg-gray-200">
                    <iframe
                      src={testimonial.videoUrl}
                      title={testimonial.name}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    {testimonial.platform && (
                      <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2">
                        {getPlatformIcon(testimonial.platform)}
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {testimonial.duration}
                    </div>
                  </div>
                ) : (
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                          <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{testimonial.name}</div>
                          <div className="text-sm text-gray-600">{testimonial.role}</div>
                          <div className="text-xs text-orange-600">{testimonial.company}</div>
                        </div>
                      </div>
                      {testimonial.verified && (
                        <div className="text-green-500">
                          <Award className="w-5 h-5" />
                        </div>
                      )}
                    </div>

                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <blockquote className="text-gray-700 mb-4 italic">
                      "{testimonial.content}"
                    </blockquote>

                    <div className="text-xs text-gray-500">
                      {testimonial.date}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row">
                  {testimonial.type === 'video' ? (
                    <div className="lg:w-1/3">
                      <div className="relative aspect-video bg-gray-200">
                        <iframe
                          src={testimonial.videoUrl}
                          title={testimonial.name}
                          className="w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                        {testimonial.platform && (
                          <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2">
                            {getPlatformIcon(testimonial.platform)}
                          </div>
                        )}
                        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
                          {testimonial.duration}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="lg:w-1/3 p-6 sm:p-8">
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                          <span className="text-white font-bold">{testimonial.avatar}</span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-lg">{testimonial.name}</div>
                          <div className="text-gray-600">{testimonial.role}</div>
                          <div className="text-orange-600 text-sm">{testimonial.company}</div>
                        </div>
                      </div>

                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="lg:w-2/3 p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-orange-600 uppercase tracking-wide">
                        {testimonial.category === 'business' ? 'Business' : 'Personal'}
                      </span>
                      <span className="text-sm text-gray-500">{testimonial.date}</span>
                    </div>
                    
                    <blockquote className="text-gray-700 text-lg leading-relaxed mb-4 italic">
                      "{testimonial.content}"
                    </blockquote>

                    {testimonial.verified && (
                      <div className="flex items-center text-green-600 text-sm">
                        <Award className="w-4 h-4 mr-2" />
                        Verified Customer
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default TestimonialsGrid
