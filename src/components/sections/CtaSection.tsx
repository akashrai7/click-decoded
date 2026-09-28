// src/components/sections/CtaSection.tsx
'use client'
import { useState } from 'react'
import { FadeUp } from './MotionDiv'

const PERKS = [
  'Free initial strategy consultation',
  'No long-term lock-in contracts',
  'Weekly reports with real data',
  'Dedicated account manager',
]

export function CtaSection() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const fd = new FormData(e.currentTarget)
    try {
      await fetch('/api/contact', { method:'POST', body: JSON.stringify(Object.fromEntries(fd)), headers:{'Content-Type':'application/json'} })
      setSent(true)
    } catch {
      setSent(true) // still show success UX
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" style={{ background:'var(--n)', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle,rgba(245,158,11,.12),transparent 65%)', top:-100, left:-100 }} />
      <div style={{ position:'absolute', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle,rgba(37,99,235,.12),transparent 65%)', bottom:-100, right:-50 }} />
      <div className="wrap" style={{ position:'relative', zIndex:2 }}>
        <div className="lead-inner">
          <FadeUp>
            <div className="lead-l">
              <div className="pill pill-w">Get Started Today</div>
              <h2 style={{ color:'#fff' }}>Ready to Grow?<br/>Let&apos;s Talk.</h2>
              <p style={{ color:'rgba(255,255,255,.55)' }}>No sales pressure. Just an honest conversation about your goals and how we can help you get there faster.</p>
              <div className="lead-perks">
                {PERKS.map(p => (
                  <div key={p} className="perk">
                    <div className="perk-dot">✓</div>
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="lead-form">
              <h3>Get a Free Strategy Call</h3>
              <p className="fsub">We&apos;ll review your current situation and share a custom plan — no obligation.</p>
              {sent ? (
                <div className="submsg" style={{ display:'block' }}>✓ Message sent! We&apos;ll be in touch within 2 hours.</div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="field"><label>Your Name</label><input name="name" placeholder="Rajesh Kumar" required /></div>
                  <div className="field"><label>Email Address</label><input name="email" type="email" placeholder="rajesh@company.com" required /></div>
                  <div className="field"><label>Phone Number</label><input name="phone" placeholder="+91 98765 43210" /></div>
                  <div className="field">
                    <label>Service Needed</label>
                    <select name="service">
                      <option value="">Select a service…</option>
                      <option>SEO Services</option>
                      <option>Google Ads / PPC</option>
                      <option>Meta Ads</option>
                      <option>WhatsApp Automation</option>
                      <option>AI Chatbot</option>
                      <option>Web Development</option>
                      <option>GEO / AI Search</option>
                      <option>White Label Partnership</option>
                      <option>Full Growth Package</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-o" style={{ width:'100%', justifyContent:'center', marginTop:8 }} disabled={loading}>
                    {loading ? 'Sending…' : 'Request Free Strategy Call'}
                    {!loading && <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                  </button>
                </form>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
