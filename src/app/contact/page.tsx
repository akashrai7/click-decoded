/* eslint-disable */
// src/app/contact/page.tsx — generated from contact.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "Contact Click Decoded | Digital Agency Bhopal",
  description: "Contact Click Decoded — Bhopal's AI-powered digital agency. Reach us by phone, WhatsApp, email or visit our office at Amrit Complex, Raisen Road, Bhopal.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us — Click Decoded, Bhopal",
    description: "Talk to us about SEO, web development, Google Ads, or AI automation. We're based in Bhopal and serve businesses pan-India.",
    url: "/contact",
    type: "website",
  },
}

const css = `
:root{--n:#2A4573;--n2:#1e3460;--n-dark:#0f1e38;--b:#2A4573;--o:#EE7E1A;--o2:#d46e12;--w:#fff;--body:#1E293B;--m:#475569;--s:#64748b;--bg:#F4F7FC;--bdr:#E2E8F0;--gr:#25D366;--gr2:#1ebe59;}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}html{scroll-behavior:smooth;overflow-x:hidden;}body{font-family:'Inter',system-ui,sans-serif;color:var(--body);background:#fff;-webkit-font-smoothing:antialiased;}a{text-decoration:none;color:inherit;}img,svg{display:block;}ul{list-style:none;}button{font-family:inherit;cursor:pointer;}
.wrap{max-width:1200px;margin:0 auto;padding:0 28px;}section{padding:80px 0;}h1,h2,h3,h4{font-weight:800;line-height:1.1;letter-spacing:-.025em;color:var(--n);}
.pill{display:inline-flex;align-items:center;gap:7px;padding:6px 14px;border-radius:99px;font-size:11.5px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;}
.pill-o{background:rgba(238,126,26,.12);color:var(--o);}
.btn{display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:10px;font-weight:700;font-size:14px;border:none;transition:all .18s;white-space:nowrap;cursor:pointer;}
.btn-o{background:var(--o);color:#fff;box-shadow:0 4px 18px rgba(238,126,26,.3);}.btn-o:hover{background:var(--o2);transform:translateY(-2px);}
.btn-wa{background:var(--gr);color:#fff;box-shadow:0 4px 18px rgba(37,211,102,.25);}.btn-wa:hover{background:var(--gr2);transform:translateY(-2px);}
.btn-ghost{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.35);}.btn-ghost:hover{background:rgba(255,255,255,.08);}
/* NAV */
.topbar{background:var(--n-dark);padding:0;height:40px;display:flex;align-items:center;}
.topbar-inner{max-width:1200px;margin:0 auto;padding:0 28px;display:flex;justify-content:space-between;align-items:center;width:100%;}
.topbar-left{display:flex;gap:20px;}.topbar-left a{font-size:12px;color:rgba(255,255,255,.6);display:flex;align-items:center;gap:5px;}
.topbar-right{display:flex;gap:8px;}
.tb-btn{display:inline-flex;align-items:center;gap:6px;padding:5px 12px;border-radius:6px;font-size:11.5px;font-weight:700;transition:.15s;}
.tb-call{background:rgba(238,126,26,.15);color:var(--o);border:1px solid rgba(238,126,26,.25);}.tb-wa{background:rgba(37,211,102,.15);color:#25D366;border:1px solid rgba(37,211,102,.25);}
.tb-call:hover{background:var(--o);color:#fff;}.tb-wa:hover{background:#25D366;color:#fff;}
#hdr{background:rgba(255,255,255,.97);backdrop-filter:blur(14px);border-bottom:1px solid var(--bdr);transition:box-shadow .2s;}#hdr.up{box-shadow:0 4px 32px rgba(13,27,42,.09);}
.nav{display:flex;align-items:center;justify-content:space-between;height:70px;gap:16px;}
.dmenu{display:flex;align-items:center;gap:2px;}.dmenu>li{position:relative;}
.dmenu>li>a{display:flex;align-items:center;gap:5px;padding:9px 12px;font-size:13.5px;font-weight:600;color:var(--n);border-radius:8px;transition:.15s;}.dmenu>li>a:hover{background:var(--bg);color:var(--b);}
.dcar{width:10px;height:10px;opacity:.5;transition:transform .18s;flex-shrink:0;}.dmenu>li:hover .dcar{transform:rotate(180deg);}
.mega{position:absolute;top:calc(100% + 10px);left:50%;transform:translateX(-50%) translateY(10px);background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:26px;box-shadow:0 24px 64px rgba(13,27,42,.14);opacity:0;visibility:hidden;pointer-events:none;transition:opacity .18s,transform .18s;}
.mega.wide{width:940px;display:grid;grid-template-columns:repeat(5,1fr);gap:22px;}.mega.slim{width:296px;left:auto;right:0;transform:translateY(10px);}
.dmenu>li:hover .mega{opacity:1;visibility:visible;pointer-events:all;transform:translateX(-50%) translateY(0);}.dmenu>li:hover .mega.slim{transform:translateY(0);}
.dmenu>li::after{content:'';position:absolute;top:100%;left:-40px;right:-40px;height:14px;}
.mc h5{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--b);margin-bottom:11px;}
.mc a{display:block;position:relative;padding:5px 0 5px 11px;font-size:13px;font-weight:500;color:var(--body);transition:color .14s,padding-left .14s;}
.mc a::before{content:'';position:absolute;left:0;top:50%;transform:translateY(-50%);width:2px;height:0;border-radius:1px;background:var(--o);transition:height .15s cubic-bezier(.22,1,.36,1);}
.mc a:hover{color:var(--o);padding-left:14px;}.mc a:hover::before{height:13px;}
.mega.slim a{display:block;position:relative;padding:9px 36px 9px 12px;font-size:13px;font-weight:500;color:var(--body);border-radius:8px;transition:.15s;}.mega.slim a:hover{background:var(--bg);color:var(--o);}
.mega.slim a small{display:block;font-size:11px;color:var(--s);font-weight:400;margin-top:1px;}
.navcta{display:flex;align-items:center;gap:10px;}
.hb{background:none;border:none;display:none;flex-direction:column;gap:5px;padding:4px;}.hb span{display:block;width:22px;height:2px;background:var(--n);border-radius:1px;transition:.2s;}
.mnav{display:none;position:fixed;inset:0;background:#fff;z-index:200;overflow-y:auto;padding:24px 22px 40px;}.mnav.on{display:block;}
.ma{border-bottom:1px solid var(--bdr);}.ma>button{width:100%;text-align:left;background:none;border:none;padding:15px 0;font-size:15px;font-weight:600;color:var(--n);display:flex;justify-content:space-between;}
.ms{display:none;padding:0 0 16px;}.ma.on .ms{display:block;}.ms a{display:block;padding:7px 0;font-size:14px;color:var(--m);}.ms h6{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--b);margin:12px 0 4px;}
/* BREADCRUMB */
.breadcrumb{background:var(--bg);padding:12px 0;border-bottom:1px solid var(--bdr);}
.bc-list{display:flex;align-items:center;gap:8px;font-size:12.5px;color:var(--s);list-style:none;}.bc-list a{color:var(--n);font-weight:500;}.bc-list a:hover{color:var(--o);}
/* HERO */
.hero{background:linear-gradient(155deg,#0a1628 0%,#0f1e38 55%,#07111f 100%);padding:80px 0 72px;position:relative;overflow:hidden;}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 50% 60% at 75% 40%,rgba(238,126,26,.07),transparent 65%),radial-gradient(ellipse 35% 45% at 10% 70%,rgba(42,69,115,.2),transparent 65%);}
.hero-inner{position:relative;z-index:2;text-align:center;max-width:720px;margin:0 auto;}
.hero-badge{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;background:rgba(238,126,26,.12);border:1px solid rgba(238,126,26,.25);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:var(--o);margin-bottom:22px;}
.hero h1{font-size:52px;color:#fff;line-height:1.05;letter-spacing:-.04em;margin-bottom:18px;}.hero h1 em{font-style:normal;color:var(--o);}
.hero-desc{font-size:17px;color:rgba(255,255,255,.6);line-height:1.7;margin-bottom:36px;max-width:560px;margin-left:auto;margin-right:auto;}
.hero-channels{display:flex;justify-content:center;gap:12px;flex-wrap:wrap;}
.hc-chip{display:flex;align-items:center;gap:8px;padding:10px 18px;border-radius:12px;font-size:13px;font-weight:600;border:1px solid;transition:.18s;}
.hc-chip.wa{background:rgba(37,211,102,.1);border-color:rgba(37,211,102,.25);color:#25D366;animation:chip-wa-glow 2.5s ease-in-out infinite;}
.hc-chip.ph{background:rgba(238,126,26,.1);border-color:rgba(238,126,26,.25);color:var(--o);}
.hc-chip.em{background:rgba(255,255,255,.05);border-color:rgba(255,255,255,.12);color:rgba(255,255,255,.7);}
.hc-chip.vi{background:rgba(255,255,255,.05);border-color:rgba(255,255,255,.12);color:rgba(255,255,255,.7);}
.hc-chip:hover{transform:translateY(-2px);border-color:rgba(255,255,255,.3);}
@keyframes chip-wa-glow{0%,100%{box-shadow:0 0 0 0 rgba(37,211,102,.25);}50%{box-shadow:0 0 12px 3px rgba(37,211,102,.12);}}
/* MAIN CONTACT SECTION */
.contact-section{padding:80px 0;background:#fff;}
.contact-grid{display:grid;grid-template-columns:1fr 420px;gap:48px;align-items:start;}
/* FORM */
.form-card{background:#fff;border:1px solid var(--bdr);border-radius:24px;padding:40px 36px;box-shadow:0 8px 48px rgba(13,27,42,.06);}
.form-card h2{font-size:28px;margin-bottom:8px;}
.form-card .sub{font-size:15px;color:var(--m);margin-bottom:32px;line-height:1.6;}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px;}
.form-group{margin-bottom:16px;}
.form-group label{display:block;font-size:13px;font-weight:600;color:var(--n);margin-bottom:7px;}
.form-group label span{color:var(--o);}
.form-group input,.form-group select,.form-group textarea{width:100%;padding:12px 16px;border:1.5px solid var(--bdr);border-radius:10px;font-size:14px;font-family:'Inter',sans-serif;color:var(--body);background:#fff;transition:.18s;outline:none;}
.form-group input:focus,.form-group select:focus,.form-group textarea:focus{border-color:var(--o);box-shadow:0 0 0 3px rgba(238,126,26,.08);}
.form-group input::placeholder,.form-group textarea::placeholder{color:#94a3b8;}
.form-group select{appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2394a3b8' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 14px center;padding-right:36px;cursor:pointer;}
.form-group textarea{resize:vertical;min-height:110px;line-height:1.6;}
/* PHONE ROW — custom flag picker */
.phone-row{display:flex;position:relative;}
.phone-trigger{display:flex;align-items:center;gap:7px;padding:0 12px;height:48px;background:#f8fafc;border:1.5px solid var(--bdr);border-right:none;border-radius:10px 0 0 10px;cursor:pointer;white-space:nowrap;font-size:13.5px;font-weight:600;color:var(--n);transition:.18s;flex-shrink:0;user-select:none;}
.phone-trigger:hover{background:#eef2f8;}
.phone-trigger img{width:22px;height:15px;border-radius:2px;object-fit:cover;}
.phone-trigger svg{opacity:.45;margin-left:2px;}
.phone-row input[type=tel]{border-radius:0 10px 10px 0;border:1.5px solid var(--bdr);flex:1;padding:12px 16px;font-size:14px;font-family:'Inter',sans-serif;color:var(--body);outline:none;transition:.18s;}
.phone-row input[type=tel]:focus{border-color:var(--o);box-shadow:0 0 0 3px rgba(238,126,26,.08);}
.phone-row.open .phone-trigger{border-color:var(--o);background:#fff;}
/* Dropdown */
.phone-drop{display:none;position:absolute;top:calc(100% + 6px);left:0;width:300px;background:#fff;border:1.5px solid var(--bdr);border-radius:14px;box-shadow:0 16px 48px rgba(13,27,42,.13);z-index:999;overflow:hidden;}
.phone-row.open .phone-drop{display:block;}
.phone-drop-search{display:flex;align-items:center;gap:8px;padding:10px 14px;border-bottom:1.5px solid var(--bdr);}
.phone-drop-search input{border:none;outline:none;font-size:13px;font-family:'Inter',sans-serif;color:var(--body);width:100%;background:transparent;}
.phone-drop-search input::placeholder{color:#94a3b8;}
.phone-drop-list{max-height:220px;overflow-y:auto;padding:6px;}
.phone-opt{display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:8px;cursor:pointer;transition:.12s;}
.phone-opt:hover,.phone-opt.selected{background:var(--bg);}
.phone-opt img{width:22px;height:15px;border-radius:2px;object-fit:cover;flex-shrink:0;}
.phone-opt-name{font-size:13px;color:var(--body);flex:1;}
.phone-opt-code{font-size:12px;font-weight:600;color:var(--s);}
#phone-dial-hidden{display:none;}
.form-submit{width:100%;padding:15px;background:var(--o);color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:700;cursor:pointer;transition:.18s;display:flex;align-items:center;justify-content:center;gap:9px;margin-top:8px;}
.form-submit:hover{background:var(--o2);transform:translateY(-2px);box-shadow:0 8px 28px rgba(238,126,26,.3);}
.form-note{text-align:center;font-size:12px;color:var(--s);margin-top:14px;line-height:1.6;}
/* CAPTCHA */
.captcha-row{display:flex;align-items:center;gap:12px;padding:12px 16px;background:#f8fafc;border:1.5px solid var(--bdr);border-radius:10px;margin-bottom:8px;}
.captcha-q{font-size:14px;font-weight:700;color:var(--n);flex:1;}
.captcha-input{width:80px;padding:8px 12px;border:1.5px solid var(--bdr);border-radius:8px;font-size:15px;font-weight:700;text-align:center;outline:none;transition:.18s;font-family:'Inter',sans-serif;background:#fff;}
.captcha-input:focus{border-color:var(--o);box-shadow:0 0 0 3px rgba(238,126,26,.08);}
.captcha-refresh{background:none;border:none;cursor:pointer;padding:6px;border-radius:6px;color:var(--s);transition:.15s;flex-shrink:0;}
.captcha-refresh:hover{color:var(--o);background:rgba(238,126,26,.08);}
/* SUCCESS STATE */
.form-success{display:none;text-align:center;padding:48px 24px 36px;}
.fs-anim{position:relative;width:84px;height:84px;margin:0 auto 20px;}
.fs-ring{position:absolute;inset:0;border-radius:50%;border:3px solid #10b981;animation:fs-ring-pop .5s cubic-bezier(.34,1.56,.64,1) forwards;}
.fs-check-svg{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;}
@keyframes fs-ring-pop{0%{transform:scale(0);opacity:0;}60%{transform:scale(1.12);}100%{transform:scale(1);opacity:1;}}
@keyframes fs-check-draw{0%{stroke-dashoffset:40;}100%{stroke-dashoffset:0;}}
.fs-badge{display:inline-block;background:rgba(16,185,129,.1);color:#059669;border:1px solid rgba(16,185,129,.25);border-radius:100px;padding:5px 16px;font-size:12px;font-weight:700;letter-spacing:.5px;margin-bottom:14px;text-transform:uppercase;}
.form-success h3{font-size:24px;font-weight:800;color:var(--n);margin-bottom:8px;line-height:1.2;}
.fs-sub{font-size:14px;color:var(--m);line-height:1.75;max-width:380px;margin:0 auto 24px;}
.fs-steps{display:flex;flex-direction:column;gap:10px;margin:0 auto 24px;text-align:left;background:#f8fafc;border:1px solid #e8edf3;border-radius:14px;padding:16px 18px;max-width:380px;}
.fs-step{display:flex;align-items:center;gap:12px;font-size:13px;color:var(--m);font-weight:500;}
.fs-step-num{min-width:24px;height:24px;border-radius:50%;background:linear-gradient(135deg,var(--o),var(--o2));color:#fff;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.fs-wa{display:inline-flex;align-items:center;gap:8px;background:#25d366;color:#fff;padding:12px 24px;border-radius:12px;font-size:13px;font-weight:700;text-decoration:none;transition:.18s;box-shadow:0 4px 14px rgba(37,211,102,.25);}
.fs-wa:hover{background:#20ba5a;transform:translateY(-2px);box-shadow:0 6px 20px rgba(37,211,102,.35);}
/* SIDEBAR */
.contact-sidebar{display:flex;flex-direction:column;gap:16px;}
/* Quick contact cards */
.qc-card{background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:22px 20px;transition:.18s;}
.qc-card:hover{border-color:rgba(238,126,26,.25);box-shadow:0 8px 28px rgba(238,126,26,.07);}
.qc-header{display:flex;align-items:center;gap:12px;margin-bottom:10px;}
.qc-icon{width:40px;height:40px;border-radius:11px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;}
.qc-icon.wa-icon{background:rgba(37,211,102,.1);border:1px solid rgba(37,211,102,.2);}
.qc-icon.ph-icon{background:rgba(238,126,26,.1);border:1px solid rgba(238,126,26,.2);}
.qc-icon.em-icon{background:rgba(42,69,115,.1);border:1px solid rgba(42,69,115,.15);}
.qc-icon.lo-icon{background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.15);}
.qc-label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--s);}
.qc-val{font-size:15px;font-weight:700;color:var(--n);line-height:1.3;}
.qc-sub{font-size:12px;color:var(--s);margin-top:2px;}
.qc-btn{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:10px;border-radius:10px;font-size:13px;font-weight:700;margin-top:12px;transition:.18s;border:none;cursor:pointer;}
.qc-btn.wa-btn{background:rgba(37,211,102,.1);color:#16a34a;border:1px solid rgba(37,211,102,.2);}.qc-btn.wa-btn:hover{background:var(--gr);color:#fff;}
.qc-btn.ph-btn{background:rgba(238,126,26,.1);color:var(--o);border:1px solid rgba(238,126,26,.2);}.qc-btn.ph-btn:hover{background:var(--o);color:#fff;}
.qc-btn.em-btn{background:rgba(42,69,115,.08);color:var(--n);border:1px solid rgba(42,69,115,.15);}.qc-btn.em-btn:hover{background:var(--n);color:#fff;}
/* Address card */
.addr-card{background:var(--bg);border:1px solid var(--bdr);border-radius:18px;padding:22px 20px;}
.addr-lines{font-size:14px;color:var(--m);line-height:1.8;margin:10px 0 14px;}
.addr-lines strong{color:var(--n);display:block;font-size:15px;margin-bottom:4px;}
.addr-map-btn{display:flex;align-items:center;gap:7px;font-size:13px;font-weight:700;color:var(--o);padding:9px 14px;background:rgba(238,126,26,.08);border:1px solid rgba(238,126,26,.2);border-radius:9px;transition:.18s;width:fit-content;}
.addr-map-btn:hover{background:var(--o);color:#fff;}
/* Hours card */
.hours-card{background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:22px 20px;}
.hours-row{display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--bdr);font-size:13.5px;}
.hours-row:last-child{border:none;}
.hours-day{color:var(--m);font-weight:500;}.hours-time{color:var(--n);font-weight:700;}
.hours-badge{font-size:10.5px;font-weight:700;padding:3px 8px;border-radius:5px;}
.open{background:rgba(37,211,102,.1);color:#16a34a;}.closed{background:rgba(239,68,68,.08);color:#dc2626;}
/* WHAT HAPPENS NEXT CARD */
.whn-card{background:#fff;border:1px solid var(--bdr);border-radius:20px;padding:28px 28px 20px;}
.whn-header{display:flex;align-items:center;gap:14px;margin-bottom:20px;padding-bottom:16px;border-bottom:1px solid var(--bdr);}
.whn-icon{width:40px;height:40px;border-radius:12px;background:rgba(238,126,26,.08);border:1px solid rgba(238,126,26,.15);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;}
.whn-title{font-size:15px;font-weight:800;color:var(--n);}
.whn-sub{font-size:12px;color:var(--s);margin-top:2px;}
.whn-steps{display:flex;flex-direction:column;gap:14px;margin-bottom:18px;}
.whn-step{display:flex;align-items:flex-start;gap:14px;}
.whn-num{width:28px;height:28px;border-radius:8px;background:rgba(238,126,26,.1);color:#EE7E1A;font-size:11px;font-weight:900;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;letter-spacing:-.02em;}
.whn-step-title{font-size:13.5px;font-weight:700;color:var(--n);margin-bottom:3px;}
.whn-step-desc{font-size:12.5px;color:var(--m);line-height:1.55;}
.whn-footer{display:flex;flex-wrap:wrap;gap:8px;padding-top:14px;border-top:1px solid var(--bdr);}
.whn-badge{font-size:11px;font-weight:600;padding:4px 10px;border-radius:20px;background:var(--bg);color:var(--m);border:1px solid var(--bdr);}

/* ICON ANIMATIONS */
@keyframes wa-pulse{0%,100%{box-shadow:0 0 0 0 rgba(37,211,102,.45);}65%{box-shadow:0 0 0 10px rgba(37,211,102,0);}}
@keyframes blink-dot{0%,100%{opacity:1;transform:scale(1);}50%{opacity:.4;transform:scale(.8);}}
@keyframes ph-ring{0%,88%,100%{transform:rotate(0) scale(1);}91%{transform:rotate(14deg) scale(1.1);}94%{transform:rotate(-14deg) scale(1.1);}97%{transform:rotate(8deg) scale(1.05);}99%{transform:rotate(-4deg) scale(1);}}
@keyframes em-float{0%,100%{transform:translateY(0) rotate(0deg);}30%{transform:translateY(-5px) rotate(-6deg);}60%{transform:translateY(-3px) rotate(4deg);}}
@keyframes pin-drop{0%,100%{transform:translateY(0) scale(1);}25%{transform:translateY(-8px) scale(1.15);}50%{transform:translateY(-2px) scale(.95);}70%{transform:translateY(-5px) scale(1.08);}85%{transform:translateY(-1px) scale(.98);}}
@keyframes pin-shadow{0%,100%{opacity:.5;transform:scaleX(1);}25%{opacity:.15;transform:scaleX(.6);}50%{opacity:.4;transform:scaleX(.85);}}

.wa-icon{position:relative;animation:wa-pulse 2s cubic-bezier(.4,0,.6,1) infinite;}
.wa-icon::after{content:'';position:absolute;top:-3px;right:-3px;width:11px;height:11px;border-radius:50%;background:#25D366;border:2.5px solid #fff;animation:blink-dot 1.8s ease-in-out infinite;}
.ph-icon{animation:ph-ring 3.5s ease-in-out infinite;transform-origin:center;}
.em-icon{animation:em-float 3s ease-in-out infinite;transform-origin:center;}
.lo-icon{position:relative;animation:pin-drop 3.8s ease-in-out infinite;transform-origin:bottom center;}
.lo-icon::after{content:'';position:absolute;bottom:-6px;left:50%;transform:translateX(-50%);width:14px;height:4px;border-radius:50%;background:rgba(239,68,68,.2);animation:pin-shadow 3.8s ease-in-out infinite;}

/* MAP SECTION */
.map-section{padding:0 0 80px;}
.map-wrap{border-radius:20px;overflow:hidden;border:1px solid var(--bdr);box-shadow:0 8px 40px rgba(13,27,42,.07);}
.map-wrap iframe{width:100%;height:420px;display:block;border:none;filter:grayscale(15%);}
/* TRUST STRIP */
.trust-strip{background:var(--bg);border-top:1px solid var(--bdr);border-bottom:1px solid var(--bdr);padding:40px 0;}
.trust-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;text-align:center;}
.trust-item h4{font-size:28px;color:var(--o);letter-spacing:-.03em;margin-bottom:5px;}
.trust-item p{font-size:13px;color:var(--m);}
/* FOOTER */
footer{background:var(--n-dark);padding:64px 0 0;}
.fg{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:40px;}
.fb-desc{font-size:13.5px;color:rgba(255,255,255,.4);line-height:1.7;margin:16px 0 20px;}
.socials{display:flex;gap:10px;}
.socials a{width:34px;height:34px;border-radius:8px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:rgba(255,255,255,.5);transition:.15s;}
.socials a:hover{background:var(--o);color:#fff;border-color:var(--o);}
footer h4{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.35);margin-bottom:16px;}
.fl{display:flex;flex-direction:column;gap:8px;}.fl a,.fc a{font-size:13.5px;color:rgba(255,255,255,.5);transition:.15s;}.fl a:hover,.fc a:hover{color:#fff;}
.fc{display:flex;flex-direction:column;gap:10px;}
.footer-main{padding-bottom:40px;}
.footer-bottom{border-top:1px solid rgba(255,255,255,.07);padding:20px 0;display:flex;justify-content:space-between;align-items:center;font-size:12px;color:rgba(255,255,255,.3);flex-wrap:wrap;gap:8px;}
.footer-areas{padding:20px 0;border-top:1px solid rgba(255,255,255,.06);font-size:12px;color:rgba(255,255,255,.25);display:flex;gap:8px;flex-wrap:wrap;align-items:center;}
.footer-areas b{color:rgba(255,255,255,.4);}.footer-areas a{color:rgba(255,255,255,.25);transition:.15s;}.footer-areas a:hover{color:rgba(255,255,255,.6);}
/* RESPONSIVE */
@media(max-width:960px){.contact-grid{grid-template-columns:1fr;}.form-card{padding:28px 22px;}.trust-grid{grid-template-columns:repeat(2,1fr);}}
@media(max-width:900px){.fg{grid-template-columns:1fr 1fr;}}
@media(max-width:600px){.form-row{grid-template-columns:1fr;}.hero h1{font-size:36px;}.trust-grid{grid-template-columns:1fr 1fr;}.hb{display:flex;}.dmenu{display:none;}}
`

const ld0 = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "#business",
      "name": "Click Decoded",
      "legalName": "Aharnish Infotech Private Limited",
      "image": "https://www.clickdecoded.com/images/clickdecoded.png",
      "url": "https://www.clickdecoded.com",
      "telephone": "+91-94070-00101",
      "email": "hello@clickdecoded.com",
      "foundingDate": "2020",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "minValue": 10,
        "maxValue": 25
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2nd Floor, Amrit Complex, Raisen Road",
        "addressLocality": "Bhopal",
        "addressRegion": "Madhya Pradesh",
        "postalCode": "462023",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 23.2529061,
        "longitude": 77.438125
      },
      "hasMap": "https://maps.app.goo.gl/rA663kbDQhtpiwo26",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "10:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Saturday"
          ],
          "opens": "10:00",
          "closes": "17:00"
        }
      ],
      "priceRange": "₹₹",
      "description": "AI-powered B2B digital agency offering SEO, web development, Google Ads, Meta Ads, and AI Automation services from Bhopal, India. Serving businesses pan-India since 2020.",
      "areaServed": [
        {
          "@type": "State",
          "name": "Madhya Pradesh"
        },
        {
          "@type": "State",
          "name": "Maharashtra"
        },
        {
          "@type": "State",
          "name": "Delhi"
        },
        {
          "@type": "State",
          "name": "Gujarat"
        },
        {
          "@type": "State",
          "name": "Rajasthan"
        },
        {
          "@type": "Country",
          "name": "India"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Marketing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Google Ads Management"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Automation"
            }
          }
        ]
      },
      "sameAs": [
        "https://wa.me/919407000101"
      ]
    },
    {
      "@type": "ContactPage",
      "@id": "https://www.clickdecoded.com/contact",
      "name": "Contact Click Decoded",
      "url": "https://www.clickdecoded.com/contact",
      "description": "Contact Click Decoded — reach us by phone, WhatsApp, email, or visit our office at 2nd Floor, Amrit Complex, Raisen Road, Bhopal.",
      "breadcrumb": {
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
            "name": "Contact",
            "item": "https://www.clickdecoded.com/contact"
          }
        ]
      }
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
          "name": "Contact Click Decoded",
          "item": "https://www.clickdecoded.com/contact"
        }
      ]
    }
  ]
}`

const js0 = `(function(){
/* Header shadow on scroll */
const hdr=document.getElementById('hdr');if(hdr)window.addEventListener('scroll',()=>hdr.classList.toggle('up',scrollY>40),{passive:true});

/* ── Live Analog Clock (IST) ── */
(function(){
  function updateClock(){
    const ist=new Date(new Date().toLocaleString('en-US',{timeZone:'Asia/Kolkata'}));
    const hh=ist.getHours()%12, mm=ist.getMinutes(), ss=ist.getSeconds();
    const hDeg=(hh*30)+(mm*0.5);
    const mDeg=mm*6;
    const sDeg=ss*6;
    const ch=document.getElementById('clk-h');
    const cm=document.getElementById('clk-m');
    const cs=document.getElementById('clk-s');
    if(ch) ch.setAttribute('transform','rotate('+hDeg+',22,22)');
    if(cm) cm.setAttribute('transform','rotate('+mDeg+',22,22)');
    if(cs) cs.setAttribute('transform','rotate('+sDeg+',22,22)');
  }
  updateClock();
  setInterval(updateClock,1000);
})();

/* ── Live Open / Closed Indicator ── */
(function(){
  try {
    /* Reliable IST detection via Intl.DateTimeFormat */
    const now  = new Date();
    const parts = new Intl.DateTimeFormat('en-US',{
      timeZone:'Asia/Kolkata',
      weekday:'short', hour:'numeric', minute:'numeric', hour12:false
    }).formatToParts(now);
    const get  = t => parts.find(p => p.type === t).value;
    const dMap = {Sun:0,Mon:1,Tue:2,Wed:3,Thu:4,Fri:5,Sat:6};
    const day  = dMap[get('weekday')];
    const h    = parseInt(get('hour'),10);
    const m    = parseInt(get('minute'),10);
    const mins = h * 60 + m;

    let isOpen  = false;
    let nextOpen = '';

    if(day >= 1 && day <= 5){           // Mon–Fri
      isOpen   = mins >= 600 && mins < 1140;  // 10:00–19:00
      nextOpen = day === 5 ? 'Saturday at 10:00 AM' : 'tomorrow at 10:00 AM';
    } else if(day === 6){               // Saturday
      isOpen   = mins >= 600 && mins < 1020;  // 10:00–17:00
      nextOpen = 'Monday at 10:00 AM';
    } else {                            // Sunday
      isOpen   = false;
      nextOpen = 'Monday at 10:00 AM';
    }

    /* Weekend window: Sat after 5PM → all Sunday → Mon before 10AM */
    const isWeekendWindow = (day === 6 && !isOpen) || day === 0 || (day === 1 && mins < 600);

    const pill   = document.getElementById('live-status');
    const banner = document.getElementById('live-banner');
    if(!pill || !banner) return;

    if(isOpen){
      pill.style.cssText   += "background:rgba(16,185,129,.12);color:#059669;border:1px solid rgba(16,185,129,.2);";
      pill.innerHTML        = '<span style="width:8px;height:8px;border-radius:50%;background:#10b981;display:inline-block;animation:pulse-g 1.6s ease-in-out infinite;margin-right:4px;"></span>We\\'re Open';
      banner.style.cssText += "background:rgba(16,185,129,.07);border:1px solid rgba(16,185,129,.18);color:#065f46;";
      banner.innerHTML      = "🟢 <strong>We're in the office right now.</strong> Expect a reply within a few hours — or ping us on WhatsApp for instant response.";
    } else if(isWeekendWindow){
      pill.style.cssText   += "background:rgba(99,102,241,.08);color:#6366f1;border:1px solid rgba(99,102,241,.18);";
      pill.innerHTML        = '<span style="width:8px;height:8px;border-radius:50%;background:#6366f1;display:inline-block;animation:pulse-g 1.6s ease-in-out infinite;margin-right:4px;"></span>Bots Active';
      banner.style.cssText += "background:rgba(99,102,241,.05);border:1px solid rgba(99,102,241,.15);color:#3730a3;";
      banner.innerHTML      = "🤖 <strong>The humans are resting — but our AI never stops.</strong> Your message is being logged, your website is being crawled, and your competitors are being watched. Back Monday 10 AM with fresh insights. Drop a message anyway — it gets seen first.";
    } else {
      pill.style.cssText   += "background:rgba(245,158,11,.08);color:#d97706;border:1px solid rgba(245,158,11,.18);";
      pill.innerHTML        = '<span style="width:8px;height:8px;border-radius:50%;background:#f59e0b;display:inline-block;animation:pulse-g 1.6s ease-in-out infinite;margin-right:4px;"></span>Bots on Duty';
      banner.style.cssText += "background:rgba(245,158,11,.05);border:1px solid rgba(245,158,11,.15);color:#92400e;";
      banner.innerHTML      = "🤖 <strong>We're off for the day — but our bots are regularly doing the heavy lifting.</strong> Drop a message or WhatsApp us. We'll pick it up first thing " + nextOpen + " with your brief already prepped.";
    }

    if(!document.getElementById('pulse-style')){
      const s = document.createElement('style');
      s.id = 'pulse-style';
      s.textContent = '@keyframes pulse-g{0%,100%{box-shadow:0 0 0 0 rgba(16,185,129,.4);}50%{box-shadow:0 0 0 5px rgba(16,185,129,0);}}';
      document.head.appendChild(s);
    }
  } catch(e){ console.warn('Live status error:',e); }
})();

/* ── Form Submit Handler ── */
const form=document.getElementById('contact-form');
const successBox=document.getElementById('form-success');
const submitBtn=form?form.querySelector('.form-submit'):null;

if(form){
  form.addEventListener('submit',async function(e){
    e.preventDefault();

    const name=form.name.value.trim();
    const email=form.email.value.trim();
    const dialEl=document.getElementById('phone-dial-hidden');
    const phoneVal=((dialEl?dialEl.value:'+91')+' '+form.phone.value.trim()).trim();
    const service=form.service.value;

    // Client-side validation
    if(!name||!email||!service){
      const firstEmpty=[...form.querySelectorAll('input[required],select[required]')].find(el=>!el.value.trim());
      if(firstEmpty){firstEmpty.focus();firstEmpty.style.borderColor='#ef4444';setTimeout(()=>firstEmpty.style.borderColor='',2500);}
      return;
    }

    // CAPTCHA check
    const captchaAns=parseInt(document.getElementById('contact-captcha-ans').value);
    const captchaExp=window.__getContactCaptcha?window.__getContactCaptcha():null;
    if(!captchaAns||captchaAns!==captchaExp){
      const ci=document.getElementById('contact-captcha-ans');
      ci.style.borderColor='#ef4444';ci.focus();
      setTimeout(()=>ci.style.borderColor='',2500);
      let eb=document.getElementById('form-error-msg');
      if(!eb){eb=document.createElement('p');eb.id='form-error-msg';eb.style.cssText='margin-top:12px;padding:12px 16px;background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.2);border-radius:10px;font-size:13px;color:#dc2626;text-align:center;';form.appendChild(eb);}
      eb.textContent='⚠ Incorrect answer. Please solve the quick check.';
      return;
    }

    // Loading state
    if(submitBtn){
      submitBtn.disabled=true;
      submitBtn.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="animation:spin .8s linear infinite"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg> Sending…';
    }
    if(!document.getElementById('spin-style')){
      const s=document.createElement('style');
      s.id='spin-style';
      s.textContent='@keyframes spin{to{transform:rotate(360deg)}}';
      document.head.appendChild(s);
    }

    try {
      const payload={
        name,
        email,
        phone: phoneVal,
        company: (form.company?form.company.value.trim():''),
        service,
        budget: (form.budget?form.budget.value:''),
        message: (form.message?form.message.value.trim():''),
      };

      const res=await fetch('/api/contact',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(payload),
      });

      const data=await res.json();

      if(res.ok && data.success){
        form.style.display='none';
        successBox.style.display='block';
      } else {
        throw new Error(data.error||'Something went wrong.');
      }
    } catch(err){
      // Show inline error
      let errBox=document.getElementById('form-error-msg');
      if(!errBox){
        errBox=document.createElement('p');
        errBox.id='form-error-msg';
        errBox.style.cssText='margin-top:12px;padding:12px 16px;background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.2);border-radius:10px;font-size:13px;color:#dc2626;text-align:center;';
        form.appendChild(errBox);
      }
      errBox.textContent='⚠ '+(err.message||'Failed to send. Please WhatsApp us at +91 94070 00101.');
      // Reset button
      if(submitBtn){
        submitBtn.disabled=false;
        submitBtn.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Send Message — We\\'ll Reply in 24 Hours';
      }
    }
  });

  form.querySelectorAll('input,select').forEach(el=>el.addEventListener('input',()=>{el.style.borderColor='';const eb=document.getElementById('form-error-msg');if(eb)eb.remove();}));
}

/* ── Contact CAPTCHA ── */
(function(){
  var ans=0;
  function newQ(){
    var a=Math.floor(Math.random()*12)+1,b=Math.floor(Math.random()*12)+1;
    ans=a+b;
    var q=document.getElementById('contact-captcha-q');
    if(q)q.textContent='What is '+a+' + '+b+' ?';
    var inp=document.getElementById('contact-captcha-ans');
    if(inp)inp.value='';
  }
  newQ();
  var btn=document.getElementById('contact-captcha-refresh');
  if(btn)btn.addEventListener('click',newQ);
  window.__getContactCaptcha=function(){return ans;};
})();

/* ── Phone Flag Picker ── */
(function(){
  const COUNTRIES=[
    {code:'in',dial:'+91',name:'India'},
    {code:'us',dial:'+1',name:'United States'},
    {code:'gb',dial:'+44',name:'United Kingdom'},
    {code:'ae',dial:'+971',name:'UAE'},
    {code:'sg',dial:'+65',name:'Singapore'},
    {code:'au',dial:'+61',name:'Australia'},
    {code:'ca',dial:'+1',name:'Canada'},
    {code:'my',dial:'+60',name:'Malaysia'},
    {code:'nz',dial:'+64',name:'New Zealand'},
    {code:'de',dial:'+49',name:'Germany'},
    {code:'fr',dial:'+33',name:'France'},
    {code:'it',dial:'+39',name:'Italy'},
    {code:'es',dial:'+34',name:'Spain'},
    {code:'nl',dial:'+31',name:'Netherlands'},
    {code:'sa',dial:'+966',name:'Saudi Arabia'},
    {code:'qa',dial:'+974',name:'Qatar'},
    {code:'om',dial:'+968',name:'Oman'},
    {code:'bh',dial:'+973',name:'Bahrain'},
    {code:'kw',dial:'+965',name:'Kuwait'},
    {code:'pk',dial:'+92',name:'Pakistan'},
    {code:'bd',dial:'+880',name:'Bangladesh'},
    {code:'lk',dial:'+94',name:'Sri Lanka'},
    {code:'np',dial:'+977',name:'Nepal'},
    {code:'za',dial:'+27',name:'South Africa'},
    {code:'ng',dial:'+234',name:'Nigeria'},
    {code:'ke',dial:'+254',name:'Kenya'},
    {code:'br',dial:'+55',name:'Brazil'},
    {code:'mx',dial:'+52',name:'Mexico'},
    {code:'jp',dial:'+81',name:'Japan'},
    {code:'kr',dial:'+82',name:'South Korea'},
    {code:'cn',dial:'+86',name:'China'}
  ];

  const row=document.getElementById('phone-row');
  const trigger=document.getElementById('phone-trigger');
  const flag=document.getElementById('phone-flag');
  const codeDisplay=document.getElementById('phone-code-display');
  const dialHidden=document.getElementById('phone-dial-hidden');
  const drop=document.getElementById('phone-drop');
  const list=document.getElementById('phone-drop-list');
  const search=document.getElementById('phone-search');
  if(!trigger||!list)return;

  function flagUrl(code){return 'https://flagcdn.com/24x18/'+code+'.png';}

  function renderList(filter){
    const q=(filter||'').toLowerCase();
    list.innerHTML='';
    COUNTRIES.filter(c=>!q||c.name.toLowerCase().includes(q)||c.dial.includes(q)).forEach(c=>{
      const el=document.createElement('div');
      el.className='phone-opt'+(c.code==='in'?' selected':'');
      el.setAttribute('role','option');
      el.innerHTML='<img src="'+flagUrl(c.code)+'" alt="'+c.name+'" loading="lazy"><span class="phone-opt-name">'+c.name+'</span><span class="phone-opt-code">'+c.dial+'</span>';
      el.addEventListener('click',function(){
        flag.src=flagUrl(c.code);
        codeDisplay.textContent=c.dial;
        dialHidden.value=c.dial;
        drop.style.display='none';
        list.querySelectorAll('.phone-opt').forEach(o=>o.classList.remove('selected'));
        el.classList.add('selected');
      });
      list.appendChild(el);
    });
  }

  renderList();

  trigger.addEventListener('click',function(e){
    e.stopPropagation();
    const open=drop.style.display==='block';
    drop.style.display=open?'none':'block';
    if(!open){search.value='';renderList();search.focus();}
  });

  search.addEventListener('input',function(){renderList(this.value);});

  document.addEventListener('click',function(e){
    if(!row.contains(e.target)) drop.style.display='none';
  });
})();
})();`

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld0 }} />
      <nav className="breadcrumb"><div className="wrap"><ol className="bc-list"><li><a href="/">Home</a></li><li>›</li><li>Contact Us</li></ol></div></nav>
      <section className="hero">
<div className="wrap">
<div className="hero-inner">
<div className="hero-badge">📍 Based in Bhopal, Serving Pan-India</div>
<h1>Let's Talk About<br />Your <em>Growth.</em></h1>
<p className="hero-desc">Whether you need SEO, web development, Google Ads, or AI automation — tell us what you're working on. We'll come back with a clear plan, not a sales pitch.</p>
<div className="hero-channels">
<a href="https://wa.me/919407000101?text=Hi Click Decoded, I'd like to discuss a project" target="_blank" rel="noopener" className="hc-chip wa">💬 WhatsApp Us</a>
<a href="tel:+919407000101" className="hc-chip ph">📞 +91 94070 00101</a>
<a href="mailto:hello@clickdecoded.com" className="hc-chip em">✉ hello@clickdecoded.com</a>
<a href="#map" className="hc-chip vi">📍 Bhopal Office</a>
</div>
</div>
</div>
</section>
      <div className="trust-strip"><div className="wrap"><div className="trust-grid">
<div className="trust-item"><h4>12+</h4><p>Years in business</p></div>
<div className="trust-item"><h4>500+</h4><p>Projects delivered</p></div>
<div className="trust-item"><h4>24h</h4><p>Typical response time</p></div>
<div className="trust-item"><h4>Free</h4><p>First strategy call</p></div>
</div></div></div>
      <section className="contact-section">
<div className="wrap">
<div className="contact-grid">

<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
<div className="form-card" id="contact-form-wrap">
<h2>Send Us a Message</h2>
<p className="sub">Fill in the details below and we'll get back to you within 24 hours. For urgent queries, WhatsApp is fastest.</p>
<form id="contact-form" noValidate>
<div className="form-row">
<div className="form-group">
<label>Your Name <span>*</span></label>
<input type="text" name="name" placeholder="Rahul Sharma" required />
</div>
<div className="form-group">
<label>Company / Brand</label>
<input type="text" name="company" placeholder="Acme Pvt. Ltd." />
</div>
</div>
<div className="form-row">
<div className="form-group">
<label>Email Address <span>*</span></label>
<input type="email" name="email" placeholder="rahul@company.com" required />
</div>
<div className="form-group">
<label>Phone / WhatsApp <span>*</span></label>
<div className="phone-row" id="phone-row">
<button type="button" className="phone-trigger" id="phone-trigger" aria-haspopup="listbox">
<img id="phone-flag" src="https://flagcdn.com/24x18/in.png" alt="India" />
<span id="phone-code-display">+91</span>
<svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" /></svg>
</button>
<div className="phone-drop" id="phone-drop" role="listbox">
<div className="phone-drop-search">
<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="5" stroke="#94a3b8" strokeWidth="1.4" /><path d="M10 10l3 3" stroke="#94a3b8" strokeWidth="1.4" strokeLinecap="round" /></svg>
<input type="text" id="phone-search" placeholder="Search country..." autoComplete="off" />
</div>
<div className="phone-drop-list" id="phone-drop-list"></div>
</div>
<input type="hidden" id="phone-dial-hidden" name="phone-dial" value="+91" />
<input type="tel" id="phone-input" name="phone" placeholder="98765 00000" required />
</div>
</div>
</div>
<div className="form-group">
<label>Service You're Interested In <span>*</span></label>
<select name="service" required defaultValue="">
<option value="" disabled>— Select a service —</option>
<option>SEO Services</option>
<option>Google Ads / PPC</option>
<option>Meta Ads (Facebook / Instagram)</option>
<option>Web Development</option>
<option>E-Commerce Development</option>
<option>AI Automation / n8n Workflows</option>
<option>AI Chatbot Development</option>
<option>WhatsApp Automation</option>
<option>White Label Services</option>
<option>GEO / AI Search Visibility</option>
<option>Full Digital Growth Package</option>
<option>Other / Not Sure Yet</option>
</select>
</div>
<div className="form-group">
<label>Monthly Budget Range</label>
<select name="budget" defaultValue="">
<option value="" disabled>— Select your budget —</option>
<option>Under ₹10,000/month</option>
<option>₹10,000 – ₹25,000/month</option>
<option>₹25,000 – ₹50,000/month</option>
<option>₹50,000 – ₹1,00,000/month</option>
<option>Above ₹1,00,000/month</option>
<option>One-time project</option>
</select>
</div>
<div className="form-group">
<label>Tell Us About Your Project</label>
<textarea name="message" placeholder="Describe your business, current challenges, goals, or anything else that helps us understand what you need..."></textarea>
</div>
<div className="form-group">
<label>Quick Check <span style={{ color: 'var(--o)' }}>*</span></label>
<div className="captcha-row">
<span className="captcha-q" id="contact-captcha-q">Loading...</span>
<input type="number" className="captcha-input" id="contact-captcha-ans" placeholder="?" required min="0" max="99" />
<button type="button" className="captcha-refresh" id="contact-captcha-refresh" title="New question">
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M23 4v6h-6" /><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" /></svg>
</button>
</div>
</div>
<button type="submit" className="form-submit">
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
            Send Message — We'll Reply in 24 Hours
          </button>
<p className="form-note">🔒 Your information is private and will never be shared with third parties.</p>
</form>
<div className="form-success" id="form-success">
<div className="fs-anim">
<div className="fs-ring"></div>
<div className="fs-check-svg">
<svg width="36" height="36" viewBox="0 0 36 36" fill="none">
<path d="M9 18l6 6 12-12" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="40" strokeDashoffset="40" style={{ animation: 'fs-check-draw .4s .35s ease forwards' }} />
</svg>
</div>
</div>
<div className="fs-badge">🎯 Message received</div>
<h3>We've got your details!<br />Talk soon.</h3>
<p className="fs-sub">A confirmation is on its way to your inbox. Our team will personally review your project and respond within 24 hours — usually much sooner.</p>
<div className="fs-steps">
<div className="fs-step"><div className="fs-step-num">1</div> Confirmation email sent to your inbox</div>
<div className="fs-step"><div className="fs-step-num">2</div> Our team reviews your project brief</div>
<div className="fs-step"><div className="fs-step-num">3</div> You hear from us within 24 hours</div>
</div>
<a href="https://wa.me/919407000101?text=Hi%2C+I+just+submitted+a+form+on+clickdecoded.com" className="fs-wa" target="_blank" rel="noopener">
<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            Need it urgent? WhatsApp us now
          </a>
</div>
</div>

<div className="whn-card">
<div className="whn-header">
<div className="whn-icon">✉️</div>
<div>
<div className="whn-title">After You Hit Send</div>
<div className="whn-sub">Here's exactly what happens — no mystery, no chasing</div>
</div>
</div>
<div className="whn-steps">
<div className="whn-step">
<div className="whn-num">01</div>
<div className="whn-content">
<div className="whn-step-title">We actually read it</div>
<div className="whn-step-desc">Not a bot, not a template reply. A real person reads your message and understands what you're trying to achieve.</div>
</div>
</div>
<div className="whn-step">
<div className="whn-num">02</div>
<div className="whn-content">
<div className="whn-step-title">We research you first</div>
<div className="whn-step-desc">Before we reply, we look at your website, competitors, and current search presence so we come prepared with insights.</div>
</div>
</div>
<div className="whn-step">
<div className="whn-num">03</div>
<div className="whn-content">
<div className="whn-step-title">You get a real response</div>
<div className="whn-step-desc">We reply with actual thoughts on your situation — not a generic pitch deck or a pushy "let's get on a call" email.</div>
</div>
</div>
</div>
<div className="whn-footer">
<span className="whn-badge">🔒 Never shared</span>
<span className="whn-badge">⚡ Usually within a few hours</span>
<span className="whn-badge">🚫 No spam, ever</span>
</div>
</div>
</div>

<div className="contact-sidebar">

<div className="qc-card">
<div className="qc-header">
<div className="qc-icon wa-icon">💬</div>
<div><div className="qc-label">Fastest Response</div><div className="qc-val">WhatsApp</div></div>
</div>
<div className="qc-sub" style={{ fontSize: '13px', color: 'var(--m)', lineHeight: '1.6', marginBottom: '4px' }}>Chat with us directly on WhatsApp. Usually responds in under 5 minutes during working hours.</div>
<a href="https://wa.me/919407000101?text=Hi Click Decoded, I'd like to discuss a project" target="_blank" rel="noopener" className="qc-btn wa-btn">
<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            Chat on WhatsApp Now
          </a>
</div>

<div className="qc-card">
<div className="qc-header">
<div className="qc-icon ph-icon">📞</div>
<div><div className="qc-label">Call Us</div><div className="qc-val">+91 94070 00101</div></div>
</div>
<div className="qc-sub" style={{ fontSize: '13px', color: 'var(--m)', marginBottom: '4px' }}>Available Mon–Fri 10am–7pm, Sat 10am–5pm IST.</div>
<a href="tel:+919407000101" className="qc-btn ph-btn">📞 Call Now</a>
</div>

<div className="qc-card">
<div className="qc-header">
<div className="qc-icon em-icon">✉</div>
<div><div className="qc-label">Email Us</div><div className="qc-val">hello@clickdecoded.com</div></div>
</div>
<div className="qc-sub" style={{ fontSize: '13px', color: 'var(--m)', marginBottom: '4px' }}>For detailed project briefs, proposals, or partnership enquiries.</div>
<a href="mailto:hello@clickdecoded.com?subject=Project Enquiry — Click Decoded" className="qc-btn em-btn">✉ Send an Email</a>
</div>

<div className="addr-card">
<div className="qc-header">
<div className="qc-icon lo-icon">📍</div>
<div><div className="qc-label">Come Have a Coffee With Us ☕</div><div className="qc-val">Bhopal, M.P.</div></div>
</div>
<div className="addr-lines">
<strong>Click Decoded (Aharnish Infotech Pvt. Ltd.)</strong>
            2nd Floor, Amrit Complex,<br />
            Raisen Road, Bhopal,<br />
            Madhya Pradesh — 462023<br />
            INDIA
          </div>
<a href="https://maps.app.goo.gl/rA663kbDQhtpiwo26" target="_blank" rel="noopener" className="addr-map-btn">
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
            Open in Google Maps
          </a>
</div>

<div className="hours-card">
<div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
<div className="qc-icon" style={{ background: 'rgba(42,69,115,.08)', border: '1px solid rgba(42,69,115,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
<svg id="analog-clock" viewBox="0 0 44 44" width="28" height="28" style={{ display: 'block' }}>

<circle cx="22" cy="22" r="20" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />

<g stroke="#94a3b8" strokeWidth="1.2">
<line x1="22" y1="4" x2="22" y2="8" />
<line x1="22" y1="36" x2="22" y2="40" />
<line x1="4" y1="22" x2="8" y2="22" />
<line x1="36" y1="22" x2="40" y2="22" />
</g>

<line id="clk-h" x1="22" y1="22" x2="22" y2="12" stroke="#2A4573" strokeWidth="2.5" strokeLinecap="round" />

<line id="clk-m" x1="22" y1="22" x2="22" y2="8" stroke="#2A4573" strokeWidth="1.8" strokeLinecap="round" />

<line id="clk-s" x1="22" y1="24" x2="22" y2="7" stroke="#EE7E1A" strokeWidth="1" strokeLinecap="round" />

<circle cx="22" cy="22" r="2.2" fill="#2A4573" />
<circle cx="22" cy="22" r="1" fill="#fff" />
</svg>
</div>
<div style={{ flex: '1' }}>
<div style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--s)' }}>Working Hours</div>
<div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--n)' }}>IST (India Time)</div>
</div>

<div id="live-status" style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '5px 12px', borderRadius: '99px', fontSize: '12px', fontWeight: '700' }}></div>
</div>

<div id="live-banner" style={{ marginBottom: '14px', padding: '11px 14px', borderRadius: '10px', fontSize: '13px', fontWeight: '600', lineHeight: '1.5' }}></div>
<div className="hours-row"><span className="hours-day">Monday – Friday</span><span className="hours-time">10:00 AM – 7:00 PM</span></div>
<div className="hours-row"><span className="hours-day">Saturday</span><span className="hours-time">10:00 AM – 5:00 PM</span></div>
<div className="hours-row"><span className="hours-day">Sunday</span><span className="hours-time" style={{ color: 'var(--s)' }}>We rest ☕</span></div>
<div style={{ marginTop: '12px', fontSize: '12px', color: 'var(--s)', lineHeight: '1.6' }}>WhatsApp messages sent outside hours are seen first thing the next working day.</div>
</div>
</div>
</div>
</div>
</section>
      <div className="map-section" id="map">
<div className="wrap">
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '28px' }}>
<div>
<h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--n)', marginBottom: '6px' }}>Find Us in Bhopal</h2>
<p style={{ fontSize: '14px', color: 'var(--m)' }}>2nd Floor, Amrit Complex, Raisen Road, Bhopal — 462023</p>
</div>
<a href="https://maps.app.goo.gl/rA663kbDQhtpiwo26" target="_blank" rel="noopener" className="btn btn-o" style={{ fontSize: '13px', padding: '10px 20px' }}>Open in Google Maps →</a>
</div>
<div className="map-wrap">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.8!2d77.438125!3d23.2529061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43c768511b41%3A0x465c80e10d36522e!2sCLICK%20Decoded%20%3A%20SEO%2C%20Digital%20Marketing%2C%20Social%20Media%20Handling%2C%20Graphics%20Designing%2C%20Content%20Creation!5e0!3m2!1sen!2sin!4v1750000000000!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Click Decoded Office — Amrit Complex, Raisen Road, Bhopal">
</iframe>
</div>
</div>
</div>
      <section style={{ background: 'var(--bg)', padding: '72px 0' }}>
<div className="wrap">
<div style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto 44px' }}>
<div className="pill pill-o" style={{ marginBottom: '12px' }}>📍 Where We Work</div>
<h2 style={{ fontSize: '32px', marginBottom: '14px' }}>Serving Businesses Across India</h2>
<p style={{ fontSize: '15px', color: 'var(--m)', lineHeight: '1.65' }}>We're based in Bhopal, but our clients are everywhere. We work 100% remotely with businesses across India — weekly calls, shared dashboards, and real results wherever you are.</p>
</div>
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '12px', marginBottom: '32px' }}>
<div style={{ background: '#fff', border: '1px solid var(--bdr)', borderRadius: '14px', padding: '18px 16px' }}>
<div style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--o)', marginBottom: '10px' }}>Madhya Pradesh</div>
<div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
<span style={{ fontSize: '13px', color: 'var(--body)', fontWeight: '500' }}>📍 Bhopal</span>
<span style={{ fontSize: '13px', color: 'var(--m)' }}>Indore</span>
<span style={{ fontSize: '13px', color: 'var(--m)' }}>Jabalpur</span>
<span style={{ fontSize: '13px', color: 'var(--m)' }}>Gwalior</span>
<span style={{ fontSize: '13px', color: 'var(--m)' }}>Ujjain</span>
<span style={{ fontSize: '13px', color: 'var(--m)' }}>Sagar</span>
</div>
</div>
<div style={{ background: '#fff', border: '1px solid var(--bdr)', borderRadius: '14px', padding: '18px 16px' }}>
<div style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--o)', marginBottom: '10px' }}>North India</div>
<div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
<span style={{ fontSize: '13px', color: 'var(--body)', fontWeight: '500' }}>Delhi NCR</span>
<span style={{ fontSize: '13px', color: 'var(--m)' }}>Noida</span>
<span style={{ fontSize: '13px', color: 'var(--m)' }}>Gurgaon</span>
<span style={{ fontSize: '13px', color: 'var(--m)' }}>Jaipur</span>
<span style={{ fontSize: '13px', color: 'var(--m)' }}>Lucknow</span>
<span style={{ fontSize: '13px', color: 'var(--m)' }}>Chandigarh</span>
</div>
</div>
<div style={{ background: '#fff', border: '1px solid var(--bdr)', borderRadius: '14px', padding: '18px 16px' }}>
<div style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--o)', marginBottom: '10px' }}>West India</div>
<div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
<span style={{ fontSize: '13px', color: 'var(--body)', fontWeight: '500' }}>Mumbai</span>
<span style={{ fontSize: '13px', color: 'var(--m)' }}>Pune</span>
<span style={{ fontSize: '13px', color: 'var(--m)' }}>Ahmedabad</span>
<span style={{ fontSize: '13px', color: 'var(--m)' }}>Surat</span>
<span style={{ fontSize: '13px', color: 'var(--m)' }}>Nagpur</span>
<span style={{ fontSize: '13px', color: 'var(--m)' }}>Nashik</span>
</div>
</div>
<div style={{ background: '#fff', border: '1px solid var(--bdr)', borderRadius: '14px', padding: '18px 16px' }}>
<div style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--o)', marginBottom: '10px' }}>South &amp; East</div>
<div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
<span style={{ fontSize: '13px', color: 'var(--body)', fontWeight: '500' }}>Bangalore</span>
<span style={{ fontSize: '13px', color: 'var(--m)' }}>Hyderabad</span>
<span style={{ fontSize: '13px', color: 'var(--m)' }}>Chennai</span>
<span style={{ fontSize: '13px', color: 'var(--m)' }}>Kolkata</span>
<span style={{ fontSize: '13px', color: 'var(--m)' }}>Kochi</span>
<span style={{ fontSize: '13px', color: 'var(--m)' }}>Coimbatore</span>
</div>
</div>
</div>
<div style={{ textAlign: 'center', padding: '16px 20px', background: '#fff', border: '1px solid var(--bdr)', borderRadius: '12px', fontSize: '14px', color: 'var(--m)' }}>
      🌐 Also serving <strong style={{ color: 'var(--n)' }}>international clients</strong> — USA, UAE, UK, Canada, Australia (remote-first workflow)
    </div>
</div>
</section>
      <section style={{ background: '#fff', padding: '72px 0', borderTop: '1px solid var(--bdr)' }}>
<div className="wrap">
<div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 44px' }}>
<div className="pill pill-o" style={{ marginBottom: '12px' }}>🏢 About the Company</div>
<h2 style={{ fontSize: '28px', marginBottom: '14px' }}>Registered, Verified, and Accountable</h2>
<p style={{ fontSize: '15px', color: 'var(--m)', lineHeight: '1.65' }}>We're not a freelancer or a pop-up agency. Click Decoded is an incorporated company with a registered office, GST number, and a full-time team.</p>
</div>
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '16px' }}>
<div style={{ textAlign: 'center', padding: '28px 20px', background: 'var(--bg)', border: '1px solid var(--bdr)', borderRadius: '16px' }}>
<div style={{ fontSize: '32px', marginBottom: '10px' }}>🏛️</div>
<div style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--s)', marginBottom: '6px' }}>Legal Entity</div>
<div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--n)', lineHeight: '1.4' }}>Aharnish Infotech<br />Private Limited</div>
</div>
<div style={{ textAlign: 'center', padding: '28px 20px', background: 'var(--bg)', border: '1px solid var(--bdr)', borderRadius: '16px' }}>
<div style={{ fontSize: '32px', marginBottom: '10px' }}>📋</div>
<div style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--s)', marginBottom: '6px' }}>GST Registered</div>
<div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--n)' }}>GSTIN Verified</div>
<div style={{ fontSize: '12px', color: 'var(--m)', marginTop: '4px' }}>Madhya Pradesh</div>
</div>
<div style={{ textAlign: 'center', padding: '28px 20px', background: 'var(--bg)', border: '1px solid var(--bdr)', borderRadius: '16px' }}>
<div style={{ fontSize: '32px', marginBottom: '10px' }}>📅</div>
<div style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--s)', marginBottom: '6px' }}>Founded</div>
<div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--n)' }}>Est. 2020</div>
<div style={{ fontSize: '12px', color: 'var(--m)', marginTop: '4px' }}>5+ years in business</div>
</div>
<div style={{ textAlign: 'center', padding: '28px 20px', background: 'var(--bg)', border: '1px solid var(--bdr)', borderRadius: '16px' }}>
<div style={{ fontSize: '32px', marginBottom: '10px' }}>👥</div>
<div style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--s)', marginBottom: '6px' }}>Team Size</div>
<div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--n)' }}>15–20 Members</div>
<div style={{ fontSize: '12px', color: 'var(--m)', marginTop: '4px' }}>Full-time in-house</div>
</div>
</div>
</div>
</section>
      <PageScript id="contact-0" code={js0} />
    </>
  )
}
