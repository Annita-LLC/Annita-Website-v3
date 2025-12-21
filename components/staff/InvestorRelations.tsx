'use client'

import { useState } from 'react'
import { TrendingUp, FileText, Mail, Plus, Download, Calendar, Users } from 'lucide-react'

interface InvestorRelationsProps {
  userRole: string
}

export default function InvestorRelations({ userRole }: InvestorRelationsProps) {
  const [activeTab, setActiveTab] = useState<'updates' | 'reports' | 'contacts'>('updates')

  const investorUpdates = [
    { id: 1, title: 'Q4 2024 Performance Update', date: '2024-12-15', recipients: 12, status: 'sent', type: 'Quarterly Report' },
    { id: 2, title: 'Product Launch Announcement', date: '2024-11-20', recipients: 12, status: 'sent', type: 'Newsletter' },
    { id: 3, title: 'Q1 2025 Forecast', date: '2025-01-05', recipients: 0, status: 'draft', type: 'Forecast' },
  ]

  const financialReports = [
    { id: 1, name: 'Q4 2024 Financial Report', period: 'Q4 2024', type: 'Quarterly', date: '2024-12-31', status: 'published' },
    { id: 2, name: 'Annual Report 2024', period: '2024', type: 'Annual', date: '2025-01-31', status: 'pending' },
    { id: 3, name: 'Q3 2024 Financial Report', period: 'Q3 2024', type: 'Quarterly', date: '2024-09-30', status: 'published' },
  ]

  const investorContacts = [
    { id: 1, name: 'Venture Capital Fund A', contact: 'john@vcfund.com', type: 'VC', invested: 500000, status: 'active' },
    { id: 2, name: 'Angel Investor Group', contact: 'sarah@angelgroup.com', type: 'Angel', invested: 200000, status: 'active' },
    { id: 3, name: 'Strategic Partner Corp', contact: 'mike@strategic.com', type: 'Strategic', invested: 750000, status: 'active' },
  ]

  if (userRole !== 'ceo') {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 sm:p-12 text-center">
        <TrendingUp className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Access Denied</h3>
        <p className="text-sm sm:text-base text-gray-600">CEO access required for investor relations.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Investor Relations</h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">Manage investor updates and communications</p>
        </div>
        <button
          onClick={() => alert('Create Investor Update\n\nIn production, this would open a form to create an update.')}
          className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation flex items-center justify-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>New Update</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex border-b border-gray-200 overflow-x-auto scrollbar-hide">
          {[
            { id: 'updates' as const, label: 'Updates', icon: Mail },
            { id: 'reports' as const, label: 'Financial Reports', icon: FileText },
            { id: 'contacts' as const, label: 'Investor Contacts', icon: Users },
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
          {/* Updates Tab */}
          {activeTab === 'updates' && (
            <div className="space-y-4">
              {investorUpdates.map((update) => (
                <div key={update.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{update.title}</h4>
                      <p className="text-xs text-gray-500 mb-2">Date: {update.date} • Type: {update.type}</p>
                      <p className="text-xs text-gray-600">Recipients: {update.recipients} investors</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      update.status === 'sent' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {update.status}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => alert(`Viewing ${update.title}\n\nIn production, this would show update details.`)}
                      className="flex-1 px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
                    >
                      View Details
                    </button>
                    {update.status === 'draft' && (
                      <button
                        onClick={() => alert(`Sending ${update.title}\n\nIn production, this would send to all investors.`)}
                        className="px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
                      >
                        Send
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Reports Tab */}
          {activeTab === 'reports' && (
            <div className="space-y-4">
              {financialReports.map((report) => (
                <div key={report.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <FileText className="w-5 h-5 text-blue-600" />
                        <h4 className="text-sm sm:text-base font-semibold text-gray-900">{report.name}</h4>
                      </div>
                      <p className="text-xs text-gray-500 mb-2">{report.type} Report • Period: {report.period} • Date: {report.date}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      report.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {report.status}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => alert(`Viewing ${report.name}\n\nIn production, this would show the report.`)}
                      className="flex-1 px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
                    >
                      View Report
                    </button>
                    <button
                      onClick={() => alert(`Downloading ${report.name}\n\nIn production, this would download the PDF.`)}
                      className="px-3 sm:px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-xs sm:text-sm font-medium transition-colors touch-manipulation flex items-center space-x-1"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Download</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Contacts Tab */}
          {activeTab === 'contacts' && (
            <div className="space-y-4">
              {investorContacts.map((contact) => (
                <div key={contact.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{contact.name}</h4>
                      <p className="text-xs text-gray-500 mb-2">{contact.contact}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-600">
                        <span>Type: {contact.type}</span>
                        <span>Invested: ${(contact.invested / 1000).toFixed(0)}K</span>
                      </div>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      contact.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {contact.status}
                    </span>
                  </div>
                  <button
                    onClick={() => alert(`Contacting ${contact.name}\n\nIn production, this would open communication options.`)}
                    className="w-full px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
                  >
                    Contact Investor
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
