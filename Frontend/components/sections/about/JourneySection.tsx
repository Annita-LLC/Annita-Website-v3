"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Rocket,
  TrendingUp,
  Award,
  Target,
  ArrowRight,
  DollarSign,
  Globe,
  UserCheck,
  Building
} from 'lucide-react'
import Button from '@/components/ui/Button'

const JourneySection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const milestones = [
    {
      year: 'August 2021',
      title: 'Launched MVP',
      description: 'Multi-Vendor marketplace with ads and logistic-only',
      achievement: 'MVP Launch',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: 'June 2022',
      title: 'Product Validation & First Paying Users',
      description: 'Achieved product-market fit with our first paying customers and validated our business model',
      achievement: 'First Revenue',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500'
    },
    {
      year: 'May 2023',
      title: 'Cross-Border MSME Onboarding Begins',
      description: 'Expanded beyond local markets to serve Micro, Small, and Medium Enterprises across borders',
      achievement: 'Cross-Border Expansion',
      icon: Globe,
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: 'March 2024',
      title: 'Major Awards & Recognitions',
      description: 'Won Orange Social Venture Prize (1st Place) and Named Top 50 Businesses in Africa by the African Union',
      achievement: 'Award Winner',
      icon: Award,
      color: 'from-orange-500 to-red-500'
    },
    {
      year: 'Q1 2025',
      title: 'Onboarded to MANSA Platform',
      description: 'Validated by Afreximbank\'s MANSA as a trusted and credible cross-border trade partner',
      achievement: 'MANSA Validation',
      icon: UserCheck,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      year: 'Q2 2025',
      title: 'AnnitaPay Testing Phase',
      description: 'Development and testing of our proprietary payment solution, enhancing our platform capabilities',
      achievement: 'Payment Innovation',
      icon: Building,
      color: 'from-teal-500 to-green-500'
    }
  ]

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-600 mb-4 sm:mb-6">
            Our Journey
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            From a simple e-commerce idea to expanding into Africa's first all-in-one digital platform, 
            here's our gradual evolution and growth story.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-orange-500 to-blue-500 hidden lg:block"></div>

          <div className="space-y-8 lg:space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>

                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-large transition-all duration-300 group">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${milestone.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <milestone.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-3">
                      {milestone.year}
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {milestone.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 sm:mb-6">
                      {milestone.description}
                    </p>
                    
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold">
                      {milestone.achievement}
                    </div>
                  </div>
                </div>

                {/* Spacer for mobile */}
                <div className="lg:hidden h-8"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center mt-12 sm:mt-16"
        >
          <Button
            variant="gradient"
            size="xl"
            icon={ArrowRight}
            className="text-lg font-bold shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-1 transition-all duration-300"
          >
            Join Our Journey
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default JourneySection
