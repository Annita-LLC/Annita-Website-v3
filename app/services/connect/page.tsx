"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import { 
  MessageSquare, 
  Users, 
  Mail, 
  Phone, 
  Video, 
  Shield, 
  Zap, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Download,
  Play,
  Star,
  BarChart3,
  Activity,
  Globe
} from 'lucide-react'

const ConnectPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeFeature, setActiveFeature] = useState('messaging')

  const features = [
    {
      icon: MessageSquare,
      title: "Unified Messaging",
      description: "Connect across all channels in one platform",
      color: "blue"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Real-time collaboration and team management",
      color: "green"
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Advanced email campaigns and automation",
      color: "orange"
    },
    {
      icon: Video,
      title: "Video Conferencing",
      description: "High-quality video calls and meetings",
      color: "purple"
    }
  ]

  const tools = [
    { 
      name: "Business Messaging", 
      icon: "💬", 
      description: "Professional messaging for teams",
      features: ["Group chats", "File sharing", "Message history"],
      users: "10K+ teams"
    },
    { 
      name: "Email Marketing", 
      icon: "📧", 
      description: "Powerful email campaign tools",
      features: ["Templates", "Automation", "Analytics"],
      users: "5K+ marketers"
    },
    { 
      name: "Video Calls", 
      icon: "📹", 
      description: "Crystal clear video conferencing",
      features: ["Screen sharing", "Recording", "Virtual backgrounds"],
      users: "15K+ users"
    },
    { 
      name: "Customer Support", 
      icon: "🎧", 
      description: "Multi-channel support platform",
      features: ["Live chat", "Ticket system", "Knowledge base"],
      users: "8K+ businesses"
    },
    { 
      name: "Social Media", 
      icon: "📱", 
      description: "Social media management tools",
      features: ["Scheduling", "Analytics", "Engagement tracking"],
      users: "12K+ creators"
    },
    { 
      name: "Analytics", 
      icon: "📊", 
      description: "Comprehensive communication analytics",
      features: ["Performance metrics", "ROI tracking", "Custom reports"],
      users: "20K+ users"
    }
  ]

  const platformStats = [
    {
      title: "Active Users",
      value: "500K+",
      change: "+25%",
      icon: "👥",
      color: "blue"
    },
    {
      title: "Messages Sent",
      value: "10M+",
      change: "+40%",
      icon: "💬",
      color: "green"
    },
    {
      title: "Video Calls",
      value: "2M+",
      change: "+30%",
      icon: "📹",
      color: "orange"
    },
    {
      title: "Customer Satisfaction",
      value: "98%",
      change: "+2%",
      icon: "⭐",
      color: "purple"
    }
  ]

  const benefits = [
    "Unified communication across all channels",
    "Advanced security and encryption",
    "Real-time collaboration tools",
    "Comprehensive analytics and insights",
    "24/7 customer support",
    "Scalable solutions for any business size"
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Annita Connect - Communication & Marketing Suite",
    "description": "Unified communication and marketing platform with messaging, email marketing, video conferencing, and customer support tools. Connect with your team and customers seamlessly.",
    "url": "https://annita.com/services/connect",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://annita.com/services/connect/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <SEOHead
        title="Annita Connect - Communication & Marketing Suite | Annita LLC"
        description="Unified communication and marketing platform with messaging, email marketing, video conferencing, and customer support tools. Connect with your team and customers seamlessly."
        keywords={[
          'Annita Connect',
          'communication platform',
          'team collaboration',
          'email marketing',
          'video conferencing',
          'customer support',
          'business messaging',
          'marketing suite',
          'team communication',
          'unified communications',
          'social media management',
          'analytics platform',
          'business tools',
          'communication software',
          'marketing automation'
        ]}
        canonical="/services/connect"
        ogImage="/connect-og-image.jpg"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Communication & Marketing Suite
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6">
                  Connect <span className="text-blue-600">Seamlessly</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                  AI-driven marketing insights, targeted advertising, customer engagement tools, and comprehensive analytics. 
                  Lower customer acquisition costs with data-backed marketing strategies. Campaign performance tracking, 
                  social media management, email marketing automation, and SMS campaigns with real-time analytics.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => window.open('https://annita.company.site/products', '_blank')}
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Start Free Trial
                  </button>
                  <button 
                    className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center"
                    onClick={() => window.location.href = '/demo'}
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
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
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                    <MessageSquare className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Team Chat</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        A
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-gray-900">Alice Johnson</span>
                          <span className="text-xs text-gray-500">2 min ago</span>
                        </div>
                        <p className="text-sm text-gray-600">Great work on the project everyone! 🎉</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        B
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-gray-900">Bob Smith</span>
                          <span className="text-xs text-gray-500">Just now</span>
                        </div>
                        <p className="text-sm text-gray-600">Thanks Alice! Team effort 💪</p>
                      </div>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Type a message..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
                      />
                      <MessageSquare className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20" ref={ref}>
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Complete <span className="text-blue-600">Communication</span> Suite
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to connect with your team and customers in one powerful platform.
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

        {/* Tools Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Powerful <span className="text-blue-600">Tools</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive tools designed to enhance your communication and marketing efforts.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{tool.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                  <ul className="space-y-2 mb-4">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-blue-600 font-semibold text-sm">{tool.users}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Statistics Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Platform <span className="text-blue-600">Statistics</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Real-time data showing the impact and reach of our communication platform.
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
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
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
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Why Choose <span className="text-blue-600">Annita Connect</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Annita Connect is designed to provide you with the most comprehensive 
                  communication and marketing tools in one integrated platform.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
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
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Platform Growth</h3>
                    <p className="text-gray-600">Monthly statistics</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">New Users</span>
                      <span className="font-semibold text-blue-600">25K+</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Messages Sent</span>
                      <span className="font-semibold text-blue-600">2M+</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Uptime</span>
                      <span className="font-semibold text-green-600">99.9%</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-500 to-blue-600">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Start Connecting Today
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of teams already using Annita Connect to improve their 
                communication and marketing efforts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.open('https://annita.company.site/products', '_blank')}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Start Free Trial
                </button>
                <button 
                  onClick={() => window.open('/learn-more-v3', '_blank')}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center"
                >
                  Learn More
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

export default ConnectPage
