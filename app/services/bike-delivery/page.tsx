'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const BikeDeliveryPage = () => {
  const router = useRouter()

  useEffect(() => {
    // Redirect to logistics page since bike delivery is now part of logistics
    router.replace('/services/logistics')
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to Logistics...</p>
      </div>
    </div>
  )
}

export default BikeDeliveryPage
