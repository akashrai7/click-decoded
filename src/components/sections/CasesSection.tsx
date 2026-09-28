// src/components/sections/CasesSection.tsx
import Link from 'next/link'
import { FadeUp, StaggerChildren, StaggerItem } from './MotionDiv'

const CASES = [
  { num:'+212%', metric:'Organic Traffic Growth', bg:'linear-gradient(135deg,var(--n),#162d4e)', sector:'E-commerce · SEO', p:'Organic traffic doubled in 6 months for a mid-sized Indore e-commerce brand through technical SEO and content strategy.' },
  { num:'-38%',  metric:'Cost Per Lead Reduction', bg:'linear-gradient(135deg,#1a0a3a,#2563eb)', sector:'Real Estate · Google Ads', p:'Restructured ad campaigns and landing pages cut cost-per-lead by 38% while maintaining lead volume.' },
  { num:'2 min', metric:'Avg Lead Response Time', bg:'linear-gradient(135deg,#0a2a1a,#0d1b2a)', sector:'Coaching · WhatsApp Automation', p:'Deployed WhatsApp automation that responds to every lead within 2 minutes — up from 4+ hours manually.' },
]

export function CasesSection() {
  return (
    <section style={{ background:'#fff' }}>
      <div className="wrap">
        <div className="sec-h">
          <FadeUp>
            <div className="pill pill-o">Case Studies</div>
            <h2>Real Clients.<br/>Real Numbers.</h2>
            <p>No vanity metrics. Results that show up in revenue, rankings, and ROI.</p>
          </FadeUp>
        </div>
        <StaggerChildren className="cases-grid">
          {CASES.map(c => (
            <StaggerItem key={c.metric} className="case">
              <div className="case-head" style={{ background: c.bg }}>
                <div className="case-num">{c.num}</div>
                <div className="case-metric">{c.metric}</div>
              </div>
              <div className="case-body">
                <div className="case-sector">{c.sector}</div>
                <p>{c.p}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
        <div style={{ textAlign:'center', marginTop:36 }}>
          <Link href="/case-studies" className="btn btn-n">View All Case Studies</Link>
        </div>
      </div>
    </section>
  )
}
