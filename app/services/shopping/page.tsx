"use client"

import { useState, memo } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import CTASection from '@/components/sections/CTASection'
import DownloadChoiceModal from '@/components/ui/DownloadChoiceModal'
import { 
  ShoppingCart, 
  Search, 
  Star, 
  Heart, 
  Truck, 
  Shield, 
  Zap, 
  Globe,
  Smartphone,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Download,
  Play,
  Filter,
  Grid,
  List
} from 'lucide-react'

const ShoppingPage = () => {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [viewMode, setViewMode] = useState('grid')

  const features = [
    {
      icon: Search,
      title: "Smart Search",
      description: "AI-powered search with filters and recommendations",
      color: "blue"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Same-day and next-day delivery across Liberia",
      color: "green"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Multiple payment options with bank-grade security",
      color: "orange"
    },
    {
      icon: Users,
      title: "Social Shopping",
      description: "Share products and get recommendations from friends",
      color: "purple"
    }
  ]



  const benefits = [
    "Millions of products from verified sellers",
    "Price comparison and best deals",
    "Customer reviews and ratings",
    "Easy returns and refunds",
    "Loyalty rewards program",
    "24/7 customer support"
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Annita Shopping - E-commerce Platform",
    "description": "Discover millions of products with smart search, fast delivery, and secure payments. Shop the best deals on electronics, fashion, home goods, and more.",
    "url": "https://annita.com/services/shopping",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://annita.com/services/shopping/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <SEOHead
        title="Annita Shopping - E-commerce Platform | Annita LLC"
        description="Discover millions of products with smart search, fast delivery, and secure payments. Shop the best deals on electronics, fashion, home goods, and more."
        keywords={[
          'Annita Shopping',
          'e-commerce',
          'online shopping',
          'digital marketplace',
          'Liberia shopping',
          'online store',
          'product search',
          'secure payments',
          'fast delivery',
          'customer reviews',
          'best deals',
          'shopping platform',
          'retail marketplace',
          'product comparison',
          'loyalty rewards'
        ]}
        canonical="/services/shopping"
        ogImage="/shopping-og-image.jpg"
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
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  E-commerce Platform
            </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6">
                  Shop <span className="text-blue-600">Smarter</span> with Annita
            </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                  Comprehensive multivendor marketplace with KYC-verified suppliers, escrow payment protection, 
                  and RFQ-based sourcing. Smart search with AI-powered recommendations, secure multi-currency 
                  payments, real-time tracking, and fast delivery across all African countries.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setIsDownloadModalOpen(true)}
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download App
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
                    <Search className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Search</h3>
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search for products..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
                      />
                      <Search className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => window.open('https://annita.company.site/products?category=electronics', '_blank')}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors duration-200"
                      >
                        Electronics
                      </button>
                      <button 
                        onClick={() => window.open('https://annita.company.site/products?category=fashion', '_blank')}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200"
                      >
                        Fashion
                      </button>
                      <button 
                        onClick={() => window.open('https://annita.company.site/products?category=home', '_blank')}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200"
                      >
                        Home
                      </button>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>🔍 "wireless headphones" - 2,450 results</p>
                      <p>💰 Price range: $10 - $500</p>
                      <p>⭐ 4+ star ratings</p>
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
                Why Choose <span className="text-blue-600">Annita Shopping</span>
            </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Built with cutting-edge technology to provide the best shopping experience 
                with smart features and reliable service.
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
                  Everything You Need for <span className="text-blue-600">Smart Shopping</span>
            </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Annita Shopping is designed to make your shopping experience effortless and enjoyable. 
                  From discovery to delivery, we've got you covered.
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
                      <TrendingUp className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Platform Stats</h3>
                    <p className="text-gray-600">Real-time data</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Active Sellers</span>
                      <span className="font-semibold text-blue-600">Pending</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Products Available</span>
                      <span className="font-semibold text-blue-600">Pending</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Happy Customers</span>
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

        {/* Download Choice Modal */}
        <DownloadChoiceModal
          isOpen={isDownloadModalOpen}
          onClose={() => setIsDownloadModalOpen(false)}
        />
    </div>
    </>
  )
}

export default memo(ShoppingPage)
