/* eslint-disable */
// src/app/services/google-trusted-photography/page.tsx — generated from google-trusted-photography.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "Google Trusted Photography India | Click Decoded",
  description: "Google Trusted Photography and 360° virtual tours that boost your Google Maps listing, increase engagement, and drive more foot traffic. Certified Google.",
  alternates: { canonical: "/services/google-trusted-photography" },
}

const css = `
:root{
  --ac:#4285F4;--ac2:#1a73e8;--ac-rgb:66,133,244;
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
.hero{background:linear-gradient(155deg,#020818 0%,#041230 45%,#020818 100%);padding:96px 0 80px;position:relative;overflow:hidden;}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 60% at 70% 30%,rgba(66,133,244,.2) 0%,transparent 65%),radial-gradient(ellipse 35% 40% at 5% 80%,rgba(66,133,244,.07) 0%,transparent 60%);}
.hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;position:relative;z-index:2;}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;background:rgba(66,133,244,.12);border:1px solid rgba(66,133,244,.3);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#93c5fd;margin-bottom:20px;}
.hero h1{font-size:48px;color:#fff;line-height:1.06;letter-spacing:-.04em;margin-bottom:20px;}
.hero h1 em{font-style:normal;background:linear-gradient(135deg,#93c5fd,#4285f4);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-desc{font-size:17px;color:rgba(255,255,255,.62);line-height:1.7;margin-bottom:32px;max-width:460px;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:36px;}
.hero-proof{display:flex;gap:24px;flex-wrap:wrap;}
.proof-item{font-size:13px;color:rgba(255,255,255,.5);}
.proof-item strong{color:#fff;font-weight:700;}
/* GOOGLE MAPS MOCK */
.gmaps-mock{border-radius:20px;overflow:hidden;box-shadow:0 28px 70px rgba(0,0,0,.65);background:#111827;border:1px solid rgba(66,133,244,.2);}
.mock-browser{background:rgba(255,255,255,.04);padding:10px 14px;border-bottom:1px solid rgba(255,255,255,.06);display:flex;align-items:center;gap:10px;}
.mock-dots{display:flex;gap:5px;}
.mock-dots span{width:9px;height:9px;border-radius:50%;}
.mock-dots span:nth-child(1){background:#ff5f57;}
.mock-dots span:nth-child(2){background:#ffbd2e;}
.mock-dots span:nth-child(3){background:#28c840;}
.mock-url{flex:1;background:rgba(255,255,255,.06);border-radius:6px;padding:5px 12px;font-size:11px;color:rgba(255,255,255,.3);}
/* Maps layout: sidebar + map */
.maps-layout{display:grid;grid-template-columns:180px 1fr;height:300px;}
/* Sidebar */
.maps-sidebar{background:#1f2937;border-right:1px solid rgba(255,255,255,.06);padding:12px 10px;overflow:hidden;}
.biz-name{font-size:12px;font-weight:800;color:#fff;margin-bottom:2px;}
.biz-cat{font-size:9px;color:rgba(255,255,255,.4);margin-bottom:6px;}
.biz-stars{display:flex;align-items:center;gap:4px;margin-bottom:8px;}
.stars{color:#FBBC04;font-size:10px;letter-spacing:1px;}
.rating-n{font-size:10px;font-weight:700;color:#fff;}
.reviews-n{font-size:9px;color:rgba(66,133,244,.8);}
/* Verified badge */
.verified-badge{display:flex;align-items:center;gap:5px;background:rgba(66,133,244,.1);border:1px solid rgba(66,133,244,.3);border-radius:6px;padding:5px 7px;margin-bottom:8px;animation:verifiedPulse 2.5s ease-in-out infinite;}
@keyframes verifiedPulse{0%,100%{border-color:rgba(66,133,244,.3)}50%{border-color:rgba(66,133,244,.8);box-shadow:0 0 8px rgba(66,133,244,.2)}}
.vb-icon{font-size:12px;}
.vb-text{font-size:8.5px;font-weight:700;color:#93c5fd;line-height:1.3;}
.vb-sub{font-size:7.5px;color:rgba(255,255,255,.35);}
/* Photo strip */
.photo-strip-label{font-size:8px;font-weight:800;text-transform:uppercase;letter-spacing:.06em;color:rgba(255,255,255,.3);margin-bottom:5px;}
.photo-strip{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;margin-bottom:8px;}
.ph-thumb{border-radius:4px;aspect-ratio:1;display:flex;align-items:center;justify-content:center;font-size:14px;border:1px solid rgba(255,255,255,.08);}
.ph-thumb:nth-child(1){background:linear-gradient(135deg,#1e3a5f,#2d4f7c);}
.ph-thumb:nth-child(2){background:linear-gradient(135deg,#1a2e1a,#2a4a2a);}
.ph-thumb:nth-child(3){background:linear-gradient(135deg,#3a1a1a,#5a2a2a);}
.ph-thumb:nth-child(4){background:linear-gradient(135deg,#2a1a3a,#3a2a5a);}
.ph-thumb:nth-child(5){background:linear-gradient(135deg,#1a3a3a,#2a5a5a);}
.ph-count{border-radius:4px;aspect-ratio:1;background:rgba(66,133,244,.15);border:1px solid rgba(66,133,244,.25);display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;color:#93c5fd;}
/* Tour btn */
.tour-btn{width:100%;padding:6px;background:rgba(66,133,244,.15);border:1px solid rgba(66,133,244,.3);border-radius:7px;font-size:9px;font-weight:700;color:#93c5fd;text-align:center;cursor:pointer;margin-bottom:6px;}
.biz-info{display:flex;flex-direction:column;gap:4px;}
.biz-info-row{display:flex;align-items:flex-start;gap:5px;font-size:8.5px;color:rgba(255,255,255,.45);}
.biz-info-icon{font-size:9px;flex-shrink:0;margin-top:1px;}
/* Map area */
.maps-main{background:#1a2332;position:relative;overflow:hidden;}
/* Fake map tiles */
.map-tiles{position:absolute;inset:0;opacity:.25;}
.map-tile-h{position:absolute;left:0;right:0;height:1px;background:rgba(255,255,255,.15);}
.map-tile-v{position:absolute;top:0;bottom:0;width:1px;background:rgba(255,255,255,.15);}
/* Road lines */
.map-road{position:absolute;background:rgba(66,133,244,.2);border-radius:2px;}
/* 360 tour window */
.tour-window{position:absolute;top:12px;right:12px;width:130px;height:100px;border-radius:10px;background:linear-gradient(135deg,#0d2137,#1a3a5c);border:1.5px solid rgba(66,133,244,.4);overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,.5);}
.tour-inner{position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;}
.tour-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(66,133,244,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(66,133,244,.08) 1px,transparent 1px);background-size:16px 16px;}
.tour-icon{font-size:28px;position:relative;z-index:2;animation:tourSpin 8s linear infinite;}
@keyframes tourSpin{0%{transform:rotateY(0)}50%{transform:rotateY(180deg)}100%{transform:rotateY(360deg)}}
.tour-nav{position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,.6);padding:4px 6px;display:flex;justify-content:space-between;align-items:center;}
.tour-arrow{width:16px;height:16px;border-radius:50%;background:rgba(66,133,244,.3);border:1px solid rgba(66,133,244,.5);display:flex;align-items:center;justify-content:center;font-size:8px;color:#93c5fd;}
.tour-label{font-size:7.5px;font-weight:700;color:rgba(255,255,255,.6);}
.sv-badge{position:absolute;top:6px;left:6px;background:rgba(66,133,244,.9);border-radius:5px;padding:2px 6px;font-size:7.5px;font-weight:700;color:#fff;display:flex;align-items:center;gap:3px;}
/* Map pin */
.map-pin{position:absolute;bottom:50px;left:60px;z-index:5;}
.pin-dot{width:20px;height:20px;border-radius:50%;background:var(--ac);border:3px solid #fff;box-shadow:0 4px 12px rgba(66,133,244,.6);animation:pinPulse 2s ease-in-out infinite;}
@keyframes pinPulse{0%,100%{box-shadow:0 4px 12px rgba(66,133,244,.6),0 0 0 0 rgba(66,133,244,.3)}50%{box-shadow:0 4px 12px rgba(66,133,244,.6),0 0 0 10px rgba(66,133,244,0)}}
.pin-ring{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:40px;height:40px;border-radius:50%;border:1.5px solid rgba(66,133,244,.3);animation:ringExpand 2s ease-out infinite;}
@keyframes ringExpand{0%{width:20px;height:20px;opacity:.8}100%{width:60px;height:60px;opacity:0}}
/* STATS */
.stats-strip{background:var(--ac);}
.stats-inner{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(0,0,0,.15);}
.stat-box{padding:32px 24px;text-align:center;background:var(--ac);}
.stat-n{font-size:40px;font-weight:900;color:#fff;line-height:1;letter-spacing:-.03em;}
.stat-l{font-size:12px;color:rgba(255,255,255,.85);margin-top:6px;font-weight:500;text-transform:uppercase;letter-spacing:.06em;}
/* SECTIONS */
.sec-h{text-align:center;max-width:640px;margin:0 auto 52px;}
.sec-tag{display:inline-flex;padding:5px 13px;border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:10px;background:rgba(66,133,244,.08);border:1px solid rgba(66,133,244,.18);color:var(--ac);}
.sec-h h2{font-size:36px;margin-bottom:14px;}
.sec-h p{font-size:16px;color:var(--m);line-height:1.65;}
.inc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.inc-card{background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:28px 24px;transition:.2s;}
.inc-card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(66,133,244,.1);border-color:rgba(66,133,244,.2);}
.inc-icon{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:16px;background:rgba(66,133,244,.07);border:1px solid rgba(66,133,244,.12);}
.inc-card h3{font-size:17px;margin-bottom:10px;}
.inc-card p{font-size:13.5px;color:var(--m);line-height:1.65;}
.dark-section{background:var(--n-dark);padding:88px 0;}
.formats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:1000px;margin:0 auto;}
.fmt-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:24px;transition:.2s;}
.fmt-card:hover{border-color:rgba(66,133,244,.35);background:rgba(66,133,244,.07);transform:translateY(-2px);}
.fmt-top{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px;}
.fmt-icon{font-size:26px;}
.fmt-tag{font-size:10px;font-weight:700;padding:3px 8px;border-radius:5px;background:rgba(66,133,244,.15);border:1px solid rgba(66,133,244,.3);color:#93c5fd;}
.fmt-card h3{font-size:15px;font-weight:700;color:#fff;margin-bottom:6px;}
.fmt-card p{font-size:13px;color:rgba(255,255,255,.5);line-height:1.6;}
.bg-subtle{background:var(--bg);}
.steps-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative;}
.steps-grid::before{content:'';position:absolute;top:34px;left:12%;right:12%;height:2px;background:linear-gradient(90deg,var(--ac),var(--ac2));z-index:0;opacity:.4;}
.step{text-align:center;padding:0 16px;position:relative;z-index:1;}
.step-num{width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,var(--ac),var(--ac2));color:#fff;font-size:20px;font-weight:900;display:flex;align-items:center;justify-content:center;margin:0 auto 18px;box-shadow:0 8px 24px rgba(66,133,244,.3);}
.step h4{font-size:15px;margin-bottom:7px;}
.step p{font-size:13px;color:var(--m);line-height:1.6;}
.faq-2col{display:grid;grid-template-columns:1fr 1fr;gap:0 28px;align-items:start;}
.fi{border:1px solid var(--bdr);border-radius:14px;margin-bottom:10px;overflow:hidden;background:#fff;transition:.15s;}
.fi.on{border-color:rgba(66,133,244,.3);box-shadow:0 4px 20px rgba(66,133,244,.08);}
.fi-q{width:100%;text-align:left;background:transparent;border:none;padding:20px 22px;font-size:14px;font-weight:700;color:var(--n);display:flex;justify-content:space-between;align-items:center;gap:12px;cursor:pointer;}
.fi-icon{width:26px;height:26px;border-radius:50%;flex-shrink:0;background:var(--bg);border:1px solid var(--bdr);display:flex;align-items:center;justify-content:center;color:var(--ac);font-size:18px;line-height:1;transition:transform .2s;}
.fi.on .fi-icon{transform:rotate(45deg);background:var(--ac);color:#fff;border-color:var(--ac);}
.fi-a{max-height:0;overflow:hidden;transition:.3s;color:var(--m);font-size:14px;line-height:1.75;}
.fi.on .fi-a{max-height:300px;padding:0 22px 22px;}
.cta-section{background:linear-gradient(155deg,#020818 0%,#041230 100%);padding:96px 0;text-align:center;position:relative;overflow:hidden;}
.cta-section::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(66,133,244,.15) 0%,transparent 70%);}
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
  .maps-layout{grid-template-columns:1fr;}
  .maps-main{display:none;}
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
      "name": "Google Trusted Photography",
      "provider": {
        "@type": "Organization",
        "name": "Click Decoded",
        "url": "https://www.clickdecoded.com"
      },
      "description": "Google Trusted Photography and 360° virtual tours that boost your Google Maps listing, increase engagement, and drive more foot traffic. Certified Google Street View photographers across India.",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": "Google Trusted Photography",
      "url": "https://www.clickdecoded.com/services/google-trusted-photography"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a \\"Google Trusted\\" photographer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Google Trusted Photographers are individuals who have been certified by Google to shoot and publish 360° virtual tours directly to Google Street View and Google Business Profiles. Certification requires passing a technical quality test and adhering to Google's photo quality standards. Only certified photographers can publish tours that appear with the Google Street View badge — giving listings an official, verified status that uncertified uploads lack."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to go live on Google Maps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Once we submit the tour, Google typically publishes it within 24–72 hours. In our experience, most tours appear within 48 hours of submission. Still photos uploaded to your Google Business Profile are usually visible within a few hours. The total time from shoot to live is typically 3–5 days including processing and editing."
          }
        },
        {
          "@type": "Question",
          "name": "How big is the premises we can cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There's no technical limit on premises size — we've shot everything from small cafés (2–3 rooms) to large hotels and hospital campuses (50+ rooms and corridors). Larger premises simply require a longer shoot and more processing time. We price by shoot duration and number of panoramic positions captured — you'll get a fixed quote before we start."
          }
        },
        {
          "@type": "Question",
          "name": "Will the tour appear on Google Search too?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — your 360° tour appears in multiple Google surfaces: inside your Google Maps listing, in the Google Search knowledge panel when someone searches your business name, inside the \\"Street View\\" layer on Google Maps, and embedded anywhere you choose to place the tour link on your website. It's a single shoot that multiplies across all Google properties."
          }
        },
        {
          "@type": "Question",
          "name": "Can we embed the tour on our own website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — Google provides an embeddable iframe link for every published Street View tour. We provide the embed code as part of our deliverables, along with instructions for adding it to your website. Many clients embed the tour on their contact page, about page, or homepage — increasing website engagement significantly for location-dependent businesses."
          }
        },
        {
          "@type": "Question",
          "name": "What preparation is needed before the shoot?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We recommend tidying visible clutter, ensuring lights are on in all spaces, removing sensitive documents or personal items from visible surfaces, and having staff or customers informed that a shoot is happening. For restaurants, a pre-service shoot (before lunch or dinner rush) is ideal. We'll share a brief preparation checklist when your shoot is confirmed."
          }
        },
        {
          "@type": "Question",
          "name": "Do you cover cities outside Indore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — we cover Indore, Bhopal, Ujjain, and surrounding areas of Madhya Pradesh. For other cities in India, we can arrange shoots through our network of certified partner photographers. Travel fees apply for locations beyond 50km from Indore. Contact us with your location for availability and pricing."
          }
        },
        {
          "@type": "Question",
          "name": "What if Google rejects the tour?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Google rejections are rare for certified photographers following quality guidelines — in 5+ years we've had a rejection rate under 2%. If a tour is rejected, we reprocess and resubmit at no additional cost until it's published. Our certification status means we understand Google's requirements and rarely encounter quality issues that would trigger rejection."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How Google Trusted Photography India Works — Our Process",
      "description": "Google Trusted Photography and 360° virtual tours that boost your Google Maps listing, increase engagement, and drive more foot traffic. Certified Google Street View photographers across India.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Book & Brief",
          "text": "Book a shoot via phone, WhatsApp, or our contact form. We discuss your business type, premises size, key spaces to capture, and any specific requirements — then confirm a shoot date within 3–5 business days, usually sooner for Indore locations."
        },
        {
          "@type": "HowToStep",
          "name": "Professional Shoot",
          "text": "Our Google Certified photographer arrives with professional 360° camera equipment — no setup required from your side. The shoot takes 1–3 hours depending on premises size. We capture every room, angle, and key brand touchpoint in spherical 360°."
        },
        {
          "@type": "HowToStep",
          "name": "Process & Stitch",
          "text": "Raw 360° images processed, colour-graded, and stitched into seamless virtual tour panoramas. Quality checked for exposure, alignment, and visual accuracy. Still photos selected, retouched, and prepared for Google Business Profile upload."
        },
        {
          "@type": "HowToStep",
          "name": "Live on Google Maps",
          "text": "360° tour published to Google Street View and your Google Business Profile. Still photos uploaded and optimised. Your profile reviewed for completeness and accuracy. Within 48 hours, your immersive listing is live and visible to every Google Maps searcher in your area."
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
          "name": "Google Trusted Photography",
          "item": "https://www.clickdecoded.com/services/google-trusted-photography"
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
      <div className="breadcrumb"><div className="wrap"><div className="bc-list"><a href="/">Home</a><span style={{ opacity: '.4' }}>›</span><span>Content</span><span style={{ opacity: '.4' }}>›</span><span>Google Trusted Photography</span></div></div></div>
      <section className="hero">
<div className="wrap">
<div className="hero-grid">
<div>
<div className="hero-eyebrow">📍 360° Tours · Street View · GMB Photos</div>
<h1>Google Trusted Photography That <em>Puts Your Business</em> on the Map.</h1>
<p className="hero-desc">Certified Google Street View photography and 360° virtual tours published directly to your Google Business Profile — boosting visibility, engagement, and foot traffic for hotels, restaurants, clinics, showrooms, and retail spaces.</p>
<div className="hero-btns">
<a href="/contact" className="btn btn-ac">📍 Book a Shoot</a>
<a href="https://wa.me/919407000101" className="btn btn-ghost">💬 WhatsApp Us</a>
</div>
<div className="hero-proof">
<span className="proof-item"><strong>2×</strong> More Map Engagement</span>
<span className="proof-item"><strong>Google</strong> Certified Photographer</span>
<span className="proof-item"><strong>48h</strong> Live on Maps</span>
</div>
</div>

<div className="gmaps-mock">
<div className="mock-browser">
<div className="mock-dots"><span></span><span></span><span></span></div>
<div className="mock-url">google.com/maps — Business Profile</div>
</div>
<div className="maps-layout">

<div className="maps-sidebar">
<div className="biz-name">The Grand Indore</div>
<div className="biz-cat">Hotel · Indore, MP</div>
<div className="biz-stars">
<span className="stars">★★★★★</span>
<span className="rating-n">4.8</span>
<span className="reviews-n">(342)</span>
</div>
<div className="verified-badge">
<div className="vb-icon">✓</div>
<div>
<div className="vb-text">Google Trusted</div>
<div className="vb-sub">Verified Photographer</div>
</div>
</div>
<div className="photo-strip-label">Photos · 47 total</div>
<div className="photo-strip">
<div className="ph-thumb">🏨</div>
<div className="ph-thumb">🛋️</div>
<div className="ph-thumb">🍽️</div>
<div className="ph-thumb">🏊</div>
<div className="ph-thumb">🌿</div>
<div className="ph-count">+42</div>
</div>
<div className="tour-btn">▶ View 360° Tour</div>
<div className="biz-info">
<div className="biz-info-row"><span className="biz-info-icon">📍</span>MG Road, Indore 452001</div>
<div className="biz-info-row"><span className="biz-info-icon">🕐</span>Open · Closes 11 PM</div>
<div className="biz-info-row"><span className="biz-info-icon">📞</span>+91 731 400 0000</div>
</div>
</div>

<div className="maps-main">

<div className="map-tiles">
<div className="map-tile-h" style={{ top: '25%' }}></div>
<div className="map-tile-h" style={{ top: '50%' }}></div>
<div className="map-tile-h" style={{ top: '75%' }}></div>
<div className="map-tile-v" style={{ left: '25%' }}></div>
<div className="map-tile-v" style={{ left: '50%' }}></div>
<div className="map-tile-v" style={{ left: '75%' }}></div>
</div>

<div className="map-road" style={{ top: '48%', left: '0', right: '0', height: '8px', transform: 'rotate(-3deg)' }}></div>
<div className="map-road" style={{ top: '0', bottom: '0', left: '38%', width: '6px' }}></div>
<div className="map-road" style={{ top: '20%', left: '20%', right: '30%', height: '5px', transform: 'rotate(8deg)' }}></div>

<div className="map-pin">
<div className="pin-ring"></div>
<div className="pin-dot"></div>
</div>

<div className="tour-window">
<div className="tour-inner">
<div className="tour-grid"></div>
<div className="tour-icon">🏨</div>
<div className="sv-badge">360°</div>
</div>
<div className="tour-nav">
<div className="tour-arrow">‹</div>
<div className="tour-label">Street View</div>
<div className="tour-arrow">›</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
      <div className="stats-strip">
<div className="stats-inner">
<div className="stat-box"><div className="stat-n">2×</div><div className="stat-l">More Map Engagement</div></div>
<div className="stat-box"><div className="stat-n">48h</div><div className="stat-l">Live on Google Maps</div></div>
<div className="stat-box"><div className="stat-n">41%</div><div className="stat-l">More Direction Requests</div></div>
<div className="stat-box"><div className="stat-n">100%</div><div className="stat-l">Google Certified</div></div>
</div>
</div>
      <section>
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag">What's Included</div>
<h2>Shot, Stitched, and Live on<br />Google Maps in 48 Hours.</h2>
<p>Our Google Certified photographers handle everything — equipment, shooting, 360° stitching, Street View upload, and Google Business Profile optimisation. You just open the door.</p>
</div>
<div className="inc-grid">
<div className="inc-card rv"><div className="inc-icon">📷</div><h3>360° Interior Photography</h3><p>Full spherical 360° photography of your premises — lobby, rooms, dining areas, offices, showroom floors — using professional 360° camera systems. Every space captured in immersive detail that lets potential customers walk through before they arrive.</p></div>
<div className="inc-card rv2"><div className="inc-icon">🌐</div><h3>Google Street View Upload</h3><p>All 360° tours stitched, processed, and published directly to Google Street View — appearing inside your Google Maps listing, Google Search knowledge panel, and Google Business Profile for any searcher exploring your location.</p></div>
<div className="inc-card rv3"><div className="inc-icon">🏢</div><h3>Google Business Profile Photos</h3><p>High-quality still photography of your interior, exterior, products, and team — optimised and uploaded to your Google Business Profile. More photos = higher Maps ranking and more visual engagement with searchers comparing options.</p></div>
<div className="inc-card rv"><div className="inc-icon">🔗</div><h3>Embeddable Virtual Tour</h3><p>Your 360° tour embedded as an interactive experience on your own website — letting visitors explore your premises directly on your site without leaving. Increases time on page and reduces bounce rates for location-dependent businesses.</p></div>
<div className="inc-card rv2"><div className="inc-icon">📍</div><h3>GMB Profile Optimisation</h3><p>Your Google Business Profile reviewed and optimised alongside the photo upload — categories, service areas, business description, Q&amp;A, and posts configured to maximise your visibility in the local map pack for high-intent nearby searches.</p></div>
<div className="inc-card rv3"><div className="inc-icon">🎯</div><h3>Analytics &amp; Insights Report</h3><p>Post-upload report showing your Google Business Profile views, photo views, direction requests, and call clicks — establishing a baseline so future optimisation efforts are measured against clear before-and-after data.</p></div>
</div>
</div>
</section>
      <section className="dark-section">
<div className="wrap">
<div className="sec-h rv" style={{ marginBottom: '40px' }}>
<h2 style={{ color: '#fff' }}>Which Businesses Benefit<br />Most from 360° Tours?</h2>
<p style={{ color: 'rgba(255,255,255,.55)' }}>Any business where customers make location decisions before visiting — Google Trusted Photography gives you a visible edge over competitors with static listings.</p>
</div>
<div className="formats-grid">
<div className="fmt-card rv"><div className="fmt-top"><div className="fmt-icon">🏨</div><div className="fmt-tag">Hospitality</div></div><h3>Hotels &amp; Resorts</h3><p>Let guests tour rooms, restaurants, pools, and event spaces before booking — reducing booking hesitancy and increasing direct bookings. Hotels with 360° tours see 41% more map engagement and significantly higher booking conversion rates.</p></div>
<div className="fmt-card rv2"><div className="fmt-top"><div className="fmt-icon">🍽️</div><div className="fmt-tag">Restaurants</div></div><h3>Restaurants &amp; Cafés</h3><p>Show ambience, seating, kitchen visibility, and decor — the factors that drive restaurant choice decisions. Diners researching "restaurants near me" on Google Maps engage 2× longer with listings that feature 360° interior tours.</p></div>
<div className="fmt-card rv3"><div className="fmt-top"><div className="fmt-icon">🏥</div><div className="fmt-tag">Healthcare</div></div><h3>Clinics &amp; Hospitals</h3><p>Build patient trust before the first visit — show your reception, consultation rooms, diagnostic facilities, and hygiene standards. Healthcare providers with Google Trusted tours report higher appointment confirmation rates and fewer first-visit cancellations.</p></div>
<div className="fmt-card rv"><div className="fmt-top"><div className="fmt-icon">🚗</div><div className="fmt-tag">Automotive</div></div><h3>Car Showrooms</h3><p>Let customers virtually browse your showroom floor — models, layout, service bays, and customer lounge — before visiting. Automotive showrooms with 360° tours attract more pre-qualified walk-ins who've already shortlisted your location.</p></div>
<div className="fmt-card rv2"><div className="fmt-top"><div className="fmt-icon">🎓</div><div className="fmt-tag">Education</div></div><h3>Schools &amp; Institutes</h3><p>Virtual campus tours for admissions decisions — classrooms, labs, libraries, sports facilities, and common areas shown in full 360° detail. Education institutions use Google tours to attract out-of-city applicants who can't visit in person.</p></div>
<div className="fmt-card rv3"><div className="fmt-top"><div className="fmt-icon">🛍️</div><div className="fmt-tag">Retail</div></div><h3>Retail &amp; Showrooms</h3><p>Showcase product displays, store layout, fitting rooms, and brand experience — giving online browsers a reason to choose your store over competitors. Retail businesses with immersive Google photos see higher footfall from map discovery searches.</p></div>
</div>
</div>
</section>
      <section className="bg-subtle">
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag">Our Process</div>
<h2>Booked Today. Live on<br />Google Maps in 48 Hours.</h2>
<p>A simple, fast process — we handle everything so you can focus on running your business while your Google Maps presence gets a major upgrade.</p>
</div>
<div className="steps-grid">
<div className="step rv"><div className="step-num">01</div><h4>Book &amp; Brief</h4><p>Book a shoot via phone, WhatsApp, or our contact form. We discuss your business type, premises size, key spaces to capture, and any specific requirements — then confirm a shoot date within 3–5 business days, usually sooner for Indore locations.</p></div>
<div className="step rv2"><div className="step-num">02</div><h4>Professional Shoot</h4><p>Our Google Certified photographer arrives with professional 360° camera equipment — no setup required from your side. The shoot takes 1–3 hours depending on premises size. We capture every room, angle, and key brand touchpoint in spherical 360°.</p></div>
<div className="step rv3"><div className="step-num">03</div><h4>Process &amp; Stitch</h4><p>Raw 360° images processed, colour-graded, and stitched into seamless virtual tour panoramas. Quality checked for exposure, alignment, and visual accuracy. Still photos selected, retouched, and prepared for Google Business Profile upload.</p></div>
<div className="step rv3"><div className="step-num">04</div><h4>Live on Google Maps</h4><p>360° tour published to Google Street View and your Google Business Profile. Still photos uploaded and optimised. Your profile reviewed for completeness and accuracy. Within 48 hours, your immersive listing is live and visible to every Google Maps searcher in your area.</p></div>
</div>
</div>
</section>
      <section>
<div className="wrap">
<div className="sec-h rv"><h2>Frequently Asked Questions</h2></div>
<div className="faq-2col">
<div>
<div className="fi"><button className="fi-q">What is a "Google Trusted" photographer?<div className="fi-icon">+</div></button><div className="fi-a">Google Trusted Photographers are individuals who have been certified by Google to shoot and publish 360° virtual tours directly to Google Street View and Google Business Profiles. Certification requires passing a technical quality test and adhering to Google's photo quality standards. Only certified photographers can publish tours that appear with the Google Street View badge — giving listings an official, verified status that uncertified uploads lack.</div></div>
<div className="fi"><button className="fi-q">How long does it take to go live on Google Maps?<div className="fi-icon">+</div></button><div className="fi-a">Once we submit the tour, Google typically publishes it within 24–72 hours. In our experience, most tours appear within 48 hours of submission. Still photos uploaded to your Google Business Profile are usually visible within a few hours. The total time from shoot to live is typically 3–5 days including processing and editing.</div></div>
<div className="fi"><button className="fi-q">How big is the premises we can cover?<div className="fi-icon">+</div></button><div className="fi-a">There's no technical limit on premises size — we've shot everything from small cafés (2–3 rooms) to large hotels and hospital campuses (50+ rooms and corridors). Larger premises simply require a longer shoot and more processing time. We price by shoot duration and number of panoramic positions captured — you'll get a fixed quote before we start.</div></div>
<div className="fi"><button className="fi-q">Will the tour appear on Google Search too?<div className="fi-icon">+</div></button><div className="fi-a">Yes — your 360° tour appears in multiple Google surfaces: inside your Google Maps listing, in the Google Search knowledge panel when someone searches your business name, inside the "Street View" layer on Google Maps, and embedded anywhere you choose to place the tour link on your website. It's a single shoot that multiplies across all Google properties.</div></div>
</div>
<div>
<div className="fi"><button className="fi-q">Can we embed the tour on our own website?<div className="fi-icon">+</div></button><div className="fi-a">Yes — Google provides an embeddable iframe link for every published Street View tour. We provide the embed code as part of our deliverables, along with instructions for adding it to your website. Many clients embed the tour on their contact page, about page, or homepage — increasing website engagement significantly for location-dependent businesses.</div></div>
<div className="fi"><button className="fi-q">What preparation is needed before the shoot?<div className="fi-icon">+</div></button><div className="fi-a">We recommend tidying visible clutter, ensuring lights are on in all spaces, removing sensitive documents or personal items from visible surfaces, and having staff or customers informed that a shoot is happening. For restaurants, a pre-service shoot (before lunch or dinner rush) is ideal. We'll share a brief preparation checklist when your shoot is confirmed.</div></div>
<div className="fi"><button className="fi-q">Do you cover cities outside Indore?<div className="fi-icon">+</div></button><div className="fi-a">Yes — we cover Indore, Bhopal, Ujjain, and surrounding areas of Madhya Pradesh. For other cities in India, we can arrange shoots through our network of certified partner photographers. Travel fees apply for locations beyond 50km from Indore. Contact us with your location for availability and pricing.</div></div>
<div className="fi"><button className="fi-q">What if Google rejects the tour?<div className="fi-icon">+</div></button><div className="fi-a">Google rejections are rare for certified photographers following quality guidelines — in 5+ years we've had a rejection rate under 2%. If a tour is rejected, we reprocess and resubmit at no additional cost until it's published. Our certification status means we understand Google's requirements and rarely encounter quality issues that would trigger rejection.</div></div>
</div>
</div>
</div>
</section>
      <div className="wrap" style={{ padding: '40px 28px', borderTop: '1px solid var(--bdr)' }}>
<div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--s)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '16px' }}>Related Services</div>
<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
<a href="/services/gmb-marketing" className="rel-link">📍 GMB Marketing</a>
<a href="/services/local-seo" className="rel-link">🗺️ Local SEO</a>
<a href="/services/hd-photography" className="rel-link">📸 HD Photography</a>
<a href="/services/product-photography" className="rel-link">🛒 Product Photography</a>
<a href="/services/virtual-tour" className="rel-link">🌐 Virtual Tour</a>
</div>
</div>
      <section className="cta-section">
<div className="wrap">
<h2>Your Google Maps Listing<br />Deserves Better Than Static Photos.</h2>
<p>Book a Google Trusted Photography shoot — your 360° virtual tour goes live on Google Maps within 48 hours of the shoot date.</p>
<div className="cta-btns">
<a href="/contact" className="btn btn-ac">📍 Book a Shoot</a>
<a href="https://wa.me/919407000101" className="btn btn-wa">💬 WhatsApp Us</a>
</div>
</div>
</section>
      <PageScript id="services-google-trusted-photography-0" code={js0} />
    </>
  )
}
