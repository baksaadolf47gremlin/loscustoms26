import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const ScrollReveal = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  once = true,
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-80px 0px' })
  const controls = useAnimation()

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.65,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  useEffect(() => {
    if (isInView) controls.start('visible')
    else if (!once) controls.start('hidden')
  }, [isInView, controls, once])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
