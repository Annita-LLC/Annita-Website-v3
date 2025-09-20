'use client'

import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Truck, 
  MapPin, 
  Clock, 
  Package, 
  ArrowRight,
  CheckCircle,
  Sparkles,
  Zap,
  Target,
  Award,
  Users,
  Activity,
  Route,
  Navigation,
  Timer,
  AlertCircle,
  Star,
  TrendingUp,
  Globe,
  Shield
} from 'lucide-react'
import Button from '@/components/ui/Button'

const LogisticsFeature = () => {
  const [currentDelivery, setCurrentDelivery] = useState({
    id: '12345',
    status: 'in_transit',
    progress: 75,
    estimatedTime: '2 hours',
    driver: 'John Driver',
    vehicle: 'Toyota Hilux',
    location: 'Lagos Mainland'
  })
  const [liveStats, setLiveStats] = useState({
    activeDeliveries: 234,
    onTimeDelivery: 98.5,
    drivers: 156,
    cities: 45
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        activeDeliveries: prev.activeDeliveries + Math.floor(Math.random() * 3),
        onTimeDelivery: prev.onTimeDelivery + (Math.random() * 0.1 - 0.05),
        drivers: prev.drivers + Math.floor(Math.random() * 2),
        cities: prev.cities
      }))
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const features = [
    'Vendor integration',
    'Same-day/next-day delivery',
    'Real-time tracking',
    'Warehousing & inventory management'
  ]

  const deliverySteps = [
    { step: 'Order Placed', status: 'completed', time: '09:00 AM' },
    { step: 'Processing', status: 'completed', time: '09:15 AM' },
    { step: 'In Transit', status: 'active', time: '10:30 AM' },
    { step: 'Out for Delivery', status: 'pending', time: 'Estimated 12:30 PM' },
    { step: 'Delivered', status: 'pending', time: 'Estimated 2:30 PM' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
    >
      {/* Content */}
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6"
        >
          <Truck className="w-8 h-8 text-white" />
        </motion.div>
        
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl lg:text-3xl font-bold text-orange-600 mb-2"
        >
          Annita Logistics
        </motion.h3>
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg font-medium text-primary-600 mb-4 flex items-center"
        >
          On-Demand Delivery Network
          <Route className="w-5 h-5 ml-2 text-orange-500" />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-gray-600 mb-6 leading-relaxed"
        >
          Streamlined logistics for MSMEs without their own fleets. Real-time tracking 
          and same-day delivery options with <span className="text-orange-600 font-semibold">AI-powered route optimization</span>.
        </motion.p>

        {/* Live Performance Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 gap-4 mb-6"
        >
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 border border-orange-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-orange-600">{liveStats.onTimeDelivery.toFixed(1)}%</div>
                <div className="text-sm text-orange-600">On-Time Delivery</div>
              </div>
              <Timer className="w-6 h-6 text-orange-500" />
            </div>
            <div className="flex items-center mt-2">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-xs text-green-600">+2.3% this week</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-blue-600">{liveStats.cities}</div>
                <div className="text-sm text-blue-600">Cities Covered</div>
              </div>
              <Globe className="w-6 h-6 text-blue-500" />
            </div>
            <div className="flex items-center mt-2">
              <Shield className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-xs text-green-600">Secure delivery</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="space-y-3 mb-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              className="flex items-center space-x-3"
            >
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <Button className="group">
            Track Delivery
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      {/* Interactive Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative"
      >
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-6 lg:p-8 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-8 left-6 w-16 h-16 bg-red-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
          
          {/* Demo Image Interface */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-soft border border-gray-200 relative z-10">
            <div className="text-center mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Annita Logistics Demo</h3>
              <p className="text-xs sm:text-sm text-gray-600">Real-time Tracking</p>
            </div>

            {/* Large Demo Image */}
            <div className="relative mx-auto group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-gray-100 bg-gradient-to-br from-gray-50 to-white p-2">
                <img 
                  src="/images/DEMO-Images/Annita Logistics.webp" 
                  alt="Annita Logistics Demo" 
                  className="w-full h-auto rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-xl pointer-events-none"></div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-sm -z-10"></div>
            </div>

          </div>
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center"
        >
          <Navigation className="w-4 h-4 text-white" />
        </motion.div>
        
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
        >
          <Package className="w-3 h-3 text-white" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default LogisticsFeature
