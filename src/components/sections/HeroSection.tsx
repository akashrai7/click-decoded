// src/components/sections/HeroSection.tsx
'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

const SLIDES = [
  {
    badge: '🔍 SEO & Organic Growth',
    desc: 'Long-term rankings that compound month over month. Technical audits, content strategy, and authority building that puts your brand on Page 1 and keeps it there.',
    kpis: [{ val:'3×', lbl:'Avg Traffic Growth' }, { val:'89%', lbl:'Keywords in Top 10' }, { val:'0', lbl:'Penalty Risk' }],
    cta: 'Get Free SEO Audit',
  },
  {
    badge: '📢 Social Media & Paid Ads',
    desc: 'Google, Meta and LinkedIn campaigns built for measurable ROI — not vanity metrics. Every rupee tracked, every campaign optimised weekly with full transparency.',
    kpis: [{ val:'6.2×', lbl:'Avg ROAS' }, { val:'-38%', lbl:'Cost Per Lead' }, { val:'₹89', lbl:'Avg Lead Cost' }],
    cta: 'Get Campaign Audit',
  },
  {
    badge: '🤖 WhatsApp & AI Automation',
    desc: 'Never lose a lead to slow response again. AI chatbots and n8n workflows respond in seconds, qualify leads, and book appointments — while you sleep.',
    kpis: [{ val:'2 min', lbl:'Avg Response Time' }, { val:'94%', lbl:'Queries Resolved' }, { val:'4+', lbl:'Languages Supported' }],
    cta: 'Build My Bot',
  },
]

const TICKER = ['SEO Services','Google Ads','WhatsApp Automation','White Label SEO','GEO Optimization','Web Development','n8n Workflows','AI Chatbots','Meta Ads','Link Building','LLM Optimization','CRM Automation']

const ArrowSvg = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

function SeoCard() {
  return (
    <div className="sh-card">
      <div className="sh-card-accent" />
      <div className="sh-card-head">
        <div className="sh-card-icon">🔍</div>
        Organic Rankings Dashboard
        <span style={{marginLeft:'auto',fontSize:10,opacity:.4}}>Live · Updated daily</span>
      </div>
      <div className="sh-card-body">
        {[
          {kw:'b2b seo agency india',     pos:'▲ #1',note:'was 7', cls:'up'},
          {kw:'white label seo services', pos:'▲ #2',note:'was 11',cls:'up'},
          {kw:'digital marketing bhopal', pos:'▲ #1',note:'was 4', cls:'up'},
          {kw:'ai automation agency',     pos:'→ #3',note:'stable',cls:'same'},
        ].map(r => (
          <div key={r.kw} className="sh-kw-row">
            <span className="sh-kw-name">{r.kw}</span>
            <span className={`sh-kw-pos ${r.cls}`}>{r.pos} <span style={{fontSize:9,opacity:.5}}>{r.note}</span></span>
          </div>
        ))}
        <div className="sh-bars-wrap">
          <div className="sh-bars-label">Organic Traffic — Last 6 Months</div>
          <div className="sh-bars">
            {[32,45,52,65,80,100].map((h,i) => (
              <div key={i} className={`sh-bar${i===5?' hi':''}`} style={{height:`${h}%`}} />
            ))}
          </div>
        </div>
        <div style={{display:'flex',gap:12,marginTop:14}}>
          <span style={{fontSize:10.5,color:'var(--s)'}}>DA <strong style={{color:'var(--n-dark)'}}>54</strong></span>
          <span style={{fontSize:10.5,color:'var(--s)'}}>Backlinks <strong style={{color:'var(--n-dark)'}}>2.4k</strong></span>
          <span style={{fontSize:10.5,color:'#059669',fontWeight:600}}>✓ Zero Penalties</span>
        </div>
      </div>
    </div>
  )
}

function AdsCard() {
  return (
    <div className="sh-card">
      <div className="sh-card-accent" />
      <div className="sh-card-head">
        <div className="sh-card-icon">📊</div>
        Campaign Performance
        <span style={{marginLeft:'auto',fontSize:10,color:'var(--s)'}}>Meta + Google</span>
      </div>
      <div className="sh-card-body">
        <div className="sh-plat-row">
          <div className="sh-plat">🔵 Meta Ads</div>
          <div className="sh-plat">🔴 Google Ads</div>
          <div className="sh-plat">🟦 LinkedIn</div>
        </div>
        <div className="sh-stat-grid">
          <div className="sh-stat-box"><div className="sv">4.2L</div><div className="sl">Total Reach</div></div>
          <div className="sh-stat-box"><div className="sv">847</div><div className="sl">Conversions</div></div>
          <div className="sh-stat-box"><div className="sv">₹89</div><div className="sl">Cost / Lead</div></div>
          <div className="sh-stat-box"><div className="sv">3.8%</div><div className="sl">CTR (avg)</div></div>
        </div>
        <div className="sh-roas">
          <div>
            <div className="sh-roas-val">6.2×</div>
            <div className="sh-roas-lbl">Return on Ad Spend</div>
          </div>
          <svg width="80" height="36" viewBox="0 0 80 36" fill="none">
            <polyline points="0,30 13,24 26,20 39,14 52,9 65,5 80,1" stroke="#EE7E1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="0,30 13,24 26,20 39,14 52,9 65,5 80,1 80,36 0,36" fill="rgba(238,126,26,.08)"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

function WaCard() {
  return (
    <div className="sh-card">
      <div className="sh-card-accent" />
      <div className="sh-wa-bar">
        <div className="sh-online-dot" />
        WhatsApp AI Agent · Multilingual
        <span style={{marginLeft:'auto',fontSize:10,color:'var(--s)'}}>42 req/min</span>
      </div>
      <div className="sh-chat">
        <div className="sh-msg user">Hi, I need info about your pricing for SEO services.</div>
        <div className="sh-msg bot">👋 Hello! We offer customised SEO plans starting at ₹25,000/mo. May I know your website URL?</div>
        <div className="sh-msg user">clickdecoded.com — we&apos;re a B2B SaaS</div>
        <div className="sh-msg bot">Perfect! I&apos;ll schedule a free strategy call. Available: <strong>Mon 11am · Tue 3pm · Wed 10am</strong> — which works?</div>
      </div>
      <div className="sh-live-row">
        <div className="sh-live-badge"><div className="lv">94%</div><div className="ll">Resolved</div></div>
        <div className="sh-live-badge"><div className="lv">2 min</div><div className="ll">Avg Reply</div></div>
        <div className="sh-live-badge"><div className="lv">4</div><div className="ll">Languages</div></div>
        <div className="sh-live-badge"><div className="lv">24/7</div><div className="ll">Active</div></div>
      </div>
    </div>
  )
}

const CARDS = [SeoCard, AdsCard, WaCard]

export function HeroSection() {
  const [active,  setActive]  = useState(0)
  const [exiting, setExiting] = useState<number | null>(null)

  const goTo = useCallback((next: number) => {
    setActive(cur => {
      if (next === cur) return cur
      setExiting(cur)
      setTimeout(() => setExiting(null), 750)
      return next
    })
  }, [])

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => {
      setActive(cur => {
        const next = (cur + 1) % 3
        setExiting(cur)
        setTimeout(() => setExiting(null), 750)
        return next
      })
    }, 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="scroll-hero-sticky" id="home">
      <div className="sh-glow-l" />
      <div className="sh-glow-r" />

      {/* LEFT */}
      <div className="sh-left">
        <div className="sh-eyebrow">🇮🇳 India&apos;s Premier B2B Growth Agency</div>

        <h1 className="sh-h1">
          We Handle<br/>the Digital.<br/>
          <em>You Handle<br/>the Business.</em>
        </h1>

        <div className="sh-dots">
          {[0,1,2].map(i => (
            <button key={i} className={`sh-dot${i===active?' active':''}`} onClick={() => goTo(i)} aria-label={`Slide ${i+1}`} />
          ))}
        </div>

        <div className="sh-slides-wrap">
          {SLIDES.map((slide, i) => (
            <div key={i} className={`sh-slide${i===active?' active':''}${i===exiting?' exiting':''}`}>
              <div className="sh-svc-badge">{slide.badge}</div>
              <p className="sh-slide-desc">{slide.desc}</p>
              <div className="sh-kpis">
                {slide.kpis.map(k => (
                  <div key={k.lbl}>
                    <div className="sh-kpi-val">{k.val}</div>
                    <div className="sh-kpi-lbl">{k.lbl}</div>
                  </div>
                ))}
              </div>
              <div className="hero-btns">
                <Link href="/contact" className="btn btn-o">{slide.cta} <ArrowSvg /></Link>
                <Link href="#services" className="btn btn-ghost">All Services</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TICKER — full width, row 2 */}
      <div className="ticker" style={{gridColumn:'1 / -1', gridRow:2}} aria-hidden="true">
        <div className="ticker-inner">
          {[...TICKER,...TICKER].map((t,i) => <span key={i}>{t}</span>)}
        </div>
      </div>

      {/* RIGHT PANELS */}
      <div className="sh-right">
        {CARDS.map((Card, i) => (
          <div key={i} className={`sh-panel${i===active?' active':''}${i===exiting?' exiting':''}`} data-panel={i}>
            <div className="sh-card-depth">
              <Card />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
