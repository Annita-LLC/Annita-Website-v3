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
  Rocket,
  Video,
  Brain
} from 'lucide-react'
import Button from '@/components/ui/Button'
import Link from 'next/link'

const HeroSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "0px" })
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      badge: "Africa's First All-in-One Platform",
      title: "Ready to Transform Your Business?",
      titleHighlight: "Your Business?",
      subtitle: "We empower MSMEs and individuals with innovative solutions, connectivity, and convenience.",
      cta: "Get Started Free",
      ctaIcon: Play,
      secondaryCta: "Download App",
      secondaryIcon: Download,
      background: "from-gray-50 via-white to-orange-50/30"
    },
    {
      id: 2,
      badge: "Seamless Digital Commerce",
      title: "Everything You Need in One Place",
      titleHighlight: "One Place",
      subtitle: "From marketplace to payments, logistics to AI - comprehensive digital solutions for modern businesses.",
      cta: "Explore Features",
      ctaIcon: Globe,
      secondaryCta: "Watch Demo",
      secondaryIcon: Video,
      background: "from-blue-50 via-white to-purple-50/30"
    },
    {
      id: 3,
      badge: "Trusted by Millions",
      title: "Join Thousands of Businesses",
      titleHighlight: "Businesses",
      subtitle: "Join thousands of businesses already transforming their operations with Annita's innovative platform.",
      cta: "Join Now",
      ctaIcon: Users,
      secondaryCta: "Learn More",
      secondaryIcon: ArrowRight,
      background: "from-green-50 via-white to-teal-50/30"
    },
    {
      id: 4,
      badge: "AI-Powered Solutions",
      title: "Intelligent Business Tools",
      titleHighlight: "Business Tools",
      subtitle: "Leverage cutting-edge AI technology to automate processes, gain insights, and scale your business efficiently.",
      cta: "Discover AI",
      ctaIcon: Brain,
      secondaryCta: "See Examples",
      secondaryIcon: Eye,
      background: "from-purple-50 via-white to-pink-50/30"
    },
    {
      id: 5,
      badge: "Pan-African Network",
      title: "Connect Across the Continent",
      titleHighlight: "the Continent",
      subtitle: "Access markets across Africa with our extensive network of partners, suppliers, and customers.",
      cta: "Explore Network",
      ctaIcon: Globe,
      secondaryCta: "Partner With Us",
      secondaryIcon: Heart,
      background: "from-yellow-50 via-white to-orange-50/30"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

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
                  <Link href="/download">
                    <Button
                      variant="gradient"
                      size="lg"
                      icon={slides[currentSlide].ctaIcon}
                      className="w-full sm:w-auto text-base font-semibold px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                    >
                      {slides[currentSlide].cta}
                    </Button>
                  </Link>
                  <Link href="/download">
                    <Button
                      variant="outline"
                      size="lg"
                      icon={slides[currentSlide].secondaryIcon}
                      className="w-full sm:w-auto text-base font-semibold px-8 py-4 border-2 border-gray-300 hover:border-orange-500 hover:text-orange-600 transform hover:-translate-y-1 transition-all duration-300"
                    >
                      {slides[currentSlide].secondaryCta}
                    </Button>
                  </Link>
                </motion.div>
              </AnimatePresence>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-gray-500"
              >
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  <span>3,000+ Active Users</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  <span>Bank-Level Security</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-4 h-4 mr-2" />
                  <span>3 African Countries</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 flex justify-center lg:justify-end mt-8 sm:mt-12 lg:mt-0 w-full"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-50 to-white p-2 sm:p-3 md:p-4 lg:p-6 backdrop-blur-sm border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-blue-500/5 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe 
                      src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Freel%2F1141319817913700%2F&show_text=false&width=560&t=0" 
                      className="absolute top-0 left-0 w-full h-full rounded-xl"
                      style={{border:'none',overflow:'hidden'}} 
                      scrolling="no" 
                      frameBorder="0" 
                      allowFullScreen={true} 
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 backdrop-blur-sm text-gray-700 hover:bg-white/20 transition-all duration-300 shadow-lg"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 backdrop-blur-sm text-gray-700 hover:bg-white/20 transition-all duration-300 shadow-lg"
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
                ? 'bg-orange-500 scale-125' 
                : 'bg-gray-400 hover:bg-gray-600'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection
