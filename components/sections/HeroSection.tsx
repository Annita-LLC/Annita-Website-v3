 'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  Watch,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import Button from '@/components/ui/Button'
import DownloadChoiceModal from '@/components/ui/DownloadChoiceModal'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentFeature, setCurrentFeature] = useState(0)
  const [showNotification, setShowNotification] = useState(false)
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)

  const features = [
    { icon: Globe, text: 'Pan-African Reach' },
    { icon: Users, text: '450M+ MSMEs' },
    { icon: TrendingUp, text: 'Growing Fast' },
    { icon: Shield, text: 'Secure & Trusted' },
  ]

  const slides = [
    {
      id: 1,
      title: "Africa's First All-in-One Digital Platform",
      subtitle: "Empowering MSMEs across the continent with comprehensive digital solutions",
      cta: "Get Started Free",
      ctaIcon: Play,
      secondaryCta: "Download App",
      secondaryIcon: Download,
      background: "from-primary-900 via-primary-800 to-secondary-800"
    },
    {
      id: 2,
      title: "Seamless Digital Commerce",
      subtitle: "From marketplace to payments, logistics to AI - everything you need in one place",
      cta: "Explore Features",
      ctaIcon: Globe,
      secondaryCta: "Watch Demo",
      secondaryIcon: Video,
      background: "from-blue-900 via-purple-800 to-indigo-800"
    },
    {
      id: 3,
      title: "Trusted by Millions",
      subtitle: "Join thousands of businesses already transforming their operations with Annita",
      cta: "Join Now",
      ctaIcon: Users,
      secondaryCta: "Learn More",
      secondaryIcon: ArrowRight,
      background: "from-green-900 via-teal-800 to-cyan-800"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  useEffect(() => {
    const featureInterval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, 2000)
    return () => clearInterval(featureInterval)
  }, [features.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].background}`} />
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
              <AnimatePresence mode="wait">
               <motion.h1
                  key={currentSlide}
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 leading-tight"
               >
                  {slides[currentSlide].title}
               </motion.h1>
              </AnimatePresence>

              {/* Subtitle */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={`subtitle-${currentSlide}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
              </AnimatePresence>

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
              <AnimatePresence mode="wait">
              <motion.div
                  key={`cta-${currentSlide}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              >
                <Button
                  variant="gradient"
                  size="lg"
                    icon={slides[currentSlide].ctaIcon}
                  className="text-base sm:text-lg font-bold shadow-2xl hover:shadow-primary-500/25 transform hover:-translate-y-1 transition-all duration-300"
                >
                    {slides[currentSlide].cta}
                </Button>
                <Button
                  variant="glass"
                  size="lg"
                    icon={slides[currentSlide].secondaryIcon}
                  className="text-base sm:text-lg font-bold backdrop-blur-xl shadow-2xl hover:shadow-white/10 transform hover:-translate-y-1 transition-all duration-300"
                  onClick={() => {
                    if (slides[currentSlide].secondaryCta === "Watch Demo") {
                      window.location.href = '/demo'
                    } else if (slides[currentSlide].secondaryCta === "Download App") {
                      setIsDownloadModalOpen(true)
                    } else if (slides[currentSlide].secondaryCta === "Learn More") {
                      // Handle learn more action
                    }
                  }}
                >
                    {slides[currentSlide].secondaryCta}
                </Button>
              </motion.div>
              </AnimatePresence>

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

            {/* Right Column - Video */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm p-4">
                <iframe 
                  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Freel%2F1141319817913700%2F&show_text=false&width=560&t=0" 
                  width="100%" 
                  height="314" 
                  style={{border:'none',overflow:'hidden'}} 
                  scrolling="no" 
                  frameBorder="0" 
                  allowFullScreen={true} 
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
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

      {/* Download Choice Modal */}
      <DownloadChoiceModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </div>
  )
}

export default HeroSection
