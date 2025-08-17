"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const CTASection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-500 to-orange-600">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Join Our Happy Customers
          </h2>
          <p className="text-lg sm:text-xl text-orange-100 max-w-3xl mx-auto mb-8">
            Start your journey with Annita and become part of our success story
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-orange-50 transition-colors duration-200">
              Get Started Free
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors duration-200">
              Contact Sales
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
