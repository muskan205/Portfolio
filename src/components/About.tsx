import { about, skills } from '../assets/assts'

function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-[var(--surface)] px-6 py-24 text-[var(--text)]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-purple-500">A little about me</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Building useful things for the web</h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <p className="text-lg leading-relaxed text-[var(--muted)]">{about.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-purple-400/40 bg-purple-500/10 px-4 py-2 text-sm text-purple-200">{about.role}</span>
              <span className="rounded-full border border-[var(--line)] bg-[var(--card)] px-4 py-2 text-sm text-[var(--muted)]">Based in {about.location}</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-5">
              <a href="#project" className="font-semibold text-purple-300 transition-colors hover:text-purple-200">Explore my work <span aria-hidden="true">→</span></a>
              <a href="mailto:your-email@example.com" className="font-semibold text-[var(--text)] transition-colors hover:text-purple-500">Let’s talk <span aria-hidden="true">→</span></a>
            </div>
          </div>

          <div className="grid content-start gap-4 sm:grid-cols-2">
            {skills.slice(0, 4).map((group) => (
              <article key={group.title} className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-5 shadow-sm">
                <h3 className="mb-4 font-semibold text-[var(--text)]">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.slice(0, 6).map((skill) => (
                    <span key={skill} className="rounded-full bg-[var(--surface)] px-3 py-1.5 text-sm text-[var(--muted)]">{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
