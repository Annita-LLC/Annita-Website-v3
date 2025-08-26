"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import CTASection from '@/components/sections/CTASection'
import {
  Building,
  CreditCard,
  Shield,
  Zap,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Download,
  Play,
  Star,
  BarChart3,
  Activity,
  Globe,
  Clock,
  DollarSign,
  Receipt,
  Lock,
  Smartphone,
  Database
} from 'lucide-react'

const AnnitaPayBusinessPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: Building,
      title: "Business Payments",
      description: "Comprehensive payment solutions for businesses of all sizes",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with advanced fraud protection",
      color: "green"
    },
    {
      icon: Zap,
      title: "Instant Processing",
      description: "Real-time payment processing and settlement",
      color: "orange"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Accept payments from customers worldwide",
      color: "purple"
    }
  ]

  const businessSolutions = [
    {
      name: "Payment Gateway",
      icon: "💳",
      description: "Secure online payment processing",
      features: ["Multi-currency support", "PCI DSS compliant", "Real-time processing"],
      pricing: "2.9% + $0.30"
    },
    {
      name: "Point of Sale",
      icon: "🏪",
      description: "In-store payment solutions",
      features: ["Mobile POS", "Receipt printing", "Inventory integration"],
      pricing: "From $29/month"
    },
    {
      name: "Recurring Billing",
      icon: "🔄",
      description: "Automated subscription payments",
      features: ["Flexible billing cycles", "Failed payment retry", "Customer management"],
      pricing: "1.5% + $0.10"
    },
    {
      name: "Invoice Management",
      icon: "📄",
      description: "Professional invoicing system",
      features: ["Custom templates", "Payment tracking", "Automated reminders"],
      pricing: "Free with payments"
    },
    {
      name: "Business Analytics",
      icon: "📊",
      description: "Comprehensive business insights",
      features: ["Revenue tracking", "Customer analytics", "Performance reports"],
      pricing: "Included free"
    },
    {
      name: "API Integration",
      icon: "🔌",
      description: "Seamless platform integration",
      features: ["RESTful APIs", "Webhooks", "SDK support"],
      pricing: "Free for developers"
    }
  ]

  const businessStats = [
    {
      title: "Businesses Served",
      value: "50K+",
      change: "+25%",
      icon: "🏢",
      color: "blue"
    },
    {
      title: "Transaction Volume",
      value: "$2B+",
      change: "+40%",
      icon: "💰",
      color: "green"
    },
    {
      title: "Success Rate",
      value: "99.9%",
      change: "+0.1%",
      icon: "✅",
      color: "orange"
    },
    {
      title: "Countries",
      value: "180+",
      change: "+5",
      icon: "🌍",
      color: "purple"
    }
  ]

  const benefits = [
    "Reduce payment processing costs by up to 50%",
    "Accept payments in 180+ countries and 135+ currencies",
    "Advanced fraud detection and prevention",
    "Real-time settlement and instant payouts",
    "Comprehensive reporting and analytics",
    "24/7 dedicated business support"
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AnnitaPay Business - Business Payment Solutions",
    "description": "Comprehensive business payment solutions with secure processing, multi-currency support, and advanced analytics. Built for businesses of all sizes.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "2.9",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "2500"
    }
  }

  return (
    <>
      <SEOHead
        title="AnnitaPay Business - Business Payment Solutions | Annita LLC"
        description="Comprehensive business payment solutions with secure processing, multi-currency support, and advanced analytics. Built for businesses of all sizes."
        keywords={[
          'AnnitaPay Business',
          'business payment solutions',
          'payment gateway',
          'point of sale',
          'recurring billing',
          'invoice management',
          'business analytics',
          'payment processing',
          'merchant services',
          'business payments',
          'payment API',
          'enterprise payments',
          'multi-currency payments',
          'payment security',
          'business finance'
        ]}
        canonical="/services/annitapay-business"
        ogImage="/annitapay-business-og-image.jpg"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                  <Building className="w-4 h-4 mr-2" />
                  Business Payment Solutions
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6">
                  Business <span className="text-blue-600">Payments</span> Made Simple
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                  Comprehensive payment solutions designed for businesses of all sizes. 
                  Accept payments globally, manage subscriptions, and grow your revenue with confidence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                    <Download className="w-5 h-5 mr-2" />
                    Start Free Trial
                  </button>
                  <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                    <Building className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Dashboard</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">💰</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Today's Revenue</h4>
                          <p className="text-sm text-gray-600">All transactions</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-green-600">$12,450</div>
                        <div className="text-sm text-gray-600">+15% vs yesterday</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">📊</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Success Rate</h4>
                          <p className="text-sm text-gray-600">Payment processing</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-blue-600">99.9%</div>
                        <div className="text-sm text-gray-600">Last 24 hours</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20" ref={ref}>
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Complete <span className="text-blue-600">Business</span> Solutions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Everything your business needs to accept payments, manage finances, and grow revenue 
                with enterprise-grade security and reliability.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    feature.color === 'blue' ? 'bg-blue-100' :
                    feature.color === 'green' ? 'bg-green-100' :
                    feature.color === 'orange' ? 'bg-orange-100' :
                    'bg-purple-100'
                  }`}>
                    <feature.icon className={`w-6 h-6 ${
                      feature.color === 'blue' ? 'text-blue-600' :
                      feature.color === 'green' ? 'text-green-600' :
                      feature.color === 'orange' ? 'text-orange-600' :
                      'text-purple-600'
                    }`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Solutions Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Business <span className="text-blue-600">Solutions</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the right payment solution for your business needs and scale as you grow.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {businessSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{solution.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{solution.description}</p>
                  <ul className="space-y-2 mb-4">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-blue-600 font-semibold text-sm">{solution.pricing}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Statistics Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Trusted by <span className="text-blue-600">Businesses</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of businesses already using AnnitaPay Business to grow their revenue.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {businessStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{stat.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.title}</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                    <div className="flex items-center justify-center space-x-1">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-green-600 text-sm font-medium">{stat.change}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-gray-50 to-white">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Why Choose <span className="text-blue-600">AnnitaPay Business</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  AnnitaPay Business is designed to help your business grow with secure, 
                  reliable, and cost-effective payment solutions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-3xl shadow-2xl">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Business Impact</h3>
                    <p className="text-gray-600">Average results</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Revenue Growth</span>
                      <span className="font-semibold text-blue-600">+45%</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Processing Costs</span>
                      <span className="font-semibold text-green-600">-30%</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Customer Satisfaction</span>
                      <span className="font-semibold text-orange-600">98%</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </div>
    </>
  )
}

export default AnnitaPayBusinessPage
