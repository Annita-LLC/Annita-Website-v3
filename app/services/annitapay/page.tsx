"use client"

import { useState } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import CTASection from '@/components/sections/CTASection'
import DownloadChoiceModal from '@/components/ui/DownloadChoiceModal'
import { 
  CreditCard, 
  Shield, 
  Globe, 
  Smartphone, 
  Users, 
  TrendingUp, 
  CheckCircle,
  Download,
  Play,
  Lock,
  Fingerprint,
  Activity,
  Database,
  Cpu,
  Key,
  FileText,
  AlertTriangle,
  Network,
  GitBranch,
  Code,
  Terminal,
  Brain,
  Zap
} from 'lucide-react'

const AnnitaPayPage = () => {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)

  const features = [
    {
      icon: Globe,
      title: "One Global Account",
      description: "One AnnitaPay account works across all countries—no need to register multiple times",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Encrypted at rest and in transit, with biometric login, two-factor auth, and fraud prevention",
      color: "green"
    },
    {
      icon: Users,
      title: "Pan-African Agent Network",
      description: "Agents across rural and urban areas for cash-in, cash-out, and merchant support",
      color: "orange"
    },
    {
      icon: Smartphone,
      title: "Online + Offline Support",
      description: "Works with or without internet. USSD & SMS-based systems for unbanked or low-connectivity regions",
      color: "purple"
    },
    {
      icon: CreditCard,
      title: "Cards & Wallets",
      description: "Multi-currency wallets and physical/virtual cards usable globally",
      color: "indigo"
    },
    {
      icon: Zap,
      title: "Cross-Border Transactions",
      description: "Send and receive money instantly across countries, 24/7, at a fraction of traditional cost",
      color: "teal"
    }
  ]

  const benefits = [
    "Store, send, receive local currency, USD, and stablecoins",
    "Offline access via USSD and QR codes",
    "Gasless blockchain transactions (Bridge-powered)",
    "Built-in biometric and PIN security",
    "Instant settlement and real-time dashboards",
    "QR/NFC payments and recurring billing"
  ]

  const coreProducts = [
    {
      title: "Digital Wallets",
      description: "Secure, multi-currency wallets built for scale",
      features: [
        "Store, send, receive local currency, USD, and stablecoins",
        "Offline access via USSD and QR codes", 
        "Gasless blockchain transactions (Bridge-powered)",
        "Built-in biometric and PIN security"
      ]
    },
    {
      title: "Bridge-Powered Stablecoin Infrastructure",
      description: "Next-gen stablecoin services through a unified orchestration layer",
      features: [
        "Orchestration API for global stablecoin movement",
        "Issue your own branded stablecoin backed by real assets",
        "Launch thousands of digital wallets securely",
        "Create cards usable online and in-store",
        "Send global payments with local FX integration"
      ]
    },
    {
      title: "Offline Functionality",
      description: "Designed for Africa - bridging the digital divide",
      features: [
        "USSD Banking — no internet required for payments",
        "SMS Notifications — instant alerts for transactions",
        "Agent-Enabled Operations — verified field agents",
        "Edge Syncing — offline transactions sync when online"
      ]
    }
  ]

  const platformArchitecture = [
    {
      component: "API Layer",
      description: "RESTful and GraphQL APIs for custom integrations",
      icon: Code,
      color: "blue"
    },
    {
      component: "SDKs",
      description: "Developer-ready SDKs for Android, iOS, and Web",
      icon: Smartphone,
      color: "green"
    },
    {
      component: "Core Banking",
      description: "Modular ledgers and settlement engine",
      icon: Database,
      color: "orange"
    },
    {
      component: "Compliance",
      description: "Built-in KYC, AML, and fraud systems",
      icon: Shield,
      color: "purple"
    },
    {
      component: "AI Engine",
      description: "Fraud detection, credit scoring, and behavioral analytics",
      icon: Cpu,
      color: "indigo"
    },
    {
      component: "Dev Console",
      description: "Full sandbox environment for partners and fintechs",
      icon: Terminal,
      color: "teal"
    }
  ]

  const securityFeatures = [
    {
      feature: "End-to-End Encryption",
      description: "256-bit AES encryption for all data transmission and storage",
      icon: Lock,
      level: "Maximum"
    },
    {
      feature: "Biometric Authentication",
      description: "Fingerprint, face ID, and voice recognition for secure access",
      icon: Fingerprint,
      level: "Advanced"
    },
    {
      feature: "Multi-Factor Authentication",
      description: "SMS, email, and authenticator app-based 2FA protection",
      icon: Key,
      level: "Enhanced"
    },
    {
      feature: "Fraud Detection AI",
      description: "Machine learning algorithms detect and prevent fraudulent transactions",
      icon: AlertTriangle,
      level: "Intelligent"
    },
    {
      feature: "Real-time Monitoring",
      description: "24/7 transaction monitoring with instant fraud alerts",
      icon: Activity,
      level: "Continuous"
    },
    {
      feature: "Regulatory Compliance",
      description: "Full compliance with PCI DSS, GDPR, and local financial regulations",
      icon: FileText,
      level: "Certified"
    }
  ]

  const advancedCapabilities = [
    {
      title: "Smart Contract Integration",
      description: "Automated financial agreements with blockchain technology",
      features: ["Self-executing contracts", "Automated settlements", "Transparent transactions", "Reduced intermediaries"],
      icon: GitBranch,
      color: "blue"
    },
    {
      title: "AI-Powered Insights",
      description: "Personalized financial recommendations and spending analysis",
      features: ["Spending pattern analysis", "Budget optimization", "Investment suggestions", "Risk assessment"],
      icon: Brain,
      color: "green"
    },
    {
      title: "Cross-Chain Interoperability",
      description: "Seamless transactions across multiple blockchain networks",
      features: ["Multi-chain support", "Atomic swaps", "Cross-chain bridges", "Universal compatibility"],
      icon: Network,
      color: "orange"
    },
    {
      title: "Quantum-Resistant Security",
      description: "Future-proof encryption resistant to quantum computing attacks",
      features: ["Post-quantum cryptography", "Advanced key management", "Future-proof security", "Military-grade protection"],
      icon: Shield,
      color: "purple"
    }
  ]



  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AnnitaPay - Personal Digital Payments",
    "description": "Secure, instant digital payments for personal use. Send and receive money globally with bank-grade security.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "iOS, Android, Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      // "priceCurrency": "USD" // Pricing available on pricing page
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1250"
    }
  }

  return (
    <>
      <SEOHead
        title="AnnitaPay - Personal Digital Payments | Annita LLC"
        description="Send and receive money instantly with AnnitaPay. Secure, fast, and reliable digital payments for personal use. Download the app today!"
        keywords={[
          'AnnitaPay',
          'digital payments',
          'mobile money',
          'instant transfers',
          'secure payments',
          'Liberia payments',
          'money transfer',
          'digital wallet',
          'mobile banking',
          'peer-to-peer payments',
          'secure transactions',
          'payment app',
          'money sending',
          'digital finance',
          'mobile payments'
        ]}
        canonical="/services/annitapay"
        ogImage="/annitapay-og-image.jpg"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Personal Digital Payments
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
                  AnnitaPay - <span className="text-orange-600">Africa's Unified Financial Engine</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                  Move, Store, Issue, and Grow Money Without Borders. A high-performance digital finance 
                  infrastructure powering seamless money movement across Africa and the world. Built as a 
                  cornerstone of the Annita Ecosystem—Africa's first all-in-one super app.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setIsDownloadModalOpen(true)}
                    className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Try V1.0 Now
                  </button>
                  <button 
                    className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 flex items-center justify-center"
                    onClick={() => window.location.href = '/demo'}
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                    <CreditCard className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Transfer</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">From</span>
                      <span className="font-semibold">My Wallet</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">To</span>
                      <span className="font-semibold">+231 775 057 227</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Amount</span>
                      <span className="font-semibold text-orange-600">$50.00</span>
                    </div>
                    <button 
                      onClick={() => window.open('https://annita.company.site/products', '_blank')}
                      className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200"
                    >
                      Send Money
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-orange-600">AnnitaPay</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Built with cutting-edge technology and security, AnnitaPay provides the most reliable 
                and user-friendly payment experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    feature.color === 'green' ? 'bg-green-100' :
                    feature.color === 'orange' ? 'bg-orange-100' :
                    feature.color === 'blue' ? 'bg-blue-100' :
                    feature.color === 'purple' ? 'bg-purple-100' :
                    feature.color === 'indigo' ? 'bg-indigo-100' :
                    'bg-teal-100'
                  }`}>
                    <feature.icon className={`w-6 h-6 ${
                      feature.color === 'green' ? 'text-green-600' :
                      feature.color === 'orange' ? 'text-orange-600' :
                      feature.color === 'blue' ? 'text-blue-600' :
                      feature.color === 'purple' ? 'text-purple-600' :
                      feature.color === 'indigo' ? 'text-indigo-600' :
                      'text-teal-600'
                    }`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Products Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Core <span className="text-orange-600">Products</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive financial solutions designed for Africa's unique needs and challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {coreProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                  <ul className="space-y-3">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Architecture Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Platform <span className="text-orange-600">Architecture</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Built on enterprise-grade infrastructure with modular components designed for scale, security, and performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformArchitecture.map((component, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    component.color === 'blue' ? 'bg-blue-100' :
                    component.color === 'green' ? 'bg-green-100' :
                    component.color === 'orange' ? 'bg-orange-100' :
                    component.color === 'purple' ? 'bg-purple-100' :
                    component.color === 'indigo' ? 'bg-indigo-100' :
                    'bg-teal-100'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    <component.icon className={`w-8 h-8 ${
                      component.color === 'blue' ? 'text-blue-600' :
                      component.color === 'green' ? 'text-green-600' :
                      component.color === 'orange' ? 'text-orange-600' :
                      component.color === 'purple' ? 'text-purple-600' :
                      component.color === 'indigo' ? 'text-indigo-600' :
                      'text-teal-600'
                    }`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{component.component}</h3>
                  <p className="text-gray-600 leading-relaxed">{component.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Features Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Advanced <span className="text-orange-600">Security</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Bank-grade security with multiple layers of protection to keep your money and data safe.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityFeatures.map((security, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <security.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">
                      {security.level}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{security.feature}</h3>
                  <p className="text-gray-600 leading-relaxed">{security.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Capabilities Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-orange-50 to-orange-100">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Advanced <span className="text-orange-600">Capabilities</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Cutting-edge technology and innovative features that set AnnitaPay apart from traditional financial services.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {advancedCapabilities.map((capability, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mr-4 ${
                      capability.color === 'blue' ? 'bg-blue-100' :
                      capability.color === 'green' ? 'bg-green-100' :
                      capability.color === 'orange' ? 'bg-orange-100' :
                      'bg-purple-100'
                    }`}>
                      <capability.icon className={`w-8 h-8 ${
                        capability.color === 'blue' ? 'text-blue-600' :
                        capability.color === 'green' ? 'text-green-600' :
                        capability.color === 'orange' ? 'text-orange-600' :
                        'text-purple-600'
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{capability.title}</h3>
                      <p className="text-gray-600">{capability.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {capability.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-orange-50 to-orange-100">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Our <span className="text-orange-600">Vision</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  To become Africa's financial operating system, enabling any individual or business 
                  to participate in the global economy without friction—regardless of borders, 
                  infrastructure, or background.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-white p-8 rounded-3xl shadow-2xl">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Transaction Volume</h3>
                    <p className="text-gray-600">Last 30 days</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Total Transfers</span>
                      <span className="font-semibold text-orange-600">Pending</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Active Users</span>
                      <span className="font-semibold text-orange-600">Pending</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Success Rate</span>
                      <span className="font-semibold text-green-600">Pending</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <CTASection />

        {/* Download Choice Modal */}
        <DownloadChoiceModal
          isOpen={isDownloadModalOpen}
          onClose={() => setIsDownloadModalOpen(false)}
        />
      </div>
    </>
  )
}

export default AnnitaPayPage
