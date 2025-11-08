'use client'

import { motion } from 'framer-motion'

interface SkeletonLoaderProps {
  className?: string
  variant?: 'text' | 'rectangular' | 'circular' | 'card'
  width?: string | number
  height?: string | number
  lines?: number
  animate?: boolean
}

export default function SkeletonLoader({
  className = '',
  variant = 'rectangular',
  width,
  height,
  lines = 1,
  animate = true
}: SkeletonLoaderProps) {
  const baseClasses = 'bg-gray-200 dark:bg-gray-700 rounded'
  
  const variantClasses = {
    text: 'h-4',
    rectangular: 'h-4',
    circular: 'rounded-full aspect-square',
    card: 'h-32'
  }

  const animationProps = animate ? {
    animate: { opacity: [0.5, 1, 0.5] },
    transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
  } : {}

  if (variant === 'text' && lines > 1) {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
          <motion.div
            key={index}
            className={`${baseClasses} ${variantClasses[variant]} ${
              index === lines - 1 ? 'w-3/4' : 'w-full'
            }`}
            style={{ width: width || 'auto', height: height || 'auto' }}
            {...animationProps}
          />
        ))}
      </div>
    )
  }

  return (
    <motion.div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{ 
        width: width || '100%', 
        height: height || 'auto' 
      }}
      {...animationProps}
    />
  )
}

// Pre-built skeleton components for common use cases
export function SkeletonCard() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft border border-gray-200 dark:border-gray-700">
      <div className="flex items-start space-x-4">
        <SkeletonLoader variant="circular" width={48} height={48} />
        <div className="flex-1 space-y-3">
          <SkeletonLoader variant="text" width="60%" />
          <SkeletonLoader variant="text" width="80%" />
          <SkeletonLoader variant="text" width="40%" />
        </div>
      </div>
    </div>
  )
}

export function SkeletonFeatureCard() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft border border-gray-200 dark:border-gray-700">
      <div className="space-y-4">
        <SkeletonLoader variant="circular" width={64} height={64} className="mx-auto" />
        <div className="space-y-2 text-center">
          <SkeletonLoader variant="text" width="70%" className="mx-auto" />
          <SkeletonLoader variant="text" width="90%" className="mx-auto" />
          <SkeletonLoader variant="text" width="60%" className="mx-auto" />
        </div>
      </div>
    </div>
  )
}

export function SkeletonStatsCard() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft border border-gray-200 dark:border-gray-700 text-center">
      <div className="space-y-3">
        <SkeletonLoader variant="text" width="80%" height={32} className="mx-auto" />
        <SkeletonLoader variant="text" width="60%" className="mx-auto" />
      </div>
    </div>
  )
}

export function SkeletonNavigation() {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-4">
        <SkeletonLoader variant="circular" width={40} height={40} />
        <SkeletonLoader variant="text" width={100} />
      </div>
      <div className="flex items-center space-x-4">
        <SkeletonLoader variant="text" width={60} />
        <SkeletonLoader variant="text" width={60} />
        <SkeletonLoader variant="text" width={60} />
        <SkeletonLoader variant="rectangular" width={120} height={36} />
      </div>
    </div>
  )
}

export function SkeletonHero() {
  return (
    <div className="py-20 text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        <SkeletonLoader variant="text" width="40%" height={48} className="mx-auto" />
        <SkeletonLoader variant="text" width="80%" height={24} className="mx-auto" />
        <SkeletonLoader variant="text" width="60%" height={24} className="mx-auto" />
        <div className="flex justify-center space-x-4 mt-8">
          <SkeletonLoader variant="rectangular" width={160} height={48} />
          <SkeletonLoader variant="rectangular" width={160} height={48} />
        </div>
      </div>
    </div>
  )
}
