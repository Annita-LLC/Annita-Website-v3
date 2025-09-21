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
      <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-cyan-500/10 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-500/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-purple-500/10 rounded-full animate-bounce delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center bg-blue-100/10 backdrop-blur-sm text-blue-300 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-blue-500/20"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Join Africa's Leading Digital Ecosystem
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Partner with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Annita</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed max-w-4xl mx-auto"
            >
              Transform how businesses operate across Africa. Join our ecosystem of innovators, 
              entrepreneurs, and visionaries building the future of digital commerce.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                variant="gradient"
                size="xl"
                icon={Rocket}
                className="text-lg font-bold shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
                onClick={() => window.location.href = '/partners/apply'}
              >
                Become a Partner
              </Button>
              <Button
                variant="glass"
                size="xl"
                icon={ExternalLink}
                className="text-lg font-bold backdrop-blur-xl shadow-2xl hover:shadow-white/10 transform hover:-translate-y-1 transition-all duration-300"
                onClick={() => window.open('https://annita.company.site/products', '_blank')}
              >
                Try V1.0 Marketplace
              </Button>
            </motion.div>
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
