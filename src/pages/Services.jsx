import { Link } from 'react-router-dom'
import { Check, Phone, Shield, Sparkles, Droplets } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const detailingPackages = [
  {
    id: 'detailing-1',
    tag: 'Fényesítő polírozás',
    title: 'Alap Szolgáltatásaim',
    img: '/images/alapszolgaltatasaimkartya.webp',
    icon: <img src="/icons/szivacs.png" alt="Szivacs Ikon" className="w-16 h-16 object-contain mb-5 opacity-80 drop-shadow-[0_0_10px_rgba(255,255,255,0.15)] relative z-10" />,
    priceText: 'Kezdő ár',
    priceValue: '59.000 - 69.000 Ft',
    items: [
      'Alapos külső mosás',
      'Bogár oldás',
      'Szálló rozsda eltávolítása',
      'Felni tisztítás',
      'Ablakok külső tisztítása',
      'Külső műanyagok ápolása',
      'Gumi ápolás',
      'Egy lépcsős fényesítő polírozás',
    ],
    color: 'border-white/10',
  },
  {
    id: 'detailing-2',
    tag: 'Több lépcsős fényezés korrekciós polírozás',
    title: 'Prémium Detailing Opciók',
    img: '/images/premiumdetailingopciokkartya.webp',
    icon: <img src="/icons/szivacspremium.png" alt="Prémium Szivacs Ikon" className="w-16 h-16 object-contain mb-5 opacity-80 drop-shadow-[0_0_10px_rgba(255,255,255,0.15)] relative z-10" />,
    priceText: 'Kezdő ár',
    priceValue: '99.000 Ft - 169.000 Ft',
    items: [
      'Alapos külső mosás',
      'Bogár oldás',
      'Szálló rozsda eltávolítása',
      'Felni tisztítás',
      'Ablakok külső tisztítása',
      'Külső műanyagok ápolása',
      'Gumi ápolás',
      'Több lépcsős fényezés korrekciós polírozás (90-100% karc eltávolítás)',
    ],
    color: 'border-accent/40',
    highlight: true,
  },
  {
    id: 'washing',
    tag: '(1-2 óra)',
    title: 'Külső mosás opciók',
    icon: <img src="/icons/vizcsepp.png" alt="Vízcsepp Ikon" className="w-16 h-16 object-contain mb-5 opacity-80 drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]" />,
    priceText: 'Kezdő ár',
    priceValue: '13.000 Ft-tól',
    items: [
      'Alapos külső mosás',
      'Bogár oldás',
      'Felni tisztítás',
      'Szálló rozsda eltávolítása és szárítás',
      'Kézi autómosás',
      'Szárítás',
      'Alapvédelem',
    ],
    color: 'border-white/10',
  },
  {
    id: 'protection',
    tag: '1-5 éves kerámia bevonat',
    title: 'Autóvédelem',
    icon: <img src="/icons/pajzs.png" alt="Pajzs Ikon" className="w-16 h-16 object-contain mb-5 opacity-80 drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]" />,
    prices: [
      { label: '1 éves', price: '49.000 Ft' },
      { label: '3 éves', price: '99.000 Ft' },
      { label: '5 éves', price: '149.000 Ft' },
    ],
    items: [],
    color: 'border-accent/40',
    highlight: true,
  },
]

const comboPackages = [
  {
    id: 'combo-1',
    tag: '1-2 óra',
    title: 'Belső tisztítás',
    priceText: 'Kezdő ár',
    priceValue: '18.000 Ft-tól',
    items: [
      'Alap belső takarítás',
      'Porszívózás',
      'Műanyagok vegyszeres tisztítása',
      'Ablakok belső tisztítása',
    ],
    color: 'border-white/10',
  },
  {
    id: 'combo-2',
    tag: '2-3 óra',
    title: 'Komplett mosás',
    priceText: 'Kezdő ár',
    priceValue: '35.000 Ft-tól',
    items: [
      'Alapos külső mosás',
      'Bogár oldás',
      'Felni tisztítás',
      'Alap belső takarítás',
      'Porszívózás',
      'Műanyagok vegyszeres tisztítása és ápolása',
      'Gumik ápolása és külső műanyagok',
      'Ablakok külső és belső tisztítása',
    ],
    color: 'border-accent/40',
    highlight: true,
  },
  {
    id: 'combo-3',
    tag: '3-4 óra',
    title: 'Prémium Komplett mosás',
    priceText: 'Kezdő ár',
    priceValue: '50.000 Ft-tól',
    items: [
      'Alapos külső mosás',
      'Bogár oldás',
      'Felni tisztítás',
      'Külső műanyagok és gumi ápolása',
      'Alap belső takarítás',
      'Porszívózás',
      'Műanyagok vegyszeres tisztítása és ápolása',
      'Ablakok külső és belső tisztítása',
      'Kárpittisztítás',
    ],
    color: 'border-accent-dark/30',
  },
]

const CustomPackageCard = ({ pkg, delay = 0 }) => (
  <ScrollReveal delay={delay}>
    <div className={`relative flex flex-col h-full rounded-2xl border ${pkg.color} bg-card shadow-card p-6 md:p-8
      transition-all duration-300 hover:shadow-gold ${pkg.highlight ? 'ring-1 ring-accent/30' : ''}`}>
      {pkg.highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-black text-[10px] font-heading font-bold px-4 py-1 rounded-full tracking-widest uppercase z-[20] shadow-[0_0_15px_rgba(0,0,0,0.8)]">
          Népszerű
        </span>
      )}

      {pkg.img && (
        <div className="relative -mx-6 md:-mx-8 -mt-6 md:-mt-8 mb-6 h-52 overflow-hidden rounded-t-[14px]">
          <img
            src={pkg.img}
            alt={pkg.title}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        </div>
      )}

      {/* Moved Icon explicitly above tags */}
      {pkg.icon && (
        <div className="flex-shrink-0">
          {pkg.icon}
        </div>
      )}
      
      {!pkg.highlight && (
        <span className="text-[10px] font-heading font-bold tracking-[0.2em] text-muted uppercase mb-2 block">{pkg.tag}</span>
      )}
      {pkg.highlight && (
         <span className="text-[10px] font-heading font-bold tracking-[0.2em] text-accent uppercase mb-2 block">{pkg.tag}</span>
      )}

      <h3 className="font-heading font-extrabold text-2xl text-light mb-4">{pkg.title}</h3>

      <div className="flex flex-col gap-1 mb-6 mt-auto border-b border-white/5 pb-6">
        {pkg.prices ? (
          <div className="flex flex-col gap-3 mt-4">
            {pkg.prices.map((p, i) => (
              <div key={i} className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/5">
                <span className="text-light/80 text-sm font-medium">{p.label}</span>
                <span className="font-heading font-bold text-accent">{p.price}</span>
              </div>
            ))}
          </div>
        ) : (
          <>
             <span className="text-muted text-xs uppercase tracking-widest font-heading font-bold">{pkg.priceText}</span>
             <span className="font-heading font-black text-3xl text-accent block">{pkg.priceValue}</span>
          </>
        )}
      </div>

      {pkg.items && pkg.items.length > 0 && (
        <ul className="flex flex-col gap-3 flex-1 mb-8">
          {pkg.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-light/70 leading-relaxed">
              <Check size={16} className="text-accent mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-4">
        <Link
          to="/kapcsolat"
          className={`block w-full text-center py-4 rounded-xl font-heading font-bold text-sm tracking-wider transition-all duration-300
            ${pkg.highlight
              ? 'bg-accent text-black hover:bg-accent-light hover:shadow-gold'
              : 'bg-white/5 text-light hover:bg-accent hover:text-black border border-white/10 hover:border-transparent'}`}
        >
          Időpont foglalás
        </Link>
      </div>
    </div>
  </ScrollReveal>
)

const Services = () => (
  <main className="bg-primary min-h-screen pt-20">
    <div className="honeycomb-bg py-24 px-4 overflow-hidden relative">
      <div className="!absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <p className="section-label tracking-widest text-accent mb-4">Autó detailing</p>
          <h1 className="text-4xl md:text-6xl font-black text-light font-poppins mb-6">
            Ragyogás és Védelem <span>mesterfokon</span>
          </h1>
          <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Válaszd ki az autód állapotának és igényeidnek megfelelő professzionális detailing csomagot. 
            Minden feltüntetett ár bruttó kezdőár, mely az anyagköltséget és a munkadíjat is magában foglalja.
          </p>
        </ScrollReveal>
      </div>
    </div>

    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {detailingPackages.map((pkg, i) => (
          <CustomPackageCard key={i} pkg={pkg} delay={i * 0.1} />
        ))}
      </div>
    </section>

    {/* Második szekció (belső és kombinált csomagok) */}
    <section className="py-20 px-4 max-w-7xl mx-auto border-t border-white/5">
      <ScrollReveal>
        <span className="gold-line mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-black text-center text-light mb-16 font-poppins">
          Komplex <span className="text-accent">tisztító csomagok</span>
        </h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {comboPackages.map((pkg, i) => (
          <CustomPackageCard key={i} pkg={pkg} delay={i * 0.1} />
        ))}
      </div>
    </section>

    <div className="py-20 px-4 text-center border-t border-white/5 bg-secondary/50 relative overflow-hidden">
      <div className="absolute inset-0 honeycomb-bg opacity-30"></div>
      <ScrollReveal>
        <div className="relative z-10">
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto font-medium">Bizonytalan vagy, hogy melyik kezelésre van szüksége az autódnak? Hozzád szabott árajánlatért keress bizalommal!</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/kapcsolat" className="btn-gold shadow-gold">Ingyenes konzultáció</Link>
            <a href="tel:+36307582472" className="btn-outline flex items-center gap-2 bg-black/40"><Phone size={16} className="text-accent" />+36 30 758 2472</a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </main>
)

export default Services
