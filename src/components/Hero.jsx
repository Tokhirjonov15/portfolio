import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import profilePhoto from '../../uploads/profphoto.jpg'

const roles = ['FullStack Engineer', 'AI Engineer', 'DevOps Engineer']

const seededValue = (seed) => {
  const value = Math.sin(seed * 127.1) * 43758.5453123
  return value - Math.floor(value)
}

function useTypewriter(words) {
  const [wordIndex, setWordIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIndex]
    const finishedTyping = display === word
    const finishedDeleting = display === ''

    const timeout = window.setTimeout(
      () => {
        if (!deleting && !finishedTyping) {
          setDisplay(word.slice(0, display.length + 1))
          return
        }

        if (!deleting && finishedTyping) {
          setDeleting(true)
          return
        }

        if (deleting && !finishedDeleting) {
          setDisplay(word.slice(0, display.length - 1))
          return
        }

        setDeleting(false)
        setWordIndex((current) => (current + 1) % words.length)
      },
      finishedTyping && !deleting ? 1350 : deleting ? 42 : 82,
    )

    return () => window.clearTimeout(timeout)
  }, [deleting, display, wordIndex, words])

  return display
}

function Particles() {
  const pointsRef = useRef()
  const { viewport, pointer } = useThree()
  const count = typeof window !== 'undefined' && window.innerWidth < 640 ? 800 : 3200

  const { positions, seeds } = useMemo(() => {
    const basePositions = new Float32Array(count * 3)
    const randomSeeds = new Float32Array(count * 3)

    for (let index = 0; index < count; index += 1) {
      const stride = index * 3
      basePositions[stride] = (seededValue(index + 1) - 0.5) * 16
      basePositions[stride + 1] = (seededValue(index + 2) - 0.5) * 10
      basePositions[stride + 2] = (seededValue(index + 3) - 0.5) * 10

      randomSeeds[stride] = seededValue(index + 4) * Math.PI * 2
      randomSeeds[stride + 1] = seededValue(index + 5) * Math.PI * 2
      randomSeeds[stride + 2] = seededValue(index + 6) * Math.PI * 2
    }

    return { positions: basePositions, seeds: randomSeeds }
  }, [count])

  const [initialAnimatedPositions] = useState(() => positions.slice())
  const animatedRef = useRef(initialAnimatedPositions)

  useFrame((state, delta) => {
    if (!pointsRef.current) return

    const targetX = pointer.x * viewport.width * 0.22
    const targetY = pointer.y * viewport.height * 0.22
    const positionAttribute = pointsRef.current.geometry.attributes.position.array
    const animatedPositions = animatedRef.current
    const time = state.clock.elapsedTime

    for (let index = 0; index < count; index += 1) {
      const stride = index * 3
      const baseX = positions[stride]
      const baseY = positions[stride + 1]
      const baseZ = positions[stride + 2]
      const seedX = seeds[stride]
      const seedY = seeds[stride + 1]

      const driftX = Math.sin(time * 0.22 + seedX) * 0.12
      const driftY = Math.cos(time * 0.26 + seedY) * 0.12

      animatedPositions[stride] += ((baseX + driftX + targetX * 0.08) - animatedPositions[stride]) * delta * 1.8
      animatedPositions[stride + 1] += ((baseY + driftY + targetY * 0.08) - animatedPositions[stride + 1]) * delta * 1.8
      animatedPositions[stride + 2] += ((baseZ + Math.sin(time * 0.18 + seedX) * 0.08) - animatedPositions[stride + 2]) * delta * 1.2

      positionAttribute[stride] = animatedPositions[stride]
      positionAttribute[stride + 1] = animatedPositions[stride + 1]
      positionAttribute[stride + 2] = animatedPositions[stride + 2]
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true
    pointsRef.current.rotation.y = time * 0.03
  })

  return (
    <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[initialAnimatedPositions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#00D4FF"
        size={0.018}
        sizeAttenuation
        transparent
        opacity={0.68}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

function WireframeCore() {
  const meshRef = useRef()

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.3
    meshRef.current.rotation.y += 0.0025
  })

  return (
    <Float speed={1} rotationIntensity={0.28} floatIntensity={0.28}>
      <mesh ref={meshRef} position={[0, 0, -1]}>
        <torusKnotGeometry args={[1.55, 0.34, 220, 28]} />
        <meshBasicMaterial color="#00D4FF" wireframe transparent opacity={0.16} />
      </mesh>
    </Float>
  )
}

function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 54 }}>
      <color attach="background" args={['#080C10']} />
      <fog attach="fog" args={['#080C10', 6, 16]} />
      <ambientLight intensity={0.2} />
      <Particles />
      <WireframeCore />
    </Canvas>
  )
}

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
}

export default function Hero() {
  const typedText = useTypewriter(roles)

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(8,12,16,0.22),rgba(8,12,16,0.78))]" />

      <div className="section-shell flex min-h-screen items-center pt-24">
        <div className="grid w-full items-center gap-10 text-center md:grid-cols-[minmax(320px,420px)_1fr] md:gap-16 md:text-left lg:grid-cols-[380px_1fr]">
          <motion.div
            custom={0}
            variants={reveal}
            initial="hidden"
            animate="visible"
            className="flex justify-center md:justify-start"
          >
            <div className="glass-panel overflow-hidden rounded-[34px] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_30px_90px_rgba(0,0,0,0.42)]">
              <img
                src={profilePhoto}
                alt="Alex portrait"
                className="h-52 w-44 rounded-[26px] object-cover object-center sm:h-64 sm:w-56 lg:h-[24rem] lg:w-[20rem]"
              />
            </div>
          </motion.div>

          <div className="md:pl-6 lg:pl-12 xl:pl-20">
            <motion.p
              custom={0.08}
              variants={reveal}
              initial="hidden"
              animate="visible"
              className="mono-heading mb-6 text-[0.72rem] tracking-[0.42em] text-[var(--color-accent)] uppercase"
            >
              FullStack . AI . DevOps
            </motion.p>
            <motion.h1
              custom={0.18}
              variants={reveal}
              initial="hidden"
              animate="visible"
              data-text="ALEX"
              className="glitch-text mono-heading m-0 text-[clamp(4rem,14vw,10rem)] font-bold leading-none tracking-[-0.12em] text-[var(--color-text)]"
            >
              ALEX
            </motion.h1>
            <motion.div
              custom={0.3}
              variants={reveal}
              initial="hidden"
              animate="visible"
              className="mt-6 flex min-h-8 justify-center md:justify-start"
            >
              <span className="mono-heading border-r border-[rgba(232,237,242,0.6)] pr-2 text-sm tracking-[0.26em] text-white/78 uppercase sm:text-base">
                {typedText}
              </span>
            </motion.div>
            <motion.p
              custom={0.42}
              variants={reveal}
              initial="hidden"
              animate="visible"
              className="mt-8 max-w-2xl text-sm leading-8 text-white/56 sm:text-base"
            >
              Building production-grade systems across modern web stacks, AI pipelines,
              and infrastructure.
            </motion.p>
          </div>
        </div>

        <motion.button
          custom={0.58}
          variants={reveal}
          initial="hidden"
          animate="visible"
          type="button"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-14 flex flex-col items-center gap-3 text-[0.68rem] tracking-[0.28em] text-white/44 uppercase"
        >
          Scroll
          <span className="scroll-chevron" />
        </motion.button>
      </div>
    </section>
  )
}
