'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Lock, User, Eye, EyeOff, AlertCircle, Hash } from 'lucide-react'
import SEOHead from '@/components/seo/SEOHead'

export default function StaffLoginPage() {
  const [employeeId, setEmployeeId] = useState('')
  const [secretPin, setSecretPin] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // TODO: Implement actual authentication logic
    // For now, this is a placeholder
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Placeholder validation - replace with actual authentication
      if (employeeId && secretPin) {
        // Store authentication token/session
        localStorage.setItem('staff-authenticated', 'true')
        localStorage.setItem('staff-employee-id', employeeId)
        
        // For demo: Set role based on Employee ID (in production, this would come from auth API)
        let role = 'employee'
        const idUpper = employeeId.toUpperCase()
        if (idUpper.includes('CEO') || idUpper.includes('EMP001') || idUpper.includes('ADMIN')) {
          role = 'ceo'
        } else if (idUpper.includes('HR') || idUpper.includes('MGR')) {
          role = 'hr'
        } else if (idUpper.includes('DIR') || idUpper.includes('CTO')) {
          role = 'manager'
        }
        localStorage.setItem('staff-role', role)
        
        router.push('/staff/dashboard')
      } else {
        setError('Please enter both Employee ID and Secret PIN')
      }
    } catch (err) {
      setError('Invalid credentials. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <SEOHead
        title="Staff Login - Annita"
        description="Staff login portal for Annita employees"
        keywords={['staff', 'login', 'employee', 'portal']}
        noIndex={true}
        noFollow={true}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Logo and Header */}
          <div className="text-center mb-8 lg:mb-12">
            <h1 className="text-3xl font-bold text-white mb-2">Staff Portal</h1>
            <p className="text-gray-400">Enter your Employee ID and Secret PIN to access.</p>
          </div>

          {/* Login Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Error Message */}
              {error && (
                <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <p className="text-sm text-red-400">{error}</p>
                </div>
              )}

              {/* Employee ID Field */}
              <div>
                <label htmlFor="employeeId" className="block text-sm font-medium text-gray-300 mb-2">
                  Employee ID
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Hash className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="employeeId"
                    type="text"
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value.toUpperCase())}
                    required
                    className="block w-full pl-10 pr-3 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all uppercase"
                    placeholder="EMP001"
                    disabled={isLoading}
                    autoComplete="username"
                  />
                </div>
              </div>

              {/* Secret PIN Field */}
              <div>
                <label htmlFor="secretPin" className="block text-sm font-medium text-gray-300 mb-2">
                  Secret PIN
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="secretPin"
                    type={showPassword ? 'text' : 'password'}
                    value={secretPin}
                    onChange={(e) => setSecretPin(e.target.value)}
                    required
                    maxLength={6}
                    className="block w-full pl-10 pr-12 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-center tracking-widest"
                    placeholder="••••••"
                    disabled={isLoading}
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>

            {/* Footer Note */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                Authorized personnel only
              </p>
            </div>
          </div>

          {/* Back to Home Link */}
          <div className="mt-6 text-center">
            <button
              onClick={() => router.push('/')}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

