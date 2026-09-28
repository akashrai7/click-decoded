/* eslint-disable */
// src/app/how-we-work/page.tsx — generated from how-we-work.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "How We Work — Click Decoded | Our Process, Step by Step",
  description: "Transparent from day one. See exactly how Click Decoded works — from the first call to ongoing results. No black boxes, no guesswork.",
  alternates: { canonical: "/how-we-work" },
  openGraph: {
    title: "How We Work — Click Decoded",
    description: "From strategy to execution — here's the exact process we follow for every client. Transparent, structured, and built around real results.",
    url: "/how-we-work",
    type: "website",
  },
}

const css = `
:root{--n:#2A4573;--n2:#1e3460;--n-dark:#0f1e38;--o:#EE7E1A;--o2:#d46e12;--body:#1E293B;--m:#475569;--s:#64748b;--bg:#F4F7FC;--bdr:#E2E8F0;}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}html{scroll-behavior:smooth;overflow-x:hidden;}body{font-family:'Inter',system-ui,sans-serif;color:var(--body);background:#fff;-webkit-font-smoothing:antialiased;}a{text-decoration:none;color:inherit;}img,svg{display:block;}ul{list-style:none;}button{font-family:inherit;cursor:pointer;}
.wrap{max-width:1100px;margin:0 auto;padding:0 28px;}section{padding:80px 0;}h1,h2,h3,h4{font-weight:800;line-height:1.1;letter-spacing:-.025em;color:var(--n);}
.pill{display:inline-flex;align-items:center;gap:7px;padding:6px 14px;border-radius:99px;font-size:11.5px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;}
.pill-o{background:rgba(238,126,26,.12);color:var(--o);}
.btn{display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:10px;font-weight:700;font-size:14px;border:none;transition:all .18s;white-space:nowrap;cursor:pointer;}
.btn-o{background:var(--o);color:#fff;box-shadow:0 4px 18px rgba(238,126,26,.3);}.btn-o:hover{background:var(--o2);transform:translateY(-2px);}
.btn-ghost{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.3);}.btn-ghost:hover{background:rgba(255,255,255,.08);}
.topbar{background:var(--n-dark);padding:0;height:40px;display:flex;align-items:center;}
.topbar-inner{max-width:1200px;margin:0 auto;padding:0 28px;display:flex;justify-content:space-between;align-items:center;width:100%;}
.topbar-left{display:flex;gap:20px;}.topbar-left a{font-size:12px;color:rgba(255,255,255,.6);}
.topbar-right{display:flex;gap:8px;}
.tb-btn{display:inline-flex;align-items:center;gap:6px;padding:5px 12px;border-radius:6px;font-size:11.5px;font-weight:700;transition:.15s;}
.tb-call{background:rgba(238,126,26,.15);color:var(--o);border:1px solid rgba(238,126,26,.25);}.tb-wa{background:rgba(37,211,102,.15);color:#25D366;border:1px solid rgba(37,211,102,.25);}
.tb-call:hover{background:var(--o);color:#fff;}.tb-wa:hover{background:#25D366;color:#fff;}
#hdr{background:rgba(255,255,255,.97);backdrop-filter:blur(14px);border-bottom:1px solid var(--bdr);transition:box-shadow .2s;}#hdr.up{box-shadow:0 4px 32px rgba(13,27,42,.09);}
.nav{display:flex;align-items:center;justify-content:space-between;height:70px;gap:16px;}
.dmenu{display:flex;align-items:center;gap:2px;}.dmenu>li{position:relative;}
.dmenu>li>a{display:flex;align-items:center;gap:5px;padding:9px 12px;font-size:13.5px;font-weight:600;color:var(--n);border-radius:8px;transition:.15s;}.dmenu>li>a:hover{background:var(--bg);}
.dcar{width:10px;height:10px;opacity:.5;transition:transform .18s;flex-shrink:0;}.dmenu>li:hover .dcar{transform:rotate(180deg);}
.mega{position:absolute;top:calc(100% + 10px);left:50%;transform:translateX(-50%) translateY(10px);background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:26px;box-shadow:0 24px 64px rgba(13,27,42,.14);opacity:0;visibility:hidden;pointer-events:none;transition:opacity .18s,transform .18s;}
.mega.wide{width:940px;display:grid;grid-template-columns:repeat(5,1fr);gap:22px;}.mega.slim{width:296px;left:auto;right:0;transform:translateY(10px);}
.dmenu>li:hover .mega{opacity:1;visibility:visible;pointer-events:all;transform:translateX(-50%) translateY(0);}.dmenu>li:hover .mega.slim{transform:translateY(0);}
.dmenu>li::after{content:'';position:absolute;top:100%;left:-40px;right:-40px;height:14px;}
.mc h5{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--b);margin-bottom:11px;}
.mc a{display:block;position:relative;padding:5px 0 5px 11px;font-size:13px;font-weight:500;color:var(--body);transition:color .14s,padding-left .14s;}
.mc a::before{content:'';position:absolute;left:0;top:50%;transform:translateY(-50%);width:2px;height:0;border-radius:1px;background:var(--o);transition:height .15s;}
.mc a:hover{color:var(--o);padding-left:14px;}.mc a:hover::before{height:13px;}
.mega.slim a{display:block;padding:9px 36px 9px 12px;font-size:13px;font-weight:500;color:var(--body);border-radius:8px;transition:.15s;}.mega.slim a:hover{background:var(--bg);color:var(--o);}
.mega.slim a small{display:block;font-size:11px;color:var(--s);font-weight:400;margin-top:1px;}
.navcta{display:flex;align-items:center;gap:10px;}
.hb{background:none;border:none;display:none;flex-direction:column;gap:5px;padding:4px;}.hb span{display:block;width:22px;height:2px;background:var(--n);border-radius:1px;}
.mnav{display:none;position:fixed;inset:0;background:#fff;z-index:200;overflow-y:auto;padding:24px 22px 40px;}.mnav.on{display:block;}
.ma{border-bottom:1px solid var(--bdr);}.ma>button{width:100%;text-align:left;background:none;border:none;padding:15px 0;font-size:15px;font-weight:600;color:var(--n);display:flex;justify-content:space-between;}
.ms{display:none;padding:0 0 16px;}.ma.on .ms{display:block;}.ms a{display:block;padding:7px 0;font-size:14px;color:var(--m);}.ms h6{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--n);margin:12px 0 4px;}
.breadcrumb{background:var(--bg);padding:12px 0;border-bottom:1px solid var(--bdr);}
.bc-list{display:flex;align-items:center;gap:8px;font-size:12.5px;color:var(--s);list-style:none;}.bc-list a{color:var(--n);font-weight:500;}.bc-list a:hover{color:var(--o);}

/* HERO */
.hero{background:linear-gradient(155deg,#0a1628,#0f1e38,#07111f);padding:88px 0 72px;position:relative;overflow:hidden;}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 45% 55% at 75% 25%,rgba(238,126,26,.07),transparent 65%);}
.hero-inner{max-width:760px;margin:0 auto;text-align:center;position:relative;z-index:2;}
.hero-badge{display:inline-flex;align-items:center;gap:8px;padding:6px 16px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:rgba(255,255,255,.6);margin-bottom:22px;}
.hero h1{font-size:52px;color:#fff;margin-bottom:18px;}.hero h1 em{font-style:normal;color:var(--o);}
.hero-desc{font-size:17px;color:rgba(255,255,255,.55);line-height:1.8;max-width:600px;margin:0 auto;}

/* PROCESS STEPS */
.process-section{background:#fff;}
.step{display:grid;grid-template-columns:80px 1fr;gap:0;position:relative;margin-bottom:0;}
.step:not(:last-child)::after{content:'';position:absolute;left:39px;top:80px;bottom:-32px;width:2px;background:linear-gradient(to bottom,var(--o),rgba(238,126,26,.1));}
.step-left{display:flex;flex-direction:column;align-items:center;padding-top:6px;}
.step-num{width:52px;height:52px;border-radius:16px;background:var(--o);color:#fff;font-size:20px;font-weight:900;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 6px 20px rgba(238,126,26,.3);}
.step-right{padding:4px 0 48px 28px;}
.step-right h3{font-size:22px;margin-bottom:10px;display:flex;align-items:center;gap:12px;}
.step-em{font-size:24px;}
.step-right .step-sub{font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--o);margin-bottom:8px;}
.step-right p{font-size:15px;color:var(--m);line-height:1.8;margin-bottom:16px;}
.step-detail{display:flex;flex-direction:column;gap:8px;}
.sd-item{display:flex;gap:10px;align-items:flex-start;font-size:13.5px;color:var(--m);}
.sd-dot{width:20px;height:20px;border-radius:6px;background:rgba(238,126,26,.1);border:1px solid rgba(238,126,26,.2);display:flex;align-items:center;justify-content:center;font-size:10px;color:var(--o);flex-shrink:0;margin-top:1px;}
.step-tag{display:inline-flex;align-items:center;gap:5px;padding:5px 12px;background:var(--bg);border:1px solid var(--bdr);border-radius:7px;font-size:12px;font-weight:600;color:var(--n);margin-top:12px;margin-right:6px;}

/* WHAT YOU NEVER HAVE TO DEAL WITH */
.promise-section{background:var(--bg);}
.promise-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.promise-card{background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:26px 22px;}
.promise-card h4{font-size:15px;margin-bottom:9px;display:flex;align-items:center;gap:9px;}
.promise-card p{font-size:13.5px;color:var(--m);line-height:1.7;}

/* TIMELINE SUMMARY */
.timeline-section{background:#fff;}
.tl-bar{display:flex;gap:0;border:1px solid var(--bdr);border-radius:16px;overflow:hidden;}
.tl-phase{flex:1;padding:20px 18px;border-right:1px solid var(--bdr);text-align:center;}
.tl-phase:last-child{border-right:none;}
.tl-phase.active{background:linear-gradient(135deg,rgba(238,126,26,.06),rgba(42,69,115,.04));}
.tl-phase-label{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--s);margin-bottom:6px;}
.tl-phase-time{font-size:18px;font-weight:900;color:var(--n);}
.tl-phase-name{font-size:12px;color:var(--m);margin-top:3px;}

/* CTA */
.cta-section{background:linear-gradient(135deg,var(--n-dark),#162d4e);padding:72px 0;text-align:center;}
.cta-section h2{font-size:34px;color:#fff;margin-bottom:14px;}
.cta-section p{font-size:16px;color:rgba(255,255,255,.55);margin-bottom:30px;line-height:1.7;max-width:500px;margin-left:auto;margin-right:auto;}

/* FOOTER */
footer{background:var(--n-dark);padding:64px 0 0;}
.fg{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:40px;}
.fb-desc{font-size:13.5px;color:rgba(255,255,255,.4);line-height:1.7;margin:16px 0 20px;}
.socials{display:flex;gap:10px;}
.socials a{width:34px;height:34px;border-radius:8px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:rgba(255,255,255,.5);transition:.15s;}
.socials a:hover{background:var(--o);color:#fff;border-color:var(--o);}
footer h4{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.35);margin-bottom:16px;}
.fl{display:flex;flex-direction:column;gap:8px;}.fl a,.fc a{font-size:13.5px;color:rgba(255,255,255,.5);transition:.15s;}.fl a:hover,.fc a:hover{color:#fff;}
.fc{display:flex;flex-direction:column;gap:10px;}
.footer-main{padding-bottom:40px;}
.footer-bottom{border-top:1px solid rgba(255,255,255,.07);padding:20px 0;display:flex;justify-content:space-between;align-items:center;font-size:12px;color:rgba(255,255,255,.3);flex-wrap:wrap;gap:8px;}
.footer-areas{padding:20px 0;border-top:1px solid rgba(255,255,255,.06);font-size:12px;color:rgba(255,255,255,.25);display:flex;gap:8px;flex-wrap:wrap;align-items:center;}
.footer-areas b{color:rgba(255,255,255,.4);}.footer-areas a{color:rgba(255,255,255,.25);transition:.15s;}.footer-areas a:hover{color:rgba(255,255,255,.6);}
.rv{opacity:0;transform:translateY(24px);transition:opacity .5s ease,transform .5s ease;}.rv.in{opacity:1;transform:none;}
.rv2{opacity:0;transform:translateY(24px);transition:opacity .5s ease .1s,transform .5s ease .1s;}.rv2.in{opacity:1;transform:none;}
.rv3{opacity:0;transform:translateY(24px);transition:opacity .5s ease .2s,transform .5s ease .2s;}.rv3.in{opacity:1;transform:none;}
@media(max-width:900px){.step{grid-template-columns:60px 1fr;}.promise-grid{grid-template-columns:1fr 1fr;}.tl-bar{flex-direction:column;}.tl-phase{border-right:none;border-bottom:1px solid var(--bdr);}.fg{grid-template-columns:1fr 1fr;}}
@media(max-width:600px){.promise-grid{grid-template-columns:1fr;}.step{grid-template-columns:50px 1fr;}.hero h1{font-size:36px;}.hb{display:flex;}.dmenu{display:none;}}
`

const ld0 = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.clickdecoded.com/how-we-work",
      "name": "How We Work",
      "description": "Transparent from day one. See exactly how Click Decoded works — from the first call to ongoing results. No black boxes, no guesswork.",
      "url": "https://www.clickdecoded.com/how-we-work",
      "publisher": {
        "@type": "Organization",
        "name": "Click Decoded",
        "url": "https://www.clickdecoded.com"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.clickdecoded.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "How We Work",
          "item": "https://www.clickdecoded.com/how-we-work"
        }
      ]
    }
  ]
}`

const js0 = `(function(){
const obs=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('in');});},{threshold:.1});
document.querySelectorAll('.rv,.rv2,.rv3').forEach(el=>obs.observe(el));
const hdr=document.getElementById('hdr');if(hdr)window.addEventListener('scroll',()=>hdr.classList.toggle('up',scrollY>40),{passive:true});
})();`

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld0 }} />
      <nav className="breadcrumb"><div className="wrap"><ol className="bc-list"><li><a href="/">Home</a></li><li>›</li><li><a href="/about">About</a></li><li>›</li><li>How We Work</li></ol></div></nav>
      <section className="hero">
<div className="hero-inner">
<div className="hero-badge">🔍 Transparent by design</div>
<h1>No Black Boxes.<br />Here's <em>Exactly</em><br />How We Work.</h1>
<p className="hero-desc">Most agencies keep their process vague on purpose. We don't. Every step, every deliverable, every communication touchpoint — laid out clearly, so you always know what's happening and why.</p>
</div>
</section>
      <section style={{ padding: '40px 0', background: 'var(--bg)', borderBottom: '1px solid var(--bdr)' }}>
<div className="wrap rv">
<p style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--s)', textAlign: 'center', marginBottom: '20px' }}>Typical Engagement Timeline</p>
<div className="tl-bar">
<div className="tl-phase active"><div className="tl-phase-label">Step 1</div><div className="tl-phase-time">Day 1</div><div className="tl-phase-name">Discovery Call</div></div>
<div className="tl-phase"><div className="tl-phase-label">Step 2</div><div className="tl-phase-time">Day 2–3</div><div className="tl-phase-name">Audit &amp; Proposal</div></div>
<div className="tl-phase"><div className="tl-phase-label">Step 3</div><div className="tl-phase-time">Day 4–7</div><div className="tl-phase-name">Strategy &amp; Setup</div></div>
<div className="tl-phase"><div className="tl-phase-label">Step 4</div><div className="tl-phase-time">Week 2+</div><div className="tl-phase-name">Execution Begins</div></div>
<div className="tl-phase"><div className="tl-phase-label">Step 5</div><div className="tl-phase-time">Monthly</div><div className="tl-phase-name">Report &amp; Review</div></div>
<div className="tl-phase"><div className="tl-phase-label">Step 6</div><div className="tl-phase-time">Ongoing</div><div className="tl-phase-name">Scale &amp; Optimise</div></div>
</div>
</div>
</section>
      <section className="process-section">
<div className="wrap">
<div className="rv" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 60px' }}>
<div className="pill pill-o" style={{ marginBottom: '12px' }}>The Process</div>
<h2 style={{ fontSize: '36px', marginBottom: '14px' }}>Six Steps From First Call to Real Results</h2>
</div>
<div className="step rv">
<div className="step-left"><div className="step-num">1</div></div>
<div className="step-right">
<div className="step-sub">Discovery</div>
<h3><span className="step-em">☎️</span> The First Conversation</h3>
<p>We start with a 30-minute strategy call — no sales pitch. We want to understand your business, your current digital situation, what's been tried, what hasn't worked, and what success actually looks like for you. It's a conversation, not a presentation.</p>
<div className="step-detail">
<div className="sd-item"><div className="sd-dot">✓</div>We listen more than we talk</div>
<div className="sd-item"><div className="sd-dot">✓</div>We ask about your goals, not just your budget</div>
<div className="sd-item"><div className="sd-dot">✓</div>If we're not the right fit, we say so here — not 3 months later</div>
</div>
<span className="step-tag">📅 Day 1</span><span className="step-tag">⏱️ 30 min</span><span className="step-tag">💬 Phone or Video</span>
</div>
</div>
<div className="step rv">
<div className="step-left"><div className="step-num">2</div></div>
<div className="step-right">
<div className="step-sub">Audit &amp; Research</div>
<h3><span className="step-em">🔍</span> We Do Our Homework First</h3>
<p>Before we recommend anything, we dig in. SEO clients get a technical audit. Ads clients get a current-campaign teardown. Web clients get a performance review. We look at your competitors, your market, and your existing data — then build a real picture of the opportunity.</p>
<div className="step-detail">
<div className="sd-item"><div className="sd-dot">✓</div>Technical SEO audit (site crawl, GSC data, Core Web Vitals)</div>
<div className="sd-item"><div className="sd-dot">✓</div>Competitor gap analysis — what they rank for that you don't</div>
<div className="sd-item"><div className="sd-dot">✓</div>Current ads performance review (if applicable)</div>
<div className="sd-item"><div className="sd-dot">✓</div>Keyword opportunity mapping</div>
</div>
<span className="step-tag">📅 Day 2–3</span><span className="step-tag">📊 Data-led</span>
</div>
</div>
<div className="step rv">
<div className="step-left"><div className="step-num">3</div></div>
<div className="step-right">
<div className="step-sub">Strategy &amp; Proposal</div>
<h3><span className="step-em">📋</span> A Plan That Makes Sense</h3>
<p>We present a clear strategy document — not a generic "we'll do SEO for you" proposal. You'll see exactly what we plan to do, in what order, why, and what we expect it to accomplish. Pricing is itemised. Timelines are realistic. No smoke, no mirrors.</p>
<div className="step-detail">
<div className="sd-item"><div className="sd-dot">✓</div>Written strategy with clear deliverables and timelines</div>
<div className="sd-item"><div className="sd-dot">✓</div>Honest projection of what to expect and when</div>
<div className="sd-item"><div className="sd-dot">✓</div>Itemised pricing — you know what you're paying for</div>
<div className="sd-item"><div className="sd-dot">✓</div>Questions welcome — we revise until it's right</div>
</div>
<span className="step-tag">📅 Day 4–5</span><span className="step-tag">📝 Written proposal</span>
</div>
</div>
<div className="step rv">
<div className="step-left"><div className="step-num">4</div></div>
<div className="step-right">
<div className="step-sub">Onboarding &amp; Setup</div>
<h3><span className="step-em">⚙️</span> Access, Setup, and Alignment</h3>
<p>Once you're in, we get to work quickly. We'll request access to what we need (GSC, GA4, Ads accounts, hosting, etc.), set up our tracking and reporting infrastructure, and align on communication rhythm. Most clients are fully onboarded within the first week.</p>
<div className="step-detail">
<div className="sd-item"><div className="sd-dot">✓</div>Dedicated point of contact assigned — one person, always reachable</div>
<div className="sd-item"><div className="sd-dot">✓</div>Tracking and reporting dashboard set up</div>
<div className="sd-item"><div className="sd-dot">✓</div>Access to tools requested — minimal friction</div>
<div className="sd-item"><div className="sd-dot">✓</div>Communication cadence agreed — WhatsApp, email, or call</div>
</div>
<span className="step-tag">📅 Day 6–7</span><span className="step-tag">🤝 Kick-off</span>
</div>
</div>
<div className="step rv">
<div className="step-left"><div className="step-num">5</div></div>
<div className="step-right">
<div className="step-sub">Execution</div>
<h3><span className="step-em">🚀</span> The Work Actually Starts Here</h3>
<p>We execute the strategy — methodically, not frantically. Every task is logged. Every deliverable is tracked. You won't hear silence for weeks and then get a vague update. If something shifts or we find a better opportunity, we tell you immediately.</p>
<div className="step-detail">
<div className="sd-item"><div className="sd-dot">✓</div>Weekly progress updates — brief, to the point</div>
<div className="sd-item"><div className="sd-dot">✓</div>Deliverables shared on agreed schedule</div>
<div className="sd-item"><div className="sd-dot">✓</div>Any strategic pivots communicated proactively</div>
<div className="sd-item"><div className="sd-dot">✓</div>You can ask for a status update any time — we respond same day</div>
</div>
<span className="step-tag">📅 Week 2 onwards</span><span className="step-tag">📊 Tracked weekly</span>
</div>
</div>
<div className="step rv">
<div className="step-left"><div className="step-num">6</div></div>
<div className="step-right">
<div className="step-sub">Reporting &amp; Growth</div>
<h3><span className="step-em">📈</span> Monthly Reviews. No Vanity Metrics.</h3>
<p>Every month, you get a clear report — the numbers that matter, not a wall of screenshots designed to impress. We review what worked, what didn't, and what we're adjusting. We treat monthly reviews as a strategy session, not a formality.</p>
<div className="step-detail">
<div className="sd-item"><div className="sd-dot">✓</div>Clear monthly report — written in plain language</div>
<div className="sd-item"><div className="sd-dot">✓</div>KPIs reviewed vs targets set at the start</div>
<div className="sd-item"><div className="sd-dot">✓</div>Honest assessment — what's working, what needs adjustment</div>
<div className="sd-item"><div className="sd-dot">✓</div>Plan for the next month discussed and documented</div>
</div>
<span className="step-tag">📅 Monthly</span><span className="step-tag">📋 Written report</span><span className="step-tag">🔄 Continuous</span>
</div>
</div>
</div>
</section>
      <section className="promise-section">
<div className="wrap">
<div className="rv" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 44px' }}>
<div className="pill pill-o" style={{ marginBottom: '12px' }}>Our Promise</div>
<h2 style={{ fontSize: '34px', marginBottom: '14px' }}>Things You'll Never Have to Deal With</h2>
</div>
<div className="promise-grid">
<div className="promise-card rv">
<h4 style={{ color: '#065f46' }}>🚫 Ghosting after onboarding</h4>
<p>We stay reachable throughout the engagement. One dedicated contact, same-day responses, proactive communication — always.</p>
</div>
<div className="promise-card rv2">
<h4 style={{ color: '#065f46' }}>🚫 Reports full of fluff</h4>
<p>No impressions graphs, no "brand awareness" metrics used to hide a bad month. You get the numbers that actually matter to your business.</p>
</div>
<div className="promise-card rv3">
<h4 style={{ color: '#065f46' }}>🚫 Surprise charges</h4>
<p>What we quote is what you pay. Any scope change is discussed before it happens — not billed after the fact.</p>
</div>
<div className="promise-card rv">
<h4 style={{ color: '#065f46' }}>🚫 Work done by juniors, signed off by seniors</h4>
<p>Your account is handled by the specialist who pitched it — not handed off to a trainee once you sign.</p>
</div>
<div className="promise-card rv2">
<h4 style={{ color: '#065f46' }}>🚫 Black hat tactics that risk your site</h4>
<p>Zero paid links from link farms, zero keyword stuffing, zero cloaking. We've had zero Google penalties in 12+ years.</p>
</div>
<div className="promise-card rv3">
<h4 style={{ color: '#065f46' }}>🚫 Being told everything is "going great"</h4>
<p>If something isn't performing, we tell you early and honestly — and we bring a plan with that news, not just the problem.</p>
</div>
</div>
</div>
</section>
      <section className="cta-section">
<div className="wrap rv">
<h2>Like What You See?</h2>
<p>If this process sounds like what you've been looking for, let's have a conversation. First call is always free.</p>
<div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
<a href="/contact" className="btn btn-o">Book a Free Strategy Call →</a>
<a href="/honest" className="btn btn-ghost">Read the Honest Page</a>
</div>
</div>
</section>
      <PageScript id="how-we-work-0" code={js0} />
    </>
  )
}
