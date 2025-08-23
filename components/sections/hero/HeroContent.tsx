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
    <div className="space-y-8">


              {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
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
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl leading-relaxed"
        >
          We empower MSMEs and individuals with innovative solutions, connectivity, and convenience.
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
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
        >
          <Link href="/download">
            <Button
              variant="gradient"
              size="lg"
              icon={Play}
              className="text-base sm:text-lg font-bold shadow-2xl hover:shadow-primary-500/25 transform hover:-translate-y-1 transition-all duration-300"
            >
              Get Started Free
            </Button>
          </Link>
          <Link href="/download">
            <Button
              variant="glass"
              size="lg"
              icon={Download}
              className="text-base sm:text-lg font-bold backdrop-blur-xl shadow-2xl hover:shadow-white/10 transform hover:-translate-y-1 transition-all duration-300"
            >
              Download App
            </Button>
          </Link>
        </motion.div>


    </div>
  )
}

export default HeroContent
