import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Footer from './components/Footer'
import { translations } from './components/LanguageToggle'

export default function App() {
  const [lang, setLang] = useState('en')
  const t = translations[lang]

  const sections = {
    home: useRef(null),
    work: useRef(null),
    about: useRef(null),
    contact: useRef(null),
  }

  const scrollTo = (id) => {
    const el = id === 'home' ? document.body : document.getElementById(id)
    if (!el) return
    const y = id === 'home' ? 0 : el.getBoundingClientRect().top + window.scrollY - 90
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  useEffect(() => {
    document.title = lang === 'en' ? 'Rama — Frontend Engineer' : 'Rama — Frontend Engineer'
  }, [lang])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-white dark:from-black dark:to-zinc-950 text-gray-900 dark:text-white">
      <Navbar lang={lang} setLang={setLang} onNav={scrollTo} />
      <main>
        <div id="home" ref={sections.home}>
          <Hero t={t} />
        </div>

        <div id="about" ref={sections.about} className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl font-semibold">{lang === 'en' ? 'About' : 'Tentang'}</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl">
            {lang === 'en' ?
              "I craft modern, responsive interfaces with a focus on motion and detail. I love blending clean design, accessibility, and performance to create experiences that feel alive." :
              "Saya merancang antarmuka modern dan responsif dengan fokus pada animasi dan detail. Saya senang memadukan desain bersih, aksesibilitas, dan performa untuk menciptakan pengalaman yang terasa hidup."}
          </p>
        </div>

        <div id="work" ref={sections.work}>
          <Showcase lang={lang} />
        </div>

        <Footer lang={lang} />
      </main>
    </div>
  )
}
