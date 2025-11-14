import { motion, useScroll, useTransform } from 'framer-motion'

export default function StickyCTA({ label = 'Let\'s build something great together', href = '#contact' }) {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 40])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1])

  return (
    <motion.a
      style={{ y, opacity }}
      href={href}
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium bg-gray-900 text-white dark:bg-white dark:text-black shadow-lg shadow-black/10 hover:scale-[1.02] active:scale-[.98] transition"
    >
      {label}
      <span className="inline-block translate-y-px">→</span>
    </motion.a>
  )
}
