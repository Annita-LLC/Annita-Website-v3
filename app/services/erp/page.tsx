'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SEOHead from '@/components/seo/SEOHead'
import CTASection from '@/components/sections/CTASection'
import { Database, CheckCircle, ArrowRight, ExternalLink, BarChart3, Settings, TrendingUp, Shield } from 'lucide-react'
import Button from '@/components/ui/Button'

const ERPPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    'Complete business resource planning and management.',
    'Integrated inventory and supply chain management.',
    'Financial management and accounting modules.',
    'Human resources and payroll management.',
    'Real-time reporting and business intelligence.',
    'Customizable workflows for your business needs.'
  ]

  const benefits = [
    { icon: Database, title: 'Centralized System', description: 'All business operations in one integrated platform.' },
    { icon: BarChart3, title: 'Real-Time Insights', description: 'Get instant business analytics and reports.' },
    { icon: Settings, title: 'Customizable', description: 'Tailor the system to your business requirements.' },
    { icon: Shield, title: 'Secure', description: 'Enterprise-grade security for your business data.' }
  ]

  return (
    <>
      <SEOHead title="Annita ERP System - Enterprise Resource Planning" description="Enterprise resource planning system with integrated inventory, finance, HR, and real-time reporting for businesses." keywords={["erp", "enterprise", "resource planning", "business management", "annita"]} canonical="/services/erp" />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-violet-600 via-violet-700 to-purple-600 text-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-white/5 rounded-full animate-bounce"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
                    <Database className="w-4 h-4 mr-2" />
                    Annita ERP System
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">Enterprise Resource <span className="text-violet-200">Planning</span></h1>
                  <p className="text-lg sm:text-xl text-violet-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">Enterprise resource planning system with integrated inventory, finance, HR, and real-time reporting for businesses.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button variant="white" size="lg" icon={ExternalLink} onClick={() => window.open('https://annita.company.site/products', '_blank')}>Get Started</Button>
                  </div>
                </div>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <img src="/images/DEMO-Images/shot7_1737053810391.png" alt="ERP System" className="w-full h-auto rounded-xl" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Complete Business <span className="text-orange-600">Management</span></h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">Streamline all your business operations in one integrated platform.</p>
              </motion.div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-orange-600 mb-2">Annita ERP System</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">Enterprise resource planning system with integrated modules for all business operations.</p>
                  <div className="space-y-3 mb-8">
                    {features.map((feature, index) => (
                      <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  <Button className="group" onClick={() => window.open('https://annita.company.site/products', '_blank')}>
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="relative">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200 shadow-2xl">
                    <img src="/images/DEMO-Images/shot7_1737053810391.png" alt="ERP Demo" className="w-full h-auto rounded-xl" />
                  </div>
                </motion.div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <CTASection />
      </div>
    </>
  )
}

export default ERPPage

