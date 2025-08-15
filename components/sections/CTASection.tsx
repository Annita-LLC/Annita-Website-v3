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
  CheckCircle,
  Star,
  Award,
  Heart
} from 'lucide-react'

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

  const nextSteps = [
    {
      icon: Download,
      title: 'Download App',
      description: 'Get started with our mobile app',
      action: 'Download Now',
      color: 'from-primary-500 to-secondary-500'
    },
    {
      icon: Play,
      title: 'Watch Demo',
      description: 'See how Annita works in action',
      action: 'Watch Demo',
      color: 'from-accent-500 to-warning-500'
    },
    {
      icon: MessageSquare,
      title: 'Contact Sales',
      description: 'Talk to our business development team',
      action: 'Get in Touch',
      color: 'from-green-500 to-emerald-500'
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8">
            Join thousands of MSMEs already using Annita to grow their revenue, 
            reach new customers, and streamline their operations across Africa.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80 mb-8">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>3,000+ Active Vendors</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>90% Satisfaction Rate</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>24/7 Customer Support</span>
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
              <p className="text-white/80 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-12">
            Get Started Today
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nextSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-white/80 mb-6">{step.description}</p>
                <button className={`w-full btn-lg bg-gradient-to-r ${step.color} text-white hover:shadow-lg transition-all duration-300 group`}>
                  {step.action}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Need Help Getting Started?
            </h3>
            <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
              Our team is here to help you every step of the way. 
              Contact us for personalized assistance and expert guidance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-white" />
                <div className="text-left">
                  <div className="text-white font-medium">Call Us</div>
                  <div className="text-white/80 text-sm">+234 123 456 7890</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-white" />
                <div className="text-left">
                  <div className="text-white font-medium">Email Us</div>
                  <div className="text-white/80 text-sm">contact@annita.com</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MessageSquare className="w-6 h-6 text-white" />
                <div className="text-left">
                  <div className="text-white font-medium">Live Chat</div>
                  <div className="text-white/80 text-sm">Available 24/7</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg shadow-2xl hover:shadow-white/25 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group">
                <Download className="w-5 h-5 mr-2" />
                Download App
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold text-lg backdrop-blur-xl shadow-2xl hover:shadow-white/10 hover:bg-white hover:text-primary-600 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <Heart className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Africa's Digital Revolution
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Be part of the transformation that's empowering millions of African businesses 
              to thrive in the global digital economy.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>#1 Digital Platform in Africa</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>Orange Social Venture Prize Winner</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span>300% Average Revenue Growth</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
