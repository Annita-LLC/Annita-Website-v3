"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, Globe, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

const MissionVisionSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-8 sm:gap-12"
        >
          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 hover:shadow-large transition-all duration-300 group"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-600 mb-3 sm:mb-4">Our Mission</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
              To deliver Africa's first all-in-one platform, seamlessly integrating e-commerce, 
              fintech, AI-driven tools, communication, marketing, logistics, and lifestyle services.
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              We empower businesses and individuals with accessible, affordable, and innovative 
              solutions, providing connectivity and convenience to drive growth and success.
            </p>
            <Button
              variant="outline"
              size="sm"
              icon={ArrowRight}
              className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 hover:shadow-large transition-all duration-300 group"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-600 mb-3 sm:mb-4">Our Vision</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
              To empower 5 million Micro, Small, and Medium Enterprises (MSMEs) across Africa 
              and beyond by 2029, catalyzing global economic growth and job creation.
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              With a special focus on underserved communities, including rural and women-led 
              businesses, we aim to transform Africa's economic landscape through digital innovation.
            </p>
            <Button
              variant="outline"
              size="sm"
              icon={ArrowRight}
              className="text-green-600 border-green-600 hover:bg-green-600 hover:text-white"
            >
              Our Goals
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default MissionVisionSection
