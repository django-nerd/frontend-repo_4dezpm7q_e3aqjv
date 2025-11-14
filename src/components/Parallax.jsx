import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function ParallaxSection({ id, children, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.9])

  return (
    <section id={id} ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y, opacity }}>
        {children}
      </motion.div>
    </section>
  )
}

export function ParallaxLayers({ layers = [] }) {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {layers.map((l, i) => (
        <ParallaxLayer key={i} speed={l.speed} className={l.className} />
      ))}
    </div>
  )
}

function ParallaxLayer({ speed = 0.2, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [20 * speed, -20 * speed])
  return <motion.div ref={ref} style={{ y }} className={`absolute inset-0 ${className}`} />
}
