import { motion } from 'framer-motion'

const projects = [
  {
    name: 'Seoul Gijibae',
    url: 'https://www.seoulgijibae.com/',
    description:
      'Medical tourism platform connecting international patients with verified Seoul clinics — multilingual booking in 7 languages, secure reservation deposits via Eximbay, and a clinic directory covering 17,000+ hospitals.',
  },
  {
    name: 'RentGo',
    url: 'http://rentgo.uz/',
    description:
      'Rental-focused web platform with a production-facing experience, built for users who need a fast and reliable property workflow.',
  },
  {
    name: 'BookMed',
    url: 'http://bookmed.uz/',
    description:
      'Medical booking website designed to streamline patient interaction, appointment flows, and service discovery in a clean digital experience.',
  },
]

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="section-shell"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <p className="section-label">Projects</p>
      <div className="mb-12 max-w-3xl">
        <h2 className="section-title">Selected production work.</h2>
        <p className="section-copy mt-6">
          A small sample of websites delivered and launched for real-world use.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="glass-panel rounded-[30px] p-7 md:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="mono-heading text-xs tracking-[0.28em] text-[var(--color-accent)] uppercase">
                  Live Website
                </p>
                <h3 className="display-heading mt-4 text-2xl text-white">{project.name}</h3>
              </div>
              <span className="h-px w-16 bg-[var(--color-accent)]" />
            </div>

            <p className="mt-6 text-sm leading-7 text-white/64 md:text-[0.96rem]">
              {project.description}
            </p>

            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="project-link mono-heading mt-8 inline-flex max-w-full items-center gap-2 rounded-full border border-[rgba(214,69,112,0.4)] bg-[rgba(214,69,112,0.1)] px-4 py-3 text-xs tracking-[0.14em] text-[var(--color-accent)] uppercase transition-all duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-text)] sm:text-sm"
            >
              {/* 전체 URL 은 모바일 카드보다 넓어진다 → 도메인만 표시 */}
              <span className="truncate">{new URL(project.url).hostname.replace(/^www\./, '')}</span>
              <span aria-hidden>→</span>
            </a>

            <p className="mt-4 text-sm leading-7 text-white/48">
              For more projects and details see my portfolio PDF file.
            </p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}
