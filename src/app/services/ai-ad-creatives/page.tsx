/* eslint-disable */
// src/app/services/ai-ad-creatives/page.tsx — generated from ai-ad-creatives.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "AI Ad Creatives India | Click Decoded",
  description: "AI-powered ad creative generation at scale. Click Decoded produces hundreds of on-brand ad variants — copy, visuals, and video — tested and optimised for.",
  alternates: { canonical: "/services/ai-ad-creatives" },
}

const css = `
:root{
  --ac:#7C3AED;--ac2:#6d28d9;--ac-rgb:124,58,237;
  --n:#1e3a5f;--n-dark:#0a1628;--o:#EE7E1A;
  --body:#1E293B;--m:#475569;--s:#64748b;
  --bg:#F4F7FC;--bdr:#E2E8F0;
}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;overflow-x:hidden;}
body{font-family:'Inter',system-ui,sans-serif;color:var(--body);background:#fff;-webkit-font-smoothing:antialiased;}
a{text-decoration:none;color:inherit;}img,svg{display:block;}ul{list-style:none;}button{font-family:inherit;cursor:pointer;}
.wrap{max-width:1200px;margin:0 auto;padding:0 28px;}
section{padding:88px 0;}
h1,h2,h3,h4{font-weight:800;line-height:1.1;letter-spacing:-.025em;color:var(--n);}
.btn{display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:10px;font-weight:700;font-size:14px;border:none;transition:all .18s;white-space:nowrap;cursor:pointer;}
.btn-ac{background:var(--ac);color:#fff;box-shadow:0 4px 18px rgba(var(--ac-rgb),.3);}
.btn-ac:hover{background:var(--ac2);transform:translateY(-2px);}
.btn-ghost{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.35);}
.btn-ghost:hover{background:rgba(255,255,255,.08);}
.btn-wa{background:#25D366;color:#fff;}.btn-wa:hover{background:#1ebe59;transform:translateY(-2px);}
.btn-o{background:var(--o);color:#fff;}.btn-o:hover{background:#d46e12;transform:translateY(-2px);}
.btn-sm{padding:10px 20px;font-size:13px;}
/* NAV */
.topbar{background:var(--n-dark);height:40px;display:flex;align-items:center;}
.topbar-inner{max-width:1200px;margin:0 auto;padding:0 28px;display:flex;justify-content:space-between;align-items:center;width:100%;}
.topbar-left{display:flex;gap:20px;}.topbar-left a{font-size:12px;color:rgba(255,255,255,.6);}
.topbar-right{display:flex;gap:8px;}
.tb-btn{display:inline-flex;align-items:center;gap:6px;padding:5px 12px;border-radius:6px;font-size:11.5px;font-weight:700;transition:.15s;}
.tb-call{background:rgba(238,126,26,.15);color:var(--o);border:1px solid rgba(238,126,26,.25);}
.tb-wa{background:rgba(37,211,102,.15);color:#25D366;border:1px solid rgba(37,211,102,.25);}
.tb-call:hover{background:var(--o);color:#fff;}.tb-wa:hover{background:#25D366;color:#fff;}
#hdr{background:rgba(255,255,255,.97);backdrop-filter:blur(14px);border-bottom:1px solid var(--bdr);transition:box-shadow .2s;}
#hdr.up{box-shadow:0 4px 32px rgba(10,22,40,.09);}
.nav{display:flex;align-items:center;justify-content:space-between;height:70px;gap:16px;}
.dmenu{display:flex;align-items:center;gap:2px;}.dmenu>li{position:relative;}
.dmenu>li::after{content:'';position:absolute;top:100%;left:-40px;right:-40px;height:14px;}
.dmenu>li>a{display:flex;align-items:center;gap:5px;padding:9px 12px;font-size:13.5px;font-weight:600;color:var(--n);border-radius:8px;transition:.15s;}
.dmenu>li>a:hover{background:var(--bg);}
.dcar{width:10px;height:10px;opacity:.5;transition:transform .18s;flex-shrink:0;}
.dmenu>li:hover .dcar{transform:rotate(180deg);}
.mega{position:absolute;top:calc(100% + 10px);left:50%;transform:translateX(-50%) translateY(10px);background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:26px;box-shadow:0 24px 64px rgba(10,22,40,.14);opacity:0;visibility:hidden;pointer-events:none;transition:opacity .18s,transform .18s;}
.mega.wide{width:940px;display:grid;grid-template-columns:repeat(5,1fr);gap:22px;}
.mega.slim{width:296px;left:auto;right:0;transform:translateY(10px);}
.dmenu>li:hover .mega{opacity:1;visibility:visible;pointer-events:all;transform:translateX(-50%) translateY(0);}
.dmenu>li:hover .mega.slim{transform:translateY(0);}
.mc h5{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--n);margin-bottom:11px;}
.mc a{display:block;position:relative;padding:5px 0 5px 11px;font-size:13px;font-weight:500;color:var(--body);transition:color .14s,padding-left .14s;}
.mc a::before{content:'';position:absolute;left:0;top:50%;transform:translateY(-50%);width:2px;height:0;border-radius:1px;background:var(--ac);transition:height .15s cubic-bezier(.22,1,.36,1);}
.mc a:hover{color:var(--ac);padding-left:14px;}.mc a:hover::before{height:13px;}
.mega.slim a{display:block;padding:9px 12px;font-size:13px;font-weight:500;color:var(--body);border-radius:8px;transition:.15s;}
.mega.slim a:hover{background:var(--bg);color:var(--ac);}
.mega.slim a small{display:block;font-size:11px;color:var(--s);font-weight:400;margin-top:1px;}
.navcta{display:flex;align-items:center;gap:10px;}
.hb{background:none;border:none;display:none;flex-direction:column;gap:5px;padding:4px;cursor:pointer;}
.hb span{display:block;width:22px;height:2px;background:var(--n);border-radius:1px;}
.mnav{display:none;position:fixed;inset:0;background:#fff;z-index:200;overflow-y:auto;padding:24px 22px 40px;}
.mnav.on{display:block;}
.ma{border-bottom:1px solid var(--bdr);}
.ma>button{width:100%;text-align:left;background:none;border:none;padding:15px 0;font-size:15px;font-weight:600;color:var(--n);display:flex;justify-content:space-between;cursor:pointer;}
.ms{display:none;padding:0 0 16px;}.ma.on .ms{display:block;}
.ms a{display:block;padding:7px 0;font-size:14px;color:var(--m);}
.ms h6{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--n);margin:12px 0 4px;}
@media(max-width:960px){.hb{display:flex;}.dmenu,.navcta .btn-o{display:none;}}
/* FOOTER */
footer{background:var(--n-dark);padding:64px 0 0;}
.fg{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:40px;}
.fb-desc{font-size:13.5px;color:rgba(255,255,255,.4);line-height:1.7;margin:16px 0 20px;}
.socials{display:flex;gap:10px;}
.socials a{width:34px;height:34px;border-radius:8px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.5);transition:.15s;}
.socials a:hover{background:var(--o);color:#fff;border-color:var(--o);}
footer h4{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.35);margin-bottom:16px;}
.fl{display:flex;flex-direction:column;gap:8px;}
.fl a,.fc a{font-size:13.5px;color:rgba(255,255,255,.5);transition:.15s;}
.fl a:hover,.fc a:hover{color:#fff;}
.fc{display:flex;flex-direction:column;gap:10px;}
.footer-bottom{border-top:1px solid rgba(255,255,255,.07);padding:20px 0;display:flex;justify-content:space-between;align-items:center;font-size:12px;color:rgba(255,255,255,.3);flex-wrap:wrap;gap:8px;}
.footer-bottom a{color:rgba(255,255,255,.3);}.footer-bottom a:hover{color:rgba(255,255,255,.6);}
.footer-areas{padding:20px 0;border-top:1px solid rgba(255,255,255,.06);font-size:12px;color:rgba(255,255,255,.25);display:flex;gap:8px;flex-wrap:wrap;align-items:center;}
.footer-areas b{color:rgba(255,255,255,.4);}
.footer-areas a{color:rgba(255,255,255,.25);transition:.15s;}.footer-areas a:hover{color:rgba(255,255,255,.6);}
/* BREADCRUMB */
.breadcrumb{background:var(--bg);padding:12px 0;border-bottom:1px solid var(--bdr);}
.bc-list{display:flex;align-items:center;gap:8px;font-size:12.5px;color:var(--s);}
.bc-list a{color:var(--n);font-weight:500;}.bc-list a:hover{color:var(--ac);}
/* HERO */
.hero{background:linear-gradient(155deg,#12062a 0%,#1e0845 45%,#12062a 100%);padding:96px 0 80px;position:relative;overflow:hidden;}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 60% at 70% 30%,rgba(124,58,237,.22) 0%,transparent 65%),radial-gradient(ellipse 35% 40% at 5% 80%,rgba(124,58,237,.08) 0%,transparent 60%);}
.hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;position:relative;z-index:2;}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;background:rgba(124,58,237,.12);border:1px solid rgba(124,58,237,.3);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#c4b5fd;margin-bottom:20px;}
.hero h1{font-size:48px;color:#fff;line-height:1.06;letter-spacing:-.04em;margin-bottom:20px;}
.hero h1 em{font-style:normal;background:linear-gradient(135deg,#c4b5fd,#7c3aed);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-desc{font-size:17px;color:rgba(255,255,255,.62);line-height:1.7;margin-bottom:32px;max-width:460px;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:36px;}
.hero-proof{display:flex;gap:24px;flex-wrap:wrap;}
.proof-item{font-size:13px;color:rgba(255,255,255,.5);}
.proof-item strong{color:#fff;font-weight:700;}
/* AI CREATIVE MOCK */
.ai-mock{border-radius:20px;overflow:hidden;box-shadow:0 28px 70px rgba(0,0,0,.6);background:#130830;border:1px solid rgba(124,58,237,.25);}
.mock-browser{background:rgba(255,255,255,.05);padding:10px 14px;border-bottom:1px solid rgba(255,255,255,.07);display:flex;align-items:center;gap:10px;}
.mock-dots{display:flex;gap:5px;}
.mock-dots span{width:9px;height:9px;border-radius:50%;}
.mock-dots span:nth-child(1){background:#ff5f57;}
.mock-dots span:nth-child(2){background:#ffbd2e;}
.mock-dots span:nth-child(3){background:#28c840;}
.mock-url{flex:1;background:rgba(255,255,255,.07);border-radius:6px;padding:5px 12px;font-size:11px;color:rgba(255,255,255,.35);}
.ai-header{background:rgba(124,58,237,.12);border-bottom:1px solid rgba(124,58,237,.2);padding:10px 16px;display:flex;align-items:center;justify-content:space-between;}
.ai-title{font-size:12px;font-weight:700;color:rgba(255,255,255,.75);}
.ai-badge{font-size:10px;font-weight:700;padding:3px 9px;border-radius:5px;background:rgba(124,58,237,.2);border:1px solid rgba(124,58,237,.35);color:#c4b5fd;}
/* Prompt bar */
.ai-prompt{padding:10px 14px;background:rgba(255,255,255,.03);border-bottom:1px solid rgba(255,255,255,.06);}
.prompt-row{display:flex;align-items:center;gap:8px;background:rgba(255,255,255,.06);border:1px solid rgba(124,58,237,.25);border-radius:8px;padding:8px 12px;}
.prompt-text{flex:1;font-size:11px;color:rgba(255,255,255,.55);font-family:monospace;}
.prompt-gen{font-size:10px;font-weight:700;padding:4px 10px;border-radius:5px;background:var(--ac);color:#fff;border:none;cursor:pointer;}
/* Variants */
.ai-variants{padding:12px 14px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;}
.variant{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;overflow:hidden;}
.variant.winner{border-color:rgba(124,58,237,.45);background:rgba(124,58,237,.08);}
.var-img{height:54px;display:flex;align-items:center;justify-content:center;font-size:20px;background:linear-gradient(135deg,rgba(124,58,237,.2),rgba(109,40,217,.1));}
.var-body{padding:7px 9px;}
.var-label{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:rgba(255,255,255,.3);margin-bottom:3px;}
.var-head{font-size:10px;font-weight:700;color:rgba(255,255,255,.8);line-height:1.3;margin-bottom:5px;}
.var-ctr{display:flex;align-items:center;justify-content:space-between;}
.ctr-bar-wrap{flex:1;height:4px;background:rgba(255,255,255,.07);border-radius:2px;margin-right:6px;}
.ctr-bar{height:100%;border-radius:2px;background:linear-gradient(90deg,var(--ac),#a78bfa);}
.ctr-val{font-size:9px;font-weight:800;color:#c4b5fd;}
.var-winner-tag{font-size:8px;font-weight:800;padding:2px 7px;border-radius:4px;background:rgba(74,222,128,.1);border:1px solid rgba(74,222,128,.25);color:#4ade80;margin-top:5px;display:inline-block;}
/* Metrics row */
.ai-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,.05);border-top:1px solid rgba(255,255,255,.06);}
.ai-metric{padding:11px 14px;background:#130830;text-align:center;}
.aim-val{font-size:18px;font-weight:900;color:#fff;letter-spacing:-.02em;line-height:1;}
.aim-label{font-size:9px;color:rgba(255,255,255,.35);margin-top:3px;text-transform:uppercase;letter-spacing:.06em;}
/* STATS */
.stats-strip{background:var(--ac);}
.stats-inner{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(0,0,0,.2);}
.stat-box{padding:32px 24px;text-align:center;background:var(--ac);}
.stat-n{font-size:40px;font-weight:900;color:#fff;line-height:1;letter-spacing:-.03em;}
.stat-l{font-size:12px;color:rgba(255,255,255,.75);margin-top:6px;font-weight:500;text-transform:uppercase;letter-spacing:.06em;}
/* SECTIONS */
.sec-h{text-align:center;max-width:640px;margin:0 auto 52px;}
.sec-tag{display:inline-flex;padding:5px 13px;border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:10px;background:rgba(124,58,237,.08);border:1px solid rgba(124,58,237,.18);color:var(--ac);}
.sec-h h2{font-size:36px;margin-bottom:14px;}
.sec-h p{font-size:16px;color:var(--m);line-height:1.65;}
.inc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.inc-card{background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:28px 24px;transition:.2s;}
.inc-card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(124,58,237,.1);border-color:rgba(124,58,237,.22);}
.inc-icon{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:16px;background:rgba(124,58,237,.07);border:1px solid rgba(124,58,237,.12);}
.inc-card h3{font-size:17px;margin-bottom:10px;}
.inc-card p{font-size:13.5px;color:var(--m);line-height:1.65;}
.dark-section{background:var(--n-dark);padding:88px 0;}
.formats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:1000px;margin:0 auto;}
.fmt-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:24px;transition:.2s;}
.fmt-card:hover{border-color:rgba(124,58,237,.35);background:rgba(124,58,237,.07);transform:translateY(-2px);}
.fmt-top{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px;}
.fmt-icon{font-size:26px;}
.fmt-tag{font-size:10px;font-weight:700;padding:3px 8px;border-radius:5px;background:rgba(124,58,237,.18);border:1px solid rgba(124,58,237,.3);color:#c4b5fd;}
.fmt-card h3{font-size:15px;font-weight:700;color:#fff;margin-bottom:6px;}
.fmt-card p{font-size:13px;color:rgba(255,255,255,.5);line-height:1.6;}
.bg-subtle{background:var(--bg);}
.steps-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative;}
.steps-grid::before{content:'';position:absolute;top:34px;left:12%;right:12%;height:2px;background:linear-gradient(90deg,var(--ac),var(--ac2));z-index:0;opacity:.4;}
.step{text-align:center;padding:0 16px;position:relative;z-index:1;}
.step-num{width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,var(--ac),var(--ac2));color:#fff;font-size:20px;font-weight:900;display:flex;align-items:center;justify-content:center;margin:0 auto 18px;box-shadow:0 8px 24px rgba(124,58,237,.3);}
.step h4{font-size:15px;margin-bottom:7px;}
.step p{font-size:13px;color:var(--m);line-height:1.6;}
.faq-2col{display:grid;grid-template-columns:1fr 1fr;gap:0 28px;align-items:start;}
.fi{border:1px solid var(--bdr);border-radius:14px;margin-bottom:10px;overflow:hidden;background:#fff;transition:.15s;}
.fi.on{border-color:rgba(124,58,237,.3);box-shadow:0 4px 20px rgba(124,58,237,.07);}
.fi-q{width:100%;text-align:left;background:transparent;border:none;padding:20px 22px;font-size:14px;font-weight:700;color:var(--n);display:flex;justify-content:space-between;align-items:center;gap:12px;cursor:pointer;}
.fi-icon{width:26px;height:26px;border-radius:50%;flex-shrink:0;background:var(--bg);border:1px solid var(--bdr);display:flex;align-items:center;justify-content:center;color:var(--ac);font-size:18px;line-height:1;transition:transform .2s;}
.fi.on .fi-icon{transform:rotate(45deg);background:var(--ac);color:#fff;border-color:var(--ac);}
.fi-a{max-height:0;overflow:hidden;transition:.3s;color:var(--m);font-size:14px;line-height:1.75;}
.fi.on .fi-a{max-height:300px;padding:0 22px 22px;}
.cta-section{background:linear-gradient(155deg,#12062a 0%,#1e0845 100%);padding:96px 0;text-align:center;position:relative;overflow:hidden;}
.cta-section::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(124,58,237,.15) 0%,transparent 70%);}
.cta-section h2{color:#fff;font-size:44px;margin-bottom:16px;position:relative;z-index:1;}
.cta-section p{color:rgba(255,255,255,.6);font-size:17px;margin-bottom:36px;max-width:500px;margin-left:auto;margin-right:auto;line-height:1.65;position:relative;z-index:1;}
.cta-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;position:relative;z-index:1;}
.rel-link{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;border-radius:99px;border:1.5px solid var(--bdr);font-size:13px;font-weight:500;color:var(--m);transition:.15s;}
.rel-link:hover{border-color:var(--ac);color:var(--ac);}
.rv,.rv2,.rv3{opacity:0;transform:translateY(28px);transition:opacity .6s ease,transform .6s ease;}
.rv2{transition-delay:.1s;}.rv3{transition-delay:.2s;}
.rv.vis,.rv2.vis,.rv3.vis{opacity:1;transform:translateY(0);}
@media(max-width:900px){
  .hero-grid{grid-template-columns:1fr;}.hero h1{font-size:36px;}
  .inc-grid,.formats-grid{grid-template-columns:1fr 1fr;}
  .stats-inner{grid-template-columns:1fr 1fr;}
  .steps-grid{grid-template-columns:repeat(2,1fr);}.steps-grid::before{display:none;}
  .faq-2col{grid-template-columns:1fr;}
}
@media(max-width:600px){
  .inc-grid,.formats-grid,.stats-inner{grid-template-columns:1fr;}
  section{padding:60px 0;}.hero{padding:64px 0 52px;}
}
`

const ld0 = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "AI Ad Creatives",
      "provider": {
        "@type": "Organization",
        "name": "Click Decoded",
        "url": "https://www.clickdecoded.com"
      },
      "description": "AI-powered ad creative generation at scale. Click Decoded produces hundreds of on-brand ad variants — copy, visuals, and video — tested and optimised for CTR and conversions.",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": "AI Ad Creatives",
      "url": "https://www.clickdecoded.com/services/ai-ad-creatives"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Will AI-generated ads sound generic or off-brand?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No — our AI is trained on your brand guidelines, past creative, and tone-of-voice documentation before generating a single word. The first batch goes through a human review and brand alignment check before anything goes live. Output that doesn't pass is revised, not shipped."
          }
        },
        {
          "@type": "Question",
          "name": "How many creative variants do you produce per month?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typically 100–300 copy variants per campaign in the first month, reducing to 30–60 in subsequent months as winning angles are identified. Volume is calibrated to your ad spend, platform mix, and number of audience segments — more segments means more variants needed."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle the visuals or just the copy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both. For copy-only formats (Search, Display, WhatsApp), we handle everything. For visual ad formats, we produce AI-generated visual concepts and detailed design briefs. If you have a design team, we hand off briefs to them. If not, we connect you with our creative partners for final production."
          }
        },
        {
          "@type": "Question",
          "name": "Which industries do you have creative experience in?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Real estate, healthcare, education, e-commerce, SaaS, hospitality, finance, and legal. Each industry has specific regulatory, tone, and messaging nuances — our AI is prompted with industry-specific guardrails to ensure compliance and relevance for each vertical."
          }
        },
        {
          "@type": "Question",
          "name": "How long before we see a CTR improvement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most clients see a statistically meaningful CTR lift within 2–3 weeks of the first variant batch going live. The biggest gains typically arrive in Month 2–3, once the AI has a full cycle of performance data to iterate on. Compounding improvement is the point of the process."
          }
        },
        {
          "@type": "Question",
          "name": "Can AI creatives replace our in-house design team?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For copy and strategy — yes, largely. For final pixel-perfect visual production — no, not entirely. AI handles ideation, concepts, and briefs at speed and scale; human designers handle final execution. The combination is far more productive than either alone."
          }
        },
        {
          "@type": "Question",
          "name": "Is AI creative generation allowed on Google and Meta?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — both platforms allow AI-assisted ad creation. The policies that apply are the same as for human-written ads: no misleading claims, no prohibited categories, accurate product representation. Our team reviews all output for policy compliance before anything is submitted for approval."
          }
        },
        {
          "@type": "Question",
          "name": "What do I need to provide to get started?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Brand guidelines (or just your logo and colour palette), 3–5 examples of past ads you liked, a brief on your target audience and campaign goal, and access to your ad accounts. From there we handle everything — brief, generation, review, launch, and reporting."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How AI Ad Creatives India Works — Our Process",
      "description": "AI-powered ad creative generation at scale. Click Decoded produces hundreds of on-brand ad variants — copy, visuals, and video — tested and optimised for CTR and conversions.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Brand & Brief Intake",
          "text": "We capture your brand guidelines, tone of voice, audience personas, and campaign objectives. Your brand profile is fed into the AI to ensure every output is on-brand from day one."
        },
        {
          "@type": "HowToStep",
          "name": "AI Variant Generation",
          "text": "AI generates 100–300+ copy variants per campaign across multiple angles — urgency, benefit, social proof, curiosity, and FOMO — structured for each platform format."
        },
        {
          "@type": "HowToStep",
          "name": "Launch & Multi-Variant Test",
          "text": "Top variants pushed live simultaneously. Platform algorithms and our team monitor CTR, CPC, and conversion rate in real-time — pausing underperformers within 48–72 hours."
        },
        {
          "@type": "HowToStep",
          "name": "Learn, Iterate, Compound",
          "text": "Performance data feeds back into the AI prompt engine. Month 2 variants are smarter than Month 1. Month 3 smarter still — creative performance compounds over time."
        }
      ]
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
          "name": "AI Ad Creatives",
          "item": "https://www.clickdecoded.com/services/ai-ad-creatives"
        }
      ]
    }
  ]
}`

const js0 = `(function(){
const obs=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('vis');});},{threshold:.12});
document.querySelectorAll('.rv,.rv2,.rv3').forEach(el=>obs.observe(el));
const hdr=document.getElementById('hdr');
if(hdr)window.addEventListener('scroll',()=>hdr.classList.toggle('up',scrollY>40),{passive:true});
const hb=document.getElementById('hb'),mn=document.getElementById('mnav'),mc=document.getElementById('mnav-close');
if(hb)hb.addEventListener('click',()=>{mn.classList.add('on');document.body.style.overflow='hidden';});
if(mc)mc.addEventListener('click',()=>{mn.classList.remove('on');document.body.style.overflow='';});
document.querySelectorAll('.ma>button').forEach(b=>{
  b.addEventListener('click',()=>{const p=b.parentElement,o=p.classList.contains('on');document.querySelectorAll('.ma').forEach(x=>x.classList.remove('on'));if(!o)p.classList.add('on');});
});
document.querySelectorAll('.fi-q').forEach(b=>b.addEventListener('click',()=>{
  const fi=b.parentElement,was=fi.classList.contains('on');
  document.querySelectorAll('.fi').forEach(x=>x.classList.remove('on'));
  if(!was)fi.classList.add('on');
}));
})();`

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld0 }} />
      <div className="breadcrumb"><div className="wrap"><div className="bc-list"><a href="/">Home</a><span style={{ opacity: '.4' }}>›</span><span>AI &amp; Automation</span><span style={{ opacity: '.4' }}>›</span><span>AI Ad Creatives</span></div></div></div>
      <section className="hero">
<div className="wrap">
<div className="hero-grid">
<div>
<div className="hero-eyebrow">🤖 AI-Powered · 100s of Variants · Auto-Optimised</div>
<h1>Ad Creatives That <em>Write Themselves</em> and Actually Convert.</h1>
<p className="hero-desc">Stop producing one ad at a time. Our AI creative engine generates hundreds of on-brand copy variants, visual concepts, and video scripts — then tests them to automatically surface your highest performers.</p>
<div className="hero-btns">
<a href="/contact" className="btn btn-ac">🤖 See AI Creative Demo</a>
<a href="https://wa.me/919407000101" className="btn btn-ghost">💬 WhatsApp Us</a>
</div>
<div className="hero-proof">
<span className="proof-item"><strong>3.2×</strong> Avg CTR Lift</span>
<span className="proof-item"><strong>10× Faster</strong> Creative Output</span>
<span className="proof-item"><strong>₹25K</strong> Starting / Month</span>
</div>
</div>

<div className="ai-mock">
<div className="mock-browser">
<div className="mock-dots"><span></span><span></span><span></span></div>
<div className="mock-url">AI Creative Studio — Click Decoded</div>
</div>
<div className="ai-header">
<div className="ai-title">🤖 Generating Ad Variants — Real Estate Campaign</div>
<div className="ai-badge">GPT-4o + Midjourney</div>
</div>
<div className="ai-prompt">
<div className="prompt-row">
<span className="prompt-text">Luxury 3BHK Indore | ₹85L | Festive offer | Target: 35-50 age homebuyers</span>
<button className="prompt-gen">Generate →</button>
</div>
</div>
<div className="ai-variants">
<div className="variant">
<div className="var-img">🏠</div>
<div className="var-body">
<div className="var-label">Variant A · Urgency</div>
<div className="var-head">Only 4 Flats Left at ₹85L. Book Before Diwali.</div>
<div className="var-ctr">
<div className="ctr-bar-wrap"><div className="ctr-bar" style={{ width: '62%' }}></div></div>
<div className="ctr-val">3.1%</div>
</div>
</div>
</div>
<div className="variant winner">
<div className="var-img">🏡</div>
<div className="var-body">
<div className="var-label">Variant B · Benefit</div>
<div className="var-head">3BHK Your Family Deserves. EMI Starts ₹42K/mo.</div>
<div className="var-ctr">
<div className="ctr-bar-wrap"><div className="ctr-bar" style={{ width: '88%' }}></div></div>
<div className="ctr-val">4.8%</div>
</div>
<div className="var-winner-tag">🏆 Best Performer</div>
</div>
</div>
<div className="variant">
<div className="var-img">🏢</div>
<div className="var-body">
<div className="var-label">Variant C · Social</div>
<div className="var-head">482 Families Chose Us. Ready to Be Next?</div>
<div className="var-ctr">
<div className="ctr-bar-wrap"><div className="ctr-bar" style={{ width: '54%' }}></div></div>
<div className="ctr-val">2.7%</div>
</div>
</div>
</div>
</div>
<div className="ai-metrics">
<div className="ai-metric"><div className="aim-val">247</div><div className="aim-label">Variants Generated</div></div>
<div className="ai-metric"><div className="aim-val">3.2×</div><div className="aim-label">CTR Lift</div></div>
<div className="ai-metric"><div className="aim-val">4.8%</div><div className="aim-label">Top Variant CTR</div></div>
</div>
</div>
</div>
</div>
</section>
      <div className="stats-strip">
<div className="stats-inner">
<div className="stat-box"><div className="stat-n">247+</div><div className="stat-l">Variants Per Campaign</div></div>
<div className="stat-box"><div className="stat-n">3.2×</div><div className="stat-l">Average CTR Lift</div></div>
<div className="stat-box"><div className="stat-n">10×</div><div className="stat-l">Faster Than Manual</div></div>
<div className="stat-box"><div className="stat-n">₹25K</div><div className="stat-l">Starting / Month</div></div>
</div>
</div>
      <section>
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag">What's Included</div>
<h2>The Full AI Creative Stack,<br />Managed End-to-End.</h2>
<p>From brief to live ad — our AI creative workflow covers copy, visuals, video, and continuous optimisation.</p>
</div>
<div className="inc-grid">
<div className="inc-card rv"><div className="inc-icon">✍️</div><h3>AI Ad Copywriting</h3><p>Hundreds of ad copy variants generated from your brief — headlines, primary text, CTAs, and descriptions — each tuned to your audience segment, platform, and funnel stage.</p></div>
<div className="inc-card rv2"><div className="inc-icon">🖼️</div><h3>AI Visual Concepts</h3><p>AI-generated image concepts and visual briefs aligned with your brand palette and campaign objective — ready for designer execution or used directly for social display ads.</p></div>
<div className="inc-card rv3"><div className="inc-icon">🎬</div><h3>AI Video Script Generation</h3><p>Short-form video scripts (15s, 30s, 60s) written by AI for Reels, YouTube Shorts, and Stories — structured for hook, body, and CTA with platform-native pacing.</p></div>
<div className="inc-card rv"><div className="inc-icon">🧪</div><h3>Multi-Variant A/B Testing</h3><p>All variants pushed live and tested simultaneously. Performance data fed back into the AI to generate next-round iterations — a creative learning loop that improves each week.</p></div>
<div className="inc-card rv2"><div className="inc-icon">🎨</div><h3>Brand-Consistent Output</h3><p>AI trained on your brand guidelines, tone of voice, and past creative — so every variant feels on-brand, not generic. Output matches your visual identity and messaging framework.</p></div>
<div className="inc-card rv3"><div className="inc-icon">📊</div><h3>Creative Performance Reports</h3><p>Monthly reports showing CTR, conversion rate, and ROAS by creative variant — plus AI-generated insights on what messaging resonated, and the creative roadmap for next month.</p></div>
</div>
</div>
</section>
      <section className="dark-section">
<div className="wrap">
<div className="sec-h rv" style={{ marginBottom: '40px' }}>
<h2 style={{ color: '#fff' }}>Every Ad Format,<br />AI-Generated at Scale.</h2>
<p style={{ color: 'rgba(255,255,255,.55)' }}>From static banners to dynamic video — our AI creative engine covers every format your campaigns need.</p>
</div>
<div className="formats-grid">
<div className="fmt-card rv"><div className="fmt-top"><div className="fmt-icon">📘</div><div className="fmt-tag">Meta</div></div><h3>Facebook &amp; Instagram Ads</h3><p>Feed ads, Stories, Reels, and carousel copy — multiple variants per format, all tested simultaneously on Meta to surface the angle that converts your specific audience.</p></div>
<div className="fmt-card rv2"><div className="fmt-top"><div className="fmt-icon">🔍</div><div className="fmt-tag">Google</div></div><h3>Google Search Ad Copy</h3><p>RSA-ready headlines and descriptions in bulk — AI generates 15+ headline variations per ad group, tested by Google's machine learning against your quality score benchmarks.</p></div>
<div className="fmt-card rv3"><div className="fmt-top"><div className="fmt-icon">▶</div><div className="fmt-tag">YouTube</div></div><h3>YouTube Ad Scripts</h3><p>Hook-heavy video scripts for 6-second bumpers and 15–30s skippable ads — written with pattern-interrupt openers, clear value delivery, and urgency-driven CTAs.</p></div>
<div className="fmt-card rv"><div className="fmt-top"><div className="fmt-icon">💼</div><div className="fmt-tag">LinkedIn</div></div><h3>LinkedIn Sponsored Content</h3><p>B2B ad copy with professional tone, insight-led hooks, and data-backed claims — written for decision-maker audiences in finance, HR, ops, and C-suite roles.</p></div>
<div className="fmt-card rv2"><div className="fmt-top"><div className="fmt-icon">🖥️</div><div className="fmt-tag">Display</div></div><h3>Banner &amp; Display Ads</h3><p>Responsive display ad copy across all sizes — headline, description, and CTA combinations tested at scale via Google Display Network for retargeting and prospecting.</p></div>
<div className="fmt-card rv3"><div className="fmt-top"><div className="fmt-icon">📱</div><div className="fmt-tag">WhatsApp</div></div><h3>WhatsApp &amp; Messaging Ads</h3><p>Click-to-WhatsApp ad copy that converts scroll to conversation — short, direct, and conversational, optimised for the intent of users clicking through to a chat window.</p></div>
</div>
</div>
</section>
      <section className="bg-subtle">
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag">Our Process</div>
<h2>Brief In. Best-Performing Ads Out.<br />On Repeat.</h2>
<p>A creative flywheel that gets smarter every sprint — each round of testing improves the next round of generation.</p>
</div>
<div className="steps-grid">
<div className="step rv"><div className="step-num">01</div><h4>Brand &amp; Brief Intake</h4><p>We capture your brand guidelines, tone of voice, audience personas, and campaign objectives. Your brand profile is fed into the AI to ensure every output is on-brand from day one.</p></div>
<div className="step rv2"><div className="step-num">02</div><h4>AI Variant Generation</h4><p>AI generates 100–300+ copy variants per campaign across multiple angles — urgency, benefit, social proof, curiosity, and FOMO — structured for each platform format.</p></div>
<div className="step rv3"><div className="step-num">03</div><h4>Launch &amp; Multi-Variant Test</h4><p>Top variants pushed live simultaneously. Platform algorithms and our team monitor CTR, CPC, and conversion rate in real-time — pausing underperformers within 48–72 hours.</p></div>
<div className="step rv3"><div className="step-num">04</div><h4>Learn, Iterate, Compound</h4><p>Performance data feeds back into the AI prompt engine. Month 2 variants are smarter than Month 1. Month 3 smarter still — creative performance compounds over time.</p></div>
</div>
</div>
</section>
      <section>
<div className="wrap">
<div className="sec-h rv"><h2>Frequently Asked Questions</h2></div>
<div className="faq-2col">
<div>
<div className="fi"><button className="fi-q">Will AI-generated ads sound generic or off-brand?<div className="fi-icon">+</div></button><div className="fi-a">No — our AI is trained on your brand guidelines, past creative, and tone-of-voice documentation before generating a single word. The first batch goes through a human review and brand alignment check before anything goes live. Output that doesn't pass is revised, not shipped.</div></div>
<div className="fi"><button className="fi-q">How many creative variants do you produce per month?<div className="fi-icon">+</div></button><div className="fi-a">Typically 100–300 copy variants per campaign in the first month, reducing to 30–60 in subsequent months as winning angles are identified. Volume is calibrated to your ad spend, platform mix, and number of audience segments — more segments means more variants needed.</div></div>
<div className="fi"><button className="fi-q">Do you handle the visuals or just the copy?<div className="fi-icon">+</div></button><div className="fi-a">Both. For copy-only formats (Search, Display, WhatsApp), we handle everything. For visual ad formats, we produce AI-generated visual concepts and detailed design briefs. If you have a design team, we hand off briefs to them. If not, we connect you with our creative partners for final production.</div></div>
<div className="fi"><button className="fi-q">Which industries do you have creative experience in?<div className="fi-icon">+</div></button><div className="fi-a">Real estate, healthcare, education, e-commerce, SaaS, hospitality, finance, and legal. Each industry has specific regulatory, tone, and messaging nuances — our AI is prompted with industry-specific guardrails to ensure compliance and relevance for each vertical.</div></div>
</div>
<div>
<div className="fi"><button className="fi-q">How long before we see a CTR improvement?<div className="fi-icon">+</div></button><div className="fi-a">Most clients see a statistically meaningful CTR lift within 2–3 weeks of the first variant batch going live. The biggest gains typically arrive in Month 2–3, once the AI has a full cycle of performance data to iterate on. Compounding improvement is the point of the process.</div></div>
<div className="fi"><button className="fi-q">Can AI creatives replace our in-house design team?<div className="fi-icon">+</div></button><div className="fi-a">For copy and strategy — yes, largely. For final pixel-perfect visual production — no, not entirely. AI handles ideation, concepts, and briefs at speed and scale; human designers handle final execution. The combination is far more productive than either alone.</div></div>
<div className="fi"><button className="fi-q">Is AI creative generation allowed on Google and Meta?<div className="fi-icon">+</div></button><div className="fi-a">Yes — both platforms allow AI-assisted ad creation. The policies that apply are the same as for human-written ads: no misleading claims, no prohibited categories, accurate product representation. Our team reviews all output for policy compliance before anything is submitted for approval.</div></div>
<div className="fi"><button className="fi-q">What do I need to provide to get started?<div className="fi-icon">+</div></button><div className="fi-a">Brand guidelines (or just your logo and colour palette), 3–5 examples of past ads you liked, a brief on your target audience and campaign goal, and access to your ad accounts. From there we handle everything — brief, generation, review, launch, and reporting.</div></div>
</div>
</div>
</div>
</section>
      <div className="wrap" style={{ padding: '40px 28px', borderTop: '1px solid var(--bdr)' }}>
<div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--s)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '16px' }}>Related Services</div>
<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
<a href="/services/google-ads" className="rel-link">🔍 Google Ads</a>
<a href="/services/meta-ads" className="rel-link">📘 Meta Ads</a>
<a href="/services/retargeting" className="rel-link">🔄 Retargeting</a>
<a href="/services/ai-content" className="rel-link">📝 AI Content</a>
<a href="/services/ai-automation" className="rel-link">🤖 AI Automation</a>
</div>
</div>
      <section className="cta-section">
<div className="wrap">
<h2>See What AI Can Do<br />For Your Ad Performance.</h2>
<p>Get a free creative audit — we'll generate sample variants for your best campaign and show you exactly what CTR lift is possible.</p>
<div className="cta-btns">
<a href="/contact" className="btn btn-ac">🤖 Get Free Creative Audit</a>
<a href="https://wa.me/919407000101" className="btn btn-wa">💬 WhatsApp Now</a>
</div>
</div>
</section>
      <PageScript id="services-ai-ad-creatives-0" code={js0} />
    </>
  )
}
