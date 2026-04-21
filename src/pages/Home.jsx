import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDown, Star, MapPin, Phone, ArrowRight, Shield, Sparkles, Layers } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import BeforeAfter from '../components/BeforeAfter'
import ContactSection from '../components/ContactSection'

// ─── Hero ────────────────────────────────────────────────────────────────────
const Hero = () => {
  const videoRef = useRef(null)

  return (
    <section className="relative w-full bg-black pt-10 sm:pt-12 lg:pt-16 pb-8 px-2 sm:px-6 lg:px-12 xl:px-24 flex flex-col items-center justify-start min-h-[90vh]">
      {/* Végleges Webkit Safari/Chrome trükk, ami letiltja a border-radius alapú GPU szétesést videókról! */}
      <div 
        className="relative w-[96%] max-w-[1440px] aspect-[9/16] md:aspect-video mx-auto overflow-hidden rounded-xl sm:rounded-2xl shadow-[0_0_80px_rgba(0,0,0,0.8)] bg-black flex flex-col items-start justify-start transform-gpu"
        style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)', WebkitBackfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
      >
        
        {/* Asztali fekvő videó (md mérettől felfelé látható, 100% változatlan) */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          fetchpriority="high"
          poster="/images/hero-poster.webp"
          className="hidden md:block absolute inset-0 w-full h-full object-cover z-0"
        >
          {/* Multiple sources for responsive WebM and optimized MP4 streaming */}
          <source src="/videos/hero.webm" type="video/webm" />
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Telefonos álló videó (csak md méret alatt látható) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hellyeah-poster.webp"
          className="block md:hidden absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/hellyeah.mp4" type="video/mp4" />
        </video>
        
        {/* Film Grain Noise Override - Mix-blend mód eltávolítva a GPU megkímélése és a villódzás megszüntetése végett */}
        <div 
          className="noise-overlay absolute inset-0 opacity-15 z-10 pointer-events-none transform-gpu"
          style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden', willChange: 'transform' }}
        />

        {/* Content - Backdrop-blur kiirtva, ami a videó felett befrageltette a böngészőt! Helyette elegáns, natív áttetsző fekete doboz (bg-black/75). */}
        <div 
          className="absolute top-0 left-0 z-20 w-[90%] max-w-[340px] sm:max-w-[500px] lg:max-w-[650px] xl:max-w-[750px] bg-black/75 filter-none p-6 sm:p-10 lg:px-14 lg:py-10 flex flex-col items-start text-left rounded-br-2xl shadow-[20px_20px_60px_rgba(0,0,0,0.8)] transform-gpu"
          style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden', willChange: 'transform' }}
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-label mb-2 text-[8px] sm:text-[10px] tracking-[0.2em]"
          >
            Budapest, 1205 · Professzionális Autódetailing
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl xl:text-[2.75rem] text-light leading-[1.1]"
          >
            Ahol az autód <span className="text-accent">visszanyeri</span> identitását.
          </motion.h1>
        </div>
      </div>

    </section>
  )
}

// ─── Stats Bar ────────────────────────────────────────────────────────────────
const stats = [
  { value: '250+', label: 'Befejezett munka' },
  { value: '5★', label: 'Értékelés' },
  { value: '3+', label: 'Év tapasztalat' },
  { value: 'Bp. 1205', label: 'Határ út 70.' },
]

const StatsBar = () => (
  <section className="relative z-10 w-full pt-8 pb-4">
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <ScrollReveal key={i} delay={i * 0.1} direction="up">
            <div className="flex flex-col items-center text-center px-4">
              <span className="font-heading font-black text-2xl text-accent">{s.value}</span>
              <span className="text-light/50 text-xs mt-1 tracking-wide">{s.label}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
)

// ─── Services Preview ─────────────────────────────────────────────────────────
const serviceCards = [
  {
    icon: <img src="/images/kulsoreszletezes_ikon.webp" alt="Ikon" className="w-16 h-16 object-contain" decoding="async" />,
    title: ' Külső ápolás ',
    desc: 'Polír, kerámia bevonat, fényszóró polírozás, rovareltávolítás. Az autód külseje újat varázslunk.',
    link: '/szolgaltatasok',
    img: '/images/kulosreszletezes.webp',
  },
  {
    icon: <img src="/images/belsotakaritas_ikon.webp" alt="Ikon" className="w-16 h-16 object-contain" decoding="async" />,
    title: 'Belső takarítás',
    desc: 'Mélytisztítás, kárpit kezelés, bőrápolás, üveg tisztítás. Csillogó beltér minden alkalommal.',
    link: '/szolgaltatasok',
    img: '/images/belsotakaritas.webp',
  },
  {
    icon: <img src="/images/specialiskezelesek_ikon.webp" alt="Ikon" className="w-16 h-16 object-contain" decoding="async" />,
    title: 'Speciális kezelések',
    desc: 'Kerámia bevonatok, prémium polírozás, kárpit kezelés külön csomagokban – maximális védelem.',
    link: '/csomagok',
    img: '/images/specialiskezelesek.webp',
  },
]

const ServicesPreview = () => (
  <section className="py-12 lg:py-16 px-4 bg-primary">
    <div className="max-w-7xl mx-auto">
      <ScrollReveal>
        <p className="section-label text-center">Amit kínálok</p>
        <h2 className="section-title text-center mb-16">
          Prémium <span>Autó detailing</span>
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {serviceCards.map((card, i) => (
          <ScrollReveal key={i} delay={i * 0.12}>
            <div className="glass-card overflow-hidden group h-full flex flex-col">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-4">
                  {card.icon}
                </div>
                <h3 className="font-heading font-bold text-xl text-light mb-3">{card.title}</h3>
                <p className="text-muted text-sm leading-relaxed flex-1">{card.desc}</p>
                <Link
                  to={card.link}
                  className="mt-5 flex items-center gap-2 text-accent text-sm font-semibold group/link"
                >
                  <span className="group-hover/link:underline underline-offset-2">Részletek</span>
                  <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
)

// ─── Gallery Preview ──────────────────────────────────────────────────────────
const galleryImages = [
  '/images/gallery/image_125_1x.webp?v=2',
  '/images/gallery/group_63_1x.webp?v=2',
  '/images/gallery/group_65_1x.webp?v=2',
  '/images/gallery/group_74_1x.webp?v=2',
  '/images/gallery/image-11.png?v=2',
  '/images/gallery/group_66_1x.webp?v=2',
]

const GalleryPreview = () => (
  <section className="py-12 lg:py-16 px-4">
    <div className="max-w-7xl mx-auto">
      <ScrollReveal>
        <p className="section-label text-center">Referenciáim</p>
        <h2 className="section-title text-center mb-4">
          Elkészült <span>munkáim</span>
        </h2>
        <p className="text-muted text-center max-w-xl mx-auto mb-14 text-sm leading-relaxed">
          Minden egyes autó egy új kihívás. Nézd meg korábbi munkáimat és győződj meg a minőségről.
        </p>
      </ScrollReveal>

      {/* Uniform grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {galleryImages.map((src, i) => (
          <ScrollReveal key={i} delay={i * 0.08} className="w-full h-full">
            <div className="gallery-img relative h-52 md:h-64 w-full group">
              <img
                src={src}
                alt={`Los Customs munka ${i + 1}`}
                className="w-full h-full object-cover rounded-xl"
                loading="lazy"
              />
              {/* Elegáns vízjel - Jobb margókkal az egyenletesebb megjelenésért */}
              <div className="absolute bottom-4 left-4 z-10 pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity duration-500">
                <img 
                  src="/images/work/logo.webp" 
                  alt="Los Customs Vízjel" 
                  className="w-20 sm:w-24 h-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] filter grayscale contrast-125" 
                />
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.3}>
        <div className="text-center mt-12">
          <Link to="/galeria" className="btn-outline">
            Összes referencia megtekintése
          </Link>
        </div>
      </ScrollReveal>
    </div>
  </section>
)

// ─── CTA Banner ───────────────────────────────────────────────────────────────
const CTABanner = () => (
  <section className="relative py-12 lg:py-16 px-4 overflow-hidden">
    {/* Golden gradient glow */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
    </div>

    <div className="relative z-10 max-w-3xl mx-auto text-center">
      <ScrollReveal>
        <p className="section-label">Foglalj időpontot</p>
        <h2 className="section-title mb-6">
          Kész vagy a <span>prémium</span> élményre?
        </h2>
        <p className="text-muted text-base leading-relaxed mb-10 max-w-lg mx-auto">
          Vedd fel velünk a kapcsolatot és egyezz meg egy időpontban.
          Minden munka garanciával és maximális odafigyeléssel zárul.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/kapcsolat" className="btn-gold">
            Kapcsolatfelvétel
          </Link>
          <a 
            href="tel:+36307582472"
            className="btn-outline flex items-center gap-2"
          >
            <Phone size={15} />
            +36 30 758 2472
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
)

// ─── Home ─────────────────────────────────────────────────────────────────────
const Home = () => (
  <main>
    <Hero />
    <div className="honeycomb-bg w-full overflow-hidden">
      <StatsBar />
      <BeforeAfter />
    </div>
    <ServicesPreview />
    <div className="honeycomb-bg w-full overflow-hidden">
      <GalleryPreview />
      <CTABanner />
    </div>
    <ContactSection />
  </main>
)

export default Home
