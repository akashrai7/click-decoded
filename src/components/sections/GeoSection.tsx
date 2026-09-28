// src/components/sections/GeoSection.tsx
import Link from 'next/link'
import { FadeUp } from './MotionDiv'

const PLATFORMS = [
  { icon:'🧠', name:'ChatGPT' }, { icon:'💎', name:'Gemini' }, { icon:'🔵', name:'Perplexity' },
  { icon:'🔍', name:'AI Overviews' }, { icon:'🤖', name:'Copilot' },
]
const CARDS = [
  { icon:'🎯', h:'Generative Engine Optimization',   p:'Optimize your content and authority signals so AI engines choose your brand as a cited source.' },
  { icon:'💬', h:'Answer Engine Optimization (AEO)', p:'Structure your content as direct answers to the questions your customers are asking AI.' },
  { icon:'🔗', h:'LLM Optimization & Entity Markup', p:'Build the entity associations and schema signals that large language models rely on.' },
  { icon:'📊', h:'AI Brand Mention Tracking',        p:'Monitor when and how AI engines mention your brand — and improve it over time.' },
]

export function GeoSection() {
  return (
    <section style={{ background:'var(--bg)' }}>
      <div className="wrap">
        <div className="geo-grid">
          <FadeUp>
            <div className="pill pill-b">GEO / AI Search</div>
            <h2>Get Found in<br/>AI-Powered Search.</h2>
            <p>The next frontier of SEO isn&apos;t just Google. ChatGPT, Gemini, Perplexity and Google AI Overviews now answer questions directly. We ensure your brand is the one they cite.</p>
            <div className="geo-platforms">
              {PLATFORMS.map(p => (
                <div key={p.name} className="gp"><span className="gi">{p.icon}</span>{p.name}</div>
              ))}
            </div>
            <Link href="/contact" className="btn btn-n">
              Get GEO Strategy
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="geo-right">
              {CARDS.map(c => (
                <div key={c.h} className="geo-card">
                  <div className="gc-icon">{c.icon}</div>
                  <div><h4>{c.h}</h4><p>{c.p}</p></div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
