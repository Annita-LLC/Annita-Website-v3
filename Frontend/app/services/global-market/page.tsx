"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import CTASection from '@/components/sections/CTASection'
import { 
  Globe, 
  Building, 
  Truck, 
  DollarSign, 
  Users, 
  Shield, 
  Zap, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Download,
  Play,
  Star,
  MapPin,
  Clock,
  BarChart3,
  Search
} from 'lucide-react'

const GlobalMarketPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeRegion, setActiveRegion] = useState('africa')

  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect with buyers and sellers worldwide",
      color: "blue"
    },
    {
      icon: Building,
      title: "Business Solutions",
      description: "Comprehensive tools for international trade",
      color: "green"
    },
    {
      icon: Truck,
      title: "Logistics Network",
      description: "Seamless shipping and delivery worldwide",
      color: "orange"
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Bank-grade security for all transactions",
      color: "purple"
    }
  ]

  const regions = [
    { 
      name: "Africa", 
      icon: "🌍", 
      countries: "Pending",
      description: "Connect with African markets and suppliers",
      stats: "Pending"
    },
    { 
      name: "Europe", 
      icon: "🇪🇺", 
      countries: "Pending",
      description: "Access European markets and technology",
      stats: "Pending"
    },
    { 
      name: "Asia", 
      icon: "🌏", 
      countries: "Pending",
      description: "Connect with Asian manufacturers and markets",
      stats: "Pending"
    },
    { 
      name: "Americas", 
      icon: "🌎", 
      countries: "Pending",
      description: "Access North and South American markets",
      stats: "Pending"
    }
  ]

  const marketStats = [
    {
      title: "Active Businesses",
      value: "Pending",
      change: "Pending",
      icon: "🏢",
      color: "blue"
    },
    {
      title: "Countries",
      value: "Pending",
      change: "Pending",
      icon: "🌍",
      color: "green"
    },
    {
      title: "Daily Transactions",
      value: "Pending",
      change: "Pending",
      icon: "💰",
      color: "orange"
    },
    {
      title: "Trade Volume",
      value: "Pending",
      change: "Pending",
      icon: "📈",
      color: "purple"
    }
  ]

  const benefits = [
    "Access to global supplier network",
    "Multi-currency payment processing",
    "International shipping and logistics",
    "Trade financing and insurance",
    "Market intelligence and analytics",
    "24/7 multilingual support"
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Annita Global Market - International Marketplace",
    "description": "Connect with buyers and sellers worldwide. Access global markets, secure transactions, and comprehensive logistics for international trade.",
    "url": "https://annita.com/services/global-market",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://annita.com/services/global-market/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <SEOHead
        title="Annita Global Market - International Marketplace | Annita LLC"
        description="Connect with buyers and sellers worldwide. Access global markets, secure transactions, and comprehensive logistics for international trade."
        keywords={[
          'Annita Global Market',
          'international marketplace',
          'global trade',
          'business marketplace',
          'international business',
          'global suppliers',
          'trade platform',
          'business network',
          'international logistics',
          'global commerce',
          'business solutions',
          'trade financing',
          'market intelligence',
          'global reach',
          'business platform'
        ]}
        canonical="/services/global-market"
        ogImage="/global-market-og-image.jpg"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                  <Globe className="w-4 h-4 mr-2" />
                  International Marketplace
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6">
                  Go <span className="text-blue-600">Global</span> with Annita
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                  Built specifically for African businesses with features that address real challenges in cross-border trade, 
                  institutional backing, and seamless integration across African markets. Unlike generic marketplaces, 
                  Annita connects you with authentic African suppliers and grows your business across the continent.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                    <Download className="w-5 h-5 mr-2" />
                    Join Marketplace
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
                    <Globe className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Trade Hub</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">🌍</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Active Markets</h4>
                          <p className="text-sm text-gray-600">180+ countries</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-blue-600">25M+</div>
                        <div className="text-sm text-gray-600">Businesses</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">💰</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Daily Volume</h4>
                          <p className="text-sm text-gray-600">Transactions</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-green-600">$500M+</div>
                        <div className="text-sm text-gray-600">Volume</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* African Business Features Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-orange-50 to-red-50" ref={ref}>
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Built for <span className="text-orange-600">African Businesses</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
                Unlike generic marketplaces, Annita is built for African businesses featuring: 
                KYC-Verified Businesses, Escrow Payment Protection, RFQ-Based Sourcing, 
                Multi-Currency Support, Pan-African Network.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">KYC-Verified Businesses</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  All suppliers and buyers complete identity & document checks through Smile ID. 
                  Comprehensive due diligence ensures secure transactions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Escrow Payment Protection</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Funds held securely until delivery confirmed. Integrated financing solutions 
                  with escrow protection for seamless trade operations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">RFQ-Based Sourcing</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Request for Quotation system for efficient supplier discovery. 
                  Streamlined procurement process for African businesses.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-Currency Support</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Support for 54+ African currencies plus major global currencies. 
                  Real-time conversion tracking and competitive rates.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Pan-African Network</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Access suppliers from all AfCFTA regions. Trade confidently across 
                  East, West, Central, Southern, and North Africa.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Institutional Backing</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Strategic partnerships with leading African banks for trade finance. 
                  Connected ecosystem for seamless integration.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Global <span className="text-blue-600">Business</span> Solutions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive tools and services designed to help businesses succeed 
                in the global marketplace.
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

        {/* Global Regions Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Global <span className="text-blue-600">Reach</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Connect with businesses across all major regions and markets worldwide.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {regions.map((region, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {region.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{region.name}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-3">{region.countries}</p>
                  <p className="text-gray-600 text-sm mb-3">{region.description}</p>
                  <p className="text-gray-900 font-semibold text-sm">{region.stats}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Statistics Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Market <span className="text-blue-600">Statistics</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Real-time data showing the scale and impact of our global marketplace.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketStats.map((stat, index) => (
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
                  Why Choose <span className="text-blue-600">Global Market</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Annita Global Market provides everything you need to succeed in 
                  international trade with comprehensive tools and support.
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
                      <span className="text-gray-600">New Businesses</span>
                      <span className="font-semibold text-blue-600">Pending</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Trade Volume</span>
                      <span className="font-semibold text-blue-600">Pending</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Success Rate</span>
                      <span className="font-semibold text-green-600">Pending</span>
                    </div>
                  </div>
                </div>
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

export default GlobalMarketPage
