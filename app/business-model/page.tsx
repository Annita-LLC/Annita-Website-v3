'use client'

import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target, 
  CheckCircle, 
  CreditCard, 
  Truck, 
  Megaphone,
  Package,
  BarChart3,
  Shield,
  Zap,
  Globe,
  Lock,
  ArrowRight,
  Brain,
  Route,
  AlertTriangle,
  Database,
  Cpu,
  Mail,
  Phone,
  MessageSquare,
  Download,
  Eye,
  EyeOff,
  ExternalLink,
  Star,
  Calculator,
  Percent,
  Crown,
  Sparkles,
  TrendingDown,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  Wallet,
  Receipt,
  Clock,
  CheckCircle2,
  XCircle,
  Info,
  HelpCircle,
  Building,
  Smartphone,
  Calendar,
  Minus,
  Plus
} from 'lucide-react'
import Link from 'next/link'
import WaitlistForm from '@/components/ui/WaitlistForm'

export default function BusinessModelPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [showRevenueDetails, setShowRevenueDetails] = useState(false)
  const [expandedSection, setExpandedSection] = useState('')
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  const revenueModel = {
    title: "Our Revenue Model (v1.0)",
    description: "Comprehensive revenue streams designed for sustainable growth and vendor success",
    components: [
      {
        id: 'markup-base',
        name: 'Markup Base Model',
        description: 'Dynamic 5-15% markup per product or account level',
        icon: Percent,
        color: 'from-green-500 to-emerald-500',
        rate: '5-15%',
        details: [
          'Vendor sets markup rate (5-15%)',
          'Customer sees final price including markup',
          'Vendor receives full original price',
          'Dynamic adjustments by category',
          'No transaction fees unless markup selected'
        ],
        example: 'Product: $50, Markup: 10%, Customer pays: $55, Vendor gets: $50, Annita earns: $5'
      },
      {
        id: 'merchant-service',
        name: 'Merchant Service Fees',
        description: 'Transaction processing fees for payment handling',
        icon: CreditCard,
        color: 'from-blue-500 to-cyan-500',
        rate: '2.5-3.5%',
        details: [
          'Secure payment processing',
          'Multi-currency support',
          'Fraud protection included',
          'Real-time transaction monitoring',
          'Instant settlement options'
        ],
        example: 'Transaction: $100, Fee: 3%, Annita earns: $3, Vendor gets: $97'
      },
      {
        id: 'prioritization',
        name: 'Prioritization Fees',
        description: 'Visibility boosts for sellers to increase product exposure',
        icon: Star,
        color: 'from-yellow-500 to-orange-500',
        rate: '$5-50/day',
        details: [
          'Featured product placement',
          'Search result prioritization',
          'Category top listings',
          'Homepage banner placement',
          'Email marketing inclusion'
        ],
        example: 'Premium listing: $25/day, 30% increase in visibility and sales'
      },
      {
        id: 'installment',
        name: 'Installment Payment Service Fees',
        description: 'Flexible payment options with service charges',
        icon: Calendar,
        color: 'from-purple-500 to-pink-500',
        rate: '1-2% per installment',
        details: [
          'Buy now, pay later options',
          'Flexible payment schedules',
          'Credit risk assessment',
          'Automated payment collection',
          'Customer credit building'
        ],
        example: '3-month installment: $100 product, $1.50 fee per payment, total: $4.50'
      },
      {
        id: 'sponsored-ads',
        name: 'Sponsored Ads + Targeted Marketing',
        description: 'Advanced advertising platform with AI targeting',
        icon: Megaphone,
        color: 'from-red-500 to-pink-500',
        rate: '$0.50-5.00 per click',
        details: [
          'AI-powered audience targeting',
          'Cross-platform advertising',
          'Performance analytics',
          'A/B testing capabilities',
          'ROI optimization tools'
        ],
        example: 'Campaign: $100 budget, 200 clicks at $0.50 each, 15% conversion rate'
      }
    ]
  }

  const businessModels = [
    {
      id: 'markup',
      name: 'Markup Base Model',
      description: 'Dynamic 5-15% markup per product or account level',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Vendor sets markup rate (5-15%)',
        'Customer sees final price including markup',
        'Vendor receives full original price',
        'Dynamic adjustments by category',
        'No transaction fees unless markup selected'
      ],
      example: 'Product: $50, Markup: 10%, Customer pays: $55, Vendor gets: $50, Annita earns: $5'
    },
    {
      id: 'subscription',
      name: 'Subscription Plans',
      description: 'Monthly/Annual plans for premium tools and features',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Growth ($10/month): Marketing credits, analytics',
        'Pro ($25/month): AI recommendations, API access',
        'Premium ($50/month): Full AI suite, white-label',
        'Flexible billing cycles',
        'No long-term contracts'
      ],
      example: 'Pro Plan: $25/month, includes AI tools and advanced analytics'
    }
  ]

  const benefits = [
    {
      icon: Shield,
      title: "Transparent Pricing",
      description: "Clear fee structure with no hidden costs"
    },
    {
      icon: TrendingUp,
      title: "Scalable Revenue",
      description: "Revenue grows with vendor success"
    },
    {
      icon: Users,
      title: "Vendor Success",
      description: "Multiple revenue streams benefit all parties"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Designed for African and international markets"
    }
  ]

  return (
    <>
      <SEOHead
        title="Our Revenue Model - Annita LLC"
        description="Comprehensive revenue model for v1.0 marketplace and v3.0 app. All transactions are processed through our live platforms with transparent fee structures."
        keywords={[
          'revenue model',
          'business model',
          'markup model',
          'merchant fees',
          'prioritization fees',
          'installment payments',
          'sponsored ads',
          'targeted marketing',
          'transparent pricing',
          'African fintech',
          'digital payments',
          'revenue streams',
          'business strategy',
          'payment processing',
          'advertising platform'
        ]}
        canonical="/business-model"
      />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-white/5 rounded-full animate-bounce delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Main Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Advanced Business Model
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                  Our <span className="text-orange-200">Revenue Model</span>
                </h1>
                <p className="text-lg sm:text-xl text-orange-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
                  Comprehensive revenue model for v1.0 marketplace and v3.0 app. All transactions are processed through our live platforms with transparent fee structures.
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold">5</div>
                    <div className="text-xs sm:text-sm text-orange-200">Revenue Streams</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold">v1.0</div>
                    <div className="text-xs sm:text-sm text-orange-200">Latest Model</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold">AI</div>
                    <div className="text-xs sm:text-sm text-orange-200">Powered</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <button 
                    onClick={() => setShowRevenueDetails(true)}
                    className="bg-white text-orange-600 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-200 flex items-center justify-center shadow-lg text-sm sm:text-base"
                  >
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    View Model
                  </button>
                  <button 
                    onClick={() => document.getElementById('revenue-details')?.scrollIntoView({ behavior: 'smooth' })}
                    className="border-2 border-white text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200 flex items-center justify-center text-sm sm:text-base"
                  >
                    <Calculator className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Calculate Revenue
                  </button>
                </div>
              </div>

              {/* Right Column - Interactive Elements */}
              <div className="relative">
                {/* Revenue Strategy Visualization */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center">Revenue Strategy</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">5 Revenue Streams</span>
                      <span className="font-semibold text-white">Diversified</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">AI-Powered Logistics</span>
                      <span className="font-semibold text-white">Advanced</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">Flexible Vendor Models</span>
                      <span className="font-semibold text-white">Scalable</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">Success Rate</span>
                      <span className="font-semibold text-white">98%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Details Section */}
      <section className="py-16 sm:py-20 bg-white" ref={ref} id="revenue-details">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-orange-500">Revenue Streams</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Five comprehensive revenue streams designed for sustainable growth and vendor success.
              </p>
            </motion.div>

            {/* Revenue Components Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {revenueModel.components.map((component, index) => (
                <motion.div
                  key={component.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${component.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <component.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{component.name}</h3>
                        <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                          {component.rate}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{component.description}</p>
                      
                      <div className="space-y-2">
                        {component.details.slice(0, 3).map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center text-xs text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {detail}
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                        <p className="text-xs font-medium text-gray-700 mb-1">Example:</p>
                        <p className="text-xs text-gray-600">{component.example}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Platform Integration Notice */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 text-white mb-8"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6">Platform Integration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Annita 3.0 App</h4>
                  <p className="text-sm text-blue-100">All transactions processed through our mobile application with advanced AI features and offline capabilities.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">V1.0 Marketplace</h4>
                  <p className="text-sm text-blue-100">Live marketplace platform with 3,000+ vendors currently processing transactions and generating revenue.</p>
                </div>
              </div>
            </motion.div>

            {/* Revenue Model Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">Revenue Model Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8" />
                  </div>
                  <div className="text-lg font-bold mb-2">Transparent</div>
                  <div className="text-sm text-orange-100">Clear fee structure</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <div className="text-lg font-bold mb-2">Scalable</div>
                  <div className="text-sm text-orange-100">Grows with business</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <div className="text-lg font-bold mb-2">Mutual Success</div>
                  <div className="text-sm text-orange-100">Benefits all parties</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8" />
                  </div>
                  <div className="text-lg font-bold mb-2">Global Ready</div>
                  <div className="text-sm text-orange-100">African & international</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Revenue Information */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                    Revenue Model Overview
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Our comprehensive revenue model is designed to create sustainable growth for all parties involved.
                  </p>

                  {/* Benefits Section */}
                  <div className="space-y-6">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-start space-x-4"
                      >
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                          <p className="text-gray-600">{benefit.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-200"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
                  Contact Sales
                </h3>
                
                <div className="space-y-6">
                  <p className="text-gray-600">
                    Ready to implement our revenue model? Contact our sales team to discuss how our revenue streams can benefit your business.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-600">annitallc@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-600">+231 77 505 7227</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-600">Live chat available</span>
                    </div>
                  </div>

                  <Link
                    href="/contact-sales"
                    className="w-full inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-200 shadow-lg text-sm sm:text-base"
                  >
                    Contact Sales Team
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center p-6 sm:p-8 lg:p-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl text-white shadow-2xl"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                Experience Our Revenue Model in Action
              </h3>
              <p className="text-orange-100 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
                All transactions and revenue generation happen through our live platforms. Try our V1.0 marketplace today or join the waitlist for the revolutionary V3.0 app.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a 
                  href="https://annita.company.site/products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 shadow-lg text-sm sm:text-base"
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Try Marketplace V1.0
                </a>
                <button 
                  onClick={() => setIsWaitlistOpen(true)}
                  className="inline-flex items-center justify-center border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200 text-sm sm:text-base"
                >
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Join V3.0 Waitlist
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Waitlist Modal */}
      <WaitlistForm
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </>
  )
}
