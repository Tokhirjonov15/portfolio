import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return undefined

    const timeout = window.setTimeout(() => setCopied(false), 1800)
    return () => window.clearTimeout(timeout)
  }, [copied])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('mntokhirjonov@gmail.com')
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <motion.section
      id="contact"
      className="section-shell pb-28 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <p className="section-label">Contact</p>
      <h2 className="section-title">Available for full-time opportunities</h2>

      <div className="glass-panel relative mx-auto mt-10 flex max-w-3xl flex-col items-center gap-5 rounded-[32px] px-6 py-10">
        <button
          type="button"
          onClick={copyEmail}
          className="contact-link mono-heading text-lg text-white transition-colors duration-300 hover:text-[var(--color-accent)]"
        >
          mntokhirjonov@gmail.com
        </button>

        <a href="tel:01020767640" className="contact-link text-white/70 transition-colors duration-300 hover:text-white">
          01020767640
        </a>

        <span className="mono-heading rounded-full border border-[rgba(123,97,255,0.26)] bg-[rgba(123,97,255,0.08)] px-4 py-2 text-xs tracking-[0.18em] text-white/78 uppercase">
          D-10 Job Seeker Visa · Seoul, South Korea
        </span>

        <a
          href="https://github.com/Tokhirjonov15"
          target="_blank"
          rel="noreferrer"
          className="project-link mono-heading inline-flex items-center rounded-full border border-[rgba(0,212,255,0.28)] bg-[linear-gradient(90deg,rgba(0,212,255,0.14),rgba(123,97,255,0.14))] px-4 py-3 text-sm tracking-[0.18em] text-[var(--color-accent)] uppercase transition-all duration-300 hover:border-[rgba(123,97,255,0.42)] hover:text-white"
        >
          My Github Account
        </a>

        <AnimatePresence>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="absolute right-5 top-5 rounded-full border border-[rgba(0,212,255,0.18)] bg-[rgba(8,12,16,0.92)] px-3 py-2 text-xs text-[var(--color-accent)]"
            >
              Copied!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  )
}
