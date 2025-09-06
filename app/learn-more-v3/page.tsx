'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import CTASection from '@/components/sections/CTASection'
import {
  Rocket,
  Monitor,
  Smartphone,
  Brain,
  CreditCard,
  Truck,
  MessageSquare,
  Building,
  Globe,
  CheckCircle,
  Star,
  ExternalLink,
  BookOpen,
  Eye,
  Mic,
  Video,
  Package,
  MapPin,
  Plane,
  Coins,
  Cloud,
  Layers,
  Palette
} from 'lucide-react'
import Button from '@/components/ui/Button'
import WaitlistForm from '@/components/ui/WaitlistForm'
import DownloadChoiceModal from '@/components/ui/DownloadChoiceModal'

const LearnMoreV3Page = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState('all')
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)

  const categories = [
    { id: 'all', name: 'All Features', icon: Rocket, color: 'from-orange-500 to-red-500' },
    { id: 'platform', name: 'Platform', icon: Monitor, color: 'from-blue-500 to-blue-600' },
    { id: 'mobile', name: 'Mobile App', icon: Smartphone, color: 'from-purple-500 to-purple-600' },
    { id: 'ai', name: 'AI Features', icon: Brain, color: 'from-teal-500 to-teal-600' },
    { id: 'payments', name: 'Payments', icon: CreditCard, color: 'from-green-500 to-green-600' },
    { id: 'logistics', name: 'Logistics', icon: Truck, color: 'from-yellow-500 to-orange-500' },
    { id: 'communication', name: 'Communication', icon: MessageSquare, color: 'from-pink-500 to-pink-600' },
    { id: 'enterprise', name: 'Enterprise', icon: Building, color: 'from-gray-500 to-gray-600' }
  ]

  const features = [
    // Platform Features
    {
      id: 'annita-3-0',
      title: "Annita 3.0 Platform",
      description: "Revolutionary all-in-one platform for Africa with offline functionality and comprehensive business tools",
      category: 'platform',
      status: 'in-development',
      progress: 75,
      estimatedRelease: 'Q2 2025',
      features: [
        "Offline functionality for all core features",
        "Escrow settlements for secure trading",
        "Comprehensive fintech solutions",
        "AI business assistant integration",
        "Built-in logistics and marketing tools"
      ],
      icon: Rocket,
      color: 'from-red-500 to-orange-500',
      detailedDescription: "Annita 3.0 is our flagship platform that revolutionizes how businesses operate in Africa. Built with offline-first architecture, it ensures continuous operation even in areas with poor internet connectivity. The platform integrates e-commerce, fintech, logistics, and AI-powered business tools into a single, seamless experience.",
      benefits: [
        "Works without internet connection",
        "Secure escrow system for all transactions",
        "Integrated payment processing",
        "AI-powered business insights",
        "Complete logistics management"
      ]
    },
    {
      id: 'cloud-services',
      title: "Cloud Services",
      description: "Secure data storage, backup, and cloud computing solutions for businesses of all sizes",
      category: 'platform',
      status: 'in-development',
      progress: 60,
      estimatedRelease: 'Q2 2030',
      features: [
        "Secure data storage and backup",
        "Cloud computing infrastructure",
        "Real-time data synchronization",
        "Multi-region data centers",
        "Enterprise-grade security"
      ],
      icon: Cloud,
      color: 'from-blue-500 to-blue-600',
      detailedDescription: "Our cloud services provide secure, scalable infrastructure for businesses of all sizes. With multi-region data centers across Africa, we ensure fast access and reliable data protection.",
      benefits: [
        "99.9% uptime guarantee",
        "Automatic data backup",
        "Real-time synchronization",
        "Enterprise-grade security",
        "Scalable infrastructure"
      ]
    },
    {
      id: 'regional-expansion',
      title: "Regional Expansion",
      description: "Expansion across West Africa with localized services, languages, and support",
      category: 'platform',
      status: 'completed',
      progress: 100,
      estimatedRelease: 'May 2023',
      features: [
        "Multi-country support",
        "Local partnerships",
        "Regional compliance",
        "Localized features"
      ],
      icon: Globe,
      color: 'from-green-500 to-green-600',
      detailedDescription: "We've successfully expanded across West Africa, providing localized services in multiple countries with local language support and regional compliance.",
      benefits: [
        "Available in 15+ countries",
        "Local language support",
        "Regional partnerships",
        "Compliance with local laws"
      ]
    },

    // Mobile Features
    {
      id: 'annita-mobile-app',
      title: "Annita Mobile App",
      description: "Native mobile applications for iOS and Android with offline capabilities and push notifications",
      category: 'mobile',
      status: 'in-development',
      progress: 45,
      estimatedRelease: 'Q2 2025',
      features: [
        "Native iOS/Android apps",
        "Offline sync",
        "Push notifications",
        "Mobile-optimized UI"
      ],
      icon: Smartphone,
      color: 'from-purple-500 to-purple-600',
      detailedDescription: "Our native mobile apps provide the full Annita experience on your smartphone. With offline capabilities, you can manage your business even without internet connection.",
      benefits: [
        "Full offline functionality",
        "Native performance",
        "Push notifications",
        "Touch-optimized interface"
      ]
    },
    {
      id: 'multi-platform-access',
      title: "Multi-Platform Access",
      description: "Universal access through web, mobile app, USSD, and offline modes for all users",
      category: 'mobile',
      status: 'in-development',
      progress: 70,
      estimatedRelease: 'Q2 2025',
      features: [
        "Web platform",
        "Mobile apps",
        "USSD access",
        "Offline mode"
      ],
      icon: Layers,
      color: 'from-indigo-500 to-indigo-600',
      detailedDescription: "Access Annita through any device or method that works for you. From smartphones to basic feature phones, we ensure everyone can participate in the digital economy.",
      benefits: [
        "Works on any device",
        "USSD for basic phones",
        "Offline mode available",
        "Consistent experience"
      ]
    },
    {
      id: 'ar-shopping',
      title: "AR Shopping Experience",
      description: "Augmented reality shopping with virtual product try-on capabilities",
      category: 'mobile',
      status: 'planned',
      progress: 20,
      estimatedRelease: 'Q4 2025',
      features: [
        "Virtual product try-on",
        "AR product visualization",
        "Interactive shopping",
        "3D product models"
      ],
      icon: Eye,
      color: 'from-pink-500 to-pink-600',
      detailedDescription: "Experience products like never before with our augmented reality shopping features. Try on clothes, visualize furniture in your space, and make informed purchasing decisions.",
      benefits: [
        "Virtual product try-on",
        "Better purchase decisions",
        "Reduced returns",
        "Enhanced shopping experience"
      ]
    },

    // AI Features
    {
      id: 'ai-business-assistant',
      title: "AI Business Assistant",
      description: "Intelligent virtual assistant for business operations, customer service, and decision support",
      category: 'ai',
      status: 'in-development',
      progress: 30,
      estimatedRelease: 'Q2 2025',
      features: [
        "Business insights",
        "Automated recommendations",
        "Predictive analytics",
        "Smart inventory management"
      ],
      icon: Brain,
      color: 'from-teal-500 to-teal-600',
      detailedDescription: "Our AI business assistant helps you make smarter decisions, automate routine tasks, and gain insights into your business performance. It learns from your data to provide personalized recommendations.",
      benefits: [
        "Automated business insights",
        "Predictive analytics",
        "Smart recommendations",
        "24/7 business support"
      ]
    },
    {
      id: 'ai-inventory-management',
      title: "AI-Powered Inventory Management",
      description: "Predictive stock management with automated reordering and demand forecasting",
      category: 'ai',
      status: 'planned',
      progress: 15,
      estimatedRelease: 'Q3 2025',
      features: [
        "Demand forecasting",
        "Automated reordering",
        "Stock optimization",
        "Predictive analytics"
      ],
      icon: Package,
      color: 'from-cyan-500 to-cyan-600',
      detailedDescription: "Never run out of stock or overstock again. Our AI analyzes sales patterns, seasonal trends, and market conditions to optimize your inventory automatically.",
      benefits: [
        "Reduced stockouts",
        "Lower inventory costs",
        "Automated reordering",
        "Better cash flow"
      ]
    },
    {
      id: 'ai-customer-support',
      title: "AI Customer Support",
      description: "24/7 automated customer support with local language capabilities",
      category: 'ai',
      status: 'planned',
      progress: 25,
      estimatedRelease: 'Q3 2025',
      features: [
        "24/7 availability",
        "Local language support",
        "Instant responses",
        "Escalation to humans"
      ],
      icon: MessageSquare,
      color: 'from-emerald-500 to-emerald-600',
      detailedDescription: "Provide instant customer support in local languages. Our AI understands context and can handle most customer inquiries, escalating complex issues to human agents when needed.",
      benefits: [
        "24/7 customer support",
        "Instant responses",
        "Local language support",
        "Reduced support costs"
      ]
    },

    // Payment Features
    {
      id: 'annitapay',
      title: "AnnitaPay & Digital Banking Services",
      description: "Full banking services with savings, loans, investment options, and financial management",
      category: 'payments',
      status: 'in-development',
      progress: 60,
      estimatedRelease: 'Q2 2025',
      features: [
        "Digital wallet",
        "Payment processing",
        "Savings accounts",
        "Cross-border payments"
      ],
      icon: CreditCard,
      color: 'from-green-500 to-green-600',
      detailedDescription: "AnnitaPay provides comprehensive financial services including digital wallets, savings accounts, loans, and investment options. All designed specifically for African businesses and individuals.",
      benefits: [
        "Secure digital wallet",
        "Instant payments",
        "Savings with interest",
        "Access to credit"
      ]
    },
    {
      id: 'cryptocurrency-payments',
      title: "Cryptocurrency Payments",
      description: "Support for major cryptocurrencies with instant settlement and low transaction fees",
      category: 'payments',
      status: 'planned',
      progress: 10,
      estimatedRelease: 'Q4 2025',
      features: [
        "Bitcoin support",
        "Ethereum support",
        "Instant settlement",
        "Low fees"
      ],
      icon: Coins,
      color: 'from-yellow-500 to-yellow-600',
      detailedDescription: "Accept and make payments using major cryptocurrencies. With instant settlement and low fees, cryptocurrency payments provide an alternative to traditional banking.",
      benefits: [
        "Global payment access",
        "Low transaction fees",
        "Instant settlement",
        "Decentralized security"
      ]
    },
    {
      id: 'cross-border-payments',
      title: "Cross-Border Payment Gateway",
      description: "International payment processing with multi-currency support",
      category: 'payments',
      status: 'planned',
      progress: 20,
      estimatedRelease: 'Q3 2025',
      features: [
        "Multi-currency support",
        "International transfers",
        "Real-time exchange rates",
        "Compliance with regulations"
      ],
      icon: Globe,
      color: 'from-blue-500 to-blue-600',
      detailedDescription: "Send and receive payments across borders with support for multiple currencies. Real-time exchange rates and compliance with international regulations ensure smooth transactions.",
      benefits: [
        "Global payment access",
        "Real-time exchange rates",
        "Regulatory compliance",
        "Fast international transfers"
      ]
    },

    // Logistics Features
    {
      id: 'pickup-centers',
      title: "Pickup Centers Network",
      description: "Nationwide network of secure pickup locations for orders and package collection",
      category: 'logistics',
      status: 'in-development',
      progress: 40,
      estimatedRelease: 'Q3 2025',
      features: [
        "Secure pickup locations",
        "Extended hours",
        "Package tracking",
        "Insurance coverage"
      ],
      icon: MapPin,
      color: 'from-orange-500 to-orange-600',
      detailedDescription: "A nationwide network of secure pickup centers where customers can collect their orders at their convenience. Open extended hours and located in convenient locations.",
      benefits: [
        "Convenient pickup locations",
        "Extended operating hours",
        "Secure package storage",
        "Insurance coverage"
      ]
    },
    {
      id: 'fulfillment-centers',
      title: "Fulfillment Centers",
      description: "Automated warehouses for fast order processing, packaging, and delivery optimization",
      category: 'logistics',
      status: 'planned',
      progress: 30,
      estimatedRelease: 'Q4 2025',
      features: [
        "Automated processing",
        "Fast packaging",
        "Delivery optimization",
        "Quality control"
      ],
      icon: Package,
      color: 'from-red-500 to-red-600',
      detailedDescription: "State-of-the-art fulfillment centers with automated systems for fast order processing, quality control, and delivery optimization. Located strategically across Africa.",
      benefits: [
        "Faster order processing",
        "Automated quality control",
        "Optimized delivery routes",
        "Reduced shipping costs"
      ]
    },
    {
      id: 'drone-delivery',
      title: "Drone Delivery Network",
      description: "Innovative drone delivery service for fast and efficient package delivery in urban areas",
      category: 'logistics',
      status: 'planned',
      progress: 5,
      estimatedRelease: 'Q4 2026',
      features: [
        "Fast urban delivery",
        "Weather-resistant drones",
        "GPS tracking",
        "Safe landing zones"
      ],
      icon: Plane,
      color: 'from-sky-500 to-sky-600',
      detailedDescription: "Cutting-edge drone delivery service for fast, efficient package delivery in urban areas. Weather-resistant drones with GPS tracking and safe landing zones.",
      benefits: [
        "Ultra-fast delivery",
        "Reduced traffic congestion",
        "Lower delivery costs",
        "Environmentally friendly"
      ]
    },

    // Communication Features
    {
      id: 'video-calling',
      title: "Video Calling & Conferencing",
      description: "High-quality video calling with screen sharing, recording, and virtual backgrounds",
      category: 'communication',
      status: 'planned',
      progress: 35,
      estimatedRelease: 'Q3 2025',
      features: [
        "HD video calling",
        "Screen sharing",
        "Call recording",
        "Virtual backgrounds"
      ],
      icon: Video,
      color: 'from-purple-500 to-purple-600',
      detailedDescription: "High-quality video calling and conferencing features for business meetings, customer consultations, and team collaboration. Works even on low-bandwidth connections.",
      benefits: [
        "HD video quality",
        "Screen sharing capability",
        "Call recording",
        "Works on low bandwidth"
      ]
    },
    {
      id: 'voice-commerce',
      title: "Voice Commerce",
      description: "Voice-activated shopping and payment system for hands-free transactions",
      category: 'communication',
      status: 'planned',
      progress: 15,
      estimatedRelease: 'Q4 2025',
      features: [
        "Voice commands",
        "Hands-free shopping",
        "Voice payments",
        "Multi-language support"
      ],
      icon: Mic,
      color: 'from-pink-500 to-pink-600',
      detailedDescription: "Shop and pay using just your voice. Our voice commerce system understands natural language commands and supports multiple African languages.",
      benefits: [
        "Hands-free shopping",
        "Accessibility for all",
        "Multi-language support",
        "Natural voice commands"
      ]
    },

    // Enterprise Features
    {
      id: 'enterprise-suite',
      title: "Enterprise Suite",
      description: "Comprehensive enterprise solutions with advanced security, compliance, and customization",
      category: 'enterprise',
      status: 'planned',
      progress: 25,
      estimatedRelease: 'Q3 2025',
      features: [
        "Advanced security",
        "Compliance tools",
        "Custom branding",
        "Dedicated support"
      ],
      icon: Building,
      color: 'from-gray-500 to-gray-600',
      detailedDescription: "Enterprise-grade solutions with advanced security, compliance tools, custom branding, and dedicated support for large organizations.",
      benefits: [
        "Enterprise-grade security",
        "Regulatory compliance",
        "Custom branding options",
        "Dedicated support team"
      ]
    },
    {
      id: 'white-label-platform',
      title: "White-Label Platform",
      description: "Customizable platform for large organizations and enterprises",
      category: 'enterprise',
      status: 'planned',
      progress: 20,
      estimatedRelease: 'Q4 2025',
      features: [
        "Custom branding",
        "API access",
        "Custom integrations",
        "Dedicated infrastructure"
      ],
      icon: Palette,
      color: 'from-indigo-500 to-indigo-600',
      detailedDescription: "Fully customizable platform that can be branded and integrated into existing enterprise systems. Complete API access and custom integrations available.",
      benefits: [
        "Complete customization",
        "Brand integration",
        "API access",
        "Custom integrations"
      ]
    }
  ]

  const filteredFeatures = activeCategory === 'all' 
    ? features 
    : features.filter(feature => feature.category === activeCategory)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 border-green-200'
      case 'in-development': return 'bg-orange-100 text-orange-800 border-orange-200'
      case 'planned': return 'bg-blue-100 text-blue-800 border-blue-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed'
      case 'in-development': return 'In Development'
      case 'planned': return 'Planned'
      default: return 'Unknown'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <SEOHead
        title="Learn More - Annita 3.0 Features | Comprehensive Platform Overview"
        description="Discover all the revolutionary features coming to Annita 3.0. From AI-powered business tools to offline functionality, explore how we're transforming digital commerce in Africa."
        keywords="Annita 3.0, features, AI, offline functionality, digital payments, logistics, mobile app, business tools, Africa, e-commerce"
        canonicalUrl="https://an-nita.com/learn-more-v3"
      />

      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Learn More
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Annita 3.0 Features
            </h1>
            <p className="text-xl sm:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Explore the comprehensive suite of features that will revolutionize how you do business in Africa. 
              From AI-powered tools to offline functionality, discover what's coming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="white"
                size="lg"
                icon={Star}
                className="text-lg font-bold"
                onClick={() => setIsWaitlistOpen(true)}
              >
                Join Waitlist
              </Button>
              <Button
                variant="glass"
                size="lg"
                icon={ExternalLink}
                className="text-lg font-bold backdrop-blur-xl text-white border-white/30"
                onClick={() => setIsDownloadModalOpen(true)}
              >
                Try V1.0 Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
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

      {/* Features Grid */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                {activeCategory === 'all' ? 'All Features' : categories.find(c => c.id === activeCategory)?.name} Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {activeCategory === 'all' 
                  ? 'Comprehensive overview of all Annita 3.0 features across all categories.'
                  : `Explore ${categories.find(c => c.id === activeCategory)?.name.toLowerCase()} features that will transform your business.`
                }
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {filteredFeatures.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`p-3 sm:p-4 bg-gradient-to-r ${feature.color} rounded-xl flex-shrink-0`}>
                      <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-0">
                          {feature.title}
                        </h3>
                        <div className="flex items-center space-x-3">
                          <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-semibold border ${getStatusColor(feature.status)}`}>
                            {getStatusText(feature.status)}
                          </span>
                          <span className="text-sm sm:text-base text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            {feature.estimatedRelease}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm sm:text-base mb-4">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Development Progress</span>
                      <span className="text-sm font-semibold text-gray-900">{feature.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                      <div 
                        className={`bg-gradient-to-r ${feature.color} h-2 sm:h-3 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${feature.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6">
                    {feature.features.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Detailed Description */}
                  {feature.detailedDescription && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">About This Feature</h4>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {feature.detailedDescription}
                      </p>
                    </div>
                  )}

                  {/* Benefits */}
                  {feature.benefits && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-2">
                            <Star className="w-4 h-4 text-orange-500 flex-shrink-0" />
                            <span className="text-sm sm:text-base text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Waitlist Form Modal */}
      <WaitlistForm
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />

      {/* Download Choice Modal */}
      <DownloadChoiceModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </div>
  )
}

export default LearnMoreV3Page
