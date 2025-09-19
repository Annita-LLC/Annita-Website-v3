"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import CTASection from '@/components/sections/CTASection'
import MobilePOSFeature from '@/components/sections/MobilePOSFeature'
import {
  Building,
  CreditCard,
  Shield,
  Zap,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Download,
  Play,
  Star,
  BarChart3,
  Activity,
  Globe,
  Clock,
  DollarSign,
  Receipt,
  Lock,
  Smartphone,
  Database,
  Banknote,
  Wifi,
  WifiOff,
  QrCode,
  Fingerprint,
  Eye,
  EyeOff,
  Settings,
  Network,
  Cpu,
  Server,
  Cloud,
  Key,
  FileText,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info,
  HelpCircle,
  MessageSquare,
  Phone,
  Mail,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Target,
  Award,
  Heart,
  Lightbulb,
  Rocket,
  Layers,
  Workflow,
  GitBranch,
  Code,
  Terminal,
  Monitor,
  Tablet,
  Laptop,
  Building2,
  Brain,
  MapPin
} from 'lucide-react'

const AnnitaPayBusinessPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: Building,
      title: "Merchant Services",
      description: "Smart payment tools for small businesses to large enterprises with instant settlement and real-time dashboards",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Bank & PSP Partnerships",
      description: "Interconnected with local banks, mobile money operators, and global financial rails",
      color: "green"
    },
    {
      icon: Zap,
      title: "Bridge-Powered Stablecoin Infrastructure",
      description: "Orchestrate, issue, and convert stablecoins with seamless API control and lower FX costs",
      color: "orange"
    },
    {
      icon: Globe,
      title: "Cross-Border Transactions",
      description: "Send and receive money instantly across countries, 24/7, at a fraction of traditional cost",
      color: "purple"
    },
    {
      icon: Smartphone,
      title: "Online + Offline Support",
      description: "Works with or without internet. USSD & SMS-based systems for unbanked or low-connectivity regions",
      color: "indigo"
    },
    {
      icon: Users,
      title: "Pan-African Agent Network",
      description: "Agents across rural and urban areas for cash-in, cash-out, and merchant support",
      color: "teal"
    }
  ]

  const businessSolutions = [
    {
      name: "Digital Wallets",
      icon: "💳",
      description: "Secure, multi-currency wallets built for scale",
      shortDescription: "Store, send, receive local currency, USD, and stablecoins with offline access via USSD and QR codes.",
      features: ["Multi-currency support", "Offline access via USSD", "Gasless blockchain transactions", "Built-in biometric security"],
      pricing: "Competitive rates"
    },
    {
      name: "Merchant Services",
      icon: "🏪",
      description: "Smart payment tools for businesses",
      shortDescription: "Instant settlement and real-time dashboards with QR/NFC payments, recurring billing, and POS device compatibility.",
      features: ["Instant settlement", "QR/NFC payments", "POS device compatibility", "Bulk payouts"],
      pricing: "Competitive rates"
    },
    {
      name: "Stablecoin Infrastructure",
      icon: "🪙",
      description: "Bridge-powered stablecoin services",
      shortDescription: "Orchestrate, issue, and convert stablecoins with seamless API control and lower FX costs.",
      features: ["Orchestration API", "Issue branded stablecoins", "Cross-chain capabilities", "Global payments"],
      pricing: "Competitive rates"
    },
    {
      name: "Card Infrastructure",
      icon: "💳",
      description: "Create cards usable online and in-store",
      shortDescription: "Debit/reward cards with business expense control and global reach with local compliance.",
      features: ["Debit/reward cards", "Business expense control", "Global reach", "Local compliance"],
      pricing: "Competitive rates"
    },
    {
      name: "Cross-Border Payments",
      icon: "🌍",
      description: "Send global payments with local FX integration",
      shortDescription: "Instant settlement with no hidden fees and compliant with local KYC/AML requirements.",
      features: ["Instant settlement", "No hidden fees", "Local KYC/AML compliance", "Global reach"],
      pricing: "Competitive rates"
    },
    {
      name: "API & SDK Integration",
      icon: "🔌",
      description: "Seamless platform integration",
      shortDescription: "RESTful and GraphQL APIs with developer-ready SDKs for Android, iOS, and Web integration.",
      features: ["RESTful APIs", "GraphQL APIs", "Android/iOS SDKs", "Web SDKs"],
      pricing: "Competitive rates"
    }
  ]

  const businessStats = [
    {
      title: "Businesses Served",
      value: "Pending",
      change: "Pending",
      icon: "🏢",
      color: "blue"
    },
    {
      title: "Transaction Volume",
      value: "Pending",
      change: "Pending",
      icon: "💰",
      color: "green"
    },
    {
      title: "Success Rate",
      value: "Pending",
      change: "Pending",
      icon: "✅",
      color: "orange"
    },
    {
      title: "Countries",
      value: "Pending",
      change: "Pending",
      icon: "🌍",
      color: "purple"
    }
  ]

  const benefits = [
    "Bank-grade security with biometric login and two-factor auth",
    "Interconnected with local banks and global financial rails",
    "Works online and offline with USSD & SMS-based systems",
    "Pan-African agent network for cash-in, cash-out, and merchant support",
    "Multi-currency wallets and physical/virtual cards usable globally",
    "Instant cross-border transactions at a fraction of traditional cost"
  ]

  const enterpriseFeatures = [
    {
      title: "Enterprise API Suite",
      description: "Comprehensive APIs for seamless business integration",
      features: [
        "RESTful and GraphQL APIs",
        "Real-time webhooks and notifications",
        "Bulk payment processing",
        "Advanced reporting and analytics",
        "White-label solutions",
        "Custom integration support"
      ],
      icon: Code,
      color: "blue"
    },
    {
      title: "Advanced Analytics Dashboard",
      description: "Real-time business intelligence and insights",
      features: [
        "Revenue tracking and forecasting",
        "Customer behavior analysis",
        "Transaction pattern recognition",
        "Fraud detection metrics",
        "Performance benchmarking",
        "Custom reporting tools"
      ],
      icon: BarChart3,
      color: "green"
    },
    {
      title: "Multi-Channel Payment Processing",
      description: "Accept payments across all channels and devices",
      features: [
        "Online payment gateway",
        "Mobile POS solutions",
        "QR code payments",
        "NFC contactless payments",
        "Recurring billing automation",
        "Invoice management system"
      ],
      icon: CreditCard,
      color: "orange"
    },
    {
      title: "Compliance & Risk Management",
      description: "Built-in compliance tools for regulatory requirements",
      features: [
        "KYC/AML automation",
        "Transaction monitoring",
        "Regulatory reporting",
        "Risk assessment tools",
        "Audit trail management",
        "Compliance dashboards"
      ],
      icon: Shield,
      color: "purple"
    }
  ]

  const technicalSpecifications = [
    {
      category: "Performance",
      specs: [
        { name: "Transaction Processing", value: "10,000+ TPS", icon: Zap },
        { name: "API Response Time", value: "< 100ms", icon: Clock },
        { name: "Uptime SLA", value: "99.99%", icon: Activity },
        { name: "Global Latency", value: "< 50ms", icon: Globe }
      ]
    },
    {
      category: "Security",
      specs: [
        { name: "Encryption Standard", value: "AES-256", icon: Lock },
        { name: "Authentication", value: "Multi-Factor", icon: Key },
        { name: "Compliance", value: "PCI DSS Level 1", icon: Shield },
        { name: "Fraud Detection", value: "AI-Powered", icon: Brain }
      ]
    },
    {
      category: "Scalability",
      specs: [
        { name: "Concurrent Users", value: "1M+", icon: Users },
        { name: "Transaction Volume", value: "Unlimited", icon: TrendingUp },
        { name: "Geographic Coverage", value: "54 Countries", icon: MapPin },
        { name: "Currency Support", value: "100+", icon: DollarSign }
      ]
    }
  ]

  const integrationOptions = [
    {
      platform: "E-commerce Platforms",
      description: "Seamless integration with popular e-commerce solutions",
      integrations: ["Shopify", "WooCommerce", "Magento", "PrestaShop", "OpenCart", "Custom Solutions"],
      icon: Monitor,
      color: "blue"
    },
    {
      platform: "Mobile Applications",
      description: "Native SDKs for iOS and Android development",
      integrations: ["iOS SDK", "Android SDK", "React Native", "Flutter", "Xamarin", "Cordova"],
      icon: Smartphone,
      color: "green"
    },
    {
      platform: "Enterprise Systems",
      description: "Integration with enterprise resource planning and CRM systems",
      integrations: ["SAP", "Oracle", "Salesforce", "Microsoft Dynamics", "NetSuite", "Custom ERP"],
      icon: Building2,
      color: "orange"
    },
    {
      platform: "Banking Systems",
      description: "Direct integration with banking and financial infrastructure",
      integrations: ["SWIFT", "ACH", "SEPA", "Local Banking APIs", "Mobile Money", "Cryptocurrency"],
      icon: Banknote,
      color: "purple"
    }
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AnnitaPay Business - Business Payment Solutions",
    "description": "Comprehensive business payment solutions with secure processing, multi-currency support, and advanced analytics. Built for businesses of all sizes.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "2.9",
      // "priceCurrency": "USD" // Pricing available on pricing page
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "2500"
    }
  }

  return (
    <>
      <SEOHead
        title="AnnitaPay Business - Business Payment Solutions | Annita LLC"
        description="Comprehensive business payment solutions with secure processing, multi-currency support, and advanced analytics. Built for businesses of all sizes."
        keywords={[
          'AnnitaPay Business',
          'business payment solutions',
          'payment gateway',
          'point of sale',
          'recurring billing',
          'invoice management',
          'business analytics',
          'payment processing',
          'merchant services',
          'business payments',
          'payment API',
          'enterprise payments',
          'multi-currency payments',
          'payment security',
          'business finance'
        ]}
        canonical="/services/annitapay-business"
        ogImage="/annitapay-business-og-image.jpg"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                  <Building className="w-4 h-4 mr-2" />
                  Business Payment Solutions
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6">
                  AnnitaPay™ <span className="text-blue-600">Business</span> - Enterprise Solutions
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                  High-performance digital finance infrastructure for enterprises and institutions. 
                  Real-time, secure, and compliant services to store, send, receive, issue, and manage money globally. 
                  Built as a cornerstone of the Annita Ecosystem—Africa's first all-in-one super app.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                    <Download className="w-5 h-5 mr-2" />
                    Start Free Trial
                  </button>
                  <button 
                    className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center"
                    onClick={() => window.location.href = '/demo'}
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                    <Building className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Dashboard</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">💰</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Today's Revenue</h4>
                          <p className="text-sm text-gray-600">All transactions</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-green-600">$12,450</div>
                        <div className="text-sm text-gray-600">+15% vs yesterday</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">📊</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Success Rate</h4>
                          <p className="text-sm text-gray-600">Payment processing</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-blue-600">99.9%</div>
                        <div className="text-sm text-gray-600">Last 24 hours</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20" ref={ref}>
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Complete <span className="text-blue-600">Business</span> Solutions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Everything your business needs to accept payments, manage finances, and grow revenue 
                with enterprise-grade security and reliability.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    feature.color === 'blue' ? 'bg-blue-100' :
                    feature.color === 'green' ? 'bg-green-100' :
                    feature.color === 'orange' ? 'bg-orange-100' :
                    feature.color === 'purple' ? 'bg-purple-100' :
                    feature.color === 'indigo' ? 'bg-indigo-100' :
                    'bg-teal-100'
                  }`}>
                    <feature.icon className={`w-6 h-6 ${
                      feature.color === 'blue' ? 'text-blue-600' :
                      feature.color === 'green' ? 'text-green-600' :
                      feature.color === 'orange' ? 'text-orange-600' :
                      feature.color === 'purple' ? 'text-purple-600' :
                      feature.color === 'indigo' ? 'text-indigo-600' :
                      'text-teal-600'
                    }`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Solutions Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Business <span className="text-blue-600">Solutions</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the right payment solution for your business needs and scale as you grow.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {businessSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                                     <h3 className="text-xl font-semibold text-gray-900 mb-2">{solution.name}</h3>
                   <p className="text-gray-600 text-sm mb-4">{solution.shortDescription}</p>
                  <ul className="space-y-2 mb-4">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-blue-600 font-semibold text-sm">{solution.pricing}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Features Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Enterprise <span className="text-blue-600">Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced tools and capabilities designed for large-scale business operations and enterprise requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {enterpriseFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mr-4 ${
                      feature.color === 'blue' ? 'bg-blue-100' :
                      feature.color === 'green' ? 'bg-green-100' :
                      feature.color === 'orange' ? 'bg-orange-100' :
                      'bg-purple-100'
                    }`}>
                      <feature.icon className={`w-8 h-8 ${
                        feature.color === 'blue' ? 'text-blue-600' :
                        feature.color === 'green' ? 'text-green-600' :
                        feature.color === 'orange' ? 'text-orange-600' :
                        'text-purple-600'
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Technical <span className="text-blue-600">Specifications</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Enterprise-grade performance metrics and technical capabilities that power your business operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {technicalSpecifications.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{category.category}</h3>
                  <div className="space-y-4">
                    {category.specs.map((spec, specIndex) => (
                      <div key={specIndex} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <spec.icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{spec.name}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-blue-600">{spec.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Options Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Integration <span className="text-blue-600">Options</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Seamlessly integrate AnnitaPay Business with your existing systems and platforms.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {integrationOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mr-4 ${
                      option.color === 'blue' ? 'bg-blue-100' :
                      option.color === 'green' ? 'bg-green-100' :
                      option.color === 'orange' ? 'bg-orange-100' :
                      'bg-purple-100'
                    }`}>
                      <option.icon className={`w-8 h-8 ${
                        option.color === 'blue' ? 'text-blue-600' :
                        option.color === 'green' ? 'text-green-600' :
                        option.color === 'orange' ? 'text-orange-600' :
                        'text-purple-600'
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{option.platform}</h3>
                      <p className="text-gray-600 text-sm">{option.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {option.integrations.map((integration, integrationIndex) => (
                      <div key={integrationIndex} className="flex items-center space-x-2 p-2 bg-white rounded-lg border border-gray-200">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{integration}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Statistics Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Trusted by <span className="text-blue-600">Businesses</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of businesses already using AnnitaPay Business to grow their revenue.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {businessStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{stat.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.title}</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                    <div className="flex items-center justify-center space-x-1">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-green-600 text-sm font-medium">{stat.change}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-gray-50 to-white">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Our <span className="text-blue-600">Vision</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  To become Africa's financial operating system, enabling any individual or business 
                  to participate in the global economy without friction—regardless of borders, 
                  infrastructure, or background.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-3xl shadow-2xl">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Business Impact</h3>
                    <p className="text-gray-600">Average results</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Revenue Growth</span>
                      <span className="font-semibold text-blue-600">Pending</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Processing Costs</span>
                      <span className="font-semibold text-green-600">Pending</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Customer Satisfaction</span>
                      <span className="font-semibold text-orange-600">Pending</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mobile POS Feature Section */}
        <MobilePOSFeature />

        {/* CTA Section */}
        <CTASection />
      </div>
    </>
  )
}

export default AnnitaPayBusinessPage
