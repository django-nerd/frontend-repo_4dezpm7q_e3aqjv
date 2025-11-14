import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import LanguageToggle, { translations } from './LanguageToggle'

export default function Navbar({ lang, setLang, onNav }) {
  const t = translations[lang]
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  const LinkBtn = ({ id, label }) => (
    <button
      onClick={() => { onNav(id); setOpen(false) }}
      className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5 transition"
    >
      {label}
    </button>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-black/30 backdrop-blur px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500" />
            <span className="font-semibold text-gray-900 dark:text-white">Rama</span>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            <LinkBtn id="home" label={t.home} />
            <LinkBtn id="work" label={t.work} />
            <LinkBtn id="about" label={t.about} />
            <LinkBtn id="contact" label={t.contact} />
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <LanguageToggle value={lang} onChange={setLang} />
            <ThemeToggle />
          </div>

          <button className="md:hidden p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" onClick={() => setOpen(!open)}>
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-black/5 dark:border-white/10 bg-white/80 dark:bg-black/40 backdrop-blur p-3 space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <LinkBtn id="home" label={t.home} />
              <LinkBtn id="work" label={t.work} />
              <LinkBtn id="about" label={t.about} />
              <LinkBtn id="contact" label={t.contact} />
            </div>
            <div className="flex items-center gap-2 pt-2 border-t border-black/5 dark:border-white/10">
              <LanguageToggle value={lang} onChange={setLang} />
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
