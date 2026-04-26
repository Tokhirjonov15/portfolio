import { useEffect, useState } from 'react'

function getActiveSection(sectionIds) {
  const middle = window.innerHeight * 0.35

  for (let index = sectionIds.length - 1; index >= 0; index -= 1) {
    const element = document.getElementById(sectionIds[index])
    if (!element) continue

    const rect = element.getBoundingClientRect()
    if (rect.top <= middle) {
      return sectionIds[index]
    }
  }

  return sectionIds[0]
}

export default function Navbar({ sections }) {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const ids = sections.map((section) => section.id)
    const updateActive = () => setActiveSection(getActiveSection(ids))

    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })

    return () => window.removeEventListener('scroll', updateActive)
  }, [sections])

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId)
    if (!target) return

    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-30">
      <nav className="mx-auto mt-4 flex w-[min(1120px,calc(100%-24px))] items-center justify-between rounded-full border border-white/8 bg-[rgba(8,12,16,0.58)] px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl md:px-6">
        <button
          type="button"
          onClick={() => scrollToSection('hero')}
          className="mono-heading text-sm tracking-[0.36em] text-white/92 uppercase"
        >
          Alex
        </button>
        <div className="hidden items-center gap-2 md:flex">
          {sections.map((section) => {
            const active = activeSection === section.id

            return (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`rounded-full px-3 py-2 text-xs uppercase tracking-[0.28em] transition-colors duration-300 ${
                  active
                    ? 'bg-white/6 text-[var(--color-accent)]'
                    : 'text-white/52 hover:text-white/92'
                }`}
              >
                {section.label}
              </button>
            )
          })}
        </div>
      </nav>
    </header>
  )
}
