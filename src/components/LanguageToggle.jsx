import { useEffect, useState } from 'react'
import { Globe } from 'lucide-react'

const translations = {
  en: {
    home: 'Home',
    work: 'Work',
    about: 'About',
    contact: 'Contact',
    heroTitle: "Hi, I'm Rama — Frontend Engineer",
    heroSubtitle: 'I build delightful, performant web experiences with React, Next.js, and motion.',
    ctaPrimary: 'See My Work',
    ctaSecondary: 'Get in Touch',
    theme: 'Theme',
  },
  id: {
    home: 'Beranda',
    work: 'Karya',
    about: 'Tentang',
    contact: 'Kontak',
    heroTitle: 'Hai, saya Rama — Frontend Engineer',
    heroSubtitle: 'Saya membangun pengalaman web yang menyenangkan dan cepat dengan React, Next.js, dan animasi.',
    ctaPrimary: 'Lihat Karya',
    ctaSecondary: 'Hubungi Saya',
    theme: 'Tema',
  }
}

export default function LanguageToggle({ value, onChange }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <button
      aria-label="Toggle language"
      onClick={() => onChange(value === 'en' ? 'id' : 'en')}
      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/70 dark:bg-white/10 backdrop-blur border border-black/5 dark:border-white/10 text-sm hover:scale-[1.02] active:scale-[.98] transition"
    >
      <Globe className="w-4 h-4" />
      <span className="font-medium">{mounted ? (value === 'en' ? 'EN' : 'ID') : 'EN'}</span>
    </button>
  )
}

export { translations }
