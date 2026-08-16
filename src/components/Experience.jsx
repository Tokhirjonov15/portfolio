import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Full Stack & DevOps Engineer',
    company: 'MeFlow Co., Ltd., Seoul, South Korea',
    period: 'May 2026 – Present',
    bullets: [
      'Building Seoul Gijibae, a medical tourism platform serving international patients in 7 languages — web (Next.js), mobile app (React Native/Capacitor), and three role-based admin dashboards.',
      'Integrated Eximbay international payments end-to-end: reservation deposit model, tiered refunds, server-side verification, and multilingual push notifications via OneSignal.',
      'Run AWS serverless infrastructure (Lambda, API Gateway) deployed with SST, PostgreSQL on Supabase with Drizzle ORM and tRPC, and CI/CD through GitHub Actions and Vercel.',
      'Own SEO and analytics: a 17,000-clinic public directory with structured data and hreflang, plus GA4 event instrumentation across web and app.',
      'Work day-to-day in Korean with clinics, the payment provider, and regulatory requirements for foreign patient services.',
    ],
  },
  {
    title: 'FullStack and DevOps Engineer',
    company: 'Digital City IT Center, Andijan, Uzbekistan',
    period: 'Sep 2025 – Feb 2026',
    bullets: [
      'Developed and deployed web applications using React, Node.js, NestJS, and MongoDB, implementing GraphQL APIs with Apollo Client for data management.',
      'Implemented secure authentication with JWT and sessions.',
      'Built scalable backend services with NestJS, designed RESTful APIs using MVC architecture.',
      'Maintained production-ready monorepo structure; managed dependencies with npm, Yarn, nvm, and utilized GitHub for version control.',
    ],
  },
  {
    title: 'Backend and Frontend Developer',
    company: 'DataSite Technology, Tashkent, Uzbekistan',
    period: 'Feb 2023 – Aug 2025',
    bullets: [
      'Integrated GraphQL APIs and optimized backend performance using ExpressJS and Next.js.',
      'Enhanced user experience with interactive animations via Anime.js, Three.js, and Fiber.js; implemented multilingual support using React-i18next.',
      'Managed MongoDB databases and implemented secure authentication and authorization using JWT, BcryptJS, and session handling.',
      'Built a real-time object detection system using OpenCV and PyTorch, integrated into the web application via FastAPI.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="section-label">Experience</p>
        <h2 className="section-title">Execution across product and infrastructure.</h2>
      </motion.div>

      <div className="relative mt-12 pl-8 md:pl-14">
        <div className="absolute bottom-0 left-0 top-1 w-px bg-[var(--color-border)]" />

        <div className="space-y-10">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.title}
              initial={{ opacity: 0, x: 48 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.24 }}
              className="glass-panel relative rounded-[28px] p-6 md:p-8"
            >
              <span className="absolute -left-[37px] top-8 h-4 w-4 rounded-full border border-[rgba(0,212,255,0.55)] bg-[var(--color-bg)] shadow-[0_0_24px_rgba(0,212,255,0.28)] md:-left-[61px]" />
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="display-heading text-xl text-white">{experience.title}</h3>
                  <p className="mt-2 text-white/68">{experience.company}</p>
                </div>
                <p className="mono-heading text-xs tracking-[0.22em] text-[var(--color-accent)] uppercase">
                  {experience.period}
                </p>
              </div>

              <ul className="mt-6 space-y-3 text-sm leading-7 text-white/64 md:text-[0.96rem]">
                {experience.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-[10px] h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                    <span>{bullet}</span>
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
