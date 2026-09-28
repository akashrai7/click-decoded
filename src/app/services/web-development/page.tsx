/* eslint-disable */
// src/app/services/web-development/page.tsx — generated from web-development.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "Web Development Services India | Click Decoded",
  description: "Click Decoded builds high-performance websites, WordPress sites, e-commerce stores, and custom web apps for Indian businesses. 98/100 PageSpeed. SEO-ready.",
  alternates: { canonical: "/services/web-development" },
  openGraph: {
    title: "Web Development Services — Click Decoded",
    description: "High-performance websites built to rank on Google and convert visitors into leads. Next.js, WordPress, e-commerce & custom web apps.",
    url: "/services/web-development",
    type: "website",
  },
}

const css = `
:root{
  --n:#2A4573;--n2:#1e3460;--n-dark:#0f1e38;
  --o:#EE7E1A;--o2:#d46e12;
  --body:#1E293B;--m:#475569;--s:#64748b;
  --bg:#F4F7FC;--bdr:#E2E8F0;
  --wd:#7c3aed;--wd2:#6d28d9;--wd3:#ede9fe;
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
.pill-wd{background:rgba(124,58,237,.12);color:var(--wd);border:1px solid rgba(124,58,237,.2);}
.sec-h{text-align:center;max-width:640px;margin:0 auto 52px;}
.sec-h h2{font-size:36px;margin-top:12px;margin-bottom:14px;}
.sec-h p{font-size:16px;color:var(--m);}
.btn{display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:10px;font-weight:700;font-size:14px;border:none;transition:all .18s;white-space:nowrap;cursor:pointer;}
.btn-wd{background:var(--wd);color:#fff;box-shadow:0 4px 18px rgba(124,58,237,.3);}
.btn-wd:hover{background:var(--wd2);transform:translateY(-2px);box-shadow:0 8px 28px rgba(124,58,237,.4);}
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

/* HERO */
.wd-hero{
  background:linear-gradient(155deg,#0e0820 0%,#130a2e 45%,#0c0818 100%);
  padding:96px 0 80px;position:relative;overflow:hidden;
}
.wd-hero::before{
  content:'';position:absolute;inset:0;
  background:
    radial-gradient(ellipse 60% 55% at 65% 30%,rgba(124,58,237,.1) 0%,transparent 65%),
    radial-gradient(ellipse 40% 50% at 15% 75%,rgba(238,126,26,.06) 0%,transparent 60%);
}
.wd-hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;position:relative;z-index:2;}
.wd-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;background:rgba(124,58,237,.12);border:1px solid rgba(124,58,237,.3);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#a78bfa;margin-bottom:20px;}
.wd-hero h1{font-size:52px;color:#fff;line-height:1.05;letter-spacing:-.04em;margin-bottom:20px;}
.wd-hero h1 em{font-style:normal;background:linear-gradient(135deg,#a78bfa,#7c3aed);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.wd-hero-desc{font-size:17px;color:rgba(255,255,255,.62);line-height:1.7;margin-bottom:32px;max-width:480px;}
.wd-hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:40px;}
.wd-hero-trust{display:flex;gap:24px;flex-wrap:wrap;}
.wd-trust-item{display:flex;align-items:center;gap:8px;font-size:13px;color:rgba(255,255,255,.5);}
.wd-trust-item strong{color:#fff;font-weight:700;}

/* PERF MOCKUP */
.perf-mock{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:20px;overflow:hidden;backdrop-filter:blur(8px);box-shadow:0 28px 70px rgba(0,0,0,.45);}
.perf-browser{background:rgba(255,255,255,.06);padding:10px 14px;border-bottom:1px solid rgba(255,255,255,.07);display:flex;align-items:center;gap:10px;}
.perf-dots{display:flex;gap:5px;}
.perf-dots span{width:9px;height:9px;border-radius:50%;}
.perf-dots span:nth-child(1){background:#ff5f57;}
.perf-dots span:nth-child(2){background:#ffbd2e;}
.perf-dots span:nth-child(3){background:#28c840;}
.perf-url{flex:1;background:rgba(255,255,255,.08);border-radius:6px;padding:5px 12px;font-size:11px;color:rgba(255,255,255,.4);display:flex;align-items:center;gap:6px;}
.perf-body{padding:18px 16px;}
.perf-label{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.3);margin-bottom:14px;}
/* Score circle */
.score-row{display:flex;align-items:center;justify-content:center;gap:28px;margin-bottom:20px;}
.score-circle{display:flex;flex-direction:column;align-items:center;gap:6px;}
.score-ring{position:relative;width:76px;height:76px;}
.score-ring svg{position:absolute;top:0;left:0;transform:rotate(-90deg);}
.score-ring .track{fill:none;stroke:rgba(255,255,255,.07);stroke-width:5;}
.score-ring .fill{fill:none;stroke-width:5;stroke-linecap:round;transition:stroke-dashoffset 1.5s cubic-bezier(.22,1,.36,1);}
.score-val{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:20px;font-weight:900;color:#fff;}
.score-lbl{font-size:10px;color:rgba(255,255,255,.4);font-weight:600;text-transform:uppercase;letter-spacing:.06em;}
/* CWV */
.cwv-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px;}
.cwv-item{background:rgba(255,255,255,.05);border-radius:10px;padding:10px;text-align:center;border:1px solid rgba(255,255,255,.06);transition:border-color .4s;}
.cwv-item.good{border-color:rgba(34,197,94,.3);}
.cwv-val{font-size:16px;font-weight:900;color:rgba(255,255,255,.6);transition:color .4s;}
.cwv-item.good .cwv-val{color:#4ade80;}
.cwv-name{font-size:9px;color:rgba(255,255,255,.3);text-transform:uppercase;letter-spacing:.06em;margin-top:3px;}
.cwv-dot{width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.2);margin:4px auto 0;transition:background .4s;}
.cwv-item.good .cwv-dot{background:#4ade80;}
/* Speed bar */
.speed-bar-wrap{background:rgba(255,255,255,.06);border-radius:10px;padding:12px 14px;}
.speed-row{display:flex;align-items:center;gap:10px;margin-bottom:8px;}
.speed-row:last-child{margin-bottom:0;}
.speed-name{font-size:11px;color:rgba(255,255,255,.4);width:60px;flex-shrink:0;}
.speed-bar{flex:1;height:6px;background:rgba(255,255,255,.08);border-radius:3px;overflow:hidden;}
.speed-fill{height:100%;border-radius:3px;width:0%;transition:width 1.2s cubic-bezier(.22,1,.36,1);}
.speed-old .speed-fill{background:#ef4444;}
.speed-new .speed-fill{background:#4ade80;}
.speed-val{font-size:11px;font-weight:700;color:rgba(255,255,255,.5);width:36px;text-align:right;flex-shrink:0;transition:color .4s;}
.speed-new .speed-val{color:#4ade80;}

/* STATS */
.wd-stats-strip{background:var(--wd);padding:0;}
.wd-stats-inner{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(0,0,0,.12);}
.wd-stat{padding:32px 24px;text-align:center;background:var(--wd);}
.wd-stat-n{font-size:40px;font-weight:900;color:#fff;line-height:1;letter-spacing:-.03em;}
.wd-stat-l{font-size:12px;color:rgba(255,255,255,.7);margin-top:6px;font-weight:500;text-transform:uppercase;letter-spacing:.06em;}

/* SERVICES */
.services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.svc-card{background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:28px 24px;transition:transform .2s,box-shadow .2s,border-color .2s;}
.svc-card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(42,69,115,.1);border-color:rgba(124,58,237,.3);}
.svc-icon{width:50px;height:50px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:16px;background:linear-gradient(135deg,rgba(124,58,237,.1),rgba(124,58,237,.05));border:1px solid rgba(124,58,237,.2);}
.svc-card h3{font-size:17px;margin-bottom:10px;}
.svc-card p{font-size:13.5px;color:var(--m);line-height:1.65;margin-bottom:16px;}
.svc-tags{display:flex;flex-wrap:wrap;gap:6px;}
.svc-tag{padding:4px 10px;background:var(--bg);border-radius:6px;font-size:11px;font-weight:600;color:var(--s);}

/* TECH STACK */
.tech-section{background:var(--bg);}
.tech-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;}
.tech-card{background:#fff;border:1px solid var(--bdr);border-radius:14px;padding:22px 18px;text-align:center;transition:.2s;}
.tech-card:hover{border-color:rgba(124,58,237,.25);box-shadow:0 8px 24px rgba(124,58,237,.08);transform:translateY(-2px);}
.tech-icon{font-size:30px;margin-bottom:10px;}
.tech-name{font-size:13px;font-weight:700;color:var(--n);margin-bottom:4px;}
.tech-desc{font-size:11.5px;color:var(--s);}

/* PROCESS */
.process-section{padding:88px 0;}
.steps-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:0;position:relative;}
.steps-grid::before{content:'';position:absolute;top:34px;left:10%;right:10%;height:2px;background:linear-gradient(90deg,var(--wd),var(--o));z-index:0;}
.step{text-align:center;padding:0 12px;position:relative;z-index:1;}
.step-num{width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,var(--wd),var(--wd2));color:#fff;font-size:22px;font-weight:900;display:flex;align-items:center;justify-content:center;margin:0 auto 18px;box-shadow:0 8px 24px rgba(124,58,237,.3);}
.step h4{font-size:14px;margin-bottom:7px;}
.step p{font-size:12.5px;color:var(--m);line-height:1.6;}

/* PORTFOLIO TABS */
.portfolio-section{background:var(--n-dark);}
.portfolio-section .sec-h h2{color:#fff;}
.portfolio-section .sec-h p{color:rgba(255,255,255,.5);}
.industry-tabs{display:flex;gap:8px;justify-content:center;margin-bottom:40px;flex-wrap:wrap;}
.ind-tab{padding:9px 20px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;border:1px solid rgba(255,255,255,.1);color:rgba(255,255,255,.5);background:transparent;transition:.2s;}
.ind-tab.on{background:var(--wd);color:#fff;border-color:var(--wd);}
.ind-content{display:none;animation:fadeUp .3s ease;}
.ind-content.on{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start;}
@keyframes fadeUp{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:translateY(0);}}
.ind-info h3{font-size:26px;color:#fff;margin-bottom:14px;}
.ind-info p{font-size:15px;color:rgba(255,255,255,.6);line-height:1.7;margin-bottom:24px;}
.ind-results{display:flex;flex-direction:column;gap:12px;}
.ind-result{display:flex;align-items:center;gap:12px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:14px 18px;}
.ind-result-val{font-size:22px;font-weight:900;color:#a78bfa;min-width:60px;}
.ind-result-lbl{font-size:13px;color:rgba(255,255,255,.6);}
.ind-flows{display:flex;flex-direction:column;gap:10px;}
.ind-flow{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:14px 18px;display:flex;gap:12px;align-items:flex-start;}
.ind-flow-icon{font-size:20px;flex-shrink:0;margin-top:2px;}
.ind-flow-title{font-size:13.5px;font-weight:700;color:#fff;margin-bottom:3px;}
.ind-flow-desc{font-size:12.5px;color:rgba(255,255,255,.5);}

/* FEATURES */
.features-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
.feat-item{background:#fff;border:1px solid var(--bdr);border-radius:14px;padding:22px 20px;display:flex;gap:14px;transition:.2s;}
.feat-item:hover{border-color:rgba(124,58,237,.2);box-shadow:0 6px 20px rgba(124,58,237,.06);}
.feat-icon{font-size:22px;flex-shrink:0;margin-top:2px;}
.feat-body h4{font-size:14.5px;font-weight:700;color:var(--n);margin-bottom:6px;}
.feat-body p{font-size:13px;color:var(--m);line-height:1.6;margin:0;}

/* WHY */
.why-grid{display:grid;grid-template-columns:1fr 1fr;gap:52px;align-items:center;}
.why-left{background:linear-gradient(135deg,var(--n-dark),#180f35);border-radius:24px;padding:40px;}
.why-stat-big{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:20px 24px;}
.why-stat-big .num{font-size:44px;font-weight:900;color:#a78bfa;line-height:1;letter-spacing:-.03em;}
.why-stat-big .lbl{font-size:12.5px;color:rgba(255,255,255,.5);margin-top:6px;}
.why-points{display:flex;flex-direction:column;gap:20px;}
.why-point{display:flex;gap:16px;align-items:flex-start;}
.why-icon{width:44px;height:44px;flex-shrink:0;border-radius:12px;background:linear-gradient(135deg,rgba(124,58,237,.12),rgba(124,58,237,.06));border:1px solid rgba(124,58,237,.2);display:flex;align-items:center;justify-content:center;font-size:18px;}
.why-point h4{font-size:15px;font-weight:700;color:var(--n);margin-bottom:5px;}
.why-point p{font-size:13.5px;color:var(--m);line-height:1.6;margin:0;}

/* FAQ */
.faq-section{background:var(--bg);}
.faq-wrap-2col{display:grid;grid-template-columns:1fr 1fr;gap:0 28px;align-items:start;}
.faq-col{display:flex;flex-direction:column;}
.fi{border:1px solid var(--bdr);border-radius:14px;margin-bottom:10px;overflow:hidden;background:#fff;transition:.15s;}
.fi:hover{border-color:rgba(124,58,237,.2);}
.fi.on{border-color:rgba(124,58,237,.4);box-shadow:0 4px 20px rgba(124,58,237,.08);}
.fi-q{width:100%;text-align:left;background:transparent;border:none;padding:20px 22px;font-size:14.5px;font-weight:700;color:var(--n);display:flex;justify-content:space-between;align-items:center;gap:12px;cursor:pointer;}
.fi-icon{width:26px;height:26px;border-radius:50%;flex-shrink:0;background:var(--bg);border:1px solid var(--bdr);display:flex;align-items:center;justify-content:center;color:var(--wd);font-size:18px;font-weight:900;line-height:1;transition:transform .2s;}
.fi.on .fi-icon{transform:rotate(45deg);background:var(--wd);color:#fff;border-color:var(--wd);}
.fi-a{max-height:0;overflow:hidden;transition:.3s;color:var(--m);font-size:14px;line-height:1.75;}
.fi.on .fi-a{max-height:300px;padding:0 22px 22px;}

/* CTA */
.wd-cta{background:linear-gradient(155deg,#0e0820 0%,#130a2e 100%);padding:96px 0;text-align:center;position:relative;overflow:hidden;}
.wd-cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(124,58,237,.08) 0%,transparent 70%);}
.wd-cta h2{color:#fff;font-size:44px;margin-bottom:16px;position:relative;z-index:1;}
.wd-cta p{color:rgba(255,255,255,.6);font-size:17px;margin-bottom:36px;position:relative;z-index:1;}
.wd-cta-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;position:relative;z-index:1;}

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
  .wd-hero-grid,.why-grid,.ind-content.on,.faq-wrap-2col{grid-template-columns:1fr;}
  .wd-hero h1{font-size:36px;}
  .services-grid,.features-grid,.tech-grid{grid-template-columns:1fr 1fr;}
  .wd-stats-inner,.fg{grid-template-columns:1fr 1fr;}
  .steps-grid{grid-template-columns:1fr 1fr;}
  .hb{display:flex;}
  .dmenu,.navcta .btn:not(.show-m){display:none;}
}
@media(max-width:600px){
  .services-grid,.features-grid,.tech-grid,.steps-grid,.wd-stats-inner,.fg{grid-template-columns:1fr;}
  section{padding:60px 0;}
  .wd-hero{padding:64px 0 52px;}
  .score-row{gap:12px;}
  .score-ring{width:60px;height:60px;}
  .score-val{font-size:16px;}
}
`

const ld0 = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Web Development Services India",
      "provider": {
        "@type": "Organization",
        "name": "Click Decoded",
        "url": "https://clickdecoded.com"
      },
      "description": "Professional web development services including custom websites, WordPress, e-commerce, Next.js apps, and landing pages — built for performance, SEO, and conversion.",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": "Web Development",
      "url": "https://www.clickdecoded.com/services/web-development"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does it take to build a website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A landing page or simple website takes 5–7 days. A full business website takes 2–3 weeks. A WordPress site with custom design takes 3–4 weeks. Complex web apps and e-commerce stores typically take 4–8 weeks depending on features."
          }
        },
        {
          "@type": "Question",
          "name": "Do you build SEO-friendly websites?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — SEO is built into every website we develop from day one. This includes semantic HTML structure, schema markup, Core Web Vitals optimization, meta tags, sitemap, robots.txt, and clean URL structure."
          }
        },
        {
          "@type": "Question",
          "name": "What technologies do you use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We primarily use Next.js (React) for high-performance custom sites, WordPress for content-heavy sites, WooCommerce and Shopify for e-commerce, and Tailwind CSS for design. All our websites are mobile-first and performance-optimized."
          }
        },
        {
          "@type": "Question",
          "name": "Will my website work well on mobile?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "100%. Every website we build is mobile-first — designed and tested on all screen sizes before delivery. Mobile performance and usability are non-negotiable in our process."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide website maintenance after launch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We offer monthly maintenance packages covering security updates, performance monitoring, content updates, backup management, and ongoing optimization."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How Web Development Services India Works — Our Process",
      "description": "Click Decoded builds high-performance websites, WordPress sites, e-commerce stores, and custom web apps for Indian businesses. 98/100 PageSpeed. SEO-ready from day one.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Discovery",
          "text": "Deep-dive into your goals, audience, competitors, and current website — then define the project scope and tech stack."
        },
        {
          "@type": "HowToStep",
          "name": "Design",
          "text": "Wireframes and high-fidelity mockups for every key page. You approve before a single line of code is written."
        },
        {
          "@type": "HowToStep",
          "name": "Development",
          "text": "Clean, semantic code built in sprints. You see progress every few days — no black-box development."
        },
        {
          "@type": "HowToStep",
          "name": "QA & Optimise",
          "text": "Cross-browser and cross-device testing. PageSpeed, SEO, and accessibility checks before any handover."
        },
        {
          "@type": "HowToStep",
          "name": "Launch & Support",
          "text": "Smooth deployment with zero downtime. 30-day post-launch support and optional maintenance packages."
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
          "name": "Web Development",
          "item": "https://www.clickdecoded.com/services/web-development"
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

/* ── ANIMATED PAGESPEED MOCKUP ── */
(function(){
  const sites=[
    {name:'yoursite.in',perf:97,seo:100,a11y:94,lcp:'1.2s',cls:'0.02',inp:'85ms',oldSpeed:72,newSpeed:8},
    {name:'realestateagent.in',perf:94,seo:98,a11y:91,lcp:'1.5s',cls:'0.03',inp:'120ms',oldSpeed:68,newSpeed:9},
    {name:'coachingacademy.in',perf:98,seo:100,a11y:96,lcp:'0.9s',cls:'0.01',inp:'65ms',oldSpeed:80,newSpeed:7},
  ];
  let cycle=0;

  function animateScore(fillEl,scoreEl,target,color){
    const circ=201;
    let cur=0;
    const step=Math.ceil(target/40);
    const iv=setInterval(()=>{
      cur=Math.min(cur+step,target);
      scoreEl.textContent=cur;
      const offset=circ-(circ*cur/100);
      fillEl.style.strokeDashoffset=offset;
      if(cur>=target)clearInterval(iv);
    },30);
  }

  function runCycle(){
    const d=sites[cycle%sites.length];cycle++;
    // Reset
    ['perfFill','seoFill','a11yFill'].forEach(id=>{
      const el=document.getElementById(id);
      if(el)el.style.strokeDashoffset='201';
    });
    ['perfScore','seoScore','a11yScore'].forEach(id=>{
      const el=document.getElementById(id);
      if(el)el.textContent='0';
    });
    document.querySelectorAll('.cwv-item').forEach(el=>el.classList.remove('good'));
    const oldBar=document.getElementById('oldBar');
    const newBar=document.getElementById('newBar');
    if(oldBar)oldBar.style.width='0%';
    if(newBar)newBar.style.width='0%';

    setTimeout(()=>{
      // Update URL
      const urlEl=document.querySelector('.perf-url');
      if(urlEl)urlEl.lastChild.textContent=' '+d.name;

      // Animate scores
      const pf=document.getElementById('perfFill'),ps=document.getElementById('perfScore');
      const sf=document.getElementById('seoFill'),ss=document.getElementById('seoScore');
      const af=document.getElementById('a11yFill'),as=document.getElementById('a11yScore');
      if(pf&&ps)animateScore(pf,ps,d.perf,'#a78bfa');
      setTimeout(()=>{if(sf&&ss)animateScore(sf,ss,d.seo,'#4ade80');},200);
      setTimeout(()=>{if(af&&as)animateScore(af,as,d.a11y,'#60a5fa');},400);

      // CWV
      setTimeout(()=>{
        const c1=document.getElementById('cwv1');
        const c2=document.getElementById('cwv2');
        const c3=document.getElementById('cwv3');
        if(c1){c1.querySelector('.cwv-val').textContent=d.lcp;c1.classList.add('good');}
        if(c2){c2.querySelector('.cwv-val').textContent=d.cls;c2.classList.add('good');}
        if(c3){c3.querySelector('.cwv-val').textContent=d.inp;c3.classList.add('good');}
      },1200);

      // Speed bars
      setTimeout(()=>{
        if(oldBar)oldBar.style.width=d.oldSpeed+'%';
        if(newBar){setTimeout(()=>{newBar.style.width=d.newSpeed+'%';},300);}
      },1400);
    },300);

    setTimeout(runCycle,8000);
  }

  // Start when mockup is visible
  const mockEl=document.querySelector('.perf-mock');
  if(mockEl){
    const perfObs=new IntersectionObserver(entries=>{
      if(entries[0].isIntersecting){runCycle();perfObs.disconnect();}
    },{threshold:.3});
    perfObs.observe(mockEl);
  }
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
<a href="/services/seo">Services</a><span className="bc-sep">›</span>
<span>Web Development</span>
</div>
</div>
</div>
      <section className="wd-hero">
<div className="wrap">
<div className="wd-hero-grid">
<div>
<div className="wd-eyebrow">💻 Next.js · WordPress · E-commerce</div>
<h1>Websites Built to<br /><em>Rank, Convert,</em><br />and Scale.</h1>
<p className="wd-hero-desc">We build fast, beautiful, SEO-ready websites that don't just look good — they rank on Google and turn visitors into paying clients. 98/100 PageSpeed. Mobile-first. Every time.</p>
<div className="wd-hero-btns">
<a href="#contact" className="btn btn-wd">💻 Get Free Proposal <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
<a href="/services/seo" className="btn btn-ghost">See Our Work</a>
</div>
<div className="wd-hero-trust">
<div className="wd-trust-item"><strong>200+</strong> websites delivered</div>
<div className="wd-trust-item"><strong>98/100</strong> avg PageSpeed</div>
<div className="wd-trust-item"><strong>5×</strong> avg conversion lift</div>
<div className="wd-trust-item"><strong>7 days</strong> first delivery</div>
</div>
</div>

<div className="perf-mock">
<div className="perf-browser">
<div className="perf-dots"><span></span><span></span><span></span></div>
<div className="perf-url">
<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1a4 4 0 100 8A4 4 0 005 1z" stroke="rgba(255,255,255,.3)" strokeWidth="1.2" /></svg>
            pagespeed.web.dev
          </div>
</div>
<div className="perf-body">
<div className="perf-label">Google PageSpeed Insights — Live Score</div>
<div className="score-row">
<div className="score-circle">
<div className="score-ring">
<svg viewBox="0 0 76 76" width="76" height="76">
<circle className="track" cx="38" cy="38" r="32" />
<circle className="fill" id="perfFill" cx="38" cy="38" r="32" stroke="#a78bfa" strokeDasharray="201" strokeDashoffset="201" />
</svg>
<div className="score-val" id="perfScore">97</div>
</div>
<div className="score-lbl">Performance</div>
</div>
<div className="score-circle">
<div className="score-ring">
<svg viewBox="0 0 76 76" width="76" height="76">
<circle className="track" cx="38" cy="38" r="32" />
<circle className="fill" id="seoFill" cx="38" cy="38" r="32" stroke="#4ade80" strokeDasharray="201" strokeDashoffset="201" />
</svg>
<div className="score-val" id="seoScore">100</div>
</div>
<div className="score-lbl">SEO</div>
</div>
<div className="score-circle">
<div className="score-ring">
<svg viewBox="0 0 76 76" width="76" height="76">
<circle className="track" cx="38" cy="38" r="32" />
<circle className="fill" id="a11yFill" cx="38" cy="38" r="32" stroke="#60a5fa" strokeDasharray="201" strokeDashoffset="201" />
</svg>
<div className="score-val" id="a11yScore">94</div>
</div>
<div className="score-lbl">Accessibility</div>
</div>
</div>
<div className="cwv-grid" id="cwvGrid">
<div className="cwv-item good" id="cwv1"><div className="cwv-val">1.2s</div><div className="cwv-name">LCP</div><div className="cwv-dot"></div></div>
<div className="cwv-item good" id="cwv2"><div className="cwv-val">0.02</div><div className="cwv-name">CLS</div><div className="cwv-dot"></div></div>
<div className="cwv-item good" id="cwv3"><div className="cwv-val">85ms</div><div className="cwv-name">INP</div><div className="cwv-dot"></div></div>
</div>
<div className="speed-bar-wrap">
<div className="speed-row speed-old"><div className="speed-name">Before</div><div className="speed-bar"><div className="speed-fill" id="oldBar" style={{ width: '0%' }}></div></div><div className="speed-val" id="oldVal">8.4s</div></div>
<div className="speed-row speed-new"><div className="speed-name">After</div><div className="speed-bar"><div className="speed-fill" id="newBar" style={{ width: '0%' }}></div></div><div className="speed-val" id="newVal">1.1s</div></div>
</div>
</div>
</div>
</div>
</div>
</section>
      <div className="wd-stats-strip">
<div className="wrap">
<div className="wd-stats-inner">
<div className="wd-stat"><div className="wd-stat-n">200+</div><div className="wd-stat-l">Websites Delivered</div></div>
<div className="wd-stat"><div className="wd-stat-n">98/100</div><div className="wd-stat-l">Avg. PageSpeed Score</div></div>
<div className="wd-stat"><div className="wd-stat-n">5×</div><div className="wd-stat-l">Avg. Conversion Lift</div></div>
<div className="wd-stat"><div className="wd-stat-n">7 Days</div><div className="wd-stat-l">First Delivery Target</div></div>
</div>
</div>
</div>
      <section>
<div className="wrap">
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }}>
<div className="rv">
<div className="pill pill-b" style={{ marginBottom: '16px' }}>The Real Cost of a Bad Website</div>
<h2 style={{ fontSize: '36px', marginBottom: '16px' }}>Your Website Is Your #1 Salesperson. Is It Doing Its Job?</h2>
<p style={{ fontSize: '16px', color: 'var(--m)', lineHeight: '1.75', marginBottom: '20px' }}>A slow, outdated, or poorly converting website doesn't just look bad — it actively costs you business. Visitors leave within 3 seconds if a page is slow. Google penalises slow pages with lower rankings. And a confusing layout means leads that found you never contact you.</p>
<p style={{ fontSize: '16px', color: 'var(--m)', lineHeight: '1.75', marginBottom: '28px' }}>Every website we build is engineered for three things: <strong>speed</strong> (so Google ranks it), <strong>clarity</strong> (so visitors understand your offer instantly), and <strong>conversion</strong> (so those visitors become leads and customers).</p>
<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
<div style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--m)' }}><span style={{ color: 'var(--wd)', fontWeight: '900', fontSize: '16px' }}>✓</span> 1-second delay reduces conversions by 7%</div>
<div style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--m)' }}><span style={{ color: 'var(--wd)', fontWeight: '900', fontSize: '16px' }}>✓</span> 53% of mobile users abandon a page that takes 3+ seconds</div>
<div style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--m)' }}><span style={{ color: 'var(--wd)', fontWeight: '900', fontSize: '16px' }}>✓</span> Google uses Core Web Vitals as a direct ranking signal</div>
<div style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--m)' }}><span style={{ color: 'var(--wd)', fontWeight: '900', fontSize: '16px' }}>✓</span> 75% of users judge credibility based on website design</div>
</div>
</div>
<div className="rv2" style={{ background: 'var(--bg)', borderRadius: '20px', padding: '36px', border: '1px solid var(--bdr)' }}>
<h4 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--s)', marginBottom: '20px' }}>What We Build Into Every Website</h4>
<div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
<div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}><div style={{ width: '44px', height: '44px', background: 'rgba(124,58,237,.1)', border: '1px solid rgba(124,58,237,.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: '0' }}>⚡</div><div><div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--n)' }}>98/100 PageSpeed from day one</div><div style={{ fontSize: '13px', color: 'var(--m)' }}>Optimized images, lazy loading, CDN, and clean code — not an afterthought</div></div></div>
<div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}><div style={{ width: '44px', height: '44px', background: 'rgba(124,58,237,.1)', border: '1px solid rgba(124,58,237,.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: '0' }}>🔍</div><div><div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--n)' }}>SEO-ready architecture</div><div style={{ fontSize: '13px', color: 'var(--m)' }}>Semantic HTML, schema markup, meta tags, and sitemap built in from the start</div></div></div>
<div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}><div style={{ width: '44px', height: '44px', background: 'rgba(124,58,237,.1)', border: '1px solid rgba(124,58,237,.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: '0' }}>📱</div><div><div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--n)' }}>Mobile-first design</div><div style={{ fontSize: '13px', color: 'var(--m)' }}>Designed and tested on every screen size — looks perfect on every device</div></div></div>
<div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}><div style={{ width: '44px', height: '44px', background: 'rgba(124,58,237,.1)', border: '1px solid rgba(124,58,237,.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: '0' }}>🎯</div><div><div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--n)' }}>Conversion-optimized layout</div><div style={{ fontSize: '13px', color: 'var(--m)' }}>CTA placement, trust signals, and UX principles that turn visitors into leads</div></div></div>
</div>
</div>
</div>
</div>
</section>
      <section style={{ background: 'var(--bg)' }} id="services">
<div className="wrap">
<div className="sec-h rv">
<div className="pill pill-wd">What We Build</div>
<h2>Every Type of Website. One Expert Team.</h2>
<p>From single landing pages to complex web applications — we design, develop, and deliver websites that perform.</p>
</div>
<div className="services-grid">
<div className="svc-card rv"><div className="svc-icon">🎨</div><h3>Custom Website Design &amp; Development</h3><p>Fully bespoke websites built with Next.js — pixel-perfect design, blazing-fast performance, and a unique identity that sets your brand apart from every template-based competitor.</p><div className="svc-tags"><span className="svc-tag">Next.js</span><span className="svc-tag">Custom Design</span><span className="svc-tag">React</span><span className="svc-tag">Tailwind CSS</span></div></div>
<div className="svc-card rv2"><div className="svc-icon">🔵</div><h3>WordPress Development</h3><p>Custom WordPress themes and plugins built for performance — not bloated page builders. Easy for your team to manage, impossible for visitors to tell it's WordPress.</p><div className="svc-tags"><span className="svc-tag">Custom Themes</span><span className="svc-tag">ACF</span><span className="svc-tag">WooCommerce</span><span className="svc-tag">Gutenberg</span></div></div>
<div className="svc-card rv3"><div className="svc-icon">🛒</div><h3>E-commerce Development</h3><p>High-converting online stores on WooCommerce or Shopify — with optimized product pages, checkout flows, payment integration, and inventory management built in.</p><div className="svc-tags"><span className="svc-tag">Shopify</span><span className="svc-tag">WooCommerce</span><span className="svc-tag">Razorpay</span><span className="svc-tag">Product SEO</span></div></div>
<div className="svc-card rv"><div className="svc-icon">🎯</div><h3>Landing Page Development</h3><p>High-converting landing pages for Google Ads, Meta Ads, and organic traffic — designed with a single conversion goal in mind, A/B test-ready, and deployed in days.</p><div className="svc-tags"><span className="svc-tag">Lead Gen</span><span className="svc-tag">A/B Ready</span><span className="svc-tag">Fast Deploy</span></div></div>
<div className="svc-card rv2"><div className="svc-icon">⚡</div><h3>Website Speed &amp; Performance Optimization</h3><p>Turn your slow, bloated website into a 90+ PageSpeed machine. Image optimization, code splitting, caching, CDN setup, and Core Web Vitals fixes — for any platform.</p><div className="svc-tags"><span className="svc-tag">Core Web Vitals</span><span className="svc-tag">CDN Setup</span><span className="svc-tag">Image Opt</span></div></div>
<div className="svc-card rv3"><div className="svc-icon">🔧</div><h3>Web App Development</h3><p>Custom web applications — dashboards, booking systems, client portals, and SaaS tools — built with modern React and Node.js for reliability at any scale.</p><div className="svc-tags"><span className="svc-tag">React</span><span className="svc-tag">Node.js</span><span className="svc-tag">REST API</span><span className="svc-tag">Dashboard</span></div></div>
</div>
</div>
</section>
      <section className="tech-section">
<div className="wrap">
<div className="sec-h rv">
<div className="pill pill-wd">Our Tech Stack</div>
<h2>Modern Technologies. Production-Grade Code.</h2>
<p>We use the same technologies that power the world's fastest, most scalable websites.</p>
</div>
<div className="tech-grid">
<div className="tech-card rv"><div className="tech-icon">⚛️</div><div className="tech-name">Next.js / React</div><div className="tech-desc">SSR, SSG &amp; App Router for blazing performance</div></div>
<div className="tech-card rv2"><div className="tech-icon">🔵</div><div className="tech-name">WordPress</div><div className="tech-desc">Custom themes, plugins &amp; headless CMS</div></div>
<div className="tech-card rv3"><div className="tech-icon">🎨</div><div className="tech-name">Tailwind CSS</div><div className="tech-desc">Utility-first, pixel-perfect responsive design</div></div>
<div className="tech-card rv"><div className="tech-icon">🟦</div><div className="tech-name">TypeScript</div><div className="tech-desc">Type-safe, maintainable codebase</div></div>
<div className="tech-card rv2"><div className="tech-icon">🛒</div><div className="tech-name">WooCommerce / Shopify</div><div className="tech-desc">E-commerce stores that sell and scale</div></div>
<div className="tech-card rv3"><div className="tech-icon">🗄️</div><div className="tech-name">Supabase / MySQL</div><div className="tech-desc">Reliable, scalable database solutions</div></div>
<div className="tech-card rv"><div className="tech-icon">🚀</div><div className="tech-name">Vercel / Cloudflare</div><div className="tech-desc">Global CDN deployment for sub-second loads</div></div>
<div className="tech-card rv2"><div className="tech-icon">🔐</div><div className="tech-name">SSL + Security</div><div className="tech-desc">HTTPS, firewall, and security hardening</div></div>
</div>
</div>
</section>
      <section className="process-section" style={{ background: 'var(--bg)' }}>
<div className="wrap">
<div className="sec-h rv">
<div className="pill pill-wd">Our Process</div>
<h2>From Brief to Live in 5 Stages</h2>
<p>A proven development process that delivers on time, on brief, and without surprises.</p>
</div>
<div className="steps-grid">
<div className="step rv"><div className="step-num">1</div><h4>Discovery</h4><p>Deep-dive into your goals, audience, competitors, and current website — then define the project scope and tech stack.</p></div>
<div className="step rv2"><div className="step-num">2</div><h4>Design</h4><p>Wireframes and high-fidelity mockups for every key page. You approve before a single line of code is written.</p></div>
<div className="step rv3"><div className="step-num">3</div><h4>Development</h4><p>Clean, semantic code built in sprints. You see progress every few days — no black-box development.</p></div>
<div className="step rv"><div className="step-num">4</div><h4>QA &amp; Optimise</h4><p>Cross-browser and cross-device testing. PageSpeed, SEO, and accessibility checks before any handover.</p></div>
<div className="step rv2"><div className="step-num">5</div><h4>Launch &amp; Support</h4><p>Smooth deployment with zero downtime. 30-day post-launch support and optional maintenance packages.</p></div>
</div>
</div>
</section>
      <section className="portfolio-section">
<div className="wrap">
<div className="sec-h rv">
<div className="pill pill-wd">By Website Type</div>
<h2>Built for Your Business Type</h2>
<p>Every type of business needs a different kind of website. Here's what ours deliver in each category.</p>
</div>
<div className="industry-tabs">
<button className="ind-tab on" data-ind="business">🏢 Business Sites</button>
<button className="ind-tab" data-ind="ecommerce">🛒 E-commerce</button>
<button className="ind-tab" data-ind="saas">🚀 SaaS &amp; Apps</button>
<button className="ind-tab" data-ind="local">📍 Local Business</button>
<button className="ind-tab" data-ind="landing">🎯 Landing Pages</button>
</div>
<div className="ind-content on" id="ind-business">
<div className="ind-info">
<h3>Corporate &amp; B2B Business Websites</h3>
<p>Your website is your most important sales asset in B2B. We build credibility-driven sites that position you as the clear choice — with compelling case studies, social proof, clear service pages, and contact flows that convert.</p>
<div className="ind-results">
<div className="ind-result"><div className="ind-result-val">4.8×</div><div className="ind-result-lbl">More inbound enquiry form submissions</div></div>
<div className="ind-result"><div className="ind-result-val">98/100</div><div className="ind-result-lbl">Average PageSpeed score delivered</div></div>
<div className="ind-result"><div className="ind-result-val">7 days</div><div className="ind-result-lbl">Typical delivery time for a 10-page business site</div></div>
</div>
</div>
<div className="ind-flows">
<div className="ind-flow"><div className="ind-flow-icon">🎨</div><div><div className="ind-flow-title">Custom Brand-Aligned Design</div><div className="ind-flow-desc">Bespoke design that matches your brand guidelines — not a template with your logo swapped in.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">📄</div><div><div className="ind-flow-title">SEO-Optimized Service Pages</div><div className="ind-flow-desc">Individual, keyword-rich service pages built to rank on Google and convert the visitors they bring in.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">🏆</div><div><div className="ind-flow-title">Case Study &amp; Portfolio Sections</div><div className="ind-flow-desc">Structured case study pages with measurable results that build trust with B2B decision-makers.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">📞</div><div><div className="ind-flow-title">Lead Capture Flows</div><div className="ind-flow-desc">Strategic CTA placement, contact forms, WhatsApp integration, and calendar booking embedded throughout.</div></div></div>
</div>
</div>
<div className="ind-content" id="ind-ecommerce">
<div className="ind-info">
<h3>E-commerce Stores That Actually Sell</h3>
<p>We build e-commerce stores where every element is optimized for the sale — product page design, checkout friction reduction, mobile UX, and page speed. The result: higher add-to-cart rates, lower abandonment, and more revenue per visitor.</p>
<div className="ind-results">
<div className="ind-result"><div className="ind-result-val">3.2×</div><div className="ind-result-lbl">Increase in conversion rate vs previous site</div></div>
<div className="ind-result"><div className="ind-result-val">62%</div><div className="ind-result-lbl">Reduction in cart abandonment rate</div></div>
<div className="ind-result"><div className="ind-result-val">1.1s</div><div className="ind-result-lbl">Average load time achieved on mobile</div></div>
</div>
</div>
<div className="ind-flows">
<div className="ind-flow"><div className="ind-flow-icon">📦</div><div><div className="ind-flow-title">Conversion-Optimized Product Pages</div><div className="ind-flow-desc">Product pages with trust signals, smart image galleries, and clear CTAs that maximize add-to-cart rates.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">💳</div><div><div className="ind-flow-title">Smooth Checkout Integration</div><div className="ind-flow-desc">Razorpay, PayU, and UPI integration with a streamlined checkout that doesn't leak customers at the last step.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">🔍</div><div><div className="ind-flow-title">E-commerce SEO Architecture</div><div className="ind-flow-desc">Category and product page structure, schema markup, and URL architecture built to rank in Google Shopping.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">📱</div><div><div className="ind-flow-title">Mobile-First Shopping Experience</div><div className="ind-flow-desc">60%+ of Indian shoppers buy on mobile — our stores are designed and optimized for mobile-first conversions.</div></div></div>
</div>
</div>
<div className="ind-content" id="ind-saas">
<div className="ind-info">
<h3>SaaS Websites &amp; Web Applications</h3>
<p>We build marketing sites that explain complex software simply, and web applications that are fast, scalable, and built for growth. From dashboards to customer portals to booking systems — we handle the full stack.</p>
<div className="ind-results">
<div className="ind-result"><div className="ind-result-val">5.6×</div><div className="ind-result-lbl">Improvement in demo request conversion rate</div></div>
<div className="ind-result"><div className="ind-result-val">40%</div><div className="ind-result-lbl">Reduction in churn via improved onboarding UX</div></div>
<div className="ind-result"><div className="ind-result-val">99.9%</div><div className="ind-result-lbl">Uptime achieved with Vercel + Cloudflare deployment</div></div>
</div>
</div>
<div className="ind-flows">
<div className="ind-flow"><div className="ind-flow-icon">🚀</div><div><div className="ind-flow-title">SaaS Marketing Site</div><div className="ind-flow-desc">Conversion-focused marketing sites with pricing pages, feature comparisons, and social proof that convert trials.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">🗄️</div><div><div className="ind-flow-title">Custom Dashboard Development</div><div className="ind-flow-desc">Admin panels, analytics dashboards, and client portals built with React and real-time data integration.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">🔌</div><div><div className="ind-flow-title">API &amp; Integration Development</div><div className="ind-flow-desc">REST API development and third-party integrations — CRMs, payment gateways, SMS, email, and more.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">🔐</div><div><div className="ind-flow-title">Auth &amp; User Management</div><div className="ind-flow-desc">Secure authentication, user roles, and subscription management built with Supabase or custom solutions.</div></div></div>
</div>
</div>
<div className="ind-content" id="ind-local">
<div className="ind-info">
<h3>Local Business Websites That Drive Footfall</h3>
<p>For clinics, restaurants, gyms, salons, and service businesses — a local business website must do one thing above all: get people through your door. We build sites optimized for local SEO, click-to-call, and Google Maps integration.</p>
<div className="ind-results">
<div className="ind-result"><div className="ind-result-val">3.9×</div><div className="ind-result-lbl">More calls from website after redesign</div></div>
<div className="ind-result"><div className="ind-result-val">#1–3</div><div className="ind-result-lbl">Local pack rankings within 60 days of launch</div></div>
<div className="ind-result"><div className="ind-result-val">5 days</div><div className="ind-result-lbl">Average delivery time for local business sites</div></div>
</div>
</div>
<div className="ind-flows">
<div className="ind-flow"><div className="ind-flow-icon">📍</div><div><div className="ind-flow-title">Local SEO-Ready Structure</div><div className="ind-flow-desc">Location pages, local business schema, and GBP-linked design that feeds Local Pack rankings from launch.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">📞</div><div><div className="ind-flow-title">Click-to-Call &amp; WhatsApp</div><div className="ind-flow-desc">Prominent, mobile-optimized call buttons and WhatsApp chat that convert mobile visitors without friction.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">📅</div><div><div className="ind-flow-title">Appointment Booking Integration</div><div className="ind-flow-desc">Calendly, custom booking forms, or WhatsApp-based booking flows embedded directly into the site.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">⭐</div><div><div className="ind-flow-title">Review &amp; Trust Display</div><div className="ind-flow-desc">Google review widgets, testimonials, and trust badges prominently placed to convert undecided visitors.</div></div></div>
</div>
</div>
<div className="ind-content" id="ind-landing">
<div className="ind-info">
<h3>High-Converting Landing Pages</h3>
<p>A landing page has one job: convert. We build landing pages for Google Ads, Meta Ads, WhatsApp campaigns, and organic traffic — with a single, compelling CTA and zero distractions. A/B test-ready and deployed in days.</p>
<div className="ind-results">
<div className="ind-result"><div className="ind-result-val">4.2×</div><div className="ind-result-lbl">Better conversion vs home-page-as-landing-page</div></div>
<div className="ind-result"><div className="ind-result-val">48hrs</div><div className="ind-result-lbl">Typical delivery time for a landing page</div></div>
<div className="ind-result"><div className="ind-result-val">30%+</div><div className="ind-result-lbl">Typical conversion rate improvement vs old page</div></div>
</div>
</div>
<div className="ind-flows">
<div className="ind-flow"><div className="ind-flow-icon">🎯</div><div><div className="ind-flow-title">Single-Goal Design</div><div className="ind-flow-desc">No nav, no distractions — one message, one CTA, maximum conversion focus for your specific campaign goal.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">📊</div><div><div className="ind-flow-title">Analytics &amp; Tracking Setup</div><div className="ind-flow-desc">Google Analytics 4, Meta Pixel, and conversion event tracking configured from day one for accurate campaign data.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">🔄</div><div><div className="ind-flow-title">A/B Test Ready</div><div className="ind-flow-desc">Built in a modular structure so you can easily test different headlines, CTAs, and layouts without rebuilding.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">⚡</div><div><div className="ind-flow-title">Sub-2-Second Load Time</div><div className="ind-flow-desc">Every landing page loads under 2 seconds — because 53% of mobile visitors leave if it takes longer than 3.</div></div></div>
</div>
</div>
</div>
</section>
      <section>
<div className="wrap">
<div className="sec-h rv">
<div className="pill pill-o">Why Click Decoded</div>
<h2>We Build Websites That Pay for Themselves</h2>
<p>Good-looking sites are cheap. Websites that rank on Google and convert visitors into revenue — that's what we build.</p>
</div>
<div className="why-grid">
<div className="why-left rv">
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
<div className="why-stat-big"><div className="num">98/100</div><div className="lbl">Avg. PageSpeed score delivered</div></div>
<div className="why-stat-big"><div className="num">5×</div><div className="lbl">Average conversion improvement</div></div>
<div className="why-stat-big"><div className="num">200+</div><div className="lbl">Websites built and live in production</div></div>
<div className="why-stat-big"><div className="num">7 Days</div><div className="lbl">First delivery target on every project</div></div>
</div>
</div>
<div className="why-points rv2">
<div className="why-point"><div className="why-icon">🔍</div><div><h4>SEO Built In, Not Bolted On</h4><p>Most agencies build a site and hand it over. We build sites with SEO architecture from line one — schema, meta, semantic HTML, and performance — so it ranks from launch day.</p></div></div>
<div className="why-point"><div className="why-icon">⚡</div><div><h4>Performance Is Non-Negotiable</h4><p>Every website we deliver scores 90+ on PageSpeed. We treat performance as a feature, not an afterthought — because Google does too.</p></div></div>
<div className="why-point"><div className="why-icon">🎨</div><div><h4>Design That Converts, Not Just Impresses</h4><p>Beautiful design that's also strategically structured — CTAs in the right places, trust signals where they count, and flows that guide visitors to contact you.</p></div></div>
<div className="why-point"><div className="why-icon">🔧</div><div><h4>You Own Everything</h4><p>Clean, documented code. Full source files. No proprietary builders or lock-in. Your website is yours — not held hostage by a platform or an agency.</p></div></div>
</div>
</div>
</div>
</section>
      <section style={{ background: 'var(--bg)' }}>
<div className="wrap">
<div className="sec-h rv">
<div className="pill pill-wd">Standard Inclusions</div>
<h2>What's Built Into Every Website We Deliver</h2>
<p>No add-ons, no extras. These are our non-negotiable standards on every single project.</p>
</div>
<div className="features-grid">
<div className="feat-item rv"><div className="feat-icon">⚡</div><div className="feat-body"><h4>90+ PageSpeed on Mobile &amp; Desktop</h4><p>Optimized images, efficient code, CDN configuration, and lazy loading — every site we ship is fast by default.</p></div></div>
<div className="feat-item rv2"><div className="feat-icon">📱</div><div className="feat-body"><h4>Fully Responsive Design</h4><p>Tested on iPhone, Android, tablet, and every major browser — pixel-perfect at every screen size.</p></div></div>
<div className="feat-item rv"><div className="feat-icon">🔍</div><div className="feat-body"><h4>Technical SEO Foundation</h4><p>Semantic HTML, schema markup, XML sitemap, robots.txt, canonical tags, and clean URL structure on every page.</p></div></div>
<div className="feat-item rv2"><div className="feat-icon">🔐</div><div className="feat-body"><h4>SSL Certificate &amp; Security</h4><p>HTTPS enforced, security headers configured, and WordPress sites hardened against common vulnerability exploits.</p></div></div>
<div className="feat-item rv"><div className="feat-icon">📊</div><div className="feat-body"><h4>Analytics Setup</h4><p>Google Analytics 4 and Google Search Console configured and verified — so you have data from day one, not month three.</p></div></div>
<div className="feat-item rv2"><div className="feat-icon">🗺️</div><div className="feat-body"><h4>XML Sitemap &amp; Search Console</h4><p>Sitemap submitted to Google and Bing. Search Console verified and monitoring set up before handover.</p></div></div>
<div className="feat-item rv"><div className="feat-icon">📝</div><div className="feat-body"><h4>Content Management System</h4><p>Easy-to-use CMS so your team can update content, publish blog posts, and add pages without touching code.</p></div></div>
<div className="feat-item rv2"><div className="feat-icon">🛡️</div><div className="feat-body"><h4>30-Day Post-Launch Support</h4><p>30 days of free support after launch for bug fixes, tweaks, and questions — so you're never left stranded.</p></div></div>
</div>
</div>
</section>
      <section className="faq-section" id="faq">
<div className="wrap">
<div className="sec-h rv">
<div className="pill pill-wd">Common Questions</div>
<h2>Frequently Asked Questions</h2>
<p>Everything you need to know before starting your website project with Click Decoded.</p>
</div>
<div className="faq-wrap-2col">
<div className="faq-col">
<div className="fi"><button className="fi-q">How long does it take to build a website?<span className="fi-icon">+</span></button><div className="fi-a">A landing page takes 2–3 days. A simple business website (5–10 pages) takes 5–7 days. A full WordPress site with custom design takes 3–4 weeks. Complex e-commerce or web applications typically take 4–8 weeks depending on the number of features and integrations.</div></div>
<div className="fi"><button className="fi-q">Do you build SEO-friendly websites?<span className="fi-icon">+</span></button><div className="fi-a">Yes — SEO is built into every website from day one. This includes semantic HTML structure, schema markup, Core Web Vitals optimization, meta tags, sitemap, robots.txt, and clean URL structure. We don't add SEO as an afterthought or an upsell.</div></div>
<div className="fi"><button className="fi-q">What technologies do you use?<span className="fi-icon">+</span></button><div className="fi-a">We primarily use Next.js (React) for high-performance custom sites, WordPress for content-heavy and business sites, WooCommerce and Shopify for e-commerce, and Tailwind CSS for all frontend design. All sites are mobile-first and performance-optimized from the ground up.</div></div>
</div>
<div className="faq-col">
<div className="fi"><button className="fi-q">Will my website work well on mobile?<span className="fi-icon">+</span></button><div className="fi-a">100%. Every website we build is mobile-first — designed and tested on all major screen sizes and devices before delivery. With 70%+ of Indian web traffic coming from mobile, this is non-negotiable in our process.</div></div>
<div className="fi"><button className="fi-q">Do you provide website maintenance after launch?<span className="fi-icon">+</span></button><div className="fi-a">Yes. We offer monthly maintenance packages covering security updates, performance monitoring, content updates, backup management, plugin updates (for WordPress), and ongoing optimization. All projects include 30 days of free post-launch support.</div></div>
<div className="fi"><button className="fi-q">Can I update the website myself after it's built?<span className="fi-icon">+</span></button><div className="fi-a">Yes. Every website we build includes a CMS (WordPress or a custom admin panel) so your team can update content, add blog posts, change images, and manage pages without needing a developer. We also provide a walkthrough training session on handover.</div></div>
</div>
</div>
</div>
</section>
      <section className="wd-cta" id="contact">
<div className="wrap">
<div className="pill pill-wd" style={{ marginBottom: '20px', display: 'inline-flex' }}>💻 Free Website Proposal</div>
<h2>Let's Build Your Website.</h2>
<p>Tell us about your project and we'll send you a detailed proposal — scope, timeline, and pricing — within 24 hours. No fluff, no surprises.</p>
<div className="wd-cta-btns">
<a href="/contact" className="btn btn-wd">💻 Get Free Proposal <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
<a href="https://wa.me/919407000101?text=Hi!%20I'd%20like%20a%20website%20proposal%20from%20Click%20Decoded." target="_blank" rel="noopener" className="btn btn-ghost">💬 WhatsApp Us Instead</a>
</div>
<p style={{ fontSize: '13px', color: 'rgba(255,255,255,.3)', marginTop: '24px', position: 'relative', zIndex: '1' }}>✓ Proposal in 24 hours  ·  ✓ Fixed price, no surprises  ·  ✓ You own 100% of the code</p>
</div>
</section>
      <PageScript id="services-web-development-0" code={js0} />
    </>
  )
}
