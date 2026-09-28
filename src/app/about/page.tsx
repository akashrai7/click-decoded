/* eslint-disable */
// src/app/about/page.tsx — generated from about.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "About Click Decoded | AI-Powered Digital Agency",
  description: "Click Decoded is a brand of Aharnish Infotech Private Limited. India's AI-powered B2B digital agency offering SEO, Web Dev, Google Ads, and AI Automation.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Click Decoded — AI-Powered Digital Agency India",
    description: "Meet the team behind Click Decoded. Aharnish Infotech Pvt. Ltd. — 12 years of digital excellence, now supercharged with AI automation and intelligent workflows.",
    url: "/about",
    type: "website",
  },
}

const css = `
:root{--n:#2A4573;--n2:#1e3460;--n-dark:#0f1e38;--b:#2A4573;--o:#EE7E1A;--o2:#d46e12;--w:#fff;--body:#1E293B;--m:#475569;--s:#64748b;--bg:#F4F7FC;--bdr:#E2E8F0;}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}html{scroll-behavior:smooth;overflow-x:hidden;}body{font-family:'Inter',system-ui,sans-serif;color:var(--body);background:#fff;-webkit-font-smoothing:antialiased;}a{text-decoration:none;color:inherit;}img,svg{display:block;}ul{list-style:none;}button{font-family:inherit;cursor:pointer;}
.wrap{max-width:1200px;margin:0 auto;padding:0 28px;}section{padding:88px 0;}h1,h2,h3,h4{font-weight:800;line-height:1.1;letter-spacing:-.025em;color:var(--n);}
.pill{display:inline-flex;align-items:center;gap:7px;padding:6px 14px;border-radius:99px;font-size:11.5px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;}
.pill-o{background:rgba(238,126,26,.12);color:var(--o);}
.pill-n{background:rgba(42,69,115,.1);color:var(--n);}
.sec-h{text-align:center;max-width:700px;margin:0 auto 52px;}.sec-h h2{font-size:38px;margin-top:12px;margin-bottom:14px;}.sec-h p{font-size:16px;color:var(--m);line-height:1.7;}
.btn{display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:10px;font-weight:700;font-size:14px;border:none;transition:all .18s;white-space:nowrap;cursor:pointer;}
.btn-o{background:var(--o);color:#fff;box-shadow:0 4px 18px rgba(238,126,26,.3);}.btn-o:hover{background:var(--o2);transform:translateY(-2px);}
.btn-n{background:var(--n);color:#fff;}.btn-n:hover{background:var(--n2);transform:translateY(-2px);}
.btn-ghost{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.4);}.btn-ghost:hover{background:rgba(255,255,255,.08);}
/* TOPBAR & NAV */
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
.hero{background:linear-gradient(155deg,#0a1628 0%,#0f1e38 55%,#07111f 100%);padding:100px 0 88px;position:relative;overflow:hidden;}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 60% at 80% 30%,rgba(238,126,26,.07) 0%,transparent 65%),radial-gradient(ellipse 45% 50% at 10% 70%,rgba(42,69,115,.25) 0%,transparent 65%);}
.hero-grid{display:grid;grid-template-columns:1.1fr 1fr;gap:64px;align-items:center;position:relative;z-index:2;}
.hero-badge{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;background:rgba(238,126,26,.12);border:1px solid rgba(238,126,26,.25);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:var(--o);margin-bottom:22px;}
.hero h1{font-size:54px;color:#fff;line-height:1.04;letter-spacing:-.04em;margin-bottom:20px;}.hero h1 em{font-style:normal;color:var(--o);}
.hero-desc{font-size:17px;color:rgba(255,255,255,.6);line-height:1.75;margin-bottom:32px;max-width:500px;}
.hero-legal{display:inline-flex;align-items:center;gap:8px;padding:10px 16px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:10px;font-size:12px;color:rgba(255,255,255,.5);margin-bottom:32px;}
.hero-legal strong{color:rgba(255,255,255,.85);font-weight:600;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;}
/* HERO VISUAL — AI + Human card stack */
.hero-visual{position:relative;height:380px;}
.hv-card{position:absolute;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:22px;backdrop-filter:blur(12px);}
.hv-main{width:100%;top:0;left:0;}
.hv-main-header{display:flex;align-items:center;gap:12px;margin-bottom:18px;}
.hv-logo-box{width:42px;height:42px;background:linear-gradient(135deg,var(--o),var(--o2));border-radius:11px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;}
.hv-main-title{font-size:15px;font-weight:700;color:#fff;}.hv-main-sub{font-size:11px;color:rgba(255,255,255,.4);}
.hv-metrics{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
.hv-metric{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.07);border-radius:12px;padding:12px 14px;}
.hv-metric-v{font-size:22px;font-weight:900;color:#fff;letter-spacing:-.03em;}.hv-metric-l{font-size:10.5px;color:rgba(255,255,255,.45);margin-top:2px;}
.hv-ai-card{width:220px;bottom:0;right:0;background:rgba(42,69,115,.4);border-color:rgba(42,69,115,.5);}
.hv-ai-header{display:flex;align-items:center;gap:9px;margin-bottom:12px;}
.hv-ai-icon{width:32px;height:32px;background:rgba(238,126,26,.2);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:15px;}
.hv-ai-title{font-size:12.5px;font-weight:700;color:#fff;}
.hv-ai-rows{display:flex;flex-direction:column;gap:7px;}
.hv-ai-row{display:flex;justify-content:space-between;align-items:center;font-size:11.5px;}
.hv-ai-row span{color:rgba(255,255,255,.5);}.hv-ai-row strong{color:#fff;}
.hv-ai-bar{width:100%;height:4px;background:rgba(255,255,255,.08);border-radius:2px;margin-top:3px;overflow:hidden;}
.hv-ai-fill{height:100%;border-radius:2px;background:linear-gradient(90deg,var(--o),#f59e0b);}
.hv-human-card{width:200px;top:50%;transform:translateY(-50%);right:-16px;background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.12);}
/* STATS STRIP */
.stats-strip{background:var(--n);padding:0;}
.stats-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:1px;background:rgba(0,0,0,.15);}
.stat-box{padding:30px 20px;text-align:center;background:var(--n);}
.stat-n{font-size:36px;font-weight:900;color:#fff;line-height:1;letter-spacing:-.03em;}
.stat-l{font-size:11.5px;color:rgba(255,255,255,.6);margin-top:6px;font-weight:500;text-transform:uppercase;letter-spacing:.06em;}
/* STORY SECTION */
.story-grid{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center;}
.story-text h2{font-size:40px;margin-bottom:20px;}
.story-text p{font-size:15.5px;color:var(--m);line-height:1.8;margin-bottom:18px;}
.story-text p:last-child{margin:0;}
.story-legalbox{background:var(--bg);border:1px solid var(--bdr);border-left:4px solid var(--o);border-radius:0 12px 12px 0;padding:18px 20px;margin-top:28px;}
.story-legalbox p{font-size:13px;color:var(--s);line-height:1.6;margin:0;}
.story-legalbox strong{color:var(--n);}
.story-visual{position:relative;}
.sv-timeline{display:flex;flex-direction:column;gap:0;}
.sv-year{display:flex;gap:16px;padding-bottom:28px;position:relative;}
.sv-year::before{content:'';position:absolute;left:19px;top:38px;bottom:0;width:2px;background:var(--bdr);}
.sv-year:last-child{padding-bottom:0;}.sv-year:last-child::before{display:none;}
.sv-dot{width:40px;height:40px;border-radius:10px;background:var(--o);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:#fff;flex-shrink:0;}
.sv-dot.alt{background:var(--n);}
.sv-content{padding-top:8px;}.sv-year-label{font-size:11px;font-weight:700;color:var(--o);text-transform:uppercase;letter-spacing:.1em;margin-bottom:3px;}
.sv-content h4{font-size:15px;margin-bottom:4px;}.sv-content p{font-size:13px;color:var(--m);line-height:1.6;}
/* AI + HUMAN SECTION */
.aihuman-section{background:linear-gradient(170deg,#080e1d 0%,#0c1428 50%,#050b18 100%);padding:96px 0;position:relative;overflow:hidden;}
.aihuman-section::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 40% 60% at 20% 50%,rgba(238,126,26,.06),transparent),radial-gradient(ellipse 50% 50% at 80% 30%,rgba(42,69,115,.18),transparent),radial-gradient(ellipse 35% 40% at 50% 100%,rgba(238,126,26,.04),transparent);}
.aihuman-section .sec-h h2{color:#fff;}.aihuman-section .sec-h p{color:rgba(255,255,255,.5);}
/* 3-col: ai-card | divider | human-card */
.aihuman-grid{display:grid;grid-template-columns:1fr 72px 1fr;gap:0;position:relative;z-index:2;align-items:stretch;}
.ah-card{border-radius:20px;padding:36px 32px;position:relative;overflow:hidden;}
.ah-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;border-radius:20px 20px 0 0;}
.ah-card.ai{background:rgba(255,255,255,.03);border:1px solid rgba(238,126,26,.18);border-radius:20px 0 0 20px;}
.ah-card.ai::before{background:linear-gradient(90deg,var(--o),#f59e0b);}
.ah-card.human{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.1);border-left:none;border-radius:0 20px 20px 0;}
.ah-card.human::before{background:linear-gradient(90deg,rgba(255,255,255,.15),rgba(255,255,255,.4));}
/* watermark icon */
.ah-card::after{content:attr(data-icon);position:absolute;bottom:-10px;right:16px;font-size:90px;opacity:.04;line-height:1;pointer-events:none;}
.ah-icon-wrap{width:48px;height:48px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:20px;}
.ah-card.ai .ah-icon-wrap{background:rgba(238,126,26,.15);border:1px solid rgba(238,126,26,.25);}
.ah-card.human .ah-icon-wrap{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);}
.ah-card h3{font-size:21px;color:#fff;margin-bottom:10px;letter-spacing:-.02em;}
.ah-card p{font-size:14px;color:rgba(255,255,255,.5);line-height:1.75;margin-bottom:22px;}
.ah-list{display:flex;flex-direction:column;gap:9px;}
.ah-item{display:flex;align-items:flex-start;gap:10px;font-size:13.5px;color:rgba(255,255,255,.7);line-height:1.5;}
.ah-item-dot{width:20px;height:20px;border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800;flex-shrink:0;margin-top:1px;}
.ah-card.ai .ah-item-dot{background:rgba(238,126,26,.2);color:var(--o);}
.ah-card.human .ah-item-dot{background:rgba(255,255,255,.08);color:rgba(255,255,255,.55);}
/* Middle connector */
.ah-divider{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;position:relative;}
.ah-divider::before{content:'';position:absolute;top:0;bottom:0;left:50%;width:1px;background:linear-gradient(to bottom,transparent,rgba(238,126,26,.3) 30%,rgba(238,126,26,.3) 70%,transparent);transform:translateX(-50%);}
.ah-plus{width:48px;height:48px;background:linear-gradient(135deg,var(--o),var(--o2));border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff;box-shadow:0 0 0 6px rgba(238,126,26,.1),0 8px 28px rgba(238,126,26,.35);position:relative;z-index:1;}
/* Result bar — spans all 3 columns */
.ah-result{grid-column:1/-1;margin-top:20px;background:linear-gradient(135deg,rgba(238,126,26,.08),rgba(238,126,26,.04));border:1px solid rgba(238,126,26,.18);border-radius:16px;padding:28px 36px;display:flex;align-items:center;gap:24px;}
.ah-result-icon{font-size:40px;flex-shrink:0;}
.ah-result-text{flex:1;}
.ah-result h4{font-size:17px;color:#fff;margin-bottom:7px;letter-spacing:-.02em;}
.ah-result p{font-size:14px;color:rgba(255,255,255,.5);line-height:1.65;margin:0;}
.ah-result-badge{flex-shrink:0;text-align:center;}
.ah-result-badge span{display:block;font-size:26px;font-weight:900;color:var(--o);letter-spacing:-.03em;line-height:1;}
.ah-result-badge small{font-size:10px;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:.08em;}
/* VALUES */
.values-section{background:var(--bg);}
.values-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.val-card{background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:32px 26px;transition:.2s;}
.val-card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(42,69,115,.08);border-color:rgba(238,126,26,.25);}
.val-em{font-size:36px;margin-bottom:18px;}
.val-card h3{font-size:18px;margin-bottom:10px;}
.val-card p{font-size:14px;color:var(--m);line-height:1.7;}
/* TEAM SECTION */
.team-section{background:#fff;}
.team-intro{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;margin-bottom:60px;}
.team-intro h2{font-size:40px;margin-bottom:16px;}
.team-intro p{font-size:15.5px;color:var(--m);line-height:1.8;}
.dept-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;}
.dept-card{background:var(--bg);border:1px solid var(--bdr);border-radius:16px;padding:24px 20px;text-align:center;transition:.18s;}
.dept-card:hover{border-color:rgba(238,126,26,.3);box-shadow:0 8px 28px rgba(238,126,26,.07);}
.dept-em{font-size:32px;margin-bottom:12px;}
.dept-card h4{font-size:14px;margin-bottom:6px;}
.dept-card p{font-size:12.5px;color:var(--s);line-height:1.5;}
.dept-count{display:inline-block;margin-top:10px;padding:4px 10px;background:rgba(238,126,26,.1);color:var(--o);border-radius:6px;font-size:11.5px;font-weight:700;}
/* WHY US */
.whyus-section{background:var(--bg);}
.whyus-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
.wu-item{background:#fff;border:1px solid var(--bdr);border-radius:14px;padding:24px;display:flex;gap:16px;align-items:flex-start;transition:.18s;}
.wu-item:hover{border-color:rgba(238,126,26,.25);box-shadow:0 6px 24px rgba(238,126,26,.07);}
.wu-icon{width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;background:rgba(238,126,26,.1);border:1px solid rgba(238,126,26,.2);}
.wu-item h4{font-size:15px;margin-bottom:6px;}
.wu-item p{font-size:13.5px;color:var(--m);line-height:1.6;}
/* CTA */
.cta-section{background:linear-gradient(135deg,#0a1628,#0f1e38);padding:88px 0;text-align:center;position:relative;overflow:hidden;}
.cta-section::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 55% at 50% 50%,rgba(238,126,26,.06),transparent);}
.cta-section h2{color:#fff;font-size:42px;margin-bottom:14px;position:relative;}.cta-section p{color:rgba(255,255,255,.6);font-size:17px;margin-bottom:36px;position:relative;max-width:560px;margin-left:auto;margin-right:auto;}
.cta-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;position:relative;}
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
.footer-main{padding-bottom:40px;}
.footer-bottom{border-top:1px solid rgba(255,255,255,.07);padding:20px 0;display:flex;justify-content:space-between;align-items:center;font-size:12px;color:rgba(255,255,255,.3);flex-wrap:wrap;gap:8px;}
.footer-areas{padding:20px 0;border-top:1px solid rgba(255,255,255,.06);font-size:12px;color:rgba(255,255,255,.25);display:flex;gap:8px;flex-wrap:wrap;align-items:center;}
.footer-areas b{color:rgba(255,255,255,.4);}
.footer-areas a{color:rgba(255,255,255,.25);transition:.15s;}.footer-areas a:hover{color:rgba(255,255,255,.6);}
/* SCROLL REVEAL */
.rv{opacity:0;transform:translateY(28px);transition:opacity .55s ease,transform .55s ease;}
.rv.in{opacity:1;transform:none;}
.rv2{opacity:0;transform:translateY(20px);transition:opacity .55s ease .1s,transform .55s ease .1s;}
.rv2.in{opacity:1;transform:none;}
.rv3{opacity:0;transform:translateY(20px);transition:opacity .55s ease .2s,transform .55s ease .2s;}
.rv3.in{opacity:1;transform:none;}
/* RESPONSIVE */
@media(max-width:1024px){.hero-grid,.story-grid,.team-intro{grid-template-columns:1fr;gap:40px;}.hero-visual{height:300px;}.hv-human-card{display:none;}.stats-grid{grid-template-columns:repeat(3,1fr);}}
@media(max-width:960px){.aihuman-grid{grid-template-columns:1fr;}.ah-card.ai{border-radius:20px;}.ah-card.human{border:1px solid rgba(255,255,255,.1);border-radius:20px;}.ah-divider{flex-direction:row;padding:8px 0;}.ah-divider::before{top:50%;bottom:auto;left:0;right:0;width:100%;height:1px;transform:none;}.ah-plus{flex-shrink:0;}}
@media(max-width:900px){.values-grid{grid-template-columns:1fr 1fr;}.dept-grid{grid-template-columns:1fr 1fr;}.whyus-grid{grid-template-columns:1fr;}.fg{grid-template-columns:1fr 1fr;}}
@media(max-width:600px){.values-grid,.dept-grid,.stats-grid{grid-template-columns:1fr 1fr;}.hero h1{font-size:38px;}.hb{display:flex;}.dmenu{display:none;}}
`

const ld0 = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "Click Decoded",
      "legalName": "Aharnish Infotech Private Limited",
      "url": "https://clickdecoded.com",
      "logo": "https://www.clickdecoded.com/images/clickdecoded.png",
      "foundingDate": "2014",
      "description": "AI-powered B2B digital marketing agency offering SEO, Web Development, Google Ads, Meta Ads, and AI Automation services to businesses across India.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bhopal",
        "addressRegion": "Madhya Pradesh",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-94070-00101",
        "contactType": "customer service",
        "email": "hello@clickdecoded.com",
        "areaServed": "IN"
      },
      "sameAs": [
        "https://wa.me/919407000101"
      ],
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "minValue": 10,
        "maxValue": 50
      },
      "knowsAbout": [
        "SEO",
        "Web Development",
        "Google Ads",
        "Meta Ads",
        "AI Automation",
        "n8n Workflows",
        "WhatsApp Automation",
        "White Label Services"
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
          "name": "About Click Decoded",
          "item": "https://www.clickdecoded.com/about"
        }
      ]
    }
  ]
}`

const js0 = `(function(){
/* Scroll reveal */
const obs=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('in');});},{threshold:.12});
document.querySelectorAll('.rv,.rv2,.rv3').forEach(el=>obs.observe(el));
/* Header scroll shadow */
const hdr=document.getElementById('hdr');if(hdr)window.addEventListener('scroll',()=>hdr.classList.toggle('up',scrollY>40),{passive:true});
})();`

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld0 }} />
      <nav className="breadcrumb"><div className="wrap"><ol className="bc-list"><li><a href="/">Home</a></li><li>›</li><li>About Us</li></ol></div></nav>
      <section className="hero" aria-labelledby="hero-h1">
<div className="wrap">
<div className="hero-grid">
<div>
<div className="hero-badge">🏢 About Click Decoded</div>
<h1 id="hero-h1">Built by Humans.<br />Powered by <em>AI.</em><br />Driven by Results.</h1>
<p className="hero-desc">We are not a typical agency that sells packages and disappears. We are a team of strategists, developers, and AI engineers who become an extension of your business — and fight for your growth every single day.</p>
<div className="hero-legal">
          🏛️ <strong>Aharnish Infotech Private Limited</strong>  ·  CIN: U72900MP2014PTC032149  ·  Est. 2014
        </div>
<div className="hero-btns">
<a href="#story" className="btn btn-o">Our Story →</a>
<a href="mailto:hello@clickdecoded.com" className="btn btn-ghost">📧 Talk to Us</a>
</div>
</div>
<div>
<div className="hero-visual">
<div className="hv-card hv-main">
<div className="hv-main-header">
<div className="hv-logo-box">⚡</div>
<div>
<div className="hv-main-title">Click Decoded Performance</div>
<div className="hv-main-sub">Brand of Aharnish Infotech Pvt. Ltd.</div>
</div>
</div>
<div className="hv-metrics">
<div className="hv-metric"><div className="hv-metric-v">12+</div><div className="hv-metric-l">Years in Business</div></div>
<div className="hv-metric"><div className="hv-metric-v">500+</div><div className="hv-metric-l">Projects Delivered</div></div>
<div className="hv-metric"><div className="hv-metric-v">95%</div><div className="hv-metric-l">Client Retention</div></div>
<div className="hv-metric"><div className="hv-metric-v">10+</div><div className="hv-metric-l">Industries Served</div></div>
</div>
</div>
<div className="hv-card hv-ai-card">
<div className="hv-ai-header">
<div className="hv-ai-icon">🤖</div>
<div className="hv-ai-title">AI Stack Active</div>
</div>
<div className="hv-ai-rows">
<div>
<div className="hv-ai-row"><span>Automations</span><strong>38 live</strong></div>
<div className="hv-ai-bar"><div className="hv-ai-fill" style={{ width: '76%' }}></div></div>
</div>
<div>
<div className="hv-ai-row"><span>Hours saved/mo</span><strong>240 hrs</strong></div>
<div className="hv-ai-bar"><div className="hv-ai-fill" style={{ width: '88%' }}></div></div>
</div>
<div>
<div className="hv-ai-row"><span>AI Resolution</span><strong>82%</strong></div>
<div className="hv-ai-bar"><div className="hv-ai-fill" style={{ width: '82%' }}></div></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
      <div className="stats-strip"><div className="wrap"><div className="stats-grid">
<div className="stat-box"><div className="stat-n">12+</div><div className="stat-l">Years Operating</div></div>
<div className="stat-box"><div className="stat-n">500+</div><div className="stat-l">Projects Delivered</div></div>
<div className="stat-box"><div className="stat-n">95%</div><div className="stat-l">Client Retention</div></div>
<div className="stat-box"><div className="stat-n">10+</div><div className="stat-l">Industries</div></div>
<div className="stat-box"><div className="stat-n">0</div><div className="stat-l">Google Penalties</div></div>
</div></div></div>
      <section id="story"><div className="wrap">
<div className="story-grid">
<div className="story-text rv">
<div className="pill pill-o" style={{ marginBottom: '16px' }}>Our Story</div>
<h2>From a Bhopal Startup to India's AI-Ready Growth Agency</h2>
<p>Click Decoded began in 2014 as a lean web and SEO shop in Bhopal, Madhya Pradesh — operating under the registered entity <strong>Aharnish Infotech Private Limited</strong>. Back then, we helped local businesses get found on Google. We were scrappy, client-obsessed, and relentlessly result-focused.</p>
<p>Over the next decade, we grew into a full-service digital agency — adding PPC, Meta Ads, e-commerce development, and content. We served clients across real estate, healthcare, education, manufacturing, and B2B SaaS. The one constant across every engagement: we treated every client's budget as if it were our own.</p>
<p>In 2023, we made a deliberate pivot. AI wasn't a buzzword for us — it was the next wave of leverage. We retrained our team, rebuilt our internal processes using n8n and GPT-4o, and launched a dedicated AI Automation practice. Today, Click Decoded is one of the few Indian agencies that combines genuine digital marketing expertise with real, working AI implementations.</p>
<div className="story-legalbox">
<p>Legally registered as <strong>Aharnish Infotech Private Limited</strong> (CIN: U72900MP2014PTC032149), incorporated in Bhopal, Madhya Pradesh. Click Decoded is the agency's primary brand through which all digital services, white-label partnerships, and AI automation projects are delivered.</p>
</div>
</div>
<div className="rv2">
<div className="sv-timeline">
<div className="sv-year">
<div className="sv-dot">14</div>
<div className="sv-content">
<div className="sv-year-label">2014</div>
<h4>Founded as Aharnish Infotech Pvt. Ltd.</h4>
<p>Started with web development and basic SEO for Bhopal-based businesses. First 10 clients in year one.</p>
</div>
</div>
<div className="sv-year">
<div className="sv-dot alt">17</div>
<div className="sv-content">
<div className="sv-year-label">2017</div>
<h4>Expanded to Paid Advertising</h4>
<p>Launched Google Ads and Facebook Ads practice. First ₹1 crore in managed ad spend across clients.</p>
</div>
</div>
<div className="sv-year">
<div className="sv-dot">20</div>
<div className="sv-content">
<div className="sv-year-label">2020</div>
<h4>Launched the Click Decoded Brand</h4>
<p>Rebranded to Click Decoded to better represent the full-funnel, data-decoded approach to digital growth.</p>
</div>
</div>
<div className="sv-year">
<div className="sv-dot alt">23</div>
<div className="sv-content">
<div className="sv-year-label">2023</div>
<h4>AI Automation Practice Launched</h4>
<p>Built our first n8n + GPT-4o workflows. Added WhatsApp automation, AI chatbots, and White Label AI services.</p>
</div>
</div>
<div className="sv-year">
<div className="sv-dot">26</div>
<div className="sv-content">
<div className="sv-year-label">2026</div>
<h4>Full AI-Powered Agency Stack</h4>
<p>Every service line now runs on an AI-enhanced delivery model. 500+ projects. 12 years. Still growing.</p>
</div>
</div>
</div>
</div>
</div>
</div></section>
      <section className="aihuman-section">
<div className="wrap">
<div className="sec-h rv">
<div className="pill pill-o">Our Philosophy</div>
<h2>AI Does the Heavy Lifting.<br />Humans Do the Thinking.</h2>
<p>The best outcomes happen when AI speed meets human judgment. We don't replace strategy with automation — we use automation to free up more time for the high-value thinking your business actually needs.</p>
</div>
<div className="aihuman-grid">
<div className="ah-card ai rv" data-icon="🤖">
<div className="ah-icon-wrap">🤖</div>
<h3>What Our AI Does</h3>
<p>We've embedded AI into every part of our workflow — moving 3× faster without hiring 3× more people. Less grunt work. More strategy.</p>
<div className="ah-list">
<div className="ah-item"><div className="ah-item-dot">✓</div>Automated SEO audits and technical issue tracking</div>
<div className="ah-item"><div className="ah-item-dot">✓</div>AI-written first drafts reviewed by expert editors</div>
<div className="ah-item"><div className="ah-item-dot">✓</div>n8n workflows for lead routing, CRM sync, and reporting</div>
<div className="ah-item"><div className="ah-item-dot">✓</div>GPT-4o chatbots trained on client knowledge bases</div>
<div className="ah-item"><div className="ah-item-dot">✓</div>Automated weekly performance reports to all clients</div>
<div className="ah-item"><div className="ah-item-dot">✓</div>WhatsApp automation for instant lead engagement</div>
</div>
</div>
<div className="ah-divider"><div className="ah-plus">+</div></div>
<div className="ah-card human rv2" data-icon="🧠">
<div className="ah-icon-wrap">🧠</div>
<h3>What Our People Do</h3>
<p>AI cannot strategise, empathise, or judge context. Our team brings the irreplaceable human elements that no prompt can replace.</p>
<div className="ah-list">
<div className="ah-item"><div className="ah-item-dot">✓</div>Custom strategy built around your business model</div>
<div className="ah-item"><div className="ah-item-dot">✓</div>Editorial judgment on all AI-assisted content</div>
<div className="ah-item"><div className="ah-item-dot">✓</div>Client relationships and proactive communication</div>
<div className="ah-item"><div className="ah-item-dot">✓</div>Creative direction for campaigns and landing pages</div>
<div className="ah-item"><div className="ah-item-dot">✓</div>Technical problem-solving for complex integrations</div>
<div className="ah-item"><div className="ah-item-dot">✓</div>Quality control before anything goes live</div>
</div>
</div>
<div className="ah-result rv3">
<div className="ah-result-icon">🚀</div>
<div className="ah-result-text">
<h4>The Result: Agency-quality output at startup speed.</h4>
<p>Our hybrid AI + human model delivers faster turnarounds, more consistent quality, and deeper strategic thinking than a traditional agency — at a price point that makes sense for Indian B2B businesses.</p>
</div>
<div className="ah-result-badge">
<span>3×</span>
<small>Faster delivery</small>
</div>
</div>
</div>
</div>
</section>
      <section className="values-section"><div className="wrap">
<div className="sec-h rv">
<div className="pill pill-n">What Drives Us</div>
<h2>Our Values Are Not Wall Art</h2>
<p>These aren't aspirational slogans. They're the actual standards we hold ourselves to on every project, every week.</p>
</div>
<div className="values-grid">
<div className="val-card rv"><div className="val-em">🎯</div><h3>Results Over Activity</h3><p>We don't report on vanity metrics. We track revenue, leads, and conversions — and we build every strategy around what moves those numbers, not what fills a report.</p></div>
<div className="val-card rv2"><div className="val-em">🔍</div><h3>Full Transparency</h3><p>You own every account, every report, every data point. We share what's working and what isn't — honestly. No hidden markups, no locked-in dashboards, no jargon to confuse you.</p></div>
<div className="val-card rv3"><div className="val-em">⚡</div><h3>Speed Without Cutting Corners</h3><p>AI helps us deliver faster. But every deliverable goes through human review before it reaches you. Speed and quality are not a trade-off here — they're both the standard.</p></div>
<div className="val-card rv"><div className="val-em">🤝</div><h3>Long-Term Partnerships</h3><p>We are not interested in one-time projects. Our goal is to become your go-to digital team for years — growing as your business grows, adapting as the landscape changes.</p></div>
<div className="val-card rv2"><div className="val-em">🛡️</div><h3>Ethical SEO. Always.</h3><p>12 years, 500+ projects, zero Google penalties. We do not take shortcuts that risk your domain. Every strategy we build is sustainable and search engine compliant.</p></div>
<div className="val-card rv3"><div className="val-em">🇮🇳</div><h3>Built for the Indian Market</h3><p>We understand Indian B2B buying behaviour, WhatsApp-first communication, local SEO nuances, and the tools (Zoho, Razorpay, IndiaMART) that Indian businesses actually use.</p></div>
</div>
</div></section>
      <section className="team-section"><div className="wrap">
<div className="team-intro">
<div className="rv">
<div className="pill pill-o" style={{ marginBottom: '16px' }}>Our Team</div>
<h2>Talented Specialists. One Unified Team.</h2>
<p>Click Decoded runs on a core team of senior specialists — not interns, not generalists. Every department is led by someone with 5+ years of focused experience in their domain, supported by AI tools that multiply their output without diluting their expertise.</p>
</div>
<div className="rv2">
<p style={{ fontSize: '15px', color: 'var(--m)', lineHeight: '1.8', marginBottom: '16px' }}>We deliberately stay lean. A smaller team of highly skilled professionals, augmented by smart automation, consistently outperforms large agencies with padded headcounts and siloed communication.</p>
<p style={{ fontSize: '15px', color: 'var(--m)', lineHeight: '1.8' }}>When you work with Click Decoded, you speak directly to the people doing the work — not account managers reading from a brief they received that morning.</p>
</div>
</div>
<div className="dept-grid">
<div className="dept-card rv"><div className="dept-em">🔍</div><h4>SEO &amp; Content</h4><p>Technical SEO, on-page, link building, content strategy — driven by data and updated daily</p><div className="dept-count">Core team</div></div>
<div className="dept-card rv2"><div className="dept-em">📢</div><h4>Paid Advertising</h4><p>Google Ads, Meta Ads — optimised for conversion, not just click-through</p><div className="dept-count">Core team</div></div>
<div className="dept-card rv3"><div className="dept-em">💻</div><h4>Web Development</h4><p>WordPress, WooCommerce, custom HTML — built fast, built to convert</p><div className="dept-count">Core team</div></div>
<div className="dept-card rv"><div className="dept-em">🤖</div><h4>AI &amp; Automation</h4><p>n8n, GPT-4o, WhatsApp API, chatbots — making workflows intelligent</p><div className="dept-count">Specialist team</div></div>
</div>
</div></section>
      <section className="whyus-section"><div className="wrap">
<div className="sec-h rv">
<div className="pill pill-o">Why Click Decoded</div>
<h2>What Makes Us Different</h2>
<p>There are hundreds of digital agencies in India. Here's what separates us from the rest.</p>
</div>
<div className="whyus-grid">
<div className="wu-item rv"><div className="wu-icon">📅</div><div><h4>12 Years of Real Experience</h4><p>Not a team that read a course last year. We have been doing this since 2014, across industries, budget sizes, and market conditions.</p></div></div>
<div className="wu-item rv2"><div className="wu-icon">🤖</div><div><h4>Genuine AI Integration</h4><p>We don't just talk about AI — we run 38+ live automation workflows internally, and we build them for clients too. AI is in our DNA, not our pitch deck.</p></div></div>
<div className="wu-item rv"><div className="wu-icon">🏷️</div><div><h4>White Label Ready</h4><p>Agencies trust us to deliver under their brand. Our white label SEO, PPC, web dev, and AI services are built for reliability, confidentiality, and quality at scale.</p></div></div>
<div className="wu-item rv2"><div className="wu-icon">🛡️</div><div><h4>Zero Penalty Record</h4><p>Every SEO strategy we build is clean and sustainable. In 12 years and 500+ projects, not a single client has received a Google manual action on our watch.</p></div></div>
<div className="wu-item rv"><div className="wu-icon">📊</div><div><h4>Radical Transparency</h4><p>Monthly reports with plain-English explanations. Direct access to your campaign managers. No black boxes, no hidden fees, no confusing dashboards.</p></div></div>
<div className="wu-item rv2"><div className="wu-icon">🇮🇳</div><div><h4>Rooted in the Indian Market</h4><p>Bhopal-based, India-focused. We understand GST, Razorpay, regional language SEO, WhatsApp-first buyers, and Indian B2B decision-making cycles.</p></div></div>
</div>
</div></section>
      <section className="cta-section" id="contact"><div className="wrap">
<h2>Let's Build Something Lasting Together.</h2>
<p>Whether you need SEO, ads, web development, or AI automation — we'll tell you exactly what will move the needle for your business, and then deliver it.</p>
<div className="cta-btns">
<a href="mailto:hello@clickdecoded.com?subject=I'd like to discuss a project" className="btn btn-o">📧 Start a Conversation</a>
<a href="https://wa.me/919407000101?text=Hi Click Decoded, I'd like to discuss working together" target="_blank" rel="noopener" className="btn btn-ghost">💬 WhatsApp Us Now</a>
</div>
</div></section>
      <PageScript id="about-0" code={js0} />
    </>
  )
}
