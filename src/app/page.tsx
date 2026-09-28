/* eslint-disable */
// src/app/page.tsx — generated from index.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "Click Decoded — SEO · Marketing · AI Automation",
  description: "Click Decoded is India's premier B2B digital growth agency. SEO, Google Ads, AI Automation, WhatsApp workflows, GEO, and White Label fulfilment. 12 years.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Click Decoded — SEO · Marketing · AI Automation",
    description: "Trusted by agencies and businesses across India. Real results, measurable growth.",
    url: "/",
    type: "website",
  },
}

const css = `
/* ╔══════════════════════════════════════════╗
   ║  DESIGN TOKENS                           ║
   ╚══════════════════════════════════════════╝ */
:root{
  --n:   #2A4573;   /* brand navy */
  --n2:  #1e3460;
  --n-dark: #0f1e38; /* deep bg */
  --b:   #2A4573;   /* blue = same as navy */
  --o:   #EE7E1A;   /* brand orange */
  --o2:  #d46e12;
  --w:   #ffffff;
  --body:#1E293B;
  --m:   #475569;
  --s:   #64748b;
  --bg:  #F4F7FC;
  --bdr: #E2E8F0;
  --r:   14px;
  --nav-h: 70px;
  --ticker-h: 44px;
  --shell-h: calc(var(--nav-h) + var(--ticker-h)); /* 114px total */
}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;font-size:16px;}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto;}}
body{font-family:'Inter',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:var(--body);background:#fff;-webkit-font-smoothing:antialiased;}
html{overflow-x:hidden;}
a{text-decoration:none;color:inherit;}
img,svg{display:block;}
ul{list-style:none;}
button{font-family:inherit;cursor:pointer;}

/* ╔══════════════════════════════════════════╗
   ║  LAYOUT                                  ║
   ╚══════════════════════════════════════════╝ */
.wrap{max-width:1200px;margin:0 auto;padding:0 28px;}
section{padding:96px 0;}
.bg-dark{background:var(--n);}
.bg-off {background:var(--bg);}

/* ╔══════════════════════════════════════════╗
   ║  TYPE                                    ║
   ╚══════════════════════════════════════════╝ */
h1,h2,h3,h4{font-weight:800;line-height:1.1;letter-spacing:-.025em;color:var(--n);}
.pill{display:inline-flex;align-items:center;gap:7px;padding:6px 14px;border-radius:99px;font-size:11.5px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;}
.pill-o{background:rgba(238,126,26,.12);color:var(--o);}
.pill-b{background:rgba(42,69,115,.1);color:var(--n);}
.pill-w{background:rgba(255,255,255,.12);color:#fff;}
.sec-h{text-align:center;max-width:640px;margin:0 auto 56px;}
.sec-h h2{font-size:36px;margin-top:12px;margin-bottom:14px;}
.sec-h p{font-size:16px;color:var(--m);}

/* ╔══════════════════════════════════════════╗
   ║  BUTTONS                                 ║
   ╚══════════════════════════════════════════╝ */
.btn{display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:10px;font-weight:700;font-size:14px;border:none;transition:all .18s;white-space:nowrap;}
.btn-o{background:var(--o);color:#fff;box-shadow:0 4px 18px rgba(245,158,11,.3);}
.btn-o:hover{background:var(--o2);transform:translateY(-2px);box-shadow:0 8px 28px rgba(245,158,11,.4);}
.btn-n{background:var(--n);color:#fff;}
.btn-n:hover{background:var(--n2);transform:translateY(-2px);}
.btn-ghost{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.4);}
.btn-ghost:hover{background:rgba(255,255,255,.08);border-color:#fff;}
.btn-sm{padding:10px 20px;font-size:13px;}
.btn svg{flex-shrink:0;transition:transform .18s;}
.btn:hover svg{transform:translateX(3px);}

/* ╔══════════════════════════════════════════╗
   ║  LOGO INLINE SVG STYLES                  ║
   ╚══════════════════════════════════════════╝ */
.logo-wrap{display:flex;align-items:center;gap:11px;}
.logo-icon{width:38px;height:38px;flex-shrink:0;}
.logo-type{display:flex;flex-direction:column;line-height:1;}
.logo-type .lt1{font-size:18px;font-weight:900;letter-spacing:.5px;}
.logo-type .lt2{font-size:11px;font-weight:700;letter-spacing:3.5px;text-transform:uppercase;color:var(--o);}

/* ╔══════════════════════════════════════════╗
   ║  HEADER                                  ║
   ╚══════════════════════════════════════════╝ */
#hdr{
  background:rgba(255,255,255,.97);
  backdrop-filter:blur(14px);
  border-bottom:1px solid var(--bdr);
  transition:box-shadow .2s;
}
#hdr.up{box-shadow:0 4px 32px rgba(13,27,42,.09);}
.nav{display:flex;align-items:center;justify-content:space-between;height:70px;gap:16px;}

/* desktop menu */
.dmenu{display:flex;align-items:center;gap:2px;}
.dmenu>li{position:relative;}
.dmenu>li>a{
  display:flex;align-items:center;gap:5px;
  padding:9px 12px;font-size:13.5px;font-weight:600;
  color:var(--n);border-radius:8px;transition:.15s;
}
.dmenu>li>a:hover{background:var(--bg);color:var(--b);}
.dcar{width:10px;height:10px;opacity:.5;transition:transform .18s;flex-shrink:0;}
.dmenu>li:hover .dcar{transform:rotate(180deg);}

/* mega */
.mega{
  position:absolute;top:calc(100% + 10px);left:50%;
  transform:translateX(-50%) translateY(10px);
  background:#fff;border:1px solid var(--bdr);
  border-radius:18px;padding:26px;
  box-shadow:0 24px 64px rgba(13,27,42,.14);
  opacity:0;visibility:hidden;pointer-events:none;
  transition:opacity .18s,transform .18s;
}
.mega.wide{width:940px;display:grid;grid-template-columns:repeat(5,1fr);gap:22px;}
.mega.slim{width:296px;left:auto;right:0;transform:translateY(10px);}
.dmenu>li:hover .mega{opacity:1;visibility:visible;pointer-events:all;transform:translateX(-50%) translateY(0);}
.dmenu>li:hover .mega.slim{transform:translateY(0);}
.dmenu>li::after{content:'';position:absolute;top:100%;left:-40px;right:-40px;height:14px;}
/* Category heading */
.mc h5{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--b);margin-bottom:11px;}
/* Menu item — animated left-bar accent */
.mc a{
  display:block;position:relative;
  padding:5px 0 5px 11px;
  font-size:13px;font-weight:500;color:var(--body);transition:color .14s,padding-left .14s;
}
.mc a::before{
  content:'';position:absolute;left:0;top:50%;transform:translateY(-50%);
  width:2px;height:0;border-radius:1px;background:var(--o);
  transition:height .15s cubic-bezier(.22,1,.36,1);
}
.mc a:hover{color:var(--o);padding-left:14px;}
.mc a:hover::before{height:13px;}
/* Slim menu items */
.mega.slim a{
  display:block;position:relative;
  padding:9px 36px 9px 12px;border-radius:9px;
  font-size:13px;font-weight:600;color:var(--n);transition:.15s;
}
.mega.slim a::after{
  content:'→';position:absolute;right:12px;top:50%;transform:translateY(-50%);
  font-size:12px;color:var(--o);opacity:0;
  transition:opacity .15s,right .15s;
}
.mega.slim a:hover{background:var(--bg);color:var(--o);}
.mega.slim a:hover::after{opacity:1;right:9px;}
.mega.slim a small{display:block;font-weight:400;font-size:11px;color:var(--s);margin-top:2px;}

.navcta{display:flex;align-items:center;gap:10px;}
/* hamburger */
.hb{display:none;flex-direction:column;gap:5px;background:none;border:none;padding:6px;border-radius:8px;}
.hb span{display:block;width:22px;height:2px;background:var(--n);border-radius:2px;transition:.22s;}
.hb.x span:nth-child(1){transform:translateY(7px) rotate(45deg);}
.hb.x span:nth-child(2){opacity:0;transform:scaleX(0);}
.hb.x span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}

/* mobile nav */
.mnav{
  display:none;position:fixed;inset:70px 0 0;
  background:#fff;z-index:899;overflow-y:auto;
  padding:16px 20px 60px;border-top:1px solid var(--bdr);
}
.mnav.on{display:block;}
.ma{border-bottom:1px solid var(--bdr);}
.ma>button{
  width:100%;text-align:left;background:none;border:none;
  padding:15px 4px;font-size:15.5px;font-weight:700;color:var(--n);
  display:flex;justify-content:space-between;align-items:center;
}
.ma .ms{max-height:0;overflow:hidden;transition:.3s;padding-left:10px;}
.ma.on .ms{max-height:1600px;padding-bottom:14px;}
.ma .ms a{display:block;padding:8px 0;color:var(--body);font-size:14px;}
.ma .ms a:hover{color:var(--o);}
.ma .ms h6{font-size:10px;text-transform:uppercase;letter-spacing:.07em;color:var(--b);font-weight:800;margin:12px 0 3px;}

/* ╔══════════════════════════════════════════╗
   ║  HERO — LIGHT 3D SCROLL REVEAL           ║
   ╚══════════════════════════════════════════╝ */
.scroll-hero-wrap{height:150vh;position:relative;}
.scroll-hero-sticky{
  position:sticky;top:var(--nav-h);height:calc(100vh - var(--nav-h));
  background:linear-gradient(135deg,#EBF0FA 0%,#F4F7FC 55%,#FDF5EE 100%);
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-template-rows:auto auto; /* row1=left content, row2=ticker — no empty fill row */
  overflow:hidden;
}
/* sh-right: explicitly col 2, spans all 3 rows → full height card, no auto-placement conflict */
.sh-right{grid-column:2;grid-row:1 / -1;}
/* ticker: full-width row 2 — overlaps sh-right col 2 in row 2 (sh-right is transparent so ticker shows) */
.scroll-hero-sticky>.ticker{
  grid-column:1 / -1;
  grid-row:2;
}
/* ── Subtle grid ── */
.scroll-hero-sticky::before{
  content:'';position:absolute;inset:0;pointer-events:none;z-index:0;
  background-image:
    linear-gradient(rgba(42,69,115,.07) 1px,transparent 1px),
    linear-gradient(90deg,rgba(42,69,115,.07) 1px,transparent 1px);
  background-size:52px 52px;
  -webkit-mask-image:radial-gradient(ellipse 90% 80% at 50% 50%,#000 20%,transparent 100%);
  mask-image:radial-gradient(ellipse 90% 80% at 50% 50%,#000 20%,transparent 100%);
}
/* ── Ambient light blobs ── */
.sh-glow-l{
  position:absolute;width:700px;height:700px;border-radius:50%;
  background:radial-gradient(circle,rgba(238,126,26,.09) 0%,rgba(238,126,26,.03) 45%,transparent 70%);
  top:-180px;left:-160px;pointer-events:none;z-index:1;
  animation:blobDrift1 14s ease-in-out infinite;
}
.sh-glow-r{
  position:absolute;width:600px;height:600px;border-radius:50%;
  background:radial-gradient(circle,rgba(42,69,200,.08) 0%,rgba(42,69,115,.03) 45%,transparent 70%);
  bottom:-100px;right:-80px;pointer-events:none;z-index:1;
  animation:blobDrift2 18s ease-in-out infinite;
}
.sh-glow-c{
  position:absolute;width:350px;height:350px;border-radius:50%;
  background:radial-gradient(circle,rgba(238,126,26,.05),transparent 65%);
  top:50%;left:50%;transform:translate(-50%,-50%);
  pointer-events:none;z-index:1;
  animation:blobDrift3 10s ease-in-out infinite;
}
@keyframes blobDrift1{0%,100%{transform:translate(0,0) scale(1);}33%{transform:translate(50px,-35px) scale(1.1);}66%{transform:translate(-25px,40px) scale(.93);}}
@keyframes blobDrift2{0%,100%{transform:translate(0,0) scale(1);}40%{transform:translate(-45px,25px) scale(1.07);}70%{transform:translate(35px,-50px) scale(.95);}}
@keyframes blobDrift3{0%,100%{transform:translate(-50%,-50%) scale(1);opacity:.5;}50%{transform:translate(-50%,-50%) scale(1.25);opacity:.2;}}

/* ── LEFT side ── */
.sh-left{
  grid-column:1;grid-row:1;
  padding:64px 40px 32px max(28px,calc((100vw - 1200px)/2 + 28px));
  display:flex;flex-direction:column;justify-content:flex-start;
  position:relative;z-index:3;
}
.sh-eyebrow{
  display:inline-flex;align-items:center;gap:7px;padding:5px 12px;border-radius:99px;
  background:rgba(42,69,115,.07);border:1px solid rgba(42,69,115,.13);
  font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;
  color:var(--n);margin-bottom:11px;align-self:flex-start;
}
.sh-h1{font-size:52px;color:var(--n-dark);line-height:1.06;letter-spacing:-.04em;margin-bottom:14px;}
.sh-h1 em{font-style:normal;color:var(--o);}

/* Progress dots */
.sh-dots{display:flex;gap:8px;margin-bottom:12px;}
.sh-dot{height:4px;border-radius:2px;background:rgba(42,69,115,.14);transition:width .45s ease,background .45s ease;cursor:pointer;width:28px;}
.sh-dot.active{width:54px;background:var(--o);}

/* Slides */
.sh-slides-wrap{position:relative;min-height:200px;}
.sh-slide{
  position:absolute;top:0;left:0;width:100%;
  opacity:0;transform:translateY(28px);filter:blur(6px);
  transition:opacity .55s cubic-bezier(.22,1,.36,1),transform .55s cubic-bezier(.22,1,.36,1),filter .55s ease;
  pointer-events:none;
}
.sh-slide.active{opacity:1;transform:translateY(0);filter:blur(0);pointer-events:auto;position:relative;}
.sh-slide.exit{opacity:0;transform:translateY(-20px);filter:blur(4px);}

.sh-svc-badge{
  display:inline-flex;align-items:center;gap:7px;padding:4px 12px;border-radius:99px;
  background:linear-gradient(135deg,rgba(238,126,26,.1),rgba(238,126,26,.05));
  border:1px solid rgba(238,126,26,.28);
  font-size:10.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;
  color:var(--o);margin-bottom:6px;
  box-shadow:0 2px 12px rgba(238,126,26,.1);
  animation:badgePulse 3.5s ease-in-out infinite;
}
@keyframes badgePulse{0%,100%{box-shadow:0 2px 12px rgba(238,126,26,.1);}50%{box-shadow:0 4px 24px rgba(238,126,26,.25);}}
.sh-slide-desc{font-size:14px;color:var(--m);line-height:1.7;max-width:390px;margin-bottom:10px;}
.sh-kpis{display:flex;gap:20px;flex-wrap:wrap;padding:10px 0;border-top:1px solid rgba(42,69,115,.09);margin-bottom:12px;}
.sh-kpi-val{font-size:20px;font-weight:900;color:var(--n);line-height:1;}
.sh-kpi-lbl{font-size:10px;color:var(--s);margin-top:3px;font-weight:500;}
.hero-btns{display:flex;gap:10px;flex-wrap:wrap;}
/* Ghost btn on light hero needs dark colours */
.sh-left .btn-ghost{color:var(--n);border-color:rgba(42,69,115,.3);}
.sh-left .btn-ghost:hover{background:rgba(42,69,115,.07);border-color:var(--n);color:var(--n);}

/* ── RIGHT SIDE ── */
.sh-right{
  position:relative;z-index:2;
  display:flex;align-items:flex-start;justify-content:flex-start;
  padding:0 max(28px,calc((100vw - 1200px)/2 + 28px)) 0 20px;
  overflow:visible;
  perspective:1200px;perspective-origin:40% 50%;
}
.sh-panel{
  position:absolute;
  inset:0 max(28px,calc((100vw - 1200px)/2 + 28px)) 0 20px;
  opacity:0;
  transform:translateY(80px) rotateX(-20deg) scale(.88);
  filter:blur(10px);
  transition:
    opacity .7s cubic-bezier(.22,1,.36,1),
    transform .7s cubic-bezier(.22,1,.36,1),
    filter .6s ease;
  display:flex;align-items:flex-start;justify-content:flex-start;
}
.sh-panel.active{
  opacity:1;transform:translateY(0) rotateX(0) scale(1);filter:blur(0);
}
.sh-panel.exit{
  opacity:0;transform:translateY(-70px) rotateX(24deg) scale(.86);filter:blur(8px);
}

/* ── Depth wrapper — 3D stacked card effect ── */
.sh-card-depth{
  position:relative;width:100%;max-width:456px;
  margin-top:100px;
  filter:drop-shadow(0 40px 80px rgba(42,69,115,.16));
}
/* Ghost layers behind card */
.sh-card-depth::before{
  content:'';position:absolute;
  inset:12px -12px -12px 12px;
  background:#fff;border:1px solid rgba(42,69,115,.06);
  border-radius:20px;z-index:-1;opacity:.55;
  box-shadow:0 8px 30px rgba(42,69,115,.07);
}
.sh-card-depth::after{
  content:'';position:absolute;
  inset:22px -22px -22px 22px;
  background:#fff;border:1px solid rgba(42,69,115,.04);
  border-radius:20px;z-index:-2;opacity:.3;
  box-shadow:0 8px 20px rgba(42,69,115,.05);
}

/* ── Main card ── */
.sh-card{
  background:#ffffff;
  border:1px solid rgba(42,69,115,.09);
  border-radius:20px;width:100%;overflow:hidden;
  box-shadow:
    0 1px 0 rgba(42,69,115,.04),
    0 4px 8px rgba(42,69,115,.04),
    0 16px 32px rgba(42,69,115,.07),
    0 40px 72px rgba(42,69,115,.09);
  transform:rotateX(3deg) rotateY(-5deg);
  transition:transform .45s cubic-bezier(.22,1,.36,1),box-shadow .45s ease;
  position:relative;z-index:1;
}
/* Shimmer top accent — shared */
.sh-card::before{
  content:'';display:block;height:2px;
  background-size:300% 100%;
  animation:shimmer 4s linear infinite;
}
@keyframes shimmer{0%{background-position:100% 0;}100%{background-position:-100% 0;}}
/* Per-panel accent colour */
.sh-panel[data-panel="0"] .sh-card::before{background:linear-gradient(90deg,var(--n),var(--o),var(--n));}
.sh-panel[data-panel="1"] .sh-card::before{background:linear-gradient(90deg,#7c3aed,var(--o),#7c3aed);}
.sh-panel[data-panel="2"] .sh-card::before{background:linear-gradient(90deg,#059669,var(--o),#059669);}
.sh-card-head{
  padding:13px 18px;border-bottom:1px solid rgba(42,69,115,.07);
  display:flex;align-items:center;gap:9px;
  font-size:12px;font-weight:600;color:var(--n);
  background:rgba(42,69,115,.025);
}
.sh-card-icon{width:26px;height:26px;border-radius:7px;font-size:13px;display:flex;align-items:center;justify-content:center;background:rgba(238,126,26,.1);flex-shrink:0;}
.sh-card-body{padding:16px 18px;}

/* SEO elements */
.sh-kw-row{
  display:flex;align-items:center;justify-content:space-between;
  padding:7px 10px;border-radius:8px;margin-bottom:5px;
  background:#F4F7FC;border:1px solid rgba(42,69,115,.08);transition:.18s;
}
.sh-kw-row:hover{background:rgba(238,126,26,.05);border-color:rgba(238,126,26,.2);}
.sh-kw-name{font-size:11.5px;color:var(--m);}
.sh-kw-pos{display:flex;align-items:center;gap:5px;font-size:11.5px;font-weight:700;}
.sh-kw-pos.up{color:#059669;}.sh-kw-pos.same{color:var(--s);}
.sh-bars-wrap{margin-top:12px;}
.sh-bars-label{font-size:10px;color:var(--s);margin-bottom:6px;font-weight:500;}
.sh-bars{display:flex;align-items:flex-end;gap:4px;height:52px;}
.sh-bar{flex:1;border-radius:3px 3px 0 0;background:#E2E8F0;}
.sh-bar.hi{background:var(--o);}

/* Social elements */
.sh-stat-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:11px;}
.sh-stat-box{background:#F4F7FC;border:1px solid rgba(42,69,115,.08);border-radius:10px;padding:11px 13px;}
.sh-stat-box .sv{font-size:19px;font-weight:900;color:var(--n-dark);line-height:1;}
.sh-stat-box .sl{font-size:9.5px;color:var(--s);margin-top:2px;}
.sh-roas{
  padding:11px 15px;border-radius:10px;
  background:linear-gradient(135deg,rgba(238,126,26,.09),rgba(238,126,26,.04));
  border:1px solid rgba(238,126,26,.2);
  display:flex;align-items:center;justify-content:space-between;
}
.sh-roas-val{font-size:26px;font-weight:900;color:var(--o);}
.sh-roas-lbl{font-size:10.5px;color:var(--m);}
.sh-plat-row{display:flex;gap:7px;margin-bottom:11px;}
.sh-plat{flex:1;padding:8px;border-radius:8px;text-align:center;border:1px solid rgba(42,69,115,.09);background:#F4F7FC;font-size:10px;font-weight:600;color:var(--m);}

/* WhatsApp elements */
.sh-wa-bar{
  display:flex;align-items:center;gap:8px;
  padding:10px 14px;border-bottom:1px solid rgba(42,69,115,.07);
  font-size:12px;font-weight:600;color:var(--n);background:rgba(42,69,115,.025);
}
.sh-online-dot{
  width:7px;height:7px;border-radius:50%;background:#059669;flex-shrink:0;
  box-shadow:0 0 0 3px rgba(5,150,105,.15);animation:shPulse 2s infinite;
}
@keyframes shPulse{0%,100%{box-shadow:0 0 0 3px rgba(5,150,105,.12);}50%{box-shadow:0 0 0 6px rgba(5,150,105,.05);}}
.sh-chat{display:flex;flex-direction:column;gap:6px;padding:11px 14px;}
.sh-msg{max-width:80%;padding:8px 11px;font-size:11.5px;line-height:1.5;border-radius:12px;}
.sh-msg.bot{background:#EEF2FF;color:var(--n);border:1px solid rgba(42,69,115,.1);border-radius:4px 12px 12px 12px;align-self:flex-start;}
.sh-msg.user{background:#F0FDF4;color:#065f46;border:1px solid rgba(5,150,105,.14);border-radius:12px 4px 12px 12px;align-self:flex-end;}
.sh-live-row{display:flex;gap:6px;padding:10px 14px;border-top:1px solid rgba(42,69,115,.07);}
.sh-live-badge{flex:1;padding:9px;border-radius:9px;text-align:center;background:#F4F7FC;border:1px solid rgba(42,69,115,.08);}
.sh-live-badge .lv{font-size:15px;font-weight:800;color:var(--n);}
.sh-live-badge .ll{font-size:9px;color:var(--s);margin-top:1px;}

/* Scroll hint */
.sh-scroll-hint{
  position:absolute;bottom:24px;left:50%;transform:translateX(-50%);
  display:flex;flex-direction:column;align-items:center;gap:6px;
  font-size:10px;font-weight:600;color:var(--s);
  letter-spacing:.08em;text-transform:uppercase;z-index:5;
  animation:shFade 2s ease-in-out infinite alternate;
}
@keyframes shFade{from{opacity:.35;}to{opacity:.8;}}
.sh-scroll-mouse{width:20px;height:32px;border:1.5px solid rgba(42,69,115,.2);border-radius:10px;display:flex;justify-content:center;padding-top:6px;}
.sh-scroll-mouse::after{content:'';width:2px;height:6px;background:var(--o);border-radius:1px;animation:shWheel 1.4s ease-in-out infinite;}
@keyframes shWheel{0%{transform:translateY(0);opacity:1;}100%{transform:translateY(8px);opacity:0;}}

/* ── HERO MOBILE ── */
@media(max-width:900px){
  .scroll-hero-wrap{height:auto;}
  .scroll-hero-sticky{
    position:relative;top:0;height:auto;
    grid-template-columns:1fr;
    grid-template-rows:1fr auto;
    min-height:calc(100svh - var(--nav-h));
    display:flex;flex-direction:column;
  }
  .sh-right{display:none;}
  .sh-left{
    flex:1;
    padding:24px 22px 32px;
    justify-content:center;
  }
  .scroll-hero-sticky>.ticker{grid-column:1/-1;grid-row:2;}
  .sh-h1{font-size:34px;letter-spacing:-.035em;}
  .sh-eyebrow{font-size:10px;margin-bottom:16px;}
  .sh-slide-desc{font-size:13.5px;max-width:100%;}
  .sh-kpis{gap:16px;}
  .sh-kpi-val{font-size:19px;}
  .sh-scroll-hint{display:none;}
  /* On mobile slides stack — show only active */
  .sh-slides-wrap{min-height:auto;position:relative;}
  .sh-slide{position:absolute;top:0;left:0;width:100%;opacity:0;transform:translateY(16px);filter:blur(4px);pointer-events:none;}
  .sh-slide.active{opacity:1;transform:translateY(0);filter:blur(0);pointer-events:auto;position:relative;}
  .sh-slide.exit{opacity:0;transform:translateY(-12px);filter:blur(2px);}
  .hero-btns .btn{font-size:13px;padding:11px 20px;}
}

/* ╔══════════════════════════════════════════╗
   ║  MARQUEE TICKER                          ║
   ╚══════════════════════════════════════════╝ */
.ticker{
  background:var(--o);
  padding:13px 0;
  overflow:hidden;
  white-space:nowrap;
  height:var(--ticker-h);
}
.ticker-inner{
  display:inline-flex;gap:0;
  animation:ticker 28s linear infinite;
}
.ticker-inner span{
  font-size:13px;font-weight:700;color:var(--n);
  padding:0 24px;text-transform:uppercase;letter-spacing:.06em;
}
.ticker-inner span::after{content:'✦';margin-left:24px;opacity:.4;}
@keyframes ticker{from{transform:translateX(0);}to{transform:translateX(-50%);}}

/* ╔══════════════════════════════════════════╗
   ║  BENTO SERVICES GRID                     ║
   ╚══════════════════════════════════════════╝ */
.bento{
  display:grid;
  grid-template-columns:repeat(12,1fr);
  grid-template-rows:auto;
  gap:16px;
}
.bc{
  background:#fff;
  border:1px solid var(--bdr);
  border-radius:20px;
  padding:32px;
  transition:all .25s;
  position:relative;
  overflow:hidden;
}
.bc:hover{box-shadow:0 20px 50px rgba(13,27,42,.1);transform:translateY(-4px);border-color:transparent;}
.bc::before{
  content:'';position:absolute;inset:0;
  background:linear-gradient(135deg,rgba(37,99,235,.04),transparent);
  opacity:0;transition:.25s;border-radius:20px;
  pointer-events:none;
}
.bc:hover::before{opacity:1;}
/* grid placement */
.bc-seo  {grid-column:span 4;}
.bc-ads  {grid-column:span 4;}
.bc-web  {grid-column:span 4;}
.bc-auto {grid-column:span 6;}
.bc-geo  {grid-column:span 6;}
.bc-wl   {grid-column:span 12;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:40px;padding:48px;}

.bc .bc-icon{
  width:52px;height:52px;border-radius:13px;
  background:linear-gradient(135deg,var(--b),var(--n));
  display:flex;align-items:center;justify-content:center;
  font-size:24px;margin-bottom:20px;
}
.bc h3{font-size:18px;margin-bottom:8px;}
.bc p{font-size:14px;color:var(--m);line-height:1.65;margin-bottom:18px;}
.bc .tag-row{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:18px;position:relative;z-index:2;}
.tag{padding:5px 11px;background:var(--bg);border:1px solid var(--bdr);border-radius:6px;font-size:12px;font-weight:600;color:var(--s);text-decoration:none;display:inline-block;}a.tag{transition:all .15s;}a.tag:hover{background:rgba(238,126,26,.08);border-color:rgba(238,126,26,.3);color:var(--o);transform:translateY(-1px);}
.bc-link{display:inline-flex;align-items:center;gap:5px;font-size:13px;font-weight:700;color:var(--o);transition:.15s;position:relative;z-index:2;}
.bc-link:hover{gap:9px;}

/* white label bento */
.bc-wl h2{font-size:30px;margin-bottom:14px;}
.bc-wl p{font-size:15px;color:var(--m);margin-bottom:24px;}
.wl-stats{display:flex;gap:32px;margin-top:32px;}
.wl-stat .ws-n{font-size:40px;font-weight:900;color:var(--o);line-height:1;}
.wl-stat .ws-l{font-size:12px;color:var(--s);margin-top:4px;}
.wl-right{
  background:linear-gradient(135deg,var(--n),#162d4e);
  border-radius:16px;padding:36px;color:#fff;
}
.wl-checks{display:flex;flex-direction:column;gap:14px;margin-top:16px;}
.wl-check{display:flex;align-items:flex-start;gap:11px;font-size:14px;font-weight:500;color:rgba(255,255,255,.75);}
.wl-check::before{content:'✓';width:22px;height:22px;background:rgba(245,158,11,.2);color:var(--o);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;flex-shrink:0;}

/* ╔══════════════════════════════════════════╗
   ║  STATS ROW                               ║
   ╚══════════════════════════════════════════╝ */
.stats-row{background:transparent;padding:56px 0;}
.stats-grid{
  display:grid;grid-template-columns:repeat(4,1fr);
  background:linear-gradient(135deg,var(--n-dark) 0%,#0d1b35 60%,#161f3a 100%);
  border-radius:24px;overflow:hidden;
  box-shadow:0 32px 80px rgba(15,30,56,.28),0 0 0 1px rgba(255,255,255,.07);
}
.stat-col{
  padding:44px 28px;text-align:center;position:relative;
  background:linear-gradient(180deg,rgba(255,255,255,.035) 0%,transparent 100%);
}
.stat-col::after{
  content:'';position:absolute;right:0;top:24px;bottom:24px;
  width:1px;background:linear-gradient(180deg,transparent,rgba(255,255,255,.1) 40%,rgba(255,255,255,.1) 60%,transparent);
}
.stat-col:last-child::after{display:none;}
.sn{font-size:54px;font-weight:900;line-height:1;letter-spacing:-.03em;
  background:linear-gradient(135deg,#f59e0b,var(--o));
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.sl{font-size:12.5px;color:rgba(255,255,255,.5);margin-top:10px;font-weight:500;letter-spacing:.03em;text-transform:uppercase;}

/* ── Why Choose Us strip ── */
.why-strip{padding:64px 0 48px;}
.why-strip .sec-h{margin-bottom:36px;}
.why-grid{
  display:grid;grid-template-columns:repeat(3,1fr);gap:16px;
}
.why-card{
  background:#fff;border:1px solid rgba(42,69,115,.09);border-radius:16px;
  padding:28px 24px;display:flex;gap:16px;align-items:flex-start;
  box-shadow:0 2px 12px rgba(42,69,115,.05);
  transition:transform .2s ease,box-shadow .2s ease;
}
.why-card:hover{transform:translateY(-3px);box-shadow:0 8px 28px rgba(42,69,115,.1);}
.why-icon{
  width:44px;height:44px;border-radius:12px;flex-shrink:0;
  display:flex;align-items:center;justify-content:center;font-size:20px;
  background:linear-gradient(135deg,rgba(238,126,26,.12),rgba(238,126,26,.06));
  border:1px solid rgba(238,126,26,.2);
}
.why-body h4{font-size:15px;font-weight:700;color:var(--n-dark);margin-bottom:6px;}
.why-body p{font-size:13px;color:var(--s);line-height:1.6;margin:0;}
@media(max-width:900px){.why-grid{grid-template-columns:1fr 1fr;}}
@media(max-width:600px){.why-grid{grid-template-columns:1fr;}}

/* ╔══════════════════════════════════════════╗
   ║  AUTOMATION FEATURE                      ║
   ╚══════════════════════════════════════════╝ */
.auto-section{
  background:var(--n-dark);
  color:#fff;
  overflow:hidden;
  position:relative;
}
.auto-section::before{
  content:'';position:absolute;
  width:700px;height:700px;
  border-radius:50%;
  background:radial-gradient(circle,rgba(245,158,11,.08),transparent 65%);
  top:-200px;right:-150px;
}
.auto-section::after{
  content:'';position:absolute;
  width:500px;height:500px;
  border-radius:50%;
  background:radial-gradient(circle,rgba(37,99,235,.1),transparent 65%);
  bottom:-150px;left:-100px;
}
.auto-inner{position:relative;z-index:2;}
.auto-section .sec-h h2{color:#fff;}
.auto-section .sec-h p{color:rgba(255,255,255,.5);}
.auto-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:44px;}
.acard{
  border:1px solid rgba(255,255,255,.07);
  border-radius:20px;
  padding:34px;
  background:rgba(255,255,255,.03);
  transition:.2s;
  position:relative;overflow:hidden;
}
.acard::before{
  content:'';position:absolute;top:0;left:0;right:0;height:2px;
  background:linear-gradient(90deg,var(--b),var(--o));
  transform:scaleX(0);transform-origin:left;transition:.3s;
}
.acard:hover{background:rgba(255,255,255,.06);border-color:rgba(245,158,11,.15);}
.acard:hover::before{transform:scaleX(1);}
.acard .ai{font-size:38px;margin-bottom:18px;}
.acard h4{color:#fff;font-size:18px;margin-bottom:10px;}
.acard p{color:rgba(255,255,255,.5);font-size:14px;line-height:1.7;}
.acard .atag{
  display:inline-flex;align-items:center;gap:6px;
  margin-top:18px;padding:6px 12px;border-radius:6px;
  background:rgba(245,158,11,.1);color:var(--o);font-size:12px;font-weight:700;
}

/* ╔══════════════════════════════════════════╗
   ║  GEO SECTION                             ║
   ╚══════════════════════════════════════════╝ */
.geo-section{background:var(--bg);}
.geo-grid{display:grid;grid-template-columns:1fr 1fr;gap:28px;align-items:stretch;}
/* GEO LEFT — dark hero card */
.geo-left{
  background:linear-gradient(145deg,var(--n-dark) 0%,#162d52 60%,#0f2040 100%);
  border-radius:28px;padding:44px 40px;position:relative;overflow:hidden;
}
.geo-left::before{
  content:'';position:absolute;top:-60px;right:-60px;
  width:260px;height:260px;border-radius:50%;
  background:radial-gradient(circle,rgba(37,99,235,.18) 0%,transparent 70%);
  pointer-events:none;
}
.geo-left::after{
  content:'';position:absolute;bottom:-80px;left:-40px;
  width:220px;height:220px;border-radius:50%;
  background:radial-gradient(circle,rgba(238,126,26,.1) 0%,transparent 70%);
  pointer-events:none;
}
.geo-left .pill-b{background:rgba(37,99,235,.18);color:#93c5fd;border:1px solid rgba(37,99,235,.3);}
.geo-left h2{font-size:clamp(28px,3vw,40px);margin:16px 0 16px;color:#fff;letter-spacing:-.03em;}
.geo-left h2 em{font-style:normal;background:linear-gradient(90deg,#60a5fa,var(--o));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.geo-left>p,.geo-left .pill-b,.geo-left h2{position:relative;z-index:1;}
.geo-left>p{color:rgba(255,255,255,.6);font-size:15px;line-height:1.75;margin-bottom:28px;}
/* AI mention preview card */
.geo-preview{
  background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);
  border-radius:14px;padding:18px 20px;margin-bottom:24px;position:relative;z-index:1;
}
.geo-preview-label{font-size:10.5px;font-weight:700;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:.1em;margin-bottom:12px;display:flex;align-items:center;gap:6px;}
.geo-preview-label span{width:6px;height:6px;border-radius:50%;background:#22c55e;display:inline-block;animation:pulse 2s infinite;}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1);}50%{opacity:.5;transform:scale(1.3);}}
.geo-mention{display:flex;align-items:flex-start;gap:10px;margin-bottom:10px;}
.geo-mention:last-child{margin-bottom:0;}
.gm-src{font-size:11px;font-weight:700;color:rgba(255,255,255,.4);min-width:80px;padding-top:1px;}
.gm-text{font-size:13px;color:rgba(255,255,255,.7);line-height:1.5;}
.gm-text strong{color:#fff;font-weight:600;}
/* stat row */
.geo-stats{display:flex;gap:0;margin-bottom:28px;position:relative;z-index:1;border:1px solid rgba(255,255,255,.08);border-radius:14px;overflow:hidden;}
.geo-stat{flex:1;text-align:center;padding:16px 12px;border-right:1px solid rgba(255,255,255,.08);}
.geo-stat:last-child{border-right:none;}
.gs-n{font-size:22px;font-weight:900;color:var(--o);letter-spacing:-.03em;line-height:1;}
.gs-l{font-size:10.5px;color:rgba(255,255,255,.4);margin-top:4px;line-height:1.3;}
/* platform badges */
.geo-platforms{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:28px;position:relative;z-index:1;}
.gp{
  display:flex;align-items:center;gap:7px;
  padding:7px 14px;border-radius:8px;
  background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);
  font-size:12.5px;font-weight:600;color:rgba(255,255,255,.7);
  transition:.18s;
}
.gp:hover{background:rgba(255,255,255,.12);color:#fff;border-color:rgba(255,255,255,.2);transform:translateY(-2px);}
.gp .gi{font-size:15px;}
.geo-right{display:flex;flex-direction:column;gap:12px;}
.geo-right-head{margin-bottom:4px;}
.geo-right-head p{font-size:13px;color:var(--s);line-height:1.5;}
.geo-cards-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;flex:1;}
.geo-card{
  background:#fff;border:1px solid var(--bdr);
  border-radius:16px;padding:22px 20px;
  display:flex;flex-direction:column;gap:14px;
  transition:.25s;position:relative;overflow:hidden;
}
.geo-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--n),var(--b));transform:scaleX(0);transform-origin:left;transition:.25s;}
.geo-card:hover{border-color:transparent;box-shadow:0 12px 36px rgba(37,99,235,.12);transform:translateY(-3px);}
.geo-card:hover::before{transform:scaleX(1);}
.geo-card .gc-icon{
  width:46px;height:46px;border-radius:12px;
  background:linear-gradient(135deg,rgba(42,69,115,.08),rgba(37,99,235,.12));
  border:1px solid rgba(42,69,115,.1);
  display:flex;align-items:center;justify-content:center;
  font-size:22px;flex-shrink:0;
}
.geo-card h4{font-size:14px;font-weight:700;margin-bottom:6px;color:var(--n);line-height:1.3;}
.geo-card p{font-size:12.5px;color:var(--m);line-height:1.6;margin:0;}
/* GEO result card at bottom */
.geo-result{
  background:linear-gradient(135deg,var(--n) 0%,#1e3a6e 100%);
  border-radius:16px;padding:22px 24px;
  display:flex;align-items:center;gap:20px;
}
.gr-nums{display:flex;gap:20px;flex-shrink:0;}
.gr-num{text-align:center;}
.gr-n{font-size:26px;font-weight:900;color:var(--o);letter-spacing:-.03em;line-height:1;}
.gr-l{font-size:10.5px;color:rgba(255,255,255,.45);margin-top:3px;line-height:1.2;}
.gr-divider{width:1px;background:rgba(255,255,255,.1);align-self:stretch;}
.gr-text{font-size:13px;color:rgba(255,255,255,.65);line-height:1.6;}
.gr-text strong{color:#fff;display:block;font-size:14px;margin-bottom:3px;}

/* ╔══════════════════════════════════════════╗
   ║  CASE STUDIES                            ║
   ╚══════════════════════════════════════════╝ */
.cases-section{background:#fff;}
.cases-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.case{
  border-radius:20px;overflow:hidden;
  border:1px solid var(--bdr);
  transition:.25s;
}
.case:hover{box-shadow:0 20px 50px rgba(13,27,42,.1);transform:translateY(-4px);}
.case-head{
  padding:32px;
  background:linear-gradient(135deg,var(--n),#162d4e);
  position:relative;overflow:hidden;
}
.case-head::after{
  content:'';position:absolute;
  width:120px;height:120px;border-radius:50%;
  background:rgba(245,158,11,.12);
  bottom:-40px;right:-20px;
}
.case-num{font-size:52px;font-weight:900;color:var(--o);line-height:1;letter-spacing:-.03em;}
.case-metric{font-size:13px;font-weight:600;color:rgba(255,255,255,.5);margin-top:4px;text-transform:uppercase;letter-spacing:.06em;}
.case-body{padding:24px;}
.case-sector{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--b);margin-bottom:8px;}
.case-body p{font-size:14px;color:var(--m);line-height:1.6;}

/* ╔══════════════════════════════════════════╗
   ║  TABS                                    ║
   ╚══════════════════════════════════════════╝ */
.tabs-section{background:var(--n-dark);}
.tabs-section .sec-h h2{color:#fff;}
.tabs-section .sec-h p{color:rgba(255,255,255,.5);}
.tab-row{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-bottom:36px;}
.tb{
  padding:10px 22px;border-radius:8px;
  border:1px solid rgba(255,255,255,.12);
  background:transparent;font-weight:700;font-size:13px;
  color:rgba(255,255,255,.5);transition:.18s;
}
.tb:hover{border-color:rgba(255,255,255,.3);color:#fff;}
.tb.on{background:var(--o);border-color:var(--o);color:#fff;}
.tp{display:none;max-width:800px;margin:0 auto;}
.tp.on{display:block;}
.tp-inner{
  background:rgba(255,255,255,.04);
  border:1px solid rgba(255,255,255,.08);
  border-radius:20px;padding:44px;
}
.tp h3{color:#fff;font-size:24px;margin-bottom:14px;}
.tp>p,
.tp-inner>p{color:rgba(255,255,255,.6);font-size:15px;line-height:1.75;margin-bottom:24px;}
.tp-list{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:28px;}
.tp-list li{
  display:flex;align-items:center;gap:9px;
  font-size:13.5px;color:rgba(255,255,255,.7);font-weight:500;
}
.tp-list li::before{content:'▸';color:var(--o);}

/* ╔══════════════════════════════════════════╗
   ║  TESTIMONIALS                            ║
   ╚══════════════════════════════════════════╝ */
.testi-section{background:var(--bg);}
.testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.tcard{
  background:#fff;border:1px solid var(--bdr);
  border-radius:20px;padding:32px;
  transition:.2s;display:flex;flex-direction:column;
}
.tcard:hover{box-shadow:0 16px 40px rgba(13,27,42,.09);}
.t-stars{color:var(--o);font-size:14px;letter-spacing:2px;margin-bottom:14px;}
.t-q{
  font-size:15px;color:var(--n);font-weight:500;
  line-height:1.65;margin-bottom:24px;flex:1;
  font-style:italic;
}
.t-q::before{content:'"';font-size:40px;color:var(--o);font-style:normal;line-height:0;vertical-align:-15px;margin-right:4px;}
.t-who{display:flex;align-items:center;gap:12px;}
.t-av{
  width:42px;height:42px;border-radius:50%;flex-shrink:0;
  background:linear-gradient(135deg,var(--b),var(--o));
  display:flex;align-items:center;justify-content:center;
  color:#fff;font-weight:800;font-size:13px;
}
.t-who b{display:block;color:var(--n);font-size:13.5px;}
.t-who small{color:var(--s);font-size:12px;}

/* ╔══════════════════════════════════════════╗
   ║  BLOG                                    ║
   ╚══════════════════════════════════════════╝ */
.blog-section{background:#fff;}
.blog-slider-wrap{position:relative;overflow:hidden;}
.blog-track{display:flex;gap:18px;transition:transform .55s cubic-bezier(.4,0,.2,1);}
.blog-track .bcard{flex:0 0 calc((100% - 36px)/3);min-width:0;}
.bcard{
  border:1px solid var(--bdr);border-radius:20px;
  overflow:hidden;transition:.25s;
}
.bcard:hover{box-shadow:0 16px 40px rgba(13,27,42,.09);transform:translateY(-4px);}
.bcard-img{
  height:190px;
  display:flex;align-items:flex-end;padding:18px;
  position:relative;
}
.bcard-img::after{
  content:'';position:absolute;inset:0;
  background:linear-gradient(to top,rgba(13,27,42,.6),transparent);
}
.bcard-cat{
  position:relative;z-index:1;
  background:var(--o);color:#fff;
  font-size:10.5px;font-weight:700;
  padding:4px 12px;border-radius:20px;
  text-transform:uppercase;letter-spacing:.06em;
}
.bcard-body{padding:24px;}
.bcard-date{font-size:11.5px;color:var(--s);margin-bottom:10px;}
.bcard-body h3{font-size:16px;margin-bottom:14px;line-height:1.45;}
.bcard-body .read{
  font-size:13px;font-weight:700;color:var(--o);
  display:inline-flex;align-items:center;gap:4px;transition:.15s;
}
.bcard-body .read:hover{gap:8px;}

/* ╔══════════════════════════════════════════╗
   ║  TOOLS MARQUEE                           ║
   ╚══════════════════════════════════════════╝ */
.tools-section{background:var(--bg);padding:60px 0;overflow:hidden;}
.tools-label{text-align:center;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:var(--s);margin-bottom:28px;}
.tools-track{
  display:flex;gap:0;
  animation:ticker 22s linear infinite;
  white-space:nowrap;
}
.tool-chip{
  display:inline-flex;align-items:center;gap:8px;
  padding:10px 20px;margin-right:12px;
  background:#fff;border:1px solid var(--bdr);
  border-radius:10px;font-size:13px;font-weight:600;
  color:var(--s);flex-shrink:0;
  transition:.2s;
}
.tool-chip:hover{border-color:var(--b);color:var(--b);}

/* ── Social proof marquee (above testimonials) ── */
.proof-strip{background:var(--n-dark);padding:52px 0;overflow:hidden;}
.proof-label{text-align:center;font-size:11.5px;font-weight:700;text-transform:uppercase;letter-spacing:.14em;color:rgba(255,255,255,.35);margin-bottom:26px;}
.proof-track{
  display:flex;gap:0;
  animation:ticker 30s linear infinite;
  white-space:nowrap;
}
.proof-chip{
  display:inline-flex;align-items:center;gap:10px;
  padding:11px 22px;margin-right:14px;
  background:rgba(255,255,255,.05);
  border:1px solid rgba(255,255,255,.1);
  border-radius:10px;font-size:13px;font-weight:600;
  color:rgba(255,255,255,.75);flex-shrink:0;
  transition:.2s;
}
.proof-chip .pc-val{color:var(--o);font-size:15px;font-weight:900;}
.proof-strip-wrap{display:flex;flex-direction:column;gap:14px;}

/* ╔══════════════════════════════════════════╗
   ║  LEAD FORM — DARK PANEL                  ║
   ╚══════════════════════════════════════════╝ */
.lead-section{
  background:var(--n);
  position:relative;overflow:visible;
  padding-top:96px; /* existing section padding */
}
.lead-section::before{
  content:'';position:absolute;
  width:500px;height:500px;border-radius:50%;
  background:radial-gradient(circle,rgba(245,158,11,.12),transparent 65%);
  top:-100px;left:-100px;
}
.lead-section::after{
  content:'';position:absolute;
  width:400px;height:400px;border-radius:50%;
  background:radial-gradient(circle,rgba(37,99,235,.12),transparent 65%);
  bottom:-100px;right:-50px;
}
.lead-inner{
  position:relative;z-index:2;overflow:visible;
  display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center;
}
.lead-l h2{color:#fff;font-size:38px;margin:14px 0 18px;}
.lead-l p{color:rgba(255,255,255,.55);font-size:16px;line-height:1.75;margin-bottom:32px;}
.lead-perks{display:flex;flex-direction:column;gap:12px;}
.perk{
  display:flex;align-items:center;gap:12px;
  font-size:14px;font-weight:600;color:rgba(255,255,255,.7);
}
.perk-dot{
  width:28px;height:28px;border-radius:50%;
  background:rgba(245,158,11,.15);border:1px solid rgba(245,158,11,.25);
  color:var(--o);display:flex;align-items:center;justify-content:center;
  font-size:12px;font-weight:900;flex-shrink:0;
}
.lead-form{
  background:rgba(255,255,255,.97);
  border-radius:22px;padding:30px 38px 38px;
  box-shadow:0 30px 80px rgba(0,0,0,.3);
  position:relative;
  margin-top:85px; /* space for half-out avatar */
}
.lead-form-avatar{
  position:absolute;
  top:-85px;left:50%;transform:translateX(-50%);
  width:100px;height:100px;border-radius:50%;
  border:5px solid rgba(255,255,255,.95);
  box-shadow:0 12px 36px rgba(0,0,0,.35),0 0 0 2px rgba(238,126,26,.3);
  overflow:hidden;background:#fff;
  display:flex;align-items:center;justify-content:center;
  z-index:100;
}
.lead-form-avatar img{width:100%;height:100%;object-fit:cover;display:block;}
.lead-form h3{font-size:22px;margin-bottom:6px;text-align:center;}
.lead-form .fsub{color:var(--m);font-size:13px;margin-bottom:26px;text-align:center;}
.field{margin-bottom:16px;}
.field label{font-size:12px;font-weight:700;color:var(--n);display:block;margin-bottom:6px;text-transform:uppercase;letter-spacing:.06em;}
.field input,.field select{
  width:100%;padding:12px 14px;
  border:1.5px solid var(--bdr);border-radius:10px;
  font-size:14px;font-family:inherit;color:var(--body);
  outline:none;transition:.15s;background:#fff;
}
.field input:focus,.field select:focus{border-color:var(--b);box-shadow:0 0 0 3px rgba(37,99,235,.1);}
.submsg{display:none;background:#dcfce7;color:#166534;padding:12px 16px;border-radius:10px;font-weight:600;margin-top:14px;font-size:14px;}

/* ╔══════════════════════════════════════════╗
   ║  FAQ                                     ║
   ╚══════════════════════════════════════════╝ */
.faq-section{background:var(--bg);}
.faq-wrap{
  display:grid;grid-template-columns:1fr 1fr;gap:0 28px;
  align-items:start;
}
.faq-col{display:flex;flex-direction:column;gap:0;}
@media(max-width:768px){.faq-wrap{grid-template-columns:1fr;}}
.fi{
  border:1px solid var(--bdr);border-radius:14px;
  margin-bottom:10px;overflow:hidden;transition:.15s;
  background:#fff;
}
.fi:hover{border-color:rgba(37,99,235,.2);}
.fi.on{border-color:rgba(245,158,11,.3);box-shadow:0 4px 20px rgba(245,158,11,.07);}
.fi-q{
  width:100%;text-align:left;background:transparent;border:none;
  padding:20px 22px;font-size:15px;font-weight:700;color:var(--n);
  display:flex;justify-content:space-between;align-items:center;gap:12px;
}
.fi-icon{
  width:26px;height:26px;border-radius:50%;flex-shrink:0;
  background:var(--bg);border:1px solid var(--bdr);
  display:flex;align-items:center;justify-content:center;
  color:var(--o);font-size:18px;font-weight:900;line-height:1;
  transition:transform .2s;
}
.fi.on .fi-icon{transform:rotate(45deg);background:var(--o);color:#fff;border-color:var(--o);}
.fi-a{max-height:0;overflow:hidden;transition:.3s;color:var(--m);font-size:14.5px;line-height:1.75;}
.fi.on .fi-a{max-height:260px;padding:0 22px 22px;}

/* ╔══════════════════════════════════════════╗
   ║  FOOTER                                  ║
   ╚══════════════════════════════════════════╝ */
footer{background:var(--n-dark);color:rgba(255,255,255,.5);}
.footer-main{padding:72px 0 52px;border-bottom:1px solid rgba(255,255,255,.06);}
.fg{display:grid;grid-template-columns:1.6fr 1fr 1fr 1.2fr;gap:48px;}
.fb-desc{font-size:14px;line-height:1.7;margin:14px 0 22px;max-width:270px;}
.socials{display:flex;gap:9px;}
.socials a{
  width:36px;height:36px;border-radius:9px;
  background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.07);
  display:flex;align-items:center;justify-content:center;
  font-size:12px;font-weight:700;color:rgba(255,255,255,.6);transition:.15s;
}
.socials a:hover{background:var(--o);border-color:var(--o);color:#fff;}
footer h4{
  color:rgba(255,255,255,.4);font-size:10px;font-weight:700;
  text-transform:uppercase;letter-spacing:.12em;margin-bottom:18px;
}
.fl a{
  display:block;padding:6px 0;font-size:13.5px;
  color:rgba(255,255,255,.45);transition:.12s;
}
.fl a:hover{color:var(--o);padding-left:4px;}
.fc a{
  display:flex;align-items:flex-start;gap:8px;padding:7px 0;
  font-size:13.5px;color:rgba(255,255,255,.45);transition:.12s;
}
.fc a:hover{color:var(--o);}
.footer-areas{
  padding:16px 0;border-bottom:1px solid rgba(255,255,255,.05);
  font-size:12.5px;
}
.footer-areas b{color:rgba(255,255,255,.35);}
.footer-areas a{display:inline;color:rgba(255,255,255,.25);margin:0 3px;transition:.1s;}
.footer-areas a:hover{color:var(--o);}
.footer-bottom{
  display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;
  padding:18px 0;font-size:11.5px;color:rgba(255,255,255,.25);
}
.footer-bottom a{color:rgba(255,255,255,.3);transition:.1s;}
.footer-bottom a:hover{color:var(--o);}

/* ╔══════════════════════════════════════════╗
   ║  REVEAL ANIMATION                        ║
   ╚══════════════════════════════════════════╝ */
.rv{opacity:0;transform:translateY(24px);transition:opacity .6s ease,transform .6s ease;}
.rv.in{opacity:1;transform:none;}
.rv2{opacity:0;transform:translateY(24px);transition:opacity .6s ease .15s,transform .6s ease .15s;}
.rv2.in{opacity:1;transform:none;}
.rv3{opacity:0;transform:translateY(24px);transition:opacity .6s ease .28s,transform .6s ease .28s;}
.rv4{opacity:0;transform:translateY(24px);transition:opacity .6s ease .42s,transform .6s ease .42s;}
.rv4.in{opacity:1;transform:none;}
.rv3.in{opacity:1;transform:none;}

/* ╔══════════════════════════════════════════╗
   ║  WORKING-ON TICKER                       ║
   ╚══════════════════════════════════════════╝ */
.working-strip{background:var(--n-dark);border-top:1px solid rgba(255,255,255,.07);border-bottom:1px solid rgba(255,255,255,.07);height:46px;display:flex;align-items:center;overflow:hidden;gap:0;}
.ws-label{flex-shrink:0;padding:0 20px;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.13em;color:var(--o);white-space:nowrap;border-right:1px solid rgba(255,255,255,.1);height:100%;display:flex;align-items:center;gap:7px;}
.ws-label::before{content:'';width:7px;height:7px;border-radius:50%;background:var(--o);box-shadow:0 0 6px var(--o);animation:ws-blink 1.4s ease-in-out infinite;}
@keyframes ws-blink{0%,100%{opacity:1;}50%{opacity:.3;}}
.ws-track-wrap{flex:1;overflow:hidden;height:100%;display:flex;align-items:center;}
.ws-track{display:flex;gap:0;animation:ws-scroll 38s linear infinite;width:max-content;}
.ws-track:hover{animation-play-state:paused;}
.ws-item{display:flex;align-items:center;gap:10px;padding:0 28px;font-size:12.5px;color:rgba(255,255,255,.55);white-space:nowrap;border-right:1px solid rgba(255,255,255,.07);}
.ws-item .ws-dot{width:5px;height:5px;border-radius:50%;background:var(--o);flex-shrink:0;}
@keyframes ws-scroll{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}

/* ╔══════════════════════════════════════════╗
   ║  RESULTS TICKER                          ║
   ╚══════════════════════════════════════════╝ */
.results-strip{background:linear-gradient(90deg,rgba(238,126,26,.06),rgba(42,69,115,.08),rgba(238,126,26,.06));border-top:1px solid rgba(238,126,26,.12);border-bottom:1px solid rgba(238,126,26,.12);height:48px;display:flex;align-items:center;overflow:hidden;}
.rs-label{flex-shrink:0;padding:0 22px;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.13em;color:var(--n);white-space:nowrap;border-right:1px solid var(--bdr);height:100%;display:flex;align-items:center;gap:6px;background:#fff;}
.rs-label span{color:var(--o);}
.rs-track-wrap{flex:1;overflow:hidden;height:100%;display:flex;align-items:center;}
.rs-track{display:flex;gap:0;animation:rs-scroll 45s linear infinite;width:max-content;}
.rs-track:hover{animation-play-state:paused;}
.rs-item{display:flex;align-items:center;gap:9px;padding:0 28px;font-size:12.5px;color:var(--body);white-space:nowrap;border-right:1px solid var(--bdr);font-weight:500;}
.rs-item .rs-badge{font-size:11px;font-weight:700;color:var(--o);background:rgba(238,126,26,.1);padding:2px 8px;border-radius:5px;}
@keyframes rs-scroll{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}

/* ╔══════════════════════════════════════════╗
   ║  TOP BAR                                 ║
   ╚══════════════════════════════════════════╝ */
.topbar{
  background:var(--n-dark);
  border-bottom:1px solid rgba(255,255,255,.06);
  padding:0;
}
.topbar-inner{
  max-width:1200px;margin:0 auto;padding:0 28px;width:100%;
  display:flex;align-items:center;justify-content:space-between;
  height:38px;gap:12px;
}
.topbar-left{
  display:flex;align-items:center;gap:20px;
}
.topbar-item{
  display:flex;align-items:center;gap:7px;
  font-size:12.5px;font-weight:500;color:rgba(255,255,255,.55);
  text-decoration:none;transition:.15s;white-space:nowrap;
}
.topbar-item:hover{color:var(--o);}
.topbar-item svg{flex-shrink:0;opacity:.7;}
.topbar-right{display:flex;align-items:center;gap:10px;}
.tb-btn{
  display:inline-flex;align-items:center;gap:6px;
  padding:5px 13px;border-radius:6px;
  font-size:11.5px;font-weight:700;border:none;cursor:pointer;
  transition:.15s;white-space:nowrap;text-decoration:none;
}
.tb-call{background:var(--o);color:#fff;}
.tb-call:hover{background:var(--o2);transform:translateY(-1px);}
.tb-wa{background:#25D366;color:#fff;}
.tb-wa:hover{background:#1ebe59;transform:translateY(-1px);}
/* topbar mobile handled by header.js */

/* ╔══════════════════════════════════════════╗
   ║  RESPONSIVE                              ║
   ╚══════════════════════════════════════════╝ */
@media(max-width:1024px){
  .bento{grid-template-columns:1fr 1fr;}
  .bc-seo,.bc-ads,.bc-web,.bc-auto,.bc-geo{grid-column:span 1;}
  .bc-wl{grid-column:span 2;grid-template-columns:1fr;}
  .mega.wide{width:700px;grid-template-columns:repeat(3,1fr);}
  .geo-grid{grid-template-columns:1fr;}
}
@media(max-width:768px){
  .dmenu,.navcta .btn:not(.show-m){display:none;}
  .hb{display:flex;}
  .bento,.auto-cards,.cases-grid,.testi-grid,/* blog carousel mobile handled in .blog-track */
  .bc-wl{grid-column:span 1;}
  .stats-grid,.fg,.lead-inner{grid-template-columns:1fr;}
  .tp-list{grid-template-columns:1fr;}
  section{padding:64px 0;}
  .sec-h h2{font-size:28px;}
}
@media(max-width:480px){
  .hero-btns{flex-direction:column;}
  .hero-btns .btn{justify-content:center;}
}

/* BLOG SECTION — real photo cards */
.blog-track .bcard{flex:0 0 calc(100% - 0px);}
.bcard-img-photo {
  height: 210px;
  padding: 0;
  overflow: hidden;
  position: relative;
}
.bcard-img-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform .4s ease;
}
.bcard-feat:hover .bcard-img-photo img { transform: scale(1.04); }
.bcard-img-photo::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(13,27,42,.55) 0%, transparent 55%);
}
.bcard-img-photo .bcard-cat { position: absolute; bottom: 14px; left: 14px; z-index: 2; }
.bcard-read-time {
  position: absolute;
  bottom: 14px;
  right: 14px;
  z-index: 2;
  font-size: 10px;
  font-weight: 700;
  color: rgba(255,255,255,.8);
  background: rgba(0,0,0,.3);
  padding: 3px 8px;
  border-radius: 20px;
  backdrop-filter: blur(4px);
}
.bcard-excerpt {
  font-size: 13px;
  color: var(--s);
  line-height: 1.6;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.bcard-feat { cursor: pointer; }
.bcard-feat:hover h3 { color: var(--o); }
.bcard-feat h3 { transition: color .2s; }

/* ─── Blog Carousel ─── */
.blog-slider-outer{position:relative;}
.blog-slider-wrap{overflow:hidden;border-radius:4px;}
.blog-track{display:flex;gap:18px;will-change:transform;transition:transform .55s cubic-bezier(.4,0,.2,1);}
.blog-track .bcard{flex:0 0 calc((100% - 36px)/3);min-width:0;}
.bslide-btn{position:absolute;top:38%;transform:translateY(-50%);z-index:10;
  width:42px;height:42px;border-radius:50%;border:none;cursor:pointer;
  background:rgba(255,255,255,.92);box-shadow:0 2px 12px rgba(0,0,0,.15);
  display:flex;align-items:center;justify-content:center;transition:.2s;}
.bslide-btn:hover{background:#fff;box-shadow:0 4px 20px rgba(0,0,0,.22);}
.bslide-prev{left:-18px;}.bslide-next{right:-18px;}
.bslide-dots{display:flex;justify-content:center;gap:7px;margin-top:28px;}
.bslide-dot{width:8px;height:8px;border-radius:50%;background:var(--bdr);
  border:none;cursor:pointer;padding:0;transition:.2s;}
.bslide-dot.active{background:var(--o);width:22px;border-radius:4px;}
@media(max-width:900px){.blog-track .bcard{flex:0 0 calc((100% - 18px)/2);}}
@media(max-width:600px){
  .blog-track .bcard{flex:0 0 100%;}
  .bslide-prev{left:-8px;}.bslide-next{right:-8px;}
}
`

const ld0 = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "Click Decoded",
      "url": "https://clickdecoded.com",
      "logo": "https://www.clickdecoded.com/images/logo-color.svg",
      "description": "Premium B2B digital marketing, SEO, AI automation and white label agency, Bhopal India.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bhopal",
        "addressRegion": "Madhya Pradesh",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "WebSite",
      "name": "Click Decoded",
      "url": "https://www.clickdecoded.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.clickdecoded.com/blog?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }
  ]
}`

const js0 = `(function(){
/* ── Header shadow ── */
const hdr=document.getElementById('hdr');
if(hdr) window.addEventListener('scroll',()=>hdr.classList.toggle('up',scrollY>40),{passive:true});

/* ── Reveal + Counter on scroll ── */
(function(){
  function animateCount(el){
    var target = parseInt(el.getAttribute('data-t'),10);
    var suffix = el.getAttribute('data-s')||'';
    var duration = 1400;
    var step = 16;
    var steps = duration / step;
    var inc = target / steps;
    var current = 0;
    var t = setInterval(function(){
      current = Math.min(current + inc, target);
      el.textContent = Math.floor(current) + suffix;
      if(current >= target){ el.textContent = target + suffix; clearInterval(t); }
    }, step);
  }

  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        e.target.classList.add('in');
        var counter = e.target.querySelector('.count');
        if(counter) animateCount(counter);
        obs.unobserve(e.target);
      }
    });
  },{threshold:0.1,rootMargin:'0px 0px -40px 0px'});

  document.querySelectorAll('.rv,.rv2,.rv3,.rv4').forEach(function(el){ obs.observe(el); });

  /* Hero elements — force visible immediately (already in viewport) */
  document.querySelectorAll('.sh-left,.sh-right,.scroll-hero-sticky').forEach(function(el){
    el.classList.add('in');
  });
})();

/* ── Hero slides ── */
(function(){
  var slides = document.querySelectorAll('.sh-slide');
  var panels = document.querySelectorAll('.sh-panel');
  var dots   = document.querySelectorAll('.sh-dot');
  if(!slides.length) return;
  var current = 0;
  var timer;

  function goTo(i){
    slides[current].classList.remove('active');
    panels[current] && panels[current].classList.remove('active');
    dots[current]   && dots[current].classList.remove('active');
    current = i;
    slides[current].classList.add('active');
    panels[current] && panels[current].classList.add('active');
    dots[current]   && dots[current].classList.add('active');
  }

  function startAuto(){ timer = setInterval(function(){ goTo((current+1)%slides.length); }, 5000); }
  function stopAuto(){  clearInterval(timer); }

  dots.forEach(function(d,i){
    d.addEventListener('click',function(){ stopAuto(); goTo(i); startAuto(); });
  });

  startAuto();
})();

/* ── FAQ accordion ── */
document.querySelectorAll('.fi-q').forEach(function(btn){
  btn.addEventListener('click',function(){
    var fi = btn.closest('.fi');
    var isOn = fi.classList.contains('on');
    document.querySelectorAll('.fi.on').forEach(function(o){ o.classList.remove('on'); });
    if(!isOn) fi.classList.add('on');
  });
});
})();`

const js1 = `(function(){
(function(){
  var track = document.getElementById('blogTrack');
  var dotsWrap = document.getElementById('blogDots');
  if(!track) return;
  var cards = track.querySelectorAll('.bcard');
  var total = cards.length;
  var visCount = 3; // cards visible at once
  var current = 0;
  var autoTimer;
  var gap = 18;

  function getVisCount(){
    var w = track.parentElement.offsetWidth;
    if(w < 600) return 1;
    if(w < 900) return 2;
    return 3;
  }
  function getSlideWidth(){
    visCount = getVisCount();
    var w = track.parentElement.offsetWidth;
    return (w - gap*(visCount-1)) / visCount;
  }
  var maxSlide = total - visCount;
  function goTo(n){
    visCount = getVisCount();
    maxSlide = total - visCount;
    if(n < 0) n = maxSlide;
    if(n > maxSlide) n = 0;
    current = n;
    var sw = getSlideWidth();
    track.style.transform = 'translateX(-' + ((sw + gap) * current) + 'px)';
    dots.forEach(function(d,i){ d.classList.toggle('active', i === current); });
  }
  // Build dots (one per slide position)
  var dots = [];
  for(var i=0;i<=maxSlide;i++){
    var d = document.createElement('button');
    d.className = 'bslide-dot' + (i===0?' active':'');
    d.setAttribute('aria-label','Slide '+(i+1));
    (function(idx){ d.addEventListener('click',function(){ goTo(idx); resetAuto(); }); })(i);
    dotsWrap.appendChild(d);
    dots.push(d);
  }
  document.querySelector('.bslide-prev').addEventListener('click',function(){ goTo(current-1); resetAuto(); });
  document.querySelector('.bslide-next').addEventListener('click',function(){ goTo(current+1); resetAuto(); });

  function resetAuto(){ clearInterval(autoTimer); autoTimer = setInterval(function(){ goTo(current+1); }, 4200); }
  resetAuto();

  // Pause on hover
  var outer = document.querySelector('.blog-slider-outer');
  outer.addEventListener('mouseenter',function(){ clearInterval(autoTimer); });
  outer.addEventListener('mouseleave', resetAuto);

  // Recalc on resize
  window.addEventListener('resize', function(){ goTo(current); });
  // Initial position
  goTo(0);
})();
})();`

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld0 }} />
      <div className="scroll-hero-wrap" id="home">
<div className="scroll-hero-sticky">
<div className="sh-glow-l"></div>
<div className="sh-glow-r"></div>
<div className="sh-glow-c"></div>

<div className="sh-left">
<div className="sh-eyebrow">🇮🇳 India's Premier B2B Growth Agency</div>
<h1 className="sh-h1">We Handle<br />the Digital.<br /><em>You Handle<br />the Business.</em></h1>

<div className="sh-dots">
<div className="sh-dot active" data-i="0"></div>
<div className="sh-dot" data-i="1"></div>
<div className="sh-dot" data-i="2"></div>
</div>

<div className="sh-slides-wrap">

<div className="sh-slide active" data-slide="0">
<div className="sh-svc-badge">🔍 SEO &amp; Organic Growth</div>
<p className="sh-slide-desc">Long-term rankings that compound month over month. Technical audits, content strategy, and authority building that puts your brand on Page 1 and keeps it there.</p>
<div className="sh-kpis">
<div><div className="sh-kpi-val" data-val="3×">3×</div><div className="sh-kpi-lbl">Avg Traffic Growth</div></div>
<div><div className="sh-kpi-val" data-val="89%">89%</div><div className="sh-kpi-lbl">Keywords in Top 10</div></div>
<div><div className="sh-kpi-val" data-val="0">0</div><div className="sh-kpi-lbl">Penalty Risk</div></div>
</div>
<div className="hero-btns">
<a href="#contact" className="btn btn-o">Get Free SEO Audit <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
<a href="/services/seo" className="btn btn-ghost">All Services</a>
</div>
</div>

<div className="sh-slide" data-slide="1">
<div className="sh-svc-badge">📢 Social Media &amp; Paid Ads</div>
<p className="sh-slide-desc">Google, Meta and LinkedIn campaigns built for measurable ROI — not vanity metrics. Every rupee tracked, every campaign optimised weekly with full transparency.</p>
<div className="sh-kpis">
<div><div className="sh-kpi-val" data-val="6.2×">6.2×</div><div className="sh-kpi-lbl">Avg ROAS</div></div>
<div><div className="sh-kpi-val" data-val="-38%">-38%</div><div className="sh-kpi-lbl">Cost Per Lead</div></div>
<div><div className="sh-kpi-val" data-val="₹89">₹89</div><div className="sh-kpi-lbl">Avg Lead Cost</div></div>
</div>
<div className="hero-btns">
<a href="#contact" className="btn btn-o">Get Campaign Audit <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
<a href="/services/seo" className="btn btn-ghost">All Services</a>
</div>
</div>

<div className="sh-slide" data-slide="2">
<div className="sh-svc-badge">🤖 WhatsApp &amp; AI Automation</div>
<p className="sh-slide-desc">Never lose a lead to slow response again. AI chatbots and n8n workflows respond in seconds, qualify leads, and book appointments — while you sleep.</p>
<div className="sh-kpis">
<div><div className="sh-kpi-val" data-val="2 min">2 min</div><div className="sh-kpi-lbl">Avg Response Time</div></div>
<div><div className="sh-kpi-val" data-val="94%">94%</div><div className="sh-kpi-lbl">Queries Resolved</div></div>
<div><div className="sh-kpi-val" data-val="4+">4+</div><div className="sh-kpi-lbl">Languages Supported</div></div>
</div>
<div className="hero-btns">
<a href="#contact" className="btn btn-o">Build My Bot <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
<a href="/services/seo" className="btn btn-ghost">All Services</a>
</div>
</div>
</div>
</div>

<div className="ticker" aria-hidden="true">
<div className="ticker-inner">
<span>SEO Services</span><span>Google Ads</span><span>WhatsApp Automation</span><span>White Label SEO</span><span>GEO Optimization</span><span>Web Development</span><span>n8n Workflows</span><span>AI Chatbots</span><span>Meta Ads</span><span>Link Building</span><span>LLM Optimization</span><span>CRM Automation</span>
<span>SEO Services</span><span>Google Ads</span><span>WhatsApp Automation</span><span>White Label SEO</span><span>GEO Optimization</span><span>Web Development</span><span>n8n Workflows</span><span>AI Chatbots</span><span>Meta Ads</span><span>Link Building</span><span>LLM Optimization</span><span>CRM Automation</span>
</div>
</div>

<div className="sh-right">

<div className="sh-panel active" data-panel="0">
<div className="sh-card-depth">
<div className="sh-card">
<div className="sh-card-head">
<div className="sh-card-icon">🔍</div>
      Organic Rankings Dashboard
      <span style={{ marginLeft: 'auto', fontSize: '10px', color: 'rgba(255,255,255,.3)' }}>Live · Updated daily</span>
</div>
<div className="sh-card-body">
<div className="sh-kw-row">
<span className="sh-kw-name">b2b seo agency india</span>
<span className="sh-kw-pos up">▲ #1 <span style={{ fontSize: '9px', opacity: '.5' }}>was 7</span></span>
</div>
<div className="sh-kw-row">
<span className="sh-kw-name">white label seo services</span>
<span className="sh-kw-pos up">▲ #2 <span style={{ fontSize: '9px', opacity: '.5' }}>was 11</span></span>
</div>
<div className="sh-kw-row">
<span className="sh-kw-name">digital marketing bhopal</span>
<span className="sh-kw-pos up">▲ #1 <span style={{ fontSize: '9px', opacity: '.5' }}>was 4</span></span>
</div>
<div className="sh-kw-row">
<span className="sh-kw-name">ai automation agency</span>
<span className="sh-kw-pos same">→ #3 <span style={{ fontSize: '9px', opacity: '.5' }}>stable</span></span>
</div>
<div className="sh-bars-wrap">
<div className="sh-bars-label">Organic Traffic — Last 6 Months</div>
<div className="sh-bars">
<div className="sh-bar" style={{ height: '32%' }}></div>
<div className="sh-bar" style={{ height: '45%' }}></div>
<div className="sh-bar" style={{ height: '52%' }}></div>
<div className="sh-bar" style={{ height: '65%' }}></div>
<div className="sh-bar" style={{ height: '80%' }}></div>
<div className="sh-bar hi" style={{ height: '100%' }}></div>
</div>
</div>
<div style={{ display: 'flex', gap: '12px', marginTop: '14px' }}>
<span style={{ fontSize: '10.5px', color: 'var(--s)' }}>DA <strong style={{ color: 'var(--n-dark)' }}>54</strong></span>
<span style={{ fontSize: '10.5px', color: 'var(--s)' }}>Backlinks <strong style={{ color: 'var(--n-dark)' }}>2.4k</strong></span>
<span style={{ fontSize: '10.5px', color: '#059669', fontWeight: '600' }}>✓ Zero Penalties</span>
</div>
</div>
</div>
</div>
</div>

<div className="sh-panel" data-panel="1">
<div className="sh-card-depth">
<div className="sh-card">
<div className="sh-card-head">
<div className="sh-card-icon">📊</div>
      Campaign Performance — July 2025
      <span style={{ marginLeft: 'auto', fontSize: '10px', color: 'var(--s)' }}>Meta + Google</span>
</div>
<div className="sh-card-body">
<div className="sh-plat-row">
<div className="sh-plat">🔵 Meta Ads</div>
<div className="sh-plat">🔴 Google Ads</div>
<div className="sh-plat">🟦 LinkedIn</div>
</div>
<div className="sh-stat-grid">
<div className="sh-stat-box">
<div className="sv">4.2L</div><div className="sl">Total Reach</div>
</div>
<div className="sh-stat-box">
<div className="sv">847</div><div className="sl">Conversions</div>
</div>
<div className="sh-stat-box">
<div className="sv">₹89</div><div className="sl">Cost / Lead</div>
</div>
<div className="sh-stat-box">
<div className="sv">3.8%</div><div className="sl">CTR (avg)</div>
</div>
</div>
<div className="sh-roas">
<div>
<div className="sh-roas-val">6.2×</div>
<div className="sh-roas-lbl">Return on Ad Spend</div>
</div>
<svg width="80" height="36" viewBox="0 0 80 36" fill="none">
<polyline points="0,30 13,24 26,20 39,14 52,9 65,5 80,1" stroke="#EE7E1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
<polyline points="0,30 13,24 26,20 39,14 52,9 65,5 80,1 80,36 0,36" fill="rgba(238,126,26,.08)" />
</svg>
</div>
</div>
</div>
</div>
</div>

<div className="sh-panel" data-panel="2">
<div className="sh-card-depth">
<div className="sh-card">
<div className="sh-wa-bar">
<div className="sh-online-dot"></div>
      WhatsApp AI Agent · Multilingual
      <span style={{ marginLeft: 'auto', fontSize: '10px', color: 'var(--s)' }}>42 req/min</span>
</div>
<div className="sh-chat">
<div className="sh-msg user">Hi, I need info about your pricing for SEO services.</div>
<div className="sh-msg bot">👋 Hello! I'm the Click Decoded assistant. We offer customised SEO plans starting at ₹15,000/mo. May I know your website URL?</div>
<div className="sh-msg user">clickdecoded.com — we're a B2B SaaS</div>
<div className="sh-msg bot">Perfect! I'll schedule a free strategy call for you. Available slots: <strong>Mon 11am · Tue 3pm · Wed 10am</strong> — which works?</div>
<div className="sh-msg user" style={{ fontSize: '10.5px', opacity: '.7', fontStyle: 'italic' }}>✓ Booking confirmed automatically…</div>
</div>
<div className="sh-live-row">
<div className="sh-live-badge"><div className="lv">94%</div><div className="ll">Resolved</div></div>
<div className="sh-live-badge"><div className="lv">2 min</div><div className="ll">Avg Reply</div></div>
<div className="sh-live-badge"><div className="lv">4</div><div className="ll">Languages</div></div>
<div className="sh-live-badge"><div className="lv">24/7</div><div className="ll">Active</div></div>
</div>
</div>
</div>
</div>
</div>

<div className="sh-scroll-hint">
<div className="sh-scroll-mouse"></div>
   Scroll to explore
  </div>
</div>
</div>
      <section id="services">
<div className="wrap">
<div className="sec-h rv">
<div className="pill pill-b">Our Services</div>
<h2>Every Growth Lever.<br />One Agency.</h2>
<p>From search rankings to AI-powered lead follow-up — we do it all, or do it invisibly under your brand.</p>
</div>
<div className="bento">
<div className="bc bc-seo rv">
<div className="bc-icon">🔍</div>
<h3>SEO Services</h3>
<p>Long-term organic visibility through technical audits, content strategy, and authoritative link building. No penalties, no shortcuts.</p>
<div className="tag-row"><a href="/services/technical-seo-audit" className="tag">Technical SEO</a><a href="/services/local-seo" className="tag">Local SEO</a><a href="/services/ecommerce-seo" className="tag">E-comm SEO</a></div>
<a href="/services/seo" className="bc-link">Explore SEO <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
</div>
<div className="bc bc-ads rv2">
<div className="bc-icon">📢</div>
<h3>Digital Marketing</h3>
<p>Google Ads, Meta Ads &amp; social campaigns built for measurable ROI. Every rupee tracked, every campaign optimised.</p>
<div className="tag-row"><a href="/services/google-ads" className="tag">Google Ads</a><a href="/services/meta-ads" className="tag">Meta Ads</a><a href="/services/shopping-ads" className="tag">Shopping</a></div>
<a href="/services/google-ads" className="bc-link">Explore Ads <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
</div>
<div className="bc bc-web rv3">
<div className="bc-icon">💻</div>
<h3>Web Development</h3>
<p>Fast, SEO-ready WordPress websites and conversion-focused landing pages built to perform at scale.</p>
<div className="tag-row"><a href="/services/wordpress-development" className="tag">WordPress</a><a href="/services/ecommerce-development" className="tag">WooCommerce</a><a href="/services/landing-pages" className="tag">Landing Pages</a></div>
<a href="/services/web-development" className="bc-link">Explore Web Dev <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
</div>
<div className="bc bc-auto rv" style={{ background: 'linear-gradient(135deg,var(--n),#162d4e)', borderColor: 'transparent', color: '#fff' }}>
<div className="bc-icon" style={{ background: 'rgba(245,158,11,.2)' }}>🤖</div>
<h3 style={{ color: '#fff' }}>AI &amp; Automation</h3>
<p style={{ color: 'rgba(255,255,255,.6)' }}>WhatsApp automation, n8n workflows and AI chatbots. Your leads get replies in 2 minutes, not 2 hours — 24/7.</p>
<div className="tag-row"><a href="/services/whatsapp-automation" className="tag" style={{ background: 'rgba(255,255,255,.08)', borderColor: 'rgba(255,255,255,.1)', color: 'rgba(255,255,255,.6)' }}>WhatsApp</a><a href="/services/workflow-automation" className="tag" style={{ background: 'rgba(255,255,255,.08)', borderColor: 'rgba(255,255,255,.1)', color: 'rgba(255,255,255,.6)' }}>n8n</a><a href="/services/ai-chatbot-development" className="tag" style={{ background: 'rgba(255,255,255,.08)', borderColor: 'rgba(255,255,255,.1)', color: 'rgba(255,255,255,.6)' }}>Chatbots</a></div>
<a href="/services/ai-automation" className="bc-link" style={{ color: 'var(--o)' }}>Build My Automation <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
</div>
<div className="bc bc-geo rv2">
<div className="bc-icon" style={{ background: 'linear-gradient(135deg,#7c3aed,var(--n))' }}>🚀</div>
<h3>GEO / AI Search</h3>
<p>Get cited in ChatGPT, Gemini, and Perplexity. We make your brand the answer that AI engines trust and recommend.</p>
<div className="tag-row"><a href="/services/generative-engine-optimization" className="tag">GEO</a><a href="/services/answer-engine-optimization" className="tag">AEO</a><a href="/services/ai-search-optimization" className="tag">LLM Optimization</a><a href="/services/ai-brand-visibility" className="tag">AI Citations</a></div>
<a href="/services/generative-engine-optimization" className="bc-link">Explore GEO <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
</div>

<div className="bc bc-wl rv">
<div>
<div className="pill pill-b" style={{ marginBottom: '16px' }}>For Agencies</div>
<h2>Your Silent<br />Fulfilment Partner.</h2>
<p>You sell. We deliver — SEO, PPC, web, GEO, and branded reports — all under your brand, never ours. NDA-backed, zero client contact.</p>
<div className="wl-stats">
<div className="wl-stat"><div className="ws-n">48h</div><div className="ws-l">Report turnaround</div></div>
<div className="wl-stat"><div className="ws-n">0</div><div className="ws-l">Client contact ever</div></div>
<div className="wl-stat"><div className="ws-n">100%</div><div className="ws-l">White label, always</div></div>
</div>
</div>
<div className="wl-right">
<h4 style={{ fontSize: '16px', color: '#fff', letterSpacing: 'normal', textTransform: 'none', marginBottom: '6px' }}>Partner Benefits</h4>
<p style={{ color: 'rgba(255,255,255,.45)', fontSize: '13px', marginBottom: '18px' }}>Everything you need to scale without the overhead.</p>
<div className="wl-checks">
<div className="wl-check">100% White Label — your brand on every deliverable</div>
<div className="wl-check">NDA-backed confidentiality — zero client poaching</div>
<div className="wl-check">Branded reports in 48 hours</div>
<div className="wl-check">Scalable capacity — handle more without hiring</div>
</div>
<a href="#contact" className="btn btn-o" style={{ marginTop: '26px' }}>Become a Partner <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
</div>
</div>
</div>
</div>
</section>
      <div className="working-strip" aria-label="What the team is currently working on">
<div className="ws-label">⚡ Currently Working On</div>
<div className="ws-track-wrap">
<div className="ws-track">
<div className="ws-item"><div className="ws-dot"></div>Building n8n lead automation for a Bhopal logistics company</div>
<div className="ws-item"><div className="ws-dot"></div>Running Google Ads for a B2B SaaS client — ₹42 CPC, 6.8% CTR</div>
<div className="ws-item"><div className="ws-dot"></div>Technical SEO audit for a 4,000-page e-commerce store</div>
<div className="ws-item"><div className="ws-dot"></div>Deploying WhatsApp chatbot for a real estate developer in Indore</div>
<div className="ws-item"><div className="ws-dot"></div>White label SEO delivery for a Delhi digital agency</div>
<div className="ws-item"><div className="ws-dot"></div>Link building campaign — 38 DR60+ backlinks in 30 days</div>
<div className="ws-item"><div className="ws-dot"></div>GEO optimisation — getting client cited in ChatGPT responses</div>
<div className="ws-item"><div className="ws-dot"></div>Rebuilding a healthcare website on WordPress — 94 PageSpeed score</div>
<div className="ws-item"><div className="ws-dot"></div>Meta Ads for an e-commerce brand — 4.2× ROAS this month</div>
<div className="ws-item"><div className="ws-dot"></div>AI chatbot trained on client knowledge base — goes live Friday</div>

<div className="ws-item"><div className="ws-dot"></div>Building n8n lead automation for a Bhopal logistics company</div>
<div className="ws-item"><div className="ws-dot"></div>Running Google Ads for a B2B SaaS client — ₹42 CPC, 6.8% CTR</div>
<div className="ws-item"><div className="ws-dot"></div>Technical SEO audit for a 4,000-page e-commerce store</div>
<div className="ws-item"><div className="ws-dot"></div>Deploying WhatsApp chatbot for a real estate developer in Indore</div>
<div className="ws-item"><div className="ws-dot"></div>White label SEO delivery for a Delhi digital agency</div>
<div className="ws-item"><div className="ws-dot"></div>Link building campaign — 38 DR60+ backlinks in 30 days</div>
<div className="ws-item"><div className="ws-dot"></div>GEO optimisation — getting client cited in ChatGPT responses</div>
<div className="ws-item"><div className="ws-dot"></div>Rebuilding a healthcare website on WordPress — 94 PageSpeed score</div>
<div className="ws-item"><div className="ws-dot"></div>Meta Ads for an e-commerce brand — 4.2× ROAS this month</div>
<div className="ws-item"><div className="ws-dot"></div>AI chatbot trained on client knowledge base — goes live Friday</div>
</div>
</div>
</div>
      <div className="tools-section">
<div className="tools-label">Powered by industry-leading tools</div>
<div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
<div className="tools-track">
<span className="tool-chip">📊 Google Ads</span><span className="tool-chip">📘 Meta Business Suite</span><span className="tool-chip">📈 Google Analytics 4</span><span className="tool-chip">🔍 Search Console</span><span className="tool-chip">🔧 Semrush</span><span className="tool-chip">🔗 Ahrefs</span><span className="tool-chip">🏆 RankMath Pro</span><span className="tool-chip">🔄 n8n</span><span className="tool-chip">💬 WhatsApp Business API</span><span className="tool-chip">🌐 WordPress</span><span className="tool-chip">🛒 WooCommerce</span><span className="tool-chip">🎨 Elementor Pro</span><span className="tool-chip">🐸 Screaming Frog</span><span className="tool-chip">📋 Looker Studio</span>
<span className="tool-chip">📊 Google Ads</span><span className="tool-chip">📘 Meta Business Suite</span><span className="tool-chip">📈 Google Analytics 4</span><span className="tool-chip">🔍 Search Console</span><span className="tool-chip">🔧 Semrush</span><span className="tool-chip">🔗 Ahrefs</span><span className="tool-chip">🏆 RankMath Pro</span><span className="tool-chip">🔄 n8n</span><span className="tool-chip">💬 WhatsApp Business API</span><span className="tool-chip">🌐 WordPress</span><span className="tool-chip">🛒 WooCommerce</span><span className="tool-chip">🎨 Elementor Pro</span><span className="tool-chip">🐸 Screaming Frog</span><span className="tool-chip">📋 Looker Studio</span>
</div>
</div>
</div>
      <div className="stats-row">
<div className="wrap">
<div className="stats-grid">
<div className="stat-col rv">
<div className="sn count" data-t="12" data-s="+">12+</div>
<div className="sl">Years in digital marketing</div>
</div>
<div className="stat-col rv2">
<div className="sn count" data-t="500" data-s="+">500+</div>
<div className="sl">Projects delivered</div>
</div>
<div className="stat-col rv3">
<div className="sn count" data-t="98" data-s="%">98%</div>
<div className="sl">Client retention rate</div>
</div>
<div className="stat-col rv">
<div className="sn count" data-t="0" data-s="">0</div>
<div className="sl">Google penalty incidents</div>
</div>
</div>
</div>
</div>
      <div className="results-strip" aria-label="Real results from client work">
<div className="rs-label">📈 <span>Real Results</span></div>
<div className="rs-track-wrap">
<div className="rs-track">
<div className="rs-item"><span className="rs-badge">SEO</span> +340% organic traffic in 4 months — B2B SaaS client</div>
<div className="rs-item"><span className="rs-badge">Google Ads</span> ₹18 cost-per-lead — manufacturing company, Bhopal</div>
<div className="rs-item"><span className="rs-badge">WhatsApp</span> 2-minute lead response time, 24/7 — zero manual effort</div>
<div className="rs-item"><span className="rs-badge">SEO</span> Ranked #1 for "digital agency Bhopal" — in 90 days</div>
<div className="rs-item"><span className="rs-badge">Meta Ads</span> 4.2× ROAS — e-commerce brand, Indore</div>
<div className="rs-item"><span className="rs-badge">White Label</span> 0 client contact in 12+ years of fulfilment</div>
<div className="rs-item"><span className="rs-badge">n8n</span> 3-hour/week saved per sales rep — CRM + WhatsApp automation</div>
<div className="rs-item"><span className="rs-badge">Technical SEO</span> 0 Google penalties across 500+ projects</div>
<div className="rs-item"><span className="rs-badge">Web Dev</span> 94 PageSpeed score — healthcare website rebuild</div>
<div className="rs-item"><span className="rs-badge">GEO</span> Client cited in ChatGPT, Gemini &amp; Perplexity — same week</div>

<div className="rs-item"><span className="rs-badge">SEO</span> +340% organic traffic in 4 months — B2B SaaS client</div>
<div className="rs-item"><span className="rs-badge">Google Ads</span> ₹18 cost-per-lead — manufacturing company, Bhopal</div>
<div className="rs-item"><span className="rs-badge">WhatsApp</span> 2-minute lead response time, 24/7 — zero manual effort</div>
<div className="rs-item"><span className="rs-badge">SEO</span> Ranked #1 for "digital agency Bhopal" — in 90 days</div>
<div className="rs-item"><span className="rs-badge">Meta Ads</span> 4.2× ROAS — e-commerce brand, Indore</div>
<div className="rs-item"><span className="rs-badge">White Label</span> 0 client contact in 12+ years of fulfilment</div>
<div className="rs-item"><span className="rs-badge">n8n</span> 3-hour/week saved per sales rep — CRM + WhatsApp automation</div>
<div className="rs-item"><span className="rs-badge">Technical SEO</span> 0 Google penalties across 500+ projects</div>
<div className="rs-item"><span className="rs-badge">Web Dev</span> 94 PageSpeed score — healthcare website rebuild</div>
<div className="rs-item"><span className="rs-badge">GEO</span> Client cited in ChatGPT, Gemini &amp; Perplexity — same week</div>
</div>
</div>
</div>
      <section className="auto-section">
<div className="wrap auto-inner">
<div className="sec-h rv">
<div className="pill pill-o">AI Automation</div>
<h2>Stop Losing Leads to<br />Slow Response Times.</h2>
<p>While competitors reply in 2 hours, our automation fires in 2 minutes — 24/7, no manual effort.</p>
</div>
<div className="auto-cards">
<div className="acard rv">
<div className="ai">⚡</div>
<h4><a href="/services/whatsapp-automation" style={{ color: 'inherit' }}>WhatsApp Automation</a></h4>
<p>Instant lead follow-up via WhatsApp Business API. Auto-reply, qualify, and route every lead without lifting a finger.</p>
<div className="atag">📲 WhatsApp Business API</div>
</div>
<div className="acard rv2">
<div className="ai">🔄</div>
<h4>n8n Workflows</h4>
<p>Connect your CRM, forms, ads, and apps. Build automation pipelines that run silently in the background and never break.</p>
<div className="atag">🔗 n8n • Zapier • Make</div>
</div>
<div className="acard rv3">
<div className="ai">🤖</div>
<h4>AI Chatbots &amp; Agents</h4>
<p>Intelligent chatbots that capture, qualify and convert leads — on your website and WhatsApp — around the clock.</p>
<div className="atag">🧠 Powered by AI</div>
</div>
</div>
<div style={{ textAlign: 'center' }}>
<a href="#contact" className="btn btn-o">Build My Automation Stack <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
</div>
</div>
</section>
      <section className="geo-section">
<div className="wrap">
<div className="geo-grid">
<div className="geo-left rv">
<div className="pill pill-b">GEO / AI Search</div>
<h2>Get Found in<br /><em>AI-Powered</em> Search.</h2>
<p>ChatGPT, Gemini, Perplexity and Google AI Overviews now answer questions directly — without showing links. We make your brand the source they cite.</p>

<div className="geo-preview">
<div className="geo-preview-label"><span></span> Live AI mentions — our clients</div>
<div className="geo-mention">
<span className="gm-src">ChatGPT</span>
<span className="gm-text">"…<strong>Click Decoded</strong> is widely recommended for B2B SEO and lead automation in central India…"</span>
</div>
<div className="geo-mention">
<span className="gm-src">Gemini</span>
<span className="gm-text">"…for digital marketing in Bhopal, <strong>Click Decoded</strong> appears across multiple authoritative sources…"</span>
</div>
</div>

<div className="geo-stats">
<div className="geo-stat"><div className="gs-n">5</div><div className="gs-l">AI engines<br />we optimise for</div></div>
<div className="geo-stat"><div className="gs-n">30d</div><div className="gs-l">To first<br />AI citation</div></div>
<div className="geo-stat"><div className="gs-n">100%</div><div className="gs-l">White-hat<br />approach</div></div>
</div>
<div className="geo-platforms">
<div className="gp"><span className="gi">🧠</span> ChatGPT</div>
<div className="gp"><span className="gi">💎</span> Gemini</div>
<div className="gp"><span className="gi">🔵</span> Perplexity</div>
<div className="gp"><span className="gi">🔍</span> AI Overviews</div>
<div className="gp"><span className="gi">🤖</span> Copilot</div>
</div>
<a href="#contact" className="btn btn-o" style={{ position: 'relative', zIndex: '1' }}>Get GEO Strategy <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
</div>
<div className="geo-right rv2">
<div className="geo-right-head">
<div className="pill pill-b" style={{ marginBottom: '10px' }}>What We Do</div>
<p>Four precision services that get your brand cited — not just ranked — in the AI-first search era.</p>
</div>
<div className="geo-cards-grid">
<div className="geo-card">
<div className="gc-icon">🎯</div>
<div>
<h4>Generative Engine Optimization</h4>
<p>Optimise content and authority signals so AI engines choose your brand as a cited, trusted source.</p>
</div>
</div>
<div className="geo-card">
<div className="gc-icon">💬</div>
<div>
<h4>Answer Engine Optimization</h4>
<p>Structure your content as direct answers to the exact questions your customers are asking AI.</p>
</div>
</div>
<div className="geo-card">
<div className="gc-icon">🔗</div>
<div>
<h4>LLM &amp; Entity Markup</h4>
<p>Build the entity associations and schema signals that large language models rely on to cite sources.</p>
</div>
</div>
<div className="geo-card">
<div className="gc-icon">📊</div>
<div>
<h4>AI Brand Mention Tracking</h4>
<p>Monitor when and how AI engines cite your brand — and systematically improve it month over month.</p>
</div>
</div>
</div>

<div className="geo-result">
<div className="gr-nums">
<div className="gr-num"><div className="gr-n">3</div><div className="gr-l">AI engines<br />citing client</div></div>
<div className="gr-divider"></div>
<div className="gr-num"><div className="gr-n">28d</div><div className="gr-l">First citation<br />achieved</div></div>
</div>
<div className="gr-divider"></div>
<div className="gr-text"><strong>Real client result — B2B SaaS, Indore</strong>Cited in ChatGPT, Gemini &amp; Perplexity within the same week after GEO implementation.</div>
</div>
</div>
</div>
</div>
</section>
      <section className="cases-section">
<div className="wrap">
<div className="sec-h rv">
<div className="pill pill-o">Case Studies</div>
<h2>Real Clients.<br />Real Numbers.</h2>
<p>No vanity metrics. Results that show up in revenue, rankings, and ROI.</p>
</div>
<div className="cases-grid">
<div className="case rv">
<div className="case-head">
<div className="case-num">+212%</div>
<div className="case-metric">Organic Traffic Growth</div>
</div>
<div className="case-body">
<div className="case-sector">E-commerce · SEO</div>
<p>Organic traffic doubled in 6 months for a mid-sized Indore e-commerce brand through technical SEO and content strategy.</p>
</div>
</div>
<div className="case rv2">
<div className="case-head" style={{ background: 'linear-gradient(135deg,#1a0a3a,#2563eb)' }}>
<div className="case-num">-38%</div>
<div className="case-metric">Cost Per Lead Reduction</div>
</div>
<div className="case-body">
<div className="case-sector">Real Estate · Google Ads</div>
<p>Restructured ad campaigns and landing pages cut cost-per-lead by 38% while maintaining lead volume.</p>
</div>
</div>
<div className="case rv3">
<div className="case-head" style={{ background: 'linear-gradient(135deg,#0a2a1a,#0d1b2a)' }}>
<div className="case-num">2 min</div>
<div className="case-metric">Avg Lead Response Time</div>
</div>
<div className="case-body">
<div className="case-sector">Coaching · WhatsApp Automation</div>
<p>Deployed WhatsApp automation that responds to every lead within 2 minutes — up from 4+ hours manually.</p>
</div>
</div>
</div>
<div style={{ textAlign: 'center', marginTop: '36px' }}>
<a href="/our-work" className="btn btn-n">View All Case Studies</a>
</div>
</div>
</section>
      <section className="why-strip">
<div className="wrap">
<div className="sec-h rv" style={{ marginBottom: '36px' }}>
<div className="pill pill-b">Why Click Decoded</div>
<h2>Built Different.<br />Designed to Deliver.</h2>
<p>Not an agency that reports vanity metrics. We own outcomes.</p>
</div>
<div className="why-grid">
<div className="why-card rv">
<div className="why-icon">🎯</div>
<div className="why-body">
<h4>ROI-First, Always</h4>
<p>Every campaign is benchmarked against actual business outcomes — leads, revenue, and retention. Not impressions.</p>
</div>
</div>
<div className="why-card rv2">
<div className="why-icon">🔒</div>
<div className="why-body">
<h4>NDA-Backed Confidentiality</h4>
<p>For agencies: we never contact your clients. Your brand, your credit, zero risk of poaching.</p>
</div>
</div>
<div className="why-card rv3">
<div className="why-icon">⚡</div>
<div className="why-body">
<h4>48-Hour Turnaround</h4>
<p>White label reports and campaign updates delivered in 48 hours — so you always look sharp in front of clients.</p>
</div>
</div>
<div className="why-card rv">
<div className="why-icon">🤖</div>
<div className="why-body">
<h4>AI + Human Synergy</h4>
<p>AI tools for speed and scale, human experts for strategy. You get the best of both without hiring either.</p>
</div>
</div>
<div className="why-card rv2">
<div className="why-icon">📊</div>
<div className="why-body">
<h4>Full Transparency</h4>
<p>Live dashboards, weekly reports, and zero jargon. You always know where every rupee went and what it returned.</p>
</div>
</div>
<div className="why-card rv3">
<div className="why-icon">🇮🇳</div>
<div className="why-body">
<h4>India-Focused Strategy</h4>
<p>12 years of cracking the Indian B2B market — language, buyer behaviour, and platform nuances that global agencies miss.</p>
</div>
</div>
</div>
</div>
</section>
      <section className="tabs-section">
<div className="wrap">
<div className="sec-h rv">
<h2>What We Actually Do</h2>
<p>Deep-dive into each service — process, deliverables, and outcomes.</p>
</div>
<div className="tab-row">
<button className="tb on" data-i="0">SEO</button>
<button className="tb" data-i="1">Paid Ads</button>
<button className="tb" data-i="2">AI Automation</button>
<button className="tb" data-i="3">GEO / AI Search</button>
<button className="tb" data-i="4">White Label</button>
</div>
<div className="tp on"><div className="tp-inner"><h3>Search Engine Optimization</h3><p>We build compounding organic visibility through technical audits, on-page strategy, content creation and quality link acquisition. No black hat. No penalties. Just sustainable growth that accelerates over time.</p><ul className="tp-list"><li>Full website technical audit</li><li>Keyword research &amp; mapping</li><li>On-page SEO &amp; content strategy</li><li>Local SEO &amp; Google Maps</li><li>E-commerce &amp; category SEO</li><li>Monthly ranking reports</li></ul><a href="#contact" className="btn btn-o btn-sm">Explore SEO Services</a></div></div>
<div className="tp"><div className="tp-inner"><h3>Paid Advertising</h3><p>Google Ads, Meta Ads and Shopping campaigns run for ROI, not impressions. Every rupee tracked, every campaign A/B tested, every week reported with full transparency.</p><ul className="tp-list"><li>Search, Display, Shopping, YouTube</li><li>Facebook &amp; Instagram lead ads</li><li>Landing page &amp; A/B testing</li><li>Bid strategy optimisation</li><li>Audience &amp; retargeting setup</li><li>Weekly performance reporting</li></ul><a href="#contact" className="btn btn-o btn-sm">Explore Ad Services</a></div></div>
<div className="tp"><div className="tp-inner"><h3>AI &amp; Automation</h3><p>We build WhatsApp workflows, n8n automation stacks and AI chatbots that respond instantly and follow up automatically — so you never lose a lead to slow response times again.</p><ul className="tp-list"><li>WhatsApp Business API setup</li><li>n8n workflow design &amp; build</li><li>AI chatbot for web &amp; WhatsApp</li><li>CRM integration &amp; lead routing</li><li>Auto follow-up sequences</li><li>Pipeline &amp; task automation</li></ul><a href="#contact" className="btn btn-o btn-sm">Explore Automation</a></div></div>
<div className="tp"><div className="tp-inner"><h3>GEO / AI Search</h3><p>We make your brand the answer AI engines cite. Get found in ChatGPT, Gemini, Perplexity and Google AI Overviews — not just on the traditional results page.</p><ul className="tp-list"><li>Generative Engine Optimization</li><li>Answer Engine Optimization (AEO)</li><li>LLM optimization &amp; entity markup</li><li>AI brand-mention tracking</li><li>Schema &amp; structured data</li><li>Citation authority building</li></ul><a href="#contact" className="btn btn-o btn-sm">Explore GEO Services</a></div></div>
<div className="tp"><div className="tp-inner"><h3>White Label Fulfilment</h3><p>We are the invisible engine behind agencies across India. You sell, we deliver — SEO, PPC, web, GEO and reports — all under your brand. We never make contact with your clients. Ever.</p><ul className="tp-list"><li>White label SEO &amp; PPC fulfilment</li><li>Branded client reports in 48h</li><li>NDA-backed confidentiality</li><li>No direct client contact, ever</li><li>Scalable capacity on demand</li><li>Partner agency dashboard</li></ul><a href="#contact" className="btn btn-o btn-sm">Become a Partner</a></div></div>
</div>
</section>
      <div className="proof-strip">
<div className="proof-label">Trusted results across industries</div>
<div className="proof-strip-wrap">

<div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
<div className="proof-track">
<span className="proof-chip"><span className="pc-val">3×</span> Organic Traffic Growth</span>
<span className="proof-chip">✓ Zero Penalty Record</span>
<span className="proof-chip"><span className="pc-val">#1</span> Rankings Delivered</span>
<span className="proof-chip"><span className="pc-val">94%</span> Lead Query Resolution</span>
<span className="proof-chip"><span className="pc-val">500+</span> Projects Completed</span>
<span className="proof-chip"><span className="pc-val">48h</span> Report Turnaround</span>
<span className="proof-chip"><span className="pc-val">6.2×</span> Average ROAS</span>
<span className="proof-chip"><span className="pc-val">98%</span> Client Retention Rate</span>
<span className="proof-chip"><span className="pc-val">12+</span> Years of Expertise</span>
<span className="proof-chip"><span className="pc-val">0</span> Penalty Risk</span>

<span className="proof-chip"><span className="pc-val">3×</span> Organic Traffic Growth</span>
<span className="proof-chip">✓ Zero Penalty Record</span>
<span className="proof-chip"><span className="pc-val">#1</span> Rankings Delivered</span>
<span className="proof-chip"><span className="pc-val">94%</span> Lead Query Resolution</span>
<span className="proof-chip"><span className="pc-val">500+</span> Projects Completed</span>
<span className="proof-chip"><span className="pc-val">48h</span> Report Turnaround</span>
<span className="proof-chip"><span className="pc-val">6.2×</span> Average ROAS</span>
<span className="proof-chip"><span className="pc-val">98%</span> Client Retention Rate</span>
<span className="proof-chip"><span className="pc-val">12+</span> Years of Expertise</span>
<span className="proof-chip"><span className="pc-val">0</span> Penalty Risk</span>
</div>
</div>
</div>
</div>
      <section className="blog-section">
<div className="wrap">
<div className="sec-h rv" style={{ marginBottom: '48px' }}>
<div className="pill pill-b">The Playbook</div>
<h2>No-Fluff Guides That <em>Actually</em> Rank</h2>
<p>Written by practitioners, not content farms. Every guide is tested, cited, and built to help Indian businesses grow — free, forever.</p>
</div>
<div className="blog-slider-outer">
<button className="bslide-btn bslide-prev" aria-label="Previous"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
<div className="blog-slider-wrap">
<div className="blog-track" id="blogTrack">
<a href="/blog/seo-guide-indian-businesses-2026" className="bcard bcard-feat" style={{ textDecoration: 'none', color: 'inherit' }}>
<div className="bcard-img bcard-img-photo">
<img src="/img/seo-guide-indian-businesses-2026.png" alt="The Complete SEO Guide for Indian Businesses 2026" loading="lazy" />
<span className="bcard-cat">SEO Guide</span>
<div className="bcard-read-time">22 min read</div>
</div>
<div className="bcard-body">
<div className="bcard-date">July 2026  ·  14 Chapters</div>
<h3>The Complete SEO Guide for Indian Businesses (2026)</h3>
<p className="bcard-excerpt">From keyword research to Core Web Vitals — everything Indian businesses need to rank #1 on Google India. Zero fluff, ~4,800 words.</p>
<span className="read">Read the Guide <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
</div>
</a>
<a href="/blog/ai-automation-guide-indian-businesses-2026" className="bcard bcard-feat" style={{ textDecoration: 'none', color: 'inherit' }}>
<div className="bcard-img bcard-img-photo">
<img src="/img/ai-automation-2026.png" alt="AI &amp; Business Automation for Indian SMBs 2026" loading="lazy" />
<span className="bcard-cat">AI Automation</span>
<div className="bcard-read-time">20 min read</div>
</div>
<div className="bcard-body">
<div className="bcard-date">July 2026  ·  17 Chapters</div>
<h3>AI &amp; Business Automation for Indian SMBs: The Complete 2026 Guide</h3>
<p className="bcard-excerpt">WhatsApp bots, AI chatbots, workflow automation — save 20+ hours a week and scale without hiring. Everything covered, nothing sold.</p>
<span className="read">Read the Guide <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
</div>
</a>
<a href="/blog/business-website-guide-india-2026" className="bcard bcard-feat" style={{ textDecoration: 'none', color: 'inherit' }}>
<div className="bcard-img bcard-img-photo">
<img src="/img/business-website-guide-india-2026.png" alt="How to Build a Business Website That Generates Leads India 2026" loading="lazy" />
<span className="bcard-cat">Web Dev Guide</span>
<div className="bcard-read-time">20 min read</div>
</div>
<div className="bcard-body">
<div className="bcard-date">July 2026  ·  14 Chapters</div>
<h3>How to Build a Business Website That Actually Generates Leads (2026)</h3>
<p className="bcard-excerpt">Platform choice, mobile design, lead capture, trust signals &amp; MSME credibility — the complete blueprint for Indian businesses.</p>
<span className="read">Read the Guide <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
</div>
</a>
<div className="bcard bcard-coming">
<div className="bcard-img" style={{ background: 'linear-gradient(135deg,#1a0c3f,#2d1662)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
<div style={{ fontSize: '32px' }}>📣</div>
<div style={{ fontSize: '12px', fontWeight: '700', color: 'rgba(255,255,255,.5)', letterSpacing: '.08em', textTransform: 'uppercase' }}>Coming Next</div>
</div>
<div className="bcard-body">
<div className="bcard-date" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--o)', display: 'inline-block' }}></span> Publishing soon</div>
<h3>Google &amp; Meta Ads for Indian Businesses: The Complete 2026 Guide</h3>
<p className="bcard-excerpt">Campaign setup, budget strategy, audience targeting, and retargeting — everything for paid ads in India.</p>
<a href="/blog" className="read">Browse All Guides <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
</div>
</div>
</div>
</div>
<button className="bslide-btn bslide-next" aria-label="Next"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
</div>
<div className="bslide-dots" id="blogDots"></div>
</div>
</section>
      <section className="lead-section" id="contact">
<div className="wrap">
<div className="lead-inner">
<div className="lead-l">
<div className="pill pill-o">Free Consultation</div>
<h2>Ready to Stop Guessing and Start Growing?</h2>
<p>Tell us where you are and what you're trying to achieve. No pitch decks. Just a real conversation.
    </p>
<div className="lead-perks">
<div className="perk"><div className="perk-dot">✓</div>No long-term lock-in contracts</div>
<div className="perk"><div className="perk-dot">✓</div>Free audit before you commit</div>
<div className="perk"><div className="perk-dot">✓</div>Response within 24 hours guaranteed</div>
<div className="perk"><div className="perk-dot">✓</div>Transparent pricing — no hidden fees</div>
</div>
</div>
<div className="lead-r">
<div className="lead-form">
<div className="lead-form-avatar">
<img src="/images/clickdecodedround.png" alt="Click Decoded" loading="lazy" />
</div>
<h3>Get Your Free Strategy Call</h3>
<p className="fsub">Takes 60 seconds. We'll do the heavy lifting.</p>
<form id="lead-form" action="https://formsubmit.co/hello@clickdecoded.com" method="POST">
<input type="hidden" name="_captcha" value="false" />
<input type="hidden" name="_next" value="https://clickdecoded.com/thank-you.html" />
<div className="field">
<label>Your Name</label>
<input type="text" name="name" placeholder="Rahul Sharma" required />
</div>
<div className="field">
<label>Business Email</label>
<input type="email" name="email" placeholder="rahul@company.com" required />
</div>
<div className="field">
<label>Phone / WhatsApp</label>
<input type="tel" name="phone" placeholder="+91 98765 43210" required />
</div>
<div className="field">
<label>I need help with</label>
<select name="service" required>
<option value="">Select a service…</option>
<option>SEO Services</option>
<option>Google Ads / PPC</option>
<option>Meta Ads</option>
<option>Web Development</option>
<option>WhatsApp Automation</option>
<option>AI Chatbot</option>
<option>White Label SEO</option>
<option>GEO / AI Search Optimization</option>
<option>Full Digital Marketing</option>
</select>
</div>
<button type="submit" className="btn btn-o" style={{ width: '100%', justifyContent: 'center', padding: '15px' }}>
       Get My Free Strategy Call
       <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
</button>
<p style={{ textAlign: 'center', fontSize: '11.5px', color: 'var(--s)', marginTop: '12px' }}>🔒 Your info is private and never shared.</p>
</form>
<div className="submsg" id="lead-success">✅ Got it! We'll reach out within 24 hours.</div>
</div>
</div>
</div>
</div>
</section>
      <PageScript id="home-0" code={js0} />
      <PageScript id="home-1" code={js1} />
    </>
  )
}
