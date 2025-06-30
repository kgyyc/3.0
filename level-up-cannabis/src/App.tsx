import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { AgeVerification } from './components/AgeVerification'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { MenuPage } from './pages/MenuPage'
import { LocationPage } from './pages/LocationPage'
import { LoyaltyPage } from './pages/LoyaltyPage'
import { useState, useEffect } from 'react'

function App() {
  const [isAgeVerified, setIsAgeVerified] = useState(false)

  useEffect(() => {
    const verified = localStorage.getItem('ageVerified')
    if (verified === 'true') {
      setIsAgeVerified(true)
    }
  }, [])

  const handleAgeVerification = (verified: boolean) => {
    setIsAgeVerified(verified)
    localStorage.setItem('ageVerified', verified.toString())
  }

  if (!isAgeVerified) {
    return <AgeVerification onVerify={handleAgeVerification} />
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/loyalty" element={<LoyaltyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
