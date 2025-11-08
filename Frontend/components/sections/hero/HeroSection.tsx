'use client'

import { useState, useEffect, useRef, useCallback, memo } from 'react'
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
  Heart,
  Eye,
  Activity,
  Target,
  Crown,
  Rocket,
  Video,
  Brain,
  ExternalLink,
  WifiOff,
  Smartphone,
  CreditCard,
  DollarSign,
  Truck,
  MapPin,
  BarChart3,
  ShoppingCart,
  MessageSquare,
  Lock
} from 'lucide-react'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import WaitlistForm from '@/components/ui/WaitlistForm'
import DownloadChoiceModal from '@/components/ui/DownloadChoiceModal'

const HeroSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "0px" })
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentVideo, setCurrentVideo] = useState(0)
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const videoIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const videoResumeTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const iframeRef = useRef<HTMLIFrameElement | null>(null)

  const videos = [
    {
      id: 1,
      title: "Annita 3.0 Preview",
      description: "See what's coming in our next major update",
      src: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Freel%2F1141319817913700%2F&show_text=false&width=560&t=0"
    },
    {
      id: 2,
      title: "Annita Platform Demo",
      description: "Experience our current marketplace features",
      src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fannitallc%2Fposts%2Fpfbid0w721YvqYafVyFfF1KRK3yqYwi3kA5m39B4uBt8S9vLHA878dHnyf6GuHDkpx8E37l&show_text=false&width=500"
    }
  ]

  const slides = [
    {
      id: 1,
      badge: "🚨 Something BIG is Coming",
      title: "Annita 3.0 - The Future",
      titleHighlight: "of Business in Africa",
      subtitle: "Built for African businesses. Cross-border trade, institutional backing, seamless integration.",
      cta: "Join Waitlist",
      ctaIcon: Star,
      secondaryCta: "See V1.0 Now",
      secondaryIcon: ExternalLink,
      background: "from-gray-50 via-white to-orange-50/30"
    },
    {
      id: 2,
      badge: "Live Marketplace V1.0",
      title: "Real Vendors, Real Sales",
      titleHighlight: "Right Now",
      subtitle: "3,000+ KYC-verified vendors across Africa. Secure transactions guaranteed.",
      cta: "Visit Marketplace",
      ctaIcon: Globe,
      secondaryCta: "Start Selling",
      secondaryIcon: ArrowRight,
      background: "from-blue-50 via-white to-purple-50/30"
    },
    {
      id: 3,
      badge: "Pan-African Network",
      title: "Connect Across All",
      titleHighlight: "54 African Countries",
      subtitle: "Access suppliers from all AfCFTA regions. Trade in 30+ African currencies.",
      cta: "Learn More",
      ctaIcon: WifiOff,
      secondaryCta: "See Features",
      secondaryIcon: Eye,
      background: "from-green-50 via-white to-teal-50/30"
    },
    {
      id: 4,
      badge: "Escrow Protection",
      title: "Secure Transactions",
      titleHighlight: "Built for Trust",
      subtitle: "Funds held securely until delivery confirmed. Integrated financing solutions.",
      cta: "Discover AI",
      ctaIcon: Brain,
      secondaryCta: "Try V1.0",
      secondaryIcon: ExternalLink,
      background: "from-purple-50 via-white to-pink-50/30"
    },
    {
      id: 5,
      badge: "Built in Liberia",
      title: "Rising with the Continent",
      titleHighlight: "the Continent",
      subtitle: "Built for African businesses. Institutional backing and connected ecosystem.",
      cta: "Join Movement",
      ctaIcon: Globe,
      secondaryCta: "Partner With Us",
      secondaryIcon: Heart,
      background: "from-yellow-50 via-white to-orange-50/30"
    },
    {
      id: 6,
      badge: "AI-Powered",
      title: "Smart Business",
      titleHighlight: "Intelligence",
      subtitle: "AI-driven insights and automation to optimize your business operations and growth.",
      cta: "Discover AI",
      ctaIcon: Brain,
      secondaryCta: "Try AI Now",
      secondaryIcon: Zap,
      background: "from-teal-50 via-white to-cyan-50/30"
    },
    {
      id: 7,
      badge: "Offline Ready",
      title: "Works Without",
      titleHighlight: "Internet",
      subtitle: "Continue trading and managing your business even with limited connectivity.",
      cta: "Learn More",
      ctaIcon: WifiOff,
      secondaryCta: "See Features",
      secondaryIcon: Smartphone,
      background: "from-indigo-50 via-white to-purple-50/30"
    },
    {
      id: 8,
      badge: "Multi-Currency",
      title: "54+ African",
      titleHighlight: "Currencies",
      subtitle: "Trade confidently in local currencies with real-time conversion and settlements.",
      cta: "Start Trading",
      ctaIcon: DollarSign,
      secondaryCta: "View Rates",
      secondaryIcon: CreditCard,
      background: "from-emerald-50 via-white to-green-50/30"
    },
    {
      id: 9,
      badge: "Logistics Network",
      title: "Same-Day",
      titleHighlight: "Delivery",
      subtitle: "Comprehensive logistics network across Africa with real-time tracking.",
      cta: "Track Delivery",
      ctaIcon: Truck,
      secondaryCta: "Find Drivers",
      secondaryIcon: MapPin,
      background: "from-orange-50 via-white to-red-50/30"
    },
    {
      id: 10,
      badge: "Marketing Suite",
      title: "Grow Your",
      titleHighlight: "Business",
      subtitle: "AI-powered marketing tools and analytics to reach more customers effectively.",
      cta: "Start Marketing",
      ctaIcon: BarChart3,
      secondaryCta: "View Analytics",
      secondaryIcon: TrendingUp,
      background: "from-pink-50 via-white to-rose-50/30"
    }
  ]

  // Start/stop slide interval - pause when video is playing or user interaction
  useEffect(() => {
    // Don't auto-advance slides if video is playing or user has paused
    if (!isPaused && !isVideoPlaying) {
      slideIntervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000)
    } else {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current)
        slideIntervalRef.current = null
      }
    }
    
    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current)
      }
    }
  }, [isPaused, isVideoPlaying, slides.length])

  // Start/stop video interval - only when not paused and video not playing
  useEffect(() => {
    if (!isPaused && !isVideoPlaying) {
      videoIntervalRef.current = setInterval(() => {
        setCurrentVideo((prev) => (prev + 1) % videos.length)
      }, 5000)
    } else {
      if (videoIntervalRef.current) {
        clearInterval(videoIntervalRef.current)
        videoIntervalRef.current = null
      }
    }
    
    return () => {
      if (videoIntervalRef.current) {
        clearInterval(videoIntervalRef.current)
      }
    }
  }, [isPaused, isVideoPlaying, videos.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToVideo = (index: number) => {
    setCurrentVideo(index)
    // Reset video playing state when switching videos
    setIsVideoPlaying(false)
    setIsPaused(false)
  }

  // Handle video play state
  const handleVideoPlay = useCallback(() => {
    setIsVideoPlaying(true)
    setIsPaused(true)
    // Clear any existing resume timeout
    if (videoResumeTimeoutRef.current) {
      clearTimeout(videoResumeTimeoutRef.current)
      videoResumeTimeoutRef.current = null
    }
  }, [])

  // Handle video pause/stop
  const handleVideoPause = useCallback(() => {
    setIsVideoPlaying(false)
    // Resume slides after a short delay when video is paused
    if (videoResumeTimeoutRef.current) {
      clearTimeout(videoResumeTimeoutRef.current)
    }
    videoResumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false)
    }, 2000) // Resume after 2 seconds of video being paused
  }, [])

  const handleVideoInteraction = () => {
    setIsPaused(true)
    // Clear any existing resume timeout
    if (videoResumeTimeoutRef.current) {
      clearTimeout(videoResumeTimeoutRef.current)
    }
  }

  // Listen for video events via postMessage (for embedded videos)
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Handle messages from embedded video iframes
      // Note: Facebook embeds may not send these messages, so we'll use click detection
      if (event.data && typeof event.data === 'object') {
        if (event.data.type === 'video-play') {
          handleVideoPlay()
        } else if (event.data.type === 'video-pause' || event.data.type === 'video-end') {
          handleVideoPause()
        }
      }
    }

    window.addEventListener('message', handleMessage)
    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [handleVideoPlay, handleVideoPause])

  // Monitor iframe for video activity (periodic check as fallback)
  useEffect(() => {
    if (!iframeRef.current) return

    const checkVideoActivity = setInterval(() => {
      // Since we can't directly access iframe content due to CORS,
      // we'll rely on click detection and user interaction
      // This is a fallback mechanism
    }, 1000)

    return () => {
      clearInterval(checkVideoActivity)
    }
  }, [currentVideo])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (videoResumeTimeoutRef.current) {
        clearTimeout(videoResumeTimeoutRef.current)
      }
    }
  }, [])

  // Key statistics for trust indicators
  const keyStats = [
    { icon: Users, value: '3,000+', label: 'Active Vendors', color: 'from-blue-500 to-cyan-500' },
    { icon: ShoppingCart, value: '1,500+', label: 'Active Buyers', color: 'from-green-500 to-emerald-500' },
    { icon: Globe, value: '54', label: 'Countries', color: 'from-purple-500 to-pink-500' },
    { icon: Award, value: '1st', label: 'Orange Prize', color: 'from-orange-500 to-red-500' }
  ]

  // Quick feature highlights
  const quickFeatures = [
    { icon: Shield, text: 'Bank-Grade Security', color: 'text-green-600' },
    { icon: Zap, text: 'AI-Powered', color: 'text-purple-600' },
    { icon: Globe, text: 'Pan-African', color: 'text-blue-600' }
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50/30 overflow-hidden">
      {/* Enhanced background elements with better layering */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].background} transition-all duration-1000`}></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        {/* Grid pattern overlay for texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-screen py-12 sm:py-16 lg:py-20 gap-8 lg:gap-12">
          
          {/* Left Content - Text with Better Hierarchy */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left lg:pr-8 xl:pr-12"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="max-w-2xl mx-auto lg:mx-0">
              {/* Badge with improved styling */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`badge-${currentSlide}`}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-50 to-orange-100/50 border border-orange-200/50 text-orange-700 rounded-full text-sm font-semibold mb-6 shadow-sm backdrop-blur-sm"
                >
                  <Sparkles className="w-4 h-4 mr-2 text-orange-600" />
                  {slides[currentSlide].badge}
                </motion.div>
              </AnimatePresence>

              {/* Main Heading with better typography */}
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`title-${currentSlide}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold text-gray-900 leading-[1.1] mb-6 tracking-tight"
                >
                  {slides[currentSlide].title.split(slides[currentSlide].titleHighlight)[0]}
                  <br />
                  <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-red-600 bg-clip-text text-transparent">
                    {slides[currentSlide].titleHighlight}
                  </span>
                </motion.h1>
              </AnimatePresence>

              {/* Subtitle with improved readability */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={`subtitle-${currentSlide}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 max-w-xl lg:max-w-2xl font-medium"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
              </AnimatePresence>

              {/* Quick Feature Highlights */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`features-${currentSlide}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-wrap items-center gap-4 mb-8 justify-center lg:justify-start"
                >
                  {quickFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="inline-flex items-center px-3 py-1.5 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <feature.icon className={`w-4 h-4 mr-2 ${feature.color}`} />
                      <span className="text-gray-700">{feature.text}</span>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* CTA Buttons with improved spacing */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`cta-${currentSlide}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
                >
                  {slides[currentSlide].cta === "Visit Marketplace" || slides[currentSlide].cta === "See V1.0 Now" ? (
                    <Button
                      variant="gradient"
                      size="lg"
                      icon={slides[currentSlide].ctaIcon}
                      className="w-full sm:w-auto text-base font-bold px-8 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                      onClick={() => window.open('https://annita.company.site/products', '_blank')}
                    >
                      {slides[currentSlide].cta}
                    </Button>
                  ) : slides[currentSlide].cta === "Join Waitlist" ? (
                    <Button
                      variant="gradient"
                      size="lg"
                      icon={slides[currentSlide].ctaIcon}
                      className="w-full sm:w-auto text-base font-bold px-8 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                      onClick={() => setIsDownloadModalOpen(true)}
                    >
                      {slides[currentSlide].cta}
                    </Button>
                  ) : slides[currentSlide].cta === "Learn More" ? (
                    <Button
                      variant="gradient"
                      size="lg"
                      icon={slides[currentSlide].ctaIcon}
                      className="w-full sm:w-auto text-base font-bold px-8 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                      onClick={() => window.open('/learn-more-v3', '_blank')}
                    >
                      {slides[currentSlide].cta}
                    </Button>
                  ) : slides[currentSlide].cta === "Discover AI" ? (
                    <Button
                      variant="gradient"
                      size="lg"
                      icon={slides[currentSlide].ctaIcon}
                      className="w-full sm:w-auto text-base font-bold px-8 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                      onClick={() => window.open('/discover', '_blank')}
                    >
                      {slides[currentSlide].cta}
                    </Button>
                  ) : (
                    <Button
                      variant="gradient"
                      size="lg"
                      icon={slides[currentSlide].ctaIcon}
                      className="w-full sm:w-auto text-base font-bold px-8 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                      onClick={() => setIsDownloadModalOpen(true)}
                    >
                      {slides[currentSlide].cta}
                    </Button>
                  )}
                  
                  {slides[currentSlide].secondaryCta === "Start Selling" || slides[currentSlide].secondaryCta === "Try V1.0" ? (
                    <Button
                      variant="outline"
                      size="lg"
                      icon={slides[currentSlide].secondaryIcon}
                      className="w-full sm:w-auto text-base font-semibold px-8 py-4 border-2 border-gray-300 hover:border-orange-500 hover:text-orange-600 hover:bg-orange-50 transform hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg"
                      onClick={() => window.open('https://annita.company.site/products', '_blank')}
                    >
                      {slides[currentSlide].secondaryCta}
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="lg"
                      icon={slides[currentSlide].secondaryIcon}
                      className="w-full sm:w-auto text-base font-semibold px-8 py-4 border-2 border-gray-300 hover:border-orange-500 hover:text-orange-600 hover:bg-orange-50 transform hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg"
                      onClick={() => setIsDownloadModalOpen(true)}
                    >
                      {slides[currentSlide].secondaryCta}
                    </Button>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Key Statistics - Trust Indicators */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`stats-${currentSlide}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8"
                >
                  {keyStats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="bg-white/90 backdrop-blur-md rounded-xl p-4 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className={`w-10 h-10 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mb-2`}>
                        <stat.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Content - Video Slideshow with Enhanced Design */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 flex justify-center lg:justify-end mt-8 sm:mt-12 lg:mt-0 w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative w-full max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Enhanced Video Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-white via-gray-50 to-white p-3 sm:p-4 md:p-5 lg:p-6 backdrop-blur-sm border-2 border-gray-200/50">
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10 rounded-3xl"></div>
                
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 rounded-3xl opacity-20 blur-xl"></div>

                {/* Video Content */}
                <div className="relative z-10">
                  <div 
                    className="relative w-full rounded-2xl overflow-hidden" 
                    style={{ paddingBottom: '56.25%' }}
                    onClick={handleVideoPlay}
                    onMouseEnter={() => {
                      // When user hovers over video, assume they might interact
                      setIsPaused(true)
                    }}
                    onMouseLeave={() => {
                      // Only resume if video is not playing
                      if (!isVideoPlaying) {
                        setTimeout(() => setIsPaused(false), 2000)
                      }
                    }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`video-${currentVideo}`}
                        initial={{ opacity: 0, scale: 0.95, rotateY: -5 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        exit={{ opacity: 0, scale: 1.05, rotateY: 5 }}
                        transition={{ duration: 0.6 }}
                        className="absolute top-0 left-0 w-full h-full"
                      >
                        <iframe 
                          ref={iframeRef}
                          src={videos[currentVideo].src}
                          className="w-full h-full rounded-xl"
                          style={{border:'none',overflow:'hidden'}} 
                          scrolling="no" 
                          frameBorder="0" 
                          allowFullScreen={true} 
                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                          onLoad={() => {
                            // Reset video playing state when new video loads
                            setIsVideoPlaying(false)
                            setIsPaused(false)
                          }}
                          onClick={handleVideoPlay}
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  
                  {/* Video control overlay for manual pause/resume */}
                  {isVideoPlaying && (
                    <div className="absolute bottom-4 right-4 z-20">
                      <button
                        onClick={handleVideoPause}
                        className="px-4 py-2 bg-black/70 text-white rounded-lg text-sm font-medium hover:bg-black/90 transition-all duration-300 backdrop-blur-sm"
                        title="Pause video and resume slides"
                      >
                        Resume Slides
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Enhanced Video Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToVideo(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentVideo 
                        ? 'bg-orange-500 scale-150 w-8' 
                        : 'bg-gray-400 hover:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-gray-200/50">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-orange-500 scale-150 w-8' 
                : 'bg-gray-400 hover:bg-gray-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

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
    </section>
  )
}

export default memo(HeroSection)
