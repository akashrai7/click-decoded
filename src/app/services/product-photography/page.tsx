/* eslint-disable */
// src/app/services/product-photography/page.tsx — generated from product-photography.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "Product Photography India | Click Decoded",
  description: "Professional product photography for e-commerce, catalogues, and marketplaces. Click Decoded delivers white-background, lifestyle, and 360° product shots.",
  alternates: { canonical: "/services/product-photography" },
}

const css = `
:root{
  --ac:#E11D48;--ac2:#be123c;--ac-rgb:225,29,72;
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
.hero{background:linear-gradient(155deg,#1a0209 0%,#2d0412 45%,#1a0209 100%);padding:96px 0 80px;position:relative;overflow:hidden;}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 60% at 70% 30%,rgba(225,29,72,.18) 0%,transparent 65%),radial-gradient(ellipse 35% 40% at 5% 80%,rgba(225,29,72,.07) 0%,transparent 60%);}
.hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;position:relative;z-index:2;}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;background:rgba(225,29,72,.12);border:1px solid rgba(225,29,72,.3);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#fda4af;margin-bottom:20px;}
.hero h1{font-size:48px;color:#fff;line-height:1.06;letter-spacing:-.04em;margin-bottom:20px;}
.hero h1 em{font-style:normal;background:linear-gradient(135deg,#fda4af,#e11d48);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-desc{font-size:17px;color:rgba(255,255,255,.62);line-height:1.7;margin-bottom:32px;max-width:460px;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:36px;}
.hero-proof{display:flex;gap:24px;flex-wrap:wrap;}
.proof-item{font-size:13px;color:rgba(255,255,255,.5);}
.proof-item strong{color:#fff;font-weight:700;}
/* SKU DASHBOARD MOCK */
.sk-mock{border-radius:20px;overflow:hidden;box-shadow:0 28px 70px rgba(0,0,0,.65);background:#120006;border:1px solid rgba(225,29,72,.22);}
.mock-browser{background:rgba(255,255,255,.05);padding:10px 14px;border-bottom:1px solid rgba(255,255,255,.07);display:flex;align-items:center;gap:10px;}
.mock-dots{display:flex;gap:5px;}
.mock-dots span{width:9px;height:9px;border-radius:50%;}
.mock-dots span:nth-child(1){background:#ff5f57;}
.mock-dots span:nth-child(2){background:#ffbd2e;}
.mock-dots span:nth-child(3){background:#28c840;}
.mock-url{flex:1;background:rgba(255,255,255,.07);border-radius:6px;padding:5px 12px;font-size:11px;color:rgba(255,255,255,.35);}
.sk-header{background:rgba(225,29,72,.1);border-bottom:1px solid rgba(225,29,72,.2);padding:10px 16px;display:flex;align-items:center;justify-content:space-between;}
.sk-title{font-size:12px;font-weight:700;color:rgba(255,255,255,.75);}
.sk-badge{font-size:10px;font-weight:700;padding:3px 9px;border-radius:5px;background:rgba(225,29,72,.2);border:1px solid rgba(225,29,72,.35);color:#fda4af;}
/* Progress bar */
.sk-progress{padding:10px 14px;background:rgba(255,255,255,.02);border-bottom:1px solid rgba(255,255,255,.05);}
.sk-prog-label{display:flex;justify-content:space-between;font-size:10px;color:rgba(255,255,255,.4);margin-bottom:6px;}
.sk-prog-label span{color:#fda4af;font-weight:700;}
.sk-prog-bar{height:6px;background:rgba(255,255,255,.08);border-radius:3px;overflow:hidden;}
.sk-prog-fill{height:100%;border-radius:3px;background:linear-gradient(90deg,var(--ac),#fb7185);width:68%;}
/* SKU list */
.sk-list{padding:8px 14px;display:flex;flex-direction:column;gap:5px;}
.sk-item{display:flex;align-items:center;gap:10px;padding:8px 10px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:8px;}
.sk-item.active{border-color:rgba(225,29,72,.3);background:rgba(225,29,72,.05);}
.sk-thumb{width:36px;height:36px;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:18px;background:rgba(255,255,255,.06);flex-shrink:0;}
.sk-info{flex:1;}
.sk-name{font-size:11px;font-weight:700;color:rgba(255,255,255,.8);}
.sk-angles{display:flex;gap:4px;margin-top:3px;}
.angle-dot{width:14px;height:14px;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:7px;font-weight:800;}
.angle-done{background:rgba(74,222,128,.15);border:1px solid rgba(74,222,128,.25);color:#4ade80;}
.angle-prog{background:rgba(225,29,72,.2);border:1px solid rgba(225,29,72,.35);color:#fda4af;}
.angle-wait{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);color:rgba(255,255,255,.3);}
.sk-status{font-size:9px;font-weight:700;padding:3px 8px;border-radius:5px;flex-shrink:0;}
.st-done{background:rgba(74,222,128,.1);border:1px solid rgba(74,222,128,.2);color:#4ade80;}
.st-prog{background:rgba(225,29,72,.15);border:1px solid rgba(225,29,72,.25);color:#fda4af;}
.st-wait{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);color:rgba(255,255,255,.3);}
/* Stats */
.sk-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,.05);border-top:1px solid rgba(255,255,255,.06);}
.sk-stat{padding:11px 12px;background:#120006;text-align:center;}
.sksv{font-size:17px;font-weight:900;color:#fff;letter-spacing:-.02em;line-height:1;}
.sksl{font-size:9px;color:rgba(255,255,255,.35);margin-top:3px;text-transform:uppercase;letter-spacing:.05em;}
/* STATS STRIP */
.stats-strip{background:var(--ac);}
.stats-inner{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(0,0,0,.2);}
.stat-box{padding:32px 24px;text-align:center;background:var(--ac);}
.stat-n{font-size:40px;font-weight:900;color:#fff;line-height:1;letter-spacing:-.03em;}
.stat-l{font-size:12px;color:rgba(255,255,255,.8);margin-top:6px;font-weight:500;text-transform:uppercase;letter-spacing:.06em;}
/* SECTIONS */
.sec-h{text-align:center;max-width:640px;margin:0 auto 52px;}
.sec-tag{display:inline-flex;padding:5px 13px;border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:10px;background:rgba(225,29,72,.08);border:1px solid rgba(225,29,72,.18);color:var(--ac);}
.sec-h h2{font-size:36px;margin-bottom:14px;}
.sec-h p{font-size:16px;color:var(--m);line-height:1.65;}
.inc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.inc-card{background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:28px 24px;transition:.2s;}
.inc-card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(225,29,72,.08);border-color:rgba(225,29,72,.2);}
.inc-icon{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:16px;background:rgba(225,29,72,.07);border:1px solid rgba(225,29,72,.12);}
.inc-card h3{font-size:17px;margin-bottom:10px;}
.inc-card p{font-size:13.5px;color:var(--m);line-height:1.65;}
.dark-section{background:var(--n-dark);padding:88px 0;}
.formats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:1000px;margin:0 auto;}
.fmt-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:24px;transition:.2s;}
.fmt-card:hover{border-color:rgba(225,29,72,.35);background:rgba(225,29,72,.06);transform:translateY(-2px);}
.fmt-top{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px;}
.fmt-icon{font-size:26px;}
.fmt-tag{font-size:10px;font-weight:700;padding:3px 8px;border-radius:5px;background:rgba(225,29,72,.18);border:1px solid rgba(225,29,72,.3);color:#fda4af;}
.fmt-card h3{font-size:15px;font-weight:700;color:#fff;margin-bottom:6px;}
.fmt-card p{font-size:13px;color:rgba(255,255,255,.5);line-height:1.6;}
.bg-subtle{background:var(--bg);}
.steps-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative;}
.steps-grid::before{content:'';position:absolute;top:34px;left:12%;right:12%;height:2px;background:linear-gradient(90deg,var(--ac),var(--ac2));z-index:0;opacity:.4;}
.step{text-align:center;padding:0 16px;position:relative;z-index:1;}
.step-num{width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,var(--ac),var(--ac2));color:#fff;font-size:20px;font-weight:900;display:flex;align-items:center;justify-content:center;margin:0 auto 18px;box-shadow:0 8px 24px rgba(225,29,72,.3);}
.step h4{font-size:15px;margin-bottom:7px;}
.step p{font-size:13px;color:var(--m);line-height:1.6;}
.faq-2col{display:grid;grid-template-columns:1fr 1fr;gap:0 28px;align-items:start;}
.fi{border:1px solid var(--bdr);border-radius:14px;margin-bottom:10px;overflow:hidden;background:#fff;transition:.15s;}
.fi.on{border-color:rgba(225,29,72,.3);box-shadow:0 4px 20px rgba(225,29,72,.07);}
.fi-q{width:100%;text-align:left;background:transparent;border:none;padding:20px 22px;font-size:14px;font-weight:700;color:var(--n);display:flex;justify-content:space-between;align-items:center;gap:12px;cursor:pointer;}
.fi-icon{width:26px;height:26px;border-radius:50%;flex-shrink:0;background:var(--bg);border:1px solid var(--bdr);display:flex;align-items:center;justify-content:center;color:var(--ac);font-size:18px;line-height:1;transition:transform .2s;}
.fi.on .fi-icon{transform:rotate(45deg);background:var(--ac);color:#fff;border-color:var(--ac);}
.fi-a{max-height:0;overflow:hidden;transition:.3s;color:var(--m);font-size:14px;line-height:1.75;}
.fi.on .fi-a{max-height:300px;padding:0 22px 22px;}
.cta-section{background:linear-gradient(155deg,#1a0209 0%,#2d0412 100%);padding:96px 0;text-align:center;position:relative;overflow:hidden;}
.cta-section::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(225,29,72,.15) 0%,transparent 70%);}
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
      "name": "Product Photography",
      "provider": {
        "@type": "Organization",
        "name": "Click Decoded",
        "url": "https://www.clickdecoded.com"
      },
      "description": "Professional product photography for e-commerce, catalogues, and marketplaces. Click Decoded delivers white-background, lifestyle, and 360° product shots optimised for Amazon, Flipkart, and Shopify.",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": "Product Photography",
      "url": "https://www.clickdecoded.com/services/product-photography"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is your per-SKU pricing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pricing starts at ₹199 per SKU for white-background shoots (3 angles), scaling down per unit for larger batches. Lifestyle photography is priced separately per setup. 360° spin is ₹799–₹1,499 per SKU. We provide a full itemised quote within 24 hours of receiving your SKU list and requirements."
          }
        },
        {
          "@type": "Question",
          "name": "How many SKUs can you shoot in a day?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We can shoot 300–500 simple product SKUs (white background, 3–5 angles) in a single studio day with our batch shooting workflow. For jewellery, electronics, or complex styling setups, the rate is 50–150 SKUs per day. We quote realistic timelines at briefing rather than overpromising."
          }
        },
        {
          "@type": "Question",
          "name": "Do you meet Amazon's image requirements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — all main product images are delivered at 2000×2000px minimum on pure white backgrounds (RGB 255,255,255) with the product occupying 85%+ of the frame, meeting Amazon's main image policy. Additional marketplace formats (Flipkart, Myntra, Meesho, Nykaa) are included at no extra charge."
          }
        },
        {
          "@type": "Question",
          "name": "Can you shoot products with multiple colour variants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — colour variants are shot under identical lighting conditions with consistent positioning so product pages show colour differences accurately. If only the colour changes (not the shape or size), variant shoots are priced at a reduced rate since setup time is significantly lower than a fresh SKU."
          }
        },
        {
          "@type": "Question",
          "name": "How do we send our products to you?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Products can be couriered to our Indore studio (we share the address post-booking) or dropped off in person. We acknowledge receipt of every item and provide a digital intake log. All products are stored securely and returned via tracked courier at the end of the shoot at cost."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide ghost mannequin photography?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — ghost mannequin (invisible mannequin) photography is available for apparel, giving garments a 3D filled appearance without a visible model. This is particularly effective for inner garments, outerwear, and formal wear on fashion marketplace listings."
          }
        },
        {
          "@type": "Question",
          "name": "What file formats are delivered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All finals are delivered as high-resolution JPEG files. For white-background shots requiring transparency, PNG files with transparent backgrounds are included. RAW files are available on request for an additional charge. Images are named by SKU code for easy bulk import into your inventory system."
          }
        },
        {
          "@type": "Question",
          "name": "Can you upload images directly to our store?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — we offer a direct upload service for Shopify, WooCommerce, and Amazon Seller Central. Images are mapped to your existing product listings using SKU codes and uploaded in bulk. This service saves your team 10–20 hours per batch and is included in our managed product photography packages."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How Product Photography India Works — Our Process",
      "description": "Professional product photography for e-commerce, catalogues, and marketplaces. Click Decoded delivers white-background, lifestyle, and 360° product shots optimised for Amazon, Flipkart, and Shopify.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "SKU List & Brief",
          "text": "Share your product list, target marketplaces, required angles, and any styling notes. We generate a confirmed shot list and quote within 24 hours — no ambiguity, no scope creep."
        },
        {
          "@type": "HowToStep",
          "name": "Ship or Drop Off",
          "text": "Ship products to our studio or drop them off in Indore. We handle intake, cataloguing, and product care throughout the shoot. Products are returned insured and in original condition."
        },
        {
          "@type": "HowToStep",
          "name": "Shoot & Retouch",
          "text": "Products shot in batches by category for lighting efficiency. Each SKU receives full retouching — background removal, colour correction, and blemish clean-up — before being flagged for quality check."
        },
        {
          "@type": "HowToStep",
          "name": "Deliver & Upload",
          "text": "Finals delivered via Google Drive organised by SKU, angle, and platform format. We can also upload directly to your Shopify, WooCommerce, or Amazon Seller Central account to save your team time."
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
          "name": "Product Photography",
          "item": "https://www.clickdecoded.com/services/product-photography"
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
      <div className="breadcrumb"><div className="wrap"><div className="bc-list"><a href="/">Home</a><span style={{ opacity: '.4' }}>›</span><span>Content</span><span style={{ opacity: '.4' }}>›</span><span>Product Photography</span></div></div></div>
      <section className="hero">
<div className="wrap">
<div className="hero-grid">
<div>
<div className="hero-eyebrow">📦 E-Commerce · Catalogue · Marketplace Ready</div>
<h1>Product Images That <em>Sell on Sight</em> — Every SKU, Every Angle.</h1>
<p className="hero-desc">Professional product photography optimised for Amazon, Flipkart, Shopify, and your own store. White-background, lifestyle, and 360° shots — delivered in bulk, on spec, and on time.</p>
<div className="hero-btns">
<a href="/contact" className="btn btn-ac">📦 Get a SKU Quote</a>
<a href="https://wa.me/919407000101" className="btn btn-ghost">💬 WhatsApp Us</a>
</div>
<div className="hero-proof">
<span className="proof-item"><strong>500+</strong> SKUs / Day</span>
<span className="proof-item"><strong>8 Angles</strong> per Product</span>
<span className="proof-item"><strong>₹199</strong> per SKU from</span>
</div>
</div>

<div className="sk-mock">
<div className="mock-browser">
<div className="mock-dots"><span></span><span></span><span></span></div>
<div className="mock-url">SKU Shoot Dashboard — Click Decoded</div>
</div>
<div className="sk-header">
<div className="sk-title">📦 Batch Shoot — Fashion Brand (120 SKUs)</div>
<div className="sk-badge">Day 1 of 2 · In Progress</div>
</div>
<div className="sk-progress">
<div className="sk-prog-label"><span>82 of 120 SKUs complete</span><span>68%</span></div>
<div className="sk-prog-bar"><div className="sk-prog-fill"></div></div>
</div>
<div className="sk-list">
<div className="sk-item">
<div className="sk-thumb">👗</div>
<div className="sk-info">
<div className="sk-name">Blue Floral Kurta — SKU #BFK-012</div>
<div className="sk-angles">
<div className="angle-dot angle-done">F</div>
<div className="angle-dot angle-done">B</div>
<div className="angle-dot angle-done">L</div>
<div className="angle-dot angle-done">R</div>
<div className="angle-dot angle-done">D</div>
<div className="angle-dot angle-done">L+</div>
</div>
</div>
<div className="sk-status st-done">Done ✓</div>
</div>
<div className="sk-item active">
<div className="sk-thumb">👕</div>
<div className="sk-info">
<div className="sk-name">White Cotton Tee — SKU #WCT-047</div>
<div className="sk-angles">
<div className="angle-dot angle-done">F</div>
<div className="angle-dot angle-done">B</div>
<div className="angle-dot angle-prog">L</div>
<div className="angle-dot angle-wait">R</div>
<div className="angle-dot angle-wait">D</div>
<div className="angle-dot angle-wait">L+</div>
</div>
</div>
<div className="sk-status st-prog">Shooting…</div>
</div>
<div className="sk-item">
<div className="sk-thumb">👖</div>
<div className="sk-info">
<div className="sk-name">Slim Fit Chinos — SKU #SFC-088</div>
<div className="sk-angles">
<div className="angle-dot angle-wait">F</div>
<div className="angle-dot angle-wait">B</div>
<div className="angle-dot angle-wait">L</div>
<div className="angle-dot angle-wait">R</div>
<div className="angle-dot angle-wait">D</div>
<div className="angle-dot angle-wait">L+</div>
</div>
</div>
<div className="sk-status st-wait">Queued</div>
</div>
</div>
<div className="sk-stats">
<div className="sk-stat"><div className="sksv">82</div><div className="sksl">SKUs Shot Today</div></div>
<div className="sk-stat"><div className="sksv">6</div><div className="sksl">Angles per SKU</div></div>
<div className="sk-stat"><div className="sksv">492</div><div className="sksl">Finals Queued</div></div>
</div>
</div>
</div>
</div>
</section>
      <div className="stats-strip">
<div className="stats-inner">
<div className="stat-box"><div className="stat-n">500+</div><div className="stat-l">SKUs Per Day</div></div>
<div className="stat-box"><div className="stat-n">8</div><div className="stat-l">Angles Per Product</div></div>
<div className="stat-box"><div className="stat-n">48hr</div><div className="stat-l">Rush Delivery</div></div>
<div className="stat-box"><div className="stat-n">₹199</div><div className="stat-l">Per SKU From</div></div>
</div>
</div>
      <section>
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag">What's Included</div>
<h2>Bulk Product Shoots With<br />Zero Compromise on Quality.</h2>
<p>Volume doesn't mean cutting corners — every SKU gets the same careful setup, lighting, and retouch regardless of batch size.</p>
</div>
<div className="inc-grid">
<div className="inc-card rv"><div className="inc-icon">⬜</div><h3>White Background Shots</h3><p>Pure white background product photography to marketplace specifications — Amazon (pure white, RGB 255,255,255), Flipkart, Meesho, and Myntra image guidelines met for every single SKU delivered.</p></div>
<div className="inc-card rv2"><div className="inc-icon">🏠</div><h3>Lifestyle Photography</h3><p>Product-in-context shots that show your item being used, worn, or displayed in a real-world setting — dramatically increasing add-to-cart rates vs pure white-background images alone.</p></div>
<div className="inc-card rv3"><div className="inc-icon">🔄</div><h3>360° Spin Photography</h3><p>36-frame rotational product shoots delivered as animated GIFs or interactive 360° viewers — giving online shoppers the closest experience to holding the product in their hands.</p></div>
<div className="inc-card rv"><div className="inc-icon">🎨</div><h3>Full Retouching Included</h3><p>Every image retouched for colour accuracy, background clipping, dust/blemish removal, and shadow consistency — delivered at print resolution and web-optimised sizes simultaneously.</p></div>
<div className="inc-card rv2"><div className="inc-icon">📐</div><h3>Marketplace-Ready Exports</h3><p>Images exported to exact pixel dimensions and file size limits for each platform: Amazon (2000×2000px min), Flipkart (500×500px), Shopify, WooCommerce — labelled and organised by SKU and platform.</p></div>
<div className="inc-card rv3"><div className="inc-icon">📋</div><h3>Shoot Management Portal</h3><p>Real-time SKU dashboard showing shoot progress, angles completed per product, and delivery ETA — so you always know exactly where your batch stands without chasing emails for updates.</p></div>
</div>
</div>
</section>
      <section className="dark-section">
<div className="wrap">
<div className="sec-h rv" style={{ marginBottom: '40px' }}>
<h2 style={{ color: '#fff' }}>Every Product Category,<br />Every Shoot Style.</h2>
<p style={{ color: 'rgba(255,255,255,.55)' }}>From fashion to electronics, jewellery to FMCG — we've shot it all and know the lighting and styling nuances each category demands.</p>
</div>
<div className="formats-grid">
<div className="fmt-card rv"><div className="fmt-top"><div className="fmt-icon">👗</div><div className="fmt-tag">Fashion</div></div><h3>Fashion &amp; Apparel</h3><p>Flat-lay, ghost mannequin, and model photography for clothing — colour accuracy is paramount, and our calibrated lighting ensures fabric texture and shade are represented exactly as they appear in person.</p></div>
<div className="fmt-card rv2"><div className="fmt-top"><div className="fmt-icon">📱</div><div className="fmt-tag">Electronics</div></div><h3>Electronics &amp; Gadgets</h3><p>Screen reflections, chrome finishes, and intricate detail — electronics demand precision lighting. We use polarised lighting setups to eliminate glare and capture exact product colours for tech marketplace listings.</p></div>
<div className="fmt-card rv3"><div className="fmt-top"><div className="fmt-icon">💍</div><div className="fmt-tag">Jewellery</div></div><h3>Jewellery &amp; Accessories</h3><p>Macro product photography for rings, necklaces, earrings, and watches — capturing gemstone clarity, metal finish, and intricate detail at extreme close-up resolution that standard photography cannot achieve.</p></div>
<div className="fmt-card rv"><div className="fmt-top"><div className="fmt-icon">🍳</div><div className="fmt-tag">Home &amp; Kitchen</div></div><h3>Home, Kitchen &amp; FMCG</h3><p>Tabletop product photography for cookware, home decor, and FMCG packaged goods — styled flatlays and hero shots that work equally well on Amazon listings and brand social feeds.</p></div>
<div className="fmt-card rv2"><div className="fmt-top"><div className="fmt-icon">💄</div><div className="fmt-tag">Beauty</div></div><h3>Beauty &amp; Skincare</h3><p>Premium packshot photography for cosmetics, skincare, and wellness products — clean, aspirational imagery that meets beauty marketplace standards and communicates premium brand positioning instantly.</p></div>
<div className="fmt-card rv3"><div className="fmt-top"><div className="fmt-icon">🏋️</div><div className="fmt-tag">Sports</div></div><h3>Sports &amp; Fitness</h3><p>Action-context lifestyle shots and clean packshots for sporting goods, supplements, and fitness equipment — showing products in motion and at rest to appeal to both discovery and purchase intent.</p></div>
</div>
</div>
</section>
      <section className="bg-subtle">
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag">Our Process</div>
<h2>Ship Your Products.<br />Receive Perfect Images.</h2>
<p>A streamlined intake-to-delivery workflow built for volume — no location visit required from your side for standard product shoots.</p>
</div>
<div className="steps-grid">
<div className="step rv"><div className="step-num">01</div><h4>SKU List &amp; Brief</h4><p>Share your product list, target marketplaces, required angles, and any styling notes. We generate a confirmed shot list and quote within 24 hours — no ambiguity, no scope creep.</p></div>
<div className="step rv2"><div className="step-num">02</div><h4>Ship or Drop Off</h4><p>Ship products to our studio or drop them off in Indore. We handle intake, cataloguing, and product care throughout the shoot. Products are returned insured and in original condition.</p></div>
<div className="step rv3"><div className="step-num">03</div><h4>Shoot &amp; Retouch</h4><p>Products shot in batches by category for lighting efficiency. Each SKU receives full retouching — background removal, colour correction, and blemish clean-up — before being flagged for quality check.</p></div>
<div className="step rv3"><div className="step-num">04</div><h4>Deliver &amp; Upload</h4><p>Finals delivered via Google Drive organised by SKU, angle, and platform format. We can also upload directly to your Shopify, WooCommerce, or Amazon Seller Central account to save your team time.</p></div>
</div>
</div>
</section>
      <section>
<div className="wrap">
<div className="sec-h rv"><h2>Frequently Asked Questions</h2></div>
<div className="faq-2col">
<div>
<div className="fi"><button className="fi-q">What is your per-SKU pricing?<div className="fi-icon">+</div></button><div className="fi-a">Pricing starts at ₹199 per SKU for white-background shoots (3 angles), scaling down per unit for larger batches. Lifestyle photography is priced separately per setup. 360° spin is ₹799–₹1,499 per SKU. We provide a full itemised quote within 24 hours of receiving your SKU list and requirements.</div></div>
<div className="fi"><button className="fi-q">How many SKUs can you shoot in a day?<div className="fi-icon">+</div></button><div className="fi-a">We can shoot 300–500 simple product SKUs (white background, 3–5 angles) in a single studio day with our batch shooting workflow. For jewellery, electronics, or complex styling setups, the rate is 50–150 SKUs per day. We quote realistic timelines at briefing rather than overpromising.</div></div>
<div className="fi"><button className="fi-q">Do you meet Amazon's image requirements?<div className="fi-icon">+</div></button><div className="fi-a">Yes — all main product images are delivered at 2000×2000px minimum on pure white backgrounds (RGB 255,255,255) with the product occupying 85%+ of the frame, meeting Amazon's main image policy. Additional marketplace formats (Flipkart, Myntra, Meesho, Nykaa) are included at no extra charge.</div></div>
<div className="fi"><button className="fi-q">Can you shoot products with multiple colour variants?<div className="fi-icon">+</div></button><div className="fi-a">Yes — colour variants are shot under identical lighting conditions with consistent positioning so product pages show colour differences accurately. If only the colour changes (not the shape or size), variant shoots are priced at a reduced rate since setup time is significantly lower than a fresh SKU.</div></div>
</div>
<div>
<div className="fi"><button className="fi-q">How do we send our products to you?<div className="fi-icon">+</div></button><div className="fi-a">Products can be couriered to our Indore studio (we share the address post-booking) or dropped off in person. We acknowledge receipt of every item and provide a digital intake log. All products are stored securely and returned via tracked courier at the end of the shoot at cost.</div></div>
<div className="fi"><button className="fi-q">Do you provide ghost mannequin photography?<div className="fi-icon">+</div></button><div className="fi-a">Yes — ghost mannequin (invisible mannequin) photography is available for apparel, giving garments a 3D filled appearance without a visible model. This is particularly effective for inner garments, outerwear, and formal wear on fashion marketplace listings.</div></div>
<div className="fi"><button className="fi-q">What file formats are delivered?<div className="fi-icon">+</div></button><div className="fi-a">All finals are delivered as high-resolution JPEG files. For white-background shots requiring transparency, PNG files with transparent backgrounds are included. RAW files are available on request for an additional charge. Images are named by SKU code for easy bulk import into your inventory system.</div></div>
<div className="fi"><button className="fi-q">Can you upload images directly to our store?<div className="fi-icon">+</div></button><div className="fi-a">Yes — we offer a direct upload service for Shopify, WooCommerce, and Amazon Seller Central. Images are mapped to your existing product listings using SKU codes and uploaded in bulk. This service saves your team 10–20 hours per batch and is included in our managed product photography packages.</div></div>
</div>
</div>
</div>
</section>
      <div className="wrap" style={{ padding: '40px 28px', borderTop: '1px solid var(--bdr)' }}>
<div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--s)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '16px' }}>Related Services</div>
<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
<a href="/services/hd-photography" className="rel-link">📸 HD Photography</a>
<a href="/services/ecommerce-development" className="rel-link">🛒 E-Commerce Dev</a>
<a href="/services/shopping-ads" className="rel-link">🛍️ Shopping Ads</a>
<a href="/services/ai-ad-creatives" className="rel-link">🤖 AI Ad Creatives</a>
<a href="/services/drone-video" className="rel-link">🚁 Drone Video</a>
</div>
</div>
      <section className="cta-section">
<div className="wrap">
<h2>Your Products Deserve Images<br />That Actually Convert.</h2>
<p>Send us your SKU list and target marketplaces — we'll send a full quote and sample shoot plan within 24 hours.</p>
<div className="cta-btns">
<a href="/contact" className="btn btn-ac">📦 Get a SKU Quote</a>
<a href="https://wa.me/919407000101" className="btn btn-wa">💬 WhatsApp Now</a>
</div>
</div>
</section>
      <PageScript id="services-product-photography-0" code={js0} />
    </>
  )
}
