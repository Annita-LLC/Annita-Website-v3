'use client'

import { useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { 
  ArrowRight, 
  Play, 
  Download, 
  Star, 
  Users, 
  TrendingUp,
  Sparkles,
  Zap,
  Award,
  Globe,
  Shield,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  Heart,
  Eye,
  Activity,
  Target,
  Crown,
  Rocket
} from 'lucide-react'
import Button from '@/components/ui/Button'
import HeroContent from './HeroContent'
import HeroPhone from './HeroPhone'

const HeroSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-16 left-8 w-20 h-20 bg-gradient-to-r from-orange-200 to-yellow-200 rounded-full opacity-15 blur-lg"
        />
        <motion.div
          animate={{ 
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-32 right-12 w-16 h-16 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-15 blur-lg"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen py-8 sm:py-12 lg:py-16">
          
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left mb-6 sm:mb-8 lg:mb-0 lg:pr-8"
          >
            <HeroContent />
          </motion.div>

          {/* Right Phone Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:items-center lg:pr-8"
          >
            <HeroPhone />
          </motion.div>
        </div>
      </div>


    </section>
  )
}

export default HeroSection
