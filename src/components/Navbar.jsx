import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Főoldal', path: '/' },
  { label: 'Szolgáltatások', path: '/szolgaltatasok' },
  { label: 'Csomagok', path: '/csomagok' },
  { label: 'Galéria', path: '/galeria' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="font-heading font-bold text-2xl tracking-wider">
            LOS <span className="text-accent">CUSTOMS</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-accent'
                    : 'text-light/70 hover:text-light'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/kapcsolat"
              className="bg-accent text-black font-heading font-bold text-sm px-6 py-2.5 rounded-full tracking-wide hover:bg-accent-dark transition-colors duration-200"
            >
              Kapcsolat
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-light p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menü"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium tracking-wide transition-colors ${
                  location.pathname === link.path
                    ? 'text-accent'
                    : 'text-light/70 hover:text-light'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/kapcsolat"
              className="bg-accent text-black font-heading font-bold text-sm px-6 py-3 rounded-full tracking-wide text-center mt-2"
            >
              Kapcsolat
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
