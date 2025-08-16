import { Metadata } from 'next'
import { 
  Activity, 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Clock,
  RefreshCw,
  Wifi,
  Server,
  Database,
  Shield,
  Globe,
  Zap
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'System Status - Annita Services',
  description: 'Real-time status of all Annita services including payments, marketplace, logistics, and API endpoints.',
}

const StatusPage = () => {
  const services = [
    {
      name: 'AnnitaPay',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '45ms',
      icon: Shield,
      description: 'Payment processing and transactions'
    },
    {
      name: 'Marketplace',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '120ms',
      icon: Globe,
      description: 'E-commerce platform and product listings'
    },
    {
      name: 'Logistics API',
      status: 'operational',
      uptime: '99.92%',
      responseTime: '85ms',
      icon: Server,
      description: 'Delivery tracking and logistics'
    },
    {
      name: 'User Authentication',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '25ms',
      icon: Database,
      description: 'User login and account management'
    },
    {
      name: 'Analytics',
      status: 'degraded',
      uptime: '98.5%',
      responseTime: '200ms',
      icon: Activity,
      description: 'Data analytics and reporting'
    },
    {
      name: 'Mobile App API',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '65ms',
      icon: Wifi,
      description: 'Mobile application backend'
    }
  ]

  const incidents = [
    {
      title: 'Analytics Service Performance',
      status: 'investigating',
      time: '2 hours ago',
      description: 'We are investigating increased response times for analytics queries.'
    },
    {
      title: 'Scheduled Maintenance - Complete',
      status: 'resolved',
      time: '1 day ago',
      description: 'Database maintenance has been completed successfully.'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-600 bg-green-100'
      case 'degraded':
        return 'text-yellow-600 bg-yellow-100'
      case 'investigating':
        return 'text-orange-600 bg-orange-100'
      case 'resolved':
        return 'text-blue-600 bg-blue-100'
      default:
        return 'text-red-600 bg-red-100'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return CheckCircle
      case 'degraded':
        return AlertTriangle
      case 'investigating':
        return Clock
      case 'resolved':
        return CheckCircle
      default:
        return XCircle
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Activity className="w-10 h-10" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              System Status
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8">
              Real-time status of all Annita services and systems
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-white/80">
              <div className="flex items-center space-x-2">
                <RefreshCw className="w-4 h-4" />
                <span>Last updated: Just now</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overall Status */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  All Systems Operational
                </h2>
                <p className="text-lg text-gray-600">
                  Most services are running normally. We're investigating one minor issue.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-green-50 rounded-2xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">99.7%</div>
                  <div className="text-sm text-gray-600">Overall Uptime</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-2xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5/6</div>
                  <div className="text-sm text-gray-600">Services Operational</div>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-2xl">
                  <div className="text-3xl font-bold text-orange-600 mb-2">1</div>
                  <div className="text-sm text-gray-600">Active Incidents</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Service Status
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-time status of all Annita services and their performance metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const StatusIcon = getStatusIcon(service.status)
              return (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-soft">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                    <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">{service.name}</h3>
                        <p className="text-xs sm:text-sm text-gray-600">{service.description}</p>
                      </div>
                    </div>
                    <div className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium flex items-center space-x-1 sm:space-x-2 ${getStatusColor(service.status)} flex-shrink-0`}>
                      <StatusIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="capitalize">{service.status}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="text-lg font-bold text-gray-900">{service.uptime}</div>
                      <div className="text-xs text-gray-600">Uptime</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="text-lg font-bold text-gray-900">{service.responseTime}</div>
                      <div className="text-xs text-gray-600">Response Time</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Recent Incidents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Updates on any ongoing issues or recent maintenance activities.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {incidents.map((incident, index) => {
                const StatusIcon = getStatusIcon(incident.status)
                return (
                  <div key={index} className="bg-white rounded-3xl p-8 shadow-soft">
                                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div className="flex items-center space-x-3 mb-3 sm:mb-0">
                      <div className={`p-2 rounded-lg ${getStatusColor(incident.status)} flex-shrink-0`}>
                        <StatusIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900">{incident.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-500">{incident.time}</p>
                      </div>
                    </div>
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium capitalize ${getStatusColor(incident.status)} flex-shrink-0 self-start sm:self-auto`}>
                      {incident.status}
                    </span>
                  </div>
                    <p className="text-gray-600">{incident.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
              
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Stay Updated
                </h2>
                <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Get real-time notifications about service updates, maintenance schedules, and incident reports.
                </p>
                
                <div className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3 bg-white/10 backdrop-blur-sm rounded-2xl p-2">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200"
                    />
                    <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 shadow-lg">
                      Subscribe
                    </button>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-center space-x-6 text-sm text-blue-200">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>Instant notifications</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4" />
                      <span>Privacy protected</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StatusPage
