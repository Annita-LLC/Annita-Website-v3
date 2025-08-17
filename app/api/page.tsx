"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Code, 
  Zap, 
  Shield, 
  Globe, 
  Download,
  Copy,
  Check,
  Play,
  BookOpen,
  Terminal,
  Database,
  Lock,
  ExternalLink,
  ChevronRight,
  Activity,
  Cpu,
  Wifi,
  BarChart3,
  CreditCard,
  Truck,
  ShoppingCart,
  Users,
  Settings,
  Key,
  Eye,
  Clock,
  AlertCircle,
  CheckCircle,
  XCircle,
  ArrowRight,
  Star,
  GitBranch,
  Package,
  Server,
  Cloud,
  Smartphone,
  Monitor
} from 'lucide-react'
import SEOHead from '@/components/seo/SEOHead'

const APIPage = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('marketplace')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(type)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const apiCategories = [
    {
      id: 'marketplace',
      name: 'Marketplace API',
      description: 'Manage products, orders, and inventory',
      icon: ShoppingCart,
      color: 'from-blue-500 to-cyan-500',
      endpoints: [
        { method: 'GET', path: '/api/v1/products', description: 'List all products', status: 'active' },
        { method: 'POST', path: '/api/v1/products', description: 'Create new product', status: 'active' },
        { method: 'GET', path: '/api/v1/orders', description: 'Get order details', status: 'active' },
        { method: 'PUT', path: '/api/v1/orders/{id}', description: 'Update order status', status: 'active' }
      ]
    },
    {
      id: 'payments',
      name: 'Payments API',
      description: 'Process payments and manage transactions',
      icon: CreditCard,
      color: 'from-green-500 to-emerald-500',
      endpoints: [
        { method: 'POST', path: '/api/v1/payments', description: 'Create payment', status: 'active' },
        { method: 'GET', path: '/api/v1/payments/{id}', description: 'Get payment status', status: 'active' },
        { method: 'POST', path: '/api/v1/refunds', description: 'Process refund', status: 'active' },
        { method: 'GET', path: '/api/v1/transactions', description: 'List transactions', status: 'active' }
      ]
    },
    {
      id: 'logistics',
      name: 'Logistics API',
      description: 'Track shipments and manage delivery',
      icon: Truck,
      color: 'from-orange-500 to-red-500',
      endpoints: [
        { method: 'POST', path: '/api/v1/shipments', description: 'Create shipment', status: 'active' },
        { method: 'GET', path: '/api/v1/shipments/{id}', description: 'Track shipment', status: 'active' },
        { method: 'PUT', path: '/api/v1/shipments/{id}', description: 'Update status', status: 'active' },
        { method: 'GET', path: '/api/v1/carriers', description: 'List carriers', status: 'active' }
      ]
    },
    {
      id: 'analytics',
      name: 'Analytics API',
      description: 'Access business intelligence data',
      icon: BarChart3,
      color: 'from-purple-500 to-pink-500',
      endpoints: [
        { method: 'GET', path: '/api/v1/analytics/revenue', description: 'Revenue data', status: 'active' },
        { method: 'GET', path: '/api/v1/analytics/customers', description: 'Customer insights', status: 'active' },
        { method: 'GET', path: '/api/v1/analytics/products', description: 'Product performance', status: 'active' },
        { method: 'GET', path: '/api/v1/analytics/traffic', description: 'Traffic sources', status: 'active' }
      ]
    }
  ]

  const sdkLanguages = [
    { 
      name: 'JavaScript/Node.js', 
      icon: '⚡', 
      description: 'Official SDK for web and Node.js applications',
      version: 'v2.1.0',
      stars: '1.2k',
      downloads: '50k+'
    },
    { 
      name: 'Python', 
      icon: '🐍', 
      description: 'Python SDK for data analysis and automation',
      version: 'v1.8.2',
      stars: '856',
      downloads: '25k+'
    },
    { 
      name: 'PHP', 
      icon: '🐘', 
      description: 'PHP SDK for web applications',
      version: 'v1.5.1',
      stars: '432',
      downloads: '15k+'
    },
    { 
      name: 'Java', 
      icon: '☕', 
      description: 'Java SDK for enterprise applications',
      version: 'v1.7.0',
      stars: '298',
      downloads: '12k+'
    },
    { 
      name: 'Go', 
      icon: '🐹', 
      description: 'Go SDK for high-performance applications',
      version: 'v1.3.2',
      stars: '187',
      downloads: '8k+'
    },
    { 
      name: 'Ruby', 
      icon: '💎', 
      description: 'Ruby SDK for web development',
      version: 'v1.4.1',
      stars: '156',
      downloads: '6k+'
    }
  ]

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: '99.9% uptime with sub-100ms response times',
      metric: '99.9%',
      metricLabel: 'Uptime'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and OAuth 2.0 authentication',
      metric: '256-bit',
      metricLabel: 'Encryption'
    },
    {
      icon: Globe,
      title: 'Global CDN',
      description: 'Distributed globally for optimal performance',
      metric: '50+',
      metricLabel: 'Regions'
    },
    {
      icon: Database,
      title: 'Real-time Data',
      description: 'WebSocket support for live updates',
      metric: '<100ms',
      metricLabel: 'Latency'
    }
  ]

  const codeExamples = {
    marketplace: `// Create a new product
const product = await annita.products.create({
  name: 'Organic Coffee Beans',
  price: 25.99,
  currency: 'USD',
  description: 'Premium organic coffee from Ethiopia',
  category: 'beverages',
  inventory: 100
});

// List products with pagination
const products = await annita.products.list({
  page: 1,
  limit: 20,
  category: 'beverages'
});`,
    payments: `// Process a payment
const payment = await annita.payments.create({
  amount: 25.99,
  currency: 'USD',
  customer_id: 'cust_123456',
  payment_method: 'card',
  description: 'Payment for Organic Coffee'
});

// Handle webhook events
annita.webhooks.on('payment.succeeded', (event) => {
  console.log('Payment succeeded:', event.data);
});`,
    logistics: `// Create a shipment
const shipment = await annita.logistics.createShipment({
  origin: {
    address: '123 Main St, Monrovia, Liberia',
    contact: 'John Doe',
    phone: '+231123456789'
  },
  destination: {
    address: '456 Oak Ave, Accra, Ghana',
    contact: 'Jane Smith',
    phone: '+233987654321'
  },
  packages: [{
    weight: 2.5,
    dimensions: { length: 30, width: 20, height: 15 }
  }]
});`,
    analytics: `// Get revenue analytics
const revenue = await annita.analytics.getRevenue({
  period: 'last_30_days',
  groupBy: 'day',
  filters: {
    product_category: 'beverages',
    region: 'west_africa'
  }
});

// Track custom events
await annita.analytics.trackEvent({
  event: 'product_viewed',
  properties: {
    product_id: 'prod_123',
    category: 'beverages'
  }
});`
  }

  const apiStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Annita API",
    "description": "Developer platform and APIs for marketplace, payments, logistics, and analytics integrations",
    "url": "https://annita.com/api",
    "applicationCategory": "DeveloperApplication",
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
    }
  }

  const activeCategory = apiCategories.find(cat => cat.id === activeTab)

  return (
    <>
      <SEOHead
        title="Annita API - Developer Platform & Integrations"
        description="Access Annita's powerful APIs for marketplace, payments, logistics, and analytics. Build custom integrations and scale your business with 99.9% uptime, sub-100ms response times, and enterprise security."
        keywords={[
          'Annita API',
          'developer platform',
          'API integrations',
          'marketplace API',
          'payments API',
          'logistics API',
          'analytics API',
          'custom integrations',
          'business scaling',
          'API documentation',
          'SDK',
          'JavaScript SDK',
          'Python SDK',
          'PHP SDK',
          'Java SDK',
          'Go SDK',
          'Ruby SDK',
          'Node.js',
          'webhook support',
          'OAuth 2.0',
          'authentication',
          'bank-level encryption',
          'enterprise security',
          'global CDN',
          'real-time data',
          'WebSocket support',
          'sub-100ms response',
          '99.9% uptime',
          'API endpoints',
          'REST API',
          'GraphQL',
          'developer tools',
          'integration platform',
          'business automation',
          'third-party integrations',
          'API management',
          'developer resources',
          'technical documentation',
          'code examples',
          'API testing',
          'sandbox environment',
          'production API',
          'rate limiting',
          'error handling',
          'API versioning',
          'webhook notifications',
          'data synchronization',
          'business intelligence API',
          'e-commerce API',
          'fintech API',
          'logistics API',
          'African API platform',
          'MSME API solutions'
        ]}
        canonical="/api"
        ogImage="/api-og-image.jpg"
        structuredData={apiStructuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>
          
          <div className="container mx-auto px-2 sm:px-3 lg:px-6 xl:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
                  <Code className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">
                  <span className="text-orange-400">Annita API</span>
                </h1>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Powerful APIs to integrate marketplace, payments, logistics, and analytics 
                into your applications with enterprise-grade reliability
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2 group">
                  <BookOpen className="w-5 h-5" />
                  View Documentation
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-2">
                  <Terminal className="w-5 h-5" />
                  Try API
                </button>
              </div>
              
              {/* API Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 max-w-2xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                  <div className="text-lg sm:text-2xl font-bold text-orange-400">99.9%</div>
                  <div className="text-xs sm:text-sm text-gray-300">Uptime</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                  <div className="text-lg sm:text-2xl font-bold text-orange-400">&lt;100ms</div>
                  <div className="text-xs sm:text-sm text-gray-300">Response Time</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                  <div className="text-lg sm:text-2xl font-bold text-orange-400">50+</div>
                  <div className="text-xs sm:text-sm text-gray-300">Regions</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                  <div className="text-lg sm:text-2xl font-bold text-orange-400">6</div>
                  <div className="text-xs sm:text-sm text-gray-300">SDKs</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20" ref={ref}>
          <div className="container mx-auto px-2 sm:px-3 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-orange-600">Annita API</span>?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Built for scale, security, and simplicity. Our APIs power thousands of 
                businesses across Africa with enterprise-grade reliability.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="text-2xl font-bold text-orange-600">{feature.metric}</div>
                  <div className="text-sm text-gray-500">{feature.metricLabel}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* API Endpoints Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-2 sm:px-3 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
                API <span className="text-orange-600">Endpoints</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive APIs for every aspect of your business operations with real-time monitoring.
              </p>
            </motion.div>

            {/* API Category Tabs */}
            <div className="mb-8">
              <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
                {apiCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                      activeTab === category.id
                        ? 'bg-orange-500 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <category.icon className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">{category.name}</span>
                    <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* API Endpoints Grid */}
            {activeCategory && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg p-6 sm:p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${activeCategory.color} rounded-xl flex items-center justify-center`}>
                    <activeCategory.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{activeCategory.name}</h3>
                    <p className="text-gray-600">{activeCategory.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                  {activeCategory.endpoints.map((endpoint, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-3 sm:p-4 hover:border-orange-300 transition-colors duration-200">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 mb-3">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            endpoint.method === 'GET' ? 'bg-green-100 text-green-700' :
                            endpoint.method === 'POST' ? 'bg-blue-100 text-blue-700' :
                            endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {endpoint.method}
                          </span>
                          <code className="text-xs sm:text-sm font-mono text-gray-700 bg-gray-50 px-2 py-1 rounded break-all">
                            {endpoint.path}
                          </code>
                        </div>
                        <div className="flex items-center gap-2">
                          {endpoint.status === 'active' ? (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          ) : (
                            <XCircle className="w-4 h-4 text-red-500" />
                          )}
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600">{endpoint.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* SDK Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-2 sm:px-3 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
                Official <span className="text-orange-600">SDKs</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Get started quickly with our official SDKs for popular programming languages.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {sdkLanguages.map((sdk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-xl sm:text-2xl">{sdk.icon}</span>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900">{sdk.name}</h3>
                    </div>
                    <div className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {sdk.version}
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{sdk.description}</p>
                  
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                      {sdk.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                      {sdk.downloads}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300">
                      <Download className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                      Download
                    </button>
                    <button className="px-3 sm:px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-50 transition-colors duration-200">
                      <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Example Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="container mx-auto px-2 sm:px-3 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
                Quick <span className="text-orange-400">Start</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Get up and running with Annita API in minutes with our comprehensive examples.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Installation */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="bg-gray-800 rounded-2xl p-4 sm:p-6"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center gap-2">
                  <Package className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                  Installation
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-gray-900 rounded-xl p-3 sm:p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs sm:text-sm text-gray-400">npm</span>
                      <button 
                        onClick={() => copyToClipboard('npm install @annita/api', 'npm')}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {copiedCode === 'npm' ? <Check className="w-3 h-3 sm:w-4 sm:h-4" /> : <Copy className="w-3 h-3 sm:w-4 sm:h-4" />}
                      </button>
                    </div>
                    <code className="text-green-400 font-mono text-xs sm:text-sm">
                      npm install @annita/api
                    </code>
                  </div>
                  <div className="bg-gray-900 rounded-xl p-3 sm:p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs sm:text-sm text-gray-400">yarn</span>
                      <button 
                        onClick={() => copyToClipboard('yarn add @annita/api', 'yarn')}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {copiedCode === 'yarn' ? <Check className="w-3 h-3 sm:w-4 sm:h-4" /> : <Copy className="w-3 h-3 sm:w-4 sm:h-4" />}
                      </button>
                    </div>
                    <code className="text-green-400 font-mono text-xs sm:text-sm">
                      yarn add @annita/api
                    </code>
                  </div>
                </div>
              </motion.div>

              {/* Code Examples */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="bg-gray-800 rounded-2xl p-4 sm:p-6"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center gap-2">
                  <Code className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                  Code Example
                </h3>
                <div className="bg-gray-900 rounded-xl p-3 sm:p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm text-gray-400">JavaScript</span>
                    <button 
                      onClick={() => copyToClipboard(codeExamples[activeTab as keyof typeof codeExamples], 'code')}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {copiedCode === 'code' ? <Check className="w-3 h-3 sm:w-4 sm:h-4" /> : <Copy className="w-3 h-3 sm:w-4 sm:h-4" />}
                    </button>
                  </div>
                  <pre className="text-xs sm:text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap">
                    {codeExamples[activeTab as keyof typeof codeExamples]}
                  </pre>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-2 sm:px-3 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white text-center"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6">
                Ready to <span className="text-orange-200">Build</span>?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-orange-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Start integrating Annita's powerful APIs into your applications today. 
                Join thousands of developers building the future of African commerce.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button className="bg-white text-orange-600 px-4 sm:px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300 flex items-center justify-center gap-2 group">
                  <Key className="w-4 h-4 sm:w-5 sm:h-5" />
                  Get API Key
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white text-white px-4 sm:px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 flex items-center justify-center gap-2">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  View Examples
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default APIPage
