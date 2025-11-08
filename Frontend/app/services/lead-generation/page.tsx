'use client'

import { useState } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import CTASection from '@/components/sections/CTASection'
import { 
  Target, 
  Users, 
  TrendingUp, 
  Search, 
  CheckCircle,
  Play,
  ExternalLink,
  Star,
  Globe,
  Zap,
  Lock,
  Clock,
  DollarSign,
  MessageSquare,
  BarChart3
} from 'lucide-react'

const LeadGenerationPage = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  const features = [
    {
      icon: Target,
      title: "Find Customers",
      description: "Find and connect with potential customers",
      color: "blue"
    },
    {
      icon: Users,
      title: "Customer Database",
      description: "Build and manage your customer database",
      color: "green"
    },
    {
      icon: TrendingUp,
      title: "Sales Growth",
      description: "Grow your sales with qualified leads",
      color: "orange"
    },
    {
      icon: Search,
      title: "Market Research",
      description: "Research and identify market opportunities",
      color: "purple"
    }
  ]

  const leadFeatures = [
    "Customer prospecting",
    "Lead qualification",
    "Market research",
    "Customer database building",
    "Sales pipeline management",
    "Lead scoring"
  ]

  return (
    <>
      <SEOHead
        title="Lead Generation - Annita"
        description="Find and connect with potential customers. Lead qualification, market research, and customer database building for African businesses."
        keywords={[
          'lead generation', 'customer prospecting', 'sales leads', 'market research',
          'customer database', 'lead qualification', 'sales growth'
        ]}
        canonical="/services/lead-generation"
        ogImage="/images/og/lead-generation.jpg"
      />

      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-yellow-50 via-white to-orange-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Content */}
                <div>
                  <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Target className="w-4 h-4 mr-2" />
                    Lead Generation
                  </div>
                  
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Find & Connect with <span className="text-yellow-600">Potential Customers</span>
                  </h1>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Grow your business by finding and connecting with potential customers. 
                    Lead qualification, market research, and customer database building.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => setIsWaitlistOpen(true)}
                      className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-yellow-700 hover:to-orange-700 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      <Target className="w-5 h-5 mr-2" />
                      Join Waitlist
                    </button>
                    <button 
                      onClick={() => window.open('https://annita.company.site/products', '_blank')}
                      className="border-2 border-yellow-600 text-yellow-600 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-50 transition-all duration-200 flex items-center justify-center transform hover:-translate-y-1"
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
                        <div className="h-4 bg-yellow-200 rounded w-2/3"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Target className="w-4 h-4 text-yellow-600" />
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
                  Why Choose <span className="text-yellow-600">Annita Lead Generation</span>?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Built specifically for African businesses with local market insights and customer data.
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

        {/* Lead Features Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Lead Generation <span className="text-green-600">Features</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Everything you need for effective lead generation across Africa.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {leadFeatures.map((feature, index) => (
                  <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center border border-green-100">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature}</h3>
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

export default LeadGenerationPage
