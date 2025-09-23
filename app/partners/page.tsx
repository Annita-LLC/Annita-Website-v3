'use client'

import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  UserPlus, 
  Users, 
  Globe, 
  Award, 
  CheckCircle,
  ArrowRight,
  Download,
  MessageSquare,
  Building2,
  Zap,
  Star,
  TrendingUp,
  Play,
  ExternalLink,
  Sparkles,
  Target,
  Shield,
  Rocket
} from 'lucide-react'
import Button from '@/components/ui/Button'
import WaitlistForm from '@/components/ui/WaitlistForm'


const PartnersPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  const partnerTypes = [
    {
      title: 'Technology Partners',
      description: 'Integrate your technology with Annita\'s platform',
      icon: Zap,
      benefits: [
        'API access and documentation',
        'Joint go-to-market opportunities',
        'Technical support and training',
        'Revenue sharing model'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Reseller Partners',
      description: 'Sell Annita solutions to your customers',
      icon: Users,
      benefits: [
        'Competitive commission rates',
        'Marketing materials and support',
        'Dedicated partner manager',
        'Training and certification'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'System Integrators',
      description: 'Build custom solutions for enterprise clients',
      icon: Building2,
      benefits: [
        'Custom development support',
        'Enterprise sales opportunities',
        'Technical consulting services',
        'White-label options'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Strategic Partners',
      description: 'Joint ventures and strategic collaborations',
      icon: UserPlus,
      benefits: [
        'Exclusive market access',
        'Joint product development',
        'Shared resources and expertise',
        'Long-term partnership benefits'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ]


  const partnershipBenefits = [
    {
      icon: TrendingUp,
      title: 'Revenue Growth',
      description: 'Access to new markets and revenue streams through our platform'
    },
    {
      icon: Globe,
      title: 'Market Expansion',
      description: 'Expand your reach across Africa with our established network'
    },
    {
      icon: Star,
      title: 'Brand Recognition',
      description: 'Associate with Africa\'s leading digital platform'
    },
    {
      icon: Users,
      title: 'Customer Access',
      description: 'Connect with millions of MSMEs across the continent'
    }
  ]


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 sm:py-24 lg:py-28 bg-gradient-to-br from-gray-50 via-orange-50 to-orange-100 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200/30 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-orange-300/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-orange-400/25 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 right-1/3 w-8 h-8 bg-orange-500/20 rounded-full animate-bounce delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 text-sm font-semibold mb-8 shadow-lg border border-orange-200">
                <Sparkles className="w-5 h-5 mr-2" />
                Join Africa's Leading Digital Ecosystem
              </div>
              
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Partner with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-700">Annita</span>
              </h1>
              
              {/* Description */}
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
                Transform how businesses operate across Africa. Join our ecosystem of innovators, 
                entrepreneurs, and visionaries building the future of digital commerce.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="/partners/apply"
                  className="group bg-gradient-to-r from-orange-600 to-orange-700 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-orange-700 hover:to-orange-800 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-2 hover:scale-105"
                >
                  <UserPlus className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  Become a Partner
                </a>
                <a
                  href="https://annita.company.site/products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-2 border-orange-600 text-orange-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-orange-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 hover:scale-105"
                >
                  <ExternalLink className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  Try V1.0 Now
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Trusted by 1000+ Partners</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>24/7 Partner Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Revenue Sharing Model</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Types Section */}
      <section className="py-16 sm:py-20 bg-white" ref={ref}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Partnership <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Opportunities</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the partnership model that best fits your business goals and expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
                <ul className="space-y-3 mb-8">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Benefits Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Partner with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Annita</span>?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the benefits of joining Africa's most innovative digital ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Partnership Process Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How to Become a <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Partner</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to join our partner ecosystem and start growing together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Apply", description: "Submit your partnership application online", icon: Target },
              { step: 2, title: "Review", description: "Our team reviews your application", icon: Shield },
              { step: 3, title: "Onboard", description: "Complete training and setup process", icon: Users },
              { step: 4, title: "Launch", description: "Start growing with Annita", icon: Rocket }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center p-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl text-white"
            >
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Partner with Annita?
              </h3>
              <p className="text-lg text-orange-100 mb-8 max-w-4xl mx-auto">
                Join our ecosystem of innovators, entrepreneurs, and visionaries building the future of digital commerce across Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/partners/apply"
                  className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-colors duration-200 shadow-lg"
                >
                  <UserPlus className="w-5 h-5 mr-2" />
                  Become a Partner
                </a>
                <a 
                  href="https://annita.company.site/products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Try V1.0 Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Waitlist Form Modal */}
        <WaitlistForm 
          isOpen={isWaitlistOpen} 
          onClose={() => setIsWaitlistOpen(false)} 
        />
      </section>
    </div>
  )
}

export default PartnersPage
