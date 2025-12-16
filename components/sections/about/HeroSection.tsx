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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Content */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
            {/* Badge */}
            <div className="inline-flex items-center px-3 sm:px-6 py-2 sm:py-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold mb-4 sm:mb-6 lg:mb-8 shadow-lg border border-white/30">
              <Building2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                About Annita
              </div>
              
            {/* Heading */}
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
              Empowering <span className="text-orange-200">Africa's Future</span> Through Innovation
              </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-orange-100 mb-6 sm:mb-8 leading-relaxed max-w-2xl">
              Africa's first all-in-one digital platform combining e-commerce, fintech, AI, and more. Empowering MSMEs with innovative solutions and connectivity.
            </p>


            </motion.div>

        </div>
      </div>
    </section>

    </>
  )
}

export default HeroSection
