/* eslint-disable */
// src/app/services/whatsapp-marketing/page.tsx — generated from whatsapp-marketing.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "WhatsApp Marketing India | Click Decoded",
  description: "WhatsApp Business API marketing — bulk broadcasts, automated sequences, and chatbots that convert. Click Decoded manages campaigns with 95% open rates and.",
  alternates: { canonical: "/services/whatsapp-marketing" },
}

const css = `
:root{
  --ac:#25D366;--ac2:#1ebe59;--ac-rgb:37,211,102;
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
.hero{background:linear-gradient(155deg,#011208 0%,#022010 45%,#011208 100%);padding:96px 0 80px;position:relative;overflow:hidden;}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 60% at 70% 30%,rgba(37,211,102,.18) 0%,transparent 65%),radial-gradient(ellipse 35% 40% at 5% 80%,rgba(37,211,102,.06) 0%,transparent 60%);}
.hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;position:relative;z-index:2;}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;background:rgba(37,211,102,.1);border:1px solid rgba(37,211,102,.3);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#86efac;margin-bottom:20px;}
.hero h1{font-size:48px;color:#fff;line-height:1.06;letter-spacing:-.04em;margin-bottom:20px;}
.hero h1 em{font-style:normal;background:linear-gradient(135deg,#86efac,#25d366);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-desc{font-size:17px;color:rgba(255,255,255,.62);line-height:1.7;margin-bottom:32px;max-width:460px;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:36px;}
.hero-proof{display:flex;gap:24px;flex-wrap:wrap;}
.proof-item{font-size:13px;color:rgba(255,255,255,.5);}
.proof-item strong{color:#fff;font-weight:700;}
/* WHATSAPP MOCK */
.wa-mock{border-radius:20px;overflow:hidden;box-shadow:0 28px 70px rgba(0,0,0,.65);background:#0d1117;border:1px solid rgba(37,211,102,.18);}
.mock-browser{background:rgba(255,255,255,.04);padding:10px 14px;border-bottom:1px solid rgba(255,255,255,.06);display:flex;align-items:center;gap:10px;}
.mock-dots{display:flex;gap:5px;}
.mock-dots span{width:9px;height:9px;border-radius:50%;}
.mock-dots span:nth-child(1){background:#ff5f57;}
.mock-dots span:nth-child(2){background:#ffbd2e;}
.mock-dots span:nth-child(3){background:#28c840;}
.mock-url{flex:1;background:rgba(255,255,255,.06);border-radius:6px;padding:5px 12px;font-size:11px;color:rgba(255,255,255,.3);}
/* App bar */
.wa-appbar{background:#075e54;padding:10px 16px;display:flex;align-items:center;gap:12px;border-bottom:1px solid rgba(255,255,255,.06);}
.wa-avatar{width:36px;height:36px;border-radius:50%;background:#25d366;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;}
.wa-brand-info .wa-name{font-size:13px;font-weight:700;color:#fff;}
.wa-brand-info .wa-sub{font-size:10px;color:rgba(255,255,255,.5);}
.wa-badge{margin-left:auto;font-size:9px;font-weight:700;padding:3px 8px;border-radius:5px;background:rgba(37,211,102,.2);border:1px solid rgba(37,211,102,.4);color:#86efac;}
/* Broadcast list */
.wa-broadcasts{padding:10px 14px;border-bottom:1px solid rgba(255,255,255,.06);}
.wb-label{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:rgba(255,255,255,.25);margin-bottom:8px;}
.wb-row{display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.04);}
.wb-row:last-child{border-bottom:none;}
.wb-icon{width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;}
.wb-info{flex:1;}
.wb-name{font-size:11px;font-weight:700;color:rgba(255,255,255,.8);}
.wb-meta{font-size:9px;color:rgba(255,255,255,.35);margin-top:1px;}
.wb-stats{display:flex;gap:10px;text-align:right;}
.wb-stat{text-align:center;}
.wb-n{font-size:11px;font-weight:800;color:#86efac;}
.wb-l{font-size:8px;color:rgba(255,255,255,.3);text-transform:uppercase;}
/* Message preview */
.wa-chat{padding:10px 14px;background:#0a1612;}
.wc-label{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:rgba(255,255,255,.25);margin-bottom:8px;}
.wc-bubble{background:#1a3a2a;border-radius:0 12px 12px 12px;padding:10px 12px;max-width:88%;position:relative;border:1px solid rgba(37,211,102,.12);}
.wc-sender{font-size:9px;font-weight:700;color:#86efac;margin-bottom:4px;}
.wc-text{font-size:11px;color:rgba(255,255,255,.75);line-height:1.55;}
.wc-cta{display:inline-block;margin-top:8px;padding:6px 12px;background:rgba(37,211,102,.15);border:1px solid rgba(37,211,102,.3);border-radius:7px;font-size:10px;font-weight:700;color:#86efac;}
.wc-meta{display:flex;align-items:center;justify-content:flex-end;gap:4px;margin-top:6px;}
.wc-time{font-size:9px;color:rgba(255,255,255,.3);}
.wc-ticks{font-size:11px;color:#25d366;}
/* Live send */
.wa-live{padding:8px 14px;background:rgba(37,211,102,.06);border-top:1px solid rgba(37,211,102,.15);display:flex;align-items:center;justify-content:space-between;}
.wa-live-dot{width:7px;height:7px;border-radius:50%;background:#25d366;animation:waPulse 1s step-end infinite;margin-right:6px;}
@keyframes waPulse{0%,100%{opacity:1}50%{opacity:.15}}
.wa-live-text{font-size:10px;color:rgba(255,255,255,.5);display:flex;align-items:center;}
.wa-live-count{font-size:12px;font-weight:800;color:#86efac;}
/* STATS */
.stats-strip{background:var(--ac);}
.stats-inner{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(0,0,0,.15);}
.stat-box{padding:32px 24px;text-align:center;background:var(--ac);}
.stat-n{font-size:40px;font-weight:900;color:#fff;line-height:1;letter-spacing:-.03em;}
.stat-l{font-size:12px;color:rgba(255,255,255,.85);margin-top:6px;font-weight:500;text-transform:uppercase;letter-spacing:.06em;}
/* SECTIONS */
.sec-h{text-align:center;max-width:640px;margin:0 auto 52px;}
.sec-tag{display:inline-flex;padding:5px 13px;border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:10px;background:rgba(37,211,102,.08);border:1px solid rgba(37,211,102,.18);color:var(--ac);}
.sec-h h2{font-size:36px;margin-bottom:14px;}
.sec-h p{font-size:16px;color:var(--m);line-height:1.65;}
.inc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.inc-card{background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:28px 24px;transition:.2s;}
.inc-card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(37,211,102,.1);border-color:rgba(37,211,102,.25);}
.inc-icon{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:16px;background:rgba(37,211,102,.07);border:1px solid rgba(37,211,102,.12);}
.inc-card h3{font-size:17px;margin-bottom:10px;}
.inc-card p{font-size:13.5px;color:var(--m);line-height:1.65;}
.dark-section{background:var(--n-dark);padding:88px 0;}
.formats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:1000px;margin:0 auto;}
.fmt-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:24px;transition:.2s;}
.fmt-card:hover{border-color:rgba(37,211,102,.35);background:rgba(37,211,102,.07);transform:translateY(-2px);}
.fmt-top{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px;}
.fmt-icon{font-size:26px;}
.fmt-tag{font-size:10px;font-weight:700;padding:3px 8px;border-radius:5px;background:rgba(37,211,102,.15);border:1px solid rgba(37,211,102,.3);color:#86efac;}
.fmt-card h3{font-size:15px;font-weight:700;color:#fff;margin-bottom:6px;}
.fmt-card p{font-size:13px;color:rgba(255,255,255,.5);line-height:1.6;}
.bg-subtle{background:var(--bg);}
.steps-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative;}
.steps-grid::before{content:'';position:absolute;top:34px;left:12%;right:12%;height:2px;background:linear-gradient(90deg,var(--ac),var(--ac2));z-index:0;opacity:.4;}
.step{text-align:center;padding:0 16px;position:relative;z-index:1;}
.step-num{width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,var(--ac),var(--ac2));color:#fff;font-size:20px;font-weight:900;display:flex;align-items:center;justify-content:center;margin:0 auto 18px;box-shadow:0 8px 24px rgba(37,211,102,.25);}
.step h4{font-size:15px;margin-bottom:7px;}
.step p{font-size:13px;color:var(--m);line-height:1.6;}
.faq-2col{display:grid;grid-template-columns:1fr 1fr;gap:0 28px;align-items:start;}
.fi{border:1px solid var(--bdr);border-radius:14px;margin-bottom:10px;overflow:hidden;background:#fff;transition:.15s;}
.fi.on{border-color:rgba(37,211,102,.3);box-shadow:0 4px 20px rgba(37,211,102,.08);}
.fi-q{width:100%;text-align:left;background:transparent;border:none;padding:20px 22px;font-size:14px;font-weight:700;color:var(--n);display:flex;justify-content:space-between;align-items:center;gap:12px;cursor:pointer;}
.fi-icon{width:26px;height:26px;border-radius:50%;flex-shrink:0;background:var(--bg);border:1px solid var(--bdr);display:flex;align-items:center;justify-content:center;color:var(--ac);font-size:18px;line-height:1;transition:transform .2s;}
.fi.on .fi-icon{transform:rotate(45deg);background:var(--ac);color:#fff;border-color:var(--ac);}
.fi-a{max-height:0;overflow:hidden;transition:.3s;color:var(--m);font-size:14px;line-height:1.75;}
.fi.on .fi-a{max-height:300px;padding:0 22px 22px;}
.cta-section{background:linear-gradient(155deg,#011208 0%,#022010 100%);padding:96px 0;text-align:center;position:relative;overflow:hidden;}
.cta-section::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(37,211,102,.14) 0%,transparent 70%);}
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
      "name": "WhatsApp Marketing",
      "provider": {
        "@type": "Organization",
        "name": "Click Decoded",
        "url": "https://www.clickdecoded.com"
      },
      "description": "WhatsApp Business API marketing — bulk broadcasts, automated sequences, and chatbots that convert. Click Decoded manages campaigns with 95% open rates and real-time engagement for B2B and B2C brands.",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": "WhatsApp Marketing",
      "url": "https://www.clickdecoded.com/services/whatsapp-marketing"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is WhatsApp Business API different from the regular WhatsApp Business app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — significantly. The free WhatsApp Business app limits you to 256 contacts per broadcast and requires manual sending. The WhatsApp Business API (used by Click Decoded) allows bulk broadcasts to unlimited opt-in contacts, supports automation and chatbots, enables CRM integration, and provides official campaign analytics — it's an entirely different infrastructure built for marketing at scale."
          }
        },
        {
          "@type": "Question",
          "name": "Do we need to collect opt-ins before sending?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — WhatsApp requires explicit opt-in consent before you can send marketing messages to any contact. We help you build a compliant opt-in collection strategy through website pop-ups, paid lead forms, checkout flows, and QR codes. Sending to non-opted-in contacts violates Meta's policies and can result in your number being banned — something we strictly avoid."
          }
        },
        {
          "@type": "Question",
          "name": "What are WhatsApp message templates and why need approval?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Templates (called HSM — Highly Structured Messages) are pre-approved message formats required for all outbound business-initiated WhatsApp messages. Meta reviews them to prevent spam. Our team writes templates that comply with Meta's content policies and pass approval. Once approved (typically 24–48 hours), they can be sent at scale. Template approval is a one-time process per template — approved templates can be reused indefinitely."
          }
        },
        {
          "@type": "Question",
          "name": "How do you measure WhatsApp campaign performance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We track delivered rate, read rate, link click rate, reply rate, and opt-out rate for every broadcast. For automation sequences, we track conversion metrics tied to specific goals (cart recovery, appointment bookings, lead qualification). Monthly reports include all metrics with benchmarks and strategic recommendations. We integrate with your CRM or website where possible to attribute revenue to specific WhatsApp campaigns."
          }
        },
        {
          "@type": "Question",
          "name": "What's the green tick and how do we get it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The WhatsApp green tick (Official Business Account badge) verifies that your WhatsApp number is linked to a legitimate, Meta-verified business. It builds trust with recipients and reduces opt-out rates. We manage the application process as part of setup — it requires your business to be verified on Meta Business Manager. Approval timelines vary (2–8 weeks) and are ultimately decided by Meta, but our application preparation significantly improves success rates."
          }
        },
        {
          "@type": "Question",
          "name": "How much does WhatsApp API messaging cost per message?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Meta charges per conversation (24-hour window), not per individual message. Marketing conversation rates in India are approximately ₹0.58–₹0.78 per conversation as of 2024. These API conversation costs are billed separately to your Meta account — our management retainer covers strategy, template writing, campaign execution, and reporting. We'll give you an estimated API cost projection based on your send volume before you commit."
          }
        },
        {
          "@type": "Question",
          "name": "Can WhatsApp be integrated with our CRM or website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — the WhatsApp Business API supports integration with CRMs (HubSpot, Zoho, Salesforce), e-commerce platforms (Shopify, WooCommerce), and custom websites via webhooks. This enables triggered messages from real customer actions (cart abandon, form submit, purchase) rather than manual list uploads. We advise on integration architecture and work with your development team to set up data flows."
          }
        },
        {
          "@type": "Question",
          "name": "Do you manage email and WhatsApp together?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — many clients run coordinated email + WhatsApp campaigns for maximum reach. A typical launch sequence might send an email announcement, followed by a WhatsApp broadcast 24 hours later to non-openers, then a WhatsApp follow-up with urgency before the offer closes. Cross-channel campaigns consistently outperform single-channel approaches, and we can manage both with a combined retainer plan."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How WhatsApp Marketing India Works — Our Process",
      "description": "WhatsApp Business API marketing — bulk broadcasts, automated sequences, and chatbots that convert. Click Decoded manages campaigns with 95% open rates and real-time engagement for B2B and B2C brands.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "API Setup & Verification",
          "text": "WhatsApp Business API provisioned through official Meta BSP partner. Business verification, phone number registration, and green tick application submitted — your brand is authenticated before the first message goes out."
        },
        {
          "@type": "HowToStep",
          "name": "Template Approval",
          "text": "Campaign and automation templates written for your use cases — promotional, transactional, re-engagement — and submitted to Meta for review. We write compliant copy that passes Meta's approval process first time."
        },
        {
          "@type": "HowToStep",
          "name": "List Upload & Segment",
          "text": "Your opt-in contact list imported, cleaned, and segmented by customer type, purchase history, and engagement level — ensuring the right message goes to the right audience for maximum relevance and minimum opt-outs."
        },
        {
          "@type": "HowToStep",
          "name": "Launch & Optimise",
          "text": "First broadcast sent, performance monitored in real time. Monthly review covers read rates, click rates, and opt-outs — with strategy updates, new template creation, and automation expansion each month to improve ROI."
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
          "name": "WhatsApp Marketing",
          "item": "https://www.clickdecoded.com/services/whatsapp-marketing"
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
      <div className="breadcrumb"><div className="wrap"><div className="bc-list"><a href="/">Home</a><span style={{ opacity: '.4' }}>›</span><span>Content</span><span style={{ opacity: '.4' }}>›</span><span>WhatsApp Marketing</span></div></div></div>
      <section className="hero">
<div className="wrap">
<div className="hero-grid">
<div>
<div className="hero-eyebrow">💬 Broadcasts · Sequences · Chatbots</div>
<h1>WhatsApp Marketing with <em>95% Open Rates</em> and Real Conversations.</h1>
<p className="hero-desc">WhatsApp Business API campaigns managed end-to-end — bulk broadcasts, automated drip sequences, and intelligent chatbots that qualify leads and convert at scale, on India's most-used app.</p>
<div className="hero-btns">
<a href="/contact" className="btn btn-ac">💬 Get a Free Strategy Call</a>
<a href="https://wa.me/919407000101" className="btn btn-ghost">📞 WhatsApp Us</a>
</div>
<div className="hero-proof">
<span className="proof-item"><strong>95%</strong> Open Rate</span>
<span className="proof-item"><strong>35%</strong> Avg Click Rate</span>
<span className="proof-item"><strong>₹25K</strong> Starting / Month</span>
</div>
</div>

<div className="wa-mock">
<div className="mock-browser">
<div className="mock-dots"><span></span><span></span><span></span></div>
<div className="mock-url">WhatsApp Campaign Dashboard — Click Decoded</div>
</div>
<div className="wa-appbar">
<div className="wa-avatar">🟢</div>
<div className="wa-brand-info">
<div className="wa-name">Click Decoded — WA Manager</div>
<div className="wa-sub">3 Active Campaigns · API Connected</div>
</div>
<div className="wa-badge">Live ✓</div>
</div>
<div className="wa-broadcasts">
<div className="wb-label">Broadcast Campaigns</div>
<div className="wb-row">
<div className="wb-icon" style={{ background: 'rgba(255,165,0,.1)' }}>🎉</div>
<div className="wb-info">
<div className="wb-name">Diwali Sale Announcement</div>
<div className="wb-meta">Sent: 14,840 contacts · 2 days ago</div>
</div>
<div className="wb-stats">
<div className="wb-stat"><div className="wb-n">96.2%</div><div className="wb-l">Read</div></div>
<div className="wb-stat"><div className="wb-n">38.4%</div><div className="wb-l">Clicked</div></div>
</div>
</div>
<div className="wb-row">
<div className="wb-icon" style={{ background: 'rgba(99,102,241,.1)' }}>🚀</div>
<div className="wb-info">
<div className="wb-name">New Product Launch — Series X</div>
<div className="wb-meta">Sent: 9,220 contacts · 5 days ago</div>
</div>
<div className="wb-stats">
<div className="wb-stat"><div className="wb-n">94.8%</div><div className="wb-l">Read</div></div>
<div className="wb-stat"><div className="wb-n">41.2%</div><div className="wb-l">Clicked</div></div>
</div>
</div>
<div className="wb-row" style={{ background: 'rgba(37,211,102,.04)', borderRadius: '8px', padding: '8px 6px', margin: '0 -6px' }}>
<div className="wb-icon" style={{ background: 'rgba(37,211,102,.12)', animation: 'waPulse 1.5s ease-in-out infinite' }}>🛒</div>
<div className="wb-info">
<div className="wb-name">Abandoned Cart Recovery</div>
<div className="wb-meta" style={{ color: '#86efac' }}>Sending now · 6,480 contacts</div>
</div>
<div className="wb-stats">
<div className="wb-stat"><div className="wb-n" style={{ color: '#86efac' }}>Live</div><div className="wb-l">Active</div></div>
<div className="wb-stat"><div className="wb-n">—</div><div className="wb-l">Pending</div></div>
</div>
</div>
</div>
<div className="wa-chat">
<div className="wc-label">Message Preview</div>
<div className="wc-bubble">
<div className="wc-sender">Click Decoded</div>
<div className="wc-text">Hi Rahul 👋 You left something behind!<br /><br />Your cart has items worth <b>₹4,280</b>. Complete your order in the next 2 hours and get <b>10% off</b> automatically. 🎁</div>
<div className="wc-cta">🛒 Complete My Order →</div>
<div className="wc-meta">
<span className="wc-time">2:48 PM</span>
<span className="wc-ticks">✓✓</span>
</div>
</div>
</div>
<div className="wa-live">
<div className="wa-live-text"><div className="wa-live-dot"></div>Sending cart recovery now</div>
<div className="wa-live-count">3,182 / 6,480 sent</div>
</div>
</div>
</div>
</div>
</section>
      <div className="stats-strip">
<div className="stats-inner">
<div className="stat-box"><div className="stat-n">95%</div><div className="stat-l">Message Open Rate</div></div>
<div className="stat-box"><div className="stat-n">38%</div><div className="stat-l">Avg Click Rate</div></div>
<div className="stat-box"><div className="stat-n">3×</div><div className="stat-l">Conversion vs Email</div></div>
<div className="stat-box"><div className="stat-n">₹25K</div><div className="stat-l">Starting / Month</div></div>
</div>
</div>
      <section>
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag">What's Included</div>
<h2>End-to-End WhatsApp<br />Marketing Management.</h2>
<p>API setup, template approvals, broadcast execution, chatbot flows, and monthly reporting — your entire WhatsApp marketing engine handled by our team.</p>
</div>
<div className="inc-grid">
<div className="inc-card rv"><div className="inc-icon">🔌</div><h3>WhatsApp Business API Setup</h3><p>Official WhatsApp Business API provisioning through a Meta BSP — verified business account, phone number registration, and green tick application managed for your brand so you can send at scale without limitations.</p></div>
<div className="inc-card rv2"><div className="inc-icon">📋</div><h3>Template Copywriting &amp; Approval</h3><p>HSM template messages written for every campaign and automation use case — sale announcements, order updates, appointment reminders, re-engagement — and submitted through Meta's approval process on your behalf.</p></div>
<div className="inc-card rv3"><div className="inc-icon">📣</div><h3>Broadcast Campaign Management</h3><p>Monthly broadcast campaigns planned, built, and sent to your segmented contact lists — with personalisation variables, multimedia attachments, and CTA buttons that drive direct traffic to your landing pages or products.</p></div>
<div className="inc-card rv"><div className="inc-icon">⚡</div><h3>Automation Sequences</h3><p>Triggered WhatsApp flows for cart abandonment, lead follow-up, appointment booking, post-purchase, and re-engagement — messages sent at the right moment without manual effort, driving revenue around the clock.</p></div>
<div className="inc-card rv2"><div className="inc-icon">🤖</div><h3>WhatsApp Chatbot</h3><p>Keyword-triggered and AI-powered chatbots that qualify inbound leads, answer FAQs, collect contact information, and route serious prospects to your sales team — reducing manual follow-up workload by 60–80%.</p></div>
<div className="inc-card rv3"><div className="inc-icon">📊</div><h3>Delivery &amp; Engagement Reports</h3><p>Monthly reports covering delivered, read, replied, and clicked metrics per campaign — with audience quality analysis, opt-out tracking, and strategic recommendations for the next month's broadcast calendar.</p></div>
</div>
</div>
</section>
      <section className="dark-section">
<div className="wrap">
<div className="sec-h rv" style={{ marginBottom: '40px' }}>
<h2 style={{ color: '#fff' }}>Every WhatsApp Use Case<br />Your Business Needs.</h2>
<p style={{ color: 'rgba(255,255,255,.55)' }}>From one-off sale broadcasts to always-on automated conversations — we build and run the complete WhatsApp marketing stack for your brand.</p>
</div>
<div className="formats-grid">
<div className="fmt-card rv"><div className="fmt-top"><div className="fmt-icon">🎯</div><div className="fmt-tag">Broadcast</div></div><h3>Promotional Broadcasts</h3><p>Bulk broadcasts to segmented opt-in lists for sale events, product launches, festival offers, and re-engagement campaigns — with rich media (images, videos, PDFs) and quick-reply CTA buttons for instant engagement.</p></div>
<div className="fmt-card rv2"><div className="fmt-top"><div className="fmt-icon">🛒</div><div className="fmt-tag">E-Commerce</div></div><h3>Cart &amp; Browse Abandonment</h3><p>Triggered messages sent within minutes of cart abandonment — personalised with the exact items left behind, a limited-time discount, and a direct checkout link. Typically recovers 12–18% of abandoned carts on WhatsApp.</p></div>
<div className="fmt-card rv3"><div className="fmt-top"><div className="fmt-icon">🤝</div><div className="fmt-tag">B2B</div></div><h3>Lead Follow-Up Sequences</h3><p>Automated WhatsApp follow-up triggered the moment a lead fills a form — immediate personalised response, qualification questions, and scheduled follow-ups that keep B2B prospects warm through a 7–21 day nurture window.</p></div>
<div className="fmt-card rv"><div className="fmt-top"><div className="fmt-icon">📅</div><div className="fmt-tag">Service Biz</div></div><h3>Appointment Reminders</h3><p>Automated booking confirmations, 24-hour reminders, and day-of reminders for clinics, salons, coaches, and service businesses — with one-tap confirm/reschedule replies that reduce no-shows by up to 40%.</p></div>
<div className="fmt-card rv2"><div className="fmt-top"><div className="fmt-icon">📦</div><div className="fmt-tag">Transactional</div></div><h3>Order &amp; Delivery Updates</h3><p>Real-time WhatsApp notifications for order confirmations, dispatch alerts, and delivery tracking — replacing SMS with rich messages that customers actually read, reducing inbound support calls by 30–50%.</p></div>
<div className="fmt-card rv3"><div className="fmt-top"><div className="fmt-icon">🔁</div><div className="fmt-tag">Retention</div></div><h3>Win-Back &amp; Loyalty Campaigns</h3><p>Re-engagement broadcasts targeting customers who haven't purchased in 60–90 days — with exclusive returning-customer offers, loyalty reward reminders, and personalised product recommendations based on past purchase data.</p></div>
</div>
</div>
</section>
      <section className="bg-subtle">
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag">Our Process</div>
<h2>API Live to First Campaign<br />in Under 2 Weeks.</h2>
<p>A structured setup that gets your WhatsApp Business API verified, your first templates approved, and your first broadcast sent — fast.</p>
</div>
<div className="steps-grid">
<div className="step rv"><div className="step-num">01</div><h4>API Setup &amp; Verification</h4><p>WhatsApp Business API provisioned through official Meta BSP partner. Business verification, phone number registration, and green tick application submitted — your brand is authenticated before the first message goes out.</p></div>
<div className="step rv2"><div className="step-num">02</div><h4>Template Approval</h4><p>Campaign and automation templates written for your use cases — promotional, transactional, re-engagement — and submitted to Meta for review. We write compliant copy that passes Meta's approval process first time.</p></div>
<div className="step rv3"><div className="step-num">03</div><h4>List Upload &amp; Segment</h4><p>Your opt-in contact list imported, cleaned, and segmented by customer type, purchase history, and engagement level — ensuring the right message goes to the right audience for maximum relevance and minimum opt-outs.</p></div>
<div className="step rv3"><div className="step-num">04</div><h4>Launch &amp; Optimise</h4><p>First broadcast sent, performance monitored in real time. Monthly review covers read rates, click rates, and opt-outs — with strategy updates, new template creation, and automation expansion each month to improve ROI.</p></div>
</div>
</div>
</section>
      <section>
<div className="wrap">
<div className="sec-h rv"><h2>Frequently Asked Questions</h2></div>
<div className="faq-2col">
<div>
<div className="fi"><button className="fi-q">Is WhatsApp Business API different from the regular WhatsApp Business app?<div className="fi-icon">+</div></button><div className="fi-a">Yes — significantly. The free WhatsApp Business app limits you to 256 contacts per broadcast and requires manual sending. The WhatsApp Business API (used by Click Decoded) allows bulk broadcasts to unlimited opt-in contacts, supports automation and chatbots, enables CRM integration, and provides official campaign analytics — it's an entirely different infrastructure built for marketing at scale.</div></div>
<div className="fi"><button className="fi-q">Do we need to collect opt-ins before sending?<div className="fi-icon">+</div></button><div className="fi-a">Yes — WhatsApp requires explicit opt-in consent before you can send marketing messages to any contact. We help you build a compliant opt-in collection strategy through website pop-ups, paid lead forms, checkout flows, and QR codes. Sending to non-opted-in contacts violates Meta's policies and can result in your number being banned — something we strictly avoid.</div></div>
<div className="fi"><button className="fi-q">What are WhatsApp message templates and why need approval?<div className="fi-icon">+</div></button><div className="fi-a">Templates (called HSM — Highly Structured Messages) are pre-approved message formats required for all outbound business-initiated WhatsApp messages. Meta reviews them to prevent spam. Our team writes templates that comply with Meta's content policies and pass approval. Once approved (typically 24–48 hours), they can be sent at scale. Template approval is a one-time process per template — approved templates can be reused indefinitely.</div></div>
<div className="fi"><button className="fi-q">How do you measure WhatsApp campaign performance?<div className="fi-icon">+</div></button><div className="fi-a">We track delivered rate, read rate, link click rate, reply rate, and opt-out rate for every broadcast. For automation sequences, we track conversion metrics tied to specific goals (cart recovery, appointment bookings, lead qualification). Monthly reports include all metrics with benchmarks and strategic recommendations. We integrate with your CRM or website where possible to attribute revenue to specific WhatsApp campaigns.</div></div>
</div>
<div>
<div className="fi"><button className="fi-q">What's the green tick and how do we get it?<div className="fi-icon">+</div></button><div className="fi-a">The WhatsApp green tick (Official Business Account badge) verifies that your WhatsApp number is linked to a legitimate, Meta-verified business. It builds trust with recipients and reduces opt-out rates. We manage the application process as part of setup — it requires your business to be verified on Meta Business Manager. Approval timelines vary (2–8 weeks) and are ultimately decided by Meta, but our application preparation significantly improves success rates.</div></div>
<div className="fi"><button className="fi-q">How much does WhatsApp API messaging cost per message?<div className="fi-icon">+</div></button><div className="fi-a">Meta charges per conversation (24-hour window), not per individual message. Marketing conversation rates in India are approximately ₹0.58–₹0.78 per conversation as of 2024. These API conversation costs are billed separately to your Meta account — our management retainer covers strategy, template writing, campaign execution, and reporting. We'll give you an estimated API cost projection based on your send volume before you commit.</div></div>
<div className="fi"><button className="fi-q">Can WhatsApp be integrated with our CRM or website?<div className="fi-icon">+</div></button><div className="fi-a">Yes — the WhatsApp Business API supports integration with CRMs (HubSpot, Zoho, Salesforce), e-commerce platforms (Shopify, WooCommerce), and custom websites via webhooks. This enables triggered messages from real customer actions (cart abandon, form submit, purchase) rather than manual list uploads. We advise on integration architecture and work with your development team to set up data flows.</div></div>
<div className="fi"><button className="fi-q">Do you manage email and WhatsApp together?<div className="fi-icon">+</div></button><div className="fi-a">Yes — many clients run coordinated email + WhatsApp campaigns for maximum reach. A typical launch sequence might send an email announcement, followed by a WhatsApp broadcast 24 hours later to non-openers, then a WhatsApp follow-up with urgency before the offer closes. Cross-channel campaigns consistently outperform single-channel approaches, and we can manage both with a combined retainer plan.</div></div>
</div>
</div>
</div>
</section>
      <div className="wrap" style={{ padding: '40px 28px', borderTop: '1px solid var(--bdr)' }}>
<div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--s)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '16px' }}>Related Services</div>
<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
<a href="/services/email-marketing" className="rel-link">📧 Email Marketing</a>
<a href="/services/retargeting" className="rel-link">🔄 Retargeting</a>
<a href="/services/ai-content" className="rel-link">📝 AI Content</a>
<a href="/services/ai-automation" className="rel-link">🤖 AI Automation</a>
<a href="/services/google-ads" className="rel-link">📈 Google Ads</a>
</div>
</div>
      <section className="cta-section">
<div className="wrap">
<h2>500 Million Indians Use<br />WhatsApp Every Day.</h2>
<p>Your customers are already on WhatsApp. Get your business there too — with a free strategy call to map out your first campaign and automation sequence.</p>
<div className="cta-btns">
<a href="/contact" className="btn btn-ac">💬 Get Free Strategy Call</a>
<a href="https://wa.me/919407000101" className="btn btn-ghost">📞 WhatsApp Us Now</a>
</div>
</div>
</section>
      <PageScript id="services-whatsapp-marketing-0" code={js0} />
    </>
  )
}
