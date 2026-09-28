/* eslint-disable */
// src/app/services/ui-ux/page.tsx — generated from ui-ux.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "UI/UX Design India | Click Decoded",
  description: "Premium UI/UX design for web apps, mobile apps, and SaaS products. Click Decoded delivers research-backed, conversion-optimised design with Figma handoff.",
  alternates: { canonical: "/services/ui-ux" },
}

const css = `
:root{
  --ac:#8B5CF6;--ac2:#7c3aed;--ac-rgb:139,92,246;
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
.hero{background:linear-gradient(155deg,#0d0520 0%,#180a38 45%,#0d0520 100%);padding:96px 0 80px;position:relative;overflow:hidden;}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 60% at 70% 30%,rgba(139,92,246,.2) 0%,transparent 65%),radial-gradient(ellipse 35% 40% at 5% 80%,rgba(139,92,246,.07) 0%,transparent 60%);}
.hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;position:relative;z-index:2;}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;background:rgba(139,92,246,.12);border:1px solid rgba(139,92,246,.3);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#c4b5fd;margin-bottom:20px;}
.hero h1{font-size:48px;color:#fff;line-height:1.06;letter-spacing:-.04em;margin-bottom:20px;}
.hero h1 em{font-style:normal;background:linear-gradient(135deg,#c4b5fd,#8b5cf6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-desc{font-size:17px;color:rgba(255,255,255,.62);line-height:1.7;margin-bottom:32px;max-width:460px;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:36px;}
.hero-proof{display:flex;gap:24px;flex-wrap:wrap;}
.proof-item{font-size:13px;color:rgba(255,255,255,.5);}
.proof-item strong{color:#fff;font-weight:700;}
/* FIGMA CANVAS MOCK */
.figma-mock{border-radius:20px;overflow:hidden;box-shadow:0 28px 70px rgba(0,0,0,.65);background:#1e1e2e;border:1px solid rgba(139,92,246,.2);}
.mock-browser{background:rgba(255,255,255,.04);padding:10px 14px;border-bottom:1px solid rgba(255,255,255,.06);display:flex;align-items:center;gap:10px;}
.mock-dots{display:flex;gap:5px;}
.mock-dots span{width:9px;height:9px;border-radius:50%;}
.mock-dots span:nth-child(1){background:#ff5f57;}
.mock-dots span:nth-child(2){background:#ffbd2e;}
.mock-dots span:nth-child(3){background:#28c840;}
.mock-url{flex:1;background:rgba(255,255,255,.06);border-radius:6px;padding:5px 12px;font-size:11px;color:rgba(255,255,255,.3);}
.figma-bar{background:#2c2c3e;padding:7px 14px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,.06);}
.fb-tools{display:flex;gap:4px;}
.fb-tool{width:22px;height:22px;border-radius:5px;background:rgba(255,255,255,.07);display:flex;align-items:center;justify-content:center;font-size:10px;}
.fb-tool.ac{background:rgba(139,92,246,.3);border:1px solid rgba(139,92,246,.5);}
.fb-filename{font-size:10px;color:rgba(255,255,255,.45);}
.fb-badge{font-size:9px;font-weight:700;padding:2px 8px;border-radius:5px;background:rgba(139,92,246,.2);border:1px solid rgba(139,92,246,.4);color:#c4b5fd;}
/* Canvas layout */
.figma-canvas{display:grid;grid-template-columns:90px 1fr 78px;height:260px;}
/* Left panel — layers */
.fig-layers{background:#252535;border-right:1px solid rgba(255,255,255,.06);padding:8px 6px;overflow:hidden;}
.fig-panel-label{font-size:8px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:rgba(255,255,255,.25);margin-bottom:6px;padding:0 4px;}
.layer-item{display:flex;align-items:center;gap:5px;padding:4px 4px;border-radius:4px;cursor:pointer;transition:.1s;}
.layer-item:hover,.layer-item.sel{background:rgba(139,92,246,.15);}
.layer-icon{font-size:9px;width:12px;text-align:center;flex-shrink:0;}
.layer-name{font-size:9px;color:rgba(255,255,255,.5);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.layer-item.sel .layer-name{color:#c4b5fd;}
/* Center canvas */
.fig-center{background:#333344;position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;}
.fig-center::before{content:'';position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.04) 1px,transparent 1px);background-size:12px 12px;}
/* Phone frame */
.phone-frame{width:80px;height:160px;border-radius:14px;background:#1a1a2e;border:2px solid rgba(139,92,246,.5);position:relative;z-index:2;box-shadow:0 8px 32px rgba(0,0,0,.5);}
.phone-notch{width:24px;height:5px;background:rgba(139,92,246,.4);border-radius:3px;margin:6px auto 4px;}
.phone-screen{padding:0 6px;}
.phone-nav{display:flex;justify-content:space-between;align-items:center;margin-bottom:5px;}
.phone-logo{font-size:7px;font-weight:800;color:#c4b5fd;}
.phone-menu{display:flex;gap:2px;}
.phone-menu span{width:3px;height:3px;border-radius:50%;background:rgba(255,255,255,.3);}
.phone-hero-block{height:28px;background:linear-gradient(135deg,rgba(139,92,246,.3),rgba(139,92,246,.1));border-radius:5px;margin-bottom:4px;display:flex;align-items:center;justify-content:center;}
.phone-hero-text{font-size:6px;color:rgba(255,255,255,.6);font-weight:700;}
.phone-cta{height:10px;background:rgba(139,92,246,.6);border-radius:3px;margin-bottom:5px;display:flex;align-items:center;justify-content:center;}
.phone-cta-text{font-size:5px;color:#fff;font-weight:700;}
.phone-cards{display:flex;gap:3px;margin-bottom:4px;}
.phone-card{flex:1;height:20px;background:rgba(255,255,255,.06);border-radius:4px;border:1px solid rgba(255,255,255,.08);}
.phone-bar{height:6px;background:rgba(255,255,255,.04);border-radius:2px;margin-bottom:2px;}
/* Annotation pins */
.ann-pin{position:absolute;z-index:10;}
.ann-dot{width:14px;height:14px;border-radius:50%;background:var(--ac);border:2px solid #fff;display:flex;align-items:center;justify-content:center;font-size:7px;font-weight:800;color:#fff;cursor:pointer;box-shadow:0 2px 8px rgba(139,92,246,.6);}
.ann-label{position:absolute;white-space:nowrap;background:#2c2c3e;border:1px solid rgba(139,92,246,.4);border-radius:5px;padding:3px 7px;font-size:8px;color:#c4b5fd;font-weight:600;}
/* Right panel — inspect */
.fig-inspect{background:#252535;border-left:1px solid rgba(255,255,255,.06);padding:8px 6px;overflow:hidden;}
.ins-section{margin-bottom:8px;}
.ins-label{font-size:8px;font-weight:800;text-transform:uppercase;letter-spacing:.06em;color:rgba(255,255,255,.25);margin-bottom:5px;}
.ins-row{display:flex;justify-content:space-between;align-items:center;margin-bottom:3px;}
.ins-key{font-size:8px;color:rgba(255,255,255,.35);}
.ins-val{font-size:8px;color:rgba(255,255,255,.65);font-weight:600;}
.ins-color{width:10px;height:10px;border-radius:2px;display:inline-block;margin-right:3px;vertical-align:middle;}
.handoff-badge{background:rgba(139,92,246,.15);border:1px solid rgba(139,92,246,.35);border-radius:6px;padding:5px 6px;margin-top:6px;text-align:center;animation:handoffPulse 2s ease-in-out infinite;}
@keyframes handoffPulse{0%,100%{border-color:rgba(139,92,246,.35)}50%{border-color:rgba(139,92,246,.8)}}
.handoff-badge span{font-size:8px;font-weight:700;color:#c4b5fd;display:block;}
/* STATS */
.stats-strip{background:var(--ac);}
.stats-inner{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(0,0,0,.2);}
.stat-box{padding:32px 24px;text-align:center;background:var(--ac);}
.stat-n{font-size:40px;font-weight:900;color:#fff;line-height:1;letter-spacing:-.03em;}
.stat-l{font-size:12px;color:rgba(255,255,255,.85);margin-top:6px;font-weight:500;text-transform:uppercase;letter-spacing:.06em;}
/* SECTIONS */
.sec-h{text-align:center;max-width:640px;margin:0 auto 52px;}
.sec-tag{display:inline-flex;padding:5px 13px;border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:10px;background:rgba(139,92,246,.08);border:1px solid rgba(139,92,246,.18);color:var(--ac);}
.sec-h h2{font-size:36px;margin-bottom:14px;}
.sec-h p{font-size:16px;color:var(--m);line-height:1.65;}
.inc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.inc-card{background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:28px 24px;transition:.2s;}
.inc-card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(139,92,246,.1);border-color:rgba(139,92,246,.2);}
.inc-icon{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:16px;background:rgba(139,92,246,.07);border:1px solid rgba(139,92,246,.12);}
.inc-card h3{font-size:17px;margin-bottom:10px;}
.inc-card p{font-size:13.5px;color:var(--m);line-height:1.65;}
.dark-section{background:var(--n-dark);padding:88px 0;}
.formats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:1000px;margin:0 auto;}
.fmt-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:24px;transition:.2s;}
.fmt-card:hover{border-color:rgba(139,92,246,.35);background:rgba(139,92,246,.07);transform:translateY(-2px);}
.fmt-top{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px;}
.fmt-icon{font-size:26px;}
.fmt-tag{font-size:10px;font-weight:700;padding:3px 8px;border-radius:5px;background:rgba(139,92,246,.15);border:1px solid rgba(139,92,246,.3);color:#c4b5fd;}
.fmt-card h3{font-size:15px;font-weight:700;color:#fff;margin-bottom:6px;}
.fmt-card p{font-size:13px;color:rgba(255,255,255,.5);line-height:1.6;}
.bg-subtle{background:var(--bg);}
.steps-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative;}
.steps-grid::before{content:'';position:absolute;top:34px;left:12%;right:12%;height:2px;background:linear-gradient(90deg,var(--ac),var(--ac2));z-index:0;opacity:.4;}
.step{text-align:center;padding:0 16px;position:relative;z-index:1;}
.step-num{width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,var(--ac),var(--ac2));color:#fff;font-size:20px;font-weight:900;display:flex;align-items:center;justify-content:center;margin:0 auto 18px;box-shadow:0 8px 24px rgba(139,92,246,.3);}
.step h4{font-size:15px;margin-bottom:7px;}
.step p{font-size:13px;color:var(--m);line-height:1.6;}
.faq-2col{display:grid;grid-template-columns:1fr 1fr;gap:0 28px;align-items:start;}
.fi{border:1px solid var(--bdr);border-radius:14px;margin-bottom:10px;overflow:hidden;background:#fff;transition:.15s;}
.fi.on{border-color:rgba(139,92,246,.3);box-shadow:0 4px 20px rgba(139,92,246,.08);}
.fi-q{width:100%;text-align:left;background:transparent;border:none;padding:20px 22px;font-size:14px;font-weight:700;color:var(--n);display:flex;justify-content:space-between;align-items:center;gap:12px;cursor:pointer;}
.fi-icon{width:26px;height:26px;border-radius:50%;flex-shrink:0;background:var(--bg);border:1px solid var(--bdr);display:flex;align-items:center;justify-content:center;color:var(--ac);font-size:18px;line-height:1;transition:transform .2s;}
.fi.on .fi-icon{transform:rotate(45deg);background:var(--ac);color:#fff;border-color:var(--ac);}
.fi-a{max-height:0;overflow:hidden;transition:.3s;color:var(--m);font-size:14px;line-height:1.75;}
.fi.on .fi-a{max-height:300px;padding:0 22px 22px;}
.cta-section{background:linear-gradient(155deg,#0d0520 0%,#180a38 100%);padding:96px 0;text-align:center;position:relative;overflow:hidden;}
.cta-section::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(139,92,246,.16) 0%,transparent 70%);}
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
      "name": "UI/UX Design",
      "provider": {
        "@type": "Organization",
        "name": "Click Decoded",
        "url": "https://www.clickdecoded.com"
      },
      "description": "Premium UI/UX design for web apps, mobile apps, and SaaS products. Click Decoded delivers research-backed, conversion-optimised design with Figma handoff — from wireframes to pixel-perfect prototypes.",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": "UI/UX Design",
      "url": "https://www.clickdecoded.com/services/ui-ux"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What design tools do you use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Figma is our primary design tool — it's industry standard for UI/UX, supports real-time collaboration, and produces the best developer handoff output. We also use FigJam for user flow diagrams and whiteboarding, and Maze or Useberry for usability testing when user testing is in scope. All source files are delivered to you at project completion."
          }
        },
        {
          "@type": "Question",
          "name": "Do you do user testing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — usability testing on Figma prototypes is available as an add-on to standard design projects. We recruit target users, run moderated or unmoderated test sessions, and analyse results to validate design decisions before development. For products with existing user bases, we can also analyse session recordings and heatmaps (Hotjar, Microsoft Clarity) as part of the UX audit phase."
          }
        },
        {
          "@type": "Question",
          "name": "Will the design work with our existing tech stack?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — our designs are tech-stack agnostic. We design what should exist from a UX perspective, then factor in technical constraints during handoff. We have experience designing for React, Next.js, Flutter, React Native, Vue, WordPress, and custom stacks — and we document components in a way that maps to your frontend component architecture."
          }
        },
        {
          "@type": "Question",
          "name": "Can you also develop the designs you create?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — Click Decoded offers full-stack web development alongside UI/UX design. Many clients engage us for both — design and build — giving them a single accountable team with no design-to-dev translation loss. We build in Next.js, React, and WordPress. Ask about combined design + development project pricing during your strategy call."
          }
        },
        {
          "@type": "Question",
          "name": "How many screens are included in a project?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Scope varies by project. A typical web app MVP design covers 15–25 unique screens (plus component states). A full mobile app is typically 30–50 screens. Landing page projects are 1–5 screens. We scope each project individually after understanding your requirements — you'll receive a fixed-price proposal with a defined screen count before work begins."
          }
        },
        {
          "@type": "Question",
          "name": "How many revision rounds are included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Two structured revision rounds are included at each major milestone (wireframes and visual design). Revisions within agreed scope are unlimited within these rounds. Scope additions — new screens, new flows, fundamental direction changes — are treated as change requests and priced accordingly. We track all feedback in Figma comments for full transparency."
          }
        },
        {
          "@type": "Question",
          "name": "Do we own the design files after the project?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — full ownership of all Figma files, assets, and source materials is transferred to you at project completion upon final payment. You can hand the files to any future designer or developer, continue building the design system internally, or bring them back to us for future work. No licensing restrictions, no file lock-in."
          }
        },
        {
          "@type": "Question",
          "name": "Can you improve an existing design vs starting from scratch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely — iterative improvement projects are common. We conduct a UX audit of your existing interface, identify the highest-impact improvements, and redesign specific flows or screens rather than the entire product. This is often more cost-effective and lower-risk than a full redesign for mature products with established user bases."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How UI/UX Design India Works — Our Process",
      "description": "Premium UI/UX design for web apps, mobile apps, and SaaS products. Click Decoded delivers research-backed, conversion-optimised design with Figma handoff — from wireframes to pixel-perfect prototypes.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Discovery & Research",
          "text": "Brand brief, competitor analysis, user persona definition, and heuristic audit of your existing product or website. We map user goals, business goals, and current friction points — aligning the entire design project around measurable outcomes before any design work begins."
        },
        {
          "@type": "HowToStep",
          "name": "Wireframes & FlowsLo-fi wireframes for every screen in the scope, presented within 72 hours of kickoff. User flow diagrams mapping all paths and edge cases. Your feedback incorporated in one revision round — then approved wireframes become the blueprint for visual design.\\n      03Visual Design",
          "text": "High-fidelity UI screens built in Figma with your brand's colour system, typography, and component library. Every screen, every state — default, hover, active, error, empty, loading. Presented for approval with an interactive prototype before handoff."
        },
        {
          "@type": "HowToStep",
          "name": "Handoff & Support",
          "text": "Figma file prepared for your developers — named layers, documented design tokens, annotated spacing, and component specs. We remain available during development to answer implementation questions and review builds against the design, ensuring what ships matches what was designed."
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
          "name": "UI/UX Design",
          "item": "https://www.clickdecoded.com/services/ui-ux"
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
      <div className="breadcrumb"><div className="wrap"><div className="bc-list"><a href="/">Home</a><span style={{ opacity: '.4' }}>›</span><span>Web &amp; Design</span><span style={{ opacity: '.4' }}>›</span><span>UI/UX Design</span></div></div></div>
      <section className="hero">
<div className="wrap">
<div className="hero-grid">
<div>
<div className="hero-eyebrow">🎨 Research · Figma · Prototype · Handoff</div>
<h1>UI/UX Design That <em>Converts Users</em> and Delights Them Every Click.</h1>
<p className="hero-desc">Research-backed UI/UX design for web apps, mobile apps, SaaS dashboards, and landing pages — from wireframes to pixel-perfect Figma prototypes with developer-ready handoff. Design that works, not just looks good.</p>
<div className="hero-btns">
<a href="/contact" className="btn btn-ac">🎨 Get a Free Design Review</a>
<a href="https://wa.me/919407000101" className="btn btn-ghost">💬 WhatsApp Us</a>
</div>
<div className="hero-proof">
<span className="proof-item"><strong>40%</strong> Avg Conversion Lift</span>
<span className="proof-item"><strong>Figma</strong> Dev-Ready Handoff</span>
<span className="proof-item"><strong>₹25K</strong> Starting</span>
</div>
</div>

<div className="figma-mock">
<div className="mock-browser">
<div className="mock-dots"><span></span><span></span><span></span></div>
<div className="mock-url">Figma — Click Decoded Design System</div>
</div>
<div className="figma-bar">
<div className="fb-tools">
<div className="fb-tool">↖</div>
<div className="fb-tool ac">▭</div>
<div className="fb-tool">✎</div>
<div className="fb-tool">T</div>
<div className="fb-tool">💬</div>
</div>
<div className="fb-filename">SaaS App — Mobile UI v3.fig</div>
<div className="fb-badge">✓ Handoff Ready</div>
</div>
<div className="figma-canvas">

<div className="fig-layers">
<div className="fig-panel-label">Layers</div>
<div className="layer-item"><div className="layer-icon">📱</div><div className="layer-name">Mobile Frame</div></div>
<div className="layer-item sel"><div className="layer-icon">▭</div><div className="layer-name">Hero Section</div></div>
<div className="layer-item" style={{ paddingLeft: '12px' }}><div className="layer-icon">T</div><div className="layer-name">Headline</div></div>
<div className="layer-item" style={{ paddingLeft: '12px' }}><div className="layer-icon">▭</div><div className="layer-name">CTA Button</div></div>
<div className="layer-item"><div className="layer-icon">▭</div><div className="layer-name">Card Grid</div></div>
<div className="layer-item" style={{ paddingLeft: '12px' }}><div className="layer-icon">▭</div><div className="layer-name">Card 1</div></div>
<div className="layer-item" style={{ paddingLeft: '12px' }}><div className="layer-icon">▭</div><div className="layer-name">Card 2</div></div>
<div className="layer-item"><div className="layer-icon">▭</div><div className="layer-name">Nav Bar</div></div>
<div className="layer-item"><div className="layer-icon">🎨</div><div className="layer-name">Design Tokens</div></div>
</div>

<div className="fig-center">
<div className="phone-frame">
<div className="phone-notch"></div>
<div className="phone-screen">
<div className="phone-nav">
<div className="phone-logo">BRAND</div>
<div className="phone-menu"><span></span><span></span><span></span></div>
</div>
<div className="phone-hero-block"><div className="phone-hero-text">Grow Smarter</div></div>
<div className="phone-cta"><div className="phone-cta-text">Get Started Free →</div></div>
<div className="phone-cards">
<div className="phone-card"></div>
<div className="phone-card"></div>
</div>
<div className="phone-bar"></div>
<div className="phone-bar" style={{ width: '70%' }}></div>
</div>
</div>

<div className="ann-pin" style={{ top: '52px', right: '28px' }}>
<div className="ann-dot">1</div>
<div className="ann-label" style={{ right: '18px', top: '-2px' }}>Inter 700 · 7px</div>
</div>
<div className="ann-pin" style={{ top: '90px', left: '20px' }}>
<div className="ann-dot">2</div>
<div className="ann-label" style={{ left: '18px', top: '-2px' }}>Radius 5px</div>
</div>
<div className="ann-pin" style={{ bottom: '56px', right: '24px' }}>
<div className="ann-dot">3</div>
<div className="ann-label" style={{ right: '18px', top: '-2px' }}>Gap 3px</div>
</div>
</div>

<div className="fig-inspect">
<div className="ins-section">
<div className="ins-label">Frame</div>
<div className="ins-row"><span className="ins-key">W</span><span className="ins-val">80px</span></div>
<div className="ins-row"><span className="ins-key">H</span><span className="ins-val">160px</span></div>
<div className="ins-row"><span className="ins-key">R</span><span className="ins-val">14px</span></div>
</div>
<div className="ins-section">
<div className="ins-label">Fill</div>
<div className="ins-row"><span className="ins-key"><span className="ins-color" style={{ background: '#8b5cf6' }}></span>Violet</span><span className="ins-val">60%</span></div>
<div className="ins-row"><span className="ins-key"><span className="ins-color" style={{ background: '#c4b5fd' }}></span>Light</span><span className="ins-val">100%</span></div>
</div>
<div className="ins-section">
<div className="ins-label">Typography</div>
<div className="ins-row"><span className="ins-key">Font</span><span className="ins-val">Inter</span></div>
<div className="ins-row"><span className="ins-key">Wt</span><span className="ins-val">700</span></div>
<div className="ins-row"><span className="ins-key">Sz</span><span className="ins-val">7px</span></div>
</div>
<div className="handoff-badge">
<span>⚡ Dev Inspect</span>
<span style={{ marginTop: '1px', color: 'rgba(196,181,253,.6)' }}>CSS Ready</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
      <div className="stats-strip">
<div className="stats-inner">
<div className="stat-box"><div className="stat-n">40%</div><div className="stat-l">Avg Conversion Lift</div></div>
<div className="stat-box"><div className="stat-n">72h</div><div className="stat-l">First Wireframes</div></div>
<div className="stat-box"><div className="stat-n">100%</div><div className="stat-l">Figma Dev Handoff</div></div>
<div className="stat-box"><div className="stat-n">₹25K</div><div className="stat-l">Starting</div></div>
</div>
</div>
      <section>
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag">What's Included</div>
<h2>Research to Handoff —<br />Every Design Layer Covered.</h2>
<p>User research, wireframing, visual design, interactive prototypes, and developer-ready Figma handoff — the complete design process with zero gaps between vision and implementation.</p>
</div>
<div className="inc-grid">
<div className="inc-card rv"><div className="inc-icon">🔬</div><h3>UX Research &amp; Audit</h3><p>Heuristic analysis of your existing interface, competitor UX benchmarking, and user journey mapping — identifying friction points that cause drop-offs before a single pixel is redesigned. Research-first design, not assumption-first.</p></div>
<div className="inc-card rv2"><div className="inc-icon">🗂️</div><h3>Wireframes &amp; User Flows</h3><p>Lo-fi wireframes for every screen and interaction state — presented and approved before moving to visual design. User flow diagrams mapping every path a user takes from entry to conversion, ensuring no dead ends or confusing navigation.</p></div>
<div className="inc-card rv3"><div className="inc-icon">🎨</div><h3>Visual UI Design</h3><p>High-fidelity screen designs in Figma — typography systems, colour palettes, spacing scales, component libraries, and icon sets built to a design system that's consistent across every screen and extensible as your product grows.</p></div>
<div className="inc-card rv"><div className="inc-icon">▶️</div><h3>Interactive Prototypes</h3><p>Clickable Figma prototypes with realistic transitions and micro-interactions — shareable with stakeholders for feedback and usable for user testing before development begins, catching usability issues before they cost engineering time to fix.</p></div>
<div className="inc-card rv2"><div className="inc-icon">💻</div><h3>Developer Handoff</h3><p>Figma files prepared for developer handoff with auto-layout frames, named components, documented design tokens (colours, spacing, type), and annotated specs — giving your dev team everything they need to build exactly what was designed.</p></div>
<div className="inc-card rv3"><div className="inc-icon">📐</div><h3>Design System &amp; Component Library</h3><p>Reusable UI component library built in Figma — buttons, inputs, cards, modals, tables, navigation — with documented usage rules and variant states, ensuring visual consistency and dramatically accelerating future design and development work.</p></div>
</div>
</div>
</section>
      <section className="dark-section">
<div className="wrap">
<div className="sec-h rv" style={{ marginBottom: '40px' }}>
<h2 style={{ color: '#fff' }}>Every Design Engagement<br />We Handle.</h2>
<p style={{ color: 'rgba(255,255,255,.55)' }}>From zero-to-one product design to conversion rate optimisation of existing interfaces — we handle the full spectrum of UI/UX work.</p>
</div>
<div className="formats-grid">
<div className="fmt-card rv"><div className="fmt-top"><div className="fmt-icon">📱</div><div className="fmt-tag">Mobile</div></div><h3>Mobile App UI/UX</h3><p>Native mobile app design for iOS and Android — respecting platform conventions (HIG and Material Design) while expressing your brand identity. Gesture interactions, navigation patterns, and accessibility standards built in from the first frame.</p></div>
<div className="fmt-card rv2"><div className="fmt-top"><div className="fmt-icon">🖥️</div><div className="fmt-tag">Web App</div></div><h3>SaaS Dashboard Design</h3><p>Complex data-dense dashboard interfaces — tables, charts, filters, sidebars, and multi-level navigation — designed for clarity and efficiency. B2B SaaS users need to find information fast; we design interfaces that respect their time.</p></div>
<div className="fmt-card rv3"><div className="fmt-top"><div className="fmt-icon">🛒</div><div className="fmt-tag">E-Commerce</div></div><h3>E-Commerce UX</h3><p>Product listing, PDP, cart, and checkout flows redesigned to maximise conversion — reducing friction at every step of the purchase journey. Checkout UX improvements alone often deliver 15–30% revenue lift without changing a single ad.</p></div>
<div className="fmt-card rv"><div className="fmt-top"><div className="fmt-icon">🚀</div><div className="fmt-tag">Landing Page</div></div><h3>Landing Page Design</h3><p>High-converting landing pages designed around your campaign goal — with above-the-fold hierarchy, social proof placement, objection handling, and CTA positioning optimised using UX best practices and conversion rate principles.</p></div>
<div className="fmt-card rv2"><div className="fmt-top"><div className="fmt-icon">🔄</div><div className="fmt-tag">Redesign</div></div><h3>UI Redesign &amp; Modernisation</h3><p>Legacy interface modernisation — taking dated, inconsistent UIs and rebuilding them with contemporary design systems, improved information architecture, and accessibility compliance, without disrupting the user muscle memory that existing users rely on.</p></div>
<div className="fmt-card rv3"><div className="fmt-top"><div className="fmt-icon">🧪</div><div className="fmt-tag">CRO</div></div><h3>UX Audit &amp; CRO</h3><p>Systematic conversion rate optimisation audit — heatmap analysis, session recordings, funnel drop-off identification, and A/B test hypothesis creation. Turning existing traffic into more revenue without spending more on ads.</p></div>
</div>
</div>
</section>
      <section className="bg-subtle">
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag">Our Process</div>
<h2>Wireframes in 72 Hours,<br />Finals in 3 Weeks.</h2>
<p>A structured design sprint that goes from brief to developer-ready Figma files — fast, without cutting corners on research or quality.</p>
</div>
<div className="steps-grid">
<div className="step rv"><div className="step-num">01</div><h4>Discovery &amp; Research</h4><p>Brand brief, competitor analysis, user persona definition, and heuristic audit of your existing product or website. We map user goals, business goals, and current friction points — aligning the entire design project around measurable outcomes before any design work begins.</p></div>
<div className="step rv2"><div className="step-num">02</div><h4>Wireframes &amp; Flows</h4></div><p>Lo-fi wireframes for every screen in the scope, presented within 72 hours of kickoff. User flow diagrams mapping all paths and edge cases. Your feedback incorporated in one revision round — then approved wireframes become the blueprint for visual design.</p></div>
<div className="step rv3"><div className="step-num">03</div><h4>Visual Design</h4><p>High-fidelity UI screens built in Figma with your brand's colour system, typography, and component library. Every screen, every state — default, hover, active, error, empty, loading. Presented for approval with an interactive prototype before handoff.</p></div>
<div className="step rv3"><div className="step-num">04</div><h4>Handoff &amp; Support</h4><p>Figma file prepared for your developers — named layers, documented design tokens, annotated spacing, and component specs. We remain available during development to answer implementation questions and review builds against the design, ensuring what ships matches what was designed.</p></div>
</div>

</section>
      <section>
<div className="wrap">
<div className="sec-h rv"><h2>Frequently Asked Questions</h2></div>
<div className="faq-2col">
<div>
<div className="fi"><button className="fi-q">What design tools do you use?<div className="fi-icon">+</div></button><div className="fi-a">Figma is our primary design tool — it's industry standard for UI/UX, supports real-time collaboration, and produces the best developer handoff output. We also use FigJam for user flow diagrams and whiteboarding, and Maze or Useberry for usability testing when user testing is in scope. All source files are delivered to you at project completion.</div></div>
<div className="fi"><button className="fi-q">Do you do user testing?<div className="fi-icon">+</div></button><div className="fi-a">Yes — usability testing on Figma prototypes is available as an add-on to standard design projects. We recruit target users, run moderated or unmoderated test sessions, and analyse results to validate design decisions before development. For products with existing user bases, we can also analyse session recordings and heatmaps (Hotjar, Microsoft Clarity) as part of the UX audit phase.</div></div>
<div className="fi"><button className="fi-q">Will the design work with our existing tech stack?<div className="fi-icon">+</div></button><div className="fi-a">Yes — our designs are tech-stack agnostic. We design what should exist from a UX perspective, then factor in technical constraints during handoff. We have experience designing for React, Next.js, Flutter, React Native, Vue, WordPress, and custom stacks — and we document components in a way that maps to your frontend component architecture.</div></div>
<div className="fi"><button className="fi-q">Can you also develop the designs you create?<div className="fi-icon">+</div></button><div className="fi-a">Yes — Click Decoded offers full-stack web development alongside UI/UX design. Many clients engage us for both — design and build — giving them a single accountable team with no design-to-dev translation loss. We build in Next.js, React, and WordPress. Ask about combined design + development project pricing during your strategy call.</div></div>
</div>
<div>
<div className="fi"><button className="fi-q">How many screens are included in a project?<div className="fi-icon">+</div></button><div className="fi-a">Scope varies by project. A typical web app MVP design covers 15–25 unique screens (plus component states). A full mobile app is typically 30–50 screens. Landing page projects are 1–5 screens. We scope each project individually after understanding your requirements — you'll receive a fixed-price proposal with a defined screen count before work begins.</div></div>
<div className="fi"><button className="fi-q">How many revision rounds are included?<div className="fi-icon">+</div></button><div className="fi-a">Two structured revision rounds are included at each major milestone (wireframes and visual design). Revisions within agreed scope are unlimited within these rounds. Scope additions — new screens, new flows, fundamental direction changes — are treated as change requests and priced accordingly. We track all feedback in Figma comments for full transparency.</div></div>
<div className="fi"><button className="fi-q">Do we own the design files after the project?<div className="fi-icon">+</div></button><div className="fi-a">Yes — full ownership of all Figma files, assets, and source materials is transferred to you at project completion upon final payment. You can hand the files to any future designer or developer, continue building the design system internally, or bring them back to us for future work. No licensing restrictions, no file lock-in.</div></div>
<div className="fi"><button className="fi-q">Can you improve an existing design vs starting from scratch?<div className="fi-icon">+</div></button><div className="fi-a">Absolutely — iterative improvement projects are common. We conduct a UX audit of your existing interface, identify the highest-impact improvements, and redesign specific flows or screens rather than the entire product. This is often more cost-effective and lower-risk than a full redesign for mature products with established user bases.</div></div>
</div>
</div>
</div>
</section>
      <div className="wrap" style={{ padding: '40px 28px', borderTop: '1px solid var(--bdr)' }}>
<div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--s)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '16px' }}>Related Services</div>
<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
<a href="/services/web-development" className="rel-link">💻 Web Development</a>
<a href="/ecommerce-dev" className="rel-link">🛒 E-Commerce Dev</a>
<a href="/services/landing-pages" className="rel-link">🚀 Landing Pages</a>
<a href="/services/hd-photography" className="rel-link">📸 HD Photography</a>
<a href="/services/ai-content" className="rel-link">🤖 AI Content</a>
</div>
</div>
      <section className="cta-section">
<div className="wrap">
<h2>Bad UX Is Costing You<br />Conversions Every Day.</h2>
<p>Get a free design review — we'll audit your current interface, identify the three highest-impact UX changes, and show you exactly what we'd do differently.</p>
<div className="cta-btns">
<a href="/contact" className="btn btn-ac">🎨 Get Free Design Review</a>
<a href="https://wa.me/919407000101" className="btn btn-wa">💬 WhatsApp Us</a>
</div>
</div>
</section>
      <PageScript id="services-ui-ux-0" code={js0} />
    </>
  )
}
