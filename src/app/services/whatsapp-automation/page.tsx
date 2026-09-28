/* eslint-disable */
// src/app/services/whatsapp-automation/page.tsx — generated from whatsapp-automation.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "WhatsApp Automation Services India | Click Decoded",
  description: "Never lose a lead again. Click Decoded builds WhatsApp Business API automation, AI chatbots, n8n workflows, and CRM integrations that respond in 2 minutes.",
  alternates: { canonical: "/services/whatsapp-automation" },
  openGraph: {
    title: "WhatsApp Automation Services — Click Decoded",
    description: "AI-powered WhatsApp automation that responds to every lead in under 2 minutes. Setup, chatbots, CRM integration and n8n workflows.",
    url: "/services/whatsapp-automation",
    type: "website",
  },
}

const css = `
:root{
  --n:#2A4573;--n2:#1e3460;--n-dark:#0f1e38;
  --b:#2A4573;--o:#EE7E1A;--o2:#d46e12;
  --w:#ffffff;--body:#1E293B;--m:#475569;--s:#64748b;
  --bg:#F4F7FC;--bdr:#E2E8F0;--r:14px;
  --wa:#25D366;--wa2:#1ebe5d;
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
.pill-wa{background:rgba(37,211,102,.12);color:#16a34a;}
.sec-h{text-align:center;max-width:640px;margin:0 auto 52px;}
.sec-h h2{font-size:36px;margin-top:12px;margin-bottom:14px;}
.sec-h p{font-size:16px;color:var(--m);}
.btn{display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:10px;font-weight:700;font-size:14px;border:none;transition:all .18s;white-space:nowrap;cursor:pointer;}
.btn-o{background:var(--o);color:#fff;box-shadow:0 4px 18px rgba(245,158,11,.3);}
.btn-o:hover{background:var(--o2);transform:translateY(-2px);box-shadow:0 8px 28px rgba(245,158,11,.4);}
.btn-wa{background:var(--wa);color:#fff;box-shadow:0 4px 18px rgba(37,211,102,.3);}
.btn-wa:hover{background:var(--wa2);transform:translateY(-2px);}
.btn-n{background:var(--n);color:#fff;}
.btn-n:hover{background:var(--n2);transform:translateY(-2px);}
.btn-ghost{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.4);}
.btn-ghost:hover{background:rgba(255,255,255,.08);}
.btn-sm{padding:10px 20px;font-size:13px;}
.btn svg{flex-shrink:0;transition:transform .18s;}
.btn:hover svg{transform:translateX(3px);}

/* ── TOPBAR ── */
.topbar{background:var(--n-dark);padding:0;height:40px;display:flex;align-items:center;}
.topbar-inner{max-width:1200px;margin:0 auto;padding:0 28px;display:flex;justify-content:space-between;align-items:center;width:100%;}
.topbar-left{display:flex;gap:20px;}
.topbar-left a{font-size:12px;color:rgba(255,255,255,.6);display:flex;align-items:center;gap:5px;}
.topbar-right{display:flex;gap:8px;}
.tb-btn{display:inline-flex;align-items:center;gap:6px;padding:5px 12px;border-radius:6px;font-size:11.5px;font-weight:700;transition:.15s;}
.tb-call{background:rgba(238,126,26,.15);color:var(--o);border:1px solid rgba(238,126,26,.25);}
.tb-wa{background:rgba(37,211,102,.15);color:var(--wa);border:1px solid rgba(37,211,102,.25);}
.tb-call:hover{background:var(--o);color:#fff;}
.tb-wa:hover{background:var(--wa);color:#fff;}

/* ── HEADER ── */
#hdr{background:rgba(255,255,255,.97);backdrop-filter:blur(14px);border-bottom:1px solid var(--bdr);transition:box-shadow .2s;}
#hdr.up{box-shadow:0 4px 32px rgba(13,27,42,.09);}
.nav{display:flex;align-items:center;justify-content:space-between;height:70px;gap:16px;}
.dmenu{display:flex;align-items:center;gap:2px;}
.dmenu>li{position:relative;}
.dmenu>li>a{display:flex;align-items:center;gap:5px;padding:9px 12px;font-size:13.5px;font-weight:600;color:var(--n);border-radius:8px;transition:.15s;}
.dmenu>li>a:hover{background:var(--bg);color:var(--b);}
.dcar{width:10px;height:10px;opacity:.5;transition:transform .18s;flex-shrink:0;}
.dmenu>li:hover .dcar{transform:rotate(180deg);}
.mega{position:absolute;top:calc(100% + 10px);left:50%;transform:translateX(-50%) translateY(10px);background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:26px;box-shadow:0 24px 64px rgba(13,27,42,.14);opacity:0;visibility:hidden;pointer-events:none;transition:opacity .18s,transform .18s;}
.mega.wide{width:940px;display:grid;grid-template-columns:repeat(5,1fr);gap:22px;}
.mega.slim{width:296px;left:auto;right:0;transform:translateY(10px);}
.dmenu>li:hover .mega{opacity:1;visibility:visible;pointer-events:all;transform:translateX(-50%) translateY(0);}
.dmenu>li:hover .mega.slim{transform:translateY(0);}
.dmenu>li::after{content:'';position:absolute;top:100%;left:-40px;right:-40px;height:14px;}
.mc h5{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--b);margin-bottom:11px;}
.mc a{display:block;position:relative;padding:5px 0 5px 11px;font-size:13px;font-weight:500;color:var(--body);transition:color .14s,padding-left .14s;}
.mc a::before{content:'';position:absolute;left:0;top:50%;transform:translateY(-50%);width:2px;height:0;border-radius:1px;background:var(--o);transition:height .15s cubic-bezier(.22,1,.36,1);}
.mc a:hover{color:var(--o);padding-left:14px;}
.mc a:hover::before{height:13px;}
.mega.slim a{display:block;position:relative;padding:9px 36px 9px 12px;font-size:13px;font-weight:500;color:var(--body);border-radius:8px;transition:.15s;}
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
.ms h6{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--b);margin:12px 0 4px;}

/* ── BREADCRUMB ── */
.breadcrumb{background:var(--bg);padding:12px 0;border-bottom:1px solid var(--bdr);}
.bc-list{display:flex;align-items:center;gap:8px;font-size:12.5px;color:var(--s);list-style:none;}
.bc-list a{color:var(--n);font-weight:500;}
.bc-list a:hover{color:var(--o);}
.bc-sep{opacity:.4;}

/* ── HERO ── */
.wa-hero{
  background:linear-gradient(155deg,#0b1812 0%,#0f2118 45%,#0d1e15 100%);
  padding:96px 0 80px;position:relative;overflow:hidden;
}
.wa-hero::before{
  content:'';position:absolute;inset:0;
  background:radial-gradient(ellipse 65% 60% at 65% 35%,rgba(37,211,102,.07) 0%,transparent 65%),
             radial-gradient(ellipse 40% 50% at 15% 80%,rgba(37,211,102,.04) 0%,transparent 60%),
             radial-gradient(ellipse 30% 30% at 85% 85%,rgba(255,255,255,.015) 0%,transparent 60%);
}
.wa-hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;position:relative;z-index:2;}
.wa-hero-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;background:rgba(37,211,102,.12);border:1px solid rgba(37,211,102,.25);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:var(--wa);margin-bottom:20px;}
.wa-hero h1{font-size:52px;color:#fff;line-height:1.05;letter-spacing:-.04em;margin-bottom:20px;}
.wa-hero h1 em{font-style:normal;color:var(--wa);}
.wa-hero-desc{font-size:17px;color:rgba(255,255,255,.65);line-height:1.7;margin-bottom:32px;max-width:480px;}
.wa-hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:40px;}
.wa-hero-trust{display:flex;gap:24px;flex-wrap:wrap;}
.wa-trust-item{display:flex;align-items:center;gap:8px;font-size:13px;color:rgba(255,255,255,.55);}
.wa-trust-item strong{color:#fff;font-weight:700;}

/* Hero right — animated chat UI */
.wa-chat-mock{
  background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);
  border-radius:24px;overflow:hidden;backdrop-filter:blur(8px);
  box-shadow:0 24px 64px rgba(0,0,0,.4);
}
.wa-chat-header{display:flex;align-items:center;gap:12px;padding:16px 20px;
  background:rgba(37,211,102,.1);border-bottom:1px solid rgba(255,255,255,.08);}
.wa-chat-avatar{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,var(--wa),var(--wa2));display:flex;align-items:center;justify-content:center;font-size:17px;flex-shrink:0;}
.wa-chat-name{font-size:14px;font-weight:700;color:#fff;}
.wa-chat-status{font-size:11px;color:var(--wa);display:flex;align-items:center;gap:4px;}
.wa-chat-status::before{content:'';width:6px;height:6px;background:var(--wa);border-radius:50%;animation:pulseDot 2s ease-in-out infinite;}
@keyframes pulseDot{0%,100%{opacity:1;}50%{opacity:.4;}}
.wa-chat-body{padding:14px 16px;height:340px;overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end;gap:6px;position:relative;}
.wa-chat-body::before{content:'';position:absolute;inset:0;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Ccircle cx='20' cy='20' r='1' fill='rgba(255,255,255,.03)'/%3E%3C/svg%3E");pointer-events:none;}
.wa-msg{animation:msgIn .35s cubic-bezier(.22,1,.36,1);}
@keyframes msgIn{from{opacity:0;transform:translateY(14px);}to{opacity:1;transform:translateY(0);}}
.wa-msg-bubble{display:inline-block;padding:9px 13px;border-radius:12px;font-size:12.5px;line-height:1.55;max-width:82%;}
.wa-msg.in .wa-msg-bubble{background:rgba(255,255,255,.11);color:rgba(255,255,255,.88);border-radius:2px 12px 12px 12px;}
.wa-msg.out{text-align:right;}
.wa-msg.out .wa-msg-bubble{background:linear-gradient(135deg,#25d366,#1aad54);color:#fff;border-radius:12px 2px 12px 12px;}
.wa-msg-time{font-size:9.5px;color:rgba(255,255,255,.28);margin-top:2px;}
.wa-msg.out .wa-msg-time{text-align:right;}
.wa-sys-msg{text-align:center;animation:msgIn .35s cubic-bezier(.22,1,.36,1);}
.wa-sys-bubble{display:inline-block;padding:5px 12px;background:rgba(37,211,102,.12);border:1px solid rgba(37,211,102,.2);border-radius:99px;font-size:11px;color:rgba(255,255,255,.6);}
.wa-typing-row{display:flex;align-items:center;gap:6px;padding:4px 0;animation:msgIn .25s ease;}
.wa-typing-row span{width:7px;height:7px;background:rgba(255,255,255,.28);border-radius:50%;animation:typingDot 1.1s ease-in-out infinite;}
.wa-typing-row span:nth-child(2){animation-delay:.18s;}
.wa-typing-row span:nth-child(3){animation-delay:.36s;}
@keyframes typingDot{0%,60%,100%{transform:translateY(0);}30%{transform:translateY(-5px);}}

/* ── STATS STRIP ── */
.wa-stats-strip{background:var(--wa);padding:0;}
.wa-stats-inner{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(0,0,0,.08);}
.wa-stat{padding:32px 24px;text-align:center;background:var(--wa);}
.wa-stat-n{font-size:40px;font-weight:900;color:#fff;line-height:1;letter-spacing:-.03em;}
.wa-stat-l{font-size:12px;color:rgba(255,255,255,.75);margin-top:6px;font-weight:500;text-transform:uppercase;letter-spacing:.06em;}

/* ── WHAT WE BUILD ── */
.services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.svc-card{background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:28px 24px;transition:transform .2s,box-shadow .2s,border-color .2s;}
.svc-card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(42,69,115,.1);border-color:rgba(37,211,102,.3);}
.svc-icon{width:50px;height:50px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:16px;background:linear-gradient(135deg,rgba(37,211,102,.12),rgba(37,211,102,.06));border:1px solid rgba(37,211,102,.2);}
.svc-card h3{font-size:17px;margin-bottom:10px;color:var(--n);}
.svc-card p{font-size:13.5px;color:var(--m);line-height:1.65;margin-bottom:16px;}
.svc-tags{display:flex;flex-wrap:wrap;gap:6px;}
.svc-tag{padding:4px 10px;background:var(--bg);border-radius:6px;font-size:11px;font-weight:600;color:var(--s);}

/* ── HOW IT WORKS ── */
.hiw-section{background:var(--bg);}
.steps-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative;}
.steps-grid::before{content:'';position:absolute;top:36px;left:12.5%;right:12.5%;height:2px;background:linear-gradient(90deg,var(--wa),var(--o));z-index:0;}
.step{text-align:center;padding:0 20px;position:relative;z-index:1;}
.step-num{width:72px;height:72px;border-radius:50%;background:linear-gradient(135deg,var(--wa),var(--wa2));color:#fff;font-size:24px;font-weight:900;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;box-shadow:0 8px 24px rgba(37,211,102,.3);}
.step h4{font-size:15px;margin-bottom:8px;color:var(--n);}
.step p{font-size:13px;color:var(--m);line-height:1.6;}

/* ── WHY WHATSAPP ── */
.why-wa-grid{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;}
.why-wa-img{background:linear-gradient(135deg,#0f1e38,#162d52);border-radius:24px;padding:40px;display:flex;flex-direction:column;gap:16px;}
.wa-stat-big{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:20px 24px;}
.wa-stat-big .num{font-size:44px;font-weight:900;color:var(--wa);line-height:1;letter-spacing:-.03em;}
.wa-stat-big .lbl{font-size:12.5px;color:rgba(255,255,255,.55);margin-top:6px;}
.why-wa-points{display:flex;flex-direction:column;gap:20px;}
.why-point{display:flex;gap:16px;align-items:flex-start;}
.why-point-icon{width:44px;height:44px;flex-shrink:0;border-radius:12px;background:linear-gradient(135deg,rgba(37,211,102,.12),rgba(37,211,102,.06));border:1px solid rgba(37,211,102,.2);display:flex;align-items:center;justify-content:center;font-size:18px;}
.why-point h4{font-size:15px;font-weight:700;color:var(--n);margin-bottom:5px;}
.why-point p{font-size:13.5px;color:var(--m);line-height:1.6;margin:0;}

/* ── INDUSTRY USE CASES ── */
.industry-section{background:var(--n-dark);}
.industry-section .sec-h h2{color:#fff;}
.industry-section .sec-h p{color:rgba(255,255,255,.5);}
.industry-tabs{display:flex;gap:8px;justify-content:center;margin-bottom:40px;flex-wrap:wrap;}
.ind-tab{padding:9px 20px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;border:1px solid rgba(255,255,255,.1);color:rgba(255,255,255,.5);background:transparent;transition:.2s;}
.ind-tab.on{background:var(--wa);color:#fff;border-color:var(--wa);}
.ind-content{display:none;animation:fadeIn .3s ease;}
.ind-content.on{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start;}
@keyframes fadeIn{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:translateY(0);}}
.ind-info h3{font-size:26px;color:#fff;margin-bottom:14px;}
.ind-info p{font-size:15px;color:rgba(255,255,255,.6);line-height:1.7;margin-bottom:24px;}
.ind-results{display:flex;flex-direction:column;gap:12px;}
.ind-result{display:flex;align-items:center;gap:12px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:14px 18px;}
.ind-result-val{font-size:22px;font-weight:900;color:var(--wa);min-width:60px;}
.ind-result-lbl{font-size:13px;color:rgba(255,255,255,.6);}
.ind-flows{display:flex;flex-direction:column;gap:10px;}
.ind-flow{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:14px 18px;display:flex;gap:12px;align-items:flex-start;}
.ind-flow-icon{font-size:20px;flex-shrink:0;margin-top:2px;}
.ind-flow-title{font-size:13.5px;font-weight:700;color:#fff;margin-bottom:3px;}
.ind-flow-desc{font-size:12.5px;color:rgba(255,255,255,.5);}

/* ── FEATURES DEEP DIVE ── */
.features-section{background:var(--bg);}
.features-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
.feat-item{background:#fff;border:1px solid var(--bdr);border-radius:14px;padding:22px 20px;display:flex;gap:14px;}
.feat-icon{font-size:22px;flex-shrink:0;margin-top:2px;}
.feat-body h4{font-size:14.5px;font-weight:700;color:var(--n);margin-bottom:6px;}
.feat-body p{font-size:13px;color:var(--m);line-height:1.6;margin:0;}

/* ── INTEGRATION STACK ── */
.integrations-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;}
.int-card{background:#fff;border:1px solid var(--bdr);border-radius:14px;padding:22px 18px;text-align:center;transition:.2s;}
.int-card:hover{border-color:rgba(37,211,102,.3);box-shadow:0 8px 24px rgba(42,69,115,.07);}
.int-icon{font-size:32px;margin-bottom:10px;}
.int-name{font-size:13px;font-weight:700;color:var(--n);margin-bottom:4px;}
.int-desc{font-size:11.5px;color:var(--s);}

/* ── PRICING ── */
.pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.p-card{border:1px solid var(--bdr);border-radius:20px;padding:32px 28px;background:#fff;position:relative;transition:.2s;}
.p-card:hover{transform:translateY(-4px);box-shadow:0 20px 56px rgba(42,69,115,.1);}
.p-card.featured{border-color:var(--wa);box-shadow:0 8px 32px rgba(37,211,102,.15);}
.p-badge{position:absolute;top:-14px;left:50%;transform:translateX(-50%);background:var(--wa);color:#fff;padding:5px 16px;border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;white-space:nowrap;}
.p-tier{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:var(--s);margin-bottom:10px;}
.p-price{font-size:38px;font-weight:900;color:var(--n);line-height:1;margin-bottom:6px;}
.p-price sup{font-size:20px;font-weight:700;vertical-align:top;margin-top:6px;}
.p-price sub{font-size:14px;font-weight:500;color:var(--s);vertical-align:bottom;}
.p-desc{font-size:13.5px;color:var(--m);margin-bottom:24px;padding-bottom:20px;border-bottom:1px solid var(--bdr);}
.p-features{display:flex;flex-direction:column;gap:10px;margin-bottom:28px;}
.p-feat{display:flex;gap:10px;font-size:13px;color:var(--m);}
.p-feat::before{content:'✓';color:var(--wa);font-weight:900;flex-shrink:0;}
.p-feat.na{color:var(--bdr);}
.p-feat.na::before{content:'–';color:var(--bdr);}

/* ── FAQ ── */
.faq-section{background:var(--bg);}
.faq-wrap-2col{display:grid;grid-template-columns:1fr 1fr;gap:0 28px;align-items:start;}
.faq-col{display:flex;flex-direction:column;}
.fi{border:1px solid var(--bdr);border-radius:14px;margin-bottom:10px;overflow:hidden;background:#fff;transition:.15s;}
.fi:hover{border-color:rgba(37,211,102,.2);}
.fi.on{border-color:rgba(37,211,102,.35);box-shadow:0 4px 20px rgba(37,211,102,.08);}
.fi-q{width:100%;text-align:left;background:transparent;border:none;padding:20px 22px;font-size:15px;font-weight:700;color:var(--n);display:flex;justify-content:space-between;align-items:center;gap:12px;cursor:pointer;}
.fi-icon{width:26px;height:26px;border-radius:50%;flex-shrink:0;background:var(--bg);border:1px solid var(--bdr);display:flex;align-items:center;justify-content:center;color:var(--wa);font-size:18px;font-weight:900;line-height:1;transition:transform .2s;}
.fi.on .fi-icon{transform:rotate(45deg);background:var(--wa);color:#fff;border-color:var(--wa);}
.fi-a{max-height:0;overflow:hidden;transition:.3s;color:var(--m);font-size:14.5px;line-height:1.75;}
.fi.on .fi-a{max-height:300px;padding:0 22px 22px;}

/* ── CTA SECTION ── */
.wa-cta{background:linear-gradient(135deg,#0f1e38 0%,#0d2b1f 100%);padding:96px 0;text-align:center;position:relative;overflow:hidden;}
.wa-cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(37,211,102,.08) 0%,transparent 70%);}
.wa-cta h2{color:#fff;font-size:44px;margin-bottom:16px;position:relative;z-index:1;}
.wa-cta p{color:rgba(255,255,255,.6);font-size:17px;margin-bottom:36px;position:relative;z-index:1;}
.wa-cta-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;position:relative;z-index:1;}

/* ── FOOTER ── */
footer{background:var(--n-dark);padding:64px 0 0;}
.footer-main{margin-bottom:40px;}
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

/* ── REVEAL ANIMATIONS ── */
.rv,.rv2,.rv3{opacity:0;transform:translateY(28px);transition:opacity .6s ease,transform .6s ease;}
.rv2{transition-delay:.1s;}.rv3{transition-delay:.2s;}
.rv.vis,.rv2.vis,.rv3.vis{opacity:1;transform:translateY(0);}

/* ── RESPONSIVE ── */
@media(max-width:900px){
  .wa-hero-grid,.why-wa-grid,.ind-content.on,.faq-wrap-2col{grid-template-columns:1fr;}
  .wa-hero h1{font-size:36px;}
  .steps-grid{grid-template-columns:1fr 1fr;gap:32px;}
  .steps-grid::before{display:none;}
  .services-grid,.features-grid,.integrations-grid,.pricing-grid{grid-template-columns:1fr 1fr;}
  .wa-stats-inner,.fg{grid-template-columns:1fr 1fr;}
  .hb{display:flex;}
  .dmenu,.navcta .btn:not(.show-m){display:none;}
}
@media(max-width:600px){
  .services-grid,.features-grid,.integrations-grid,.pricing-grid,.steps-grid,.wa-stats-inner,.fg{grid-template-columns:1fr;}
  section{padding:60px 0;}
  .wa-hero{padding:64px 0 52px;}
}
`

const ld0 = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "WhatsApp Business Automation",
      "provider": {
        "@type": "Organization",
        "name": "Click Decoded",
        "url": "https://clickdecoded.com"
      },
      "description": "End-to-end WhatsApp Business API setup, AI chatbots, n8n workflow automation, CRM integration, and lead follow-up systems for Indian B2B businesses.",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": "Marketing Automation",
      "url": "https://www.clickdecoded.com/services/whatsapp-automation"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is WhatsApp Business Automation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "WhatsApp Business Automation uses the official WhatsApp Business API, AI chatbots, and workflow tools like n8n to automatically respond to leads, qualify prospects, send reminders, and book appointments — without manual effort."
          }
        },
        {
          "@type": "Question",
          "name": "How fast can you set up WhatsApp automation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Basic WhatsApp Business API setup and auto-reply flows are live within 5–7 business days. Full chatbot and CRM integration typically takes 2–3 weeks depending on complexity."
          }
        },
        {
          "@type": "Question",
          "name": "Will my leads know they're talking to a bot?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our AI chatbots are trained to respond naturally. You choose whether to disclose — many clients use a hybrid model where the bot handles initial queries and hands off to a human for closing."
          }
        },
        {
          "@type": "Question",
          "name": "Do you support multiple languages?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our bots support English, Hindi, and regional languages. We can train the bot on your specific tone, FAQs, and product knowledge."
          }
        },
        {
          "@type": "Question",
          "name": "Is WhatsApp automation legal and compliant?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — we exclusively use the official WhatsApp Business API (not unofficial tools), which is fully compliant with Meta's policies and Indian data protection regulations."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How WhatsApp Automation Services India Works — Our Process",
      "description": "Never lose a lead again. Click Decoded builds WhatsApp Business API automation, AI chatbots, n8n workflows, and CRM integrations that respond in 2 minutes — 24/7. B2B specialists, India.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Discovery Call",
          "text": "We map your current lead flow, identify drop-off points, and design the ideal automation blueprint for your business."
        },
        {
          "@type": "HowToStep",
          "name": "API Setup & Bot Build",
          "text": "Official WhatsApp Business API activated, chatbot trained on your data, and all message flows configured and tested."
        },
        {
          "@type": "HowToStep",
          "name": "Integration & Testing",
          "text": "CRM connected, n8n workflows wired up, and end-to-end testing across all scenarios before go-live."
        },
        {
          "@type": "HowToStep",
          "name": "Go Live & Optimise",
          "text": "Your automation goes live. We monitor, tweak response flows, and optimise for conversion every month."
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
          "name": "WhatsApp Automation",
          "item": "https://www.clickdecoded.com/services/whatsapp-automation"
        }
      ]
    }
  ]
}`

const js0 = `(function(){
/* Sticky header */
// sticky scroll handled by components/header.js

/* Mobile nav */
const hb=document.getElementById('hb'),mn=document.getElementById('mnav');
if(hb)hb.onclick=()=>{hb.classList.toggle('x');mn.classList.toggle('on');document.body.style.overflow=mn.classList.contains('on')?'hidden':'';};
document.querySelectorAll('.ma>button').forEach(b=>{
  b.onclick=()=>{const a=b.parentElement,isOpen=a.classList.contains('on');document.querySelectorAll('.ma').forEach(x=>x.classList.remove('on'));if(!isOpen)a.classList.add('on');};
});

/* FAQ accordion */
document.querySelectorAll('.fi').forEach(item=>{
  item.querySelector('.fi-q').onclick=()=>{
    const isOn=item.classList.contains('on');
    document.querySelectorAll('.fi').forEach(f=>f.classList.remove('on'));
    if(!isOn)item.classList.add('on');
  };
});

/* Industry tabs */
document.querySelectorAll('.ind-tab').forEach(tab=>{
  tab.onclick=()=>{
    document.querySelectorAll('.ind-tab').forEach(t=>t.classList.remove('on'));
    document.querySelectorAll('.ind-content').forEach(c=>c.classList.remove('on'));
    tab.classList.add('on');
    const target=document.getElementById('ind-'+tab.dataset.ind);
    if(target)target.classList.add('on');
  };
});

/* Scroll reveal */
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('vis');});
},{threshold:.1});
document.querySelectorAll('.rv,.rv2,.rv3').forEach(el=>obs.observe(el));

/* ── ANIMATED CHAT ── */
(function(){
  const win=document.getElementById('chatWindow');
  if(!win)return;

  // Chat script: type = 'in' (lead), 'out' (bot), 'sys' (system), 'typing' (bot thinking)
  const script=[
    {t:'in',  msg:'Hello! Saw your ad for WhatsApp automation. Interested for my business.',  time:'10:31 AM'},
    {t:'typing', delay:1400},
    {t:'out', msg:'👋 Hi there! Great to connect. What kind of business do you run?',          time:'10:31 AM'},
    {t:'in',  msg:'Real estate firm in Pune. Getting 50+ enquiries daily across portals.',     time:'10:32 AM'},
    {t:'typing', delay:1600},
    {t:'out', msg:'50+ daily is great volume 💪 How many do you reply to within the first hour?', time:'10:32 AM'},
    {t:'in',  msg:'Honestly maybe 15–20. The rest we miss or reply too late 😕',              time:'10:33 AM'},
    {t:'typing', delay:2000},
    {t:'out', msg:"That's real money walking out the door. Want a quick 20-min demo to see how we automate all 50+ — instantly?", time:'10:33 AM'},
    {t:'in',  msg:'Yes! That would be great.',                                                 time:'10:34 AM'},
    {t:'typing', delay:1200},
    {t:'out', msg:'📅 Perfect! Booking your slot for tomorrow 10 AM IST. Calendar invite coming your way.', time:'10:34 AM'},
    {t:'sys', msg:'🔔 Meeting reminder set — Tomorrow 10:00 AM'},
    {t:'sys', msg:'📩 Calendar invite sent to your email'},
    {t:'out', msg:'☀️ Good morning Rahul! Your demo starts in 1 hour.\\n👉 Zoom: meet.zoom.us/cd-demo', time:'9:00 AM'},
    {t:'in',  msg:'Thanks! Looking forward to it 🙏',                                         time:'9:03 AM'},
    {t:'typing', delay:1000},
    {t:'out', msg:'Hope the demo was helpful! Ready to automate your leads? 🚀\\nReply YES to get started today.', time:'11:20 AM'},
    {t:'in',  msg:'YES! Let\\'s do it 🎉',                                                     time:'11:21 AM'},
    {t:'typing', delay:900},
    {t:'out', msg:'🎉 Welcome aboard! Our team will reach you within 2 hours to kick off your setup. You\\'re in good hands.', time:'11:21 AM'},
  ];

  const MAX_VISIBLE=6; // how many messages to show at once (creates scroll-up effect)
  let step=0,timer=null;
  const shown=[];

  function addEl(el){
    shown.push(el);
    win.appendChild(el);
    // trim oldest if overflow
    while(shown.length>MAX_VISIBLE){
      const old=shown.shift();
      old.style.transition='opacity .4s';
      old.style.opacity='0';
      setTimeout(()=>old.remove(),400);
    }
  }

  function makeMsg(type,text,time){
    if(type==='sys'){
      const w=document.createElement('div');w.className='wa-sys-msg';
      w.innerHTML=\`<span class="wa-sys-bubble">\${text}</span>\`;
      return w;
    }
    const w=document.createElement('div');w.className=\`wa-msg \${type}\`;
    const bubble=text.replace(/\\n/g,'<br>');
    w.innerHTML=\`<div class="wa-msg-bubble">\${bubble}</div>\`+(time?\`<div class="wa-msg-time">\${time}</div>\`:'');
    return w;
  }

  function makeTyping(){
    const w=document.createElement('div');w.className='wa-typing-row';
    w.innerHTML='<span></span><span></span><span></span>';
    return w;
  }

  function next(){
    if(step>=script.length){
      // pause then restart
      timer=setTimeout(()=>{
        // fade out all
        shown.forEach(el=>{el.style.transition='opacity .5s';el.style.opacity='0';});
        setTimeout(()=>{win.innerHTML='';shown.length=0;step=0;next();},600);
      },3000);
      return;
    }
    const s=script[step];step++;

    if(s.t==='typing'){
      const el=makeTyping();
      addEl(el);
      timer=setTimeout(()=>{
        el.style.transition='opacity .2s';el.style.opacity='0';
        setTimeout(()=>{el.remove();const i=shown.indexOf(el);if(i>-1)shown.splice(i,1);next();},200);
      }, s.delay||1400);
    } else {
      const el=makeMsg(s.t, s.msg, s.time);
      addEl(el);
      // gap between messages
      const gap=s.t==='sys'?700:900;
      timer=setTimeout(next, gap);
    }
  }

  // start after a short delay
  setTimeout(next, 600);
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
<a href="/locations/indore/ai-automation">AI &amp; Automation</a><span className="bc-sep">›</span>
<span>WhatsApp Automation</span>
</div>
</div>
</div>
      <section className="wa-hero">
<div className="wrap">
<div className="wa-hero-grid">
<div>
<div className="wa-hero-eyebrow">💬 WhatsApp Business API Experts</div>
<h1>Never Lose a Lead to <em>Slow Response</em> Again.</h1>
<p className="wa-hero-desc">We build WhatsApp automation systems that reply in under 2 minutes — 24/7. AI chatbots, lead qualification, appointment booking, and CRM sync — all on autopilot while you sleep.</p>
<div className="wa-hero-btns">
<a href="#contact" className="btn btn-wa">💬 Get a Free Demo <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
<a href="/services/seo" className="btn btn-ghost">See What We Build</a>
</div>
<div className="wa-hero-trust">
<div className="wa-trust-item"><strong>2 min</strong> avg response time</div>
<div className="wa-trust-item"><strong>94%</strong> queries resolved</div>
<div className="wa-trust-item"><strong>24/7</strong> active automation</div>
<div className="wa-trust-item"><strong>4+ languages</strong> supported</div>
</div>
</div>

<div className="wa-chat-mock">
<div className="wa-chat-header">
<div className="wa-chat-avatar">🤖</div>
<div>
<div className="wa-chat-name">Click Decoded Bot</div>
<div className="wa-chat-status">Online • Responds instantly</div>
</div>
</div>
<div className="wa-chat-body" id="chatWindow"></div>
</div>
</div>
</div>
</section>
      <div className="wa-stats-strip">
<div className="wrap">
<div className="wa-stats-inner">
<div className="wa-stat"><div className="wa-stat-n">2 min</div><div className="wa-stat-l">Avg. First Response</div></div>
<div className="wa-stat"><div className="wa-stat-n">94%</div><div className="wa-stat-l">Query Resolution Rate</div></div>
<div className="wa-stat"><div className="wa-stat-n">5–7</div><div className="wa-stat-l">Days to Go Live</div></div>
<div className="wa-stat"><div className="wa-stat-n">3×</div><div className="wa-stat-l">Higher Lead Conversion</div></div>
</div>
</div>
</div>
      <section>
<div className="wrap">
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }}>
<div className="rv">
<div className="pill pill-wa" style={{ marginBottom: '16px' }}>What It Is</div>
<h2 style={{ fontSize: '36px', marginBottom: '16px' }}>WhatsApp Automation That Works While You're Offline</h2>
<p style={{ fontSize: '16px', color: 'var(--m)', lineHeight: '1.75', marginBottom: '20px' }}>India has <strong>500 million+ WhatsApp users</strong>. Your prospects are already on it — but if your team takes 2–4 hours to reply, you've already lost that lead to a faster competitor.</p>
<p style={{ fontSize: '16px', color: 'var(--m)', lineHeight: '1.75', marginBottom: '28px' }}>WhatsApp Business Automation uses the <strong>official WhatsApp Business API</strong> (not grey-market tools), AI language models, and workflow builders like n8n to create a system that greets, qualifies, nurtures, and books every lead — automatically, in real time, in their language.</p>
<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
<div style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--m)' }}><span style={{ color: 'var(--wa)', fontWeight: '900', fontSize: '16px' }}>✓</span> Official Meta-approved WhatsApp Business API only</div>
<div style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--m)' }}><span style={{ color: 'var(--wa)', fontWeight: '900', fontSize: '16px' }}>✓</span> Works 24/7 — even on holidays and nights</div>
<div style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--m)' }}><span style={{ color: 'var(--wa)', fontWeight: '900', fontSize: '16px' }}>✓</span> Integrates with your CRM, calendar, and team inbox</div>
<div style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--m)' }}><span style={{ color: 'var(--wa)', fontWeight: '900', fontSize: '16px' }}>✓</span> Fully compliant with Indian data privacy standards</div>
</div>
</div>
<div className="rv2" style={{ background: 'var(--bg)', borderRadius: '20px', padding: '36px', border: '1px solid var(--bdr)' }}>
<h4 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--s)', marginBottom: '20px' }}>Before vs After Automation</h4>
<div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
<div style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--s)', paddingBottom: '8px', borderBottom: '1px solid var(--bdr)' }}>❌ Without Automation</div>
<div style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--wa)', paddingBottom: '8px', borderBottom: '1px solid var(--bdr)' }}>✅ With Click Decoded</div>
</div>
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '13.5px' }}>
<div style={{ color: 'var(--m)' }}>Leads wait 2–4 hours for reply</div>
<div style={{ color: 'var(--n)', fontWeight: '600' }}>Reply in under 2 minutes</div>
</div>
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '13.5px' }}>
<div style={{ color: 'var(--m)' }}>Team manually qualifies every lead</div>
<div style={{ color: 'var(--n)', fontWeight: '600' }}>Bot qualifies 24/7 automatically</div>
</div>
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '13.5px' }}>
<div style={{ color: 'var(--m)' }}>Leads lost overnight / on weekends</div>
<div style={{ color: 'var(--n)', fontWeight: '600' }}>Zero lead leakage, ever</div>
</div>
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '13.5px' }}>
<div style={{ color: 'var(--m)' }}>Follow-ups forgotten or delayed</div>
<div style={{ color: 'var(--n)', fontWeight: '600' }}>Automated multi-touch follow-up</div>
</div>
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '13.5px' }}>
<div style={{ color: 'var(--m)' }}>No data, no reports</div>
<div style={{ color: 'var(--n)', fontWeight: '600' }}>CRM-synced, full visibility</div>
</div>
</div>
</div>
</div>
</div>
</section>
      <section className="bg-off" id="services">
<div className="wrap">
<div className="sec-h rv">
<div className="pill pill-wa">What We Build</div>
<h2>End-to-End WhatsApp Automation Services</h2>
<p>From API setup to AI chatbots — we design, build, and maintain the entire automation stack for your business.</p>
</div>
<div className="services-grid">
<div className="svc-card rv">
<div className="svc-icon">⚡</div>
<h3>WhatsApp Business API Setup</h3>
<p>Official Meta-verified WhatsApp Business API account setup, number porting, business profile verification, and message template approval — done right the first time.</p>
<div className="svc-tags"><span className="svc-tag">Meta Verified</span><span className="svc-tag">WABA Setup</span><span className="svc-tag">Template Approval</span></div>
</div>
<div className="svc-card rv2">
<div className="svc-icon">🤖</div>
<h3>AI Chatbot Development</h3>
<p>Custom AI chatbots trained on your FAQs, products, and pricing. Understands natural language, qualifies leads, and routes hot prospects to your sales team — in Hindi, English, and regional languages.</p>
<div className="svc-tags"><span className="svc-tag">NLP-Powered</span><span className="svc-tag">Multi-language</span><span className="svc-tag">Lead Scoring</span></div>
</div>
<div className="svc-card rv3">
<div className="svc-icon">📋</div>
<h3>Lead Qualification Flows</h3>
<p>Conversational qualification sequences that ask the right questions, score leads, and segment them — so your sales team only talks to prospects worth their time.</p>
<div className="svc-tags"><span className="svc-tag">Smart Flows</span><span className="svc-tag">Lead Scoring</span><span className="svc-tag">Auto-segment</span></div>
</div>
<div className="svc-card rv">
<div className="svc-icon">📅</div>
<h3>Appointment Booking Automation</h3>
<p>Automated appointment scheduling directly via WhatsApp. Syncs with Google Calendar or Calendly, sends reminders, and confirms bookings without human intervention.</p>
<div className="svc-tags"><span className="svc-tag">Calendar Sync</span><span className="svc-tag">Auto-reminders</span><span className="svc-tag">Rescheduling</span></div>
</div>
<div className="svc-card rv2">
<div className="svc-icon">🔄</div>
<h3>n8n Workflow Automation</h3>
<p>Complex multi-step workflows built on n8n that connect WhatsApp to your CRM, email, spreadsheets, payment systems, and 200+ other apps without writing code.</p>
<div className="svc-tags"><span className="svc-tag">n8n</span><span className="svc-tag">Multi-app</span><span className="svc-tag">No-code</span></div>
</div>
<div className="svc-card rv3">
<div className="svc-icon">🗃️</div>
<h3>CRM Integration &amp; Sync</h3>
<p>Seamless integration with HubSpot, Zoho, Salesforce, Leadsquared, or your custom CRM. Every WhatsApp conversation automatically logged, tagged, and actioned.</p>
<div className="svc-tags"><span className="svc-tag">HubSpot</span><span className="svc-tag">Zoho</span><span className="svc-tag">Leadsquared</span></div>
</div>
</div>
</div>
</section>
      <section className="hiw-section">
<div className="wrap">
<div className="sec-h rv">
<div className="pill pill-wa">The Process</div>
<h2>Live in 5–7 Days. Here's How.</h2>
<p>A straightforward, no-fluff process from strategy call to your first automated conversation.</p>
</div>
<div className="steps-grid">
<div className="step rv">
<div className="step-num">1</div>
<h4>Discovery Call</h4>
<p>We map your current lead flow, identify drop-off points, and design the ideal automation blueprint for your business.</p>
</div>
<div className="step rv2">
<div className="step-num">2</div>
<h4>API Setup &amp; Bot Build</h4>
<p>Official WhatsApp Business API activated, chatbot trained on your data, and all message flows configured and tested.</p>
</div>
<div className="step rv3">
<div className="step-num">3</div>
<h4>Integration &amp; Testing</h4>
<p>CRM connected, n8n workflows wired up, and end-to-end testing across all scenarios before go-live.</p>
</div>
<div className="step rv">
<div className="step-num">4</div>
<h4>Go Live &amp; Optimise</h4>
<p>Your automation goes live. We monitor, tweak response flows, and optimise for conversion every month.</p>
</div>
</div>
</div>
</section>
      <section>
<div className="wrap">
<div className="sec-h rv">
<div className="pill pill-b">The Opportunity</div>
<h2>Why WhatsApp Is India's #1 Lead Channel</h2>
<p>No other channel in India has this penetration, this open rate, and this response speed.</p>
</div>
<div className="why-wa-grid">
<div className="why-wa-img rv">
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
<div className="wa-stat-big"><div className="num">500M+</div><div className="lbl">WhatsApp users in India</div></div>
<div className="wa-stat-big"><div className="num">98%</div><div className="lbl">Message open rate</div></div>
<div className="wa-stat-big"><div className="num">40%</div><div className="lbl">Higher CTR vs email</div></div>
<div className="wa-stat-big"><div className="num">3×</div><div className="lbl">Better conversion vs cold calls</div></div>
</div>
<div style={{ textAlign: 'center', padding: '16px 0', color: 'rgba(255,255,255,.3)', fontSize: '12px' }}>Source: Meta Business, Statista 2024</div>
</div>
<div className="why-wa-points rv2">
<div className="why-point">
<div className="why-point-icon">📱</div>
<div>
<h4>Where Your Customers Already Are</h4>
<p>Indian B2B buyers overwhelmingly prefer WhatsApp for business communication. Meet them where they are — not where you wish they were.</p>
</div>
</div>
<div className="why-point">
<div className="why-point-icon">⚡</div>
<div>
<h4>Speed Wins Deals in India</h4>
<p>Studies show that responding within 5 minutes makes you 21× more likely to qualify a lead than responding after 30 minutes. Automation guarantees speed every time.</p>
</div>
</div>
<div className="why-point">
<div className="why-point-icon">💰</div>
<div>
<h4>Lowest Cost Per Qualified Lead</h4>
<p>Compared to Google Ads or Meta retargeting, WhatsApp automation has the highest ROI because it activates leads you're already generating — stopping the leakage.</p>
</div>
</div>
<div className="why-point">
<div className="why-point-icon">🤝</div>
<div>
<h4>Builds Trust Faster</h4>
<p>WhatsApp feels personal. An instant, helpful reply builds more trust in 2 minutes than a cold email chain ever could in 2 weeks.</p>
</div>
</div>
</div>
</div>
</div>
</section>
      <section className="industry-section">
<div className="wrap">
<div className="sec-h rv">
<div className="pill pill-wa">Industry Use Cases</div>
<h2>Built for Your Industry</h2>
<p>We've deployed WhatsApp automation across 8+ industries in India. Here's what it looks like in yours.</p>
</div>
<div className="industry-tabs">
<button className="ind-tab on" data-ind="realestate">🏠 Real Estate</button>
<button className="ind-tab" data-ind="education">🎓 Education</button>
<button className="ind-tab" data-ind="healthcare">🏥 Healthcare</button>
<button className="ind-tab" data-ind="ecommerce">🛒 E-commerce</button>
<button className="ind-tab" data-ind="b2b">🏢 B2B Services</button>
</div>
<div className="ind-content on" id="ind-realestate">
<div className="ind-info">
<h3>Real Estate Lead Automation</h3>
<p>Builders and brokers generate hundreds of enquiries but lose 60%+ because response time is too slow. Our WhatsApp automation captures every enquiry — from Facebook Ads, 99acres, MagicBricks — and instantly replies with property details, site visit booking links, and EMI calculators.</p>
<div className="ind-results">
<div className="ind-result"><div className="ind-result-val">4×</div><div className="ind-result-lbl">More site visits booked from the same ad spend</div></div>
<div className="ind-result"><div className="ind-result-val">72%</div><div className="ind-result-lbl">Reduction in unresponded enquiries</div></div>
<div className="ind-result"><div className="ind-result-val">2 min</div><div className="ind-result-lbl">Average first response to every property enquiry</div></div>
</div>
</div>
<div className="ind-flows">
<div className="ind-flow"><div className="ind-flow-icon">🏠</div><div><div className="ind-flow-title">Property Enquiry Bot</div><div className="ind-flow-desc">Instantly shares floor plans, pricing, and virtual tour links the moment a lead comes in.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">📅</div><div><div className="ind-flow-title">Site Visit Scheduler</div><div className="ind-flow-desc">Qualifies interest, offers time slots, confirms bookings, and sends reminder 24h before.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">🔁</div><div><div className="ind-flow-title">Follow-Up Sequence</div><div className="ind-flow-desc">30-day nurture sequence with project updates, offers, and re-engagement triggers.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">📊</div><div><div className="ind-flow-title">CRM Sync</div><div className="ind-flow-desc">Every lead automatically logged in your CRM with interest level, budget, and timeline.</div></div></div>
</div>
</div>
<div className="ind-content" id="ind-education">
<div className="ind-info">
<h3>Education &amp; Coaching Automation</h3>
<p>Coaching institutes and edtech companies lose thousands of admissions because enquiry follow-up is inconsistent. Our system ensures every student enquiry gets an instant reply with course details, fee structure, and a demo class booking — even at 11pm.</p>
<div className="ind-results">
<div className="ind-result"><div className="ind-result-val">55%</div><div className="ind-result-lbl">More demo class bookings with the same leads</div></div>
<div className="ind-result"><div className="ind-result-val">3×</div><div className="ind-result-lbl">Improvement in enquiry-to-admission conversion</div></div>
<div className="ind-result"><div className="ind-result-val">100%</div><div className="ind-result-lbl">Enquiry response rate achieved</div></div>
</div>
</div>
<div className="ind-flows">
<div className="ind-flow"><div className="ind-flow-icon">🎓</div><div><div className="ind-flow-title">Course Info Bot</div><div className="ind-flow-desc">Shares syllabus, fees, batch timing, and faculty profiles instantly for any course enquiry.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">📝</div><div><div className="ind-flow-title">Demo Class Booking</div><div className="ind-flow-desc">Books free demo sessions directly from WhatsApp with automatic Zoom link generation.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">💳</div><div><div className="ind-flow-title">Fee Reminder Flows</div><div className="ind-flow-desc">Automated fee reminder, scholarship deadline, and admission deadline nudges.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">🏆</div><div><div className="ind-flow-title">Result Announcement</div><div className="ind-flow-desc">Batch results and re-admission prompts sent automatically to students and parents.</div></div></div>
</div>
</div>
<div className="ind-content" id="ind-healthcare">
<div className="ind-info">
<h3>Healthcare &amp; Clinic Automation</h3>
<p>Clinics and hospitals lose appointments due to manual booking friction. Our HIPAA-aware automation handles appointment booking, pre-consultation intake, prescription reminders, and follow-up care — reducing no-shows and freeing reception staff.</p>
<div className="ind-results">
<div className="ind-result"><div className="ind-result-val">40%</div><div className="ind-result-lbl">Reduction in appointment no-shows</div></div>
<div className="ind-result"><div className="ind-result-val">60%</div><div className="ind-result-lbl">Less time spent by reception on calls</div></div>
<div className="ind-result"><div className="ind-result-val">24/7</div><div className="ind-result-lbl">Appointment booking availability</div></div>
</div>
</div>
<div className="ind-flows">
<div className="ind-flow"><div className="ind-flow-icon">🏥</div><div><div className="ind-flow-title">Appointment Booking Bot</div><div className="ind-flow-desc">Book OPD, specialist, or teleconsultation slots directly via WhatsApp chat.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">💊</div><div><div className="ind-flow-title">Prescription Reminders</div><div className="ind-flow-desc">Daily medication reminders and refill nudges sent automatically to patients.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">📋</div><div><div className="ind-flow-title">Pre-Consultation Intake</div><div className="ind-flow-desc">Collect symptoms, history, and documents before the appointment to save consultation time.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">⭐</div><div><div className="ind-flow-title">Post-Visit Follow-Up</div><div className="ind-flow-desc">Automated follow-up for feedback, review requests, and next-visit scheduling.</div></div></div>
</div>
</div>
<div className="ind-content" id="ind-ecommerce">
<div className="ind-info">
<h3>E-commerce &amp; Retail Automation</h3>
<p>E-commerce brands bleed revenue through abandoned carts, delayed order updates, and manual customer support. Our WhatsApp automation recovers abandoned carts, sends real-time order updates, and resolves 85% of support queries without human agents.</p>
<div className="ind-results">
<div className="ind-result"><div className="ind-result-val">28%</div><div className="ind-result-lbl">Abandoned cart recovery rate</div></div>
<div className="ind-result"><div className="ind-result-val">85%</div><div className="ind-result-lbl">Support queries resolved by bot</div></div>
<div className="ind-result"><div className="ind-result-val">4.2×</div><div className="ind-result-lbl">ROI on broadcast campaigns</div></div>
</div>
</div>
<div className="ind-flows">
<div className="ind-flow"><div className="ind-flow-icon">🛒</div><div><div className="ind-flow-title">Cart Recovery Flow</div><div className="ind-flow-desc">3-message sequence sent 1h, 24h, and 48h after cart abandonment with personalised offer.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">📦</div><div><div className="ind-flow-title">Order Status Updates</div><div className="ind-flow-desc">Real-time shipping updates, delivery confirmation, and return initiation via WhatsApp.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">📣</div><div><div className="ind-flow-title">Broadcast Campaigns</div><div className="ind-flow-desc">Festival, sale, and restock broadcasts to opted-in customers with rich media and CTA.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">⭐</div><div><div className="ind-flow-title">Review &amp; Re-order Bot</div><div className="ind-flow-desc">Post-delivery review request, loyalty point update, and repeat purchase nudge.</div></div></div>
</div>
</div>
<div className="ind-content" id="ind-b2b">
<div className="ind-info">
<h3>B2B Services &amp; SaaS Automation</h3>
<p>B2B companies have long sales cycles and complex qualification needs. Our chatbots handle initial discovery, share case studies and proposals, schedule demos, and keep warm leads engaged over weeks — without burning your sales team's time.</p>
<div className="ind-results">
<div className="ind-result"><div className="ind-result-val">2×</div><div className="ind-result-lbl">More demo calls booked per month</div></div>
<div className="ind-result"><div className="ind-result-val">65%</div><div className="ind-result-lbl">Reduction in time-to-first-meeting</div></div>
<div className="ind-result"><div className="ind-result-val">90%</div><div className="ind-result-lbl">Inbound leads responded within 2 minutes</div></div>
</div>
</div>
<div className="ind-flows">
<div className="ind-flow"><div className="ind-flow-icon">🤝</div><div><div className="ind-flow-title">Discovery &amp; Qualification Bot</div><div className="ind-flow-desc">Asks about company size, budget, timeline, and pain points to qualify before routing to sales.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">📑</div><div><div className="ind-flow-title">Proposal &amp; Case Study Delivery</div><div className="ind-flow-desc">Automatically sends relevant case studies, deck, and proposal PDF based on prospect profile.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">📅</div><div><div className="ind-flow-title">Demo Scheduler</div><div className="ind-flow-desc">Books product demo directly in WhatsApp and sends calendar invite + Zoom link automatically.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">♻️</div><div><div className="ind-flow-title">Long-Cycle Nurture</div><div className="ind-flow-desc">60-day multi-touch nurture sequence that keeps your brand top-of-mind until they're ready to buy.</div></div></div>
</div>
</div>
</div>
</section>
      <section className="features-section">
<div className="wrap">
<div className="sec-h rv">
<div className="pill pill-wa">Full Feature Set</div>
<h2>Everything You Need, Nothing You Don't</h2>
<p>Every automation we build includes these capabilities — no hidden extras, no surprise costs.</p>
</div>
<div className="features-grid">
<div className="feat-item rv"><div className="feat-icon">💬</div><div className="feat-body"><h4>Natural Language Understanding</h4><p>Bot understands freeform messages, not just button clicks. Handles typos, abbreviations, and mixed Hindi-English (Hinglish) naturally.</p></div></div>
<div className="feat-item rv2"><div className="feat-icon">🌐</div><div className="feat-body"><h4>Multi-language Support</h4><p>English, Hindi, Marathi, Tamil, Telugu, and more. Detects language automatically and responds in kind.</p></div></div>
<div className="feat-item rv"><div className="feat-icon">📊</div><div className="feat-body"><h4>Lead Scoring &amp; Routing</h4><p>Assigns scores based on answers, routes hot leads to your best closers and cold leads to nurture sequences automatically.</p></div></div>
<div className="feat-item rv2"><div className="feat-icon">🔔</div><div className="feat-body"><h4>Smart Follow-Up Sequences</h4><p>Time-based and behaviour-triggered follow-up messages that re-engage cold leads at exactly the right moment.</p></div></div>
<div className="feat-item rv"><div className="feat-icon">📁</div><div className="feat-body"><h4>Rich Media Messaging</h4><p>Send images, PDFs, videos, location maps, and product catalogues directly through WhatsApp in automated flows.</p></div></div>
<div className="feat-item rv2"><div className="feat-icon">🛡️</div><div className="feat-body"><h4>Official API — 100% Compliant</h4><p>We use only the official Meta WhatsApp Business API. No grey-market tools. No risk of account bans or data breaches.</p></div></div>
<div className="feat-item rv"><div className="feat-icon">📈</div><div className="feat-body"><h4>Analytics Dashboard</h4><p>Real-time visibility into message delivery, read rates, bot performance, lead conversion, and ROI — all in one dashboard.</p></div></div>
<div className="feat-item rv2"><div className="feat-icon">🔗</div><div className="feat-body"><h4>200+ App Integrations</h4><p>Connect WhatsApp to Google Sheets, Razorpay, Shopify, Calendly, Zoom, and 200+ other tools via n8n workflows.</p></div></div>
</div>
</div>
</section>
      <section>
<div className="wrap">
<div className="sec-h rv">
<div className="pill pill-b">Integration Stack</div>
<h2>Connects With Your Existing Tools</h2>
<p>No rip-and-replace. We build around the tools you already use.</p>
</div>
<div className="integrations-grid">
<div className="int-card rv"><div className="int-icon">🔄</div><div className="int-name">n8n</div><div className="int-desc">Workflow automation backbone</div></div>
<div className="int-card rv2"><div className="int-icon">🟠</div><div className="int-name">HubSpot</div><div className="int-desc">CRM sync &amp; pipeline</div></div>
<div className="int-card rv3"><div className="int-icon">🔵</div><div className="int-name">Zoho CRM</div><div className="int-desc">Lead management</div></div>
<div className="int-card rv"><div className="int-icon">📅</div><div className="int-name">Google Calendar</div><div className="int-desc">Appointment scheduling</div></div>
<div className="int-card rv2"><div className="int-icon">🟣</div><div className="int-name">Leadsquared</div><div className="int-desc">EdTech &amp; real estate CRM</div></div>
<div className="int-card rv3"><div className="int-icon">🛒</div><div className="int-name">Shopify</div><div className="int-desc">E-commerce orders</div></div>
<div className="int-card rv"><div className="int-icon">💳</div><div className="int-name">Razorpay</div><div className="int-desc">Payment confirmations</div></div>
<div className="int-card rv2"><div className="int-icon">📊</div><div className="int-name">Google Sheets</div><div className="int-desc">Lead logging &amp; reports</div></div>
</div>
</div>
</section>
      <section className="faq-section" id="faq">
<div className="wrap">
<div className="sec-h rv">
<div className="pill pill-wa">Common Questions</div>
<h2>Frequently Asked Questions</h2>
<p>Everything you need to know before getting started.</p>
</div>
<div className="faq-wrap-2col">
<div className="faq-col">
<div className="fi"><button className="fi-q">What is WhatsApp Business Automation?<span className="fi-icon">+</span></button><div className="fi-a">WhatsApp Business Automation uses the official WhatsApp Business API, AI chatbots, and workflow tools like n8n to automatically respond to leads, qualify prospects, send reminders, and book appointments — without any manual effort from your team.</div></div>
<div className="fi"><button className="fi-q">How fast can you set up WhatsApp automation?<span className="fi-icon">+</span></button><div className="fi-a">Basic WhatsApp Business API setup and auto-reply flows are live within 5–7 business days. Full chatbot and CRM integration typically takes 2–3 weeks depending on complexity and the number of flows required.</div></div>
<div className="fi"><button className="fi-q">Will my leads know they're talking to a bot?<span className="fi-icon">+</span></button><div className="fi-a">Our AI chatbots are trained to respond naturally and helpfully. You choose whether to disclose — many clients use a hybrid model where the bot handles initial queries and qualifications, and a human takes over for closing conversations.</div></div>
<div className="fi"><button className="fi-q">Is WhatsApp automation legal and compliant in India?<span className="fi-icon">+</span></button><div className="fi-a">Yes. We exclusively use the official WhatsApp Business API (not unofficial or grey-market tools), which is fully compliant with Meta's policies and Indian data protection regulations. Your business account is safe.</div></div>
</div>
<div className="faq-col">
<div className="fi"><button className="fi-q">Do you support multiple languages?<span className="fi-icon">+</span></button><div className="fi-a">Yes. Our bots support English, Hindi, and regional Indian languages including Marathi, Tamil, and Telugu. We train the bot on your specific tone, FAQs, product knowledge, and target audience language preferences.</div></div>
<div className="fi"><button className="fi-q">What CRMs do you integrate with?<span className="fi-icon">+</span></button><div className="fi-a">We integrate with HubSpot, Zoho CRM, Salesforce, Leadsquared, Freshsales, and most custom CRMs via API. We also support Google Sheets as a lightweight alternative for smaller teams.</div></div>
<div className="fi"><button className="fi-q">What happens if the bot can't answer a question?<span className="fi-icon">+</span></button><div className="fi-a">The bot is trained to recognise when a question is outside its knowledge base. It escalates to a human agent immediately, notifies your team via a dedicated WhatsApp group or CRM alert, and keeps the lead engaged in the meantime.</div></div>
<div className="fi"><button className="fi-q">Do you provide ongoing support after launch?<span className="fi-icon">+</span></button><div className="fi-a">Yes. All our automation packages include monthly optimisation, flow updates, and support. We also provide detailed monthly reports on bot performance, lead conversion, and ROI — so you always know the numbers.</div></div>
</div>
</div>
</div>
</section>
      <section className="wa-cta" id="contact">
<div className="wrap">
<div className="pill pill-wa" style={{ marginBottom: '20px', display: 'inline-flex' }}>💬 Free WhatsApp Audit</div>
<h2>Ready to Never Miss a Lead Again?</h2>
<p>Get a free 30-minute WhatsApp automation audit. We'll map your current lead flow, identify drop-off points, and show you exactly what automation can look like for your business — no commitment required.</p>
<div className="wa-cta-btns">
<a href="https://wa.me/919407000101?text=Hi!%20I'm%20interested%20in%20WhatsApp%20automation%20for%20my%20business." target="_blank" rel="noopener" className="btn btn-wa">💬 WhatsApp Us Now</a>
<a href="tel:+919407000101" className="btn btn-ghost">📞 Call +91 94070 00101</a>
</div>
<p style={{ fontSize: '13px', color: 'rgba(255,255,255,.3)', marginTop: '24px', position: 'relative', zIndex: '1' }}>✓ No commitment  ·  ✓ Free audit  ·  ✓ Live in 5–7 days</p>
</div>
</section>
      <PageScript id="services-whatsapp-automation-0" code={js0} />
    </>
  )
}
