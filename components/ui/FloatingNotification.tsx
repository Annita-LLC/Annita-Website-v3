'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Bell, 
  X, 
  CheckCircle, 
  AlertCircle, 
  Info,
  ShoppingCart,
  CreditCard,
  Users
} from 'lucide-react'

interface Notification {
  id: string
  type: 'success' | 'info' | 'warning'
  title: string
  message: string
  icon: any
  duration?: number
}

const FloatingNotification = () => {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show notifications after a delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const sampleNotifications: Notification[] = [
      {
        id: '1',
        type: 'success',
        title: 'Payment Successful',
        message: 'Your payment of $150 has been processed',
        icon: CreditCard,
        duration: 5000
      },
      {
        id: '2',
        type: 'info',
        title: 'New Feature',
        message: 'AI-powered recommendations now available',
        icon: Info,
        duration: 6000
      },
      {
        id: '3',
        type: 'success',
        title: 'Order Confirmed',
        message: 'Your order #12345 has been confirmed',
        icon: ShoppingCart,
        duration: 4000
      }
    ]

    // Add notifications with delays
    sampleNotifications.forEach((notification, index) => {
      setTimeout(() => {
        addNotification(notification)
      }, index * 3000) // Add each notification 3 seconds apart
    })

    // Continue adding random notifications
    const interval = setInterval(() => {
      const randomNotifications = [
        {
          id: Date.now().toString(),
          type: 'success' as const,
          title: 'New User',
          message: 'Welcome to Annita!',
          icon: Users,
          duration: 4000
        },
        {
          id: (Date.now() + 1).toString(),
          type: 'info' as const,
          title: 'System Update',
          message: 'Platform performance improved',
          icon: Info,
          duration: 5000
        }
      ]

      const randomNotification = randomNotifications[Math.floor(Math.random() * randomNotifications.length)]
      addNotification(randomNotification)
    }, 15000) // Add new notification every 15 seconds

    return () => clearInterval(interval)
  }, [isVisible])

  const addNotification = (notification: Notification) => {
    setNotifications(prev => [...prev, notification])

    // Auto-remove notification after duration
    if (notification.duration) {
      setTimeout(() => {
        removeNotification(notification.id)
      }, notification.duration)
    }
  }

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id))
  }

  const getNotificationStyles = (type: string) => {
    switch (type) {
      case 'success':
        return {
          bg: 'bg-green-50 border-green-200',
          icon: 'text-green-600',
          title: 'text-green-900',
          message: 'text-green-700'
        }
      case 'warning':
        return {
          bg: 'bg-yellow-50 border-yellow-200',
          icon: 'text-yellow-600',
          title: 'text-yellow-900',
          message: 'text-yellow-700'
        }
      default:
        return {
          bg: 'bg-blue-50 border-blue-200',
          icon: 'text-blue-600',
          title: 'text-blue-900',
          message: 'text-blue-700'
        }
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed top-4 right-4 z-50 space-y-3">
      <AnimatePresence>
        {notifications.map((notification) => {
          const styles = getNotificationStyles(notification.type)
          
          return (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, x: 300, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 300, scale: 0.8 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className={`${styles.bg} border rounded-2xl p-4 shadow-lg max-w-sm`}
            >
              <div className="flex items-start space-x-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${styles.icon} bg-white/50`}>
                  <notification.icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className={`font-semibold text-sm text-orange-600 ${styles.title}`}>
                    {notification.title}
                  </h4>
                  <p className={`text-sm ${styles.message} mt-1`}>
                    {notification.message}
                  </p>
                </div>
                <button
                  onClick={() => removeNotification(notification.id)}
                  className="p-1 hover:bg-white/50 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}

export default FloatingNotification
