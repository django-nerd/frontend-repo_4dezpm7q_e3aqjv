import { motion } from 'framer-motion'

export default function Marquee({ items = [], speed = 40 }) {
  const content = [...items, ...items]
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ ease: 'linear', duration: speed, repeat: Infinity }}
      >
        {content.map((t, i) => (
          <span key={i} className="text-sm md:text-base text-gray-600 dark:text-gray-300">{t}</span>
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white dark:from-black" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white dark:from-black" />
    </div>
  )
}
