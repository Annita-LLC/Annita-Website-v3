"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target, 
  CheckCircle, 
  CreditCard, 
  Truck, 
  Megaphone,
  Package,
  BarChart3
} from 'lucide-react'

const BusinessModelPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Annita LLC",
    "description": "Annita's business model focuses on digital transformation for African MSMEs",
    "url": "https://www.an-nita.com/business-model"
  }

  const revenueStreams = [
    {
      title: "Markup Base Transaction Fees",
      description: "Percentage earned on sales from MSMEs via the multivendor e-commerce marketplace",
      pricing: "5% – 15% per transaction",
      contribution: "80%",
      status: "Current",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Subscription Plans",
      description: "Tiered plans (Growth, Pro, Premium) for access to business tools, AI, marketing, logistics, and support",
      pricing: "Monthly/Annual Subscription",
      contribution: "0%",
      status: "Projected",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Fintech Services",
      description: "Fees from digital payments, wallet transactions, and fund transfers",
      pricing: "Transaction-based fees",
      contribution: "0%",
      status: "Projected",
      icon: CreditCard,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Logistics & Fulfillment",
      description: "Delivery, warehousing, and inventory management for sellers and customers",
      pricing: "Pay-per-use / Subscription",
      contribution: "15%",
      status: "Current",
      icon: Truck,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      title: "Advertising & Marketing",
      description: "Sponsored ads, marketplace promotions, and targeted marketing services for MSMEs",
      pricing: "CPC / CPM & Packages",
      contribution: "5%",
      status: "Current",
      icon: Megaphone,
      color: "text-red-600",
      bgColor: "bg-red-100"
    }
  ]

  return (
    <>
      <SEOHead
        title="Business Model - Annita LLC"
        description="Discover Annita's innovative business model focused on digital transformation for African MSMEs through multiple revenue streams."
        keywords={[
          'business model',
          'revenue model',
          'digital transformation',
          'African business',
          'MSME digitalization',
          'payment processing',
          'subscription model',
          'transaction fees',
          'premium services',
          'data analytics',
          'market strategy',
          'competitive advantage',
          'value proposition',
          'economic impact',
          'social impact',
          'financial inclusion',
          'digital inclusion',
          'market penetration',
          'regional expansion',
          'pan-African growth',
          'sustainable business',
          'innovation strategy',
          'local market understanding',
          'mobile-first approach',
          'regulatory compliance',
          'affordable pricing',
          'local support',
          'impact metrics',
          'business growth',
          'digital economy'
        ]}
        canonical="/business-model"
        ogImage="/images/business-model.jpg"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600"></div>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
                Our <span className="text-orange-200">Business Model</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-orange-100 max-w-4xl mx-auto mb-6 sm:mb-8">
                Driving digital transformation in Africa through sustainable, value-driven business practices
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-sm sm:text-base">
                <span className="bg-white/20 px-3 sm:px-4 py-2 rounded-full">Multiple Revenue Streams</span>
                <span className="bg-white/20 px-3 sm:px-4 py-2 rounded-full">Sustainable Growth</span>
                <span className="bg-white/20 px-3 sm:px-4 py-2 rounded-full">Social Impact</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Revenue Streams */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Revenue <span className="text-orange-600">Streams</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Our diversified revenue model ensures sustainable growth while providing value to our customers
              </p>
            </motion.div>

            {/* Revenue Streams Table */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Revenue Streams</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Descriptions</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Pricing Models</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Projected Contributions</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {revenueStreams.map((stream, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className={`inline-flex items-center justify-center w-10 h-10 ${stream.bgColor} rounded-lg mr-3`}>
                              <stream.icon className={`w-5 h-5 ${stream.color}`} />
                            </div>
                            <span className="font-medium text-gray-900">{stream.title}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 max-w-xs">{stream.description}</td>
                        <td className="px-6 py-4 text-sm text-gray-900 font-medium">{stream.pricing}</td>
                        <td className="px-6 py-4">
                          <span className="text-2xl font-bold text-orange-600">{stream.contribution}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            stream.status === 'Current' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {stream.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Revenue Streams Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {revenueStreams.map((stream, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${stream.bgColor} rounded-2xl mb-4`}>
                      <stream.icon className={`w-8 h-8 ${stream.color}`} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      {stream.title}
                    </h3>
                    <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">
                      {stream.contribution}
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base mb-4">
                      {stream.description}
                    </p>
                    <div className="text-sm text-gray-500 mb-2">
                      <strong>Pricing:</strong> {stream.pricing}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      stream.status === 'Current' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {stream.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Revenue Summary */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Revenue <span className="text-orange-600">Summary</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Current revenue distribution and future projections
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Current Revenue */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Current Revenue (100%)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Transaction Fees</span>
                    <span className="font-bold text-green-600">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Logistics & Fulfillment</span>
                    <span className="font-bold text-orange-600">15%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-orange-500 h-3 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Advertising & Marketing</span>
                    <span className="font-bold text-red-600">5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-red-500 h-3 rounded-full" style={{ width: '5%' }}></div>
                  </div>
                </div>
              </motion.div>

              {/* Future Revenue */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Future Revenue (Projected)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Transaction Fees</span>
                    <span className="font-bold text-green-600">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Subscription Plans</span>
                    <span className="font-bold text-blue-600">25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-blue-500 h-3 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Fintech Services</span>
                    <span className="font-bold text-purple-600">10%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-purple-500 h-3 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Other Services</span>
                    <span className="font-bold text-orange-600">5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-orange-500 h-3 rounded-full" style={{ width: '5%' }}></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Join Our Mission
              </h2>
              <p className="text-lg sm:text-xl text-orange-100 max-w-3xl mx-auto mb-8">
                Be part of Africa's digital transformation journey
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-orange-50 transition-colors duration-200">
                  Partner With Us
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default BusinessModelPage
