/* eslint-disable */
// src/app/industries/restaurants/page.tsx — generated from industry-restaurants.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "Digital Marketing for Restaurants & Food Businesses India",
  description: "More footfall, online orders, and brand awareness for restaurants, cafes, cloud kitchens, and food brands in India. Click Decoded drives diners and.",
  alternates: { canonical: "/industries/restaurants" },
}

const css = `
:root{--n:#2A4573;--n2:#1e3460;--n-dark:#0f1e38;--o:#EE7E1A;--o2:#d46e12;--body:#1E293B;--m:#475569;--s:#64748b;--bg:#F4F7FC;--bdr:#E2E8F0;--gr:#25D366;--ac:#FF9800;--ac-rgb:255,152,0;}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;overflow-x:hidden;}
body{font-family:'Inter',system-ui,sans-serif;color:var(--body);background:#fff;-webkit-font-smoothing:antialiased;}
a{text-decoration:none;color:inherit;}img,svg{display:block;}ul{list-style:none;}button{font-family:inherit;cursor:pointer;}
.wrap{max-width:1200px;margin:0 auto;padding:0 28px;}
section{padding:80px 0;}
h1,h2,h3,h4{font-weight:800;line-height:1.1;letter-spacing:-.025em;color:var(--n);}
.btn{display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:10px;font-weight:700;font-size:14px;border:none;transition:all .18s;white-space:nowrap;cursor:pointer;}
.btn-o{background:var(--o);color:#fff;box-shadow:0 4px 18px rgba(238,126,26,.3);}.btn-o:hover{background:var(--o2);transform:translateY(-2px);}
.btn-ac{background:var(--ac);color:#fff;}.btn-ac:hover{opacity:.9;transform:translateY(-2px);}
.btn-ghost{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.35);}.btn-ghost:hover{background:rgba(255,255,255,.08);}
.btn-sm{padding:10px 20px;font-size:13px;}
.btn-wa{background:var(--gr);color:#fff;}.btn-wa:hover{background:#1ebe59;transform:translateY(-2px);}
.topbar{background:var(--n-dark);height:40px;display:flex;align-items:center;}
.topbar-inner{max-width:1200px;margin:0 auto;padding:0 28px;display:flex;justify-content:space-between;align-items:center;width:100%;}
.topbar-left{display:flex;gap:20px;}.topbar-left a{font-size:12px;color:rgba(255,255,255,.6);display:flex;align-items:center;gap:5px;}
.topbar-right{display:flex;gap:8px;}
.tb-btn{display:inline-flex;align-items:center;gap:6px;padding:5px 12px;border-radius:6px;font-size:11.5px;font-weight:700;transition:.15s;}
.tb-call{background:rgba(238,126,26,.15);color:var(--o);border:1px solid rgba(238,126,26,.25);}.tb-wa{background:rgba(37,211,102,.15);color:#25D366;border:1px solid rgba(37,211,102,.25);}
.tb-call:hover{background:var(--o);color:#fff;}.tb-wa:hover{background:#25D366;color:#fff;}
#hdr{background:rgba(255,255,255,.97);backdrop-filter:blur(14px);border-bottom:1px solid var(--bdr);transition:box-shadow .2s;}
#hdr.up{box-shadow:0 4px 32px rgba(13,27,42,.09);}
.nav{display:flex;align-items:center;justify-content:space-between;height:70px;gap:16px;}
.btn-n{background:var(--n);color:#fff;}.btn-n:hover{background:var(--n2);transform:translateY(-2px);}
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
/* HERO */
.hero{background:linear-gradient(155deg,#0f1e38 0%,#162847 55%,#0f1e38 100%);padding:88px 0 80px;position:relative;overflow:hidden;}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 60% at 70% 30%,rgba(255,152,0,.18) 0%,transparent 65%),radial-gradient(ellipse 35% 40% at 5% 80%,rgba(255,152,0,.07) 0%,transparent 60%);pointer-events:none;}
.hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;position:relative;z-index:2;}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 16px;background:rgba(255,152,0,.12);border:1px solid rgba(255,152,0,.3);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#ffcc80;margin-bottom:20px;}
.hero h1{font-size:clamp(28px,3.8vw,48px);font-weight:900;color:#fff;line-height:1.06;letter-spacing:-.03em;margin-bottom:20px;}
.hero h1 em{font-style:normal;background:linear-gradient(135deg,#ffcc80,#FF9800);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-desc{font-size:17px;color:rgba(255,255,255,.62);line-height:1.7;margin-bottom:32px;max-width:460px;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:36px;}
.rst-mock{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:20px;overflow:hidden;backdrop-filter:blur(10px);}
.rst-mock-header{background:rgba(255,255,255,.05);border-bottom:1px solid rgba(255,255,255,.08);padding:14px 18px;display:flex;align-items:center;justify-content:space-between;}
.rst-mock-title{font-size:12px;font-weight:700;color:rgba(255,255,255,.7);letter-spacing:.04em;}
.rst-live{display:flex;align-items:center;gap:6px;font-size:11px;color:#FF9800;font-weight:600;}
.rst-live::before{content:'';width:7px;height:7px;border-radius:50%;background:#FF9800;box-shadow:0 0 0 3px rgba(255,152,0,.2);animation:rstpulse 2s infinite;}
@keyframes rstpulse{0%,100%{box-shadow:0 0 0 3px rgba(255,152,0,.2);}50%{box-shadow:0 0 0 6px rgba(255,152,0,.05);}}
.rst-kpis{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:rgba(255,255,255,.06);}
.rst-kpi{background:#0f1e38;padding:16px 18px;}
.rst-kpi-label{font-size:10.5px;font-weight:600;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:.08em;margin-bottom:6px;}
.rst-kpi-val{font-size:22px;font-weight:900;color:#fff;letter-spacing:-.02em;line-height:1;}
.rst-kpi-val.orange{color:#FF9800;}
.rst-kpi-delta{font-size:11px;margin-top:4px;font-weight:600;}
.rst-kpi-delta.up{color:#4caf50;}
.rst-rows{padding:16px 18px;border-top:1px solid rgba(255,255,255,.06);}
.rst-rows-label{font-size:10.5px;font-weight:600;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px;}
.rst-row{display:flex;align-items:center;justify-content:space-between;padding:6px 0;border-bottom:1px solid rgba(255,255,255,.05);font-size:12px;}
.rst-row:last-child{border-bottom:none;}
.rst-row-name{color:rgba(255,255,255,.6);}
.rst-row-val{color:#ffcc80;font-weight:700;}
.rst-bottom{padding:14px 18px;background:rgba(255,152,0,.06);border-top:1px solid rgba(255,152,0,.1);display:flex;align-items:center;justify-content:space-between;}
.rst-bottom-label{font-size:12px;color:rgba(255,255,255,.5);font-weight:500;}
.rst-bottom-val{font-size:16px;font-weight:800;color:#FF9800;}
.hero-proof{display:flex;gap:16px;flex-wrap:wrap;}
.proof-item{font-size:12.5px;color:rgba(255,255,255,.45);font-weight:500;display:flex;align-items:center;gap:5px;}
.proof-item strong{color:rgba(255,255,255,.8);}
.form-box{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:28px;backdrop-filter:blur(10px);}
.form-box h3{font-size:17px;color:#fff;margin-bottom:6px;}
.form-box p{font-size:13px;color:rgba(255,255,255,.5);margin-bottom:20px;}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
.fg-item{display:flex;flex-direction:column;gap:6px;}
.fg-item label{font-size:12px;font-weight:600;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.06em;}
.fg-item input,.fg-item select,.fg-item textarea{padding:11px 14px;background:rgba(255,255,255,.07);border:1.5px solid rgba(255,255,255,.1);border-radius:10px;font-size:13.5px;color:#fff;font-family:'Inter',sans-serif;transition:.18s;outline:none;}
.fg-item input::placeholder,.fg-item textarea::placeholder{color:rgba(255,255,255,.3);}
.fg-item input:focus,.fg-item select:focus{border-color:var(--ac);background:rgba(255,255,255,.1);}
.fg-item select option{background:#1e3460;color:#fff;}
.fg-full{grid-column:span 2;}
.form-submit{width:100%;padding:14px;background:var(--ac);color:#fff;border:none;border-radius:10px;font-size:14px;font-weight:700;cursor:pointer;transition:.18s;margin-top:8px;}
.form-submit:hover{opacity:.9;transform:translateY(-1px);}
.form-note{font-size:11px;color:rgba(255,255,255,.3);text-align:center;margin-top:10px;}
/* RESULTS STRIP */
.results-strip{background:var(--n);padding:36px 0;}
.res-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;}
.res-stat{text-align:center;padding:0 20px;border-right:1px solid rgba(255,255,255,.1);}
.res-stat:last-child{border-right:none;}
.res-num{font-size:36px;font-weight:900;color:var(--ac);letter-spacing:-.03em;}
.res-lbl{font-size:12px;color:rgba(255,255,255,.5);margin-top:4px;text-transform:uppercase;letter-spacing:.08em;}
/* PAIN POINTS */
.pain-section{background:var(--bg);}
.pain-section h2{font-size:clamp(26px,3vw,38px);text-align:center;margin-bottom:12px;}
.pain-sub{text-align:center;color:var(--m);font-size:16px;max-width:560px;margin:0 auto 48px;line-height:1.6;}
.pain-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
.pain-card{background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:28px;}
.pain-icon{font-size:32px;margin-bottom:14px;}
.pain-card h3{font-size:16px;margin-bottom:8px;color:var(--n);}
.pain-card p{font-size:13.5px;color:var(--m);line-height:1.6;}
/* SERVICES */
.services-section{}
.services-section h2{font-size:clamp(26px,3vw,38px);text-align:center;margin-bottom:12px;}
.svc-sub{text-align:center;color:var(--m);font-size:16px;max-width:520px;margin:0 auto 48px;line-height:1.6;}
.svc-grid{display:flex;flex-wrap:wrap;gap:14px;justify-content:center;max-width:900px;margin:0 auto;}
.svc-pill a{display:inline-flex;align-items:center;gap:8px;padding:12px 20px;border-radius:12px;border:1.5px solid var(--bdr);font-size:14px;font-weight:600;color:var(--n);background:#fff;transition:.18s;}
.svc-pill a:hover{border-color:var(--ac);color:var(--ac);background:rgba(var(--ac-rgb),.04);transform:translateY(-2px);box-shadow:0 6px 20px rgba(var(--ac-rgb),.1);}
/* WHY US */
.why-section{background:var(--bg);}
.why-section h2{font-size:clamp(26px,3vw,38px);text-align:center;margin-bottom:12px;}
.why-sub{text-align:center;color:var(--m);font-size:16px;max-width:520px;margin:0 auto 48px;line-height:1.6;}
.why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
.why-card{background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:28px;transition:.2s;}
.why-card:hover{box-shadow:0 12px 40px rgba(var(--ac-rgb),.1);transform:translateY(-3px);}
.why-num{font-size:40px;font-weight:900;color:rgba(var(--ac-rgb),.15);letter-spacing:-.04em;margin-bottom:10px;}
.why-card h3{font-size:16px;margin-bottom:8px;}
.why-card p{font-size:13.5px;color:var(--m);line-height:1.6;}
/* FAQ */
.faq-section{}
.faq-section h2{font-size:clamp(26px,3vw,38px);text-align:center;margin-bottom:48px;}
.faq-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;max-width:960px;margin:0 auto;}
.faq-item{background:#fff;border:1px solid var(--bdr);border-radius:14px;overflow:hidden;}
.faq-q{width:100%;background:none;border:none;padding:18px 20px;text-align:left;font-size:14px;font-weight:600;color:var(--n);display:flex;justify-content:space-between;align-items:center;gap:12px;cursor:pointer;transition:.15s;}
.faq-q:hover{color:var(--ac);}
.faq-q svg{flex-shrink:0;transition:transform .2s;color:var(--s);}
.faq-item.open .faq-q svg{transform:rotate(180deg);color:var(--ac);}
.faq-a{display:none;padding:0 20px 18px;font-size:13.5px;color:var(--m);line-height:1.7;}
.faq-item.open .faq-a{display:block;}
.related-section{padding:40px 0;border-top:1px solid var(--bdr);}
.related-section h4{font-size:13px;font-weight:700;color:var(--s);text-transform:uppercase;letter-spacing:.08em;margin-bottom:16px;}
.related-pills{display:flex;flex-wrap:wrap;gap:10px;}
.rel-pill{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;border-radius:99px;border:1.5px solid var(--bdr);font-size:13px;font-weight:500;color:var(--m);transition:.15s;}
.rel-pill:hover{border-color:var(--ac);color:var(--ac);}
.cta-strip{background:linear-gradient(135deg,var(--n) 0%,var(--n2) 100%);padding:72px 0;text-align:center;}
.cta-strip h2{font-size:clamp(26px,3.5vw,42px);color:#fff;margin-bottom:16px;}
.cta-strip p{font-size:16px;color:rgba(255,255,255,.6);max-width:500px;margin:0 auto 32px;line-height:1.6;}
.cta-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;}
@media(max-width:960px){.hero-grid{grid-template-columns:1fr;}.rst-mock{display:none;}.pain-grid,.why-grid{grid-template-columns:repeat(2,1fr);}.faq-grid{grid-template-columns:1fr;}.fg{grid-template-columns:1fr 1fr;}}
@media(max-width:600px){.pain-grid,.why-grid{grid-template-columns:1fr;}.res-grid{grid-template-columns:repeat(2,1fr);}.form-row{grid-template-columns:1fr;}.fg{grid-template-columns:1fr;}}
@media(max-width:900px){.hb{display:flex;}.dmenu,.navcta .btn-o{display:none;}}

/* ── PREMIUM HERO ── */
.hero{background:linear-gradient(155deg,#0f1e38 0%,#162847 55%,#0f1e38 100%);padding:88px 0 80px;position:relative;overflow:hidden;}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 60% at 70% 30%,rgba(255,152,0,.18) 0%,transparent 65%),radial-gradient(ellipse 35% 40% at 5% 80%,rgba(255,152,0,.07) 0%,transparent 60%);pointer-events:none;}
.hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;position:relative;z-index:2;}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 16px;background:rgba(255,152,0,.12);border:1px solid rgba(255,152,0,.3);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#ffcc80;margin-bottom:20px;}
.hero h1{font-size:clamp(28px,3.8vw,48px);font-weight:900;color:#fff;line-height:1.06;letter-spacing:-.03em;margin-bottom:20px;}
.hero h1 em{font-style:normal;background:linear-gradient(135deg,#ffcc80,#FF9800);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-desc{font-size:17px;color:rgba(255,255,255,.62);line-height:1.7;margin-bottom:32px;max-width:460px;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:36px;}
.rst-mock{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:20px;overflow:hidden;backdrop-filter:blur(10px);}
.rst-hdr{background:rgba(255,255,255,.05);border-bottom:1px solid rgba(255,255,255,.08);padding:14px 18px;display:flex;align-items:center;justify-content:space-between;}
.rst-hdr-title{font-size:12px;font-weight:700;color:rgba(255,255,255,.7);letter-spacing:.04em;}
.rst-live{display:flex;align-items:center;gap:6px;font-size:11px;color:#FF9800;font-weight:600;}
.rst-live::before{content:'';width:7px;height:7px;border-radius:50%;background:#FF9800;box-shadow:0 0 0 3px rgba(255,152,0,.2);animation:rstp 2s infinite;}
@keyframes rstp{0%,100%{box-shadow:0 0 0 3px rgba(255,152,0,.2);}50%{box-shadow:0 0 0 6px rgba(255,152,0,.05);}}
.rst-kpis{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:rgba(255,255,255,.06);}
.rst-kpi{background:#0f1e38;padding:14px 16px;}
.rst-kpi-lbl{font-size:10px;font-weight:600;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:.08em;margin-bottom:5px;}
.rst-kpi-val{font-size:20px;font-weight:900;color:#FF9800;letter-spacing:-.02em;line-height:1;}
.rst-kpi-d{font-size:10.5px;margin-top:3px;font-weight:600;color:#4caf50;}
.rst-rows{padding:14px 18px;border-top:1px solid rgba(255,255,255,.06);}
.rst-rows-lbl{font-size:10px;font-weight:600;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;}
.rst-row{display:flex;justify-content:space-between;align-items:center;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.04);font-size:11.5px;}
.rst-row:last-child{border:none;}
.rst-row-n{color:rgba(255,255,255,.55);}
.rst-row-v{color:#ffcc80;font-weight:700;font-size:11px;}
.rst-btm{padding:12px 18px;background:rgba(255,152,0,.06);border-top:1px solid rgba(255,152,0,.1);display:flex;align-items:center;justify-content:space-between;}
.rst-btm-lbl{font-size:11.5px;color:rgba(255,255,255,.45);}
.rst-btm-val{font-size:15px;font-weight:800;color:#FF9800;}
@media(max-width:900px){.hero-grid{grid-template-columns:1fr;}.rst-mock{display:none;}}

/* ── BREADCRUMB ── */
.breadcrumb{background:var(--bg);border-bottom:1px solid var(--bdr);padding:12px 0;}
.bc-list{display:flex;align-items:center;gap:8px;font-size:12.5px;color:var(--s);list-style:none;padding:0;margin:0;}
.bc-list a{color:var(--m);font-weight:500;transition:.14s;}
.bc-list a:hover{color:var(--n);}
.bc-sep{opacity:.4;}
`

const ld0 = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Digital Marketing for Restaurants & F&B",
      "provider": {
        "@type": "Organization",
        "name": "Click Decoded",
        "url": "https://www.clickdecoded.com"
      },
      "description": "More footfall, online orders, and brand awareness for restaurants, cafes, cloud kitchens, and food brands in India. Click Decoded drives diners and delivery orders with local SEO and Meta Ads.",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": "Digital Marketing for Restaurants & F&B",
      "url": "https://www.clickdecoded.com/industries/restaurants"
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
          "name": "Digital Marketing for Restaurants & F&B",
          "item": "https://www.clickdecoded.com/industries/restaurants"
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
<li><span>Industries</span></li>
<li className="bc-sep">›</li>
<li>Restaurants &amp; Cloud Kitchens</li>
</ol>
</div>
</nav>
      <section className="hero">
<div className="wrap">
<div className="hero-grid">
<div>
<div className="hero-eyebrow">🍽️ Restaurant &amp; Cloud Kitchen Marketing</div>
<h1>More Diners &amp; Delivery Orders<br /><em>for Restaurants &amp; Cloud Kitchens.</em></h1>
<p className="hero-desc">Hungry customers search 'restaurants near me' billions of times a month. We make sure your restaurant appears first — on Google Maps, Swiggy SEO, and Instagram Reels.</p>
<div className="hero-btns">
<a href="/contact" className="btn btn-ac">Get Industry-Specific Strategy</a>
<a href="https://wa.me/919407000101" className="btn btn-ghost">💬 WhatsApp Us</a>
</div>
<div className="hero-proof">
<span className="proof-item"><strong>3×</strong> More Table Reservations</span>
<span className="proof-item"><strong>Google Maps</strong> #1 Local Rank</span>
<span className="proof-item"><strong>Swiggy/Zomato</strong> Organic Rank Boost</span>
</div>
</div>
<div className="rst-mock">
<div className="rst-hdr">
<span className="rst-hdr-title">Restaurant Growth Dashboard</span>
<span className="rst-live">Live</span>
</div>
<div className="rst-kpis">
<div className="rst-kpi"><div className="rst-kpi-lbl">Monthly Covers</div><div className="rst-kpi-val">1,840</div><div className="rst-kpi-d">↑ 3.2× vs 6 months ago</div></div>
<div className="rst-kpi"><div className="rst-kpi-lbl">Online Orders/Mo</div><div className="rst-kpi-val">2,140</div><div className="rst-kpi-d">↑ 284% growth</div></div>
<div className="rst-kpi"><div className="rst-kpi-lbl">Google Maps Rank</div><div className="rst-kpi-val">#1</div><div className="rst-kpi-d">↑ 'restaurant near me'</div></div>
<div className="rst-kpi"><div className="rst-kpi-lbl">Avg. Order Value</div><div className="rst-kpi-val">₹680</div><div className="rst-kpi-d">↑ from ₹420</div></div>
</div>
<div className="rst-rows">
<div className="rst-rows-lbl">Top Performing Channels</div>
<div className="rst-row"><span className="rst-row-n">Google Maps / GMB</span><span className="rst-row-v">840 covers · ₹0 spend</span></div>
<div className="rst-row"><span className="rst-row-n">Instagram Reels</span><span className="rst-row-v">520 covers · ₹18 CPL</span></div>
<div className="rst-row"><span className="rst-row-n">Swiggy SEO Rank</span><span className="rst-row-v">#1 · 2,140 orders/mo</span></div>
</div>
<div className="rst-btm">
<span className="rst-btm-lbl">🍽️ Revenue Attributed to Digital</span>
<span className="rst-btm-val">₹12.4L/month</span>
</div>
</div>
</div>
</div>
</section>
      <div className="results-strip">
<div className="wrap res-grid">
<div className="res-stat"><div className="res-num">2B+</div><div className="res-lbl">'Restaurant Near Me' Searches/Month</div></div><div className="res-stat"><div className="res-num">41%</div><div className="res-lbl">More GMB Views with Tour</div></div><div className="res-stat"><div className="res-num">3x</div><div className="res-lbl">More Footfall from GMB</div></div><div className="res-stat"><div className="res-num">₹15K</div><div className="res-lbl">Starting / Month</div></div>
</div>
</div>
      <section className="pain-section">
<div className="wrap">
<h2>Challenges We <em style={{ fontStyle: 'normal', color: 'var(--ac)' }}>Solve</em></h2>
<p className="pain-sub">We've worked with enough businesses in this industry to know exactly what's holding you back.</p>
<div className="pain-grid">
<div className="pain-card"><div className="pain-icon">📍</div><h3>Not Appearing in 'Near Me' Searches</h3><p>'Restaurants near me' is one of Google's most searched phrases. If your GMB profile isn't optimised, you don't appear — and the 3 restaurants that do appear get all the footfall.</p></div><div className="pain-card"><div className="pain-icon">📸</div><h3>Unappetising Photo Presentation</h3><p>Food photography is the single biggest driver of online restaurant discovery. A well-shot dish photo on Instagram or Google can drive 10x more clicks than text descriptions.</p></div><div className="pain-card"><div className="pain-icon">⭐</div><h3>Low Review Count</h3><p>A restaurant with 200 reviews and 4.5 stars outperforms one with 20 reviews and 4.8 stars — because volume signals credibility. We build systematic review generation.</p></div><div className="pain-card"><div className="pain-icon">📱</div><h3>No Social Media Presence</h3><p>Instagram and Facebook are where food discovery happens. Without a consistent posting strategy with professional photos, you're invisible to the 18–35 audience that eats out most.</p></div><div className="pain-card"><div className="pain-icon">🤖</div><h3>No Table Reservation Automation</h3><p>A WhatsApp bot that confirms table reservations, sends reminders, and follows up with feedback requests improves guest experience and reduces no-shows.</p></div><div className="pain-card"><div className="pain-icon">🌐</div><h3>Aggregator Dependency</h3><p>Swiggy and Zomato take 25–30% of every order. A direct ordering website or WhatsApp ordering system captures the same order at full margin.</p></div>
</div>
</div>
</section>
      <section className="services-section">
<div className="wrap">
<h2>Services for <em style={{ fontStyle: 'normal', color: 'var(--ac)' }}>Your Industry</em></h2>
<p className="svc-sub">Every service below is tailored to the specific buyer behaviour and competition in your sector.</p>
<div className="svc-grid">
<div className="svc-pill"><a href="/services/gmb-marketing">📍 Google My Business</a></div><div className="svc-pill"><a href="/services/local-seo">🔍 Local SEO</a></div><div className="svc-pill"><a href="/services/meta-ads">📱 Meta Ads</a></div><div className="svc-pill"><a href="/services/virtual-tour">🏠 Virtual Tour</a></div><div className="svc-pill"><a href="/services/hd-photography">📸 Food Photography</a></div><div className="svc-pill"><a href="/services/whatsapp-marketing">💬 WhatsApp Marketing</a></div><div className="svc-pill"><a href="/services/whatsapp-automation">🤖 WhatsApp Automation</a></div><div className="svc-pill"><a href="/services/web-development">🌐 Web Development</a></div><div className="svc-pill"><a href="/services/influencer-video">🎬 Influencer Video</a></div><div className="svc-pill"><a href="/services/ai-content">✍️ AI Content Gen</a></div>
</div>
</div>
</section>
      <section className="why-section">
<div className="wrap">
<h2>Why Click Decoded for <em style={{ fontStyle: 'normal', color: 'var(--ac)' }}>This Industry</em></h2>
<p className="why-sub">We're not generalists. We bring specific playbooks from working in your sector.</p>
<div className="why-grid">
<div className="why-card"><div className="why-num">01</div><h3>Industry-First Strategy</h3><p>Your campaign is built from industry-specific keyword research, competitor benchmarking, and buyer journey mapping — not a generic template.</p></div>
<div className="why-card"><div className="why-num">02</div><h3>Transparent Monthly Reports</h3><p>Every month you get a plain-English report showing exactly what we did, what changed, and what we're doing next — no vanity metrics.</p></div>
<div className="why-card"><div className="why-num">03</div><h3>No Long-Term Lock-In</h3><p>Month-to-month contracts. We earn your business every 30 days. If you're not seeing results, you can leave — no penalties, no hassle.</p></div>
</div>
</div>
</section>
      <section className="faq-section">
<div className="wrap">
<h2>Frequently Asked <em style={{ fontStyle: 'normal', color: 'var(--ac)' }}>Questions</em></h2>
<div className="faq-grid">
<div className="faq-item"><button className="faq-q">Can you help a single-location restaurant?<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg></button><div className="faq-a"><p>Yes. A single-location restaurant benefits most from GMB optimisation, local SEO, and Instagram content — all of which we manage from ₹15,000/month.</p></div></div><div className="faq-item"><button className="faq-q">Do you help cloud kitchens and delivery-only brands?<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg></button><div className="faq-a"><p>Yes. Cloud kitchens need different strategies — Swiggy/Zomato listing optimisation, Google Ads targeting delivery area searches, and direct WhatsApp ordering systems.</p></div></div><div className="faq-item"><button className="faq-q">How do you get more Google reviews?<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg></button><div className="faq-a"><p>Post-visit WhatsApp messages with a direct review link, table tent QR codes, and staff-prompted review requests — systematised so it happens with every diner, not just occasionally.</p></div></div><div className="faq-item"><button className="faq-q">Do you do influencer marketing for restaurants?<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg></button><div className="faq-a"><p>Yes. Food blogger and influencer collaborations — nano and micro creators in your city — are highly cost-effective for restaurant discovery on Instagram and YouTube.</p></div></div><div className="faq-item"><button className="faq-q">Can you set up a direct ordering WhatsApp system?<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg></button><div className="faq-a"><p>Yes. We build WhatsApp-based ordering flows — menu, item selection, address, and payment link — reducing your dependency on Swiggy and Zomato for delivery orders.</p></div></div><div className="faq-item"><button className="faq-q">What's the minimum engagement?<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg></button><div className="faq-a"><p>Restaurant digital marketing starts at ₹15,000/month for GMB + social media management. Full-service campaigns including ads start at ₹25,000/month.</p></div></div>
</div>
</div>
</section>
      <div className="wrap related-section">
<h4>Related Services</h4>
<div className="related-pills">
<a href="/services/gmb-marketing" className="rel-pill">Google My Business</a><a href="/services/local-seo" className="rel-pill">Local SEO</a><a href="/services/meta-ads" className="rel-pill">Meta Ads</a><a href="/services/whatsapp-marketing" className="rel-pill">WhatsApp Marketing</a><a href="/services/virtual-tour" className="rel-pill">Virtual Tour</a>
</div>
</div>
      <section className="cta-strip">
<div className="wrap">
<h2>Ready to Grow Your <em style={{ fontStyle: 'normal', color: 'var(--ac)' }}>Business?</em></h2>
<p>Free industry audit. No commitment. Real strategy.</p>
<div className="cta-btns">
<a href="/contact" className="btn btn-ac">🚀 Get Free Strategy Call</a>
<a href="https://wa.me/919407000101" className="btn btn-wa">💬 WhatsApp Now</a>
</div>
</div>
</section>
      <PageScript id="industries-restaurants-0" code={js0} />
    </>
  )
}
