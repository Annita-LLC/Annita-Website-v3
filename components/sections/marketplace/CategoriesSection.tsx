"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Zap, 
  Tag, 
  Package, 
  TrendingUp,
  Award,
  Star,
  ArrowRight
} from 'lucide-react'
import Button from '@/components/ui/Button'

const CategoriesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const categories = [
    { 
      name: 'Electronics', 
      icon: Zap, 
      count: '5,234', 
      color: 'from-blue-500 to-cyan-500',
      description: 'Latest gadgets and tech'
    },
    { 
      name: 'Fashion', 
      icon: Tag, 
      count: '12,456', 
      color: 'from-pink-500 to-rose-500',
      description: 'Trendy clothing and accessories'
    },
    { 
      name: 'Home & Garden', 
      icon: Package, 
      count: '8,901', 
      color: 'from-green-500 to-emerald-500',
      description: 'Everything for your home'
    },
    { 
      name: 'Sports', 
      icon: TrendingUp, 
      count: '3,567', 
      color: 'from-orange-500 to-red-500',
      description: 'Sports equipment and gear'
    },
    { 
      name: 'Books', 
      icon: Award, 
      count: '2,345', 
      color: 'from-purple-500 to-indigo-500',
      description: 'Books and educational materials'
    },
    { 
      name: 'Beauty', 
      icon: Star, 
      count: '6,789', 
      color: 'from-yellow-500 to-amber-500',
      description: 'Beauty and personal care'
    }
  ]

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Shop by <span className="text-orange-600">Category</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover millions of products across all categories. From electronics to fashion, we have everything you need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-large transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${category.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{category.count} products</span>
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Button
            variant="gradient"
            size="xl"
            icon={ArrowRight}
            className="text-lg font-bold shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-1 transition-all duration-300"
          >
            Explore All Categories
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default CategoriesSection
