// src/components/sections/StatsSection.tsx
'use client'
import { useEffect, useRef } from 'react'
import { FadeUp } from './MotionDiv'

const STATS = [
  { n: 12,  s: '+', l: 'Years in digital marketing' },
  { n: 500, s: '+', l: 'Projects delivered' },
  { n: 98,  s: '%', l: 'Client retention rate' },
  { n: 0,   s: '',  l: 'Google penalty incidents' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      obs.disconnect()
      const dur = 1600; const start = Date.now()
      const tick = () => {
        const p = Math.min((Date.now() - start) / dur, 1)
        const ease = 1 - Math.pow(1 - p, 4)
        el.textContent = Math.round(ease * target) + suffix
        if (p < 1) requestAnimationFrame(tick)
      }
      tick()
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, suffix])
  return <div ref={ref} className="sn">{0}{suffix}</div>
}

export function StatsSection() {
  return (
    <div style={{ padding:'56px 0' }}>
      <div className="wrap">
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <FadeUp key={s.l} delay={i * 0.1}>
              <div className="stat-col">
                <Counter target={s.n} suffix={s.s} />
                <div className="sl">{s.l}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  )
}
