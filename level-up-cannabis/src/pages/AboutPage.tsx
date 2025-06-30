import { Heart, Users, Shield, Leaf, Award, MapPin } from 'lucide-react'

export function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img 
            src="/logo.png" 
            alt="Level Up Cannabis" 
            className="h-24 w-24 mx-auto mb-8 rounded-full"
          />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Quality, Community and Trust
          </h1>
          <p className="text-2xl font-semibold mb-8" style={{ color: '#FAA007' }}>#LevelingUpCalgary</p>
          <div className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed">
            <p className="mb-6">
              We're not selling hype, trends or empty promises. Level Up Cannabis is a locally-owned Dover dispensary that truly listens - delivering the cannabis products you want, exactly how you prefer them. We provide premium quality, extensive variety, and knowledgeable guidance at fair prices.
            </p>
            <p className="mb-6">
              Our roots run deep in the Calgary community, and we're proud to serve Dover and surrounding neighborhoods through our cannabis retail location. We represent the positive evolution of an industry that deserved legalization years ago. Our commitment stems from genuine belief in cannabis as a beneficial force for wellness and community.
            </p>
            <p>
              As your neighborhood cannabis store, our mission is simple: enhance your quality of life through informed, responsible cannabis use.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-300">What drives us every day at Level Up Cannabis</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#FAA007' }}>
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#FAA007' }}>Quality</h3>
              <p className="text-gray-300 leading-relaxed">
                We carefully curate our selection to offer only the finest cannabis products. Every item in our store meets our high standards for quality, potency, and safety.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#03A558' }}>
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#03A558' }}>Community</h3>
              <p className="text-gray-300 leading-relaxed">
                As a locally-owned business, we're deeply invested in the Dover community and greater Calgary area. We're here to serve our neighbors with respect and care.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#FAA007' }}>
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#FAA007' }}>Trust</h3>
              <p className="text-gray-300 leading-relaxed">
                Trust is earned through transparency, consistency, and expertise. We provide honest guidance and maintain the highest standards of integrity in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Level Up Cannabis was born from a vision to create a cannabis retail experience that puts customers first. We saw an industry filled with marketing gimmicks and decided to take a different path - one focused on authentic quality and genuine service.
                </p>
                <p>
                  Located in the heart of Dover, we've become an integral part of the Calgary cannabis community. Our team consists of knowledgeable cannabis enthusiasts who understand that every customer has unique needs and preferences.
                </p>
                <p>
                  We believe cannabis legalization was long overdue, and we're proud to be part of the positive change in how people access and enjoy cannabis products. Our commitment goes beyond just selling products - we're advocates for responsible use and community wellness.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Why We're Different</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Leaf className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#03A558' }} />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Locally Owned & Operated</h4>
                    <p className="text-gray-300 text-sm">We live in this community and are committed to its success.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#FAA007' }} />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Customer-Centric Approach</h4>
                    <p className="text-gray-300 text-sm">Your satisfaction and wellness are our top priorities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#03A558' }} />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Education & Guidance</h4>
                    <p className="text-gray-300 text-sm">We help you make informed decisions about cannabis use.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#FAA007' }} />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Quality Assurance</h4>
                    <p className="text-gray-300 text-sm">Every product meets our rigorous quality standards.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Serving Calgary's Communities</h2>
            <p className="text-xl text-gray-300">Proudly located in Dover, serving all of Calgary</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {[
              'Dover', 'Riverbend', 'Applewood Park', 'Willow Park', 'Lynnwood', 'Millican', 
              'Ogden', 'Burnaby', 'Forest Heights', 'Southview', 'Bonavista Downs', 'Douglasdale'
            ].map((neighborhood) => (
              <div key={neighborhood} className="bg-gray-900 p-4 rounded-lg border border-gray-700 transition-colors hover:border-opacity-70" style={{ borderColor: '#FAA007' }} onMouseEnter={(e) => (e.target as HTMLElement).style.borderColor = '#FAA007'} onMouseLeave={(e) => (e.target as HTMLElement).style.borderColor = ''}>
                <MapPin className="h-5 w-5 mx-auto mb-2" style={{ color: '#FAA007' }} />
                <div className="text-white font-medium">{neighborhood}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-300 text-lg">
              Don't see your neighborhood? We welcome customers from all across Calgary and surrounding areas!
            </p>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20" style={{ background: 'linear-gradient(to bottom right, #FAA007, #E89006)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Our Commitment to You</h2>
          <div className="max-w-4xl mx-auto text-lg text-yellow-100 leading-relaxed mb-8">
            <p>
              At Level Up Cannabis, we're committed to providing an exceptional cannabis retail experience that prioritizes your needs, respects your choices, and supports your wellness journey. We promise to maintain the highest standards of quality, service, and integrity in everything we do.
            </p>
          </div>
          <div className="text-2xl font-semibold text-white">
            #LevelingUpCalgary, One Customer at a Time
          </div>
        </div>
      </section>
    </div>
  )
}
