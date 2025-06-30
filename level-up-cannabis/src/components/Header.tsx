import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Menu', href: '/menu' },
    { name: 'Location', href: '/location' },
    { name: 'Rewards', href: '/loyalty' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-800 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" style={{ color: '#FAA007' }} />
                <span>(403) 455-0420</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" style={{ color: '#FAA007' }} />
                <span>4022 26 St SE, Calgary, AB</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" style={{ color: '#FAA007' }} />
                <span>Monday to Sunday 10am-10pm</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="font-semibold" style={{ color: '#FAA007' }}>#LevelingUpCalgary</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Level Up Cannabis" 
              className="h-16 w-16 rounded-full"
            />
            <div className="ml-3">
              <div className="text-2xl font-bold" style={{ color: '#FAA007' }}>LEVEL UP</div>
              <div className="text-sm font-semibold" style={{ color: '#03A558' }}>CANNABIS</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'border-b-2'
                    : 'text-gray-300 hover:opacity-80'
                }`}
                style={isActive(item.href) 
                  ? { color: '#FAA007', borderBottomColor: '#FAA007' }
                  : undefined
                }
                onMouseEnter={(e) => !isActive(item.href) && ((e.target as HTMLElement).style.color = '#FAA007')}
                onMouseLeave={(e) => !isActive(item.href) && ((e.target as HTMLElement).style.color = '')}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 p-2 hover:opacity-80"
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FAA007'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = ''}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-gray-800'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                  style={isActive(item.href) ? { color: '#FAA007' } : undefined}
                  onMouseEnter={(e) => !isActive(item.href) && ((e.target as HTMLElement).style.color = '#FAA007')}
                  onMouseLeave={(e) => !isActive(item.href) && ((e.target as HTMLElement).style.color = '')}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
