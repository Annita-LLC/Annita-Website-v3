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
  ChevronRight,
  ChevronDown,
  Plus,
  Minus,
  Calendar
} from 'lucide-react'
import Link from 'next/link'
import WaitlistForm from '@/components/ui/WaitlistForm'
import { useFormSubmission, formValidations } from '@/lib/hooks/useFormSubmission'

export default function BusinessModelPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedModel, setSelectedModel] = useState('')
  const [showRevenueDetails, setShowRevenueDetails] = useState(false)
  const [expandedSection, setExpandedSection] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    businessType: '',
    revenue: '',
    message: ''
  })
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  const { submitForm, isSubmitting, isSubmitted, error, success, reset } = useFormSubmission({
    validateForm: formValidations.business,
    onSuccess: (data) => {
      console.log('business form submitted successfully:', data)
    },
    onError: (error) => {
      console.error('business form submission failed:', error)
    }
  })

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
        'No markup on transactions',
        '14-day free trial available'
      ],
      example: 'Choose subscription for advanced features without affecting product pricing'
    },
    {
      id: 'hybrid',
      name: 'Hybrid Flexibility',
      description: 'Switch between models as your business grows',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Choose either markup OR subscription',
        'Switch models as business evolves',
        'System tracks revenue sources per vendor',
        'Accurate reporting and analytics',
        'Flexible growth strategy'
      ],
      example: 'Start with subscription, switch to markup as volume increases'
    }
  ]

  const businessTypes = [
    'E-commerce',
    'Retail',
    'Manufacturing',
    'Technology',
    'Healthcare',
    'Education',
    'Finance',
    'Real Estate',
    'Food & Beverage',
    'Other'
  ]

  const revenueRanges = [
    'Under $10K/month',
    '$10K - $50K/month',
    '$50K - $100K/month',
    '$100K - $500K/month',
    '$500K - $1M/month',
    '$1M+/month'
  ]

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

  const handleModelSelect = (modelId: string) => {
    setSelectedModel(modelId)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedModel) return
    
    // Add selected model to form data
    const formDataWithModel = {
      ...formData,
      selected_model: selectedModel
    }
    
    await submitForm('business', formDataWithModel)
  }

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
                    onClick={() => document.getElementById('business-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="border-2 border-white text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200 flex items-center justify-center text-sm sm:text-base"
                  >
                    <Calculator className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Calculate Revenue
                  </button>
                </div>
              </div>

              {/* Right Column - Interactive Elements */}
              <div className="relative">
                {/* Business Model Visualization */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center">Revenue Strategy</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">5 Revenue Streams</span>
                      <span className="font-semibold text-white">Diversified Model</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">AI-Powered Logistics</span>
                      <span className="font-semibold text-white">Advanced System</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">Flexible Vendor Models</span>
                      <span className="font-semibold text-white">Sustainable Growth</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">Success Rate</span>
                      <span className="font-semibold text-white">95%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

              {/* Right Column - Revenue Visualization */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-orange-200 shadow-2xl">
                  <div className="text-center mb-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Revenue Model v1.0</h3>
                    <p className="text-sm text-gray-600">Comprehensive revenue streams</p>
                  </div>
                  
                  {/* Revenue Streams Visualization */}
                  <div className="space-y-4">
                    {revenueModel.components.slice(0, 3).map((component, index) => (
                      <motion.div
                        key={component.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200"
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 bg-gradient-to-br ${component.color} rounded-lg flex items-center justify-center`}>
                            <component.icon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900">{component.name}</div>
                            <div className="text-xs text-gray-600">{component.rate}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-orange-600">{component.rate}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center"
                  >
                    <DollarSign className="w-4 h-4 text-white" />
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
                  >
                    <TrendingUp className="w-3 h-3 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Model Section */}
      <section className="py-16 sm:py-20 bg-white" ref={ref}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                {revenueModel.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {revenueModel.description}
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
                  <div className="text-sm text-orange-100">Clear pricing with no hidden fees</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <div className="text-lg font-bold mb-2">Scalable</div>
                  <div className="text-sm text-orange-100">Grows with your business</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8" />
                  </div>
                  <div className="text-lg font-bold mb-2">Flexible</div>
                  <div className="text-sm text-orange-100">Multiple revenue options</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8" />
                  </div>
                  <div className="text-lg font-bold mb-2">Efficient</div>
                  <div className="text-sm text-orange-100">Optimized for performance</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {!isSubmitted || !success ? (
        <div className="py-16 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Business Model Information */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                      Business Model Options
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Choose the revenue model that best fits your business strategy and growth plans.
                  </p>

                  {/* Business Models */}
                  <div className="space-y-6">
                    {businessModels.map((model) => (
                      <button
                        key={model.id}
                        onClick={() => handleModelSelect(model.id)}
                          className={`w-full p-4 sm:p-6 rounded-xl border-2 transition-all duration-200 text-left hover:shadow-md ${
                          selectedModel === model.id
                              ? 'border-orange-500 bg-orange-50 shadow-md'
                            : 'border-gray-200 hover:border-gray-300 bg-white'
                        }`}
                      >
                        <div className="flex items-center space-x-4 mb-4">
                            <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${model.color} rounded-xl flex items-center justify-center`}>
                              <model.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                          </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-lg sm:text-xl font-bold text-gray-900">{model.name}</h3>
                            <p className="text-sm text-gray-600">{model.description}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                              <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Key Features:</h4>
                            <ul className="space-y-1">
                              {model.features.map((feature, index) => (
                                  <li key={index} className="flex items-center text-xs sm:text-sm text-gray-600">
                                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                              <p className="text-xs sm:text-sm font-medium text-gray-700 mb-1">Example:</p>
                              <p className="text-xs sm:text-sm text-gray-600">{model.example}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Payment Flow */}
                    <div className="mt-8 bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Payment Flow Process
                    </h3>
                    <div className="space-y-4">
                      {paymentFlowSteps.map((step) => (
                        <div key={step.step} className="flex items-start space-x-3">
                          <div className={`w-8 h-8 ${step.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                            <span className={`text-sm font-bold ${step.color}`}>{step.step}</span>
                          </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-gray-900 text-sm sm:text-base">{step.title}</h4>
                              <p className="text-xs sm:text-sm text-gray-600">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Benefits */}
                    <div className="mt-8 bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Key Benefits
                    </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="flex items-center space-x-3">
                          <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-600">Maximum trust for customers</span>
                      </div>
                      <div className="flex items-center space-x-3">
                          <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-600">Fair and timely vendor payout</span>
                      </div>
                      <div className="flex items-center space-x-3">
                          <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-600">Real-time logistics commission</span>
                      </div>
                      <div className="flex items-center space-x-3">
                          <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-600">Protection from fraud</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  id="business-form"
                  className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-200"
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
                    {selectedModel ? `Get Started with ${businessModels.find(m => m.id === selectedModel)?.name}` : 'Contact Sales'}
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {!selectedModel && (
                      <div className="bg-orange-50 rounded-lg p-4 mb-6">
                        <p className="text-sm text-orange-700">
                          Please select a revenue model above to get started, or contact our sales team for custom solutions.
                        </p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                          placeholder="Your company name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                          placeholder="+1234567890"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Business Type
                        </label>
                        <select
                          value={formData.businessType}
                          onChange={(e) => handleInputChange('businessType', e.target.value)}
                          className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                        >
                          <option value="">Select business type</option>
                          {businessTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Monthly Revenue
                        </label>
                        <select
                          value={formData.revenue}
                          onChange={(e) => handleInputChange('revenue', e.target.value)}
                          className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                        >
                          <option value="">Select revenue range</option>
                          {revenueRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                        placeholder="Tell us about your business needs and how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || !selectedModel}
                      className="w-full inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg text-sm sm:text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          {selectedModel ? 'Get Started' : 'Contact Sales'}
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                        </>
                      )}
                    </button>
                  </form>

                  {/* Contact Information */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0" />
                        <span className="text-gray-600 text-sm sm:text-base">annitallc@gmail.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0" />
                        <span className="text-gray-600 text-sm sm:text-base">+231 77 505 7227</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0" />
                        <span className="text-gray-600 text-sm sm:text-base">Live chat available</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Success/Error Message */
        <div className={`py-16 sm:py-20 ${success ? 'bg-gradient-to-br from-green-50 to-emerald-50' : 'bg-gradient-to-br from-red-50 to-pink-50'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className={`w-20 h-20 sm:w-24 sm:h-24 ${success ? 'bg-green-100' : 'bg-red-100'} rounded-full flex items-center justify-center mx-auto mb-6`}
              >
                {success ? (
                  <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" />
                ) : (
                  <AlertTriangle className="w-10 h-10 sm:w-12 sm:h-12 text-red-600" />
                )}
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
              >
                {success ? 'Request Submitted Successfully!' : 'Submission Failed'}
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-gray-600 mb-8 text-sm sm:text-base"
              >
                {success 
                  ? 'Thank you for your interest! Our business development team will review your request and get back to you within 24 hours.'
                  : error || 'There was an error submitting your form. Please try again.'
                }
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-xl p-6 sm:p-8 mb-8 shadow-lg border border-gray-200"
              >
                <h3 className="font-semibold text-gray-900 mb-4 text-lg">What happens next?</h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">1</div>
                    <span className="text-gray-600 text-sm sm:text-base">We'll review your business model selection and requirements</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">2</div>
                    <span className="text-gray-600 text-sm sm:text-base">Our team will contact you to discuss implementation and setup</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">3</div>
                    <span className="text-gray-600 text-sm sm:text-base">You'll receive a customized business model proposal</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
              >
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200 text-sm sm:text-base"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Contact Support
                </Link>
                <button
                  onClick={() => {
                    reset()
                    setSelectedModel('')
                    setFormData({
                      name: '',
                      email: '',
                      company: '',
                      phone: '',
                      businessType: '',
                      revenue: '',
                      message: ''
                    })
                  }}
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition-colors duration-200 text-sm sm:text-base"
                >
                  Choose Another Model
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      )}

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

      {/* Waitlist Form Modal */}
      <WaitlistForm 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </>
  )
}
