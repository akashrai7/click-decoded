/* eslint-disable */
// src/app/services/ai-content/page.tsx — generated from ai-content.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "AI Content Generation India | Click Decoded",
  description: "AI-powered content generation for blogs, social media, product descriptions, and SEO copy. Click Decoded produces high-quality, on-brand content 10×.",
  alternates: { canonical: "/services/ai-content" },
}

const css = `
:root{
  --ac:#0891B2;--ac2:#0e7490;--ac-rgb:8,145,178;
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
.hero{background:linear-gradient(155deg,#020e16 0%,#051c2e 45%,#020e16 100%);padding:96px 0 80px;position:relative;overflow:hidden;}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 60% at 70% 30%,rgba(8,145,178,.2) 0%,transparent 65%),radial-gradient(ellipse 35% 40% at 5% 80%,rgba(8,145,178,.08) 0%,transparent 60%);}
.hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;position:relative;z-index:2;}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;background:rgba(8,145,178,.12);border:1px solid rgba(8,145,178,.3);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#67e8f9;margin-bottom:20px;}
.hero h1{font-size:48px;color:#fff;line-height:1.06;letter-spacing:-.04em;margin-bottom:20px;}
.hero h1 em{font-style:normal;background:linear-gradient(135deg,#67e8f9,#0891b2);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-desc{font-size:17px;color:rgba(255,255,255,.62);line-height:1.7;margin-bottom:32px;max-width:460px;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:36px;}
.hero-proof{display:flex;gap:24px;flex-wrap:wrap;}
.proof-item{font-size:13px;color:rgba(255,255,255,.5);}
.proof-item strong{color:#fff;font-weight:700;}
/* CONTENT STUDIO MOCK */
.cs-mock{border-radius:20px;overflow:hidden;box-shadow:0 28px 70px rgba(0,0,0,.6);background:#040f1a;border:1px solid rgba(8,145,178,.25);}
.mock-browser{background:rgba(255,255,255,.05);padding:10px 14px;border-bottom:1px solid rgba(255,255,255,.07);display:flex;align-items:center;gap:10px;}
.mock-dots{display:flex;gap:5px;}
.mock-dots span{width:9px;height:9px;border-radius:50%;}
.mock-dots span:nth-child(1){background:#ff5f57;}
.mock-dots span:nth-child(2){background:#ffbd2e;}
.mock-dots span:nth-child(3){background:#28c840;}
.mock-url{flex:1;background:rgba(255,255,255,.07);border-radius:6px;padding:5px 12px;font-size:11px;color:rgba(255,255,255,.35);}
.cs-header{background:rgba(8,145,178,.1);border-bottom:1px solid rgba(8,145,178,.2);padding:10px 16px;display:flex;align-items:center;justify-content:space-between;}
.cs-title{font-size:12px;font-weight:700;color:rgba(255,255,255,.75);}
.cs-badge{font-size:10px;font-weight:700;padding:3px 9px;border-radius:5px;background:rgba(8,145,178,.2);border:1px solid rgba(8,145,178,.35);color:#67e8f9;}
/* Tabs */
.cs-tabs{display:flex;border-bottom:1px solid rgba(255,255,255,.06);}
.cs-tab{flex:1;padding:9px 12px;font-size:10px;font-weight:700;text-align:center;color:rgba(255,255,255,.3);border:none;background:none;cursor:pointer;text-transform:uppercase;letter-spacing:.06em;}
.cs-tab.active{color:#67e8f9;border-bottom:2px solid #0891b2;background:rgba(8,145,178,.06);}
/* Editor area */
.cs-editor{padding:12px 14px;}
.cs-doc-title{font-size:12px;font-weight:800;color:#fff;margin-bottom:8px;}
.cs-line{height:6px;border-radius:3px;background:rgba(255,255,255,.08);margin-bottom:5px;}
.cs-line.w-90{width:90%;}
.cs-line.w-75{width:75%;}
.cs-line.w-85{width:85%;}
.cs-line.w-60{width:60%;}
.cs-line.w-40{width:40%;}
.cs-line.accent{background:linear-gradient(90deg,rgba(8,145,178,.5),rgba(8,145,178,.15));animation:typeLine 2.5s ease-in-out infinite;}
@keyframes typeLine{0%,100%{opacity:.4}50%{opacity:1}}
.cs-cursor{display:inline-block;width:2px;height:12px;background:#0891b2;margin-left:2px;animation:blink .8s step-end infinite;vertical-align:middle;}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
/* SEO score pill */
.cs-scores{display:flex;gap:6px;margin-top:10px;}
.cs-score{display:flex;align-items:center;gap:5px;padding:4px 9px;border-radius:6px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);}
.score-dot{width:7px;height:7px;border-radius:50%;}
.score-label{font-size:9px;font-weight:700;color:rgba(255,255,255,.45);}
.score-val{font-size:10px;font-weight:800;}
/* Stats row */
.cs-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,.05);border-top:1px solid rgba(255,255,255,.06);}
.cs-stat{padding:11px 12px;background:#040f1a;text-align:center;}
.cssv{font-size:17px;font-weight:900;color:#fff;letter-spacing:-.02em;line-height:1;}
.cssl{font-size:9px;color:rgba(255,255,255,.35);margin-top:3px;text-transform:uppercase;letter-spacing:.05em;}
/* Queue */
.cs-queue{padding:10px 14px;border-top:1px solid rgba(255,255,255,.06);}
.queue-label{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:rgba(255,255,255,.25);margin-bottom:7px;}
.queue-items{display:flex;flex-direction:column;gap:5px;}
.qi{display:flex;align-items:center;gap:8px;padding:5px 8px;background:rgba(255,255,255,.03);border-radius:6px;}
.qi-icon{font-size:13px;}
.qi-text{font-size:10px;color:rgba(255,255,255,.5);flex:1;}
.qi-status{font-size:9px;font-weight:700;padding:2px 7px;border-radius:4px;}
.qi-done{background:rgba(74,222,128,.1);border:1px solid rgba(74,222,128,.2);color:#4ade80;}
.qi-prog{background:rgba(8,145,178,.15);border:1px solid rgba(8,145,178,.25);color:#67e8f9;}
.qi-wait{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);color:rgba(255,255,255,.3);}
/* STATS */
.stats-strip{background:var(--ac);}
.stats-inner{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(0,0,0,.2);}
.stat-box{padding:32px 24px;text-align:center;background:var(--ac);}
.stat-n{font-size:40px;font-weight:900;color:#fff;line-height:1;letter-spacing:-.03em;}
.stat-l{font-size:12px;color:rgba(255,255,255,.75);margin-top:6px;font-weight:500;text-transform:uppercase;letter-spacing:.06em;}
/* SECTIONS */
.sec-h{text-align:center;max-width:640px;margin:0 auto 52px;}
.sec-tag{display:inline-flex;padding:5px 13px;border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:10px;background:rgba(8,145,178,.08);border:1px solid rgba(8,145,178,.18);color:var(--ac);}
.sec-h h2{font-size:36px;margin-bottom:14px;}
.sec-h p{font-size:16px;color:var(--m);line-height:1.65;}
.inc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.inc-card{background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:28px 24px;transition:.2s;}
.inc-card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(8,145,178,.1);border-color:rgba(8,145,178,.22);}
.inc-icon{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:16px;background:rgba(8,145,178,.07);border:1px solid rgba(8,145,178,.12);}
.inc-card h3{font-size:17px;margin-bottom:10px;}
.inc-card p{font-size:13.5px;color:var(--m);line-height:1.65;}
.dark-section{background:var(--n-dark);padding:88px 0;}
.formats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:1000px;margin:0 auto;}
.fmt-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:24px;transition:.2s;}
.fmt-card:hover{border-color:rgba(8,145,178,.35);background:rgba(8,145,178,.07);transform:translateY(-2px);}
.fmt-top{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px;}
.fmt-icon{font-size:26px;}
.fmt-tag{font-size:10px;font-weight:700;padding:3px 8px;border-radius:5px;background:rgba(8,145,178,.18);border:1px solid rgba(8,145,178,.3);color:#67e8f9;}
.fmt-card h3{font-size:15px;font-weight:700;color:#fff;margin-bottom:6px;}
.fmt-card p{font-size:13px;color:rgba(255,255,255,.5);line-height:1.6;}
.bg-subtle{background:var(--bg);}
.steps-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative;}
.steps-grid::before{content:'';position:absolute;top:34px;left:12%;right:12%;height:2px;background:linear-gradient(90deg,var(--ac),var(--ac2));z-index:0;opacity:.4;}
.step{text-align:center;padding:0 16px;position:relative;z-index:1;}
.step-num{width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,var(--ac),var(--ac2));color:#fff;font-size:20px;font-weight:900;display:flex;align-items:center;justify-content:center;margin:0 auto 18px;box-shadow:0 8px 24px rgba(8,145,178,.3);}
.step h4{font-size:15px;margin-bottom:7px;}
.step p{font-size:13px;color:var(--m);line-height:1.6;}
.faq-2col{display:grid;grid-template-columns:1fr 1fr;gap:0 28px;align-items:start;}
.fi{border:1px solid var(--bdr);border-radius:14px;margin-bottom:10px;overflow:hidden;background:#fff;transition:.15s;}
.fi.on{border-color:rgba(8,145,178,.3);box-shadow:0 4px 20px rgba(8,145,178,.07);}
.fi-q{width:100%;text-align:left;background:transparent;border:none;padding:20px 22px;font-size:14px;font-weight:700;color:var(--n);display:flex;justify-content:space-between;align-items:center;gap:12px;cursor:pointer;}
.fi-icon{width:26px;height:26px;border-radius:50%;flex-shrink:0;background:var(--bg);border:1px solid var(--bdr);display:flex;align-items:center;justify-content:center;color:var(--ac);font-size:18px;line-height:1;transition:transform .2s;}
.fi.on .fi-icon{transform:rotate(45deg);background:var(--ac);color:#fff;border-color:var(--ac);}
.fi-a{max-height:0;overflow:hidden;transition:.3s;color:var(--m);font-size:14px;line-height:1.75;}
.fi.on .fi-a{max-height:300px;padding:0 22px 22px;}
.cta-section{background:linear-gradient(155deg,#020e16 0%,#051c2e 100%);padding:96px 0;text-align:center;position:relative;overflow:hidden;}
.cta-section::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(8,145,178,.15) 0%,transparent 70%);}
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
      "name": "AI Content Creation",
      "provider": {
        "@type": "Organization",
        "name": "Click Decoded",
        "url": "https://www.clickdecoded.com"
      },
      "description": "AI-powered content generation for blogs, social media, product descriptions, and SEO copy. Click Decoded produces high-quality, on-brand content 10× faster and at a fraction of the cost.",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": "AI Content Creation",
      "url": "https://www.clickdecoded.com/services/ai-content"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Will search engines penalise AI-generated content?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Google's policy is clear: it rewards helpful, accurate, high-quality content regardless of how it was produced. AI-generated content that is factually correct, well-structured, and genuinely useful ranks just as well as human-written content. Our human edit layer ensures every piece meets Google's E-E-A-T standards."
          }
        },
        {
          "@type": "Question",
          "name": "How do you maintain my brand voice across AI output?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We build a detailed brand voice brief — tone adjectives, sample approved copy, phrases to avoid, sentence length preferences, and persona documentation. This brief is used as a system prompt for all AI generation, and human editors enforce it during review. Brand voice consistency improves with each month of data."
          }
        },
        {
          "@type": "Question",
          "name": "Can you handle content for multiple languages?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — we produce content in English and Hindi as standard, and can accommodate Hinglish (a mix used widely in Indian social media). Other regional languages are available on request with native speaker review included before delivery."
          }
        },
        {
          "@type": "Question",
          "name": "Do you publish directly to our website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, for WordPress and most popular CMS platforms. We can post directly with proper meta data, internal links, categories, and featured images (AI-sourced or stock). Alternatively, we deliver a content package in Google Docs with publishing instructions if you prefer to retain control of your CMS."
          }
        },
        {
          "@type": "Question",
          "name": "How many pieces of content do I get per month?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on your plan and content mix. A typical ₹25K/month engagement produces 8–12 long-form blog posts, or 20–30 social captions, or 50–80 product descriptions — or a mix. Higher plans increase volume. We define the content calendar together during onboarding based on your priorities."
          }
        },
        {
          "@type": "Question",
          "name": "Is the content plagiarism-free and original?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — all output is run through plagiarism detection tools before delivery. AI-generated content is compositionally original by nature, but we verify anyway. We do not spin existing articles or scrape competitor content. Every piece is generated from scratch against your brief and keyword target."
          }
        },
        {
          "@type": "Question",
          "name": "Will the content include internal links and SEO metadata?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every blog post includes a keyword-optimised title tag, meta description, H1–H3 structure, internal links to relevant service/product pages, and a target keyword density check. For e-commerce, product titles are formatted to Google Shopping specifications by default."
          }
        },
        {
          "@type": "Question",
          "name": "How long until we see SEO results from the content?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Content SEO typically shows movement in Google Search Console within 4–8 weeks of publication. Meaningful ranking improvements on competitive terms take 3–6 months. Clients on consistent 8+ posts/month plans typically see 40–80% organic traffic growth within 6 months compared to no-content baseline."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How AI Content Generation India Works — Our Process",
      "description": "AI-powered content generation for blogs, social media, product descriptions, and SEO copy. Click Decoded produces high-quality, on-brand content 10× faster and at a fraction of the cost.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Brand Voice Onboarding",
          "text": "We document your brand tone, audience personas, banned phrases, preferred style, and content pillars. This brief trains the AI so every output sounds like you — not a generic robot."
        },
        {
          "@type": "HowToStep",
          "name": "Keyword & Topic Research",
          "text": "Monthly content calendar built around high-intent, low-competition keywords. Each piece is mapped to a stage of your buyer journey — awareness, consideration, or decision — before a single word is written."
        },
        {
          "@type": "HowToStep",
          "name": "AI Draft + Human Edit",
          "text": "AI generates structured drafts at speed. Our content team edits for accuracy, adds E-E-A-T signals, removes AI tells, and optimises on-page SEO — delivering content that reads human and ranks well."
        },
        {
          "@type": "HowToStep",
          "name": "Publish, Track & Improve",
          "text": "Content published to your CMS (or delivered in Google Docs). Monthly performance reports track ranking changes, organic traffic growth, and engagement — feeding directly into next month's content plan."
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
          "name": "AI Content Creation",
          "item": "https://www.clickdecoded.com/services/ai-content"
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
// Tab switching for mock
document.querySelectorAll('.cs-tab').forEach(t=>t.addEventListener('click',()=>{
  document.querySelectorAll('.cs-tab').forEach(x=>x.classList.remove('active'));
  t.classList.add('active');
}));
})();`

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld0 }} />
      <div className="breadcrumb"><div className="wrap"><div className="bc-list"><a href="/">Home</a><span style={{ opacity: '.4' }}>›</span><span>AI &amp; Automation</span><span style={{ opacity: '.4' }}>›</span><span>AI Content Generation</span></div></div></div>
      <section className="hero">
<div className="wrap">
<div className="hero-grid">
<div>
<div className="hero-eyebrow">📝 AI Content · SEO-Optimised · On-Brand at Scale</div>
<h1>Content That <em>Ranks, Converts</em> and Never Runs Out.</h1>
<p className="hero-desc">Blogs, social captions, product descriptions, landing page copy, and email sequences — AI-generated at 10× the speed of traditional content teams, with SEO baked in and your brand voice locked in from day one.</p>
<div className="hero-btns">
<a href="/contact" className="btn btn-ac">📝 See Content Samples</a>
<a href="https://wa.me/919407000101" className="btn btn-ghost">💬 WhatsApp Us</a>
</div>
<div className="hero-proof">
<span className="proof-item"><strong>10×</strong> Content Output</span>
<span className="proof-item"><strong>87%</strong> Avg SEO Score</span>
<span className="proof-item"><strong>₹25K</strong> Starting / Month</span>
</div>
</div>

<div className="cs-mock">
<div className="mock-browser">
<div className="mock-dots"><span></span><span></span><span></span></div>
<div className="mock-url">AI Content Studio — Click Decoded</div>
</div>
<div className="cs-header">
<div className="cs-title">📝 Content Generation Queue — Active</div>
<div className="cs-badge">GPT-4o · SEO Mode</div>
</div>
<div className="cs-tabs">
<button className="cs-tab active">Blog Post</button>
<button className="cs-tab">Social</button>
<button className="cs-tab">Product</button>
</div>
<div className="cs-editor">
<div className="cs-doc-title">10 Proven Ways to Generate Real Estate Leads in Indore (2025)</div>
<div className="cs-line w-90 accent"></div>
<div className="cs-line w-75"></div>
<div className="cs-line w-85"></div>
<div className="cs-line w-60"></div>
<div className="cs-line w-90"></div>
<div className="cs-line w-40"></div>
<div style={{ display: 'flex', alignItems: 'center', marginTop: '4px' }}>
<div className="cs-line w-75" style={{ margin: '0', flex: '1' }}></div>
<div className="cs-cursor"></div>
</div>
<div className="cs-scores">
<div className="cs-score"><div className="score-dot" style={{ background: '#4ade80' }}></div><div className="score-label">SEO</div><div className="score-val" style={{ color: '#4ade80' }}>91</div></div>
<div className="cs-score"><div className="score-dot" style={{ background: '#67e8f9' }}></div><div className="score-label">Readability</div><div className="score-val" style={{ color: '#67e8f9' }}>88</div></div>
<div className="cs-score"><div className="score-dot" style={{ background: '#fbbf24' }}></div><div className="score-label">Words</div><div className="score-val" style={{ color: '#fbbf24' }}>1,840</div></div>
</div>
</div>
<div className="cs-stats">
<div className="cs-stat"><div className="cssv">48</div><div className="cssl">Published This Month</div></div>
<div className="cs-stat"><div className="cssv">87</div><div className="cssl">Avg SEO Score</div></div>
<div className="cs-stat"><div className="cssv">10×</div><div className="cssl">Output vs Manual</div></div>
</div>
<div className="cs-queue">
<div className="queue-label">Content Queue</div>
<div className="queue-items">
<div className="qi"><div className="qi-icon">📄</div><div className="qi-text">Top 7 SEO Mistakes Businesses Make — 1,600 words</div><div className="qi-status qi-done">Done ✓</div></div>
<div className="qi"><div className="qi-icon">📱</div><div className="qi-text">Instagram captions — Diwali sale × 10</div><div className="qi-status qi-prog">Writing…</div></div>
<div className="qi"><div className="qi-icon">🛒</div><div className="qi-text">Product descriptions — 80 SKUs batch</div><div className="qi-status qi-wait">Queued</div></div>
</div>
</div>
</div>
</div>
</div>
</section>
      <div className="stats-strip">
<div className="stats-inner">
<div className="stat-box"><div className="stat-n">48+</div><div className="stat-l">Pieces / Month</div></div>
<div className="stat-box"><div className="stat-n">87</div><div className="stat-l">Avg SEO Score</div></div>
<div className="stat-box"><div className="stat-n">10×</div><div className="stat-l">Faster Than Manual</div></div>
<div className="stat-box"><div className="stat-n">₹25K</div><div className="stat-l">Starting / Month</div></div>
</div>
</div>
      <section>
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag">What's Included</div>
<h2>Every Content Type. One<br />Unified AI Workflow.</h2>
<p>From long-form SEO blogs to 80-SKU product description batches — fully managed, brand-consistent, and delivered on schedule.</p>
</div>
<div className="inc-grid">
<div className="inc-card rv"><div className="inc-icon">📰</div><h3>SEO Blog Content</h3><p>Long-form articles (1,200–3,000 words) built around target keywords, E-E-A-T signals, and topic clusters. Each post includes meta title, description, internal links, and a keyword-optimised H-structure.</p></div>
<div className="inc-card rv2"><div className="inc-icon">📱</div><h3>Social Media Copy</h3><p>Captions, hooks, and carousel scripts for Instagram, Facebook, and LinkedIn — platform-native in tone, formatted with CTAs, hashtag sets, and emojis calibrated to each audience's expectations.</p></div>
<div className="inc-card rv3"><div className="inc-icon">🛒</div><h3>Product Descriptions</h3><p>E-commerce product copy at scale — SEO-optimised titles, benefit-first descriptions, and bullet specs for 50–500+ SKUs. AI-generated from your product data feed, human-reviewed before delivery.</p></div>
<div className="inc-card rv"><div className="inc-icon">🏠</div><h3>Landing Page Copy</h3><p>Conversion-focused page copy for service, product, and campaign landing pages — structured with proven frameworks (PAS, AIDA, BAB) and tuned to your specific audience's pain points and objections.</p></div>
<div className="inc-card rv2"><div className="inc-icon">📧</div><h3>Email Sequences</h3><p>Welcome flows, nurture sequences, and promotional emails written by AI and refined by our copy team — personalised by audience segment with open-rate-optimised subject lines and CTAs.</p></div>
<div className="inc-card rv3"><div className="inc-icon">🎙️</div><h3>Video Scripts &amp; Shorts</h3><p>Short-form video scripts for Reels, YouTube Shorts, and brand videos — hook, body, CTA, with pacing notes. Also includes long-form YouTube video scripts for educational and authority content.</p></div>
</div>
</div>
</section>
      <section className="dark-section">
<div className="wrap">
<div className="sec-h rv" style={{ marginBottom: '40px' }}>
<h2 style={{ color: '#fff' }}>Platforms &amp; Content Types<br />We Cover.</h2>
<p style={{ color: 'rgba(255,255,255,.55)' }}>Wherever your audience reads, scrolls, or watches — we produce content that fits the format and beats the algorithm.</p>
</div>
<div className="formats-grid">
<div className="fmt-card rv"><div className="fmt-top"><div className="fmt-icon">🔍</div><div className="fmt-tag">SEO</div></div><h3>Google SEO Content</h3><p>Pillar pages, topic clusters, FAQs, and supporting blog posts — built to rank and structured for featured snippets and People Also Ask boxes.</p></div>
<div className="fmt-card rv2"><div className="fmt-top"><div className="fmt-icon">📸</div><div className="fmt-tag">Instagram</div></div><h3>Instagram Captions &amp; Carousels</h3><p>Hook-led captions, carousel slide copy, story CTAs, and bio text — all written in your brand voice with trending hashtag research included per post.</p></div>
<div className="fmt-card rv3"><div className="fmt-top"><div className="fmt-icon">💼</div><div className="fmt-tag">LinkedIn</div></div><h3>LinkedIn Thought Leadership</h3><p>Founder posts, company updates, and industry insight content for LinkedIn — long-form professional copy that positions your brand as a credible authority in your sector.</p></div>
<div className="fmt-card rv"><div className="fmt-top"><div className="fmt-icon">🛒</div><div className="fmt-tag">E-Commerce</div></div><h3>E-Commerce Copy at Scale</h3><p>Bulk product titles, descriptions, and category page copy — generated from your product data and optimised for both Google Shopping and on-site conversions simultaneously.</p></div>
<div className="fmt-card rv2"><div className="fmt-top"><div className="fmt-icon">📧</div><div className="fmt-tag">Email</div></div><h3>Email &amp; WhatsApp Content</h3><p>Campaign emails, drip sequences, and WhatsApp broadcast messages — short, punchy, and personalised, with subject line and preview text variants tested for open rates.</p></div>
<div className="fmt-card rv3"><div className="fmt-top"><div className="fmt-icon">📍</div><div className="fmt-tag">Local</div></div><h3>Local &amp; GMB Content</h3><p>Google Business Profile posts, local landing page copy, and area-specific blog content targeting Tier 1 and Tier 2 city keyword variants for multi-location businesses.</p></div>
</div>
</div>
</section>
      <section className="bg-subtle">
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag">Our Process</div>
<h2>Brief Once. Content Flows<br />Every Month After.</h2>
<p>A one-time brand onboarding sets the AI's tone, style, and SEO parameters — then content production runs on autopilot.</p>
</div>
<div className="steps-grid">
<div className="step rv"><div className="step-num">01</div><h4>Brand Voice Onboarding</h4><p>We document your brand tone, audience personas, banned phrases, preferred style, and content pillars. This brief trains the AI so every output sounds like you — not a generic robot.</p></div>
<div className="step rv2"><div className="step-num">02</div><h4>Keyword &amp; Topic Research</h4><p>Monthly content calendar built around high-intent, low-competition keywords. Each piece is mapped to a stage of your buyer journey — awareness, consideration, or decision — before a single word is written.</p></div>
<div className="step rv3"><div className="step-num">03</div><h4>AI Draft + Human Edit</h4><p>AI generates structured drafts at speed. Our content team edits for accuracy, adds E-E-A-T signals, removes AI tells, and optimises on-page SEO — delivering content that reads human and ranks well.</p></div>
<div className="step rv3"><div className="step-num">04</div><h4>Publish, Track &amp; Improve</h4><p>Content published to your CMS (or delivered in Google Docs). Monthly performance reports track ranking changes, organic traffic growth, and engagement — feeding directly into next month's content plan.</p></div>
</div>
</div>
</section>
      <section>
<div className="wrap">
<div className="sec-h rv"><h2>Frequently Asked Questions</h2></div>
<div className="faq-2col">
<div>
<div className="fi"><button className="fi-q">Will search engines penalise AI-generated content?<div className="fi-icon">+</div></button><div className="fi-a">Google's policy is clear: it rewards helpful, accurate, high-quality content regardless of how it was produced. AI-generated content that is factually correct, well-structured, and genuinely useful ranks just as well as human-written content. Our human edit layer ensures every piece meets Google's E-E-A-T standards.</div></div>
<div className="fi"><button className="fi-q">How do you maintain my brand voice across AI output?<div className="fi-icon">+</div></button><div className="fi-a">We build a detailed brand voice brief — tone adjectives, sample approved copy, phrases to avoid, sentence length preferences, and persona documentation. This brief is used as a system prompt for all AI generation, and human editors enforce it during review. Brand voice consistency improves with each month of data.</div></div>
<div className="fi"><button className="fi-q">Can you handle content for multiple languages?<div className="fi-icon">+</div></button><div className="fi-a">Yes — we produce content in English and Hindi as standard, and can accommodate Hinglish (a mix used widely in Indian social media). Other regional languages are available on request with native speaker review included before delivery.</div></div>
<div className="fi"><button className="fi-q">Do you publish directly to our website?<div className="fi-icon">+</div></button><div className="fi-a">Yes, for WordPress and most popular CMS platforms. We can post directly with proper meta data, internal links, categories, and featured images (AI-sourced or stock). Alternatively, we deliver a content package in Google Docs with publishing instructions if you prefer to retain control of your CMS.</div></div>
</div>
<div>
<div className="fi"><button className="fi-q">How many pieces of content do I get per month?<div className="fi-icon">+</div></button><div className="fi-a">It depends on your plan and content mix. A typical ₹25K/month engagement produces 8–12 long-form blog posts, or 20–30 social captions, or 50–80 product descriptions — or a mix. Higher plans increase volume. We define the content calendar together during onboarding based on your priorities.</div></div>
<div className="fi"><button className="fi-q">Is the content plagiarism-free and original?<div className="fi-icon">+</div></button><div className="fi-a">Yes — all output is run through plagiarism detection tools before delivery. AI-generated content is compositionally original by nature, but we verify anyway. We do not spin existing articles or scrape competitor content. Every piece is generated from scratch against your brief and keyword target.</div></div>
<div className="fi"><button className="fi-q">Will the content include internal links and SEO metadata?<div className="fi-icon">+</div></button><div className="fi-a">Yes. Every blog post includes a keyword-optimised title tag, meta description, H1–H3 structure, internal links to relevant service/product pages, and a target keyword density check. For e-commerce, product titles are formatted to Google Shopping specifications by default.</div></div>
<div className="fi"><button className="fi-q">How long until we see SEO results from the content?<div className="fi-icon">+</div></button><div className="fi-a">Content SEO typically shows movement in Google Search Console within 4–8 weeks of publication. Meaningful ranking improvements on competitive terms take 3–6 months. Clients on consistent 8+ posts/month plans typically see 40–80% organic traffic growth within 6 months compared to no-content baseline.</div></div>
</div>
</div>
</div>
</section>
      <div className="wrap" style={{ padding: '40px 28px', borderTop: '1px solid var(--bdr)' }}>
<div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--s)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '16px' }}>Related Services</div>
<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
<a href="/services/blogging" className="rel-link">✍️ Blogging &amp; Content</a>
<a href="/services/seo" className="rel-link">🔍 SEO Services</a>
<a href="/services/ai-ad-creatives" className="rel-link">🤖 AI Ad Creatives</a>
<a href="/services/programmatic-seo" className="rel-link">⚡ Programmatic SEO</a>
<a href="/services/email-marketing" className="rel-link">📧 Email Marketing</a>
</div>
</div>
      <section className="cta-section">
<div className="wrap">
<h2>Stop Running Out of<br />Content Ideas.</h2>
<p>Get a free content audit — we'll map a 3-month content plan, keyword targets, and show you sample AI-generated output for your industry.</p>
<div className="cta-btns">
<a href="/contact" className="btn btn-ac">📝 Get Free Content Plan</a>
<a href="https://wa.me/919407000101" className="btn btn-wa">💬 WhatsApp Now</a>
</div>
</div>
</section>
      <PageScript id="services-ai-content-0" code={js0} />
    </>
  )
}
