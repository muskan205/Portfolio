import { motion } from 'framer-motion'



function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--page)] px-6 pb-16 pt-28 text-[var(--text)]"
      id="home"
    >
      <div className="container mx-auto flex max-w-6xl flex-col-reverse items-center justify-center gap-12 md:flex-row md:justify-between md:gap-16 md:text-left">
        <div className="max-w-2xl text-center md:flex-1 md:text-left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-purple-500 md:text-base">Hello, I’m</p>
          <h1 className="mb-5 text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
            Muskan <span className="text-purple-500">Tomar</span>
          </h1>
          <h2 className="mb-6 text-2xl font-semibold text-[var(--muted)] md:text-3xl">
            Full stack developer
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg md:mx-0">
            I create stunning web applications with modern technologies.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
            <a
              href="#project"
              className="inline-flex min-w-40 items-center justify-center rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-purple-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
            >
              View work
            </a>
            <a
              href="mailto:your-email@example.com"
              className="inline-flex min-w-40 items-center justify-center rounded-lg border border-purple-400 px-6 py-3 font-semibold text-[var(--text)] transition-colors hover:bg-purple-500/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
            >
              Contact me
            </a>
          </div>
        </div>
        <motion.img
          src="/doremon3.jpg"
          alt="Doraemon"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ y: [0, -18, 0], rotate: [0, 2, 0, -2, 0], opacity: 1, scale: 1 }}
          transition={{
            y: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
            opacity: { duration: 0.6, delay: 0.2 },
            scale: { duration: 0.6, delay: 0.2 },
          }}
          whileHover={{ scale: 1.05, rotate: 4 }}
          className="h-56 w-56 shrink-0 rounded-full border-8 border-[var(--surface)] object-cover shadow-2xl shadow-purple-900/25 ring-1 ring-purple-500/30 sm:h-64 sm:w-64 md:h-96 md:w-96"
        />
      </div>
    </motion.section>
  )
}

export default Hero
