'use client'

import { useState } from 'react'
import { User, Mail, Phone, Building2, Save, Lock, Bell, Globe, Camera, Eye, EyeOff } from 'lucide-react'

export default function ProfileSettings() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@annita.com',
    phone: '+231 77 505 7227',
    employeeId: 'EMP001',
    department: 'IT & Technology',
    role: 'Software Engineer',
    supervisor: 'Jane Smith',
    bio: 'Passionate software engineer with 5+ years of experience.',
    location: 'Monrovia, Liberia'
  })

  const [secretCode, setSecretCode] = useState({
    current: '',
    new: '',
    confirm: ''
  })
  const [showSecretCodes, setShowSecretCodes] = useState({
    current: false,
    new: false,
    confirm: false
  })

  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    announcements: true,
    deadlines: true,
    weeklyReports: true
  })

  const handleProfileUpdate = () => {
    alert('Profile updated successfully!')
  }

  const handleSecretCodeChange = () => {
    if (secretCode.new !== secretCode.confirm) {
      alert('New secret codes do not match!')
      return
    }
    if (secretCode.new.length < 4) {
      alert('Secret code must be at least 4 characters long!')
      return
    }
    alert('Secret code changed successfully!')
    setSecretCode({ current: '', new: '', confirm: '' })
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Profile Settings</h2>

        {/* Profile Picture */}
        <div className="mb-4 sm:mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Profile Picture</label>
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold flex-shrink-0">
              {profile.name.charAt(0)}
            </div>
            <button className="px-3 sm:px-4 py-2 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 rounded-lg text-xs sm:text-sm font-medium text-gray-700 flex items-center space-x-2 touch-manipulation">
              <Camera className="w-4 h-4" />
              <span>Change Photo</span>
            </button>
          </div>
        </div>

        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4 inline mr-1" />
              Full Name
            </label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="w-4 h-4 inline mr-1" />
              Email Address
            </label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="w-4 h-4 inline mr-1" />
              Phone Number
            </label>
            <input
              type="tel"
              value={profile.phone}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Building2 className="w-4 h-4 inline mr-1" />
              Location
            </label>
            <input
              type="text"
              value={profile.location}
              onChange={(e) => setProfile({ ...profile, location: e.target.value })}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
            <textarea
              value={profile.bio}
              onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
              rows={3}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
            />
          </div>
        </div>

        <button
          onClick={handleProfileUpdate}
          className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 active:bg-orange-800 font-medium flex items-center justify-center space-x-2 touch-manipulation"
        >
          <Save className="w-4 h-4" />
          <span>Save Changes</span>
        </button>
      </div>

      {/* Change Secret Code */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
          <Lock className="w-5 h-5 mr-2" />
          Change Secret Code
        </h3>
        <div className="space-y-4 sm:space-y-6">
          <div>
            <label htmlFor="currentSecretCode" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
              Current Secret Code
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              </div>
              <input
                id="currentSecretCode"
                type={showSecretCodes.current ? 'text' : 'password'}
                value={secretCode.current}
                onChange={(e) => setSecretCode({ ...secretCode, current: e.target.value })}
                className="block w-full pl-9 sm:pl-10 pr-10 sm:pr-12 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all touch-manipulation"
                placeholder="Enter current secret code"
                maxLength={20}
              />
              <button
                type="button"
                onClick={() => setShowSecretCodes({ ...showSecretCodes, current: !showSecretCodes.current })}
                className="absolute inset-y-0 right-0 pr-3 flex items-center touch-manipulation"
              >
                {showSecretCodes.current ? (
                  <EyeOff className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-600 active:text-gray-700 transition-colors" />
                ) : (
                  <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-600 active:text-gray-700 transition-colors" />
                )}
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="newSecretCode" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
              New Secret Code
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              </div>
              <input
                id="newSecretCode"
                type={showSecretCodes.new ? 'text' : 'password'}
                value={secretCode.new}
                onChange={(e) => setSecretCode({ ...secretCode, new: e.target.value })}
                className="block w-full pl-9 sm:pl-10 pr-10 sm:pr-12 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all touch-manipulation"
                placeholder="Enter new secret code"
                maxLength={20}
              />
              <button
                type="button"
                onClick={() => setShowSecretCodes({ ...showSecretCodes, new: !showSecretCodes.new })}
                className="absolute inset-y-0 right-0 pr-3 flex items-center touch-manipulation"
              >
                {showSecretCodes.new ? (
                  <EyeOff className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-600 active:text-gray-700 transition-colors" />
                ) : (
                  <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-600 active:text-gray-700 transition-colors" />
                )}
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="confirmSecretCode" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
              Confirm New Secret Code
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              </div>
              <input
                id="confirmSecretCode"
                type={showSecretCodes.confirm ? 'text' : 'password'}
                value={secretCode.confirm}
                onChange={(e) => setSecretCode({ ...secretCode, confirm: e.target.value })}
                className="block w-full pl-9 sm:pl-10 pr-10 sm:pr-12 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all touch-manipulation"
                placeholder="Confirm new secret code"
                maxLength={20}
              />
              <button
                type="button"
                onClick={() => setShowSecretCodes({ ...showSecretCodes, confirm: !showSecretCodes.confirm })}
                className="absolute inset-y-0 right-0 pr-3 flex items-center touch-manipulation"
              >
                {showSecretCodes.confirm ? (
                  <EyeOff className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-600 active:text-gray-700 transition-colors" />
                ) : (
                  <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-600 active:text-gray-700 transition-colors" />
                )}
              </button>
            </div>
          </div>
          <button
            onClick={handleSecretCodeChange}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg touch-manipulation"
          >
            Update Secret Code
          </button>
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
          <Bell className="w-5 h-5 mr-2" />
          Notification Preferences
        </h3>
        <div className="space-y-2 sm:space-y-3">
          {Object.entries(notifications).map(([key, value]) => (
            <label key={key} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 active:bg-gray-100 cursor-pointer touch-manipulation">
              <span className="text-sm font-medium text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
              <input
                type="checkbox"
                checked={value}
                onChange={(e) => setNotifications({ ...notifications, [key]: e.target.checked })}
                className="w-5 h-5 text-orange-600 rounded focus:ring-orange-500 touch-manipulation"
              />
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

