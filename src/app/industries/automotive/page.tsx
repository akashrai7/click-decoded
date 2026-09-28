/* eslint-disable */
// src/app/industries/automotive/page.tsx — generated from industry-automotive.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "Digital Marketing for Auto Dealerships & Car Brands India",
  description: "Lead generation, SEO, and Google Ads for automobile dealers, car showrooms, and automotive brands in India. Click Decoded drives test drive bookings and.",
  alternates: { canonical: "/industries/automotive" },
}

const css = `
:root{--n:#2A4573;--n2:#1e3460;--n-dark:#0f1e38;--o:#EE7E1A;--o2:#d46e12;--body:#1E293B;--m:#475569;--s:#64748b;--bg:#F4F7FC;--bdr:#E2E8F0;--gr:#25D366;--ac:#F44336;--ac-rgb:244,67,54;}
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
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 60% at 70% 30%,rgba(244,67,54,.18) 0%,transparent 65%),radial-gradient(ellipse 35% 40% at 5% 80%,rgba(244,67,54,.07) 0%,transparent 60%);pointer-events:none;}
.hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;position:relative;z-index:2;}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 16px;background:rgba(244,67,54,.12);border:1px solid rgba(244,67,54,.3);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#ef9a9a;margin-bottom:20px;}
.hero h1{font-size:clamp(28px,3.8vw,48px);font-weight:900;color:#fff;line-height:1.06;letter-spacing:-.03em;margin-bottom:20px;}
.hero h1 em{font-style:normal;background:linear-gradient(135deg,#ef9a9a,#F44336);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-desc{font-size:17px;color:rgba(255,255,255,.62);line-height:1.7;margin-bottom:32px;max-width:460px;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:36px;}
.auto-mock{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:20px;overflow:hidden;backdrop-filter:blur(10px);}
.auto-mock-header{background:rgba(255,255,255,.05);border-bottom:1px solid rgba(255,255,255,.08);padding:14px 18px;display:flex;align-items:center;justify-content:space-between;}
.auto-mock-title{font-size:12px;font-weight:700;color:rgba(255,255,255,.7);letter-spacing:.04em;}
.auto-live{display:flex;align-items:center;gap:6px;font-size:11px;color:#F44336;font-weight:600;}
.auto-live::before{content:'';width:7px;height:7px;border-radius:50%;background:#F44336;box-shadow:0 0 0 3px rgba(244,67,54,.2);animation:autopulse 2s infinite;}
@keyframes autopulse{0%,100%{box-shadow:0 0 0 3px rgba(244,67,54,.2);}50%{box-shadow:0 0 0 6px rgba(244,67,54,.05);}}
.auto-kpis{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:rgba(255,255,255,.06);}
.auto-kpi{background:#0f1e38;padding:16px 18px;}
.auto-kpi-label{font-size:10.5px;font-weight:600;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:.08em;margin-bottom:6px;}
.auto-kpi-val{font-size:22px;font-weight:900;color:#fff;letter-spacing:-.02em;line-height:1;}
.auto-kpi-val.red{color:#F44336;}
.auto-kpi-delta{font-size:11px;margin-top:4px;font-weight:600;}
.auto-kpi-delta.up{color:#4caf50;}
.auto-rows{padding:16px 18px;border-top:1px solid rgba(255,255,255,.06);}
.auto-rows-label{font-size:10.5px;font-weight:600;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px;}
.auto-row{display:flex;align-items:center;justify-content:space-between;padding:6px 0;border-bottom:1px solid rgba(255,255,255,.05);font-size:12px;}
.auto-row:last-child{border-bottom:none;}
.auto-row-name{color:rgba(255,255,255,.6);}
.auto-row-val{color:#ef9a9a;font-weight:700;}
.auto-bottom{padding:14px 18px;background:rgba(244,67,54,.06);border-top:1px solid rgba(244,67,54,.1);display:flex;align-items:center;justify-content:space-between;}
.auto-bottom-label{font-size:12px;color:rgba(255,255,255,.5);font-weight:500;}
.auto-bottom-val{font-size:16px;font-weight:800;color:#F44336;}
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
@media(max-width:960px){.hero-grid{grid-template-columns:1fr;}.auto-mock{display:none;}.pain-grid,.why-grid{grid-template-columns:repeat(2,1fr);}.faq-grid{grid-template-columns:1fr;}.fg{grid-template-columns:1fr 1fr;}}
@media(max-width:600px){.pain-grid,.why-grid{grid-template-columns:1fr;}.res-grid{grid-template-columns:repeat(2,1fr);}.form-row{grid-template-columns:1fr;}.fg{grid-template-columns:1fr;}}
@media(max-width:900px){.hb{display:flex;}.dmenu,.navcta .btn-o{display:none;}}

/* ── PREMIUM HERO ── */
.hero{background:linear-gradient(155deg,#0f1e38 0%,#162847 55%,#0f1e38 100%);padding:88px 0 80px;position:relative;overflow:hidden;}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 60% at 70% 30%,rgba(244,67,54,.18) 0%,transparent 65%),radial-gradient(ellipse 35% 40% at 5% 80%,rgba(244,67,54,.07) 0%,transparent 60%);pointer-events:none;}
.hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;position:relative;z-index:2;}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 16px;background:rgba(244,67,54,.12);border:1px solid rgba(244,67,54,.3);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#ef9a9a;margin-bottom:20px;}
.hero h1{font-size:clamp(28px,3.8vw,48px);font-weight:900;color:#fff;line-height:1.06;letter-spacing:-.03em;margin-bottom:20px;}
.hero h1 em{font-style:normal;background:linear-gradient(135deg,#ef9a9a,#F44336);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-desc{font-size:17px;color:rgba(255,255,255,.62);line-height:1.7;margin-bottom:32px;max-width:460px;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:36px;}
.auto-mock{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:20px;overflow:hidden;backdrop-filter:blur(10px);}
.auto-hdr{background:rgba(255,255,255,.05);border-bottom:1px solid rgba(255,255,255,.08);padding:14px 18px;display:flex;align-items:center;justify-content:space-between;}
.auto-hdr-title{font-size:12px;font-weight:700;color:rgba(255,255,255,.7);letter-spacing:.04em;}
.auto-live{display:flex;align-items:center;gap:6px;font-size:11px;color:#F44336;font-weight:600;}
.auto-live::before{content:'';width:7px;height:7px;border-radius:50%;background:#F44336;box-shadow:0 0 0 3px rgba(244,67,54,.2);animation:autop 2s infinite;}
@keyframes autop{0%,100%{box-shadow:0 0 0 3px rgba(244,67,54,.2);}50%{box-shadow:0 0 0 6px rgba(244,67,54,.05);}}
.auto-kpis{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:rgba(255,255,255,.06);}
.auto-kpi{background:#0f1e38;padding:14px 16px;}
.auto-kpi-lbl{font-size:10px;font-weight:600;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:.08em;margin-bottom:5px;}
.auto-kpi-val{font-size:20px;font-weight:900;color:#F44336;letter-spacing:-.02em;line-height:1;}
.auto-kpi-d{font-size:10.5px;margin-top:3px;font-weight:600;color:#4caf50;}
.auto-rows{padding:14px 18px;border-top:1px solid rgba(255,255,255,.06);}
.auto-rows-lbl{font-size:10px;font-weight:600;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;}
.auto-row{display:flex;justify-content:space-between;align-items:center;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.04);font-size:11.5px;}
.auto-row:last-child{border:none;}
.auto-row-n{color:rgba(255,255,255,.55);}
.auto-row-v{color:#ef9a9a;font-weight:700;font-size:11px;}
.auto-btm{padding:12px 18px;background:rgba(244,67,54,.06);border-top:1px solid rgba(244,67,54,.1);display:flex;align-items:center;justify-content:space-between;}
.auto-btm-lbl{font-size:11.5px;color:rgba(255,255,255,.45);}
.auto-btm-val{font-size:15px;font-weight:800;color:#F44336;}
@media(max-width:900px){.hero-grid{grid-template-columns:1fr;}.auto-mock{display:none;}}

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
      "name": "Digital Marketing for Automotive Industry",
      "provider": {
        "@type": "Organization",
        "name": "Click Decoded",
        "url": "https://www.clickdecoded.com"
      },
      "description": "Lead generation, SEO, and Google Ads for automobile dealers, car showrooms, and automotive brands in India. Click Decoded drives test drive bookings and enquiries.",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": "Digital Marketing for Automotive Industry",
      "url": "https://www.clickdecoded.com/industries/automotive"
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
          "name": "Digital Marketing for Automotive Industry",
          "item": "https://www.clickdecoded.com/industries/automotive"
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
<li>Automotive &amp; Showrooms</li>
</ol>
</div>
</nav>
      <section className="hero">
<div className="wrap">
<div className="hero-grid">
<div>
<div className="hero-eyebrow">🚗 Automotive &amp; Showroom Marketing</div>
<h1>More Test Drive Bookings<br /><em>for Auto Dealers &amp; Showrooms.</em></h1>
<p className="hero-desc">Car buyers research online for 3–6 months before visiting a showroom. We make sure they find your dealership first — via SEO, Google Ads, and targeted social campaigns.</p>
<div className="hero-btns">
<a href="/contact" className="btn btn-ac">Get Industry-Specific Strategy</a>
<a href="https://wa.me/919407000101" className="btn btn-ghost">💬 WhatsApp Us</a>
</div>
<div className="hero-proof">
<span className="proof-item"><strong>3×</strong> More Showroom Walk-ins</span>
<span className="proof-item"><strong>Google Maps</strong> #1 Rankings</span>
<span className="proof-item"><strong>₹0</strong> Wasted on Irrelevant Clicks</span>
</div>
</div>
<div className="auto-mock">
<div className="auto-hdr">
<span className="auto-hdr-title">Showroom Lead Dashboard</span>
<span className="auto-live">Live</span>
</div>
<div className="auto-kpis">
<div className="auto-kpi"><div className="auto-kpi-lbl">Monthly Leads</div><div className="auto-kpi-val">284</div><div className="auto-kpi-d">↑ 248% in 90 days</div></div>
<div className="auto-kpi"><div className="auto-kpi-lbl">Test Drive Bookings</div><div className="auto-kpi-val">94</div><div className="auto-kpi-d">↑ from 12/month</div></div>
<div className="auto-kpi"><div className="auto-kpi-lbl">Google Maps Rank</div><div className="auto-kpi-val">#1</div><div className="auto-kpi-d">↑ 'car dealer near me'</div></div>
<div className="auto-kpi"><div className="auto-kpi-lbl">Cost Per Lead</div><div className="auto-kpi-val">₹340</div><div className="auto-kpi-d">↓ from ₹1,840</div></div>
</div>
<div className="auto-rows">
<div className="auto-rows-lbl">Top Lead Sources This Month</div>
<div className="auto-row"><span className="auto-row-n">Google Search Ads</span><span className="auto-row-v">142 leads · ₹310 CPL</span></div>
<div className="auto-row"><span className="auto-row-n">Google Maps / GMB</span><span className="auto-row-v">88 leads · ₹0 CPL</span></div>
<div className="auto-row"><span className="auto-row-n">Instagram Reels</span><span className="auto-row-v">54 leads · ₹420 CPL</span></div>
</div>
<div className="auto-btm">
<span className="auto-btm-lbl">🚗 Walk-ins Booked via Digital</span>
<span className="auto-btm-val">94 this month</span>
</div>
</div>
</div>
</div>
</section>
      <div className="results-strip">
<div className="wrap res-grid">
<div className="res-stat"><div className="res-num">80%</div><div className="res-lbl">Buyers Research Online First</div></div><div className="res-stat"><div className="res-num">3x</div><div className="res-lbl">More Test Drive Bookings</div></div><div className="res-stat"><div className="res-num">Top 3</div><div className="res-lbl">Local Google Rankings</div></div><div className="res-stat"><div className="res-num">₹25K</div><div className="res-lbl">Starting / Month</div></div>
</div>
</div>
      <section className="pain-section">
<div className="wrap">
<h2>Challenges We <em style={{ fontStyle: 'normal', color: 'var(--ac)' }}>Solve</em></h2>
<p className="pain-sub">We've worked with enough businesses in this industry to know exactly what's holding you back.</p>
<div className="pain-grid">
<div className="pain-card"><div className="pain-icon">🔍</div><h3>Buyers Research Online, Then Visit Offline</h3><p>80% of car buyers research online for 3–6 months. If your dealership isn't visible on Google during this research phase, the competitor they find online gets the walk-in — not you.</p></div><div className="pain-card"><div className="pain-icon">📉</div><h3>OEM Portals Don't Drive Enough Leads</h3><p>OEM digital programmes are one-size-fits-all. A local dealership needs local SEO, GMB optimisation, and geo-targeted ads — none of which the OEM programme provides.</p></div><div className="pain-card"><div className="pain-icon">📸</div><h3>Weak Vehicle Photography</h3><p>Online buyers make shortlists based on photos. Professional vehicle photography, 360° interior views, and video walkthroughs dramatically increase enquiry rates.</p></div><div className="pain-card"><div className="pain-icon">💰</div><h3>High Cost Per Lead from Auto Portals</h3><p>CarDekho and CarWale leads are expensive and shared with multiple dealers. Direct lead generation from Google and Meta is cheaper and exclusive.</p></div><div className="pain-card"><div className="pain-icon">🤖</div><h3>Enquiries Not Followed Up Fast Enough</h3><p>Car buyers are impulse-driven. A WhatsApp response within 5 minutes of an enquiry converts at 3x the rate of a 24-hour callback. We automate this.</p></div><div className="pain-card"><div className="pain-icon">📊</div><h3>No Attribution Between Digital and Showroom Visits</h3><p>Most dealerships don't know which digital touch drove a showroom visit. We set up call tracking, UTM parameters, and CRM integration to close the loop.</p></div>
</div>
</div>
</section>
      <section className="services-section">
<div className="wrap">
<h2>Services for <em style={{ fontStyle: 'normal', color: 'var(--ac)' }}>Your Industry</em></h2>
<p className="svc-sub">Every service below is tailored to the specific buyer behaviour and competition in your sector.</p>
<div className="svc-grid">
<div className="svc-pill"><a href="/services/local-seo">🔍 Local SEO</a></div><div className="svc-pill"><a href="/services/gmb-marketing">📍 Google My Business</a></div><div className="svc-pill"><a href="/services/google-ads">💰 Google Ads</a></div><div className="svc-pill"><a href="/services/meta-ads">📱 Meta Ads</a></div><div className="svc-pill"><a href="/services/youtube-ads">▶️ YouTube Ads</a></div><div className="svc-pill"><a href="/services/whatsapp-automation">💬 WhatsApp Automation</a></div><div className="svc-pill"><a href="/services/hd-photography">📸 HD Photography</a></div><div className="svc-pill"><a href="/services/drone-video">🚁 Drone Video</a></div><div className="svc-pill"><a href="/services/web-development">🌐 Web Development</a></div><div className="svc-pill"><a href="/services/landing-pages">📋 Landing Pages</a></div>
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
<div className="faq-item"><button className="faq-q">Do you work with multi-brand dealers?<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg></button><div className="faq-a"><p>Yes. Multi-brand pre-owned car dealers are one of our key automotive verticals — organic search for 'used [model] in [city]' is extremely high intent and cost-effective.</p></div></div><div className="faq-item"><button className="faq-q">Can you help a new car dealership that just launched?<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg></button><div className="faq-a"><p>Yes. New dealerships need fast visibility — we launch GMB, Google Ads, and a landing page within 7 days to start driving enquiries before the showroom is even fully set up.</p></div></div><div className="faq-item"><button className="faq-q">Do you create vehicle walkaround videos?<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg></button><div className="faq-a"><p>Yes. Vehicle walkaround and feature videos — shot by our team or using AI video tools — are highly effective for both organic social and paid YouTube campaigns.</p></div></div><div className="faq-item"><button className="faq-q">How do you target in-market car buyers?<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg></button><div className="faq-a"><p>Google's in-market audience for 'new car' and 'car dealership' combined with geo-targeting and keyword targeting (model + city) reaches buyers who are actively researching right now.</p></div></div><div className="faq-item"><button className="faq-q">Can you track test drive bookings to digital campaigns?<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg></button><div className="faq-a"><p>Yes. Every form submission, WhatsApp click, and call can be tracked to its source — campaign, ad, keyword — so you know exactly which budget is driving showroom footfall.</p></div></div><div className="faq-item"><button className="faq-q">What's the minimum engagement?<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg></button><div className="faq-a"><p>Automotive digital marketing starts at ₹25,000/month for local SEO + GMB. Full-funnel campaigns (SEO + Google Ads + Meta Ads) are quoted based on the dealer's target monthly volume.</p></div></div>
</div>
</div>
</section>
      <div className="wrap related-section">
<h4>Related Services</h4>
<div className="related-pills">
<a href="/services/local-seo" className="rel-pill">Local SEO</a><a href="/services/google-ads" className="rel-pill">Google Ads</a><a href="/services/whatsapp-automation" className="rel-pill">WhatsApp Automation</a><a href="/services/meta-ads" className="rel-pill">Meta Ads</a>
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
      <PageScript id="industries-automotive-0" code={js0} />
    </>
  )
}
