// src/components/sections/TestimonialsSection.tsx
import { StaggerChildren, StaggerItem, FadeUp } from './MotionDiv'

const TESTIMONIALS = [
  { q:'Click Decoded transformed our SEO strategy completely. We went from page 3 to ranking #1 for our top keywords in under 6 months. The results speak for themselves.', name:'Rahul Sharma', title:'Founder, B2B SaaS Startup, Bangalore', init:'RS' },
  { q:'The White Label partnership has been incredible. They deliver high-quality SEO reports under our brand, always on time, and my clients are thrilled. Zero issues in 2 years.', name:'Priya Mehta', title:'Director, Digital Agency, Delhi', init:'PM' },
  { q:'Our WhatsApp automation now responds to leads in 2 minutes, 24/7. Our conversion rate jumped 40% within the first month. Best investment we\'ve made.', name:'Anil Verma', title:'CEO, Real Estate Developer, Indore', init:'AV' },
]

export function TestimonialsSection() {
  return (
    <section style={{ background:'var(--bg)' }}>
      <div className="wrap">
        <div className="sec-h">
          <FadeUp>
            <div className="pill pill-b">Client Stories</div>
            <h2>Trusted by 200+<br/>Growing Businesses.</h2>
            <p>From startups to established agencies — real results, real relationships.</p>
          </FadeUp>
        </div>
        <StaggerChildren className="testi-grid">
          {TESTIMONIALS.map(t => (
            <StaggerItem key={t.name} className="tcard">
              <div className="t-stars">★★★★★</div>
              <p className="t-q">{t.q}</p>
              <div className="t-who">
                <div className="t-av">{t.init}</div>
                <div><b>{t.name}</b><small>{t.title}</small></div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
