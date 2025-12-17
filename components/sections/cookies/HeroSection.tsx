"use client"

import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-500/20 backdrop-blur-sm text-blue-200 text-sm font-semibold mb-8">
            Cookie Policy & Settings
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Transparent Cookie{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Management
            </span>
          </h1>

          <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl mx-auto">
            We believe in transparency and user control. Understand how we use cookies and take charge of your privacy preferences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl font-semibold text-white shadow-xl transition-all duration-300">
              Manage Cookie Settings
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl font-semibold text-white shadow-xl transition-all duration-300">
              Learn About Cookies
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
