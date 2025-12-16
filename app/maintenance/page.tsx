import { Metadata } from 'next'
import { Construction, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Under Maintenance | Annita',
  description: 'Annita v1.0 is currently under maintenance. We apologize for any inconvenience.',
  robots: 'noindex, nofollow'
}

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-orange-500/20 rounded-full mb-6">
            <Construction className="w-12 h-12 text-orange-400" />
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Under Maintenance
        </h1>

        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
          Annita v1.0 is currently undergoing scheduled maintenance to bring you an even better experience.
        </p>

        {/* Maintenance Details */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-slate-700">
          <div className="flex items-center justify-center mb-4">
            <Clock className="w-6 h-6 text-orange-400 mr-2" />
            <span className="text-slate-300 font-medium">Expected Return</span>
          </div>
          <p className="text-slate-400">
            We're working hard to improve our services. The platform should be back online soon.
          </p>
        </div>

        {/* Footer */}
        <p className="text-slate-500 text-sm mt-8">
          Thank you for your patience. We appreciate your understanding.
        </p>
      </div>
    </div>
  )
}

