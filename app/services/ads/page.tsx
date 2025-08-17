"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import {
  Target,
  TrendingUp,
  Users,
  BarChart3,
  Eye,
  MousePointer,
  Globe,
  Zap,
  CheckCircle,
  ArrowRight,
  Download,
  Play,
  Star,
  Activity,
  Clock,
  DollarSign,
  Smartphone,
  Monitor,
  Palette,
  Megaphone
} from 'lucide-react'

const AdsPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: Target,
      title: "Precise Targeting",
      description: "Reach your ideal audience with advanced targeting options",
      color: "blue"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Real-time insights and optimization recommendations",
      color: "green"
    },
    {
      icon: Globe,
      title: "Multi-Platform",
      description: "Advertise across web, mobile, and social platforms",
      color: "orange"
    },
    {
      icon: Zap,
      title: "Smart Automation",
      description: "AI-powered campaign optimization and bidding",
      color: "purple"
    }
  ]

  const adTypes = [
    {
      name: "Display Ads",
      icon: "🖼️",
      description: "Visual banner advertisements",
      features: ["Rich media support", "Responsive design", "Interactive elements"],
      reach: "500M+ impressions"
    },
    {
      name: "Video Ads",
      icon: "🎥",
      description: "Engaging video content",
      features: ["Pre-roll ads", "Mid-roll ads", "Interactive overlays"],
      reach: "200M+ views"
    },
    {
      name: "Social Media Ads",
      icon: "📱",
      description: "Platform-specific advertising",
      features: ["Facebook ads", "Instagram ads", "Twitter ads"],
      reach: "300M+ users"
    },
    {
      name: "Search Ads",
      icon: "🔍",
      description: "Keyword-based advertising",
      features: ["Google ads", "Bing ads", "Local search"],
      reach: "100M+ searches"
    },
    {
      name: "Native Ads",
      icon: "📄",
      description: "Seamless content integration",
      features: ["Sponsored content", "In-feed ads", "Recommendation widgets"],
      reach: "150M+ readers"
    },
    {
      name: "Retargeting Ads",
      icon: "🔄",
      description: "Re-engage your audience",
      features: ["Pixel tracking", "Dynamic ads", "Cross-device targeting"],
      reach: "250M+ users"
    }
  ]

  const platformStats = [
    {
      title: "Active Advertisers",
      value: "25K+",
      change: "+30%",
      icon: "👥",
      color: "blue"
    },
    {
      title: "Monthly Impressions",
      value: "2B+",
      change: "+45%",
      icon: "👁️",
      color: "green"
    },
    {
      title: "Click-Through Rate",
      value: "3.2%",
      change: "+15%",
      icon: "🖱️",
      color: "orange"
    },
    {
      title: "Conversion Rate",
      value: "8.5%",
      change: "+20%",
      icon: "💰",
      color: "purple"
    }
  ]

  const benefits = [
    "Reach 500M+ potential customers across Africa",
    "Advanced targeting based on demographics, interests, and behavior",
    "Real-time campaign optimization and performance tracking",
    "Cost-effective advertising with flexible budget options",
    "Multi-platform reach including mobile, web, and social media",
    "24/7 campaign monitoring and support"
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Annita Ads - Advertising Platform",
    "description": "Comprehensive advertising platform with precise targeting, multi-platform reach, and AI-powered optimization. Reach millions of customers across Africa.",
    "url": "https://annita.com/services/ads",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://annita.com/services/ads/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <SEOHead
        title="Annita Ads - Advertising Platform | Annita LLC"
        description="Comprehensive advertising platform with precise targeting, multi-platform reach, and AI-powered optimization. Reach millions of customers across Africa."
        keywords={[
          'Annita Ads',
          'advertising platform',
          'digital advertising',
          'targeted ads',
          'display advertising',
          'video ads',
          'social media advertising',
          'search ads',
          'native advertising',
          'retargeting ads',
          'ad campaign management',
          'ad analytics',
          'performance marketing',
          'online advertising',
          'ad optimization'
        ]}
        canonical="/services/ads"
        ogImage="/ads-og-image.jpg"
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
                  <Target className="w-4 h-4 mr-2" />
                  Advertising Platform
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6">
                  Reach <span className="text-purple-600">Millions</span> of Customers
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                  Powerful advertising platform with precise targeting, multi-platform reach, 
                  and AI-powered optimization to grow your business across Africa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center">
                    <Download className="w-5 h-5 mr-2" />
                    Start Advertising
                  </button>
                  <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200 flex items-center justify-center">
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
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Campaign Dashboard</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">👁️</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Impressions</h4>
                          <p className="text-sm text-gray-600">Today's reach</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-purple-600">2.5M</div>
                        <div className="text-sm text-gray-600">+12% vs yesterday</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">🖱️</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Click Rate</h4>
                          <p className="text-sm text-gray-600">Performance</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-green-600">3.2%</div>
                        <div className="text-sm text-gray-600">Industry avg: 2.1%</div>
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
                Advanced <span className="text-purple-600">Advertising</span> Features
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to create, manage, and optimize successful advertising 
                campaigns with precision targeting and real-time analytics.
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

        {/* Ad Types Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-purple-50 to-purple-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Ad <span className="text-purple-600">Types</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from multiple ad formats to reach your audience effectively across all platforms.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {adTypes.map((adType, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {adType.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{adType.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{adType.description}</p>
                  <ul className="space-y-2 mb-4">
                    {adType.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-purple-600 font-semibold text-sm">{adType.reach}</div>
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
                Platform <span className="text-purple-600">Performance</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Real-time data showing the reach and effectiveness of our advertising platform.
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
                  Why Choose <span className="text-purple-600">Annita Ads</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Annita Ads is designed to help businesses reach their target audience 
                  effectively with advanced targeting and optimization tools.
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Campaign Performance</h3>
                    <p className="text-gray-600">Average results</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">ROAS (Return on Ad Spend)</span>
                      <span className="font-semibold text-purple-600">4.2x</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Cost per Click</span>
                      <span className="font-semibold text-green-600">$0.45</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Conversion Rate</span>
                      <span className="font-semibold text-orange-600">8.5%</span>
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
                Ready to Reach Millions?
              </h2>
              <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using Annita Ads to reach their target 
                audience and grow their customer base.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200 flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Start Advertising
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200 flex items-center justify-center">
                  Get Free Consultation
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

export default AdsPage
