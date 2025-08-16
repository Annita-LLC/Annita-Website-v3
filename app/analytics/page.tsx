"use client"

import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Eye,
  ShoppingCart,
  Globe,
  Smartphone,
  Download,
  Filter,
  Calendar,
  Target,
  ArrowUpRight,
  PieChart,
  Activity
} from 'lucide-react'
import SEOHead from '@/components/seo/SEOHead'

const AnalyticsPage = () => {
  const overviewStats = [
    { title: 'Total Revenue', value: '$47,892', change: '+23.5%', icon: DollarSign, color: 'text-green-600' },
    { title: 'Total Orders', value: '1,247', change: '+18.2%', icon: ShoppingCart, color: 'text-blue-600' },
    { title: 'Active Users', value: '8,934', change: '+12.7%', icon: Users, color: 'text-purple-600' },
    { title: 'Conversion Rate', value: '3.2%', change: '+5.4%', icon: Target, color: 'text-orange-600' }
  ]

  const trafficSources = [
    { source: 'Direct', percentage: 45, users: 4021, color: 'bg-blue-500' },
    { source: 'Organic Search', percentage: 32, users: 2859, color: 'bg-green-500' },
    { source: 'Social Media', percentage: 15, users: 1340, color: 'bg-purple-500' },
    { source: 'Referral', percentage: 8, users: 714, color: 'bg-orange-500' }
  ]

  const topProducts = [
    { name: 'Organic Coffee Beans', revenue: '$12,450', orders: 249, growth: '+18%' },
    { name: 'Handmade Jewelry', revenue: '$8,920', orders: 178, growth: '+12%' },
    { name: 'Artisan Soap', revenue: '$6,780', orders: 135, growth: '+25%' },
    { name: 'Traditional Textiles', revenue: '$5,430', orders: 108, growth: '+8%' },
    { name: 'Local Honey', revenue: '$4,210', orders: 84, growth: '+15%' }
  ]

  const customerSegments = [
    { segment: 'New Customers', count: 2847, percentage: 32, color: 'bg-blue-500' },
    { segment: 'Returning Customers', count: 4123, percentage: 46, color: 'bg-green-500' },
    { segment: 'VIP Customers', count: 1964, percentage: 22, color: 'bg-purple-500' }
  ]

  const analyticsStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Annita Analytics",
    "description": "Advanced analytics and business intelligence for tracking performance, customer behavior, and growth metrics",
    "url": "https://annita.com/analytics",
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
      "Business Intelligence",
      "Performance Tracking",
      "Customer Behavior Analysis",
      "Growth Metrics",
      "Real-time Analytics",
      "Custom Dashboards",
      "Data Export",
      "Predictive Analytics"
    ]
  }

  return (
    <>
      <SEOHead
        title="Analytics - Business Intelligence & Insights"
        description="Advanced analytics and business intelligence for your Annita business. Track performance, customer behavior, and growth metrics with real-time dashboards, custom reports, and predictive analytics. Monitor revenue, orders, users, and conversion rates."
        keywords={[
          'analytics',
          'business intelligence',
          'data analytics',
          'performance tracking',
          'customer behavior',
          'growth metrics',
          'business insights',
          'real-time analytics',
          'custom dashboards',
          'data visualization',
          'predictive analytics',
          'business metrics',
          'revenue tracking',
          'order analytics',
          'user analytics',
          'conversion tracking',
          'traffic sources',
          'customer segments',
          'product performance',
          'sales analytics',
          'marketing analytics',
          'e-commerce analytics',
          'business reporting',
          'data export',
          'business dashboard',
          'performance monitoring',
          'key performance indicators',
          'KPI tracking',
          'business metrics',
          'analytics platform',
          'data analysis',
          'business intelligence platform',
          'African business analytics',
          'MSME analytics',
          'small business analytics',
          'digital analytics',
          'web analytics',
          'mobile analytics',
          'cross-platform analytics'
        ]}
        canonical="/analytics"
        ogImage="/analytics-og-image.jpg"
        structuredData={analyticsStructuredData}
      />
      <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-orange-600">Analytics</h1>
              <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-500">
                <span>Business Intelligence & Insights</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <select className="text-sm border border-gray-300 rounded-lg px-3 py-2">
                <option>Last 30 days</option>
                <option>Last 7 days</option>
                <option>Last 90 days</option>
                <option>Custom range</option>
              </select>
              <button className="btn-sm bg-blue-600 text-white hover:bg-blue-700">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {overviewStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className={`text-sm font-medium ${stat.color} mt-1`}>
                    {stat.change} from last period
                  </p>
                </div>
                <div className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Revenue Chart */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-soft">
            <div className="flex items-center justify-between mb-6">
                              <h2 className="text-lg font-semibold text-orange-600">Revenue Trends</h2>
              <div className="flex items-center space-x-2">
                <button className="text-sm text-gray-600 hover:text-gray-900">Daily</button>
                <button className="text-sm text-blue-600 font-medium">Weekly</button>
                <button className="text-sm text-gray-600 hover:text-gray-900">Monthly</button>
              </div>
            </div>
            <div className="h-80 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <p className="text-gray-600">Revenue trend chart will be displayed here</p>
                <p className="text-sm text-gray-500">Interactive line chart with real-time data</p>
              </div>
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="bg-white rounded-2xl p-6 shadow-soft">
                            <h2 className="text-lg font-semibold text-orange-600 mb-6">Traffic Sources</h2>
            <div className="space-y-4">
              {trafficSources.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${source.color}`}></div>
                    <div>
                      <p className="font-medium text-gray-900">{source.source}</p>
                      <p className="text-sm text-gray-600">{source.users.toLocaleString()} users</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{source.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Total Traffic</span>
                <span className="font-semibold text-gray-900">8,934 users</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Top Products Performance */}
          <div className="bg-white rounded-2xl p-6 shadow-soft">
            <div className="flex items-center justify-between mb-6">
                              <h2 className="text-lg font-semibold text-orange-600">Top Products Performance</h2>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View all
              </button>
            </div>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-600">{product.orders} orders</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{product.revenue}</p>
                    <p className="text-sm text-green-600 font-medium">{product.growth}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Segments */}
          <div className="bg-white rounded-2xl p-6 shadow-soft">
                            <h2 className="text-lg font-semibold text-orange-600 mb-6">Customer Segments</h2>
            <div className="space-y-4">
              {customerSegments.map((segment, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${segment.color}`}></div>
                    <div>
                      <p className="font-medium text-gray-900">{segment.segment}</p>
                      <p className="text-sm text-gray-600">{segment.count} customers</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{segment.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Total Customers</span>
                <span className="font-semibold text-gray-900">8,934</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Analytics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Geographic Distribution */}
          <div className="bg-white rounded-2xl p-6 shadow-soft">
            <div className="flex items-center justify-between mb-4">
                              <h3 className="font-semibold text-orange-600">Geographic Distribution</h3>
              <Globe className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Liberia</span>
                <span className="text-sm font-medium text-gray-900">45%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Ghana</span>
                <span className="text-sm font-medium text-gray-900">28%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Nigeria</span>
                <span className="text-sm font-medium text-gray-900">15%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Other</span>
                <span className="text-sm font-medium text-gray-900">12%</span>
              </div>
            </div>
          </div>

          {/* Device Usage */}
          <div className="bg-white rounded-2xl p-6 shadow-soft">
            <div className="flex items-center justify-between mb-4">
                              <h3 className="font-semibold text-orange-600">Device Usage</h3>
              <Smartphone className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Mobile</span>
                <span className="text-sm font-medium text-gray-900">78%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Desktop</span>
                <span className="text-sm font-medium text-gray-900">18%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Tablet</span>
                <span className="text-sm font-medium text-gray-900">4%</span>
              </div>
            </div>
          </div>

          {/* Conversion Funnel */}
          <div className="bg-white rounded-2xl p-6 shadow-soft">
            <div className="flex items-center justify-between mb-4">
                              <h3 className="font-semibold text-orange-600">Conversion Funnel</h3>
              <Target className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Visitors</span>
                <span className="text-sm font-medium text-gray-900">100%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Add to Cart</span>
                <span className="text-sm font-medium text-gray-900">23%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Checkout</span>
                <span className="text-sm font-medium text-gray-900">8%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Purchase</span>
                <span className="text-sm font-medium text-gray-900">3.2%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6" />
            </div>
                            <h3 className="font-semibold text-orange-600 mb-2">Custom Reports</h3>
            <p className="text-blue-100 text-sm mb-4">Create detailed custom reports</p>
            <button className="text-white hover:text-blue-100 text-sm font-medium">
              Create Report →
            </button>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <Activity className="w-6 h-6" />
            </div>
                            <h3 className="font-semibold text-orange-600 mb-2">Real-time Monitoring</h3>
            <p className="text-green-100 text-sm mb-4">Monitor live performance</p>
            <button className="text-white hover:text-green-100 text-sm font-medium">
              View Live Data →
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <PieChart className="w-6 h-6" />
            </div>
                            <h3 className="font-semibold text-orange-600 mb-2">Advanced Analytics</h3>
            <p className="text-purple-100 text-sm mb-4">Deep dive into data</p>
            <button className="text-white hover:text-purple-100 text-sm font-medium">
              Explore Data →
            </button>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <Download className="w-6 h-6" />
            </div>
                            <h3 className="font-semibold text-orange-600 mb-2">Export Data</h3>
            <p className="text-orange-100 text-sm mb-4">Download reports & data</p>
            <button className="text-white hover:text-orange-100 text-sm font-medium">
              Export Now →
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default AnalyticsPage
