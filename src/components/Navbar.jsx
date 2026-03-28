import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Főoldal', path: '/' },
  { label: 'Autó detailing', path: '/szolgaltatasok' },
  { label: 'Egyéb szolgáltatásaim', path: '/csomagok' },
  { label: 'Galéria', path: '/galeria' },
  { label: 'A Los Customsról', path: '/rolunk' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 })
  const [isReady, setIsReady] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    setIsOpen(false)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  useEffect(() => {
    const measure = () => {
      if (!navRef.current) return;
      const activeEl = navRef.current.querySelector('.active-nav-link');
      if (activeEl) {
        setIndicatorStyle({
          left: activeEl.offsetLeft,
          width: activeEl.offsetWidth,
          opacity: 1
        });
      } else {
        setIndicatorStyle(prev => ({ ...prev, opacity: 0 }));
      }
    };

    measure();
    const t = setTimeout(measure, 50);
    const readyTimer = setTimeout(() => setIsReady(true), 150);
    
    window.addEventListener('resize', measure);
    return () => {
      clearTimeout(t);
      clearTimeout(readyTimer);
      window.removeEventListener('resize', measure);
    };
  }, [location.pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-xl pt-1 lg:pt-3"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            <Link to="/" className="flex items-center group">
              <img 
                src="/images/work/logo.webp" 
                alt="Los Customs Logo" 
                className="h-[70px] w-auto transition-transform duration-300 group-hover:scale-105" 
                width="153"
                height="70"
              />
            </Link>

            {/* Desktop Nav */}
            <nav ref={navRef} className="hidden md:flex items-center gap-8 relative">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 group ${
                    isActive
                      ? 'active-nav-link text-accent'
                      : 'text-light/60 hover:text-light'
                  }`}
                >
                  {link.label}
                </Link>
              )})}
              <Link to="/kapcsolat" className="btn-gold text-sm">
                Kapcsolat
              </Link>

              {/* Seamless Indicator Line */}
              <div 
                className={`absolute -bottom-1 h-[2px] bg-accent pointer-events-none ${isReady ? 'transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]' : ''}`}
                style={{ 
                  left: `${indicatorStyle.left}px`, 
                  width: `${indicatorStyle.width}px`, 
                  opacity: indicatorStyle.opacity 
                }}
              />
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-light/80 hover:text-accent transition-colors p-2 rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menü megnyitása"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              key="menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-black border-l border-white/5 flex flex-col md:hidden"
            >
              <div className="flex items-center justify-end px-6 h-20 border-b border-white/5">
                <button onClick={() => setIsOpen(false)} className="text-light/70 hover:text-accent p-1">
                  <X size={20} />
                </button>
              </div>
              <div className="flex flex-col px-6 py-8 gap-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center h-12 text-base font-medium tracking-wide border-b border-white/5 transition-colors ${
                        location.pathname === link.path
                          ? 'text-accent'
                          : 'text-light/70 hover:text-light'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="px-6 pb-8">
                <Link to="/kapcsolat" className="btn-gold w-full text-center block">
                  Kapcsolat
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
