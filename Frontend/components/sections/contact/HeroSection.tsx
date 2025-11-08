"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight
} from 'lucide-react'
import Button from '@/components/ui/Button'

const HeroSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-20 bg-gradient-to-r from-primary-500 to-accent-500 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <MessageSquare className="w-10 h-10" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Get in <span className="text-orange-500">Touch</span>
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 mb-8">
                We're here to help. Contact our team for support, partnerships, or any questions about Annita.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="white"
                  size="xl"
                  icon={ArrowRight}
                  className="text-lg font-bold shadow-2xl hover:shadow-white/25 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Start Chat
                </Button>
                <Button
                  variant="glass"
                  size="xl"
                  icon={Phone}
                  className="text-lg font-bold backdrop-blur-xl shadow-2xl hover:shadow-white/10 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Call Us
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="relative inline-block">
                <div className="w-80 h-96 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 p-8 shadow-2xl">
                  <div className="w-64 h-80 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl mx-auto flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-white text-lg font-semibold mb-2">Contact Support</div>
                      <div className="text-white/70 text-sm">We'll get back to you within 24 hours</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
