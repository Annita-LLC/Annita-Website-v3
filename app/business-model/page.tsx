"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import { TrendingUp, Users, DollarSign, Target, CheckCircle } from 'lucide-react'

const BusinessModelPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Annita LLC",
    "description": "Annita's business model focuses on digital transformation for African MSMEs",
    "url": "https://annita.com/business-model"
  }

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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  title: "Transaction Fees",
                  description: "2.5% base fee on all transactions",
                  percentage: "60%",
                  icon: DollarSign
                },
                {
                  title: "Subscriptions",
                  description: "Monthly platform access fees",
                  percentage: "25%",
                  icon: Users
                },
                {
                  title: "Premium Services",
                  description: "Advanced features and integrations",
                  percentage: "10%",
                  icon: TrendingUp
                },
                {
                  title: "Data Analytics",
                  description: "Business intelligence services",
                  percentage: "5%",
                  icon: Target
                }
              ].map((stream, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl mb-4">
                      <stream.icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      {stream.title}
                    </h3>
                    <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">
                      {stream.percentage}
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {stream.description}
                    </p>
                  </div>
                </motion.div>
              ))}
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
