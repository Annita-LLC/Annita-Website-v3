"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Download, ArrowRight } from 'lucide-react'
import DownloadChoiceModal from '@/components/ui/DownloadChoiceModal'

const CTASection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)

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
              Ready to Transform Your Business?
            </h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Join thousands of MSMEs already using Annita to grow their revenue, reach new customers, 
              and streamline their operations across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsDownloadModalOpen(true)}
                className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200"
              >
                <Download className="w-5 h-5 mr-2" />
                Download App
              </button>
              <a 
                href="/contact-sales"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200"
              >
                Contact Sales
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Download Choice Modal */}
      <DownloadChoiceModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </section>
  )
}

export default CTASection
