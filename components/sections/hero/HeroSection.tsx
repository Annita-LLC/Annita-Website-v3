'use client'

import { useState, useEffect, useRef } from 'react'
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
import HeroStats from './HeroStats'
import HeroFeatures from './HeroFeatures'

const HeroSection = () => {
  const [currentApp, setCurrentApp] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const apps = [
    { name: 'AnnitaPay', color: 'from-green-500 to-emerald-500' },
    { name: 'Marketplace', color: 'from-blue-500 to-cyan-500' },
    { name: 'AI Assistant', color: 'from-purple-500 to-pink-500' },
    { name: 'Logistics', color: 'from-orange-500 to-red-500' }
  ]

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentApp(prev => (prev + 1) % apps.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isPlaying, apps.length])

  const startDemo = () => {
    setIsPlaying(true)
  }

  const stopDemo = () => {
    setIsPlaying(false)
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-200 to-yellow-200 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{ 
            x: [0, 60, 0],
            y: [0, -40, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 blur-xl"
        />
      </div>

      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-screen py-20">
          
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left mb-12 lg:mb-0"
          >
            <HeroContent />
          </motion.div>

          {/* Right Phone Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <HeroPhone 
              currentApp={currentApp}
              apps={apps}
              isPlaying={isPlaying}
              onStartDemo={startDemo}
              onStopDemo={stopDemo}
            />
          </motion.div>
        </div>

        {/* Bottom Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 lg:mt-24"
        >
          <HeroStats />
        </motion.div>

        {/* Features Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 lg:mt-24"
        >
          <HeroFeatures />
        </motion.div>
      </div>

      {/* Floating CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <Download className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default HeroSection
