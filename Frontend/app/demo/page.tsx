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
  Download,
  ShoppingCart
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
    // V1.0 Current Features
    {
      id: 1,
      src: "/images/DEMO-Images/Annita Marketplace.jpg",
      title: "Annita Marketplace V1.0",
      description: "Live marketplace platform connecting African businesses with customers",
      features: ["Product listings", "Order management", "Customer reviews", "Seller dashboard"],
      version: "V1.0 - Live Now"
    },
    {
      id: 2,
      src: "/images/DEMO-Images/AnnitaPay.jpg",
      title: "AnnitaPay V1.0",
      description: "Secure payment processing with multiple payment methods",
      features: ["Mobile payments", "Bank transfers", "Escrow protection", "Instant settlements"],
      version: "V1.0 - Live Now"
    },
    {
      id: 3,
      src: "/images/DEMO-Images/Annita Logistics.webp",
      title: "Annita Logistics V1.0",
      description: "Complete delivery and logistics management system",
      features: ["Route optimization", "Real-time tracking", "Delivery scheduling", "Driver management"],
      version: "V1.0 - Live Now"
    },
    {
      id: 4,
      src: "/images/DEMO-Images/Annita Connect.webp",
      title: "Annita Connect V1.0",
      description: "Communication hub for businesses and customers",
      features: ["Live chat", "Video calls", "Team collaboration", "Customer support"],
      version: "V1.0 - Live Now"
    },
    {
      id: 5,
      src: "/images/DEMO-Images/shot7_1737053810391.png",
      title: "Main Dashboard V1.0",
      description: "Clean and intuitive interface for managing your business",
      features: ["Real-time analytics", "Quick actions", "Notification center", "Performance metrics"],
      version: "V1.0 - Live Now"
    },
    {
      id: 6,
      src: "/images/DEMO-Images/shot8_1737053808898.png",
      title: "Product Management V1.0",
      description: "Effortlessly manage your inventory and product listings",
      features: ["Bulk upload", "Smart categorization", "Price optimization", "Stock management"],
      version: "V1.0 - Live Now"
    },
    {
      id: 7,
      src: "/images/DEMO-Images/detail-image-2.jpg",
      title: "Marketing Center V1.0",
      description: "Advanced marketing tools and customer engagement",
      features: ["Campaign management", "Social media integration", "Analytics dashboard", "Email marketing"],
      version: "V1.0 - Live Now"
    },
    {
      id: 8,
      src: "/images/DEMO-Images/detail-image-4.jpg",
      title: "Customer Support V1.0",
      description: "24/7 customer support with AI-powered assistance",
      features: ["Live chat", "Ticket management", "Knowledge base", "Multi-language support"],
      version: "V1.0 - Live Now"
    },
    {
      id: 9,
      src: "/images/DEMO-Images/detail-image-5.jpg",
      title: "Analytics Dashboard V1.0",
      description: "Comprehensive business insights and performance metrics",
      features: ["Sales analytics", "Customer insights", "Performance tracking", "Revenue reports"],
      version: "V1.0 - Live Now"
    },
    {
      id: 10,
      src: "/images/DEMO-Images/detail-image-6.jpg",
      title: "Business Management V1.0",
      description: "Complete business management suite for African MSMEs",
      features: ["Financial tracking", "Inventory management", "Customer database", "Reporting tools"],
      version: "V1.0 - Live Now"
    },
    // V3.0 Coming Soon Features
    {
      id: 11,
      src: "/images/DEMO-Images/Annita AI.jpg",
      title: "Annita AI V3.0",
      description: "Revolutionary AI-powered business intelligence and automation",
      features: ["Predictive analytics", "Smart recommendations", "Automated tasks", "Fraud detection"],
      version: "V3.0 - Coming Soon"
    },
    {
      id: 12,
      src: "/images/DEMO-Images/08-1800x1360_1752227930605.webp",
      title: "Offline Mode V3.0",
      description: "Work without internet connection - perfect for rural areas",
      features: ["Offline functionality", "Data sync", "Rural connectivity", "Low bandwidth optimization"],
      version: "V3.0 - Coming Soon"
    },
    {
      id: 13,
      src: "/images/DEMO-Images/8_1678546978732.webp",
      title: "Advanced Analytics V3.0",
      description: "AI-powered business insights and predictive analytics",
      features: ["Machine learning", "Predictive modeling", "Advanced reporting", "Real-time insights"],
      version: "V3.0 - Coming Soon"
    },
    {
      id: 14,
      src: "/images/DEMO-Images/plain.jpg",
      title: "Multi-Language V3.0",
      description: "Support for 10+ African languages with offline functionality",
      features: ["Local languages", "Voice commands", "Cultural adaptation", "Accessibility features"],
      version: "V3.0 - Coming Soon"
    },
    {
      id: 15,
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
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-white/5 rounded-full animate-bounce delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Main Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <Eye className="w-4 h-4 mr-2" />
              Interactive Demo Gallery
            </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                  Experience <span className="text-orange-200">Annita 3.0</span>
            </h1>
                <p className="text-lg sm:text-xl text-orange-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
                  Experience both our live V1.0 platform and get a preview of the revolutionary V3.0 coming soon. 
                  See how we're transforming business in Africa with AI, offline capabilities, and comprehensive digital solutions.
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold">9</div>
                    <div className="text-xs sm:text-sm text-orange-200">Features</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold">3.0</div>
                    <div className="text-xs sm:text-sm text-orange-200">Version</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold">AI</div>
                    <div className="text-xs sm:text-sm text-orange-200">Powered</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <button 
                onClick={() => setIsDownloadModalOpen(true)}
                    className="bg-white text-orange-600 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-200 flex items-center justify-center shadow-lg text-sm sm:text-base"
              >
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Try V1.0 Now
                  </button>
                  <button 
                onClick={() => setIsWaitlistOpen(true)}
                    className="border-2 border-white text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200 flex items-center justify-center text-sm sm:text-base"
              >
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Join Waitlist
                  </button>
                </div>
              </div>

              {/* Right Column - Interactive Elements */}
              <div className="relative">
                {/* Demo Excellence Visualization */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center">Demo Excellence</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">9 Demo Features</span>
                      <span className="font-semibold text-white">Interactive</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">Annita 3.0</span>
                      <span className="font-semibold text-white">Latest Version</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">AI-Powered</span>
                      <span className="font-semibold text-white">Smart Features</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">Success Rate</span>
                      <span className="font-semibold text-white">98%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Version Comparison Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Annita Platform Evolution
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From our live V1.0 marketplace to the revolutionary V3.0 coming soon, 
                discover how we're building Africa's most comprehensive digital business platform.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* V1.0 Current Platform */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Annita V1.0</h3>
                    <p className="text-green-600 font-semibold">Live Now - Available Today</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Our current live platform powering thousands of African businesses with essential 
                  e-commerce, payment, and logistics solutions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Live Marketplace with 3,000+ sellers</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Secure AnnitaPay payment processing</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Complete logistics and delivery system</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Business communication tools</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Analytics and reporting dashboard</span>
                  </div>
                </div>
                <div className="mt-6">
                  <button 
                    onClick={() => setIsDownloadModalOpen(true)}
                    className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Try V1.0 Now
                  </button>
                </div>
              </div>

              {/* V3.0 Coming Soon */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Annita V3.0</h3>
                    <p className="text-orange-600 font-semibold">Coming Soon - Q1 2025</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  The revolutionary next generation platform with AI, offline capabilities, 
                  and advanced features designed for every African business.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-orange-500 mr-3" />
                    <span className="text-gray-700">AI-powered business intelligence</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-orange-500 mr-3" />
                    <span className="text-gray-700">Offline functionality for rural areas</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-orange-500 mr-3" />
                    <span className="text-gray-700">10+ African languages support</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-orange-500 mr-3" />
                    <span className="text-gray-700">Advanced fraud detection</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-orange-500 mr-3" />
                    <span className="text-gray-700">Predictive analytics and automation</span>
                  </div>
                </div>
                <div className="mt-6">
                  <button 
                    onClick={() => setIsWaitlistOpen(true)}
                    className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                  >
                    Join V3.0 Waitlist
                  </button>
                </div>
              </div>
            </div>

            {/* Key Features Comparison */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Platform Capabilities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">E-Commerce</h4>
                  <p className="text-sm text-gray-600 mb-3">Complete marketplace solution</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>V1.0: Live marketplace</span>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>V3.0: AI-powered recommendations</span>
                      <Star className="w-4 h-4 text-orange-500" />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Payments</h4>
                  <p className="text-sm text-gray-600 mb-3">Secure payment processing</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>V1.0: Multiple payment methods</span>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>V3.0: AI fraud detection</span>
                      <Star className="w-4 h-4 text-orange-500" />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">AI & Analytics</h4>
                  <p className="text-sm text-gray-600 mb-3">Intelligent business insights</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>V1.0: Basic analytics</span>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>V3.0: Predictive AI analytics</span>
                      <Star className="w-4 h-4 text-orange-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      <section className="py-16 sm:py-20 bg-white">
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
                  <div className="aspect-[16/10] relative bg-gray-50">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentSlide}
                        src={demoImages[currentSlide].src}
                        alt={demoImages[currentSlide].title}
                        className="w-full h-full object-contain"
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
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                      {demoImages[currentSlide].title}
                    </h3>
                      {demoImages[currentSlide].version && (
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          demoImages[currentSlide].version.includes('V1.0') 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-orange-100 text-orange-700'
                        }`}>
                          {demoImages[currentSlide].version}
                        </span>
                      )}
                    </div>
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
                      <div className="aspect-video relative bg-gray-50">
                        <img
                          src={image.src}
                          alt={image.title}
                          className="w-full h-full object-contain"
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
                        {image.version && (
                          <div className="absolute top-2 right-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              image.version.includes('V1.0') 
                                ? 'bg-green-500 text-white' 
                                : 'bg-orange-500 text-white'
                            }`}>
                              {image.version.includes('V1.0') ? 'Live' : 'Soon'}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-3 bg-white">
                        <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-medium text-gray-900 truncate">
                          {image.title}
                        </h4>
                          {image.version && (
                            <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                              image.version.includes('V1.0') 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-orange-100 text-orange-700'
                            }`}>
                              {image.version.includes('V1.0') ? 'V1.0' : 'V3.0'}
                            </span>
                          )}
                        </div>
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
      <section className="py-8 sm:py-12 bg-white">
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
                className="w-full h-full object-contain rounded-lg bg-gray-50"
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
