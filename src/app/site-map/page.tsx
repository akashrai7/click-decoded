/* eslint-disable */
// src/app/site-map/page.tsx — generated from sitemap.html (do not edit header/footer here)
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Sitemap — Click Decoded | All Pages",
  description: "Complete sitemap of Click Decoded — browse all pages by category including services, industries, locations, white label and blog.",
  alternates: { canonical: "/site-map" },
}

const css = `
:root{--n:#2A4573;--dark:#0f1e38;--o:#EE7E1A;--bg:#F4F7FC;--bdr:#E2E8F0;--m:#475569;--s:#64748b;}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:#1E293B;-webkit-font-smoothing:antialiased;}
a{text-decoration:none;color:inherit;}

/* NAV */
.topbar{background:var(--dark);height:44px;display:flex;align-items:center;padding:0 40px;justify-content:space-between;}
.tb-brand{color:#fff;font-weight:800;font-size:15px;letter-spacing:-.02em;}
.tb-brand span{color:var(--o);}
.tb-link{font-size:12px;color:rgba(255,255,255,.5);transition:.15s;}
.tb-link:hover{color:var(--o);}

/* HERO */
.hero{
  background:linear-gradient(135deg,var(--n) 0%,#162d52 55%,var(--dark) 100%);
  padding:60px 40px 52px;
  position:relative;overflow:hidden;
}
.hero::before{content:'';position:absolute;width:500px;height:500px;border-radius:50%;
  background:radial-gradient(circle,rgba(238,126,26,.18),transparent 65%);top:-120px;right:-80px;}
.hero::after{content:'';position:absolute;width:350px;height:350px;border-radius:50%;
  background:radial-gradient(circle,rgba(99,102,241,.12),transparent 65%);bottom:-80px;left:8%;}
.hero-inner{max-width:1140px;margin:0 auto;position:relative;z-index:1;}
.hero-tag{display:inline-flex;align-items:center;gap:6px;background:rgba(238,126,26,.15);
  border:1px solid rgba(238,126,26,.25);color:var(--o);padding:5px 14px;border-radius:99px;
  font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:18px;}
.hero h1{font-size:38px;font-weight:900;color:#fff;letter-spacing:-.035em;line-height:1.1;margin-bottom:10px;}
.hero h1 em{color:var(--o);font-style:normal;}
.hero p{color:rgba(255,255,255,.5);font-size:14px;margin-bottom:32px;line-height:1.6;max-width:520px;}
.stats-row{display:flex;gap:0;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);
  border-radius:14px;overflow:hidden;width:fit-content;}
.stat{padding:14px 28px;border-right:1px solid rgba(255,255,255,.1);text-align:center;}
.stat:last-child{border-right:none;}
.sn{font-size:24px;font-weight:900;color:var(--o);}
.sl{font-size:10.5px;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:.08em;margin-top:3px;}

/* XML LINKS BAR */
.xml-bar{background:rgba(255,255,255,.04);border-top:1px solid rgba(255,255,255,.08);
  padding:14px 40px;display:flex;align-items:center;gap:10px;flex-wrap:wrap;}
.xml-bar-label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.3);margin-right:6px;}
.xml-chip{display:inline-flex;align-items:center;gap:5px;padding:5px 12px;border-radius:8px;
  background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);
  font-size:11.5px;font-weight:600;color:rgba(255,255,255,.6);transition:.15s;}
.xml-chip:hover{background:rgba(238,126,26,.15);border-color:rgba(238,126,26,.3);color:var(--o);}
.xml-chip svg{opacity:.5;}

/* MAIN */
.wrap{max-width:1140px;margin:0 auto;padding:48px 40px;}

/* CATEGORY SECTIONS */
.cat-section{margin-bottom:48px;}
.cat-head{display:flex;align-items:center;gap:14px;margin-bottom:20px;padding-bottom:16px;
  border-bottom:2px solid var(--bdr);}
.cat-icon{width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;
  font-size:20px;flex-shrink:0;}
.cat-icon-n{background:linear-gradient(135deg,var(--n),#1e3460);}
.cat-icon-o{background:linear-gradient(135deg,#f59e0b,var(--o));}
.cat-icon-g{background:linear-gradient(135deg,#059669,#10b981);}
.cat-icon-p{background:linear-gradient(135deg,#7c3aed,#6366f1);}
.cat-icon-r{background:linear-gradient(135deg,#dc2626,#ef4444);}
.cat-icon-b{background:linear-gradient(135deg,#0284c7,#0ea5e9);}
.cat-title{font-size:19px;font-weight:800;color:var(--n);}
.cat-desc{font-size:13px;color:var(--s);margin-top:2px;}
.cat-count{margin-left:auto;background:rgba(42,69,115,.1);color:var(--n);
  padding:4px 12px;border-radius:99px;font-size:11.5px;font-weight:700;}

/* URL GRID */
.url-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:10px;}
.url-card{
  background:#fff;border:1px solid var(--bdr);border-radius:12px;
  padding:14px 16px;display:flex;align-items:center;gap:12px;
  transition:all .18s;position:relative;overflow:hidden;
}
.url-card::before{
  content:'';position:absolute;left:0;top:0;bottom:0;width:3px;
  background:linear-gradient(180deg,var(--n),var(--o));
  opacity:0;transition:.18s;
}
.url-card:hover{border-color:rgba(42,69,115,.25);box-shadow:0 4px 20px rgba(42,69,115,.1);transform:translateY(-1px);}
.url-card:hover::before{opacity:1;}
.url-icon{width:34px;height:34px;border-radius:8px;background:var(--bg);
  display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0;}
.url-info{flex:1;min-width:0;}
.url-title{font-size:13.5px;font-weight:600;color:var(--n);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.url-path{font-size:11px;color:var(--s);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.url-arrow{color:var(--s);font-size:14px;flex-shrink:0;transition:.15s;}
.url-card:hover .url-arrow{color:var(--o);}

/* PRIORITY BADGE */
.prio{position:absolute;top:10px;right:10px;font-size:9.5px;font-weight:700;
  padding:2px 7px;border-radius:99px;}
.p-high{background:rgba(16,185,129,.1);color:#059669;}
.p-med{background:rgba(99,102,241,.1);color:#6366f1;}
.p-low{background:rgba(100,116,139,.1);color:var(--s);}

/* FOOTER */
.page-footer{background:var(--dark);padding:24px 40px;display:flex;
  align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;}
.pf-l{font-size:12px;color:rgba(255,255,255,.35);}
.pf-l a{color:var(--o);}
.pf-r{display:flex;gap:8px;}
.pf-btn{font-size:11.5px;font-weight:700;padding:7px 14px;border-radius:8px;
  background:rgba(238,126,26,.15);border:1px solid rgba(238,126,26,.25);color:var(--o);transition:.15s;}
.pf-btn:hover{background:var(--o);color:#fff;}

@media(max-width:768px){
  .hero{padding:40px 20px 36px;}
  .hero h1{font-size:26px;}
  .xml-bar{padding:12px 20px;}
  .wrap{padding:32px 20px;}
  .stats-row{flex-wrap:wrap;}
  .url-grid{grid-template-columns:1fr;}
  .page-footer{padding:20px;}
}
`

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="hero">
<div className="hero-inner">
<a href="/" style={{ display: 'inline-block', marginBottom: '24px' }}>
<img src="/images/logo-white.svg" alt="Click Decoded" style={{ height: '38px' }} />
</a>
<div className="hero-tag">🗺 Site Map</div>
<h1>Every Page on<br /><em>Click Decoded</em></h1>
<p>Complete index of all pages — organized by category for humans and search engines. Last updated: June 2026.</p>
<div className="stats-row">
<div className="stat"><div className="sn">96+</div><div className="sl">Total Pages</div></div>
<div className="stat"><div className="sn">6</div><div className="sl">Categories</div></div>
<div className="stat"><div className="sn">2</div><div className="sl">Cities</div></div>
<div className="stat"><div className="sn">11</div><div className="sl">Industries</div></div>
</div>
</div>
</div>
      <div className="xml-bar">
<span className="xml-bar-label">XML Sitemaps →</span>
<a href="sitemap.xml" className="xml-chip">📄 Index</a>
<a href="sitemap-core.xml" className="xml-chip">🏠 Core</a>
<a href="sitemap-services.xml" className="xml-chip">⚙️ Services</a>
<a href="sitemap-locations.xml" className="xml-chip">📍 Locations</a>
<a href="sitemap-industries.xml" className="xml-chip">🏭 Industries</a>
<a href="sitemap-whitelabel.xml" className="xml-chip">🤝 White Label</a>
<a href="sitemap-blog.xml" className="xml-chip">✍️ Blog</a>
</div>
      <div className="wrap">

<div className="cat-section">
<div className="cat-head">
<div className="cat-icon cat-icon-n">🏠</div>
<div>
<div className="cat-title">Core Pages</div>
<div className="cat-desc">Main website pages — home, about, pricing, contact</div>
</div>
<div className="cat-count">13 pages</div>
</div>
<div className="url-grid">
<a href="/" className="url-card"><div className="url-icon">🏠</div><div className="url-info"><div className="url-title">Home</div><div className="url-path">clickdecoded.com/</div></div><div className="url-arrow">→</div><span className="prio p-high">1.0</span></a>
<a href="/about" className="url-card"><div className="url-icon">👥</div><div className="url-info"><div className="url-title">About Us</div><div className="url-path">/about</div></div><div className="url-arrow">→</div><span className="prio p-high">0.8</span></a>
<a href="/contact" className="url-card"><div className="url-icon">📞</div><div className="url-info"><div className="url-title">Contact</div><div className="url-path">/contact</div></div><div className="url-arrow">→</div><span className="prio p-high">0.9</span></a>
<a href="/pricing" className="url-card"><div className="url-icon">💰</div><div className="url-info"><div className="url-title">Pricing</div><div className="url-path">/pricing</div></div><div className="url-arrow">→</div><span className="prio p-high">0.8</span></a>
<a href="/our-work" className="url-card"><div className="url-icon">🏆</div><div className="url-info"><div className="url-title">Our Work</div><div className="url-path">/our-work</div></div><div className="url-arrow">→</div><span className="prio p-med">0.7</span></a>
<a href="/how-we-work" className="url-card"><div className="url-icon">⚡</div><div className="url-info"><div className="url-title">How We Work</div><div className="url-path">/how-we-work</div></div><div className="url-arrow">→</div><span className="prio p-med">0.7</span></a>
<a href="/service-areas" className="url-card"><div className="url-icon">📍</div><div className="url-info"><div className="url-title">Service Areas</div><div className="url-path">/service-areas</div></div><div className="url-arrow">→</div><span className="prio p-med">0.7</span></a>
<a href="/honest" className="url-card"><div className="url-icon">🤝</div><div className="url-info"><div className="url-title">Our Promise</div><div className="url-path">/honest</div></div><div className="url-arrow">→</div><span className="prio p-med">0.6</span></a>
<a href="/careers" className="url-card"><div className="url-icon">💼</div><div className="url-info"><div className="url-title">Careers</div><div className="url-path">/careers</div></div><div className="url-arrow">→</div><span className="prio p-med">0.6</span></a>
<a href="/internship" className="url-card"><div className="url-icon">🎓</div><div className="url-info"><div className="url-title">Internship</div><div className="url-path">/internship</div></div><div className="url-arrow">→</div><span className="prio p-low">0.5</span></a>
<a href="/legal/privacy" className="url-card"><div className="url-icon">🔒</div><div className="url-info"><div className="url-title">Privacy Policy</div><div className="url-path">/privacy</div></div><div className="url-arrow">→</div><span className="prio p-low">0.3</span></a>
<a href="/legal/terms" className="url-card"><div className="url-icon">📋</div><div className="url-info"><div className="url-title">Terms of Service</div><div className="url-path">/terms</div></div><div className="url-arrow">→</div><span className="prio p-low">0.3</span></a>
<a href="/legal/cookie-policy" className="url-card"><div className="url-icon">🍪</div><div className="url-info"><div className="url-title">Cookie Policy</div><div className="url-path">/cookie-policy</div></div><div className="url-arrow">→</div><span className="prio p-low">0.3</span></a>
</div>
</div>

<div className="cat-section">
<div className="cat-head">
<div className="cat-icon cat-icon-o">⚙️</div>
<div>
<div className="cat-title">Services</div>
<div className="cat-desc">SEO, Ads, Web Development, AI Automation, GEO &amp; more</div>
</div>
<div className="cat-count">37 pages</div>
</div>
<div className="url-grid">
<a href="/services/seo" className="url-card"><div className="url-icon">🔍</div><div className="url-info"><div className="url-title">SEO Services</div><div className="url-path">/seo-services</div></div><div className="url-arrow">→</div><span className="prio p-high">0.9</span></a>
<a href="/services/local-seo" className="url-card"><div className="url-icon">📍</div><div className="url-info"><div className="url-title">Local SEO</div><div className="url-path">/local-seo</div></div><div className="url-arrow">→</div><span className="prio p-high">0.9</span></a>
<a href="/services/technical-seo-audit" className="url-card"><div className="url-icon">🔧</div><div className="url-info"><div className="url-title">Technical SEO Audit</div><div className="url-path">/technical-seo-audit</div></div><div className="url-arrow">→</div><span className="prio p-high">0.8</span></a>
<a href="/services/link-building" className="url-card"><div className="url-icon">🔗</div><div className="url-info"><div className="url-title">Link Building</div><div className="url-path">/link-building</div></div><div className="url-arrow">→</div><span className="prio p-high">0.8</span></a>
<a href="/services/ecommerce-seo" className="url-card"><div className="url-icon">🛒</div><div className="url-info"><div className="url-title">Ecommerce SEO</div><div className="url-path">/ecommerce-seo</div></div><div className="url-arrow">→</div><span className="prio p-high">0.8</span></a>
<a href="/services/programmatic-seo" className="url-card"><div className="url-icon">⚡</div><div className="url-info"><div className="url-title">Programmatic SEO</div><div className="url-path">/programmatic-seo</div></div><div className="url-arrow">→</div><span className="prio p-high">0.8</span></a>
<a href="/services/google-ads" className="url-card"><div className="url-icon">🎯</div><div className="url-info"><div className="url-title">Google Ads</div><div className="url-path">/google-ads</div></div><div className="url-arrow">→</div><span className="prio p-high">0.9</span></a>
<a href="/services/meta-ads" className="url-card"><div className="url-icon">📱</div><div className="url-info"><div className="url-title">Meta Ads</div><div className="url-path">/meta-ads</div></div><div className="url-arrow">→</div><span className="prio p-high">0.9</span></a>
<a href="/services/youtube-ads" className="url-card"><div className="url-icon">▶️</div><div className="url-info"><div className="url-title">YouTube Ads</div><div className="url-path">/youtube-ads</div></div><div className="url-arrow">→</div><span className="prio p-med">0.7</span></a>
<a href="/services/linkedin-ads" className="url-card"><div className="url-icon">💼</div><div className="url-info"><div className="url-title">LinkedIn Ads</div><div className="url-path">/linkedin-ads</div></div><div className="url-arrow">→</div><span className="prio p-med">0.7</span></a>
<a href="/services/shopping-ads" className="url-card"><div className="url-icon">🛍️</div><div className="url-info"><div className="url-title">Shopping Ads</div><div className="url-path">/shopping-ads</div></div><div className="url-arrow">→</div><span className="prio p-med">0.7</span></a>
<a href="/services/retargeting" className="url-card"><div className="url-icon">🔄</div><div className="url-info"><div className="url-title">Retargeting</div><div className="url-path">/retargeting</div></div><div className="url-arrow">→</div><span className="prio p-med">0.7</span></a>
<a href="/services/ai-ad-creatives" className="url-card"><div className="url-icon">🎨</div><div className="url-info"><div className="url-title">AI Ad Creatives</div><div className="url-path">/ai-ad-creatives</div></div><div className="url-arrow">→</div><span className="prio p-med">0.7</span></a>
<a href="/services/web-development" className="url-card"><div className="url-icon">💻</div><div className="url-info"><div className="url-title">Web Development</div><div className="url-path">/web-development</div></div><div className="url-arrow">→</div><span className="prio p-high">0.9</span></a>
<a href="/services/ecommerce-development" className="url-card"><div className="url-icon">🛒</div><div className="url-info"><div className="url-title">Ecommerce Development</div><div className="url-path">/ecommerce-development</div></div><div className="url-arrow">→</div><span className="prio p-high">0.8</span></a>
<a href="/services/wordpress-development" className="url-card"><div className="url-icon">🌐</div><div className="url-info"><div className="url-title">WordPress Development</div><div className="url-path">/wordpress-development</div></div><div className="url-arrow">→</div><span className="prio p-high">0.8</span></a>
<a href="/services/landing-pages" className="url-card"><div className="url-icon">📄</div><div className="url-info"><div className="url-title">Landing Pages</div><div className="url-path">/landing-pages</div></div><div className="url-arrow">→</div><span className="prio p-high">0.8</span></a>
<a href="/services/ui-ux" className="url-card"><div className="url-icon">🎨</div><div className="url-info"><div className="url-title">UI/UX Design</div><div className="url-path">/ui-ux</div></div><div className="url-arrow">→</div><span className="prio p-med">0.7</span></a>
<a href="/services/ai-automation" className="url-card"><div className="url-icon">🤖</div><div className="url-info"><div className="url-title">AI Automation</div><div className="url-path">/ai-automation</div></div><div className="url-arrow">→</div><span className="prio p-high">0.9</span></a>
<a href="/services/ai-chatbot-development" className="url-card"><div className="url-icon">💬</div><div className="url-info"><div className="url-title">AI Chatbot Development</div><div className="url-path">/ai-chatbot-development</div></div><div className="url-arrow">→</div><span className="prio p-high">0.8</span></a>
<a href="/services/whatsapp-automation" className="url-card"><div className="url-icon">📲</div><div className="url-info"><div className="url-title">WhatsApp Automation</div><div className="url-path">/whatsapp-automation</div></div><div className="url-arrow">→</div><span className="prio p-high">0.9</span></a>
<a href="/services/workflow-automation" className="url-card"><div className="url-icon">⚙️</div><div className="url-info"><div className="url-title">Workflow Automation</div><div className="url-path">/workflow-automation</div></div><div className="url-arrow">→</div><span className="prio p-high">0.8</span></a>
<a href="/services/generative-engine-optimization" className="url-card"><div className="url-icon">🧠</div><div className="url-info"><div className="url-title">GEO / Generative Engine Optimization</div><div className="url-path">/generative-engine-optimization</div></div><div className="url-arrow">→</div><span className="prio p-high">0.9</span></a>
<a href="/services/answer-engine-optimization" className="url-card"><div className="url-icon">💡</div><div className="url-info"><div className="url-title">Answer Engine Optimization</div><div className="url-path">/answer-engine-optimization</div></div><div className="url-arrow">→</div><span className="prio p-high">0.8</span></a>
<a href="/services/ai-search-optimization" className="url-card"><div className="url-icon">🔍</div><div className="url-info"><div className="url-title">AI Search Optimization</div><div className="url-path">/ai-search-optimization</div></div><div className="url-arrow">→</div><span className="prio p-high">0.8</span></a>
<a href="/services/ai-brand-visibility" className="url-card"><div className="url-icon">✨</div><div className="url-info"><div className="url-title">AI Brand Visibility</div><div className="url-path">/ai-brand-visibility</div></div><div className="url-arrow">→</div><span className="prio p-med">0.7</span></a>
<a href="/services/gmb-marketing" className="url-card"><div className="url-icon">🗺️</div><div className="url-info"><div className="url-title">GMB Marketing</div><div className="url-path">/gmb-marketing</div></div><div className="url-arrow">→</div><span className="prio p-high">0.8</span></a>
<a href="/services/email-marketing" className="url-card"><div className="url-icon">📧</div><div className="url-info"><div className="url-title">Email Marketing</div><div className="url-path">/email-marketing</div></div><div className="url-arrow">→</div><span className="prio p-med">0.7</span></a>
<a href="/services/whatsapp-marketing" className="url-card"><div className="url-icon">📲</div><div className="url-info"><div className="url-title">WhatsApp Marketing</div><div className="url-path">/whatsapp-marketing</div></div><div className="url-arrow">→</div><span className="prio p-med">0.7</span></a>
<a href="/services/blogging" className="url-card"><div className="url-icon">✍️</div><div className="url-info"><div className="url-title">Blogging Services</div><div className="url-path">/blogging</div></div><div className="url-arrow">→</div><span className="prio p-med">0.7</span></a>
<a href="/services/ai-content" className="url-card"><div className="url-icon">🤖</div><div className="url-info"><div className="url-title">AI Content</div><div className="url-path">/ai-content</div></div><div className="url-arrow">→</div><span className="prio p-med">0.7</span></a>
<a href="/services/hd-photography" className="url-card"><div className="url-icon">📸</div><div className="url-info"><div className="url-title">HD Photography</div><div className="url-path">/hd-photography</div></div><div className="url-arrow">→</div><span className="prio p-low">0.6</span></a>
<a href="/services/product-photography" className="url-card"><div className="url-icon">📦</div><div className="url-info"><div className="url-title">Product Photography</div><div className="url-path">/product-photography</div></div><div className="url-arrow">→</div><span className="prio p-low">0.6</span></a>
<a href="/services/drone-video" className="url-card"><div className="url-icon">🚁</div><div className="url-info"><div className="url-title">Drone Video</div><div className="url-path">/drone-video</div></div><div className="url-arrow">→</div><span className="prio p-low">0.6</span></a>
<a href="/services/influencer-video" className="url-card"><div className="url-icon">🎬</div><div className="url-info"><div className="url-title">Influencer Video</div><div className="url-path">/influencer-video</div></div><div className="url-arrow">→</div><span className="prio p-low">0.6</span></a>
<a href="/services/virtual-tour" className="url-card"><div className="url-icon">🏢</div><div className="url-info"><div className="url-title">Virtual Tour</div><div className="url-path">/virtual-tour</div></div><div className="url-arrow">→</div><span className="prio p-low">0.6</span></a>
<a href="/services/google-trusted-photography" className="url-card"><div className="url-icon">📷</div><div className="url-info"><div className="url-title">Google Trusted Photography</div><div className="url-path">/google-trusted-photography</div></div><div className="url-arrow">→</div><span className="prio p-low">0.6</span></a>
</div>
</div>

<div className="cat-section">
<div className="cat-head">
<div className="cat-icon cat-icon-g">🏭</div>
<div>
<div className="cat-title">Industries We Serve</div>
<div className="cat-desc">Sector-specific digital marketing solutions</div>
</div>
<div className="cat-count">11 pages</div>
</div>
<div className="url-grid">
<a href="/industries/healthcare" className="url-card"><div className="url-icon">🏥</div><div className="url-info"><div className="url-title">Healthcare</div><div className="url-path">/industry-healthcare</div></div><div className="url-arrow">→</div><span className="prio p-high">0.8</span></a>
<a href="/industries/education" className="url-card"><div className="url-icon">🎓</div><div className="url-info"><div className="url-title">Education</div><div className="url-path">/industry-education</div></div><div className="url-arrow">→</div><span className="prio p-high">0.8</span></a>
<a href="/industries/real-estate" className="url-card"><div className="url-icon">🏠</div><div className="url-info"><div className="url-title">Real Estate</div><div className="url-path">/industry-real-estate</div></div><div className="url-arrow">→</div><span className="prio p-high">0.8</span></a>
<a href="/industries/legal" className="url-card"><div className="url-icon">⚖️</div><div className="url-info"><div className="url-title">Legal</div><div className="url-path">/industry-legal</div></div><div className="url-arrow">→</div><span className="prio p-high">0.8</span></a>
<a href="/industries/finance" className="url-card"><div className="url-icon">💰</div><div className="url-info"><div className="url-title">Finance</div><div className="url-path">/industry-finance</div></div><div className="url-arrow">→</div><span className="prio p-high">0.8</span></a>
<a href="/industries/ecommerce" className="url-card"><div className="url-icon">🛒</div><div className="url-info"><div className="url-title">E-Commerce</div><div className="url-path">/industry-ecommerce</div></div><div className="url-arrow">→</div><span className="prio p-high">0.8</span></a>
<a href="/industries/it-saas" className="url-card"><div className="url-icon">💻</div><div className="url-info"><div className="url-title">IT / SaaS</div><div className="url-path">/industry-it-saas</div></div><div className="url-arrow">→</div><span className="prio p-high">0.8</span></a>
<a href="/industries/manufacturing" className="url-card"><div className="url-icon">🏗️</div><div className="url-info"><div className="url-title">Manufacturing</div><div className="url-path">/industry-manufacturing</div></div><div className="url-arrow">→</div><span className="prio p-med">0.7</span></a>
<a href="/industries/restaurants" className="url-card"><div className="url-icon">🍽️</div><div className="url-info"><div className="url-title">Restaurants</div><div className="url-path">/industry-restaurants</div></div><div className="url-arrow">→</div><span className="prio p-med">0.7</span></a>
<a href="/industries/hospitality" className="url-card"><div className="url-icon">🏨</div><div className="url-info"><div className="url-title">Hospitality</div><div className="url-path">/industry-hospitality</div></div><div className="url-arrow">→</div><span className="prio p-med">0.7</span></a>
<a href="/industries/automotive" className="url-card"><div className="url-icon">🚗</div><div className="url-info"><div className="url-title">Automotive</div><div className="url-path">/industry-automotive</div></div><div className="url-arrow">→</div><span className="prio p-med">0.7</span></a>
</div>
</div>

<div className="cat-section">
<div className="cat-head">
<div className="cat-icon cat-icon-p">🤝</div>
<div>
<div className="cat-title">White Label</div>
<div className="cat-desc">Agency-to-agency white label digital services</div>
</div>
<div className="cat-count">6 pages</div>
</div>
<div className="url-grid">
<a href="/white-label/seo" className="url-card"><div className="url-icon">🔍</div><div className="url-info"><div className="url-title">White Label SEO</div><div className="url-path">/whitelabel-seo</div></div><div className="url-arrow">→</div><span className="prio p-high">0.8</span></a>
<a href="/white-label/web-development" className="url-card"><div className="url-icon">💻</div><div className="url-info"><div className="url-title">White Label Web Dev</div><div className="url-path">/whitelabel-web-development</div></div><div className="url-arrow">→</div><span className="prio p-high">0.8</span></a>
<a href="/white-label/ppc" className="url-card"><div className="url-icon">🎯</div><div className="url-info"><div className="url-title">White Label PPC</div><div className="url-path">/whitelabel-ppc</div></div><div className="url-arrow">→</div><span className="prio p-high">0.8</span></a>
<a href="/white-label/ai" className="url-card"><div className="url-icon">🤖</div><div className="url-info"><div className="url-title">White Label AI</div><div className="url-path">/whitelabel-ai</div></div><div className="url-arrow">→</div><span className="prio p-high">0.8</span></a>
<a href="/white-label/geo" className="url-card"><div className="url-icon">🌐</div><div className="url-info"><div className="url-title">White Label GEO</div><div className="url-path">/whitelabel-geo</div></div><div className="url-arrow">→</div><span className="prio p-high">0.8</span></a>
<a href="/white-label/reporting" className="url-card"><div className="url-icon">📊</div><div className="url-info"><div className="url-title">White Label Reporting</div><div className="url-path">/whitelabel-reporting</div></div><div className="url-arrow">→</div><span className="prio p-med">0.7</span></a>
</div>
</div>

<div className="cat-section">
<div className="cat-head">
<div className="cat-icon cat-icon-r">📍</div>
<div>
<div className="cat-title">Location Pages</div>
<div className="cat-desc">City-specific service pages — Bhopal &amp; Indore</div>
</div>
<div className="cat-count">28 pages</div>
</div>
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
<div>
<div style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--s)', marginBottom: '12px', paddingLeft: '4px' }}>📌 Bhopal</div>
<div className="url-grid" style={{ gridTemplateColumns: '1fr' }}>
<a href="/locations/bhopal/digital-marketing" className="url-card"><div className="url-icon">📢</div><div className="url-info"><div className="url-title">Digital Marketing Bhopal</div></div><div className="url-arrow">→</div></a>
<a href="/locations/bhopal/seo" className="url-card"><div className="url-icon">🔍</div><div className="url-info"><div className="url-title">SEO Services Bhopal</div></div><div className="url-arrow">→</div></a>
<a href="/locations/bhopal/local-seo" className="url-card"><div className="url-icon">📍</div><div className="url-info"><div className="url-title">Local SEO Bhopal</div></div><div className="url-arrow">→</div></a>
<a href="/locations/bhopal/google-ads" className="url-card"><div className="url-icon">🎯</div><div className="url-info"><div className="url-title">Google Ads Bhopal</div></div><div className="url-arrow">→</div></a>
<a href="/locations/bhopal/meta-ads" className="url-card"><div className="url-icon">📱</div><div className="url-info"><div className="url-title">Meta Ads Bhopal</div></div><div className="url-arrow">→</div></a>
<a href="/locations/bhopal/web-development" className="url-card"><div className="url-icon">💻</div><div className="url-info"><div className="url-title">Web Development Bhopal</div></div><div className="url-arrow">→</div></a>
<a href="/locations/bhopal/wordpress-development" className="url-card"><div className="url-icon">🌐</div><div className="url-info"><div className="url-title">WordPress Dev Bhopal</div></div><div className="url-arrow">→</div></a>
<a href="/locations/bhopal/ecommerce-development" className="url-card"><div className="url-icon">🛒</div><div className="url-info"><div className="url-title">Ecommerce Dev Bhopal</div></div><div className="url-arrow">→</div></a>
<a href="/locations/bhopal/ai-automation" className="url-card"><div className="url-icon">🤖</div><div className="url-info"><div className="url-title">AI Automation Bhopal</div></div><div className="url-arrow">→</div></a>
<a href="/locations/bhopal/whatsapp-automation" className="url-card"><div className="url-icon">📲</div><div className="url-info"><div className="url-title">WhatsApp Automation Bhopal</div></div><div className="url-arrow">→</div></a>
<a href="/locations/bhopal/technical-seo-audit" className="url-card"><div className="url-icon">🔧</div><div className="url-info"><div className="url-title">Technical SEO Bhopal</div></div><div className="url-arrow">→</div></a>
<a href="/locations/bhopal/link-building" className="url-card"><div className="url-icon">🔗</div><div className="url-info"><div className="url-title">Link Building Bhopal</div></div><div className="url-arrow">→</div></a>
<a href="/locations/bhopal/ecommerce-seo" className="url-card"><div className="url-icon">🛍️</div><div className="url-info"><div className="url-title">Ecommerce SEO Bhopal</div></div><div className="url-arrow">→</div></a>
<a href="/locations/bhopal/social-media-marketing" className="url-card"><div className="url-icon">📣</div><div className="url-info"><div className="url-title">Social Media Bhopal</div></div><div className="url-arrow">→</div></a>
</div>
</div>
<div>
<div style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--s)', marginBottom: '12px', paddingLeft: '4px' }}>📌 Indore</div>
<div className="url-grid" style={{ gridTemplateColumns: '1fr' }}>
<a href="/locations/indore/digital-marketing" className="url-card"><div className="url-icon">📢</div><div className="url-info"><div className="url-title">Digital Marketing Indore</div></div><div className="url-arrow">→</div></a>
<a href="/locations/indore/seo" className="url-card"><div className="url-icon">🔍</div><div className="url-info"><div className="url-title">SEO Services Indore</div></div><div className="url-arrow">→</div></a>
<a href="/locations/indore/local-seo" className="url-card"><div className="url-icon">📍</div><div className="url-info"><div className="url-title">Local SEO Indore</div></div><div className="url-arrow">→</div></a>
<a href="/locations/indore/google-ads" className="url-card"><div className="url-icon">🎯</div><div className="url-info"><div className="url-title">Google Ads Indore</div></div><div className="url-arrow">→</div></a>
<a href="/locations/indore/meta-ads" className="url-card"><div className="url-icon">📱</div><div className="url-info"><div className="url-title">Meta Ads Indore</div></div><div className="url-arrow">→</div></a>
<a href="/locations/indore/web-development" className="url-card"><div className="url-icon">💻</div><div className="url-info"><div className="url-title">Web Development Indore</div></div><div className="url-arrow">→</div></a>
<a href="/locations/indore/wordpress-development" className="url-card"><div className="url-icon">🌐</div><div className="url-info"><div className="url-title">WordPress Dev Indore</div></div><div className="url-arrow">→</div></a>
<a href="/locations/indore/ecommerce-development" className="url-card"><div className="url-icon">🛒</div><div className="url-info"><div className="url-title">Ecommerce Dev Indore</div></div><div className="url-arrow">→</div></a>
<a href="/locations/indore/ai-automation" className="url-card"><div className="url-icon">🤖</div><div className="url-info"><div className="url-title">AI Automation Indore</div></div><div className="url-arrow">→</div></a>
<a href="/locations/indore/whatsapp-automation" className="url-card"><div className="url-icon">📲</div><div className="url-info"><div className="url-title">WhatsApp Automation Indore</div></div><div className="url-arrow">→</div></a>
<a href="/locations/indore/technical-seo-audit" className="url-card"><div className="url-icon">🔧</div><div className="url-info"><div className="url-title">Technical SEO Indore</div></div><div className="url-arrow">→</div></a>
<a href="/locations/indore/link-building" className="url-card"><div className="url-icon">🔗</div><div className="url-info"><div className="url-title">Link Building Indore</div></div><div className="url-arrow">→</div></a>
<a href="/locations/indore/ecommerce-seo" className="url-card"><div className="url-icon">🛍️</div><div className="url-info"><div className="url-title">Ecommerce SEO Indore</div></div><div className="url-arrow">→</div></a>
<a href="/locations/indore/social-media-marketing" className="url-card"><div className="url-icon">📣</div><div className="url-info"><div className="url-title">Social Media Indore</div></div><div className="url-arrow">→</div></a>
</div>
</div>
</div>
</div>

<div className="cat-section">
<div className="cat-head">
<div className="cat-icon cat-icon-b">✍️</div>
<div>
<div className="cat-title">Blog &amp; Resources</div>
<div className="cat-desc">Insights, guides and case studies from our team</div>
</div>
<div className="cat-count">1+ pages</div>
</div>
<div className="url-grid">
<a href="/blog" className="url-card"><div className="url-icon">📰</div><div className="url-info"><div className="url-title">Blog Home</div><div className="url-path">/blog</div></div><div className="url-arrow">→</div><span className="prio p-high">0.8</span></a>
</div>
</div>
</div>
      <div className="page-footer">
<div className="pf-l">© 2026 <a href="/">Click Decoded</a> (Aharnish Infotech Pvt. Ltd.) — Bhopal, India</div>
<div className="pf-r">
<a href="sitemap.xml" className="pf-btn">📄 sitemap.xml</a>
<a href="https://search.google.com/search-console" className="pf-btn" target="_blank">Submit to GSC →</a>
</div>
</div>
    </>
  )
}
