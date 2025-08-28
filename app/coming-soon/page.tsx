"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import CTASection from '@/components/sections/CTASection'
import {
  Calendar,
  Clock,
  Zap,
  Star,
  TrendingUp,
  Users,
  Globe,
  Shield,
  Smartphone,
  Monitor,
  Palette,
  Settings,
  CheckCircle,
  ArrowRight,
  Download,
  Play,
  Heart,
  Target,
  BarChart3,
  Database,
  Building,
  Truck,
  CreditCard,
  MessageSquare,
  Brain,
  Megaphone,
  Package,
  Wifi,
  Lock,
  Award,
  Rocket
} from 'lucide-react'

const ComingSoonPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Updates', icon: Rocket },
    { id: 'platform', name: 'Platform', icon: Monitor },
    { id: 'mobile', name: 'Mobile App', icon: Smartphone },
    { id: 'ai', name: 'AI Features', icon: Brain },
    { id: 'payments', name: 'Payments', icon: CreditCard },
    { id: 'logistics', name: 'Logistics', icon: Truck },
    { id: 'communication', name: 'Communication', icon: MessageSquare },
    { id: 'enterprise', name: 'Enterprise', icon: Building }
  ]

  const upcomingFeatures = [
    {
      id: 'mobile-app',
      title: "Annita Mobile App",
      description: "Native mobile applications for iOS and Android with offline capabilities and push notifications",
      category: 'mobile',
      status: 'in-development',
      progress: 85,
      estimatedRelease: 'Q1 2024',
      features: [
        "Offline mode for core functions",
        "Push notifications for orders and payments",
        "Biometric authentication",
        "Dark mode support",
        "Multi-language interface"
      ],
      icon: Smartphone,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'ai-assistant',
      title: "AI Business Assistant",
      description: "Intelligent virtual assistant for business operations, customer service, and decision support",
      category: 'ai',
      status: 'beta-testing',
      progress: 70,
      estimatedRelease: 'Q2 2024',
      features: [
        "Natural language processing",
        "Predictive analytics",
        "Automated customer support",
        "Business insights and recommendations",
        "Voice command integration"
      ],
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'advanced-analytics',
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive business intelligence with real-time reporting and predictive insights",
      category: 'platform',
      status: 'in-development',
      progress: 60,
      estimatedRelease: 'Q2 2024',
      features: [
        "Real-time performance metrics",
        "Custom report builder",
        "Predictive trend analysis",
        "Interactive data visualizations",
        "Export and sharing capabilities"
      ],
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'crypto-payments',
      title: "Cryptocurrency Payments",
      description: "Support for major cryptocurrencies with instant settlement and low transaction fees",
      category: 'payments',
      status: 'planning',
      progress: 30,
      estimatedRelease: 'Q3 2024',
      features: [
        "Bitcoin and Ethereum support",
        "Instant settlement",
        "Low transaction fees",
        "Multi-wallet integration",
        "Regulatory compliance"
      ],
      icon: CreditCard,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'drone-delivery',
      title: "Drone Delivery Network",
      description: "Innovative drone delivery service for fast and efficient package delivery in urban areas",
      category: 'logistics',
      status: 'research',
      progress: 20,
      estimatedRelease: 'Q4 2024',
      features: [
        "Autonomous drone navigation",
        "Real-time tracking",
        "Weather-resistant operations",
        "Safe landing zones",
        "Regulatory compliance"
      ],
      icon: Truck,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'video-calling',
      title: "Video Calling & Conferencing",
      description: "High-quality video calling with screen sharing, recording, and virtual backgrounds",
      category: 'communication',
      status: 'in-development',
      progress: 75,
      estimatedRelease: 'Q1 2024',
      features: [
        "HD video quality",
        "Screen sharing",
        "Meeting recording",
        "Virtual backgrounds",
        "Group video calls"
      ],
      icon: MessageSquare,
      color: 'from-teal-500 to-cyan-500'
    },
    {
      id: 'enterprise-suite',
      title: "Enterprise Suite",
      description: "Comprehensive enterprise solutions with advanced security, compliance, and customization",
      category: 'enterprise',
      status: 'planning',
      progress: 40,
      estimatedRelease: 'Q3 2024',
      features: [
        "Advanced security protocols",
        "Custom integrations",
        "White-label solutions",
        "Dedicated support",
        "Compliance certifications"
      ],
      icon: Building,
      color: 'from-gray-600 to-gray-800'
    },
    {
      id: 'marketplace-expansion',
      title: "Global Marketplace Expansion",
      description: "Expansion to new markets with localized features and multi-currency support",
      category: 'platform',
      status: 'in-development',
      progress: 65,
      estimatedRelease: 'Q2 2024',
      features: [
        "Multi-currency support",
        "Localized interfaces",
        "Regional payment methods",
        "Cross-border shipping",
        "Local compliance"
      ],
      icon: Globe,
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100'
      case 'in-development': return 'text-blue-600 bg-blue-100'
      case 'beta-testing': return 'text-purple-600 bg-purple-100'
      case 'planning': return 'text-orange-600 bg-orange-100'
      case 'research': return 'text-gray-600 bg-gray-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed'
      case 'in-development': return 'In Development'
      case 'beta-testing': return 'Beta Testing'
      case 'planning': return 'Planning'
      case 'research': return 'Research'
      default: return 'Unknown'
    }
  }

  const filteredFeatures = activeCategory === 'all' 
    ? upcomingFeatures 
    : upcomingFeatures.filter(feature => feature.category === activeCategory)

  return (
    <>
      <SEOHead
        title="Coming Soon - Annita Platform Updates & New Features"
        description="Discover upcoming features and updates for the Annita platform. Stay informed about new mobile apps, AI features, payment solutions, logistics innovations, and enterprise tools."
        keywords={[
          'coming soon',
          'upcoming features',
          'platform updates',
          'mobile app',
          'AI features',
          'annita updates',
          'new features',
          'platform roadmap'
        ]}
        canonical="/coming-soon"
        ogImage="/coming-soon-og-image.jpg"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
                  <Rocket className="w-4 h-4 mr-2" />
                  What's Coming Next
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6">
                  The Future of <span className="text-purple-600">Annita</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                  Discover the exciting new features and updates we're working on to make Annita 
                  even more powerful and user-friendly. Stay ahead of the curve with our roadmap.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center">
                    <Download className="w-5 h-5 mr-2" />
                    Get Early Access
                  </button>
                  <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Annita 3.0 Announcement */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-red-50 to-orange-50 border-b border-orange-200">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-red-100 text-red-700 text-lg font-bold mb-6">
                  🚨 Something BIG is coming to Africa — and it's built for everyone.
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                  Annita 3.0 isn't just another upgrade.
                  <br />
                  <span className="text-red-600">It's the future of doing business, communicating, and thriving in Africa</span>
                  <br />
                  <span className="text-lg sm:text-xl text-gray-600 font-normal">
                    — whether you're in the heart of a city or a small rural town with little to no internet.
                  </span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-orange-200 mb-12"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Imagine this…</h3>
                  <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                    You're in a village with unstable connectivity — and you can still sell your products, receive payments, 
                    talk to customers, manage your business, and even grow your savings... all from one single platform.
                  </p>
                  <div className="mt-6">
                    <p className="text-lg font-semibold text-gray-800">No tech degree. No fancy setup. Just one app — online or offline.</p>
                    <p className="text-2xl sm:text-3xl font-bold text-red-600 mt-2">That's Annita 3.0.</p>
                  </div>
                  <div className="mt-6 flex flex-wrap justify-center gap-4 text-lg font-semibold text-gray-700">
                    <span>Smarter.</span>
                    <span>Faster.</span>
                    <span>Offline-ready.</span>
                    <span>Inclusive.</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
              >
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-orange-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    🌍 Here's what's coming:
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="text-green-600 text-xl">✅</span>
                      <div>
                        <span className="font-semibold text-gray-900">Offline Functionality</span>
                        <p className="text-gray-600 text-sm">— yes, you can access key features without internet.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-green-600 text-xl">🔐</span>
                      <div>
                        <span className="font-semibold text-gray-900">Escrow Settlements</span>
                        <p className="text-gray-600 text-sm">— making trade safer and more trusted for buyers & sellers.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-green-600 text-xl">💸</span>
                      <div>
                        <span className="font-semibold text-gray-900">Fintech for all</span>
                        <p className="text-gray-600 text-sm">— send, receive, save, and grow money with our smart digital wallet.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-green-600 text-xl">🤖</span>
                      <div>
                        <span className="font-semibold text-gray-900">AI Business Assistant</span>
                        <p className="text-gray-600 text-sm">— get automated help, insights, and guidance to run your hustle.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-green-600 text-xl">📦</span>
                      <div>
                        <span className="font-semibold text-gray-900">Built-in logistics & marketing tools</span>
                        <p className="text-gray-600 text-sm">— deliver faster and reach more customers.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-green-600 text-xl">🧾</span>
                      <div>
                        <span className="font-semibold text-gray-900">Markup-based model (5–15%)</span>
                        <p className="text-gray-600 text-sm">— no upfront costs, just sell and earn.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-green-600 text-xl">🎯</span>
                      <div>
                        <span className="font-semibold text-gray-900">Flexible subscriptions</span>
                        <p className="text-gray-600 text-sm">— Free, Growth, Pro, Premium — pick what suits you.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-green-600 text-xl">👥</span>
                      <div>
                        <span className="font-semibold text-gray-900">For everyone</span>
                        <p className="text-gray-600 text-sm">— MSMEs, vendors, freelancers, market women, students, and individuals.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-600 to-orange-600 p-8 rounded-3xl shadow-lg text-white">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-6">📣 This is Africa's all-in-one digital home.</h3>
                    <p className="text-lg mb-6">Built in Liberia. Rising with the continent.</p>
                    
                    <div className="space-y-4 text-center">
                      <p className="text-xl font-semibold">It's time for true digital freedom — without limits, without barriers.</p>
                      <p className="text-lg">One platform. All your business needs — online or offline.</p>
                    </div>

                    <div className="mt-8 space-y-2 text-center">
                      <p className="text-2xl font-bold">Simplify. Scale. Succeed.</p>
                    </div>

                    <button className="mt-8 bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-200">
                      Get Ready for Annita 3.0
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Features */}
        <section className="py-16 sm:py-20" ref={ref}>
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Upcoming <span className="text-purple-600">Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Explore the innovative features we're developing to enhance your Annita experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredFeatures.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(feature.status)}`}>
                        {getStatusText(feature.status)}
                      </span>
                      <div className="text-sm text-gray-500 mt-1">{feature.estimatedRelease}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Progress</span>
                      <span>{feature.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${feature.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2">
                    {feature.features.map((item, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <button className="mt-6 w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Updates */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-gray-50 to-white">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Recent <span className="text-purple-600">Updates</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                See what we've recently launched to improve your Annita experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="text-sm text-gray-500">December 2023</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Enhanced Security Features</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Implemented advanced security protocols and two-factor authentication</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="text-sm text-gray-500">November 2023</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Optimization</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Improved platform speed and reduced loading times by 40%</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="text-sm text-gray-500">October 2023</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile Responsive Design</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Enhanced mobile experience with improved navigation and touch interactions</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="text-sm text-gray-500">September 2023</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Payment Gateway Integration</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Added support for multiple payment methods and digital wallets</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Stay <span className="text-yellow-300">Updated</span>
                </h2>
                <p className="text-lg sm:text-xl text-purple-100 mb-8 leading-relaxed">
                  Be the first to know when new features launch. Get early access and exclusive updates.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
                  />
                  <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200">
                    Subscribe
                  </button>
                </div>
                <p className="text-purple-200 text-sm mt-4">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </div>
    </>
  )
}

export default ComingSoonPage
