import { motion } from 'framer-motion'

const badges = [
  { label: 'Korean', level: 'C1' },
  { label: 'English', level: 'C1' },
  { label: 'Uzbek', level: 'Native' },
]

const sectionMotion = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: true, amount: 0.3 },
}

export default function About() {
  return (
    <motion.section id="about" className="section-shell" {...sectionMotion}>
      <p className="section-label">About</p>
      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr] lg:items-start">
        <div>
          <h2 className="section-title">Engineering that survives production.</h2>
          <p className="section-copy mt-8">
            FullStack, AI & DevOps Engineer based in Seoul. I build scalable web
            systems, deploy them with precision, and integrate AI that actually works
            in production.
          </p>
        </div>

        <div className="glass-panel rounded-[28px] p-6">
          <p className="mono-heading text-xs tracking-[0.28em] text-white/48 uppercase">
            Languages
          </p>
          <div className="mt-5 grid gap-3">
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-3"
              >
                <span className="text-sm text-white/78">{badge.label}</span>
                <span className="mono-heading rounded-full border border-[var(--color-border)] px-3 py-1 text-xs tracking-[0.18em] text-[var(--color-accent)] uppercase">
                  {badge.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
