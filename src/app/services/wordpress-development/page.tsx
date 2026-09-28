/* eslint-disable */
// src/app/services/wordpress-development/page.tsx — generated from wordpress-development.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "WordPress Development India | Click Decoded",
  description: "Click Decoded builds fast, secure, and conversion-ready WordPress websites — custom themes, plugin development, WooCommerce, and multisite. Professional.",
  alternates: { canonical: "/services/wordpress-development" },
  openGraph: {
    title: "WordPress Development India — Click Decoded",
    description: "Custom WordPress themes, plugin development, WooCommerce stores, and performance-optimised WordPress websites built for Indian businesses.",
    url: "/services/wordpress-development",
    type: "website",
  },
}

const css = `
:root{
  --n:#1e3a5f;--n2:#152d4a;--n-dark:#0a1628;
  --o:#EE7E1A;--o2:#d46e12;
  --body:#1E293B;--m:#475569;--s:#64748b;
  --bg:#F4F7FC;--bdr:#E2E8F0;
  --wp:#1e6b9e;--wp2:#175a88;--wp3:#dbeafe;
}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;overflow-x:hidden;}
body{font-family:'Inter',system-ui,sans-serif;color:var(--body);background:#fff;-webkit-font-smoothing:antialiased;}
a{text-decoration:none;color:inherit;}img,svg{display:block;}ul{list-style:none;}button{font-family:inherit;cursor:pointer;}
.wrap{max-width:1200px;margin:0 auto;padding:0 28px;}
section{padding:88px 0;}
h1,h2,h3,h4{font-weight:800;line-height:1.1;letter-spacing:-.025em;color:var(--n);}
.pill{display:inline-flex;align-items:center;gap:7px;padding:6px 14px;border-radius:99px;font-size:11.5px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;}
.pill-o{background:rgba(238,126,26,.12);color:var(--o);}
.pill-b{background:rgba(30,58,95,.1);color:var(--n);}
.pill-wp{background:rgba(30,107,158,.1);color:var(--wp);border:1px solid rgba(30,107,158,.2);}
.sec-h{text-align:center;max-width:640px;margin:0 auto 52px;}
.sec-h h2{font-size:36px;margin-top:12px;margin-bottom:14px;}
.sec-h p{font-size:16px;color:var(--m);}
.btn{display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:10px;font-weight:700;font-size:14px;border:none;transition:all .18s;white-space:nowrap;cursor:pointer;}
.btn-wp{background:var(--wp);color:#fff;box-shadow:0 4px 18px rgba(30,107,158,.3);}
.btn-wp:hover{background:var(--wp2);transform:translateY(-2px);box-shadow:0 8px 28px rgba(30,107,158,.4);}
.btn-o{background:var(--o);color:#fff;box-shadow:0 4px 18px rgba(238,126,26,.3);}
.btn-o:hover{background:var(--o2);transform:translateY(-2px);}
.btn-ghost{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.35);}
.btn-ghost:hover{background:rgba(255,255,255,.08);}
.btn-sm{padding:10px 20px;font-size:13px;}
.btn svg{flex-shrink:0;transition:transform .18s;}
.btn:hover svg{transform:translateX(3px);}
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
.mc a::before{content:'';position:absolute;left:0;top:50%;transform:translateY(-50%);width:2px;height:0;border-radius:1px;background:var(--o);transition:height .15s cubic-bezier(.22,1,.36,1);}
.mc a:hover{color:var(--o);padding-left:14px;}
.mc a:hover::before{height:13px;}
.mega.slim a{display:block;padding:9px 12px;font-size:13px;font-weight:500;color:var(--body);border-radius:8px;transition:.15s;}
.mega.slim a:hover{background:var(--bg);color:var(--o);}
.mega.slim a small{display:block;font-size:11px;color:var(--s);font-weight:400;margin-top:1px;}
.navcta{display:flex;align-items:center;gap:10px;}
.hb{background:none;border:none;display:none;flex-direction:column;gap:5px;padding:4px;}
.hb span{display:block;width:22px;height:2px;background:var(--n);border-radius:1px;transition:.2s;}
.mnav{display:none;position:fixed;inset:0;background:#fff;z-index:200;overflow-y:auto;padding:24px 22px 40px;}
.mnav.on{display:block;}
.ma{border-bottom:1px solid var(--bdr);}
.ma>button{width:100%;text-align:left;background:none;border:none;padding:15px 0;font-size:15px;font-weight:600;color:var(--n);display:flex;justify-content:space-between;}
.ms{display:none;padding:0 0 16px;}
.ma.on .ms{display:block;}
.ms a{display:block;padding:7px 0;font-size:14px;color:var(--m);}
.ms h6{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--n);margin:12px 0 4px;}
.breadcrumb{background:var(--bg);padding:12px 0;border-bottom:1px solid var(--bdr);}
.bc-list{display:flex;align-items:center;gap:8px;font-size:12.5px;color:var(--s);list-style:none;}
.bc-list a{color:var(--n);font-weight:500;}
.bc-list a:hover{color:var(--o);}
.bc-sep{opacity:.4;}
/* HERO */
.wp-hero{background:linear-gradient(155deg,#040d1c 0%,#071428 45%,#040d1c 100%);padding:96px 0 80px;position:relative;overflow:hidden;}
.wp-hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 55% at 65% 30%,rgba(30,107,158,.14) 0%,transparent 65%),radial-gradient(ellipse 40% 45% at 15% 75%,rgba(238,126,26,.06) 0%,transparent 60%);}
.wp-hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;position:relative;z-index:2;}
.wp-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;background:rgba(30,107,158,.12);border:1px solid rgba(30,107,158,.3);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#93c5fd;margin-bottom:20px;}
.wp-hero h1{font-size:52px;color:#fff;line-height:1.05;letter-spacing:-.04em;margin-bottom:20px;}
.wp-hero h1 em{font-style:normal;background:linear-gradient(135deg,#93c5fd,#1e6b9e);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.wp-hero-desc{font-size:17px;color:rgba(255,255,255,.62);line-height:1.7;margin-bottom:32px;max-width:480px;}
.wp-hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:40px;}
.wp-trust{display:flex;gap:24px;flex-wrap:wrap;}
.wp-trust-item{display:flex;align-items:center;gap:8px;font-size:13px;color:rgba(255,255,255,.5);}
.wp-trust-item strong{color:#fff;font-weight:700;}
/* WP ADMIN MOCK */
.wp-mock{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:20px;overflow:hidden;backdrop-filter:blur(8px);box-shadow:0 28px 70px rgba(0,0,0,.5);}
.wp-mock-bar{background:#1d2327;padding:0 14px;height:32px;display:flex;align-items:center;gap:12px;border-bottom:1px solid rgba(255,255,255,.07);}
.wp-mock-bar .wp-logo{font-size:14px;font-weight:900;color:#0073aa;}
.wp-mock-bar span{font-size:11px;color:rgba(255,255,255,.35);}
.wp-mock-body{display:grid;grid-template-columns:60px 1fr;}
/* WP sidebar */
.wp-sidebar{background:#23282d;padding:12px 0;border-right:1px solid rgba(255,255,255,.06);}
.wp-sb-item{padding:7px 10px;font-size:10px;color:rgba(255,255,255,.4);display:flex;align-items:center;gap:6px;cursor:default;transition:.15s;}
.wp-sb-item.active{background:rgba(0,115,170,.2);color:#93c5fd;}
.wp-sb-icon{font-size:12px;}
/* WP content */
.wp-content{padding:12px;background:#f0f0f1;}
.wp-page-title{font-size:11px;font-weight:800;color:#1d2327;margin-bottom:8px;}
.wp-pages-list{display:flex;flex-direction:column;gap:4px;margin-bottom:10px;}
.wp-page-row{background:#fff;border:1px solid #ddd;border-radius:4px;padding:6px 10px;display:flex;align-items:center;justify-content:space-between;}
.wp-page-name{font-size:10px;font-weight:600;color:#1d2327;}
.wp-page-status{font-size:9px;padding:2px 7px;border-radius:3px;font-weight:700;}
.wp-page-status.pub{background:#d4edda;color:#155724;}
.wp-page-status.draft{background:#fff3cd;color:#856404;}
.wp-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;}
.wp-metric{background:#fff;border:1px solid #ddd;border-radius:6px;padding:8px 10px;text-align:center;}
.wp-metric-val{font-size:16px;font-weight:900;color:var(--wp);}
.wp-metric-lbl{font-size:9px;color:#666;text-transform:uppercase;letter-spacing:.04em;margin-top:2px;}
/* STATS */
.wp-stats-strip{background:var(--wp);padding:0;}
.wp-stats-inner{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(0,0,0,.1);}
.wp-stat{padding:32px 24px;text-align:center;background:var(--wp);}
.wp-stat-n{font-size:40px;font-weight:900;color:#fff;line-height:1;letter-spacing:-.03em;}
.wp-stat-l{font-size:12px;color:rgba(255,255,255,.75);margin-top:6px;font-weight:500;text-transform:uppercase;letter-spacing:.06em;}
/* SERVICES */
.services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.svc-card{background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:28px 24px;transition:transform .2s,box-shadow .2s,border-color .2s;}
.svc-card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(30,58,95,.1);border-color:rgba(30,107,158,.25);}
.svc-icon{width:50px;height:50px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:16px;background:linear-gradient(135deg,rgba(30,107,158,.08),rgba(30,107,158,.04));border:1px solid rgba(30,107,158,.15);}
.svc-card h3{font-size:17px;margin-bottom:10px;}
.svc-card p{font-size:13.5px;color:var(--m);line-height:1.65;margin-bottom:16px;}
.svc-tags{display:flex;flex-wrap:wrap;gap:6px;}
.svc-tag{padding:4px 10px;background:var(--bg);border-radius:6px;font-size:11px;font-weight:600;color:var(--s);}
/* PROCESS */
.steps-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:0;position:relative;}
.steps-grid::before{content:'';position:absolute;top:34px;left:10%;right:10%;height:2px;background:linear-gradient(90deg,var(--wp),var(--o));z-index:0;}
.step{text-align:center;padding:0 12px;position:relative;z-index:1;}
.step-num{width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,var(--wp),var(--wp2));color:#fff;font-size:22px;font-weight:900;display:flex;align-items:center;justify-content:center;margin:0 auto 18px;box-shadow:0 8px 24px rgba(30,107,158,.3);}
.step h4{font-size:14px;margin-bottom:7px;}
.step p{font-size:12.5px;color:var(--m);line-height:1.6;}
/* INDUSTRY TABS */
.industry-section{background:var(--n-dark);}
.industry-section .sec-h h2,.ind-info h3{color:#fff;}
.industry-section .sec-h p,.ind-info p{color:rgba(255,255,255,.6);}
.industry-tabs{display:flex;gap:8px;justify-content:center;margin-bottom:40px;flex-wrap:wrap;}
.ind-tab{padding:9px 20px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;border:1px solid rgba(255,255,255,.1);color:rgba(255,255,255,.5);background:transparent;transition:.2s;}
.ind-tab.on{background:var(--wp);color:#fff;border-color:var(--wp);}
.ind-content{display:none;animation:fadeUp .3s ease;}
.ind-content.on{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start;}
@keyframes fadeUp{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:translateY(0);}}
.ind-info p{font-size:15px;line-height:1.7;margin-bottom:24px;}
.ind-results{display:flex;flex-direction:column;gap:12px;}
.ind-result{display:flex;align-items:center;gap:12px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:14px 18px;}
.ind-result-val{font-size:22px;font-weight:900;color:#93c5fd;min-width:60px;}
.ind-result-lbl{font-size:13px;color:rgba(255,255,255,.6);}
.ind-flows{display:flex;flex-direction:column;gap:10px;}
.ind-flow{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:14px 18px;display:flex;gap:12px;align-items:flex-start;}
.ind-flow-icon{font-size:20px;flex-shrink:0;margin-top:2px;}
.ind-flow-title{font-size:13.5px;font-weight:700;color:#fff;margin-bottom:3px;}
.ind-flow-desc{font-size:12.5px;color:rgba(255,255,255,.5);}
/* WHY */
.why-grid{display:grid;grid-template-columns:1fr 1fr;gap:52px;align-items:center;}
.why-left{background:linear-gradient(135deg,#040d1c,#071428);border-radius:24px;padding:40px;}
.why-stat-big{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:20px 24px;}
.why-stat-big .num{font-size:44px;font-weight:900;color:#93c5fd;line-height:1;letter-spacing:-.03em;}
.why-stat-big .lbl{font-size:12.5px;color:rgba(255,255,255,.5);margin-top:6px;}
.why-points{display:flex;flex-direction:column;gap:20px;}
.why-point{display:flex;gap:16px;align-items:flex-start;}
.why-icon{width:44px;height:44px;flex-shrink:0;border-radius:12px;background:linear-gradient(135deg,rgba(30,107,158,.1),rgba(30,107,158,.05));border:1px solid rgba(30,107,158,.2);display:flex;align-items:center;justify-content:center;font-size:18px;}
.why-point h4{font-size:15px;font-weight:700;color:var(--n);margin-bottom:5px;}
.why-point p{font-size:13.5px;color:var(--m);line-height:1.6;margin:0;}
/* FAQ */
.faq-section{background:var(--bg);}
.faq-wrap-2col{display:grid;grid-template-columns:1fr 1fr;gap:0 28px;align-items:start;}
.faq-col{display:flex;flex-direction:column;}
.fi{border:1px solid var(--bdr);border-radius:14px;margin-bottom:10px;overflow:hidden;background:#fff;transition:.15s;}
.fi:hover{border-color:rgba(30,107,158,.2);}
.fi.on{border-color:rgba(30,107,158,.35);box-shadow:0 4px 20px rgba(30,107,158,.08);}
.fi-q{width:100%;text-align:left;background:transparent;border:none;padding:20px 22px;font-size:14.5px;font-weight:700;color:var(--n);display:flex;justify-content:space-between;align-items:center;gap:12px;cursor:pointer;}
.fi-icon{width:26px;height:26px;border-radius:50%;flex-shrink:0;background:var(--bg);border:1px solid var(--bdr);display:flex;align-items:center;justify-content:center;color:var(--wp);font-size:18px;font-weight:900;line-height:1;transition:transform .2s;}
.fi.on .fi-icon{transform:rotate(45deg);background:var(--wp);color:#fff;border-color:var(--wp);}
.fi-a{max-height:0;overflow:hidden;transition:.3s;color:var(--m);font-size:14px;line-height:1.75;}
.fi.on .fi-a{max-height:300px;padding:0 22px 22px;}
/* CTA */
.wp-cta{background:linear-gradient(155deg,#040d1c 0%,#071428 100%);padding:96px 0;text-align:center;position:relative;overflow:hidden;}
.wp-cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(30,107,158,.1) 0%,transparent 70%);}
.wp-cta h2{color:#fff;font-size:44px;margin-bottom:16px;position:relative;z-index:1;}
.wp-cta p{color:rgba(255,255,255,.6);font-size:17px;margin-bottom:36px;position:relative;z-index:1;}
.wp-cta-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;position:relative;z-index:1;}
footer{background:var(--n-dark);padding:64px 0 0;}
.fg{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:40px;}
.fb-desc{font-size:13.5px;color:rgba(255,255,255,.4);line-height:1.7;margin:16px 0 20px;}
.socials{display:flex;gap:10px;}
.socials a{width:34px;height:34px;border-radius:8px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:rgba(255,255,255,.5);transition:.15s;}
.socials a:hover{background:var(--o);color:#fff;border-color:var(--o);}
footer h4{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.35);margin-bottom:16px;}
.fl{display:flex;flex-direction:column;gap:8px;}
.fl a,.fc a{font-size:13.5px;color:rgba(255,255,255,.5);transition:.15s;}
.fl a:hover,.fc a:hover{color:#fff;}
.fc{display:flex;flex-direction:column;gap:10px;}
.footer-bottom{border-top:1px solid rgba(255,255,255,.07);padding:20px 0;display:flex;justify-content:space-between;align-items:center;font-size:12px;color:rgba(255,255,255,.3);flex-wrap:wrap;gap:8px;}
.footer-areas{padding:20px 0;border-top:1px solid rgba(255,255,255,.06);font-size:12px;color:rgba(255,255,255,.25);display:flex;gap:8px;flex-wrap:wrap;align-items:center;}
.footer-areas b{color:rgba(255,255,255,.4);}
.footer-areas a{color:rgba(255,255,255,.25);transition:.15s;}
.footer-areas a:hover{color:rgba(255,255,255,.6);}
.rv,.rv2,.rv3{opacity:0;transform:translateY(28px);transition:opacity .6s ease,transform .6s ease;}
.rv2{transition-delay:.1s;}.rv3{transition-delay:.2s;}
.rv.vis,.rv2.vis,.rv3.vis{opacity:1;transform:translateY(0);}
@media(max-width:1000px){.steps-grid{grid-template-columns:repeat(3,1fr);gap:32px;}.steps-grid::before{display:none;}}
@media(max-width:900px){.wp-hero-grid,.why-grid,.ind-content.on,.faq-wrap-2col{grid-template-columns:1fr;}.wp-hero h1{font-size:36px;}.services-grid{grid-template-columns:1fr 1fr;}.wp-stats-inner,.fg{grid-template-columns:1fr 1fr;}.steps-grid{grid-template-columns:1fr 1fr;}.hb{display:flex;}.dmenu,.navcta .btn:not(.show-m){display:none;}}
@media(max-width:600px){.services-grid,.steps-grid,.wp-stats-inner,.fg{grid-template-columns:1fr;}section{padding:60px 0;}.wp-hero{padding:64px 0 52px;}}
`

const ld0 = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "WordPress Development India",
      "provider": {
        "@type": "Organization",
        "name": "Click Decoded",
        "url": "https://clickdecoded.com"
      },
      "description": "Custom WordPress development: bespoke themes, plugin development, WooCommerce stores, multisite networks, and performance optimisation for Indian businesses.",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": "WordPress Website Development",
      "url": "https://www.clickdecoded.com/services/wordpress-development"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you build custom WordPress themes or use pre-built ones?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both — depending on your needs and budget. For unique brand experiences we build fully custom themes from scratch. For faster delivery we start with premium base themes (like GeneratePress or Astra) and heavily customise them. We never hand over sites built on bloated page builders that slow you down."
          }
        },
        {
          "@type": "Question",
          "name": "Can you migrate my existing website to WordPress?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We handle migrations from any platform — Wix, Squarespace, Joomla, static HTML, or other CMS systems — to WordPress, with zero downtime, full content transfer, and URL structure preservation for SEO."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a WordPress website take to build?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A standard business website takes 3–5 weeks. E-commerce (WooCommerce) stores take 5–8 weeks depending on product count and customisation. Custom plugin development timelines vary by complexity. We share a detailed project timeline before work begins."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide WordPress maintenance after launch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — we offer monthly WordPress care plans covering core, theme, and plugin updates; daily backups; uptime monitoring; security scanning; and priority support. We strongly recommend an ongoing maintenance plan for all production WordPress sites."
          }
        },
        {
          "@type": "Question",
          "name": "Will my WordPress site be fast and SEO-ready?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Performance and SEO are built in, not added later. Every site we deliver includes caching setup, image optimisation, Core Web Vitals tuning, SEO plugin configuration (Rank Math or Yoast), schema markup, sitemap, and robots.txt — ready to rank from day one."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How WordPress Development India Works — Our Process",
      "description": "Click Decoded builds fast, secure, and conversion-ready WordPress websites — custom themes, plugin development, WooCommerce, and multisite. Professional WordPress development across India.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Discovery & Scope",
          "text": "Requirements gathering, sitemap planning, and a detailed project brief with timeline and cost — before a line of code is written."
        },
        {
          "@type": "HowToStep",
          "name": "Design",
          "text": "Wireframes and high-fidelity Figma designs reviewed and approved by you before development begins. No guesswork mid-build."
        },
        {
          "@type": "HowToStep",
          "name": "Development",
          "text": "Theme/plugin development on a staging server — custom PHP, Gutenberg blocks, ACF fields, and integrations built to spec."
        },
        {
          "@type": "HowToStep",
          "name": "QA & Optimise",
          "text": "Cross-browser testing, mobile QA, PageSpeed optimisation, SEO configuration, and security hardening before launch."
        },
        {
          "@type": "HowToStep",
          "name": "Launch & Train",
          "text": "Zero-downtime deployment, DNS cutover, post-launch monitoring, and a hands-on training session so your team can manage the site."
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
          "name": "WordPress Development",
          "item": "https://www.clickdecoded.com/services/wordpress-development"
        }
      ]
    }
  ]
}`

const js0 = `(function(){
// sticky scroll handled by components/header.js
// mobile menu handled by components/header.js
// accordion handled by components/header.js
document.querySelectorAll('.fi').forEach(item=>{item.querySelector('.fi-q').onclick=()=>{const on=item.classList.contains('on');document.querySelectorAll('.fi').forEach(f=>f.classList.remove('on'));if(!on)item.classList.add('on');};});
document.querySelectorAll('.ind-tab').forEach(tab=>{tab.onclick=()=>{document.querySelectorAll('.ind-tab').forEach(t=>t.classList.remove('on'));document.querySelectorAll('.ind-content').forEach(c=>c.classList.remove('on'));tab.classList.add('on');const t=document.getElementById('ind-'+tab.dataset.ind);if(t)t.classList.add('on');};});
const obs=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('vis');});},{threshold:.1});
document.querySelectorAll('.rv,.rv2,.rv3').forEach(el=>obs.observe(el));
/* WP Admin animation */
(function(){
  const psEl=document.getElementById('wpPs');
  const mock=document.querySelector('.wp-mock');
  if(!mock||!psEl)return;
  const so=new IntersectionObserver(e=>{
    if(!e[0].isIntersecting)return;so.disconnect();
    // Animate PageSpeed from 72 → 96
    let ps=72;const iv=setInterval(()=>{ps=Math.min(ps+1,96);psEl.textContent=ps;if(ps>=96)clearInterval(iv);},40);
    // After 2s publish the draft page
    setTimeout(()=>{
      const st=document.getElementById('wpNewStatus');
      if(st){st.textContent='Published';st.className='wp-page-status pub';}
    },2000);
    // After 3s update plugin count
    setTimeout(()=>{
      const pl=document.getElementById('wpPlugins');if(pl)pl.textContent='12';
    },3000);
  },{threshold:.4});
  so.observe(mock);
})();
})();`

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld0 }} />
      <div className="breadcrumb"><div className="wrap"><div className="bc-list"><a href="/">Home</a><span className="bc-sep">›</span><a href="/services/web-development">Web Development</a><span className="bc-sep">›</span><span>WordPress Development</span></div></div></div>
      <section className="wp-hero">
<div className="wrap">
<div className="wp-hero-grid">
<div>
<div className="wp-eyebrow">🔧 Custom Themes · Plugins · WooCommerce · Multisite</div>
<h1>WordPress Websites<br />Built to Be <em>Fast,<br />Secure &amp; Scalable.</em></h1>
<p className="wp-hero-desc">Professional WordPress development — custom themes, plugin builds, WooCommerce stores, and performance optimisation. Clean code, no bloated page builders, built to rank and convert.</p>
<div className="wp-hero-btns">
<a href="#contact" className="btn btn-wp">🔧 Get Free Quote <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
<a href="/services/seo" className="btn btn-ghost">See What We Build</a>
</div>
<div className="wp-trust">
<div className="wp-trust-item"><strong>200+</strong> WP sites delivered</div>
<div className="wp-trust-item"><strong>95+</strong> PageSpeed score avg</div>
<div className="wp-trust-item"><strong>3 weeks</strong> avg delivery</div>
<div className="wp-trust-item"><strong>Zero</strong> page builders</div>
</div>
</div>

<div className="wp-mock">
<div className="wp-mock-bar"><span className="wp-logo">W</span><span>WordPress Admin — yoursite.com</span></div>
<div className="wp-mock-body">
<div className="wp-sidebar">
<div className="wp-sb-item active"><span className="wp-sb-icon">📄</span></div>
<div className="wp-sb-item"><span className="wp-sb-icon">✍️</span></div>
<div className="wp-sb-item"><span className="wp-sb-icon">🎨</span></div>
<div className="wp-sb-item"><span className="wp-sb-icon">🔌</span></div>
<div className="wp-sb-item"><span className="wp-sb-icon">⚙️</span></div>
<div className="wp-sb-item"><span className="wp-sb-icon">📊</span></div>
</div>
<div className="wp-content">
<div className="wp-page-title">All Pages (12)</div>
<div className="wp-pages-list" id="wpPages">
<div className="wp-page-row"><span className="wp-page-name">Home</span><span className="wp-page-status pub">Published</span></div>
<div className="wp-page-row"><span className="wp-page-name">About Us</span><span className="wp-page-status pub">Published</span></div>
<div className="wp-page-row"><span className="wp-page-name">Services</span><span className="wp-page-status pub">Published</span></div>
<div className="wp-page-row"><span className="wp-page-name" id="wpNewPage">Contact</span><span className="wp-page-status draft" id="wpNewStatus">Draft</span></div>
</div>
<div className="wp-metrics">
<div className="wp-metric"><div className="wp-metric-val" id="wpPs">72</div><div className="wp-metric-lbl">PageSpeed</div></div>
<div className="wp-metric"><div className="wp-metric-val" id="wpPlugins">4</div><div className="wp-metric-lbl">Plugins</div></div>
<div className="wp-metric"><div className="wp-metric-val" id="wpSec">🔒</div><div className="wp-metric-lbl">Security</div></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
      <div className="wp-stats-strip"><div className="wrap"><div className="wp-stats-inner">
<div className="wp-stat"><div className="wp-stat-n">200+</div><div className="wp-stat-l">WP Sites Delivered</div></div>
<div className="wp-stat"><div className="wp-stat-n">95+</div><div className="wp-stat-l">Avg. PageSpeed Score</div></div>
<div className="wp-stat"><div className="wp-stat-n">3 Wk</div><div className="wp-stat-l">Average Delivery</div></div>
<div className="wp-stat"><div className="wp-stat-n">12 Yr</div><div className="wp-stat-l">WordPress Experience</div></div>
</div></div></div>
      <section><div className="wrap"><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }}>
<div className="rv">
<div className="pill pill-b" style={{ marginBottom: '16px' }}>Why WordPress</div>
<h2 style={{ fontSize: '36px', marginBottom: '16px' }}>43% of the Web Runs on WordPress. There's a Good Reason.</h2>
<p style={{ fontSize: '16px', color: 'var(--m)', lineHeight: '1.75', marginBottom: '20px' }}>WordPress is the world's most widely used CMS — not because it's the easiest, but because it's the most flexible. Properly built, a WordPress site can serve a 5-page business brochure or a 10,000-product e-commerce store with equal reliability.</p>
<p style={{ fontSize: '16px', color: 'var(--m)', lineHeight: '1.75', marginBottom: '28px' }}>The problem is most WordPress sites are built badly — bloated themes, 40 plugins, no performance work, and zero SEO architecture. We build WordPress the right way: lean, fast, secure, and ready to rank.</p>
<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
<div style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--m)' }}><span style={{ color: 'var(--wp)', fontWeight: '900', fontSize: '16px' }}>✓</span> Own your content — no platform lock-in</div>
<div style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--m)' }}><span style={{ color: 'var(--wp)', fontWeight: '900', fontSize: '16px' }}>✓</span> 60,000+ plugins for any functionality you need</div>
<div style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--m)' }}><span style={{ color: 'var(--wp)', fontWeight: '900', fontSize: '16px' }}>✓</span> Easy to manage — your team can update content without developers</div>
<div style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--m)' }}><span style={{ color: 'var(--wp)', fontWeight: '900', fontSize: '16px' }}>✓</span> SEO-friendly by architecture when built correctly</div>
</div>
</div>
<div className="rv2" style={{ background: 'var(--bg)', borderRadius: '20px', padding: '32px', border: '1px solid var(--bdr)' }}>
<h4 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--s)', marginBottom: '20px' }}>Our WP Build vs. Typical Agency</h4>
<div style={{ display: 'flex', flexDirection: 'column', gap: '0', border: '1px solid var(--bdr)', borderRadius: '12px', overflow: 'hidden' }}>
<div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', background: 'var(--n-dark)', padding: '10px 16px', gap: '8px' }}>
<span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.06em', color: 'rgba(255,255,255,.4)' }}>Factor</span>
<span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.06em', color: '#f87171' }}>Typical</span>
<span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.06em', color: '#93c5fd' }}>Click Decoded</span>
</div>
<div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', padding: '12px 16px', gap: '8px', borderTop: '1px solid var(--bdr)' }}><span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--n)' }}>Page builder</span><span style={{ fontSize: '13px', color: '#ef4444' }}>Elementor/Divi</span><span style={{ fontSize: '13px', color: 'var(--wp)', fontWeight: '700' }}>Custom / ACF</span></div>
<div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', padding: '12px 16px', gap: '8px', borderTop: '1px solid var(--bdr)', background: 'rgba(244,247,252,.6)' }}><span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--n)' }}>PageSpeed score</span><span style={{ fontSize: '13px', color: '#ef4444' }}>40–65</span><span style={{ fontSize: '13px', color: 'var(--wp)', fontWeight: '700' }}>90–98</span></div>
<div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', padding: '12px 16px', gap: '8px', borderTop: '1px solid var(--bdr)' }}><span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--n)' }}>Plugin bloat</span><span style={{ fontSize: '13px', color: '#ef4444' }}>30–50 plugins</span><span style={{ fontSize: '13px', color: 'var(--wp)', fontWeight: '700' }}>8–12 max</span></div>
<div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', padding: '12px 16px', gap: '8px', borderTop: '1px solid var(--bdr)', background: 'rgba(244,247,252,.6)' }}><span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--n)' }}>SEO ready</span><span style={{ fontSize: '13px', color: '#ef4444' }}>After launch</span><span style={{ fontSize: '13px', color: 'var(--wp)', fontWeight: '700' }}>Built in</span></div>
<div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', padding: '12px 16px', gap: '8px', borderTop: '1px solid var(--bdr)' }}><span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--n)' }}>Security hardening</span><span style={{ fontSize: '13px', color: '#ef4444' }}>Basic</span><span style={{ fontSize: '13px', color: 'var(--wp)', fontWeight: '700' }}>Full setup</span></div>
</div>
</div>
</div></div></section>
      <section style={{ background: 'var(--bg)' }} id="services"><div className="wrap">
<div className="sec-h rv"><div className="pill pill-wp">What We Build</div><h2>Complete WordPress Development Services</h2><p>From simple business sites to complex multi-site networks — every WordPress project delivered with care.</p></div>
<div className="services-grid">
<div className="svc-card rv"><div className="svc-icon">🎨</div><h3>Custom Theme Development</h3><p>Pixel-perfect WordPress themes built from scratch — no page builders, no bloated frameworks. Pure HTML/CSS/JS + PHP, built to your brand, blazing fast, and fully responsive.</p><div className="svc-tags"><span className="svc-tag">Custom PHP</span><span className="svc-tag">ACF</span><span className="svc-tag">Block Editor</span></div></div>
<div className="svc-card rv2"><div className="svc-icon">🔌</div><h3>Plugin Development</h3><p>Custom WordPress plugins for any functionality you need — booking systems, custom post types, API integrations, payment gateways, member portals, and more. Built to WordPress coding standards.</p><div className="svc-tags"><span className="svc-tag">Custom CPT</span><span className="svc-tag">REST API</span><span className="svc-tag">WP Hooks</span></div></div>
<div className="svc-card rv3"><div className="svc-icon">🛒</div><h3>WooCommerce Development</h3><p>Full WooCommerce store setup — product catalogue, payment gateway integration (Razorpay, PayU, Stripe), shipping rules, custom checkout, and GST-compliant invoicing for Indian businesses.</p><div className="svc-tags"><span className="svc-tag">Razorpay</span><span className="svc-tag">PayU</span><span className="svc-tag">GST Invoice</span></div></div>
<div className="svc-card rv"><div className="svc-icon">🌐</div><h3>Multisite Networks</h3><p>WordPress Multisite configuration for agencies, franchises, and enterprises managing multiple sites from one dashboard — with custom themes, role management, and per-site configurations.</p><div className="svc-tags"><span className="svc-tag">Multisite</span><span className="svc-tag">Role Manager</span><span className="svc-tag">Sub-domains</span></div></div>
<div className="svc-card rv2"><div className="svc-icon">⚡</div><h3>Performance Optimisation</h3><p>Existing WordPress site running slow? We audit and fix it — image optimisation, caching setup, database cleanup, query optimisation, CDN configuration, and Core Web Vitals tuning.</p><div className="svc-tags"><span className="svc-tag">CWV Tuning</span><span className="svc-tag">CDN Setup</span><span className="svc-tag">DB Optimise</span></div></div>
<div className="svc-card rv3"><div className="svc-icon">🔒</div><h3>Security &amp; Maintenance</h3><p>Monthly WordPress care plans — core/theme/plugin updates, daily backups, uptime monitoring, malware scanning, login hardening, and a 24-hour support SLA for production sites.</p><div className="svc-tags"><span className="svc-tag">Daily Backups</span><span className="svc-tag">Malware Scan</span><span className="svc-tag">24h SLA</span></div></div>
</div>
</div></section>
      <section><div className="wrap">
<div className="sec-h rv"><div className="pill pill-wp">Our Process</div><h2>From Brief to Live Site in 5 Stages</h2><p>A structured WordPress development process with no surprises — you know exactly where your project is at every step.</p></div>
<div className="steps-grid">
<div className="step rv"><div className="step-num">1</div><h4>Discovery &amp; Scope</h4><p>Requirements gathering, sitemap planning, and a detailed project brief with timeline and cost — before a line of code is written.</p></div>
<div className="step rv2"><div className="step-num">2</div><h4>Design</h4><p>Wireframes and high-fidelity Figma designs reviewed and approved by you before development begins. No guesswork mid-build.</p></div>
<div className="step rv3"><div className="step-num">3</div><h4>Development</h4><p>Theme/plugin development on a staging server — custom PHP, Gutenberg blocks, ACF fields, and integrations built to spec.</p></div>
<div className="step rv"><div className="step-num">4</div><h4>QA &amp; Optimise</h4><p>Cross-browser testing, mobile QA, PageSpeed optimisation, SEO configuration, and security hardening before launch.</p></div>
<div className="step rv2"><div className="step-num">5</div><h4>Launch &amp; Train</h4><p>Zero-downtime deployment, DNS cutover, post-launch monitoring, and a hands-on training session so your team can manage the site.</p></div>
</div>
</div></section>
      <section className="industry-section"><div className="wrap">
<div className="sec-h rv"><div className="pill pill-wp">By Industry</div><h2>WordPress Sites We Build by Industry</h2><p>Every industry has different CMS needs. Here's how we approach WordPress development for yours.</p></div>
<div className="industry-tabs">
<button className="ind-tab on" data-ind="business">🏢 Business / Corporate</button>
<button className="ind-tab" data-ind="ecommerce">🛒 E-Commerce</button>
<button className="ind-tab" data-ind="agency">🎨 Creative / Agency</button>
<button className="ind-tab" data-ind="education">🎓 Education</button>
<button className="ind-tab" data-ind="news">📰 News / Magazine</button>
</div>
<div className="ind-content on" id="ind-business">
<div className="ind-info"><h3>Corporate &amp; Business WordPress Sites</h3><p>Professional business websites that communicate credibility, generate leads, and rank on Google. Built with fast-loading custom themes, service page architecture, and integrated lead capture forms.</p>
<div className="ind-results"><div className="ind-result"><div className="ind-result-val">95+</div><div className="ind-result-lbl">PageSpeed score on all corporate builds</div></div><div className="ind-result"><div className="ind-result-val">3 Wk</div><div className="ind-result-lbl">Average delivery for 10–15 page business sites</div></div><div className="ind-result"><div className="ind-result-val">100%</div><div className="ind-result-lbl">Mobile responsive, tested across all devices</div></div></div></div>
<div className="ind-flows">
<div className="ind-flow"><div className="ind-flow-icon">📋</div><div><div className="ind-flow-title">Service Page Architecture</div><div className="ind-flow-desc">Each service gets a dedicated, SEO-optimised page — structured for both search engines and lead conversion.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">📧</div><div><div className="ind-flow-title">CRM &amp; Lead Form Integration</div><div className="ind-flow-desc">Contact forms integrated with CRM (HubSpot, Zoho, Salesforce) and email automations from day one.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">🌍</div><div><div className="ind-flow-title">Multi-Language Support</div><div className="ind-flow-desc">WPML or Polylang setup for businesses serving multiple language markets — Hindi, English, regional languages.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">📊</div><div><div className="ind-flow-title">Analytics &amp; Heatmap Integration</div><div className="ind-flow-desc">GA4, Google Tag Manager, and Hotjar/Microsoft Clarity setup for full behavioural analytics from launch day.</div></div></div>
</div>
</div>
<div className="ind-content" id="ind-ecommerce">
<div className="ind-info"><h3>WooCommerce E-Commerce Stores</h3><p>Full WooCommerce development for retail and B2B e-commerce — product catalogue, payment gateways, shipping rules, GST invoicing, and performance tuning for fast product page loads.</p>
<div className="ind-results"><div className="ind-result"><div className="ind-result-val">500+</div><div className="ind-result-lbl">Products managed per store on average</div></div><div className="ind-result"><div className="ind-result-val">Razorpay</div><div className="ind-result-lbl">PayU, Stripe, CCAvenue — all integrated</div></div><div className="ind-result"><div className="ind-result-val">GST</div><div className="ind-result-lbl">Compliant invoicing built for Indian businesses</div></div></div></div>
<div className="ind-flows">
<div className="ind-flow"><div className="ind-flow-icon">💳</div><div><div className="ind-flow-title">Indian Payment Gateway Integration</div><div className="ind-flow-desc">Razorpay, PayU, CCAvenue, and UPI setup — with COD, partial payment, and EMI options where needed.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">📦</div><div><div className="ind-flow-title">Shipping &amp; Logistics Integration</div><div className="ind-flow-desc">Shiprocket, Delhivery, and EasyEcom integration for real-time shipping calculation and auto order dispatch.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">🏷️</div><div><div className="ind-flow-title">Custom Product Configurator</div><div className="ind-flow-desc">Variable products, product bundles, and custom attribute configurators for complex product lines.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">📄</div><div><div className="ind-flow-title">GST-Compliant Invoicing</div><div className="ind-flow-desc">Automated GST invoices with GSTIN, HSN codes, and e-invoice support — compliant with Indian tax requirements.</div></div></div>
</div>
</div>
<div className="ind-content" id="ind-agency">
<div className="ind-info"><h3>Creative &amp; Agency Portfolio Sites</h3><p>Portfolio and agency websites that showcase work beautifully — custom post types for case studies, project galleries, animated transitions, and client testimonial systems, all in WordPress.</p>
<div className="ind-results"><div className="ind-result"><div className="ind-result-val">60+</div><div className="ind-result-lbl">Agency and creative studio sites delivered</div></div><div className="ind-result"><div className="ind-result-val">100%</div><div className="ind-result-lbl">Custom designed — no templates</div></div><div className="ind-result"><div className="ind-result-val">CMS</div><div className="ind-result-lbl">Client can update portfolio without devs</div></div></div></div>
<div className="ind-flows">
<div className="ind-flow"><div className="ind-flow-icon">🖼️</div><div><div className="ind-flow-title">Custom Portfolio CPT</div><div className="ind-flow-desc">Custom post types for projects/case studies with filterable galleries, tags, and client testimonials.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">✨</div><div><div className="ind-flow-title">Smooth Page Transitions</div><div className="ind-flow-desc">GSAP or CSS-based page transitions and scroll animations that make the site feel premium and distinctive.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">📹</div><div><div className="ind-flow-title">Video Background &amp; Reel Support</div><div className="ind-flow-desc">Optimised video backgrounds with lazy loading — agencies and studios need video without sacrificing speed.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">🎨</div><div><div className="ind-flow-title">Dark Mode Support</div><div className="ind-flow-desc">CSS custom property-based theming with user-toggled dark/light mode — a standard for premium creative sites.</div></div></div>
</div>
</div>
<div className="ind-content" id="ind-education">
<div className="ind-info"><h3>Education &amp; eLearning WordPress Sites</h3><p>Education platforms with course management, student portals, quiz systems, and payment integration — built on WordPress with LearnDash or LifterLMS for structured course delivery.</p>
<div className="ind-results"><div className="ind-result"><div className="ind-result-val">LearnDash</div><div className="ind-result-lbl">LifterLMS and Tutor LMS — all platforms</div></div><div className="ind-result"><div className="ind-result-val">5,000+</div><div className="ind-result-lbl">Students served per LMS platform we've built</div></div><div className="ind-result"><div className="ind-result-val">Zoom</div><div className="ind-result-lbl">Live class integration included</div></div></div></div>
<div className="ind-flows">
<div className="ind-flow"><div className="ind-flow-icon">📚</div><div><div className="ind-flow-title">LMS Plugin Integration</div><div className="ind-flow-desc">LearnDash, LifterLMS, or Tutor LMS configured with course hierarchy, lessons, topics, quizzes, and certificates.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">🎓</div><div><div className="ind-flow-title">Student Dashboard &amp; Progress Tracking</div><div className="ind-flow-desc">Custom student portals showing course progress, completed lessons, quiz scores, and downloadable certificates.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">💰</div><div><div className="ind-flow-title">Course Subscription &amp; One-Time Purchase</div><div className="ind-flow-desc">WooCommerce or native LMS payment — EMI, subscriptions, bundles, and coupon systems for course sales.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">📹</div><div><div className="ind-flow-title">Video Hosting Integration</div><div className="ind-flow-desc">Vimeo Pro, Bunny.net, or YouTube integration for DRM-protected or private video lesson delivery.</div></div></div>
</div>
</div>
<div className="ind-content" id="ind-news">
<div className="ind-info"><h3>News, Blog &amp; Magazine Sites</h3><p>High-traffic news and magazine WordPress builds optimised for speed, editorial workflow, ad revenue, and SEO — because content sites need to be fast, crawlable, and easy for editors to manage.</p>
<div className="ind-results"><div className="ind-result"><div className="ind-result-val">10K+</div><div className="ind-result-lbl">Articles managed per site we've built</div></div><div className="ind-result"><div className="ind-result-val">CDN</div><div className="ind-result-lbl">Edge caching for global, instant page delivery</div></div><div className="ind-result"><div className="ind-result-val">AMP</div><div className="ind-result-lbl">Optional AMP setup for Google News eligibility</div></div></div></div>
<div className="ind-flows">
<div className="ind-flow"><div className="ind-flow-icon">✍️</div><div><div className="ind-flow-title">Editorial Workflow &amp; User Roles</div><div className="ind-flow-desc">Custom editorial roles (writer, editor, sub-editor, publisher) with granular capability management.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">⚡</div><div><div className="ind-flow-title">Object Caching &amp; CDN for Scale</div><div className="ind-flow-desc">Redis object caching + Cloudflare CDN setup for handling traffic spikes without server strain.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">💸</div><div><div className="ind-flow-title">Ad Network Integration</div><div className="ind-flow-desc">Google AdSense, DFP/GAM, and direct ad slot management with lazy-loaded ad units for Core Web Vitals compliance.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">🔔</div><div><div className="ind-flow-title">Push Notification &amp; Newsletter</div><div className="ind-flow-desc">Web push (OneSignal) and email newsletter (Mailchimp/Mailpoet) integration for subscriber retention.</div></div></div>
</div>
</div>
</div></section>
      <section><div className="wrap">
<div className="sec-h rv"><div className="pill pill-o">Why Click Decoded</div><h2>WordPress Done the Way It Should Be</h2><p>Clean code, no page builder bloat, and sites built to last — not just to look good on delivery day.</p></div>
<div className="why-grid">
<div className="why-left rv">
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
<div className="why-stat-big"><div className="num">200+</div><div className="lbl">WP sites delivered</div></div>
<div className="why-stat-big"><div className="num">95+</div><div className="lbl">Avg. PageSpeed score</div></div>
<div className="why-stat-big"><div className="num">12 Yr</div><div className="lbl">WordPress experience</div></div>
<div className="why-stat-big"><div className="num">Zero</div><div className="lbl">Page builder bloat</div></div>
</div>
</div>
<div className="why-points rv2">
<div className="why-point"><div className="why-icon">🚫</div><div><h4>No Elementor, No Divi, No Bloat</h4><p>Page builders are convenient for developers but brutal for performance and SEO. We build custom — custom themes, custom Gutenberg blocks, custom ACF fields. Your site won't weigh 4MB and load in 6 seconds.</p></div></div>
<div className="why-point"><div className="why-icon">🔒</div><div><h4>Security Hardened from Day One</h4><p>Login protection, file permissions, database prefix changes, two-factor auth, security headers, and WAF setup — security is built in, not bolted on after a hack.</p></div></div>
<div className="why-point"><div className="why-icon">🎓</div><div><h4>Full Training &amp; Documentation</h4><p>Every site delivery includes a recorded training session so your team knows how to add pages, update content, manage blog posts, and handle common tasks — without needing to call us.</p></div></div>
<div className="why-point"><div className="why-icon">🛡️</div><div><h4>Monthly Care Plans Available</h4><p>We don't disappear after launch. Our monthly WordPress maintenance plans cover updates, backups, monitoring, and priority support — so your site stays secure and up-to-date long-term.</p></div></div>
</div>
</div>
</div></section>
      <section className="faq-section" id="faq"><div className="wrap">
<div className="sec-h rv"><div className="pill pill-wp">Common Questions</div><h2>Frequently Asked Questions</h2><p>Everything you need to know about our WordPress development service.</p></div>
<div className="faq-wrap-2col">
<div className="faq-col">
<div className="fi"><button className="fi-q">Do you build custom themes or use pre-built ones?<span className="fi-icon">+</span></button><div className="fi-a">Both — depending on your needs and budget. For unique brand experiences we build fully custom themes from scratch. For faster delivery we start with premium base themes (like GeneratePress or Astra) and heavily customise them. We never hand over sites built on bloated page builders that slow you down.</div></div>
<div className="fi"><button className="fi-q">Can you migrate my existing site to WordPress?<span className="fi-icon">+</span></button><div className="fi-a">Yes. We handle migrations from any platform — Wix, Squarespace, Joomla, static HTML, or other CMS systems — to WordPress, with zero downtime, full content transfer, and URL structure preservation for SEO.</div></div>
<div className="fi"><button className="fi-q">How long does a WordPress website take?<span className="fi-icon">+</span></button><div className="fi-a">A standard business website takes 3–5 weeks. E-commerce (WooCommerce) stores take 5–8 weeks depending on product count and customisation. Custom plugin development timelines vary by complexity. We share a detailed project timeline before work begins.</div></div>
</div>
<div className="faq-col">
<div className="fi"><button className="fi-q">Do you provide maintenance after launch?<span className="fi-icon">+</span></button><div className="fi-a">Yes — we offer monthly WordPress care plans covering core, theme, and plugin updates; daily backups; uptime monitoring; security scanning; and priority support. We strongly recommend an ongoing maintenance plan for all production WordPress sites.</div></div>
<div className="fi"><button className="fi-q">Will my site be fast and SEO-ready?<span className="fi-icon">+</span></button><div className="fi-a">Performance and SEO are built in, not added later. Every site we deliver includes caching setup, image optimisation, Core Web Vitals tuning, SEO plugin configuration (Rank Math or Yoast), schema markup, sitemap, and robots.txt — ready to rank from day one.</div></div>
<div className="fi"><button className="fi-q">Can I edit the site myself after launch?<span className="fi-icon">+</span></button><div className="fi-a">Yes — that's one of WordPress's greatest strengths. We build the CMS layer so your team can add pages, update content, publish blog posts, and manage media without touching code. Every delivery includes a training session and written documentation.</div></div>
</div>
</div>
</div></section>
      <section className="wp-cta" id="contact"><div className="wrap">
<div className="pill pill-wp" style={{ marginBottom: '20px', display: 'inline-flex' }}>🔧 Free WordPress Consultation</div>
<h2>Let's Build Your WordPress<br />Site the Right Way.</h2>
<p>Get a free project consultation — we'll scope your requirements and share a detailed timeline and quote.</p>
<div className="wp-cta-btns">
<a href="/contact" className="btn btn-wp">🔧 Get Free Quote <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
<a href="https://wa.me/919407000101?text=Hi!%20I%20need%20a%20WordPress%20website." target="_blank" rel="noopener" className="btn btn-ghost">💬 WhatsApp Us</a>
</div>
<p style={{ fontSize: '13px', color: 'rgba(255,255,255,.3)', marginTop: '24px', position: 'relative', zIndex: '1' }}>✓ Free consultation  ·  ✓ Detailed scope &amp; timeline  ·  ✓ No page builder bloat</p>
</div></section>
      <PageScript id="services-wordpress-development-0" code={js0} />
    </>
  )
}
