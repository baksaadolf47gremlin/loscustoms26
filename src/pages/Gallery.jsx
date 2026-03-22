import { useState } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

// All gallery images – webp files from public/images/gallery
const allImages = [
  { src: '/images/gallery/group_59_1x.webp', category: 'kulso' },
  { src: '/images/gallery/group_60_1x.webp', category: 'belso' },
  { src: '/images/gallery/group_61_1x.webp', category: 'kulso' },
  { src: '/images/gallery/group_62_1x.webp', category: 'belso' },
  { src: '/images/gallery/group_63_1x.webp', category: 'kulso' },
  { src: '/images/gallery/group_64_1x.webp', category: 'kezeles' },
  { src: '/images/gallery/group_65_1x.webp', category: 'kulso' },
  { src: '/images/gallery/group_66_1x.webp', category: 'belso' },
  { src: '/images/gallery/group_67_1x.webp', category: 'kulso' },
  { src: '/images/gallery/group_68_1x.webp', category: 'kezeles' },
  { src: '/images/gallery/group_69_1x.webp', category: 'kulso' },
  { src: '/images/gallery/group_70_1x.webp', category: 'belso' },
  { src: '/images/gallery/group_71_1x.webp', category: 'kulso' },
  { src: '/images/gallery/group_72_1x.webp', category: 'belso' },
  { src: '/images/gallery/group_73_1x.webp', category: 'kezeles' },
  { src: '/images/gallery/group_74_1x.webp', category: 'kulso' },
  { src: '/images/gallery/group_75_1x.webp', category: 'kulso' },
  { src: '/images/gallery/group_76_1x.webp', category: 'belso' },
  { src: '/images/gallery/group_77_1x.webp', category: 'kezeles' },
  { src: '/images/gallery/group_91_1x.webp', category: 'kulso' },
  { src: '/images/gallery/group_92_1x.webp', category: 'belso' },
  { src: '/images/gallery/group_93_1x.webp', category: 'kezeles' },
  { src: '/images/gallery/group_94_1x.webp', category: 'kulso' },
  { src: '/images/gallery/group_95_1x.webp', category: 'kulso' },
  { src: '/images/gallery/group_96_1x.webp', category: 'kezeles' },
  { src: '/images/gallery/group_97_1x.webp', category: 'belso' },
  { src: '/images/gallery/group_98_1x.webp', category: 'kulso' },
  { src: '/images/gallery/group_99_1x.webp', category: 'belso' },
  { src: '/images/gallery/group_100_1x.webp', category: 'belso' },
  { src: '/images/gallery/group_101_1x.webp', category: 'kulso' },
  { src: '/images/gallery/group_102_1x.webp', category: 'kulso' },
  { src: '/images/gallery/group_103_1x.webp', category: 'kezeles' },
  { src: '/images/gallery/image_125_1x.webp', category: 'kezeles' },
  { src: '/images/gallery/image_126_1x.webp', category: 'kulso' },
]

const filters = [
  { key: 'all', label: 'Mind' },
  { key: 'kulso', label: 'Külső' },
  { key: 'belso', label: 'Belső' },
  { key: 'kezeles', label: 'Kezelések' },
]

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeFilter === 'all'
    ? allImages
    : allImages.filter(img => img.category === activeFilter)

  return (
    <main className="bg-primary min-h-screen pt-20">
      {/* Header */}
      <div className="honeycomb-bg py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[300px] bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <p className="section-label">Elkészült munkák</p>
            <h1 className="section-title mb-4">
              Munkáim <span>galériája</span>
            </h1>
            <p className="text-muted max-w-xl mx-auto text-sm leading-relaxed">
              Minden kép egy igazi munka eredménye. Külső, belső, kezelések – nézd meg saját szemeddel, mire számíthatsz.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-20 z-30 bg-primary/90 backdrop-blur-lg border-b border-white/5 py-4 px-4">
        <div className="max-w-7xl mx-auto flex gap-3 justify-center flex-wrap">
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-200 ${
                activeFilter === f.key
                  ? 'bg-accent text-black font-bold'
                  : 'bg-card border border-white/10 text-muted hover:text-light hover:border-white/20'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          <AnimatePresence>
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.015 }}
                className="gallery-img break-inside-avoid mb-3 cursor-pointer group relative"
                onClick={() => setLightbox(img.src)}
              >
                <img
                  src={img.src}
                  alt={`Los Customs referencia ${i + 1}`}
                  className="w-full h-auto rounded-xl object-cover block"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 rounded-xl flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs font-medium tracking-wider uppercase">
                    Nagyítás
                  </span>
                </div>
                
                {/* Elegáns vízjel minimalista div-ként */}
                <div 
                  className="absolute -bottom-1 left-4 z-10 pointer-events-none opacity-35 group-hover:opacity-70 transition-opacity duration-500 w-20 sm:w-24 h-12 bg-[url('/images/work/logo.png')] bg-contain bg-no-repeat bg-bottom drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] grayscale contrast-125"
                  aria-hidden="true"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/60 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
              onClick={() => setLightbox(null)}
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox}
              alt="Nagyított kép"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

export default Gallery
