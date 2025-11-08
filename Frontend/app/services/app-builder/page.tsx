'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SEOHead from '@/components/seo/SEOHead'
import { 
  Smartphone, 
  Palette, 
  Zap, 
  Globe, 
  Monitor, 
  Code,
  Clock,
  CheckCircle,
  Star,
  ExternalLink,
  Download,
  Building,
  Users,
  Lock,
  Activity,
  BarChart3,
  Settings,
  Terminal,
  Key,
  Server,
  Layout,
  Image,
  Type,
  MousePointer,
  Play,
  Database,
  Shield
} from 'lucide-react'
import Link from 'next/link'
import WaitlistForm from '@/components/ui/WaitlistForm'

const AppBuilderPage = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  const features = [
    {
      icon: MousePointer,
      title: "No-Code Builder",
      description: "Create mobile apps without any coding knowledge",
      features: ["Visual editor", "Drag & drop", "Pre-built components", "Real-time preview"]
    },
    {
      icon: Smartphone,
      title: "Cross-Platform",
      description: "Build once, deploy to iOS and Android simultaneously",
      features: ["iOS apps", "Android apps", "Web apps", "PWA support"]
    },
    {
      icon: Zap,
      title: "AI-Powered Features",
      description: "Smart app generation and optimization with AI assistance",
      features: ["AI suggestions", "Auto-optimization", "Smart layouts", "Content generation"]
    },
    {
      icon: Database,
      title: "Backend Integration",
      description: "Built-in backend services and database management",
      features: ["User management", "Data storage", "API integration", "Cloud sync"]
    }
  ]

  const appTypes = [
    {
      category: "Business Apps",
      count: "30+",
      description: "Professional business applications",
      features: ["CRM systems", "Inventory management", "Employee portals", "Customer apps"]
    },
    {
      category: "E-commerce Apps",
      count: "25+",
      description: "Mobile store applications",
      features: ["Product catalogs", "Shopping cart", "Payment processing", "Order tracking"]
    },
    {
      category: "Social Apps",
      count: "20+",
      description: "Social networking applications",
      features: ["User profiles", "Messaging", "Content sharing", "Community features"]
    }
  ]

  const stats = [
    { label: "App Templates", value: "75+", icon: Layout },
    { label: "Build Time", value: "2 hours", icon: Clock },
    { label: "Platforms", value: "iOS + Android", icon: Smartphone },
    { label: "Success Rate", value: "98%", icon: BarChart3 }
  ]

  return (
    <>
      <SEOHead
        title="Annita App Builder - No-Code Mobile App Creation"
        description="Create mobile apps without coding. Cross-platform iOS and Android apps with AI-powered features, backend integration, and professional templates."
        keywords={[
          'app builder',
          'no-code app',
          'mobile app builder',
          'iOS app builder',
          'Android app builder',
          'cross-platform apps'
        ]}
        canonical="/services/app-builder"
      />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-white/5 rounded-full animate-bounce delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Main Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Mobile App Creation
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                  Annita <span className="text-orange-200">App Builder</span>
                </h1>
                <p className="text-lg sm:text-xl text-orange-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
                  Create mobile apps without coding. Cross-platform iOS and Android apps 
                  with AI-powered features, backend integration, and professional templates.
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold">75+</div>
                    <div className="text-xs sm:text-sm text-orange-200">Templates</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold">2 hrs</div>
                    <div className="text-xs sm:text-sm text-orange-200">Build Time</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold">iOS + Android</div>
                    <div className="text-xs sm:text-sm text-orange-200">Platforms</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold">98%</div>
                    <div className="text-xs sm:text-sm text-orange-200">Success Rate</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <button 
                    onClick={() => setIsWaitlistOpen(true)}
                    className="bg-white text-orange-600 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-200 flex items-center justify-center shadow-lg text-sm sm:text-base"
                  >
                    <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Start Building
                  </button>
                  <Link
                    href="/contact"
                    className="border-2 border-white text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200 flex items-center justify-center text-sm sm:text-base"
                  >
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Right Column - Interactive Elements */}
              <div className="relative">
                {/* App Builder Excellence Visualization */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center">App Builder Excellence</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">75+ Templates</span>
                      <span className="font-semibold text-white">Professional</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">No-Code Builder</span>
                      <span className="font-semibold text-white">Easy</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">Cross-Platform</span>
                      <span className="font-semibold text-white">iOS + Android</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">Success Rate</span>
                      <span className="font-semibold text-white">98%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Advanced App Builder Features
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Everything you need to create professional mobile apps without coding.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {feature.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {feature.features.map((item, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                App Templates
              </h2>
              <p className="text-lg text-gray-600">
                Choose from 75+ professionally designed app templates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {appTypes.map((appType, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <Layout className="w-5 h-5 mr-2 text-orange-600" />
                    {appType.category}
                  </h3>
                  <div className="text-2xl font-bold text-orange-600 mb-2">{appType.count}</div>
                  <p className="text-gray-600 mb-4">{appType.description}</p>
                  <ul className="space-y-2">
                    {appType.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                App Builder Performance
              </h2>
              <p className="text-lg text-gray-600">
                Fast, reliable, and professional mobile app creation.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6 text-center shadow-lg"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Build Your App?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Create professional mobile apps in hours with our no-code builder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsWaitlistOpen(true)}
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-200 flex items-center justify-center shadow-lg"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Start Building
              </button>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200 flex items-center justify-center"
              >
                <Users className="w-5 h-5 mr-2" />
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Modal */}
      <WaitlistForm
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </>
  )
}

export default AppBuilderPage
