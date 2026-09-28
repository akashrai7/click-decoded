/* eslint-disable */
// src/app/industries/ecommerce/page.tsx — generated from industry-ecommerce.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "Digital Marketing for E-Commerce & D2C Brands India | Click",
  description: "SEO, Google Shopping Ads, Meta Ads, and E-Commerce web development for online stores and D2C brands in India. Click Decoded drives sales, not just traffic.",
  alternates: { canonical: "/industries/ecommerce" },
}

const css = `
:root{--n:#2A4573;--n2:#1e3460;--n-dark:#0f1e38;--o:#EE7E1A;--o2:#d46e12;--body:#1E293B;--m:#475569;--s:#64748b;--bg:#F4F7FC;--bdr:#E2E8F0;--gr:#25D366;--ac:#FF5722;--ac-rgb:255,87,34;}
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
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 60% at 70% 30%,rgba(255,87,34,.18) 0%,transparent 65%),radial-gradient(ellipse 35% 40% at 5% 80%,rgba(255,87,34,.07) 0%,transparent 60%);pointer-events:none;}
.hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;position:relative;z-index:2;}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 16px;background:rgba(255,87,34,.12);border:1px solid rgba(255,87,34,.3);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#ffab91;margin-bottom:20px;}
.hero h1{font-size:clamp(28px,3.8vw,48px);font-weight:900;color:#fff;line-height:1.06;letter-spacing:-.03em;margin-bottom:20px;}
.hero h1 em{font-style:normal;background:linear-gradient(135deg,#ffab91,#ff5722);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-desc{font-size:17px;color:rgba(255,255,255,.62);line-height:1.7;margin-bottom:32px;max-width:460px;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:36px;}
/* ECOMMERCE DASHBOARD MOCK */
.ec-mock{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:20px;overflow:hidden;backdrop-filter:blur(10px);}
.ec-mock-header{background:rgba(255,255,255,.05);border-bottom:1px solid rgba(255,255,255,.08);padding:14px 18px;display:flex;align-items:center;justify-content:space-between;}
.ec-mock-title{font-size:12px;font-weight:700;color:rgba(255,255,255,.7);letter-spacing:.04em;}
.ec-live{display:flex;align-items:center;gap:6px;font-size:11px;color:#ff5722;font-weight:600;}
.ec-live::before{content:'';width:7px;height:7px;border-radius:50%;background:#ff5722;box-shadow:0 0 0 3px rgba(255,87,34,.2);animation:ecpulse 2s infinite;}
@keyframes ecpulse{0%,100%{box-shadow:0 0 0 3px rgba(255,87,34,.2);}50%{box-shadow:0 0 0 6px rgba(255,87,34,.05);}}
.ec-kpis{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:rgba(255,255,255,.06);}
.ec-kpi{background:#0f1e38;padding:16px 18px;}
.ec-kpi-label{font-size:10.5px;font-weight:600;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:.08em;margin-bottom:6px;}
.ec-kpi-val{font-size:22px;font-weight:900;color:#fff;letter-spacing:-.02em;line-height:1;}
.ec-kpi-val.orange{color:#ff5722;}
.ec-kpi-delta{font-size:11px;margin-top:4px;font-weight:600;}
.ec-kpi-delta.up{color:#4caf50;}
.ec-chart{padding:16px 18px;border-top:1px solid rgba(255,255,255,.06);}
.ec-chart-label{font-size:10.5px;font-weight:600;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px;}
.ec-bars{display:flex;align-items:flex-end;gap:5px;height:44px;}
.ec-bar{flex:1;border-radius:3px 3px 0 0;background:rgba(255,87,34,.25);}
.ec-bar.peak{background:#ff5722;}
.ec-cart{padding:14px 18px;background:rgba(255,87,34,.06);border-top:1px solid rgba(255,87,34,.1);display:flex;align-items:center;justify-content:space-between;}
.ec-cart-label{font-size:12px;color:rgba(255,255,255,.5);font-weight:500;}
.ec-cart-val{font-size:16px;font-weight:800;color:#ff5722;}
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
@media(max-width:960px){.hero-grid{grid-template-columns:1fr;}.ec-mock{display:none;}.pain-grid,.why-grid{grid-template-columns:repeat(2,1fr);}.faq-grid{grid-template-columns:1fr;}.fg{grid-template-columns:1fr 1fr;}}
@media(max-width:600px){.pain-grid,.why-grid{grid-template-columns:1fr;}.res-grid{grid-template-columns:repeat(2,1fr);}.form-row{grid-template-columns:1fr;}.fg{grid-template-columns:1fr;}}
@media(max-width:900px){.hb{display:flex;}.dmenu,.navcta .btn-o{display:none;}}

/* ── PREMIUM HERO ── */
.hero{background:linear-gradient(155deg,#0f1e38 0%,#162847 55%,#0f1e38 100%);padding:88px 0 80px;position:relative;overflow:hidden;}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 60% at 70% 30%,rgba(255,87,34,.18) 0%,transparent 65%),radial-gradient(ellipse 35% 40% at 5% 80%,rgba(255,87,34,.07) 0%,transparent 60%);pointer-events:none;}
.hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;position:relative;z-index:2;}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 16px;background:rgba(255,87,34,.12);border:1px solid rgba(255,87,34,.3);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#ffab91;margin-bottom:20px;}
.hero h1{font-size:clamp(28px,3.8vw,48px);font-weight:900;color:#fff;line-height:1.06;letter-spacing:-.03em;margin-bottom:20px;}
.hero h1 em{font-style:normal;background:linear-gradient(135deg,#ffab91,#FF5722);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-desc{font-size:17px;color:rgba(255,255,255,.62);line-height:1.7;margin-bottom:32px;max-width:460px;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:36px;}
.ec-mock{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:20px;overflow:hidden;backdrop-filter:blur(10px);}
.ec-hdr{background:rgba(255,255,255,.05);border-bottom:1px solid rgba(255,255,255,.08);padding:14px 18px;display:flex;align-items:center;justify-content:space-between;}
.ec-hdr-title{font-size:12px;font-weight:700;color:rgba(255,255,255,.7);letter-spacing:.04em;}
.ec-live{display:flex;align-items:center;gap:6px;font-size:11px;color:#FF5722;font-weight:600;}
.ec-live::before{content:'';width:7px;height:7px;border-radius:50%;background:#FF5722;box-shadow:0 0 0 3px rgba(255,87,34,.2);animation:ecp 2s infinite;}
@keyframes ecp{0%,100%{box-shadow:0 0 0 3px rgba(255,87,34,.2);}50%{box-shadow:0 0 0 6px rgba(255,87,34,.05);}}
.ec-kpis{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:rgba(255,255,255,.06);}
.ec-kpi{background:#0f1e38;padding:14px 16px;}
.ec-kpi-lbl{font-size:10px;font-weight:600;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:.08em;margin-bottom:5px;}
.ec-kpi-val{font-size:20px;font-weight:900;color:#FF5722;letter-spacing:-.02em;line-height:1;}
.ec-kpi-d{font-size:10.5px;margin-top:3px;font-weight:600;color:#4caf50;}
.ec-rows{padding:14px 18px;border-top:1px solid rgba(255,255,255,.06);}
.ec-rows-lbl{font-size:10px;font-weight:600;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;}
.ec-row{display:flex;justify-content:space-between;align-items:center;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.04);font-size:11.5px;}
.ec-row:last-child{border:none;}
.ec-row-n{color:rgba(255,255,255,.55);}
.ec-row-v{color:#ffab91;font-weight:700;font-size:11px;}
.ec-btm{padding:12px 18px;background:rgba(255,87,34,.06);border-top:1px solid rgba(255,87,34,.1);display:flex;align-items:center;justify-content:space-between;}
.ec-btm-lbl{font-size:11.5px;color:rgba(255,255,255,.45);}
.ec-btm-val{font-size:15px;font-weight:800;color:#FF5722;}
@media(max-width:900px){.hero-grid{grid-template-columns:1fr;}.ec-mock{display:none;}}

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
      "name": "Digital Marketing for E-Commerce",
      "provider": {
        "@type": "Organization",
        "name": "Click Decoded",
        "url": "https://www.clickdecoded.com"
      },
      "description": "SEO, Google Shopping Ads, Meta Ads, and E-Commerce web development for online stores and D2C brands in India. Click Decoded drives sales, not just traffic.",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": "Digital Marketing for E-Commerce",
      "url": "https://www.clickdecoded.com/industries/ecommerce"
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
          "name": "Digital Marketing for E-Commerce",
          "item": "https://www.clickdecoded.com/industries/ecommerce"
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
<li>E-Commerce &amp; D2C</li>
</ol>
</div>
</nav>
      <section className="hero">
<div className="wrap">
<div className="hero-grid">
<div>
<div className="hero-eyebrow">🛒 E-Commerce &amp; D2C Brand Marketing</div>
<h1>More Online Sales<br /><em>for E-Commerce &amp; D2C Brands.</em></h1>
<p className="hero-desc">E-commerce success is a combination of the right traffic, the right product presentation, and the right checkout experience. We engineer all three for maximum revenue.</p>
<div className="hero-btns">
<a href="/contact" className="btn btn-ac">Get Industry-Specific Strategy</a>
<a href="https://wa.me/919407000101" className="btn btn-ghost">💬 WhatsApp Us</a>
</div>
<div className="hero-proof">
<span className="proof-item"><strong>3×</strong> Average ROAS</span>
<span className="proof-item"><strong>40%</strong> Cart Abandonment Recovery</span>
<span className="proof-item"><strong>5×</strong> Organic Traffic Growth</span>
</div>
</div>
<div className="ec-mock">
<div className="ec-hdr">
<span className="ec-hdr-title">Revenue Dashboard</span>
<span className="ec-live">Live</span>
</div>
<div className="ec-kpis">
<div className="ec-kpi"><div className="ec-kpi-lbl">Monthly GMV</div><div className="ec-kpi-val">₹28.4L</div><div className="ec-kpi-d">↑ 186% in 90 days</div></div>
<div className="ec-kpi"><div className="ec-kpi-lbl">ROAS</div><div className="ec-kpi-val">4.8×</div><div className="ec-kpi-d">↑ from 1.1× at start</div></div>
<div className="ec-kpi"><div className="ec-kpi-lbl">Cart Recovery Rate</div><div className="ec-kpi-val">34%</div><div className="ec-kpi-d">↑ abandoned cart saves</div></div>
<div className="ec-kpi"><div className="ec-kpi-lbl">Organic Traffic</div><div className="ec-kpi-val">12,400</div><div className="ec-kpi-d">↑ no ad spend needed</div></div>
</div>
<div className="ec-rows">
<div className="ec-rows-lbl">Channel Performance This Month</div>
<div className="ec-row"><span className="ec-row-n">Google Shopping Ads</span><span className="ec-row-v">₹12.4L GMV · 5.2× ROAS</span></div>
<div className="ec-row"><span className="ec-row-n">Organic SEO</span><span className="ec-row-v">₹8.2L GMV · ₹0 spend</span></div>
<div className="ec-row"><span className="ec-row-n">Meta Retargeting</span><span className="ec-row-v">₹7.8L GMV · 4.1× ROAS</span></div>
</div>
<div className="ec-btm">
<span className="ec-btm-lbl">📦 Orders Fulfilled This Month</span>
<span className="ec-btm-val">2,840 orders</span>
</div>
</div>
</div>
</div>
</section>
      <div className="results-strip">
<div className="wrap res-grid">
<div className="res-stat"><div className="res-num">3x</div><div className="res-lbl">Average ROAS</div></div><div className="res-stat"><div className="res-num">40%</div><div className="res-lbl">Cart Abandonment Recovery</div></div><div className="res-stat"><div className="res-num">5x</div><div className="res-lbl">Organic Traffic Growth</div></div><div className="res-stat"><div className="res-num">₹25K</div><div className="res-lbl">Starting / Month</div></div>
</div>
</div>
      <section className="pain-section">
<div className="wrap">
<h2>Challenges We <em style={{ fontStyle: 'normal', color: 'var(--ac)' }}>Solve</em></h2>
<p className="pain-sub">We've worked with enough businesses in this industry to know exactly what's holding you back.</p>
<div className="pain-grid">
<div className="pain-card"><div className="pain-icon">📦</div><h3>Traffic Without Sales</h3><p>Getting traffic from Google or Meta but not converting? The problem is usually the product page, price, or trust signals — not the ad. We fix the full funnel, not just the top.</p></div><div className="pain-card"><div className="pain-icon">💰</div><h3>Poor Google Shopping Performance</h3><p>Shopping campaigns with no feed optimisation burn budget on irrelevant searches. We optimise your Merchant Center feed and campaign structure to maximise ROAS.</p></div><div className="pain-card"><div className="pain-icon">🛒</div><h3>High Cart Abandonment</h3><p>On average 70% of shopping carts are abandoned. WhatsApp and email retargeting sequences recover 15–30% of these — directly adding to bottom-line revenue.</p></div><div className="pain-card"><div className="pain-icon">🔍</div><h3>Low Organic Rankings</h3><p>E-commerce SEO is different from blog SEO — it requires category page optimisation, schema, and link acquisition strategies specific to product catalogues. Most agencies miss this.</p></div><div className="pain-card"><div className="pain-icon">📱</div><h3>Weak Mobile Experience</h3><p>60%+ of Indian e-commerce traffic is mobile. A slow or frustrating mobile checkout loses more sales than any ad budget can compensate for.</p></div><div className="pain-card"><div className="pain-icon">🔄</div><h3>No Retention Strategy</h3><p>Acquiring a new customer costs 5x more than retaining one. Email, WhatsApp, and loyalty campaigns that bring customers back are the most underutilised lever in e-commerce.</p></div>
</div>
</div>
</section>
      <section className="services-section">
<div className="wrap">
<h2>Services for <em style={{ fontStyle: 'normal', color: 'var(--ac)' }}>Your Industry</em></h2>
<p className="svc-sub">Every service below is tailored to the specific buyer behaviour and competition in your sector.</p>
<div className="svc-grid">
<div className="svc-pill"><a href="/services/ecommerce-seo">🔍 E-Commerce SEO</a></div><div className="svc-pill"><a href="/services/shopping-ads">🛒 Google Shopping Ads</a></div><div className="svc-pill"><a href="/services/google-ads">💰 Google Ads</a></div><div className="svc-pill"><a href="/services/meta-ads">📱 Meta Ads</a></div><div className="svc-pill"><a href="/services/retargeting">🔄 Retargeting</a></div><div className="svc-pill"><a href="/services/whatsapp-marketing">💬 WhatsApp Marketing</a></div><div className="svc-pill"><a href="/services/email-marketing">✉️ Email Marketing</a></div><div className="svc-pill"><a href="/services/ecommerce-development">🌐 E-Commerce Development</a></div><div className="svc-pill"><a href="/services/product-photography">📦 Product Photography</a></div><div className="svc-pill"><a href="/services/ai-ad-creatives">🎨 AI Ad Creatives</a></div>
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
<div className="faq-item"><button className="faq-q">Do you work with Shopify, WooCommerce, and custom stores?<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg></button><div className="faq-a"><p>Yes — Shopify, WooCommerce, Magento, and custom-built stores. Our e-commerce SEO and ads work is platform-agnostic.</p></div></div><div className="faq-item"><button className="faq-q">Can you help with Amazon and Flipkart listings too?<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg></button><div className="faq-a"><p>Yes. Marketplace listing optimisation (titles, bullets, A+ content) and Amazon Ads management are available as add-on services.</p></div></div><div className="faq-item"><button className="faq-q">How do you measure e-commerce marketing success?<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg></button><div className="faq-a"><p>Primary: ROAS (Return on Ad Spend) and Revenue from Organic. Secondary: conversion rate, average order value, cart abandonment rate, and customer lifetime value.</p></div></div><div className="faq-item"><button className="faq-q">Do you do CRO (conversion rate optimisation)?<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg></button><div className="faq-a"><p>Yes. CRO audits, A/B testing, checkout optimisation, and landing page improvements are part of our e-commerce growth service.</p></div></div><div className="faq-item"><button className="faq-q">Can you run influencer campaigns for D2C brands?<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg></button><div className="faq-a"><p>Yes. Influencer seeding and paid collaboration management for D2C brands is available — nano and micro influencer campaigns with UGC usage rights.</p></div></div><div className="faq-item"><button className="faq-q">What's the starting budget for e-commerce marketing?<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg></button><div className="faq-a"><p>E-commerce digital marketing starts at ₹25,000/month (management fee). Media spend is separate — we recommend a minimum of ₹30,000/month in ad spend.</p></div></div>
</div>
</div>
</section>
      <div className="wrap related-section">
<h4>Related Services</h4>
<div className="related-pills">
<a href="/services/ecommerce-seo" className="rel-pill">E-Commerce SEO</a><a href="/services/shopping-ads" className="rel-pill">Shopping Ads</a><a href="/services/retargeting" className="rel-pill">Retargeting</a><a href="/services/ecommerce-development" className="rel-pill">E-Commerce Dev</a><a href="/services/product-photography" className="rel-pill">Product Photography</a>
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
      <PageScript id="industries-ecommerce-0" code={js0} />
    </>
  )
}
