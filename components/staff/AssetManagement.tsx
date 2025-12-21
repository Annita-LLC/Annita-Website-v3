'use client'

import { useState } from 'react'
import { Package, Plus, Search, CheckCircle2, Clock, AlertCircle, Monitor, Smartphone, Laptop } from 'lucide-react'

export default function AssetManagement() {
  const [activeTab, setActiveTab] = useState<'my-assets' | 'request' | 'inventory'>('my-assets')
  const [searchTerm, setSearchTerm] = useState('')
  const [showRequestForm, setShowRequestForm] = useState(false)

  const myAssets = [
    { id: 1, name: 'MacBook Pro 16"', type: 'Laptop', serialNumber: 'MBP-2024-001', assignedDate: '2024-01-15', status: 'assigned', condition: 'excellent' },
    { id: 2, name: 'Dell Monitor 27"', type: 'Monitor', serialNumber: 'DLM-2024-045', assignedDate: '2024-03-20', status: 'assigned', condition: 'good' },
    { id: 3, name: 'iPhone 14 Pro', type: 'Phone', serialNumber: 'IPH-2024-012', assignedDate: '2024-06-10', status: 'assigned', condition: 'excellent' },
  ]

  const pendingRequests = [
    { id: 1, asset: 'Wireless Keyboard', type: 'Accessory', requestedDate: '2024-12-18', reason: 'Current keyboard malfunctioning', status: 'pending' },
    { id: 2, asset: 'External Hard Drive 1TB', type: 'Storage', requestedDate: '2024-12-17', reason: 'Need additional storage', status: 'pending' },
  ]

  const inventory = [
    { id: 1, name: 'MacBook Pro 16"', type: 'Laptop', total: 15, available: 3, assigned: 12, category: 'Computers' },
    { id: 2, name: 'Dell Monitor 27"', type: 'Monitor', total: 25, available: 8, assigned: 17, category: 'Displays' },
    { id: 3, name: 'iPhone 14 Pro', type: 'Phone', total: 10, available: 2, assigned: 8, category: 'Mobile Devices' },
    { id: 4, name: 'Wireless Keyboard', type: 'Accessory', total: 30, available: 12, assigned: 18, category: 'Accessories' },
  ]

  const [requestForm, setRequestForm] = useState({
    asset: '',
    type: '',
    reason: '',
    priority: 'medium'
  })

  const assetTypes = ['Laptop', 'Desktop', 'Monitor', 'Phone', 'Tablet', 'Accessory', 'Storage', 'Other']

  const getAssetIcon = (type: string) => {
    if (type.includes('Laptop') || type.includes('Desktop')) return Laptop
    if (type.includes('Monitor') || type.includes('Display')) return Monitor
    if (type.includes('Phone') || type.includes('Tablet')) return Smartphone
    return Package
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Asset Management</h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">Track equipment and assets</p>
        </div>
        <button
          onClick={() => setShowRequestForm(!showRequestForm)}
          className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation flex items-center justify-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Request Asset</span>
        </button>
      </div>

      {/* Request Form */}
      {showRequestForm && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Request New Asset</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Asset Name *</label>
                <input
                  type="text"
                  value={requestForm.asset}
                  onChange={(e) => setRequestForm({ ...requestForm, asset: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="e.g., MacBook Pro"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Asset Type *</label>
                <select
                  value={requestForm.type}
                  onChange={(e) => setRequestForm({ ...requestForm, type: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select type...</option>
                  {assetTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Request *</label>
              <textarea
                value={requestForm.reason}
                onChange={(e) => setRequestForm({ ...requestForm, reason: e.target.value })}
                rows={3}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                placeholder="Explain why you need this asset..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
              <select
                value={requestForm.priority}
                onChange={(e) => setRequestForm({ ...requestForm, priority: e.target.value })}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  if (!requestForm.asset || !requestForm.type || !requestForm.reason) {
                    alert('Please fill in all required fields')
                    return
                  }
                  alert(`Asset request submitted!\n\nAsset: ${requestForm.asset}\nType: ${requestForm.type}\n\nIn production, this would submit the request.`)
                  setRequestForm({ asset: '', type: '', reason: '', priority: 'medium' })
                  setShowRequestForm(false)
                }}
                className="flex-1 px-4 py-2.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-sm font-medium transition-colors touch-manipulation"
              >
                Submit Request
              </button>
              <button
                onClick={() => {
                  setShowRequestForm(false)
                  setRequestForm({ asset: '', type: '', reason: '', priority: 'medium' })
                }}
                className="px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm font-medium transition-colors touch-manipulation"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex border-b border-gray-200 overflow-x-auto scrollbar-hide">
          {[
            { id: 'my-assets' as const, label: 'My Assets', icon: Package },
            { id: 'request' as const, label: 'Requests', icon: Clock },
            { id: 'inventory' as const, label: 'Inventory', icon: Package },
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
          {/* My Assets Tab */}
          {activeTab === 'my-assets' && (
            <div className="space-y-4">
              {myAssets.map((asset) => {
                const Icon = getAssetIcon(asset.type)
                return (
                  <div key={asset.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <Icon className="w-5 h-5 text-blue-600" />
                          <h4 className="text-sm sm:text-base font-semibold text-gray-900">{asset.name}</h4>
                        </div>
                        <p className="text-xs text-gray-500 mb-2">{asset.type} • Serial: {asset.serialNumber}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-600">
                          <span>Assigned: {asset.assignedDate}</span>
                          <span className={`px-2 py-0.5 rounded ${
                            asset.condition === 'excellent' ? 'bg-green-100 text-green-700' :
                            asset.condition === 'good' ? 'bg-blue-100 text-blue-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {asset.condition}
                          </span>
                        </div>
                      </div>
                      <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded">{asset.status}</span>
                    </div>
                    <button
                      onClick={() => alert(`Reporting issue with ${asset.name}\n\nIn production, this would open an issue report form.`)}
                      className="w-full px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation"
                    >
                      Report Issue
                    </button>
                  </div>
                )
              })}
            </div>
          )}

          {/* Requests Tab */}
          {activeTab === 'request' && (
            <div className="space-y-4">
              {pendingRequests.length > 0 ? (
                pendingRequests.map((request) => (
                  <div key={request.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{request.asset}</h4>
                        <p className="text-xs text-gray-500 mb-2">{request.type} • Requested: {request.requestedDate}</p>
                        <p className="text-xs sm:text-sm text-gray-600">{request.reason}</p>
                      </div>
                      <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 rounded">{request.status}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm text-gray-600">No pending requests</p>
                </div>
              )}
            </div>
          )}

          {/* Inventory Tab */}
          {activeTab === 'inventory' && (
            <div className="space-y-4">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Search inventory..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div className="space-y-3 sm:space-y-4">
                {inventory.map((item) => {
                  const Icon = getAssetIcon(item.type)
                  return (
                    <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <Icon className="w-5 h-5 text-blue-600" />
                            <h4 className="text-sm sm:text-base font-semibold text-gray-900">{item.name}</h4>
                          </div>
                          <p className="text-xs text-gray-500 mb-2">{item.type} • {item.category}</p>
                          <div className="grid grid-cols-3 gap-2 text-xs">
                            <div>
                              <p className="text-gray-500">Total</p>
                              <p className="font-semibold text-gray-900">{item.total}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Available</p>
                              <p className="font-semibold text-green-600">{item.available}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Assigned</p>
                              <p className="font-semibold text-blue-600">{item.assigned}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
