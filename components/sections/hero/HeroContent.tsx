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
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
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
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl leading-relaxed"
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
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl"
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
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start"
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


    </div>
  )
}

export default HeroContent
