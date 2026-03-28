import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

const navLinks = [
  { label: 'Főoldal', path: '/' },
  { label: 'Autó detailing', path: '/szolgaltatasok' },
  { label: 'Egyéb szolgáltatásaim', path: '/csomagok' },
  { label: 'Galéria', path: '/galeria' },
  { label: 'Kapcsolat', path: '/kapcsolat' },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-white/5">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 lg:gap-12">

          {/* Brand */}
          <div className="md:col-span-6 lg:col-span-5">
            <Link to="/">
              <img 
                src="/images/work/logo.png" 
                alt="Los Customs Logo" 
                className="h-[90px] w-auto mb-6" 
                width="200"
                height="90"
              />
            </Link>
            <p className="text-light/80 text-sm leading-relaxed mb-6 max-w-xs">
              Prémium autódetailing Budapest szívében. Polír, kerámia bevonat, kárpit kezelés csak a legjobb minőségben.
            </p>
            {/* Social - High Res User uploaded raw image assets */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/loscustoms"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center opacity-80 hover:scale-110 hover:opacity-100 transition-all duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] cursor-pointer"
                aria-label="Facebook"
              >
                <img src="/icons/facebook-logo-hr.png.webp" alt="Facebook" className="w-full h-full object-contain" />
              </a>

              <a
                href="https://www.instagram.com/loscustoms"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center opacity-80 hover:scale-110 hover:opacity-100 transition-all duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] cursor-pointer"
                aria-label="Instagram"
              >
                <img src="/icons/insta-logo-hr.png.webp" alt="Instagram" className="w-full h-full object-contain" />
              </a>

              <a
                href="mailto:loscustoms01@gmail.com"
                className="w-12 h-12 flex items-center justify-center opacity-80 hover:scale-110 hover:opacity-100 transition-all duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] cursor-pointer"
                aria-label="E-mail"
              >
                <img src="/icons/email-logo-hr.png.webp" alt="Email" className="w-full h-full object-contain" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 lg:col-span-3">
            <h3 className="font-heading font-bold text-sm tracking-widest text-light/60 uppercase mb-5">Navigáció</h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-light/60 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 lg:col-span-4">
            <h3 className="font-heading font-bold text-sm tracking-widest text-light/60 uppercase mb-5">Kapcsolat</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="tel:+36709912761" className="flex items-center gap-3 group">
                  <Phone size={14} className="text-light/60 group-hover:text-accent transition-colors flex-shrink-0" />
                  <span className="text-light/60 text-sm group-hover:text-accent transition-colors">+36 70 991 2761</span>
                </a>
              </li>
              <li>
                <a href="mailto:loscustoms01@gmail.com" className="flex items-center gap-3 group">
                  <Mail size={14} className="text-light/60 group-hover:text-accent transition-colors flex-shrink-0" />
                  <span className="text-light/60 text-sm group-hover:text-accent transition-colors">loscustoms01@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Budapest+1194+Hoffer+Albert+utca+41"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <MapPin size={14} className="text-light/60 group-hover:text-accent transition-colors mt-0.5 flex-shrink-0" />
                  <div className="text-light/60 text-sm group-hover:text-accent transition-colors leading-relaxed">
                    Budapest, 1194
                    <br />
                    Hoffer Albert utca 41.
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-5 text-xs text-muted">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 lg:gap-12">
            <div className="md:col-span-6 lg:col-span-5 text-left">
              © {year} Los Customs. Minden jog fenntartva.
            </div>
            <div className="md:col-span-2 lg:col-span-3 lg:text-left">
              Prémium autódetailing · Budapest
            </div>
            <div className="md:col-span-4 lg:col-span-4 lg:text-left text-light/70 hover:text-light transition-colors">
              <Link to="/aszf" className="hover:text-accent transition-colors">ÁSZF</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
