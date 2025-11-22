'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import SEOHead from '@/components/seo/SEOHead'
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
  ShoppingCart,
  Sparkles,
  TrendingUp,
  Globe,
  Users,
  ArrowRight
} from 'lucide-react'
import Button from '@/components/ui/Button'
import WaitlistForm from '@/components/ui/WaitlistForm'
import DownloadChoiceModal from '@/components/ui/DownloadChoiceModal'

const DemoPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [selectedVersion, setSelectedVersion] = useState<'all' | 'v1' | 'v3'>('all')

  const demoImages = [
    // V1.0 Current Features
    {
      id: 1,
      src: "/images/DEMO-Images/Annita Marketplace.jpg",
      title: "Annita Marketplace V1.0",
      description: "Live marketplace platform connecting African businesses with customers",
      features: ["Product listings", "Order management", "Customer reviews", "Seller dashboard"],
      version: "V1.0",
      status: "Live",
      category: "Marketplace"
    },
    {
      id: 2,
      src: "/images/DEMO-Images/AnnitaPay.jpg",
      title: "AnnitaPay V1.0",
      description: "Secure payment processing with multiple payment methods",
      features: ["Mobile payments", "Bank transfers", "Escrow protection", "Instant settlements"],
      version: "V1.0",
      status: "Live",
      category: "Payments"
    },
    {
      id: 3,
      src: "/images/DEMO-Images/Annita Logistics.webp",
      title: "Annita Logistics V1.0",
      description: "Complete delivery and logistics management system",
      features: ["Route optimization", "Real-time tracking", "Delivery scheduling", "Driver management"],
      version: "V1.0",
      status: "Live",
      category: "Logistics"
    },
    {
      id: 4,
      src: "/images/DEMO-Images/Annita Connect.webp",
      title: "Annita Connect V1.0",
      description: "Communication hub for businesses and customers",
      features: ["Live chat", "Video calls", "Team collaboration", "Customer support"],
      version: "V1.0",
      status: "Live",
      category: "Communication"
    },
    {
      id: 5,
      src: "/images/DEMO-Images/shot7_1737053810391.png",
      title: "Main Dashboard V1.0",
      description: "Clean and intuitive interface for managing your business",
      features: ["Real-time analytics", "Quick actions", "Notification center", "Performance metrics"],
      version: "V1.0",
      status: "Live",
      category: "Dashboard"
    },
    {
      id: 6,
      src: "/images/DEMO-Images/shot8_1737053808898.png",
      title: "Product Management V1.0",
      description: "Effortlessly manage your inventory and product listings",
      features: ["Bulk upload", "Smart categorization", "Price optimization", "Stock management"],
      version: "V1.0",
      status: "Live",
      category: "Management"
    },
    {
      id: 7,
      src: "/images/DEMO-Images/detail-image-2.jpg",
      title: "Marketing Center V1.0",
      description: "Advanced marketing tools and customer engagement",
      features: ["Campaign management", "Social media integration", "Analytics dashboard", "Email marketing"],
      version: "V1.0",
      status: "Live",
      category: "Marketing"
    },
    {
      id: 8,
      src: "/images/DEMO-Images/detail-image-4.jpg",
      title: "Customer Support V1.0",
      description: "24/7 customer support with AI-powered assistance",
      features: ["Live chat", "Ticket management", "Knowledge base", "Multi-language support"],
      version: "V1.0",
      status: "Live",
      category: "Support"
    },
    {
      id: 9,
      src: "/images/DEMO-Images/detail-image-5.jpg",
      title: "Analytics Dashboard V1.0",
      description: "Comprehensive business insights and performance metrics",
      features: ["Sales analytics", "Customer insights", "Performance tracking", "Revenue reports"],
      version: "V1.0",
      status: "Live",
      category: "Analytics"
    },
    {
      id: 10,
      src: "/images/DEMO-Images/detail-image-6.jpg",
      title: "Business Management V1.0",
      description: "Complete business management suite for African MSMEs",
      features: ["Financial tracking", "Inventory management", "Customer database", "Reporting tools"],
      version: "V1.0",
      status: "Live",
      category: "Management"
    },
    // V3.0 Coming Soon Features
    {
      id: 11,
      src: "/images/DEMO-Images/Annita AI.jpg",
      title: "Annita AI V3.0",
      description: "Revolutionary AI-powered business intelligence and automation",
      features: ["Predictive analytics", "Smart recommendations", "Automated tasks", "Fraud detection"],
      version: "V3.0",
      status: "Soon",
      category: "AI"
    },
    {
      id: 12,
      src: "/images/DEMO-Images/08-1800x1360_1752227930605.webp",
      title: "Offline Mode V3.0",
      description: "Work without internet connection - perfect for rural areas",
      features: ["Offline functionality", "Data sync", "Rural connectivity", "Low bandwidth optimization"],
      version: "V3.0",
      status: "Soon",
      category: "Offline"
    },
    {
      id: 13,
      src: "/images/DEMO-Images/8_1678546978732.webp",
      title: "Advanced Analytics V3.0",
      description: "AI-powered business insights and predictive analytics",
      features: ["Machine learning", "Predictive modeling", "Advanced reporting", "Real-time insights"],
      version: "V3.0",
      status: "Soon",
      category: "Analytics"
    },
    {
      id: 14,
      src: "/images/DEMO-Images/plain.jpg",
      title: "Multi-Language V3.0",
      description: "Support for 10+ African languages with offline functionality",
      features: ["Local languages", "Voice commands", "Cultural adaptation", "Accessibility features"],
      version: "V3.0",
      status: "Soon",
      category: "Localization"
    },
    {
      id: 15,
      src: "/images/DEMO-Images/detail-image-6.jpg",
      title: "Settings & Configuration",
      description: "Customize your experience and manage account settings",
      features: ["Profile management", "Security settings", "Integration options"],
      version: "V1.0",
      status: "Live",
      category: "Settings"
    }
  ]

  const filteredImages = selectedVersion === 'all' 
    ? demoImages 
    : demoImages.filter(img => img.version === selectedVersion)

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || filteredImages.length === 0) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % filteredImages.length)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [isPlaying, filteredImages.length])

  // Reset slide when filter changes
  useEffect(() => {
    setCurrentSlide(0)
  }, [selectedVersion])

  const currentImage = filteredImages[currentSlide] || filteredImages[0]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const v1Count = demoImages.filter(img => img.version === 'V1.0').length
  const v3Count = demoImages.filter(img => img.version === 'V3.0').length

  return (
    <>
      <SEOHead
        title="Interactive Demo Gallery - Experience Annita 3.0"
        description="Experience both our live V1.0 platform and get a preview of the revolutionary V3.0 coming soon. See how we're transforming business in Africa."
        keywords={["demo", "annita", "v3.0", "v1.0", "platform", "africa", "business", "marketplace"]}
        canonical="/demo"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section - Same Header */}
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
                      <div className="text-xl sm:text-2xl font-bold">{demoImages.length}</div>
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
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <h3 className="text-xl font-semibold mb-4 text-center">Demo Excellence</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                        <span className="text-orange-200">{demoImages.length} Demo Features</span>
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
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Version Filter Tabs */}
        <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm"
                >
                  {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <PlayCircle className="w-4 h-4 mr-2" />}
                  {isPlaying ? 'Pause' : 'Play'}
                </button>
                <button
                  onClick={() => setCurrentSlide(0)}
                  className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </button>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setSelectedVersion('all')}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    selectedVersion === 'all'
                      ? 'bg-orange-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All ({demoImages.length})
                </button>
                <button
                  onClick={() => setSelectedVersion('v1')}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    selectedVersion === 'v1'
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  V1.0 Live ({v1Count})
                </button>
                <button
                  onClick={() => setSelectedVersion('v3')}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    selectedVersion === 'v3'
                      ? 'bg-orange-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  V3.0 Soon ({v3Count})
                </button>
              </div>

              <div className="text-sm text-gray-600">
                {currentSlide + 1} of {filteredImages.length}
              </div>
            </div>
          </div>
        </section>

        {/* Main Demo Gallery */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Main Image Display */}
                <div className="lg:col-span-2">
                  <motion.div
                    key={currentImage?.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative bg-white rounded-2xl shadow-2xl overflow-hidden group"
                  >
                    <div className="aspect-[16/10] relative bg-gradient-to-br from-gray-50 to-gray-100">
                      {currentImage && (
                        <>
                          <AnimatePresence mode="wait">
                            <motion.img
                              key={currentImage.id}
                              src={currentImage.src}
                              alt={currentImage.title}
                              className="w-full h-full object-contain p-4"
                              initial={{ opacity: 0, x: 50 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -50 }}
                              transition={{ duration: 0.5 }}
                            />
                          </AnimatePresence>
                          
                          {/* Navigation Arrows */}
                          <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
                          >
                            <ChevronLeft className="w-6 h-6 text-gray-800" />
                          </button>
                          <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
                          >
                            <ChevronRight className="w-6 h-6 text-gray-800" />
                          </button>

                          {/* Fullscreen Button */}
                          <button
                            onClick={() => setIsFullscreen(true)}
                            className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
                          >
                            <Maximize2 className="w-5 h-5 text-gray-800" />
                          </button>

                          {/* Version Badge */}
                          <div className="absolute top-4 left-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              currentImage.status === 'Live'
                                ? 'bg-green-500 text-white'
                                : 'bg-orange-500 text-white'
                            }`}>
                              {currentImage.status}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                    
                    {/* Image Info */}
                    {currentImage && (
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold text-gray-900">
                            {currentImage.title}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            currentImage.version === 'V1.0'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-orange-100 text-orange-700'
                          }`}>
                            {currentImage.version}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">
                          {currentImage.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {currentImage.features.map((feature, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Thumbnail Navigation */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">All Screenshots</h3>
                  <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                    {filteredImages.map((image, index) => (
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
                          <div className="absolute top-2 right-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              image.status === 'Live'
                                ? 'bg-green-500 text-white'
                                : 'bg-orange-500 text-white'
                            }`}>
                              {image.status}
                            </span>
                          </div>
                        </div>
                        <div className="p-3 bg-white">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="text-sm font-medium text-gray-900 truncate">
                              {image.title}
                            </h4>
                            <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                              image.version === 'V1.0'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-orange-100 text-orange-700'
                            }`}>
                              {image.version}
                            </span>
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
                {filteredImages.map((_, index) => (
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
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
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
                    description: "Continue business operations even without internet connectivity",
                    color: "from-blue-500 to-cyan-500"
                  },
                  {
                    icon: Shield,
                    title: "Secure & Trusted",
                    description: "Built-in escrow and security features for safe transactions",
                    color: "from-green-500 to-emerald-500"
                  },
                  {
                    icon: Brain,
                    title: "AI-Powered",
                    description: "Intelligent automation and business insights at your fingertips",
                    color: "from-purple-500 to-pink-500"
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-full animate-bounce"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
              >
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  🚨 Something BIG is Coming - Annita 3.0
                </h3>
                <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
                  Experience our live marketplace V1.0 today, and join the waitlist for the revolutionary V3.0 — 
                  offline-ready, AI-powered, and built for everyone in Africa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://annita.company.site/products"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Try Marketplace V1.0
                  </a>
                  <button 
                    onClick={() => setIsWaitlistOpen(true)}
                    className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200"
                  >
                    <Star className="w-5 h-5 mr-2" />
                    Join V3.0 Waitlist
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Fullscreen Modal */}
        <AnimatePresence>
          {isFullscreen && currentImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
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
                  src={currentImage.src}
                  alt={currentImage.title}
                  className="w-full h-full object-contain rounded-lg bg-gray-50"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm text-white p-4 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">{currentImage.title}</h3>
                  <p className="text-sm opacity-90">{currentImage.description}</p>
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

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #f97316;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #ea580c;
        }
      `}</style>
    </>
  )
}

export default DemoPage
