"use client"

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Star } from 'lucide-react'

// Defer loading waitlist modal until interaction
const WaitlistForm = dynamic(() => import('@/components/ui/WaitlistForm'), {
  ssr: false,
  loading: () => null,
})

const CTASectionInner = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-br from-gray-50 to-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
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
              Experience our <strong>upgraded marketplace V1.0</strong> with new features - no longer in beta!
              Create your account today. When Annita 3.0 launches next year, existing v1.0 users will be automatically migrated -
              <strong> no re-onboarding required!</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://shop.an-nita.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Create Account & Try V1.0 Now
              </a>
              <button
                onClick={() => setIsWaitlistOpen(true)}
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200"
              >
                <Star className="w-5 h-5 mr-2" />
                Join V3.0 Waitlist
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <WaitlistForm
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </section>
  )
}

export default CTASectionInner

