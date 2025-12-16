"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Heart,
  Globe,
  Building2,
  Rocket
} from 'lucide-react'

const HeroSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })


  return (
    <>
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 text-white overflow-hidden">
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
                About Annita
              </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
              Empowering <span className="text-orange-200">Africa's Future</span> Through Innovation
              </h1>

            {/* Description */}
            <p className="text-xl sm:text-2xl text-orange-100 mb-8 leading-relaxed max-w-2xl">
              Africa's first all-in-one digital platform combining e-commerce, fintech, AI, and more. Empowering MSMEs with innovative solutions and connectivity.
            </p>

            {/* Quick About Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Globe className="w-6 h-6 text-orange-200" />
                <div>
                  <div className="font-semibold text-white">Our Mission</div>
                  <div className="text-sm text-orange-200">Transforming African Business</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Heart className="w-6 h-6 text-orange-200" />
                <div>
                  <div className="font-semibold text-white">Our Values</div>
                  <div className="text-sm text-orange-200">Innovation & Impact</div>
                </div>
              </div>
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
                <h3 className="text-2xl font-bold text-white mb-2">Annita</h3>
                <p className="text-orange-200">Africa's Leading Digital Platform</p>
                </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                  <span className="text-white">Founded</span>
                  <span className="font-bold text-orange-200">2021</span>
                  </div>
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                  <span className="text-white">Mission</span>
                  <span className="font-bold text-orange-200">5M MSMEs</span>
                    </div>
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                  <span className="text-white">Coverage</span>
                  <span className="font-bold text-orange-200">54 Countries</span>
                    </div>
                </div>
              </div>
            </motion.div>
        </div>
      </div>
    </section>

    </>
  )
}

export default HeroSection
