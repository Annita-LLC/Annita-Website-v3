"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import { 
  Truck, 
  Package, 
  MapPin, 
  Clock, 
  Shield, 
  Zap, 
  Globe, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Download,
  Play,
  Star,
  BarChart3,
  Users,
  Activity
} from 'lucide-react'

const LogisticsPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeService, setActiveService] = useState('delivery')

  const features = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Same-day and next-day delivery across Liberia",
      color: "blue"
    },
    {
      icon: Package,
      title: "Package Tracking",
      description: "Real-time tracking and delivery updates",
      color: "green"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "International shipping and logistics",
      color: "orange"
    },
    {
      icon: Shield,
      title: "Secure Handling",
      description: "Insurance and secure package handling",
      color: "purple"
    }
  ]

  const services = [
    { 
      name: "Express Delivery", 
      icon: "🚚", 
      description: "Same-day and next-day delivery",
      features: ["Fast delivery", "Real-time tracking", "Priority handling"],
      price: "From $5"
    },
    { 
      name: "Standard Shipping", 
      icon: "📦", 
      description: "Reliable 2-5 day delivery",
      features: ["Cost-effective", "Wide coverage", "Package protection"],
      price: "From $3"
    },
    { 
      name: "International", 
      icon: "🌍", 
      description: "Global shipping solutions",
      features: ["Worldwide delivery", "Customs handling", "Multi-language support"],
      price: "From $15"
    },
    { 
      name: "Bulk Shipping", 
      icon: "🏭", 
      description: "Large volume and business shipping",
      features: ["Volume discounts", "Dedicated support", "Custom solutions"],
      price: "Custom pricing"
    },
    { 
      name: "Warehouse", 
      icon: "🏢", 
      description: "Storage and fulfillment services",
      features: ["Secure storage", "Order fulfillment", "Inventory management"],
      price: "From $10/month"
    },
    { 
      name: "Returns", 
      icon: "↩️", 
      description: "Easy returns and exchanges",
      features: ["Free returns", "Quick processing", "Refund guarantee"],
      price: "Free"
    }
  ]

  const deliveryStats = [
    {
      title: "Delivery Success Rate",
      value: "99.8%",
      change: "+0.2%",
      icon: "📈",
      color: "green"
    },
    {
      title: "Average Delivery Time",
      value: "1.2",
      unit: "days",
      change: "-0.3 days",
      icon: "⏱️",
      color: "blue"
    },
    {
      title: "Active Drivers",
      value: "2,500+",
      change: "+150",
      icon: "👨‍💼",
      color: "orange"
    },
    {
      title: "Cities Covered",
      value: "50+",
      change: "+5",
      icon: "🏙️",
      color: "purple"
    }
  ]

  const benefits = [
    "Real-time package tracking and updates",
    "Flexible delivery options and scheduling",
    "Comprehensive insurance coverage",
    "Professional handling and care",
    "24/7 customer support",
    "Competitive pricing and transparent fees"
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Annita Logistics - Supply Chain & Delivery Solutions",
    "description": "Comprehensive logistics and delivery services including express delivery, international shipping, warehousing, and real-time tracking. Fast, secure, and reliable supply chain solutions.",
    "url": "https://annita.com/services/logistics",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://annita.com/services/logistics/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <SEOHead
        title="Annita Logistics - Supply Chain & Delivery Solutions | Annita LLC"
        description="Comprehensive logistics and delivery services including express delivery, international shipping, warehousing, and real-time tracking. Fast, secure, and reliable supply chain solutions."
        keywords={[
          'Annita Logistics',
          'delivery services',
          'supply chain',
          'package tracking',
          'express delivery',
          'international shipping',
          'warehouse services',
          'logistics solutions',
          'same-day delivery',
          'package handling',
          'shipping services',
          'delivery tracking',
          'logistics platform',
          'supply chain management',
          'delivery network'
        ]}
        canonical="/services/logistics"
        ogImage="/logistics-og-image.jpg"
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

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                  <Truck className="w-4 h-4 mr-2" />
                  Supply Chain & Delivery
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6">
                  Fast & <span className="text-blue-600">Reliable</span> Logistics
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                  Comprehensive logistics and delivery services with real-time tracking, 
                  express delivery, and global shipping solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                    <Download className="w-5 h-5 mr-2" />
                    Track Package
                  </button>
                  <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Schedule Pickup
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
                    <Truck className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Track Your Package</h3>
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter tracking number..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
                      />
                      <Package className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Package Status</span>
                        <span className="text-sm font-semibold text-green-600">In Transit</span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>Estimated Delivery</span>
                        <span>Tomorrow, 2:00 PM</span>
                      </div>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                      Track Package
                    </button>
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
                Complete <span className="text-blue-600">Logistics</span> Solutions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                From local delivery to international shipping, we provide comprehensive 
                logistics services to meet all your supply chain needs.
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

        {/* Services Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-blue-600">Services</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our range of logistics services designed to meet your specific needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-blue-600 font-semibold text-lg">{service.price}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Statistics Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Delivery <span className="text-blue-600">Performance</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Real-time statistics showing our commitment to fast and reliable delivery.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {deliveryStats.map((stat, index) => (
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
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {stat.value}{stat.unit && <span className="text-lg">{stat.unit}</span>}
                    </div>
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
                  Why Choose <span className="text-blue-600">Annita Logistics</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Annita Logistics is designed to provide you with the most reliable 
                  and efficient delivery experience with advanced technology and professional service.
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Network Coverage</h3>
                    <p className="text-gray-600">Delivery statistics</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Daily Deliveries</span>
                      <span className="font-semibold text-blue-600">50K+</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Service Areas</span>
                      <span className="font-semibold text-blue-600">200+</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Customer Satisfaction</span>
                      <span className="font-semibold text-green-600">98%</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-500 to-blue-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Start Shipping Today
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of customers who trust Annita Logistics for their 
                delivery needs. Fast, secure, and reliable shipping solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Schedule Pickup
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center">
                  Get Quote
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

export default LogisticsPage
