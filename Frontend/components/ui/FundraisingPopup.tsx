'use client'

import { useState, useEffect } from 'react'
import { 
  X, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Target,
  ArrowRight,
  Star,
  CheckCircle,
  Clock,
  Globe
} from 'lucide-react'
import Button from '@/components/ui/Button'

interface FundraisingPopupProps {
  onClose: () => void
}

const FundraisingPopup = ({ onClose }: FundraisingPopupProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show popup immediately on every page refresh
    setIsVisible(true)
  }, [])

  const handleClose = () => {
    // Just close without marking as permanently seen
    setIsVisible(false)
    onClose()
  }

  const handleInvestNow = () => {
    // Close and redirect to investors page
    setIsVisible(false)
    window.location.href = '/investors'
  }

  const handleLearnMore = () => {
    // Close and redirect to investors page
    setIsVisible(false)
    window.location.href = '/investors'
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        onClick={handleClose}
      />
      
      {/* Fundraising Popup */}
      <div className="fixed inset-0 flex items-center justify-center p-2 sm:p-4 z-50 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-[95vw] sm:max-w-lg lg:max-w-xl">
          <div className="bg-gradient-to-br from-orange-50 via-white to-red-50 rounded-2xl sm:rounded-3xl shadow-2xl border border-orange-100 overflow-hidden w-full max-h-[85vh] sm:max-h-[90vh]">
            
            {/* Header */}
            <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-orange-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                      🚀 Fundraising Alert
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Join our first investment round
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  <X className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="px-4 sm:px-6 py-4 sm:py-5 overflow-y-auto max-h-[calc(85vh-100px)] sm:max-h-[calc(90vh-120px)]">
              
              {/* Main Message */}
              <div className="text-center mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  We're Raising Our First Round! 💰
                </h2>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  Join us in revolutionizing Africa's digital economy. We're seeking <strong>$150,000</strong> for <strong>15% equity</strong> to accelerate our growth across the continent.
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg sm:rounded-xl p-2 sm:p-4 text-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-md sm:rounded-lg flex items-center justify-center mx-auto mb-1 sm:mb-2">
                    <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div className="text-sm sm:text-lg font-bold text-green-700">$150K</div>
                  <div className="text-xs text-green-600">Investment Goal</div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg sm:rounded-xl p-2 sm:p-4 text-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-md sm:rounded-lg flex items-center justify-center mx-auto mb-1 sm:mb-2">
                    <Target className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div className="text-sm sm:text-lg font-bold text-blue-700">15%</div>
                  <div className="text-xs text-blue-600">Equity Offered</div>
                </div>
              </div>

              {/* Investment Highlights */}
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-700">Proven traction in Liberia with 1,000+ users</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-700">Mansa due diligence completed</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-700">African Union support and recognition</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-700">Revolutionary V3.0 app coming soon</span>
                </div>
              </div>

              {/* Investment Options */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
                <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-center text-sm sm:text-base">Investment Options</h4>
                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">SAFE (Preferred):</span>
                    <span className="font-medium text-gray-900">$1M Cap, 15% Discount</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Equity:</span>
                    <span className="font-medium text-gray-900">15% for $150K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Convertible Note:</span>
                    <span className="font-medium text-gray-900">3% Interest, 36 months</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 sm:space-y-3">
                <button
                  onClick={handleInvestNow}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl transition-all duration-200 shadow-sm hover:shadow-lg flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Invest Now</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
                
                <button
                  onClick={handleLearnMore}
                  className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl border border-gray-200 transition-colors duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Learn More</span>
                </button>
              </div>

              {/* Footer */}
              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-orange-100">
                <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  <span>Limited time opportunity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FundraisingPopup
