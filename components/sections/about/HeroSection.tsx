"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { 
  Heart, 
  Globe, 
  Users, 
  Award, 
  Target,
  ArrowRight,
  Play,
  Download,
  Building2,
  Rocket,
  TrendingUp
} from 'lucide-react'
import Button from '@/components/ui/Button'

const HeroSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const router = useRouter()

  const stats = [
    { number: '3,000+', label: 'Active Vendors', icon: Users, color: 'from-blue-500 to-cyan-500' },
    { number: '1,500+', label: 'Active Buyers', icon: Users, color: 'from-green-500 to-emerald-500' },
    { number: '400%', label: 'Growth Rate', icon: TrendingUp, color: 'from-purple-500 to-pink-500' },
    { number: '1st', label: 'Orange Prize', icon: Award, color: 'from-orange-500 to-red-500' }
  ]

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-1/3 w-12 h-12 bg-white/10 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-8 shadow-lg border border-white/30">
              <Building2 className="w-5 h-5 mr-2" />
                About Annita LLC
              </div>
              
            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              Empowering <span className="text-orange-200">Africa's Future</span> Through Innovation
              </h1>
              
            {/* Description */}
            <p className="text-xl sm:text-2xl text-orange-100 mb-8 leading-relaxed max-w-2xl">
              Annita is Africa's first all-in-one digital platform, combining e-commerce, fintech, AI, communication, marketing, logistics, and more into a single ecosystem. We empower MSMEs and individuals with innovative solutions, connectivity, and convenience.
            </p>

              {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                  <div className="text-2xl sm:text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-orange-200">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="gradient"
                size="xl"
                icon={Play}
                onClick={() => router.push('/demo')}
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-orange-50 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Demo
              </Button>
              <Button
                variant="glass"
                size="xl"
                icon={Download}
                onClick={() => router.push('/download')}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-orange-600 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Join Waitlist
              </Button>
              </div>
            </motion.div>

          {/* Visualization Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Annita LLC</h3>
                <p className="text-orange-200">Africa's leading all-in-one digital platform</p>
                </div>
                
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                  <span className="text-white">Founded</span>
                  <span className="font-bold text-orange-200">2021</span>
                  </div>
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                  <span className="text-white">Target MSMEs</span>
                  <span className="font-bold text-orange-200">5M</span>
                    </div>
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                  <span className="text-white">Vision</span>
                  <span className="font-bold text-orange-200">2035</span>
                    </div>
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                  <span className="text-white">Orange Prize</span>
                  <span className="font-bold text-green-300">1st</span>
                  </div>
                </div>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
