'use client'

import { useState } from 'react'
import { BarChart3, TrendingUp, TrendingDown, Target, Globe, Search } from 'lucide-react'

interface MarketAnalysisProps {
  userRole: string
}

export default function MarketAnalysis({ userRole }: MarketAnalysisProps) {
  const [activeTab, setActiveTab] = useState<'trends' | 'competitive' | 'industry'>('trends')

  const marketTrends = [
    { id: 1, category: 'Digital Payments', trend: 'Growing', growth: 25.5, description: 'Strong growth in mobile payment adoption across Africa' },
    { id: 2, category: 'E-commerce', trend: 'Growing', growth: 18.2, description: 'Rapid expansion of online shopping in West Africa' },
    { id: 3, category: 'Fintech Services', trend: 'Growing', growth: 32.1, description: 'Increased demand for financial technology solutions' },
  ]

  const competitiveAnalysis = [
    { id: 1, competitor: 'Competitor A', marketShare: 25, strengths: 'Strong brand presence', weaknesses: 'Limited features', threat: 'medium' },
    { id: 2, competitor: 'Competitor B', marketShare: 18, strengths: 'Lower pricing', weaknesses: 'Poor customer service', threat: 'low' },
    { id: 3, competitor: 'Competitor C', marketShare: 15, strengths: 'Innovative features', weaknesses: 'Small market presence', threat: 'high' },
  ]

  const industryInsights = [
    { id: 1, insight: 'African tech market expected to grow 15% annually', source: 'Tech Africa Report 2024', relevance: 'high' },
    { id: 2, insight: 'MSME digital adoption increasing by 20% year-over-year', source: 'Business Intelligence Africa', relevance: 'high' },
    { id: 3, insight: 'Investment in African startups reached $5B in 2024', source: 'Venture Capital Africa', relevance: 'medium' },
  ]

  if (userRole !== 'ceo') {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 sm:p-12 text-center">
        <BarChart3 className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Access Denied</h3>
        <p className="text-sm sm:text-base text-gray-600">CEO access required for market analysis.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Market Analysis</h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">Market trends and competitive analysis</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex border-b border-gray-200 overflow-x-auto scrollbar-hide">
          {[
            { id: 'trends' as const, label: 'Market Trends', icon: TrendingUp },
            { id: 'competitive' as const, label: 'Competitive Analysis', icon: Target },
            { id: 'industry' as const, label: 'Industry Insights', icon: Globe },
          ].map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap touch-manipulation ${
                  activeTab === tab.id
                    ? 'border-orange-600 text-orange-600'
                    : 'border-transparent text-gray-600 hover:text-orange-600 active:text-orange-600'
                }`}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        <div className="p-4 sm:p-6">
          {/* Market Trends Tab */}
          {activeTab === 'trends' && (
            <div className="space-y-4">
              {marketTrends.map((trend) => (
                <div key={trend.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                        <h4 className="text-sm sm:text-base font-semibold text-gray-900">{trend.category}</h4>
                        <span className="px-2 py-0.5 text-xs font-medium bg-green-100 text-green-700 rounded">{trend.trend}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 mb-2">{trend.description}</p>
                      <p className="text-xs sm:text-sm font-semibold text-green-600">Growth: +{trend.growth}%</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Competitive Analysis Tab */}
          {activeTab === 'competitive' && (
            <div className="space-y-4">
              {competitiveAnalysis.map((competitor) => (
                <div key={competitor.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">{competitor.competitor}</h4>
                      <p className="text-xs sm:text-sm text-gray-600 mb-1">Market Share: {competitor.marketShare}%</p>
                      <p className="text-xs text-gray-500 mb-1"><strong>Strengths:</strong> {competitor.strengths}</p>
                      <p className="text-xs text-gray-500"><strong>Weaknesses:</strong> {competitor.weaknesses}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      competitor.threat === 'high' ? 'bg-red-100 text-red-700' :
                      competitor.threat === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {competitor.threat} threat
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Industry Insights Tab */}
          {activeTab === 'industry' && (
            <div className="space-y-4">
              {industryInsights.map((insight) => (
                <div key={insight.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <p className="text-sm sm:text-base text-gray-900 mb-2">{insight.insight}</p>
                      <p className="text-xs text-gray-500">Source: {insight.source}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      insight.relevance === 'high' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {insight.relevance}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
