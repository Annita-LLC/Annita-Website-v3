'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Activity, 
  ShoppingCart, 
  CreditCard, 
  Truck, 
  Users,
  TrendingUp,
  Bell,
  X
} from 'lucide-react'

interface ActivityItem {
  id: string
  type: 'payment' | 'order' | 'delivery' | 'user' | 'trend'
  message: string
  time: string
  icon: any
  color: string
}

const LiveActivity = () => {
  const [activities, setActivities] = useState<ActivityItem[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show the component after a delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    // Generate sample activities
    const sampleActivities: ActivityItem[] = [
      {
        id: '1',
        type: 'payment',
        message: 'New payment processed via AnnitaPay',
        time: '2 min ago',
        icon: CreditCard,
        color: 'text-green-500'
      },
      {
        id: '2',
        type: 'order',
        message: 'Order #12345 placed successfully',
        time: '5 min ago',
        icon: ShoppingCart,
        color: 'text-blue-500'
      },
      {
        id: '3',
        type: 'delivery',
        message: 'Package delivered to customer',
        time: '8 min ago',
        icon: Truck,
        color: 'text-purple-500'
      },
      {
        id: '4',
        type: 'user',
        message: 'New user registered',
        time: '12 min ago',
        icon: Users,
        color: 'text-orange-500'
      },
      {
        id: '5',
        type: 'trend',
        message: 'Sales increased by 15% today',
        time: '15 min ago',
        icon: TrendingUp,
        color: 'text-emerald-500'
      }
    ]

    setActivities(sampleActivities)

    // Add new activities periodically
    const interval = setInterval(() => {
      const newActivity: ActivityItem = {
        id: Date.now().toString(),
        type: 'payment',
        message: 'Payment processed via AnnitaPay',
        time: 'Just now',
        icon: CreditCard,
        color: 'text-green-500'
      }

      setActivities(prev => [newActivity, ...prev.slice(0, 4)])
    }, 10000) // Add new activity every 10 seconds

    return () => clearInterval(interval)
  }, [isVisible])

  const removeActivity = (id: string) => {
    setActivities(prev => prev.filter(activity => activity.id !== id))
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <AnimatePresence>
        {activities.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 w-80 max-h-96 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Activity className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-orange-600">Live Activity</h3>
                  <p className="text-xs text-gray-500">Real-time updates</p>
                </div>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>

            {/* Activity List */}
            <div className="space-y-3 max-h-64 overflow-y-auto">
              <AnimatePresence>
                {activities.map((activity) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                  >
                    <div className={`w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform ${activity.color}`}>
                      <activity.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900 font-medium">{activity.message}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                    <button
                      onClick={() => removeActivity(activity.id)}
                      className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-200 rounded transition-all"
                    >
                      <X className="w-3 h-3 text-gray-400" />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="mt-4 pt-3 border-t border-gray-200">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{activities.length} activities</span>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Live</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LiveActivity
