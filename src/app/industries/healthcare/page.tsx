/* eslint-disable */
// src/app/industries/healthcare/page.tsx — generated from industry-healthcare.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "Digital Marketing for Hospitals & Healthcare Clinics India",
  description: "SEO, Google Ads, WhatsApp automation and patient acquisition for hospitals, clinics, doctors and wellness centres in India. Click Decoded drives patient.",
  alternates: { canonical: "/industries/healthcare" },
  openGraph: {
    title: "Digital Marketing for Hospitals & Healthcare Clinics | Click Decoded",
    description: "More patient appointments through SEO, Google Ads, WhatsApp automation and reputation management. India's healthcare digital marketing specialists.",
    url: "/industries/healthcare",
    type: "website",
    images: ["https://clickdecoded.com/og-healthcare.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing for Healthcare | Click Decoded",
    description: "More patient appointments through SEO, Google Ads and WhatsApp automation.",
  },
}

const css = `
:root{--n:#2A4573;--n2:#1e3460;--n-dark:#0f1e38;--o:#EE7E1A;--o2:#d46e12;--body:#1E293B;--m:#475569;--s:#64748b;--bg:#F4F7FC;--bdr:#E2E8F0;--gr:#25D366;--ac:#4CAF50;--ac-rgb:76,175,80;}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;overflow-x:hidden;}
body{font-family:'Inter',system-ui,sans-serif;color:var(--body);background:#fff;-webkit-font-smoothing:antialiased;}
a{text-decoration:none;color:inherit;}img,svg{display:block;}ul{list-style:none;}button{font-family:inherit;cursor:pointer;}
.wrap{max-width:1200px;margin:0 auto;padding:0 28px;}
section{padding:80px 0;}
h1,h2,h3,h4{font-weight:800;line-height:1.1;letter-spacing:-.025em;color:var(--n);}
.btn{display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:10px;font-weight:700;font-size:14px;border:none;transition:all .18s;white-space:nowrap;cursor:pointer;}
.btn-o{background:var(--o);color:#fff;box-shadow:0 4px 18px rgba(238,126,26,.3);}.btn-o:hover{background:var(--o2);transform:translateY(-2px);}
.btn-ac{background:var(--ac);color:#fff;box-shadow:0 4px 18px rgba(var(--ac-rgb),.3);}.btn-ac:hover{opacity:.9;transform:translateY(-2px);}
.btn-ghost{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.35);}.btn-ghost:hover{background:rgba(255,255,255,.08);}
.btn-n{background:var(--n);color:#fff;}.btn-n:hover{background:var(--n2);transform:translateY(-2px);}
.btn-wa{background:var(--gr);color:#fff;}.btn-wa:hover{background:#1ebe59;transform:translateY(-2px);}
.btn-sm{padding:10px 20px;font-size:13px;}
/* TOPBAR */
.topbar{background:var(--n-dark);height:40px;display:flex;align-items:center;}
.topbar-inner{max-width:1200px;margin:0 auto;padding:0 28px;display:flex;justify-content:space-between;align-items:center;width:100%;}
.topbar-left{display:flex;gap:20px;}.topbar-left a{font-size:12px;color:rgba(255,255,255,.6);display:flex;align-items:center;gap:5px;}
.topbar-right{display:flex;gap:8px;}
.tb-btn{display:inline-flex;align-items:center;gap:6px;padding:5px 12px;border-radius:6px;font-size:11.5px;font-weight:700;transition:.15s;}
.tb-call{background:rgba(238,126,26,.15);color:var(--o);border:1px solid rgba(238,126,26,.25);}.tb-wa{background:rgba(37,211,102,.15);color:#25D366;border:1px solid rgba(37,211,102,.25);}
.tb-call:hover{background:var(--o);color:#fff;}.tb-wa:hover{background:#25D366;color:#fff;}
/* NAV */
#hdr{background:rgba(255,255,255,.97);backdrop-filter:blur(14px);border-bottom:1px solid var(--bdr);transition:box-shadow .2s;}
#hdr.up{box-shadow:0 4px 32px rgba(13,27,42,.09);}
.nav{display:flex;align-items:center;justify-content:space-between;height:70px;gap:16px;}
.dmenu{display:flex;align-items:center;gap:2px;}.dmenu>li{position:relative;}
.dmenu>li>a{display:flex;align-items:center;gap:5px;padding:9px 12px;font-size:13.5px;font-weight:600;color:var(--n);border-radius:8px;transition:.15s;}.dmenu>li>a:hover{background:var(--bg);}
.dcar{width:10px;height:10px;opacity:.5;transition:transform .18s;flex-shrink:0;}.dmenu>li:hover .dcar{transform:rotate(180deg);}
.mega{position:absolute;top:calc(100% + 10px);left:50%;transform:translateX(-50%) translateY(10px);background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:26px;box-shadow:0 24px 64px rgba(13,27,42,.14);opacity:0;visibility:hidden;pointer-events:none;transition:opacity .18s,transform .18s;}
.mega.wide{width:940px;display:grid;grid-template-columns:repeat(5,1fr);gap:22px;}.mega.slim{width:296px;left:auto;right:0;transform:translateY(10px);}
.dmenu>li:hover .mega{opacity:1;visibility:visible;pointer-events:all;transform:translateX(-50%) translateY(0);}.dmenu>li:hover .mega.slim{transform:translateY(0);}
.dmenu>li::after{content:'';position:absolute;top:100%;left:-40px;right:-40px;height:14px;}
.mc h5{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--n);margin-bottom:11px;}
.mc a{display:block;position:relative;padding:5px 0 5px 11px;font-size:13px;font-weight:500;color:var(--body);transition:color .14s,padding-left .14s;}
.mc a::before{content:'';position:absolute;left:0;top:50%;transform:translateY(-50%);width:2px;height:0;border-radius:1px;background:var(--o);transition:height .15s cubic-bezier(.22,1,.36,1);}
.mc a:hover{color:var(--o);padding-left:14px;}.mc a:hover::before{height:13px;}
.mega.slim a{display:block;padding:9px 12px;font-size:13px;font-weight:500;color:var(--body);border-radius:8px;transition:.15s;}.mega.slim a:hover{background:var(--bg);color:var(--o);}
.mega.slim a small{display:block;font-size:11px;color:var(--s);font-weight:400;margin-top:1px;}
.navcta{display:flex;align-items:center;gap:10px;}
.hb{background:none;border:none;display:none;flex-direction:column;gap:5px;padding:4px;cursor:pointer;}.hb span{display:block;width:22px;height:2px;background:var(--n);border-radius:1px;transition:.2s;}
.mnav{display:none;position:fixed;inset:0;background:#fff;z-index:200;overflow-y:auto;padding:24px 22px 40px;}.mnav.on{display:block;}
.ma{border-bottom:1px solid var(--bdr);}.ma>button{width:100%;text-align:left;background:none;border:none;padding:15px 0;font-size:15px;font-weight:600;color:var(--n);display:flex;justify-content:space-between;}
.ms{display:none;padding:0 0 16px;}.ma.on .ms{display:block;}.ms a{display:block;padding:7px 0;font-size:14px;color:var(--m);}.ms h6{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--n);margin:12px 0 4px;}
/* BREADCRUMB */
.breadcrumb{background:var(--bg);border-bottom:1px solid var(--bdr);padding:12px 0;}
.bc-list{display:flex;align-items:center;gap:8px;font-size:12.5px;color:var(--s);list-style:none;padding:0;margin:0;}
.bc-list a{color:var(--m);font-weight:500;transition:.14s;}.bc-list a:hover{color:var(--n);}
.bc-sep{opacity:.4;}
/* HERO */
.hero{background:linear-gradient(155deg,#0f1e38 0%,#162847 55%,#0f1e38 100%);padding:88px 0 80px;position:relative;overflow:hidden;}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 60% at 70% 30%,rgba(76,175,80,.15) 0%,transparent 65%),radial-gradient(ellipse 35% 40% at 5% 80%,rgba(76,175,80,.06) 0%,transparent 60%);pointer-events:none;}
.hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;position:relative;z-index:2;}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 16px;background:rgba(76,175,80,.12);border:1px solid rgba(76,175,80,.3);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#81c784;margin-bottom:20px;}
.hero h1{font-size:clamp(28px,3.8vw,48px);font-weight:900;color:#fff;line-height:1.06;letter-spacing:-.03em;margin-bottom:20px;}
.hero h1 em{font-style:normal;background:linear-gradient(135deg,#a5d6a7,#4caf50);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-desc{font-size:17px;color:rgba(255,255,255,.62);line-height:1.7;margin-bottom:32px;max-width:460px;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:36px;}
.hero-proof{display:flex;gap:24px;flex-wrap:wrap;}
.proof-item{font-size:12.5px;color:rgba(255,255,255,.45);font-weight:500;display:flex;align-items:center;gap:5px;}
.proof-item strong{color:rgba(255,255,255,.8);}
/* HEALTHCARE DASHBOARD MOCK */
.hc-mock{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:20px;overflow:hidden;backdrop-filter:blur(10px);}
.hc-mock-header{background:rgba(255,255,255,.05);border-bottom:1px solid rgba(255,255,255,.08);padding:14px 18px;display:flex;align-items:center;justify-content:space-between;}
.hc-mock-title{font-size:12px;font-weight:700;color:rgba(255,255,255,.7);letter-spacing:.04em;}
.hc-live{display:flex;align-items:center;gap:6px;font-size:11px;color:#4caf50;font-weight:600;}
.hc-live::before{content:'';width:7px;height:7px;border-radius:50%;background:#4caf50;box-shadow:0 0 0 3px rgba(76,175,80,.2);animation:pulse 2s infinite;}
@keyframes pulse{0%,100%{box-shadow:0 0 0 3px rgba(76,175,80,.2);}50%{box-shadow:0 0 0 6px rgba(76,175,80,.05);}}
.hc-kpis{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:rgba(255,255,255,.06);}
.hc-kpi{background:#0f1e38;padding:16px 18px;}
.hc-kpi-label{font-size:10.5px;font-weight:600;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:.08em;margin-bottom:6px;}
.hc-kpi-val{font-size:24px;font-weight:900;color:#fff;letter-spacing:-.02em;line-height:1;}
.hc-kpi-val.green{color:#4caf50;}
.hc-kpi-delta{font-size:11px;margin-top:4px;font-weight:600;}
.hc-kpi-delta.up{color:#4caf50;}.hc-kpi-delta.down{color:#ef5350;}
.hc-reviews{padding:16px 18px;border-top:1px solid rgba(255,255,255,.06);}
.hc-reviews-label{font-size:10.5px;font-weight:600;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px;}
.hc-stars{display:flex;align-items:center;gap:8px;}
.hc-star-row{display:flex;gap:3px;font-size:16px;}
.hc-rating{font-size:22px;font-weight:900;color:#fff;}
.hc-reviews-count{font-size:11.5px;color:rgba(255,255,255,.4);}
.hc-whatsapp{padding:14px 18px;background:rgba(37,211,102,.06);border-top:1px solid rgba(37,211,102,.1);display:flex;align-items:center;justify-content:space-between;}
.hc-wa-label{font-size:12px;color:rgba(255,255,255,.5);font-weight:500;}
.hc-wa-val{font-size:16px;font-weight:800;color:#25d366;}
/* RESULTS STRIP */
.results-strip{background:var(--n);padding:40px 0;}
.res-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;}
.res-stat{text-align:center;padding:0 20px;border-right:1px solid rgba(255,255,255,.1);}
.res-stat:last-child{border-right:none;}
.res-num{font-size:38px;font-weight:900;color:var(--ac);letter-spacing:-.03em;line-height:1;}
.res-lbl{font-size:11.5px;color:rgba(255,255,255,.5);margin-top:6px;text-transform:uppercase;letter-spacing:.08em;}
/* PAIN POINTS */
.pain-section{background:var(--bg);}
.section-head{text-align:center;margin-bottom:48px;}
.section-head h2{font-size:clamp(26px,3vw,38px);margin-bottom:12px;}
.section-head p{font-size:16px;color:var(--m);max-width:560px;margin:0 auto;line-height:1.6;}
.pain-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.pain-card{background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:28px;transition:.2s;}
.pain-card:hover{box-shadow:0 12px 40px rgba(var(--ac-rgb),.08);transform:translateY(-3px);}
.pain-icon{font-size:32px;margin-bottom:14px;}
.pain-card h3{font-size:16px;margin-bottom:8px;color:var(--n);}
.pain-card p{font-size:13.5px;color:var(--m);line-height:1.65;}
/* SERVICES */
.services-section{}
.svc-grid{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:900px;margin:0 auto;}
.svc-pill a{display:inline-flex;align-items:center;gap:8px;padding:12px 20px;border-radius:12px;border:1.5px solid var(--bdr);font-size:14px;font-weight:600;color:var(--n);background:#fff;transition:.18s;}
.svc-pill a:hover{border-color:var(--ac);color:var(--ac);background:rgba(var(--ac-rgb),.04);transform:translateY(-2px);box-shadow:0 6px 20px rgba(var(--ac-rgb),.1);}
.svc-note{text-align:center;margin-top:24px;font-size:12.5px;color:var(--s);padding:12px 20px;background:rgba(var(--ac-rgb),.06);border:1px solid rgba(var(--ac-rgb),.15);border-radius:10px;max-width:600px;margin-left:auto;margin-right:auto;}
/* PROCESS */
.process-section{background:var(--n-dark);}
.process-section .section-head h2{color:#fff;}
.process-section .section-head p{color:rgba(255,255,255,.5);}
.process-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative;}
.process-steps::before{content:'';position:absolute;top:36px;left:12%;right:12%;height:1px;background:linear-gradient(90deg,transparent,rgba(var(--ac-rgb),.3),transparent);}
.step{text-align:center;padding:0 16px;position:relative;}
.step-num{width:72px;height:72px;border-radius:50%;background:rgba(var(--ac-rgb),.1);border:2px solid rgba(var(--ac-rgb),.25);display:flex;align-items:center;justify-content:center;margin:0 auto 20px;font-size:24px;font-weight:900;color:var(--ac);position:relative;z-index:1;}
.step h4{font-size:15px;font-weight:700;color:#fff;margin-bottom:8px;}
.step p{font-size:13px;color:rgba(255,255,255,.45);line-height:1.6;}
/* CASE STUDY */
.case-section{background:var(--bg);}
.case-card{background:#fff;border:1px solid var(--bdr);border-radius:24px;overflow:hidden;display:grid;grid-template-columns:1fr 1fr;}
.case-left{padding:48px;background:linear-gradient(135deg,rgba(var(--ac-rgb),.06),rgba(var(--ac-rgb),.02));}
.case-tag{display:inline-flex;align-items:center;gap:6px;background:rgba(var(--ac-rgb),.1);color:var(--ac);font-size:11px;font-weight:700;padding:5px 12px;border-radius:99px;text-transform:uppercase;letter-spacing:.08em;margin-bottom:16px;}
.case-left h3{font-size:22px;margin-bottom:12px;color:var(--n);}
.case-left p{font-size:14px;color:var(--m);line-height:1.7;margin-bottom:24px;}
.case-challenge{background:rgba(var(--ac-rgb),.06);border-left:3px solid var(--ac);padding:14px 18px;border-radius:0 10px 10px 0;font-size:13px;color:var(--m);line-height:1.6;}
.case-right{padding:48px;background:var(--n-dark);display:flex;flex-direction:column;justify-content:center;}
.case-right h4{font-size:13px;font-weight:700;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:.1em;margin-bottom:28px;}
.case-metrics{display:flex;flex-direction:column;gap:20px;}
.case-metric{display:flex;align-items:center;gap:16px;}
.cm-num{font-size:38px;font-weight:900;color:var(--ac);letter-spacing:-.03em;line-height:1;min-width:90px;}
.cm-label{font-size:13.5px;color:rgba(255,255,255,.55);line-height:1.4;}
.cm-label strong{display:block;color:rgba(255,255,255,.85);font-weight:600;margin-bottom:2px;}
/* WHY US */
.why-section{background:#fff;}
.why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.why-card{background:var(--bg);border:1px solid rgba(var(--ac-rgb),.1);border-radius:18px;padding:28px;transition:.2s;}
.why-card:hover{box-shadow:0 12px 40px rgba(var(--ac-rgb),.1);transform:translateY(-3px);border-color:rgba(var(--ac-rgb),.25);}
.why-num{font-size:38px;font-weight:900;color:rgba(var(--ac-rgb),.15);letter-spacing:-.04em;margin-bottom:10px;}
.why-card h3{font-size:16px;margin-bottom:8px;color:var(--n);}
.why-card p{font-size:13.5px;color:var(--m);line-height:1.6;}
/* FAQ */
.faq-section{background:var(--bg);}
.faq-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;max-width:960px;margin:0 auto;}
.faq-item{background:#fff;border:1px solid var(--bdr);border-radius:14px;overflow:hidden;}
.faq-q{width:100%;background:none;border:none;padding:18px 20px;text-align:left;font-size:14px;font-weight:600;color:var(--n);display:flex;justify-content:space-between;align-items:center;gap:12px;cursor:pointer;transition:.15s;}
.faq-q:hover{color:var(--ac);}
.faq-q svg{flex-shrink:0;transition:transform .2s;color:var(--s);}
.faq-item.open .faq-q svg{transform:rotate(180deg);color:var(--ac);}
.faq-item.open .faq-q{color:var(--ac);}
.faq-a{display:none;padding:0 20px 18px;font-size:13.5px;color:var(--m);line-height:1.7;}
.faq-item.open .faq-a{display:block;}
/* RELATED */
.related-section{padding:40px 0;border-top:1px solid var(--bdr);}
.related-section h4{font-size:12px;font-weight:700;color:var(--s);text-transform:uppercase;letter-spacing:.1em;margin-bottom:14px;}
.related-pills{display:flex;flex-wrap:wrap;gap:10px;}
.rel-pill{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;border-radius:99px;border:1.5px solid var(--bdr);font-size:13px;font-weight:500;color:var(--m);transition:.15s;}
.rel-pill:hover{border-color:var(--ac);color:var(--ac);}
/* CTA STRIP */
.cta-strip{background:linear-gradient(135deg,var(--n) 0%,var(--n2) 100%);padding:80px 0;text-align:center;position:relative;overflow:hidden;}
.cta-strip::before{content:'';position:absolute;top:-40%;left:-10%;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(var(--ac-rgb),.08),transparent 70%);pointer-events:none;}
.cta-strip h2{font-size:clamp(26px,3.5vw,42px);color:#fff;margin-bottom:16px;position:relative;}
.cta-strip p{font-size:16px;color:rgba(255,255,255,.6);max-width:500px;margin:0 auto 32px;line-height:1.6;position:relative;}
.cta-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;position:relative;}
/* FOOTER */
footer{background:var(--n-dark);padding:64px 0 0;}
.footer-main{margin-bottom:40px;}
.fg{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:40px;}
.fb-desc{font-size:13.5px;color:rgba(255,255,255,.4);line-height:1.7;margin:16px 0 20px;}
.socials{display:flex;gap:10px;}.socials a{width:34px;height:34px;border-radius:8px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:rgba(255,255,255,.5);transition:.15s;}.socials a:hover{background:var(--o);color:#fff;border-color:var(--o);}
footer h4{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.35);margin-bottom:16px;}
.fl{display:flex;flex-direction:column;gap:8px;}.fl a,.fc a{font-size:13.5px;color:rgba(255,255,255,.5);transition:.15s;}.fl a:hover,.fc a:hover{color:#fff;}
.fc{display:flex;flex-direction:column;gap:10px;}
.footer-bottom{border-top:1px solid rgba(255,255,255,.07);padding:20px 0;display:flex;justify-content:space-between;align-items:center;font-size:12px;color:rgba(255,255,255,.3);flex-wrap:wrap;gap:8px;}
.footer-bottom a{color:rgba(255,255,255,.3);}.footer-bottom a:hover{color:rgba(255,255,255,.6);}
.footer-areas{padding:20px 0;border-top:1px solid rgba(255,255,255,.06);font-size:12px;color:rgba(255,255,255,.25);display:flex;gap:8px;flex-wrap:wrap;align-items:center;}
.footer-areas b{color:rgba(255,255,255,.4);}.footer-areas a{color:rgba(255,255,255,.25);transition:.15s;}.footer-areas a:hover{color:rgba(255,255,255,.6);}
/* RESPONSIVE */
@media(max-width:960px){
  .hero-grid{grid-template-columns:1fr;}.hc-mock{display:none;}
  .pain-grid,.why-grid{grid-template-columns:repeat(2,1fr);}
  .faq-grid{grid-template-columns:1fr;}
  .fg{grid-template-columns:1fr 1fr;}
  .process-steps{grid-template-columns:repeat(2,1fr);gap:32px;}
  .process-steps::before{display:none;}
  .case-card{grid-template-columns:1fr;}
}
@media(max-width:600px){
  .pain-grid,.why-grid{grid-template-columns:1fr;}
  .res-grid{grid-template-columns:repeat(2,1fr);gap:20px 0;}
  .form-row{grid-template-columns:1fr;}
  .fg{grid-template-columns:1fr;}
  .process-steps{grid-template-columns:1fr;}
}
@media(max-width:900px){.hb{display:flex;}.dmenu,.navcta .btn-o{display:none;}}
`

const ld0 = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.clickdecoded.com/industries/healthcare#webpage",
      "url": "https://www.clickdecoded.com/industries/healthcare",
      "name": "Digital Marketing for Hospitals & Healthcare Clinics India",
      "description": "SEO, Google Ads, and patient acquisition for hospitals, clinics, doctors, and wellness centres in India.",
      "isPartOf": {
        "@id": "#website"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://clickdecoded.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Industries",
            "item": "https://clickdecoded.com/industries"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Healthcare",
            "item": "https://www.clickdecoded.com/industries/healthcare"
          }
        ]
      }
    },
    {
      "@type": "Service",
      "name": "Healthcare Digital Marketing",
      "description": "Specialised digital marketing for hospitals, clinics, and healthcare providers in India — SEO, Google Ads, WhatsApp automation, and reputation management.",
      "provider": {
        "@type": "Organization",
        "name": "Click Decoded",
        "url": "https://clickdecoded.com"
      },
      "areaServed": "India",
      "audience": {
        "@type": "Audience",
        "audienceType": "Hospitals, Clinics, Doctors, Diagnostic Centres"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is digital marketing for healthcare allowed in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, with restrictions. The Indian Medical Council guidelines prohibit certain types of medical advertising. We build compliant campaigns that focus on information and patient education, not unverified claims."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help a single-doctor clinic as well as a hospital?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We work with solo practitioners, multi-specialty clinics, diagnostic centres, and large hospitals — each gets a strategy scaled to their size and patient volume goals."
          }
        },
        {
          "@type": "Question",
          "name": "How do you handle patient privacy in digital marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All forms and chatbots are GDPR-compatible. We never use patient data for advertising. All leads are handled securely and never shared with third parties."
          }
        },
        {
          "@type": "Question",
          "name": "How long to see an increase in appointment bookings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Google Ads typically shows results in 2-3 weeks. GMB optimisation and SEO show appointment increases within 30-60 days depending on competition."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How Digital Marketing for Hospitals & Healthcare Clinics India Works — Our Process",
      "description": "SEO, Google Ads, WhatsApp automation and patient acquisition for hospitals, clinics, doctors and wellness centres in India. Click Decoded drives patient enquiries and appointment bookings.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Free Industry Audit",
          "text": "We analyse your website, GMB listing, reviews, local competition, and ad spend gaps. No charge, no obligation."
        },
        {
          "@type": "HowToStep",
          "name": "Custom Strategy",
          "text": "We build a healthcare-specific plan — the channels, keywords, and patient journey touchpoints that actually drive bookings."
        },
        {
          "@type": "HowToStep",
          "name": "Execution & Setup",
          "text": "SEO groundwork, ad campaigns, WhatsApp flows, and reputation systems go live within 5–7 business days."
        },
        {
          "@type": "HowToStep",
          "name": "Monthly Reporting",
          "text": "Every month: plain-English reports showing enquiries, rankings, ad performance, and what we're doing next."
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
          "name": "Digital Marketing for Healthcare",
          "item": "https://www.clickdecoded.com/industries/healthcare"
        }
      ]
    }
  ]
}`

const js0 = `(function(){
const hdr=document.getElementById('hdr');
if(hdr)window.addEventListener('scroll',()=>hdr.classList.toggle('up',scrollY>40),{passive:true});
const hb=document.getElementById('hb'),mn=document.getElementById('mnav'),mc=document.getElementById('mnav-close');
function openMnav(){mn&&mn.classList.add('on');document.body.style.overflow='hidden';}
function closeMnav(){mn&&mn.classList.remove('on');document.body.style.overflow='';}
if(hb)hb.addEventListener('click',openMnav);
if(mc)mc.addEventListener('click',closeMnav);
document.querySelectorAll('.ma>button').forEach(b=>{
  b.addEventListener('click',()=>{const p=b.parentElement,o=p.classList.contains('on');document.querySelectorAll('.ma').forEach(x=>x.classList.remove('on'));if(!o)p.classList.add('on');});
});
document.querySelectorAll('.faq-q').forEach(b=>b.addEventListener('click',()=>b.parentElement.classList.toggle('open')));
})();`

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld0 }} />
      <nav className="breadcrumb" aria-label="Breadcrumb">
<div className="wrap">
<ol className="bc-list">
<li><a href="/">Home</a></li>
<li className="bc-sep">›</li>
<li><a href="/#industries">Industries</a></li>
<li className="bc-sep">›</li>
<li aria-current="page">Healthcare</li>
</ol>
</div>
</nav>
      <section className="hero">
<div className="wrap">
<div className="hero-grid">
<div>
<div className="hero-eyebrow">🏥 Healthcare · Clinics · Hospitals · Doctors</div>
<h1>More <em>Patient Appointments</em><br />for Hospitals, Clinics &amp; Doctors</h1>
<p className="hero-desc">Patients in India Google symptoms, doctors, and hospitals before booking. We ensure your clinic ranks first — and converts that traffic into booked appointments, not just clicks.</p>
<div className="hero-btns">
<a href="/contact" className="btn btn-ac">🏥 Get Free Healthcare Audit</a>
<a href="https://wa.me/919407000101" className="btn btn-ghost">💬 WhatsApp Us</a>
</div>
<div className="hero-proof">
<span className="proof-item"><strong>MCI-Compliant</strong> Campaigns</span>
<span className="proof-item"><strong>Patient Privacy</strong> First</span>
<span className="proof-item"><strong>Results</strong> in 30–60 Days</span>
</div>
</div>

<div className="hc-mock">
<div className="hc-mock-header">
<span className="hc-mock-title">Patient Acquisition Dashboard</span>
<span className="hc-live">Live</span>
</div>
<div className="hc-kpis">
<div className="hc-kpi">
<div className="hc-kpi-label">GMB Profile Views</div>
<div className="hc-kpi-val green">2,847</div>
<div className="hc-kpi-delta up">↑ 156% this month</div>
</div>
<div className="hc-kpi">
<div className="hc-kpi-label">Appointments Booked</div>
<div className="hc-kpi-val">124</div>
<div className="hc-kpi-delta up">↑ 3.2× vs last month</div>
</div>
<div className="hc-kpi">
<div className="hc-kpi-label">Google Maps Rank</div>
<div className="hc-kpi-val green">#1</div>
<div className="hc-kpi-delta up">↑ from #9 position</div>
</div>
<div className="hc-kpi">
<div className="hc-kpi-label">Organic Traffic</div>
<div className="hc-kpi-val">4,210</div>
<div className="hc-kpi-delta up">↑ 88% in 60 days</div>
</div>
</div>
<div className="hc-reviews">
<div className="hc-reviews-label">Google Reviews</div>
<div className="hc-stars">
<div className="hc-star-row">⭐⭐⭐⭐⭐</div>
<div className="hc-rating">4.9</div>
<div className="hc-reviews-count">312 patient reviews</div>
</div>
</div>
<div className="hc-whatsapp">
<span className="hc-wa-label">💬 WhatsApp Enquiries This Week</span>
<span className="hc-wa-val">89 new</span>
</div>
</div>
</div>
</div>
</section>
      <div className="results-strip">
<div className="wrap res-grid">
<div className="res-stat"><div className="res-num">5×</div><div className="res-lbl">More Patient Enquiries</div></div>
<div className="res-stat"><div className="res-num">#1</div><div className="res-lbl">Local Rankings Delivered</div></div>
<div className="res-stat"><div className="res-num">98%</div><div className="res-lbl">WhatsApp Open Rate</div></div>
<div className="res-stat"><div className="res-num">₹25K</div><div className="res-lbl">Starting / Month</div></div>
</div>
</div>
      <section className="pain-section">
<div className="wrap">
<div className="section-head">
<h2>Challenges We <em style={{ fontStyle: 'normal', color: 'var(--ac)' }}>Solve</em></h2>
<p>We've worked with enough healthcare businesses to know exactly what's holding back patient acquisition.</p>
</div>
<div className="pain-grid">
<div className="pain-card">
<div className="pain-icon">🔍</div>
<h3>Patients Can't Find You Online</h3>
<p>Most clinics are invisible on Google for searches like "cardiologist in Bhopal" or "best paediatrician near me". Local SEO and GMB optimisation fix this within 30–60 days.</p>
</div>
<div className="pain-card">
<div className="pain-icon">📋</div>
<h3>No Online Appointment System</h3>
<p>Patients want instant booking. A phone number alone loses 40% of digital enquiries. We add WhatsApp booking flows and online appointment links that work 24/7.</p>
</div>
<div className="pain-card">
<div className="pain-icon">⭐</div>
<h3>Poor or Few Online Reviews</h3>
<p>Healthcare decisions are review-driven. A clinic with 3.2 stars loses to a competitor with 4.7 stars every single time. We build a systematic review generation process.</p>
</div>
<div className="pain-card">
<div className="pain-icon">🌐</div>
<h3>Outdated or Slow Website</h3>
<p>Trust in healthcare starts online. An outdated or slow website signals the same about your facility. We build fast, credible, mobile-first healthcare websites patients trust.</p>
</div>
<div className="pain-card">
<div className="pain-icon">📣</div>
<h3>No Patient Re-Engagement</h3>
<p>Most clinics have hundreds of past patients they never communicate with. WhatsApp and email campaigns for health tips, reminders, and seasonal check-up offers bring them back.</p>
</div>
<div className="pain-card">
<div className="pain-icon">🤖</div>
<h3>Enquiries Go Unanswered After Hours</h3>
<p>A patient searching at 10 PM who doesn't get a reply books elsewhere. Our WhatsApp chatbots instantly qualify, capture, and respond to enquiries around the clock.</p>
</div>
</div>
</div>
</section>
      <section className="services-section">
<div className="wrap">
<div className="section-head">
<h2>Services for <em style={{ fontStyle: 'normal', color: 'var(--ac)' }}>Healthcare</em></h2>
<p>Every service is tailored to the specific patient behaviour, compliance requirements, and competition in the healthcare sector.</p>
</div>
<div className="svc-grid">
<div className="svc-pill"><a href="/services/seo">🔍 SEO Services</a></div>
<div className="svc-pill"><a href="/services/local-seo">📍 Local SEO</a></div>
<div className="svc-pill"><a href="/services/gmb-marketing">📍 Google My Business</a></div>
<div className="svc-pill"><a href="/services/google-ads">💰 Google Ads</a></div>
<div className="svc-pill"><a href="/services/meta-ads">📱 Meta Ads</a></div>
<div className="svc-pill"><a href="/services/whatsapp-automation">💬 WhatsApp Automation</a></div>
<div className="svc-pill"><a href="/services/ai-chatbot-development">🤖 AI Chatbot</a></div>
<div className="svc-pill"><a href="/services/web-development">🌐 Website Development</a></div>
<div className="svc-pill"><a href="/services/gmb-marketing">⭐ Reputation Management</a></div>
<div className="svc-pill"><a href="/services/email-marketing">✉️ Email Marketing</a></div>
<div className="svc-pill"><a href="/services/ai-search-optimization">🧠 GEO / AI Search</a></div>
<div className="svc-pill"><a href="/services/virtual-tour">🏠 Virtual Tour</a></div>
</div>
<p className="svc-note">⚕️ All campaigns are structured to comply with Indian Medical Council (MCI) advertising guidelines.</p>
</div>
</section>
      <section className="process-section">
<div className="wrap">
<div className="section-head">
<h2>How We Work With You</h2>
<p>A simple, transparent process from audit to results — no jargon, no surprises.</p>
</div>
<div className="process-steps">
<div className="step">
<div className="step-num">1</div>
<h4>Free Industry Audit</h4>
<p>We analyse your website, GMB listing, reviews, local competition, and ad spend gaps. No charge, no obligation.</p>
</div>
<div className="step">
<div className="step-num">2</div>
<h4>Custom Strategy</h4>
<p>We build a healthcare-specific plan — the channels, keywords, and patient journey touchpoints that actually drive bookings.</p>
</div>
<div className="step">
<div className="step-num">3</div>
<h4>Execution &amp; Setup</h4>
<p>SEO groundwork, ad campaigns, WhatsApp flows, and reputation systems go live within 5–7 business days.</p>
</div>
<div className="step">
<div className="step-num">4</div>
<h4>Monthly Reporting</h4>
<p>Every month: plain-English reports showing enquiries, rankings, ad performance, and what we're doing next.</p>
</div>
</div>
</div>
</section>
      <section className="case-section">
<div className="wrap">
<div className="section-head">
<h2>Healthcare <em style={{ fontStyle: 'normal', color: 'var(--ac)' }}>Results</em> We've Delivered</h2>
<p>Real numbers from a real healthcare client — not projections.</p>
</div>
<div className="case-card">
<div className="case-left">
<div className="case-tag">🏥 Case Study</div>
<h3>Multi-Specialty Clinic, Bhopal</h3>
<p>A 6-doctor multi-specialty clinic was spending ₹40,000/month on Google Ads with no tracking, no GMB optimisation, and a website last updated in 2019. Appointment bookings came almost entirely from walk-ins and word of mouth.</p>
<div className="case-challenge">
<strong style={{ display: 'block', marginBottom: '4px', color: 'var(--n)' }}>The Challenge</strong>
          Zero online appointment pipeline. Competitors ranking above them for every key local search. No review management strategy.
        </div>
</div>
<div className="case-right">
<h4>Results after 90 days</h4>
<div className="case-metrics">
<div className="case-metric">
<div className="cm-num">5×</div>
<div className="cm-label"><strong>Online Appointment Enquiries</strong>via GMB + WhatsApp booking flow</div>
</div>
<div className="case-metric">
<div className="cm-num">#1</div>
<div className="cm-label"><strong>Google Maps Ranking</strong>for "multi-specialty clinic Bhopal"</div>
</div>
<div className="case-metric">
<div className="cm-num">4.7★</div>
<div className="cm-label"><strong>Review Rating</strong>from 3.1★ — 80+ new reviews in 90 days</div>
</div>
<div className="case-metric">
<div className="cm-num">48%</div>
<div className="cm-label"><strong>Drop in Cost-Per-Lead</strong>after restructuring Google Ads</div>
</div>
</div>
</div>
</div>
</div>
</section>
      <section className="why-section">
<div className="wrap">
<div className="section-head">
<h2>Why Click Decoded for <em style={{ fontStyle: 'normal', color: 'var(--ac)' }}>Healthcare</em></h2>
<p>We bring specific playbooks from working in the healthcare sector — not a generic agency template.</p>
</div>
<div className="why-grid">
<div className="why-card">
<div className="why-num">01</div>
<h3>MCI-Compliant Campaigns</h3>
<p>We know what healthcare brands can and cannot advertise in India. Every campaign we run is structured to comply with Indian Medical Council guidelines — no risky claims, no banned content.</p>
</div>
<div className="why-card">
<div className="why-num">02</div>
<h3>Patient-Journey Focused</h3>
<p>We map every step from symptom search to appointment booking. Our strategies target patients at the right moment — not just anyone Googling health topics.</p>
</div>
<div className="why-card">
<div className="why-num">03</div>
<h3>Privacy-First Approach</h3>
<p>Patient data is never used for retargeting or advertising. All forms and chatbots are GDPR-compatible. We treat patient trust as a non-negotiable.</p>
</div>
<div className="why-card">
<div className="why-num">04</div>
<h3>Transparent Monthly Reports</h3>
<p>Every month you get a plain-English report showing enquiries generated, rankings improved, and ad performance — not vanity metrics or confusing agency speak.</p>
</div>
<div className="why-card">
<div className="why-num">05</div>
<h3>Scalable for Any Size</h3>
<p>From solo practitioners to 50-bed hospitals — each client gets a strategy scaled to their patient volume goals, budget, and competitive landscape.</p>
</div>
<div className="why-card">
<div className="why-num">06</div>
<h3>No Long-Term Lock-In</h3>
<p>Month-to-month contracts. We earn your business every 30 days. If you're not seeing results, you can leave — no penalties, no complicated exit clauses.</p>
</div>
</div>
</div>
</section>
      <section className="faq-section">
<div className="wrap">
<div className="section-head">
<h2>Frequently Asked <em style={{ fontStyle: 'normal', color: 'var(--ac)' }}>Questions</em></h2>
<p>Honest answers to what healthcare clients ask us most.</p>
</div>
<div className="faq-grid">
<div className="faq-item">
<button className="faq-q">Is digital marketing for healthcare allowed in India?<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg></button>
<div className="faq-a"><p>Yes, with restrictions. MCI guidelines prohibit certain types of medical advertising. We build compliant campaigns focused on patient education and information — not unverified medical claims.</p></div>
</div>
<div className="faq-item">
<button className="faq-q">Can you help a solo doctor as well as a large hospital?<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg></button>
<div className="faq-a"><p>Yes. We work with solo practitioners, multi-specialty clinics, diagnostic centres, wellness centres, and large hospitals. Each gets a strategy scaled to their patient volume goals and budget.</p></div>
</div>
<div className="faq-item">
<button className="faq-q">How do you handle patient privacy?<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg></button>
<div className="faq-a"><p>All forms and chatbots are GDPR-compatible. Patient data is never used for advertising or retargeting. All enquiry data is secured and never shared with any third party.</p></div>
</div>
<div className="faq-item">
<button className="faq-q">Can you run Google Ads for a healthcare business?<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg></button>
<div className="faq-a"><p>Yes. Healthcare ads on Google require policy-compliant copy. We're experienced in running medical campaigns — proper disclaimers, no banned medical claims, correct ad categories.</p></div>
</div>
<div className="faq-item">
<button className="faq-q">How long until I see more appointment bookings?<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg></button>
<div className="faq-a"><p>Google Ads shows results in 2–3 weeks. GMB optimisation and local SEO show measurable appointment increases within 30–60 days depending on your local competition level.</p></div>
</div>
<div className="faq-item">
<button className="faq-q">Do you set up online appointment booking systems?<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg></button>
<div className="faq-a"><p>Yes — WhatsApp-based booking flows, Google Calendar integrations, and Calendly or custom booking page setups are all available and typically go live within 5–7 business days.</p></div>
</div>
</div>
</div>
</section>
      <div className="wrap related-section">
<h4>Related Services</h4>
<div className="related-pills">
<a href="/services/local-seo" className="rel-pill">📍 Local SEO</a>
<a href="/services/gmb-marketing" className="rel-pill">📍 Google My Business</a>
<a href="/services/whatsapp-automation" className="rel-pill">💬 WhatsApp Automation</a>
<a href="/services/web-development" className="rel-pill">🌐 Web Development</a>
<a href="/services/google-ads" className="rel-pill">💰 Google Ads</a>
<a href="/services/ai-chatbot-development" className="rel-pill">🤖 AI Chatbot</a>
<a href="/services/gmb-marketing" className="rel-pill">⭐ Reputation Management</a>
</div>
</div>
      <section className="cta-strip">
<div className="wrap">
<h2>Ready to Fill More <em style={{ fontStyle: 'normal', color: 'var(--ac)' }}>Appointment Slots?</em></h2>
<p>Free healthcare audit. No commitment. We'll show you exactly where you're losing patients online.</p>
<div className="cta-btns">
<a href="/contact" className="btn btn-ac">🚀 Get Free Strategy Call</a>
<a href="https://wa.me/919407000101" className="btn btn-wa">💬 WhatsApp Now</a>
</div>
</div>
</section>
      <PageScript id="industries-healthcare-0" code={js0} />
    </>
  )
}
