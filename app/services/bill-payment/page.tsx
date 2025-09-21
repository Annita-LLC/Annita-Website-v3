'use client'

import { useState } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import CTASection from '@/components/sections/CTASection'
import { 
  CreditCard, 
  Zap, 
  Shield, 
  CheckCircle, 
  CheckCircle,
  Play,
  ExternalLink,
  Star,
  Globe,
  Lock,
  Clock,
  Users,
  DollarSign,
  Home,
  GraduationCap
} from 'lucide-react'

const BillPaymentPage = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  const features = [
    {
      icon: Zap,
      title: "Instant Payments",
      description: "Pay bills instantly with real-time processing",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Bank-grade security for all bill payments",
      color: "green"
    },
    {
      icon: CheckCircle,
      title: "Multiple Bills",
      description: "Pay utilities, school fees, insurance, and more",
      color: "orange"
    },
    {
      icon: Lock,
      title: "Auto-Pay Options",
      description: "Set up automatic payments for recurring bills",
      color: "purple"
    }
  ]

  const billTypes = [
    { icon: Home, name: "Utilities", description: "Electricity, water, gas bills" },
    { icon: GraduationCap, name: "School Fees", description: "Education payments" },
    { icon: Shield, name: "Insurance", description: "Health and life insurance" },
    { icon: CreditCard, name: "Credit Cards", description: "Credit card payments" },
    { icon: Globe, name: "Internet", description: "Internet and mobile bills" },
    { icon: DollarSign, name: "Loans", description: "Loan and mortgage payments" }
  ]

  return (
    <>
      <SEOHead
        title="Bill Payment Services - Annita"
        description="Pay bills instantly and securely. Utilities, school fees, insurance, and more. Automated payments and real-time processing for African individuals."
        keywords={[
          'bill payment', 'utilities payment', 'school fees', 'insurance payment',
          'automated payments', 'instant payments', 'secure transactions'
        ]}
        canonical="/services/bill-payment"
        ogImage="/images/og/bill-payment.jpg"
      />

      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-rose-50 via-white to-pink-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Content */}
                <div>
                  <div className="inline-flex items-center bg-rose-100 text-rose-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Bill Payment Services
                  </div>
                  
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Pay Bills <span className="text-rose-600">Instantly & Securely</span>
                  </h1>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Pay all your bills in one place. Utilities, school fees, insurance, 
                    and more with instant processing and automated payment options.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => setIsWaitlistOpen(true)}
                      className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-rose-700 hover:to-pink-700 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      <CreditCard className="w-5 h-5 mr-2" />
                      Join Waitlist
                    </button>
                    <button 
                      onClick={() => window.open('https://annita.company.site/products', '_blank')}
                      className="border-2 border-rose-600 text-rose-600 px-8 py-4 rounded-xl font-semibold hover:bg-rose-50 transition-all duration-200 flex items-center justify-center transform hover:-translate-y-1"
                    >
                      <Globe className="w-5 h-5 mr-2" />
                      Try V1.0 Now
                    </button>
                  </div>
                </div>

                {/* Right Column - Visual */}
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-4 bg-rose-200 rounded w-2/3"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <CreditCard className="w-4 h-4 text-rose-600" />
                          <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                        </div>
                        <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose <span className="text-rose-600">Annita Bill Pay</span>?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Built specifically for African individuals with local bill providers and secure processing.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 bg-${feature.color}-100 rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        <feature.icon className={`w-8 h-8 text-${feature.color}-600`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bill Types Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Bill <span className="text-green-600">Types</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Pay all your bills in one convenient place across Africa.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {billTypes.map((bill, index) => (
                  <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center border border-green-100">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <bill.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{bill.name}</h3>
                    <p className="text-sm text-gray-600">{bill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </div>
    </>
  )
}

export default BillPaymentPage
