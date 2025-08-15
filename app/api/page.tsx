import { Metadata } from 'next'
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
  Lock
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Annita API - Developer Platform & Integrations',
  description: 'Access Annita\'s powerful APIs for marketplace, payments, logistics, and analytics. Build custom integrations and scale your business.',
}

const APIPage = () => {
  const apiEndpoints = [
    {
      name: 'Marketplace API',
      description: 'Manage products, orders, and inventory',
      endpoints: [
        { method: 'GET', path: '/api/v1/products', description: 'List all products' },
        { method: 'POST', path: '/api/v1/products', description: 'Create new product' },
        { method: 'GET', path: '/api/v1/orders', description: 'Get order details' },
        { method: 'PUT', path: '/api/v1/orders/{id}', description: 'Update order status' }
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Payments API',
      description: 'Process payments and manage transactions',
      endpoints: [
        { method: 'POST', path: '/api/v1/payments', description: 'Create payment' },
        { method: 'GET', path: '/api/v1/payments/{id}', description: 'Get payment status' },
        { method: 'POST', path: '/api/v1/refunds', description: 'Process refund' },
        { method: 'GET', path: '/api/v1/transactions', description: 'List transactions' }
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Logistics API',
      description: 'Track shipments and manage delivery',
      endpoints: [
        { method: 'POST', path: '/api/v1/shipments', description: 'Create shipment' },
        { method: 'GET', path: '/api/v1/shipments/{id}', description: 'Track shipment' },
        { method: 'PUT', path: '/api/v1/shipments/{id}', description: 'Update status' },
        { method: 'GET', path: '/api/v1/carriers', description: 'List carriers' }
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Analytics API',
      description: 'Access business intelligence data',
      endpoints: [
        { method: 'GET', path: '/api/v1/analytics/revenue', description: 'Revenue data' },
        { method: 'GET', path: '/api/v1/analytics/customers', description: 'Customer insights' },
        { method: 'GET', path: '/api/v1/analytics/products', description: 'Product performance' },
        { method: 'GET', path: '/api/v1/analytics/traffic', description: 'Traffic sources' }
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const sdkLanguages = [
    { name: 'JavaScript/Node.js', icon: '⚡', description: 'Official SDK for web and Node.js applications' },
    { name: 'Python', icon: '🐍', description: 'Python SDK for data analysis and automation' },
    { name: 'PHP', icon: '🐘', description: 'PHP SDK for web applications' },
    { name: 'Java', icon: '☕', description: 'Java SDK for enterprise applications' },
    { name: 'Go', icon: '🐹', description: 'Go SDK for high-performance applications' },
    { name: 'Ruby', icon: '💎', description: 'Ruby SDK for web development' }
  ]

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: '99.9% uptime with sub-100ms response times'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and OAuth 2.0 authentication'
    },
    {
      icon: Globe,
      title: 'Global CDN',
      description: 'Distributed globally for optimal performance'
    },
    {
      icon: Database,
      title: 'Real-time Data',
      description: 'WebSocket support for live updates'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Code className="w-10 h-10" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Annita API
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              Powerful APIs to integrate marketplace, payments, logistics, and analytics 
              into your applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-lg bg-blue-600 text-white hover:bg-blue-700 group">
                <BookOpen className="w-5 h-5 mr-2" />
                View Documentation
                <Download className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
              </button>
              <button className="btn-lg border-2 border-white text-white hover:bg-white hover:text-gray-900">
                <Terminal className="w-5 h-5 mr-2" />
                Try API
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Annita API?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for scale, security, and simplicity. Our APIs power thousands of 
              businesses across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card group text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              API Endpoints
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive APIs for every aspect of your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {apiEndpoints.map((api, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-soft">
                <div className={`w-16 h-16 bg-gradient-to-br ${api.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{api.name}</h3>
                <p className="text-gray-600 mb-6">{api.description}</p>
                
                <div className="space-y-3">
                  {api.endpoints.map((endpoint, endpointIndex) => (
                    <div key={endpointIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          endpoint.method === 'GET' ? 'bg-green-100 text-green-700' :
                          endpoint.method === 'POST' ? 'bg-blue-100 text-blue-700' :
                          endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-sm font-mono text-gray-700">{endpoint.path}</code>
                      </div>
                      <span className="text-sm text-gray-600">{endpoint.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDK Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Official SDKs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started quickly with our official SDKs for popular programming languages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdkLanguages.map((sdk, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl">{sdk.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-900">{sdk.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{sdk.description}</p>
                <div className="flex items-center space-x-2">
                  <button className="btn-sm bg-blue-600 text-white hover:bg-blue-700">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                  <button className="btn-sm border border-gray-300 text-gray-700 hover:bg-gray-50">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Docs
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Quick Start
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get up and running with Annita API in minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Installation */}
            <div className="bg-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Installation</h3>
              <div className="bg-gray-900 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">npm</span>
                  <button className="text-gray-400 hover:text-white">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                <code className="text-green-400 font-mono text-sm">
                  npm install @annita/api
                </code>
              </div>
              <div className="bg-gray-900 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">yarn</span>
                  <button className="text-gray-400 hover:text-white">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                <code className="text-green-400 font-mono text-sm">
                  yarn add @annita/api
                </code>
              </div>
            </div>

            {/* Basic Usage */}
            <div className="bg-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Basic Usage</h3>
              <div className="bg-gray-900 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">JavaScript</span>
                  <button className="text-gray-400 hover:text-white">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                <pre className="text-sm text-gray-300 overflow-x-auto">
{`import { AnnitaAPI } from '@annita/api';

const api = new AnnitaAPI('your-api-key');

// Create a product
const product = await api.products.create({
  name: 'Organic Coffee',
  price: 25.99,
  description: 'Premium organic coffee beans'
});

// Process a payment
const payment = await api.payments.create({
  amount: 25.99,
  currency: 'USD',
  customer_id: 'cust_123'
});`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Build?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start integrating Annita's powerful APIs into your applications today. 
              Join thousands of developers building the future of African commerce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-lg bg-white text-blue-600 hover:bg-gray-100 group">
                <Code className="w-5 h-5 mr-2" />
                Get API Key
                <Download className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
              </button>
              <button className="btn-lg border-2 border-white text-white hover:bg-white hover:text-blue-600">
                <Play className="w-5 h-5 mr-2" />
                View Examples
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default APIPage
