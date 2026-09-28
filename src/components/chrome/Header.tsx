// src/components/chrome/Header.tsx
// 1:1 port of components/header.js v5 (HTML build): topbar + mega-menu nav + mobile drawer.
// Markup generated from header.js; nav interactions ported verbatim in useEffect.
'use client'

/* eslint-disable */
import { useEffect } from 'react'

export default function Header() {
  useEffect(() => {
    // Scroll shadow
    const hdr = document.getElementById('hdr')
    const onScroll = () => hdr && hdr.classList.toggle('up', window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })

    // Hamburger open / close / tap-outside
    const hb = document.getElementById('hb')
    const mn = document.getElementById('mnav')
    const mc = document.getElementById('mnav-close')
    const openNav = () => {
      if (!mn) return
      if (mn.parentNode !== document.body) document.body.appendChild(mn)
      mn.classList.add('on')
      document.body.style.overflow = 'hidden'
    }
    const closeNav = () => {
      if (!mn) return
      mn.classList.remove('on')
      document.body.style.overflow = ''
    }
    const onOutside = (e: MouseEvent) => { if (e.target === mn) closeNav() }
    hb?.addEventListener('click', openNav)
    mc?.addEventListener('click', closeNav)
    mn?.addEventListener('click', onOutside)

    // Close drawer on any link tap inside it (SPA navigation keeps it mounted)
    const onLink = (e: Event) => {
      if ((e.target as Element).closest('a')) closeNav()
    }
    mn?.addEventListener('click', onLink)

    // Mobile accordion
    const accBtns = Array.from(document.querySelectorAll('.ma > button'))
    const onAcc = (e: Event) => {
      const btn = e.currentTarget as HTMLElement
      const p = btn.parentElement as HTMLElement
      const open = p.classList.contains('on')
      document.querySelectorAll('.ma').forEach((x) => x.classList.remove('on'))
      if (!open) p.classList.add('on')
    }
    accBtns.forEach((b) => b.addEventListener('click', onAcc))

    return () => {
      window.removeEventListener('scroll', onScroll)
      hb?.removeEventListener('click', openNav)
      mc?.removeEventListener('click', closeNav)
      mn?.removeEventListener('click', onOutside)
      mn?.removeEventListener('click', onLink)
      accBtns.forEach((b) => b.removeEventListener('click', onAcc))
    }
  }, [])

  return (
    <>
      <div id="cd-sticky-shell" style={{ position: 'sticky', top: '0', zIndex: '200' }}><div className="topbar"><div className="topbar-inner"><div className="topbar-left"><a href="tel:+919407000101" className="topbar-item">📞 +91 94070 00101</a><a href="mailto:hello@clickdecoded.com" className="topbar-item">✉ hello@clickdecoded.com</a></div><div className="topbar-right"><a href="tel:+919407000101" className="tb-btn tb-call">📞 Call Now</a><a href="https://wa.me/919407000101" target="_blank" rel="noopener" className="tb-btn tb-wa">💬 WhatsApp</a></div></div></div><header id="hdr"><div className="wrap nav"><a href="/" style={{ flexShrink: '0' }}><img src="/images/clickdecoded.png" alt="Click Decoded" style={{ height: '44px', width: 'auto' }} /></a><ul className="dmenu"><li><a href="/">Home</a></li><li><a href="#">Services <svg className="dcar" viewBox="0 0 10 10" fill="none"><path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></a><div className="mega wide mega-services"><div className="mc"><h5>🔍 SEO</h5><a href="/services/seo">SEO Services</a><a href="/services/local-seo">Local SEO</a><a href="/services/technical-seo-audit">Technical SEO Audit</a><a href="/services/ecommerce-seo">E-Commerce SEO</a><a href="/services/link-building">Link Building</a><a href="/services/programmatic-seo">Programmatic SEO</a><a href="/services/gmb-marketing">Google My Business</a></div><div className="mc"><h5>💰 Paid Ads</h5><a href="/services/google-ads">Google Ads</a><a href="/services/meta-ads">Meta Ads (FB + IG)</a><a href="/services/youtube-ads">YouTube Ads</a><a href="/services/linkedin-ads">LinkedIn Ads</a><a href="/services/shopping-ads">Shopping Ads</a><a href="/services/retargeting">Retargeting</a></div><div className="mc"><h5>🤖 AI &amp; Auto</h5><a href="/services/ai-automation">AI Automation</a><a href="/services/whatsapp-automation">WhatsApp Automation</a><a href="/services/workflow-automation">n8n Workflows</a><a href="/services/ai-chatbot-development">AI Chatbot Dev</a><a href="/services/ai-ad-creatives">AI Ad Creatives</a><a href="/services/ai-content">AI Content Gen</a></div><div className="mc"><h5>🎬 Content</h5><a href="/services/virtual-tour">Virtual Tour</a><a href="/services/hd-photography">HD Photography</a><a href="/services/product-photography">Product Photography</a><a href="/services/drone-video">Drone Video</a><a href="/services/influencer-video">Influencer Video</a><a href="/services/email-marketing">Email Marketing</a><a href="/services/whatsapp-marketing">WhatsApp Marketing</a><a href="/services/blogging">Blogging &amp; Content</a></div><div className="mc"><h5>💻 Web &amp; Design</h5><a href="/services/web-development">Web Development</a><a href="/services/wordpress-development">WordPress Dev</a><a href="/services/ecommerce-development">E-Commerce Dev</a><a href="/services/landing-pages">Landing Pages</a><a href="/services/ui-ux">UI/UX Design</a></div><div className="mc"><h5>🚀 GEO / AI</h5><a href="/services/generative-engine-optimization">GEO Services</a><a href="/services/answer-engine-optimization">Answer Engine Opt</a><a href="/services/ai-search-optimization">LLM Optimization</a><a href="/services/ai-brand-visibility">AI Brand Visibility</a></div></div></li><li><a href="#">Industries <svg className="dcar" viewBox="0 0 10 10" fill="none"><path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></a><div className="mega slim"><a href="/industries/real-estate">Real Estate &amp; Builders<small>Property, developers &amp; brokers</small></a><a href="/industries/healthcare">Healthcare &amp; Clinics<small>Hospitals, doctors &amp; wellness</small></a><a href="/industries/education">Education &amp; EdTech<small>Coaching, schools &amp; courses</small></a><a href="/industries/ecommerce">E-Commerce &amp; Retail<small>Online stores &amp; D2C brands</small></a><a href="/industries/manufacturing">Manufacturing &amp; Industrial<small>B2B &amp; factory businesses</small></a><a href="/industries/it-saas">IT Services &amp; SaaS<small>Tech companies &amp; startups</small></a><a href="/industries/legal">Legal &amp; CA Firms<small>Lawyers, CAs &amp; consultants</small></a><a href="/industries/hospitality">Hospitality &amp; Travel<small>Hotels, resorts &amp; agencies</small></a></div></li><li><a href="#">White Label <svg className="dcar" viewBox="0 0 10 10" fill="none"><path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></a><div className="mega slim"><a href="/white-label/seo">White Label SEO<small>Full SEO under your brand</small></a><a href="/white-label/ppc">White Label PPC<small>Google &amp; Meta Ads reseller</small></a><a href="/white-label/web-development">White Label Web Dev<small>WordPress &amp; WooCommerce</small></a><a href="/white-label/geo">White Label GEO<small>AI-search visibility, resold</small></a><a href="/white-label/reporting">White Label Reporting<small>Branded client reports</small></a><a href="/white-label/ai">White Label AI &amp; Auto<small>n8n, chatbots &amp; workflows</small></a></div></li><li><a href="#">Company <svg className="dcar" viewBox="0 0 10 10" fill="none"><path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></a><div className="mega slim"><a href="/about">About Us<small>Team, story &amp; mission</small></a><a href="/honest">The Honest Page<small>No pitch. Just the plain truth.</small></a><a href="/how-we-work">How We Work<small>Our process, step by step</small></a><a href="/blog">Blog &amp; Insights<small>SEO, AI &amp; growth guides</small></a><a href="/pricing">Pricing &amp; How We Engage<small>Transparent quotes</small></a><a href="/careers">Careers<small>Join India's AI-first agency</small></a><a href="/contact">Contact Us<small>Start a project conversation</small></a></div></li></ul><div className="navcta"><a href="/contact" className="btn btn-o btn-sm">🚀 Get Free Strategy Call</a><button className="hb" id="hb" aria-label="Open menu"><span></span><span></span><span></span></button></div></div></header></div><div className="mnav" id="mnav"><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}><a href="/"><img src="/images/clickdecoded.png" alt="Click Decoded" style={{ height: '36px', width: 'auto' }} /></a><button id="mnav-close" style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#2A4573' }} aria-label="Close menu">✕</button></div><div className="ma"><a href="/" style={{ display: 'block', padding: '15px 0', fontSize: '15px', fontWeight: '600', color: 'var(--n)' }}>Home</a></div><div className="ma"><button>Services <span>+</span></button><div className="ms"><h6>🔍 SEO</h6><a href="/services/seo">SEO Services</a><a href="/services/local-seo">Local SEO</a><a href="/services/technical-seo-audit">Technical SEO Audit</a><a href="/services/ecommerce-seo">E-Commerce SEO</a><a href="/services/link-building">Link Building</a><a href="/services/programmatic-seo">Programmatic SEO</a><a href="/services/gmb-marketing">Google My Business</a><h6>💰 Paid Ads</h6><a href="/services/google-ads">Google Ads</a><a href="/services/meta-ads">Meta Ads (FB + IG)</a><a href="/services/youtube-ads">YouTube Ads</a><a href="/services/linkedin-ads">LinkedIn Ads</a><a href="/services/shopping-ads">Shopping Ads</a><a href="/services/retargeting">Retargeting</a><h6>🤖 AI &amp; Automation</h6><a href="/services/ai-automation">AI Automation</a><a href="/services/whatsapp-automation">WhatsApp Automation</a><a href="/services/workflow-automation">n8n Workflows</a><a href="/services/ai-chatbot-development">AI Chatbot Dev</a><a href="/services/ai-ad-creatives">AI Ad Creatives</a><a href="/services/ai-content">AI Content Gen</a><h6>🎬 Content</h6><a href="/services/virtual-tour">Virtual Tour</a><a href="/services/hd-photography">HD Photography</a><a href="/services/drone-video">Drone Video</a><a href="/services/influencer-video">Influencer Video</a><a href="/services/email-marketing">Email Marketing</a><a href="/services/whatsapp-marketing">WhatsApp Marketing</a><a href="/services/blogging">Blogging &amp; Content</a><h6>💻 Web &amp; Design</h6><a href="/services/web-development">Web Development</a><a href="/services/wordpress-development">WordPress Dev</a><a href="/services/ecommerce-development">E-Commerce Dev</a><a href="/services/landing-pages">Landing Pages</a><a href="/services/ui-ux">UI/UX Design</a><h6>🚀 GEO / AI Search</h6><a href="/services/generative-engine-optimization">GEO Services</a><a href="/services/answer-engine-optimization">Answer Engine Opt</a><a href="/services/ai-search-optimization">LLM Optimization</a><a href="/services/ai-brand-visibility">AI Brand Visibility</a></div></div><div className="ma"><button>Industries <span>+</span></button><div className="ms"><a href="/industries/real-estate">Real Estate &amp; Builders</a><a href="/industries/healthcare">Healthcare &amp; Clinics</a><a href="/industries/education">Education &amp; EdTech</a><a href="/industries/ecommerce">E-Commerce &amp; Retail</a><a href="/industries/manufacturing">Manufacturing &amp; Industrial</a><a href="/industries/it-saas">IT Services &amp; SaaS</a><a href="/industries/legal">Legal &amp; CA Firms</a><a href="/industries/hospitality">Hospitality &amp; Travel</a></div></div><div className="ma"><button>White Label <span>+</span></button><div className="ms"><a href="/white-label/seo">White Label SEO</a><a href="/white-label/ppc">White Label PPC</a><a href="/white-label/web-development">White Label Web Dev</a><a href="/white-label/geo">White Label GEO</a><a href="/white-label/reporting">White Label Reporting</a><a href="/white-label/ai">White Label AI &amp; Auto</a></div></div><div className="ma"><button>Company <span>+</span></button><div className="ms"><a href="/about">About Us</a><a href="/honest">The Honest Page</a><a href="/how-we-work">How We Work</a><a href="/blog">Blog &amp; Insights</a><a href="/pricing">Pricing</a><a href="/careers">Careers</a><a href="/contact">Contact Us</a></div></div><div style={{ marginTop: '22px', display: 'flex', flexDirection: 'column', gap: '10px' }}><a href="/contact" className="btn btn-o" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>🚀 Get Free Strategy Call</a><div style={{ display: 'flex', gap: '10px' }}><a href="tel:+919407000101" className="btn" style={{ flex: '1', justifyContent: 'center', background: '#f1f5f9', color: '#2A4573', fontSize: '13px', padding: '11px 16px' }}>📞 Call Now</a><a href="https://wa.me/919407000101" target="_blank" rel="noopener" className="btn btn-wa" style={{ flex: '1', justifyContent: 'center', fontSize: '13px', padding: '11px 16px' }}>💬 WhatsApp</a></div></div></div>
    </>
  )
}
