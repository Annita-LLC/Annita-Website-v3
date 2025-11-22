'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SEOHead from '@/components/seo/SEOHead'
import CTASection from '@/components/sections/CTASection'
import { 
  ShoppingCart, 
  Search, 
  TrendingUp, 
  Users, 
  Package,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Zap,
  Shield,
  Globe,
  Star,
  ExternalLink
} from 'lucide-react'
import Button from '@/components/ui/Button'

const MarketplacePage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    'KYC-verified businesses through Smile ID.',
    'Escrow payment protection for secure transactions.',
    'RFQ-based sourcing with multiple responses.',
    'Multi-currency support for 30+ African currencies.',
    'Pan-African network across all AfCFTA regions.',
    'Quality assurance and comprehensive certifications.'
  ]

  const benefits = [
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'Escrow protection ensures your money is safe until delivery.'
    },
    {
      icon: Globe,
      title: 'Pan-African Network',
      description: 'Access suppliers from all 54 African countries.'
    },
    {
      icon: Users,
      title: 'Verified Suppliers',
      description: 'All businesses are KYC-verified and quality-checked.'
    },
    {
      icon: TrendingUp,
      title: 'Best Prices',
      description: 'Compare prices across vendors and get the best deals.'
    }
  ]

  return (
    <>
      <SEOHead
        title="Annita Marketplace - Multivendor E-commerce Platform"
        description="Multivendor Ecommerce Shopping Place with countless MSMEs stores to shop from. KYC-verified suppliers, escrow protection, and pan-African network."
        keywords={["marketplace", "ecommerce", "shopping", "africa", "msme", "suppliers", "annita"]}
        canonical="/services/ecommerce"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-white/5 rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Annita Marketplace
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                    Multivendor <span className="text-blue-200">E-commerce</span>
                  </h1>
                  <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
                    Multivendor Ecommerce Shopping Place with countless MSMEs stores to shop from. 
                    Connect with authentic African suppliers and grow your business across the continent.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button
                      variant="white"
                      size="lg"
                      icon={ExternalLink}
                      onClick={() => window.open('https://annita.company.site/products', '_blank')}
                    >
                      Explore Marketplace
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      icon={Star}
                      className="border-white text-white hover:bg-white hover:text-blue-600"
                    >
                      Start Selling
                    </Button>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="relative mx-auto group">
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-white/30 bg-gradient-to-br from-white/20 to-white/10 p-2">
                        <img 
                          src="/images/DEMO-Images/Annita Marketplace.jpg" 
                          alt="Annita Marketplace" 
                          className="w-full h-auto rounded-xl transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-xl pointer-events-none"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose <span className="text-orange-600">Annita Marketplace</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Built specifically for African businesses with features you won't find anywhere else.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                <div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6"
                  >
                    <ShoppingCart className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-orange-600 mb-2">
                    Annita Marketplace
                  </h3>
                  
                  <div className="text-lg font-medium text-primary-600 mb-4 flex items-center">
                    Multivendor E-commerce Platform
                    <Sparkles className="w-5 h-5 ml-2 text-orange-500 animate-pulse" />
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Unlike generic marketplaces, Annita is built for African businesses, featuring 
                    <span className="text-orange-600 font-semibold"> KYC-verified suppliers</span>, 
                    <span className="text-orange-600 font-semibold"> escrow payment protection</span>, and 
                    <span className="text-orange-600 font-semibold"> RFQ-based sourcing</span>. 
                    Connect with authentic African suppliers and grow your business across the continent.
                  </p>

                  <div className="space-y-3 mb-8">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Button 
                    className="group"
                    onClick={() => window.open('https://annita.company.site/products', '_blank')}
                  >
                    Explore Marketplace
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative"
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-orange-200 shadow-2xl">
                    <div className="text-center mb-4 sm:mb-6">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Annita Marketplace Demo</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Multivendor Platform</p>
                    </div>

                    <div className="relative mx-auto group">
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-gray-100 bg-gradient-to-br from-gray-50 to-white p-2">
                        <img 
                          src="/images/DEMO-Images/Annita Marketplace.jpg" 
                          alt="Annita Marketplace Demo" 
                          className="w-full h-auto rounded-xl transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-xl pointer-events-none"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
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

export default MarketplacePage
