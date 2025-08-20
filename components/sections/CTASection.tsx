'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
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

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Grow Your Business',
      description: 'Increase revenue by up to 300% with our platform'
    },
    {
      icon: Globe,
      title: 'Reach Global Markets',
      description: 'Access customers across 54 African countries'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Bank-level security with 99.9% uptime guarantee'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for your success'
    }
  ]



  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 relative overflow-hidden">
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
          className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
      </div>

              <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-400 mb-4 sm:mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto mb-6 sm:mb-8">
            Join thousands of MSMEs already using Annita to grow their revenue, 
            reach new customers, and streamline their operations across Africa.
          </p>
          

        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="text-center group"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-orange-400 mb-1 sm:mb-2">{benefit.title}</h4>
              <p className="text-white/80 text-xs sm:text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>



        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/20">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-400 mb-4 sm:mb-6">
              Need Help Getting Started?
            </h3>
            <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8">
              Our team is here to help you every step of the way. 
              Contact us for personalized assistance and expert guidance.
            </p>
            


            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                variant="gradient"
                size="lg"
                icon={Download}
                className="text-base sm:text-lg font-bold shadow-2xl hover:shadow-primary-500/25 transform hover:-translate-y-1 transition-all duration-300"
              >
                Download App
              </Button>
              <Button
                variant="glass"
                size="lg"
                icon={Play}
                className="text-base sm:text-lg font-bold backdrop-blur-xl shadow-2xl hover:shadow-white/10 transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Started Free
              </Button>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  )
}

export default CTASection
