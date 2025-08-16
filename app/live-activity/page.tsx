'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Activity, CreditCard, ShoppingCart, Truck, Users, Zap, Clock, MapPin, DollarSign } from 'lucide-react'
import FloatingNotification from '@/components/ui/FloatingNotification'
import LiveActivity from '@/components/ui/LiveActivity'

const LiveActivityPage = () => {
  const [activities, setActivities] = useState<any[]>([])
  const [filter, setFilter] = useState('all')

  const generateActivity = () => {
    const types = ['payment', 'order', 'delivery', 'user', 'system']
    const type = types[Math.floor(Math.random() * types.length)]
    const locations = ['Lagos, Nigeria', 'Nairobi, Kenya', 'Cairo, Egypt', 'Johannesburg, SA', 'Accra, Ghana']
    const amounts = ['$1,247', '$856', '$2,134', '$543', '$1,892']
    
    const activityData = {
      payment: { title: 'Payment Processed', description: 'Secure transaction completed', icon: CreditCard, color: 'from-green-500 to-emerald-500' },
      order: { title: 'New Order Placed', description: 'Customer order received', icon: ShoppingCart, color: 'from-blue-500 to-cyan-500' },
      delivery: { title: 'Package Delivered', description: 'Order successfully delivered', icon: Truck, color: 'from-orange-500 to-red-500' },
      user: { title: 'New User Joined', description: 'Welcome to Annita platform', icon: Users, color: 'from-purple-500 to-pink-500' },
      system: { title: 'System Update', description: 'Platform optimization completed', icon: Zap, color: 'from-indigo-500 to-purple-500' }
    }

    const data = activityData[type as keyof typeof activityData]
    const timeAgo = Math.floor(Math.random() * 60) + 1

    return {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      type,
      title: data.title,
      description: data.description,
      amount: type === 'payment' || type === 'order' ? amounts[Math.floor(Math.random() * amounts.length)] : undefined,
      location: locations[Math.floor(Math.random() * locations.length)],
      time: `${timeAgo}m ago`,
      status: 'success',
      icon: data.icon,
      color: data.color
    }
  }

  useEffect(() => {
    const initialActivities = Array.from({ length: 20 }, () => generateActivity())
    setActivities(initialActivities)

    const interval = setInterval(() => {
      setActivities(prev => {
        const newActivity = generateActivity()
        return [newActivity, ...prev.slice(0, 49)]
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const filteredActivities = activities.filter(activity => filter === 'all' || activity.type === filter)
  const stats = {
    total: activities.length,
    payments: activities.filter(a => a.type === 'payment').length,
    orders: activities.filter(a => a.type === 'order').length,
    deliveries: activities.filter(a => a.type === 'delivery').length,
    users: activities.filter(a => a.type === 'user').length
  }

  const renderIcon = (icon: any, className: string) => {
    const IconComponent = icon
    return <IconComponent className={className} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6"
            >
              <Activity className="w-8 h-8 sm:w-10 sm:h-10" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4"
            >
              Live Activity Feed
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl mx-auto"
            >
              Real-time updates from across the Annita platform
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-6 sm:py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-3 sm:p-4 shadow-soft text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                {stats.total}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Total Activities</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-3 sm:p-4 shadow-soft text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                {stats.payments}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Payments</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-3 sm:p-4 shadow-soft text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {stats.orders}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Orders</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-3 sm:p-4 shadow-soft text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">
                {stats.deliveries}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Deliveries</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-3 sm:p-4 shadow-soft text-center col-span-2 sm:col-span-1"
            >
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                {stats.users}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">New Users</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Controls Section */}
      <section className="py-4 sm:py-6 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filter:</span>
              {['all', 'payment', 'order', 'delivery', 'user', 'system'].map((filterType) => (
                <button
                  key={filterType}
                  onClick={() => setFilter(filterType)}
                  className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                    filter === filterType
                      ? 'bg-primary-500 text-white shadow-md'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activity Feed */}
      <section className="py-6 sm:py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-3 sm:space-y-4">
              {filteredActivities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-soft border border-gray-100 dark:border-gray-700 hover:shadow-medium transition-all duration-300"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    {/* Icon */}
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${activity.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      {renderIcon(activity.icon, "w-5 h-5 sm:w-6 sm:h-6 text-white")}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-1">
                            {activity.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
                            {activity.description}
                          </p>
                          
                          {/* Details */}
                          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span>{activity.time}</span>
                            </div>
                            
                            {activity.location && (
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                                <span>{activity.location}</span>
                              </div>
                            )}
                            
                            {activity.amount && (
                              <div className="flex items-center space-x-1">
                                <DollarSign className="w-3 h-3 sm:w-4 sm:h-4" />
                                <span className="font-medium text-green-600 dark:text-green-400">
                                  {activity.amount}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Status */}
                        <div className="flex items-center space-x-1 ml-2">
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                            {activity.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Floating Notifications - Only on Live Activity Page */}
      <FloatingNotification />
      
      {/* Live Activity Widget - Only on Live Activity Page */}
      <LiveActivity />
    </div>
  )
}

export default LiveActivityPage
