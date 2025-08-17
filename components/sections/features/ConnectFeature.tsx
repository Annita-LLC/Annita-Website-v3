'use client'

import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  MessageSquare, 
  BarChart3, 
  Target, 
  Users, 
  ArrowRight,
  CheckCircle,
  Sparkles,
  Zap,
  Award,
  Activity,
  TrendingUp,
  Globe,
  Shield,
  Mail,
  Phone,
  Video,
  Camera,
  Heart,
  Share,
  Eye,
  MousePointer,
  Lightbulb
} from 'lucide-react'
import Button from '@/components/ui/Button'

const ConnectFeature = () => {
  const [campaignStats, setCampaignStats] = useState({
    reach: 2400,
    engagement: 89,
    conversions: 156,
    revenue: 12500
  })
  const [liveMetrics, setLiveMetrics] = useState({
    activeCampaigns: 23,
    totalReach: 45600,
    avgEngagement: 92.5,
    customerSatisfaction: 98.2
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setCampaignStats(prev => ({
        reach: prev.reach + Math.floor(Math.random() * 10),
        engagement: prev.engagement + (Math.random() * 2 - 1),
        conversions: prev.conversions + Math.floor(Math.random() * 3),
        revenue: prev.revenue + Math.floor(Math.random() * 50)
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const features = [
    'Targeted advertising',
    'Customer engagement tools',
    'AI-driven insights',
    'Analytics and reporting'
  ]

  const marketingChannels = [
    { name: 'Social Media', icon: Share, reach: 1200, engagement: 94, color: 'blue' },
    { name: 'Email Marketing', icon: Mail, reach: 800, engagement: 87, color: 'green' },
    { name: 'SMS Campaigns', icon: Phone, reach: 400, engagement: 91, color: 'orange' }
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
          className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6"
        >
          <MessageSquare className="w-8 h-8 text-white" />
        </motion.div>
        
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl lg:text-3xl font-bold text-orange-600 mb-2"
        >
          Annita Connect
        </motion.h3>
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg font-medium text-primary-600 mb-4 flex items-center"
        >
          Communication & Marketing Suite
          <Target className="w-5 h-5 ml-2 text-purple-500" />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-gray-600 mb-6 leading-relaxed"
        >
          Lowers customer acquisition costs through affordable, data-backed marketing 
          and customer engagement tools with <span className="text-orange-600 font-semibold">AI-powered audience targeting</span>.
        </motion.p>

        {/* Live Performance Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 gap-4 mb-6"
        >
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-purple-600">{liveMetrics.avgEngagement.toFixed(1)}%</div>
                <div className="text-sm text-purple-600">Avg Engagement</div>
              </div>
              <Heart className="w-6 h-6 text-purple-500" />
            </div>
            <div className="flex items-center mt-2">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-xs text-green-600">+5.2% this month</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-blue-600">{liveMetrics.activeCampaigns}</div>
                <div className="text-sm text-blue-600">Active Campaigns</div>
              </div>
              <Target className="w-6 h-6 text-blue-500" />
            </div>
            <div className="flex items-center mt-2">
              <Activity className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-xs text-green-600">Running smoothly</span>
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
            Start Campaign
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
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6 lg:p-8 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-8 left-6 w-16 h-16 bg-pink-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
          
          {/* Main interface */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-soft border border-gray-200 relative z-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Annita Connect</div>
                  <div className="text-sm text-gray-500">Marketing Dashboard</div>
                </div>
              </div>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>

            {/* Campaign Performance */}
            <div className="bg-purple-50 rounded-lg p-3 border border-purple-200 mb-4">
              <div className="flex items-center space-x-2 mb-2">
                <BarChart3 className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-900">Campaign Performance</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="text-gray-600">Reach</div>
                  <div className="font-semibold text-purple-900">{campaignStats.reach.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-gray-600">Engagement</div>
                  <div className="font-semibold text-purple-900">{campaignStats.engagement.toFixed(1)}%</div>
                </div>
                <div>
                  <div className="text-gray-600">Conversions</div>
                  <div className="font-semibold text-purple-900">{campaignStats.conversions}</div>
                </div>
                <div>
                  <div className="text-gray-600">Revenue</div>
                  <div className="font-semibold text-purple-900">${campaignStats.revenue.toLocaleString()}</div>
                </div>
              </div>
            </div>

            {/* Marketing Channels */}
            <div className="space-y-3 mb-4">
              <div className="text-sm font-medium text-gray-700">Active Channels</div>
              {marketingChannels.map((channel, index) => (
                <motion.div
                  key={channel.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      channel.color === 'blue' ? 'bg-blue-100' :
                      channel.color === 'green' ? 'bg-green-100' : 'bg-orange-100'
                    }`}>
                      <channel.icon className={`w-4 h-4 ${
                        channel.color === 'blue' ? 'text-blue-600' :
                        channel.color === 'green' ? 'text-green-600' : 'text-orange-600'
                      }`} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{channel.name}</div>
                      <div className="text-xs text-gray-500">{channel.reach} reach</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-green-600">{channel.engagement}%</div>
                    <div className="text-xs text-gray-500">engagement</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2 mb-4">
              <button className="flex-1 bg-purple-600 text-white rounded-lg py-2 text-sm font-medium flex items-center justify-center">
                <MousePointer className="w-4 h-4 mr-2" />
                Create Ad
              </button>
              <button className="flex-1 bg-gray-100 text-gray-700 rounded-lg py-2 text-sm font-medium flex items-center justify-center">
                <BarChart3 className="w-4 h-4 mr-2" />
                Analytics
              </button>
            </div>

            {/* AI Insights */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-3 border border-orange-200">
              <div className="flex items-center space-x-2 mb-2">
                <Lightbulb className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-medium text-orange-900">AI Insight</span>
              </div>
              <div className="text-xs text-orange-800">
                "Your email campaigns perform 23% better on Tuesdays. Consider scheduling more campaigns for optimal engagement."
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <Eye className="w-4 h-4 text-gray-500 mr-1" />
                  <span className="text-gray-600">{liveMetrics.totalReach.toLocaleString()} total reach</span>
                </div>
                <div className="flex items-center">
                  <Heart className="w-4 h-4 text-red-500 mr-1" />
                  <span className="text-gray-600">{liveMetrics.customerSatisfaction}% satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center"
        >
          <Target className="w-4 h-4 text-white" />
        </motion.div>
        
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center"
        >
          <MessageSquare className="w-3 h-3 text-white" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default ConnectFeature
