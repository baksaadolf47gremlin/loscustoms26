import { useEffect, useState } from 'react'
import { motion, useMotionValue } from 'framer-motion'

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [clickPos, setClickPos] = useState(null)

  // Motion values for smooth fast tracking (0 ms lag)
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  useEffect(() => {
    // Csak asztali gépeken aktiváljuk, mobilokon/tableten (érintőképernyő) ne
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    // Ha asztali gép, elrejtjük a hagyományos egeret az egész oldalon
    document.documentElement.classList.add('hide-native-cursor')

    const manageMouseMove = (e) => {
      setIsVisible(true)
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const manageMouseOver = (e) => {
      if (e.target && e.target.closest) {
        if (e.target.closest('a, button, input, textarea, .cursor-pointer, .gallery-img')) {
          setIsHovering(true)
        }
      }
    }

    const manageMouseOut = (e) => {
      if (e.relatedTarget && e.relatedTarget.closest) {
        if (!e.relatedTarget.closest('a, button, input, textarea, .cursor-pointer, .gallery-img')) {
          setIsHovering(false)
        }
      } else {
        setIsHovering(false)
      }
    }

    const manageMouseDown = (e) => {
      setIsClicked(true)
      setClickPos({ x: e.clientX, y: e.clientY, id: Date.now() })
    }
    
    const manageMouseUp = () => {
      setIsClicked(false)
    }
    
    const manageMouseLeave = () => {
      setIsVisible(false)
    }

    const manageMouseEnter = () => {
      setIsVisible(true)
    }

    let scrollTimeout;
    const handleScroll = () => {
      setIsHovering(false)
      if (!document.body.classList.contains('pointer-events-none')) {
        document.body.classList.add('pointer-events-none')
      }
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        document.body.classList.remove('pointer-events-none')
      }, 60)
    }

    window.addEventListener('mousemove', manageMouseMove, { passive: true })
    document.addEventListener('mouseover', manageMouseOver, { passive: true })
    document.addEventListener('mouseout', manageMouseOut, { passive: true })
    window.addEventListener('mousedown', manageMouseDown, { passive: true })
    window.addEventListener('mouseup', manageMouseUp, { passive: true })
    document.addEventListener('mouseleave', manageMouseLeave, { passive: true })
    document.addEventListener('mouseenter', manageMouseEnter, { passive: true })
    window.addEventListener('scroll', handleScroll, { passive: true, capture: true })

    return () => {
      window.removeEventListener('mousemove', manageMouseMove)
      document.removeEventListener('mouseover', manageMouseOver)
      document.removeEventListener('mouseout', manageMouseOut)
      window.removeEventListener('mousedown', manageMouseDown)
      window.removeEventListener('mouseup', manageMouseUp)
      document.removeEventListener('mouseleave', manageMouseLeave)
      document.removeEventListener('mouseenter', manageMouseEnter)
      window.removeEventListener('scroll', handleScroll, { capture: true })
      document.documentElement.classList.remove('hide-native-cursor')
    }
  }, [mouseX, mouseY])

  if (!isVisible) return null

  return (
    <>
      {/* Egyedi Gamer / San Andreas szerű "tömör nyíl" és kéz kurzor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
          // Képes kurzor beállítása - Teljesen megegyező kurzor méret
          marginLeft: isHovering ? '-7px' : '-5px',
          marginTop: isHovering ? '-2px' : '-2px',
          scale: isClicked ? 0.8 : isHovering ? 1.2 : 1, // Visszatettük a hover animációt (1.2-es nagyítás)!
          transformOrigin: isHovering ? '7px 2px' : '5px 2px',
        }}
      >
        {isHovering ? (
          <img 
            src="/middlefinger.png" 
            alt="Middle Finger Cursor" 
            className="w-5 h-auto drop-shadow-md pointer-events-none" // w-5 pontosan 20px-nek felel meg
            style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.5))' }}
          />
        ) : (
          <svg width="20" height="24" viewBox="-5 -2 20 24" fill="#E5A800" stroke="#000000" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            <path d="M 0 0 L 0 16 L 4 12 L 7 19 L 10 18 L 7 11 L 13 11 Z" />
          </svg>
        )}
      </motion.div>

      {/* Egyedi kattintás animáció! Egy vékony kiterjedő akciójel, pontosan a hegyéből indulva */}
      {clickPos && (
        <motion.div
          key={clickPos.id}
          className="fixed top-0 left-0 w-8 h-8 border-[1.5px] border-white rounded-full pointer-events-none z-[9997]"
          initial={{ scale: 0.1, opacity: 0.8, x: clickPos.x, y: clickPos.y, translateX: '-50%', translateY: '-50%' }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          onAnimationComplete={() => setClickPos(null)}
        />
      )}
    </>
  )
}

export default CustomCursor
