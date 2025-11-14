import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero({ t }) {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-white/20 dark:from-black/80 dark:via-black/60 dark:to-black/20 pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 pb-16 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {t.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300"
          >
            {t.heroSubtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#work" className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white dark:bg-white dark:text-black px-5 py-3 text-sm font-medium shadow-lg shadow-black/5 hover:scale-[1.02] active:scale-[.98] transition">
              {t.ctaPrimary}
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white/70 dark:bg-white/10 backdrop-blur border border-black/5 dark:border-white/10 text-gray-900 dark:text-white px-5 py-3 text-sm font-medium hover:scale-[1.02] active:scale-[.98] transition">
              {t.ctaSecondary}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
