/* eslint-disable */
// src/app/services/local-seo/page.tsx — generated from local-seo.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "Local SEO Services India | Click Decoded",
  description: "Click Decoded's Local SEO services put your business at #1 in Google Maps and the Local Pack. Google Business Profile optimization, citations, reviews &.",
  alternates: { canonical: "/services/local-seo" },
  openGraph: {
    title: "Local SEO Services India — Click Decoded",
    description: "Rank #1 in Google Maps and the Local Pack. Local SEO services that drive foot traffic, calls, and leads from your city.",
    url: "/services/local-seo",
    type: "website",
  },
}

const css = `
:root{
  --n:#2A4573;--n2:#1e3460;--n-dark:#0f1e38;
  --o:#EE7E1A;--o2:#d46e12;
  --body:#1E293B;--m:#475569;--s:#64748b;
  --bg:#F4F7FC;--bdr:#E2E8F0;
  --loc:#4285F4;--loc2:#1a73e8;--loc3:#e8f0fe;
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
.pill-b{background:rgba(42,69,115,.1);color:var(--n);}
.pill-loc{background:rgba(66,133,244,.12);color:var(--loc);border:1px solid rgba(66,133,244,.2);}
.sec-h{text-align:center;max-width:640px;margin:0 auto 52px;}
.sec-h h2{font-size:36px;margin-top:12px;margin-bottom:14px;}
.sec-h p{font-size:16px;color:var(--m);}
.btn{display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:10px;font-weight:700;font-size:14px;border:none;transition:all .18s;white-space:nowrap;cursor:pointer;}
.btn-loc{background:var(--loc);color:#fff;box-shadow:0 4px 18px rgba(66,133,244,.3);}
.btn-loc:hover{background:var(--loc2);transform:translateY(-2px);box-shadow:0 8px 28px rgba(66,133,244,.4);}
.btn-o{background:var(--o);color:#fff;box-shadow:0 4px 18px rgba(238,126,26,.3);}
.btn-o:hover{background:var(--o2);transform:translateY(-2px);}
.btn-ghost{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.35);}
.btn-ghost:hover{background:rgba(255,255,255,.08);}
.btn-sm{padding:10px 20px;font-size:13px;}
.btn svg{flex-shrink:0;transition:transform .18s;}
.btn:hover svg{transform:translateX(3px);}

/* TOPBAR */
.topbar{background:var(--n-dark);height:40px;display:flex;align-items:center;}
.topbar-inner{max-width:1200px;margin:0 auto;padding:0 28px;display:flex;justify-content:space-between;align-items:center;width:100%;}
.topbar-left{display:flex;gap:20px;}
.topbar-left a{font-size:12px;color:rgba(255,255,255,.6);display:flex;align-items:center;gap:5px;}
.topbar-right{display:flex;gap:8px;}
.tb-btn{display:inline-flex;align-items:center;gap:6px;padding:5px 12px;border-radius:6px;font-size:11.5px;font-weight:700;transition:.15s;}
.tb-call{background:rgba(238,126,26,.15);color:var(--o);border:1px solid rgba(238,126,26,.25);}
.tb-wa{background:rgba(37,211,102,.15);color:#25D366;border:1px solid rgba(37,211,102,.25);}
.tb-call:hover{background:var(--o);color:#fff;}
.tb-wa:hover{background:#25D366;color:#fff;}

/* HEADER */
#hdr{background:rgba(255,255,255,.97);backdrop-filter:blur(14px);border-bottom:1px solid var(--bdr);transition:box-shadow .2s;}
#hdr.up{box-shadow:0 4px 32px rgba(13,27,42,.09);}
.nav{display:flex;align-items:center;justify-content:space-between;height:70px;gap:16px;}
.dmenu{display:flex;align-items:center;gap:2px;}
.dmenu>li{position:relative;}
.dmenu>li>a{display:flex;align-items:center;gap:5px;padding:9px 12px;font-size:13.5px;font-weight:600;color:var(--n);border-radius:8px;transition:.15s;}
.dmenu>li>a:hover{background:var(--bg);}
.dcar{width:10px;height:10px;opacity:.5;transition:transform .18s;flex-shrink:0;}
.dmenu>li:hover .dcar{transform:rotate(180deg);}
.mega{position:absolute;top:calc(100% + 10px);left:50%;transform:translateX(-50%) translateY(10px);background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:26px;box-shadow:0 24px 64px rgba(13,27,42,.14);opacity:0;visibility:hidden;pointer-events:none;transition:opacity .18s,transform .18s;}
.mega.wide{width:940px;display:grid;grid-template-columns:repeat(5,1fr);gap:22px;}
.mega.slim{width:296px;left:auto;right:0;transform:translateY(10px);}
.dmenu>li:hover .mega{opacity:1;visibility:visible;pointer-events:all;transform:translateX(-50%) translateY(0);}
.dmenu>li:hover .mega.slim{transform:translateY(0);}
/* Invisible bridge: fills the gap between nav link and floating mega so hover isn't lost mid-travel */
.dmenu>li::after{content:'';position:absolute;top:100%;left:-40px;right:-40px;height:14px;}
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

/* BREADCRUMB */
.breadcrumb{background:var(--bg);padding:12px 0;border-bottom:1px solid var(--bdr);}
.bc-list{display:flex;align-items:center;gap:8px;font-size:12.5px;color:var(--s);list-style:none;}
.bc-list a{color:var(--n);font-weight:500;}
.bc-list a:hover{color:var(--o);}
.bc-sep{opacity:.4;}

/* ── HERO ── */
.loc-hero{
  background:linear-gradient(155deg,#060d1f 0%,#091428 45%,#060d1f 100%);
  padding:96px 0 80px;position:relative;overflow:hidden;
}
.loc-hero::before{
  content:'';position:absolute;inset:0;
  background:
    radial-gradient(ellipse 60% 55% at 65% 30%,rgba(66,133,244,.12) 0%,transparent 65%),
    radial-gradient(ellipse 40% 50% at 15% 75%,rgba(238,126,26,.06) 0%,transparent 60%);
}
.loc-hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;position:relative;z-index:2;}
.loc-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;background:rgba(66,133,244,.12);border:1px solid rgba(66,133,244,.3);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#8ab4f8;margin-bottom:20px;}
.loc-hero h1{font-size:52px;color:#fff;line-height:1.05;letter-spacing:-.04em;margin-bottom:20px;}
.loc-hero h1 em{font-style:normal;background:linear-gradient(135deg,#8ab4f8,#4285F4);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.loc-hero-desc{font-size:17px;color:rgba(255,255,255,.62);line-height:1.7;margin-bottom:32px;max-width:480px;}
.loc-hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:40px;}
.loc-hero-trust{display:flex;gap:24px;flex-wrap:wrap;}
.loc-trust-item{display:flex;align-items:center;gap:8px;font-size:13px;color:rgba(255,255,255,.5);}
.loc-trust-item strong{color:#fff;font-weight:700;}

/* ── LOCAL PACK MOCKUP ── */
.lpack-mock{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:20px;overflow:hidden;backdrop-filter:blur(8px);box-shadow:0 28px 70px rgba(0,0,0,.45);}
.lpack-browser{background:rgba(255,255,255,.06);padding:10px 14px;border-bottom:1px solid rgba(255,255,255,.07);display:flex;align-items:center;gap:10px;}
.lpack-dots{display:flex;gap:5px;}
.lpack-dots span{width:9px;height:9px;border-radius:50%;}
.lpack-dots span:nth-child(1){background:#ff5f57;}
.lpack-dots span:nth-child(2){background:#ffbd2e;}
.lpack-dots span:nth-child(3){background:#28c840;}
.lpack-url{flex:1;background:rgba(255,255,255,.08);border-radius:6px;padding:5px 12px;font-size:11px;color:rgba(255,255,255,.4);}
.lpack-body{padding:14px;}
.lpack-search{background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.12);border-radius:22px;padding:9px 16px;display:flex;align-items:center;gap:8px;margin-bottom:12px;}
.lpack-query{font-size:12.5px;color:rgba(255,255,255,.8);font-weight:500;min-height:17px;}
.lpack-cursor{display:inline-block;width:1px;height:13px;background:rgba(255,255,255,.7);margin-left:1px;animation:blink .8s step-end infinite;vertical-align:middle;}
@keyframes blink{0%,100%{opacity:1;}50%{opacity:0;}}
/* Map placeholder */
.lpack-map{height:90px;background:linear-gradient(135deg,rgba(66,133,244,.08),rgba(66,133,244,.04));border-radius:10px;margin-bottom:10px;position:relative;overflow:hidden;border:1px solid rgba(66,133,244,.15);}
.lpack-map::before{content:'🗺';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:28px;opacity:.3;}
.map-pin{position:absolute;width:20px;height:20px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);display:flex;align-items:center;justify-content:center;transition:all .6s cubic-bezier(.22,1,.36,1);}
.map-pin::after{content:'';width:8px;height:8px;background:#fff;border-radius:50%;display:block;}
.map-pin.p1{background:#64748b;top:30%;left:25%;}
.map-pin.p2{background:#64748b;top:50%;left:55%;}
.map-pin.p3{background:var(--loc);top:20%;left:65%;transform:rotate(-45deg) scale(1.3);}
.map-pin.p3.winner{background:#f59e0b;animation:pinPop .5s cubic-bezier(.22,1,.36,1);}
@keyframes pinPop{0%{transform:rotate(-45deg) scale(1);}50%{transform:rotate(-45deg) scale(1.8);}100%{transform:rotate(-45deg) scale(1.3);}}
/* Local pack cards */
.lpack-cards{display:flex;flex-direction:column;gap:6px;}
.lpack-card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:10px 12px;display:flex;gap:10px;align-items:flex-start;transition:all .6s cubic-bezier(.22,1,.36,1);}
.lpack-card.winner{background:rgba(66,133,244,.12);border-color:rgba(66,133,244,.4);}
.lpack-rank-badge{width:22px;height:22px;border-radius:6px;background:rgba(255,255,255,.1);color:rgba(255,255,255,.5);font-size:11px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .4s;}
.lpack-card.winner .lpack-rank-badge{background:var(--loc);color:#fff;}
.lpack-info{flex:1;min-width:0;}
.lpack-biz{font-size:12px;font-weight:700;color:rgba(255,255,255,.7);transition:.3s;}
.lpack-card.winner .lpack-biz{color:#fff;}
.lpack-meta{font-size:10.5px;color:rgba(255,255,255,.35);display:flex;align-items:center;gap:6px;margin-top:2px;}
.lpack-stars{color:#f59e0b;font-size:10px;letter-spacing:1px;}
.lpack-badge{padding:3px 8px;background:linear-gradient(135deg,var(--loc),var(--loc2));border-radius:5px;font-size:9px;font-weight:800;color:#fff;white-space:nowrap;opacity:0;transition:opacity .4s .2s;}
.lpack-card.winner .lpack-badge{opacity:1;}

/* STATS STRIP */
.loc-stats-strip{background:var(--loc);padding:0;}
.loc-stats-inner{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(0,0,0,.1);}
.loc-stat{padding:32px 24px;text-align:center;background:var(--loc);}
.loc-stat-n{font-size:40px;font-weight:900;color:#fff;line-height:1;letter-spacing:-.03em;}
.loc-stat-l{font-size:12px;color:rgba(255,255,255,.75);margin-top:6px;font-weight:500;text-transform:uppercase;letter-spacing:.06em;}

/* SERVICES GRID */
.services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.svc-card{background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:28px 24px;transition:transform .2s,box-shadow .2s,border-color .2s;}
.svc-card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(42,69,115,.1);border-color:rgba(66,133,244,.3);}
.svc-icon{width:50px;height:50px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:16px;background:linear-gradient(135deg,rgba(66,133,244,.1),rgba(66,133,244,.05));border:1px solid rgba(66,133,244,.2);}
.svc-card h3{font-size:17px;margin-bottom:10px;}
.svc-card p{font-size:13.5px;color:var(--m);line-height:1.65;margin-bottom:16px;}
.svc-tags{display:flex;flex-wrap:wrap;gap:6px;}
.svc-tag{padding:4px 10px;background:var(--bg);border-radius:6px;font-size:11px;font-weight:600;color:var(--s);}

/* PROCESS */
.process-section{background:var(--bg);}
.steps-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:0;position:relative;}
.steps-grid::before{content:'';position:absolute;top:34px;left:10%;right:10%;height:2px;background:linear-gradient(90deg,var(--loc),var(--o));z-index:0;}
.step{text-align:center;padding:0 12px;position:relative;z-index:1;}
.step-num{width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,var(--loc),var(--loc2));color:#fff;font-size:22px;font-weight:900;display:flex;align-items:center;justify-content:center;margin:0 auto 18px;box-shadow:0 8px 24px rgba(66,133,244,.3);}
.step h4{font-size:14px;margin-bottom:7px;}
.step p{font-size:12.5px;color:var(--m);line-height:1.6;}

/* WHY SECTION */
.why-grid{display:grid;grid-template-columns:1fr 1fr;gap:52px;align-items:center;}
.why-left{background:linear-gradient(135deg,var(--n-dark),#0a1535);border-radius:24px;padding:40px;}
.why-stat-big{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:20px 24px;}
.why-stat-big .num{font-size:44px;font-weight:900;color:#8ab4f8;line-height:1;letter-spacing:-.03em;}
.why-stat-big .lbl{font-size:12.5px;color:rgba(255,255,255,.5);margin-top:6px;}
.why-points{display:flex;flex-direction:column;gap:20px;}
.why-point{display:flex;gap:16px;align-items:flex-start;}
.why-icon{width:44px;height:44px;flex-shrink:0;border-radius:12px;background:linear-gradient(135deg,rgba(66,133,244,.12),rgba(66,133,244,.06));border:1px solid rgba(66,133,244,.2);display:flex;align-items:center;justify-content:center;font-size:18px;}
.why-point h4{font-size:15px;font-weight:700;color:var(--n);margin-bottom:5px;}
.why-point p{font-size:13.5px;color:var(--m);line-height:1.6;margin:0;}

/* INDUSTRY TABS */
.industry-section{background:var(--n-dark);}
.industry-section .sec-h h2{color:#fff;}
.industry-section .sec-h p{color:rgba(255,255,255,.5);}
.industry-tabs{display:flex;gap:8px;justify-content:center;margin-bottom:40px;flex-wrap:wrap;}
.ind-tab{padding:9px 20px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;border:1px solid rgba(255,255,255,.1);color:rgba(255,255,255,.5);background:transparent;transition:.2s;}
.ind-tab.on{background:var(--loc);color:#fff;border-color:var(--loc);}
.ind-content{display:none;animation:fadeUp .3s ease;}
.ind-content.on{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start;}
@keyframes fadeUp{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:translateY(0);}}
.ind-info h3{font-size:26px;color:#fff;margin-bottom:14px;}
.ind-info p{font-size:15px;color:rgba(255,255,255,.6);line-height:1.7;margin-bottom:24px;}
.ind-results{display:flex;flex-direction:column;gap:12px;}
.ind-result{display:flex;align-items:center;gap:12px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:14px 18px;}
.ind-result-val{font-size:22px;font-weight:900;color:#34d399;min-width:60px;}
.ind-result-lbl{font-size:13px;color:rgba(255,255,255,.6);}
.ind-flows{display:flex;flex-direction:column;gap:10px;}
.ind-flow{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:14px 18px;display:flex;gap:12px;align-items:flex-start;}
.ind-flow-icon{font-size:20px;flex-shrink:0;margin-top:2px;}
.ind-flow-title{font-size:13.5px;font-weight:700;color:#fff;margin-bottom:3px;}
.ind-flow-desc{font-size:12.5px;color:rgba(255,255,255,.5);}

/* FEATURES */
.features-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
.feat-item{background:#fff;border:1px solid var(--bdr);border-radius:14px;padding:22px 20px;display:flex;gap:14px;transition:.2s;}
.feat-item:hover{border-color:rgba(66,133,244,.2);box-shadow:0 6px 20px rgba(66,133,244,.06);}
.feat-icon{font-size:22px;flex-shrink:0;margin-top:2px;}
.feat-body h4{font-size:14.5px;font-weight:700;color:var(--n);margin-bottom:6px;}
.feat-body p{font-size:13px;color:var(--m);line-height:1.6;margin:0;}

/* FAQ */
.faq-section{background:var(--bg);}
.faq-wrap-2col{display:grid;grid-template-columns:1fr 1fr;gap:0 28px;align-items:start;}
.faq-col{display:flex;flex-direction:column;}
.fi{border:1px solid var(--bdr);border-radius:14px;margin-bottom:10px;overflow:hidden;background:#fff;transition:.15s;}
.fi:hover{border-color:rgba(66,133,244,.2);}
.fi.on{border-color:rgba(66,133,244,.4);box-shadow:0 4px 20px rgba(66,133,244,.08);}
.fi-q{width:100%;text-align:left;background:transparent;border:none;padding:20px 22px;font-size:14.5px;font-weight:700;color:var(--n);display:flex;justify-content:space-between;align-items:center;gap:12px;cursor:pointer;}
.fi-icon{width:26px;height:26px;border-radius:50%;flex-shrink:0;background:var(--bg);border:1px solid var(--bdr);display:flex;align-items:center;justify-content:center;color:var(--loc);font-size:18px;font-weight:900;line-height:1;transition:transform .2s;}
.fi.on .fi-icon{transform:rotate(45deg);background:var(--loc);color:#fff;border-color:var(--loc);}
.fi-a{max-height:0;overflow:hidden;transition:.3s;color:var(--m);font-size:14px;line-height:1.75;}
.fi.on .fi-a{max-height:300px;padding:0 22px 22px;}

/* CTA */
.loc-cta{background:linear-gradient(155deg,#060d1f 0%,#091428 100%);padding:96px 0;text-align:center;position:relative;overflow:hidden;}
.loc-cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(66,133,244,.1) 0%,transparent 70%);}
.loc-cta h2{color:#fff;font-size:44px;margin-bottom:16px;position:relative;z-index:1;}
.loc-cta p{color:rgba(255,255,255,.6);font-size:17px;margin-bottom:36px;position:relative;z-index:1;}
.loc-cta-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;position:relative;z-index:1;}

/* FOOTER */
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

/* REVEAL */
.rv,.rv2,.rv3{opacity:0;transform:translateY(28px);transition:opacity .6s ease,transform .6s ease;}
.rv2{transition-delay:.1s;}.rv3{transition-delay:.2s;}
.rv.vis,.rv2.vis,.rv3.vis{opacity:1;transform:translateY(0);}

/* RESPONSIVE */
@media(max-width:1000px){.steps-grid{grid-template-columns:repeat(3,1fr);gap:32px;}.steps-grid::before{display:none;}}
@media(max-width:900px){
  .loc-hero-grid,.why-grid,.ind-content.on,.faq-wrap-2col{grid-template-columns:1fr;}
  .loc-hero h1{font-size:36px;}
  .services-grid,.features-grid{grid-template-columns:1fr 1fr;}
  .loc-stats-inner,.fg{grid-template-columns:1fr 1fr;}
  .steps-grid{grid-template-columns:1fr 1fr;}
  .hb{display:flex;}
  .dmenu,.navcta .btn:not(.show-m){display:none;}
}
@media(max-width:600px){
  .services-grid,.features-grid,.steps-grid,.loc-stats-inner,.fg{grid-template-columns:1fr;}
  section{padding:60px 0;}
  .loc-hero{padding:64px 0 52px;}
}
`

const ld0 = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Local SEO Services India",
      "provider": {
        "@type": "Organization",
        "name": "Click Decoded",
        "url": "https://clickdecoded.com"
      },
      "description": "Complete local SEO services: Google Business Profile optimization, local pack ranking, citation building, review management, and local content strategy for businesses across India.",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": "Local Search Engine Optimization",
      "url": "https://www.clickdecoded.com/services/local-seo"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Local SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Local SEO optimizes your online presence to rank in Google's local results — including Google Maps, the Local Pack (the 3 business cards shown below ads), and 'near me' searches. It's the most direct way to drive customers from your city to your business."
          }
        },
        {
          "@type": "Question",
          "name": "How long does Local SEO take to show results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Google Business Profile optimizations often show results within 30–60 days. Local pack ranking improvements typically take 2–4 months. Citation building and review management compound over time."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a physical location for Local SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A physical address verified with Google is ideal for Local Pack rankings. However, service area businesses (plumbers, consultants, etc.) can also rank in local results by setting a service area in Google Business Profile."
          }
        },
        {
          "@type": "Question",
          "name": "How important are Google reviews for Local SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Extremely important. Review quantity, quality, and recency are among the top local ranking signals. Businesses with more 4-5 star reviews consistently outrank competitors in the Local Pack."
          }
        },
        {
          "@type": "Question",
          "name": "What is a Google Business Profile and why does it matter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Google Business Profile (formerly Google My Business) is the free listing that controls how your business appears in Google Maps and the Local Pack. A fully optimized GBP can be the single biggest driver of local leads for a physical business."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How Local SEO Services India Works — Our Process",
      "description": "Click Decoded's Local SEO services put your business at #1 in Google Maps and the Local Pack. Google Business Profile optimization, citations, reviews & local rankings across India.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Local Audit",
          "text": "GBP health check, citation inconsistencies, competitor gap analysis, and review baseline for your business."
        },
        {
          "@type": "HowToStep",
          "name": "GBP Overhaul",
          "text": "Complete Google Business Profile optimization — categories, attributes, photos, services, posts, and Q&A."
        },
        {
          "@type": "HowToStep",
          "name": "Citation Blitz",
          "text": "NAP consistency across 50+ directories and platforms. Duplicate listings removed, existing ones corrected."
        },
        {
          "@type": "HowToStep",
          "name": "Reviews & Content",
          "text": "Review generation system launched. City pages published. Local schema markup implemented across site."
        },
        {
          "@type": "HowToStep",
          "name": "Monitor & Grow",
          "text": "Monthly local rank tracking, GBP post schedule, review responses, and citation growth — compounding every month."
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
          "name": "Local SEO",
          "item": "https://www.clickdecoded.com/services/local-seo"
        }
      ]
    }
  ]
}`

const js0 = `(function(){
// sticky scroll handled by components/header.js
// mobile menu handled by components/header.js
document.querySelectorAll('.ma>button').forEach(b=>{b.onclick=()=>{const a=b.parentElement,isOpen=a.classList.contains('on');document.querySelectorAll('.ma').forEach(x=>x.classList.remove('on'));if(!isOpen)a.classList.add('on');};});
document.querySelectorAll('.fi').forEach(item=>{item.querySelector('.fi-q').onclick=()=>{const isOn=item.classList.contains('on');document.querySelectorAll('.fi').forEach(f=>f.classList.remove('on'));if(!isOn)item.classList.add('on');};});
document.querySelectorAll('.ind-tab').forEach(tab=>{tab.onclick=()=>{document.querySelectorAll('.ind-tab').forEach(t=>t.classList.remove('on'));document.querySelectorAll('.ind-content').forEach(c=>c.classList.remove('on'));tab.classList.add('on');const t=document.getElementById('ind-'+tab.dataset.ind);if(t)t.classList.add('on');};});
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('vis');});},{threshold:.1});
document.querySelectorAll('.rv,.rv2,.rv3').forEach(el=>obs.observe(el));

/* ── ANIMATED LOCAL PACK ── */
(function(){
  const searches=[
    {q:'dentist near me',cards:[{b:'SmileCare Dental',r:'4.1',v:380,rank:3},{b:'City Dental Clinic',r:'3.8',v:210,rank:2},{b:'Your Clinic',r:'4.9',v:620,rank:5,win:true}],winRank:1},
    {q:'best restaurant Bhopal',cards:[{b:'Spice Garden',r:'4.2',v:540,rank:2},{b:'Royal Kitchen',r:'3.9',v:290,rank:3},{b:'Your Restaurant',r:'4.8',v:810,rank:4,win:true}],winRank:1},
    {q:'plumber near me',cards:[{b:'QuickFix Plumbing',r:'4.0',v:180,rank:2},{b:'CityPipe Services',r:'3.7',v:130,rank:3},{b:'Your Service',r:'4.9',v:460,rank:6,win:true}],winRank:1},
  ];
  let cycle=0;
  const qEl=document.getElementById('lpackQuery');
  const cardsEl=document.getElementById('lpackCards');
  if(!qEl||!cardsEl)return;

  function typeQuery(text,cb){
    qEl.innerHTML='<span class="lpack-cursor"></span>';
    let i=0;
    const iv=setInterval(()=>{
      qEl.innerHTML=text.slice(0,i)+'<span class="lpack-cursor"></span>';
      i++;if(i>text.length){clearInterval(iv);setTimeout(cb,400);}
    },65);
  }

  function renderCards(data){
    cardsEl.innerHTML='';
    const sorted=[...data.cards].sort((a,b)=>a.rank-b.rank);
    sorted.forEach((c,i)=>{
      const div=document.createElement('div');
      div.className='lpack-card'+(c.win?' winner':'');
      div.innerHTML=\`
        <div class="lpack-rank-badge">\${c.rank}</div>
        <div class="lpack-info">
          <div class="lpack-biz">\${c.b}</div>
          <div class="lpack-meta"><span class="lpack-stars">\${'★'.repeat(Math.floor(c.r))}\${'☆'.repeat(5-Math.floor(c.r))}</span> \${c.r} · \${c.v} reviews</div>
        </div>
        \${c.win?\`<div class="lpack-badge">📈 Climbing</div>\`:''}
      \`;
      div.style.opacity='0';div.style.transform='translateY(6px)';
      cardsEl.appendChild(div);
      setTimeout(()=>{div.style.transition='all .3s ease';div.style.opacity='1';div.style.transform='translateY(0)';},i*100);
    });
    // Animate win card to top
    setTimeout(()=>{
      const winCard=cardsEl.querySelector('.winner');
      if(!winCard)return;
      const rankEl=winCard.querySelector('.lpack-rank-badge');
      const badge=winCard.querySelector('.lpack-badge');
      let cur=data.cards.find(c=>c.win).rank;
      const iv=setInterval(()=>{
        cur--;rankEl.textContent=cur;
        if(cur<=data.winRank){
          clearInterval(iv);
          rankEl.textContent=data.winRank;
          if(badge)badge.textContent='🏆 #'+data.winRank;
          const first=cardsEl.firstChild;
          if(first&&first!==winCard)cardsEl.insertBefore(winCard,first);
        }
      },250);
    },1600);
  }

  function runCycle(){
    const d=searches[cycle%searches.length];cycle++;
    cardsEl.innerHTML='';
    typeQuery(d.q,()=>renderCards(d));
    setTimeout(runCycle,7500);
  }
  setTimeout(runCycle,800);
})();
})();`

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld0 }} />
      <div className="breadcrumb">
<div className="wrap">
<div className="bc-list">
<a href="/">Home</a><span className="bc-sep">›</span>
<a href="/services/seo">SEO Services</a><span className="bc-sep">›</span>
<span>Local SEO</span>
</div>
</div>
</div>
      <section className="loc-hero">
<div className="wrap">
<div className="loc-hero-grid">
<div>
<div className="loc-eyebrow">📍 Local Pack &amp; Maps Specialists</div>
<h1>Own Your City.<br />Rank #1 in <em>Google Maps.</em></h1>
<p className="loc-hero-desc">When someone searches "near me" or your service in your city, they need to find you first — not your competitor. We make that happen through Local SEO that drives real foot traffic, calls, and leads.</p>
<div className="loc-hero-btns">
<a href="#contact" className="btn btn-loc">📍 Get Free Local Audit <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
<a href="/services/seo" className="btn btn-ghost">See Our Services</a>
</div>
<div className="loc-hero-trust">
<div className="loc-trust-item"><strong>500+</strong> GBP profiles optimized</div>
<div className="loc-trust-item"><strong>3×</strong> more calls on average</div>
<div className="loc-trust-item"><strong>4.8★</strong> avg review rating</div>
<div className="loc-trust-item"><strong>30 days</strong> first results</div>
</div>
</div>

<div className="lpack-mock">
<div className="lpack-browser">
<div className="lpack-dots"><span></span><span></span><span></span></div>
<div className="lpack-url">google.com/search</div>
</div>
<div className="lpack-body">
<div className="lpack-search">
<span style={{ fontSize: '13px', opacity: '.5' }}>🔍</span>
<span className="lpack-query" id="lpackQuery"><span className="lpack-cursor"></span></span>
</div>
<div className="lpack-map" id="lpackMap">
<div className="map-pin p1" id="pin1"></div>
<div className="map-pin p2" id="pin2"></div>
<div className="map-pin p3" id="pin3"></div>
</div>
<div style={{ fontSize: '10px', color: 'rgba(255,255,255,.25)', marginBottom: '8px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '.08em' }}>Local Pack — Top 3 Results</div>
<div className="lpack-cards" id="lpackCards"></div>
</div>
</div>
</div>
</div>
</section>
      <div className="loc-stats-strip">
<div className="wrap">
<div className="loc-stats-inner">
<div className="loc-stat"><div className="loc-stat-n">76%</div><div className="loc-stat-l">of "near me" searches visit within 24hrs</div></div>
<div className="loc-stat"><div className="loc-stat-n">3×</div><div className="loc-stat-l">More calls after GBP optimization</div></div>
<div className="loc-stat"><div className="loc-stat-n">30 Days</div><div className="loc-stat-l">First ranking improvements visible</div></div>
<div className="loc-stat"><div className="loc-stat-n">500+</div><div className="loc-stat-l">GBP Profiles Optimized</div></div>
</div>
</div>
</div>
      <section>
<div className="wrap">
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }}>
<div className="rv">
<div className="pill pill-b" style={{ marginBottom: '16px' }}>Why It Matters</div>
<h2 style={{ fontSize: '36px', marginBottom: '16px' }}>Your Customers Are Searching "Near Me" Right Now</h2>
<p style={{ fontSize: '16px', color: 'var(--m)', lineHeight: '1.75', marginBottom: '20px' }}>Over 46% of all Google searches have local intent. When someone types "dentist in Bhopal" or "best gym near me," Google shows a Local Pack — 3 businesses with a map — before any website results. If you're not in those 3, you're invisible.</p>
<p style={{ fontSize: '16px', color: 'var(--m)', lineHeight: '1.75', marginBottom: '28px' }}>Local SEO is the highest-ROI marketing channel for brick-and-mortar businesses, service professionals, and city-based companies. It drives real footfall, direct calls, and qualified leads — from people ready to buy right now.</p>
<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
<div style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--m)' }}><span style={{ color: 'var(--loc)', fontWeight: '900', fontSize: '16px' }}>✓</span> 76% of local searches result in a visit within 24 hours</div>
<div style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--m)' }}><span style={{ color: 'var(--loc)', fontWeight: '900', fontSize: '16px' }}>✓</span> 28% of local searches result in a purchase</div>
<div style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--m)' }}><span style={{ color: 'var(--loc)', fontWeight: '900', fontSize: '16px' }}>✓</span> "Near me" searches have grown 500%+ in 2 years</div>
<div style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--m)' }}><span style={{ color: 'var(--loc)', fontWeight: '900', fontSize: '16px' }}>✓</span> 87% of consumers read online reviews before visiting</div>
</div>
</div>
<div className="rv2" style={{ background: 'var(--bg)', borderRadius: '20px', padding: '36px', border: '1px solid var(--bdr)' }}>
<h4 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--s)', marginBottom: '20px' }}>Where Customers Find You</h4>
<div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
<div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
<div style={{ width: '44px', height: '44px', background: 'rgba(66,133,244,.1)', border: '1px solid rgba(66,133,244,.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: '0' }}>📍</div>
<div><div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--n)' }}>Google Local Pack</div><div style={{ fontSize: '13px', color: 'var(--m)' }}>3 business cards shown for city searches — highest CTR real estate</div></div>
</div>
<div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
<div style={{ width: '44px', height: '44px', background: 'rgba(66,133,244,.1)', border: '1px solid rgba(66,133,244,.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: '0' }}>🗺️</div>
<div><div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--n)' }}>Google Maps</div><div style={{ fontSize: '13px', color: 'var(--m)' }}>Direct navigation, calls, and direction requests from map listings</div></div>
</div>
<div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
<div style={{ width: '44px', height: '44px', background: 'rgba(66,133,244,.1)', border: '1px solid rgba(66,133,244,.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: '0' }}>🔍</div>
<div><div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--n)' }}>Local Organic Results</div><div style={{ fontSize: '13px', color: 'var(--m)' }}>City-specific web pages ranking below the local pack</div></div>
</div>
<div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
<div style={{ width: '44px', height: '44px', background: 'rgba(66,133,244,.1)', border: '1px solid rgba(66,133,244,.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: '0' }}>⭐</div>
<div><div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--n)' }}>Review Platforms</div><div style={{ fontSize: '13px', color: 'var(--m)' }}>JustDial, Sulekha, Yelp, and industry directories that feed Google</div></div>
</div>
</div>
</div>
</div>
</div>
</section>
      <section style={{ background: 'var(--bg)' }} id="services">
<div className="wrap">
<div className="sec-h rv">
<div className="pill pill-loc">Our Local SEO Services</div>
<h2>Everything You Need to Dominate Local Search</h2>
<p>A complete local SEO stack — from your Google Business Profile to your local authority — all managed by specialists.</p>
</div>
<div className="services-grid">
<div className="svc-card rv">
<div className="svc-icon">🏪</div>
<h3>Google Business Profile Optimization</h3>
<p>Full GBP setup and optimization — business categories, service areas, hours, photos, posts, Q&amp;A, and attributes. The single biggest lever for local pack rankings.</p>
<div className="svc-tags"><span className="svc-tag">GBP Setup</span><span className="svc-tag">Category Optimization</span><span className="svc-tag">Weekly Posts</span></div>
</div>
<div className="svc-card rv2">
<div className="svc-icon">📋</div>
<h3>Local Citation Building</h3>
<p>Consistent NAP (Name, Address, Phone) listings across 50+ Indian directories — JustDial, Sulekha, IndiaMart, Yellow Pages, and industry-specific platforms — that signal trust to Google.</p>
<div className="svc-tags"><span className="svc-tag">50+ Directories</span><span className="svc-tag">NAP Consistency</span><span className="svc-tag">Indian Platforms</span></div>
</div>
<div className="svc-card rv3">
<div className="svc-icon">⭐</div>
<h3>Review Management &amp; Generation</h3>
<p>Systematic strategy to generate a consistent flow of genuine 5-star Google reviews. Includes review request templates, response management, and reputation monitoring.</p>
<div className="svc-tags"><span className="svc-tag">Review Strategy</span><span className="svc-tag">Response Templates</span><span className="svc-tag">Reputation Monitor</span></div>
</div>
<div className="svc-card rv">
<div className="svc-icon">📄</div>
<h3>Local Landing Pages</h3>
<p>City and locality-specific landing pages optimized for every area you serve. "Plumber in Indore," "CA in Bhopal" — each page built to rank and convert local visitors.</p>
<div className="svc-tags"><span className="svc-tag">City Pages</span><span className="svc-tag">Locality Pages</span><span className="svc-tag">Local Schema</span></div>
</div>
<div className="svc-card rv2">
<div className="svc-icon">🔗</div>
<h3>Local Link Building</h3>
<p>Backlinks from local newspapers, chamber of commerce listings, local blogs, and city-specific directories that build hyper-local authority Google rewards.</p>
<div className="svc-tags"><span className="svc-tag">Local Outreach</span><span className="svc-tag">News Mentions</span><span className="svc-tag">Chamber Listings</span></div>
</div>
<div className="svc-card rv3">
<div className="svc-icon">🗺️</div>
<h3>Multi-Location SEO</h3>
<p>For businesses with multiple branches — dedicated GBP profiles, location pages, and local citation management for each city or locality you operate in, all coordinated centrally.</p>
<div className="svc-tags"><span className="svc-tag">Multi-Branch</span><span className="svc-tag">Location Pages</span><span className="svc-tag">Central Reporting</span></div>
</div>
</div>
</div>
</section>
      <section className="process-section">
<div className="wrap">
<div className="sec-h rv">
<div className="pill pill-loc">Our Process</div>
<h2>Local Pack Rankings in 5 Steps</h2>
<p>A transparent, repeatable process that has ranked 500+ businesses in Google's Local Pack across India.</p>
</div>
<div className="steps-grid">
<div className="step rv"><div className="step-num">1</div><h4>Local Audit</h4><p>GBP health check, citation inconsistencies, competitor gap analysis, and review baseline for your business.</p></div>
<div className="step rv2"><div className="step-num">2</div><h4>GBP Overhaul</h4><p>Complete Google Business Profile optimization — categories, attributes, photos, services, posts, and Q&amp;A.</p></div>
<div className="step rv3"><div className="step-num">3</div><h4>Citation Blitz</h4><p>NAP consistency across 50+ directories and platforms. Duplicate listings removed, existing ones corrected.</p></div>
<div className="step rv"><div className="step-num">4</div><h4>Reviews &amp; Content</h4><p>Review generation system launched. City pages published. Local schema markup implemented across site.</p></div>
<div className="step rv2"><div className="step-num">5</div><h4>Monitor &amp; Grow</h4><p>Monthly local rank tracking, GBP post schedule, review responses, and citation growth — compounding every month.</p></div>
</div>
</div>
</section>
      <section>
<div className="wrap">
<div className="sec-h rv">
<div className="pill pill-o">Why Click Decoded</div>
<h2>Local SEO That Goes Beyond Just GBP</h2>
<p>Most agencies just fill in your GBP form and call it Local SEO. We go deeper — and the results show it.</p>
</div>
<div className="why-grid">
<div className="why-left rv">
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
<div className="why-stat-big"><div className="num">3×</div><div className="lbl">More calls from GBP after optimization</div></div>
<div className="why-stat-big"><div className="num">30d</div><div className="lbl">Average time to first Local Pack movement</div></div>
<div className="why-stat-big"><div className="num">500+</div><div className="lbl">GBP profiles optimized across India</div></div>
<div className="why-stat-big"><div className="num">4.8★</div><div className="lbl">Average review rating across clients</div></div>
</div>
</div>
<div className="why-points rv2">
<div className="why-point"><div className="why-icon">🇮🇳</div><div><h4>India-Specific Local Knowledge</h4><p>We understand how Indian consumers search — city names, localities, dialects, and platforms like JustDial and IndiaMart that matter here but agencies elsewhere ignore.</p></div></div>
<div className="why-point"><div className="why-icon">⭐</div><div><h4>Review Strategy That Actually Works</h4><p>We've helped clients go from 12 reviews to 200+ in 6 months using ethical, systemized strategies — without buying fake reviews that get removed.</p></div></div>
<div className="why-point"><div className="why-icon">📊</div><div><h4>Local Rank Tracking Dashboard</h4><p>Weekly local rank reports showing your position in the Local Pack across every city and search term we're targeting — not just a screenshot, a full live dashboard.</p></div></div>
<div className="why-point"><div className="why-icon">🏢</div><div><h4>Multi-Location Specialists</h4><p>Managing 10 branches or 1 — we've built systems to scale local SEO across multiple locations without letting any single location fall behind.</p></div></div>
</div>
</div>
</div>
</section>
      <section className="industry-section">
<div className="wrap">
<div className="sec-h rv">
<div className="pill pill-loc">Industry Results</div>
<h2>Local SEO Results by Business Type</h2>
<p>Every industry has different local search patterns. Here's how we've delivered results in yours.</p>
</div>
<div className="industry-tabs">
<button className="ind-tab on" data-ind="clinic">🏥 Clinics &amp; Doctors</button>
<button className="ind-tab" data-ind="restaurant">🍽️ Restaurants</button>
<button className="ind-tab" data-ind="retail">🛍️ Retail &amp; Shops</button>
<button className="ind-tab" data-ind="realestate">🏠 Real Estate</button>
<button className="ind-tab" data-ind="services">🔧 Home Services</button>
</div>
<div className="ind-content on" id="ind-clinic">
<div className="ind-info">
<h3>Local SEO for Clinics &amp; Doctors</h3>
<p>Patients search "dentist near me" or "skin specialist Bhopal" before booking. We put your clinic in the top 3 of the Local Pack for every relevant condition, speciality, and locality — turning searches into booked appointments.</p>
<div className="ind-results">
<div className="ind-result"><div className="ind-result-val">4.1×</div><div className="ind-result-lbl">Increase in appointment calls from Google</div></div>
<div className="ind-result"><div className="ind-result-val">#1–3</div><div className="ind-result-lbl">Local pack positions for 40+ speciality keywords</div></div>
<div className="ind-result"><div className="ind-result-val">180+</div><div className="ind-result-lbl">New Google reviews generated in 6 months</div></div>
</div>
</div>
<div className="ind-flows">
<div className="ind-flow"><div className="ind-flow-icon">🏥</div><div><div className="ind-flow-title">Speciality &amp; Condition Targeting</div><div className="ind-flow-desc">GBP categories and website pages optimized for every condition you treat and speciality you offer.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">⭐</div><div><div className="ind-flow-title">Post-Visit Review System</div><div className="ind-flow-desc">WhatsApp-based review request flow that turns happy patients into public 5-star reviews on autopilot.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">📍</div><div><div className="ind-flow-title">Multi-Branch GBP Management</div><div className="ind-flow-desc">Individual optimized profiles for each clinic location with coordinated posting and review strategy.</div></div></div>
</div>
</div>
<div className="ind-content" id="ind-restaurant">
<div className="ind-info">
<h3>Local SEO for Restaurants &amp; Cafes</h3>
<p>Diners Google "best restaurant near me" or "Italian restaurant Indore" before deciding where to eat. We make sure your restaurant appears at the top — with mouth-watering photos, glowing reviews, and accurate menu information.</p>
<div className="ind-results">
<div className="ind-result"><div className="ind-result-val">5.2×</div><div className="ind-result-lbl">Increase in direction requests from Google Maps</div></div>
<div className="ind-result"><div className="ind-result-val">220+</div><div className="ind-result-lbl">New reviews in 4 months for a Bhopal restaurant</div></div>
<div className="ind-result"><div className="ind-result-val">Top 3</div><div className="ind-result-lbl">Local pack positions for cuisine keywords</div></div>
</div>
</div>
<div className="ind-flows">
<div className="ind-flow"><div className="ind-flow-icon">📸</div><div><div className="ind-flow-title">GBP Photo Strategy</div><div className="ind-flow-desc">Professional food and ambiance photos uploaded regularly to GBP — the single biggest CTR driver for restaurants.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">🍽️</div><div><div className="ind-flow-title">Menu &amp; Attribute Optimization</div><div className="ind-flow-desc">Complete menu listing, dietary attributes (veg/non-veg), cuisine type, and dining options configured for maximum visibility.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">⭐</div><div><div className="ind-flow-title">Review Response Strategy</div><div className="ind-flow-desc">Professional, keyword-rich responses to every review — positive and negative — to improve engagement signals.</div></div></div>
</div>
</div>
<div className="ind-content" id="ind-retail">
<div className="ind-info">
<h3>Local SEO for Retail Shops &amp; Stores</h3>
<p>Shoppers search "mobile store near me" or "furniture shop Bhopal" before visiting. We ensure your store appears at the top with accurate hours, inventory highlights, and the reviews that make shoppers choose you over the competitor down the street.</p>
<div className="ind-results">
<div className="ind-result"><div className="ind-result-val">3.8×</div><div className="ind-result-lbl">Increase in store visit tracking from Google</div></div>
<div className="ind-result"><div className="ind-result-val">60%</div><div className="ind-result-lbl">More calls from Google Business Profile</div></div>
<div className="ind-result"><div className="ind-result-val">Top 2</div><div className="ind-result-lbl">Local pack for 25+ product category keywords</div></div>
</div>
</div>
<div className="ind-flows">
<div className="ind-flow"><div className="ind-flow-icon">🛍️</div><div><div className="ind-flow-title">Product Category Optimization</div><div className="ind-flow-desc">GBP services and products section optimized for every product category and brand you stock.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">⏰</div><div><div className="ind-flow-title">Hours &amp; Holiday Updates</div><div className="ind-flow-desc">Proactive management of opening hours, special hours, and holiday schedules to prevent lost visits.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">💬</div><div><div className="ind-flow-title">GBP Messaging &amp; Chat</div><div className="ind-flow-desc">GBP chat enabled and monitored so customers can enquire directly from Google — zero friction to contact.</div></div></div>
</div>
</div>
<div className="ind-content" id="ind-realestate">
<div className="ind-info">
<h3>Local SEO for Real Estate Agents &amp; Builders</h3>
<p>Property buyers search by locality, project, or agent before making any contact. We rank your agency and projects in the Local Pack and local organic results for every area and property type you sell.</p>
<div className="ind-results">
<div className="ind-result"><div className="ind-result-val">6.3×</div><div className="ind-result-lbl">Increase in property enquiries from Google</div></div>
<div className="ind-result"><div className="ind-result-val">#1</div><div className="ind-result-lbl">Local pack for "real estate agent [city]" keywords</div></div>
<div className="ind-result"><div className="ind-result-val">55%</div><div className="ind-result-lbl">Of new leads now sourced from local organic search</div></div>
</div>
</div>
<div className="ind-flows">
<div className="ind-flow"><div className="ind-flow-icon">🏠</div><div><div className="ind-flow-title">Project &amp; Locality Pages</div><div className="ind-flow-desc">Individual SEO-optimized pages for every project, locality, and property type with local schema markup.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">📋</div><div><div className="ind-flow-title">Real Estate Directory Listings</div><div className="ind-flow-desc">Consistent listings on MagicBricks, 99acres, Housing.com, and local property portals — all NAP-consistent.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">⭐</div><div><div className="ind-flow-title">Client Testimonial Strategy</div><div className="ind-flow-desc">Post-closing review request system turning satisfied buyers into public social proof that ranks and converts.</div></div></div>
</div>
</div>
<div className="ind-content" id="ind-services">
<div className="ind-info">
<h3>Local SEO for Home Service Businesses</h3>
<p>Plumbers, electricians, pest control, AC repair — every home service buyer searches urgently and locally. We ensure you're the first call they make by dominating the Local Pack for every service + city combination you cover.</p>
<div className="ind-results">
<div className="ind-result"><div className="ind-result-val">7.2×</div><div className="ind-result-lbl">Increase in inbound calls from Google</div></div>
<div className="ind-result"><div className="ind-result-val">40+</div><div className="ind-result-lbl">Service keywords in the Local Pack top 3</div></div>
<div className="ind-result"><div className="ind-result-val">0 ads</div><div className="ind-result-lbl">Paid ad spend needed after 4 months of Local SEO</div></div>
</div>
</div>
<div className="ind-flows">
<div className="ind-flow"><div className="ind-flow-icon">🔧</div><div><div className="ind-flow-title">Service Area Optimization</div><div className="ind-flow-desc">Service area businesses set up to rank across multiple localities without a fixed address requirement.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">📞</div><div><div className="ind-flow-title">Call Tracking Integration</div><div className="ind-flow-desc">Track every call from Google Maps, GBP, and local search to measure exact ROI per keyword.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">🏷️</div><div><div className="ind-flow-title">Service-Specific Landing Pages</div><div className="ind-flow-desc">Individual pages for each service type — "AC repair Bhopal," "plumber Indore" — each built to rank and convert.</div></div></div>
</div>
</div>
</div>
</section>
      <section>
<div className="wrap">
<div className="sec-h rv">
<div className="pill pill-b">What You Get</div>
<h2>Everything in Every Local SEO Package</h2>
<p>Complete transparency on every deliverable — no hidden extras or surprise upgrades.</p>
</div>
<div className="features-grid">
<div className="feat-item rv"><div className="feat-icon">🏪</div><div className="feat-body"><h4>Complete GBP Optimization</h4><p>Every element of your Google Business Profile — photos, posts, Q&amp;A, services, attributes — optimized and maintained monthly.</p></div></div>
<div className="feat-item rv2"><div className="feat-icon">📋</div><div className="feat-body"><h4>50+ Citation Submissions</h4><p>Your business listed consistently on every major Indian directory and platform with identical NAP data to build Google's trust.</p></div></div>
<div className="feat-item rv"><div className="feat-icon">⭐</div><div className="feat-body"><h4>Review Generation System</h4><p>Plug-and-play review request templates via WhatsApp and email that generate a consistent stream of genuine 5-star reviews.</p></div></div>
<div className="feat-item rv2"><div className="feat-icon">🗺️</div><div className="feat-body"><h4>Local Rank Tracking</h4><p>Weekly rank tracking for every target keyword in every target location — with a visual dashboard showing exactly where you stand.</p></div></div>
<div className="feat-item rv"><div className="feat-icon">📄</div><div className="feat-body"><h4>City &amp; Locality Pages</h4><p>SEO-optimized landing pages for every city and locality you serve, with local schema markup for maximum Google visibility.</p></div></div>
<div className="feat-item rv2"><div className="feat-icon">📊</div><div className="feat-body"><h4>Monthly Performance Reports</h4><p>Clear monthly reports on Local Pack positions, GBP views, call clicks, direction requests, and website clicks — all from Google's own data.</p></div></div>
</div>
</div>
</section>
      <section className="faq-section" id="faq">
<div className="wrap">
<div className="sec-h rv">
<div className="pill pill-loc">Common Questions</div>
<h2>Frequently Asked Questions</h2>
<p>Clear answers to the most common Local SEO questions we hear from businesses across India.</p>
</div>
<div className="faq-wrap-2col">
<div className="faq-col">
<div className="fi"><button className="fi-q">What is Local SEO?<span className="fi-icon">+</span></button><div className="fi-a">Local SEO optimizes your online presence to rank in Google's local results — including Google Maps, the Local Pack (the 3 business cards shown for city-based searches), and "near me" searches. It's the highest-ROI marketing channel for businesses that serve customers in a specific city or area.</div></div>
<div className="fi"><button className="fi-q">How long does Local SEO take?<span className="fi-icon">+</span></button><div className="fi-a">Google Business Profile optimizations often show results within 30–60 days. Significant Local Pack ranking improvements typically take 2–4 months. Review generation and citation building compound over time — businesses that invest consistently dominate their city.</div></div>
<div className="fi"><button className="fi-q">Do I need a physical location for Local SEO?<span className="fi-icon">+</span></button><div className="fi-a">A verified physical address is ideal for Local Pack rankings. However, service area businesses (plumbers, consultants, tutors, etc.) can set a service area in GBP and still rank in local results for every city and locality they cover.</div></div>
</div>
<div className="faq-col">
<div className="fi"><button className="fi-q">How important are Google reviews?<span className="fi-icon">+</span></button><div className="fi-a">Extremely important. Review quantity, average rating, and recency are top local ranking signals. Businesses with more genuine 4-5 star reviews consistently outrank competitors. We build ethical, scalable systems to generate reviews from your real customers.</div></div>
<div className="fi"><button className="fi-q">What is Google Business Profile and why does it matter?<span className="fi-icon">+</span></button><div className="fi-a">Google Business Profile (formerly Google My Business) controls how your business appears in Google Maps and the Local Pack — the most clicked section for local searches. A fully optimized GBP can single-handedly be the biggest driver of local leads for a physical or service business.</div></div>
<div className="fi"><button className="fi-q">Can you manage multiple locations?<span className="fi-icon">+</span></button><div className="fi-a">Yes. We specialize in multi-location Local SEO — managing individual GBP profiles, location pages, and citation strategies for each branch, all coordinated centrally with unified reporting across all locations.</div></div>
</div>
</div>
</div>
</section>
      <section className="loc-cta" id="contact">
<div className="wrap">
<div className="pill pill-loc" style={{ marginBottom: '20px', display: 'inline-flex' }}>📍 Free Local SEO Audit</div>
<h2>Ready to Own the Local Pack in Your City?</h2>
<p>Get a free Local SEO audit — we'll show you exactly where your GBP is leaking rankings, what your top local competitor is doing that you aren't, and a clear roadmap to rank #1 in your city.</p>
<div className="loc-cta-btns">
<a href="/contact" className="btn btn-loc">📍 Get My Free Local Audit <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
<a href="https://wa.me/919407000101?text=Hi!%20I'd%20like%20a%20free%20local%20SEO%20audit." target="_blank" rel="noopener" className="btn btn-ghost">💬 WhatsApp Us Instead</a>
</div>
<p style={{ fontSize: '13px', color: 'rgba(255,255,255,.3)', marginTop: '24px', position: 'relative', zIndex: '1' }}>✓ Free, no commitment  ·  ✓ Delivered in 48 hours  ·  ✓ Real audit, not a sales pitch</p>
</div>
</section>
      <PageScript id="services-local-seo-0" code={js0} />
    </>
  )
}
