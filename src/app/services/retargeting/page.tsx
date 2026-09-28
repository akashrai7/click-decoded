/* eslint-disable */
// src/app/services/retargeting/page.tsx — generated from retargeting.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "Retargeting Ads India | Click Decoded",
  description: "Retargeting ads that follow your lost visitors and bring them back to convert. Click Decoded manages Google, Meta, and YouTube retargeting campaigns that.",
  alternates: { canonical: "/services/retargeting" },
}

const css = `
:root{
  --ac:#6366F1;--ac2:#4f46e5;--ac-rgb:99,102,241;
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
.hero{background:linear-gradient(155deg,#08082a 0%,#0f0f3d 45%,#08082a 100%);padding:96px 0 80px;position:relative;overflow:hidden;}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 55% at 68% 35%,rgba(99,102,241,.2) 0%,transparent 65%),radial-gradient(ellipse 35% 40% at 8% 80%,rgba(99,102,241,.08) 0%,transparent 60%);}
.hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;position:relative;z-index:2;}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;background:rgba(99,102,241,.12);border:1px solid rgba(99,102,241,.3);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#a5b4fc;margin-bottom:20px;}
.hero h1{font-size:48px;color:#fff;line-height:1.06;letter-spacing:-.04em;margin-bottom:20px;}
.hero h1 em{font-style:normal;background:linear-gradient(135deg,#a5b4fc,#6366f1);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-desc{font-size:17px;color:rgba(255,255,255,.62);line-height:1.7;margin-bottom:32px;max-width:460px;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:36px;}
.hero-proof{display:flex;gap:24px;flex-wrap:wrap;}
.proof-item{font-size:13px;color:rgba(255,255,255,.5);}
.proof-item strong{color:#fff;font-weight:700;}
/* RETARGETING FUNNEL MOCK */
.rt-mock{border-radius:20px;overflow:hidden;box-shadow:0 28px 70px rgba(0,0,0,.6);background:#0d0d2b;border:1px solid rgba(99,102,241,.25);}
.mock-browser{background:rgba(255,255,255,.05);padding:10px 14px;border-bottom:1px solid rgba(255,255,255,.07);display:flex;align-items:center;gap:10px;}
.mock-dots{display:flex;gap:5px;}
.mock-dots span{width:9px;height:9px;border-radius:50%;}
.mock-dots span:nth-child(1){background:#ff5f57;}
.mock-dots span:nth-child(2){background:#ffbd2e;}
.mock-dots span:nth-child(3){background:#28c840;}
.mock-url{flex:1;background:rgba(255,255,255,.07);border-radius:6px;padding:5px 12px;font-size:11px;color:rgba(255,255,255,.35);}
.rt-header{background:rgba(99,102,241,.1);border-bottom:1px solid rgba(99,102,241,.2);padding:10px 16px;display:flex;align-items:center;justify-content:space-between;}
.rt-title{font-size:12px;font-weight:700;color:rgba(255,255,255,.75);}
.rt-live{font-size:10px;font-weight:700;padding:3px 9px;border-radius:5px;background:rgba(74,222,128,.1);border:1px solid rgba(74,222,128,.2);color:#4ade80;}
/* Funnel visualization */
.rt-funnel{padding:14px 16px;}
.funnel-label{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.25);margin-bottom:10px;}
.funnel-stage{margin-bottom:6px;}
.funnel-row{display:flex;align-items:center;gap:10px;margin-bottom:4px;}
.funnel-bar-wrap{flex:1;height:28px;background:rgba(255,255,255,.05);border-radius:6px;overflow:hidden;position:relative;}
.funnel-bar{height:100%;border-radius:6px;display:flex;align-items:center;padding:0 10px;font-size:10px;font-weight:700;color:#fff;white-space:nowrap;}
.funnel-count{font-size:11px;font-weight:800;min-width:44px;text-align:right;}
.funnel-pct{font-size:9px;color:rgba(255,255,255,.3);min-width:30px;text-align:right;}
.stage-visitors{background:linear-gradient(90deg,rgba(99,102,241,.6),rgba(99,102,241,.3));width:100%;}
.stage-engaged{background:linear-gradient(90deg,rgba(99,102,241,.75),rgba(99,102,241,.4));width:62%;}
.stage-cart{background:linear-gradient(90deg,rgba(99,102,241,.85),rgba(99,102,241,.5));width:38%;}
.stage-lost{background:linear-gradient(90deg,rgba(239,68,68,.5),rgba(239,68,68,.2));width:34%;}
.stage-recovered{background:linear-gradient(90deg,rgba(74,222,128,.6),rgba(74,222,128,.3));width:12%;}
/* Arrow */
.rt-arrow{text-align:center;color:rgba(99,102,241,.5);font-size:16px;margin:2px 0;}
/* Metrics */
.rt-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,.05);border-top:1px solid rgba(255,255,255,.06);}
.rt-metric{padding:12px 14px;background:#0d0d2b;text-align:center;}
.rtm-val{font-size:19px;font-weight:900;color:#fff;letter-spacing:-.02em;line-height:1;}
.rtm-label{font-size:9px;color:rgba(255,255,255,.35);margin-top:3px;text-transform:uppercase;letter-spacing:.06em;}
/* Platform badges */
.rt-platforms{padding:10px 16px;display:flex;align-items:center;gap:8px;border-top:1px solid rgba(255,255,255,.06);}
.rt-plat-label{font-size:9px;color:rgba(255,255,255,.3);text-transform:uppercase;letter-spacing:.06em;font-weight:700;flex-shrink:0;}
.plat-badge{font-size:10px;font-weight:700;padding:3px 9px;border-radius:5px;border:1px solid rgba(255,255,255,.1);color:rgba(255,255,255,.5);}
/* STATS */
.stats-strip{background:var(--ac);}
.stats-inner{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(0,0,0,.2);}
.stat-box{padding:32px 24px;text-align:center;background:var(--ac);}
.stat-n{font-size:40px;font-weight:900;color:#fff;line-height:1;letter-spacing:-.03em;}
.stat-l{font-size:12px;color:rgba(255,255,255,.75);margin-top:6px;font-weight:500;text-transform:uppercase;letter-spacing:.06em;}
/* SECTIONS */
.sec-h{text-align:center;max-width:640px;margin:0 auto 52px;}
.sec-tag{display:inline-flex;padding:5px 13px;border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:10px;background:rgba(99,102,241,.08);border:1px solid rgba(99,102,241,.18);color:var(--ac);}
.sec-h h2{font-size:36px;margin-bottom:14px;}
.sec-h p{font-size:16px;color:var(--m);line-height:1.65;}
.inc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.inc-card{background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:28px 24px;transition:.2s;}
.inc-card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(99,102,241,.1);border-color:rgba(99,102,241,.22);}
.inc-icon{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:16px;background:rgba(99,102,241,.07);border:1px solid rgba(99,102,241,.12);}
.inc-card h3{font-size:17px;margin-bottom:10px;}
.inc-card p{font-size:13.5px;color:var(--m);line-height:1.65;}
.dark-section{background:var(--n-dark);padding:88px 0;}
.formats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:1000px;margin:0 auto;}
.fmt-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:24px;transition:.2s;}
.fmt-card:hover{border-color:rgba(99,102,241,.35);background:rgba(99,102,241,.07);transform:translateY(-2px);}
.fmt-top{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px;}
.fmt-icon{font-size:26px;}
.fmt-tag{font-size:10px;font-weight:700;padding:3px 8px;border-radius:5px;background:rgba(99,102,241,.18);border:1px solid rgba(99,102,241,.3);color:#a5b4fc;}
.fmt-card h3{font-size:15px;font-weight:700;color:#fff;margin-bottom:6px;}
.fmt-card p{font-size:13px;color:rgba(255,255,255,.5);line-height:1.6;}
.bg-subtle{background:var(--bg);}
.steps-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative;}
.steps-grid::before{content:'';position:absolute;top:34px;left:12%;right:12%;height:2px;background:linear-gradient(90deg,var(--ac),var(--ac2));z-index:0;opacity:.4;}
.step{text-align:center;padding:0 16px;position:relative;z-index:1;}
.step-num{width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,var(--ac),var(--ac2));color:#fff;font-size:20px;font-weight:900;display:flex;align-items:center;justify-content:center;margin:0 auto 18px;box-shadow:0 8px 24px rgba(99,102,241,.3);}
.step h4{font-size:15px;margin-bottom:7px;}
.step p{font-size:13px;color:var(--m);line-height:1.6;}
.faq-2col{display:grid;grid-template-columns:1fr 1fr;gap:0 28px;align-items:start;}
.fi{border:1px solid var(--bdr);border-radius:14px;margin-bottom:10px;overflow:hidden;background:#fff;transition:.15s;}
.fi.on{border-color:rgba(99,102,241,.3);box-shadow:0 4px 20px rgba(99,102,241,.07);}
.fi-q{width:100%;text-align:left;background:transparent;border:none;padding:20px 22px;font-size:14px;font-weight:700;color:var(--n);display:flex;justify-content:space-between;align-items:center;gap:12px;cursor:pointer;}
.fi-icon{width:26px;height:26px;border-radius:50%;flex-shrink:0;background:var(--bg);border:1px solid var(--bdr);display:flex;align-items:center;justify-content:center;color:var(--ac);font-size:18px;line-height:1;transition:transform .2s;}
.fi.on .fi-icon{transform:rotate(45deg);background:var(--ac);color:#fff;border-color:var(--ac);}
.fi-a{max-height:0;overflow:hidden;transition:.3s;color:var(--m);font-size:14px;line-height:1.75;}
.fi.on .fi-a{max-height:300px;padding:0 22px 22px;}
.cta-section{background:linear-gradient(155deg,#08082a 0%,#0f0f3d 100%);padding:96px 0;text-align:center;position:relative;overflow:hidden;}
.cta-section::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(99,102,241,.15) 0%,transparent 70%);}
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
      "name": "Retargeting & Remarketing",
      "provider": {
        "@type": "Organization",
        "name": "Click Decoded",
        "url": "https://www.clickdecoded.com"
      },
      "description": "Retargeting ads that follow your lost visitors and bring them back to convert. Click Decoded manages Google, Meta, and YouTube retargeting campaigns that recover abandoned revenue.",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": "Retargeting & Remarketing",
      "url": "https://www.clickdecoded.com/services/retargeting"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What's the difference between retargeting and remarketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They're essentially the same thing — \\"remarketing\\" is Google's term, \\"retargeting\\" is used industry-wide. Both refer to showing ads to people who've previously visited your website or interacted with your brand. We use both terms interchangeably."
          }
        },
        {
          "@type": "Question",
          "name": "How many visitors do I need before retargeting works?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Google Display requires a minimum of 100 users in an audience; Meta requires 1,000. We recommend at least 500–1,000 monthly website visitors for retargeting to be cost-effective. If your traffic is lower, we focus on growing it first before launching retargeting."
          }
        },
        {
          "@type": "Question",
          "name": "Will my ads follow people around in a creepy way?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Effective retargeting feels helpful, not intrusive. We use frequency caps (typically 3–5 impressions per person per day), audience exclusions for past converters, and sequenced creative that changes over time — so users see relevant ads, not the same banner 50 times a day."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take for retargeting audiences to build?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If pixels are installed on day one, 7-day audiences build within the first week. 30-day audiences are mature by end of Month 1. For new businesses with limited traffic, it takes 4–6 weeks for audiences to reach the minimum thresholds for effective campaigns."
          }
        },
        {
          "@type": "Question",
          "name": "Which platform gives the best retargeting ROAS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dynamic Shopping Retargeting (Google) typically delivers the highest ROAS for e-commerce at 6–12×. Meta retargeting performs best for B2C lifestyle brands. YouTube bumper retargeting offers the lowest CPM for awareness. We allocate budget based on what your specific audience data shows."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle creative design for retargeting ads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide creative strategy, copy, and briefs — and can coordinate with your design team or connect you with our creative partners. For e-commerce dynamic retargeting, Google and Meta auto-generate ads from your product feed so no separate creative is needed."
          }
        },
        {
          "@type": "Question",
          "name": "Can retargeting work for B2B businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — B2B retargeting is highly effective given long sales cycles. We retarget LinkedIn visitors and website visitors with Google Display and Meta ads offering case studies, demo invitations, and social proof — keeping your brand front-of-mind through a 3–6 month decision process."
          }
        },
        {
          "@type": "Question",
          "name": "What's included in the monthly management?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Audience monitoring, creative rotation, frequency management, bid adjustments across all platforms, exclusion list updates, and a monthly performance report covering recovered conversions, CPA, ROAS by segment, and the optimisation plan for the following month."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How Retargeting Ads India Works — Our Process",
      "description": "Retargeting ads that follow your lost visitors and bring them back to convert. Click Decoded manages Google, Meta, and YouTube retargeting campaigns that recover abandoned revenue.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Audit & Pixel Audit",
          "text": "We audit existing pixel health, audience sizes, and current retargeting (if any) — identifying gaps, missed revenue, and quick-win opportunities before we build."
        },
        {
          "@type": "HowToStep",
          "name": "Audience & Segment Build",
          "text": "Pixel events configured, audience windows set (7 / 14 / 30 / 90 day), and segments defined by behaviour — so every ad speaks to exactly where the visitor dropped off."
        },
        {
          "@type": "HowToStep",
          "name": "Campaign Launch",
          "text": "Cross-platform campaigns live across Google, Meta, and YouTube with frequency caps, exclusions, and sequence logic configured from the start — no spray-and-pray."
        },
        {
          "@type": "HowToStep",
          "name": "Optimise & Expand",
          "text": "Weekly creative rotation, audience performance reviews, and monthly strategy calls. Lookalike expansion once retargeting audiences mature and conversion data is rich."
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
          "name": "Retargeting & Remarketing",
          "item": "https://www.clickdecoded.com/services/retargeting"
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
      <div className="breadcrumb"><div className="wrap"><div className="bc-list"><a href="/">Home</a><span style={{ opacity: '.4' }}>›</span><span>Paid Ads</span><span style={{ opacity: '.4' }}>›</span><span>Retargeting</span></div></div></div>
      <section className="hero">
<div className="wrap">
<div className="hero-grid">
<div>
<div className="hero-eyebrow">🔄 Retargeting · Cross-Platform · Revenue Recovery</div>
<h1>97% of Visitors Leave. We <em>Bring Them Back</em> to Convert.</h1>
<p className="hero-desc">Most visitors don't buy on their first visit — but that doesn't mean they're lost. Retargeting ads follow your warm audience across Google, Meta, and YouTube with the right message at the right moment to recover abandoned revenue.</p>
<div className="hero-btns">
<a href="/contact" className="btn btn-ac">🔄 Get Free Retargeting Audit</a>
<a href="https://wa.me/919407000101" className="btn btn-ghost">💬 WhatsApp Us</a>
</div>
<div className="hero-proof" style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
<span className="proof-item"><strong>12.4%</strong> Avg Conversion Rate</span>
<span className="proof-item"><strong>₹420</strong> Avg CPA</span>
<span className="proof-item"><strong>₹25K</strong> Starting / Month</span>
</div>
</div>

<div className="rt-mock">
<div className="mock-browser">
<div className="mock-dots"><span></span><span></span><span></span></div>
<div className="mock-url">clickdecoded.com — Retargeting Dashboard</div>
</div>
<div className="rt-header">
<div className="rt-title">Audience Recovery Funnel — Last 30 Days</div>
<div className="rt-live">● Tracking Active</div>
</div>
<div className="rt-funnel">
<div className="funnel-label">Visitor Journey</div>
<div className="funnel-stage">
<div className="funnel-row">
<div style={{ fontSize: '10px', color: 'rgba(255,255,255,.4)', minWidth: '90px' }}>All Visitors</div>
<div className="funnel-bar-wrap"><div className="funnel-bar stage-visitors">Total Visitors</div></div>
<div className="funnel-count" style={{ color: '#a5b4fc' }}>48,200</div>
</div>
</div>
<div className="rt-arrow">↓</div>
<div className="funnel-stage">
<div className="funnel-row">
<div style={{ fontSize: '10px', color: 'rgba(255,255,255,.4)', minWidth: '90px' }}>Engaged (30s+)</div>
<div className="funnel-bar-wrap"><div className="funnel-bar stage-engaged">Engaged Users</div></div>
<div className="funnel-count" style={{ color: '#a5b4fc' }}>29,884</div>
</div>
</div>
<div className="rt-arrow">↓</div>
<div className="funnel-stage">
<div className="funnel-row">
<div style={{ fontSize: '10px', color: 'rgba(255,255,255,.4)', minWidth: '90px' }}>Abandoned Cart</div>
<div className="funnel-bar-wrap"><div className="funnel-bar stage-cart">Cart Abandoners</div></div>
<div className="funnel-count" style={{ color: '#fbbf24' }}>18,316</div>
</div>
</div>
<div className="rt-arrow">↓</div>
<div className="funnel-stage">
<div className="funnel-row">
<div style={{ fontSize: '10px', color: 'rgba(255,255,255,.4)', minWidth: '90px' }}>Retargeted</div>
<div className="funnel-bar-wrap"><div className="funnel-bar stage-recovered">Recovered Conversions ✓</div></div>
<div className="funnel-count" style={{ color: '#4ade80' }}>5,978</div>
</div>
</div>
</div>
<div className="rt-metrics">
<div className="rt-metric"><div className="rtm-val">12.4%</div><div className="rtm-label">Conv. Rate</div></div>
<div className="rt-metric"><div className="rtm-val">₹420</div><div className="rtm-label">Avg CPA</div></div>
<div className="rt-metric"><div className="rtm-val">7.8×</div><div className="rtm-label">ROAS</div></div>
</div>
<div className="rt-platforms">
<span className="rt-plat-label">Running on:</span>
<span className="plat-badge">🔍 Google</span>
<span className="plat-badge">📘 Meta</span>
<span className="plat-badge">▶ YouTube</span>
<span className="plat-badge">🛒 Shopping</span>
</div>
</div>
</div>
</div>
</section>
      <div className="stats-strip">
<div className="stats-inner">
<div className="stat-box"><div className="stat-n">12.4%</div><div className="stat-l">Avg Conversion Rate</div></div>
<div className="stat-box"><div className="stat-n">7.8×</div><div className="stat-l">Average ROAS</div></div>
<div className="stat-box"><div className="stat-n">₹420</div><div className="stat-l">Avg Cost Per Conversion</div></div>
<div className="stat-box"><div className="stat-n">₹25K</div><div className="stat-l">Starting / Month</div></div>
</div>
</div>
      <section>
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag">What's Included</div>
<h2>Cross-Platform Retargeting,<br />Fully Managed.</h2>
<p>Pixel to purchase — every layer of your retargeting ecosystem set up, segmented, and continuously optimised.</p>
</div>
<div className="inc-grid">
<div className="inc-card rv"><div className="inc-icon">🔍</div><h3>Pixel &amp; Tracking Setup</h3><p>Google Tag, Meta Pixel, and LinkedIn Insight Tag installed and verified. Event tracking configured for page views, add-to-cart, checkout, and purchase — the foundation of effective retargeting.</p></div>
<div className="inc-card rv2"><div className="inc-icon">🎯</div><h3>Audience Segmentation</h3><p>Visitors segmented by behaviour — homepage browsers, product viewers, cart abandoners, checkout dropoffs, and past buyers — each receiving different messaging matched to where they stopped.</p></div>
<div className="inc-card rv3"><div className="inc-icon">🖼️</div><h3>Ad Creative Strategy</h3><p>Creative briefs and copy tailored per audience segment. Cart abandoners see urgency + offer. Past buyers see upsell. Top-funnel visitors see social proof — messaging that matches intent.</p></div>
<div className="inc-card rv"><div className="inc-icon">📅</div><h3>Frequency &amp; Sequence Management</h3><p>Ad frequency caps, sequence logic, and audience exclusions prevent ad fatigue and ensure the right ad appears at the right stage — never annoying, always relevant.</p></div>
<div className="inc-card rv2"><div className="inc-icon">🌐</div><h3>Cross-Platform Coordination</h3><p>Retargeting campaigns coordinated across Google Display, Meta, YouTube, and Shopping — so your audience encounters consistent messaging wherever they spend time online.</p></div>
<div className="inc-card rv3"><div className="inc-icon">📊</div><h3>Attribution &amp; ROAS Reporting</h3><p>Monthly reports showing recovered revenue, CPA per audience segment, ROAS by platform, and frequency data — with full attribution clarity across your retargeting funnel.</p></div>
</div>
</div>
</section>
      <section className="dark-section">
<div className="wrap">
<div className="sec-h rv" style={{ marginBottom: '40px' }}>
<h2 style={{ color: '#fff' }}>Every Retargeting Format,<br />Every Platform.</h2>
<p style={{ color: 'rgba(255,255,255,.55)' }}>We deploy the right retargeting type based on your audience behaviour and purchase cycle.</p>
</div>
<div className="formats-grid">
<div className="fmt-card rv"><div className="fmt-top"><div className="fmt-icon">🖥️</div><div className="fmt-tag">Google</div></div><h3>Google Display Retargeting</h3><p>Banner and responsive display ads across 2M+ Google partner sites. Keeps your brand visible to past visitors browsing news, blogs, and apps across the web.</p></div>
<div className="fmt-card rv2"><div className="fmt-top"><div className="fmt-icon">🛒</div><div className="fmt-tag">Shopping</div></div><h3>Dynamic Shopping Retargeting</h3><p>Show the exact products viewed by each visitor — auto-populated with real price and image. The highest-ROAS retargeting format for e-commerce.</p></div>
<div className="fmt-card rv3"><div className="fmt-top"><div className="fmt-icon">📘</div><div className="fmt-tag">Meta</div></div><h3>Facebook &amp; Instagram Retargeting</h3><p>Feed ads, Stories, and Reels retargeting on Meta — reaching past visitors during their social browsing with dynamic product ads or custom creative sequences.</p></div>
<div className="fmt-card rv"><div className="fmt-top"><div className="fmt-icon">▶</div><div className="fmt-tag">YouTube</div></div><h3>YouTube Bumper Retargeting</h3><p>6-second non-skippable ads delivered to past site visitors watching YouTube — high-frequency brand recall at extremely low CPM. Ideal for mid-funnel warmth.</p></div>
<div className="fmt-card rv2"><div className="fmt-top"><div className="fmt-icon">📧</div><div className="fmt-tag">CRM</div></div><h3>Customer List Retargeting</h3><p>Upload your email list to Google and Meta to retarget existing customers with upsell, renewal, or re-engagement offers — or exclude them from acquisition campaigns.</p></div>
<div className="fmt-card rv3"><div className="fmt-top"><div className="fmt-icon">🔗</div><div className="fmt-tag">Lookalike</div></div><h3>Lookalike Audience Expansion</h3><p>Build Lookalike Audiences from your highest-value converters to reach new prospects who behave like your best customers — bridging retargeting into prospecting.</p></div>
</div>
</div>
</section>
      <section className="bg-subtle">
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag">Our Process</div>
<h2>Pixels Live in Week 1.<br />Revenue Recovered by Week 3.</h2>
<p>A structured setup gets retargeting audiences building from day one — with optimisation compounding returns month over month.</p>
</div>
<div className="steps-grid">
<div className="step rv"><div className="step-num">01</div><h4>Audit &amp; Pixel Audit</h4><p>We audit existing pixel health, audience sizes, and current retargeting (if any) — identifying gaps, missed revenue, and quick-win opportunities before we build.</p></div>
<div className="step rv2"><div className="step-num">02</div><h4>Audience &amp; Segment Build</h4><p>Pixel events configured, audience windows set (7 / 14 / 30 / 90 day), and segments defined by behaviour — so every ad speaks to exactly where the visitor dropped off.</p></div>
<div className="step rv3"><div className="step-num">03</div><h4>Campaign Launch</h4><p>Cross-platform campaigns live across Google, Meta, and YouTube with frequency caps, exclusions, and sequence logic configured from the start — no spray-and-pray.</p></div>
<div className="step rv3"><div className="step-num">04</div><h4>Optimise &amp; Expand</h4><p>Weekly creative rotation, audience performance reviews, and monthly strategy calls. Lookalike expansion once retargeting audiences mature and conversion data is rich.</p></div>
</div>
</div>
</section>
      <section>
<div className="wrap">
<div className="sec-h rv"><h2>Frequently Asked Questions</h2></div>
<div className="faq-2col">
<div>
<div className="fi"><button className="fi-q">What's the difference between retargeting and remarketing?<div className="fi-icon">+</div></button><div className="fi-a">They're essentially the same thing — "remarketing" is Google's term, "retargeting" is used industry-wide. Both refer to showing ads to people who've previously visited your website or interacted with your brand. We use both terms interchangeably.</div></div>
<div className="fi"><button className="fi-q">How many visitors do I need before retargeting works?<div className="fi-icon">+</div></button><div className="fi-a">Google Display requires a minimum of 100 users in an audience; Meta requires 1,000. We recommend at least 500–1,000 monthly website visitors for retargeting to be cost-effective. If your traffic is lower, we focus on growing it first before launching retargeting.</div></div>
<div className="fi"><button className="fi-q">Will my ads follow people around in a creepy way?<div className="fi-icon">+</div></button><div className="fi-a">Effective retargeting feels helpful, not intrusive. We use frequency caps (typically 3–5 impressions per person per day), audience exclusions for past converters, and sequenced creative that changes over time — so users see relevant ads, not the same banner 50 times a day.</div></div>
<div className="fi"><button className="fi-q">How long does it take for retargeting audiences to build?<div className="fi-icon">+</div></button><div className="fi-a">If pixels are installed on day one, 7-day audiences build within the first week. 30-day audiences are mature by end of Month 1. For new businesses with limited traffic, it takes 4–6 weeks for audiences to reach the minimum thresholds for effective campaigns.</div></div>
</div>
<div>
<div className="fi"><button className="fi-q">Which platform gives the best retargeting ROAS?<div className="fi-icon">+</div></button><div className="fi-a">Dynamic Shopping Retargeting (Google) typically delivers the highest ROAS for e-commerce at 6–12×. Meta retargeting performs best for B2C lifestyle brands. YouTube bumper retargeting offers the lowest CPM for awareness. We allocate budget based on what your specific audience data shows.</div></div>
<div className="fi"><button className="fi-q">Do you handle creative design for retargeting ads?<div className="fi-icon">+</div></button><div className="fi-a">We provide creative strategy, copy, and briefs — and can coordinate with your design team or connect you with our creative partners. For e-commerce dynamic retargeting, Google and Meta auto-generate ads from your product feed so no separate creative is needed.</div></div>
<div className="fi"><button className="fi-q">Can retargeting work for B2B businesses?<div className="fi-icon">+</div></button><div className="fi-a">Yes — B2B retargeting is highly effective given long sales cycles. We retarget LinkedIn visitors and website visitors with Google Display and Meta ads offering case studies, demo invitations, and social proof — keeping your brand front-of-mind through a 3–6 month decision process.</div></div>
<div className="fi"><button className="fi-q">What's included in the monthly management?<div className="fi-icon">+</div></button><div className="fi-a">Audience monitoring, creative rotation, frequency management, bid adjustments across all platforms, exclusion list updates, and a monthly performance report covering recovered conversions, CPA, ROAS by segment, and the optimisation plan for the following month.</div></div>
</div>
</div>
</div>
</section>
      <div className="wrap" style={{ padding: '40px 28px', borderTop: '1px solid var(--bdr)' }}>
<div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--s)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '16px' }}>Related Services</div>
<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
<a href="/services/google-ads" className="rel-link">🔍 Google Ads</a>
<a href="/services/meta-ads" className="rel-link">📘 Meta Ads</a>
<a href="/services/shopping-ads" className="rel-link">🛒 Shopping Ads</a>
<a href="/services/youtube-ads" className="rel-link">▶ YouTube Ads</a>
<a href="/services/ai-ad-creatives" className="rel-link">🤖 AI Ad Creatives</a>
</div>
</div>
      <section className="cta-section">
<div className="wrap">
<h2>Stop Losing Visitors Who<br />Were Ready to Buy.</h2>
<p>Get a free retargeting audit — we'll show you exactly how much revenue you're leaving behind and how to recover it.</p>
<div className="cta-btns">
<a href="/contact" className="btn btn-ac">🔄 Get Free Retargeting Audit</a>
<a href="https://wa.me/919407000101" className="btn btn-wa">💬 WhatsApp Now</a>
</div>
</div>
</section>
      <PageScript id="services-retargeting-0" code={js0} />
    </>
  )
}
