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

    const handleMouseOver = (e) => {
      if (e.target && e.target.closest && e.target.closest('a, button, input, textarea, .cursor-pointer, .gallery-img')) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = (e) => {
      if (e.target && e.target.closest && e.target.closest('a, button, input, textarea, .cursor-pointer, .gallery-img')) {
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
      setIsHovering(false)
    }

    window.addEventListener('mousemove', manageMouseMove, { passive: true })
    window.addEventListener('mouseover', handleMouseOver, { passive: true })
    window.addEventListener('mouseout', handleMouseOut, { passive: true })
    window.addEventListener('mousedown', manageMouseDown, { passive: true })
    window.addEventListener('mouseup', manageMouseUp, { passive: true })
    window.addEventListener('mouseleave', manageMouseLeave, { passive: true })

    return () => {
      window.removeEventListener('mousemove', manageMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseout', handleMouseOut)
      window.removeEventListener('mousedown', manageMouseDown)
      window.removeEventListener('mouseup', manageMouseUp)
      window.removeEventListener('mouseleave', manageMouseLeave)
      document.documentElement.classList.remove('hide-native-cursor')
    }
  }, [mouseX, mouseY])

  if (!isVisible) return null

  return (
    <>
      {/* Egyedi Gamer / San Andreas szerű "tömör nyíl" kurzor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
          marginLeft: '-5px',
          marginTop: '-2px',
          scale: isClicked ? 0.8 : isHovering ? 1.2 : 1,
          transformOrigin: '5px 2px', // Hoverkor innen nyílik ki (a mutató hegyéből)
        }}
      >
        <svg width="20" height="24" viewBox="-5 -2 20 24" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          <path 
            // Dinamikus alakváltás normál nyíl és egy sokkal kidolgozottabb kéz ikon (hover) között
            d={isHovering 
               ? "M -1 9 L -1 1 A 1 1 0 0 1 1 1 L 1 5 L 1 2 A 1 1 0 0 1 3 2 L 3 5.5 L 3 3 A 1 1 0 0 1 5 3 L 5 6 L 5 4 A 1 1 0 0 1 7 4 L 7 10 C 7 13 4 15 1 15 L -1 15 C -4 15 -5 13 -5 11 L -5 8 A 1.5 1.5 0 0 1 -2 8 Z"
               : "M 0 0 L 0 16 L 4 12 L 7 19 L 10 18 L 7 11 L 13 11 Z"
            } 
            fill={isHovering ? "#FFFFFF" : "#E5A800"} 
            stroke="#000000" 
            strokeWidth="1.5" 
            strokeLinejoin="round" 
            strokeLinecap="round"
          />
        </svg>
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
