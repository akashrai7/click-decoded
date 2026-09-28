// src/components/sections/ServicesSection.tsx
import Link from 'next/link'
import { FadeUp } from './MotionDiv'

const ArrowSvg = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export function ServicesSection() {
  return (
    <section id="services">
      <div className="wrap">
        <div className="sec-h">
          <FadeUp>
            <div className="pill pill-b">Our Services</div>
            <h2>Every Growth Lever.<br/>One Agency.</h2>
            <p>From search rankings to AI-powered lead follow-up — we do it all, or do it invisibly under your brand.</p>
          </FadeUp>
        </div>
        <div className="bento">

          <FadeUp className="bc bc-seo">
            <div className="bc-icon">🔍</div>
            <h3>SEO Services</h3>
            <p>Long-term organic visibility through technical audits, content strategy, and authoritative link building. No penalties, no shortcuts.</p>
            <div className="tag-row">
              <span className="tag">Technical SEO</span><span className="tag">Local SEO</span><span className="tag">E-comm SEO</span>
            </div>
            <Link href="/services/seo" className="bc-link">Explore SEO <ArrowSvg/></Link>
          </FadeUp>

          <FadeUp className="bc bc-ads" delay={0.1}>
            <div className="bc-icon">📢</div>
            <h3>Digital Marketing</h3>
            <p>Google Ads, Meta Ads &amp; social campaigns built for measurable ROI. Every rupee tracked, every campaign optimised.</p>
            <div className="tag-row">
              <span className="tag">Google Ads</span><span className="tag">Meta Ads</span><span className="tag">Shopping</span>
            </div>
            <Link href="/services/paid-ads" className="bc-link">Explore Ads <ArrowSvg/></Link>
          </FadeUp>

          <FadeUp className="bc bc-web" delay={0.2}>
            <div className="bc-icon">💻</div>
            <h3>Web Development</h3>
            <p>Fast, SEO-ready WordPress websites and conversion-focused landing pages built to perform at scale.</p>
            <div className="tag-row">
              <span className="tag">WordPress</span><span className="tag">WooCommerce</span><span className="tag">Landing Pages</span>
            </div>
            <Link href="/services/web-development" className="bc-link">Explore Web Dev <ArrowSvg/></Link>
          </FadeUp>

          <FadeUp className="bc bc-auto" style={{ background:'linear-gradient(135deg,var(--n),#162d4e)', borderColor:'transparent', color:'#fff' }}>
            <div className="bc-icon" style={{ background:'rgba(245,158,11,.2)' }}>🤖</div>
            <h3 style={{ color:'#fff' }}>AI &amp; Automation</h3>
            <p style={{ color:'rgba(255,255,255,.6)' }}>WhatsApp automation, n8n workflows and AI chatbots. Your leads get replies in 2 minutes, not 2 hours — 24/7.</p>
            <div className="tag-row">
              <span className="tag" style={{ background:'rgba(255,255,255,.08)',borderColor:'rgba(255,255,255,.1)',color:'rgba(255,255,255,.6)' }}>WhatsApp</span>
              <span className="tag" style={{ background:'rgba(255,255,255,.08)',borderColor:'rgba(255,255,255,.1)',color:'rgba(255,255,255,.6)' }}>n8n</span>
              <span className="tag" style={{ background:'rgba(255,255,255,.08)',borderColor:'rgba(255,255,255,.1)',color:'rgba(255,255,255,.6)' }}>Chatbots</span>
            </div>
            <Link href="/contact" className="bc-link" style={{ color:'var(--o)' }}>Build My Automation <ArrowSvg/></Link>
          </FadeUp>

          <FadeUp className="bc bc-geo" delay={0.1}>
            <div className="bc-icon" style={{ background:'linear-gradient(135deg,#7c3aed,var(--n))' }}>🚀</div>
            <h3>GEO / AI Search</h3>
            <p>Get cited in ChatGPT, Gemini, and Perplexity. We make your brand the answer that AI engines trust and recommend.</p>
            <div className="tag-row">
              <span className="tag">GEO</span><span className="tag">AEO</span><span className="tag">LLM Optimization</span><span className="tag">AI Citations</span>
            </div>
            <Link href="/services/geo" className="bc-link">Explore GEO <ArrowSvg/></Link>
          </FadeUp>

          {/* White label – full width */}
          <FadeUp className="bc bc-wl">
            <div>
              <div className="pill pill-b" style={{ marginBottom:16 }}>For Agencies</div>
              <h2>Your Silent<br/>Fulfilment Partner.</h2>
              <p>You sell. We deliver — SEO, PPC, web, GEO, and branded reports — all under your brand, never ours. NDA-backed, zero client contact.</p>
              <div className="wl-stats">
                <div className="wl-stat"><div className="ws-n">48h</div><div className="ws-l">Report turnaround</div></div>
                <div className="wl-stat"><div className="ws-n">0</div><div className="ws-l">Client contact ever</div></div>
                <div className="wl-stat"><div className="ws-n">100%</div><div className="ws-l">White label, always</div></div>
              </div>
            </div>
            <div className="wl-right">
              <h4 style={{ fontSize:16,color:'#fff',letterSpacing:'normal',textTransform:'none',marginBottom:6 }}>Partner Benefits</h4>
              <p style={{ color:'rgba(255,255,255,.45)',fontSize:13,marginBottom:18 }}>Everything you need to scale without the overhead.</p>
              <div className="wl-checks">
                <div className="wl-check">100% White Label — your brand on every deliverable</div>
                <div className="wl-check">NDA-backed confidentiality — zero client poaching</div>
                <div className="wl-check">Branded reports in 48 hours</div>
                <div className="wl-check">Scalable capacity — handle more without hiring</div>
              </div>
              <Link href="/contact" className="btn btn-o" style={{ marginTop:26 }}>
                Become a Partner <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}
