'use client'

import { useEffect, useState } from 'react'

interface PerformanceOptimizerProps {
  children: React.ReactNode
}

const PerformanceOptimizer = ({ children }: PerformanceOptimizerProps) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isLowEndDevice, setIsLowEndDevice] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    // Detect low-end devices
    const checkDevicePerformance = () => {
      const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection
      const memory = (performance as any).memory
      
      // Check for slow connection
      const isSlowConnection = connection && (
        connection.effectiveType === 'slow-2g' || 
        connection.effectiveType === '2g' ||
        connection.saveData
      )
      
      // Check for low memory
      const isLowMemory = memory && memory.jsHeapSizeLimit < 100000000 // Less than 100MB
      
      // Check for low-end device indicators
      const isLowEnd = isSlowConnection || isLowMemory || 
        (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4)
      
      setIsLowEndDevice(isLowEnd)
    }

    checkDevicePerformance()

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  // Apply performance optimizations
  useEffect(() => {
    if (prefersReducedMotion || isLowEndDevice) {
      // Disable animations for better performance
      document.documentElement.style.setProperty('--animation-duration', '0.01ms')
      document.documentElement.style.setProperty('--animation-delay', '0.01ms')
      
      // Add class for CSS-based optimizations
      document.documentElement.classList.add('performance-optimized')
    } else {
      document.documentElement.style.removeProperty('--animation-duration')
      document.documentElement.style.removeProperty('--animation-delay')
      document.documentElement.classList.remove('performance-optimized')
    }
  }, [prefersReducedMotion, isLowEndDevice])

  return <>{children}</>
}

export default PerformanceOptimizer
