'use client'

import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import { 
  CheckCircle,
  Star,
  Shield,
  Users,
  Globe,
  TrendingUp,
  DollarSign,
  Calculator,
  Info,
  ArrowRight,
  Download,
  Mail,
  Phone,
  MessageSquare,
  X,
  Eye,
  EyeOff,
  Percent,
  CreditCard,
  Megaphone,
  Calendar,
  Crown,
  Zap,
  Target,
  BarChart3,
  PieChart,
  LineChart,
  Activity,
  Clock,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Plus,
  Minus,
  Sparkles,
  Award,
  Lock,
  Wifi,
  WifiOff,
  Heart,
  Building,
  ShoppingCart,
  Truck,
  MessageCircle,
  Bell,
  Settings
} from 'lucide-react'
import Link from 'next/link'
import { useFormSubmission, formValidations } from '@/lib/hooks/useFormSubmission'

export default function PricingPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedPlan, setSelectedPlan] = useState('')
  const [billingCycle, setBillingCycle] = useState('monthly')
  const [showPricingDetails, setShowPricingDetails] = useState(false)
  const [expandedFAQ, setExpandedFAQ] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    plan: '',
    message: ''
  })
  const { submitForm, isSubmitting, isSubmitted, error, success, reset } = useFormSubmission({
    validateForm: formValidations.pricing,
    onSuccess: (data) => {
      console.log('pricing form submitted successfully:', data)
    },
    onError: (error) => {
      console.error('pricing form submission failed:', error)
    }
  })

  const pricingPlans = [
    {
      id: 'growth',
      name: 'Growth',
      description: 'Perfect for small businesses starting their digital journey',
      monthlyPrice: 10,
      yearlyPrice: 100,
      features: [
        'Marketing credits',
        'Basic analytics',
        'Priority support',
        'Mobile app access',
        'Email notifications',
        'Basic reporting'
      ],
      limitations: [
        'Limited API access',
        'Basic marketing tools only',
        'Standard support hours'
      ],
      popular: false,
      icon: Users
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'Ideal for growing businesses and startups',
      monthlyPrice: 25,
      yearlyPrice: 250,
      features: [
        'All Growth features',
        'AI recommendations',
        'Highlighted listings',
        'Advanced analytics',
        'Faster support',
        'API access with documentation',
        'Custom branding options',
        'Multi-user access (up to 5)',
        'SMS notifications',
        'Integration with popular tools'
      ],
      limitations: [
        'No white-label solutions',
        'Limited custom integrations'
      ],
      popular: true,
      icon: TrendingUp
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'For large organizations and corporations',
      monthlyPrice: 50,
      yearlyPrice: 500,
      features: [
        'All Pro features',
        'Full AI suite',
        'Premium analytics',
        'Ad credits',
        'Priority exposure',
        'Full API access with webhooks',
        'White-label solutions',
        'Unlimited user access',
        'Custom integrations',
        'Advanced security features',
        'Dedicated account manager',
        'SLA guarantees',
        'Custom training & onboarding'
      ],
      limitations: [],
      popular: false,
      icon: Globe
    }
  ]

  const markupModel = {
    title: "Markup Base Model Explained",
    description: "Vendors choose either markup OR subscription, not both. Our transparent pricing ensures fair and sustainable business growth",
    components: [
      {
        title: "Dynamic Markup (5-15%)",
        description: "Vendor sets markup rate per product or account level",
        rate: "5-15%",
        details: "Customer sees final price including markup, vendor receives full original price"
      },
      {
        title: "Subscription Plans", 
        description: "Monthly/Annual plans for premium tools and features",
        rate: "$10-$50/month",
        details: "Growth ($10), Pro ($25), Premium ($50) with AI tools and analytics"
      },
      {
        title: "No Transaction Fees",
        description: "Annita does not take commission per transaction unless markup is selected",
        rate: "0%",
        details: "Transparent pricing with no hidden fees or surprise charges"
      },
      {
        title: "Hybrid Flexibility",
        description: "Vendors can choose their preferred revenue model",
        rate: "Flexible",
        details: "Switch between markup and subscription models as business grows"
      }
    ]
  }

  const faqs = [
    {
      question: "How does the markup base model work?",
      answer: "Vendors set a markup rate (5-15%) on their products. Customers see the final price including markup, vendors receive the full original product price, and Annita earns the markup difference. No transaction fees unless markup is selected."
    },
    {
      question: "Can I choose between markup and subscription?",
      answer: "Yes, vendors choose either markup OR subscription, not both. You can switch between models as your business grows. The system tracks revenue sources per vendor for accurate reporting."
    },
    {
      question: "Are there any hidden fees?",
      answer: "No hidden fees. Annita does not take commission per transaction unless markup is selected. All costs are clearly outlined in our pricing structure with complete transparency."
    },
    {
      question: "What's included in the subscription plans?",
      answer: "Growth ($10/month): Marketing credits, basic analytics, priority support. Pro ($25/month): AI recommendations, highlighted listings, advanced analytics. Premium ($50/month): Full AI suite, premium analytics, ad credits, API access."
    },
    {
      question: "How does the escrow system work?",
      answer: "Payments are held in Annita Escrow Wallet until delivery confirmation. Vendors receive full product price instantly upon delivery confirmation, logistics providers get commission immediately, and Annita collects revenue if markup model is used."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, all subscription plans come with a 14-day free trial. No credit card required to start your trial. You can also use the markup model without any subscription fees."
    }
  ]

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId)
    setFormData(prev => ({ ...prev, plan: planId }))
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedPlan) return
    
    const formDataWithPlan = {
      ...formData,
      selected_plan: selectedPlan
    }
    
    await submitForm('pricing', formDataWithPlan)
  }

  return (
    <>
      <SEOHead
        title="Pricing - Annita LLC"
        description="Transparent pricing for Annita's digital platform. Choose from Growth ($10/month), Pro ($25/month), or Premium ($50/month) subscription plans or use our markup base model (5-15%)."
        keywords={[
          'pricing',
          'plans',
          'subscription',
          'Annita pricing',
          'digital platform pricing',
          'payment processing fees',
          'markup base model',
          'transaction fees',
          'platform access',
          'enterprise pricing',
          'business pricing',
          'startup pricing',
          'free plan',
          'professional plan',
          'enterprise plan',
          'volume discounts',
          'transparent pricing',
          'no hidden fees',
          'competitive pricing',
          'affordable pricing',
          'scalable pricing',
          'pay-as-you-grow',
          'business model',
          'revenue model',
          'pricing strategy',
          'cost structure',
          'fee structure',
          'billing model',
          'subscription model',
          'usage-based pricing'
        ]}
        canonical="/pricing"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-orange-100 to-red-50 py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-orange-200/30 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-red-200/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-orange-300/25 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-red-300/20 rounded-full animate-bounce delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Main Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
                <DollarSign className="w-4 h-4 mr-2" />
                Transparent Pricing
              </div>
              
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Choose Your <span className="text-orange-500">Plan</span>
              </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Transparent pricing with our clear markup base model. Choose the perfect plan 
                for your business with no hidden fees.
              </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-sm border border-orange-200"
                  >
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">3 Plans</div>
                    <div className="text-xs sm:text-sm text-gray-600">Growth to Premium</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="bg-white/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-sm border border-orange-200"
                  >
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">14 Days</div>
                    <div className="text-xs sm:text-sm text-gray-600">Free Trial</div>
                  </motion.div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <button 
                    onClick={() => setShowPricingDetails(true)}
                    className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all duration-200 flex items-center justify-center shadow-lg"
                  >
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    View Pricing Details
                  </button>
                  <button 
                    onClick={() => document.getElementById('pricing-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="border-2 border-orange-600 text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-200 flex items-center justify-center"
                  >
                    <Calculator className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Calculate Costs
                  </button>
                </div>
              </motion.div>

              {/* Right Column - Pricing Preview */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-orange-200 shadow-2xl">
                  <div className="text-center mb-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Pricing Plans</h3>
                    <p className="text-sm text-gray-600">Choose what works for you</p>
                  </div>
                  
                  {/* Pricing Cards Preview */}
                  <div className="space-y-4">
                    {pricingPlans.slice(0, 2).map((plan, index) => (
                      <motion.div
                        key={plan.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                            <plan.icon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900">{plan.name}</div>
                            <div className="text-xs text-gray-600">{plan.description}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-orange-600">${plan.monthlyPrice}/mo</div>
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
                    <Star className="w-3 h-3 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Details Section */}
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
                Detailed <span className="text-orange-500">Pricing Plans</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include a 14-day free trial 
                with no credit card required.
              </p>
            </motion.div>

            {/* Pricing Plans Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-white rounded-xl p-6 shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                    plan.popular ? 'border-orange-500 relative' : 'border-gray-100'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </div>
                    <div className="text-gray-500 text-sm">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-900 text-sm">Features:</h4>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {plan.limitations.length > 0 && (
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-900 text-sm">Limitations:</h4>
                      {plan.limitations.map((limitation, limitationIndex) => (
                        <div key={limitationIndex} className="flex items-center text-sm text-gray-600">
                          <X className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                          {limitation}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <button
                    onClick={() => handlePlanSelect(plan.id)}
                    className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
                      plan.popular
                        ? 'bg-orange-500 text-white hover:bg-orange-600'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {selectedPlan === plan.id ? 'Selected' : 'Choose Plan'}
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Markup Model Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">Alternative: Markup Base Model</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Percent className="w-8 h-8" />
                  </div>
                  <div className="text-lg font-bold mb-2">5-15% Markup</div>
                  <div className="text-sm text-orange-100">Dynamic pricing per product</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8" />
                  </div>
                  <div className="text-lg font-bold mb-2">No Hidden Fees</div>
                  <div className="text-sm text-orange-100">Transparent pricing structure</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8" />
                  </div>
                  <div className="text-lg font-bold mb-2">Flexible</div>
                  <div className="text-sm text-orange-100">Switch between models</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <div className="text-lg font-bold mb-2">Scalable</div>
                  <div className="text-sm text-orange-100">Grows with your business</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {!isSubmitted ? (
        <div className="py-16 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Pricing Information */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                      Compare Plans
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Choose the plan that best fits your business needs. All plans include a 14-day free trial.
                  </p>

                  {/* Billing Toggle */}
                  <div className="mb-8">
                    <div className="flex justify-center">
                      <div className="bg-gray-100 rounded-2xl p-1 flex items-center">
                        <button
                          onClick={() => setBillingCycle('monthly')}
                            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                            billingCycle === 'monthly'
                              ? 'bg-white text-orange-600 shadow-md'
                              : 'text-gray-600 hover:text-gray-900'
                          }`}
                        >
                          Monthly
                        </button>
                        <button
                          onClick={() => setBillingCycle('yearly')}
                            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                            billingCycle === 'yearly'
                              ? 'bg-white text-orange-600 shadow-md'
                              : 'text-gray-600 hover:text-gray-900'
                          }`}
                        >
                          Yearly
                          <span className="ml-2 bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">
                            Save 17%
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>

                    {/* FAQ Section */}
                    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Frequently Asked Questions
                      </h3>
                      <div className="space-y-4">
                        {faqs.slice(0, 3).map((faq, index) => (
                          <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <button
                              onClick={() => setExpandedFAQ(expandedFAQ === index.toString() ? '' : index.toString())}
                              className="flex items-center justify-between w-full text-left"
                            >
                              <h4 className="font-medium text-gray-900 text-sm sm:text-base">{faq.question}</h4>
                              {expandedFAQ === index.toString() ? (
                                <Minus className="w-4 h-4 text-gray-500 flex-shrink-0" />
                              ) : (
                                <Plus className="w-4 h-4 text-gray-500 flex-shrink-0" />
                              )}
                            </button>
                            {expandedFAQ === index.toString() && (
                              <p className="text-sm text-gray-600 mt-2">{faq.answer}</p>
                            )}
                          </div>
                        ))}
                          </div>
                  </div>

                  {/* Markup Model Info */}
                    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Markup Base Model
                    </h3>
                      <p className="text-gray-600 mb-4 text-sm sm:text-base">
                      Vendors can choose between subscription plans or a markup model (5-15%).
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">No transaction fees</span>
                      </div>
                      <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">Transparent pricing</span>
                      </div>
                      <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">Flexible switching</span>
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
                  id="pricing-form"
                  className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-200"
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
                    {selectedPlan ? `Get Started with ${pricingPlans.find(p => p.id === selectedPlan)?.name}` : 'Contact Sales'}
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {!selectedPlan && (
                      <div className="bg-orange-50 rounded-lg p-4 mb-6">
                        <p className="text-sm text-orange-700">
                          Please select a plan above to get started, or contact our sales team for custom pricing.
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

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                        placeholder="Tell us about your business needs..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || !selectedPlan}
                      className="w-full inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg text-sm sm:text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          {selectedPlan ? 'Start Free Trial' : 'Contact Sales'}
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
        /* Success Message */
        <div className="py-16 sm:py-20 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 sm:w-24 sm:h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" />
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
              >
                Request Submitted Successfully!
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-gray-600 mb-8 text-sm sm:text-base"
              >
                Thank you for your interest! Our sales team will review your request and get back to you within 24 hours.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-xl p-6 sm:p-8 mb-8 shadow-lg border border-green-200"
              >
                <h3 className="font-semibold text-gray-900 mb-4 text-lg">What happens next?</h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">1</div>
                    <span className="text-gray-600 text-sm sm:text-base">We'll review your plan selection and business needs</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">2</div>
                    <span className="text-gray-600 text-sm sm:text-base">Our team will contact you to discuss setup and pricing</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">3</div>
                    <span className="text-gray-600 text-sm sm:text-base">You'll receive access to start your free trial</span>
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
                    setSelectedPlan('')
                    setFormData({
                      name: '',
                      email: '',
                      company: '',
                      phone: '',
                      plan: '',
                      message: ''
                    })
                  }}
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition-colors duration-200 text-sm sm:text-base"
                >
                  Choose Another Plan
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
                Ready to Transform Your Business?
              </h3>
              <p className="text-orange-100 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
                Join thousands of MSMEs already using Annita to grow their revenue, reach new customers, 
                and streamline their operations across Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a 
                  href="/download"
                  className="inline-flex items-center justify-center bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 shadow-lg text-sm sm:text-base"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Download App
                </a>
                <a 
                  href="/contact-sales"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200 text-sm sm:text-base"
                >
                  Contact Sales
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
