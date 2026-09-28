// src/components/sections/BlogSection.tsx
import Link from 'next/link'
import { StaggerChildren, StaggerItem } from './MotionDiv'
import { FadeUp } from './MotionDiv'

const POSTS = [
  {
    cat: 'White Label',
    bg: 'linear-gradient(135deg,var(--n),#2d4a7a)',
    date: 'June 2026',
    title: 'What is White Label SEO & How Does It Work for Agencies?',
    href: '/blog/what-is-white-label-seo',
  },
  {
    cat: 'Automation',
    bg: 'linear-gradient(135deg,#1a0a3a,var(--n))',
    date: 'June 2026',
    title: 'How WhatsApp Automation Cuts Lead Response Time from Hours to 2 Minutes',
    href: '/blog/whatsapp-automation-lead-response',
  },
  {
    cat: 'GEO / AI Search',
    bg: 'linear-gradient(135deg,#0d3320,#0a5c36)',
    date: 'May 2026',
    title: 'GEO vs SEO: How to Get Your Business Cited by ChatGPT and Gemini',
    href: '/blog/geo-vs-seo-chatgpt-gemini',
  },
]

const ArrowSvg = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export function BlogSection() {
  return (
    <section className="blog-section">
      <div className="wrap">
        <div className="sec-h">
          <FadeUp>
            <div className="pill pill-b">Resources</div>
            <h2>Insights &amp; Guides</h2>
            <p>Practical marketing knowledge from our team — no fluff, no gated content.</p>
          </FadeUp>
        </div>
        <StaggerChildren className="blog-grid">
          {POSTS.map(post => (
            <StaggerItem key={post.href} className="bcard">
              <div className="bcard-img" style={{ background: post.bg }}>
                <span className="bcard-cat">{post.cat}</span>
              </div>
              <div className="bcard-body">
                <div className="bcard-date">{post.date}</div>
                <h3>{post.title}</h3>
                <Link href={post.href} className="read">Read More <ArrowSvg /></Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
