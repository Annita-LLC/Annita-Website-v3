"use client"

import Link from 'next/link'
import SEOHead from '@/components/seo/SEOHead'
import { 
  Brain,
  Users, 
  Briefcase, 
  Smartphone, 
  TrendingUp,
  Heart,
  CheckCircle,
  ArrowRight,
  Play,
  Download,
  Zap,
  Star,
  Shield,
  Globe,
  MessageSquare,
  Target,
  BarChart3,
  Camera,
  BookOpen,
  ShoppingBag
} from 'lucide-react'
import Button from '@/components/ui/Button'



const AILandingPage = () => {
  const personalFeatures = [
    {
      icon: Smartphone,
      title: 'Personal Assistant',
      description: 'AI-powered daily task management and schedule optimization'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Personalized fitness coaching and nutrition guidance'
    },
    {
      icon: BookOpen,
      title: 'Learning Companion',
      description: 'Intelligent study assistance and skill development'
    },
    {
      icon: Camera,
      title: 'Creative Assistant',
      description: 'AI-enhanced content creation and photo editing'
    }
  ]

  const businessFeatures = [
    {
      icon: Shield,
      title: 'AI-Powered Customer Verification',
      description: 'Advanced document verification with 99.5% accuracy in under 5 minutes'
    },
    {
      icon: Target,
      title: 'Intelligent Fraud Detection',
      description: 'Real-time fraud monitoring with 95% accuracy across all transactions'
    },
    {
      icon: BarChart3,
      title: 'Advanced Business Analytics',
      description: 'Comprehensive insights and predictive analytics for business growth'
    },
    {
      icon: Users,
      title: 'Customer Intelligence',
      description: 'AI-driven customer segmentation and behavior analysis'
    }
  ]

  const benefits = [
    '99.5% accuracy in customer verification',
    '95% fraud detection accuracy',
    'Real-time processing and monitoring',
    'Enterprise-level security',
    'Mobile-first design',
    '24/7 AI availability',
    'Multi-language support (10+ African languages)',
    'Offline functionality',
    'Cross-platform integration',
    'Compliance with international standards'
  ]

  const aiStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Annita AI Solutions",
    "description": "Choose between Annita's Personal AI Assistant for daily life or Business AI for enterprise solutions. Transform your life or business with cutting-edge AI technology.",
    "url": "https://annita.com/ai",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "provider": {
      "@type": "Organization",
      "name": "Annita",
      "url": "https://annita.com"
    },
    "featureList": [
      "Personal AI Assistant",
      "Business AI Solutions",
      "Predictive Analytics",
      "Customer Intelligence",
      "Smart Automation",
      "Real-time Analytics",
      "Advanced AI algorithms",
      "Real-time processing",
      "Secure and private",
      "Mobile-optimized",
      "24/7 availability",
      "Continuous learning",
      "Multi-language support",
      "Easy integration"
    ]
  }

  return (
    <>
      <SEOHead
        title="Annita AI: Intelligent Business Analytics & Fraud Detection for MSMEs"
        description="Annita AI is Africa's first comprehensive AI platform for MSMEs and individuals. Features AI-powered customer verification (99.5% accuracy), intelligent fraud detection (95% accuracy), advanced business analytics, and secure data management. Transform your business with cutting-edge AI technology designed for African markets."
        keywords={[
          'Annita AI',
          'AI business analytics',
          'fraud detection AI',
          'customer verification AI',
          'MSME AI solutions',
          'African AI platform',
          'business intelligence AI',
          'AI-powered verification',
          'intelligent fraud detection',
          'AI document verification',
          'business analytics AI',
          'AI customer onboarding',
          'real-time fraud monitoring',
          'AI business insights',
          'machine learning business',
          'AI automation MSME',
          'predictive analytics AI',
          'AI risk assessment',
          'business AI platform',
          'AI financial analytics',
          'customer intelligence AI',
          'AI transaction monitoring',
          'business AI tools',
          'AI data analytics',
          'enterprise AI solutions',
          'AI compliance tools',
          'AI security platform',
          'mobile AI application',
          'offline AI functionality',
          'multi-language AI',
          'African business AI',
          'AI ecosystem integration',
          'AI-powered decision making',
          'business AI optimization',
          'AI productivity tools',
          'AI efficiency solutions',
          'AI business transformation',
          'AI innovation Africa',
          'AI digital transformation',
          'AI business growth',
          'AI competitive advantage'
        ]}
        canonical="/ai"
        ogImage="/ai-og-image.jpg"
        structuredData={aiStructuredData}
      />
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                Intelligent Business Analytics & Fraud Detection
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
                Annita AI: <span className="text-orange-600">Transform Your Business</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
                Africa's first comprehensive AI platform for MSMEs and individuals. 
                Experience AI-powered customer verification (99.5% accuracy), intelligent fraud detection (95% accuracy), 
                and advanced business analytics designed specifically for African markets.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://annita.company.site/products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-700 hover:to-orange-800 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Try V1.0 Now
                </a>
                <a
                  href="/download"
                  className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-200 flex items-center justify-center transform hover:-translate-y-1"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Join V3.0 Waitlist
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Options Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-600 mb-4 sm:mb-6">
              Two Powerful AI Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Select the AI experience that's right for you
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Personal AI Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-large transition-all duration-300 border-2 border-transparent hover:border-orange-200">
              <div className="text-center mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-orange-600 mb-3 sm:mb-4">Personal AI Assistant</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  Transform your daily life with AI-powered personal assistance. From health and fitness to productivity and creativity.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {personalFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">{feature.title}</div>
                      <div className="text-xs sm:text-sm text-gray-600">{feature.description}</div>
                    </div>
              </div>
            ))}
          </div>

              <Link href="/ai/personal">
                <Button
                  variant="gradient"
                  size="lg"
                  icon={ArrowRight}
                  className="w-full text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Explore Personal AI
                </Button>
              </Link>
          </div>

            {/* Business AI Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-large transition-all duration-300 border-2 border-transparent hover:border-orange-200">
              <div className="text-center mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-orange-600 mb-3 sm:mb-4">Business AI Intelligence</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  Leverage AI to make data-driven decisions, optimize operations, and grow your business with unprecedented precision.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {businessFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">{feature.title}</div>
                      <div className="text-xs sm:text-sm text-gray-600">{feature.description}</div>
                </div>
              </div>
            ))}
              </div>

              <Link href="/ai/business">
                <Button
                  variant="gradient"
                  size="lg"
                  icon={ArrowRight}
                  className="w-full text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Explore Business AI
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-600 mb-4 sm:mb-6">
                Why Choose Annita AI?
            </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Both our Personal and Business AI solutions share these powerful features
            </p>
          </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-600 mb-4 sm:mb-6">
              Which AI Solution is Right for You?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Compare our AI solutions to find the perfect fit for your needs
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-soft overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                {/* Personal AI Column */}
                <div className="p-6 sm:p-8">
                  <div className="text-center mb-6 sm:mb-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-orange-600 mb-2">Personal AI</h3>
                    <p className="text-gray-600">Perfect for individuals</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Daily task management</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Health & fitness coaching</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Learning assistance</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Creative content generation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Personal finance tracking</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link href="/ai/personal">
                      <Button
                        variant="outline"
                        size="lg"
                        icon={ArrowRight}
                        className="w-full"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Business AI Column */}
                <div className="p-6 sm:p-8">
                  <div className="text-center mb-6 sm:mb-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-orange-600 mb-2">Business AI</h3>
                    <p className="text-sm sm:text-base text-gray-600">Perfect for organizations</p>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                      <span className="text-sm sm:text-base text-gray-700">Predictive analytics</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                      <span className="text-sm sm:text-base text-gray-700">Customer intelligence</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                      <span className="text-sm sm:text-base text-gray-700">Process automation</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                      <span className="text-sm sm:text-base text-gray-700">Real-time analytics</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                      <span className="text-sm sm:text-base text-gray-700">Fraud detection</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link href="/ai/business">
                      <Button
                        variant="outline"
                        size="lg"
                        icon={ArrowRight}
                        className="w-full"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center p-8 sm:p-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl text-white shadow-2xl">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Experience AI?
              </h3>
              <p className="text-lg text-orange-100 mb-8 max-w-4xl mx-auto">
                Download the Annita app to access both Personal and Business AI features. 
                Transform your life and business with the power of artificial intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://annita.company.site/products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-colors duration-200 shadow-lg"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Try V1.0 Now
                </a>
                <a 
                  href="/download"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Join V3.0 Waitlist
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default AILandingPage
