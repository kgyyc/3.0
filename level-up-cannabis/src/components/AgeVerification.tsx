import { useState } from 'react'
import { Calendar, Shield, AlertTriangle } from 'lucide-react'

interface AgeVerificationProps {
  onVerify: (verified: boolean) => void
}

export function AgeVerification({ onVerify }: AgeVerificationProps) {
  const [birthDate, setBirthDate] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!birthDate) {
      alert('Please enter your birth date')
      return
    }

    const today = new Date()
    const birth = new Date(birthDate)
    const age = today.getFullYear() - birth.getFullYear()
    const monthDiff = today.getMonth() - birth.getMonth()
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      const adjustedAge = age - 1
      if (adjustedAge >= 18) {
        onVerify(true)
      } else {
        alert('You must be 18 or older to access this website.')
      }
    } else {
      if (age >= 18) {
        onVerify(true)
      } else {
        alert('You must be 18 or older to access this website.')
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-800 rounded-2xl shadow-2xl border border-gray-700">
        <div className="p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <img 
              src="/logo.png" 
              alt="Level Up Cannabis" 
              className="h-20 w-20 mx-auto rounded-full mb-4"
            />
            <div className="text-2xl font-bold text-orange-400">LEVEL UP</div>
            <div className="text-lg text-green-400 font-semibold">CANNABIS</div>
          </div>

          {/* Warning Icon */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 bg-opacity-20 rounded-full mb-4">
              <Shield className="h-8 w-8 text-orange-400" />
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">Age Verification Required</h2>
            <p className="text-gray-300 text-sm">
              You must be 18 years or older to access this website and purchase cannabis products in Alberta.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="birthDate" className="block text-sm font-medium text-gray-300 mb-2">
                <Calendar className="inline h-4 w-4 mr-2" />
                Enter your birth date
              </label>
              <input
                type="date"
                id="birthDate"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full px-3 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
            >
              Verify Age & Enter
            </button>
          </form>

          {/* Legal Notice */}
          <div className="mt-6 p-4 bg-red-900 bg-opacity-30 border border-red-700 rounded-lg">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-red-300">
                <strong>Legal Notice:</strong> Cannabis products are for adults 18+ only. Keep out of reach of children and pets. Do not operate vehicles or machinery. Consume responsibly.
              </div>
            </div>
          </div>

          {/* AGLC Notice */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-400">
              Licensed by the Alberta Gaming, Liquor & Cannabis Commission (AGLC)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
