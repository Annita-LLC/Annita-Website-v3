'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
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
  Shield,
  Download
} from 'lucide-react'
import Button from '@/components/ui/Button'

const HeroContent = () => {
  const features: string[] = []

  return (
    <div className="space-y-6 sm:space-y-8">

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
      >
        <span className="text-gray-900">Africa's First</span>
        <br />
        <span className="text-gray-900">All-in-One Digital Platform</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl leading-relaxed"
      >
        We empower MSMEs and individuals with innovative solutions, connectivity, and convenience.
      </motion.p>

      {/* Features List - Hidden since empty */}
      {features.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="flex items-center space-x-2"
            >
              <div className="w-5 h-5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-700 font-medium text-sm">{feature}</span>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
      >
        <Link href="/download">
          <Button
            variant="gradient"
            size="lg"
            icon={Play}
            className="text-sm sm:text-base font-bold shadow-xl hover:shadow-primary-500/25 transform hover:-translate-y-1 transition-all duration-300"
          >
            Get Started Free
          </Button>
        </Link>
        <Link href="/download">
          <Button
            variant="glass"
            size="lg"
            icon={Download}
            className="text-sm sm:text-base font-bold backdrop-blur-xl shadow-xl hover:shadow-white/10 transform hover:-translate-y-1 transition-all duration-300"
          >
            Download App
          </Button>
        </Link>
      </motion.div>

    </div>
  )
}

export default HeroContent
