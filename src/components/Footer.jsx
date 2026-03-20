import { Link } from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="font-heading font-bold text-xl tracking-wider">
              LOS <span className="text-accent">CUSTOMS</span>
            </p>
            <p className="text-muted text-sm mt-1">Egyedi autó tuning &amp; fóliázás</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-light/60">
            <Link to="/" className="hover:text-accent transition-colors">Főoldal</Link>
            <Link to="/szolgaltatasok" className="hover:text-accent transition-colors">Szolgáltatások</Link>
            <Link to="/csomagok" className="hover:text-accent transition-colors">Csomagok</Link>
            <Link to="/galeria" className="hover:text-accent transition-colors">Galéria</Link>
            <Link to="/kapcsolat" className="hover:text-accent transition-colors">Kapcsolat</Link>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-muted">
          © {year} Los Customs. Minden jog fenntartva.
        </div>
      </div>
    </footer>
  )
}

export default Footer
