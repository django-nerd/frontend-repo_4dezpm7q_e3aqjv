export default function Footer({ lang }) {
  const year = new Date().getFullYear()
  return (
    <footer id="contact" className="py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-black/30 backdrop-blur p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-700 dark:text-gray-300">© {year} Rama. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="mailto:hello@example.com" className="px-3 py-2 rounded-lg text-sm font-medium bg-black text-white dark:bg-white dark:text-black">Email</a>
            <a href="https://www.linkedin.com" target="_blank" className="px-3 py-2 rounded-lg text-sm font-medium bg-white/70 dark:bg-white/10 border border-black/5 dark:border-white/10">LinkedIn</a>
            <a href="https://github.com" target="_blank" className="px-3 py-2 rounded-lg text-sm font-medium bg-white/70 dark:bg-white/10 border border-black/5 dark:border-white/10">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
