import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import { useState, useCallback } from 'react'
import { MapPin, Phone, Clock, Navigation, ExternalLink, Star } from 'lucide-react'

const mapContainerStyle = {
  width: '100%',
  height: '400px'
}

const center = {
  lat: 51.0199, // Level Up Cannabis coordinates
  lng: -114.0516
}

const storeLocation = {
  lat: 51.0199,
  lng: -114.0516
}

export function LocationPage() {
  const [showInfoWindow, setShowInfoWindow] = useState(false)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [mapError, setMapError] = useState(false)

  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=4022+26+St+SE,+Calgary,+AB+T2B+2Y4`
    window.open(url, '_blank')
  }

  const onMapLoad = useCallback(() => {
    setMapLoaded(true)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Visit Our Store</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Located in the heart of Dover, Calgary. Easy to find, easy to park, easy to shop.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openGoogleMaps}
              className="text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors inline-flex items-center justify-center space-x-2 hover:opacity-90"
              style={{ backgroundColor: '#FAA007' }}
            >
              <Navigation className="h-5 w-5" />
              <span>Get Directions</span>
            </button>
            <a
              href="tel:(403) 455-0420"
              className="border-2 font-semibold py-4 px-8 rounded-lg text-lg transition-colors inline-flex items-center justify-center space-x-2 hover:text-gray-900"
              style={{ 
                borderColor: '#03A558', 
                color: '#03A558' 
              }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#03A558'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
            >
              <Phone className="h-5 w-5" />
              <span>Call Store</span>
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Find Us on the Map</h2>
              <div className="rounded-lg overflow-hidden border border-gray-700">
                {mapError ? (
                  <div className="w-full h-96 bg-gray-800 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 mx-auto mb-4" style={{ color: '#FAA007' }} />
                      <h3 className="text-xl font-semibold text-white mb-2">Map Temporarily Unavailable</h3>
                      <p className="text-gray-300 mb-4">
                        We're experiencing issues loading the map. You can still get directions using the button below.
                      </p>
                      <button
                        onClick={openGoogleMaps}
                        className="text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center space-x-2 hover:opacity-90"
                        style={{ backgroundColor: '#FAA007' }}
                      >
                        <Navigation className="h-5 w-5" />
                        <span>Get Directions</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <LoadScript 
                    googleMapsApiKey="AIzaSyCO0kKndUNlmQi3B5mxy4dblg_8WYcuKuk"
                    onLoad={onMapLoad}
                    onError={() => setMapError(true)}
                  >
                    <GoogleMap
                      mapContainerStyle={mapContainerStyle}
                      center={center}
                      zoom={15}
                      onLoad={onMapLoad}
                      options={{
                        styles: [
                          {
                            featureType: "all",
                            elementType: "geometry.fill",
                            stylers: [{ color: "#1f2937" }]
                          },
                          {
                            featureType: "all",
                            elementType: "labels.text.fill",
                            stylers: [{ color: "#e5e7eb" }]
                          },
                          {
                            featureType: "road",
                            elementType: "geometry",
                            stylers: [{ color: "#374151" }]
                          },
                          {
                            featureType: "water",
                            elementType: "geometry",
                            stylers: [{ color: "#111827" }]
                          }
                        ]
                      }}
                    >
                      <Marker
                        position={storeLocation}
                        onClick={() => setShowInfoWindow(true)}
                      />
                      {showInfoWindow && (
                        <InfoWindow
                          position={storeLocation}
                          onCloseClick={() => setShowInfoWindow(false)}
                        >
                          <div className="p-2">
                            <h3 className="font-bold text-gray-900 mb-1">Level Up Cannabis</h3>
                            <p className="text-sm text-gray-700">4022 26 St SE, Calgary, AB</p>
                            <p className="text-sm text-gray-700">Monday to Sunday 10am-10pm</p>
                          </div>
                        </InfoWindow>
                      )}
                    </GoogleMap>
                  </LoadScript>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Information */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#FAA007' }} />
                  <div>
                    <div className="text-white font-medium">Address</div>
                    <div className="text-gray-300">4022 26 St SE</div>
                    <div className="text-gray-300">Calgary, AB T2B 2Y4</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#FAA007' }} />
                  <div>
                    <div className="text-white font-medium">Phone</div>
                    <a href="tel:(403) 455-0420" className="hover:opacity-80" style={{ color: '#FAA007' }}>
                      (403) 455-0420
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#FAA007' }} />
                  <div>
                    <div className="text-white font-medium">Hours</div>
                    <div className="text-gray-300">Monday to Sunday 10am-10pm</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Store Hours */}
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Store Hours</h3>
              <div className="space-y-3">
                {[
                  { day: 'Monday', hours: '10am-10pm' },
                  { day: 'Tuesday', hours: '10am-10pm' },
                  { day: 'Wednesday', hours: '10am-10pm' },
                  { day: 'Thursday', hours: '10am-10pm' },
                  { day: 'Friday', hours: '10am-10pm' },
                  { day: 'Saturday', hours: '10am-10pm' },
                  { day: 'Sunday', hours: '10am-10pm' }
                ].map(({ day, hours }) => (
                  <div key={day} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0">
                    <span className="text-gray-300 font-medium">{day}</span>
                    <span className="font-semibold" style={{ color: '#03A558' }}>{hours}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-opacity-20 border rounded-lg" style={{ backgroundColor: 'rgba(250, 160, 7, 0.2)', borderColor: '#FAA007' }}>
                <p className="text-sm text-center" style={{ color: '#FAA007' }}>
                  <strong>Holiday Hours:</strong> Please call ahead during holidays as hours may vary.
                </p>
              </div>
            </div>

            {/* Directions & Parking */}
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Getting Here</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium mb-2">🚗 Driving Directions</h4>
                  <p className="text-gray-300 text-sm">
                    Located on 26 St SE, easily accessible from major Calgary roads. 
                    Free parking available on-site.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-2">🚌 Public Transit</h4>
                  <p className="text-gray-300 text-sm">
                    Accessible by Calgary Transit. Check Calgary Transit app for current routes and schedules.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-2">🅿️ Parking</h4>
                  <p className="text-gray-300 text-sm">
                    Free parking available for customers. Wheelchair accessible entrance.
                  </p>
                </div>
              </div>
              
              <button
                onClick={openGoogleMaps}
                className="w-full mt-6 text-white font-semibold py-3 px-4 rounded-lg transition-colors hover:opacity-90"
                style={{ backgroundColor: '#FAA007' }}
              >
                Get Turn-by-Turn Directions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Google Business Profile CTA */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-8 text-center" style={{ background: 'linear-gradient(to bottom right, #FAA007, #E89006)' }}>
            <h2 className="text-3xl font-bold text-white mb-4">Find Us on Google</h2>
            <p className="text-yellow-100 text-lg mb-6">
              Check out our Google Business Profile for reviews, photos, and real-time updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://g.co/kgs/TwbGv6S"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center justify-center space-x-2"
                style={{ color: '#FAA007' }}
              >
                <ExternalLink className="h-5 w-5" />
                <span>View on Google</span>
              </a>
              <a
                href="https://g.co/kgs/TwbGv6S"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center justify-center space-x-2"
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = 'white';
                  (e.target as HTMLElement).style.color = '#FAA007';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = 'transparent';
                  (e.target as HTMLElement).style.color = 'white';
                }}
              >
                <Star className="h-5 w-5" />
                <span>Leave a Review</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Serving Calgary Communities</h2>
            <p className="text-xl text-gray-300">Conveniently located to serve Dover and surrounding areas</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Dover', 'Riverbend', 'Applewood Park', 'Willow Park', 'Lynnwood', 'Millican',
              'Ogden', 'Burnaby', 'Forest Heights', 'Southview', 'Bonavista Downs', 'Douglasdale'
            ].map((area) => (
              <div key={area} className="bg-gray-800 p-4 rounded-lg border border-gray-700 text-center transition-colors" onMouseEnter={(e) => (e.target as HTMLElement).style.borderColor = '#FAA007'} onMouseLeave={(e) => (e.target as HTMLElement).style.borderColor = ''}>
                <MapPin className="h-5 w-5 mx-auto mb-2" style={{ color: '#FAA007' }} />
                <div className="text-white font-medium text-sm">{area}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
