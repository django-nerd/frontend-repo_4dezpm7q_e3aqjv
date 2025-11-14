import { motion } from 'framer-motion'

const items = [
  {
    title: 'Interactive Design Systems',
    desc: 'Component libraries and motion patterns at scale.',
    tags: ['React', 'Framer Motion', 'Design'],
  },
  {
    title: 'High-Performance Frontends',
    desc: 'Fast, accessible, and resilient web apps.',
    tags: ['Next.js', 'Perf', 'A11y'],
  },
  {
    title: '3D + WebGL Experiments',
    desc: 'Playful, tactile experiences on the web.',
    tags: ['Spline', 'Three.js'],
  },
]

const itemsID = [
  {
    title: 'Sistem Desain Interaktif',
    desc: 'Pustaka komponen dan pola animasi berskala.',
    tags: ['React', 'Framer Motion', 'Desain'],
  },
  {
    title: 'Frontend Berkinerja Tinggi',
    desc: 'Aplikasi web cepat, aksesibel, dan tangguh.',
    tags: ['Next.js', 'Performa', 'Aksesibilitas'],
  },
  {
    title: 'Eksperimen 3D + WebGL',
    desc: 'Pengalaman web yang menyenangkan dan taktil.',
    tags: ['Spline', 'Three.js'],
  },
]

export default function Showcase({ lang }) {
  const data = lang === 'en' ? items : itemsID
  return (
    <section id="work" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {data.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-black/30 backdrop-blur p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{it.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{it.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {it.tags.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-full text-xs bg-black/5 dark:bg-white/10 text-gray-700 dark:text-gray-300">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
