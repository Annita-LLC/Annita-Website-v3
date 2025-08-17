"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import { 
  MessageCircle, 
  Users, 
  Heart, 
  Share2, 
  Camera, 
  Video, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Download,
  Play,
  Star,
  BarChart3,
  Activity,
  Globe,
  Bell
} from 'lucide-react'

const SocialPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeFeature, setActiveFeature] = useState('messaging')

  const features = [
    {
      icon: MessageCircle,
      title: "Instant Messaging",
      description: "Real-time chat with friends and family",
      color: "blue"
    },
    {
      icon: Camera,
      title: "Photo Sharing",
      description: "Share moments with beautiful photo features",
      color: "green"
    },
    {
      icon: Video,
      title: "Video Calls",
      description: "High-quality video conversations",
      color: "orange"
    },
    {
      icon: Users,
      title: "Social Groups",
      description: "Connect with communities and interests",
      color: "purple"
    }
  ]

  const socialFeatures = [
    { 
      name: "News Feed", 
      icon: "📰", 
      description: "Personalized content and updates",
      features: ["Smart algorithms", "Content filtering", "Trending topics"],
      users: "500K+ active"
    },
    { 
      name: "Stories", 
      icon: "📸", 
      description: "Share moments that disappear in 24 hours",
      features: ["Photo stories", "Video stories", "Creative tools"],
      users: "300K+ daily"
    },
    { 
      name: "Groups", 
      icon: "👥", 
      description: "Join communities based on interests",
      features: ["Public groups", "Private groups", "Group chats"],
      users: "50K+ groups"
    },
    { 
      name: "Events", 
      icon: "📅", 
      description: "Discover and organize local events",
      features: ["Event creation", "RSVP system", "Location sharing"],
      users: "25K+ events"
    },
    { 
      name: "Marketplace", 
      icon: "🛍️", 
      description: "Buy and sell within your community",
      features: ["Local listings", "Secure payments", "Reviews system"],
      users: "100K+ listings"
    },
    { 
      name: "Live Streaming", 
      icon: "📺", 
      description: "Go live and interact with followers",
      features: ["HD streaming", "Live comments", "Recording"],
      users: "10K+ streamers"
    }
  ]

  const platformStats = [
    {
      title: "Active Users",
      value: "2M+",
      change: "+15%",
      icon: "👥",
      color: "blue"
    },
    {
      title: "Daily Posts",
      value: "500K+",
      change: "+25%",
      icon: "📝",
      color: "green"
    },
    {
      title: "Messages Sent",
      value: "10M+",
      change: "+30%",
      icon: "💬",
      color: "orange"
    },
    {
      title: "Connections Made",
      value: "5M+",
      change: "+20%",
      icon: "🤝",
      color: "purple"
    }
  ]

  const benefits = [
    "Connect with friends, family, and new people",
    "Share photos, videos, and stories instantly",
    "Join communities based on your interests",
    "Discover local events and activities",
    "Secure and private messaging options",
    "Cross-platform compatibility"
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Annita Social - Social Networking Platform",
    "description": "Connect with friends, share moments, and discover communities. A comprehensive social networking platform with messaging, photo sharing, and community features.",
    "url": "https://annita.com/services/social",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://annita.com/services/social/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <SEOHead
        title="Annita Social - Social Networking Platform | Annita LLC"
        description="Connect with friends, share moments, and discover communities. A comprehensive social networking platform with messaging, photo sharing, and community features."
        keywords={[
          'Annita Social',
          'social networking',
          'social media platform',
          'messaging app',
          'photo sharing',
          'social communities',
          'online networking',
          'social connections',
          'instant messaging',
          'video calls',
          'social groups',
          'social events',
          'social marketplace',
          'live streaming',
          'social features'
        ]}
        canonical="/services/social"
        ogImage="/social-og-image.jpg"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Social Networking Platform
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6">
                  Connect <span className="text-purple-600">Socially</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                  Connect with friends, share moments, and discover communities. 
                  A comprehensive social networking platform for meaningful connections.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center">
                    <Download className="w-5 h-5 mr-2" />
                    Download App
                  </button>
                  <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Join Community
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
                    <MessageCircle className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Social Feed</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        S
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-gray-900">Sarah Johnson</span>
                          <span className="text-xs text-gray-500">2 min ago</span>
                        </div>
                        <p className="text-sm text-gray-600">Just finished my morning workout! 💪 #fitness #motivation</p>
                      </div>
                      <Heart className="w-5 h-5 text-red-500" />
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        M
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-gray-900">Mike Chen</span>
                          <span className="text-xs text-gray-500">5 min ago</span>
                        </div>
                        <p className="text-sm text-gray-600">Beautiful sunset at the beach today! 🌅</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Heart className="w-5 h-5 text-gray-400" />
                        <Share2 className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="What's on your mind?"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-12"
                      />
                      <Camera className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
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
                Social <span className="text-purple-600">Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to stay connected, share moments, and build meaningful 
                relationships in the digital world.
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
                    feature.color === 'blue' ? 'bg-blue-100' :
                    feature.color === 'green' ? 'bg-green-100' :
                    feature.color === 'orange' ? 'bg-orange-100' :
                    'bg-purple-100'
                  }`}>
                    <feature.icon className={`w-6 h-6 ${
                      feature.color === 'blue' ? 'text-blue-600' :
                      feature.color === 'green' ? 'text-green-600' :
                      feature.color === 'orange' ? 'text-orange-600' :
                      'text-purple-600'
                    }`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Features Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-purple-50 to-purple-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Platform <span className="text-purple-600">Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Discover all the amazing features that make Annita Social the perfect 
                platform for staying connected and sharing life's moments.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {socialFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                  <ul className="space-y-2 mb-4">
                    {feature.features.map((feat, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-purple-600 font-semibold text-sm">{feature.users}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Statistics Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Platform <span className="text-purple-600">Statistics</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Real-time data showing the growth and engagement of our social community.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platformStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{stat.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.title}</h3>
                    <div className="text-3xl font-bold text-purple-600 mb-2">{stat.value}</div>
                    <div className="flex items-center justify-center space-x-1">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-green-600 text-sm font-medium">{stat.change}</span>
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
                  Why Choose <span className="text-purple-600">Annita Social</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Annita Social is designed to provide you with the most comprehensive 
                  social networking experience with privacy and security in mind.
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
                      <BarChart3 className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Community Growth</h3>
                    <p className="text-gray-600">Monthly statistics</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">New Users</span>
                      <span className="font-semibold text-purple-600">50K+</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Daily Posts</span>
                      <span className="font-semibold text-purple-600">100K+</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Engagement Rate</span>
                      <span className="font-semibold text-green-600">85%</span>
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
                Join the Community Today
              </h2>
              <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
                Connect with millions of users already sharing, connecting, and building 
                relationships on Annita Social.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200 flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download App
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200 flex items-center justify-center">
                  Join Community
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

export default SocialPage
