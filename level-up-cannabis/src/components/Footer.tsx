import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#FAA007' }}>Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 flex-shrink-0" style={{ color: '#FAA007' }} />
                <div>
                  <div>4022 26 St SE</div>
                  <div>Calgary, AB T2B 2Y4</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 flex-shrink-0" style={{ color: '#FAA007' }} />
                <div>(403) 455-0420</div>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="h-5 w-5 flex-shrink-0" style={{ color: '#FAA007' }} />
                <div>Monday to Sunday 10am-10pm</div>
              </div>
            </div>
            
            {/* Google Business Profile Link */}
            <div className="mt-6">
              <a
                href="https://g.co/kgs/TwbGv6S"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-white px-4 py-2 rounded-lg transition-colors hover:opacity-90"
                style={{ backgroundColor: '#FAA007' }}
              >
                <span>Find us on Google</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#FAA007' }}>Quick Links</h3>
            <div className="space-y-2">
              <div><a href="/about" className="text-gray-300 transition-colors" onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FAA007'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = ''}>Our Story</a></div>
              <div><a href="/menu" className="text-gray-300 transition-colors" onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FAA007'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = ''}>Product Menu</a></div>
              <div><a href="/loyalty" className="text-gray-300 transition-colors" onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FAA007'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = ''}>Level Up Rewards</a></div>
              <div><a href="/location" className="text-gray-300 transition-colors" onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FAA007'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = ''}>Store Location</a></div>
            </div>
          </div>

          {/* Compliance & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#FAA007' }}>Legal & Compliance</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div>🍁 Licensed by AGLC</div>
              <div>⚠️ 18+ Only - Valid ID Required</div>
              <div>🚗 Don't Drive Under the Influence</div>
              <div>🏠 Keep Away from Children & Pets</div>
              <div>⚕️ Health Canada Approved</div>
            </div>
            
            <div className="mt-4 p-3 bg-gray-900 rounded-lg">
              <p className="text-xs text-gray-400">
                <strong style={{ color: '#FAA007' }}>Consume Responsibly:</strong> Cannabis products may impair your ability to drive or operate machinery. Keep out of reach of children and pets. Do not use if pregnant or breastfeeding.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img src="/logo.png" alt="Level Up Cannabis" className="h-10 w-10 rounded-full" />
              <div>
                <div className="text-lg font-bold" style={{ color: '#FAA007' }}>LEVEL UP CANNABIS</div>
                <div className="text-sm text-gray-400">Dover, Calgary's Premier Dispensary</div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-sm text-gray-400">
                © 2025 Level Up Cannabis. All rights reserved.
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Licensed Cannabis Retailer - Province of Alberta
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
