'use client'

import { useState, useEffect, useRef, memo } from 'react'
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
  BarChart3
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
      subtitle: "Built for African businesses. Cross-border trade, institutional backing, and seamless integration.",
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
      subtitle: "Built for African businesses. Institutional backing and a connected ecosystem.",
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

  // Start/stop slide interval based on pause state and video playing state
  useEffect(() => {
    // Pause slides if manually paused OR if video is playing
    if (!isPaused && !isVideoPlaying) {
      slideIntervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000) // Increased from 3000ms to 5000ms
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

  // Start/stop video interval based on pause state - reduced frequency for better performance
  useEffect(() => {
    if (!isPaused) {
      videoIntervalRef.current = setInterval(() => {
        setCurrentVideo((prev) => (prev + 1) % videos.length)
      }, 5000) // Increased from 3000ms to 5000ms
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
  }, [isPaused, videos.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToVideo = (index: number) => {
    setCurrentVideo(index)
  }

  const handleVideoInteraction = () => {
    // When video is interacted with, assume it's playing
    setIsVideoPlaying(true)
    // Clear any existing resume timeout
    if (videoResumeTimeoutRef.current) {
      clearTimeout(videoResumeTimeoutRef.current)
    }
  }

  const handleVideoPause = () => {
    // When mouse leaves video area, wait a bit before assuming video is paused
    // This prevents false positives from quick mouse movements
    if (videoResumeTimeoutRef.current) {
      clearTimeout(videoResumeTimeoutRef.current)
    }
    videoResumeTimeoutRef.current = setTimeout(() => {
      setIsVideoPlaying(false)
    }, 1000) // Wait 1 second before assuming video is paused
  }

  // Handle scroll to resume slides
  useEffect(() => {
    const handleScroll = () => {
      // When user scrolls, pause video (resume slides)
      setIsVideoPlaying(false)
      if (videoResumeTimeoutRef.current) {
        clearTimeout(videoResumeTimeoutRef.current)
        videoResumeTimeoutRef.current = null
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (videoResumeTimeoutRef.current) {
        clearTimeout(videoResumeTimeoutRef.current)
      }
    }
  }, [])

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Subtle gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].background}`}></div>
      
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left lg:pr-16"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="max-w-2xl mx-auto lg:mx-0">
              {/* Badge */}
              <AnimatePresence mode="wait">
              <motion.div
                  key={`badge-${currentSlide}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                className="inline-flex items-center px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-sm font-medium mb-8"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                  {slides[currentSlide].badge}
          </motion.div>
              </AnimatePresence>

              {/* Main Heading */}
              <AnimatePresence mode="wait">
              <motion.h1
                  key={`title-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6"
              >
                  {slides[currentSlide].title.split(slides[currentSlide].titleHighlight)[0]}
                <br />
                  <span className="text-orange-600">{slides[currentSlide].titleHighlight}</span>
              </motion.h1>
              </AnimatePresence>

              {/* Subtitle */}
              <AnimatePresence mode="wait">
              <motion.p
                  key={`subtitle-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8 max-w-xl lg:max-w-none"
              >
                  {slides[currentSlide].subtitle}
              </motion.p>
              </AnimatePresence>

              {/* CTA Buttons */}
              <AnimatePresence mode="wait">
          <motion.div
                  key={`cta-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                  {slides[currentSlide].cta === "Visit Marketplace" || slides[currentSlide].cta === "See V1.0 Now" ? (
                    <Button
                      variant="gradient"
                      size="lg"
                      icon={slides[currentSlide].ctaIcon}
                      className="w-full sm:w-auto text-base font-semibold px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                      onClick={() => window.open('https://annita.company.site/products', '_blank')}
                    >
                      {slides[currentSlide].cta}
                    </Button>
                  ) : slides[currentSlide].cta === "Join Waitlist" ? (
                    <Button
                      variant="gradient"
                      size="lg"
                      icon={slides[currentSlide].ctaIcon}
                      className="w-full sm:w-auto text-base font-semibold px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                      onClick={() => setIsDownloadModalOpen(true)}
                    >
                      {slides[currentSlide].cta}
                    </Button>
                  ) : slides[currentSlide].cta === "Learn More" ? (
                    <Button
                      variant="gradient"
                      size="lg"
                      icon={slides[currentSlide].ctaIcon}
                      className="w-full sm:w-auto text-base font-semibold px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                      onClick={() => window.open('/learn-more-v3', '_blank')}
                    >
                      {slides[currentSlide].cta}
                    </Button>
                  ) : slides[currentSlide].cta === "Discover AI" ? (
                    <Button
                      variant="gradient"
                      size="lg"
                      icon={slides[currentSlide].ctaIcon}
                      className="w-full sm:w-auto text-base font-semibold px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                      onClick={() => window.open('/discover', '_blank')}
                    >
                      {slides[currentSlide].cta}
                    </Button>
                  ) : (
                  <Button
                    variant="gradient"
                    size="lg"
                    icon={slides[currentSlide].ctaIcon}
                    className="w-full sm:w-auto text-base font-semibold px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
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
                      className="w-full sm:w-auto text-base font-semibold px-8 py-4 border-2 border-gray-300 hover:border-orange-500 hover:text-orange-600 transform hover:-translate-y-1 transition-all duration-300"
                      onClick={() => window.open('https://annita.company.site/products', '_blank')}
                    >
                      {slides[currentSlide].secondaryCta}
                  </Button>
                  ) : (
                  <Button
                    variant="outline"
                    size="lg"
                    icon={slides[currentSlide].secondaryIcon}
                    className="w-full sm:w-auto text-base font-semibold px-8 py-4 border-2 border-gray-300 hover:border-orange-500 hover:text-orange-600 transform hover:-translate-y-1 transition-all duration-300"
                    onClick={() => setIsDownloadModalOpen(true)}
                  >
                    {slides[currentSlide].secondaryCta}
                  </Button>
                  )}
              </motion.div>
              </AnimatePresence>

        </div>
          </motion.div>

          {/* Right Content - Video Slideshow */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 flex justify-center lg:justify-end mt-8 sm:mt-12 lg:mt-0 w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative w-full max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Video Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-50 to-white p-2 sm:p-3 md:p-4 lg:p-6 backdrop-blur-sm border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-blue-500/5 rounded-2xl"></div>
                

                {/* Video Content */}
                <div className="relative z-10">
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`video-${currentVideo}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        className="absolute top-0 left-0 w-full h-full"
                        onMouseEnter={handleVideoInteraction}
                        onMouseLeave={handleVideoPause}
                        onClick={handleVideoInteraction}
                      >
                        <iframe 
                          src={videos[currentVideo].src}
                          className="w-full h-full rounded-xl"
                          style={{border:'none',overflow:'hidden'}} 
                          scrolling="no" 
                          frameBorder="0" 
                          allowFullScreen={true} 
                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                          onLoad={handleVideoInteraction}
                          onMouseEnter={handleVideoInteraction}
                          onFocus={handleVideoInteraction}
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

              </div>

              {/* Video Indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToVideo(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentVideo 
                        ? 'bg-orange-500 scale-125' 
                        : 'bg-gray-400 hover:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>


      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-orange-500 scale-125' 
                : 'bg-gray-400 hover:bg-gray-600'
            }`}
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
