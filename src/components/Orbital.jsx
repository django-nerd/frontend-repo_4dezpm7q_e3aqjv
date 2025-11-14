import { useEffect, useRef } from 'react'

export default function Orbital() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const handler = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10
      const y = (e.clientY / window.innerHeight - 0.5) * 10
      el.style.setProperty('--rx', `${-y}deg`)
      el.style.setProperty('--ry', `${x}deg`)
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 -z-10 [transform-style:preserve-3d]" style={{ transform: 'perspective(1200px) rotateX(var(--rx)) rotateY(var(--ry))' }}>
      <div className="absolute -top-32 -left-32 size-[420px] rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 size-[420px] rounded-full bg-indigo-500/20 blur-3xl" />
    </div>
  )
}
