'use client'
import { useEffect, useRef, useState } from 'react'

interface Props {
  target: number
  prefix?: string
  suffix?: string
  duration?: number
  decimals?: number
}

export default function AnimatedCounter({ target, prefix = '', suffix = '', duration = 1800, decimals = 0 }: Props) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const start = performance.now()
        const tick = (now: number) => {
          const elapsed = now - start
          const progress = Math.min(elapsed / duration, 1)
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3)
          setValue(eased * target)
          if (progress < 1) requestAnimationFrame(tick)
          else setValue(target)
        }
        requestAnimationFrame(tick)
        obs.unobserve(el)
      }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, duration])

  const display = decimals > 0
    ? value.toFixed(decimals)
    : Math.round(value).toLocaleString()

  return <span ref={ref}>{prefix}{display}{suffix}</span>
}
