/* eslint-disable */
// src/app/honest/page.tsx — generated from honest.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "The Honest Page | Click Decoded",
  description: "No pitch. No spin. This is the most honest page on our website — what we're great at, what we're not, who we're the right fit for, and who should look.",
  alternates: { canonical: "/honest" },
  openGraph: {
    title: "The Honest Page — Click Decoded",
    description: "An agency that tells you exactly what they're good at, what they're not, and what working with them really looks like.",
    url: "/honest",
    type: "website",
  },
}

const css = `
:root{--n:#2A4573;--n2:#1e3460;--n-dark:#0f1e38;--o:#EE7E1A;--o2:#d46e12;--body:#1E293B;--m:#475569;--s:#64748b;--bg:#F4F7FC;--bdr:#E2E8F0;--gr:#10b981;--rd:#ef4444;}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}html{scroll-behavior:smooth;overflow-x:hidden;}body{font-family:'Inter',system-ui,sans-serif;color:var(--body);background:#fff;-webkit-font-smoothing:antialiased;}a{text-decoration:none;color:inherit;}img,svg{display:block;}ul{list-style:none;}button{font-family:inherit;cursor:pointer;}
.wrap{max-width:1100px;margin:0 auto;padding:0 28px;}section{padding:72px 0;}h1,h2,h3,h4{font-weight:800;line-height:1.1;letter-spacing:-.025em;color:var(--n);}
.pill{display:inline-flex;align-items:center;gap:7px;padding:6px 14px;border-radius:99px;font-size:11.5px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;}
.pill-o{background:rgba(238,126,26,.12);color:var(--o);}
.btn{display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:10px;font-weight:700;font-size:14px;border:none;transition:all .18s;white-space:nowrap;cursor:pointer;}
.btn-o{background:var(--o);color:#fff;box-shadow:0 4px 18px rgba(238,126,26,.3);}.btn-o:hover{background:var(--o2);transform:translateY(-2px);}
.btn-ghost{background:transparent;color:var(--n);border:1.5px solid var(--bdr);}.btn-ghost:hover{border-color:var(--o);color:var(--o);}
/* TOPBAR / HEADER (bare) */
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
.ms{display:none;padding:0 0 16px;}.ma.on .ms{display:block;}.ms a{display:block;padding:7px 0;font-size:14px;color:var(--m);}
.ms h6{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--n);margin:12px 0 4px;}
.breadcrumb{background:var(--bg);padding:12px 0;border-bottom:1px solid var(--bdr);}
.bc-list{display:flex;align-items:center;gap:8px;font-size:12.5px;color:var(--s);list-style:none;}.bc-list a{color:var(--n);font-weight:500;}.bc-list a:hover{color:var(--o);}
/* HERO */
.hero{background:linear-gradient(155deg,#0a1628,#0f1e38,#060e1c);padding:80px 0 64px;position:relative;overflow:hidden;}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 45% 55% at 80% 30%,rgba(238,126,26,.06),transparent 65%);}
.hero-inner{max-width:800px;margin:0 auto;text-align:center;position:relative;z-index:2;}
.hero-badge{display:inline-flex;align-items:center;gap:8px;padding:6px 16px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);border-radius:99px;font-size:11.5px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:rgba(255,255,255,.6);margin-bottom:24px;}
.hero h1{font-size:52px;color:#fff;margin-bottom:20px;}.hero h1 em{font-style:normal;color:var(--o);}
.hero-desc{font-size:17px;color:rgba(255,255,255,.55);line-height:1.8;max-width:600px;margin:0 auto 32px;}
.hero-note{display:inline-block;padding:10px 18px;background:rgba(238,126,26,.1);border:1px solid rgba(238,126,26,.2);border-radius:10px;font-size:13px;color:rgba(255,255,255,.6);line-height:1.6;}
/* SECTIONS */
.two-col{display:grid;grid-template-columns:1fr 1fr;gap:28px;}
.honest-card{border-radius:20px;padding:32px;border:1px solid var(--bdr);}
.honest-card.good{background:rgba(16,185,129,.04);border-color:rgba(16,185,129,.2);}
.honest-card.bad{background:rgba(239,68,68,.04);border-color:rgba(239,68,68,.15);}
.honest-card h3{font-size:20px;margin-bottom:20px;display:flex;align-items:center;gap:10px;}
.item-list{display:flex;flex-direction:column;gap:12px;}
.item-row{display:flex;gap:12px;align-items:flex-start;}
.item-icon{width:24px;height:24px;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;margin-top:1px;}
.item-icon.g{background:rgba(16,185,129,.12);color:var(--gr);}
.item-icon.r{background:rgba(239,68,68,.1);color:var(--rd);}
.item-icon.o{background:rgba(238,126,26,.12);color:var(--o);}
.item-row p{font-size:14px;color:var(--body);line-height:1.65;}
.item-row p strong{color:var(--n);}
.item-row p em{font-style:normal;color:var(--s);font-size:13px;}
/* FIT SECTION */
.fit-section{background:var(--bg);}
.fit-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;}
.fit-card{background:#fff;border:1px solid var(--bdr);border-radius:20px;padding:28px 26px;}
.fit-card.yes{border-top:3px solid var(--gr);}
.fit-card.no{border-top:3px solid var(--rd);}
.fit-card h3{font-size:18px;margin-bottom:16px;display:flex;align-items:center;gap:9px;}
.fit-list{display:flex;flex-direction:column;gap:10px;}
.fit-item{display:flex;gap:10px;align-items:flex-start;font-size:14px;color:var(--m);line-height:1.6;}
.fit-dot{width:20px;height:20px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:11px;flex-shrink:0;margin-top:1px;}
.fit-dot.g{background:rgba(16,185,129,.12);color:var(--gr);}
.fit-dot.r{background:rgba(239,68,68,.1);color:var(--rd);}
/* REAL TALK */
.realtalk-section{background:#fff;}
.rt-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.rt-card{background:var(--bg);border:1px solid var(--bdr);border-radius:16px;padding:24px 22px;}
.rt-card .rt-q{font-size:13px;font-weight:700;color:var(--n);margin-bottom:10px;}
.rt-card .rt-a{font-size:13.5px;color:var(--m);line-height:1.7;}
/* PRICING */
.pricing-section{background:var(--bg);}
.price-note{max-width:760px;margin:0 auto;text-align:center;}
.price-ranges{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:36px;}
.pr-card{background:#fff;border:1px solid var(--bdr);border-radius:16px;padding:22px 18px;text-align:center;}
.pr-card h4{font-size:13px;font-weight:700;color:var(--n);margin-bottom:8px;}
.pr-range{font-size:18px;font-weight:800;color:var(--o);margin-bottom:4px;}
.pr-note{font-size:11.5px;color:var(--s);line-height:1.5;}
/* CTA */
.cta-section{background:linear-gradient(135deg,var(--n-dark),#162d4e);padding:72px 0;text-align:center;}
.cta-section h2{font-size:36px;color:#fff;margin-bottom:16px;}
.cta-section p{font-size:16px;color:rgba(255,255,255,.6);margin-bottom:32px;line-height:1.7;}
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
@media(max-width:900px){.two-col,.fit-grid{grid-template-columns:1fr;}.rt-grid{grid-template-columns:1fr 1fr;}.price-ranges{grid-template-columns:1fr 1fr;}.fg{grid-template-columns:1fr 1fr;}}
@media(max-width:600px){.hero h1{font-size:36px;}.rt-grid{grid-template-columns:1fr;}.price-ranges{grid-template-columns:1fr 1fr;}.hb{display:flex;}.dmenu{display:none;}}
`

const ld0 = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.clickdecoded.com/honest",
      "name": "The Honest Page",
      "description": "No pitch. No spin. This is the most honest page on our website — what we're great at, what we're not, who we're the right fit for, and who should look elsewhere.",
      "url": "https://www.clickdecoded.com/honest",
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
          "name": "Our Honest Promise",
          "item": "https://www.clickdecoded.com/honest"
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
      <nav className="breadcrumb"><div className="wrap"><ol className="bc-list"><li><a href="/">Home</a></li><li>›</li><li>The Honest Page</li></ol></div></nav>
      <section className="hero">
<div className="hero-inner">
<div className="hero-badge">📋 No pitch. No spin.</div>
<h1>The <em>Honest</em> Page.</h1>
<p className="hero-desc">Most agency websites are built to impress. This page is built to inform. You'll find what we're genuinely good at, what we're not, who we're the right fit for, and what working with us actually costs — all in plain language.</p>
<div className="hero-note">If you read this page and still want to work with us, we're almost certainly a good fit.</div>
</div>
</section>
      <section><div className="wrap">
<div className="rv" style={{ textAlign: 'center', marginBottom: '44px' }}>
<div className="pill pill-o" style={{ marginBottom: '12px' }}>Capabilities</div>
<h2 style={{ fontSize: '34px', marginBottom: '12px' }}>What We're Great At — and What We're Not</h2>
<p style={{ fontSize: '16px', color: 'var(--m)', maxWidth: '580px', margin: '0 auto' }}>Every agency says they do everything. We'd rather be honest about where we genuinely excel and where you should look elsewhere.</p>
</div>
<div className="two-col">
<div className="honest-card good rv">
<h3 style={{ color: '#065f46' }}>✅ We're genuinely great at this</h3>
<div className="item-list">
<div className="item-row"><div className="item-icon g">✓</div><p><strong>B2B SEO</strong> — Technical audits, content strategy, link building. We've ranked competitive B2B keywords without shortcuts or penalties. <em>12+ years, zero manual actions.</em></p></div>
<div className="item-row"><div className="item-icon g">✓</div><p><strong>Google Ads for lead generation</strong> — Smart campaign structure, negative keywords, tight ad groups. We focus on CPL, not just CTR. <em>Real conversions, not vanity clicks.</em></p></div>
<div className="item-row"><div className="item-icon g">✓</div><p><strong>AI &amp; n8n automation</strong> — WhatsApp chatbots, lead workflows, CRM integrations. We build automations that actually run for months without breaking. <em>Real n8n deployments.</em></p></div>
<div className="item-row"><div className="item-icon g">✓</div><p><strong>WordPress web development</strong> — Fast, clean, SEO-ready. 90+ PageSpeed scores, proper schema, no bloated page builders. <em>Built to convert, not just to look good.</em></p></div>
<div className="item-row"><div className="item-icon g">✓</div><p><strong>White label fulfilment</strong> — We've delivered under 20+ agency brands without a single client-contact breach in 12 years. <em>NDA-backed, deadline-reliable.</em></p></div>
<div className="item-row"><div className="item-icon g">✓</div><p><strong>GEO / AI search visibility</strong> — Getting brands cited in ChatGPT, Gemini, and Perplexity. One of very few Indian agencies doing this with a real methodology.</p></div>
</div>
</div>
<div className="honest-card bad rv2">
<h3 style={{ color: '#991b1b' }}>⚠️ We're not the right fit for this</h3>
<div className="item-list">
<div className="item-row"><div className="item-icon r">✗</div><p><strong>Viral social media content</strong> — Reels, memes, influencer-style content isn't our zone. We're a results-driven B2B agency, not a creative content house.</p></div>
<div className="item-row"><div className="item-icon r">✗</div><p><strong>Overnight SEO results</strong> — If someone promised you page 1 in 30 days with no questions asked, they're lying. SEO takes 90–180 days minimum to show meaningful movement. <em>We don't do fake timelines.</em></p></div>
<div className="item-row"><div className="item-icon r">✗</div><p><strong>Broadcast PR / Media placements</strong> — TV, print, OOH, PR outreach to journalists — not something we do. We're a digital-first agency.</p></div>
<div className="item-row"><div className="item-icon r">✗</div><p><strong>App development</strong> — iOS, Android, or React Native apps are outside our scope. We build websites and web apps, not mobile apps.</p></div>
<div className="item-row"><div className="item-icon r">✗</div><p><strong>Guaranteed rankings</strong> — No ethical SEO agency can guarantee a specific ranking position. Google controls that. We guarantee our process and our work — results follow naturally.</p></div>
<div className="item-row"><div className="item-icon r">✗</div><p><strong>One-week turnarounds on complex projects</strong> — A proper SEO audit, a well-built website, or a working automation takes time to do right. We won't rush and deliver something broken.</p></div>
</div>
</div>
</div>
</div></section>
      <section className="fit-section"><div className="wrap">
<div className="rv" style={{ textAlign: 'center', marginBottom: '44px' }}>
<div className="pill pill-o" style={{ marginBottom: '12px' }}>Fit Check</div>
<h2 style={{ fontSize: '34px', marginBottom: '12px' }}>You Should Hire Us If…</h2>
<p style={{ fontSize: '16px', color: 'var(--m)', maxWidth: '560px', margin: '0 auto' }}>We'd rather you know this upfront than waste each other's time.</p>
</div>
<div className="fit-grid">
<div className="fit-card yes rv">
<h3 style={{ color: '#065f46' }}>✅ You're a great fit if...</h3>
<div className="fit-list">
<div className="fit-item"><div className="fit-dot g">✓</div>You're a B2B company, agency, or serious e-commerce brand looking for real, measurable digital growth</div>
<div className="fit-item"><div className="fit-dot g">✓</div>You understand that results take time — and you're investing for 6–12 months, not 30 days</div>
<div className="fit-item"><div className="fit-dot g">✓</div>You want a team that actually explains what they're doing and why — not just sends a monthly report</div>
<div className="fit-item"><div className="fit-dot g">✓</div>You're an agency looking for a reliable white label partner who won't ever contact your clients</div>
<div className="fit-item"><div className="fit-dot g">✓</div>You want AI and automation implemented practically — not just talked about</div>
<div className="fit-item"><div className="fit-dot g">✓</div>You value honest communication more than being told what you want to hear</div>
</div>
</div>
<div className="fit-card no rv2">
<h3 style={{ color: '#991b1b' }}>❌ We're probably not the right fit if...</h3>
<div className="fit-list">
<div className="fit-item"><div className="fit-dot r">✗</div>You need guaranteed rankings, leads, or ROI before you'll commit — we don't sell guarantees, we sell expertise</div>
<div className="fit-item"><div className="fit-dot r">✗</div>You want the cheapest option available — our pricing reflects the quality and care we put in</div>
<div className="fit-item"><div className="fit-dot r">✗</div>You've hired 5 agencies in 2 years and fired them all — that pattern usually points to expectations that need resetting</div>
<div className="fit-item"><div className="fit-dot r">✗</div>You need a full creative agency — brand identity, print, TV, OOH — we're not that</div>
<div className="fit-item"><div className="fit-dot r">✗</div>You want to micromanage every word and every task — we work best with clients who trust the process</div>
<div className="fit-item"><div className="fit-dot r">✗</div>You want results in 2 weeks — if that's the timeline, we'd rather refer you to someone who'll lie to you about it</div>
</div>
</div>
</div>
</div></section>
      <section className="realtalk-section"><div className="wrap">
<div className="rv" style={{ textAlign: 'center', marginBottom: '44px' }}>
<div className="pill pill-o" style={{ marginBottom: '12px' }}>Real Talk</div>
<h2 style={{ fontSize: '34px', marginBottom: '12px' }}>Questions We Get Asked But Most Agencies Won't Answer Honestly</h2>
</div>
<div className="rt-grid">
<div className="rt-card rv">
<div className="rt-q">Do you outsource work to freelancers?</div>
<div className="rt-a">Mostly no. Core work — SEO, ads, automation, web dev — is done in-house by our team. For highly specialised tasks (e.g. a specific niche content piece), we may use vetted specialists, but strategy and quality control stays with us.</div>
</div>
<div className="rt-card rv2">
<div className="rt-q">Will you tell us the truth even if it's not what we want to hear?</div>
<div className="rt-a">Yes — and we've lost clients because of it. If your expectations are unrealistic, we'll say so. If a tactic won't work for your industry, we'll tell you. We'd rather be honest and lose a project than be agreeable and waste your budget.</div>
</div>
<div className="rt-card rv3">
<div className="rt-q">How long have you been around?</div>
<div className="rt-a">Aharnish Infotech Pvt. Ltd. (the company behind Click Decoded) was incorporated in 2014. That's 12+ years of actual work — not a rebrand or a startup. We've seen Google algorithm updates, Meta pivots, and AI take over search. We're still here.</div>
</div>
<div className="rt-card rv">
<div className="rt-q">What happens if results are slow?</div>
<div className="rt-a">We communicate. You'll never be left wondering. If something isn't working, we diagnose it, explain it, and adjust. What we won't do is fake it, hide it, or send you a report full of meaningless vanity metrics to distract from the real picture.</div>
</div>
<div className="rt-card rv2">
<div className="rt-q">Do you lock clients into long contracts?</div>
<div className="rt-a">We recommend 6–12 month commitments for SEO because that's how long it genuinely takes. But we don't hold anyone hostage. If we're doing our job, you'll stay. If we're not, you shouldn't have to fight to leave.</div>
</div>
<div className="rt-card rv3">
<div className="rt-q">Have you ever had an unhappy client?</div>
<div className="rt-a">Yes. Anyone who says otherwise is lying. The honest answer: most dissatisfied situations came from misaligned expectations at the start. That's exactly why this page exists — so we get those conversations done before we start, not after.</div>
</div>
</div>
</div></section>
      <section className="pricing-section"><div className="wrap">
<div className="price-note rv">
<div className="pill pill-o" style={{ marginBottom: '16px', display: 'inline-flex' }}>Pricing Ballpark</div>
<h2 style={{ fontSize: '34px', marginBottom: '14px' }}>What Does It Cost?</h2>
<p style={{ fontSize: '16px', color: 'var(--m)', lineHeight: '1.8' }}>We don't publish fixed packages because every business is different. But here's a realistic ballpark so you're not walking in blind. Final pricing depends on scope, deliverables, and timeline.</p>
</div>
<div className="price-ranges">
<div className="pr-card rv">
<h4>SEO (Monthly)</h4>
<div className="pr-range">₹15K – ₹60K</div>
<div className="pr-note">Based on site size, competition, and deliverables. Includes technical, content, and link building.</div>
</div>
<div className="pr-card rv2">
<h4>Google / Meta Ads</h4>
<div className="pr-range">₹8K – ₹25K</div>
<div className="pr-note">Management fee only. Ad spend is separate and goes directly to the platform.</div>
</div>
<div className="pr-card rv3">
<h4>Website Development</h4>
<div className="pr-range">₹25K – ₹1.5L</div>
<div className="pr-note">WordPress brochure sites to full WooCommerce stores. Custom builds on request.</div>
</div>
<div className="pr-card rv">
<h4>AI &amp; Automation</h4>
<div className="pr-range">₹20K – ₹1.2L</div>
<div className="pr-note">One-time setup cost for n8n workflows, WhatsApp bots, and chatbot deployments.</div>
</div>
</div>
<p style={{ textAlign: 'center', marginTop: '22px', fontSize: '13.5px', color: 'var(--s)' }}>White label pricing is quoted separately based on volume and service mix. <a href="/contact" style={{ color: 'var(--o)', fontWeight: '600' }}>Get a custom quote →</a></p>
</div></section>
      <section className="cta-section">
<div className="wrap rv" style={{ textAlign: 'center' }}>
<h2>Still want to work with us?</h2>
<p>Good. That means we're probably a solid fit. Let's have a real conversation — no sales pitch, no pressure, just an honest look at what we can do for your business.</p>
<div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
<a href="/contact" className="btn btn-o">Book a Free Strategy Call →</a>
<a href="/contact" className="btn btn-ghost" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.3)' }}>Send Us a Message</a>
</div>
</div>
</section>
      <PageScript id="honest-0" code={js0} />
    </>
  )
}
