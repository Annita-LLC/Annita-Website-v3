'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Zap,
  Wifi,
  WifiOff,
  Shield,
  CreditCard,
  Brain,
  Truck,
  Megaphone,
  DollarSign,
  Users,
  Globe,
  ArrowRight,
  ExternalLink,
  CheckCircle,
  Star,
  TrendingUp,
  Smartphone,
  Laptop,
  FileText,
  Store,
  Link,
  Send,
  Calendar,
  Palette,
  GraduationCap,
  Mail,
  Sparkles
} from 'lucide-react'
import Button from '@/components/ui/Button'

const V3AnnouncementSection = () => {
  const [activeTab, setActiveTab] = useState('coming')

  const v3Features = [
    {
      id: 'offline-functionality',
      icon: WifiOff,
      title: "Offline Functionality",
      description: "Access key features without internet - perfect for rural areas.",
      color: "from-blue-500 to-cyan-500",
      status: "Coming in V3.0",
      details: [
        "Work offline in low-connectivity areas",
        "Automatic data sync when online",
        "Reduced dependency on internet",
        "Perfect for rural entrepreneurs"
      ]
    },
    {
      id: 'escrow-settlements',
      icon: Shield,
      title: "Escrow Settlements",
      description: "Making trade safer and more trusted for buyers & sellers.",
      color: "from-green-500 to-emerald-500",
      status: "Coming in V3.0",
      details: [
        "Funds held securely until delivery",
        "Automated dispute resolution",
        "Building trust in African trade",
        "Protected transactions"
      ]
    },
    {
      id: 'fintech-wallet',
      icon: CreditCard,
      title: "Fintech for All",
      description: "Send, receive, save, and grow money with our smart digital wallet.",
      color: "from-purple-500 to-pink-500",
      status: "Coming in V3.0",
      details: [
        "Comprehensive digital wallet",
        "Money transfer capabilities",
        "Savings and investment tools",
        "Financial management insights"
      ]
    },
    {
      id: 'ai-assistant',
      icon: Brain,
      title: "AI Business Assistant",
      description: "Get automated help, insights, and guidance to run your hustle.",
      color: "from-orange-500 to-red-500",
      status: "Coming in V3.0",
      details: [
        "24/7 AI-powered support",
        "Business insights and analytics",
        "Automated customer responses",
        "Smart decision recommendations"
      ]
    },
    {
      id: 'logistics-tools',
      icon: Truck,
      title: "Built-in Logistics",
      description: "Deliver faster and reach more customers with integrated tools.",
      color: "from-indigo-500 to-purple-500",
      status: "Coming in V3.0",
      details: [
        "Integrated delivery tracking",
        "Route optimization",
        "Real-time shipment updates",
        "Expanded customer reach"
      ]
    },
    {
      id: 'marketing-tools',
      icon: Megaphone,
      title: "Marketing Tools",
      description: "Reach more customers with built-in marketing and promotion tools.",
      color: "from-teal-500 to-cyan-500",
      status: "Coming in V3.0",
      details: [
        "Targeted marketing campaigns",
        "Customer engagement tools",
        "Promotional content creation",
        "Analytics and performance tracking"
      ]
    },
    {
      id: 'advanced-payments',
      icon: Smartphone,
      title: "Advanced Payment Methods",
      description: "15+ payment options including M-Pesa, USSD, VISA QR for higher conversion rates.",
      color: "from-rose-500 to-pink-500",
      status: "Coming in V3.0",
      details: [
        "M-Pesa, Airtel Money, MTN integration",
        "USSD payment support",
        "VISA QR codes",
        "Local payment preferences"
      ]
    },
    {
      id: 'invoice-generation',
      icon: FileText,
      title: "Invoice Generation",
      description: "Create and issue professional invoices for global payments with payment tracking.",
      color: "from-violet-500 to-purple-500",
      status: "Coming in V3.0",
      details: [
        "Professional invoice templates",
        "Automated payment tracking",
        "Customizable branding",
        "Tax compliance features"
      ]
    },
    {
      id: 'online-store',
      icon: Store,
      title: "One-Click Online Store Creation",
      description: "Create a free online store that helps you find customers and accept payments globally.",
      color: "from-emerald-500 to-teal-500",
      status: "Coming in V3.0",
      details: [
        "Drag-and-drop store builder",
        "AI-powered product recommendations",
        "Mobile-responsive templates",
        "Global payment integration"
      ]
    },
    {
      id: 'payment-links',
      icon: Link,
      title: "Enhanced Payment Links",
      description: "Accept payments without writing code - advanced links with QR codes, expiration, and analytics.",
      color: "from-cyan-500 to-blue-500",
      status: "Coming in V3.0",
      details: [
        "Customizable payment links",
        "QR code generation",
        "Expiration date control",
        "Detailed analytics dashboard"
      ]
    },
    {
      id: 'money-transfer',
      icon: Send,
      title: "Personal Money Transfer App",
      description: "P2P money transfers, bill payments, airtime top-ups - expand beyond business users.",
      color: "from-amber-500 to-orange-500",
      status: "Coming in V3.0",
      details: [
        "P2P money transfers",
        "Bill payment integration",
        "Airtime top-up services",
        "Seamless ecosystem transactions"
      ]
    },
    {
      id: 'event-services',
      icon: Calendar,
      title: "Event & Lifestyle Services",
      description: "Event ticketing, travel bookings, lifestyle management - comprehensive digital lifestyle platform.",
      color: "from-lime-500 to-green-500",
      status: "Coming in V3.0",
      details: [
        "Event ticketing system",
        "Travel booking integration",
        "Lifestyle service management",
        "Comprehensive digital lifestyle platform"
      ]
    },
    {
      id: 'creator-tools',
      icon: Palette,
      title: "Creator Tools",
      description: "Single-page websites, subscription tools, creator analytics - support digital content economy.",
      color: "from-fuchsia-500 to-pink-500",
      status: "Coming in V3.0",
      details: [
        "Single-page website builder",
        "Subscription management tools",
        "Creator analytics dashboard",
        "Content monetization features"
      ]
    },
    {
      id: 'tuition-payments',
      icon: GraduationCap,
      title: "Tuition Payment System",
      description: "School fee payments, scholarship management, education marketplace - tap into high-volume education sector.",
      color: "from-indigo-500 to-blue-500",
      status: "Coming in V3.0",
      details: [
        "School fee payment integration",
        "African and international schools",
        "Scholarship management",
        "Education marketplace"
      ]
    }
  ]

  const currentFeatures = [
    {
      id: 'live-marketplace',
      icon: Globe,
      title: "Live Marketplace",
      description: "Real vendors selling, real customers buying - right now.",
      status: "Live",
      link: "/maintenance",
      details: [
        "Active marketplace with real transactions",
        "Verified vendors and customers",
        "Secure payment processing",
        "Live support and assistance"
      ]
    },
    {
      id: 'active-community',
      icon: Users,
      title: "Active Community",
      description: "3,000+ vendors already using our platform.",
      status: "Active",
      link: "/maintenance",
      details: [
        "Growing vendor community",
        "Active user engagement",
        "Community-driven features",
        "Regular platform updates"
      ]
    },
    {
      id: 'revenue-generation',
      icon: DollarSign,
      title: "Revenue Generation",
      description: "Proven business model with real transactions.",
      status: "Proven",
      link: "/maintenance",
      details: [
        "Successful revenue model",
        "Real transaction processing",
        "Sustainable business growth",
        "Measurable financial results"
      ]
    },
    {
      id: 'market-validation',
      icon: CheckCircle,
      title: "Market Validation",
      description: "Real users, real feedback, real growth.",
      status: "Validated",
      link: "/maintenance",
      details: [
        "User feedback integration",
        "Market demand validation",
        "Continuous improvement",
        "Data-driven development"
      ]
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className={`relative py-16 sm:py-20 lg:py-24 text-white overflow-hidden ${
        activeTab === 'coming'
          ? 'bg-gradient-to-br from-orange-600 via-orange-700 to-red-600'
          : 'bg-gradient-to-br from-green-600 via-green-700 to-emerald-600'
      }`}>
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatePresence mode="wait">
              {activeTab === 'coming' ? (
                <motion.div
                  key="v3-hero"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Coming Soon
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                    Annita <span className="text-orange-200">3.0</span>
                  </h1>

                  <h2 className="text-xl sm:text-2xl lg:text-3xl text-orange-100 mb-6">
                    The Future of Business in Africa
                  </h2>

                  <p className="text-lg sm:text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed mb-8">
                    Smarter. Faster. Offline-ready. Inclusive.
                    <br />
                    <span className="font-semibold">Built for everyone, everywhere.</span>
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-2xl sm:text-3xl font-bold">14+</div>
                      <div className="text-xs sm:text-sm text-orange-200">New Features</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-2xl sm:text-3xl font-bold">2025</div>
                      <div className="text-xs sm:text-sm text-orange-200">Launch Year</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-2xl sm:text-3xl font-bold">54</div>
                      <div className="text-xs sm:text-sm text-orange-200">Countries</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-2xl sm:text-3xl font-bold">100%</div>
                      <div className="text-xs sm:text-sm text-orange-200">Inclusive</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => setActiveTab('coming')}
                      className="px-8 py-4 rounded-lg font-semibold transition-all duration-200 bg-white text-orange-600 shadow-lg"
                    >
                      Explore V3.0 Features
                    </button>
                    <button
                      onClick={() => setActiveTab('current')}
                      className="px-8 py-4 rounded-lg font-semibold transition-all duration-200 border-2 border-white text-white hover:bg-white hover:text-green-600"
                    >
                      See V1.0 Now
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="v1-hero"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Live & Active
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                    Annita <span className="text-green-200">V1.0</span>
                  </h1>

                  <h2 className="text-xl sm:text-2xl lg:text-3xl text-green-100 mb-6">
                    Live Marketplace Powering African Business
                  </h2>

                  <p className="text-lg sm:text-xl text-green-100 max-w-3xl mx-auto leading-relaxed mb-8">
                    Real vendors selling, real customers buying.
                    <br />
                    <span className="font-semibold">Join the active community today.</span>
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-2xl sm:text-3xl font-bold">3,000+</div>
                      <div className="text-xs sm:text-sm text-green-200">Active Vendors</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-2xl sm:text-3xl font-bold">Live</div>
                      <div className="text-xs sm:text-sm text-green-200">Marketplace</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-2xl sm:text-3xl font-bold">Proven</div>
                      <div className="text-xs sm:text-sm text-green-200">Business Model</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-2xl sm:text-3xl font-bold">54</div>
                      <div className="text-xs sm:text-sm text-green-200">Countries</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => setActiveTab('coming')}
                      className="px-8 py-4 rounded-lg font-semibold transition-all duration-200 border-2 border-white text-white hover:bg-white hover:text-orange-600"
                    >
                      Explore V3.0 Features
                    </button>
                    <button
                      onClick={() => setActiveTab('current')}
                      className="px-8 py-4 rounded-lg font-semibold transition-all duration-200 bg-white text-green-600 shadow-lg"
                    >
                      See V1.0 Now
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-gray-200/50 overflow-hidden">
              <div className="relative flex">
                <button
                  onClick={() => setActiveTab('coming')}
                  className={`relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 overflow-hidden ${
                    activeTab === 'coming'
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50/50'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    <span className="hidden sm:inline">Annita 3.0</span>
                    <span className="sm:hidden">V3.0</span>
                  </span>
                  {activeTab === 'coming' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-20 animate-pulse" />
                  )}
                </button>

                <button
                  onClick={() => setActiveTab('current')}
                  className={`relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 overflow-hidden ${
                    activeTab === 'current'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:text-green-600 hover:bg-green-50/50'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span className="hidden sm:inline">Annita V1.0</span>
                    <span className="sm:hidden">V1.0</span>
                  </span>
                  {activeTab === 'current' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-20 animate-pulse" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                {activeTab === 'coming' ? (
                  <>Revolutionary <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Features</span></>
                ) : (
                  <>Current <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Capabilities</span></>
                )}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {activeTab === 'coming'
                  ? "Discover the cutting-edge features that will transform how businesses operate across Africa."
                  : "Explore our current live features that are already empowering thousands of businesses."
                }
              </p>
            </motion.div>

            <AnimatePresence mode="wait">
              {activeTab === 'coming' ? (
                <motion.div
                  key="coming"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
                >
                  {v3Features.map((feature, index) => (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          feature.status === 'Live'
                            ? 'bg-green-100 text-green-700 border border-green-200'
                            : 'bg-orange-100 text-orange-700 border border-orange-200'
                        }`}>
                          {feature.status}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>

                      <ul className="space-y-2">
                        {feature.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="current"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
                >
                  {currentFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                      onClick={() => window.open(feature.link, '_blank')}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${feature.status === 'Live' ? 'from-green-500 to-emerald-500' : 'from-blue-500 to-cyan-500'} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          feature.status === 'Live'
                            ? 'bg-green-100 text-green-700 border border-green-200'
                            : 'bg-blue-100 text-blue-700 border border-blue-200'
                        }`}>
                          {feature.status}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>

                      <ul className="space-y-2 mb-4">
                        {feature.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center text-green-600 text-sm font-medium group-hover:text-green-700">
                        <span>Try it now</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center p-6 sm:p-8 lg:p-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl text-white shadow-2xl"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                🚨 Ready for the Future?
              </h3>
              <p className="text-orange-100 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
                Join our waitlist for Annita 3.0 and be among the first to experience the future of business in Africa.
                {activeTab === 'current' && " Or start with our current powerful V1.0 platform today!"}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                {activeTab === 'coming' ? (
                  <button className="inline-flex items-center justify-center bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 shadow-lg text-sm sm:text-base">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Join V3.0 Waitlist
                  </button>
                ) : (
                  <a
                    href="/maintenance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 shadow-lg text-sm sm:text-base"
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Try V1.0 Now
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default V3AnnouncementSection
