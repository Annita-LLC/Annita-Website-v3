'use client'

import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  loadTime: number
  domContentLoaded: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  firstInputDelay: number
  cumulativeLayoutShift: number
}

const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show in development or when performance debugging is needed
    if (process.env.NODE_ENV !== 'development' && !window.location.search.includes('debug=performance')) {
      return
    }

    const measurePerformance = () => {
      if (typeof window === 'undefined' || !window.performance) return

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const paintEntries = performance.getEntriesByType('paint')
      
      const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
      const largestContentfulPaint = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime || 0

      const metrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.fetchStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
        firstContentfulPaint,
        largestContentfulPaint,
        firstInputDelay: 0, // Would need to measure with PerformanceObserver
        cumulativeLayoutShift: 0 // Would need to measure with PerformanceObserver
      }

      setMetrics(metrics)
      setIsVisible(true)
    }

    // Wait for page to fully load
    if (document.readyState === 'complete') {
      measurePerformance()
    } else {
      window.addEventListener('load', measurePerformance)
    }

    return () => {
      window.removeEventListener('load', measurePerformance)
    }
  }, [])

  if (!isVisible || !metrics) return null

  const getPerformanceGrade = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return { grade: 'A', color: 'text-green-600' }
    if (value <= thresholds.poor) return { grade: 'B', color: 'text-yellow-600' }
    return { grade: 'C', color: 'text-red-600' }
  }

  const loadTimeGrade = getPerformanceGrade(metrics.loadTime, { good: 2000, poor: 4000 })
  const fcpGrade = getPerformanceGrade(metrics.firstContentfulPaint, { good: 1800, poor: 3000 })

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Performance</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Load Time:</span>
          <span className={`font-mono ${loadTimeGrade.color}`}>
            {metrics.loadTime.toFixed(0)}ms ({loadTimeGrade.grade})
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">DOM Ready:</span>
          <span className="font-mono text-gray-900 dark:text-white">
            {metrics.domContentLoaded.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">First Paint:</span>
          <span className={`font-mono ${fcpGrade.color}`}>
            {metrics.firstContentfulPaint.toFixed(0)}ms ({fcpGrade.grade})
          </span>
        </div>
        
        {metrics.largestContentfulPaint > 0 && (
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">LCP:</span>
            <span className="font-mono text-gray-900 dark:text-white">
              {metrics.largestContentfulPaint.toFixed(0)}ms
            </span>
          </div>
        )}
      </div>
      
      <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
        <div className="text-xs text-gray-500 dark:text-gray-400">
          {loadTimeGrade.grade === 'A' && fcpGrade.grade === 'A' ? (
            <span className="text-green-600">🚀 Excellent performance!</span>
          ) : loadTimeGrade.grade === 'B' && fcpGrade.grade === 'B' ? (
            <span className="text-yellow-600">⚡ Good performance</span>
          ) : (
            <span className="text-red-600">🐌 Needs optimization</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default PerformanceMonitor
