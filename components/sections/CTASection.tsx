'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { 
  Download, 
  ArrowRight, 
  Play, 
  Phone, 
  Mail, 
  MessageSquare,
  Globe,
  Users,
  TrendingUp,
  Shield,
  CheckCircle
} from 'lucide-react'
import Button from '@/components/ui/Button'

const CTASection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })





  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 lg:mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Join thousands of MSMEs already using Annita to grow their revenue, 
            reach new customers, and streamline their operations across Africa.
          </p>
          

        </motion.div>





        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-10 lg:p-12 border border-white/10 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 lg:mb-6">
                  Need Help Getting Started?
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                  Our team is here to help you every step of the way. 
                  Contact us for personalized assistance and expert guidance.
                </p>
              </div>

              {/* Right Content - Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <Link href="/download" className="w-full sm:w-auto">
                  <Button
                    variant="gradient"
                    size="lg"
                    icon={Download}
                    className="w-full sm:w-auto text-sm sm:text-base font-semibold shadow-xl hover:shadow-orange-500/25 transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Download App
                  </Button>
                </Link>
                <Link href="/download" className="w-full sm:w-auto">
                  <Button
                    variant="glass"
                    size="lg"
                    icon={Play}
                    className="w-full sm:w-auto text-sm sm:text-base font-semibold backdrop-blur-xl shadow-xl hover:shadow-white/10 transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Get Started Free
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  )
}

export default CTASection
