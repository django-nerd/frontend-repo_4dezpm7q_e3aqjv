import { motion, useScroll } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-1 origin-left z-[60]"
    >
      <div className="h-full w-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500" />
    </motion.div>
  )
}
