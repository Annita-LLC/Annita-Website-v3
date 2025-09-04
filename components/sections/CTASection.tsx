"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Download, ArrowRight, ExternalLink, Star } from 'lucide-react'

const CTASection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center p-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl text-white"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              🚨 Something BIG is Coming - Annita 3.0
            </h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Experience our live marketplace V1.0 today, and join the waitlist for the revolutionary V3.0 - 
              offline-ready, AI-powered, and built for everyone in Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://annita.company.site/products"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Try Marketplace V1.0
              </a>
              <a 
                href="/download"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200"
              >
                <Star className="w-5 h-5 mr-2" />
                Join V3.0 Waitlist
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
