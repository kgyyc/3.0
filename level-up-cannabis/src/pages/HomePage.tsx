import { Link } from 'react-router-dom'
import { MapPin, Clock, Phone, Star, Users, Award, Leaf } from 'lucide-react'

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img 
              src="/logo.png" 
              alt="Level Up Cannabis" 
              className="h-32 w-32 mx-auto mb-8 rounded-full shadow-2xl"
            />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span style={{ color: '#FAA007' }}>LEVEL UP</span>
              <br />
              <span style={{ color: '#03A558' }}>CANNABIS</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Dover, Calgary's premier cannabis dispensary delivering quality, community, and trust.
            </p>
            <div className="text-2xl font-semibold mb-8" style={{ color: '#FAA007' }}>
              #LevelingUpCalgary
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/menu"
                className="text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors hover:opacity-90"
                style={{ backgroundColor: '#FAA007' }}
              >
                View Our Menu
              </Link>
              <Link
                to="/location"
                className="border-2 font-semibold py-4 px-8 rounded-lg text-lg transition-colors hover:text-gray-900"
                style={{ 
                  borderColor: '#03A558', 
                  color: '#03A558' 
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#03A558'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
              >
                Visit Our Store
              </Link>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
                <MapPin className="h-8 w-8 mx-auto mb-3" style={{ color: '#FAA007' }} />
                <div className="text-white font-semibold mb-2">Dover Location</div>
                <div className="text-gray-300 text-sm">4022 26 St SE, Calgary, AB</div>
              </div>
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
                <Clock className="h-8 w-8 mx-auto mb-3" style={{ color: '#FAA007' }} />
                <div className="text-white font-semibold mb-2">Store Hours</div>
                <div className="text-gray-300 text-sm">10am-10pm</div>
              </div>
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
                <Phone className="h-8 w-8 mx-auto mb-3" style={{ color: '#FAA007' }} />
                <div className="text-white font-semibold mb-2">Call Us</div>
                <div className="text-gray-300 text-sm">(403) 455-0420</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Level Up Cannabis?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not selling hype, trends or empty promises. We deliver the cannabis experience you deserve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform" style={{ background: 'linear-gradient(to bottom right, #FAA007, #E89006)' }}>
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Premium Quality</h3>
              <p className="text-gray-300">Carefully curated selection of the finest cannabis products in Calgary.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform" style={{ background: 'linear-gradient(to bottom right, #03A558, #028a4a)' }}>
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Local Community</h3>
              <p className="text-gray-300">Proudly serving Dover and surrounding Calgary neighborhoods.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform" style={{ background: 'linear-gradient(to bottom right, #FAA007, #E89006)' }}>
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Guidance</h3>
              <p className="text-gray-300">Knowledgeable staff to help you find exactly what you're looking for.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform" style={{ background: 'linear-gradient(to bottom right, #03A558, #028a4a)' }}>
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Trusted Source</h3>
              <p className="text-gray-300">AGLC licensed with full compliance and responsible practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Loyalty Program CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(to bottom right, #FAA007, #E89006)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Level Up Rewards</h2>
          <p className="text-xl text-yellow-100 mb-2">Rise Higher...Every Time</p>
          <p className="text-lg text-yellow-100 mb-8">Earn 6% back on all purchases when spending $20+</p>
          <Link
            to="/loyalty"
            className="bg-white hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-colors inline-flex items-center space-x-2"
            style={{ color: '#FAA007' }}
          >
            <Star className="h-5 w-5" />
            <span>Join Level Up Rewards</span>
          </Link>
        </div>
      </section>

      {/* Location CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Visit Our Dover Location</h2>
              <p className="text-xl text-gray-300 mb-8">
                Conveniently located in Calgary's Dover neighborhood, we're here to serve you with quality cannabis products and expert guidance.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="h-5 w-5" style={{ color: '#FAA007' }} />
                  <span>4022 26 St SE, Calgary, AB T2B 2Y4</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Clock className="h-5 w-5" style={{ color: '#FAA007' }} />
                  <span>Monday to Sunday 10am-10pm</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="h-5 w-5" style={{ color: '#FAA007' }} />
                  <span>(403) 455-0420</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/location"
                  className="text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center justify-center hover:opacity-90"
                  style={{ backgroundColor: '#FAA007' }}
                >
                  <MapPin className="h-5 w-5 mr-2" />
                  Get Directions
                </Link>
                <a
                  href="tel:(403) 455-0420"
                  className="border-2 font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center justify-center hover:text-gray-900"
                  style={{ 
                    borderColor: '#03A558', 
                    color: '#03A558' 
                  }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#03A558'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Store
                </a>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Store Hours</h3>
              <div className="space-y-3">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                  <div key={day} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0">
                    <span className="text-gray-300 font-medium">{day}</span>
                    <span className="font-semibold" style={{ color: '#03A558' }}>10am-10pm</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
