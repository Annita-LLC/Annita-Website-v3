import { Metadata } from 'next'
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Package,
  MessageSquare,
  Settings,
  Bell,
  Search,
  Filter,
  Download,
  Eye,
  Plus,
  ArrowUpRight
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Annita Dashboard - Business Management Hub',
  description: 'Manage your Annita business operations, track performance, and grow your digital presence with our comprehensive dashboard.',
}

const DashboardPage = () => {
  const stats = [
    { title: 'Total Revenue', value: '$17,847', change: '+12.5%', icon: DollarSign, color: 'text-green-600' },
    { title: 'Active Orders', value: '156', change: '+8.2%', icon: Package, color: 'text-blue-600' },
    { title: 'New Customers', value: '2,847', change: '+15.3%', icon: Users, color: 'text-purple-600' },
    { title: 'Messages', value: '89', change: '+5.7%', icon: MessageSquare, color: 'text-orange-600' }
  ]

  const recentOrders = [
    { id: '#1234', customer: 'Sarah Johnson', amount: '$247', status: 'Delivered', date: '2 min ago' },
    { id: '#1235', customer: 'Michael Chen', amount: '$189', status: 'In Transit', date: '15 min ago' },
    { id: '#1236', customer: 'Emma Davis', amount: '$456', status: 'Processing', date: '1 hour ago' },
    { id: '#1237', customer: 'David Wilson', amount: '$123', status: 'Delivered', date: '2 hours ago' }
  ]

  const topProducts = [
    { name: 'Organic Coffee Beans', sales: 234, revenue: '$4,680', growth: '+12%' },
    { name: 'Handmade Jewelry', sales: 189, revenue: '$3,780', growth: '+8%' },
    { name: 'Artisan Soap', sales: 156, revenue: '$2,340', growth: '+15%' },
    { name: 'Traditional Textiles', sales: 123, revenue: '$1,845', growth: '+6%' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-500">
                <span>Welcome back,</span>
                <span className="font-medium text-gray-900">Christopher</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Settings className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-medium">
                C
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className={`text-sm font-medium ${stat.color} mt-1`}>
                    {stat.change} from last month
                  </p>
                </div>
                <div className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Revenue Chart */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-soft">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Revenue Overview</h2>
              <div className="flex items-center space-x-2">
                <select className="text-sm border border-gray-300 rounded-lg px-3 py-1">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                </select>
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="h-64 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <p className="text-gray-600">Revenue chart will be displayed here</p>
                <p className="text-sm text-gray-500">Interactive chart with real-time data</p>
              </div>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-2xl p-6 shadow-soft">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View all
              </button>
            </div>
            <div className="space-y-4">
              {recentOrders.map((order, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div>
                    <p className="font-medium text-gray-900">{order.id}</p>
                    <p className="text-sm text-gray-600">{order.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{order.amount}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                      order.status === 'In Transit' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="mt-8 bg-white rounded-2xl p-6 shadow-soft">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Top Performing Products</h2>
            <button className="btn-sm bg-blue-600 text-white hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Product
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Product</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-600">Sales</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-600">Revenue</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-600">Growth</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {topProducts.map((product, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 px-4">
                      <p className="font-medium text-gray-900">{product.name}</p>
                    </td>
                    <td className="py-3 px-4 text-right text-gray-900">{product.sales}</td>
                    <td className="py-3 px-4 text-right text-gray-900">{product.revenue}</td>
                    <td className="py-3 px-4 text-right text-green-600 font-medium">{product.growth}</td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <button className="p-1 text-gray-400 hover:text-gray-600">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-gray-600">
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <Package className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">Manage Orders</h3>
            <p className="text-blue-100 text-sm mb-4">Track and fulfill customer orders</p>
            <button className="text-white hover:text-blue-100 text-sm font-medium">
              View Orders →
            </button>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">Payment Center</h3>
            <p className="text-green-100 text-sm mb-4">Manage payments and transactions</p>
            <button className="text-white hover:text-green-100 text-sm font-medium">
              View Payments →
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">Customer Support</h3>
            <p className="text-purple-100 text-sm mb-4">Handle customer inquiries</p>
            <button className="text-white hover:text-purple-100 text-sm font-medium">
              View Messages →
            </button>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">Analytics</h3>
            <p className="text-orange-100 text-sm mb-4">Deep insights and reports</p>
            <button className="text-white hover:text-orange-100 text-sm font-medium">
              View Analytics →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
