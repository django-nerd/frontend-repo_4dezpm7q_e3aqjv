export default function NoiseBG() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.06] mix-blend-soft-light dark:opacity-[0.08]" style={{ backgroundImage: 'url("data:image/svg+xml;utf8,\
      <svg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\' viewBox=\'0 0 160 160\'>\
        <filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'.8\' numOctaves=\'2\'/></filter>\
        <rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'.5'/>\
      </svg>\n")', backgroundSize: '160px 160px' }} />
  )
}
