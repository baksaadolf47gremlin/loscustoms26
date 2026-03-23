import { useState, useRef, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'

const pairs = [
  {
    title: 'Lámpa polír',
    before: '/images/before-after/image_33_1x.webp',
    after: '/images/before-after/image_44_1x.webp',
  },
  {
    title: 'Alváz tisztítás',
    before: '/images/before-after/img_2127_1_1x.webp',
    after: '/images/before-after/img_2140_2_1x.webp',
  },
  {
    title: 'Felni polírozás',
    before: '/images/before-after/img_9364_1_1x.webp',
    after: '/images/before-after/img_9366_1_1x.webp',
  },
]

const SliderCard = ({ pair, index }) => {
  const [position, setPosition] = useState(50) // 0–100 %
  const [dragging, setDragging] = useState(false)
  const containerRef = useRef(null)

  const getPercent = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return 50
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    return (x / rect.width) * 100
  }, [])

  // Mouse
  const onMouseDown = (e) => {
    e.preventDefault()
    setDragging(true)
  }
  const onMouseMove = useCallback((e) => {
    if (!dragging) return
    setPosition(getPercent(e.clientX))
  }, [dragging, getPercent])
  const onMouseUp = useCallback(() => setDragging(false), [])

  // Touch
  const onTouchStart = () => setDragging(true)
  const onTouchMove = useCallback((e) => {
    if (!dragging) return
    setPosition(getPercent(e.touches[0].clientX))
  }, [dragging, getPercent])
  const onTouchEnd = useCallback(() => setDragging(false), [])

  useEffect(() => {
    if (dragging) {
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
      window.addEventListener('touchmove', onTouchMove, { passive: true })
      window.addEventListener('touchend', onTouchEnd)
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [dragging, onMouseMove, onMouseUp, onTouchMove, onTouchEnd])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="flex flex-col items-center"
    >
      {/* Card */}
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] overflow-hidden rounded-xl border-2 border-accent/60 shadow-[0_4px_20px_rgba(232,184,75,0.15)] select-none bg-black"
        style={{ cursor: dragging ? 'col-resize' : 'ew-resize' }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        {/* AFTER (bottom layer — full width) */}
        <img
          src={pair.after}
          alt={`${pair.title} – utánna`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          draggable={false}
        />

        {/* BEFORE (top layer — clipped to left of handle) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img
            src={pair.before}
            alt={`${pair.title} – előtte`}
            className="w-full h-full object-cover"
            loading="eager"
            draggable={false}
          />
        </div>

        {/* Corner labels */}
        <span className="absolute top-2 left-3 text-[10px] font-bold tracking-[0.2em] uppercase text-white/80 bg-black/50 px-2 py-0.5 rounded-full pointer-events-none">
          Előtte
        </span>
        <span className="absolute top-2 right-3 text-[10px] font-bold tracking-[0.2em] uppercase text-white/80 bg-black/50 px-2 py-0.5 rounded-full pointer-events-none">
          Utánna
        </span>

        {/* Handle line */}
        <div
          className="absolute top-0 bottom-0 w-px bg-accent shadow-[0_0_8px_rgba(232,184,75,0.8)] pointer-events-none"
          style={{ left: `${position}%` }}
        />

        {/* Handle knob */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-accent border-2 border-white shadow-[0_0_12px_rgba(232,184,75,0.6)] flex items-center justify-center pointer-events-none z-10"
          style={{ left: `${position}%` }}
        >
          {/* Double arrow icon */}
          <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 7L3 10l4 3M13 7l4 3-4 3" />
          </svg>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-light text-center text-sm font-semibold tracking-widest uppercase mt-4">
        {pair.title}
      </h3>
    </motion.div>
  )
}

const BeforeAfter = () => (
  <section className="relative w-full pb-24 pt-12 overflow-hidden">
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Heading */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-accent text-3xl md:text-4xl font-black font-heading tracking-widest uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
        >
          — Előtte & Utánna —
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted text-sm mt-3"
        >
          Húzd a csúszkát és nézd meg a különbséget
        </motion.p>
      </div>

      {/* 3-card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {pairs.map((pair, i) => (
          <SliderCard key={i} pair={pair} index={i} />
        ))}
      </div>

    </div>
  </section>
)

export default BeforeAfter
