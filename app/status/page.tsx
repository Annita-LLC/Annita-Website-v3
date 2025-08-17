"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import { CheckCircle, AlertCircle, XCircle, Clock, Activity, Wifi, Server, Database, Shield, Zap } from 'lucide-react'

const StatusPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const services = [
    {
      id: 'website',
      name: 'Website',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '120ms',
      lastIncident: '2024-02-15',
      description: 'Main website and landing pages'
    },
    {
      id: 'api',
      name: 'API Services',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '85ms',
      lastIncident: '2024-02-10',
      description: 'REST API and GraphQL endpoints'
    },
    {
      id: 'payments',
      name: 'Payment Processing',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '200ms',
      lastIncident: '2024-01-28',
      description: 'AnnitaPay and transaction processing'
    },
    {
      id: 'marketplace',
      name: 'Marketplace',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '150ms',
      lastIncident: '2024-02-05',
      description: 'E-commerce platform and product catalog'
    },
    {
      id: 'logistics',
      name: 'Logistics',
      status: 'operational',
      uptime: '99.96%',
      responseTime: '180ms',
      lastIncident: '2024-02-12',
      description: 'Delivery tracking and logistics management'
    },
    {
      id: 'ai',
      name: 'AI Services',
      status: 'operational',
      uptime: '99.94%',
      responseTime: '300ms',
      lastIncident: '2024-02-08',
      description: 'Artificial intelligence and machine learning'
    },
    {
      id: 'database',
      name: 'Database',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '50ms',
      lastIncident: '2024-01-20',
      description: 'Primary and backup databases'
    },
    {
      id: 'cdn',
      name: 'CDN',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '25ms',
      lastIncident: '2024-02-01',
      description: 'Content delivery network'
    }
  ]

  const incidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - API Services',
      status: 'resolved',
      date: '2024-02-15',
      time: '02:00 - 04:00 UTC',
      description: 'Routine maintenance to improve API performance and security.',
      affected: ['API Services'],
      severity: 'low'
    },
    {
      id: 2,
      title: 'Database Performance Optimization',
      status: 'resolved',
      date: '2024-02-10',
      time: '01:00 - 02:30 UTC',
      description: 'Database optimization to improve query performance.',
      affected: ['Database', 'API Services'],
      severity: 'medium'
    },
    {
      id: 3,
      title: 'CDN Configuration Update',
      status: 'resolved',
      date: '2024-02-01',
      time: '00:00 - 01:00 UTC',
      description: 'Updated CDN configuration for better global performance.',
      affected: ['CDN', 'Website'],
      severity: 'low'
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'degraded':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-500" />
      default:
        return <Clock className="w-5 h-5 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-600 bg-green-100'
      case 'degraded':
        return 'text-yellow-600 bg-yellow-100'
      case 'outage':
        return 'text-red-600 bg-red-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'text-green-600 bg-green-100'
      case 'medium':
        return 'text-yellow-600 bg-yellow-100'
      case 'high':
        return 'text-red-600 bg-red-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  const overallStatus = services.every(service => service.status === 'operational') ? 'operational' : 'degraded'

  return (
    <>
      <SEOHead
        title="System Status - Annita LLC"
        description="Check the real-time status of Annita's services, uptime, and any ongoing incidents."
        keywords="status, uptime, system health, incidents, monitoring, Annita"
        canonical="/status"
        ogImage="/images/status-page.jpg"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600"></div>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                {getStatusIcon(overallStatus)}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                  System <span className="text-orange-200">Status</span>
                </h1>
              </div>
              <p className="text-xl sm:text-2xl text-orange-100 max-w-3xl mx-auto mb-8">
                Real-time monitoring of all Annita services
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white/20 px-4 py-2 rounded-full">
                  Last updated: {currentTime.toLocaleTimeString()}
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full">
                  Overall Uptime: 99.97%
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full">
                  8 Services Monitored
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Overall Status */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Overall <span className="text-orange-600">Status</span>
              </h2>
              <div className="flex items-center justify-center gap-4 mb-8">
                {getStatusIcon(overallStatus)}
                <span className={`text-lg font-semibold px-4 py-2 rounded-full ${getStatusColor(overallStatus)}`}>
                  {overallStatus === 'operational' ? 'All Systems Operational' : 'Some Issues Detected'}
                </span>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">8</div>
                <div className="text-gray-600">Services Operational</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">99.97%</div>
                <div className="text-gray-600">Overall Uptime</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">120ms</div>
                <div className="text-gray-600">Avg Response Time</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">0</div>
                <div className="text-gray-600">Active Incidents</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Status */}
        <section className="py-16 sm:py-20" ref={ref}>
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Service <span className="text-orange-600">Status</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Real-time status of all our services and systems
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(service.status)}
                        <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                      </div>
                      <span className={`text-sm font-semibold px-3 py-1 rounded-full ${getStatusColor(service.status)}`}>
                        {service.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-gray-500">Uptime</div>
                        <div className="font-semibold text-gray-900">{service.uptime}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Response</div>
                        <div className="font-semibold text-gray-900">{service.responseTime}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Last Incident</div>
                        <div className="font-semibold text-gray-900">{service.lastIncident}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-gray-50 to-white">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Recent <span className="text-orange-600">Incidents</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Historical incidents and maintenance updates
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {incidents.map((incident, index) => (
                <motion.div
                  key={incident.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(incident.status)}
                      <h3 className="text-lg font-bold text-gray-900">{incident.title}</h3>
                    </div>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getSeverityColor(incident.severity)}`}>
                      {incident.severity}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-500">Date:</span>
                      <span className="ml-2 font-medium">{incident.date}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Time:</span>
                      <span className="ml-2 font-medium">{incident.time}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{incident.description}</p>
                  
                  <div>
                    <span className="text-gray-500 text-sm">Affected Services:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {incident.affected.map((service, serviceIndex) => (
                        <span
                          key={serviceIndex}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe to Updates */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
                Get notified about service updates and incidents
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                />
                <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default StatusPage
