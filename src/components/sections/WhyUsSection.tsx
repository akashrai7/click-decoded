// src/components/sections/WhyUsSection.tsx
import { FadeUp, StaggerChildren, StaggerItem } from './MotionDiv'

const WHY = [
  { icon:'🎯', h:'ROI-First, Always',           p:'Every campaign is benchmarked against actual business outcomes — leads, revenue, and retention. Not impressions.' },
  { icon:'🔒', h:'NDA-Backed Confidentiality',   p:'For agencies: we never contact your clients. Your brand, your credit, zero risk of poaching.' },
  { icon:'⚡', h:'48-Hour Turnaround',           p:'White label reports and campaign updates delivered in 48 hours — so you always look sharp in front of clients.' },
  { icon:'🤖', h:'AI + Human Synergy',           p:'AI tools for speed and scale, human experts for strategy. You get the best of both without hiring either.' },
  { icon:'📊', h:'Full Transparency',            p:'Live dashboards, weekly reports, and zero jargon. You always know where every rupee went and what it returned.' },
  { icon:'🇮🇳', h:'India-Focused Strategy',      p:'12 years of cracking the Indian B2B market — language, buyer behaviour, and platform nuances that global agencies miss.' },
]

export function WhyUsSection() {
  return (
    <section style={{ padding:'64px 0 48px' }}>
      <div className="wrap">
        <div className="sec-h" style={{ marginBottom:36 }}>
          <FadeUp>
            <div className="pill pill-b">Why Click Decoded</div>
            <h2>Built Different.<br/>Designed to Deliver.</h2>
            <p>Not an agency that reports vanity metrics. We own outcomes.</p>
          </FadeUp>
        </div>
        <StaggerChildren className="why-grid">
          {WHY.map(w => (
            <StaggerItem key={w.h} className="why-card">
              <div className="why-icon">{w.icon}</div>
              <div className="why-body">
                <h4>{w.h}</h4>
                <p>{w.p}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
