'use client'

import { useState } from 'react'
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
  X
} from 'lucide-react'
import Link from 'next/link'

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState('')
  const [billingCycle, setBillingCycle] = useState('monthly')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    plan: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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
    
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
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
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
                <DollarSign className="w-4 h-4 mr-2" />
                Transparent Pricing
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Choose Your <span className="text-orange-500">Plan</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Transparent pricing with our clear markup base model. Choose the perfect plan 
                for your business with no hidden fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {!isSubmitted ? (
        <div className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Pricing Information */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                    Pricing Plans
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
                          className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                            billingCycle === 'monthly'
                              ? 'bg-white text-orange-600 shadow-md'
                              : 'text-gray-600 hover:text-gray-900'
                          }`}
                        >
                          Monthly
                        </button>
                        <button
                          onClick={() => setBillingCycle('yearly')}
                          className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
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

                  {/* Pricing Plans */}
                  <div className="space-y-6">
                    {pricingPlans.map((plan) => (
                      <button
                        key={plan.id}
                        onClick={() => handlePlanSelect(plan.id)}
                        className={`w-full p-6 rounded-xl border-2 transition-all duration-200 text-left ${
                          selectedPlan === plan.id
                            ? 'border-orange-500 bg-orange-50'
                            : 'border-gray-200 hover:border-gray-300 bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                              <plan.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                              <p className="text-sm text-gray-600">{plan.description}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gray-900">
                              ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                            </div>
                            <div className="text-sm text-gray-500">
                              /{billingCycle === 'monthly' ? 'month' : 'year'}
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                            <ul className="space-y-1">
                              {plan.features.slice(0, 4).map((feature, index) => (
                                <li key={index} className="flex items-center text-sm text-gray-600">
                                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Limitations:</h4>
                            <ul className="space-y-1">
                              {plan.limitations.slice(0, 2).map((limitation, index) => (
                                <li key={index} className="flex items-center text-sm text-gray-600">
                                  <X className="w-4 h-4 text-red-500 mr-2" />
                                  {limitation}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Markup Model Info */}
                  <div className="mt-8 bg-white rounded-xl p-6 shadow-soft border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Markup Base Model
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Vendors can choose between subscription plans or a markup model (5-15%).
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">No transaction fees</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">Transparent pricing</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">Flexible switching</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        placeholder="Tell us about your business needs..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || !selectedPlan}
                      className="w-full inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          {selectedPlan ? 'Start Free Trial' : 'Contact Sales'}
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </button>
                  </form>

                  {/* Contact Information */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-orange-500" />
                        <span className="text-gray-600">annitallc@gmail.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-orange-500" />
                        <span className="text-gray-600">+231 77 505 7227</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MessageSquare className="w-5 h-5 text-orange-500" />
                        <span className="text-gray-600">Live chat available</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Success Message */
        <div className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Request Submitted Successfully!
              </h2>
              
              <p className="text-gray-600 mb-8">
                Thank you for your interest! Our sales team will review your request and get back to you within 24 hours.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                    <span className="text-gray-600">We'll review your plan selection and business needs</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                    <span className="text-gray-600">Our team will contact you to discuss setup and pricing</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                    <span className="text-gray-600">You'll receive access to start your free trial</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Contact Support
                </Link>
                <button
                  onClick={() => {
                    setIsSubmitted(false)
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
                  className="inline-flex items-center px-6 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition-colors duration-200"
                >
                  Choose Another Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Home Page CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center p-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
                Join thousands of MSMEs already using Annita to grow their revenue, reach new customers, 
                and streamline their operations across Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/download"
                  className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download App
                </a>
                <a 
                  href="/contact-sales"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200"
                >
                  Contact Sales
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
