'use client'

import { useState } from 'react'
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
  Download
} from 'lucide-react'
import Link from 'next/link'
import { useFormSubmission, formValidations } from '@/lib/hooks/useFormSubmission'

export default function BusinessModelPage() {
  const [selectedModel, setSelectedModel] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    businessType: '',
    revenue: '',
    message: ''
  })
  const { submitForm, isSubmitting, isSubmitted, error, success, reset } = useFormSubmission({
    validateForm: formValidations.business,
    onSuccess: (data) => {
      console.log('business form submitted successfully:', data)
    },
    onError: (error) => {
      console.error('business form submission failed:', error)
    }
  })

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
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                Advanced Business Model
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Revenue <span className="text-orange-500">Strategy</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Annita Advanced Payment & Revenue System with AI-powered logistics 
                and flexible vendor models for sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {!isSubmitted || !success ? (
        <div className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Business Model Information */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                    Revenue Models
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
                        className={`w-full p-6 rounded-xl border-2 transition-all duration-200 text-left ${
                          selectedModel === model.id
                            ? 'border-orange-500 bg-orange-50'
                            : 'border-gray-200 hover:border-gray-300 bg-white'
                        }`}
                      >
                        <div className="flex items-center space-x-4 mb-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${model.color} rounded-lg flex items-center justify-center`}>
                            <model.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{model.name}</h3>
                            <p className="text-sm text-gray-600">{model.description}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                            <ul className="space-y-1">
                              {model.features.map((feature, index) => (
                                <li key={index} className="flex items-center text-sm text-gray-600">
                                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-sm font-medium text-gray-700 mb-1">Example:</p>
                            <p className="text-sm text-gray-600">{model.example}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Payment Flow */}
                  <div className="mt-8 bg-white rounded-xl p-6 shadow-soft border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Payment Flow Process
                    </h3>
                    <div className="space-y-4">
                      {paymentFlowSteps.map((step) => (
                        <div key={step.step} className="flex items-start space-x-3">
                          <div className={`w-8 h-8 ${step.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                            <span className={`text-sm font-bold ${step.color}`}>{step.step}</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{step.title}</h4>
                            <p className="text-sm text-gray-600">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div className="mt-8 bg-white rounded-xl p-6 shadow-soft border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Key Benefits
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <Shield className="w-5 h-5 text-green-500" />
                        <span className="text-sm text-gray-600">Maximum trust for customers</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <DollarSign className="w-5 h-5 text-green-500" />
                        <span className="text-sm text-gray-600">Fair and timely vendor payout</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Truck className="w-5 h-5 text-green-500" />
                        <span className="text-sm text-gray-600">Real-time logistics commission</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Lock className="w-5 h-5 text-green-500" />
                        <span className="text-sm text-gray-600">Protection from fraud</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Business Type
                        </label>
                        <select
                          value={formData.businessType}
                          onChange={(e) => handleInputChange('businessType', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        placeholder="Tell us about your business needs and how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || !selectedModel}
                      className="w-full inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          {selectedModel ? 'Get Started' : 'Contact Sales'}
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
        /* Success/Error Message */
        <div className={`py-16 sm:py-20 ${success ? 'bg-gradient-to-br from-green-50 to-emerald-50' : 'bg-gradient-to-br from-red-50 to-pink-50'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className={`w-20 h-20 ${success ? 'bg-green-100' : 'bg-red-100'} rounded-full flex items-center justify-center mx-auto mb-6`}>
                {success ? (
                  <CheckCircle className="w-10 h-10 text-green-600" />
                ) : (
                  <AlertTriangle className="w-10 h-10 text-red-600" />
                )}
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {success ? 'Request Submitted Successfully!' : 'Submission Failed'}
              </h2>
              
              <p className="text-gray-600 mb-8">
                {success 
                  ? 'Thank you for your interest! Our business development team will review your request and get back to you within 24 hours.'
                  : error || 'There was an error submitting your form. Please try again.'
                }
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                    <span className="text-gray-600">We'll review your business model selection and requirements</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                    <span className="text-gray-600">Our team will contact you to discuss implementation and setup</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                    <span className="text-gray-600">You'll receive a customized business model proposal</span>
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
                  className="inline-flex items-center px-6 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition-colors duration-200"
                >
                  Choose Another Model
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
