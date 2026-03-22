import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import Home from './pages/Home'
import Services from './pages/Services'
import Packages from './pages/Packages'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/szolgaltatasok" element={<Services />} />
        <Route path="/csomagok" element={<Packages />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/kapcsolat" element={<Contact />} />
      </Routes>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </Router>
  )
}

export default App
