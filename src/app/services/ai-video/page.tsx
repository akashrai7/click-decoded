/* eslint-disable */
// src/app/services/ai-video/page.tsx — generated from ai-video.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "AI Video Generation India | Click Decoded",
  description: "AI-generated videos for ads, social media, and brand content. Click Decoded produces professional brand videos, product demos, and ad creatives using AI.",
  alternates: { canonical: "/services/ai-video" },
}

const css = `
:root{
  --ac:#059669;--ac2:#047857;--ac-rgb:5,150,105;
  --n:#1e3a5f;--n-dark:#0a1628;--o:#EE7E1A;
  --body:#1E293B;--m:#475569;--s:#64748b;
  --bg:#F4F7FC;--bdr:#E2E8F0;
}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;overflow-x:hidden;}
body{font-family:'Inter',system-ui,sans-serif;color:var(--body);background:#fff;-webkit-font-smoothing:antialiased;}
a{text-decoration:none;color:inherit;}img,svg{display:block;}ul{list-style:none;}button{font-family:inherit;cursor:pointer;}
.wrap{max-width:1200px;margin:0 auto;padding:0 28px;}
section{padding:88px 0;}
h1,h2,h3,h4{font-weight:800;line-height:1.1;letter-spacing:-.025em;color:var(--n);}
.btn{display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:10px;font-weight:700;font-size:14px;border:none;transition:all .18s;white-space:nowrap;cursor:pointer;}
.btn-ac{background:var(--ac);color:#fff;box-shadow:0 4px 18px rgba(var(--ac-rgb),.3);}
.btn-ac:hover{background:var(--ac2);transform:translateY(-2px);}
.btn-ghost{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.35);}
.btn-ghost:hover{background:rgba(255,255,255,.08);}
.btn-wa{background:#25D366;color:#fff;}.btn-wa:hover{background:#1ebe59;transform:translateY(-2px);}
.btn-o{background:var(--o);color:#fff;}.btn-o:hover{background:#d46e12;transform:translateY(-2px);}
.btn-sm{padding:10px 20px;font-size:13px;}
/* NAV */
.topbar{background:var(--n-dark);height:40px;display:flex;align-items:center;}
.topbar-inner{max-width:1200px;margin:0 auto;padding:0 28px;display:flex;justify-content:space-between;align-items:center;width:100%;}
.topbar-left{display:flex;gap:20px;}.topbar-left a{font-size:12px;color:rgba(255,255,255,.6);}
.topbar-right{display:flex;gap:8px;}
.tb-btn{display:inline-flex;align-items:center;gap:6px;padding:5px 12px;border-radius:6px;font-size:11.5px;font-weight:700;transition:.15s;}
.tb-call{background:rgba(238,126,26,.15);color:var(--o);border:1px solid rgba(238,126,26,.25);}
.tb-wa{background:rgba(37,211,102,.15);color:#25D366;border:1px solid rgba(37,211,102,.25);}
.tb-call:hover{background:var(--o);color:#fff;}.tb-wa:hover{background:#25D366;color:#fff;}
#hdr{background:rgba(255,255,255,.97);backdrop-filter:blur(14px);border-bottom:1px solid var(--bdr);transition:box-shadow .2s;}
#hdr.up{box-shadow:0 4px 32px rgba(10,22,40,.09);}
.nav{display:flex;align-items:center;justify-content:space-between;height:70px;gap:16px;}
.dmenu{display:flex;align-items:center;gap:2px;}.dmenu>li{position:relative;}
.dmenu>li::after{content:'';position:absolute;top:100%;left:-40px;right:-40px;height:14px;}
.dmenu>li>a{display:flex;align-items:center;gap:5px;padding:9px 12px;font-size:13.5px;font-weight:600;color:var(--n);border-radius:8px;transition:.15s;}
.dmenu>li>a:hover{background:var(--bg);}
.dcar{width:10px;height:10px;opacity:.5;transition:transform .18s;flex-shrink:0;}
.dmenu>li:hover .dcar{transform:rotate(180deg);}
.mega{position:absolute;top:calc(100% + 10px);left:50%;transform:translateX(-50%) translateY(10px);background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:26px;box-shadow:0 24px 64px rgba(10,22,40,.14);opacity:0;visibility:hidden;pointer-events:none;transition:opacity .18s,transform .18s;}
.mega.wide{width:940px;display:grid;grid-template-columns:repeat(5,1fr);gap:22px;}
.mega.slim{width:296px;left:auto;right:0;transform:translateY(10px);}
.dmenu>li:hover .mega{opacity:1;visibility:visible;pointer-events:all;transform:translateX(-50%) translateY(0);}
.dmenu>li:hover .mega.slim{transform:translateY(0);}
.mc h5{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--n);margin-bottom:11px;}
.mc a{display:block;position:relative;padding:5px 0 5px 11px;font-size:13px;font-weight:500;color:var(--body);transition:color .14s,padding-left .14s;}
.mc a::before{content:'';position:absolute;left:0;top:50%;transform:translateY(-50%);width:2px;height:0;border-radius:1px;background:var(--ac);transition:height .15s cubic-bezier(.22,1,.36,1);}
.mc a:hover{color:var(--ac);padding-left:14px;}.mc a:hover::before{height:13px;}
.mega.slim a{display:block;padding:9px 12px;font-size:13px;font-weight:500;color:var(--body);border-radius:8px;transition:.15s;}
.mega.slim a:hover{background:var(--bg);color:var(--ac);}
.mega.slim a small{display:block;font-size:11px;color:var(--s);font-weight:400;margin-top:1px;}
.navcta{display:flex;align-items:center;gap:10px;}
.hb{background:none;border:none;display:none;flex-direction:column;gap:5px;padding:4px;cursor:pointer;}
.hb span{display:block;width:22px;height:2px;background:var(--n);border-radius:1px;}
.mnav{display:none;position:fixed;inset:0;background:#fff;z-index:200;overflow-y:auto;padding:24px 22px 40px;}
.mnav.on{display:block;}
.ma{border-bottom:1px solid var(--bdr);}
.ma>button{width:100%;text-align:left;background:none;border:none;padding:15px 0;font-size:15px;font-weight:600;color:var(--n);display:flex;justify-content:space-between;cursor:pointer;}
.ms{display:none;padding:0 0 16px;}.ma.on .ms{display:block;}
.ms a{display:block;padding:7px 0;font-size:14px;color:var(--m);}
.ms h6{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--n);margin:12px 0 4px;}
@media(max-width:960px){.hb{display:flex;}.dmenu,.navcta .btn-o{display:none;}}
/* FOOTER */
footer{background:var(--n-dark);padding:64px 0 0;}
.fg{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:40px;}
.fb-desc{font-size:13.5px;color:rgba(255,255,255,.4);line-height:1.7;margin:16px 0 20px;}
.socials{display:flex;gap:10px;}
.socials a{width:34px;height:34px;border-radius:8px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.5);transition:.15s;}
.socials a:hover{background:var(--o);color:#fff;border-color:var(--o);}
footer h4{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.35);margin-bottom:16px;}
.fl{display:flex;flex-direction:column;gap:8px;}
.fl a,.fc a{font-size:13.5px;color:rgba(255,255,255,.5);transition:.15s;}
.fl a:hover,.fc a:hover{color:#fff;}
.fc{display:flex;flex-direction:column;gap:10px;}
.footer-bottom{border-top:1px solid rgba(255,255,255,.07);padding:20px 0;display:flex;justify-content:space-between;align-items:center;font-size:12px;color:rgba(255,255,255,.3);flex-wrap:wrap;gap:8px;}
.footer-bottom a{color:rgba(255,255,255,.3);}.footer-bottom a:hover{color:rgba(255,255,255,.6);}
.footer-areas{padding:20px 0;border-top:1px solid rgba(255,255,255,.06);font-size:12px;color:rgba(255,255,255,.25);display:flex;gap:8px;flex-wrap:wrap;align-items:center;}
.footer-areas b{color:rgba(255,255,255,.4);}
.footer-areas a{color:rgba(255,255,255,.25);transition:.15s;}.footer-areas a:hover{color:rgba(255,255,255,.6);}
/* BREADCRUMB */
.breadcrumb{background:var(--bg);padding:12px 0;border-bottom:1px solid var(--bdr);}
.bc-list{display:flex;align-items:center;gap:8px;font-size:12.5px;color:var(--s);}
.bc-list a{color:var(--n);font-weight:500;}.bc-list a:hover{color:var(--ac);}
/* HERO */
.hero{background:linear-gradient(155deg,#021a0e 0%,#062d18 45%,#021a0e 100%);padding:96px 0 80px;position:relative;overflow:hidden;}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 60% at 70% 30%,rgba(5,150,105,.2) 0%,transparent 65%),radial-gradient(ellipse 35% 40% at 5% 80%,rgba(5,150,105,.07) 0%,transparent 60%);}
.hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;position:relative;z-index:2;}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;background:rgba(5,150,105,.12);border:1px solid rgba(5,150,105,.3);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#6ee7b7;margin-bottom:20px;}
.hero h1{font-size:48px;color:#fff;line-height:1.06;letter-spacing:-.04em;margin-bottom:20px;}
.hero h1 em{font-style:normal;background:linear-gradient(135deg,#6ee7b7,#059669);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-desc{font-size:17px;color:rgba(255,255,255,.62);line-height:1.7;margin-bottom:32px;max-width:460px;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:36px;}
.hero-proof{display:flex;gap:24px;flex-wrap:wrap;}
.proof-item{font-size:13px;color:rgba(255,255,255,.5);}
.proof-item strong{color:#fff;font-weight:700;}
/* AI VIDEO STUDIO MOCK */
.av-mock{border-radius:20px;overflow:hidden;box-shadow:0 28px 70px rgba(0,0,0,.65);background:#010f07;border:1px solid rgba(5,150,105,.22);}
.mock-browser{background:rgba(255,255,255,.05);padding:10px 14px;border-bottom:1px solid rgba(255,255,255,.07);display:flex;align-items:center;gap:10px;}
.mock-dots{display:flex;gap:5px;}
.mock-dots span{width:9px;height:9px;border-radius:50%;}
.mock-dots span:nth-child(1){background:#ff5f57;}
.mock-dots span:nth-child(2){background:#ffbd2e;}
.mock-dots span:nth-child(3){background:#28c840;}
.mock-url{flex:1;background:rgba(255,255,255,.07);border-radius:6px;padding:5px 12px;font-size:11px;color:rgba(255,255,255,.35);}
.av-header{background:rgba(5,150,105,.1);border-bottom:1px solid rgba(5,150,105,.2);padding:10px 16px;display:flex;align-items:center;justify-content:space-between;}
.av-title{font-size:12px;font-weight:700;color:rgba(255,255,255,.75);}
.av-badge{font-size:10px;font-weight:700;padding:3px 9px;border-radius:5px;background:rgba(5,150,105,.2);border:1px solid rgba(5,150,105,.35);color:#6ee7b7;}
/* Preview window */
.av-preview{height:100px;background:linear-gradient(135deg,#021a0e,#042d14);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;border-bottom:1px solid rgba(5,150,105,.15);}
.av-preview-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(5,150,105,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(5,150,105,.05) 1px,transparent 1px);background-size:20px 20px;}
.av-preview-content{position:relative;z-index:1;text-align:center;}
.av-preview-icon{font-size:32px;margin-bottom:4px;}
.av-render-label{font-size:10px;font-weight:700;color:rgba(5,150,105,.8);text-transform:uppercase;letter-spacing:.08em;}
.av-render-bar{width:160px;height:4px;background:rgba(255,255,255,.08);border-radius:2px;margin:6px auto 0;overflow:hidden;}
.av-render-fill{height:100%;background:linear-gradient(90deg,var(--ac),#34d399);border-radius:2px;width:72%;animation:renderPulse 2s ease-in-out infinite;}
@keyframes renderPulse{0%,100%{opacity:.7}50%{opacity:1}}
/* Scene timeline */
.av-timeline{padding:10px 14px;}
.timeline-label{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:rgba(255,255,255,.25);margin-bottom:7px;}
.timeline-track{display:flex;gap:5px;margin-bottom:8px;}
.tl-scene{border-radius:6px;padding:6px 8px;font-size:9px;font-weight:700;flex:1;border:1px solid;}
.tl-done{background:rgba(5,150,105,.15);border-color:rgba(5,150,105,.3);color:#6ee7b7;}
.tl-active{background:rgba(5,150,105,.25);border-color:rgba(5,150,105,.5);color:#fff;animation:scenePulse 1.5s ease-in-out infinite;}
@keyframes scenePulse{0%,100%{border-color:rgba(5,150,105,.5)}50%{border-color:rgba(5,150,105,.9)}}
.tl-wait{background:rgba(255,255,255,.03);border-color:rgba(255,255,255,.08);color:rgba(255,255,255,.3);}
.tl-scene-name{font-size:8px;margin-top:2px;opacity:.7;}
/* Prompt list */
.av-prompts{display:flex;flex-direction:column;gap:4px;}
.av-prompt-row{display:flex;align-items:center;gap:8px;padding:6px 8px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:7px;}
.av-prompt-row.active{border-color:rgba(5,150,105,.3);background:rgba(5,150,105,.06);}
.av-scene-num{width:18px;height:18px;border-radius:4px;background:rgba(5,150,105,.15);border:1px solid rgba(5,150,105,.25);font-size:9px;font-weight:800;color:#6ee7b7;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.av-prompt-text{font-size:10px;color:rgba(255,255,255,.55);flex:1;line-height:1.3;}
.av-scene-status{font-size:9px;font-weight:700;padding:2px 7px;border-radius:4px;flex-shrink:0;}
.avs-done{background:rgba(74,222,128,.1);border:1px solid rgba(74,222,128,.2);color:#4ade80;}
.avs-prog{background:rgba(5,150,105,.15);border:1px solid rgba(5,150,105,.3);color:#6ee7b7;}
.avs-wait{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);color:rgba(255,255,255,.3);}
/* Stats */
.av-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,.05);border-top:1px solid rgba(255,255,255,.06);}
.av-stat{padding:11px 12px;background:#010f07;text-align:center;}
.avsv{font-size:17px;font-weight:900;color:#fff;letter-spacing:-.02em;line-height:1;}
.avsl{font-size:9px;color:rgba(255,255,255,.35);margin-top:3px;text-transform:uppercase;letter-spacing:.05em;}
/* STATS STRIP */
.stats-strip{background:var(--ac);}
.stats-inner{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(0,0,0,.2);}
.stat-box{padding:32px 24px;text-align:center;background:var(--ac);}
.stat-n{font-size:40px;font-weight:900;color:#fff;line-height:1;letter-spacing:-.03em;}
.stat-l{font-size:12px;color:rgba(255,255,255,.8);margin-top:6px;font-weight:500;text-transform:uppercase;letter-spacing:.06em;}
/* SECTIONS */
.sec-h{text-align:center;max-width:640px;margin:0 auto 52px;}
.sec-tag{display:inline-flex;padding:5px 13px;border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:10px;background:rgba(5,150,105,.08);border:1px solid rgba(5,150,105,.18);color:var(--ac);}
.sec-h h2{font-size:36px;margin-bottom:14px;}
.sec-h p{font-size:16px;color:var(--m);line-height:1.65;}
.inc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.inc-card{background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:28px 24px;transition:.2s;}
.inc-card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(5,150,105,.1);border-color:rgba(5,150,105,.2);}
.inc-icon{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:16px;background:rgba(5,150,105,.07);border:1px solid rgba(5,150,105,.12);}
.inc-card h3{font-size:17px;margin-bottom:10px;}
.inc-card p{font-size:13.5px;color:var(--m);line-height:1.65;}
.dark-section{background:var(--n-dark);padding:88px 0;}
.formats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:1000px;margin:0 auto;}
.fmt-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:24px;transition:.2s;}
.fmt-card:hover{border-color:rgba(5,150,105,.35);background:rgba(5,150,105,.07);transform:translateY(-2px);}
.fmt-top{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px;}
.fmt-icon{font-size:26px;}
.fmt-tag{font-size:10px;font-weight:700;padding:3px 8px;border-radius:5px;background:rgba(5,150,105,.18);border:1px solid rgba(5,150,105,.3);color:#6ee7b7;}
.fmt-card h3{font-size:15px;font-weight:700;color:#fff;margin-bottom:6px;}
.fmt-card p{font-size:13px;color:rgba(255,255,255,.5);line-height:1.6;}
.bg-subtle{background:var(--bg);}
.steps-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative;}
.steps-grid::before{content:'';position:absolute;top:34px;left:12%;right:12%;height:2px;background:linear-gradient(90deg,var(--ac),var(--ac2));z-index:0;opacity:.4;}
.step{text-align:center;padding:0 16px;position:relative;z-index:1;}
.step-num{width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,var(--ac),var(--ac2));color:#fff;font-size:20px;font-weight:900;display:flex;align-items:center;justify-content:center;margin:0 auto 18px;box-shadow:0 8px 24px rgba(5,150,105,.3);}
.step h4{font-size:15px;margin-bottom:7px;}
.step p{font-size:13px;color:var(--m);line-height:1.6;}
.faq-2col{display:grid;grid-template-columns:1fr 1fr;gap:0 28px;align-items:start;}
.fi{border:1px solid var(--bdr);border-radius:14px;margin-bottom:10px;overflow:hidden;background:#fff;transition:.15s;}
.fi.on{border-color:rgba(5,150,105,.3);box-shadow:0 4px 20px rgba(5,150,105,.07);}
.fi-q{width:100%;text-align:left;background:transparent;border:none;padding:20px 22px;font-size:14px;font-weight:700;color:var(--n);display:flex;justify-content:space-between;align-items:center;gap:12px;cursor:pointer;}
.fi-icon{width:26px;height:26px;border-radius:50%;flex-shrink:0;background:var(--bg);border:1px solid var(--bdr);display:flex;align-items:center;justify-content:center;color:var(--ac);font-size:18px;line-height:1;transition:transform .2s;}
.fi.on .fi-icon{transform:rotate(45deg);background:var(--ac);color:#fff;border-color:var(--ac);}
.fi-a{max-height:0;overflow:hidden;transition:.3s;color:var(--m);font-size:14px;line-height:1.75;}
.fi.on .fi-a{max-height:300px;padding:0 22px 22px;}
.cta-section{background:linear-gradient(155deg,#021a0e 0%,#062d18 100%);padding:96px 0;text-align:center;position:relative;overflow:hidden;}
.cta-section::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(5,150,105,.15) 0%,transparent 70%);}
.cta-section h2{color:#fff;font-size:44px;margin-bottom:16px;position:relative;z-index:1;}
.cta-section p{color:rgba(255,255,255,.6);font-size:17px;margin-bottom:36px;max-width:500px;margin-left:auto;margin-right:auto;line-height:1.65;position:relative;z-index:1;}
.cta-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;position:relative;z-index:1;}
.rel-link{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;border-radius:99px;border:1.5px solid var(--bdr);font-size:13px;font-weight:500;color:var(--m);transition:.15s;}
.rel-link:hover{border-color:var(--ac);color:var(--ac);}
.rv,.rv2,.rv3{opacity:0;transform:translateY(28px);transition:opacity .6s ease,transform .6s ease;}
.rv2{transition-delay:.1s;}.rv3{transition-delay:.2s;}
.rv.vis,.rv2.vis,.rv3.vis{opacity:1;transform:translateY(0);}
@media(max-width:900px){
  .hero-grid{grid-template-columns:1fr;}.hero h1{font-size:36px;}
  .inc-grid,.formats-grid{grid-template-columns:1fr 1fr;}
  .stats-inner{grid-template-columns:1fr 1fr;}
  .steps-grid{grid-template-columns:repeat(2,1fr);}.steps-grid::before{display:none;}
  .faq-2col{grid-template-columns:1fr;}
}
@media(max-width:600px){
  .inc-grid,.formats-grid,.stats-inner{grid-template-columns:1fr;}
  section{padding:60px 0;}.hero{padding:64px 0 52px;}
}
`

const ld0 = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "AI Video Production",
      "provider": {
        "@type": "Organization",
        "name": "Click Decoded",
        "url": "https://www.clickdecoded.com"
      },
      "description": "AI-generated videos for ads, social media, and brand content. Click Decoded produces professional brand videos, product demos, and ad creatives using AI — 10× faster, at a fraction of traditional production costs.",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": "AI Video Production",
      "url": "https://www.clickdecoded.com/services/ai-video"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What AI tools do you use to generate video?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use a combination of OpenAI Sora, Runway ML Gen-3, Kling AI, and Pika for scene generation — selecting the best tool per scene type based on motion complexity, style, and duration. For AI avatars and presenter-style videos, we use HeyGen and Synthesia. All tools are used with commercial licenses."
          }
        },
        {
          "@type": "Question",
          "name": "Can AI video quality pass as real footage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For many use cases — yes. AI video in 2025 is photorealistic for architectural walkthroughs, product showcases, nature scenes, and abstract brand visuals. For footage requiring specific real people, known locations, or hyper-specific brand assets, we combine AI generation with your existing photography or short live-action captures."
          }
        },
        {
          "@type": "Question",
          "name": "How do you maintain brand consistency in AI-generated scenes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Brand guidelines (colours, fonts, logo) are applied through the motion graphics and title layer, not the AI generation layer. Visual style is maintained through consistent prompt engineering — same lighting descriptions, colour temperature, and aesthetic direction across all scenes. Style frames are approved before bulk generation begins."
          }
        },
        {
          "@type": "Question",
          "name": "Is AI-generated video allowed on YouTube and Meta ads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — both platforms allow AI-generated video content in ads and organic posts as of 2025, provided content complies with their standard policies. Meta requires disclosure of AI-generated content in certain categories (politics, social issues). We include appropriate disclosures in all AI content and advise on platform-specific requirements."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to produce an AI video?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A 30-second AI ad video is typically delivered within 24 hours of script approval. A 60-second brand film takes 2–3 days. Longer explainers (2–3 minutes) take 3–5 days. Rush 24-hour delivery is available for time-sensitive campaigns. These timelines are dramatically faster than any traditional production workflow."
          }
        },
        {
          "@type": "Question",
          "name": "Can you produce AI videos with real product shots?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — we composite your real product photography into AI-generated environments and scenes. This hybrid approach is highly effective for product showcase videos: real product, AI background and context, professional motion graphics. Requires your product images to be provided in advance of the production brief."
          }
        },
        {
          "@type": "Question",
          "name": "Can AI replace our existing video production entirely?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For brand films, ad videos, social content, explainers, training videos, and property walkthroughs — AI can replace the majority of traditional production. For content requiring specific named individuals (founders, spokespeople, testimonials) or highly location-specific footage, live-action capture remains necessary and AI handles everything around it."
          }
        },
        {
          "@type": "Question",
          "name": "Do we own the rights to AI-generated videos you produce?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — all final deliverables are owned by you upon payment. We use our commercial AI tool licenses to generate content on your behalf, and the output is assigned to you in our project agreement. You can use, modify, and broadcast the video freely — no royalties, no restrictions on usage platform or geography."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How AI Video Generation India Works — Our Process",
      "description": "AI-generated videos for ads, social media, and brand content. Click Decoded produces professional brand videos, product demos, and ad creatives using AI — 10× faster, at a fraction of traditional prod",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Brief & Script",
          "text": "We take your objective, audience, and key message — and produce a full video script with scene-by-scene shot description and voiceover copy. Client approval on script before generation begins."
        },
        {
          "@type": "HowToStep",
          "name": "AI Scene Generation",
          "text": "Each scene prompt engineered by our creative team and fed into Sora, Runway ML, or Kling — selecting the best output from multiple generations per scene before compositing begins."
        },
        {
          "@type": "HowToStep",
          "name": "Assembly & Polish",
          "text": "Scenes assembled in timeline, AI voiceover added, music mixed, motion graphics composited, and colour graded for visual consistency — full post-production treatment on every AI-generated clip."
        },
        {
          "@type": "HowToStep",
          "name": "Deliver All Formats",
          "text": "First cut delivered within 24 hours of script approval. Up to 2 revision rounds included. Final delivery in landscape, square, and vertical — ready to upload across every platform simultaneously."
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
          "name": "AI Video Production",
          "item": "https://www.clickdecoded.com/services/ai-video"
        }
      ]
    }
  ]
}`

const js0 = `(function(){
const obs=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('vis');});},{threshold:.12});
document.querySelectorAll('.rv,.rv2,.rv3').forEach(el=>obs.observe(el));
const hdr=document.getElementById('hdr');
if(hdr)window.addEventListener('scroll',()=>hdr.classList.toggle('up',scrollY>40),{passive:true});
const hb=document.getElementById('hb'),mn=document.getElementById('mnav'),mc=document.getElementById('mnav-close');
if(hb)hb.addEventListener('click',()=>{mn.classList.add('on');document.body.style.overflow='hidden';});
if(mc)mc.addEventListener('click',()=>{mn.classList.remove('on');document.body.style.overflow='';});
document.querySelectorAll('.ma>button').forEach(b=>{
  b.addEventListener('click',()=>{const p=b.parentElement,o=p.classList.contains('on');document.querySelectorAll('.ma').forEach(x=>x.classList.remove('on'));if(!o)p.classList.add('on');});
});
document.querySelectorAll('.fi-q').forEach(b=>b.addEventListener('click',()=>{
  const fi=b.parentElement,was=fi.classList.contains('on');
  document.querySelectorAll('.fi').forEach(x=>x.classList.remove('on'));
  if(!was)fi.classList.add('on');
}));
})();`

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld0 }} />
      <div className="breadcrumb"><div className="wrap"><div className="bc-list"><a href="/">Home</a><span style={{ opacity: '.4' }}>›</span><span>AI &amp; Automation</span><span style={{ opacity: '.4' }}>›</span><span>AI Video</span></div></div></div>
      <section className="hero">
<div className="wrap">
<div className="hero-grid">
<div>
<div className="hero-eyebrow">🎥 AI-Generated · Text to Video · 10× Faster</div>
<h1>Professional Brand Videos.<br /><em>No Crew. No Studio.</em> No Wait.</h1>
<p className="hero-desc">AI-powered video production for ads, social media, product demos, and brand films — generated from your brief in hours, not weeks. Cinematic quality at a fraction of traditional video production costs.</p>
<div className="hero-btns">
<a href="/contact" className="btn btn-ac">🎥 See AI Video Samples</a>
<a href="https://wa.me/919407000101" className="btn btn-ghost">💬 WhatsApp Us</a>
</div>
<div className="hero-proof">
<span className="proof-item"><strong>10×</strong> Faster Than Traditional</span>
<span className="proof-item"><strong>4K</strong> Output Quality</span>
<span className="proof-item"><strong>₹25K</strong> Starting</span>
</div>
</div>

<div className="av-mock">
<div className="mock-browser">
<div className="mock-dots"><span></span><span></span><span></span></div>
<div className="mock-url">AI Video Studio — Click Decoded</div>
</div>
<div className="av-header">
<div className="av-title">🎥 Generating: Real Estate Brand Film — 60s</div>
<div className="av-badge">Sora + Runway ML</div>
</div>
<div className="av-preview">
<div className="av-preview-grid"></div>
<div className="av-preview-content">
<div className="av-preview-icon">🏗️</div>
<div className="av-render-label">Rendering Scene 2 of 4 · 72%</div>
<div className="av-render-bar"><div className="av-render-fill"></div></div>
</div>
</div>
<div className="av-timeline">
<div className="timeline-label">Scene Timeline</div>
<div className="timeline-track">
<div className="tl-scene tl-done">S1 · 0–15s<div className="tl-scene-name">Aerial reveal</div></div>
<div className="tl-scene tl-active">S2 · 15–30s<div className="tl-scene-name">Interior walkthrough</div></div>
<div className="tl-scene tl-wait">S3 · 30–45s<div className="tl-scene-name">Lifestyle shots</div></div>
<div className="tl-scene tl-wait">S4 · 45–60s<div className="tl-scene-name">CTA + logo</div></div>
</div>
<div className="av-prompts">
<div className="av-prompt-row">
<div className="av-scene-num">1</div>
<div className="av-prompt-text">Cinematic aerial drone over luxury residential township at golden hour</div>
<div className="av-scene-status avs-done">Done ✓</div>
</div>
<div className="av-prompt-row active">
<div className="av-scene-num">2</div>
<div className="av-prompt-text">Smooth dolly through sunlit 3BHK interior, modern furniture, warm tones</div>
<div className="av-scene-status avs-prog">72%…</div>
</div>
<div className="av-prompt-row">
<div className="av-scene-num">3</div>
<div className="av-prompt-text">Happy family enjoying balcony view, city skyline at dusk</div>
<div className="av-scene-status avs-wait">Queued</div>
</div>
</div>
</div>
<div className="av-stats">
<div className="av-stat"><div className="avsv">4K</div><div className="avsl">Output Quality</div></div>
<div className="av-stat"><div className="avsv">4 hrs</div><div className="avsl">Generation Time</div></div>
<div className="av-stat"><div className="avsv">60s</div><div className="avsl">Final Duration</div></div>
</div>
</div>
</div>
</div>
</section>
      <div className="stats-strip">
<div className="stats-inner">
<div className="stat-box"><div className="stat-n">10×</div><div className="stat-l">Faster Production</div></div>
<div className="stat-box"><div className="stat-n">4K</div><div className="stat-l">Output Quality</div></div>
<div className="stat-box"><div className="stat-n">4 hrs</div><div className="stat-l">Avg Generation Time</div></div>
<div className="stat-box"><div className="stat-n">₹25K</div><div className="stat-l">Starting Per Video</div></div>
</div>
</div>
      <section>
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag">What's Included</div>
<h2>Full AI Video Production,<br />Brief to Final Cut.</h2>
<p>Script, scenes, voice, music, and motion graphics — every element of a professional video, generated and assembled by our AI production workflow.</p>
</div>
<div className="inc-grid">
<div className="inc-card rv"><div className="inc-icon">📝</div><h3>AI Script &amp; Storyboard</h3><p>Brief converted into a full video script with scene-by-scene storyboard — shot descriptions, on-screen text, voiceover narration, and CTA placement — reviewed and approved before a single frame is generated.</p></div>
<div className="inc-card rv2"><div className="inc-icon">🎬</div><h3>AI Scene Generation</h3><p>Photorealistic video scenes generated from text prompts using Sora, Runway ML, and Kling AI — cinematic camera movements, lighting setups, and environment design specified in the prompt for each scene.</p></div>
<div className="inc-card rv3"><div className="inc-icon">🎙️</div><h3>AI Voiceover</h3><p>Professional-quality AI voiceover in English, Hindi, and regional Indian languages — with tone, pace, and accent adjusted to your brand personality. Multiple voice options presented for client approval before render.</p></div>
<div className="inc-card rv"><div className="inc-icon">🎵</div><h3>Licensed Music &amp; Sound</h3><p>Royalty-free music selected and mixed to the video's emotional arc — with sound effects, ambient audio, and audio mastering included. All music licensed for commercial use across digital platforms.</p></div>
<div className="inc-card rv2"><div className="inc-icon">✨</div><h3>Motion Graphics &amp; Titles</h3><p>On-brand animated text overlays, lower thirds, logo reveals, and CTA animations composited onto AI video — matching your brand colour palette and typography for a professionally finished look.</p></div>
<div className="inc-card rv3"><div className="inc-icon">📤</div><h3>Multi-Format Export</h3><p>Final video delivered in landscape (16:9), square (1:1), and vertical (9:16) formats simultaneously — ready for YouTube, Meta, Instagram Reels, WhatsApp Status, and website hero sections without additional editing.</p></div>
</div>
</div>
</section>
      <section className="dark-section">
<div className="wrap">
<div className="sec-h rv" style={{ marginBottom: '40px' }}>
<h2 style={{ color: '#fff' }}>Every Video Type AI<br />Can Now Produce.</h2>
<p style={{ color: 'rgba(255,255,255,.55)' }}>From 6-second ad bumpers to 3-minute brand documentaries — AI video generation now covers formats that previously required full production crews.</p>
</div>
<div className="formats-grid">
<div className="fmt-card rv"><div className="fmt-top"><div className="fmt-icon">📢</div><div className="fmt-tag">Ad Video</div></div><h3>Social Media Ad Videos</h3><p>15–30 second ad videos for Meta and YouTube — hook-first structure, on-brand visuals, voiceover, and CTA animation. Multiple variants generated for A/B testing without additional shoot costs.</p></div>
<div className="fmt-card rv2"><div className="fmt-top"><div className="fmt-icon">🏢</div><div className="fmt-tag">Brand Film</div></div><h3>Brand Films &amp; Explainers</h3><p>60–180 second brand story videos and product explainer films — cinematic scene generation, professional narration, and motion graphics for website hero sections, investor decks, and trade presentations.</p></div>
<div className="fmt-card rv3"><div className="fmt-top"><div className="fmt-icon">📦</div><div className="fmt-tag">Product</div></div><h3>Product Demo Videos</h3><p>AI-generated product showcase videos showing features, use cases, and benefits — ideal for e-commerce listings, app store previews, and SaaS product pages where live-action video would be cost-prohibitive.</p></div>
<div className="fmt-card rv"><div className="fmt-top"><div className="fmt-icon">📱</div><div className="fmt-tag">Reels</div></div><h3>Reels &amp; Shorts Content</h3><p>Vertical AI video content for Instagram Reels and YouTube Shorts — trend-aware formats, native platform styling, and hook-driven openings generated at scale for consistent social media publishing.</p></div>
<div className="fmt-card rv2"><div className="fmt-top"><div className="fmt-icon">🏗️</div><div className="fmt-tag">Real Estate</div></div><h3>Real Estate Walkthroughs</h3><p>AI-generated interior and exterior property walkthroughs from floor plans or reference photos — producing photorealistic video tours for under-construction or pre-launch properties that don't physically exist yet.</p></div>
<div className="fmt-card rv3"><div className="fmt-top"><div className="fmt-icon">🎓</div><div className="fmt-tag">Training</div></div><h3>Training &amp; Onboarding Videos</h3><p>AI avatar-hosted training videos and SOP walkthroughs — consistent presenter, any language, infinite retakes at zero cost. Ideal for HR onboarding, customer education, and internal process documentation.</p></div>
</div>
</div>
</section>
      <section className="bg-subtle">
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag">Our Process</div>
<h2>Brief at 9am. First Cut<br />by End of Day.</h2>
<p>AI compresses a 3-week video production cycle into hours — with human creative direction ensuring every output is on-brand and publication-ready.</p>
</div>
<div className="steps-grid">
<div className="step rv"><div className="step-num">01</div><h4>Brief &amp; Script</h4><p>We take your objective, audience, and key message — and produce a full video script with scene-by-scene shot description and voiceover copy. Client approval on script before generation begins.</p></div>
<div className="step rv2"><div className="step-num">02</div><h4>AI Scene Generation</h4><p>Each scene prompt engineered by our creative team and fed into Sora, Runway ML, or Kling — selecting the best output from multiple generations per scene before compositing begins.</p></div>
<div className="step rv3"><div className="step-num">03</div><h4>Assembly &amp; Polish</h4><p>Scenes assembled in timeline, AI voiceover added, music mixed, motion graphics composited, and colour graded for visual consistency — full post-production treatment on every AI-generated clip.</p></div>
<div className="step rv3"><div className="step-num">04</div><h4>Deliver All Formats</h4><p>First cut delivered within 24 hours of script approval. Up to 2 revision rounds included. Final delivery in landscape, square, and vertical — ready to upload across every platform simultaneously.</p></div>
</div>
</div>
</section>
      <section>
<div className="wrap">
<div className="sec-h rv"><h2>Frequently Asked Questions</h2></div>
<div className="faq-2col">
<div>
<div className="fi"><button className="fi-q">What AI tools do you use to generate video?<div className="fi-icon">+</div></button><div className="fi-a">We use a combination of OpenAI Sora, Runway ML Gen-3, Kling AI, and Pika for scene generation — selecting the best tool per scene type based on motion complexity, style, and duration. For AI avatars and presenter-style videos, we use HeyGen and Synthesia. All tools are used with commercial licenses.</div></div>
<div className="fi"><button className="fi-q">Can AI video quality pass as real footage?<div className="fi-icon">+</div></button><div className="fi-a">For many use cases — yes. AI video in 2025 is photorealistic for architectural walkthroughs, product showcases, nature scenes, and abstract brand visuals. For footage requiring specific real people, known locations, or hyper-specific brand assets, we combine AI generation with your existing photography or short live-action captures.</div></div>
<div className="fi"><button className="fi-q">How do you maintain brand consistency in AI-generated scenes?<div className="fi-icon">+</div></button><div className="fi-a">Brand guidelines (colours, fonts, logo) are applied through the motion graphics and title layer, not the AI generation layer. Visual style is maintained through consistent prompt engineering — same lighting descriptions, colour temperature, and aesthetic direction across all scenes. Style frames are approved before bulk generation begins.</div></div>
<div className="fi"><button className="fi-q">Is AI-generated video allowed on YouTube and Meta ads?<div className="fi-icon">+</div></button><div className="fi-a">Yes — both platforms allow AI-generated video content in ads and organic posts as of 2025, provided content complies with their standard policies. Meta requires disclosure of AI-generated content in certain categories (politics, social issues). We include appropriate disclosures in all AI content and advise on platform-specific requirements.</div></div>
</div>
<div>
<div className="fi"><button className="fi-q">How long does it take to produce an AI video?<div className="fi-icon">+</div></button><div className="fi-a">A 30-second AI ad video is typically delivered within 24 hours of script approval. A 60-second brand film takes 2–3 days. Longer explainers (2–3 minutes) take 3–5 days. Rush 24-hour delivery is available for time-sensitive campaigns. These timelines are dramatically faster than any traditional production workflow.</div></div>
<div className="fi"><button className="fi-q">Can you produce AI videos with real product shots?<div className="fi-icon">+</div></button><div className="fi-a">Yes — we composite your real product photography into AI-generated environments and scenes. This hybrid approach is highly effective for product showcase videos: real product, AI background and context, professional motion graphics. Requires your product images to be provided in advance of the production brief.</div></div>
<div className="fi"><button className="fi-q">Can AI replace our existing video production entirely?<div className="fi-icon">+</div></button><div className="fi-a">For brand films, ad videos, social content, explainers, training videos, and property walkthroughs — AI can replace the majority of traditional production. For content requiring specific named individuals (founders, spokespeople, testimonials) or highly location-specific footage, live-action capture remains necessary and AI handles everything around it.</div></div>
<div className="fi"><button className="fi-q">Do we own the rights to AI-generated videos you produce?<div className="fi-icon">+</div></button><div className="fi-a">Yes — all final deliverables are owned by you upon payment. We use our commercial AI tool licenses to generate content on your behalf, and the output is assigned to you in our project agreement. You can use, modify, and broadcast the video freely — no royalties, no restrictions on usage platform or geography.</div></div>
</div>
</div>
</div>
</section>
      <div className="wrap" style={{ padding: '40px 28px', borderTop: '1px solid var(--bdr)' }}>
<div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--s)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '16px' }}>Related Services</div>
<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
<a href="/services/influencer-video" className="rel-link">🎬 Influencer Video</a>
<a href="/services/drone-video" className="rel-link">🚁 Drone Video</a>
<a href="/services/ai-ad-creatives" className="rel-link">🤖 AI Ad Creatives</a>
<a href="/services/ai-content" className="rel-link">📝 AI Content</a>
<a href="/services/youtube-ads" className="rel-link">▶ YouTube Ads</a>
</div>
</div>
      <section className="cta-section">
<div className="wrap">
<h2>Your Next Brand Video Can<br />Be Ready Tomorrow.</h2>
<p>Share your brief — we'll send a sample script, style frame, and quote within 24 hours. No commitment, no production deposit required to see the concept.</p>
<div className="cta-btns">
<a href="/contact" className="btn btn-ac">🎥 Get Free Video Brief</a>
<a href="https://wa.me/919407000101" className="btn btn-wa">💬 WhatsApp Now</a>
</div>
</div>
</section>
      <PageScript id="services-ai-video-0" code={js0} />
    </>
  )
}
