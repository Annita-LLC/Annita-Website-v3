"use client"

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  ArrowRight,
  Download,
  Play,
  Users,
  Globe,
  Mail,
  CheckCircle
} from 'lucide-react'
import Button from '@/components/ui/Button'
import WaitlistForm from '@/components/ui/WaitlistForm'

const CTASection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Digital Experience?
          </h2>
          <p className="text-xl sm:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Join millions of users across Africa who are already using Annita to shop, pay, 
            and grow their businesses with our all-in-one platform.
          </p>

          {/* Waitlist CTA */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-4">🚀 Be First to Experience Annita v3.0</h3>
            <p className="text-orange-100 mb-6">
              Join the waitlist and get early access to revolutionary offline functionality, AI business tools, and enhanced features.
            </p>
            
            <Button
              onClick={() => setIsWaitlistOpen(true)}
              variant="white"
              size="lg"
              icon={Mail}
              className="font-semibold"
            >
              Join Waitlist
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="white"
              size="xl"
              icon={Download}
              className="text-lg font-bold shadow-2xl hover:shadow-white/25 transform hover:-translate-y-1 transition-all duration-300 opacity-60 cursor-not-allowed"
            >
              Coming Soon
            </Button>
            <Button
              variant="glass"
              size="xl"
              icon={Play}
              className="text-lg font-bold backdrop-blur-xl shadow-2xl hover:shadow-white/10 transform hover:-translate-y-1 transition-all duration-300"
              onClick={() => window.location.href = '/demo'}
            >
              Watch Demo
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Waitlist Form Modal */}
      <WaitlistForm 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </section>
  )
}

export default CTASection
