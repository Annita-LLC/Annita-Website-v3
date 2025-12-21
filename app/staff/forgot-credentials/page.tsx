'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Mail, Phone, Hash, Lock, ArrowLeft, AlertCircle, CheckCircle2, Download } from 'lucide-react'
import SEOHead from '@/components/seo/SEOHead'

export default function ForgotCredentialsPage() {
  const [step, setStep] = useState<'email' | 'verify' | 'success'>('email')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [verificationCode, setVerificationCode] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [credentials, setCredentials] = useState<{ employeeId: string; secretCode: string } | null>(null)
  const router = useRouter()

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))

      if (!email || !phone) {
        setError('Please enter both email and phone number')
        setIsLoading(false)
        return
      }

      // In production, this would verify email/phone and send verification code
      setStep('verify')
    } catch (err) {
      setError('Unable to process request. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))

      if (!verificationCode || verificationCode.length !== 6) {
        setError('Please enter a valid 6-digit verification code')
        setIsLoading(false)
        return
      }

      // In production, this would verify the code and retrieve credentials
      // For demo, generate mock credentials
      const mockEmployeeId = `EMP${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`
      const mockSecretCode = Math.floor(100000 + Math.random() * 900000).toString()

      setCredentials({
        employeeId: mockEmployeeId,
        secretCode: mockSecretCode
      })
      setStep('success')
    } catch (err) {
      setError('Invalid verification code. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDownload = () => {
    if (!credentials) return

    const content = `Annita Staff Portal Credentials\n\nEmployee ID: ${credentials.employeeId}\nSecret Code: ${credentials.secretCode}\n\nPlease keep this information secure.\n\nGenerated: ${new Date().toLocaleString()}\n\n---\nAnnita LLC - Staff Portal`
    
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `annita-credentials-${credentials.employeeId}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <>
      <SEOHead
        title="Forgot Credentials - Staff Portal"
        description="Recover your Employee ID and Secret Code"
        keywords={['staff', 'forgot', 'credentials', 'recovery']}
        noIndex={true}
        noFollow={true}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4 py-12 pt-24 lg:pt-24">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Recover Credentials</h1>
            <p className="text-sm sm:text-base text-gray-400">
              {step === 'email' && 'Enter your registered email and phone to recover your credentials'}
              {step === 'verify' && 'Enter the verification code sent to your email/phone'}
              {step === 'success' && 'Your credentials have been recovered'}
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-6 sm:p-8">
            {step === 'email' && (
              <form onSubmit={handleEmailSubmit} className="space-y-4 sm:space-y-6">
                {error && (
                  <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <p className="text-sm text-red-400">{error}</p>
                  </div>
                )}

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                    Registered Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="block w-full pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 text-sm sm:text-base bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all touch-manipulation"
                      placeholder="your.email@annita.com"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                    Registered Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    </div>
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="block w-full pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 text-sm sm:text-base bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all touch-manipulation"
                      placeholder="+231 77 123 4567"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2.5 sm:py-3 px-4 rounded-lg text-sm sm:text-base font-semibold hover:from-orange-600 hover:to-red-600 active:from-orange-700 active:to-red-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg touch-manipulation"
                >
                  {isLoading ? 'Sending...' : 'Send Verification Code'}
                </button>
              </form>
            )}

            {step === 'verify' && (
              <form onSubmit={handleVerifyCode} className="space-y-4 sm:space-y-6">
                {error && (
                  <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <p className="text-sm text-red-400">{error}</p>
                  </div>
                )}

                <div className="bg-blue-500/10 border border-blue-500/50 rounded-lg p-4">
                  <p className="text-xs sm:text-sm text-blue-300">
                    A verification code has been sent to <strong>{email}</strong> and <strong>{phone}</strong>. Please enter the 6-digit code.
                  </p>
                </div>

                <div>
                  <label htmlFor="verificationCode" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                    Verification Code
                  </label>
                  <input
                    id="verificationCode"
                    type="text"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    required
                    maxLength={6}
                    className="block w-full px-4 py-2.5 sm:py-3 text-center text-2xl sm:text-3xl font-bold tracking-widest bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all touch-manipulation"
                    placeholder="000000"
                    disabled={isLoading}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => setStep('email')}
                    className="w-full sm:w-auto px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white transition-colors touch-manipulation"
                    disabled={isLoading}
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full sm:flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-2.5 sm:py-3 px-4 rounded-lg text-sm sm:text-base font-semibold hover:from-orange-600 hover:to-red-600 active:from-orange-700 active:to-red-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg touch-manipulation"
                  >
                    {isLoading ? 'Verifying...' : 'Verify Code'}
                  </button>
                </div>
              </form>
            )}

            {step === 'success' && credentials && (
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-green-500/10 border border-green-500/50 rounded-lg p-4 flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <p className="text-sm text-green-400">Credentials recovered successfully!</p>
                </div>

                <div className="bg-white/5 rounded-lg p-4 sm:p-6 space-y-4 border border-white/10">
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1">Employee ID</label>
                    <div className="flex items-center space-x-2">
                      <Hash className="w-4 h-4 text-gray-400" />
                      <p className="text-lg sm:text-xl font-bold text-white font-mono">{credentials.employeeId}</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1">Secret Code</label>
                    <div className="flex items-center space-x-2">
                      <Lock className="w-4 h-4 text-gray-400" />
                      <p className="text-lg sm:text-xl font-bold text-white font-mono tracking-widest">{credentials.secretCode}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/50 rounded-lg p-4">
                  <p className="text-xs sm:text-sm text-yellow-300">
                    <strong>Important:</strong> Please save these credentials securely. You can download them as a text file.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleDownload}
                    className="w-full sm:flex-1 flex items-center justify-center space-x-2 bg-blue-600 text-white py-2.5 sm:py-3 px-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 shadow-lg touch-manipulation"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Credentials</span>
                  </button>
                  <button
                    onClick={() => router.push('/staff/login')}
                    className="w-full sm:flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-2.5 sm:py-3 px-4 rounded-lg text-sm sm:text-base font-semibold hover:from-orange-600 hover:to-red-600 active:from-orange-700 active:to-red-700 transition-all duration-200 shadow-lg touch-manipulation"
                  >
                    Go to Login
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Back to Login Link */}
          <div className="mt-6 text-center">
            <button
              onClick={() => router.push('/staff/login')}
              className="text-sm text-gray-400 hover:text-white transition-colors flex items-center justify-center space-x-2 touch-manipulation"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Login</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

