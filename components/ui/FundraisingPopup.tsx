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
    // Check if user has already seen the fundraising popup
    const hasSeenFundraising = localStorage.getItem('annita-fundraising-seen')
    
    if (!hasSeenFundraising) {
      // Show popup immediately
      setIsVisible(true)
    }
  }, [])

  const handleClose = () => {
    // Mark as seen and close
    localStorage.setItem('annita-fundraising-seen', 'true')
    setIsVisible(false)
    onClose()
  }

  const handleInvestNow = () => {
    // Mark as seen and redirect to investors page
    localStorage.setItem('annita-fundraising-seen', 'true')
    setIsVisible(false)
    window.location.href = '/investors'
  }

  const handleLearnMore = () => {
    // Mark as seen and redirect to investors page
    localStorage.setItem('annita-fundraising-seen', 'true')
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
      <div className="fixed inset-0 flex items-center justify-center p-4 z-50 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-md">
          <div className="bg-gradient-to-br from-orange-50 via-white to-red-50 rounded-3xl shadow-2xl border border-orange-100 overflow-hidden">
            
            {/* Header */}
            <div className="px-6 py-5 border-b border-orange-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      🚀 Fundraising Alert
                    </h3>
                    <p className="text-sm text-gray-600">
                      Join our first investment round
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="px-6 py-5">
              
              {/* Main Message */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  We're Raising Our First Round! 💰
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Join us in revolutionizing Africa's digital economy. We're seeking <strong>$150,000</strong> for <strong>15% equity</strong> to accelerate our growth across the continent.
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <DollarSign className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-lg font-bold text-green-700">$150K</div>
                  <div className="text-xs text-green-600">Investment Goal</div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-lg font-bold text-blue-700">15%</div>
                  <div className="text-xs text-blue-600">Equity Offered</div>
                </div>
              </div>

              {/* Investment Highlights */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Proven traction in Liberia with 1,000+ users</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Mansa due diligence completed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">African Union support and recognition</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Revolutionary V3.0 app coming soon</span>
                </div>
              </div>

              {/* Investment Options */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 text-center">Investment Options</h4>
                <div className="space-y-2 text-sm">
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
              <div className="space-y-3">
                <button
                  onClick={handleInvestNow}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Star className="w-4 h-4" />
                  <span>Invest Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <button
                  onClick={handleLearnMore}
                  className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-xl border border-gray-200 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Globe className="w-4 h-4" />
                  <span>Learn More</span>
                </button>
              </div>

              {/* Footer */}
              <div className="mt-4 pt-4 border-t border-orange-100">
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
