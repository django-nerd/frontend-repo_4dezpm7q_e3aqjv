import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Footer from './components/Footer'
import { translations } from './components/LanguageToggle'
import ScrollProgress from './components/ScrollProgress'
import NoiseBG from './components/NoiseBG'
import Orbital from './components/Orbital'
import StickyCTA from './components/StickyCTA'
import SectionDivider from './components/SectionDivider'
import Reveal from './components/Reveal'
import { ParallaxSection } from './components/Parallax'
import Marquee from './components/Marquee'

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
      <ScrollProgress />
      <NoiseBG />
      <Orbital />
      <Navbar lang={lang} setLang={setLang} onNav={scrollTo} />
      <StickyCTA label={lang === 'en' ? "Let's build something great together" : 'Yuk bangun sesuatu yang hebat bersama'} />
      <main>
        <div id="home" ref={sections.home}>
          <Hero t={t} />
        </div>

        <ParallaxSection id="about" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold">{lang === 'en' ? 'About' : 'Tentang'}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl">
              {lang === 'en' ?
                "I craft modern, responsive interfaces with a focus on motion and detail. I love blending clean design, accessibility, and performance to create experiences that feel alive." :
                "Saya merancang antarmuka modern dan responsif dengan fokus pada animasi dan detail. Saya senang memadukan desain bersih, aksesibilitas, dan performa untuk menciptakan pengalaman yang terasa hidup."}
            </p>
          </Reveal>
          <div className="mt-8">
            <Marquee items={[
              'React', 'Next.js', 'Framer Motion', 'Spline', 'Design Systems', 'Accessibility', 'WebGL', 'Three.js', 'TypeScript', 'Tailwind CSS'
            ]} />
          </div>
        </ParallaxSection>

        <SectionDivider />

        <div id="work" ref={sections.work}>
          <Showcase lang={lang} />
        </div>

        <SectionDivider />

        <Reveal>
          <Footer lang={lang} />
        </Reveal>
      </main>
    </div>
  )
}
