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
  DollarSign,
  Target,
  Award,
  Heart,
  Building,
  MapPin,
  Clock,
  Package,
  Headphones,
  BookOpen,
  Video,
  Mail,
  Phone
} from 'lucide-react'
import Button from '@/components/ui/Button'

const ServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete marketplace platform for MSMEs to sell online',
      features: [
        'Multivendor marketplace',
        'Product catalog management',
        'Inventory tracking',
        'Order management system',
        'Customer reviews & ratings',
        'Mobile-optimized storefronts'
      ],
      pricing: '5-15% transaction fee',
      color: 'from-blue-500 to-cyan-500',
      gradient: 'bg-gradient-to-br from-blue-50 to-cyan-50'
    },
    {
      icon: CreditCard,
      title: 'Financial Services',
      description: 'Secure payment processing and digital wallet solutions',
      features: [
        'Escrow payment protection',
        'Multi-currency support',
        'Digital wallet integration',
        'Fraud detection system',
        'Mobile money integration',
        'Real-time transaction tracking'
      ],
      pricing: '1-3% per transaction',
      color: 'from-green-500 to-emerald-500',
      gradient: 'bg-gradient-to-br from-green-50 to-emerald-50'
    },
    {
      icon: Truck,
      title: 'Logistics & Delivery',
      description: 'End-to-end delivery solutions for businesses',
      features: [
        'Same-day delivery options',
        'Real-time tracking system',
        'Warehouse management',
        'Last-mile delivery network',
        'Cross-border shipping',
        'Delivery optimization'
      ],
      pricing: '$2-5 per delivery',
      color: 'from-orange-500 to-red-500',
      gradient: 'bg-gradient-to-br from-orange-50 to-red-50'
    },
    {
      icon: MessageSquare,
      title: 'Marketing & Communication',
      description: 'AI-powered marketing tools and customer engagement',
      features: [
        'Targeted advertising campaigns',
        'Customer relationship management',
        'Analytics and reporting',
        'Social media integration',
        'Email marketing automation',
        'Performance optimization'
      ],
      pricing: '$0.50 per click',
      color: 'from-purple-500 to-pink-500',
      gradient: 'bg-gradient-to-br from-purple-50 to-pink-50'
    }
  ]

  const subscriptionPlans = [
    {
      name: 'Growth',
      price: '$5',
      period: '/month',
      description: 'Perfect for small businesses starting their digital journey',
      features: [
        'Basic marketplace access',
        'Standard payment processing',
        'Email support',
        'Basic analytics',
        'Mobile app access'
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Pro',
      price: '$12',
      period: '/month',
      description: 'Advanced features for growing businesses',
      features: [
        'All Growth features',
        'Advanced analytics',
        'Priority support',
        'Custom branding',
        'API access',
        'Advanced marketing tools'
      ],
      popular: true,
      color: 'from-primary-500 to-secondary-500'
    },
    {
      name: 'Premium',
      price: '$20',
      period: '/month',
      description: 'Complete solution for established businesses',
      features: [
        'All Pro features',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced logistics',
        'White-label options',
        '24/7 phone support'
      ],
      popular: false,
      color: 'from-accent-500 to-warning-500'
    }
  ]

  const supportServices = [
    {
      icon: Headphones,
      title: '24/7 Customer Support',
      description: 'Round-the-clock assistance for all your needs',
      availability: 'Always Available'
    },
    {
      icon: BookOpen,
      title: 'Training & Education',
      description: 'Comprehensive training programs for MSMEs',
      availability: 'Weekly Sessions'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step guides and best practices',
      availability: 'On-Demand'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Detailed responses within 24 hours',
      availability: '24h Response'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Direct assistance for urgent matters',
      availability: 'Business Hours'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other business owners',
      availability: 'Always Open'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive <span className="gradient-text">Service Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            From e-commerce to logistics, payments to marketing - we provide everything MSMEs need 
            to succeed in the digital economy with flexible pricing and world-class support.
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${service.gradient} rounded-3xl p-8 border border-gray-200 hover:shadow-medium transition-all duration-300 group`}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <div className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Starting at <span className="font-semibold text-gray-900">{service.pricing}</span>
                </div>
                <button className="btn-primary btn-sm group">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subscription Plans */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
            Choose Your Plan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subscriptionPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className={`relative ${plan.popular ? 'scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className={`${plan.popular ? 'ring-2 ring-primary-500' : ''} bg-white rounded-3xl p-8 shadow-soft border border-gray-200 hover:shadow-medium transition-all duration-300`}>
                  <div className="text-center mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                      <span className="text-gray-500 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{plan.description}</p>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full btn-lg bg-gradient-to-r ${plan.color} text-white hover:shadow-lg transition-all duration-300 group`}>
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Support Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
            World-Class Support
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="feature-card group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                <div className="text-xs text-primary-600 font-medium">{service.availability}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Business Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mb-20"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
            Solutions for Every Business Type
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building, title: 'Retail Stores', description: 'Digital transformation for traditional retail' },
              { icon: MapPin, title: 'Local Businesses', description: 'Expand reach beyond local markets' },
              { icon: Users, title: 'Service Providers', description: 'Streamline service delivery and payments' },
              { icon: Package, title: 'Manufacturers', description: 'Direct-to-consumer sales channels' }
            ].map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 2.0 + index * 0.1 }}
                className="feature-card text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{solution.title}</h4>
                <p className="text-gray-600 text-sm">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
              Join thousands of businesses already using Annita to grow their revenue, 
              reach new customers, and streamline their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="gradient"
                size="xl"
                icon={Play}
                className="text-lg font-bold shadow-2xl hover:shadow-primary-500/25 transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Started Free
              </Button>
              <Button
                variant="glass"
                size="xl"
                icon={Download}
                className="text-lg font-bold backdrop-blur-xl shadow-2xl hover:shadow-white/10 transform hover:-translate-y-1 transition-all duration-300"
              >
                Download App
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
