'use client'

import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Play, 
  Star, 
  Sparkles, 
  Zap, 
  Award,
  CheckCircle,
  TrendingUp,
  Globe,
  Shield
} from 'lucide-react'
import Button from '@/components/ui/Button'

const HeroContent = () => {
  const features = [
    'AI-Powered Insights',
    'Secure Payments',
    'Global Reach',
    '24/7 Support'
  ]

  return (
    <div className="space-y-8">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium border border-orange-200"
      >
        <Sparkles className="w-4 h-4" />
        <span>AI-Powered Digital Platform</span>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
      >
        <span className="text-gray-900">Africa's First</span>
        <br />
        <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
          AI-Powered
        </span>
        <br />
        <span className="text-gray-900">All-in-One Digital Platform</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl leading-relaxed"
      >
        Annita is Africa's first all-in-one digital platform, combining e-commerce, fintech,
        <span className="text-orange-600 font-semibold"> Artificial Intelligence</span>, communication,
        marketing, logistics, and more into a single ecosystem. We empower MSMEs and individuals
        with innovative solutions, connectivity, and convenience.
      </motion.p>

      {/* Features List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-2 gap-4 max-w-2xl"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            className="flex items-center space-x-3"
          >
            <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <span className="text-gray-700 font-medium">{feature}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 items-center sm:items-start"
      >
        <Button className="group text-lg px-8 py-4">
          Get Started Free
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-3 text-gray-700 hover:text-orange-600 transition-colors duration-300 group"
        >
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-orange-100 transition-colors duration-300">
            <Play className="w-5 h-5 group-hover:text-orange-600 transition-colors duration-300" />
          </div>
          <div className="text-left">
            <div className="font-medium">Watch Demo</div>
            <div className="text-sm text-gray-500">2 min video</div>
          </div>
        </motion.button>
      </motion.div>

      {/* Trust Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 pt-8"
      >
        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-semibold">4.9/5</span> from 10,000+ users
          </div>
        </div>

        {/* Awards */}
        <div className="flex items-center space-x-2">
          <Award className="w-5 h-5 text-orange-500" />
          <span className="text-sm text-gray-600">Best Digital Platform 2024</span>
        </div>

        {/* Security */}
        <div className="flex items-center space-x-2">
          <Shield className="w-5 h-5 text-green-500" />
          <span className="text-sm text-gray-600">Bank-level Security</span>
        </div>
      </motion.div>

      {/* Live Activity Indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="flex items-center space-x-3 bg-green-50 border border-green-200 rounded-full px-4 py-2 w-fit"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 h-2 bg-green-500 rounded-full"
        />
        <span className="text-sm text-green-700 font-medium">
          <span className="font-bold">1,247</span> people using Annita right now
        </span>
      </motion.div>
    </div>
  )
}

export default HeroContent
