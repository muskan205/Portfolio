import { motion } from 'framer-motion'
import { skills } from '../assets/assts'

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 bg-[var(--page)] px-6 py-24 text-[var(--text)]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-purple-500">What I work with</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">My skills & technologies</h2>
          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            Tools and technologies I use to build, test, and deliver web applications.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
              whileHover={{ y: -5, rotate: index % 2 === 0 ? -1 : 1 }}
              className="rounded-xl border border-[var(--line)] bg-[var(--card)] p-5 transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-purple-500" aria-hidden="true" />
                <h3 className="text-base font-semibold text-[var(--text)]">{group.title}</h3>
              </div>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 border-t border-[var(--line)] pt-4">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2 text-sm leading-snug text-[var(--muted)]">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-purple-400" aria-hidden="true" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
