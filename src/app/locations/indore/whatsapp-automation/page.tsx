/* eslint-disable */
// src/app/locations/indore/whatsapp-automation/page.tsx — generated from whatsapp-automation-indore.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "WhatsApp Automation in Indore | WhatsApp Business API",
  description: "WhatsApp Business API automation for Indore businesses. Auto-replies, lead follow-up, broadcast messages, chatbots & appointment booking. Free audit.",
  alternates: { canonical: "/locations/indore/whatsapp-automation" },
  openGraph: {
    title: "WhatsApp Automation in Indore — Click Decoded",
    description: "WhatsApp Business API automation for Indore businesses. Auto-reply, lead follow-up & chatbots. Free audit.",
    url: "/locations/indore/whatsapp-automation",
    type: "website",
  },
}

const css = `
:root{--n:#2A4573;--n2:#1e3460;--n-dark:#0f1e38;--o:#EE7E1A;--o2:#d46e12;--body:#1E293B;--m:#475569;--s:#64748b;--bg:#F4F7FC;--bdr:#E2E8F0;--gr:#25D366;--ac:#25D366;--ac-rgb:37,211,102;}
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
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 60% at 70% 30%,rgba(37,211,102,.18) 0%,transparent 65%),radial-gradient(ellipse 35% 40% at 5% 80%,rgba(37,211,102,.07) 0%,transparent 60%);pointer-events:none;}
.hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;position:relative;z-index:2;}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 16px;background:rgba(37,211,102,.12);border:1px solid rgba(37,211,102,.3);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#86efac;margin-bottom:20px;}
.hero h1{font-size:clamp(28px,3.8vw,48px);font-weight:900;color:#fff;line-height:1.06;letter-spacing:-.03em;margin-bottom:20px;}
.hero h1 em{font-style:normal;background:linear-gradient(135deg,#86efac,#25D366);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-desc{font-size:17px;color:rgba(255,255,255,.62);line-height:1.7;margin-bottom:32px;max-width:460px;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:36px;}
.wai-mock{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:20px;overflow:hidden;backdrop-filter:blur(10px);}
.wai-hdr{background:rgba(255,255,255,.05);border-bottom:1px solid rgba(255,255,255,.08);padding:14px 18px;display:flex;align-items:center;justify-content:space-between;}
.wai-hdr-title{font-size:12px;font-weight:700;color:rgba(255,255,255,.7);letter-spacing:.04em;}
.wai-live{display:flex;align-items:center;gap:6px;font-size:11px;color:#25D366;font-weight:600;}
.wai-live::before{content:'';width:7px;height:7px;border-radius:50%;background:#25D366;box-shadow:0 0 0 3px rgba(37,211,102,.2);animation:waip 2s infinite;}
@keyframes waip{0%,100%{box-shadow:0 0 0 3px rgba(37,211,102,.2);}50%{box-shadow:0 0 0 6px rgba(37,211,102,.05);}}
.wai-kpis{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:rgba(255,255,255,.06);}
.wai-kpi{background:#0f1e38;padding:14px 16px;}
.wai-kpi-lbl{font-size:10px;font-weight:600;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:.08em;margin-bottom:5px;}
.wai-kpi-val{font-size:20px;font-weight:900;color:#25D366;letter-spacing:-.02em;line-height:1;}
.wai-kpi-d{font-size:10.5px;margin-top:3px;font-weight:600;color:#4caf50;}
.wai-rows{padding:14px 18px;border-top:1px solid rgba(255,255,255,.06);}
.wai-rows-lbl{font-size:10px;font-weight:600;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;}
.wai-row{display:flex;justify-content:space-between;align-items:center;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.04);font-size:11.5px;}
.wai-row:last-child{border:none;}
.wai-row-n{color:rgba(255,255,255,.55);}
.wai-row-v{color:#86efac;font-weight:700;font-size:11px;}
.wai-btm{padding:12px 18px;background:rgba(37,211,102,.06);border-top:1px solid rgba(37,211,102,.1);display:flex;align-items:center;justify-content:space-between;}
.wai-btm-lbl{font-size:11.5px;color:rgba(255,255,255,.45);}
.wai-btm-val{font-size:15px;font-weight:800;color:#25D366;}
@media(max-width:900px){.hero-grid{grid-template-columns:1fr;}.wai-mock{display:none;}}
`

const ld0 = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "WhatsApp Automation",
      "provider": {
        "@type": "Organization",
        "name": "Click Decoded",
        "url": "https://www.clickdecoded.com"
      },
      "description": "WhatsApp Business API automation for Indore businesses. Auto-replies, lead follow-up, broadcast messages, chatbots & appointment booking. Free audit.",
      "areaServed": {
        "@type": "City",
        "name": "Indore"
      },
      "serviceType": "WhatsApp Automation",
      "url": "https://www.clickdecoded.com/locations/indore/whatsapp-automation"
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
          "item": "https://www.clickdecoded.com/locations/indore/whatsapp-automation"
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
<li>WhatsApp Automation in Indore</li>
</ol>
</div>
</nav>
      <section className="hero">
<div className="wrap">
<div className="hero-grid">
<div>
<div className="hero-eyebrow">💬 WhatsApp Automation — Indore, MP</div>
<h1>Automate Your WhatsApp.<br /><em>Never Miss an Indore Lead Again.</em></h1>
<p className="hero-desc">Indore businesses run on WhatsApp. We automate your WhatsApp Business account — instant replies, lead follow-ups, appointment reminders, and broadcast messages running 24/7.</p>
<div className="hero-btns">
<a href="/contact" className="btn btn-ac">💬 Book Free WhatsApp Demo</a>
<a href="https://wa.me/919407000101" className="btn btn-ghost">💬 WhatsApp Us</a>
</div>
<div className="hero-proof">
<span className="proof-item"><strong>24/7</strong> Automated Replies</span>
<span className="proof-item"><strong>&lt; 30 sec</strong> Lead Response Time</span>
<span className="proof-item"><strong>Indore</strong> Businesses Served</span>
</div>
</div>
<div className="wai-mock">
<div className="wai-hdr">
<span className="wai-hdr-title">WhatsApp Automation — Indore</span>
<span className="wai-live">Live</span>
</div>
<div className="wai-kpis">
<div className="wai-kpi"><div className="wai-kpi-lbl">Msgs Auto-Handled</div><div className="wai-kpi-val">5,120/mo</div><div className="wai-kpi-d">↑ 0 manual effort</div></div>
<div className="wai-kpi"><div className="wai-kpi-lbl">Lead Response Time</div><div className="wai-kpi-val">&lt; 30 sec</div><div className="wai-kpi-d">↑ from 5+ hours</div></div>
<div className="wai-kpi"><div className="wai-kpi-lbl">Bookings via WhatsApp</div><div className="wai-kpi-val">368</div><div className="wai-kpi-d">↑ automated bot</div></div>
<div className="wai-kpi"><div className="wai-kpi-lbl">Revenue Attributed</div><div className="wai-kpi-val">₹11.2L</div><div className="wai-kpi-d">↑ from WhatsApp alone</div></div>
</div>
<div className="wai-rows">
<div className="wai-rows-lbl">Active Automation Workflows</div>
<div className="wai-row"><span className="wai-row-n">Lead Capture &amp; Welcome Bot</span><span className="wai-row-v">Running — 24/7</span></div>
<div className="wai-row"><span className="wai-row-n">Appointment Reminder System</span><span className="wai-row-v">Running — 24/7</span></div>
<div className="wai-row"><span className="wai-row-n">Order &amp; Delivery Updates</span><span className="wai-row-v">Running — 24/7</span></div>
</div>
<div className="wai-btm">
<span className="wai-btm-lbl">⚡ Avg. Response Time</span>
<span className="wai-btm-val">&lt; 30 seconds</span>
</div>
</div>
</div>
</div>
</section>
      <div className="results-strip">
<div className="wrap">
<div className="results-inner">
<div><div className="res-num">10<em>+</em></div><div className="res-label">Hours Saved Per Week</div></div>
<div><div className="res-num">24<em>/7</em></div><div className="res-label">Auto-Reply Active</div></div>
<div><div className="res-num">500<em>+</em></div><div className="res-label">WhatsApp Bots Built</div></div>
<div><div className="res-num">48<em>hr</em></div><div className="res-label">Go-Live Time</div></div>
</div>
</div>
</div>
      <section className="inc-section">
<div className="wrap">
<div className="sec-h">
<div className="eyebrow">📦 What's Included</div>
<h2>Complete WhatsApp Automation for Indore Businesses</h2>
<p>Everything included — no half-measures, no hidden extras.</p>
</div>
<div className="inc-grid">
<div className="inc-card">
<div className="inc-icon">⚡</div>
<div className="inc-title">Instant Auto-Reply</div>
<div className="inc-desc">Never leave an Indore lead waiting. Instant WhatsApp reply the moment they message you.</div>
<ul className="inc-list"> <li>Welcome message automation</li>
<li>Out-of-hours auto-reply</li>
<li>FAQ auto-response</li>
<li>Menu-based reply flows</li>
<li>Lead capture from WhatsApp</li></ul>
</div>
<div className="inc-card">
<div className="inc-icon">🔄</div>
<div className="inc-title">Lead Follow-Up Sequences</div>
<div className="inc-desc">Automatically follow up with every lead on WhatsApp until they respond.</div>
<ul className="inc-list"> <li>Day 1/3/7 follow-up sequences</li>
<li>No-reply re-triggers</li>
<li>Lead stage-based messages</li>
<li>Appointment reminders</li>
<li>Quote follow-ups</li></ul>
</div>
<div className="inc-card">
<div className="inc-icon">📢</div>
<div className="inc-title">Broadcast Campaigns</div>
<div className="inc-desc">Send bulk WhatsApp messages to your Indore customer list — legally, via Business API.</div>
<ul className="inc-list"> <li>Broadcast message setup</li>
<li>Audience segmentation</li>
<li>Template message approval</li>
<li>Delivery &amp; read tracking</li>
<li>Campaign scheduling</li></ul>
</div>
<div className="inc-card">
<div className="inc-icon">🤖</div>
<div className="inc-title">AI-Powered Chatbot</div>
<div className="inc-desc">A smart chatbot that answers questions, qualifies leads, and books appointments on WhatsApp.</div>
<ul className="inc-list"> <li>Natural language responses</li>
<li>Lead qualification flow</li>
<li>Appointment booking integration</li>
<li>Product/service catalog</li>
<li>Handoff to human agent</li></ul>
</div>
<div className="inc-card">
<div className="inc-icon">📋</div>
<div className="inc-title">CRM Integration</div>
<div className="inc-desc">Every WhatsApp lead automatically goes into your CRM with full conversation history.</div>
<ul className="inc-list"> <li>Google Sheets / Notion sync</li>
<li>CRM platform integration</li>
<li>Lead tagging &amp; scoring</li>
<li>Pipeline automation</li>
<li>Contact deduplication</li></ul>
</div>
<div className="inc-card">
<div className="inc-icon">📊</div>
<div className="inc-title">WhatsApp Analytics</div>
<div className="inc-desc">Track message delivery, read rates, response rates, and lead conversion from WhatsApp.</div>
<ul className="inc-list"> <li>Delivery &amp; open rate tracking</li>
<li>Response time monitoring</li>
<li>Lead conversion tracking</li>
<li>Campaign performance</li>
<li>Monthly WhatsApp report</li></ul>
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
<div className="pt-content"><div className="pt-title">WhatsApp Audit</div><div className="pt-desc">We review your current WhatsApp setup and map the automation opportunities.</div></div>
</div>
<div className="pt-item">
<div className="pt-num">02</div>
<div className="pt-content"><div className="pt-title">API Setup</div><div className="pt-desc">We connect your WhatsApp Business API (via official providers — Interakt, Wati, or 360dialog).</div></div>
</div>
<div className="pt-item">
<div className="pt-num">03</div>
<div className="pt-content"><div className="pt-title">Bot &amp; Flow Build</div><div className="pt-desc">We build your chatbot flows, auto-reply sequences, and broadcast templates.</div></div>
</div>
<div className="pt-item">
<div className="pt-num">04</div>
<div className="pt-content"><div className="pt-title">Testing &amp; Approval</div><div className="pt-desc">We test all flows end-to-end and get WhatsApp template messages approved.</div></div>
</div>
<div className="pt-item">
<div className="pt-num">05</div>
<div className="pt-content"><div className="pt-title">Go Live + Training</div><div className="pt-desc">Automation goes live. We train your team and monitor for the first 30 days.</div></div>
</div>
</div>
</div>
</section>
      <section className="faq-section">
<div className="wrap">
<div className="sec-h">
<div className="eyebrow">❓ FAQs — WhatsApp Automation Indore</div>
<h2>Common Questions</h2>
</div>
<div className="faq-list">
<div className="faq-item">
<button className="faq-q">What is WhatsApp Business API and why do Indore businesses need it? <span className="faq-chevron">+</span></button>
<div className="faq-a"><div className="faq-a-inner">The WhatsApp Business API (unlike the regular WhatsApp Business app) allows bulk messaging, automation, chatbots, and CRM integration. It's ideal for Indore businesses that get 20+ WhatsApp inquiries per day and want to automate responses and follow-ups.</div></div>
</div>
<div className="faq-item">
<button className="faq-q">How much does WhatsApp automation cost in Indore? <span className="faq-chevron">+</span></button>
<div className="faq-a"><div className="faq-a-inner">WhatsApp automation projects start at ₹25,000 as a one-time build. Ongoing management is available from ₹10,000/month. WhatsApp API provider fees are separate (typically ₹2,000–₹5,000/month based on message volume).</div></div>
</div>
<div className="faq-item">
<button className="faq-q">How quickly can you set up WhatsApp automation for my Indore business? <span className="faq-chevron">+</span></button>
<div className="faq-a"><div className="faq-a-inner">Basic auto-reply and follow-up automation can go live within 48 hours. Full chatbot with CRM integration typically takes 5–10 days.</div></div>
</div>
<div className="faq-item">
<button className="faq-q">Which WhatsApp API providers do you work with in Indore? <span className="faq-chevron">+</span></button>
<div className="faq-a"><div className="faq-a-inner">We work with Interakt, Wati, 360dialog, and AiSensy — all official Meta Business Solution Providers. We recommend the best fit based on your message volume and budget.</div></div>
</div>
<div className="faq-item">
<button className="faq-q">Can WhatsApp automation handle customer inquiries in Hindi? <span className="faq-chevron">+</span></button>
<div className="faq-a"><div className="faq-a-inner">Yes. We build chatbots that respond in Hindi, Hinglish, or English — based on what your Indore customers prefer.</div></div>
</div>
<div className="faq-item">
<button className="faq-q">Will my Indore customers know they're talking to a bot? <span className="faq-chevron">+</span></button>
<div className="faq-a"><div className="faq-a-inner">Only if you want them to. We design chatbot flows that feel natural and helpful. When the bot reaches its limit, it hands off seamlessly to a human agent.</div></div>
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
<a href="/locations/indore/ai-automation" className="rel-pill">🤖 AI Automation Indore</a>
<a href="/locations/indore/seo" className="rel-pill">🔍 SEO Services Indore</a>
<a href="/locations/indore/google-ads" className="rel-pill">🎯 Google Ads Indore</a>
<a href="/locations/indore/digital-marketing" className="rel-pill">🏙️ All Services Indore</a>
<a href="/service-areas" className="rel-pill">🗺️ All Cities</a>
</div>
</div>
</section>
      <section className="cta-strip">
<div className="wrap">
<div style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '.12em', color: 'rgba(255,255,255,.3)', marginBottom: '12px' }}>📍 WhatsApp Automation — Indore</div>
<h2>Never Miss an Indore Lead on WhatsApp Again</h2>
<p>Free WhatsApp audit. Bot live in 48 hours. 10+ hours saved every week.</p>
<div className="cta-btns">
<a href="#get-audit" className="btn btn-ac">Get Free WhatsApp Audit →</a>
<a href="https://wa.me/919407000101?text=Hi%2C%20I%20need%20WhatsApp%20automation%20for%20my%20Indore%20business" target="_blank" rel="noopener" className="btn btn-wa">💬 WhatsApp Now</a>
<a href="tel:+919407000101" className="btn btn-outline-white">📞 +91 94070 00101</a>
</div>
</div>
</section>
      <PageScript id="locations-indore-whatsapp-automation-0" code={js0} />
    </>
  )
}
