"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
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

  const stats = [
    { number: '3,000+', label: 'Active Vendors', icon: Users, color: 'from-blue-500 to-cyan-500' },
    { number: '1,500+', label: 'Active Buyers', icon: Users, color: 'from-green-500 to-emerald-500' },
    { number: '400%', label: 'Growth Rate', icon: TrendingUp, color: 'from-purple-500 to-pink-500' },
    { number: '1st', label: 'Orange Prize', icon: Award, color: 'from-orange-500 to-red-500' }
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
                <Building2 className="w-4 h-4 mr-2" />
                About Annita LLC
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6">
                Empowering <span className="text-orange-600">Africa's Future</span> Through Innovation
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                We're building Africa's first all-in-one digital platform, seamlessly integrating 
                e-commerce, fintech, AI-driven tools, and lifestyle services to empower 5 million 
                MSMEs across Africa by 2029.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  variant="gradient"
                  size="xl"
                  icon={Play}
                  className="text-lg font-bold shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Watch Our Story
                </Button>
                <Button
                  variant="glass"
                  size="xl"
                  icon={Download}
                  className="text-lg font-bold backdrop-blur-xl shadow-2xl hover:shadow-white/10 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Download App
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Globe className="w-4 h-4 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Rocket className="w-4 h-4 text-white" />
                </div>
                
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Building2 className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Annita LLC</h3>
                  <p className="text-gray-600 mb-6">
                    Africa's leading all-in-one digital platform empowering businesses and individuals
                  </p>
                  <div className="flex justify-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">2021</div>
                      <div className="text-sm text-gray-600">Founded</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">5M</div>
                      <div className="text-sm text-gray-600">Target MSMEs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">2029</div>
                      <div className="text-sm text-gray-600">Vision</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
