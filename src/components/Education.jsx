import { motion } from 'framer-motion'

const education = [
  {
    school: 'Kangwon National University, South Korea',
    program: 'AI Software Major & Global Human Resources',
    period: '2021–2025',
  },
  {
    school: 'Tashkent Information Technology University',
    program: 'Information and Communication major',
    period: '2015-2018',
  },
]

export default function Education() {
  return (
    <motion.section
      id="education"
      className="section-shell"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <p className="section-label">Education</p>
      <div className="grid gap-6">
        {education.map((item) => (
          <article
            key={item.school}
            className="glass-panel grid gap-3 rounded-[28px] p-6 md:grid-cols-[1.4fr_1fr_auto] md:items-center md:gap-6 md:p-8"
          >
            <h3 className="display-heading text-xl text-white">{item.school}</h3>
            <p className="text-white/68">{item.program}</p>
            <p className="mono-heading text-xs tracking-[0.24em] text-[var(--color-accent)] uppercase">
              {item.period}
            </p>
          </article>
        ))}
      </div>
    </motion.section>
  )
}
