"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import { 
  Play, 
  Music, 
  Video, 
  Gamepad2, 
  Users, 
  Heart, 
  Share2, 
  Download,
  Star,
  Clock,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Globe,
  Zap
} from 'lucide-react'

const EntertainmentPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeCategory, setActiveCategory] = useState('music')

  const features = [
    {
      icon: Music,
      title: "Music Streaming",
      description: "Access millions of songs from African and global artists",
      color: "purple"
    },
    {
      icon: Video,
      title: "Video Content",
      description: "Watch movies, series, and original African content",
      color: "red"
    },
    {
      icon: Gamepad2,
      title: "Gaming",
      description: "Play mobile games and compete with friends",
      color: "green"
    },
    {
      icon: Users,
      title: "Social Features",
      description: "Connect with friends and share your favorite content",
      color: "blue"
    }
  ]

  const categories = [
    { 
      name: "Music", 
      icon: "🎵", 
      count: "10M+ songs",
      description: "From traditional African music to global hits"
    },
    { 
      name: "Movies", 
      icon: "🎬", 
      count: "50K+ titles",
      description: "Hollywood blockbusters and African cinema"
    },
    { 
      name: "TV Shows", 
      icon: "📺", 
      count: "25K+ series",
      description: "Binge-worthy content from around the world"
    },
    { 
      name: "Games", 
      icon: "🎮", 
      count: "5K+ games",
      description: "Casual and competitive mobile gaming"
    },
    { 
      name: "Podcasts", 
      icon: "🎙️", 
      count: "100K+ episodes",
      description: "Educational and entertaining audio content"
    },
    { 
      name: "Live Events", 
      icon: "🎪", 
      count: "Live streaming",
      description: "Concerts, sports, and cultural events"
    }
  ]

  const trendingContent = [
    {
      title: "African Beats Collection",
      type: "Music Playlist",
      creator: "Annita Music",
      duration: "2h 15m",
      listeners: "125K",
      image: "🎵",
      badge: "Trending"
    },
    {
      title: "Liberia's Got Talent",
      type: "TV Show",
      creator: "Annita Studios",
      duration: "45m",
      viewers: "500K",
      image: "🎭",
      badge: "New"
    },
    {
      title: "African Warriors",
      type: "Mobile Game",
      creator: "Annita Games",
      duration: "Multiplayer",
      players: "50K",
      image: "⚔️",
      badge: "Popular"
    },
    {
      title: "Tech Talk Africa",
      type: "Podcast",
      creator: "Annita Media",
      duration: "35m",
      listeners: "75K",
      image: "🎙️",
      badge: "Featured"
    }
  ]

  const benefits = [
    "Unlimited streaming with premium quality",
    "Offline downloads for offline enjoyment",
    "Personalized recommendations",
    "Family sharing plans available",
    "Ad-free premium experience",
    "Cross-platform synchronization"
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Annita Entertainment - Digital Media Platform",
    "description": "Stream music, watch movies, play games, and enjoy African entertainment content. Access millions of songs, videos, and games on one platform.",
    "url": "https://annita.com/services/entertainment",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://annita.com/services/entertainment/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <SEOHead
        title="Annita Entertainment - Digital Media Platform | Annita LLC"
        description="Stream music, watch movies, play games, and enjoy African entertainment content. Access millions of songs, videos, and games on one platform."
        keywords={[
          'Annita Entertainment',
          'music streaming',
          'video streaming',
          'mobile gaming',
          'African entertainment',
          'digital media',
          'streaming platform',
          'music app',
          'video app',
          'gaming platform',
          'entertainment content',
          'African music',
          'African movies',
          'mobile entertainment',
          'media streaming'
        ]}
        canonical="/services/entertainment"
        ogImage="/entertainment-og-image.jpg"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
                  <Play className="w-4 h-4 mr-2" />
                  Digital Entertainment Platform
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6">
                  Your <span className="text-purple-600">Entertainment</span> Universe
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                  Stream music, watch movies, play games, and discover amazing African content. 
                  All your entertainment needs in one powerful platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center">
                    <Download className="w-5 h-5 mr-2" />
                    Download App
                  </button>
                  <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Start Streaming
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                    <Play className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Now Playing</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl">🎵</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">African Beats</h4>
                        <p className="text-sm text-gray-600">Various Artists</p>
                      </div>
                      <Heart className="w-5 h-5 text-red-500" />
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>2:15 / 3:45</span>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 bg-purple-100 rounded-full">
                          <Play className="w-4 h-4 text-purple-600" />
                        </button>
                        <button className="p-2 bg-gray-100 rounded-full">
                          <Share2 className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20" ref={ref}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                All Your <span className="text-purple-600">Entertainment</span> in One Place
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                From music to movies, games to podcasts, Annita Entertainment brings you 
                the best content from Africa and around the world.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    feature.color === 'purple' ? 'bg-purple-100' :
                    feature.color === 'red' ? 'bg-red-100' :
                    feature.color === 'green' ? 'bg-green-100' :
                    'bg-blue-100'
                  }`}>
                    <feature.icon className={`w-6 h-6 ${
                      feature.color === 'purple' ? 'text-purple-600' :
                      feature.color === 'red' ? 'text-red-600' :
                      feature.color === 'green' ? 'text-green-600' :
                      'text-blue-600'
                    }`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-purple-50 to-purple-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Explore <span className="text-purple-600">Categories</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Discover endless entertainment across all categories with premium content 
                and exclusive African productions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-purple-600 font-medium text-sm mb-3">{category.count}</p>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trending Content Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Trending <span className="text-purple-600">Content</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Discover what's hot right now with our trending content from across Africa and beyond.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingContent.map((content, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                >
                  <div className="relative mb-4">
                    <div className="text-5xl text-center group-hover:scale-110 transition-transform duration-300">
                      {content.image}
                    </div>
                    {content.badge && (
                      <div className="absolute top-0 right-0 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {content.badge}
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{content.title}</h3>
                  <p className="text-purple-600 font-medium text-sm mb-2">{content.type}</p>
                  <p className="text-gray-600 text-sm mb-3">by {content.creator}</p>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{content.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{content.listeners || content.viewers || content.players}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Premium <span className="text-purple-600">Entertainment</span> Experience
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Annita Entertainment is designed to provide you with the best possible 
                  entertainment experience with premium features and content.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-3xl shadow-2xl">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Platform Stats</h3>
                    <p className="text-gray-600">Real-time data</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Active Users</span>
                      <span className="font-semibold text-purple-600">2M+</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Content Library</span>
                      <span className="font-semibold text-purple-600">50M+</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Daily Streams</span>
                      <span className="font-semibold text-green-600">10M+</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-purple-500 to-purple-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Start Your Entertainment Journey
              </h2>
              <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
                Download the Annita Entertainment app and access millions of songs, 
                videos, games, and exclusive African content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200 flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Now
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200 flex items-center justify-center">
                  Start Streaming
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default EntertainmentPage
