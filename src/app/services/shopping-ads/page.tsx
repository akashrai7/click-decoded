/* eslint-disable */
// src/app/services/shopping-ads/page.tsx — generated from shopping-ads.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "Google Shopping Ads India | Click Decoded",
  description: "Google Shopping Ads that put your products in front of buyers with purchase intent. Click Decoded manages end-to-end Shopping campaigns — feed.",
  alternates: { canonical: "/services/shopping-ads" },
}

const css = `
:root{
  --ac:#16A34A;--ac2:#15803d;--ac-rgb:22,163,74;
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
.hero{background:linear-gradient(155deg,#030f06 0%,#051a09 45%,#030f06 100%);padding:96px 0 80px;position:relative;overflow:hidden;}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 55% at 68% 35%,rgba(22,163,74,.18) 0%,transparent 65%),radial-gradient(ellipse 35% 40% at 8% 80%,rgba(22,163,74,.07) 0%,transparent 60%);}
.hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;position:relative;z-index:2;}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;background:rgba(22,163,74,.12);border:1px solid rgba(22,163,74,.3);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#4ade80;margin-bottom:20px;}
.hero h1{font-size:48px;color:#fff;line-height:1.06;letter-spacing:-.04em;margin-bottom:20px;}
.hero h1 em{font-style:normal;background:linear-gradient(135deg,#4ade80,#16a34a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-desc{font-size:17px;color:rgba(255,255,255,.62);line-height:1.7;margin-bottom:32px;max-width:460px;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:36px;}
.hero-proof{display:flex;gap:24px;flex-wrap:wrap;}
.proof-item{font-size:13px;color:rgba(255,255,255,.5);}
.proof-item strong{color:#fff;font-weight:700;}
/* SHOPPING MOCK */
.shop-mock{border-radius:20px;overflow:hidden;box-shadow:0 28px 70px rgba(0,0,0,.6);background:#fff;border:1px solid rgba(22,163,74,.2);}
.mock-browser{background:#f1f3f4;padding:10px 14px;border-bottom:1px solid #e0e0e0;display:flex;align-items:center;gap:10px;}
.mock-dots{display:flex;gap:5px;}
.mock-dots span{width:9px;height:9px;border-radius:50%;}
.mock-dots span:nth-child(1){background:#ff5f57;}
.mock-dots span:nth-child(2){background:#ffbd2e;}
.mock-dots span:nth-child(3){background:#28c840;}
.mock-url{flex:1;background:#fff;border:1px solid #ddd;border-radius:20px;padding:5px 14px;font-size:11px;color:#444;display:flex;align-items:center;gap:6px;}
.g-lock{color:#16a34a;font-size:10px;}
/* Google search bar */
.g-searchbar{padding:10px 14px;border-bottom:1px solid #e8e8e8;background:#fff;}
.g-tabs{display:flex;gap:0;border-bottom:1px solid #e8e8e8;background:#fff;}
.g-tab{padding:8px 14px;font-size:11px;color:#444;border-bottom:2px solid transparent;cursor:pointer;white-space:nowrap;}
.g-tab.active{color:#1a73e8;border-color:#1a73e8;font-weight:600;}
.g-tab.shop-tab{color:#16a34a;border-color:#16a34a;font-weight:700;}
/* Shopping products grid */
.shop-grid-label{padding:8px 14px 4px;font-size:10px;font-weight:600;color:#70757a;display:flex;align-items:center;gap:6px;}
.shop-grid-label span{background:#16a34a;color:#fff;font-size:9px;padding:1px 6px;border-radius:3px;font-weight:700;}
.shop-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding:8px 14px 12px;}
.shop-card{background:#fff;border:1px solid #e8e8e8;border-radius:10px;overflow:hidden;transition:.15s;}
.shop-card:hover{box-shadow:0 4px 16px rgba(0,0,0,.12);border-color:#ccc;}
.shop-img{height:70px;display:flex;align-items:center;justify-content:center;font-size:28px;background:linear-gradient(135deg,#f8f9fa,#f1f3f4);}
.shop-info{padding:8px;}
.shop-price{font-size:13px;font-weight:800;color:#202124;}
.shop-name{font-size:10px;color:#444;margin-top:2px;line-height:1.3;}
.shop-store{font-size:9px;color:#70757a;margin-top:3px;}
.shop-stars{font-size:9px;color:#f59e0b;margin-top:2px;}
/* Metrics strip */
.shop-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:#e8e8e8;border-top:1px solid #e8e8e8;}
.shop-metric{padding:10px 12px;background:#f8fffe;text-align:center;}
.sm-val{font-size:16px;font-weight:900;color:#16a34a;}
.sm-label{font-size:9px;color:#70757a;margin-top:2px;text-transform:uppercase;letter-spacing:.05em;}
/* STATS */
.stats-strip{background:var(--ac);}
.stats-inner{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(0,0,0,.2);}
.stat-box{padding:32px 24px;text-align:center;background:var(--ac);}
.stat-n{font-size:40px;font-weight:900;color:#fff;line-height:1;letter-spacing:-.03em;}
.stat-l{font-size:12px;color:rgba(255,255,255,.75);margin-top:6px;font-weight:500;text-transform:uppercase;letter-spacing:.06em;}
/* SECTIONS */
.sec-h{text-align:center;max-width:640px;margin:0 auto 52px;}
.sec-tag{display:inline-flex;padding:5px 13px;border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:10px;background:rgba(22,163,74,.08);border:1px solid rgba(22,163,74,.18);color:var(--ac);}
.sec-h h2{font-size:36px;margin-bottom:14px;}
.sec-h p{font-size:16px;color:var(--m);line-height:1.65;}
.inc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.inc-card{background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:28px 24px;transition:.2s;}
.inc-card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(22,163,74,.1);border-color:rgba(22,163,74,.22);}
.inc-icon{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:16px;background:rgba(22,163,74,.07);border:1px solid rgba(22,163,74,.12);}
.inc-card h3{font-size:17px;margin-bottom:10px;}
.inc-card p{font-size:13.5px;color:var(--m);line-height:1.65;}
.dark-section{background:var(--n-dark);padding:88px 0;}
.formats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:1000px;margin:0 auto;}
.fmt-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:24px;transition:.2s;}
.fmt-card:hover{border-color:rgba(22,163,74,.35);background:rgba(22,163,74,.07);transform:translateY(-2px);}
.fmt-top{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px;}
.fmt-icon{font-size:26px;}
.fmt-tag{font-size:10px;font-weight:700;padding:3px 8px;border-radius:5px;background:rgba(22,163,74,.18);border:1px solid rgba(22,163,74,.3);color:#4ade80;}
.fmt-card h3{font-size:15px;font-weight:700;color:#fff;margin-bottom:6px;}
.fmt-card p{font-size:13px;color:rgba(255,255,255,.5);line-height:1.6;}
.bg-subtle{background:var(--bg);}
.steps-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative;}
.steps-grid::before{content:'';position:absolute;top:34px;left:12%;right:12%;height:2px;background:linear-gradient(90deg,var(--ac),var(--ac2));z-index:0;opacity:.4;}
.step{text-align:center;padding:0 16px;position:relative;z-index:1;}
.step-num{width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,var(--ac),var(--ac2));color:#fff;font-size:20px;font-weight:900;display:flex;align-items:center;justify-content:center;margin:0 auto 18px;box-shadow:0 8px 24px rgba(22,163,74,.3);}
.step h4{font-size:15px;margin-bottom:7px;}
.step p{font-size:13px;color:var(--m);line-height:1.6;}
.faq-2col{display:grid;grid-template-columns:1fr 1fr;gap:0 28px;align-items:start;}
.fi{border:1px solid var(--bdr);border-radius:14px;margin-bottom:10px;overflow:hidden;background:#fff;transition:.15s;}
.fi.on{border-color:rgba(22,163,74,.3);box-shadow:0 4px 20px rgba(22,163,74,.07);}
.fi-q{width:100%;text-align:left;background:transparent;border:none;padding:20px 22px;font-size:14px;font-weight:700;color:var(--n);display:flex;justify-content:space-between;align-items:center;gap:12px;cursor:pointer;}
.fi-icon{width:26px;height:26px;border-radius:50%;flex-shrink:0;background:var(--bg);border:1px solid var(--bdr);display:flex;align-items:center;justify-content:center;color:var(--ac);font-size:18px;line-height:1;transition:transform .2s;}
.fi.on .fi-icon{transform:rotate(45deg);background:var(--ac);color:#fff;border-color:var(--ac);}
.fi-a{max-height:0;overflow:hidden;transition:.3s;color:var(--m);font-size:14px;line-height:1.75;}
.fi.on .fi-a{max-height:300px;padding:0 22px 22px;}
.cta-section{background:linear-gradient(155deg,#030f06 0%,#051a09 100%);padding:96px 0;text-align:center;position:relative;overflow:hidden;}
.cta-section::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(22,163,74,.15) 0%,transparent 70%);}
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
      "name": "Google Shopping Ads",
      "provider": {
        "@type": "Organization",
        "name": "Click Decoded",
        "url": "https://www.clickdecoded.com"
      },
      "description": "Google Shopping Ads that put your products in front of buyers with purchase intent. Click Decoded manages end-to-end Shopping campaigns — feed optimisation, bidding, and ROAS growth.",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": "Google Shopping Ads",
      "url": "https://www.clickdecoded.com/services/shopping-ads"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What's the difference between Shopping Ads and Search Ads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Search Ads are text-based and triggered by keyword matches. Shopping Ads show product images, prices, and store names — triggered by your product feed. Shopping Ads typically deliver higher conversion rates because buyers see the product and price before clicking, making every click higher quality."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a Google Merchant Centre account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — Shopping Ads run through Google Merchant Centre, which holds your product feed. If you don't have one, we'll set it up, verify your domain, and connect it to your Google Ads account as part of our onboarding process."
          }
        },
        {
          "@type": "Question",
          "name": "What ROAS can I expect?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ROAS varies by category, margins, and competition. Fashion and accessories typically see 4–7× ROAS, electronics 3–5×, niche products can reach 10×+. We set realistic targets based on your margins in the audit phase — not inflated promises."
          }
        },
        {
          "@type": "Question",
          "name": "Can Shopping Ads work for WooCommerce / Shopify stores?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We connect Shopify and WooCommerce stores to Google Merchant Centre via the official app or a product feed plugin. Your inventory syncs automatically, so product updates reflect in ads without manual work."
          }
        },
        {
          "@type": "Question",
          "name": "How many products do I need to run Shopping Ads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There's no minimum — Shopping Ads work with even a single product. However, stores with 20+ products see more optimisation opportunities. We structure campaigns differently for small catalogues (10–50 SKUs) vs large ones (500+ SKUs)."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle Performance Max campaigns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We manage both Standard Shopping and Performance Max — choosing the right mix based on your catalogue size, conversion data, and goals. PMax is powerful but needs careful asset management and monitoring to prevent wasted spend."
          }
        },
        {
          "@type": "Question",
          "name": "What's the minimum ad spend for Shopping Ads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We recommend ₹20,000–₹30,000/month in ad spend as a starting point to gather enough conversion data for Google's Smart Bidding to learn effectively. Our management fee starts at ₹25,000/month separately."
          }
        },
        {
          "@type": "Question",
          "name": "Do you also run retargeting alongside Shopping Ads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, and we strongly recommend it. Dynamic Remarketing shows the exact products viewed by past visitors — converting warm traffic that didn't buy on the first visit. It's typically the highest-ROAS campaign in any e-commerce account."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How Google Shopping Ads India Works — Our Process",
      "description": "Google Shopping Ads that put your products in front of buyers with purchase intent. Click Decoded manages end-to-end Shopping campaigns — feed optimisation, bidding, and ROAS growth.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Feed & Account Audit",
          "text": "Full audit of your product feed, Merchant Centre health, and existing campaign structure — identifying every ROAS killer before we touch the budget."
        },
        {
          "@type": "HowToStep",
          "name": "Feed Optimisation",
          "text": "Rewrite titles, descriptions, and categories for Shopping search intent. Fix disapprovals and add missing GTINs to maximise eligible impressions."
        },
        {
          "@type": "HowToStep",
          "name": "Campaign Build & Launch",
          "text": "Campaign structure, product group segmentation, bid strategies, and conversion tracking configured. Live within 7 days of feed approval."
        },
        {
          "@type": "HowToStep",
          "name": "Optimise & Scale",
          "text": "Weekly ROAS reviews, search term analysis, bid adjustments, and budget reallocation. Monthly strategy calls with performance projections."
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
          "name": "Google Shopping Ads",
          "item": "https://www.clickdecoded.com/services/shopping-ads"
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
      <div className="breadcrumb"><div className="wrap"><div className="bc-list"><a href="/">Home</a><span style={{ opacity: '.4' }}>›</span><span>Paid Ads</span><span style={{ opacity: '.4' }}>›</span><span>Shopping Ads</span></div></div></div>
      <section className="hero">
<div className="wrap">
<div className="hero-grid">
<div>
<div className="hero-eyebrow">🛒 Google Shopping · Product Ads · High-Intent Buyers</div>
<h1>Put Your Products in Front of <em>Buyers Ready to Buy.</em></h1>
<p className="hero-desc">Google Shopping Ads show your product image, price, and store name to users already searching to purchase. We manage feed optimisation, bidding strategy, and ROAS growth — so every rupee works harder.</p>
<div className="hero-btns">
<a href="/contact" className="btn btn-ac">🛒 Get Free Shopping Audit</a>
<a href="https://wa.me/919407000101" className="btn btn-ghost">💬 WhatsApp Us</a>
</div>
<div className="hero-proof" style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
<span className="proof-item"><strong>8.1×</strong> Average ROAS</span>
<span className="proof-item"><strong>18.4K</strong> Avg Monthly Clicks</span>
<span className="proof-item"><strong>₹25K</strong> Starting / Month</span>
</div>
</div>

<div className="shop-mock">
<div className="mock-browser">
<div className="mock-dots"><span></span><span></span><span></span></div>
<div className="mock-url"><span className="g-lock">🔒</span> google.com/search?q=buy+running+shoes+india</div>
</div>
<div className="g-searchbar" style={{ padding: '8px 14px', fontSize: '12px', color: '#202124', background: '#fff', borderBottom: '1px solid #e8e8e8' }}>
<span style={{ color: '#70757a', fontSize: '11px' }}>About 4,20,00,000 results</span>
</div>
<div className="g-tabs">
<div className="g-tab">All</div>
<div className="g-tab shop-tab">🛒 Shopping</div>
<div className="g-tab">Images</div>
<div className="g-tab">News</div>
</div>
<div className="shop-grid-label">Sponsored <span>AD</span></div>
<div className="shop-grid">
<div className="shop-card">
<div className="shop-img">👟</div>
<div className="shop-info">
<div className="shop-price">₹2,499</div>
<div className="shop-name">Nike Air Max Running Shoes</div>
<div className="shop-store">Nike India</div>
<div className="shop-stars">★★★★★ (2.4k)</div>
</div>
</div>
<div className="shop-card" style={{ borderColor: '#16a34a', boxShadow: '0 0 0 2px rgba(22,163,74,.2)' }}>
<div className="shop-img" style={{ background: 'linear-gradient(135deg,#f0fdf4,#dcfce7)' }}>👟</div>
<div className="shop-info">
<div className="shop-price" style={{ color: '#16a34a' }}>₹1,899</div>
<div className="shop-name">Adidas Ultraboost ✓ Best Deal</div>
<div className="shop-store">Your Store</div>
<div className="shop-stars">★★★★★ (1.8k)</div>
</div>
</div>
<div className="shop-card">
<div className="shop-img">👟</div>
<div className="shop-info">
<div className="shop-price">₹3,199</div>
<div className="shop-name">Puma RS-X Training Shoe</div>
<div className="shop-store">Puma Official</div>
<div className="shop-stars">★★★★☆ (892)</div>
</div>
</div>
</div>
<div className="shop-metrics">
<div className="shop-metric"><div className="sm-val">18.4K</div><div className="sm-label">Clicks / Mo</div></div>
<div className="shop-metric"><div className="sm-val">2,847</div><div className="sm-label">Conversions</div></div>
<div className="shop-metric"><div className="sm-val">8.1×</div><div className="sm-label">ROAS</div></div>
</div>
</div>
</div>
</div>
</section>
      <div className="stats-strip">
<div className="stats-inner">
<div className="stat-box"><div className="stat-n">8.1×</div><div className="stat-l">Average ROAS</div></div>
<div className="stat-box"><div className="stat-n">18.4K</div><div className="stat-l">Avg Monthly Clicks</div></div>
<div className="stat-box"><div className="stat-n">2,847</div><div className="stat-l">Avg Conversions / Mo</div></div>
<div className="stat-box"><div className="stat-n">₹25K</div><div className="stat-l">Starting / Month</div></div>
</div>
</div>
      <section>
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag">What's Included</div>
<h2>Full-Stack Shopping Ad Management.</h2>
<p>Feed to ROAS — every layer of your Google Shopping campaigns handled by product ad specialists.</p>
</div>
<div className="inc-grid">
<div className="inc-card rv"><div className="inc-icon">📦</div><h3>Product Feed Optimisation</h3><p>Title, description, GTIN, category, and image quality audited and optimised for maximum Shopping impression share — the foundation of high-ROAS campaigns.</p></div>
<div className="inc-card rv2"><div className="inc-icon">🏗️</div><h3>Campaign Architecture</h3><p>Smart Shopping, Standard Shopping, and Performance Max campaigns structured with proper product group segmentation so budget flows to your most profitable SKUs.</p></div>
<div className="inc-card rv3"><div className="inc-icon">💰</div><h3>Bid Strategy Management</h3><p>Target ROAS, Maximise Conversion Value, and Manual CPC strategies tested and managed weekly — with budget reallocation to highest-performing product groups.</p></div>
<div className="inc-card rv"><div className="inc-icon">🔍</div><h3>Search Term &amp; Negative Keywords</h3><p>Regular search term mining to identify and exclude irrelevant queries wasting budget. Every rupee focused on searchers with genuine purchase intent.</p></div>
<div className="inc-card rv2"><div className="inc-icon">🏷️</div><h3>Merchant Centre Management</h3><p>Google Merchant Centre setup, feed error resolution, product disapproval fixes, and ongoing compliance — so your products never go offline unexpectedly.</p></div>
<div className="inc-card rv3"><div className="inc-icon">📊</div><h3>ROAS Reporting &amp; Insights</h3><p>Monthly reports showing Clicks, Conversions, Revenue, ROAS, and CPC by product category — with commentary on trends and the optimisation plan for next month.</p></div>
</div>
</div>
</section>
      <section className="dark-section">
<div className="wrap">
<div className="sec-h rv" style={{ marginBottom: '40px' }}>
<h2 style={{ color: '#fff' }}>Shopping Ad Formats<br />We Master.</h2>
<p style={{ color: 'rgba(255,255,255,.55)' }}>Google's Shopping ecosystem has evolved well beyond basic product listings. We use every format strategically.</p>
</div>
<div className="formats-grid">
<div className="fmt-card rv"><div className="fmt-top"><div className="fmt-icon">🛒</div><div className="fmt-tag">Core</div></div><h3>Standard Shopping</h3><p>Classic product listing ads showing image, title, price, and store. The highest-intent ad format on Google — users see exactly what they're getting before clicking.</p></div>
<div className="fmt-card rv2"><div className="fmt-top"><div className="fmt-icon">⚡</div><div className="fmt-tag">AI-Powered</div></div><h3>Performance Max</h3><p>Google's AI-driven campaign type that shows your products across Search, Shopping, Display, YouTube, and Gmail — maximising conversion value from one campaign.</p></div>
<div className="fmt-card rv3"><div className="fmt-top"><div className="fmt-icon">🔄</div><div className="fmt-tag">Retargeting</div></div><h3>Dynamic Remarketing</h3><p>Show the exact products viewed by past visitors across the Google Display Network — highly personalised ads that pull warm traffic back to complete their purchase.</p></div>
<div className="fmt-card rv"><div className="fmt-top"><div className="fmt-icon">🏪</div><div className="fmt-tag">Local</div></div><h3>Local Inventory Ads</h3><p>Show in-store product availability to nearby shoppers searching on Google. Drives foot traffic by displaying real-time stock levels and store location.</p></div>
<div className="fmt-card rv2"><div className="fmt-top"><div className="fmt-icon">📱</div><div className="fmt-tag">Mobile</div></div><h3>Showcase Shopping</h3><p>Lifestyle image ads that appear for broad, upper-funnel queries — introducing your brand and product range to shoppers still in the discovery phase.</p></div>
<div className="fmt-card rv3"><div className="fmt-top"><div className="fmt-icon">🗺️</div><div className="fmt-tag">Maps</div></div><h3>Shopping on Google Maps</h3><p>Appear when shoppers search for products "near me" on Google Maps — critical for retailers with physical stores looking to drive walk-in customers.</p></div>
</div>
</div>
</section>
      <section className="bg-subtle">
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag">Our Process</div>
<h2>Feed to ROAS in 2 Weeks.</h2>
<p>A structured launch that gets your products live fast — then continuous optimisation to compound returns.</p>
</div>
<div className="steps-grid">
<div className="step rv"><div className="step-num">01</div><h4>Feed &amp; Account Audit</h4><p>Full audit of your product feed, Merchant Centre health, and existing campaign structure — identifying every ROAS killer before we touch the budget.</p></div>
<div className="step rv2"><div className="step-num">02</div><h4>Feed Optimisation</h4><p>Rewrite titles, descriptions, and categories for Shopping search intent. Fix disapprovals and add missing GTINs to maximise eligible impressions.</p></div>
<div className="step rv3"><div className="step-num">03</div><h4>Campaign Build &amp; Launch</h4><p>Campaign structure, product group segmentation, bid strategies, and conversion tracking configured. Live within 7 days of feed approval.</p></div>
<div className="step rv3"><div className="step-num">04</div><h4>Optimise &amp; Scale</h4><p>Weekly ROAS reviews, search term analysis, bid adjustments, and budget reallocation. Monthly strategy calls with performance projections.</p></div>
</div>
</div>
</section>
      <section>
<div className="wrap">
<div className="sec-h rv"><h2>Frequently Asked Questions</h2></div>
<div className="faq-2col">
<div>
<div className="fi"><button className="fi-q">What's the difference between Shopping Ads and Search Ads?<div className="fi-icon">+</div></button><div className="fi-a">Search Ads are text-based and triggered by keyword matches. Shopping Ads show product images, prices, and store names — triggered by your product feed. Shopping Ads typically deliver higher conversion rates because buyers see the product and price before clicking, making every click higher quality.</div></div>
<div className="fi"><button className="fi-q">Do I need a Google Merchant Centre account?<div className="fi-icon">+</div></button><div className="fi-a">Yes — Shopping Ads run through Google Merchant Centre, which holds your product feed. If you don't have one, we'll set it up, verify your domain, and connect it to your Google Ads account as part of our onboarding process.</div></div>
<div className="fi"><button className="fi-q">What ROAS can I expect?<div className="fi-icon">+</div></button><div className="fi-a">ROAS varies by category, margins, and competition. Fashion and accessories typically see 4–7× ROAS, electronics 3–5×, niche products can reach 10×+. We set realistic targets based on your margins in the audit phase — not inflated promises.</div></div>
<div className="fi"><button className="fi-q">Can Shopping Ads work for WooCommerce / Shopify stores?<div className="fi-icon">+</div></button><div className="fi-a">Yes. We connect Shopify and WooCommerce stores to Google Merchant Centre via the official app or a product feed plugin. Your inventory syncs automatically, so product updates reflect in ads without manual work.</div></div>
</div>
<div>
<div className="fi"><button className="fi-q">How many products do I need to run Shopping Ads?<div className="fi-icon">+</div></button><div className="fi-a">There's no minimum — Shopping Ads work with even a single product. However, stores with 20+ products see more optimisation opportunities. We structure campaigns differently for small catalogues (10–50 SKUs) vs large ones (500+ SKUs).</div></div>
<div className="fi"><button className="fi-q">Do you handle Performance Max campaigns?<div className="fi-icon">+</div></button><div className="fi-a">Yes. We manage both Standard Shopping and Performance Max — choosing the right mix based on your catalogue size, conversion data, and goals. PMax is powerful but needs careful asset management and monitoring to prevent wasted spend.</div></div>
<div className="fi"><button className="fi-q">What's the minimum ad spend for Shopping Ads?<div className="fi-icon">+</div></button><div className="fi-a">We recommend ₹20,000–₹30,000/month in ad spend as a starting point to gather enough conversion data for Google's Smart Bidding to learn effectively. Our management fee starts at ₹25,000/month separately.</div></div>
<div className="fi"><button className="fi-q">Do you also run retargeting alongside Shopping Ads?<div className="fi-icon">+</div></button><div className="fi-a">Yes, and we strongly recommend it. Dynamic Remarketing shows the exact products viewed by past visitors — converting warm traffic that didn't buy on the first visit. It's typically the highest-ROAS campaign in any e-commerce account.</div></div>
</div>
</div>
</div>
</section>
      <div className="wrap" style={{ padding: '40px 28px', borderTop: '1px solid var(--bdr)' }}>
<div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--s)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '16px' }}>Related Services</div>
<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
<a href="/services/google-ads" className="rel-link">🔍 Google Search Ads</a>
<a href="/services/retargeting" className="rel-link">🔄 Retargeting Ads</a>
<a href="/services/meta-ads" className="rel-link">📘 Meta Ads</a>
<a href="/services/ecommerce-development" className="rel-link">🛍️ E-Commerce Development</a>
<a href="/services/ai-ad-creatives" className="rel-link">🤖 AI Ad Creatives</a>
</div>
</div>
      <section className="cta-section">
<div className="wrap">
<h2>Ready to Turn Product Clicks<br />into Consistent Revenue?</h2>
<p>Get a free Shopping Ads audit — we'll identify your biggest feed errors and ROAS opportunities in 15 minutes.</p>
<div className="cta-btns">
<a href="/contact" className="btn btn-ac">🛒 Get Free Shopping Audit</a>
<a href="https://wa.me/919407000101" className="btn btn-wa">💬 WhatsApp Now</a>
</div>
</div>
</section>
      <PageScript id="services-shopping-ads-0" code={js0} />
    </>
  )
}
