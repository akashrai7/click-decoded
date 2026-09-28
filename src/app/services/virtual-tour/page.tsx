/* eslint-disable */
// src/app/services/virtual-tour/page.tsx — generated from virtual-tour.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "360° Virtual Tour Services India | Click Decoded",
  description: "Google-certified 360° virtual tours for hotels, showrooms, restaurants, hospitals & real estate in India. Published directly on Google Maps & your GMB.",
  alternates: { canonical: "/services/virtual-tour" },
}

const css = `
:root{
  --n:#1e3a5f;--n2:#152d4a;--n-dark:#0a1628;
  --o:#EE7E1A;--o2:#d46e12;
  --body:#1E293B;--m:#475569;--s:#64748b;
  --bg:#F4F7FC;--bdr:#E2E8F0;
  --ac:#2563EB;--ac2:#1d4ed8;
}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;overflow-x:hidden;}
body{font-family:'Inter',system-ui,sans-serif;color:var(--body);background:#fff;-webkit-font-smoothing:antialiased;}
a{text-decoration:none;color:inherit;}img,svg{display:block;}ul{list-style:none;}button{font-family:inherit;cursor:pointer;}
.wrap{max-width:1200px;margin:0 auto;padding:0 28px;}
section{padding:88px 0;}
h1,h2,h3,h4{font-weight:800;line-height:1.1;letter-spacing:-.025em;color:var(--n);}
.btn{display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:10px;font-weight:700;font-size:14px;border:none;transition:all .18s;white-space:nowrap;cursor:pointer;}
.btn-ac{background:var(--ac);color:#fff;box-shadow:0 4px 18px rgba(37,99,235,.3);}
.btn-ac:hover{background:var(--ac2);transform:translateY(-2px);box-shadow:0 8px 28px rgba(37,99,235,.4);}
.btn-ghost{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.35);}
.btn-ghost:hover{background:rgba(255,255,255,.08);}
.btn-wa{background:#25D366;color:#fff;}.btn-wa:hover{background:#1ebe59;transform:translateY(-2px);}
.btn-sm{padding:10px 20px;font-size:13px;}
.btn svg{flex-shrink:0;}
.topbar{background:var(--n-dark);height:40px;display:flex;align-items:center;}
.topbar-inner{max-width:1200px;margin:0 auto;padding:0 28px;display:flex;justify-content:space-between;align-items:center;width:100%;}
.topbar-left{display:flex;gap:20px;}
.topbar-left a{font-size:12px;color:rgba(255,255,255,.6);}
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
.mc a::before{content:'';position:absolute;left:0;top:50%;transform:translateY(-50%);width:2px;height:0;border-radius:1px;background:var(--o);transition:height .15s cubic-bezier(.22,1,.36,1);}
.mc a:hover{color:var(--o);padding-left:14px;}.mc a:hover::before{height:13px;}
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
.ms{display:none;padding:0 0 16px;}.ma.on .ms{display:block;}
.ms a{display:block;padding:7px 0;font-size:14px;color:var(--m);}
.ms h6{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--n);margin:12px 0 4px;}
/* BREADCRUMB */
.breadcrumb{background:var(--bg);padding:12px 0;border-bottom:1px solid var(--bdr);}
.bc-list{display:flex;align-items:center;gap:8px;font-size:12.5px;color:var(--s);}
.bc-list a{color:var(--n);font-weight:500;}.bc-list a:hover{color:var(--o);}
.bc-sep{opacity:.4;}
/* HERO */
.hero{background:linear-gradient(155deg,#030e22 0%,#061a3a 45%,#030e22 100%);padding:96px 0 80px;position:relative;overflow:hidden;}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 50% at 65% 35%,rgba(37,99,235,.14) 0%,transparent 65%),radial-gradient(ellipse 40% 45% at 10% 80%,rgba(238,126,26,.07) 0%,transparent 60%);}
.hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;position:relative;z-index:2;}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;background:rgba(37,99,235,.12);border:1px solid rgba(37,99,235,.3);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#93c5fd;margin-bottom:20px;}
.hero h1{font-size:48px;color:#fff;line-height:1.06;letter-spacing:-.04em;margin-bottom:20px;}
.hero h1 em{font-style:normal;background:linear-gradient(135deg,#93c5fd,#2563eb);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-desc{font-size:17px;color:rgba(255,255,255,.62);line-height:1.7;margin-bottom:32px;max-width:460px;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:36px;}
.hero-proof{display:flex;gap:24px;flex-wrap:wrap;}
.proof-item{display:flex;align-items:center;gap:8px;font-size:13px;color:rgba(255,255,255,.5);}
.proof-item strong{color:#fff;font-weight:700;}
/* TOUR VIEWER MOCK */
.tour-mock{border-radius:20px;overflow:hidden;box-shadow:0 28px 70px rgba(0,0,0,.55);background:#111827;border:1px solid rgba(255,255,255,.1);}
.tour-browser{background:rgba(255,255,255,.06);padding:10px 14px;border-bottom:1px solid rgba(255,255,255,.07);display:flex;align-items:center;gap:10px;}
.tour-dots{display:flex;gap:5px;}
.tour-dots span{width:9px;height:9px;border-radius:50%;}
.tour-dots span:nth-child(1){background:#ff5f57;}
.tour-dots span:nth-child(2){background:#ffbd2e;}
.tour-dots span:nth-child(3){background:#28c840;}
.tour-url{flex:1;background:rgba(255,255,255,.08);border-radius:6px;padding:5px 12px;font-size:11px;color:rgba(255,255,255,.4);}
.tour-stage{position:relative;height:190px;background:linear-gradient(135deg,#0d2137 0%,#1a3a5c 40%,#0d2137 100%);overflow:hidden;display:flex;align-items:center;justify-content:center;}
.tour-glow{position:absolute;inset:0;background:radial-gradient(ellipse 70% 60% at 50% 50%,rgba(37,99,235,.22),transparent);}
.tour-hotspot{position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;gap:8px;}
.hs-dot{width:40px;height:40px;border-radius:50%;background:rgba(37,99,235,.85);border:3px solid rgba(255,255,255,.95);display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 8px rgba(37,99,235,.22),0 0 0 16px rgba(37,99,235,.08);animation:hsPulse 2.2s ease-in-out infinite;}
@keyframes hsPulse{0%,100%{box-shadow:0 0 0 8px rgba(37,99,235,.22),0 0 0 16px rgba(37,99,235,.08);}50%{box-shadow:0 0 0 12px rgba(37,99,235,.28),0 0 0 24px rgba(37,99,235,.05);}}
.hs-dot svg{width:18px;height:18px;color:#fff;}
.hs-label{font-size:10px;font-weight:700;color:rgba(255,255,255,.8);letter-spacing:.06em;background:rgba(0,0,0,.4);padding:3px 10px;border-radius:99px;}
.tour-arrow{position:absolute;top:50%;transform:translateY(-50%);width:28px;height:28px;border-radius:50%;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;font-size:13px;color:rgba(255,255,255,.7);}
.tour-arrow.l{left:10px;}.tour-arrow.r{right:10px;}
.tour-compass{position:absolute;top:10px;right:10px;width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;font-size:14px;}
.tour-badge{position:absolute;top:10px;left:10px;background:rgba(37,99,235,.85);color:#fff;font-size:9px;font-weight:800;letter-spacing:.08em;padding:4px 8px;border-radius:6px;}
.tour-nav-dots{position:absolute;bottom:10px;left:50%;transform:translateX(-50%);display:flex;gap:5px;}
.tour-nav-dots span{width:5px;height:5px;border-radius:50%;background:rgba(255,255,255,.25);}
.tour-nav-dots span.on{background:#93c5fd;width:16px;border-radius:3px;}
.tour-rooms{display:flex;gap:6px;padding:12px 14px;border-bottom:1px solid rgba(255,255,255,.07);}
.room-pill{flex:1;border-radius:8px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);padding:7px 4px;text-align:center;cursor:pointer;transition:.15s;font-size:18px;}
.room-pill.on{background:rgba(37,99,235,.2);border-color:rgba(37,99,235,.4);}
.room-pill-lbl{font-size:8px;font-weight:700;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:.04em;margin-top:3px;}
.tour-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,.07);}
.ts{background:#111827;padding:10px;text-align:center;}
.ts-n{font-size:18px;font-weight:900;color:#93c5fd;line-height:1;}
.ts-l{font-size:9px;color:rgba(255,255,255,.3);text-transform:uppercase;letter-spacing:.06em;margin-top:2px;}
.tour-gmb{display:flex;align-items:center;gap:8px;padding:10px 14px;font-size:11px;color:#4ade80;font-weight:600;}
.tour-gmb svg{width:14px;height:14px;flex-shrink:0;}
/* STATS */
.stats-strip{background:var(--ac);}
.stats-inner{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(0,0,0,.12);}
.stat-box{padding:32px 24px;text-align:center;background:var(--ac);}
.stat-n{font-size:40px;font-weight:900;color:#fff;line-height:1;letter-spacing:-.03em;}
.stat-l{font-size:12px;color:rgba(255,255,255,.75);margin-top:6px;font-weight:500;text-transform:uppercase;letter-spacing:.06em;}
/* INCLUDED */
.inc-section{background:var(--bg);}
.sec-h{text-align:center;max-width:640px;margin:0 auto 52px;}
.sec-tag{display:inline-flex;align-items:center;gap:7px;padding:5px 13px;border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:10px;}
.sec-tag-ac{background:rgba(37,99,235,.08);border:1px solid rgba(37,99,235,.15);color:var(--ac);}
.sec-tag-o{background:rgba(238,126,26,.08);border:1px solid rgba(238,126,26,.18);color:var(--o);}
.sec-h h2{font-size:36px;margin-bottom:14px;}
.sec-h p{font-size:16px;color:var(--m);line-height:1.65;}
.inc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.inc-card{background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:28px 24px;transition:.2s;}
.inc-card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(37,99,235,.1);border-color:rgba(37,99,235,.25);}
.inc-icon{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:16px;background:linear-gradient(135deg,rgba(37,99,235,.1),rgba(37,99,235,.04));border:1px solid rgba(37,99,235,.15);}
.inc-card h3{font-size:17px;margin-bottom:10px;}
.inc-card p{font-size:13.5px;color:var(--m);line-height:1.65;}
/* PROCESS */
.steps-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative;}
.steps-grid::before{content:'';position:absolute;top:34px;left:12%;right:12%;height:2px;background:linear-gradient(90deg,var(--ac),var(--o));z-index:0;}
.step{text-align:center;padding:0 16px;position:relative;z-index:1;}
.step-num{width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,var(--ac),var(--ac2));color:#fff;font-size:20px;font-weight:900;display:flex;align-items:center;justify-content:center;margin:0 auto 18px;box-shadow:0 8px 24px rgba(37,99,235,.3);}
.step h4{font-size:15px;margin-bottom:7px;}
.step p{font-size:13px;color:var(--m);line-height:1.6;}
/* WHO */
.who-section{background:var(--n-dark);padding:88px 0;}
.who-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:960px;margin:0 auto;}
.who-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:26px;transition:.2s;}
.who-card:hover{background:rgba(255,255,255,.08);border-color:rgba(37,99,235,.4);transform:translateY(-3px);}
.who-icon{font-size:32px;margin-bottom:12px;}
.who-card h3{font-size:15px;font-weight:700;color:#fff;margin-bottom:6px;}
.who-card p{font-size:13px;color:rgba(255,255,255,.5);line-height:1.6;}
/* WHY */
.why-grid{display:grid;grid-template-columns:1fr 1fr;gap:52px;align-items:center;}
.why-visual{background:linear-gradient(135deg,#030e22,#061a3a);border-radius:24px;padding:36px;}
.gmb-listing{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);border-radius:14px;padding:20px;}
.gmb-top{display:flex;align-items:flex-start;gap:14px;margin-bottom:14px;}
.gmb-av{width:48px;height:48px;border-radius:12px;background:linear-gradient(135deg,var(--ac),#1d4ed8);display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;}
.gmb-name{font-size:15px;font-weight:800;color:#fff;margin-bottom:2px;}
.gmb-cat{font-size:12px;color:rgba(255,255,255,.4);}
.gmb-stars{display:flex;align-items:center;gap:4px;margin-top:4px;}
.gmb-stars span{color:#fbbf24;font-size:13px;}
.gmb-stars small{font-size:12px;color:rgba(255,255,255,.4);}
.gmb-tour-box{border-radius:10px;height:76px;background:linear-gradient(135deg,#1a3a5c,#0d2137);display:flex;align-items:center;justify-content:center;margin-bottom:12px;position:relative;}
.gmb-360-tag{position:absolute;top:8px;left:8px;background:rgba(37,99,235,.85);color:#fff;font-size:9px;font-weight:800;letter-spacing:.08em;padding:3px 7px;border-radius:5px;}
.gmb-play{width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.15);border:2px solid rgba(255,255,255,.4);display:flex;align-items:center;justify-content:center;font-size:15px;}
.gmb-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;}
.gmb-m{background:rgba(255,255,255,.06);border-radius:8px;padding:9px;text-align:center;}
.gmb-m-n{font-size:18px;font-weight:900;color:#93c5fd;line-height:1;}
.gmb-m-l{font-size:9px;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:.05em;margin-top:2px;}
.why-points{display:flex;flex-direction:column;gap:22px;}
.why-pt{display:flex;gap:16px;align-items:flex-start;}
.why-ic{width:44px;height:44px;flex-shrink:0;border-radius:12px;background:linear-gradient(135deg,rgba(37,99,235,.1),rgba(37,99,235,.04));border:1px solid rgba(37,99,235,.2);display:flex;align-items:center;justify-content:center;font-size:18px;}
.why-pt h4{font-size:15px;font-weight:700;color:var(--n);margin-bottom:5px;}
.why-pt p{font-size:13.5px;color:var(--m);line-height:1.6;margin:0;}
/* FAQ */
.faq-section{background:var(--bg);}
.faq-2col{display:grid;grid-template-columns:1fr 1fr;gap:0 28px;align-items:start;}
.fi{border:1px solid var(--bdr);border-radius:14px;margin-bottom:10px;overflow:hidden;background:#fff;transition:.15s;}
.fi:hover{border-color:rgba(37,99,235,.2);}
.fi.on{border-color:rgba(37,99,235,.35);box-shadow:0 4px 20px rgba(37,99,235,.08);}
.fi-q{width:100%;text-align:left;background:transparent;border:none;padding:20px 22px;font-size:14px;font-weight:700;color:var(--n);display:flex;justify-content:space-between;align-items:center;gap:12px;cursor:pointer;}
.fi-icon{width:26px;height:26px;border-radius:50%;flex-shrink:0;background:var(--bg);border:1px solid var(--bdr);display:flex;align-items:center;justify-content:center;color:var(--ac);font-size:18px;line-height:1;transition:transform .2s;}
.fi.on .fi-icon{transform:rotate(45deg);background:var(--ac);color:#fff;border-color:var(--ac);}
.fi-a{max-height:0;overflow:hidden;transition:.3s;color:var(--m);font-size:14px;line-height:1.75;}
.fi.on .fi-a{max-height:300px;padding:0 22px 22px;}
/* CTA */
.cta-section{background:linear-gradient(155deg,#030e22 0%,#061a3a 100%);padding:96px 0;text-align:center;position:relative;overflow:hidden;}
.cta-section::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(37,99,235,.12) 0%,transparent 70%);}
.cta-section h2{color:#fff;font-size:44px;margin-bottom:16px;position:relative;z-index:1;}
.cta-section p{color:rgba(255,255,255,.6);font-size:17px;margin-bottom:36px;max-width:480px;margin-left:auto;margin-right:auto;line-height:1.65;position:relative;z-index:1;}
.cta-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;position:relative;z-index:1;}
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
/* ANIMATE */
.rv,.rv2,.rv3{opacity:0;transform:translateY(28px);transition:opacity .6s ease,transform .6s ease;}
.rv2{transition-delay:.1s;}.rv3{transition-delay:.2s;}
.rv.vis,.rv2.vis,.rv3.vis{opacity:1;transform:translateY(0);}
@media(max-width:900px){
  .hero-grid,.why-grid,.faq-2col{grid-template-columns:1fr;}
  .hero h1{font-size:36px;}
  .inc-grid,.who-grid{grid-template-columns:1fr 1fr;}
  .stats-inner{grid-template-columns:1fr 1fr;}
  .steps-grid{grid-template-columns:repeat(2,1fr);}.steps-grid::before{display:none;}
  .hb{display:flex;}.dmenu,.navcta .btn:not(.show-m){display:none;}
}
@media(max-width:600px){
  .inc-grid,.who-grid,.stats-inner{grid-template-columns:1fr;}
  section{padding:60px 0;}.hero{padding:64px 0 52px;}
}
`

const ld0 = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "360° Virtual Tour Services India",
      "provider": {
        "@type": "Organization",
        "name": "Click Decoded",
        "url": "https://clickdecoded.com"
      },
      "description": "Google-certified 360° virtual tours published on Google Maps and Google Business Profiles across India.",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": "Virtual Tour Photography",
      "url": "https://www.clickdecoded.com/services/virtual-tour"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does the virtual tour appear on Google Maps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We are Google Street View certified. Your tour is published directly on Google Maps and your Business Profile within 72 hours of shoot."
          }
        },
        {
          "@type": "Question",
          "name": "How long does production take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Shoot to delivery is typically 5–7 business days. Rush delivery in 3 days is available."
          }
        },
        {
          "@type": "Question",
          "name": "What businesses benefit most?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hotels, restaurants, showrooms, hospitals, schools, gyms, co-working spaces — any business where space and ambience influence a buying decision."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How 360° Virtual Tour Services India Works — Our Process",
      "description": "Google-certified 360° virtual tours for hotels, showrooms, restaurants, hospitals & real estate in India. Published directly on Google Maps & your GMB profile. Starting ₹12,000.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Book a Site Visit",
          "text": "Fill the enquiry form or WhatsApp us. We confirm a shoot date within 24 hours that works for your schedule."
        },
        {
          "@type": "HowToStep",
          "name": "Shoot Day",
          "text": "Our photographer arrives on time with professional equipment. A full-property shoot takes 2–4 hours depending on size."
        },
        {
          "@type": "HowToStep",
          "name": "Processing & Edit",
          "text": "Images are stitched, colour-corrected, and assembled into a seamless tour within 2–3 business days of the shoot."
        },
        {
          "@type": "HowToStep",
          "name": "Live on Google Maps",
          "text": "We publish directly to Google Maps and your Business Profile. Your tour is live and indexed within 72 hours of approval."
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
          "name": "360° Virtual Tour",
          "item": "https://www.clickdecoded.com/services/virtual-tour"
        }
      ]
    }
  ]
}`

const js0 = `(function(){
const obs=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('vis');});},{threshold:.12});
document.querySelectorAll('.rv,.rv2,.rv3').forEach(el=>obs.observe(el));
const hdr=document.getElementById('hdr');if(hdr)window.addEventListener('scroll',()=>hdr.classList.toggle('up',scrollY>40),{passive:true});
document.querySelectorAll('.fi-q').forEach(btn=>{
  btn.addEventListener('click',function(){this.closest('.fi').classList.toggle('fi-on');});
});
})();`

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld0 }} />
      <div className="breadcrumb"><div className="wrap"><div className="bc-list"><a href="/">Home</a><span className="bc-sep">›</span><span>Content</span><span className="bc-sep">›</span><span>Virtual Tour</span></div></div></div>
      <section className="hero">
<div className="wrap">
<div className="hero-grid">
<div>
<div className="hero-eyebrow">🌐 Google Street View Certified</div>
<h1>360° Virtual Tours that Let Customers <em>Walk In</em> Before They Visit</h1>
<p className="hero-desc">A virtual tour boosts trust, increases time-on-site by 2×, and converts browsers into footfall. We shoot, process, and publish Google-certified 360° tours directly on Google Maps.</p>
<div className="hero-btns">
<a href="/contact" className="btn btn-ac">📍 Book Free Site Visit <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
<a href="https://wa.me/919407000101" className="btn btn-ghost">💬 WhatsApp Us</a>
</div>
<div className="hero-proof">
<div className="proof-item"><strong>Google</strong> Trusted Photographer</div>
<div className="proof-item"><strong>72 hrs</strong> Live on Maps</div>
<div className="proof-item"><strong>₹12K</strong> Starting</div>
</div>
</div>

<div className="tour-mock">
<div className="tour-browser">
<div className="tour-dots"><span></span><span></span><span></span></div>
<div className="tour-url">maps.google.com — 360° Business Virtual Tour</div>
</div>
<div className="tour-stage">
<div className="tour-glow"></div>
<div className="tour-badge">360°</div>
<div className="tour-compass">🧭</div>
<div className="tour-arrow l">‹</div>
<div className="tour-hotspot">
<div className="hs-dot">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4" /></svg>
</div>
<div className="hs-label">Click to Explore →</div>
</div>
<div className="tour-arrow r">›</div>
<div className="tour-nav-dots">
<span className="on"></span><span></span><span></span><span></span><span></span>
</div>
</div>
<div className="tour-rooms">
<div className="room-pill on">🛎️<div className="room-pill-lbl">Lobby</div></div>
<div className="room-pill">🍽️<div className="room-pill-lbl">Dining</div></div>
<div className="room-pill">🏊<div className="room-pill-lbl">Pool</div></div>
<div className="room-pill">🛏️<div className="room-pill-lbl">Suite</div></div>
<div className="room-pill">🧖<div className="room-pill-lbl">Spa</div></div>
</div>
<div className="tour-stats">
<div className="ts"><div className="ts-n">2.4k</div><div className="ts-l">Monthly Views</div></div>
<div className="ts"><div className="ts-n">4:12</div><div className="ts-l">Avg. Time</div></div>
<div className="ts"><div className="ts-n">68%</div><div className="ts-l">Enquiry Lift</div></div>
</div>
<div className="tour-gmb">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
          Published live on Google Maps &amp; GMB Profile
        </div>
</div>
</div>
</div>
</section>
      <div className="stats-strip">
<div className="stats-inner">
<div className="stat-box"><div className="stat-n">200+</div><div className="stat-l">Tours Produced</div></div>
<div className="stat-box"><div className="stat-n">72hrs</div><div className="stat-l">Live on Google Maps</div></div>
<div className="stat-box"><div className="stat-n">2×</div><div className="stat-l">More Time on Site</div></div>
<div className="stat-box"><div className="stat-n">68%</div><div className="stat-l">Enquiry Increase</div></div>
</div>
</div>
      <section className="inc-section">
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag sec-tag-ac">📸 What's Included</div>
<h2>A Complete 360° Tour Package — Shoot to Publication</h2>
<p>Every package includes on-site photography, professional processing, Google-certified publishing, and your tour live on Google Maps and your Business Profile.</p>
</div>
<div className="inc-grid">
<div className="inc-card rv">
<div className="inc-icon">📷</div>
<h3>On-Site 360° Photography</h3>
<p>We visit your location with a professional 360° camera rig. The shoot covers every key area — entrance, lobby, reception, products, seating, ambience — anything that influences a buying decision.</p>
</div>
<div className="inc-card rv2">
<div className="inc-icon">🖥️</div>
<h3>Professional Post-Processing</h3>
<p>Every image is colour-graded, exposure-balanced, and stitched into seamless 360° equirectangular photos. We remove any unwanted objects, people, or distractions during editing.</p>
</div>
<div className="inc-card rv3">
<div className="inc-icon">🗺️</div>
<h3>Google Maps Publication</h3>
<p>As Google Street View Trusted Photographers, we publish your tour directly to Google Maps and link it to your GMB profile. Live within 72 hours of the shoot.</p>
</div>
<div className="inc-card rv">
<div className="inc-icon">🔗</div>
<h3>Embeddable Tour Widget</h3>
<p>Your tour can be embedded on your website homepage, contact page, or anywhere you want visitors to explore your space. Increases time-on-site and reduces bounce rate significantly.</p>
</div>
<div className="inc-card rv2">
<div className="inc-icon">📱</div>
<h3>Mobile &amp; VR Ready</h3>
<p>Tours work seamlessly on mobile, tablet, and desktop. Compatible with Google Cardboard and Daydream VR headsets — giving customers a true immersive experience from anywhere.</p>
</div>
<div className="inc-card rv3">
<div className="inc-icon">📊</div>
<h3>Monthly Analytics Report</h3>
<p>Track profile views, tour clicks, direction requests, and call actions attributable to your virtual tour — so you can see the exact ROI of your investment each month.</p>
</div>
</div>
</div>
</section>
      <section style={{ background: '#fff' }}>
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag sec-tag-o">⚡ Our Process</div>
<h2>From Booking to Live on Google in 5 Steps</h2>
<p>A streamlined, professional process that gets your virtual tour live quickly with zero hassle on your end.</p>
</div>
<div className="steps-grid rv">
<div className="step">
<div className="step-num">1</div>
<h4>Book a Site Visit</h4>
<p>Fill the enquiry form or WhatsApp us. We confirm a shoot date within 24 hours that works for your schedule.</p>
</div>
<div className="step">
<div className="step-num">2</div>
<h4>Shoot Day</h4>
<p>Our photographer arrives on time with professional equipment. A full-property shoot takes 2–4 hours depending on size.</p>
</div>
<div className="step">
<div className="step-num">3</div>
<h4>Processing &amp; Edit</h4>
<p>Images are stitched, colour-corrected, and assembled into a seamless tour within 2–3 business days of the shoot.</p>
</div>
<div className="step">
<div className="step-num">4</div>
<h4>Live on Google Maps</h4>
<p>We publish directly to Google Maps and your Business Profile. Your tour is live and indexed within 72 hours of approval.</p>
</div>
</div>
</div>
</section>
      <section className="who-section">
<div className="wrap">
<div className="sec-h rv" style={{ color: '#fff' }}>
<div className="sec-tag sec-tag-ac">🏢 Ideal For</div>
<h2 style={{ color: '#fff' }}>Which Businesses Benefit Most from a Virtual Tour?</h2>
<p style={{ color: 'rgba(255,255,255,.55)' }}>Any business where space, ambience, or layout influences the customer's decision to visit.</p>
</div>
<div className="who-grid rv">
<div className="who-card">
<div className="who-icon">🏨</div>
<h3>Hotels &amp; Resorts</h3>
<p>Let guests explore lobbies, suites, pool, dining, and spa before booking — dramatically increasing direct booking confidence.</p>
</div>
<div className="who-card">
<div className="who-icon">🍽️</div>
<h3>Restaurants &amp; Cafés</h3>
<p>Show your ambience, seating, kitchen view, and event space. Diners choose restaurants they feel familiar with — a tour delivers that.</p>
</div>
<div className="who-card">
<div className="who-icon">🚗</div>
<h3>Showrooms &amp; Dealerships</h3>
<p>Car, furniture, and jewellery showrooms let customers browse the floor virtually, reducing purchase hesitation and increasing footfall.</p>
</div>
<div className="who-card">
<div className="who-icon">🏥</div>
<h3>Hospitals &amp; Clinics</h3>
<p>Reduce anxiety by letting patients see your facility, OPD, rooms, and equipment before their appointment. Trust-building at scale.</p>
</div>
<div className="who-card">
<div className="who-icon">🏫</div>
<h3>Schools &amp; Colleges</h3>
<p>Give parents and students a campus walkthrough — classrooms, labs, sports, library — before admission enquiries. Cuts decision time.</p>
</div>
<div className="who-card">
<div className="who-icon">🏗️</div>
<h3>Real Estate Developers</h3>
<p>Showcase model flats, amenities, and common areas to buyers anywhere in India or abroad. Close deals without requiring a site visit.</p>
</div>
</div>
</div>
</section>
      <section style={{ background: 'var(--bg)' }}>
<div className="wrap">
<div className="why-grid">
<div className="rv">
<div className="sec-tag sec-tag-ac" style={{ display: 'inline-flex', marginBottom: '16px' }}>📈 Why It Works</div>
<h2 style={{ fontSize: '34px', marginBottom: '20px' }}>Customers Who See Your Space Are 3× More Likely to Visit</h2>
<p style={{ fontSize: '15px', color: 'var(--m)', lineHeight: '1.75', marginBottom: '20px' }}>A virtual tour isn't just a visual gimmick — it directly affects buying behaviour. Seeing your space removes the biggest purchase barrier: uncertainty. Customers who've virtually explored your property arrive with confidence and intent.</p>
<div className="why-points">
<div className="why-pt">
<div className="why-ic">👁️</div>
<div><h4>Businesses with tours get 2× more interest</h4><p>Google reports that listings with virtual tours receive twice the engagement of those without — more clicks, more calls, more direction requests.</p></div>
</div>
<div className="why-pt">
<div className="why-ic">⏱️</div>
<div><h4>Average time-on-site increases by 5–10 minutes</h4><p>A well-built tour keeps visitors engaged for 5+ minutes — dramatically improving your SEO signal and conversion intent compared to a photo gallery.</p></div>
</div>
<div className="why-pt">
<div className="why-ic">🌏</div>
<div><h4>Sell to out-of-city buyers without a site visit</h4><p>For real estate, hotels, and colleges especially — the virtual tour has become the first site visit for buyers from other cities or NRI enquiries.</p></div>
</div>
</div>
</div>
<div className="why-visual rv2">
<div style={{ fontSize: '11px', fontWeight: '700', color: 'rgba(255,255,255,.35)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '18px' }}>Your GMB Profile — With Virtual Tour</div>
<div className="gmb-listing">
<div className="gmb-top">
<div className="gmb-av">🏨</div>
<div>
<div className="gmb-name">Grand Bhopal Hotel</div>
<div className="gmb-cat">Hotel · 5 Star · Bhopal, MP</div>
<div className="gmb-stars"><span>★★★★★</span><small>4.8 (612 reviews)</small></div>
</div>
</div>
<div className="gmb-tour-box">
<div className="gmb-360-tag">360° Tour</div>
<div className="gmb-play">▶</div>
</div>
<div className="gmb-metrics">
<div className="gmb-m"><div className="gmb-m-n">4.1k</div><div className="gmb-m-l">Views / mo</div></div>
<div className="gmb-m"><div className="gmb-m-n">218</div><div className="gmb-m-l">Tour Plays</div></div>
<div className="gmb-m"><div className="gmb-m-n">+68%</div><div className="gmb-m-l">Enquiries</div></div>
</div>
</div>
<div style={{ marginTop: '16px', padding: '14px 16px', background: 'rgba(37,99,235,.1)', border: '1px solid rgba(37,99,235,.25)', borderRadius: '10px' }}>
<p style={{ fontSize: '12px', color: '#93c5fd', lineHeight: '1.6', margin: '0' }}><strong>Virtual tours appear as a persistent card</strong> on your Google Maps listing — visible to every searcher, 24/7, forever after publishing.</p>
</div>
</div>
</div>
</div>
</section>
      <section className="faq-section">
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag sec-tag-ac">❓ FAQs</div>
<h2>Virtual Tour — Frequently Asked Questions</h2>
</div>
<div className="faq-2col rv">
<div>
<div className="fi">
<button className="fi-q" data-cd-click="this.closest('.fi').classList.toggle('fi-on')">Does the virtual tour actually appear on Google Maps?<span className="fi-icon">+</span></button>
<div className="fi-a">Yes. We are Google Street View Trusted Photographers. Your 360° tour is published directly to Google Maps and linked to your Google Business Profile, making it visible to anyone who searches your business on Google or Google Maps.</div>
</div>
<div className="fi">
<button className="fi-q" data-cd-click="this.closest('.fi').classList.toggle('fi-on')">How long does the shoot and production take?<span className="fi-icon">+</span></button>
<div className="fi-a">Depending on property size, the shoot takes 2–5 hours. Post-processing and stitching takes 2–3 business days. Google Maps publication is live within 72 hours of submission. Standard timeline from booking to live: 5–7 business days. Rush delivery in 3 days available on request.</div>
</div>
<div className="fi">
<button className="fi-q" data-cd-click="this.closest('.fi').classList.toggle('fi-on')">Can I embed the tour on my website?<span className="fi-icon">+</span></button>
<div className="fi-a">Yes. Once published on Google Maps, you can embed the tour anywhere using Google's embed code — your homepage, About page, contact page, or on landing pages. We set this up for you as part of the package and provide instructions for your developer.</div>
</div>
</div>
<div>
<div className="fi">
<button className="fi-q" data-cd-click="this.closest('.fi').classList.toggle('fi-on')">What cities do you cover for virtual tour shoots?<span className="fi-icon">+</span></button>
<div className="fi-a">We currently cover Bhopal, Indore, Delhi NCR, Mumbai, Pune, Hyderabad, Bangalore, Chennai, Ahmedabad, and Jaipur. Travel packages available for other cities — contact us with your location for a custom quote.</div>
</div>
<div className="fi">
<button className="fi-q" data-cd-click="this.closest('.fi').classList.toggle('fi-on')">What's the pricing for a virtual tour?<span className="fi-icon">+</span></button>
<div className="fi-a">Virtual tours start at ₹12,000 for small to mid-size properties (restaurants, clinics, offices). Hotels, resorts, and large showrooms are priced on scope — typically ₹20,000–₹60,000 depending on number of rooms and total sq ft. All prices include shoot, editing, and Google Maps publication. No recurring fees.</div>
</div>
<div className="fi">
<button className="fi-q" data-cd-click="this.closest('.fi').classList.toggle('fi-on')">Does the tour expire or need renewal?<span className="fi-icon">+</span></button>
<div className="fi-a">No. Once published, your virtual tour stays live on Google Maps indefinitely. There are no renewal fees. You only need a new shoot if you significantly renovate your space or want to add new areas that weren't in the original tour.</div>
</div>
</div>
</div>
</div>
</section>
      <section className="cta-section">
<div className="wrap">
<h2>See Your Space on Google Maps in 7 Days.</h2>
<p>Book a free site assessment and get a custom quote based on your property size and city. We'll tell you exactly what the tour will look like before you commit.</p>
<div className="cta-btns">
<a href="/contact" className="btn btn-ac">📍 Book Free Site Visit <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
<a href="https://wa.me/919407000101?text=Hi%2C+I+want+a+360+virtual+tour+quote" className="btn btn-wa">💬 WhatsApp for Quote</a>
</div>
</div>
</section>
      <PageScript id="services-virtual-tour-0" code={js0} />
    </>
  )
}
