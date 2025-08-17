"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import {
  Database,
  Building,
  Users,
  BarChart3,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Download,
  Play,
  Star,
  Activity,
  Clock,
  DollarSign,
  Smartphone,
  Monitor,
  Palette,
  Settings,
  TrendingUp,
  Globe
} from 'lucide-react'

const ERPSystemPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: Database,
      title: "Centralized Data",
      description: "Single source of truth for all business data",
      color: "blue"
    },
    {
      icon: Building,
      title: "Enterprise Ready",
      description: "Scalable solutions for large organizations",
      color: "green"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Instant updates across all modules",
      color: "orange"
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Enterprise-grade security and compliance",
      color: "purple"
    }
  ]

  const erpModules = [
    {
      name: "Financial Management",
      icon: "💰",
      description: "Complete financial control and reporting",
      features: ["General ledger", "Accounts payable/receivable", "Budgeting", "Financial reporting"],
      users: "10K+ businesses"
    },
    {
      name: "Human Resources",
      icon: "👥",
      description: "Comprehensive HR and payroll management",
      features: ["Employee management", "Payroll processing", "Benefits administration", "Performance tracking"],
      users: "8K+ companies"
    },
    {
      name: "Supply Chain",
      icon: "📦",
      description: "End-to-end supply chain optimization",
      features: ["Inventory management", "Procurement", "Warehouse management", "Logistics tracking"],
      users: "12K+ organizations"
    },
    {
      name: "Customer Relationship",
      icon: "🤝",
      description: "360-degree customer view and management",
      features: ["Lead management", "Sales automation", "Customer service", "Marketing automation"],
      users: "15K+ businesses"
    },
    {
      name: "Manufacturing",
      icon: "🏭",
      description: "Production planning and execution",
      features: ["Production planning", "Quality control", "Maintenance management", "Cost tracking"],
      users: "6K+ manufacturers"
    },
    {
      name: "Business Intelligence",
      icon: "📊",
      description: "Advanced analytics and reporting",
      features: ["Real-time dashboards", "Custom reports", "Data visualization", "Predictive analytics"],
      users: "20K+ users"
    }
  ]

  const enterpriseStats = [
    {
      title: "Enterprise Clients",
      value: "500+",
      change: "+25%",
      icon: "🏢",
      color: "blue"
    },
    {
      title: "Data Processed",
      value: "10TB+",
      change: "+40%",
      icon: "💾",
      color: "green"
    },
    {
      title: "System Uptime",
      value: "99.9%",
      change: "+0.1%",
      icon: "⚡",
      color: "orange"
    },
    {
      title: "Cost Savings",
      value: "30%",
      change: "+5%",
      icon: "💰",
      color: "purple"
    }
  ]

  const benefits = [
    "Streamline operations and reduce manual processes by 60%",
    "Real-time visibility across all business functions",
    "Improved decision-making with advanced analytics",
    "Enhanced collaboration and communication",
    "Reduced operational costs and increased efficiency",
    "Scalable solution that grows with your business"
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Annita ERP System - Enterprise Resource Planning",
    "description": "Comprehensive ERP system for enterprise resource planning with integrated modules for finance, HR, supply chain, and business intelligence.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, Cloud",
    "offers": {
      "@type": "Offer",
      "price": "Contact for pricing",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "ratingCount": "1500"
    }
  }

  return (
    <>
      <SEOHead
        title="Annita ERP System - Enterprise Resource Planning | Annita LLC"
        description="Comprehensive ERP system for enterprise resource planning with integrated modules for finance, HR, supply chain, and business intelligence."
        keywords={[
          'Annita ERP System',
          'enterprise resource planning',
          'ERP software',
          'business management system',
          'financial management',
          'human resources',
          'supply chain management',
          'customer relationship management',
          'manufacturing ERP',
          'business intelligence',
          'enterprise software',
          'business automation',
          'process management',
          'data integration',
          'enterprise solutions'
        ]}
        canonical="/services/erp"
        ogImage="/erp-system-og-image.jpg"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6">
                  <Database className="w-4 h-4 mr-2" />
                  Enterprise Resource Planning
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6">
                  Complete <span className="text-indigo-600">Business</span> Management
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                  Comprehensive ERP system that integrates all your business processes into one 
                  powerful platform. Streamline operations and drive growth with enterprise-grade solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center">
                    <Download className="w-5 h-5 mr-2" />
                    Request Demo
                  </button>
                  <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors duration-200 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Overview
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                  <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                    <Database className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">ERP Dashboard</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">📊</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Revenue</h4>
                          <p className="text-sm text-gray-600">This month</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-indigo-600">$2.4M</div>
                        <div className="text-sm text-gray-600">+18% vs last month</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">👥</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Employees</h4>
                          <p className="text-sm text-gray-600">Active users</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-green-600">1,250</div>
                        <div className="text-sm text-gray-600">+25 new this month</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20" ref={ref}>
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Enterprise <span className="text-indigo-600">Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Powerful features designed for enterprise-level organizations to manage 
                complex business processes efficiently and securely.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    feature.color === 'blue' ? 'bg-blue-100' :
                    feature.color === 'green' ? 'bg-green-100' :
                    feature.color === 'orange' ? 'bg-orange-100' :
                    'bg-purple-100'
                  }`}>
                    <feature.icon className={`w-6 h-6 ${
                      feature.color === 'blue' ? 'text-blue-600' :
                      feature.color === 'green' ? 'text-green-600' :
                      feature.color === 'orange' ? 'text-orange-600' :
                      'text-purple-600'
                    }`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ERP Modules Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-indigo-50 to-indigo-100">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Integrated <span className="text-indigo-600">Modules</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Complete suite of integrated modules covering all aspects of enterprise management.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {erpModules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {module.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{module.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{module.description}</p>
                  <ul className="space-y-2 mb-4">
                    {module.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-indigo-600 font-semibold text-sm">{module.users}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Statistics Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Trusted by <span className="text-indigo-600">Enterprises</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Join hundreds of enterprises already using Annita ERP to streamline their operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {enterpriseStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{stat.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.title}</h3>
                    <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.value}</div>
                    <div className="flex items-center justify-center space-x-1">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-green-600 text-sm font-medium">{stat.change}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-gray-50 to-white">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Why Choose <span className="text-indigo-600">Annita ERP</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Annita ERP is designed to help enterprises streamline operations, 
                  improve efficiency, and drive growth with comprehensive business management.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-3xl shadow-2xl">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Business Impact</h3>
                    <p className="text-gray-600">Average results</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Operational Efficiency</span>
                      <span className="font-semibold text-indigo-600">+60%</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Cost Reduction</span>
                      <span className="font-semibold text-green-600">-30%</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Decision Speed</span>
                      <span className="font-semibold text-orange-600">+75%</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-indigo-500 to-indigo-600">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
                Join hundreds of enterprises already using Annita ERP to streamline operations 
                and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors duration-200 flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Request Demo
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-200 flex items-center justify-center">
                  Contact Sales
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ERPSystemPage
