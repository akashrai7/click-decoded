/* eslint-disable */
// src/app/industries/real-estate/page.tsx — generated from industry-real-estate.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "Digital Marketing for Real Estate India | Click Decoded",
  description: "Digital marketing for real estate developers, brokers, and property portals. Click Decoded drives qualified property inquiries through Google Ads, SEO.",
  alternates: { canonical: "/industries/real-estate" },
}

const css = `
:root{
  --ac:#059669;--ac2:#047857;--ac-rgb:5,150,105;
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
.hero{background:linear-gradient(155deg,#021a0e 0%,#062d18 45%,#021a0e 100%);padding:96px 0 80px;position:relative;overflow:hidden;}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 60% at 70% 30%,rgba(5,150,105,.2) 0%,transparent 65%),radial-gradient(ellipse 35% 40% at 5% 80%,rgba(5,150,105,.07) 0%,transparent 60%);}
.hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;position:relative;z-index:2;}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;background:rgba(5,150,105,.12);border:1px solid rgba(5,150,105,.3);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#6ee7b7;margin-bottom:20px;}
.hero h1{font-size:48px;color:#fff;line-height:1.06;letter-spacing:-.04em;margin-bottom:20px;}
.hero h1 em{font-style:normal;background:linear-gradient(135deg,#6ee7b7,#059669);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-desc{font-size:17px;color:rgba(255,255,255,.62);line-height:1.7;margin-bottom:32px;max-width:460px;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:36px;}
.hero-proof{display:flex;gap:24px;flex-wrap:wrap;}
.proof-item{font-size:13px;color:rgba(255,255,255,.5);}
.proof-item strong{color:#fff;font-weight:700;}
/* PROPERTY LISTING MOCK */
.re-mock{border-radius:20px;overflow:hidden;box-shadow:0 28px 70px rgba(0,0,0,.65);background:#080f0b;border:1px solid rgba(5,150,105,.2);}
.mock-browser{background:rgba(255,255,255,.04);padding:10px 14px;border-bottom:1px solid rgba(255,255,255,.06);display:flex;align-items:center;gap:10px;}
.mock-dots{display:flex;gap:5px;}
.mock-dots span{width:9px;height:9px;border-radius:50%;}
.mock-dots span:nth-child(1){background:#ff5f57;}
.mock-dots span:nth-child(2){background:#ffbd2e;}
.mock-dots span:nth-child(3){background:#28c840;}
.mock-url{flex:1;background:rgba(255,255,255,.06);border-radius:6px;padding:5px 12px;font-size:11px;color:rgba(255,255,255,.3);}
/* Header bar */
.re-header{background:rgba(5,150,105,.08);border-bottom:1px solid rgba(5,150,105,.15);padding:10px 14px;display:flex;align-items:center;justify-content:space-between;}
.re-title{font-size:11px;font-weight:700;color:rgba(255,255,255,.7);}
.re-kpis{display:flex;gap:16px;}
.re-kpi{text-align:right;}
.re-kv{font-size:14px;font-weight:900;color:#6ee7b7;}
.re-kl{font-size:8px;color:rgba(255,255,255,.3);text-transform:uppercase;}
/* Property cards */
.re-cards{padding:10px 12px;display:flex;flex-direction:column;gap:8px;}
.prop-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:12px;padding:10px 12px;display:flex;gap:10px;align-items:stretch;position:relative;}
.prop-card.featured{border-color:rgba(5,150,105,.4);background:rgba(5,150,105,.06);}
.feat-badge{position:absolute;top:-1px;right:10px;background:var(--ac);color:#fff;font-size:8px;font-weight:800;padding:2px 8px;border-radius:0 0 6px 6px;}
.prop-img{width:56px;height:56px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;}
.prop-img.a{background:linear-gradient(135deg,#1a3a2a,#0d2218);}
.prop-img.b{background:linear-gradient(135deg,#1a2a3a,#0d1822);}
.prop-img.c{background:linear-gradient(135deg,#2a1a3a,#180d22);}
.prop-info{flex:1;}
.prop-name{font-size:11px;font-weight:700;color:#fff;margin-bottom:2px;}
.prop-loc{font-size:9px;color:rgba(255,255,255,.4);margin-bottom:5px;}
.prop-tags{display:flex;gap:4px;flex-wrap:wrap;}
.prop-tag{font-size:8px;padding:2px 6px;border-radius:4px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.09);color:rgba(255,255,255,.5);}
.prop-right{text-align:right;display:flex;flex-direction:column;justify-content:space-between;}
.prop-price{font-size:13px;font-weight:900;color:#6ee7b7;}
.prop-inq{font-size:8px;color:rgba(255,255,255,.35);}
.prop-inq strong{color:#6ee7b7;}
.prop-btn{font-size:8px;font-weight:700;padding:3px 8px;border-radius:5px;background:rgba(5,150,105,.2);border:1px solid rgba(5,150,105,.35);color:#6ee7b7;margin-top:4px;}
/* Live ticker */
.re-live{padding:8px 14px;background:rgba(5,150,105,.06);border-top:1px solid rgba(5,150,105,.15);display:flex;align-items:center;justify-content:space-between;}
.re-live-dot{width:7px;height:7px;border-radius:50%;background:#059669;animation:rePulse 1.2s step-end infinite;margin-right:6px;flex-shrink:0;}
@keyframes rePulse{0%,100%{opacity:1}50%{opacity:.15}}
.re-live-text{font-size:10px;color:rgba(255,255,255,.5);display:flex;align-items:center;}
.re-live-count{font-size:12px;font-weight:800;color:#6ee7b7;}
/* STATS */
.stats-strip{background:var(--ac);}
.stats-inner{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(0,0,0,.15);}
.stat-box{padding:32px 24px;text-align:center;background:var(--ac);}
.stat-n{font-size:40px;font-weight:900;color:#fff;line-height:1;letter-spacing:-.03em;}
.stat-l{font-size:12px;color:rgba(255,255,255,.85);margin-top:6px;font-weight:500;text-transform:uppercase;letter-spacing:.06em;}
/* SECTIONS */
.sec-h{text-align:center;max-width:640px;margin:0 auto 52px;}
.sec-tag{display:inline-flex;padding:5px 13px;border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:10px;background:rgba(5,150,105,.08);border:1px solid rgba(5,150,105,.18);color:var(--ac);}
.sec-h h2{font-size:36px;margin-bottom:14px;}
.sec-h p{font-size:16px;color:var(--m);line-height:1.65;}
.inc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.inc-card{background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:28px 24px;transition:.2s;}
.inc-card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(5,150,105,.1);border-color:rgba(5,150,105,.25);}
.inc-icon{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:16px;background:rgba(5,150,105,.07);border:1px solid rgba(5,150,105,.12);}
.inc-card h3{font-size:17px;margin-bottom:10px;}
.inc-card p{font-size:13.5px;color:var(--m);line-height:1.65;}
.dark-section{background:var(--n-dark);padding:88px 0;}
.formats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:1000px;margin:0 auto;}
.fmt-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:24px;transition:.2s;}
.fmt-card:hover{border-color:rgba(5,150,105,.35);background:rgba(5,150,105,.07);transform:translateY(-2px);}
.fmt-top{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px;}
.fmt-icon{font-size:26px;}
.fmt-tag{font-size:10px;font-weight:700;padding:3px 8px;border-radius:5px;background:rgba(5,150,105,.15);border:1px solid rgba(5,150,105,.3);color:#6ee7b7;}
.fmt-card h3{font-size:15px;font-weight:700;color:#fff;margin-bottom:6px;}
.fmt-card p{font-size:13px;color:rgba(255,255,255,.5);line-height:1.6;}
.bg-subtle{background:var(--bg);}
.steps-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative;}
.steps-grid::before{content:'';position:absolute;top:34px;left:12%;right:12%;height:2px;background:linear-gradient(90deg,var(--ac),var(--ac2));z-index:0;opacity:.4;}
.step{text-align:center;padding:0 16px;position:relative;z-index:1;}
.step-num{width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,var(--ac),var(--ac2));color:#fff;font-size:20px;font-weight:900;display:flex;align-items:center;justify-content:center;margin:0 auto 18px;box-shadow:0 8px 24px rgba(5,150,105,.3);}
.step h4{font-size:15px;margin-bottom:7px;}
.step p{font-size:13px;color:var(--m);line-height:1.6;}
.faq-2col{display:grid;grid-template-columns:1fr 1fr;gap:0 28px;align-items:start;}
.fi{border:1px solid var(--bdr);border-radius:14px;margin-bottom:10px;overflow:hidden;background:#fff;transition:.15s;}
.fi.on{border-color:rgba(5,150,105,.3);box-shadow:0 4px 20px rgba(5,150,105,.08);}
.fi-q{width:100%;text-align:left;background:transparent;border:none;padding:20px 22px;font-size:14px;font-weight:700;color:var(--n);display:flex;justify-content:space-between;align-items:center;gap:12px;cursor:pointer;}
.fi-icon{width:26px;height:26px;border-radius:50%;flex-shrink:0;background:var(--bg);border:1px solid var(--bdr);display:flex;align-items:center;justify-content:center;color:var(--ac);font-size:18px;line-height:1;transition:transform .2s;}
.fi.on .fi-icon{transform:rotate(45deg);background:var(--ac);color:#fff;border-color:var(--ac);}
.fi-a{max-height:0;overflow:hidden;transition:.3s;color:var(--m);font-size:14px;line-height:1.75;}
.fi.on .fi-a{max-height:300px;padding:0 22px 22px;}
.cta-section{background:linear-gradient(155deg,#021a0e 0%,#062d18 100%);padding:96px 0;text-align:center;position:relative;overflow:hidden;}
.cta-section::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(5,150,105,.15) 0%,transparent 70%);}
.cta-section h2{color:#fff;font-size:44px;margin-bottom:16px;position:relative;z-index:1;}
.cta-section p{color:rgba(255,255,255,.6);font-size:17px;margin-bottom:36px;max-width:500px;margin-left:auto;margin-right:auto;line-height:1.65;position:relative;z-index:1;}
.cta-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;position:relative;z-index:1;}
.rel-link{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;border-radius:99px;border:1.5px solid var(--bdr);font-size:13px;font-weight:500;color:var(--m);transition:.15s;}
.rel-link:hover{border-color:var(--ac);color:var(--ac);}
.rv,.rv2,.rv3{opacity:0;transform:translateY(28px);transition:opacity .6s ease,transform .6s ease;}
.rv2{transition-delay:.1s;}.rv3{transition-delay:.2s;}
.rv.vis,.rv2.vis,.rv3.vis{opacity:1;transform:translateY(0);}
@media(max-width:900px){.hero-grid{grid-template-columns:1fr;}.hero h1{font-size:36px;}.inc-grid,.formats-grid{grid-template-columns:1fr 1fr;}.stats-inner{grid-template-columns:1fr 1fr;}.steps-grid{grid-template-columns:repeat(2,1fr);}.steps-grid::before{display:none;}.faq-2col{grid-template-columns:1fr;}}
@media(max-width:600px){.inc-grid,.formats-grid,.stats-inner{grid-template-columns:1fr;}section{padding:60px 0;}.hero{padding:64px 0 52px;}}
`

const ld0 = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Digital Marketing for Real Estate",
      "provider": {
        "@type": "Organization",
        "name": "Click Decoded",
        "url": "https://www.clickdecoded.com"
      },
      "description": "Digital marketing for real estate developers, brokers, and property portals. Click Decoded drives qualified property inquiries through Google Ads, SEO, Meta Ads, and WhatsApp automation.",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": "Digital Marketing for Real Estate",
      "url": "https://www.clickdecoded.com/industries/real-estate"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much ad budget do we need for real estate leads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For meaningful real estate lead volume, we recommend a minimum ad spend of ₹30,000–₹50,000/month on Google Ads alone, with a separate budget for Meta if running both channels. At ₹150–₹250 cost per lead, ₹50,000/month generates 200–330 leads. Budget requirements scale with project price point — luxury properties require more spend but fewer leads are needed per booking."
          }
        },
        {
          "@type": "Question",
          "name": "How do you ensure lead quality, not just volume?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lead quality is managed through audience targeting precision (income filters, age targeting, location radius), ad copy that pre-qualifies by mentioning price points and project specifics, landing pages with qualifying questions, and WhatsApp automation that filters serious buyers from casual browsers before they reach your sales team. We track site visit rate, not just lead volume, as the primary quality metric."
          }
        },
        {
          "@type": "Question",
          "name": "Do you create property videos and photography?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — through our in-house photography and video team. We offer drone aerial shoots, walkthrough videos, and professional property photography as add-on services. Video creative dramatically improves ad performance for real estate — Meta video ads for property consistently deliver 3–5× higher engagement than static image ads. We can bundle creative production with your campaign management."
          }
        },
        {
          "@type": "Question",
          "name": "Can you target NRI buyers internationally?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — NRI targeting is a specialist capability we offer for premium and investment-grade properties. Meta allows country-specific targeting, and we've run campaigns targeting Indian diaspora in the UAE, USA, UK, Canada, and Australia for Indore and MP properties. NRI leads typically have higher budget and lower price sensitivity, though longer decision cycles due to remote purchase dynamics."
          }
        },
        {
          "@type": "Question",
          "name": "What CRM integrations do you support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We integrate with real estate CRMs including Sell.do, LeadSquared, HubSpot, Zoho CRM, and custom CRMs via webhooks. Lead form submissions from Google and Meta are pushed directly to your CRM in real time — no manual copy-paste. WhatsApp follow-up is triggered automatically from the CRM entry, ensuring no lead goes cold from delayed response."
          }
        },
        {
          "@type": "Question",
          "name": "Can you handle multiple projects simultaneously?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — we manage multiple concurrent project campaigns for developers with diverse portfolios. Each project gets its own campaign structure, landing page, and budget allocation. Cross-project audience insights are shared — buyers who don't qualify for one project are often retargeted with a more suitable alternative, maximising value from your overall ad spend."
          }
        },
        {
          "@type": "Question",
          "name": "Do you manage 99acres/MagicBricks listings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We focus on owned-channel lead generation — Google, Meta, WhatsApp, and your own website — rather than portal management. Portal listings have high per-lead costs and shared audiences; owned channels give you exclusive leads, better data, and no platform dependency. Many clients run portals independently alongside our campaigns for maximum coverage."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can we start getting leads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Google Search campaigns can be live and generating leads within 48–72 hours of ad account access and creative approval. Meta campaigns typically take 3–5 days to enter the learning phase and start producing consistent leads. WhatsApp automation is usually live within the same week. Most real estate clients see their first inquiries within the first 7 days of campaign launch."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How Digital Marketing for Real Estate India Works — Our Process",
      "description": "Digital marketing for real estate developers, brokers, and property portals. Click Decoded drives qualified property inquiries through Google Ads, SEO, Meta Ads, and WhatsApp automation.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Project & Audience Brief",
          "text": "Deep dive into your project — location, price point, USPs, RERA details, target buyer profile, and competitor landscape. We map the buyer journey from first search to site visit and build the campaign strategy around your specific sales cycle."
        },
        {
          "@type": "HowToStep",
          "name": "Campaign Build",
          "text": "Google Search and Meta campaigns built with property-specific ad copy, creative assets (or guidance on what to shoot), landing pages optimised for inquiry conversion, and lead form integrations with your CRM or WhatsApp inbox."
        },
        {
          "@type": "HowToStep",
          "name": "Launch & Qualify",
          "text": "Campaigns go live. WhatsApp automation instantly follows up every lead with project details and a qualification sequence. Leads scored by engagement and site visit intent — your sales team only calls leads that have shown genuine interest."
        },
        {
          "@type": "HowToStep",
          "name": "Optimise Weekly",
          "text": "Weekly lead quality reviews — which ads drove site visits vs. time-wasters, which localities produced the best buyers, which price points generated the most serious inquiries. Budgets shifted and audiences refined weekly to reduce cost per qualified lead."
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
          "name": "Digital Marketing for Real Estate",
          "item": "https://www.clickdecoded.com/industries/real-estate"
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
document.querySelectorAll('.ma>button').forEach(b=>{b.addEventListener('click',()=>{const p=b.parentElement,o=p.classList.contains('on');document.querySelectorAll('.ma').forEach(x=>x.classList.remove('on'));if(!o)p.classList.add('on');});});
document.querySelectorAll('.fi-q').forEach(b=>b.addEventListener('click',()=>{const fi=b.parentElement,was=fi.classList.contains('on');document.querySelectorAll('.fi').forEach(x=>x.classList.remove('on'));if(!was)fi.classList.add('on');}));
})();`

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld0 }} />
      <div className="breadcrumb"><div className="wrap"><div className="bc-list"><a href="/">Home</a><span style={{ opacity: '.4' }}>›</span><span>Industries</span><span style={{ opacity: '.4' }}>›</span><span>Real Estate</span></div></div></div>
      <section className="hero">
<div className="wrap">
<div className="hero-grid">
<div>
<div className="hero-eyebrow">🏠 Real Estate Digital Marketing</div>
<h1>More Property Inquiries. <em>Qualified Buyers.</em> Shorter Sales Cycles.</h1>
<p className="hero-desc">Digital marketing built specifically for real estate developers, brokers, and housing projects — driving verified property inquiries through Google Ads, Meta, SEO, and WhatsApp automation that qualifies leads before they reach your sales team.</p>
<div className="hero-btns">
<a href="/contact" className="btn btn-ac">🏠 Get a Free Strategy Call</a>
<a href="https://wa.me/919407000101" className="btn btn-ghost">💬 WhatsApp Us</a>
</div>
<div className="hero-proof">
<span className="proof-item"><strong>₹180</strong> Avg Cost Per Lead</span>
<span className="proof-item"><strong>3.2×</strong> More Qualified Inquiries</span>
<span className="proof-item"><strong>₹25K</strong> Starting / Month</span>
</div>
</div>

<div className="re-mock">
<div className="mock-browser">
<div className="mock-dots"><span></span><span></span><span></span></div>
<div className="mock-url">Property Lead Dashboard — Click Decoded</div>
</div>
<div className="re-header">
<div className="re-title">🏠 Active Listings · Lead Tracker</div>
<div className="re-kpis">
<div className="re-kpi"><div className="re-kv">84</div><div className="re-kl">Leads / Week</div></div>
<div className="re-kpi"><div className="re-kv">₹182</div><div className="re-kl">Cost / Lead</div></div>
</div>
</div>
<div className="re-cards">
<div className="prop-card featured">
<div className="feat-badge">⭐ Featured</div>
<div className="prop-img a">🏢</div>
<div className="prop-info">
<div className="prop-name">Skyline Heights — 3 BHK</div>
<div className="prop-loc">📍 Vijay Nagar, Indore</div>
<div className="prop-tags">
<div className="prop-tag">Ready Possession</div>
<div className="prop-tag">RERA Approved</div>
<div className="prop-tag">1,480 sq.ft</div>
</div>
</div>
<div className="prop-right">
<div className="prop-price">₹68.5L</div>
<div className="prop-inq"><strong>34</strong> inquiries this week</div>
<div className="prop-btn">View Leads →</div>
</div>
</div>
<div className="prop-card">
<div className="prop-img b">🏡</div>
<div className="prop-info">
<div className="prop-name">Green Valley — 2 BHK Villa</div>
<div className="prop-loc">📍 Bicholi Mardana, Indore</div>
<div className="prop-tags">
<div className="prop-tag">Under Construction</div>
<div className="prop-tag">Dec 2025</div>
<div className="prop-tag">1,100 sq.ft</div>
</div>
</div>
<div className="prop-right">
<div className="prop-price">₹42L</div>
<div className="prop-inq"><strong>28</strong> inquiries this week</div>
<div className="prop-btn">View Leads →</div>
</div>
</div>
<div className="prop-card">
<div className="prop-img c">🏬</div>
<div className="prop-info">
<div className="prop-name">Commerce Hub — Office Space</div>
<div className="prop-loc">📍 AB Road, Indore</div>
<div className="prop-tags">
<div className="prop-tag">Commercial</div>
<div className="prop-tag">500–2000 sq.ft</div>
</div>
</div>
<div className="prop-right">
<div className="prop-price">₹85L+</div>
<div className="prop-inq"><strong>22</strong> inquiries this week</div>
<div className="prop-btn">View Leads →</div>
</div>
</div>
</div>
<div className="re-live">
<div className="re-live-text"><div className="re-live-dot"></div>New inquiry just received — Skyline Heights</div>
<div className="re-live-count">84 leads this week</div>
</div>
</div>
</div>
</div>
</section>
      <div className="stats-strip">
<div className="stats-inner">
<div className="stat-box"><div className="stat-n">₹180</div><div className="stat-l">Avg Cost Per Lead</div></div>
<div className="stat-box"><div className="stat-n">3.2×</div><div className="stat-l">More Qualified Leads</div></div>
<div className="stat-box"><div className="stat-n">40%</div><div className="stat-l">Lower Sales Cycle</div></div>
<div className="stat-box"><div className="stat-n">₹25K</div><div className="stat-l">Starting / Month</div></div>
</div>
</div>
      <section>
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag">What We Do</div>
<h2>Every Channel That Drives<br />Property Inquiries — Managed.</h2>
<p>From Google search ads targeting active property buyers to Meta campaigns building awareness for new launches — we handle the full digital marketing mix for real estate.</p>
</div>
<div className="inc-grid">
<div className="inc-card rv"><div className="inc-icon">📈</div><h3>Google Ads for Real Estate</h3><p>Search campaigns targeting high-intent buyers searching "2 BHK flats in [city]", "plots for sale near me", and project-specific keywords — capturing buyers at the exact moment of purchase intent with cost-per-lead averaging ₹150–₹250.</p></div>
<div className="inc-card rv2"><div className="inc-icon">📱</div><h3>Meta &amp; Instagram Ads</h3><p>Facebook and Instagram campaigns combining video walkthroughs, carousel property galleries, and lead form ads targeting income brackets, age groups, and location-based audiences most likely to purchase your property type and price point.</p></div>
<div className="inc-card rv3"><div className="inc-icon">🔍</div><h3>Real Estate SEO</h3><p>Ranking your project pages and area guides for organic property search terms — "flats in [area]", "property in [city] under X lakhs" — driving free, high-intent traffic that complements and reduces dependence on paid ad spend over time.</p></div>
<div className="inc-card rv"><div className="inc-icon">💬</div><h3>WhatsApp Lead Nurture</h3><p>Automated WhatsApp sequences triggered the moment a lead submits a form — instant project details sent, qualification questions asked, and site visit booking links shared, all before your sales team makes the first call.</p></div>
<div className="inc-card rv2"><div className="inc-icon">🎬</div><h3>Property Video &amp; Photography</h3><p>Drone aerial footage, walkthrough videos, and professional property photography that dramatically improve ad performance — listings with video get 4× more inquiries than static image ads on Meta and YouTube platforms.</p></div>
<div className="inc-card rv3"><div className="inc-icon">🔄</div><h3>Retargeting Campaigns</h3><p>Re-engaging website visitors and inquiry drop-offs with targeted ads showing the exact property they viewed — keeping your project top-of-mind through a 30–90 day consideration cycle typical of real estate purchase decisions.</p></div>
</div>
</div>
</section>
      <section className="dark-section">
<div className="wrap">
<div className="sec-h rv" style={{ marginBottom: '40px' }}>
<h2 style={{ color: '#fff' }}>Built for Every Type of<br />Real Estate Business.</h2>
<p style={{ color: 'rgba(255,255,255,.55)' }}>Whether you're launching a new residential project, running an established brokerage, or selling commercial property — our strategies are customised to your inventory, price point, and buyer profile.</p>
</div>
<div className="formats-grid">
<div className="fmt-card rv"><div className="fmt-top"><div className="fmt-icon">🏗️</div><div className="fmt-tag">Developers</div></div><h3>Project Launches</h3><p>Full-funnel launch campaigns for new residential projects — pre-launch buzz building, launch day lead surge, and sustained post-launch inquiry generation to maintain sales velocity through construction and possession phases.</p></div>
<div className="fmt-card rv2"><div className="fmt-top"><div className="fmt-icon">🤝</div><div className="fmt-tag">Brokers</div></div><h3>Brokerage &amp; Resale</h3><p>Multi-listing campaigns for real estate brokers managing diverse property portfolios — dynamic ads pulling property details from your inventory, optimised individually for each listing's location, type, and target buyer profile.</p></div>
<div className="fmt-card rv3"><div className="fmt-top"><div className="fmt-icon">🏘️</div><div className="fmt-tag">Residential</div></div><h3>Affordable Housing</h3><p>Targeted campaigns for budget and mid-segment housing — reaching first-time buyers, PMAY beneficiaries, and young professionals through Facebook, Instagram, and Google with EMI-focused messaging that converts price-conscious buyers.</p></div>
<div className="fmt-card rv"><div className="fmt-top"><div className="fmt-icon">💼</div><div className="fmt-tag">Commercial</div></div><h3>Commercial Properties</h3><p>B2B-focused campaigns for office space, retail shops, and commercial plots — targeting business owners, startup founders, and investors through LinkedIn, Google Search, and industry-specific audience targeting on Meta.</p></div>
<div className="fmt-card rv2"><div className="fmt-top"><div className="fmt-icon">🌄</div><div className="fmt-tag">Plots &amp; Land</div></div><h3>Plot &amp; Land Sales</h3><p>Campaigns for plotted developments and agricultural land — reaching NRI investors, retirement buyers, and land banking investors through long-form video ads, location showcases, and Google display campaigns targeting relevant search intent.</p></div>
<div className="fmt-card rv3"><div className="fmt-top"><div className="fmt-icon">👑</div><div className="fmt-tag">Luxury</div></div><h3>Premium &amp; Luxury</h3><p>High-net-worth individual targeting for luxury villas, penthouses, and premium projects — using income-based audience targeting, affluent area geo-fencing, and premium creative formats that match the aspirational positioning of ₹1Cr+ properties.</p></div>
</div>
</div>
</section>
      <section className="bg-subtle">
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag">Our Process</div>
<h2>First Leads Flowing<br />Within 7 Days.</h2>
<p>A fast-start process that gets your Google and Meta campaigns live, WhatsApp automation configured, and first qualified inquiries arriving within the first week.</p>
</div>
<div className="steps-grid">
<div className="step rv"><div className="step-num">01</div><h4>Project &amp; Audience Brief</h4><p>Deep dive into your project — location, price point, USPs, RERA details, target buyer profile, and competitor landscape. We map the buyer journey from first search to site visit and build the campaign strategy around your specific sales cycle.</p></div>
<div className="step rv2"><div className="step-num">02</div><h4>Campaign Build</h4><p>Google Search and Meta campaigns built with property-specific ad copy, creative assets (or guidance on what to shoot), landing pages optimised for inquiry conversion, and lead form integrations with your CRM or WhatsApp inbox.</p></div>
<div className="step rv3"><div className="step-num">03</div><h4>Launch &amp; Qualify</h4><p>Campaigns go live. WhatsApp automation instantly follows up every lead with project details and a qualification sequence. Leads scored by engagement and site visit intent — your sales team only calls leads that have shown genuine interest.</p></div>
<div className="step rv3"><div className="step-num">04</div><h4>Optimise Weekly</h4><p>Weekly lead quality reviews — which ads drove site visits vs. time-wasters, which localities produced the best buyers, which price points generated the most serious inquiries. Budgets shifted and audiences refined weekly to reduce cost per qualified lead.</p></div>
</div>
</div>
</section>
      <section>
<div className="wrap">
<div className="sec-h rv"><h2>Frequently Asked Questions</h2></div>
<div className="faq-2col">
<div>
<div className="fi"><button className="fi-q">How much ad budget do we need for real estate leads?<div className="fi-icon">+</div></button><div className="fi-a">For meaningful real estate lead volume, we recommend a minimum ad spend of ₹30,000–₹50,000/month on Google Ads alone, with a separate budget for Meta if running both channels. At ₹150–₹250 cost per lead, ₹50,000/month generates 200–330 leads. Budget requirements scale with project price point — luxury properties require more spend but fewer leads are needed per booking.</div></div>
<div className="fi"><button className="fi-q">How do you ensure lead quality, not just volume?<div className="fi-icon">+</div></button><div className="fi-a">Lead quality is managed through audience targeting precision (income filters, age targeting, location radius), ad copy that pre-qualifies by mentioning price points and project specifics, landing pages with qualifying questions, and WhatsApp automation that filters serious buyers from casual browsers before they reach your sales team. We track site visit rate, not just lead volume, as the primary quality metric.</div></div>
<div className="fi"><button className="fi-q">Do you create property videos and photography?<div className="fi-icon">+</div></button><div className="fi-a">Yes — through our in-house photography and video team. We offer drone aerial shoots, walkthrough videos, and professional property photography as add-on services. Video creative dramatically improves ad performance for real estate — Meta video ads for property consistently deliver 3–5× higher engagement than static image ads. We can bundle creative production with your campaign management.</div></div>
<div className="fi"><button className="fi-q">Can you target NRI buyers internationally?<div className="fi-icon">+</div></button><div className="fi-a">Yes — NRI targeting is a specialist capability we offer for premium and investment-grade properties. Meta allows country-specific targeting, and we've run campaigns targeting Indian diaspora in the UAE, USA, UK, Canada, and Australia for Indore and MP properties. NRI leads typically have higher budget and lower price sensitivity, though longer decision cycles due to remote purchase dynamics.</div></div>
</div>
<div>
<div className="fi"><button className="fi-q">What CRM integrations do you support?<div className="fi-icon">+</div></button><div className="fi-a">We integrate with real estate CRMs including Sell.do, LeadSquared, HubSpot, Zoho CRM, and custom CRMs via webhooks. Lead form submissions from Google and Meta are pushed directly to your CRM in real time — no manual copy-paste. WhatsApp follow-up is triggered automatically from the CRM entry, ensuring no lead goes cold from delayed response.</div></div>
<div className="fi"><button className="fi-q">Can you handle multiple projects simultaneously?<div className="fi-icon">+</div></button><div className="fi-a">Yes — we manage multiple concurrent project campaigns for developers with diverse portfolios. Each project gets its own campaign structure, landing page, and budget allocation. Cross-project audience insights are shared — buyers who don't qualify for one project are often retargeted with a more suitable alternative, maximising value from your overall ad spend.</div></div>
<div className="fi"><button className="fi-q">Do you manage 99acres/MagicBricks listings?<div className="fi-icon">+</div></button><div className="fi-a">We focus on owned-channel lead generation — Google, Meta, WhatsApp, and your own website — rather than portal management. Portal listings have high per-lead costs and shared audiences; owned channels give you exclusive leads, better data, and no platform dependency. Many clients run portals independently alongside our campaigns for maximum coverage.</div></div>
<div className="fi"><button className="fi-q">How quickly can we start getting leads?<div className="fi-icon">+</div></button><div className="fi-a">Google Search campaigns can be live and generating leads within 48–72 hours of ad account access and creative approval. Meta campaigns typically take 3–5 days to enter the learning phase and start producing consistent leads. WhatsApp automation is usually live within the same week. Most real estate clients see their first inquiries within the first 7 days of campaign launch.</div></div>
</div>
</div>
</div>
</section>
      <div className="wrap" style={{ padding: '40px 28px', borderTop: '1px solid var(--bdr)' }}>
<div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--s)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '16px' }}>Related Industries</div>
<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
<a href="/industries/hospitality" className="rel-link">🏨 Hospitality</a>
<a href="/industries/finance" className="rel-link">💰 Finance</a>
<a href="/industries/legal" className="rel-link">⚖️ Legal</a>
<a href="/industries/ecommerce" className="rel-link">🛒 E-Commerce</a>
<a href="/services/google-ads" className="rel-link">📈 Google Ads</a>
</div>
</div>
      <section className="cta-section">
<div className="wrap">
<h2>Your Next Buyer Is Searching<br />on Google Right Now.</h2>
<p>Get a free real estate marketing audit — we'll analyse your current lead sources, calculate your cost per site visit, and show you exactly where your budget should go.</p>
<div className="cta-btns">
<a href="/contact" className="btn btn-ac">🏠 Get Free Marketing Audit</a>
<a href="https://wa.me/919407000101" className="btn btn-wa">💬 WhatsApp Us</a>
</div>
</div>
</section>
      <PageScript id="industries-real-estate-0" code={js0} />
    </>
  )
}
