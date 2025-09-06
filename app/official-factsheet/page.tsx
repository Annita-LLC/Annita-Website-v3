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
  ArrowLeft,
  Download,
  Star,
  CheckCircle,
  Zap,
  Shield,
  Heart,
  Building,
  Activity
} from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import WaitlistForm from '@/components/ui/WaitlistForm'

const OfficialFactsheetPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  const currentMetrics = [
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

  const revenueGrowth = [
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
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <img 
                  src="/images/blog/Annita's Logo.png" 
                  alt="Annita Logo" 
                  className="w-5 h-5 rounded-full object-cover"
                />
              </div>
              <span className="text-lg font-bold text-orange-500">Annita</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                icon={Download}
                onClick={() => window.print()}
              >
                Download PDF
              </Button>
              <Link href="/" className="flex items-center text-gray-600 hover:text-orange-600 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                <Building className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Annita LLC Official Factsheet
            </h1>
            <p className="text-xl sm:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Comprehensive business metrics, growth trajectory, and market performance 
              for Africa's leading offline-ready e-commerce platform.
            </p>
            <div className="flex items-center justify-center space-x-2 text-orange-200">
              <Calendar className="w-5 h-5" />
              <span>Last Updated: December 2024</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Executive Summary
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Annita LLC has demonstrated exceptional growth since its 2021 launch, achieving 
                <span className="font-semibold text-orange-600"> 3,000+ total sellers onboarded</span> and 
                <span className="font-semibold text-orange-600"> $17,000 annual revenue in 2024</span>. 
                With a <span className="font-semibold text-green-600">90% customer satisfaction rate</span> and 
                <span className="font-semibold text-green-600"> 75% repeat purchase rate</span>, 
                Annita is positioned as Africa's premier offline-capable e-commerce platform.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Metrics Section */}
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
                Current Business Metrics
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Key performance indicators as of December 2024.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-4 bg-gradient-to-r ${metric.color} rounded-xl mr-4`}>
                      <metric.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900 mb-1">
                        {metric.value}
                      </div>
                      <div className="text-lg font-semibold text-gray-700">
                        {metric.label}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{metric.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Growth Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Revenue Growth Trajectory (2021-2025)
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Consistent year-over-year growth demonstrating market validation and scalability.
              </p>
            </motion.div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Year</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Annual Revenue</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Growth Rate</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Business Phase</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {revenueGrowth.map((data, index) => (
                      <motion.tr
                        key={data.year}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.05 * index }}
                        className={`hover:bg-gray-50 transition-colors ${
                          data.year === '2024' ? 'bg-orange-50' : ''
                        }`}
                      >
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {data.year}
                          {data.year === '2024' && (
                            <span className="ml-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                              Current
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-orange-600">
                          {data.revenue}
                        </td>
                        <td className="px-6 py-4 text-sm text-green-600 font-semibold">
                          {data.growth}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
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
              className="mt-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <Activity className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Current Monthly Run Rate</h3>
              <div className="text-4xl font-bold mb-2">$1,800+</div>
              <p className="text-orange-100">Q4 2024 Performance</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {performanceMetrics.map((metric, index) => (
                <motion.div
                  key={metric.metric}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">
                      {metric.value}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {metric.metric}
                    </h3>
                    <p className="text-gray-600">
                      {metric.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="py-16 sm:py-20">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {keyAchievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-orange-100 rounded-xl">
                      <achievement.icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {achievement.title}
                        </h3>
                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {achievement.date}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">
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

      {/* Pricing Section */}
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
                Flexible Pricing for Everyone
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. No upfront costs, just sell and earn.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Growth</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">$10</div>
                  <p className="text-gray-600">Perfect for small businesses starting their digital journey</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Marketing credits
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Basic analytics
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Priority support
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Mobile app access
                  </li>
                </ul>
                <button className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                  Get Started
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-orange-500 relative"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">$25</div>
                  <p className="text-gray-600">Ideal for growing businesses and startups</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    All Growth features
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    AI recommendations
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Advanced analytics
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    API access with documentation
                  </li>
                </ul>
                <button className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                  Get Started
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">$50</div>
                  <p className="text-gray-600">For large organizations and corporations</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    All Pro features
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Full AI suite
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Premium analytics
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    White-label solutions
                  </li>
                </ul>
                <button className="w-full bg-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-600 transition-colors">
                  Get Started
                </button>
              </motion.div>
            </div>

            {/* Markup Model Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Markup Base Model</h3>
                <p className="text-gray-600">Vendors can choose between subscription plans or a markup model (5-15%)</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">No transaction fees</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">Transparent pricing</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">Flexible switching</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">14-day free trial</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                <Heart className="w-16 h-16 text-white" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Join Africa's Digital Revolution
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Be part of the platform that's transforming how business is done across Africa. 
              Experience the future of e-commerce with Annita 3.0.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setIsWaitlistOpen(true)}
                variant="white"
                size="lg"
                icon={Star}
                className="text-lg font-bold"
              >
                Join the Waitlist
              </Button>
              <Button
                variant="glass"
                size="lg"
                icon={Globe}
                className="text-lg font-bold backdrop-blur-xl"
                onClick={() => window.open('https://annita.company.site/products', '_blank')}
              >
                Try V1.0 Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Waitlist Form Modal */}
      <WaitlistForm 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </div>
  )
}

export default OfficialFactsheetPage
