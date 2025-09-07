'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { 
  Play,
  Eye,
  Zap,
  Shield,
  WifiOff,
  Brain,
  CreditCard,
  Truck,
  Megaphone,
  CheckCircle,
  Star,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  RotateCcw,
  Pause,
  PlayCircle,
  X,
  Download
} from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import WaitlistForm from '@/components/ui/WaitlistForm'
import DownloadChoiceModal from '@/components/ui/DownloadChoiceModal'
import CTASection from '@/components/sections/CTASection'

const DemoPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const demoImages = [
    {
      id: 1,
      src: "/images/DEMO-Images/shot7_1737053810391.png",
      title: "Main Dashboard",
      description: "Clean and intuitive interface for managing your business",
      features: ["Real-time analytics", "Quick actions", "Notification center"]
    },
    {
      id: 2,
      src: "/images/DEMO-Images/shot8_1737053808898.png",
      title: "Product Management",
      description: "Effortlessly manage your inventory and product listings",
      features: ["Bulk upload", "Smart categorization", "Price optimization"]
    },
    {
      id: 3,
      src: "/images/DEMO-Images/detail-3_1691366360328.jpg",
      title: "Payment Processing",
      description: "Secure and fast payment solutions for all transactions",
      features: ["Multiple payment methods", "Escrow protection", "Instant settlements"]
    },
    {
      id: 4,
      src: "/images/DEMO-Images/detail-8_1691366352083.jpg",
      title: "AI Assistant",
      description: "Intelligent business insights and automated assistance",
      features: ["Predictive analytics", "Smart recommendations", "Automated tasks"]
    },
    {
      id: 5,
      src: "/images/DEMO-Images/detail-image-03.jpg",
      title: "Logistics Hub",
      description: "Complete delivery and logistics management system",
      features: ["Route optimization", "Real-time tracking", "Delivery scheduling"]
    },
    {
      id: 6,
      src: "/images/DEMO-Images/detail-image-2.jpg",
      title: "Marketing Center",
      description: "Advanced marketing tools and customer engagement",
      features: ["Campaign management", "Social media integration", "Analytics dashboard"]
    },
    {
      id: 7,
      src: "/images/DEMO-Images/detail-image-4.jpg",
      title: "Customer Support",
      description: "24/7 customer support with AI-powered assistance",
      features: ["Live chat", "Ticket management", "Knowledge base"]
    },
    {
      id: 8,
      src: "/images/DEMO-Images/detail-image-5.jpg",
      title: "Analytics Dashboard",
      description: "Comprehensive business insights and performance metrics",
      features: ["Sales analytics", "Customer insights", "Performance tracking"]
    },
    {
      id: 9,
      src: "/images/DEMO-Images/detail-image-6.jpg",
      title: "Settings & Configuration",
      description: "Customize your experience and manage account settings",
      features: ["Profile management", "Security settings", "Integration options"]
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % demoImages.length)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [isPlaying, demoImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % demoImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + demoImages.length) % demoImages.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
              <Eye className="w-4 h-4 mr-2" />
              Interactive Demo Gallery
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Experience Annita 3.0
            </h1>
            <p className="text-xl sm:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Explore our comprehensive demo gallery showcasing every feature of Annita 3.0. 
              See the future of business in Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="white"
                size="lg"
                icon={Play}
                className="text-lg font-bold"
                onClick={() => setIsDownloadModalOpen(true)}
              >
                Try V1.0 Now
              </Button>
              <Button
                variant="glass"
                size="lg"
                icon={Star}
                className="text-lg font-bold backdrop-blur-xl text-white"
                onClick={() => setIsWaitlistOpen(true)}
              >
                Join Waitlist
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Slideshow Controls */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <PlayCircle className="w-4 h-4 mr-2" />}
                {isPlaying ? 'Pause' : 'Play'}
              </button>
                <button
                onClick={() => setCurrentSlide(0)}
                className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
                </button>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">
                {currentSlide + 1} of {demoImages.length}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Slideshow Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Main Image Display */}
              <div className="lg:col-span-2">
            <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative bg-white rounded-2xl shadow-2xl overflow-hidden group"
                >
                  <div className="aspect-[16/10] relative">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentSlide}
                        src={demoImages[currentSlide].src}
                        alt={demoImages[currentSlide].title}
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                      />
                    </AnimatePresence>
                    
                    {/* Overlay Controls */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex space-x-4">
                        <button
                          onClick={prevSlide}
                          className="w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
                        >
                          <ChevronLeft className="w-6 h-6 text-gray-800" />
                        </button>
                        <button
                          onClick={nextSlide}
                          className="w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
                        >
                          <ChevronRight className="w-6 h-6 text-gray-800" />
                        </button>
                        <button
                          onClick={() => setIsFullscreen(true)}
                          className="w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
                        >
                          <Maximize2 className="w-6 h-6 text-gray-800" />
                        </button>
                      </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                      onClick={prevSlide}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-800" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-800" />
                    </button>
                  </div>
                  
                  {/* Image Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {demoImages[currentSlide].title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {demoImages[currentSlide].description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {demoImages[currentSlide].features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
                </div>

              {/* Thumbnail Navigation */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">All Screenshots</h3>
                <div className="space-y-3 max-h-[600px] overflow-y-auto">
                  {demoImages.map((image, index) => (
              <motion.div
                      key={image.id}
                    initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      onClick={() => goToSlide(index)}
                      className={`relative cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
                        currentSlide === index
                          ? 'ring-2 ring-orange-500 shadow-lg scale-105'
                          : 'hover:shadow-md hover:scale-102'
                      }`}
                    >
                      <div className="aspect-video relative">
                        <img
                          src={image.src}
                          alt={image.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-200 flex items-center justify-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                            currentSlide === index
                              ? 'bg-orange-500 text-white'
                              : 'bg-white/80 text-gray-800 opacity-0 hover:opacity-100'
                          }`}>
                            <Play className="w-4 h-4 ml-0.5" />
                      </div>
                        </div>
                      </div>
                      <div className="p-3 bg-white">
                        <h4 className="text-sm font-medium text-gray-900 truncate">
                          {image.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                          {image.description}
                        </p>
                    </div>
                  </motion.div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide Indicators */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex space-x-2">
              {demoImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-orange-500 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Annita 3.0 is Revolutionary
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the features that will transform business operations across Africa.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: WifiOff,
                  title: "Works Offline",
                  description: "Continue business operations even without internet connectivity"
                },
                {
                  icon: Shield,
                  title: "Secure & Trusted",
                  description: "Built-in escrow and security features for safe transactions"
                },
                {
                  icon: Brain,
                  title: "AI-Powered",
                  description: "Intelligent automation and business insights at your fingertips"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Using the same as home page */}
      <CTASection />

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setIsFullscreen(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-6xl max-h-full"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsFullscreen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={demoImages[currentSlide].src}
                alt={demoImages[currentSlide].title}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2">{demoImages[currentSlide].title}</h3>
                <p className="text-sm opacity-90">{demoImages[currentSlide].description}</p>
            </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Waitlist Form Modal */}
      <WaitlistForm
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />

      {/* Download Choice Modal */}
      <DownloadChoiceModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </div>
  )
}

export default DemoPage
