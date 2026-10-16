import { motion } from 'framer-motion'
import { projects } from '../assets/assts'

function Projects() {
  return (
    <section id="project" className="scroll-mt-24 bg-[var(--page)] px-6 py-24 text-[var(--text)]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-purple-500">Selected work</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Projects I’ve worked on</h2>
          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            A selection of applications and features I’ve helped build across frontend and backend development.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: (index % 2) * 0.1 }}
              whileHover={{ y: -6, rotate: index % 2 === 0 ? -0.5 : 0.5, scale: 1.01 }}
              className="flex h-full flex-col rounded-2xl border border-[var(--line)] bg-[var(--card)] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/60 hover:shadow-lg"
            >
              <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-purple-500">{project.category}</p>
                  <h3 className="mt-1 text-base font-semibold text-[var(--text)]">{project.title}</h3>
                </div>
                <span className="rounded-full bg-[var(--surface)] px-3 py-1 text-xs text-[var(--muted)]">{project.role}</span>
              </div>
              <p className="text-sm leading-relaxed text-[var(--muted)]">{project.description}</p>
              <ul className="mt-3 list-disc space-y-1 pl-4 text-xs leading-relaxed text-[var(--muted)]">
                {project.responsibilities.slice(0, 1).map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="mt-auto flex flex-wrap gap-1 pt-3">
                {project.technologies.slice(0, 4).map((technology) => (
                  <span key={technology} className="rounded-full border border-[var(--line)] px-2.5 py-1 text-[11px] text-[var(--muted)]">{technology}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
