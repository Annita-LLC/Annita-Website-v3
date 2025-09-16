'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Users, 
  DollarSign, 
  Store, 
  TrendingUp, 
  Globe, 
  MapPin, 
  Calendar,
  Award,
  Target,
  BarChart3,
  Download,
  Star,
  CheckCircle,
  Zap,
  Shield,
  Heart,
  Activity,
  Building,
  ExternalLink
} from 'lucide-react'
import Button from '@/components/ui/Button'
import WaitlistForm from '@/components/ui/WaitlistForm'
import DownloadChoiceModal from '@/components/ui/DownloadChoiceModal'
import CTASection from '@/components/sections/CTASection'

const FactsheetPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)

  const keyMetrics = [
    {
      icon: Store,
      value: "3,000+",
      label: "Total Sellers Onboarded",
      description: "Since 2021 across all markets",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      value: "800+",
      label: "Active Selling MSMEs",
      description: "Currently active vendors",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      value: "1,500+",
      label: "Total Buyers",
      description: "Registered customer base",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: DollarSign,
      value: "500+",
      label: "Active Paying Buyers",
      description: "Regular purchasing customers",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: TrendingUp,
      value: "$85",
      label: "Avg. Revenue/Seller",
      description: "Annual revenue per seller",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: DollarSign,
      value: "$50",
      label: "Avg. Transaction Value",
      description: "Average order value",
      color: "from-red-500 to-red-600"
    }
  ]

  const performanceMetrics = [
    { metric: "Customer Acquisition Cost (CAC)", value: "$4.00", description: "Cost to acquire new customers" },
    { metric: "Repeat Purchase Rate", value: "75%", description: "Percentage of customers who make repeat purchases" },
    { metric: "Customer Satisfaction Rate", value: "90%", description: "Overall customer satisfaction score" },
    { metric: "Seller Retention Rate", value: "70%", description: "Percentage of sellers who remain active" }
  ]

  const revenueData = [
    { year: "2021", revenue: "$500", growth: "MVP launch", phase: "Initial product launch" },
    { year: "2022", revenue: "$2,500", growth: "+400%", phase: "Early traction phase" },
    { year: "2023", revenue: "$8,000", growth: "+220%", phase: "Rapid scaling period" },
    { year: "2024", revenue: "$17,000", growth: "+112%", phase: "Market validation" },
    { year: "2025", revenue: "$30,000-35,000", growth: "+75-105%", phase: "Sustainable growth projection" }
  ]

  const keyAchievements = [
    {
      icon: Award,
      title: "1st Place - Orange Social Venture Prize 2024",
      description: "Annita was awarded 1st Place in the Orange Social Venture Prize 2024 – Liberia National Grand Prize, receiving a $3,000 USD grant for our innovative digital platform.",
      date: "2024",
      impact: "Received $3,000 USD grant for platform development"
    },
    {
      icon: Users,
      title: "Enterprise African Network (EAN) Fellowship",
      description: "Annita has been selected as one of the 50 innovative small businesses for the inaugural Enterprise African Network (EAN) Fellowship Programme, participating in the prestigious third AU Micro, Small, and Medium Enterprise (MSME) Forum.",
      date: "2024",
      impact: "Selected among 50 innovative businesses across Africa"
    },
    {
      icon: Target,
      title: "9th Place Winner - SMART Liberia ESP",
      description: "Back-to-back wins as the 9th place winner at SMART Liberia's ESP, receiving the L$75,000 prize for our innovative business model and social impact.",
      date: "2024",
      impact: "Received L$75,000 prize for business innovation"
    },
    {
      icon: Building,
      title: "Mansa Platform Partnership",
      description: "Annita joins the Mansa platform, strengthening our position in the African business ecosystem and expanding our reach across the continent.",
      date: "2024",
      impact: "Enhanced business credibility and continental reach"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Page Header */}
      <section className="pt-20 pb-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4 mr-2" />
              Official Factsheet
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Annita LLC Factsheet
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
              Comprehensive overview of our business performance, growth trajectory, and key achievements.
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-500">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Last Updated: December 2024</span>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Key Metrics */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Key Business Metrics
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Core performance indicators as of December 2024.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {keyMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-3 sm:p-4 bg-gradient-to-r ${metric.color} rounded-xl mr-4`}>
                      <metric.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                        {metric.value}
                      </div>
                      <div className="text-base sm:text-lg font-semibold text-gray-700">
                        {metric.label}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">{metric.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Growth */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Revenue Growth Trajectory
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Consistent year-over-year growth demonstrating market validation and scalability.
              </p>
            </motion.div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 sm:px-6 py-4 text-left text-sm font-semibold text-gray-900">Year</th>
                      <th className="px-4 sm:px-6 py-4 text-left text-sm font-semibold text-gray-900">Annual Revenue</th>
                      <th className="px-4 sm:px-6 py-4 text-left text-sm font-semibold text-gray-900">Growth Rate</th>
                      <th className="px-4 sm:px-6 py-4 text-left text-sm font-semibold text-gray-900">Business Phase</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {revenueData.map((data, index) => (
                      <motion.tr
                        key={data.year}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.05 * index }}
                        className={`hover:bg-gray-50 transition-colors ${
                          data.year === '2024' ? 'bg-orange-50' : ''
                        }`}
                      >
                        <td className="px-4 sm:px-6 py-4 text-sm font-medium text-gray-900">
                          {data.year}
                          {data.year === '2024' && (
                            <span className="ml-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                              Current
                            </span>
                          )}
                        </td>
                        <td className="px-4 sm:px-6 py-4 text-sm font-semibold text-orange-600">
                          {data.revenue}
                        </td>
                        <td className="px-4 sm:px-6 py-4 text-sm text-green-600 font-semibold">
                          {data.growth}
                        </td>
                        <td className="px-4 sm:px-6 py-4 text-sm text-gray-600">
                          {data.phase}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Current Run Rate Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 sm:p-8 text-white text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <Activity className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Current Monthly Run Rate</h3>
              <div className="text-3xl sm:text-4xl font-bold mb-2">$1,800+</div>
              <p className="text-orange-100">Q4 2024 Performance</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Performance & Efficiency Metrics
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Key performance indicators demonstrating operational excellence and customer satisfaction.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {performanceMetrics.map((metric, index) => (
                <motion.div
                  key={metric.metric}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">
                      {metric.value}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                      {metric.metric}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {metric.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Key Achievements & Recognition
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Milestones and recognition that validate our impact and innovation in the African market.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {keyAchievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-orange-100 rounded-xl flex-shrink-0">
                      <achievement.icon className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                          {achievement.title}
                        </h3>
                        <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {achievement.date}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3 text-sm sm:text-base">
                        {achievement.description}
                      </p>
                      <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4 text-orange-600" />
                          <span className="text-sm font-medium text-orange-800">Impact:</span>
                        </div>
                        <p className="text-sm text-orange-700 mt-1">{achievement.impact}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Waitlist Form Modal */}
      <WaitlistForm
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />

      {/* Download Choice Modal */}
      <DownloadChoiceModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </div>
  )
}

export default FactsheetPage