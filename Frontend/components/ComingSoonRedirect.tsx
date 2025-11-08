'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface ComingSoonRedirectProps {
  message?: string
}

const ComingSoonRedirect = ({ message = "This page is coming soon!" }: ComingSoonRedirectProps) => {
  const router = useRouter()

  useEffect(() => {
    // Redirect to home page after a short delay
    const timer = setTimeout(() => {
      router.push('/')
    }, 2000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Coming Soon!</h1>
        <p className="text-gray-600 mb-4">{message}</p>
        <p className="text-sm text-gray-500">Redirecting you to our home page...</p>
        <div className="mt-4">
          <div className="w-8 h-8 border-2 border-orange-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    </div>
  )
}

export default ComingSoonRedirect
