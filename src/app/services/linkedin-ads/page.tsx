/* eslint-disable */
// src/app/services/linkedin-ads/page.tsx — generated from linkedin-ads.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "LinkedIn Ads Management India | Click Decoded",
  description: "LinkedIn Ads that reach CEOs, founders, and procurement managers directly. Click Decoded builds B2B LinkedIn campaigns that generate qualified leads, not.",
  alternates: { canonical: "/services/linkedin-ads" },
}

const css = `
:root{
  --ac:#0A66C2;--ac2:#0856a0;--ac-rgb:10,102,194;
  --n:#1e3a5f;--n-dark:#0a1628;
  --body:#1E293B;--m:#475569;--s:#64748b;
  --bg:#F4F7FC;--bdr:#E2E8F0;
  --o:#EE7E1A;
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
/* ===== NAV CSS ===== */
.topbar{background:var(--n-dark);height:40px;display:flex;align-items:center;}
.topbar-inner{max-width:1200px;margin:0 auto;padding:0 28px;display:flex;justify-content:space-between;align-items:center;width:100%;}
.topbar-left{display:flex;gap:20px;}
.topbar-left a{font-size:12px;color:rgba(255,255,255,.6);}
.topbar-right{display:flex;gap:8px;}
.tb-btn{display:inline-flex;align-items:center;gap:6px;padding:5px 12px;border-radius:6px;font-size:11.5px;font-weight:700;transition:.15s;}
.tb-call{background:rgba(238,126,26,.15);color:var(--o);border:1px solid rgba(238,126,26,.25);}
.tb-wa{background:rgba(37,211,102,.15);color:#25D366;border:1px solid rgba(37,211,102,.25);}
.tb-call:hover{background:var(--o);color:#fff;}
.tb-wa:hover{background:#25D366;color:#fff;}
#hdr{background:rgba(255,255,255,.97);backdrop-filter:blur(14px);border-bottom:1px solid var(--bdr);transition:box-shadow .2s;}
#hdr.up{box-shadow:0 4px 32px rgba(10,22,40,.09);}
.nav{display:flex;align-items:center;justify-content:space-between;height:70px;gap:16px;}
.dmenu{display:flex;align-items:center;gap:2px;}
.dmenu>li{position:relative;}
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
.mc a:hover{color:var(--ac);padding-left:14px;}
.mc a:hover::before{height:13px;}
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
.ms{display:none;padding:0 0 16px;}
.ma.on .ms{display:block;}
.ms a{display:block;padding:7px 0;font-size:14px;color:var(--m);}
.ms h6{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--n);margin:12px 0 4px;}
@media(max-width:960px){.hb{display:flex;}.dmenu,.navcta .btn-o{display:none;}}
/* ===== END NAV CSS ===== */
/* BREADCRUMB */
.breadcrumb{background:var(--bg);padding:12px 0;border-bottom:1px solid var(--bdr);}
.bc-list{display:flex;align-items:center;gap:8px;font-size:12.5px;color:var(--s);}
.bc-list a{color:var(--n);font-weight:500;}.bc-list a:hover{color:var(--ac);}
/* HERO */
.hero{background:linear-gradient(155deg,#020c1e 0%,#061830 45%,#020c1e 100%);padding:96px 0 80px;position:relative;overflow:hidden;}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 55% at 68% 35%,rgba(10,102,194,.2) 0%,transparent 65%),radial-gradient(ellipse 35% 40% at 8% 80%,rgba(10,102,194,.07) 0%,transparent 60%);}
.hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;position:relative;z-index:2;}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;background:rgba(10,102,194,.15);border:1px solid rgba(10,102,194,.35);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#60a5fa;margin-bottom:20px;}
.hero h1{font-size:48px;color:#fff;line-height:1.06;letter-spacing:-.04em;margin-bottom:20px;}
.hero h1 em{font-style:normal;background:linear-gradient(135deg,#60a5fa,#0a66c2);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-desc{font-size:17px;color:rgba(255,255,255,.62);line-height:1.7;margin-bottom:32px;max-width:460px;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:36px;}
.hero-proof{display:flex;gap:24px;flex-wrap:wrap;}
.proof-item{font-size:13px;color:rgba(255,255,255,.5);}
.proof-item strong{color:#fff;font-weight:700;}
/* LINKEDIN MOCK */
.li-mock{border-radius:20px;overflow:hidden;box-shadow:0 28px 70px rgba(0,0,0,.6);background:#1b1f23;border:1px solid rgba(10,102,194,.25);}
.mock-browser{background:rgba(255,255,255,.05);padding:10px 14px;border-bottom:1px solid rgba(255,255,255,.07);display:flex;align-items:center;gap:10px;}
.mock-dots{display:flex;gap:5px;}
.mock-dots span{width:9px;height:9px;border-radius:50%;}
.mock-dots span:nth-child(1){background:#ff5f57;}
.mock-dots span:nth-child(2){background:#ffbd2e;}
.mock-dots span:nth-child(3){background:#28c840;}
.mock-url{flex:1;background:rgba(255,255,255,.07);border-radius:6px;padding:5px 12px;font-size:11px;color:rgba(255,255,255,.35);}
/* Campaign Manager header */
.li-camp-hdr{background:rgba(10,102,194,.1);border-bottom:1px solid rgba(10,102,194,.2);padding:10px 14px;display:flex;align-items:center;justify-content:space-between;}
.li-camp-title{font-size:12px;font-weight:700;color:rgba(255,255,255,.75);}
.li-live{font-size:10px;font-weight:700;padding:3px 9px;border-radius:5px;background:rgba(74,222,128,.1);border:1px solid rgba(74,222,128,.2);color:#4ade80;}
/* Sponsored post card */
.li-post{padding:14px;border-bottom:1px solid rgba(255,255,255,.06);}
.li-post-head{display:flex;align-items:center;gap:10px;margin-bottom:10px;}
.li-avatar{width:38px;height:38px;border-radius:50%;background:linear-gradient(135deg,#0a66c2,#0856a0);display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;}
.li-post-meta{flex:1;}
.li-post-name{font-size:12px;font-weight:700;color:#fff;line-height:1.2;}
.li-post-sub{font-size:10px;color:rgba(255,255,255,.35);margin-top:1px;}
.li-sponsored{font-size:9px;color:rgba(255,255,255,.3);display:flex;align-items:center;gap:4px;margin-top:2px;}
.li-post-body{font-size:11px;color:rgba(255,255,255,.6);line-height:1.55;margin-bottom:10px;}
.li-post-body strong{color:#60a5fa;}
/* Ad creative banner */
.li-banner{background:linear-gradient(135deg,rgba(10,102,194,.25),rgba(10,102,194,.08));border:1px solid rgba(10,102,194,.2);border-radius:10px;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;}
.li-banner-text{font-size:12px;font-weight:700;color:#fff;}
.li-banner-sub{font-size:10px;color:rgba(255,255,255,.4);margin-top:3px;}
.li-banner-cta{background:#0a66c2;color:#fff;font-size:10px;font-weight:700;padding:6px 12px;border-radius:6px;white-space:nowrap;flex-shrink:0;}
.li-reactions{display:flex;align-items:center;gap:12px;font-size:10px;color:rgba(255,255,255,.3);}
/* Campaign metrics */
.li-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,.05);border-bottom:1px solid rgba(255,255,255,.05);}
.li-metric{padding:12px 14px;background:#1b1f23;}
.lm-icon{font-size:14px;margin-bottom:5px;}
.lm-val{font-size:19px;font-weight:900;color:#fff;letter-spacing:-.02em;line-height:1;}
.lm-label{font-size:9px;color:rgba(255,255,255,.35);margin-top:3px;text-transform:uppercase;letter-spacing:.06em;}
/* Sparkline */
.li-chart{padding:12px 14px 14px;}
.chart-label{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.25);margin-bottom:7px;}
.sparkline{display:flex;align-items:flex-end;gap:3px;height:38px;}
.spark-bar{flex:1;border-radius:2px 2px 0 0;background:linear-gradient(180deg,rgba(10,102,194,.9),rgba(10,102,194,.2));}
/* STATS */
.stats-strip{background:var(--ac);}
.stats-inner{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(0,0,0,.2);}
.stat-box{padding:32px 24px;text-align:center;background:var(--ac);}
.stat-n{font-size:40px;font-weight:900;color:#fff;line-height:1;letter-spacing:-.03em;}
.stat-l{font-size:12px;color:rgba(255,255,255,.75);margin-top:6px;font-weight:500;text-transform:uppercase;letter-spacing:.06em;}
/* SECTIONS */
.sec-h{text-align:center;max-width:640px;margin:0 auto 52px;}
.sec-tag{display:inline-flex;padding:5px 13px;border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:10px;background:rgba(10,102,194,.08);border:1px solid rgba(10,102,194,.18);color:var(--ac);}
.sec-h h2{font-size:36px;margin-bottom:14px;}
.sec-h p{font-size:16px;color:var(--m);line-height:1.65;}
/* INCLUDED */
.inc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.inc-card{background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:28px 24px;transition:.2s;}
.inc-card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(10,102,194,.1);border-color:rgba(10,102,194,.22);}
.inc-icon{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:16px;background:rgba(10,102,194,.07);border:1px solid rgba(10,102,194,.12);}
.inc-card h3{font-size:17px;margin-bottom:10px;}
.inc-card p{font-size:13.5px;color:var(--m);line-height:1.65;}
/* AD FORMATS dark section */
.dark-section{background:var(--n-dark);padding:88px 0;}
.formats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:1000px;margin:0 auto;}
.fmt-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:24px;transition:.2s;}
.fmt-card:hover{border-color:rgba(10,102,194,.35);background:rgba(10,102,194,.07);transform:translateY(-2px);}
.fmt-top{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px;}
.fmt-icon{font-size:26px;}
.fmt-tag{font-size:10px;font-weight:700;padding:3px 8px;border-radius:5px;background:rgba(10,102,194,.18);border:1px solid rgba(10,102,194,.3);color:#60a5fa;}
.fmt-card h3{font-size:15px;font-weight:700;color:#fff;margin-bottom:6px;}
.fmt-card p{font-size:13px;color:rgba(255,255,255,.5);line-height:1.6;}
/* PROCESS */
.bg-subtle{background:var(--bg);}
.steps-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative;}
.steps-grid::before{content:'';position:absolute;top:34px;left:12%;right:12%;height:2px;background:linear-gradient(90deg,var(--ac),var(--ac2));z-index:0;opacity:.4;}
.step{text-align:center;padding:0 16px;position:relative;z-index:1;}
.step-num{width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,var(--ac),var(--ac2));color:#fff;font-size:20px;font-weight:900;display:flex;align-items:center;justify-content:center;margin:0 auto 18px;box-shadow:0 8px 24px rgba(10,102,194,.3);}
.step h4{font-size:15px;margin-bottom:7px;}
.step p{font-size:13px;color:var(--m);line-height:1.6;}
/* FAQ */
.faq-2col{display:grid;grid-template-columns:1fr 1fr;gap:0 28px;align-items:start;}
.fi{border:1px solid var(--bdr);border-radius:14px;margin-bottom:10px;overflow:hidden;background:#fff;transition:.15s;}
.fi.on{border-color:rgba(10,102,194,.3);box-shadow:0 4px 20px rgba(10,102,194,.07);}
.fi-q{width:100%;text-align:left;background:transparent;border:none;padding:20px 22px;font-size:14px;font-weight:700;color:var(--n);display:flex;justify-content:space-between;align-items:center;gap:12px;cursor:pointer;}
.fi-icon{width:26px;height:26px;border-radius:50%;flex-shrink:0;background:var(--bg);border:1px solid var(--bdr);display:flex;align-items:center;justify-content:center;color:var(--ac);font-size:18px;line-height:1;transition:transform .2s;}
.fi.on .fi-icon{transform:rotate(45deg);background:var(--ac);color:#fff;border-color:var(--ac);}
.fi-a{max-height:0;overflow:hidden;transition:.3s;color:var(--m);font-size:14px;line-height:1.75;}
.fi.on .fi-a{max-height:300px;padding:0 22px 22px;}
/* CTA */
.cta-section{background:linear-gradient(155deg,#020c1e 0%,#061830 100%);padding:96px 0;text-align:center;position:relative;overflow:hidden;}
.cta-section::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(10,102,194,.15) 0%,transparent 70%);}
.cta-section h2{color:#fff;font-size:44px;margin-bottom:16px;position:relative;z-index:1;}
.cta-section p{color:rgba(255,255,255,.6);font-size:17px;margin-bottom:36px;max-width:500px;margin-left:auto;margin-right:auto;line-height:1.65;position:relative;z-index:1;}
.cta-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;position:relative;z-index:1;}
.rel-link{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;border-radius:99px;border:1.5px solid var(--bdr);font-size:13px;font-weight:500;color:var(--m);transition:.15s;}
.rel-link:hover{border-color:var(--ac);color:var(--ac);}
/* ANIMATE */
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

/* ===== FOOTER CSS ===== */
footer{background:var(--n-dark);padding:64px 0 0;}
.fg{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:40px;}
.fb-desc{font-size:13.5px;color:rgba(255,255,255,.4);line-height:1.7;margin:16px 0 20px;}
.socials{display:flex;gap:10px;}
.socials a{width:34px;height:34px;border-radius:8px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.5);transition:.15s;}
.socials a:hover{background:var(--o,#EE7E1A);color:#fff;border-color:var(--o,#EE7E1A);}
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
/* ===== END FOOTER CSS ===== */
`

const ld0 = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "LinkedIn Ads Management",
      "provider": {
        "@type": "Organization",
        "name": "Click Decoded",
        "url": "https://www.clickdecoded.com"
      },
      "description": "LinkedIn Ads that reach CEOs, founders, and procurement managers directly. Click Decoded builds B2B LinkedIn campaigns that generate qualified leads, not just clicks.",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": "LinkedIn Ads Management",
      "url": "https://www.clickdecoded.com/services/linkedin-ads"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is LinkedIn Ads worth it for Indian B2B companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. LinkedIn has 100M+ users in India including C-suite executives, founders, and senior managers at companies of all sizes. For B2B services, SaaS, consulting, and professional services, LinkedIn delivers the highest quality leads of any paid channel — though CPL is higher than Google or Meta."
          }
        },
        {
          "@type": "Question",
          "name": "What's the minimum budget for LinkedIn Ads in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "LinkedIn requires a minimum daily budget of approximately ₹840/day (~$10). We recommend ₹30,000–₹50,000/month in ad spend to gather enough data for meaningful optimisation. Our management fee starts at ₹25,000/month separately."
          }
        },
        {
          "@type": "Question",
          "name": "What CPL can I expect from LinkedIn Ads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In India, B2B LinkedIn Ads typically deliver CPLs of ₹500–₹2,500 depending on target audience size and offer type. Niche C-suite targeting costs more per lead but delivers dramatically higher close rates. We optimise aggressively to minimise CPL without sacrificing quality."
          }
        },
        {
          "@type": "Question",
          "name": "How long do LinkedIn Ads take to show results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "First leads typically arrive within the first week. Meaningful CPL data needs 3–4 weeks of spend. Most clients see optimised CPL and consistent lead flow by Month 2. B2B sales cycles mean pipeline impact is usually measurable by Month 3."
          }
        },
        {
          "@type": "Question",
          "name": "What industries work best with LinkedIn Ads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "B2B SaaS, IT services, management consulting, legal and CA firms, HR & recruitment, manufacturing, financial services, and professional training all perform extremely well. Any business selling to professionals, managers, or enterprise companies is a strong fit."
          }
        },
        {
          "@type": "Question",
          "name": "Do you write the ad copy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our team writes all ad copy and Lead Gen Form content — headlines, body text, CTA copy, and thank-you messages — tailored to your ICP and value proposition. You approve before anything goes live."
          }
        },
        {
          "@type": "Question",
          "name": "Can LinkedIn Ads work alongside Google Ads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They're complementary, not competitive. LinkedIn builds awareness and generates top-funnel leads from your exact ICP. Google captures demand from people already searching for your solution. Running both together creates a full-funnel B2B lead engine."
          }
        },
        {
          "@type": "Question",
          "name": "What reporting will I receive?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Monthly visual reports covering Impressions, Clicks, CTR, Leads, CPL, Lead Quality score, and spend by campaign — with strategy notes and the plan for the following month. Lead data is synced to your CRM or shared via Google Sheets in real time."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How LinkedIn Ads Management India Works — Our Process",
      "description": "LinkedIn Ads that reach CEOs, founders, and procurement managers directly. Click Decoded builds B2B LinkedIn campaigns that generate qualified leads, not just clicks.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "ICP & Audience Mapping",
          "text": "We define your Ideal Customer Profile — job titles, seniority, industry, company size — and build hyper-targeted LinkedIn audience segments."
        },
        {
          "@type": "HowToStep",
          "name": "Ad Creative & Offer Strategy",
          "text": "Value-first ad copy, Lead Gen Form structure, and creative briefs built for a professional audience that ignores generic promotional messaging."
        },
        {
          "@type": "HowToStep",
          "name": "Launch & Integrate",
          "text": "Campaigns live with Lead Gen Forms connected to your CRM. Every lead captured automatically, no manual CSV downloads needed."
        },
        {
          "@type": "HowToStep",
          "name": "Optimise & Scale",
          "text": "Weekly CPL reviews, A/B testing of targeting segments and creatives, monthly strategy calls. Scale budgets to audiences generating the best pipeline."
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
          "name": "LinkedIn Ads Management",
          "item": "https://www.clickdecoded.com/services/linkedin-ads"
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
const heights=[12,18,15,24,30,28,36,42,38,52,60,72];
const sl=document.getElementById('sparkline');
if(sl){heights.forEach(h=>{const b=document.createElement('div');b.className='spark-bar';b.style.height=h+'%';sl.appendChild(b);});}
})();`

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld0 }} />
      <div className="breadcrumb"><div className="wrap"><div className="bc-list"><a href="/">Home</a><span style={{ opacity: '.4' }}>›</span><span>Paid Ads</span><span style={{ opacity: '.4' }}>›</span><span>LinkedIn Ads</span></div></div></div>
      <section className="hero">
<div className="wrap">
<div className="hero-grid">
<div>
<div className="hero-eyebrow">💼 B2B Advertising · Decision-Maker Targeting · 100M+ India Users</div>
<h1>LinkedIn Ads That Reach <em>Decision-Makers</em> Directly.</h1>
<p className="hero-desc">Stop cold-calling CEOs and chasing unqualified leads. LinkedIn Ads put your message in front of the exact job titles, industries, and company sizes that matter — when they're in a professional mindset.</p>
<div className="hero-btns">
<a href="/contact" className="btn btn-ac">💼 Get Free B2B Audit</a>
<a href="https://wa.me/919407000101" className="btn btn-ghost">💬 WhatsApp Us</a>
</div>
<div className="hero-proof" style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
<span className="proof-item"><strong>312</strong> Avg Leads / Month</span>
<span className="proof-item"><strong>₹680</strong> Avg Cost Per Lead</span>
<span className="proof-item"><strong>₹25K</strong> Starting / Month</span>
</div>
</div>

<div className="li-mock">
<div className="mock-browser">
<div className="mock-dots"><span></span><span></span><span></span></div>
<div className="mock-url">linkedin.com/campaignmanager — Click Decoded</div>
</div>
<div className="li-camp-hdr">
<div className="li-camp-title">Campaign: B2B SaaS Lead Gen · Sponsored Content</div>
<div className="li-live">● Active</div>
</div>

<div className="li-post">
<div className="li-post-head">
<div className="li-avatar">🏢</div>
<div className="li-post-meta">
<div className="li-post-name">Click Decoded · Sponsored</div>
<div className="li-post-sub">Digital Marketing Agency · India</div>
<div className="li-sponsored">🌐 Promoted to: CEOs, Founders, Marketing Directors</div>
</div>
</div>
<div className="li-post-body">
            We helped a B2B SaaS company generate <strong>312 qualified leads</strong> in 90 days — all from LinkedIn Ads targeting decision-makers by job title + company size. Here's exactly how we did it →
          </div>
<div className="li-banner">
<div>
<div className="li-banner-text">Free B2B LinkedIn Ads Audit</div>
<div className="li-banner-sub">See your real CPL potential in 15 minutes</div>
</div>
<div className="li-banner-cta">Get Audit</div>
</div>
<div className="li-reactions">
<span>👍 247</span><span>💬 34 comments</span><span>↗ 89 reposts</span>
</div>
</div>

<div className="li-metrics">
<div className="li-metric"><div className="lm-icon">📊</div><div className="lm-val">847K</div><div className="lm-label">Impressions</div></div>
<div className="li-metric"><div className="lm-icon">🎯</div><div className="lm-val">312</div><div className="lm-label">Leads</div></div>
<div className="li-metric"><div className="lm-icon">💰</div><div className="lm-val">₹680</div><div className="lm-label">Cost / Lead</div></div>
</div>
<div className="li-chart">
<div className="chart-label">Lead Volume — Last 30 Days</div>
<div className="sparkline" id="sparkline"></div>
</div>
</div>
</div>
</div>
</section>
      <div className="stats-strip">
<div className="stats-inner">
<div className="stat-box"><div className="stat-n">847K+</div><div className="stat-l">Impressions Delivered</div></div>
<div className="stat-box"><div className="stat-n">₹680</div><div className="stat-l">Avg Cost Per Lead</div></div>
<div className="stat-box"><div className="stat-n">4.2%</div><div className="stat-l">Avg CTR (B2B)</div></div>
<div className="stat-box"><div className="stat-n">₹25K</div><div className="stat-l">Starting / Month</div></div>
</div>
</div>
      <section>
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag">What's Included</div>
<h2>B2B LinkedIn Ads,<br />Fully Managed.</h2>
<p>Every element of your LinkedIn campaign — ICP targeting to lead nurturing — handled by certified specialists.</p>
</div>
<div className="inc-grid">
<div className="inc-card rv"><div className="inc-icon">🎯</div><h3>Precision B2B Audience Targeting</h3><p>Target by job title, seniority, company size, industry, and skills. Reach only the people who can actually make buying decisions — no budget wasted on irrelevant viewers.</p></div>
<div className="inc-card rv2"><div className="inc-icon">📋</div><h3>Lead Gen Form Setup</h3><p>Native LinkedIn Lead Gen Forms pre-populate with profile data, removing friction and dramatically increasing form completion rates vs. sending traffic to a landing page.</p></div>
<div className="inc-card rv3"><div className="inc-icon">✍️</div><h3>Sponsored Content &amp; Creative</h3><p>Ad copy, carousel creative briefs, and document ad strategies engineered for a professional audience — authoritative, value-first messaging that drives action.</p></div>
<div className="inc-card rv"><div className="inc-icon">🔄</div><h3>Retargeting &amp; Lookalike Audiences</h3><p>Retarget website visitors and LinkedIn video viewers. Build Lookalike Audiences from your best customers to expand reach to new, similar decision-makers.</p></div>
<div className="inc-card rv2"><div className="inc-icon">📈</div><h3>Bid Strategy &amp; Budget Optimisation</h3><p>Maximum Delivery, Target Cost, and Manual Bidding strategies tested and rotated weekly to minimise CPL while maximising lead quality for your sales team.</p></div>
<div className="inc-card rv3"><div className="inc-icon">📊</div><h3>CRM Integration &amp; Lead Reporting</h3><p>LinkedIn Lead Gen Forms connected to your CRM or Google Sheets. Monthly reports covering Impressions, CTR, CPL, Lead Quality score, and pipeline value generated.</p></div>
</div>
</div>
</section>
      <section className="dark-section">
<div className="wrap">
<div className="sec-h rv" style={{ marginBottom: '40px' }}>
<h2 style={{ color: '#fff' }}>The Right LinkedIn Ad Format<br />for Every B2B Goal.</h2>
<p style={{ color: 'rgba(255,255,255,.55)' }}>We select and combine formats strategically based on your funnel stage and sales cycle length.</p>
</div>
<div className="formats-grid">
<div className="fmt-card rv"><div className="fmt-top"><div className="fmt-icon">📰</div><div className="fmt-tag">Top Funnel</div></div><h3>Sponsored Content</h3><p>Single image, carousel, and video ads in the LinkedIn feed. Builds brand awareness and thought leadership with your exact ICP at scale.</p></div>
<div className="fmt-card rv2"><div className="fmt-top"><div className="fmt-icon">📋</div><div className="fmt-tag">Lead Gen</div></div><h3>Lead Gen Forms</h3><p>Native forms that open inside LinkedIn with pre-filled profile data. Our highest-converting format — 3–5× better completion rate than external landing pages.</p></div>
<div className="fmt-card rv3"><div className="fmt-top"><div className="fmt-icon">📩</div><div className="fmt-tag">Direct Outreach</div></div><h3>Message Ads (InMail)</h3><p>Personalised messages delivered directly to LinkedIn inboxes. Ideal for event invites, demo requests, and high-value B2B offers that need a direct 1:1 feel.</p></div>
<div className="fmt-card rv"><div className="fmt-top"><div className="fmt-icon">📑</div><div className="fmt-tag">Content</div></div><h3>Document Ads</h3><p>Promote whitepapers, case studies, and guides that prospects can read inside LinkedIn — capturing leads via gated download without leaving the platform.</p></div>
<div className="fmt-card rv2"><div className="fmt-top"><div className="fmt-icon">🎠</div><div className="fmt-tag">Multi-Product</div></div><h3>Carousel Ads</h3><p>Showcase multiple services, use cases, or customer stories in a single swipeable ad. Great for complex B2B solutions with multiple decision-maker personas.</p></div>
<div className="fmt-card rv3"><div className="fmt-top"><div className="fmt-icon">🔄</div><div className="fmt-tag">Retargeting</div></div><h3>Retargeting Ads</h3><p>Follow website visitors and LinkedIn video viewers with bottom-funnel messaging — demo invites, case studies, and offers timed to the buyer's journey stage.</p></div>
</div>
</div>
</section>
      <section className="bg-subtle">
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag">Our Process</div>
<h2>ICP to Qualified Leads.<br />In 3 Weeks.</h2>
<p>A structured launch process that gets campaigns live fast and feeds your sales team qualified B2B leads.</p>
</div>
<div className="steps-grid">
<div className="step rv"><div className="step-num">01</div><h4>ICP &amp; Audience Mapping</h4><p>We define your Ideal Customer Profile — job titles, seniority, industry, company size — and build hyper-targeted LinkedIn audience segments.</p></div>
<div className="step rv2"><div className="step-num">02</div><h4>Ad Creative &amp; Offer Strategy</h4><p>Value-first ad copy, Lead Gen Form structure, and creative briefs built for a professional audience that ignores generic promotional messaging.</p></div>
<div className="step rv3"><div className="step-num">03</div><h4>Launch &amp; Integrate</h4><p>Campaigns live with Lead Gen Forms connected to your CRM. Every lead captured automatically, no manual CSV downloads needed.</p></div>
<div className="step rv3"><div className="step-num">04</div><h4>Optimise &amp; Scale</h4><p>Weekly CPL reviews, A/B testing of targeting segments and creatives, monthly strategy calls. Scale budgets to audiences generating the best pipeline.</p></div>
</div>
</div>
</section>
      <section>
<div className="wrap">
<div className="sec-h rv"><h2>Frequently Asked Questions</h2></div>
<div className="faq-2col">
<div>
<div className="fi"><button className="fi-q">Is LinkedIn Ads worth it for Indian B2B companies?<div className="fi-icon">+</div></button><div className="fi-a">Absolutely. LinkedIn has 100M+ users in India including C-suite executives, founders, and senior managers at companies of all sizes. For B2B services, SaaS, consulting, and professional services, LinkedIn delivers the highest quality leads of any paid channel — though CPL is higher than Google or Meta.</div></div>
<div className="fi"><button className="fi-q">What's the minimum budget for LinkedIn Ads in India?<div className="fi-icon">+</div></button><div className="fi-a">LinkedIn requires a minimum daily budget of approximately ₹840/day (~$10). We recommend ₹30,000–₹50,000/month in ad spend to gather enough data for meaningful optimisation. Our management fee starts at ₹25,000/month separately.</div></div>
<div className="fi"><button className="fi-q">What CPL can I expect from LinkedIn Ads?<div className="fi-icon">+</div></button><div className="fi-a">In India, B2B LinkedIn Ads typically deliver CPLs of ₹500–₹2,500 depending on target audience size and offer type. Niche C-suite targeting costs more per lead but delivers dramatically higher close rates. We optimise aggressively to minimise CPL without sacrificing quality.</div></div>
<div className="fi"><button className="fi-q">How long do LinkedIn Ads take to show results?<div className="fi-icon">+</div></button><div className="fi-a">First leads typically arrive within the first week. Meaningful CPL data needs 3–4 weeks of spend. Most clients see optimised CPL and consistent lead flow by Month 2. B2B sales cycles mean pipeline impact is usually measurable by Month 3.</div></div>
</div>
<div>
<div className="fi"><button className="fi-q">What industries work best with LinkedIn Ads?<div className="fi-icon">+</div></button><div className="fi-a">B2B SaaS, IT services, management consulting, legal and CA firms, HR &amp; recruitment, manufacturing, financial services, and professional training all perform extremely well. Any business selling to professionals, managers, or enterprise companies is a strong fit.</div></div>
<div className="fi"><button className="fi-q">Do you write the ad copy?<div className="fi-icon">+</div></button><div className="fi-a">Yes. Our team writes all ad copy and Lead Gen Form content — headlines, body text, CTA copy, and thank-you messages — tailored to your ICP and value proposition. You approve before anything goes live.</div></div>
<div className="fi"><button className="fi-q">Can LinkedIn Ads work alongside Google Ads?<div className="fi-icon">+</div></button><div className="fi-a">They're complementary, not competitive. LinkedIn builds awareness and generates top-funnel leads from your exact ICP. Google captures demand from people already searching for your solution. Running both together creates a full-funnel B2B lead engine.</div></div>
<div className="fi"><button className="fi-q">What reporting will I receive?<div className="fi-icon">+</div></button><div className="fi-a">Monthly visual reports covering Impressions, Clicks, CTR, Leads, CPL, Lead Quality score, and spend by campaign — with strategy notes and the plan for the following month. Lead data is synced to your CRM or shared via Google Sheets in real time.</div></div>
</div>
</div>
</div>
</section>
      <div className="wrap" style={{ padding: '40px 28px', borderTop: '1px solid var(--bdr)' }}>
<div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--s)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '16px' }}>Related Services</div>
<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
<a href="/services/google-ads" className="rel-link">🔍 Google Ads</a>
<a href="/services/meta-ads" className="rel-link">📘 Meta Ads</a>
<a href="/services/youtube-ads" className="rel-link">▶ YouTube Ads</a>
<a href="/services/retargeting" className="rel-link">🔄 Retargeting</a>
<a href="/services/ai-ad-creatives" className="rel-link">🤖 AI Ad Creatives</a>
<a href="/services/programmatic-seo" className="rel-link">⚙️ Programmatic SEO</a>
</div>
</div>
      <section className="cta-section">
<div className="wrap">
<h2>Ready to Fill Your Pipeline<br />with Qualified B2B Leads?</h2>
<p>Tell us your ICP and we'll show you exactly how many decision-makers you can reach on LinkedIn today.</p>
<div className="cta-btns">
<a href="/contact" className="btn btn-ac">💼 Get Free B2B Strategy Audit</a>
<a href="https://wa.me/919407000101" className="btn btn-wa">💬 WhatsApp Now</a>
</div>
</div>
</section>
      <PageScript id="services-linkedin-ads-0" code={js0} />
    </>
  )
}
