'use client'

import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Users, 
  MessageSquare, 
  BookOpen, 
  TrendingUp, 
  Globe, 
  Shield,
  Heart,
  Award,
  Target,
  Lightbulb
} from 'lucide-react'
import { useRef } from 'react'

const CommunityFeatures = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [activeTab, setActiveTab] = useState('personal')

  const personalFeatures = [
    {
      icon: Users,
      title: 'Financial Literacy Hub',
      description: 'Access educational resources, workshops, and tutorials to improve your financial knowledge and digital payment skills.',
      benefits: ['Interactive tutorials', 'Live workshops', 'Peer learning groups', 'Certification programs']
    },
    {
      icon: MessageSquare,
      title: 'Community Forums',
      description: 'Connect with other users, share experiences, and get advice from financial experts and successful entrepreneurs.',
      benefits: ['Expert Q&A sessions', 'Success stories', 'Peer support groups', 'Mentorship programs']
    },
    {
      icon: TrendingUp,
      title: 'Personal Finance Tools',
      description: 'Track your spending, set savings goals, and get personalized insights to improve your financial health.',
      benefits: ['Expense tracking', 'Budget planning', 'Savings goals', 'Financial insights']
    },
    {
      icon: Globe,
      title: 'Cross-Border Community',
      description: 'Connect with users across 54 African countries for trade opportunities, cultural exchange, and business partnerships.',
      benefits: ['Trade networks', 'Cultural exchange', 'Business partnerships', 'Regional insights']
    }
  ]

  const businessFeatures = [
    {
      icon: Target,
      title: 'Business Networking',
      description: 'Connect with suppliers, buyers, and service providers across Africa to expand your business network.',
      benefits: ['Supplier discovery', 'Buyer matching', 'Service provider network', 'Partnership opportunities']
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description: 'Access cutting-edge business tools, AI insights, and market intelligence to stay ahead of competition.',
      benefits: ['AI-powered insights', 'Market intelligence', 'Innovation workshops', 'Technology adoption']
    },
    {
      icon: Award,
      title: 'Success Recognition',
      description: 'Showcase your achievements, get featured in success stories, and build credibility in the community.',
      benefits: ['Achievement badges', 'Success stories', 'Credibility building', 'Recognition programs']
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Build trust through verified profiles, secure transactions, and community-driven quality assurance.',
      benefits: ['Verified profiles', 'Secure transactions', 'Quality assurance', 'Trust scoring']
    }
  ]

  const communityStats = [
    { label: 'Active Community Members', value: 'Growing', icon: Users },
    { label: 'Countries Connected', value: '54', icon: Globe },
    { label: 'Success Stories Shared', value: 'Growing', icon: Award },
    { label: 'Financial Literacy Graduates', value: 'Growing', icon: BookOpen }
  ]

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Community-Driven <span className="text-orange-600">Financial Inclusion</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join a thriving community of individuals and businesses working together to drive economic empowerment 
            and financial inclusion across Africa. Learn, grow, and succeed together.
          </p>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {communityStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <stat.icon className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            <button
              onClick={() => setActiveTab('personal')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'personal'
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-orange-600'
              }`}
            >
              Personal Solutions
            </button>
            <button
              onClick={() => setActiveTab('business')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'business'
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-orange-600'
              }`}
            >
              Business Solutions
            </button>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {(activeTab === 'personal' ? personalFeatures : businessFeatures).map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <Heart className="w-4 h-4 text-orange-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Join the Annita Community Today
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Be part of Africa's largest community-driven financial platform. 
              Learn, grow, and succeed together with millions of users across the continent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300">
                Join Community
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-orange-600 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CommunityFeatures
