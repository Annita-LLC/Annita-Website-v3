"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import { Check, X, Star, Zap, Shield, Users, Globe, TrendingUp, DollarSign, Calculator, Info } from 'lucide-react'

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly')
  const [selectedPlan, setSelectedPlan] = useState('starter')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Annita Platform Pricing",
    "description": "Transparent pricing for Annita's digital platform services with markup base model",
    "url": "https://annita.com/pricing",
    "offers": [
      {
        "@type": "Offer",
        "name": "Starter Plan",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free starter plan for individuals and small businesses"
      },
      {
        "@type": "Offer", 
        "name": "Professional Plan",
        "price": "29",
        "priceCurrency": "USD",
        "description": "Professional plan for growing businesses"
      },
      {
        "@type": "Offer",
        "name": "Enterprise Plan", 
        "price": "99",
        "priceCurrency": "USD",
        "description": "Enterprise plan for large organizations"
      }
    ]
  }

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
        ogImage="/images/pricing-page.jpg"
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
                Transparent <span className="text-orange-200">Pricing</span>
            </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-orange-100 max-w-4xl mx-auto mb-6 sm:mb-8">
                Choose the perfect plan for your business with our clear markup base model
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-sm sm:text-base">
                <span className="bg-white/20 px-3 sm:px-4 py-2 rounded-full">No Hidden Fees</span>
                <span className="bg-white/20 px-3 sm:px-4 py-2 rounded-full">14-Day Free Trial</span>
                <span className="bg-white/20 px-3 sm:px-4 py-2 rounded-full">Volume Discounts</span>
              </div>
            </motion.div>
        </div>
      </section>

        {/* Billing Toggle */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <div className="flex justify-center">
              <div className="bg-gray-100 rounded-2xl p-1 flex items-center">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-all duration-200 ${
                    billingCycle === 'monthly'
                      ? 'bg-white text-orange-600 shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-all duration-200 ${
                    billingCycle === 'yearly'
                      ? 'bg-white text-orange-600 shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Yearly
                  <span className="ml-1 sm:ml-2 bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">
                    Save 17%
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-orange-500 scale-105' : ''
                  }`}
                >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                      </span>
                  </div>
                )}
                
                  <div className="p-6 sm:p-8">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-2xl mb-4">
                        <plan.icon className="w-6 h-6 text-orange-600" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        {plan.description}
                      </p>
                    </div>

                    <div className="text-center mb-6">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl sm:text-5xl font-bold text-gray-900">
                          ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                        </span>
                        {plan.monthlyPrice > 0 && (
                          <span className="text-gray-500 ml-2">
                            /{billingCycle === 'monthly' ? 'mo' : 'year'}
                          </span>
                        )}
                  </div>
                      {plan.monthlyPrice === 0 && (
                        <p className="text-orange-600 font-semibold mt-2">Forever Free</p>
                      )}
                </div>

                    <div className="space-y-3 mb-8">
                      <h4 className="font-semibold text-gray-900 mb-3">What's included:</h4>
                  {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                        </div>
                      ))}
                      {plan.limitations.length > 0 && (
                        <>
                          <h4 className="font-semibold text-gray-900 mt-4 mb-3">Limitations:</h4>
                          {plan.limitations.map((limitation, limitationIndex) => (
                            <div key={limitationIndex} className="flex items-start">
                              <X className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                              <span className="text-sm sm:text-base text-gray-600">{limitation}</span>
                            </div>
                          ))}
                        </>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`w-full py-3 sm:py-4 px-6 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-200 ${
                        plan.popular
                          ? 'bg-orange-500 text-white hover:bg-orange-600'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      {plan.monthlyPrice === 0 ? 'Get Started Free' : 'Start Free Trial'}
                    </button>
              </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>

        {/* Markup Base Model Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our <span className="text-orange-600">Markup Base Model</span>
            </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                {markupModel.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {markupModel.components.map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-2xl mb-4">
                      <DollarSign className="w-6 h-6 text-orange-600" />
          </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      {component.title}
                    </h3>
                    <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">
                      {component.rate}
                </div>
                    <p className="text-gray-600 text-sm sm:text-base mb-3">
                      {component.description}
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      {component.details}
                    </p>
              </div>
                </motion.div>
            ))}
          </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 sm:mt-16 bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  How Our Pricing Works
                </h3>
                <p className="text-gray-600 text-lg">
                  We believe in transparent, value-based pricing that grows with your business
            </p>
          </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Base Transaction Fee</h4>
                  <p className="text-gray-600 mb-4">
                    Every transaction processed through AnnitaPay incurs a 2.5% base fee. This covers:
                  </p>
                  <ul className="space-y-2 text-sm sm:text-base">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      Payment processing and security
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      Fraud protection and monitoring
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      Infrastructure and maintenance
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      Customer support and compliance
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Platform Access & Features</h4>
                  <p className="text-gray-600 mb-4">
                    Monthly subscription fees provide access to our platform features:
                  </p>
                  <ul className="space-y-2 text-sm sm:text-base">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      Analytics and reporting tools
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      API access and integrations
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      Multi-user management
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      Advanced security features
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Frequently Asked <span className="text-orange-600">Questions</span>
            </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to know about our pricing and billing
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg sm:text-xl text-orange-100 max-w-3xl mx-auto mb-8">
                Join thousands of businesses already using Annita to grow their digital presence
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-orange-50 transition-colors duration-200">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors duration-200">
                  Contact Sales
                </button>
              </div>
            </motion.div>
        </div>
      </section>
    </div>
    </>
  )
}

export default PricingPage
