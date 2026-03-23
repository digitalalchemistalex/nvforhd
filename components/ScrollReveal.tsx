'use client'
import { useEffect, useRef, ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
}

export default function ScrollReveal({ children, delay = 0, className = '', style = {} }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          obs.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: 'translateY(28px)',
        transition: `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
