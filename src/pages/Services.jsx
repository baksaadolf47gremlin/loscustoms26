import { Link } from 'react-router-dom'
import { Check, Phone } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const externalPackages = [
  {
    name: 'Basic Külső',
    price: '8.000',
    tag: 'Alap',
    color: 'border-white/10',
    items: [
      'Műanyag trimelemes ápolás',
      'Kültéri felületek törlése',
      'Gumik kenése',
    ]
  },
  {
    name: 'Premium Külső',
    price: '25.000',
    tag: 'Népszerű',
    color: 'border-accent/40',
    highlight: true,
    items: [
      'Műanyag ápolás',
      'Rovareltávolítás',
      'Motortér tisztítás',
      'Fényszóró polírozás',
      'Külső mosás és szárítás',
    ]
  },
  {
    name: 'Luxury Külső',
    price: '100.000',
    tag: 'Prémium',
    color: 'border-accent-dark/30',
    items: [
      'Minden Premium csomag',
      'Üveg kerámia bevonat',
      'Fényes polírozás',
      'Teljes karosszéria kezelés',
      'Prémium viasz réteg',
    ]
  },
]

const internalPackages = [
  {
    name: 'Basic Belső',
    price: '8.000',
    tag: 'Alap',
    color: 'border-white/10',
    items: [
      'Porszívózás',
      'Ajtókeret tisztítás',
      'Ablak tisztítás',
      'Por eltávolítás',
      '„Ibiza" autó parfüm',
    ]
  },
  {
    name: 'Premium Belső',
    price: '35.000',
    tag: 'Népszerű',
    color: 'border-accent/40',
    highlight: true,
    items: [
      'Minden Basic csomag',
      'Műanyag elemek kondicionálása',
      'Kárpit tisztítás',
      'Bőr ülőfelület ápolás',
      'Szőnyeg szampon',
    ]
  },
  {
    name: 'Luxury Belső',
    price: '40.000',
    tag: 'Prémium',
    color: 'border-accent-dark/30',
    items: [
      'Minden Premium csomag',
      'Mélyüléstisztítás',
      'Mennyezet tisztítás',
      'Teljes beltér fertőtlenítés',
      'Prémium illatosítás',
    ]
  },
]

const PackageCard = ({ pkg, delay = 0 }) => (
  <ScrollReveal delay={delay}>
    <div className={`relative flex flex-col h-full rounded-2xl border ${pkg.color} bg-card shadow-card p-7
      transition-all duration-300 hover:shadow-gold ${pkg.highlight ? 'ring-1 ring-accent/30' : ''}`}>
      {pkg.highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-black text-xs font-heading font-bold px-4 py-1 rounded-full tracking-wider">
          {pkg.tag}
        </span>
      )}
      {!pkg.highlight && (
        <span className="text-[10px] font-heading font-bold tracking-[0.2em] text-muted uppercase mb-3 block">{pkg.tag}</span>
      )}
      <h3 className="font-heading font-extrabold text-xl text-light mb-2">{pkg.name}</h3>
      <div className="flex items-end gap-1 mb-6">
        <span className="font-heading font-black text-3xl text-accent">{pkg.price}</span>
        <span className="text-muted text-sm mb-1">Ft</span>
      </div>
      <ul className="flex flex-col gap-2.5 flex-1">
        {pkg.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-light/70">
            <Check size={14} className="text-accent mt-0.5 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
      <Link
        to="/kapcsolat"
        className={`mt-8 w-full text-center py-3 rounded-full font-heading font-bold text-sm tracking-wider transition-all duration-300
          ${pkg.highlight
            ? 'bg-accent text-black hover:bg-accent-light hover:shadow-gold'
            : 'border border-white/15 text-light/70 hover:border-accent hover:text-accent'}`}
      >
        Időpont foglalás
      </Link>
    </div>
  </ScrollReveal>
)

const Services = () => (
  <main className="bg-primary min-h-screen pt-20">
    {/* Page Header */}
    <div className="honeycomb-bg py-20 px-4 overflow-hidden">
      <div className="!absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[300px] bg-accent/5 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto text-center">
        <ScrollReveal>
          <p className="section-label">Kínálatom</p>
          <h1 className="section-title mb-4">
            Autódetailing <span>csomagok</span>
          </h1>
          <p className="text-muted max-w-xl mx-auto text-sm leading-relaxed">
            Válassz a külső és belső detailing csomagjaim közül. Minden ár tartalmazza a munkadíjat és az anyagköltséget.
          </p>
        </ScrollReveal>
      </div>
    </div>

    {/* External */}
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <ScrollReveal>
        <span className="gold-line" />
        <h2 className="section-title mb-12">Külső <span>csomagok</span></h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {externalPackages.map((pkg, i) => (
          <PackageCard key={i} pkg={pkg} delay={i * 0.1} />
        ))}
      </div>
    </section>

    {/* Divider */}
    <div className="border-t border-white/5 mx-4" />

    {/* Internal */}
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <ScrollReveal>
        <span className="gold-line" />
        <h2 className="section-title mb-12">Belső <span>csomagok</span></h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {internalPackages.map((pkg, i) => (
          <PackageCard key={i} pkg={pkg} delay={i * 0.1} />
        ))}
      </div>
    </section>

    {/* Bottom CTA */}
    <div className="py-16 px-4 text-center border-t border-white/5 bg-secondary">
      <ScrollReveal>
        <p className="text-muted text-sm mb-6 max-w-md mx-auto">Nem találtad meg, amit keresel? Egyedi igényekre is vállalok munkát – írj vagy hívj!</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/kapcsolat" className="btn-gold">Kapcsolatfelvétel</Link>
          <a href="tel:+36709912761" className="btn-outline flex items-center gap-2"><Phone size={14} />+36 70 991 2761</a>
        </div>
      </ScrollReveal>
    </div>
  </main>
)

export default Services
