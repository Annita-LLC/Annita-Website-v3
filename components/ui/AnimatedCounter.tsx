'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface AnimatedCounterProps {
  end: number
  duration?: number
  start?: number
  suffix?: string
  prefix?: string
  separator?: string
  className?: string
  delay?: number
  trigger?: boolean
}

export default function AnimatedCounter({
  end,
  duration = 2,
  start = 0,
  suffix = '',
  prefix = '',
  separator = ',',
  className = '',
  delay = 0,
  trigger = true
}: AnimatedCounterProps) {
  const [count, setCount] = useState(start)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView && trigger && !isVisible) {
      setIsVisible(true)
      
      const timer = setTimeout(() => {
        const startTime = Date.now()
        const difference = end - start

        const updateCount = () => {
          const elapsed = Date.now() - startTime
          const progress = Math.min(elapsed / (duration * 1000), 1)
          
          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4)
          const currentCount = start + (difference * easeOutQuart)
          
          setCount(Math.floor(currentCount))
          
          if (progress < 1) {
            requestAnimationFrame(updateCount)
          } else {
            setCount(end)
          }
        }

        requestAnimationFrame(updateCount)
      }, delay * 1000)

      return () => clearTimeout(timer)
    }
  }, [isInView, trigger, isVisible, end, start, duration, delay])

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toLocaleString('en-US')
  }

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {prefix}{formatNumber(count)}{suffix}
    </motion.span>
  )
}

// Pre-built counter components for common use cases
interface StatCounterProps {
  value: number
  label: string
  suffix?: string
  prefix?: string
  description?: string
  icon?: React.ComponentType<{ className?: string }>
  className?: string
  delay?: number
}

export function StatCounter({
  value,
  label,
  suffix = '',
  prefix = '',
  description,
  icon: Icon,
  className = '',
  delay = 0
}: StatCounterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-100px" }}
      className={`text-center p-6 ${className}`}
    >
      {Icon && (
        <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Icon className="w-8 h-8 text-orange-600 dark:text-orange-400" />
        </div>
      )}
      <div className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-2">
        <AnimatedCounter 
          end={value} 
          suffix={suffix} 
          prefix={prefix}
          delay={delay}
        />
      </div>
      <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
        {label}
      </div>
      {description && (
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {description}
        </div>
      )}
    </motion.div>
  )
}

// Progress counter for development progress
interface ProgressCounterProps {
  value: number
  max?: number
  label: string
  className?: string
  delay?: number
  showPercentage?: boolean
}

export function ProgressCounter({
  value,
  max = 100,
  label,
  className = '',
  delay = 0,
  showPercentage = true
}: ProgressCounterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-100px" }}
      className={`${className}`}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </span>
        {showPercentage && (
          <span className="text-sm font-bold text-gray-900 dark:text-white">
            <AnimatedCounter 
              end={Math.round((value / max) * 100)} 
              suffix="%" 
              delay={delay}
            />
          </span>
        )}
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${(value / max) * 100}%` }}
          transition={{ duration: 2, delay: delay + 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full"
        />
      </div>
    </motion.div>
  )
}

// Financial counter with currency formatting
interface FinancialCounterProps {
  value: number
  currency?: string
  label: string
  description?: string
  className?: string
  delay?: number
}

export function FinancialCounter({
  value,
  currency = '$',
  label,
  description,
  className = '',
  delay = 0
}: FinancialCounterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-100px" }}
      className={`text-center p-6 ${className}`}
    >
      <div className="text-3xl sm:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
        <AnimatedCounter 
          end={value} 
          prefix={currency}
          delay={delay}
        />
      </div>
      <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
        {label}
      </div>
      {description && (
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {description}
        </div>
      )}
    </motion.div>
  )
}
