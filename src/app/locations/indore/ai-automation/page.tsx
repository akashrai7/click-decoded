/* eslint-disable */
// src/app/locations/indore/ai-automation/page.tsx — generated from ai-automation-indore.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "AI Automation in Indore | Business Process Automation",
  description: "AI automation for Indore businesses. n8n workflows, AI chatbots, lead automation, and WhatsApp bots. Save 20+ hours/week. Free automation audit.",
  alternates: { canonical: "/locations/indore/ai-automation" },
  openGraph: {
    title: "AI Automation in Indore — Click Decoded",
    description: "AI automation for Indore businesses. Save 20+ hours/week with smart workflows. Free audit.",
    url: "/locations/indore/ai-automation",
    type: "website",
  },
}

const css = `
:root{--n:#2A4573;--n2:#1e3460;--n-dark:#0f1e38;--o:#EE7E1A;--o2:#d46e12;--body:#1E293B;--m:#475569;--s:#64748b;--bg:#F4F7FC;--bdr:#E2E8F0;--gr:#25D366;--ac:#7C3AED;--ac-rgb:124,58,237;}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;overflow-x:hidden;}
body{font-family:'Inter',system-ui,sans-serif;color:var(--body);background:#fff;-webkit-font-smoothing:antialiased;}
a{text-decoration:none;color:inherit;}img,svg{display:block;}ul{list-style:none;}button{font-family:inherit;cursor:pointer;}
.wrap{max-width:1200px;margin:0 auto;padding:0 28px;}
section{padding:80px 0;}
h1,h2,h3,h4{font-weight:800;line-height:1.1;letter-spacing:-.025em;color:var(--n);}
.btn{display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:10px;font-weight:700;font-size:14px;border:none;transition:all .18s;white-space:nowrap;cursor:pointer;}
.btn-o{background:var(--o);color:#fff;box-shadow:0 4px 18px rgba(238,126,26,.3);}.btn-o:hover{background:var(--o2);transform:translateY(-2px);}
.btn-ghost{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.3);}.btn-ghost:hover{background:rgba(255,255,255,.08);}
.btn-wa{background:var(--gr);color:#fff;}.btn-wa:hover{background:#1ebe59;transform:translateY(-2px);}
.btn-outline-white{background:transparent;color:#fff;border:2px solid rgba(255,255,255,.3);}.btn-outline-white:hover{background:rgba(255,255,255,.08);}
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
.dmenu{display:flex;align-items:center;gap:2px;}.dmenu>li{position:relative;}
.dmenu>li>a{display:flex;align-items:center;gap:5px;padding:9px 12px;font-size:13.5px;font-weight:600;color:var(--n);border-radius:8px;transition:.15s;}.dmenu>li>a:hover{background:var(--bg);}
.dcar{width:10px;height:10px;opacity:.5;transition:transform .18s;flex-shrink:0;}.dmenu>li:hover .dcar{transform:rotate(180deg);}
.mega{position:absolute;top:calc(100% + 10px);left:50%;transform:translateX(-50%) translateY(10px);background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:26px;box-shadow:0 24px 64px rgba(13,27,42,.14);opacity:0;visibility:hidden;pointer-events:none;transition:opacity .18s,transform .18s;}
.mega.wide{width:940px;display:grid;grid-template-columns:repeat(5,1fr);gap:22px;}.mega.slim{width:296px;left:auto;right:0;transform:translateY(10px);}
.dmenu>li:hover .mega{opacity:1;visibility:visible;pointer-events:all;transform:translateX(-50%) translateY(0);}.dmenu>li:hover .mega.slim{transform:translateY(0);}
.dmenu>li::after{content:'';position:absolute;top:100%;left:-40px;right:-40px;height:14px;}
.mc h5{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--n);margin-bottom:11px;}
.mc a{display:block;position:relative;padding:5px 0 5px 11px;font-size:13px;font-weight:500;color:var(--body);transition:color .14px,padding-left .14s;}
.mc a::before{content:'';position:absolute;left:0;top:50%;transform:translateY(-50%);width:2px;height:0;border-radius:1px;background:var(--o);transition:height .15s;}
.mc a:hover{color:var(--o);padding-left:14px;}.mc a:hover::before{height:13px;}
.mega.slim a{display:block;padding:9px 12px;font-size:13px;font-weight:500;color:var(--body);border-radius:8px;transition:.15s;}.mega.slim a:hover{background:var(--bg);color:var(--o);}
.mega.slim a small{display:block;font-size:11px;color:var(--s);font-weight:400;margin-top:1px;}
.navcta{display:flex;align-items:center;gap:10px;}
.hb{background:none;border:none;display:none;flex-direction:column;gap:5px;padding:4px;cursor:pointer;}.hb span{display:block;width:22px;height:2px;background:var(--n);border-radius:1px;transition:.2s;}
.mnav{display:none;position:fixed;inset:0;background:#fff;z-index:200;overflow-y:auto;padding:24px 22px 40px;}.mnav.on{display:block;}
.ma{border-bottom:1px solid var(--bdr);}.ma>button{width:100%;text-align:left;background:none;border:none;padding:15px 0;font-size:15px;font-weight:600;color:var(--n);display:flex;justify-content:space-between;}
.ms{display:none;padding:0 0 16px;}.ma.on .ms{display:block;}.ms a{display:block;padding:7px 0;font-size:14px;color:var(--m);}.ms h6{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--n);margin:12px 0 4px;}
.breadcrumb{background:var(--bg);padding:12px 0;border-bottom:1px solid var(--bdr);}
.bc-list{display:flex;align-items:center;gap:8px;font-size:12.5px;color:var(--s);list-style:none;}
.bc-list a{color:var(--n);font-weight:500;}.bc-list a:hover{color:var(--o);}
footer{background:var(--n-dark);padding:64px 0 0;}
.fg{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px;}
.fb-desc{font-size:13.5px;color:rgba(255,255,255,.4);line-height:1.7;margin:16px 0 20px;}
.socials{display:flex;gap:10px;}.socials a{width:34px;height:34px;border-radius:8px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:rgba(255,255,255,.5);transition:.15s;}.socials a:hover{background:var(--o);color:#fff;border-color:var(--o);}
footer h4{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.35);margin-bottom:16px;}
.fl{display:flex;flex-direction:column;gap:8px;}.fl a,.fc a{font-size:13.5px;color:rgba(255,255,255,.5);transition:.15s;}.fl a:hover,.fc a:hover{color:#fff;}
.fc{display:flex;flex-direction:column;gap:10px;}
.footer-bottom{border-top:1px solid rgba(255,255,255,.07);padding:20px 0;display:flex;justify-content:space-between;align-items:center;font-size:12px;color:rgba(255,255,255,.3);flex-wrap:wrap;gap:8px;}
.footer-bottom a{color:rgba(255,255,255,.3);}.footer-bottom a:hover{color:rgba(255,255,255,.6);}
.hero{background:linear-gradient(155deg,#0f1e38 0%,#162847 55%,#0f1e38 100%);padding:72px 0 64px;position:relative;overflow:hidden;}
.hero::after{content:'';position:absolute;top:-40%;right:-10%;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,rgba(var(--ac-rgb),.07) 0%,transparent 70%);pointer-events:none;}
.hero-inner{position:relative;z-index:1;display:grid;grid-template-columns:1fr 360px;gap:52px;align-items:start;}
.eyebrow{display:inline-flex;align-items:center;gap:8px;background:rgba(var(--ac-rgb),.12);border:1px solid rgba(var(--ac-rgb),.25);color:var(--ac);font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;padding:6px 16px;border-radius:99px;margin-bottom:18px;}
.hero h1{font-size:clamp(28px,3.8vw,48px);font-weight:900;color:#fff;line-height:1.06;letter-spacing:-.03em;margin-bottom:16px;}
.hero h1 em{font-style:normal;color:var(--ac);}
.hero-sub{font-size:16px;color:rgba(255,255,255,.65);line-height:1.7;max-width:480px;margin-bottom:22px;}
.hero-badges{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:28px;}
.hb-badge{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);color:rgba(255,255,255,.7);font-size:12px;font-weight:600;padding:7px 14px;border-radius:8px;}
.hero-ctas{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:28px;}
.hero-proof{display:flex;gap:16px;flex-wrap:wrap;}
.proof-item{font-size:12.5px;color:rgba(255,255,255,.45);font-weight:500;display:flex;align-items:center;gap:5px;}
.proof-item strong{color:rgba(255,255,255,.8);}
.lead-box{background:#fff;border-radius:20px;padding:28px;box-shadow:0 20px 60px rgba(0,0,0,.3);position:sticky;top:110px;}
.lead-tag{display:inline-flex;align-items:center;gap:6px;background:rgba(16,185,129,.1);color:#059669;font-size:11px;font-weight:700;padding:4px 12px;border-radius:99px;border:1px solid rgba(16,185,129,.2);margin-bottom:12px;}
.lead-title{font-size:18px;font-weight:900;color:var(--n);margin-bottom:4px;line-height:1.2;}
.lead-sub{font-size:13px;color:var(--s);margin-bottom:18px;line-height:1.5;}
.form-group{margin-bottom:12px;}
.form-group label{display:block;font-size:11.5px;font-weight:700;color:var(--n);margin-bottom:5px;text-transform:uppercase;letter-spacing:.06em;}
.form-group input,.form-group select{width:100%;padding:11px 14px;border:1.5px solid var(--bdr);border-radius:10px;font-size:13.5px;font-family:inherit;color:var(--body);background:#fff;transition:.15s;outline:none;}
.form-group input:focus,.form-group select:focus{border-color:var(--ac);box-shadow:0 0 0 3px rgba(var(--ac-rgb),.08);}
.form-submit{width:100%;padding:15px;background:var(--ac);color:#fff;font-weight:800;font-size:15px;border:none;border-radius:10px;cursor:pointer;transition:.18s;margin-top:4px;}
.form-submit:hover{opacity:.9;transform:translateY(-1px);}
.form-or{text-align:center;font-size:12px;color:var(--s);margin:12px 0;position:relative;}
.form-or::before,.form-or::after{content:'';position:absolute;top:50%;width:40%;height:1px;background:var(--bdr);}
.form-or::before{left:0;}.form-or::after{right:0;}
.form-wa{width:100%;padding:12px;background:#f0fdf4;color:#059669;font-weight:700;font-size:14px;border:1.5px solid #bbf7d0;border-radius:10px;cursor:pointer;transition:.18s;display:flex;align-items:center;justify-content:center;gap:8px;}
.form-wa:hover{background:#dcfce7;}
.form-privacy{font-size:11px;color:var(--s);text-align:center;margin-top:10px;}
.results-strip{background:var(--n);padding:56px 0;}
.results-inner{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;text-align:center;}
.res-num{font-size:36px;font-weight:900;color:#fff;letter-spacing:-.03em;margin-bottom:6px;}
.res-num em{font-style:normal;color:var(--ac);}
.res-label{font-size:13px;font-weight:600;color:rgba(255,255,255,.5);}
.res-sub{font-size:11px;color:rgba(255,255,255,.3);margin-top:3px;}
.inc-section{padding:80px 0;background:#f8fafc;}
.sec-h{text-align:center;max-width:640px;margin:0 auto 52px;}
.sec-h .eyebrow{display:inline-flex;}
.sec-h h2{font-size:clamp(24px,3.2vw,38px);margin-top:14px;margin-bottom:12px;}
.sec-h p{font-size:16px;color:var(--m);line-height:1.7;}
.inc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.inc-card{background:#fff;border:1.5px solid var(--bdr);border-radius:18px;padding:26px;transition:all .2s;}
.inc-card:hover{border-color:var(--ac);box-shadow:0 8px 28px rgba(var(--ac-rgb),.1);transform:translateY(-2px);}
.inc-icon{font-size:30px;margin-bottom:12px;}
.inc-title{font-size:15px;font-weight:800;color:var(--n);margin-bottom:8px;}
.inc-desc{font-size:13px;color:var(--m);line-height:1.6;margin-bottom:12px;}
.inc-list{display:flex;flex-direction:column;gap:5px;}
.inc-list li{font-size:12.5px;color:var(--m);display:flex;align-items:center;gap:7px;}
.inc-list li::before{content:'✓';color:var(--ac);font-weight:800;font-size:12px;flex-shrink:0;}
.process-section{padding:80px 0;}
.process-timeline{display:flex;flex-direction:column;gap:0;max-width:700px;margin:0 auto;}
.pt-item{display:grid;grid-template-columns:60px 1fr;gap:20px;position:relative;padding-bottom:28px;}
.pt-item:not(:last-child)::before{content:'';position:absolute;left:29px;top:56px;bottom:0;width:2px;background:linear-gradient(180deg,var(--ac),rgba(var(--ac-rgb),.1));}
.pt-num{width:56px;height:56px;border-radius:16px;background:var(--ac);color:#fff;font-size:18px;font-weight:900;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 8px 20px rgba(var(--ac-rgb),.3);}
.pt-content{padding-top:12px;}
.pt-title{font-size:16px;font-weight:800;color:var(--n);margin-bottom:6px;}
.pt-desc{font-size:13.5px;color:var(--m);line-height:1.65;}
.faq-section{padding:80px 0;background:#f8fafc;}
.faq-list{max-width:800px;margin:0 auto;display:flex;flex-direction:column;gap:12px;}
.faq-item{background:#fff;border:1px solid var(--bdr);border-radius:14px;overflow:hidden;}
.faq-q{width:100%;text-align:left;background:none;border:none;padding:18px 22px;font-size:14.5px;font-weight:700;color:var(--n);display:flex;justify-content:space-between;align-items:center;gap:16px;cursor:pointer;transition:.15s;}
.faq-q:hover{background:var(--bg);}
.faq-chevron{font-size:18px;transition:transform .2s;opacity:.5;flex-shrink:0;}
.faq-item.on .faq-chevron{transform:rotate(45deg);opacity:1;}
.faq-a{max-height:0;overflow:hidden;transition:max-height .25s ease,padding .2s;}
.faq-item.on .faq-a{max-height:300px;}
.faq-a-inner{padding:0 22px 18px;font-size:13.5px;color:var(--m);line-height:1.7;}
.related-section{padding:60px 0;}
.related-pills{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-top:24px;}
.rel-pill{display:inline-flex;align-items:center;gap:7px;padding:10px 18px;border-radius:10px;font-size:13px;font-weight:600;border:1.5px solid var(--bdr);background:#fff;color:var(--body);transition:.18s;}
.rel-pill:hover{border-color:var(--ac);background:rgba(var(--ac-rgb),.05);color:var(--n);transform:translateY(-2px);}
.cta-strip{background:linear-gradient(135deg,#0f1e38,#162847);padding:64px 0;text-align:center;}
.cta-strip h2{font-size:clamp(22px,3.5vw,38px);color:#fff;margin-bottom:12px;}
.cta-strip p{font-size:15px;color:rgba(255,255,255,.5);max-width:480px;margin:0 auto 28px;line-height:1.6;}
.cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}
.btn-ac{background:var(--ac);color:#fff;font-weight:800;box-shadow:0 4px 18px rgba(var(--ac-rgb),.35);}
.btn-ac:hover{opacity:.9;transform:translateY(-2px);}
@media(max-width:900px){.hb{display:flex;}.dmenu,.navcta .btn-o{display:none;}.hero-inner{grid-template-columns:1fr;}.lead-box{position:static;max-width:500px;}.inc-grid{grid-template-columns:1fr 1fr;}.results-inner{grid-template-columns:1fr 1fr;}.fg{grid-template-columns:1fr 1fr;}}
@media(max-width:600px){.hero{padding:52px 0 44px;}.inc-grid{grid-template-columns:1fr;}.results-inner{grid-template-columns:1fr 1fr;}.fg{grid-template-columns:1fr;}}

/* ── PREMIUM HERO ── */
.hero{background:linear-gradient(155deg,#0f1e38 0%,#162847 55%,#0f1e38 100%);padding:88px 0 80px;position:relative;overflow:hidden;}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 60% at 70% 30%,rgba(124,58,237,.18) 0%,transparent 65%),radial-gradient(ellipse 35% 40% at 5% 80%,rgba(124,58,237,.07) 0%,transparent 60%);pointer-events:none;}
.hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;position:relative;z-index:2;}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 16px;background:rgba(124,58,237,.12);border:1px solid rgba(124,58,237,.3);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#c4b5fd;margin-bottom:20px;}
.hero h1{font-size:clamp(28px,3.8vw,48px);font-weight:900;color:#fff;line-height:1.06;letter-spacing:-.03em;margin-bottom:20px;}
.hero h1 em{font-style:normal;background:linear-gradient(135deg,#c4b5fd,#7C3AED);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-desc{font-size:17px;color:rgba(255,255,255,.62);line-height:1.7;margin-bottom:32px;max-width:460px;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:36px;}
.aii-mock{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:20px;overflow:hidden;backdrop-filter:blur(10px);}
.aii-hdr{background:rgba(255,255,255,.05);border-bottom:1px solid rgba(255,255,255,.08);padding:14px 18px;display:flex;align-items:center;justify-content:space-between;}
.aii-hdr-title{font-size:12px;font-weight:700;color:rgba(255,255,255,.7);letter-spacing:.04em;}
.aii-live{display:flex;align-items:center;gap:6px;font-size:11px;color:#7C3AED;font-weight:600;}
.aii-live::before{content:'';width:7px;height:7px;border-radius:50%;background:#7C3AED;box-shadow:0 0 0 3px rgba(124,58,237,.2);animation:aiip 2s infinite;}
@keyframes aiip{0%,100%{box-shadow:0 0 0 3px rgba(124,58,237,.2);}50%{box-shadow:0 0 0 6px rgba(124,58,237,.05);}}
.aii-kpis{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:rgba(255,255,255,.06);}
.aii-kpi{background:#0f1e38;padding:14px 16px;}
.aii-kpi-lbl{font-size:10px;font-weight:600;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:.08em;margin-bottom:5px;}
.aii-kpi-val{font-size:20px;font-weight:900;color:#7C3AED;letter-spacing:-.02em;line-height:1;}
.aii-kpi-d{font-size:10.5px;margin-top:3px;font-weight:600;color:#4caf50;}
.aii-rows{padding:14px 18px;border-top:1px solid rgba(255,255,255,.06);}
.aii-rows-lbl{font-size:10px;font-weight:600;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;}
.aii-row{display:flex;justify-content:space-between;align-items:center;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.04);font-size:11.5px;}
.aii-row:last-child{border:none;}
.aii-row-n{color:rgba(255,255,255,.55);}
.aii-row-v{color:#c4b5fd;font-weight:700;font-size:11px;}
.aii-btm{padding:12px 18px;background:rgba(124,58,237,.06);border-top:1px solid rgba(124,58,237,.1);display:flex;align-items:center;justify-content:space-between;}
.aii-btm-lbl{font-size:11.5px;color:rgba(255,255,255,.45);}
.aii-btm-val{font-size:15px;font-weight:800;color:#7C3AED;}
@media(max-width:900px){.hero-grid{grid-template-columns:1fr;}.aii-mock{display:none;}}
`

const ld0 = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "AI Automation",
      "provider": {
        "@type": "Organization",
        "name": "Click Decoded",
        "url": "https://www.clickdecoded.com"
      },
      "description": "AI automation for Indore businesses. n8n workflows, AI chatbots, lead automation, and WhatsApp bots. Save 20+ hours/week. Free automation audit.",
      "areaServed": {
        "@type": "City",
        "name": "Indore"
      },
      "serviceType": "AI Automation",
      "url": "https://www.clickdecoded.com/locations/indore/ai-automation"
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
          "name": "AI Automation",
          "item": "https://www.clickdecoded.com/locations/indore/ai-automation"
        }
      ]
    }
  ]
}`

const js0 = `(function(){
const hdr=document.getElementById('hdr');
if(hdr)window.addEventListener('scroll',()=>hdr.classList.toggle('up',scrollY>40),{passive:true});
const hb=document.getElementById('hb'),mn=document.getElementById('mnav'),mc=document.getElementById('mnav-close');
function openMnav(){mn.classList.add('on');document.body.style.overflow='hidden';}
function closeMnav(){mn.classList.remove('on');document.body.style.overflow='';}
if(hb)hb.addEventListener('click',openMnav);
if(mc)mc.addEventListener('click',closeMnav);
document.querySelectorAll('.ma > button').forEach(b=>{
  b.addEventListener('click',()=>{
    const item=b.parentElement,isOpen=item.classList.contains('on');
    document.querySelectorAll('.ma').forEach(x=>x.classList.remove('on'));
    if(!isOpen)item.classList.add('on');
  });
});
document.querySelectorAll('.faq-item').forEach(item=>{
  item.querySelector('.faq-q').addEventListener('click',()=>{
    const isOn=item.classList.contains('on');
    document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('on'));
    if(!isOn)item.classList.add('on');
  });
});
})();`

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld0 }} />
      <nav className="breadcrumb">
<div className="wrap">
<ol className="bc-list">
<li><a href="/">Home</a></li>
<li>›</li>
<li><a href="/service-areas">Areas We Work</a></li>
<li>›</li>
<li><a href="/locations/indore/digital-marketing">Indore</a></li>
<li>›</li>
<li>AI Automation in Indore</li>
</ol>
</div>
</nav>
      <section className="hero">
<div className="wrap">
<div className="hero-grid">
<div>
<div className="hero-eyebrow">🤖 AI Automation — Indore, MP</div>
<h1>Automate Your Indore Business.<br /><em>Save 20+ Hours Weekly.</em></h1>
<p className="hero-desc">We build AI workflows and automation systems for Indore businesses that run 24/7 — lead follow-ups, reporting, support bots — so your team focuses on growth, not repetition.</p>
<div className="hero-btns">
<a href="/contact" className="btn btn-ac">🤖 Book Free Automation Demo</a>
<a href="https://wa.me/919407000101" className="btn btn-ghost">💬 WhatsApp Us</a>
</div>
<div className="hero-proof">
<span className="proof-item"><strong>20+</strong> Hours Saved Per Week</span>
<span className="proof-item"><strong>24/7</strong> Automated Workflows</span>
<span className="proof-item"><strong>Indore</strong> Businesses Served</span>
</div>
</div>
<div className="aii-mock">
<div className="aii-hdr">
<span className="aii-hdr-title">Automation Impact — Indore</span>
<span className="aii-live">Live</span>
</div>
<div className="aii-kpis">
<div className="aii-kpi"><div className="aii-kpi-lbl">Hours Saved/Month</div><div className="aii-kpi-val">480+</div><div className="aii-kpi-d">↑ across 12 clients</div></div>
<div className="aii-kpi"><div className="aii-kpi-lbl">Leads Auto-Followed Up</div><div className="aii-kpi-val">2,840</div><div className="aii-kpi-d">↑ 0% missed</div></div>
<div className="aii-kpi"><div className="aii-kpi-lbl">Tickets Auto-Resolved</div><div className="aii-kpi-val">81%</div><div className="aii-kpi-d">↑ vs 9% before</div></div>
<div className="aii-kpi"><div className="aii-kpi-lbl">Cost Saved</div><div className="aii-kpi-val">₹2.1L</div><div className="aii-kpi-d">↑ in manual work</div></div>
</div>
<div className="aii-rows">
<div className="aii-rows-lbl">Active Automation Workflows</div>
<div className="aii-row"><span className="aii-row-n">WhatsApp Lead Bot — Indore</span><span className="aii-row-v">Running 24/7</span></div>
<div className="aii-row"><span className="aii-row-n">Auto Invoice &amp; GST Reports</span><span className="aii-row-v">Running 24/7</span></div>
<div className="aii-row"><span className="aii-row-n">CRM Data Entry Automation</span><span className="aii-row-v">Running 24/7</span></div>
</div>
<div className="aii-btm">
<span className="aii-btm-lbl">🚀 Automations Deployed This Month</span>
<span className="aii-btm-val">5 new live</span>
</div>
</div>
</div>
</div>
</section>
      <div className="results-strip">
<div className="wrap">
<div className="results-inner">
<div><div className="res-num">20<em>+</em></div><div className="res-label">Hours Saved Per Week</div></div>
<div><div className="res-num">24<em>/7</em></div><div className="res-label">Automation Runtime</div></div>
<div><div className="res-num">500<em>+</em></div><div className="res-label">Workflows Built</div></div>
<div><div className="res-num">48<em>hr</em></div><div className="res-label">First Automation Live</div></div>
</div>
</div>
</div>
      <section className="inc-section">
<div className="wrap">
<div className="sec-h">
<div className="eyebrow">📦 What's Included</div>
<h2>Complete AI Automation for Indore Businesses</h2>
<p>Everything included — no half-measures, no hidden extras.</p>
</div>
<div className="inc-grid">
<div className="inc-card">
<div className="inc-icon">🔄</div>
<div className="inc-title">n8n Workflow Automation</div>
<div className="inc-desc">Connect your tools and automate multi-step processes without writing code — or with it.</div>
<ul className="inc-list"> <li>CRM auto-updates</li>
<li>Lead routing workflows</li>
<li>Invoice generation</li>
<li>Data sync between platforms</li>
<li>Report automation</li></ul>
</div>
<div className="inc-card">
<div className="inc-icon">💬</div>
<div className="inc-title">AI Chatbot Development</div>
<div className="inc-desc">Intelligent chatbots that handle inquiries, qualify leads, and book appointments — 24/7.</div>
<ul className="inc-list"> <li>Website chat integration</li>
<li>WhatsApp chatbot</li>
<li>FAQ automation</li>
<li>Lead qualification bot</li>
<li>Appointment booking bot</li></ul>
</div>
<div className="inc-card">
<div className="inc-icon">📧</div>
<div className="inc-title">Lead Nurture Automation</div>
<div className="inc-desc">Automatically follow up with every Indore lead — by email, WhatsApp, or SMS.</div>
<ul className="inc-list"> <li>Lead capture → CRM</li>
<li>Automated follow-up sequences</li>
<li>Lead scoring</li>
<li>Pipeline stage automation</li>
<li>No-response re-triggers</li></ul>
</div>
<div className="inc-card">
<div className="inc-icon">📊</div>
<div className="inc-title">Reporting Automation</div>
<div className="inc-desc">Automatically generate and send your business reports — daily, weekly, or monthly.</div>
<ul className="inc-list"> <li>Google Analytics reports</li>
<li>Ads performance reports</li>
<li>Sales summary reports</li>
<li>WhatsApp report delivery</li>
<li>Custom dashboard</li></ul>
</div>
<div className="inc-card">
<div className="inc-icon">🛒</div>
<div className="inc-title">E-Commerce Automation</div>
<div className="inc-desc">Automate order processing, inventory alerts, customer follow-ups, and review requests.</div>
<ul className="inc-list"> <li>Order confirmation flows</li>
<li>Low stock alerts</li>
<li>Abandoned cart recovery</li>
<li>Post-purchase review requests</li>
<li>Return handling</li></ul>
</div>
<div className="inc-card">
<div className="inc-icon">🔗</div>
<div className="inc-title">API &amp; Integration</div>
<div className="inc-desc">Connect any two platforms — CRM, ERP, WhatsApp, email, payment gateways.</div>
<ul className="inc-list"> <li>Zapier / Make.com builds</li>
<li>Custom API integrations</li>
<li>Webhook setup</li>
<li>Data transformation</li>
<li>Error handling &amp; monitoring</li></ul>
</div>
</div>
</div>
</section>
      <section className="process-section">
<div className="wrap">
<div className="sec-h">
<div className="eyebrow">📋 How It Works</div>
<h2>Our Process — Clear Steps, No Black Boxes</h2>
<p>You know exactly what we're doing at every stage.</p>
</div>
<div className="process-timeline">
<div className="pt-item">
<div className="pt-num">01</div>
<div className="pt-content"><div className="pt-title">Automation Audit</div><div className="pt-desc">We map your current workflows and identify the highest-ROI automation opportunities.</div></div>
</div>
<div className="pt-item">
<div className="pt-num">02</div>
<div className="pt-content"><div className="pt-title">Automation Design</div><div className="pt-desc">We design the logic, connections, and error handling for each workflow.</div></div>
</div>
<div className="pt-item">
<div className="pt-num">03</div>
<div className="pt-content"><div className="pt-title">Build &amp; Test</div><div className="pt-desc">We build the automation in n8n or your preferred platform and test thoroughly.</div></div>
</div>
<div className="pt-item">
<div className="pt-num">04</div>
<div className="pt-content"><div className="pt-title">Go Live</div><div className="pt-desc">Automation goes live with monitoring and alerts set up from day one.</div></div>
</div>
<div className="pt-item">
<div className="pt-num">05</div>
<div className="pt-content"><div className="pt-title">Support &amp; Expand</div><div className="pt-desc">We monitor, fix issues, and add new automations as your Indore business grows.</div></div>
</div>
</div>
</div>
</section>
      <section className="faq-section">
<div className="wrap">
<div className="sec-h">
<div className="eyebrow">❓ FAQs — AI Automation Indore</div>
<h2>Common Questions</h2>
</div>
<div className="faq-list">
<div className="faq-item">
<button className="faq-q">What can AI automation do for my Indore business? <span className="faq-chevron">+</span></button>
<div className="faq-a"><div className="faq-a-inner">AI automation can handle lead capture and follow-up, WhatsApp responses, report generation, invoice creation, social media posting, customer onboarding, appointment booking, and dozens of other repetitive tasks — saving your team 20+ hours every week.</div></div>
</div>
<div className="faq-item">
<button className="faq-q">How much does AI automation cost in Indore? <span className="faq-chevron">+</span></button>
<div className="faq-a"><div className="faq-a-inner">Automation projects start at ₹25,000 as a one-time build cost. Ongoing management and expansion is available as a monthly retainer. We always start with an audit to scope accurately.</div></div>
</div>
<div className="faq-item">
<button className="faq-q">Do I need technical knowledge to use automation in my Indore business? <span className="faq-chevron">+</span></button>
<div className="faq-a"><div className="faq-a-inner">No. We build, test, and hand over ready-to-run automation systems. We train your team on how to use them and monitor for issues.</div></div>
</div>
<div className="faq-item">
<button className="faq-q">What tools do you use for automation in Indore businesses? <span className="faq-chevron">+</span></button>
<div className="faq-a"><div className="faq-a-inner">We primarily use n8n (open-source, self-hosted), Make.com, Zapier, and custom API integrations. We recommend n8n for Indore businesses that want full control and no per-task pricing.</div></div>
</div>
<div className="faq-item">
<button className="faq-q">How long does it take to build an automation for my Indore business? <span className="faq-chevron">+</span></button>
<div className="faq-a"><div className="faq-a-inner">Simple automations (like a lead capture to WhatsApp flow) can go live in 24–48 hours. Complex multi-step workflows with integrations take 1–2 weeks.</div></div>
</div>
<div className="faq-item">
<button className="faq-q">Can you automate my WhatsApp customer communication in Indore? <span className="faq-chevron">+</span></button>
<div className="faq-a"><div className="faq-a-inner">Yes — WhatsApp Business API automation is one of our most popular services for Indore businesses. We automate welcome messages, follow-ups, appointment reminders, and order updates.</div></div>
</div>
</div>
</div>
</section>
      <section className="related-section">
<div className="wrap">
<div className="sec-h">
<div className="eyebrow">🔗 Related Services</div>
<h2>More Services for Indore Businesses</h2>
</div>
<div className="related-pills">
<a href="/locations/indore/whatsapp-automation" className="rel-pill">💬 WhatsApp Automation Indore</a>
<a href="/locations/indore/seo" className="rel-pill">🔍 SEO Services Indore</a>
<a href="/locations/indore/web-development" className="rel-pill">💻 Web Development Indore</a>
<a href="/locations/indore/digital-marketing" className="rel-pill">🏙️ All Services Indore</a>
<a href="/service-areas" className="rel-pill">🗺️ All Cities</a>
</div>
</div>
</section>
      <section className="cta-strip">
<div className="wrap">
<div style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '.12em', color: 'rgba(255,255,255,.3)', marginBottom: '12px' }}>📍 AI Automation — Indore</div>
<h2>Automate Your Indore Business and Get 20+ Hours Back</h2>
<p>Free automation audit. First workflow live in 48 hours. No technical knowledge needed.</p>
<div className="cta-btns">
<a href="#get-audit" className="btn btn-ac">Get Free Automation Audit →</a>
<a href="https://wa.me/919407000101?text=Hi%2C%20I%20need%20AI%20automation%20for%20my%20Indore%20business" target="_blank" rel="noopener" className="btn btn-wa">💬 WhatsApp Now</a>
<a href="tel:+919407000101" className="btn btn-outline-white">📞 +91 94070 00101</a>
</div>
</div>
</section>
      <PageScript id="locations-indore-ai-automation-0" code={js0} />
    </>
  )
}
