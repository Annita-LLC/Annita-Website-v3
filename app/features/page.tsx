'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SEOHead from '@/components/seo/SEOHead'
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
  FileText,
  Store,
  Link as LinkIcon,
  Send,
  Calendar,
  Palette,
  GraduationCap,
  Building2,
  BarChart3,
  Target,
  Award,
  Heart,
  Code,
  Settings,
  Cloud,
  Database,
  Smartphone as MobileIcon,
  Monitor,
  Layers,
  Sparkles,
  MessageSquare
} from 'lucide-react'
import Link from 'next/link'

export default function FeaturesPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Features', icon: Sparkles },
    { id: 'marketplace', name: 'Marketplace', icon: Store },
    { id: 'payments', name: 'Payments', icon: CreditCard },
    { id: 'logistics', name: 'Logistics', icon: Truck },
    { id: 'marketing', name: 'Marketing', icon: Megaphone },
    { id: 'ai', name: 'AI Tools', icon: Brain },
    { id: 'creator', name: 'Creator Tools', icon: Palette },
    { id: 'education', name: 'Education', icon: GraduationCap },
    { id: 'business', name: 'Business Tools', icon: Building2 }
  ]

  const features = [
    // Marketplace Features
    {
      id: 'marketplace',
      icon: Store,
      title: "Live Marketplace",
      description: "Connect with 3,000+ verified vendors across Africa. Real vendors, real sales, right now.",
      category: 'marketplace',
      color: "from-green-500 to-emerald-500",
      status: "Live",
      details: [
        "3,000+ KYC-verified vendors",
        "Pan-African supplier network",
        "Real-time inventory updates",
        "Secure escrow payments",
        "Multi-currency support"
      ]
    },
    {
      id: 'store-builder',
      icon: Store,
      title: "One-Click Store Builder",
      description: "Create professional online stores in minutes. No coding required, global reach included.",
      category: 'marketplace',
      color: "from-blue-500 to-cyan-500",
      status: "Coming in V3.0",
      details: [
        "Drag-and-drop customization",
        "AI-powered product recommendations",
        "Global payment integration",
        "Mobile-responsive design",
        "Analytics dashboard"
      ]
    },

    // Payment Features
    {
      id: 'advanced-payments',
      icon: Smartphone,
      title: "Advanced Payment Methods",
      description: "15+ payment options including M-Pesa, USSD, VISA QR for maximum conversion rates.",
      category: 'payments',
      color: "from-purple-500 to-pink-500",
      status: "Coming in V3.0",
      details: [
        "M-Pesa integration",
        "USSD payments",
        "VISA QR codes",
        "Bank transfers",
        "Mobile money"
      ]
    },
    {
      id: 'escrow',
      icon: Shield,
      title: "Escrow Settlements",
      description: "Funds held securely until delivery is confirmed. Building trust in African trade.",
      category: 'payments',
      color: "from-green-500 to-emerald-500",
      status: "Live",
      details: [
        "Secure fund holding",
        "Automated release on delivery",
        "Buyer & seller protection",
        "Dispute resolution",
        "Trust badges"
      ]
    },
    {
      id: 'digital-wallet',
      icon: CreditCard,
      title: "Digital Wallet",
      description: "Send, receive, save, and grow money with our comprehensive fintech solutions.",
      category: 'payments',
      color: "from-orange-500 to-red-500",
      status: "Live",
      details: [
        "Multi-currency support",
        "Instant transfers",
        "Bill payments",
        "Airtime top-ups",
        "Savings goals"
      ]
    },
    {
      id: 'payment-links',
      icon: LinkIcon,
      title: "Enhanced Payment Links",
      description: "Accept payments without coding. QR codes, expiration dates, and detailed analytics.",
      category: 'payments',
      color: "from-teal-500 to-cyan-500",
      status: "Coming in V3.0",
      details: [
        "Customizable payment links",
        "QR code generation",
        "Expiration controls",
        "Payment analytics",
        "No-code integration"
      ]
    },

    // Logistics Features
    {
      id: 'integrated-logistics',
      icon: Truck,
      title: "Built-in Logistics",
      description: "Deliver faster and reach more customers with integrated delivery and logistics tools.",
      category: 'logistics',
      color: "from-indigo-500 to-purple-500",
      status: "Coming in V3.0",
      details: [
        "Real-time tracking",
        "Multiple courier partners",
        "Automated dispatch",
        "Delivery optimization",
        "Customer notifications"
      ]
    },

    // Marketing Features
    {
      id: 'marketing-tools',
      icon: Megaphone,
      title: "Marketing Tools",
      description: "Reach more customers with built-in marketing and promotion capabilities.",
      category: 'marketing',
      color: "from-pink-500 to-rose-500",
      status: "Coming in V3.0",
      details: [
        "Social media integration",
        "Email marketing",
        "SMS campaigns",
        "Promotional tools",
        "Customer analytics"
      ]
    },

    // AI Features
    {
      id: 'ai-assistant',
      icon: Brain,
      title: "AI Business Assistant",
      description: "Get automated help, insights, and guidance to run and grow your business.",
      category: 'ai',
      color: "from-violet-500 to-purple-500",
      status: "Coming in V3.0",
      details: [
        "Business insights",
        "Automated recommendations",
        "Market analysis",
        "Customer behavior prediction",
        "Performance optimization"
      ]
    },
    {
      id: 'offline-mode',
      icon: WifiOff,
      title: "Offline Functionality",
      description: "Access key features without internet connectivity - perfect for rural areas.",
      category: 'ai',
      color: "from-blue-500 to-cyan-500",
      status: "Coming in V3.0",
      details: [
        "Offline transactions",
        "Local data storage",
        "Sync when online",
        "Rural area optimization",
        "Low-connectivity support"
      ]
    },

    // Creator Features
    {
      id: 'creator-tools',
      icon: Palette,
      title: "Creator Tools",
      description: "Build single-page websites, manage subscriptions, and grow your creative business.",
      category: 'creator',
      color: "from-fuchsia-500 to-pink-500",
      status: "Coming in V3.0",
      details: [
        "Single-page websites",
        "Subscription management",
        "Creator analytics",
        "Content monetization",
        "Audience engagement"
      ]
    },

    // Education Features
    {
      id: 'tuition-system',
      icon: GraduationCap,
      title: "Tuition Payment System",
      description: "Streamline school fee payments, manage scholarships, and build education marketplaces.",
      category: 'education',
      color: "from-emerald-500 to-teal-500",
      status: "Coming in V3.0",
      details: [
        "School fee payments",
        "Scholarship management",
        "Education marketplace",
        "Payment tracking",
        "Financial aid tools"
      ]
    },

    // Business Features
    {
      id: 'invoice-generator',
      icon: FileText,
      title: "Invoice Generation",
      description: "Create professional invoices with payment tracking and automated follow-ups.",
      category: 'business',
      color: "from-amber-500 to-orange-500",
      status: "Coming in V3.0",
      details: [
        "Professional templates",
        "Payment tracking",
        "Automated reminders",
        "Tax calculations",
        "Multi-currency support"
      ]
    },
    {
      id: 'event-services',
      icon: Calendar,
      title: "Event & Lifestyle Services",
      description: "Manage events, sell tickets, and provide lifestyle services through our platform.",
      category: 'business',
      color: "from-lime-500 to-green-500",
      status: "Coming in V3.0",
      details: [
        "Event ticketing",
        "Travel bookings",
        "Lifestyle management",
        "Venue booking",
        "Event promotion"
      ]
    },
    {
      id: 'p2p-transfers',
      icon: Send,
      title: "P2P Money Transfers",
      description: "Send money to friends and family with instant, secure, and low-cost transfers.",
      category: 'business',
      color: "from-cyan-500 to-blue-500",
      status: "Coming in V3.0",
      details: [
        "Instant transfers",
        "Low fees",
        "Secure transactions",
        "International support",
        "Mobile optimization"
      ]
    }
  ]

  const filteredFeatures = activeCategory === 'all'
    ? features
    : features.filter(feature => feature.category === activeCategory)

  const stats = [
    { number: "3,000+", label: "Active Vendors", icon: Users },
    { number: "15+", label: "Payment Methods", icon: CreditCard },
    { number: "54", label: "African Countries", icon: Globe },
    { number: "14", label: "Platform Features", icon: Star }
  ]

  return (
    <>
      <SEOHead
        title="Features - Everything Annita Offers | Africa's All-in-One Digital Platform"
        description="Discover all that Annita offers: live marketplace, advanced payments, AI tools, logistics, marketing, creator tools, education solutions, and custom tech development. Africa's most comprehensive digital ecosystem."
        keywords={[
          'Annita features',
          'digital platform features',
          'African marketplace',
          'payment solutions',
          'AI business tools',
          'logistics platform',
          'marketing tools',
          'creator economy',
          'education technology',
          'custom solutions',
          'tech development',
          'business tools',
          'digital transformation',
          'e-commerce platform',
          'fintech solutions',
          'marketplace features',
          'payment methods',
          'business intelligence',
          'logistics management',
          'digital marketing',
          'content creation tools',
          'education payments',
          'invoice generation',
          'event management',
          'money transfers',
          'custom software development',
          'web development',
          'mobile app development',
          'API integration',
          'system customization',
          'tailored solutions',
          'tech consulting',
          'digital strategy',
          'platform customization'
        ]}
        canonical="/features"
      />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Complete Platform Overview
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Everything <span className="text-orange-200">Annita</span> Offers
              </h1>

              <p className="text-lg sm:text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed mb-8">
                Africa's most comprehensive digital ecosystem. From marketplace to payments, AI to logistics,
                we build custom solutions for businesses and individuals across the continent.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <stat.icon className="w-8 h-8 text-orange-200 mx-auto mb-2" />
                    <div className="text-2xl sm:text-3xl font-bold">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-orange-200">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/maintenance"
                  className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-200 shadow-lg text-sm sm:text-base"
                >
                  Try V1.0 Now
                </Link>
                <Link
                  href="#features"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200 text-sm sm:text-base"
                >
                  Explore Features
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600 border border-gray-200'
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
      <section id="features" className="py-16 sm:py-20 bg-white">
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
                Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Feature Suite</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Every tool and service you need to succeed in Africa's digital economy, all in one integrated platform.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFeatures.map((feature, index) => (
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
                        ? 'bg-green-100 text-green-700'
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      {feature.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>

                  <ul className="space-y-2 mb-6">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {feature.status === 'Live' && (
                    <Link
                      href="/maintenance"
                      className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors"
                    >
                      Try it now
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 sm:p-12 text-white shadow-2xl"
            >
              <Code className="w-16 h-16 mx-auto mb-6 text-orange-200" />
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Need Custom Tech Solutions?
              </h3>
              <p className="text-orange-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                We don't just provide tools - we build custom solutions for businesses that need specialized technology.
                From web applications to mobile apps, API integrations to system customizations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/solutions"
                  className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 shadow-lg"
                >
                  <Settings className="w-5 h-5 mr-2 inline" />
                  Explore Custom Solutions
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200"
                >
                  <MessageSquare className="w-5 h-5 mr-2 inline" />
                  Discuss Your Project
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
