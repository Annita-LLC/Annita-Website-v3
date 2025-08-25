"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Download, ArrowRight } from 'lucide-react'

const CTASection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your <span className="text-orange-600">Business?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join thousands of MSMEs already using Annita to grow their revenue, reach new customers, 
              and streamline their operations across Africa.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="/download"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Download className="w-5 h-5 mr-2" />
              Download App
            </a>
            <a 
              href="/contact-sales"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-orange-600 text-orange-600 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            <p className="text-gray-500 text-sm">
              Need Help Getting Started? Our team is here to help you every step of the way.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
