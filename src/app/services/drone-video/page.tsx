/* eslint-disable */
// src/app/services/drone-video/page.tsx — generated from drone-video.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "Drone Video & Aerial Photography India | Click Decoded",
  description: "Professional drone video and aerial photography for real estate, events, construction, and brand campaigns. Click Decoded delivers cinematic 4K aerial.",
  alternates: { canonical: "/services/drone-video" },
}

const css = `
:root{
  --ac:#0284C7;--ac2:#0369a1;--ac-rgb:2,132,199;
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
.hero{background:linear-gradient(155deg,#020c1e 0%,#041830 45%,#020c1e 100%);padding:96px 0 80px;position:relative;overflow:hidden;}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 60% at 70% 30%,rgba(2,132,199,.2) 0%,transparent 65%),radial-gradient(ellipse 35% 40% at 5% 80%,rgba(2,132,199,.07) 0%,transparent 60%);}
.hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;position:relative;z-index:2;}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;background:rgba(2,132,199,.12);border:1px solid rgba(2,132,199,.3);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#7dd3fc;margin-bottom:20px;}
.hero h1{font-size:48px;color:#fff;line-height:1.06;letter-spacing:-.04em;margin-bottom:20px;}
.hero h1 em{font-style:normal;background:linear-gradient(135deg,#7dd3fc,#0284c7);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-desc{font-size:17px;color:rgba(255,255,255,.62);line-height:1.7;margin-bottom:32px;max-width:460px;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:36px;}
.hero-proof{display:flex;gap:24px;flex-wrap:wrap;}
.proof-item{font-size:13px;color:rgba(255,255,255,.5);}
.proof-item strong{color:#fff;font-weight:700;}
/* DRONE HUD MOCK */
.dr-mock{border-radius:20px;overflow:hidden;box-shadow:0 28px 70px rgba(0,0,0,.65);background:#010d1a;border:1px solid rgba(2,132,199,.25);}
.mock-browser{background:rgba(255,255,255,.05);padding:10px 14px;border-bottom:1px solid rgba(255,255,255,.07);display:flex;align-items:center;gap:10px;}
.mock-dots{display:flex;gap:5px;}
.mock-dots span{width:9px;height:9px;border-radius:50%;}
.mock-dots span:nth-child(1){background:#ff5f57;}
.mock-dots span:nth-child(2){background:#ffbd2e;}
.mock-dots span:nth-child(3){background:#28c840;}
.mock-url{flex:1;background:rgba(255,255,255,.07);border-radius:6px;padding:5px 12px;font-size:11px;color:rgba(255,255,255,.35);}
/* Live feed area */
.dr-feed{position:relative;height:130px;background:linear-gradient(180deg,#051424 0%,#0a2540 50%,#051424 100%);overflow:hidden;display:flex;align-items:center;justify-content:center;}
.dr-horizon{position:absolute;width:100%;height:1px;background:rgba(2,132,199,.25);top:55%;}
.dr-grid-lines{position:absolute;inset:0;}
.dr-grid-lines::before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(2,132,199,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(2,132,199,.06) 1px,transparent 1px);background-size:24px 24px;}
.dr-crosshair{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}
.dr-ch-h{width:30px;height:1px;background:rgba(2,132,199,.6);position:absolute;top:0;left:50%;transform:translateX(-50%);}
.dr-ch-v{height:30px;width:1px;background:rgba(2,132,199,.6);position:absolute;left:0;top:50%;transform:translateY(-50%);}
.dr-ch-c{width:12px;height:12px;border:1.5px solid rgba(2,132,199,.8);border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}
.dr-hud-top{position:absolute;top:8px;left:0;right:0;padding:0 12px;display:flex;justify-content:space-between;}
.dr-hud-item{font-size:9px;font-weight:700;color:rgba(2,132,199,.8);font-family:monospace;}
.dr-hud-item span{color:#7dd3fc;}
.dr-rec{position:absolute;top:8px;left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:5px;font-size:9px;font-weight:800;color:#ef4444;font-family:monospace;}
.dr-rec-dot{width:7px;height:7px;border-radius:50%;background:#ef4444;animation:recblink 1s step-end infinite;}
@keyframes recblink{0%,100%{opacity:1}50%{opacity:.2}}
.dr-hud-bottom{position:absolute;bottom:8px;left:0;right:0;padding:0 12px;display:flex;justify-content:space-between;}
/* Telemetry */
.dr-telem{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(255,255,255,.05);border-top:1px solid rgba(2,132,199,.15);}
.dr-tel{padding:9px 10px;background:#010d1a;text-align:center;}
.drtv{font-size:15px;font-weight:900;color:#7dd3fc;letter-spacing:-.01em;line-height:1;font-family:monospace;}
.drtl{font-size:8px;color:rgba(255,255,255,.3);margin-top:2px;text-transform:uppercase;letter-spacing:.06em;}
/* Scene list */
.dr-scenes{padding:10px 14px;}
.scene-label{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:rgba(255,255,255,.25);margin-bottom:7px;}
.scene-list{display:flex;flex-direction:column;gap:5px;}
.scene-item{display:flex;align-items:center;gap:8px;padding:7px 10px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:7px;}
.scene-item.active{border-color:rgba(2,132,199,.3);background:rgba(2,132,199,.06);}
.scene-num{width:20px;height:20px;border-radius:5px;background:rgba(2,132,199,.15);border:1px solid rgba(2,132,199,.25);font-size:9px;font-weight:800;color:#7dd3fc;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.scene-name{font-size:10px;color:rgba(255,255,255,.6);flex:1;}
.scene-dur{font-size:9px;color:rgba(255,255,255,.3);font-family:monospace;}
.scene-check{font-size:11px;}
/* Stats */
.dr-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,.05);border-top:1px solid rgba(255,255,255,.06);}
.dr-stat{padding:11px 12px;background:#010d1a;text-align:center;}
.drsv{font-size:17px;font-weight:900;color:#fff;letter-spacing:-.02em;line-height:1;}
.drsl{font-size:9px;color:rgba(255,255,255,.35);margin-top:3px;text-transform:uppercase;letter-spacing:.05em;}
/* STATS STRIP */
.stats-strip{background:var(--ac);}
.stats-inner{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(0,0,0,.2);}
.stat-box{padding:32px 24px;text-align:center;background:var(--ac);}
.stat-n{font-size:40px;font-weight:900;color:#fff;line-height:1;letter-spacing:-.03em;}
.stat-l{font-size:12px;color:rgba(255,255,255,.8);margin-top:6px;font-weight:500;text-transform:uppercase;letter-spacing:.06em;}
/* SECTIONS */
.sec-h{text-align:center;max-width:640px;margin:0 auto 52px;}
.sec-tag{display:inline-flex;padding:5px 13px;border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:10px;background:rgba(2,132,199,.08);border:1px solid rgba(2,132,199,.18);color:var(--ac);}
.sec-h h2{font-size:36px;margin-bottom:14px;}
.sec-h p{font-size:16px;color:var(--m);line-height:1.65;}
.inc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.inc-card{background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:28px 24px;transition:.2s;}
.inc-card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(2,132,199,.1);border-color:rgba(2,132,199,.2);}
.inc-icon{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:16px;background:rgba(2,132,199,.07);border:1px solid rgba(2,132,199,.12);}
.inc-card h3{font-size:17px;margin-bottom:10px;}
.inc-card p{font-size:13.5px;color:var(--m);line-height:1.65;}
.dark-section{background:var(--n-dark);padding:88px 0;}
.formats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:1000px;margin:0 auto;}
.fmt-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:24px;transition:.2s;}
.fmt-card:hover{border-color:rgba(2,132,199,.35);background:rgba(2,132,199,.07);transform:translateY(-2px);}
.fmt-top{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px;}
.fmt-icon{font-size:26px;}
.fmt-tag{font-size:10px;font-weight:700;padding:3px 8px;border-radius:5px;background:rgba(2,132,199,.18);border:1px solid rgba(2,132,199,.3);color:#7dd3fc;}
.fmt-card h3{font-size:15px;font-weight:700;color:#fff;margin-bottom:6px;}
.fmt-card p{font-size:13px;color:rgba(255,255,255,.5);line-height:1.6;}
.bg-subtle{background:var(--bg);}
.steps-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative;}
.steps-grid::before{content:'';position:absolute;top:34px;left:12%;right:12%;height:2px;background:linear-gradient(90deg,var(--ac),var(--ac2));z-index:0;opacity:.4;}
.step{text-align:center;padding:0 16px;position:relative;z-index:1;}
.step-num{width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,var(--ac),var(--ac2));color:#fff;font-size:20px;font-weight:900;display:flex;align-items:center;justify-content:center;margin:0 auto 18px;box-shadow:0 8px 24px rgba(2,132,199,.3);}
.step h4{font-size:15px;margin-bottom:7px;}
.step p{font-size:13px;color:var(--m);line-height:1.6;}
.faq-2col{display:grid;grid-template-columns:1fr 1fr;gap:0 28px;align-items:start;}
.fi{border:1px solid var(--bdr);border-radius:14px;margin-bottom:10px;overflow:hidden;background:#fff;transition:.15s;}
.fi.on{border-color:rgba(2,132,199,.3);box-shadow:0 4px 20px rgba(2,132,199,.07);}
.fi-q{width:100%;text-align:left;background:transparent;border:none;padding:20px 22px;font-size:14px;font-weight:700;color:var(--n);display:flex;justify-content:space-between;align-items:center;gap:12px;cursor:pointer;}
.fi-icon{width:26px;height:26px;border-radius:50%;flex-shrink:0;background:var(--bg);border:1px solid var(--bdr);display:flex;align-items:center;justify-content:center;color:var(--ac);font-size:18px;line-height:1;transition:transform .2s;}
.fi.on .fi-icon{transform:rotate(45deg);background:var(--ac);color:#fff;border-color:var(--ac);}
.fi-a{max-height:0;overflow:hidden;transition:.3s;color:var(--m);font-size:14px;line-height:1.75;}
.fi.on .fi-a{max-height:300px;padding:0 22px 22px;}
.cta-section{background:linear-gradient(155deg,#020c1e 0%,#041830 100%);padding:96px 0;text-align:center;position:relative;overflow:hidden;}
.cta-section::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(2,132,199,.15) 0%,transparent 70%);}
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
      "name": "Drone Videography",
      "provider": {
        "@type": "Organization",
        "name": "Click Decoded",
        "url": "https://www.clickdecoded.com"
      },
      "description": "Professional drone video and aerial photography for real estate, events, construction, and brand campaigns. Click Decoded delivers cinematic 4K aerial footage with licensed drone pilots across India.",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": "Drone Videography",
      "url": "https://www.clickdecoded.com/services/drone-video"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you have DGCA certification and insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — all our drone pilots hold valid DGCA Remote Pilot Certificates and operate under current UAS operator authorisation. We carry third-party liability insurance for every shoot. Documentation available on request and shared proactively for shoots requiring site security approval."
          }
        },
        {
          "@type": "Question",
          "name": "Can you fly near airports or in restricted zones?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We can fly in controlled airspace with prior permission. For Green and Yellow zones, we file LAAS (Low Altitude Airspace Management) applications through the Digital Sky platform. Red zones (directly over airports, military installations) are not accessible — we advise on this during the site survey stage before booking is confirmed."
          }
        },
        {
          "@type": "Question",
          "name": "What drone equipment do you use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our primary systems are the DJI Mavic 3 Cine (4K/120fps, 5.1K Hasselblad sensor) for versatile commercial shoots and the DJI Inspire 2 with Zenmuse X7 (6K RAW) for broadcast and film-grade productions. Both include 3-axis gimbal stabilisation and D-Log/D-Log M colour profiles for professional grading."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if weather is bad on shoot day?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We monitor wind speed, cloud cover, and visibility in the 48 hours before the shoot. If conditions fall below safe operating parameters (wind above 30 km/h, rain, or low visibility), we reschedule at no cost. We never fly in unsafe conditions — no exceptions. Reschedule windows are typically within 3–5 days."
          }
        },
        {
          "@type": "Question",
          "name": "How long is a typical drone shoot?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A standard half-day shoot (3–4 hours on location) covers 8–15 planned shots for real estate or event coverage. Full-day shoots (6–8 hours) handle larger properties, industrial sites, or event coverage from dawn to dusk. Multi-day shoots are available for large construction sites, resorts, or brand campaign productions."
          }
        },
        {
          "@type": "Question",
          "name": "Do you shoot outside of Indore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — we regularly operate across Madhya Pradesh and can mobilise to Mumbai, Delhi, Jaipur, Goa, and other locations across India. Outstation shoots are quoted with travel and accommodation at cost. For remote locations, we provide a detailed site assessment before confirming operability."
          }
        },
        {
          "@type": "Question",
          "name": "Can you combine drone footage with ground-level video?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely — combined aerial and ground productions are the most powerful format for real estate, events, and brand films. We bring both drone and ground camera operators on combined shoots, delivering a single edited video that seamlessly integrates aerial establishes with close-up ground footage and interiors."
          }
        },
        {
          "@type": "Question",
          "name": "What format is the edited video delivered in?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Edited videos delivered as H.264 MP4 (web-optimised) and H.265 MP4 (archive quality) at 1080p and 4K resolutions. Social-optimised cuts (9:16 vertical for Reels/Shorts) included for brand and event shoots at no extra charge. Raw footage delivered as DCI 4K or 5.1K CinemaDNG on request."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How Drone Video & Aerial Photography India Works — Our Process",
      "description": "Professional drone video and aerial photography for real estate, events, construction, and brand campaigns. Click Decoded delivers cinematic 4K aerial footage with licensed drone pilots across India.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Brief & Site Survey",
          "text": "We review your location, objectives, and shot list. Airspace classification checked — we handle NOC applications for controlled zones. Weather windows identified and shoot date confirmed within 24–48 hours."
        },
        {
          "@type": "HowToStep",
          "name": "Permits & Compliance",
          "text": "All DGCA regulatory requirements fulfilled before the shoot date. For restricted airspace (near airports or military zones), we file the necessary permissions and confirm clearance — no surprises on shoot day."
        },
        {
          "@type": "HowToStep",
          "name": "Shoot Day",
          "text": "Pilot and cinematographer on location with full equipment kit. Shots executed against the agreed list with live preview on a tablet so you can approve key frames before the drone lands. Backup batteries for extended shoots."
        },
        {
          "@type": "HowToStep",
          "name": "Edit & Deliver",
          "text": "Footage colour-graded in DaVinci Resolve, cut to brief with music and motion graphics. First cut delivered within 3 working days. Up to 2 revision rounds included. Raw files delivered alongside the final edit."
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
          "name": "Drone Videography",
          "item": "https://www.clickdecoded.com/services/drone-video"
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
      <div className="breadcrumb"><div className="wrap"><div className="bc-list"><a href="/">Home</a><span style={{ opacity: '.4' }}>›</span><span>Content</span><span style={{ opacity: '.4' }}>›</span><span>Drone Video</span></div></div></div>
      <section className="hero">
<div className="wrap">
<div className="hero-grid">
<div>
<div className="hero-eyebrow">🚁 4K Aerial · Licensed Pilots · DGCA Compliant</div>
<h1>Aerial Footage That Makes Your<br /><em>Property, Event or Brand</em> Unforgettable.</h1>
<p className="hero-desc">Cinematic 4K drone video and aerial photography for real estate, events, construction, and brand campaigns — shot by DGCA-licensed pilots with professional cinema-grade drones across India.</p>
<div className="hero-btns">
<a href="/contact" className="btn btn-ac">🚁 Book a Drone Shoot</a>
<a href="https://wa.me/919407000101" className="btn btn-ghost">💬 WhatsApp Us</a>
</div>
<div className="hero-proof">
<span className="proof-item"><strong>4K/60fps</strong> Cinema Grade</span>
<span className="proof-item"><strong>DGCA</strong> Licensed Pilots</span>
<span className="proof-item"><strong>₹25K</strong> Starting</span>
</div>
</div>

<div className="dr-mock">
<div className="mock-browser">
<div className="mock-dots"><span></span><span></span><span></span></div>
<div className="mock-url">Drone Flight Controller — Live Feed</div>
</div>

<div className="dr-feed">
<div className="dr-grid-lines"></div>
<div className="dr-horizon"></div>
<div className="dr-hud-top">
<div className="dr-hud-item">ALT <span>142m</span></div>
<div className="dr-hud-item">SPD <span>0 km/h</span></div>
<div className="dr-hud-item">BATT <span>84%</span></div>
</div>
<div className="dr-rec">
<div className="dr-rec-dot"></div> REC · 4K/60fps · 00:04:32
          </div>
<div className="dr-crosshair">
<div className="dr-ch-h"></div>
<div className="dr-ch-v"></div>
<div className="dr-ch-c"></div>
</div>
<div className="dr-hud-bottom">
<div className="dr-hud-item">GPS <span>22°43'N 75°50'E</span></div>
<div className="dr-hud-item">WIND <span>8 km/h NE</span></div>
</div>
</div>

<div className="dr-telem">
<div className="dr-tel"><div className="drtv">142m</div><div className="drtl">Altitude</div></div>
<div className="dr-tel"><div className="drtv">4K</div><div className="drtl">Resolution</div></div>
<div className="dr-tel"><div className="drtv">84%</div><div className="drtl">Battery</div></div>
<div className="dr-tel"><div className="drtv">8 km/h</div><div className="drtl">Wind Speed</div></div>
</div>

<div className="dr-scenes">
<div className="scene-label">Shot List — Real Estate Shoot</div>
<div className="scene-list">
<div className="scene-item">
<div className="scene-num">01</div>
<div className="scene-name">Aerial overview — full property perimeter</div>
<div className="scene-dur">0:48</div>
<div className="scene-check">✅</div>
</div>
<div className="scene-item active">
<div className="scene-num">02</div>
<div className="scene-name">Reveal shot — approach from east at 142m</div>
<div className="scene-dur">0:32</div>
<div className="scene-check">🔴</div>
</div>
<div className="scene-item">
<div className="scene-num">03</div>
<div className="scene-name">Neighbourhood context — 300m altitude pan</div>
<div className="scene-dur">—</div>
<div className="scene-check">⏳</div>
</div>
</div>
</div>
<div className="dr-stats">
<div className="dr-stat"><div className="drsv">4K/60</div><div className="drsl">Camera Spec</div></div>
<div className="dr-stat"><div className="drsv">142m</div><div className="drsl">Max Altitude</div></div>
<div className="dr-stat"><div className="drsv">3 Scenes</div><div className="drsl">Shot List</div></div>
</div>
</div>
</div>
</div>
</section>
      <div className="stats-strip">
<div className="stats-inner">
<div className="stat-box"><div className="stat-n">4K/60</div><div className="stat-l">Cinema Grade Footage</div></div>
<div className="stat-box"><div className="stat-n">DGCA</div><div className="stat-l">Licensed Pilots</div></div>
<div className="stat-box"><div className="stat-n">3 Days</div><div className="stat-l">Edit Turnaround</div></div>
<div className="stat-box"><div className="stat-n">₹25K</div><div className="stat-l">Starting Per Shoot</div></div>
</div>
</div>
      <section>
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag">What's Included</div>
<h2>End-to-End Drone Production,<br />Not Just a Pilot for Hire.</h2>
<p>Shot planning, permits, flying, and post-production — every element handled so you receive a ready-to-publish cinematic video, not raw footage.</p>
</div>
<div className="inc-grid">
<div className="inc-card rv"><div className="inc-icon">📋</div><h3>Pre-Flight Planning</h3><p>Site survey, airspace clearance check, shot list development, and weather window planning — all done before the drone leaves the case, ensuring every minute in the air is productive and safe.</p></div>
<div className="inc-card rv2"><div className="inc-icon">🚁</div><h3>DGCA-Licensed Pilots</h3><p>All flights operated by DGCA-certified remote pilots with full insurance and airspace authorisation. We handle all regulatory compliance — including controlled airspace NOC applications where required.</p></div>
<div className="inc-card rv3"><div className="inc-icon">🎬</div><h3>4K Cinema Drone Systems</h3><p>DJI Mavic 3 Cine and Inspire 2 systems with 4K/60fps capture, 3-axis gimbal stabilisation, and D-Log colour profiles — delivering broadcast-quality footage ready for professional colour grading.</p></div>
<div className="inc-card rv"><div className="inc-icon">✂️</div><h3>Professional Video Editing</h3><p>Raw aerial footage colour-graded, stabilised, cut to brief with motion titles, music (licensed), and voiceover if required — delivered as a finished video ready for your website, YouTube, or social media.</p></div>
<div className="inc-card rv2"><div className="inc-icon">📸</div><h3>Aerial Stills Included</h3><p>High-resolution aerial stills captured alongside video — 20MP+ JPEGs retouched and delivered alongside the video package for use in print, website hero sections, and social media.</p></div>
<div className="inc-card rv3"><div className="inc-icon">🗂️</div><h3>Raw Footage Delivery</h3><p>Full unedited raw footage delivered via Google Drive alongside the edited deliverable — so your team has complete creative freedom to cut alternate versions or repurpose content in future productions.</p></div>
</div>
</div>
</section>
      <section className="dark-section">
<div className="wrap">
<div className="sec-h rv" style={{ marginBottom: '40px' }}>
<h2 style={{ color: '#fff' }}>Every Use Case for Drone<br />Video, Covered.</h2>
<p style={{ color: 'rgba(255,255,255,.55)' }}>From property fly-throughs to construction progress documentation — aerial footage that serves your specific business objective.</p>
</div>
<div className="formats-grid">
<div className="fmt-card rv"><div className="fmt-top"><div className="fmt-icon">🏗️</div><div className="fmt-tag">Real Estate</div></div><h3>Real Estate &amp; Property</h3><p>Aerial reveal shots, neighbourhood context videos, and property overview footage that sell square footage before a buyer visits the site — a proven conversion tool for premium properties.</p></div>
<div className="fmt-card rv2"><div className="fmt-top"><div className="fmt-icon">🏗️</div><div className="fmt-tag">Construction</div></div><h3>Construction Progress</h3><p>Monthly or weekly aerial documentation of construction milestones — delivered as time-lapse videos or static progress shots for investor reporting, marketing, and client updates.</p></div>
<div className="fmt-card rv3"><div className="fmt-top"><div className="fmt-icon">🎉</div><div className="fmt-tag">Events</div></div><h3>Events &amp; Weddings</h3><p>Aerial coverage for corporate events, product launches, festivals, and weddings — establishing shots that capture scale and atmosphere no ground-based camera can replicate.</p></div>
<div className="fmt-card rv"><div className="fmt-top"><div className="fmt-icon">🏭</div><div className="fmt-tag">Industrial</div></div><h3>Industrial &amp; Infrastructure</h3><p>Facility overviews, site surveys, and infrastructure documentation for manufacturing plants, solar farms, and logistics hubs — delivered in 4K for board presentations and investor decks.</p></div>
<div className="fmt-card rv2"><div className="fmt-top"><div className="fmt-icon">🎯</div><div className="fmt-tag">Brand</div></div><h3>Brand Campaign Footage</h3><p>Cinematic aerial sequences for TVC, digital brand films, and social media campaigns — sweeping landscape shots, product-in-environment aerials, and hero reveals that ground-level cameras cannot achieve.</p></div>
<div className="fmt-card rv3"><div className="fmt-top"><div className="fmt-icon">🌿</div><div className="fmt-tag">Tourism</div></div><h3>Tourism &amp; Hospitality</h3><p>Resort overviews, destination landscapes, and property showcase videos for hotels, resorts, and tourism boards — aerial footage that sells the experience before the guest even books.</p></div>
</div>
</div>
</section>
      <section className="bg-subtle">
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag">Our Process</div>
<h2>Briefed Today. Footage<br />Delivered in 3 Days.</h2>
<p>A tightly managed production workflow from airspace clearance to colour-graded edit — with zero ambiguity at each stage.</p>
</div>
<div className="steps-grid">
<div className="step rv"><div className="step-num">01</div><h4>Brief &amp; Site Survey</h4><p>We review your location, objectives, and shot list. Airspace classification checked — we handle NOC applications for controlled zones. Weather windows identified and shoot date confirmed within 24–48 hours.</p></div>
<div className="step rv2"><div className="step-num">02</div><h4>Permits &amp; Compliance</h4><p>All DGCA regulatory requirements fulfilled before the shoot date. For restricted airspace (near airports or military zones), we file the necessary permissions and confirm clearance — no surprises on shoot day.</p></div>
<div className="step rv3"><div className="step-num">03</div><h4>Shoot Day</h4><p>Pilot and cinematographer on location with full equipment kit. Shots executed against the agreed list with live preview on a tablet so you can approve key frames before the drone lands. Backup batteries for extended shoots.</p></div>
<div className="step rv3"><div className="step-num">04</div><h4>Edit &amp; Deliver</h4><p>Footage colour-graded in DaVinci Resolve, cut to brief with music and motion graphics. First cut delivered within 3 working days. Up to 2 revision rounds included. Raw files delivered alongside the final edit.</p></div>
</div>
</div>
</section>
      <section>
<div className="wrap">
<div className="sec-h rv"><h2>Frequently Asked Questions</h2></div>
<div className="faq-2col">
<div>
<div className="fi"><button className="fi-q">Do you have DGCA certification and insurance?<div className="fi-icon">+</div></button><div className="fi-a">Yes — all our drone pilots hold valid DGCA Remote Pilot Certificates and operate under current UAS operator authorisation. We carry third-party liability insurance for every shoot. Documentation available on request and shared proactively for shoots requiring site security approval.</div></div>
<div className="fi"><button className="fi-q">Can you fly near airports or in restricted zones?<div className="fi-icon">+</div></button><div className="fi-a">We can fly in controlled airspace with prior permission. For Green and Yellow zones, we file LAAS (Low Altitude Airspace Management) applications through the Digital Sky platform. Red zones (directly over airports, military installations) are not accessible — we advise on this during the site survey stage before booking is confirmed.</div></div>
<div className="fi"><button className="fi-q">What drone equipment do you use?<div className="fi-icon">+</div></button><div className="fi-a">Our primary systems are the DJI Mavic 3 Cine (4K/120fps, 5.1K Hasselblad sensor) for versatile commercial shoots and the DJI Inspire 2 with Zenmuse X7 (6K RAW) for broadcast and film-grade productions. Both include 3-axis gimbal stabilisation and D-Log/D-Log M colour profiles for professional grading.</div></div>
<div className="fi"><button className="fi-q">What happens if weather is bad on shoot day?<div className="fi-icon">+</div></button><div className="fi-a">We monitor wind speed, cloud cover, and visibility in the 48 hours before the shoot. If conditions fall below safe operating parameters (wind above 30 km/h, rain, or low visibility), we reschedule at no cost. We never fly in unsafe conditions — no exceptions. Reschedule windows are typically within 3–5 days.</div></div>
</div>
<div>
<div className="fi"><button className="fi-q">How long is a typical drone shoot?<div className="fi-icon">+</div></button><div className="fi-a">A standard half-day shoot (3–4 hours on location) covers 8–15 planned shots for real estate or event coverage. Full-day shoots (6–8 hours) handle larger properties, industrial sites, or event coverage from dawn to dusk. Multi-day shoots are available for large construction sites, resorts, or brand campaign productions.</div></div>
<div className="fi"><button className="fi-q">Do you shoot outside of Indore?<div className="fi-icon">+</div></button><div className="fi-a">Yes — we regularly operate across Madhya Pradesh and can mobilise to Mumbai, Delhi, Jaipur, Goa, and other locations across India. Outstation shoots are quoted with travel and accommodation at cost. For remote locations, we provide a detailed site assessment before confirming operability.</div></div>
<div className="fi"><button className="fi-q">Can you combine drone footage with ground-level video?<div className="fi-icon">+</div></button><div className="fi-a">Absolutely — combined aerial and ground productions are the most powerful format for real estate, events, and brand films. We bring both drone and ground camera operators on combined shoots, delivering a single edited video that seamlessly integrates aerial establishes with close-up ground footage and interiors.</div></div>
<div className="fi"><button className="fi-q">What format is the edited video delivered in?<div className="fi-icon">+</div></button><div className="fi-a">Edited videos delivered as H.264 MP4 (web-optimised) and H.265 MP4 (archive quality) at 1080p and 4K resolutions. Social-optimised cuts (9:16 vertical for Reels/Shorts) included for brand and event shoots at no extra charge. Raw footage delivered as DCI 4K or 5.1K CinemaDNG on request.</div></div>
</div>
</div>
</div>
</section>
      <div className="wrap" style={{ padding: '40px 28px', borderTop: '1px solid var(--bdr)' }}>
<div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--s)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '16px' }}>Related Services</div>
<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
<a href="/services/hd-photography" className="rel-link">📸 HD Photography</a>
<a href="/services/virtual-tour" className="rel-link">🌐 Virtual Tour</a>
<a href="/services/influencer-video" className="rel-link">🎬 Influencer Video</a>
<a href="/services/product-photography" className="rel-link">📦 Product Photography</a>
<a href="/services/ai-video" className="rel-link">🤖 AI Video</a>
</div>
</div>
      <section className="cta-section">
<div className="wrap">
<h2>Ready to Show Your Property,<br />Event or Brand From Above?</h2>
<p>Tell us your location and shoot objective — we'll check airspace, suggest the right drone system, and send a quote within 24 hours.</p>
<div className="cta-btns">
<a href="/contact" className="btn btn-ac">🚁 Book a Drone Shoot</a>
<a href="https://wa.me/919407000101" className="btn btn-wa">💬 WhatsApp Now</a>
</div>
</div>
</section>
      <PageScript id="services-drone-video-0" code={js0} />
    </>
  )
}
