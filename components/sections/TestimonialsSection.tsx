'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Star, 
  Quote, 
  ArrowLeft, 
  ArrowRight,
  Users,
  TrendingUp,
  Award,
  Heart,
  CheckCircle,
  Globe,
  MapPin,
  Building
} from 'lucide-react'

const TestimonialsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Owner, Sarah\'s Fashion Boutique',
      location: 'Lagos, Nigeria',
      avatar: 'SJ',
      rating: 5,
      content: 'Annita transformed my small boutique into a thriving online business. The platform is so easy to use, and the payment system gives my customers confidence. My sales increased by 300% in just 6 months!',
      metrics: {
        revenue: '+300%',
        customers: '+500',
        time: '6 months'
      },
      business: 'Fashion Retail',
      country: 'Nigeria'
    },
    {
      name: 'Mohammed Hassan',
      role: 'CEO, Hassan Electronics',
      location: 'Cairo, Egypt',
      avatar: 'MH',
      rating: 5,
      content: 'The logistics integration is incredible. We can now deliver to customers across Egypt within 24 hours. The AI analytics help us understand customer behavior and optimize our inventory perfectly.',
      metrics: {
        revenue: '+250%',
        customers: '+800',
        time: '8 months'
      },
      business: 'Electronics',
      country: 'Egypt'
    },
    {
      name: 'Grace Mwangi',
      role: 'Founder, Grace\'s Handmade Crafts',
      location: 'Nairobi, Kenya',
      avatar: 'GM',
      rating: 5,
      content: 'As a women-led business, Annita has been a game-changer. The marketing tools helped me reach customers I never thought possible. The escrow payment system builds trust with buyers.',
      metrics: {
        revenue: '+400%',
        customers: '+300',
        time: '4 months'
      },
      business: 'Handmade Crafts',
      country: 'Kenya'
    },
    {
      name: 'David Osei',
      role: 'Manager, Osei Farm Products',
      location: 'Accra, Ghana',
      avatar: 'DO',
      rating: 5,
      content: 'The cross-border capabilities are amazing. We now sell our farm products to customers in 5 different countries. The platform handles all the complex logistics and payments seamlessly.',
      metrics: {
        revenue: '+180%',
        customers: '+1200',
        time: '12 months'
      },
      business: 'Agriculture',
      country: 'Ghana'
    },
    {
      name: 'Fatima Al-Zahra',
      role: 'Owner, Zahra Beauty Salon',
      location: 'Casablanca, Morocco',
      avatar: 'FA',
      rating: 5,
      content: 'Annita helped me digitize my beauty salon services. The booking system and payment integration made everything so much easier. My clients love the convenience.',
      metrics: {
        revenue: '+220%',
        customers: '+400',
        time: '7 months'
      },
      business: 'Beauty Services',
      country: 'Morocco'
    }
  ]

  const stats = [
    {
      icon: Users,
      number: '3,000+',
      label: 'Active Vendors',
      description: 'Businesses using our platform'
    },
    {
      icon: TrendingUp,
      number: '90%',
      label: 'Satisfaction Rate',
      description: 'Customer satisfaction score'
    },
    {
      icon: Award,
      number: '1st',
      label: 'Place Winner',
      description: 'Orange Social Venture Prize'
    },
    {
      icon: Heart,
      number: '75%',
      label: 'Revenue Growth',
      description: 'Average increase for vendors'
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Hear from real MSMEs across Africa who have transformed their businesses 
            using Annita's comprehensive digital platform.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="stat-card text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label font-semibold text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Testimonial Card */}
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="testimonial-card"
              >
                <div className="flex items-start space-x-6">
                  {/* Avatar */}
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">
                      {testimonials[currentTestimonial].avatar}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                      "{testimonials[currentTestimonial].content}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900 text-lg">
                          {testimonials[currentTestimonial].name}
                        </div>
                        <div className="text-primary-600 font-medium">
                          {testimonials[currentTestimonial].role}
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
                          <MapPin className="w-4 h-4" />
                          <span>{testimonials[currentTestimonial].location}</span>
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="text-right">
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-primary-600">
                              {testimonials[currentTestimonial].metrics.revenue}
                            </div>
                            <div className="text-xs text-gray-500">Revenue</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-primary-600">
                              {testimonials[currentTestimonial].metrics.customers}
                            </div>
                            <div className="text-xs text-gray-500">Customers</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-primary-600">
                              {testimonials[currentTestimonial].metrics.time}
                            </div>
                            <div className="text-xs text-gray-500">Time</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Business Type */}
                    <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-2">
                        <Building className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">
                          {testimonials[currentTestimonial].business}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Globe className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">
                          {testimonials[currentTestimonial].country}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Navigation */}
              <div className="flex items-center justify-center space-x-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-white rounded-full shadow-soft border border-gray-200 flex items-center justify-center hover:shadow-medium transition-all duration-200 group"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-primary-600 transition-colors" />
                </button>
                
                {/* Dots */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentTestimonial
                          ? 'bg-primary-600 w-8'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-white rounded-full shadow-soft border border-gray-200 flex items-center justify-center hover:shadow-medium transition-all duration-200 group"
                >
                  <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-primary-600 transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Customer Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-20"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
            Customer Success Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { metric: '300%', label: 'Average Revenue Growth', description: 'For active vendors' },
              { metric: '24h', label: 'Average Delivery Time', description: 'Same-day delivery' },
              { metric: '99.9%', label: 'Platform Uptime', description: 'Reliable service' },
              { metric: '50+', label: 'Countries Reached', description: 'Cross-border trade' }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="feature-card text-center group"
              >
                <div className="text-3xl font-bold gradient-text mb-2">{item.metric}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{item.label}</div>
                <div className="text-sm text-gray-600">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Trusted by Thousands of African Businesses
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">3,000+</div>
                <div className="text-gray-600">Active Vendors</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">1,500+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">90%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Verified Reviews</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Real Success Stories</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Proven Results</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
