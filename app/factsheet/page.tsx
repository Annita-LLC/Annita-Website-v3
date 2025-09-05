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
  Heart
} from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import WaitlistForm from '@/components/ui/WaitlistForm'

const FactsheetPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

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

  const yearlyData = [
    {
      year: "2021",
      revenue: "$500",
      growth: "MVP launch",
      description: "Initial product launch",
      sellers: "50+",
      buyers: "100+",
      keyMilestones: ["Platform MVP launched", "First 50 sellers onboarded", "Initial market testing"]
    },
    {
      year: "2022", 
      revenue: "$2,500",
      growth: "+400% growth",
      description: "Early traction phase",
      sellers: "300+",
      buyers: "400+",
      keyMilestones: ["400% revenue growth", "300+ sellers onboarded", "Market validation achieved"]
    },
    {
      year: "2023",
      revenue: "$8,000", 
      growth: "+220% growth",
      description: "Rapid scaling period",
      sellers: "1,200+",
      buyers: "800+",
      keyMilestones: ["220% revenue growth", "1,200+ sellers onboarded", "Rapid scaling phase"]
    },
    {
      year: "2024",
      revenue: "$17,000",
      growth: "+112% growth", 
      description: "Market validation",
      sellers: "3,000+",
      buyers: "1,500+",
      keyMilestones: ["112% revenue growth", "3,000+ total sellers", "IATF 2025 partnership", "Monthly run rate: $1,800+"]
    },
    {
      year: "2025",
      revenue: "$30,000-35,000",
      growth: "+75-105% growth",
      description: "Sustainable growth projection",
      sellers: "5,000+ projected",
      buyers: "3,000+ projected", 
      keyMilestones: ["V3.0 launch planned", "Offline functionality", "AI business assistant", "Expanded market reach"]
    }
  ]

  const achievements = [
    {
      icon: Award,
      title: "IATF 2025 Official Partner",
      description: "Selected as official technology partner for Intra-African Trade Fair 2025",
      date: "2024"
    },
    {
      icon: Target,
      title: "100+ Youth Empowered",
      description: "Through The 100 program, providing digital skills and entrepreneurship training",
      date: "2024"
    },
    {
      icon: Shield,
      title: "ISO 27001 Certified",
      description: "Information security management system certification",
      date: "2024"
    },
    {
      icon: Zap,
      title: "Offline-First Innovation",
      description: "Pioneering offline-capable e-commerce platform for Africa",
      date: "2024"
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
                <BarChart3 className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Annita Official Factsheet
            </h1>
            <p className="text-xl sm:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Real traction data, vendor growth metrics, and business performance indicators 
              for Annita LLC since 2021.
            </p>
            <div className="flex items-center justify-center space-x-2 text-orange-200">
              <Calendar className="w-5 h-5" />
              <span>Last Updated: December 2024</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics Section */}
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
                Vendor & Buyer Growth Metrics (2021-2025)
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real traction data showing our growth and performance since 2021.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyMetrics.map((metric, index) => (
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
                Key performance indicators showing our operational efficiency and customer satisfaction.
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

      {/* Year-by-Year Performance Section */}
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
                Year-by-Year Performance (2021-2025)
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Detailed breakdown of our growth journey from MVP launch to market leadership.
              </p>
            </motion.div>

            <div className="space-y-12">
              {yearlyData.map((yearData, index) => (
                <motion.div
                  key={yearData.year}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                    yearData.year === '2024' ? 'border-orange-500' : 'border-gray-100'
                  }`}
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Year Header */}
                    <div className="lg:w-1/4">
                      <div className="text-center lg:text-left">
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{yearData.year}</h3>
                        <div className="text-2xl font-bold text-orange-600 mb-2">
                          {yearData.revenue}
                        </div>
                        <div className="text-sm font-semibold text-green-600 mb-2">
                          {yearData.growth}
                        </div>
                        <p className="text-gray-600 text-sm">
                          {yearData.description}
                        </p>
                        {yearData.year === '2024' && (
                          <div className="mt-3">
                            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                              Current Year
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="lg:w-1/4">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Metrics</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Sellers:</span>
                          <span className="font-semibold text-gray-900">{yearData.sellers}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Buyers:</span>
                          <span className="font-semibold text-gray-900">{yearData.buyers}</span>
                        </div>
                        {yearData.year === '2024' && (
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Monthly Run Rate:</span>
                            <span className="font-semibold text-orange-600">$1,800+</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Milestones */}
                    <div className="lg:w-1/2">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Milestones</h4>
                      <ul className="space-y-2">
                        {yearData.keyMilestones.map((milestone, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {milestone}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
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
                Milestones and recognition that validate our impact and innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
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
                      <p className="text-gray-600">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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

export default FactsheetPage
