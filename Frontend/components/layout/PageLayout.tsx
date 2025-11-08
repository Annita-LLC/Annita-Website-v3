'use client'

import { ReactNode, Suspense } from 'react'
import { motion } from 'framer-motion'
import Breadcrumb, { CompactBreadcrumb } from '@/components/ui/Breadcrumb'
import SkeletonLoader, { SkeletonHero } from '@/components/ui/SkeletonLoader'

interface PageLayoutProps {
  children: ReactNode
  showBreadcrumb?: boolean
  showCompactBreadcrumb?: boolean
  breadcrumbItems?: Array<{
    label: string
    href?: string
    isCurrentPage?: boolean
  }>
  className?: string
  loading?: boolean
  title?: string
  description?: string
}

export default function PageLayout({
  children,
  showBreadcrumb = true,
  showCompactBreadcrumb = false,
  breadcrumbItems,
  className = '',
  loading = false,
  title,
  description
}: PageLayoutProps) {
  if (loading) {
    return (
      <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${className}`}>
        <div className="pt-20">
          <SkeletonHero />
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${className}`}>
      {/* Breadcrumb Navigation */}
      {showBreadcrumb && !showCompactBreadcrumb && (
        <div className="pt-20 pb-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>
      )}

      {showCompactBreadcrumb && (
        <div className="pt-20 pb-2">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <CompactBreadcrumb items={breadcrumbItems} />
          </div>
        </div>
      )}

      {/* Page Header */}
      {(title || description) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              {title && (
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  {title}
                </h1>
              )}
              {description && (
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  {description}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {/* Main Content */}
      <Suspense fallback={
        <div className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 6 }).map((_, index) => (
                  <SkeletonLoader key={index} variant="card" height={200} />
                ))}
              </div>
            </div>
          </div>
        </div>
      }>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {children}
        </motion.main>
      </Suspense>
    </div>
  )
}

// Specialized layout components
export function HeroLayout({
  children,
  title,
  description,
  className = ''
}: {
  children: ReactNode
  title?: string
  description?: string
  className?: string
}) {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-20 pb-16"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {title && (
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                {title}
              </h1>
            )}
            {description && (
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                {description}
              </p>
            )}
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export function SectionLayout({
  children,
  title,
  description,
  className = ''
}: {
  children: ReactNode
  title?: string
  description?: string
  className?: string
}) {
  return (
    <section className={`py-16 sm:py-20 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            {title && (
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}
