import { Link } from 'react-router-dom'
import { Check, Phone } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const treatments = [
  {
    name: 'Polír csomag',
    price: '59.000',
    badge: null,
    img: '/images/gallery/polir-csomag.webp',
    items: [
      'Fényesítő polír',
      'Többlépéses polírozás',
      <span>Lámpa polírozása <span className="text-accent/80 text-xs ml-1">( 20.000 Ft )</span></span>,
    ]
  },
  {
    name: 'Kerámia bevonatok',
    price: '50.000',
    badge: 'Legjobb védelem',
    img: '/images/gallery/keramiabevonat.webp',
    items: [
      'Kerámia bevonatok',
      'Teljes karosszéria',
      'Üveg felületek',
    ]
  },
  {
    name: 'Kárpit kezelés',
    price: '8.000',
    badge: null,
    img: '/images/gallery/group_99_1x.webp',
    items: [
      'Padlószőnyeg',
      'Padlókárpit',
      'Üléskárpit',
    ]
  },
]

const Packages = () => (
  <main className="bg-primary min-h-screen pt-20">
    {/* Header */}
    <div className="honeycomb-bg py-20 px-4 overflow-hidden">
      <div className="!absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[300px] bg-accent/5 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto text-center">
        <p className="section-label">Speciális kezelések</p>
        <h1 className="section-title mb-4">
          Különleges <span>csomagok</span>
        </h1>
        <p className="text-muted max-w-xl mx-auto text-sm leading-relaxed">
          Polír, kerámia és kárpit kezelésbe specializálódott csomagjaim – ha csak egyetlen területen szeretnél prémium eredményt.
        </p>
      </div>
    </div>

    {/* Treatment Cards */}
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {treatments.map((t, i) => (
          <div key={i} className="glass-card overflow-hidden group flex flex-col h-full fade-in-up" style={{ animationDelay: `${i * 0.12}s` }}>
            {/* Image */}
            <div className="relative h-72 overflow-hidden bg-card/40">
              <img
                src={t.img}
                alt={t.name}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
              {t.badge && (
                <span className="absolute top-3 right-3 bg-accent text-black text-[10px] font-heading font-bold px-3 py-1 rounded-full tracking-wider uppercase">
                  {t.badge}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-7 flex flex-col flex-1 pt-8">
              <h3 className="font-heading font-extrabold text-2xl text-light mb-1">{t.name}</h3>
              <div className="flex items-end gap-1 mb-5">
                <span className="font-heading font-black text-3xl text-accent">{t.price}</span>
                <span className="text-accent/80 text-sm mb-1">Ft-tól</span>
              </div>
              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {t.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm text-light/70">
                    <Check size={14} className="text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/kapcsolat"
                className={i === 1
                  ? "btn-gold w-full text-center"
                  : "block mx-auto w-[90%] text-center rounded-xl font-heading font-bold tracking-wider transition-all duration-300 py-3.5 text-xs bg-white/5 text-light hover:bg-accent hover:text-black border border-white/10 hover:border-transparent"
                }
              >
                {i === 1 ? 'Időpont foglalás' : 'Érdekel'}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
    
    {/* Extra Horizontal Card */}
    {/* Extra Horizontal Card */}
    <section className="pb-24 px-4 max-w-6xl mx-auto -mt-12 md:-mt-16">
      <ScrollReveal>
        <div className="glass-card overflow-hidden group flex flex-col md:flex-row md:h-[310px] transition-all duration-300 hover:shadow-gold rounded-2xl border border-white/5 bg-card shadow-card">
          {/* Image */}
          <div className="md:w-[45%] lg:w-[40%] relative h-[250px] md:h-full overflow-hidden bg-white/5">
            <img
              src="/images/gallery/szekkarpit.jpg"
              alt="Otthoni tisztítás"
              className="w-full h-full object-cover object-left transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Badge placed on the image like the other cards to save space */}
            <span className="absolute top-4 right-4 bg-accent text-black text-[10px] font-heading font-bold px-3 py-1 rounded-full tracking-wider uppercase shadow-lg">
              Új szolgáltatás
            </span>
          </div>

          {/* Content */}
          <div className="md:w-[55%] lg:w-[60%] p-8 md:p-10 flex flex-col">
            <h3 className="font-heading font-extrabold text-2xl text-light mb-2">Otthoni tisztítás</h3>
            <p className="text-muted text-xs mb-6 font-medium tracking-widest uppercase opacity-80">
              Házhoz megyek! Professzionális tisztítás az otthonában is.
            </p>
            
            <ul className="flex flex-col gap-3 flex-1 mb-6">
              {[
                { name: 'Fotel', price: '15.000 Ft-tól' },
                { name: 'Kanapé', price: '35.000 Ft-tól' },
                { name: 'Szőnyegek', price: '25.000 Ft-tól' },
              ].map((item, j) => (
                <li key={j} className="flex items-center gap-2.5 text-sm text-light/70">
                  <Check size={14} className="text-accent flex-shrink-0" />
                  <span className="truncate">
                    {item.name} <span className="text-accent/80 text-xs ml-1">( {item.price} )</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <Link
                to="/kapcsolat"
                className="btn-gold inline-block w-full sm:w-auto"
              >
                Időpont foglalás / Érdeklődés
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>

    {/* Note */}
    <div className="pb-20 px-4">
      <ScrollReveal>
        <div className="max-w-2xl mx-auto glass-card p-8 text-center">
          <p className="text-muted text-sm leading-relaxed mb-6">
            Az árak tájékoztató jellegűek és az autó állapotától, méretétől függhen változhatnak.
            Egyedi ajánlatért vedd fel a kapcsolatot!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/kapcsolat" className="btn-gold">Egyedi ajánlat kérése</Link>
            <a href="tel:+36709912761" className="btn-outline flex items-center gap-2">
              <Phone size={14} /> +36 70 991 2761
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </main>
)

export default Packages
