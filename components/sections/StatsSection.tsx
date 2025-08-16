'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Users, 
  TrendingUp, 
  Globe, 
  DollarSign,
  ShoppingCart,
  CreditCard,
  Truck,
  MessageSquare,
  Award,
  Target,
  Zap,
  Heart
} from 'lucide-react'

const StatsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    {
      icon: Users,
      number: 450,
      suffix: 'M+',
      label: 'MSMEs in Africa',
      description: 'Target market size',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      number: 3000,
      suffix: '+',
      label: 'Active Vendors',
      description: 'Onboarded sellers',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: DollarSign,
      number: 17,
      suffix: 'K',
      label: 'Revenue (2024)',
      description: 'Annual growth',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Globe,
      number: 54,
      suffix: '',
      label: 'African Countries',
      description: 'AfCFTA coverage',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: ShoppingCart,
      number: 1500,
      suffix: '+',
      label: 'Active Buyers',
      description: 'Platform users',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Award,
      number: 1,
      suffix: 'st',
      label: 'Place Winner',
      description: 'Orange Social Venture Prize',
      color: 'from-red-500 to-pink-500'
    }
  ]

  const features = [
    {
      icon: CreditCard,
      title: 'AnnitaPay',
      description: 'Secure payment gateway with escrow services',
      metric: '99.9%',
      metricLabel: 'Security Rate'
    },
    {
      icon: Truck,
      title: 'Annita Logistics',
      description: 'On-demand delivery network',
      metric: '24h',
      metricLabel: 'Delivery Time'
    },
    {
      icon: MessageSquare,
      title: 'Annita Connect',
      description: 'Communication & marketing suite',
      metric: '90%',
      metricLabel: 'Engagement Rate'
    },
    {
      icon: Zap,
      title: 'AI Analytics',
      description: 'Intelligent business insights',
      metric: '75%',
      metricLabel: 'Efficiency Boost'
    }
  ]

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-600 mb-4 sm:mb-6">
            Transforming Africa's{' '}
            <span className="text-orange-500">Digital Economy</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform is driving unprecedented growth and innovation across Africa, 
            empowering millions of businesses to thrive in the digital age.
          </p>
        </motion.div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="stat-card group hover:shadow-medium transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="stat-number">
                {isInView ? (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {stat.number}
                  </motion.span>
                ) : (
                  stat.number
                )}
                {stat.suffix}
              </div>
              <div className="stat-label font-semibold text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Growth Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16 sm:mb-20"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-orange-600 text-center mb-8 sm:mb-12">
            Our Growth Journey
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500" />
            
            <div className="space-y-8 sm:space-y-12">
              {[
                { year: '2021', title: 'Platform Launch', metric: '$500', description: 'Initial revenue generation' },
                { year: '2022', title: 'Market Expansion', metric: '$2.5K', description: '400% revenue growth' },
                { year: '2023', title: 'Award Recognition', metric: '$8K', description: 'Orange Social Venture Prize Winner' },
                { year: '2024', title: 'Pan-African Scale', metric: '$17K', description: 'Top 50 Businesses in Africa' },
                { year: '2025', title: 'Future Vision', metric: '$35K+', description: 'Projected revenue target' }
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className={`flex flex-col sm:flex-row items-center ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                >
                  <div className="w-full sm:w-1/2 px-4 sm:px-8 mb-4 sm:mb-0">
                    <div className={`bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-soft border border-gray-200 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="text-2xl sm:text-3xl font-bold text-orange-500 mb-1 sm:mb-2">{item.year}</div>
                      <div className="text-lg sm:text-xl font-semibold text-orange-600 mb-1 sm:mb-2">{item.title}</div>
                      <div className="text-xl sm:text-2xl font-bold text-primary-600 mb-1">{item.metric}</div>
                      <div className="text-sm sm:text-base text-gray-600">{item.description}</div>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full shadow-lg border-3 sm:border-4 border-white" />
                  </div>
                  
                  <div className="w-full sm:w-1/2 px-4 sm:px-8" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Platform Features Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-orange-600 text-center mb-8 sm:mb-12">
            Platform Performance Metrics
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="feature-card group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-orange-600 mb-1 sm:mb-2">{feature.title}</h4>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">{feature.description}</p>
                <div className="flex items-baseline space-x-2">
                  <span className="text-xl sm:text-2xl font-bold text-orange-500">{feature.metric}</span>
                  <span className="text-xs sm:text-sm text-gray-500">{feature.metricLabel}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 lg:p-12">
            <Heart className="w-12 h-12 text-primary-600 mx-auto mb-6" />
            <h3 className="text-2xl lg:text-3xl font-bold text-orange-600 mb-4">
              Empowering Africa's Future
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              We're not just building a platform—we're creating opportunities for millions of Africans 
              to participate in the global digital economy, fostering sustainable growth and prosperity.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4 text-primary-600" />
                <span>5M MSMEs by 2029</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-primary-600" />
                <span>Cross-border trade enabled</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-primary-600" />
                <span>Women empowerment focus</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StatsSection
