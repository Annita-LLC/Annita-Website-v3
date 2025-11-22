'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SEOHead from '@/components/seo/SEOHead'
import CTASection from '@/components/sections/CTASection'
import { Globe, ShoppingCart, CheckCircle, ArrowRight, Star, ExternalLink, Shield, TrendingUp, Users } from 'lucide-react'
import Button from '@/components/ui/Button'

const GlobalMarketPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    'Access to international markets across Africa.',
    'Cross-border trade facilitation.',
    'Multi-currency support for seamless transactions.',
    'Compliance with international trade regulations.',
    'Real-time market insights and analytics.',
    'Verified international suppliers and buyers.'
  ]

  const benefits = [
    { icon: Globe, title: 'Global Reach', description: 'Connect with businesses across all 54 African countries.' },
    { icon: Shield, title: 'Secure Trading', description: 'Bank-grade security for international transactions.' },
    { icon: TrendingUp, title: 'Market Insights', description: 'Real-time analytics and market intelligence.' },
    { icon: Users, title: 'Verified Partners', description: 'All international partners are verified and trusted.' }
  ]

  return (
    <>
      <SEOHead
        title="Annita Global Market - International Marketplace"
        description="International marketplace connecting African businesses with global opportunities. Cross-border trade, multi-currency support, and verified international partners."
        keywords={["global market", "international", "trade", "africa", "cross-border", "annita"]}
        canonical="/services/global-market"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-600 text-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-white/5 rounded-full animate-bounce"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
                    <Globe className="w-4 h-4 mr-2" />
                    Annita Global Market
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                    International <span className="text-indigo-200">Marketplace</span>
                  </h1>
                  <p className="text-lg sm:text-xl text-indigo-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
                    International marketplace connecting African businesses with global opportunities. 
                    Cross-border trade, multi-currency support, and verified international partners.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button variant="white" size="lg" icon={ExternalLink} onClick={() => window.open('https://annita.company.site/products', '_blank')}>
                      Explore Market
                    </Button>
                  </div>
                </div>

                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <img src="/images/DEMO-Images/Annita Marketplace.jpg" alt="Global Market" className="w-full h-auto rounded-xl" />
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
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose <span className="text-orange-600">Global Market</span></h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">Connect with international partners and expand your business globally.</p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-orange-600 mb-2">Annita Global Market</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">International marketplace connecting African businesses with global opportunities.</p>
                  <div className="space-y-3 mb-8">
                    {features.map((feature, index) => (
                      <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  <Button className="group" onClick={() => window.open('https://annita.company.site/products', '_blank')}>
                    Explore Market
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="relative">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200 shadow-2xl">
                    <img src="/images/DEMO-Images/Annita Marketplace.jpg" alt="Global Market Demo" className="w-full h-auto rounded-xl" />
                  </div>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
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

export default GlobalMarketPage

