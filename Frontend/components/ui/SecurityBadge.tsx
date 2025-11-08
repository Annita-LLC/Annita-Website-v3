'use client'

import { Shield, Lock, Eye, Server } from 'lucide-react'

const SecurityBadge = () => {
  return (
    <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 text-white py-2.5 px-4 text-center text-sm font-medium shadow-lg">
      <div className="container mx-auto flex items-center justify-center gap-3 flex-wrap">
        <Shield className="w-4 h-4" />
        <span className="font-semibold">Bank-Grade Security</span>
        <span className="hidden sm:inline">•</span>
        <span>256-bit AES Encryption</span>
        <span className="hidden sm:inline">•</span>
        <span>ISO 27001 Certified</span>
        <span className="hidden sm:inline">•</span>
        <span>Zero Data Leaks</span>
        <span className="hidden sm:inline">•</span>
        <span>PCI DSS Compliant</span>
        <Lock className="w-4 h-4" />
      </div>
    </div>
  )
}

export default SecurityBadge

