import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import { Suspense, lazy } from 'react'
import Home from './pages/Home'
const Services = lazy(() => import('./pages/Services'))
const Packages = lazy(() => import('./pages/Packages'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Contact = lazy(() => import('./pages/Contact'))

function App() {
  return (
    <Router>
      <CustomCursor />
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-black" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/szolgaltatasok" element={<Services />} />
          <Route path="/csomagok" element={<Packages />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/kapcsolat" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </Router>
  )
}

export default App
