 'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Play, 
  Download, 
  ArrowRight, 
  Globe, 
  Users, 
  TrendingUp,
  Shield,
  Zap,
  Star,
  CheckCircle,
  CreditCard,
  Truck,
  MessageSquare,
  ShoppingCart,
  Bell,
  Settings,
  Search,
  Heart,
  BarChart3,
  Camera,
  Wifi,
  Battery,
  Signal,
  Clock,
  MapPin,
  Calendar,
  FileText,
  Video,
  Music,
  Gamepad2,
  Sparkles,
  Target,
  Award,
  Crown,
  Rocket,
  Brain,
  Palette,
  Globe2,
  Smartphone,
  Tablet,
  Monitor,
  Watch
} from 'lucide-react'
import Button from '@/components/ui/Button'
import PhoneMockup from '@/components/ui/PhoneMockup'

const HeroSection = () => {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [currentApp, setCurrentApp] = useState(0)
  const [showNotification, setShowNotification] = useState(false)
  const [batteryLevel, setBatteryLevel] = useState(87)
  const [signalStrength, setSignalStrength] = useState(4)

  const features = [
    { icon: Globe, text: 'Pan-African Reach' },
    { icon: Users, text: '450M+ MSMEs' },
    { icon: TrendingUp, text: 'Growing Fast' },
    { icon: Shield, text: 'Secure & Trusted' },
  ]

  const apps = [
    { icon: ShoppingCart, name: 'Marketplace', color: 'from-blue-500 to-cyan-500', notifications: 3 },
    { icon: CreditCard, name: 'AnnitaPay', color: 'from-green-500 to-emerald-500', notifications: 1 },
    { icon: Truck, name: 'Logistics', color: 'from-orange-500 to-red-500', notifications: 0 },
    { icon: MessageSquare, name: 'Connect', color: 'from-purple-500 to-pink-500', notifications: 5 },
    { icon: BarChart3, name: 'Analytics', color: 'from-indigo-500 to-purple-500', notifications: 2 },
    { icon: Brain, name: 'AI Assistant', color: 'from-teal-500 to-cyan-500', notifications: 0 },
  ]

  const notifications = [
    { type: 'success', message: 'Payment received from Customer #1234', time: '2m ago', icon: CheckCircle },
    { type: 'info', message: 'New order #5678 ready for pickup', time: '5m ago', icon: Bell },
    { type: 'warning', message: 'Low inventory alert for Product X', time: '10m ago', icon: Shield },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [features.length])

  useEffect(() => {
    const appInterval = setInterval(() => {
      setCurrentApp((prev) => (prev + 1) % apps.length)
    }, 3000)
    return () => clearInterval(appInterval)
  }, [apps.length])

  useEffect(() => {
    const notificationInterval = setInterval(() => {
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 3000)
    }, 5000)
    return () => clearInterval(notificationInterval)
  }, [])

  const renderIcon = (icon: any, className: string) => {
    const IconComponent = icon
    return <IconComponent className={className} />
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-800" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: -1,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: -1,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-400/20 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 pt-16 sm:pt-20 lg:pt-24 xl:pt-32 pb-8 sm:pb-12 lg:pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >


                             {/* Main Heading */}
               <motion.h1
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.3 }}
                 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 leading-tight"
               >
                Africa's First{' '}
                All-in-One Digital Platform
               </motion.h1>

              {/* Subtitle */}
              

              {/* Features Rotator */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4 mb-6 sm:mb-8"
              >
                <div className="flex items-center space-x-1.5 sm:space-x-2 text-white">
                  {(() => {
                    const IconComponent = features[currentFeature].icon;
                    return <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-primary-300" />;
                  })()}
                  <span className="font-medium text-sm sm:text-base">{features[currentFeature].text}</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              >
                <Button
                  variant="gradient"
                  size="lg"
                  icon={Play}
                  className="text-base sm:text-lg font-bold shadow-2xl hover:shadow-primary-500/25 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Get Started Free
                </Button>
                <Button
                  variant="glass"
                  size="lg"
                  icon={Download}
                  className="text-base sm:text-lg font-bold backdrop-blur-xl shadow-2xl hover:shadow-white/10 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Download App
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="mt-4 sm:mt-6 lg:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6 text-white/60 text-xs sm:text-sm"
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>3,000+ Vendors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span>Secure Payments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>24/7 Support</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Modern Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <PhoneMockup />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: -1 }}
          className="w-4 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: -1 }}
            className="w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-1.5 sm:mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HeroSection
