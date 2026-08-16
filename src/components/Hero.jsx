import { motion } from 'framer-motion'
import profilePhoto from '../../uploads/profphoto.jpg'

// 인쇄물(CV/포트폴리오 PDF) 표지의 화면 버전 — 캔버스 파티클과 타이프라이터 대신
// 세리프 표제 + 잉크 괘선 + 진홍 키커. 배경은 은은한 잉크 그라데이션 하나뿐.

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* 잉크 배경 — 좌상단에서 스미는 따뜻한 빛 + 진홍 잔광 한 점 */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(1100px 700px at 18% 12%, rgba(234,229,220,0.05), transparent 60%),' +
            'radial-gradient(700px 500px at 85% 90%, rgba(214,69,112,0.07), transparent 65%),' +
            'var(--color-bg)',
        }}
      />

      <div className="section-shell flex min-h-screen items-center pt-24 before:hidden after:hidden">
        <div className="grid w-full items-center gap-12 text-center md:grid-cols-[minmax(300px,380px)_1fr] md:gap-16 md:text-left">
          <motion.div
            custom={0}
            variants={reveal}
            initial="hidden"
            animate="visible"
            className="flex justify-center md:justify-start"
          >
            <div className="glass-panel overflow-hidden rounded-[28px] p-2.5">
              <img
                src={profilePhoto}
                alt="Alex portrait"
                className="h-[320px] w-[260px] rounded-[22px] object-cover sm:h-[380px] sm:w-[300px]"
              />
            </div>
          </motion.div>

          <div>
            <motion.p
              custom={0.12}
              variants={reveal}
              initial="hidden"
              animate="visible"
              className="mono-heading text-[0.72rem] uppercase tracking-[0.34em] text-[var(--color-accent)]"
            >
              Full Stack &amp; DevOps Engineer · Seoul
            </motion.p>

            <motion.h1
              custom={0.22}
              variants={reveal}
              initial="hidden"
              animate="visible"
              className="display-heading mt-5 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl"
            >
              Alex
              <br />
              Tokhirjonov
            </motion.h1>

            {/* 인쇄물 표지의 잉크 괘선 */}
            <motion.span
              custom={0.32}
              variants={reveal}
              initial="hidden"
              animate="visible"
              className="mx-auto mt-8 block h-[3px] w-24 bg-[var(--color-text)] md:mx-0"
            />

            <motion.p
              custom={0.42}
              variants={reveal}
              initial="hidden"
              animate="visible"
              className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[var(--color-muted)] md:mx-0"
            >
              I build products end to end — then run them in production. Currently operating a
              medical-tourism platform in Seoul: 7 languages, real payments, real patients.
            </motion.p>

            <motion.div
              custom={0.52}
              variants={reveal}
              initial="hidden"
              animate="visible"
              className="mt-9 flex flex-wrap justify-center gap-4 md:justify-start"
            >
              <a
                href={`${import.meta.env.BASE_URL}Alex-Tokhirjonov-Resume.pdf`}
                download
                className="rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[#13161b] transition hover:opacity-85"
              >
                Download CV
              </a>
              <a
                href={`${import.meta.env.BASE_URL}Alex-Tokhirjonov-Portfolio.pdf`}
                download
                className="rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] transition hover:border-[var(--color-accent)]"
              >
                Portfolio PDF
              </a>
            </motion.div>
          </div>
        </div>

        <motion.button
          custom={0.66}
          variants={reveal}
          initial="hidden"
          animate="visible"
          type="button"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-14 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-[0.68rem] uppercase tracking-[0.28em] text-[var(--color-muted)]"
        >
          Scroll
          <span className="scroll-chevron" />
        </motion.button>
      </div>
    </section>
  )
}
