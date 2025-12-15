'use client'

import { useEffect, useState } from 'react'

const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<{
    loadTime: number
    domReady: number
    firstPaint: number
  } | null>(null)

  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const paint = performance.getEntriesByType('paint')

      const loadTime = navigation.loadEventEnd - navigation.fetchStart
      const domReady = navigation.domContentLoadedEventEnd - navigation.fetchStart
      const firstPaint = paint.find(entry => entry.name === 'first-paint')?.startTime || 0

      setMetrics({
        loadTime: Math.round(loadTime),
        domReady: Math.round(domReady),
        firstPaint: Math.round(firstPaint)
      })
    }

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance()
    } else {
      window.addEventListener('load', measurePerformance)
    }

    return () => window.removeEventListener('load', measurePerformance)
  }, [])

  // Only show in development
  if (process.env.NODE_ENV !== 'development' || !metrics) return null

  const getStatusColor = (time: number) => {
    if (time < 1000) return 'text-green-500'
    if (time < 3000) return 'text-yellow-500'
    return 'text-red-500'
  }

  const getStatusIcon = (time: number) => {
    if (time < 1000) return '🚀'
    if (time < 3000) return '⚡'
    return '🐌'
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-black/80 text-white p-3 rounded-lg font-mono text-xs backdrop-blur-sm border border-gray-700">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-yellow-400">⚡</span>
        <span className="font-semibold">Performance</span>
      </div>

      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <span>Load Time:</span>
          <span className={getStatusColor(metrics.loadTime)}>
            {getStatusIcon(metrics.loadTime)} {metrics.loadTime}ms
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span>DOM Ready:</span>
          <span className={getStatusColor(metrics.domReady)}>
            {metrics.domReady}ms
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span>First Paint:</span>
          <span className={getStatusColor(metrics.firstPaint)}>
            {metrics.firstPaint}ms
          </span>
        </div>
      </div>

      {metrics.loadTime > 3000 && (
        <div className="mt-2 text-xs text-red-400">
          ⚠️ Needs optimization
        </div>
      )}
    </div>
  )
}

export default PerformanceMonitor