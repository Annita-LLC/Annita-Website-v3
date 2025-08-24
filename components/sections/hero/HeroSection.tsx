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
import Link from 'next/link'

const HeroSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-orange-50/30"></div>
      
      {/* Minimal background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-100 rounded-full opacity-15 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-screen py-16 lg:py-24">
          
          {/* Left Content - Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left lg:pr-16"
          >
            <div className="max-w-2xl mx-auto lg:mx-0">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-sm font-medium mb-8"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Africa's First All-in-One Platform
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6"
              >
                Transform Your
                <br />
                <span className="text-orange-600">Business</span>
                <br />
                <span className="text-gray-900">Today</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8 max-w-xl lg:max-w-none"
              >
                We empower MSMEs and individuals with innovative solutions, connectivity, and convenience.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link href="/download">
                  <Button
                    variant="gradient"
                    size="lg"
                    icon={Play}
                    className="w-full sm:w-auto text-base font-semibold px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Get Started Free
                  </Button>
                </Link>
                <Link href="/download">
                  <Button
                    variant="outline"
                    size="lg"
                    icon={Download}
                    className="w-full sm:w-auto text-base font-semibold px-8 py-4 border-2 border-gray-300 hover:border-orange-500 hover:text-orange-600 transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Download App
                  </Button>
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-gray-500"
              >
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  <span>10,000+ Active Users</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  <span>Bank-Level Security</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-4 h-4 mr-2" />
                  <span>54 African Countries</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Phone */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0"
          >
            <div className="relative">
              <HeroPhone />
              
              {/* Floating elements */}
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-xl"
              >
                <TrendingUp className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [10, -10, 10],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl"
              >
                <Zap className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
