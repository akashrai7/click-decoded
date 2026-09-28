/* eslint-disable */
// src/app/services/hd-photography/page.tsx — generated from hd-photography.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "HD Photography Services India | Click Decoded",
  description: "Professional HD photography for brands, businesses, and e-commerce. Click Decoded delivers commercial photography, product shoots, and corporate imagery.",
  alternates: { canonical: "/services/hd-photography" },
}

const css = `
:root{
  --ac:#D97706;--ac2:#b45309;--ac-rgb:217,119,6;
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
.btn-ac{background:var(--ac);color:#fff;box-shadow:0 4px 18px rgba(var(--ac-rgb),.35);}
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
.hero{background:linear-gradient(155deg,#1a0e00 0%,#2d1a00 45%,#1a0e00 100%);padding:96px 0 80px;position:relative;overflow:hidden;}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 60% at 70% 30%,rgba(217,119,6,.18) 0%,transparent 65%),radial-gradient(ellipse 35% 40% at 5% 80%,rgba(217,119,6,.07) 0%,transparent 60%);}
.hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;position:relative;z-index:2;}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;background:rgba(217,119,6,.12);border:1px solid rgba(217,119,6,.3);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#fcd34d;margin-bottom:20px;}
.hero h1{font-size:48px;color:#fff;line-height:1.06;letter-spacing:-.04em;margin-bottom:20px;}
.hero h1 em{font-style:normal;background:linear-gradient(135deg,#fcd34d,#d97706);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-desc{font-size:17px;color:rgba(255,255,255,.62);line-height:1.7;margin-bottom:32px;max-width:460px;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:36px;}
.hero-proof{display:flex;gap:24px;flex-wrap:wrap;}
.proof-item{font-size:13px;color:rgba(255,255,255,.5);}
.proof-item strong{color:#fff;font-weight:700;}
/* PHOTO GALLERY MOCK */
.ph-mock{border-radius:20px;overflow:hidden;box-shadow:0 28px 70px rgba(0,0,0,.65);background:#100900;border:1px solid rgba(217,119,6,.22);}
.mock-browser{background:rgba(255,255,255,.05);padding:10px 14px;border-bottom:1px solid rgba(255,255,255,.07);display:flex;align-items:center;gap:10px;}
.mock-dots{display:flex;gap:5px;}
.mock-dots span{width:9px;height:9px;border-radius:50%;}
.mock-dots span:nth-child(1){background:#ff5f57;}
.mock-dots span:nth-child(2){background:#ffbd2e;}
.mock-dots span:nth-child(3){background:#28c840;}
.mock-url{flex:1;background:rgba(255,255,255,.07);border-radius:6px;padding:5px 12px;font-size:11px;color:rgba(255,255,255,.35);}
.ph-header{background:rgba(217,119,6,.1);border-bottom:1px solid rgba(217,119,6,.2);padding:10px 16px;display:flex;align-items:center;justify-content:space-between;}
.ph-title{font-size:12px;font-weight:700;color:rgba(255,255,255,.75);}
.ph-badge{font-size:10px;font-weight:700;padding:3px 9px;border-radius:5px;background:rgba(217,119,6,.2);border:1px solid rgba(217,119,6,.35);color:#fcd34d;}
/* Gallery grid */
.ph-gallery{padding:12px 14px;display:grid;grid-template-columns:repeat(3,1fr);gap:6px;}
.ph-thumb{border-radius:8px;overflow:hidden;position:relative;aspect-ratio:1;}
.ph-thumb-inner{width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:22px;}
.ph-thumb-inner.t1{background:linear-gradient(135deg,rgba(217,119,6,.3),rgba(180,83,9,.2));}
.ph-thumb-inner.t2{background:linear-gradient(135deg,rgba(217,119,6,.2),rgba(120,53,15,.3));}
.ph-thumb-inner.t3{background:linear-gradient(135deg,rgba(180,83,9,.25),rgba(217,119,6,.15));}
.ph-thumb-inner.t4{background:linear-gradient(135deg,rgba(120,53,15,.2),rgba(217,119,6,.25));}
.ph-thumb-inner.t5{background:linear-gradient(135deg,rgba(217,119,6,.15),rgba(180,83,9,.3));}
.ph-thumb-inner.t6{background:linear-gradient(135deg,rgba(180,83,9,.3),rgba(120,53,15,.15));}
.ph-overlay{position:absolute;inset:0;background:rgba(0,0,0,.0);transition:.2s;display:flex;align-items:flex-end;padding:6px;}
.ph-res{font-size:8px;font-weight:700;padding:2px 6px;border-radius:4px;background:rgba(0,0,0,.6);color:rgba(255,255,255,.8);opacity:0;transition:.2s;}
.ph-thumb:hover .ph-overlay{background:rgba(0,0,0,.3);}
.ph-thumb:hover .ph-res{opacity:1;}
/* Shoot info */
.ph-shoot-info{padding:10px 14px;background:rgba(255,255,255,.03);border-top:1px solid rgba(255,255,255,.06);display:flex;align-items:center;justify-content:space-between;}
.ph-shoot-name{font-size:11px;font-weight:700;color:rgba(255,255,255,.7);}
.ph-shoot-meta{display:flex;gap:10px;}
.ph-meta-item{font-size:10px;color:rgba(255,255,255,.35);}
.ph-meta-item span{color:#fcd34d;font-weight:700;}
/* Stats */
.ph-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,.05);border-top:1px solid rgba(255,255,255,.06);}
.ph-stat{padding:11px 14px;background:#100900;text-align:center;}
.phsv{font-size:18px;font-weight:900;color:#fff;letter-spacing:-.02em;line-height:1;}
.phsl{font-size:9px;color:rgba(255,255,255,.35);margin-top:3px;text-transform:uppercase;letter-spacing:.05em;}
/* STATS STRIP */
.stats-strip{background:var(--ac);}
.stats-inner{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(0,0,0,.2);}
.stat-box{padding:32px 24px;text-align:center;background:var(--ac);}
.stat-n{font-size:40px;font-weight:900;color:#fff;line-height:1;letter-spacing:-.03em;}
.stat-l{font-size:12px;color:rgba(255,255,255,.8);margin-top:6px;font-weight:500;text-transform:uppercase;letter-spacing:.06em;}
/* SECTIONS */
.sec-h{text-align:center;max-width:640px;margin:0 auto 52px;}
.sec-tag{display:inline-flex;padding:5px 13px;border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:10px;background:rgba(217,119,6,.08);border:1px solid rgba(217,119,6,.18);color:var(--ac);}
.sec-h h2{font-size:36px;margin-bottom:14px;}
.sec-h p{font-size:16px;color:var(--m);line-height:1.65;}
.inc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.inc-card{background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:28px 24px;transition:.2s;}
.inc-card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(217,119,6,.1);border-color:rgba(217,119,6,.22);}
.inc-icon{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:16px;background:rgba(217,119,6,.07);border:1px solid rgba(217,119,6,.12);}
.inc-card h3{font-size:17px;margin-bottom:10px;}
.inc-card p{font-size:13.5px;color:var(--m);line-height:1.65;}
.dark-section{background:var(--n-dark);padding:88px 0;}
.formats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:1000px;margin:0 auto;}
.fmt-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:24px;transition:.2s;}
.fmt-card:hover{border-color:rgba(217,119,6,.35);background:rgba(217,119,6,.07);transform:translateY(-2px);}
.fmt-top{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px;}
.fmt-icon{font-size:26px;}
.fmt-tag{font-size:10px;font-weight:700;padding:3px 8px;border-radius:5px;background:rgba(217,119,6,.18);border:1px solid rgba(217,119,6,.3);color:#fcd34d;}
.fmt-card h3{font-size:15px;font-weight:700;color:#fff;margin-bottom:6px;}
.fmt-card p{font-size:13px;color:rgba(255,255,255,.5);line-height:1.6;}
.bg-subtle{background:var(--bg);}
.steps-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative;}
.steps-grid::before{content:'';position:absolute;top:34px;left:12%;right:12%;height:2px;background:linear-gradient(90deg,var(--ac),var(--ac2));z-index:0;opacity:.4;}
.step{text-align:center;padding:0 16px;position:relative;z-index:1;}
.step-num{width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,var(--ac),var(--ac2));color:#fff;font-size:20px;font-weight:900;display:flex;align-items:center;justify-content:center;margin:0 auto 18px;box-shadow:0 8px 24px rgba(217,119,6,.3);}
.step h4{font-size:15px;margin-bottom:7px;}
.step p{font-size:13px;color:var(--m);line-height:1.6;}
.faq-2col{display:grid;grid-template-columns:1fr 1fr;gap:0 28px;align-items:start;}
.fi{border:1px solid var(--bdr);border-radius:14px;margin-bottom:10px;overflow:hidden;background:#fff;transition:.15s;}
.fi.on{border-color:rgba(217,119,6,.3);box-shadow:0 4px 20px rgba(217,119,6,.07);}
.fi-q{width:100%;text-align:left;background:transparent;border:none;padding:20px 22px;font-size:14px;font-weight:700;color:var(--n);display:flex;justify-content:space-between;align-items:center;gap:12px;cursor:pointer;}
.fi-icon{width:26px;height:26px;border-radius:50%;flex-shrink:0;background:var(--bg);border:1px solid var(--bdr);display:flex;align-items:center;justify-content:center;color:var(--ac);font-size:18px;line-height:1;transition:transform .2s;}
.fi.on .fi-icon{transform:rotate(45deg);background:var(--ac);color:#fff;border-color:var(--ac);}
.fi-a{max-height:0;overflow:hidden;transition:.3s;color:var(--m);font-size:14px;line-height:1.75;}
.fi.on .fi-a{max-height:300px;padding:0 22px 22px;}
.cta-section{background:linear-gradient(155deg,#1a0e00 0%,#2d1a00 100%);padding:96px 0;text-align:center;position:relative;overflow:hidden;}
.cta-section::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(217,119,6,.15) 0%,transparent 70%);}
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
      "name": "HD Product Photography",
      "provider": {
        "@type": "Organization",
        "name": "Click Decoded",
        "url": "https://www.clickdecoded.com"
      },
      "description": "Professional HD photography for brands, businesses, and e-commerce. Click Decoded delivers commercial photography, product shoots, and corporate imagery that converts browsers into buyers.",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": "HD Product Photography",
      "url": "https://www.clickdecoded.com/services/hd-photography"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What camera equipment do you use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We shoot on full-frame mirrorless and DSLR systems with 48–61MP sensors — Canon R5, Sony A7R V, and Nikon Z8 depending on the shoot type. Lighting is handled with Profoto and Godox studio strobes and on-location portable systems. All equipment is professional-grade, fully serviced, and backed up on set."
          }
        },
        {
          "@type": "Question",
          "name": "How many final images do we receive?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Delivery counts depend on the shoot type and duration. A half-day brand shoot typically delivers 40–80 final retouched images. A full-day shoot delivers 80–150+. E-commerce product shoots are priced per SKU (typically 5–8 angles per product). Exact counts are agreed during the pre-shoot brief."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide RAW files?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "RAW files are included for full-day brand campaign shoots and on request for other shoot types. For e-commerce and product photography, RAW files can be added as an optional extra. We recommend discussing RAW file requirements during the briefing stage so storage and delivery can be planned accordingly."
          }
        },
        {
          "@type": "Question",
          "name": "Can you shoot outside of Indore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — we regularly shoot in Bhopal, Mumbai, Delhi, and other cities across India. Travel shoots are quoted with a day rate plus travel and accommodation costs at actuals. For multi-city campaigns, we can also coordinate with trusted local photography partners under our creative direction to reduce travel costs."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly are photos delivered after the shoot?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard delivery is 5 business days from the shoot date. Rush delivery (48 hours) is available at an additional charge for time-sensitive campaigns. Same-day event preview sets (20–30 selects, lightly edited) are available for product launches and live events on request."
          }
        },
        {
          "@type": "Question",
          "name": "What if we're not happy with the delivered images?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We include up to 3 rounds of retouching revisions as standard. If the delivered images don't match the approved shot list due to any error on our part, we will reshoot the affected elements at no cost. Our pre-shoot planning process is designed to eliminate surprises — the mood board and shot list sign-off is our mutual quality guarantee."
          }
        },
        {
          "@type": "Question",
          "name": "Do you supply models or handle wardrobe styling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We can coordinate model sourcing through our talent network and connect you with wardrobe stylists for brand and lifestyle shoots. These are billed at cost (model fees + styling fees) plus a coordination charge. For e-commerce fashion shoots, we have in-house access to a full styling kit for standard garment and product photography."
          }
        },
        {
          "@type": "Question",
          "name": "Can photography be combined with videography?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — combined photo and video shoots are more cost-effective than separate bookings since location, lighting, and logistics are shared. We can plan a shoot that delivers both photography and short-form video content (Reels, product videos) in a single production day, maximising your investment on both fronts."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How HD Photography Services India Works — Our Process",
      "description": "Professional HD photography for brands, businesses, and e-commerce. Click Decoded delivers commercial photography, product shoots, and corporate imagery that converts browsers into buyers.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Brief & Mood Board",
          "text": "We gather your brand guidelines, reference images, and key objectives — then produce a detailed shot list and mood board for your approval before anything is booked or scheduled."
        },
        {
          "@type": "HowToStep",
          "name": "Location & Logistics",
          "text": "Studio or on-location — we handle venue scouting, equipment logistics, lighting setup, prop sourcing, and model coordination if required. You show up; we handle everything else."
        },
        {
          "@type": "HowToStep",
          "name": "The Shoot",
          "text": "Professional photographer and art director on set for the full duration. Tethered shooting means you can review images live on a monitor — ensuring sign-off on key frames before the kit is packed away."
        },
        {
          "@type": "HowToStep",
          "name": "Retouch & Deliver",
          "text": "Selects edited, colour-graded, and retouched within 5 business days. Delivered in organised folders by usage type — web, print, social — with full naming conventions for easy file management."
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
          "name": "HD Product Photography",
          "item": "https://www.clickdecoded.com/services/hd-photography"
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
      <div className="breadcrumb"><div className="wrap"><div className="bc-list"><a href="/">Home</a><span style={{ opacity: '.4' }}>›</span><span>Content</span><span style={{ opacity: '.4' }}>›</span><span>HD Photography</span></div></div></div>
      <section className="hero">
<div className="wrap">
<div className="hero-grid">
<div>
<div className="hero-eyebrow">📸 Commercial · Brand · E-Commerce Photography</div>
<h1>Visuals That Make Customers <em>Stop Scrolling</em> and Start Buying.</h1>
<p className="hero-desc">Professional HD photography for brands, businesses, and e-commerce — shot, retouched, and delivered in 5 business days. First impressions happen in milliseconds; your visuals need to win that moment every time.</p>
<div className="hero-btns">
<a href="/contact" className="btn btn-ac">📸 Book a Shoot</a>
<a href="https://wa.me/919407000101" className="btn btn-ghost">💬 WhatsApp Us</a>
</div>
<div className="hero-proof">
<span className="proof-item"><strong>48MP+</strong> Camera System</span>
<span className="proof-item"><strong>5-Day</strong> Delivery</span>
<span className="proof-item"><strong>₹25K</strong> Starting</span>
</div>
</div>

<div className="ph-mock">
<div className="mock-browser">
<div className="mock-dots"><span></span><span></span><span></span></div>
<div className="mock-url">Client Gallery — Click Decoded Photography</div>
</div>
<div className="ph-header">
<div className="ph-title">📸 Delivered Gallery — Brand Shoot</div>
<div className="ph-badge">142 Finals · Retouched</div>
</div>
<div className="ph-gallery">
<div className="ph-thumb"><div className="ph-thumb-inner t1">🏢</div><div className="ph-overlay"><div className="ph-res">6000×4000 · RAW+JPG</div></div></div>
<div className="ph-thumb"><div className="ph-thumb-inner t2">👔</div><div className="ph-overlay"><div className="ph-res">5472×3648 · JPG</div></div></div>
<div className="ph-thumb"><div className="ph-thumb-inner t3">☕</div><div className="ph-overlay"><div className="ph-res">6000×4000 · RAW+JPG</div></div></div>
<div className="ph-thumb"><div className="ph-thumb-inner t4">🏪</div><div className="ph-overlay"><div className="ph-res">5472×3648 · JPG</div></div></div>
<div className="ph-thumb"><div className="ph-thumb-inner t5">📦</div><div className="ph-overlay"><div className="ph-res">6000×4000 · RAW+JPG</div></div></div>
<div className="ph-thumb"><div className="ph-thumb-inner t6">👤</div><div className="ph-overlay"><div className="ph-res">5472×3648 · JPG</div></div></div>
</div>
<div className="ph-shoot-info">
<div className="ph-shoot-name">🗓 Delivered: 4 business days</div>
<div className="ph-shoot-meta">
<div className="ph-meta-item">Finals: <span>142</span></div>
<div className="ph-meta-item">RAW: <span>Included</span></div>
<div className="ph-meta-item">Edit: <span>Full retouch</span></div>
</div>
</div>
<div className="ph-stats">
<div className="ph-stat"><div className="phsv">48MP</div><div className="phsl">Camera System</div></div>
<div className="ph-stat"><div className="phsv">5 Days</div><div className="phsl">Avg Delivery</div></div>
<div className="ph-stat"><div className="phsv">100%</div><div className="phsl">Retouched</div></div>
</div>
</div>
</div>
</div>
</section>
      <div className="stats-strip">
<div className="stats-inner">
<div className="stat-box"><div className="stat-n">48MP+</div><div className="stat-l">Camera System</div></div>
<div className="stat-box"><div className="stat-n">5 Days</div><div className="stat-l">Delivery Turnaround</div></div>
<div className="stat-box"><div className="stat-n">100%</div><div className="stat-l">Retouched Finals</div></div>
<div className="stat-box"><div className="stat-n">₹25K</div><div className="stat-l">Starting Per Shoot</div></div>
</div>
</div>
      <section>
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag">What's Included</div>
<h2>A Complete Photography Service,<br />Not Just a Shoot.</h2>
<p>Every engagement covers pre-production planning, the shoot itself, full retouching, and organised delivery — no hand-holding required from your side.</p>
</div>
<div className="inc-grid">
<div className="inc-card rv"><div className="inc-icon">🗓️</div><h3>Pre-Shoot Planning</h3><p>Mood board creation, shot list development, location or studio coordination, prop and wardrobe briefing — all handled before the shoot date so every hour on set is productive and on-brief.</p></div>
<div className="inc-card rv2"><div className="inc-icon">📸</div><h3>Professional HD Shoot</h3><p>Full-day or half-day shoots with a 48MP+ camera system, professional lighting rigs, and an art director on set ensuring every frame is on-brand and technically perfect before leaving the location.</p></div>
<div className="inc-card rv3"><div className="inc-icon">🎨</div><h3>Expert Retouching</h3><p>Every delivered image is colour-graded, exposure-corrected, and retouched by a specialist editor. Brand-consistent colour treatment applied across the full gallery for visual coherence across all platforms.</p></div>
<div className="inc-card rv"><div className="inc-icon">📁</div><h3>Organised Digital Delivery</h3><p>Finals delivered via Google Drive or WeTransfer within 5 business days — organised by category, in web-optimised and print-ready resolutions, with RAW files included for major shoots.</p></div>
<div className="inc-card rv2"><div className="inc-icon">📐</div><h3>Platform-Ready Exports</h3><p>Images exported and labelled for each destination: website hero (16:9), Instagram (1:1 and 4:5), Google My Business, LinkedIn, and print — so you never need to resize or crop post-delivery.</p></div>
<div className="inc-card rv3"><div className="inc-icon">🔄</div><h3>Revision &amp; Reshoot Guarantee</h3><p>Up to 3 rounds of retouching revisions included. If a delivered batch doesn't meet the approved shot list due to any error on our side, we reshoot at no additional cost. No debates, no excuses.</p></div>
</div>
</div>
</section>
      <section className="dark-section">
<div className="wrap">
<div className="sec-h rv" style={{ marginBottom: '40px' }}>
<h2 style={{ color: '#fff' }}>Every Type of Commercial<br />Photography, Covered.</h2>
<p style={{ color: 'rgba(255,255,255,.55)' }}>From corporate headshots to full brand campaigns — one agency, every visual need.</p>
</div>
<div className="formats-grid">
<div className="fmt-card rv"><div className="fmt-top"><div className="fmt-icon">🏢</div><div className="fmt-tag">Corporate</div></div><h3>Corporate &amp; Office Photography</h3><p>Team portraits, workspace interiors, event coverage, and leadership headshots — professional imagery that builds trust in pitches, on LinkedIn, and on your About page.</p></div>
<div className="fmt-card rv2"><div className="fmt-top"><div className="fmt-icon">🛒</div><div className="fmt-tag">E-Commerce</div></div><h3>E-Commerce Product Shoots</h3><p>Clean white-background product photography and lifestyle product shots for marketplaces and direct-to-consumer stores — shot to Amazon, Flipkart, and Shopify image specifications.</p></div>
<div className="fmt-card rv3"><div className="fmt-top"><div className="fmt-icon">🏪</div><div className="fmt-tag">F&amp;B / Retail</div></div><h3>Food &amp; Retail Photography</h3><p>Menu photography, interior ambiance shots, and customer-experience imagery for restaurants, cafés, retail stores, and hospitality brands — styled and lit for maximum appetite appeal.</p></div>
<div className="fmt-card rv"><div className="fmt-top"><div className="fmt-icon">🏗️</div><div className="fmt-tag">Real Estate</div></div><h3>Property &amp; Real Estate Photography</h3><p>Interior and exterior property photography with HDR processing, twilight shoots, and wide-angle coverage — delivering images that sell square footage before a single site visit.</p></div>
<div className="fmt-card rv2"><div className="fmt-top"><div className="fmt-icon">💼</div><div className="fmt-tag">Brand</div></div><h3>Brand Campaign Shoots</h3><p>Full brand photography campaigns — multi-day shoots producing hero images, social content, and campaign visuals that define how your brand looks across every touchpoint for the next 12 months.</p></div>
<div className="fmt-card rv3"><div className="fmt-top"><div className="fmt-icon">🎓</div><div className="fmt-tag">Events</div></div><h3>Event &amp; Conference Photography</h3><p>Corporate events, product launches, seminars, and award nights — candid and stage photography with same-day previews delivered for immediate social posting while momentum is live.</p></div>
</div>
</div>
</section>
      <section className="bg-subtle">
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag">Our Process</div>
<h2>Brief to Delivered Gallery<br />in 5 Business Days.</h2>
<p>A structured workflow that keeps every shoot on-brief, on-time, and on-brand — with zero surprises at delivery.</p>
</div>
<div className="steps-grid">
<div className="step rv"><div className="step-num">01</div><h4>Brief &amp; Mood Board</h4><p>We gather your brand guidelines, reference images, and key objectives — then produce a detailed shot list and mood board for your approval before anything is booked or scheduled.</p></div>
<div className="step rv2"><div className="step-num">02</div><h4>Location &amp; Logistics</h4><p>Studio or on-location — we handle venue scouting, equipment logistics, lighting setup, prop sourcing, and model coordination if required. You show up; we handle everything else.</p></div>
<div className="step rv3"><div className="step-num">03</div><h4>The Shoot</h4><p>Professional photographer and art director on set for the full duration. Tethered shooting means you can review images live on a monitor — ensuring sign-off on key frames before the kit is packed away.</p></div>
<div className="step rv3"><div className="step-num">04</div><h4>Retouch &amp; Deliver</h4><p>Selects edited, colour-graded, and retouched within 5 business days. Delivered in organised folders by usage type — web, print, social — with full naming conventions for easy file management.</p></div>
</div>
</div>
</section>
      <section>
<div className="wrap">
<div className="sec-h rv"><h2>Frequently Asked Questions</h2></div>
<div className="faq-2col">
<div>
<div className="fi"><button className="fi-q">What camera equipment do you use?<div className="fi-icon">+</div></button><div className="fi-a">We shoot on full-frame mirrorless and DSLR systems with 48–61MP sensors — Canon R5, Sony A7R V, and Nikon Z8 depending on the shoot type. Lighting is handled with Profoto and Godox studio strobes and on-location portable systems. All equipment is professional-grade, fully serviced, and backed up on set.</div></div>
<div className="fi"><button className="fi-q">How many final images do we receive?<div className="fi-icon">+</div></button><div className="fi-a">Delivery counts depend on the shoot type and duration. A half-day brand shoot typically delivers 40–80 final retouched images. A full-day shoot delivers 80–150+. E-commerce product shoots are priced per SKU (typically 5–8 angles per product). Exact counts are agreed during the pre-shoot brief.</div></div>
<div className="fi"><button className="fi-q">Do you provide RAW files?<div className="fi-icon">+</div></button><div className="fi-a">RAW files are included for full-day brand campaign shoots and on request for other shoot types. For e-commerce and product photography, RAW files can be added as an optional extra. We recommend discussing RAW file requirements during the briefing stage so storage and delivery can be planned accordingly.</div></div>
<div className="fi"><button className="fi-q">Can you shoot outside of Indore?<div className="fi-icon">+</div></button><div className="fi-a">Yes — we regularly shoot in Bhopal, Mumbai, Delhi, and other cities across India. Travel shoots are quoted with a day rate plus travel and accommodation costs at actuals. For multi-city campaigns, we can also coordinate with trusted local photography partners under our creative direction to reduce travel costs.</div></div>
</div>
<div>
<div className="fi"><button className="fi-q">How quickly are photos delivered after the shoot?<div className="fi-icon">+</div></button><div className="fi-a">Standard delivery is 5 business days from the shoot date. Rush delivery (48 hours) is available at an additional charge for time-sensitive campaigns. Same-day event preview sets (20–30 selects, lightly edited) are available for product launches and live events on request.</div></div>
<div className="fi"><button className="fi-q">What if we're not happy with the delivered images?<div className="fi-icon">+</div></button><div className="fi-a">We include up to 3 rounds of retouching revisions as standard. If the delivered images don't match the approved shot list due to any error on our part, we will reshoot the affected elements at no cost. Our pre-shoot planning process is designed to eliminate surprises — the mood board and shot list sign-off is our mutual quality guarantee.</div></div>
<div className="fi"><button className="fi-q">Do you supply models or handle wardrobe styling?<div className="fi-icon">+</div></button><div className="fi-a">We can coordinate model sourcing through our talent network and connect you with wardrobe stylists for brand and lifestyle shoots. These are billed at cost (model fees + styling fees) plus a coordination charge. For e-commerce fashion shoots, we have in-house access to a full styling kit for standard garment and product photography.</div></div>
<div className="fi"><button className="fi-q">Can photography be combined with videography?<div className="fi-icon">+</div></button><div className="fi-a">Yes — combined photo and video shoots are more cost-effective than separate bookings since location, lighting, and logistics are shared. We can plan a shoot that delivers both photography and short-form video content (Reels, product videos) in a single production day, maximising your investment on both fronts.</div></div>
</div>
</div>
</div>
</section>
      <div className="wrap" style={{ padding: '40px 28px', borderTop: '1px solid var(--bdr)' }}>
<div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--s)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '16px' }}>Related Services</div>
<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
<a href="/services/product-photography" className="rel-link">📦 Product Photography</a>
<a href="/services/drone-video" className="rel-link">🚁 Drone Video</a>
<a href="/services/virtual-tour" className="rel-link">🌐 Virtual Tour</a>
<a href="/services/influencer-video" className="rel-link">🎬 Influencer Video</a>
<a href="/services/ai-ad-creatives" className="rel-link">🤖 AI Ad Creatives</a>
</div>
</div>
      <section className="cta-section">
<div className="wrap">
<h2>Your Brand Deserves Visuals<br />That Do the Selling.</h2>
<p>Book a free shoot consultation — we'll scope your requirements, suggest the right shoot type, and send a transparent quote within 24 hours.</p>
<div className="cta-btns">
<a href="/contact" className="btn btn-ac">📸 Book a Free Consultation</a>
<a href="https://wa.me/919407000101" className="btn btn-wa">💬 WhatsApp Now</a>
</div>
</div>
</section>
      <PageScript id="services-hd-photography-0" code={js0} />
    </>
  )
}
