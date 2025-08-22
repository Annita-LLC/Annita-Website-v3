'use client'

import { useState, useEffect } from 'react'
import LoadingSpinner from './LoadingSpinner'

interface AppLoaderProps {
  children: React.ReactNode
}

const AppLoader = ({ children }: AppLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [appLoaded, setAppLoaded] = useState(false)

  useEffect(() => {
    // Wait for the page to be fully loaded
    const handleLoad = () => {
      // Add a small delay to ensure smooth transition
      setTimeout(() => {
        setIsLoading(false)
        setAppLoaded(true)
      }, 500)
    }

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <div className={isLoading ? 'hidden' : 'block'}>
        {children}
      </div>
    </>
  )
}

export default AppLoader
