import { Leaf, Droplets, Cookie, Pill, Zap, Info } from 'lucide-react'

export function MenuPage() {
  const categories = [
    {
      id: 'flower',
      name: 'Dried Cannabis Flower',
      icon: Leaf,
      description: 'Premium dried cannabis flower from trusted growers across Canada.',
      subcategories: ['Sativa', 'Indica', 'Hybrid', 'CBD Dominant'],
      color: 'from-green-600 to-green-700'
    },
    {
      id: 'edibles',
      name: 'Edibles',
      icon: Cookie,
      description: 'Delicious cannabis-infused edibles including gummies, chocolates, and beverages.',
      subcategories: ['Gummies', 'Chocolates', 'Beverages', 'Baked Goods'],
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      id: 'concentrates',
      name: 'Concentrates & Extracts',
      icon: Droplets,
      description: 'High-potency cannabis concentrates and extracts for experienced users.',
      subcategories: ['Live Resin', 'Shatter', 'Rosin', 'Hash'],
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      id: 'oils',
      name: 'Cannabis Oils & Tinctures',
      icon: Pill,
      description: 'Precise dosing with cannabis oils and tinctures for controlled consumption.',
      subcategories: ['THC Oils', 'CBD Oils', 'Balanced Oils', 'Tinctures'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'vapes',
      name: 'Vape Cartridges & Devices',
      icon: Zap,
      description: 'Convenient vape cartridges and devices for on-the-go consumption.',
      subcategories: ['510 Cartridges', 'All-in-One', 'Disposables', 'Devices'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'accessories',
      name: 'Accessories',
      icon: Info,
      description: 'Quality cannabis accessories to enhance your experience.',
      subcategories: ['Papers & Wraps', 'Grinders', 'Storage', 'Glassware'],
      color: 'from-gray-500 to-gray-600'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Menu</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore our carefully curated selection of premium cannabis products. 
            All products are AGLC licensed and Health Canada approved.
          </p>
          <div className="bg-opacity-20 rounded-lg p-6 max-w-4xl mx-auto" style={{ backgroundColor: 'rgba(250, 160, 7, 0.2)', borderColor: '#FAA007', borderWidth: '1px' }}>
            <div className="flex items-center justify-center space-x-3 mb-3">
              <Info className="h-6 w-6" style={{ color: '#FAA007' }} />
              <span className="text-lg font-semibold" style={{ color: '#FAA007' }}>Coming Soon: Online Ordering</span>
            </div>
            <p className="text-gray-300">
              We're working on bringing you the convenience of online ordering. 
              For now, visit us in store or call to check product availability.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <div
                  key={category.id}
                  className="bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden transition-all duration-300 group cursor-pointer hover:border-opacity-70"
                  onMouseEnter={(e) => (e.target as HTMLElement).style.borderColor = '#FAA007'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.borderColor = ''}
                >
                  <div className={`bg-gradient-to-br ${category.color} p-6`}>
                    <Icon className="h-12 w-12 text-white mb-4" />
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold uppercase tracking-wide" style={{ color: '#FAA007' }}>
                        Available Types:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {category.subcategories.map((sub) => (
                          <span
                            key={sub}
                            className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Product Information */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Quality You Can Trust</h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Every product in our store is carefully selected based on quality, potency, and safety. 
                  We work with licensed producers across Canada to bring you the finest cannabis products available.
                </p>
                <p>
                  Our knowledgeable staff can help you find the perfect product for your needs, whether you're 
                  a first-time user or an experienced cannabis enthusiast.
                </p>
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#03A558' }}></div>
                  <span className="text-gray-300">All products lab tested for quality and potency</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#03A558' }}></div>
                  <span className="text-gray-300">AGLC licensed and Health Canada approved</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#03A558' }}></div>
                  <span className="text-gray-300">Extensive variety to meet all preferences</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#03A558' }}></div>
                  <span className="text-gray-300">Fair pricing with no hidden fees</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Visit Us for Current Menu</h3>
              <div className="space-y-4 mb-6">
                <p className="text-gray-300">
                  Our inventory changes regularly as we receive new products and seasonal selections. 
                  For the most up-to-date menu and product availability:
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-semibold mb-2" style={{ color: '#FAA007' }}>📞 Call Ahead</h4>
                  <p className="text-gray-300 text-sm">(403) 455-0420 - Check availability before your visit</p>
                </div>
                
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-semibold mb-2" style={{ color: '#FAA007' }}>🏪 Visit In Store</h4>
                  <p className="text-gray-300 text-sm">4022 26 St SE, Calgary - Browse our full selection</p>
                </div>
                
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-semibold mb-2" style={{ color: '#FAA007' }}>⭐ Join Rewards</h4>
                  <p className="text-gray-300 text-sm">Level Up Rewards members get exclusive offers and early access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-red-900 bg-opacity-20 border-t border-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Important Information</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-red-700">
              <h3 className="font-semibold text-red-400 mb-3">🔞 Age Requirement</h3>
              <p className="text-gray-300 text-sm">Must be 18+ with valid government ID to purchase cannabis products.</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-red-700">
              <h3 className="font-semibold text-red-400 mb-3">🚗 Don't Drive Impaired</h3>
              <p className="text-gray-300 text-sm">Never drive under the influence of cannabis. Plan safe transportation.</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-red-700">
              <h3 className="font-semibold text-red-400 mb-3">🏠 Keep Safe</h3>
              <p className="text-gray-300 text-sm">Store cannabis products safely away from children and pets.</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-red-700">
              <h3 className="font-semibold text-red-400 mb-3">💊 Start Low, Go Slow</h3>
              <p className="text-gray-300 text-sm">Begin with small doses, especially with edibles. Wait for effects before consuming more.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
