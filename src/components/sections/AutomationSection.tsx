// src/components/sections/AutomationSection.tsx
import Link from 'next/link'
import { FadeUp, StaggerChildren, StaggerItem } from './MotionDiv'

const CARDS = [
  { icon:'⚡', h:'WhatsApp Automation', p:'Instant lead follow-up via WhatsApp Business API. Auto-reply, qualify, and route every lead without lifting a finger.', tag:'📲 WhatsApp Business API' },
  { icon:'🔄', h:'n8n Workflows',        p:'Connect your CRM, forms, ads, and apps. Build automation pipelines that run silently in the background and never break.', tag:'🔗 n8n • Zapier • Make' },
  { icon:'🤖', h:'AI Chatbots & Agents', p:'Intelligent chatbots that capture, qualify and convert leads — on your website and WhatsApp — around the clock.', tag:'🧠 Powered by AI' },
]

export function AutomationSection() {
  return (
    <section style={{ background:'var(--n-dark)', color:'#fff', overflow:'hidden', position:'relative' }}>
      <div style={{ position:'absolute', width:700, height:700, borderRadius:'50%', background:'radial-gradient(circle,rgba(245,158,11,.08),transparent 65%)', top:-200, right:-150 }} />
      <div style={{ position:'absolute', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle,rgba(37,99,235,.1),transparent 65%)', bottom:-150, left:-100 }} />
      <div className="wrap" style={{ position:'relative', zIndex:2 }}>
        <div className="sec-h">
          <FadeUp>
            <div className="pill pill-o">AI Automation</div>
            <h2 style={{ color:'#fff' }}>Stop Losing Leads to<br/>Slow Response Times.</h2>
            <p style={{ color:'rgba(255,255,255,.5)' }}>While competitors reply in 2 hours, our automation fires in 2 minutes — 24/7, no manual effort.</p>
          </FadeUp>
        </div>
        <StaggerChildren className="auto-cards">
          {CARDS.map(c => (
            <StaggerItem key={c.h} className="acard">
              <div className="ai">{c.icon}</div>
              <h4>{c.h}</h4>
              <p>{c.p}</p>
              <div className="atag">{c.tag}</div>
            </StaggerItem>
          ))}
        </StaggerChildren>
        <div style={{ textAlign:'center' }}>
          <Link href="/contact" className="btn btn-o">
            Build My Automation Stack
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
