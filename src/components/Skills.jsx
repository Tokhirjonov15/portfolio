import { useState } from 'react'
import { motion } from 'framer-motion'

const skillGroups = [
  {
    title: 'Front-End',
    skills: [
      'HTML', 'CSS', 'SASS', 'JavaScript', 'TypeScript', 'EJS', 'ReactJS',
      'React Native', 'Redux', 'JQuery', 'Axios', 'Socket.io-Client',
      'Sweetalert2', 'Sonner', 'Animejs', 'React-Router-Dom', 'Swiper',
      'Motion-framer', 'Typed.js', 'Three.js', 'TUI Editor', 'TVie',
    ],
  },
  {
    title: 'Back-End',
    skills: [
      'NodeJS', 'ExpressJS', 'NestJS', 'tRPC', 'Python', 'FastAPI', 'MongoDB',
      'Mongoose', 'PostgreSQL', 'Drizzle ORM', 'Prisma', 'MySQL', 'Supabase',
      'Express-Session', 'JWT', 'Bcryptjs', 'Multer',
      'Socket.io', 'Cookie Parser', 'Dotenv', 'Form-Data',
    ],
  },
  {
    title: 'Cloud & Product',
    skills: [
      'AWS Lambda', 'API Gateway', 'SST', 'Vercel', 'Cloudflare', 'Firebase', 'Capacitor',
      'Eximbay Payments', 'OneSignal Push', 'Google Analytics 4',
      'Google Search Console', 'i18n (7 languages)', 'OAuth (Google/Apple/LINE)',
    ],
  },
  {
    title: 'AI / ML',
    skills: [
      'PyTorch', 'OpenCV', 'NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn',
      'Hugging Face', 'Sentence-Transformers', 'PEFT (LoRA)', 'LLaMA / TinyLlama',
      'Tokenizers', 'Qdrant', 'RAG', 'Google Colab', 'Kaggle', 'MobileNet',
    ],
  },
  {
    title: 'Patterns',
    skills: ['MVC', 'Middleware', 'Dependency Injection', 'Decorators'],
  },
  {
    title: 'DevOps',
    skills: ['Linux (Ubuntu)', 'Nginx', 'DNS', 'Firewall', 'Docker', 'PM2', 'GitHub Actions', 'GitHub Pages', 'Render'],
  },
  {
    title: 'Tools',
    skills: ['VSCode', 'Postman', 'Yarn', 'NVM', 'NPM', 'Z Shell', 'FileZilla', 'GitHub', 'MongoDB Compass', 'Figma'],
  },
]

const sectionMotion = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: true, amount: 0.15 },
}

function SkillCard({ title, skills }) {
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)')

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const rotateX = ((y / rect.height) - 0.5) * -7
    const rotateY = ((x / rect.width) - 0.5) * 8
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`)
  }

  const resetTransform = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg)')
  }

  return (
    <div
      className="glass-panel rounded-[28px] p-6 transition-transform duration-300 ease-out"
      style={{ transform }}
      onMouseMove={handleMove}
      onMouseLeave={resetTransform}
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <h3 className="mono-heading text-lg tracking-[0.16em] text-white uppercase">{title}</h3>
        <span className="h-px flex-1 bg-[linear-gradient(90deg,rgba(0,212,255,0.7),transparent)]" />
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="mono-heading rounded-full border border-white/8 px-3 py-2 text-[0.73rem] tracking-[0.12em] text-white/60 uppercase transition-colors duration-300 hover:border-[rgba(0,212,255,0.28)] hover:text-[var(--color-accent)]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <motion.section id="skills" className="section-shell" {...sectionMotion}>
      <p className="section-label">Skills</p>
      <div className="mb-12 max-w-3xl">
        <h2 className="section-title">Stack breadth, production discipline.</h2>
        <p className="section-copy mt-6">
          A working toolkit shaped by full-stack delivery, applied AI, and the
          realities of operating software after launch.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <SkillCard key={group.title} title={group.title} skills={group.skills} />
        ))}
      </div>
    </motion.section>
  )
}
