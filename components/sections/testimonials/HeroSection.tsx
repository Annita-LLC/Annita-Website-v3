"use client"

import { motion } from 'framer-motion'
import { MessageSquare, Star, Users } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600"></div>
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            Customer <span className="text-orange-200">Testimonials</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-orange-100 max-w-4xl mx-auto mb-6 sm:mb-8">
            Real stories from businesses and individuals who have transformed their lives with Annita
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-sm sm:text-base">
            <span className="bg-white/20 px-3 sm:px-4 py-2 rounded-full">10,000+ Reviews</span>
            <span className="bg-white/20 px-3 sm:px-4 py-2 rounded-full">4.9/5 Rating</span>
            <span className="bg-white/20 px-3 sm:px-4 py-2 rounded-full">50,000+ Customers</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
