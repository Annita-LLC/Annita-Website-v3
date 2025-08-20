"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SEOHead from '@/components/seo/SEOHead'
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

  const categories = [
    { name: "Electronics", icon: "📱", count: "2,500+" },
    { name: "Fashion", icon: "👕", count: "5,000+" },
    { name: "Home & Garden", icon: "🏠", count: "3,200+" },
    { name: "Sports", icon: "⚽", count: "1,800+" },
    { name: "Books", icon: "📚", count: "4,500+" },
    { name: "Beauty", icon: "💄", count: "2,800+" }
  ]

  const popularProducts = [
    {
      name: "Wireless Bluetooth Headphones",
      price: "$89.99",
      originalPrice: "$129.99",
      rating: 4.8,
      reviews: 245,
      image: "🎧",
      badge: "Best Seller"
    },
    {
      name: "Smart Fitness Watch",
      price: "$199.99",
      originalPrice: "$299.99",
      rating: 4.9,
      reviews: 189,
      image: "⌚",
      badge: "New"
    },
    {
      name: "Organic Cotton T-Shirt",
      price: "$24.99",
      originalPrice: "$39.99",
      rating: 4.7,
      reviews: 156,
      image: "👕",
      badge: "Sale"
    },
    {
      name: "Portable Power Bank",
      price: "$49.99",
      originalPrice: "$79.99",
      rating: 4.6,
      reviews: 203,
      image: "🔋",
      badge: "Popular"
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
                  Discover millions of products with AI-powered search, fast delivery, and secure payments. 
                  Find the best deals on everything you need.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                    <Download className="w-5 h-5 mr-2" />
                    Download App
                  </button>
                  <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center">
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
                      <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Electronics</button>
                      <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Fashion</button>
                      <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Home</button>
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

      {/* Categories Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Shop by <span className="text-blue-600">Category</span>
            </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Explore millions of products across all categories with the best prices and deals.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center cursor-pointer group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-blue-600 font-medium text-sm">{category.count} products</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Products Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Popular <span className="text-blue-600">Products</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Discover trending products loved by our community with great reviews and competitive prices.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                >
                  <div className="relative mb-4">
                    <div className="text-6xl text-center group-hover:scale-110 transition-transform duration-300">
                      {product.image}
                    </div>
                    {product.badge && (
                      <div className="absolute top-0 right-0 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {product.badge}
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-blue-600">{product.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice}</span>
                </div>
                    <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors duration-200" />
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
                      <span className="font-semibold text-blue-600">25K+</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Products Available</span>
                      <span className="font-semibold text-blue-600">2M+</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Happy Customers</span>
                      <span className="font-semibold text-green-600">500K+</span>
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
                Start Shopping Today
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Download the Annita Shopping app and discover millions of products with 
                the best prices and fastest delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Now
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center">
                  Browse Products
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

export default ShoppingPage
