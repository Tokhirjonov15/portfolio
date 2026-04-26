import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (window.innerWidth <= 768) return undefined

    const updatePosition = (event) => {
      setVisible(true)
      setPosition({ x: event.clientX, y: event.clientY })

      const interactive = event.target.closest('a, button, [role="button"]')
      setHovered(Boolean(interactive))
    }

    const handleLeave = () => setVisible(false)

    window.addEventListener('mousemove', updatePosition)
    window.addEventListener('mouseout', handleLeave)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      window.removeEventListener('mouseout', handleLeave)
    }
  }, [])

  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null
  }

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-50 rounded-full transition-[opacity,transform,width,height,border-color] duration-200 ease-out ${
        visible ? 'opacity-100' : 'opacity-0'
      } ${hovered ? 'h-8 w-8 border-[rgba(123,97,255,0.72)]' : 'h-4 w-4 border-[rgba(0,212,255,0.82)]'}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        borderWidth: '1px',
        background: hovered ? 'rgba(123, 97, 255, 0.14)' : 'rgba(0, 212, 255, 0.2)',
        boxShadow: hovered
          ? '0 0 24px rgba(123,97,255,0.45)'
          : '0 0 24px rgba(0,212,255,0.45)',
      }}
    />
  )
}
