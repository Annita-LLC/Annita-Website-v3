'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  ShoppingCart, 
  CreditCard, 
  Truck, 
  MessageSquare, 
  BarChart3,
  Shield,
  Zap,
  Globe,
  Users,
  Smartphone,
  Wifi,
  Lock,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Download,
  Brain
} from 'lucide-react'
import Button from '@/components/ui/Button'

const FeaturesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const mainFeatures = [
    {
      icon: ShoppingCart,
      title: 'Annita Marketplace',
      subtitle: 'Multivendor E-commerce Platform',
      description: 'Africa\'s simplest multivendor marketplace for MSMEs and individuals. Easy onboarding, product listings, and search functionality.',
      features: [
        'Easy onboarding for offline vendors',
        'Product listings and search',
        'Multivendor support',
        'Rural penetration through agent networks'
      ],
      color: 'from-blue-500 to-cyan-500',
      gradient: 'bg-gradient-to-br from-blue-50 to-cyan-50'
    },
    {
      icon: CreditCard,
      title: 'AnnitaPay',
      subtitle: 'Secure Payment Gateway',
      description: 'A comprehensive payment solution with escrow services and digital wallet. Secure transactions with fraud reduction.',
      features: [
        'Secure escrow transactions',
        'Fraud reduction system',
        'Multi-currency support',
        'Mobile money integration'
      ],
      color: 'from-green-500 to-emerald-500',
      gradient: 'bg-gradient-to-br from-green-50 to-emerald-50'
    },
    {
      icon: Truck,
      title: 'Annita Logistics',
      subtitle: 'On-Demand Delivery Network',
      description: 'Streamlined logistics for MSMEs without their own fleets. Real-time tracking and same-day delivery options.',
      features: [
        'Vendor integration',
        'Same-day/next-day delivery',
        'Real-time tracking',
        'Warehousing & inventory management'
      ],
      color: 'from-orange-500 to-red-500',
      gradient: 'bg-gradient-to-br from-orange-50 to-red-50'
    },
    {
      icon: MessageSquare,
      title: 'Annita Connect',
      subtitle: 'Communication & Marketing Suite',
      description: 'Lowers customer acquisition costs through affordable, data-backed marketing and customer engagement tools.',
      features: [
        'Targeted advertising',
        'Customer engagement tools',
        'AI-driven insights',
        'Analytics and reporting'
      ],
      color: 'from-purple-500 to-pink-500',
      gradient: 'bg-gradient-to-br from-purple-50 to-pink-50'
    },
    {
      icon: Brain,
      title: 'Annita AI',
      subtitle: 'Artificial Intelligence Platform',
      description: 'Intelligent automation and AI-powered insights to optimize business operations and drive growth for MSMEs.',
      features: [
        'AI-powered business insights',
        'Automated customer support',
        'Predictive analytics',
        'Smart inventory management'
      ],
      color: 'from-teal-500 to-cyan-500',
      gradient: 'bg-gradient-to-br from-teal-50 to-cyan-50'
    }
  ]

  const platformFeatures = [
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Optimized for basic smartphones with low-data mode for rural users',
      metric: '99%'
    },
    {
      icon: Wifi,
      title: 'Offline Capabilities',
      description: 'Works in low-connectivity environments with offline sync',
      metric: '24/7'
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and fraud protection systems',
      metric: '99.9%'
    },
    {
      icon: TrendingUp,
      title: 'AI-Powered Analytics',
      description: 'Intelligent insights for business optimization and growth',
      metric: '75%'
    }
  ]

  const benefits = [
    {
      icon: Users,
      title: 'Financial Inclusion',
      description: 'Enabling underbanked communities to access digital financial services'
    },
    {
      icon: Globe,
      title: 'Cross-Border Trade',
      description: 'AfCFTA compliance enabling seamless cross-border transactions'
    },
    {
      icon: Star,
      title: 'Women Empowerment',
      description: 'Special focus on women-led businesses and rural entrepreneurs'
    },
    {
      icon: Zap,
      title: 'Operational Efficiency',
      description: 'Consolidated tools reducing costs and complexity for MSMEs'
    }
  ]

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
              <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-600 mb-4 sm:mb-6">
            Complete <span className="text-orange-500">Digital Ecosystem</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
            Everything MSMEs need to succeed in the digital economy, integrated into one powerful platform 
            designed specifically for Africa's unique challenges and opportunities.
          </p>
        </motion.div>

        {/* Main Features */}
        <div className="space-y-12 mb-20">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-orange-600 mb-2">
                  {feature.title}
                </h3>
                <div className="text-lg font-medium text-primary-600 mb-4">
                  {feature.subtitle}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-3 mb-8">
                  {feature.features.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <button className="btn-primary group">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Visual */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className={`${feature.gradient} rounded-3xl p-8 lg:p-12 relative overflow-hidden`}>
                  {/* Mockup Interface */}
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-soft border border-gray-200">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br ${feature.color} rounded-lg sm:rounded-xl flex items-center justify-center`}>
                          <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm sm:text-base">{feature.title}</div>
                          <div className="text-xs sm:text-sm text-gray-500">{feature.subtitle}</div>
                        </div>
                      </div>
                      <div className="flex space-x-1.5 sm:space-x-2">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Feature-specific content */}
                    <div className="space-y-3 sm:space-y-4">
                      {feature.title === 'Annita Marketplace' && (
                        <>
                          <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            <div className="bg-gray-100 rounded-lg p-2 sm:p-3">
                              <div className="w-full h-16 sm:h-20 bg-gray-200 rounded mb-1.5 sm:mb-2"></div>
                              <div className="h-2.5 sm:h-3 bg-gray-200 rounded w-3/4 mb-1"></div>
                              <div className="h-1.5 sm:h-2 bg-gray-200 rounded w-1/2"></div>
                            </div>
                            <div className="bg-gray-100 rounded-lg p-2 sm:p-3">
                              <div className="w-full h-16 sm:h-20 bg-gray-200 rounded mb-1.5 sm:mb-2"></div>
                              <div className="h-2.5 sm:h-3 bg-gray-200 rounded w-3/4 mb-1"></div>
                              <div className="h-1.5 sm:h-2 bg-gray-200 rounded w-1/2"></div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-xs sm:text-sm">
                            <span className="text-gray-500">3,000+ Products</span>
                            <span className="text-primary-600 font-medium">View All</span>
                          </div>
                        </>
                      )}
                      
                      {feature.title === 'AnnitaPay' && (
                        <>
                          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg p-4 text-white">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm">Available Balance</span>
                              <Shield className="w-4 h-4" />
                            </div>
                            <div className="text-2xl font-bold">$1,250.00</div>
                            <div className="text-xs opacity-90">Secure • Encrypted • Protected</div>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <button className="bg-gray-100 rounded-lg p-3 text-center text-sm font-medium hover:bg-gray-200 transition-colors">
                              Send Money
                            </button>
                            <button className="bg-gray-100 rounded-lg p-3 text-center text-sm font-medium hover:bg-gray-200 transition-colors">
                              Request
                            </button>
                          </div>
                        </>
                      )}
                      
                      {feature.title === 'Annita Logistics' && (
                        <>
                          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                            <div className="flex items-center space-x-3 mb-3">
                              <Truck className="w-5 h-5 text-blue-600" />
                              <span className="font-medium text-blue-900">Active Delivery</span>
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Order #12345</span>
                                <span className="text-green-600 font-medium">In Transit</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
                              </div>
                              <div className="text-xs text-gray-500">Estimated delivery: 2 hours</div>
                            </div>
                          </div>
                        </>
                      )}
                      
                      {feature.title === 'Annita Connect' && (
                        <>
                          <div className="space-y-3">
                            <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                              <div className="flex items-center space-x-2 mb-2">
                                <BarChart3 className="w-4 h-4 text-purple-600" />
                                <span className="text-sm font-medium text-purple-900">Campaign Performance</span>
                              </div>
                              <div className="grid grid-cols-2 gap-4 text-xs">
                                <div>
                                  <div className="text-gray-600">Reach</div>
                                  <div className="font-semibold text-purple-900">2.4K</div>
                                </div>
                                <div>
                                  <div className="text-gray-600">Engagement</div>
                                  <div className="font-semibold text-purple-900">89%</div>
                                </div>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <button className="flex-1 bg-purple-600 text-white rounded-lg py-2 text-sm font-medium">
                                Create Ad
                              </button>
                              <button className="flex-1 bg-gray-100 text-gray-700 rounded-lg py-2 text-sm font-medium">
                                Analytics
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platform Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-20"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
            Platform Capabilities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="feature-card text-center group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                <div className="text-2xl font-bold text-orange-500">{feature.metric}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mb-20"
        >
                          <h3 className="text-2xl lg:text-3xl font-bold text-orange-600 text-center mb-12">
                  Why Choose Annita?
                </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                className="feature-card group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-orange-600 mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  )
}

export default FeaturesSection
