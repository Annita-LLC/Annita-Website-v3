"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
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
  Cpu
} from 'lucide-react'

const BusinessModelPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Annita LLC",
    "description": "Annita's advanced payment and revenue system with escrow, AI logistics, and flexible vendor models",
    "url": "https://www.an-nita.com/business-model"
  }

  const paymentFlowSteps = [
    {
      step: "1",
      title: "Customer Checkout",
      description: "Customer adds products to cart and completes payment",
      detail: "Payment is held in Annita Escrow Wallet (secure multi-party escrow)",
      icon: CreditCard,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      step: "2",
      title: "Pre-Delivery Processing",
      description: "System verifies order details, inventory, and logistics availability",
      detail: "Logistics provider assigned automatically via AI based on proximity, capacity, and delivery rating",
      icon: Package,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      step: "3",
      title: "Delivery Confirmation & Payout",
      description: "Customer confirms receipt of goods via app",
      detail: "Vendors receive full product price instantly, logistics provider gets commission immediately",
      icon: CheckCircle,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ]

  const logisticsComponents = [
    {
      component: "Base Fee",
      calculation: "$2",
      notes: "Covers minimal operational cost"
    },
    {
      component: "Distance Rate",
      calculation: "$0.50 per km",
      notes: "Adjusted automatically per route"
    },
    {
      component: "Weight/Volume Multiplier",
      calculation: "1–2x",
      notes: "Depending on parcel size"
    },
    {
      component: "Delivery Speed Bonus",
      calculation: "+$1–$5",
      notes: "Express/SLA delivery"
    },
    {
      component: "Rating-Based Bonus",
      calculation: "Up to +$2",
      notes: "Based on positive customer ratings"
    }
  ]

  const subscriptionPlans = [
    {
      name: "Growth",
      price: "$10 / $100",
      features: [
        "Marketing credits",
        "Basic analytics",
        "Priority support"
      ],
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      name: "Pro",
      price: "$25 / $250",
      features: [
        "AI recommendations",
        "Highlighted listings",
        "Advanced analytics",
        "Faster support"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      name: "Premium",
      price: "$50 / $500",
      features: [
        "Full AI suite",
        "Premium analytics",
        "Ad credits",
        "Priority exposure",
        "API access"
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    }
  ]

  const enhancements = [
    {
      title: "Tiered Logistics Network",
      description: "Create tiered system for logistics providers based on performance metrics",
      implementation: "Assign scores based on delivery success rate, speed, and customer feedback",
      example: "Tier 1 providers (90%+ rating) get premium orders; Tier 3 providers (70–80%) handle bulk deliveries",
      icon: Target,
      color: "text-blue-600"
    },
    {
      title: "Dynamic Pricing Engine",
      description: "Adjust fees based on real-time market conditions",
      implementation: "Integrate real-time data feeds and use machine learning for optimal pricing",
      example: "Increase logistics fees by 10% during Black Friday; offer 5% subscription discounts during off-peak",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      title: "AI-Powered Recommendations",
      description: "Leverage AI to analyze vendor sales data and market trends",
      implementation: "Use machine learning models to analyze historical sales and conversion rates",
      example: "Suggest markup increases or subscription upgrades based on vendor growth patterns",
      icon: Brain,
      color: "text-purple-600"
    },
    {
      title: "Fraud Detection Module",
      description: "Monitor transactions and vendor behavior to detect anomalies",
      implementation: "Deploy anomaly detection algorithms to flag unusual patterns",
      example: "Flag vendors creating fake orders or multiple refunds from one customer",
      icon: Shield,
      color: "text-red-600"
    },
    {
      title: "API Integrations",
      description: "Allow enterprise vendors to connect existing ERP and CRM systems",
      implementation: "Develop secure RESTful API for inventory syncing and order tracking",
      example: "Vendor syncs Shopify inventory to Annita, automatically updating stock levels",
      icon: Database,
      color: "text-orange-600"
    }
  ]

  return (
    <>
      <SEOHead
        title="Advanced Business Model - Annita LLC"
        description="Discover Annita's advanced payment and revenue system with escrow, AI logistics, and flexible vendor models for sustainable growth."
        keywords={[
          'advanced business model',
          'escrow system',
          'AI logistics',
          'payment flow',
          'revenue model',
          'subscription plans',
          'markup model',
          'logistics commission',
          'fraud detection',
          'API integrations',
          'dynamic pricing',
          'tiered logistics',
          'vendor management',
          'payment security',
          'transaction transparency',
          'African fintech',
          'digital payments',
          'supply chain optimization',
          'business automation',
          'revenue optimization'
        ]}
        canonical="/business-model"
        ogImage="/images/business-model.jpg"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600"></div>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
                Advanced <span className="text-orange-200">Business Model</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-orange-100 max-w-4xl mx-auto mb-6 sm:mb-8">
                Annita Advanced Payment & Revenue System with AI-powered logistics and flexible vendor models
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-sm sm:text-base">
                <span className="bg-white/20 px-3 sm:px-4 py-2 rounded-full">Advanced Escrow System</span>
                <span className="bg-white/20 px-3 sm:px-4 py-2 rounded-full">AI Logistics</span>
                <span className="bg-white/20 px-3 sm:px-4 py-2 rounded-full">Flexible Revenue Models</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Payment Flow Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                1️⃣ Payment <span className="text-orange-600">Flow</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced Escrow System ensuring trust, security, and transparency for all parties
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {paymentFlowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${step.bgColor} rounded-full flex items-center justify-center mr-4`}>
                      <step.icon className={`w-6 h-6 ${step.color}`} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">Step {step.step}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-3">{step.description}</p>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700 font-medium">{step.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-700">Maximum trust for customers</p>
                </div>
                <div className="text-center">
                  <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-700">Fair and timely vendor payout</p>
                </div>
                <div className="text-center">
                  <Truck className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-700">Real-time logistics commission</p>
                </div>
                <div className="text-center">
                  <Lock className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-700">Protection from fraud</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logistics Commission Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                2️⃣ Logistics <span className="text-orange-600">Commission</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Fair, scalable, and performance-based pay for logistics providers
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Commission Formula */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Commission Formula</h3>
                <div className="space-y-4">
                  {logisticsComponents.map((component, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{component.component}</p>
                        <p className="text-sm text-gray-600">{component.notes}</p>
                      </div>
                      <div className="text-lg font-bold text-orange-600">{component.calculation}</div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <h4 className="font-bold text-orange-800 mb-2">Example Calculation:</h4>
                  <div className="text-sm text-orange-700 space-y-1">
                    <p>Distance: 10 km × $0.50 = $5</p>
                    <p>Base fee: $2</p>
                    <p>Weight multiplier: 1.2x → $5 × 1.2 = $6</p>
                    <p>Delivery speed bonus: $2</p>
                    <p className="font-bold">Total commission: $10</p>
                  </div>
                </div>
              </div>

              {/* AI Logistics */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">AI-Based Logistics</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Brain className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Route Optimization</h4>
                      <p className="text-sm text-gray-600">AI algorithms minimize cost and delivery time</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Dynamic Pricing</h4>
                      <p className="text-sm text-gray-600">Based on peak hours, demand surges, and fuel costs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Route className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Smart Assignment</h4>
                      <p className="text-sm text-gray-600">Automatic provider assignment based on proximity and capacity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Revenue Models Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                3️⃣ Revenue <span className="text-orange-600">Models</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Two flexible options: Markup Base Model or Subscription Plans
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {/* Markup Model */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-green-200">
                <div className="flex items-center mb-6">
                  <DollarSign className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Markup Base Model</h3>
                </div>
                <p className="text-gray-600 mb-6">Dynamic 5–15% markup per product or account level</p>
                
                <div className="bg-green-50 p-4 rounded-lg mb-6">
                  <h4 className="font-bold text-green-800 mb-2">Example:</h4>
                  <div className="text-sm text-green-700 space-y-1">
                    <p>Product price: $50</p>
                    <p>Vendor markup: 10%</p>
                    <p>Customer pays: $55</p>
                    <p>Vendor receives: $50</p>
                    <p className="font-bold">Annita earns: $5</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">Vendor sets markup rate (5–15%)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">Customer sees final price including markup</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">Dynamic adjustments by category and performance</span>
                  </div>
                </div>
              </div>

              {/* Subscription Plans */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-blue-200">
                <div className="flex items-center mb-6">
                  <Users className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Subscription Plans</h3>
                </div>
                <p className="text-gray-600 mb-6">Premium tools, enhanced visibility, and AI-driven growth</p>
                
                <div className="space-y-4">
                  {subscriptionPlans.map((plan, index) => (
                    <div key={index} className={`p-4 rounded-lg border ${plan.bgColor} border-current`}>
                      <div className="flex justify-between items-center mb-3">
                        <h4 className={`font-bold ${plan.color}`}>{plan.name}</h4>
                        <span className={`font-bold ${plan.color}`}>{plan.price}</span>
                      </div>
                      <ul className="space-y-1">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-700 flex items-center space-x-2">
                            <ArrowRight className="w-3 h-3 text-gray-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hybrid Flexibility */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Hybrid Flexibility</h3>
              <div className="text-center text-gray-700">
                <p className="mb-4">Vendors choose either markup OR subscription, not both</p>
                <p className="text-sm">System tracks revenue sources per vendor for accurate reporting</p>
              </div>
            </div>
          </div>
        </section>

        {/* System Architecture */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                4️⃣ System <span className="text-orange-600">Architecture</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced flow diagram with integrated security and real-time insights
              </p>
            </motion.div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Cpu className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">All Transactions Logged</h3>
                  <p className="text-gray-600">Complete audit trail for security and compliance</p>
                </div>
                <div className="text-center">
                  <AlertTriangle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dispute Handling</h3>
                  <p className="text-gray-600">Integrated module for security and conflict resolution</p>
                </div>
                <div className="text-center">
                  <BarChart3 className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dynamic Dashboards</h3>
                  <p className="text-gray-600">Real-time insights for vendors, logistics, and management</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhancements Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                5️⃣ Advanced <span className="text-orange-600">Enhancements</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Scaling features for sustainable growth and maximum efficiency
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {enhancements.map((enhancement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <enhancement.icon className={`w-8 h-8 ${enhancement.color} mr-3`} />
                    <h3 className="text-xl font-bold text-gray-900">{enhancement.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{enhancement.description}</p>
                  <div className="bg-gray-50 p-3 rounded-lg mb-3">
                    <p className="text-sm font-medium text-gray-700 mb-1">Implementation:</p>
                    <p className="text-sm text-gray-600">{enhancement.implementation}</p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-orange-700 mb-1">Example:</p>
                    <p className="text-sm text-orange-600">{enhancement.example}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Advantages */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
                ✅ Key <span className="text-orange-200">Advantages</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <Shield className="w-12 h-12 text-orange-200 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Maximum Trust</h3>
                  <p className="text-orange-100">Transparency via escrow and real-time payments</p>
                </div>
                <div className="text-center">
                  <DollarSign className="w-12 h-12 text-orange-200 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Flexible Models</h3>
                  <p className="text-orange-100">Markup or subscription without hidden fees</p>
                </div>
                <div className="text-center">
                  <Truck className="w-12 h-12 text-orange-200 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Performance Incentives</h3>
                  <p className="text-orange-100">Logistics incentives for faster, reliable delivery</p>
                </div>
                <div className="text-center">
                  <Zap className="w-12 h-12 text-orange-200 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">AI-Driven</h3>
                  <p className="text-orange-100">Scalable system with AI optimizations</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default BusinessModelPage
