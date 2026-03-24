import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

// Lazy betöltés az aloldalakhoz a kezdeti betöltési idő csökkentése érdekében (Code Splitting)
const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const Packages = lazy(() => import('./pages/Packages'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Contact = lazy(() => import('./pages/Contact'))
const Aszf = lazy(() => import('./pages/Aszf'))
const About = lazy(() => import('./pages/About'))

// Betöltési indikátor, amíg az aloldal JavaScriptje letöltődik
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#0D0D0D]">
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#E8B84B" className="animate-spin" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  </div>
)

function App() {
  return (
    <Router>
      <CustomCursor />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/szolgaltatasok" element={<Services />} />
          <Route path="/csomagok" element={<Packages />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/kapcsolat" element={<Contact />} />
          <Route path="/aszf" element={<Aszf />} />
          <Route path="/rolunk" element={<About />} />
        </Routes>
      </Suspense>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </Router>
  )
}

export default App
