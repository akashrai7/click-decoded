/* eslint-disable */
// src/app/pricing/page.tsx — generated from pricing.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "Pricing | Click Decoded",
  description: "Transparent, no-surprise pricing for digital marketing, SEO, web development, and AI automation. Click Decoded retainers start at ₹25,000/month with no.",
  alternates: { canonical: "/pricing" },
}

const css = `
:root{
  --ac:#F59E0B;--ac2:#d97706;--ac-rgb:245,158,11;
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
.hero{background:linear-gradient(155deg,#1a1000 0%,#2d1d00 45%,#1a1000 100%);padding:96px 0 80px;position:relative;overflow:hidden;}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 60% at 70% 30%,rgba(245,158,11,.18) 0%,transparent 65%),radial-gradient(ellipse 35% 40% at 5% 80%,rgba(245,158,11,.06) 0%,transparent 60%);}
.hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;position:relative;z-index:2;}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;background:rgba(245,158,11,.1);border:1px solid rgba(245,158,11,.3);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#fde68a;margin-bottom:20px;}
.hero h1{font-size:48px;color:#fff;line-height:1.06;letter-spacing:-.04em;margin-bottom:20px;}
.hero h1 em{font-style:normal;background:linear-gradient(135deg,#fde68a,#f59e0b);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-desc{font-size:17px;color:rgba(255,255,255,.62);line-height:1.7;margin-bottom:32px;max-width:460px;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:36px;}
.hero-proof{display:flex;gap:24px;flex-wrap:wrap;}
.proof-item{font-size:13px;color:rgba(255,255,255,.5);}
.proof-item strong{color:#fff;font-weight:700;}
/* PRICING CARD MOCK */
.price-mock{border-radius:20px;overflow:hidden;box-shadow:0 28px 70px rgba(0,0,0,.65);background:#0e0900;border:1px solid rgba(245,158,11,.18);}
.mock-browser{background:rgba(255,255,255,.04);padding:10px 14px;border-bottom:1px solid rgba(255,255,255,.06);display:flex;align-items:center;gap:10px;}
.mock-dots{display:flex;gap:5px;}
.mock-dots span{width:9px;height:9px;border-radius:50%;}
.mock-dots span:nth-child(1){background:#ff5f57;}
.mock-dots span:nth-child(2){background:#ffbd2e;}
.mock-dots span:nth-child(3){background:#28c840;}
.mock-url{flex:1;background:rgba(255,255,255,.06);border-radius:6px;padding:5px 12px;font-size:11px;color:rgba(255,255,255,.3);}
/* Toggle */
.pm-toggle-row{padding:10px 14px 8px;display:flex;align-items:center;justify-content:center;gap:10px;border-bottom:1px solid rgba(255,255,255,.05);}
.pm-toggle-label{font-size:10px;font-weight:600;color:rgba(255,255,255,.4);}
.pm-toggle-label.act{color:#fde68a;}
.pm-switch{width:36px;height:20px;border-radius:10px;background:rgba(245,158,11,.3);border:1px solid rgba(245,158,11,.4);cursor:pointer;position:relative;flex-shrink:0;}
.pm-switch-knob{width:14px;height:14px;border-radius:50%;background:#f59e0b;position:absolute;top:2px;left:2px;transition:left .2s;}
.pm-switch.annual .pm-switch-knob{left:18px;}
.pm-save{font-size:9px;font-weight:700;padding:2px 7px;border-radius:4px;background:rgba(74,222,128,.12);border:1px solid rgba(74,222,128,.25);color:#4ade80;}
/* Cards row */
.pm-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding:8px 10px;}
.pm-card{border-radius:12px;padding:12px 10px;border:1px solid rgba(255,255,255,.07);background:rgba(255,255,255,.03);position:relative;transition:.2s;}
.pm-card.pop{border-color:rgba(245,158,11,.45);background:rgba(245,158,11,.06);box-shadow:0 0 0 1px rgba(245,158,11,.2);}
.pop-badge{position:absolute;top:-9px;left:50%;transform:translateX(-50%);background:var(--ac);color:#fff;font-size:8px;font-weight:800;padding:3px 10px;border-radius:99px;white-space:nowrap;animation:popPulse 2s ease-in-out infinite;}
@keyframes popPulse{0%,100%{box-shadow:0 0 0 0 rgba(245,158,11,.4)}50%{box-shadow:0 0 0 5px rgba(245,158,11,0)}}
.pm-plan{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.35);margin-bottom:4px;}
.pm-card.pop .pm-plan{color:#fde68a;}
.pm-price{font-size:20px;font-weight:900;color:#fff;line-height:1;}
.pm-price span{font-size:10px;font-weight:500;color:rgba(255,255,255,.35);}
.pm-old{font-size:9px;color:rgba(255,255,255,.25);text-decoration:line-through;margin-top:1px;height:12px;}
.pm-divider{height:1px;background:rgba(255,255,255,.06);margin:8px 0;}
.pm-feat{font-size:9px;color:rgba(255,255,255,.45);padding:2px 0;display:flex;align-items:center;gap:5px;}
.pm-feat.yes{color:rgba(255,255,255,.65);}
.pm-feat.yes::before{content:'✓';color:#4ade80;font-weight:700;font-size:9px;flex-shrink:0;}
.pm-feat.no::before{content:'—';color:rgba(255,255,255,.2);flex-shrink:0;}
.pm-btn{width:100%;margin-top:10px;padding:7px 0;border-radius:7px;font-size:9px;font-weight:800;border:none;cursor:pointer;text-align:center;}
.pm-btn-outline{background:transparent;border:1px solid rgba(255,255,255,.15);color:rgba(255,255,255,.5);}
.pm-btn-fill{background:linear-gradient(135deg,var(--ac),var(--ac2));color:#fff;box-shadow:0 4px 12px rgba(245,158,11,.3);}
/* Social proof ticker */
.pm-ticker{padding:8px 14px;background:rgba(245,158,11,.06);border-top:1px solid rgba(245,158,11,.12);display:flex;align-items:center;gap:8px;}
.tick-dot{width:7px;height:7px;border-radius:50%;background:#4ade80;animation:tickPulse 1.5s ease-in-out infinite;flex-shrink:0;}
@keyframes tickPulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.8)}}
.tick-text{font-size:9.5px;color:rgba(255,255,255,.5);}
.tick-text strong{color:#fde68a;}
/* STATS */
.stats-strip{background:var(--ac);}
.stats-inner{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(0,0,0,.15);}
.stat-box{padding:32px 24px;text-align:center;background:var(--ac);}
.stat-n{font-size:40px;font-weight:900;color:#fff;line-height:1;letter-spacing:-.03em;}
.stat-l{font-size:12px;color:rgba(255,255,255,.85);margin-top:6px;font-weight:500;text-transform:uppercase;letter-spacing:.06em;}
/* PRICING SECTION */
.sec-h{text-align:center;max-width:680px;margin:0 auto 52px;}
.sec-tag{display:inline-flex;padding:5px 13px;border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:10px;background:rgba(245,158,11,.08);border:1px solid rgba(245,158,11,.18);color:var(--ac);}
.sec-h h2{font-size:36px;margin-bottom:14px;}
.sec-h p{font-size:16px;color:var(--m);line-height:1.65;}
/* Billing toggle */
.toggle-wrap{display:flex;align-items:center;justify-content:center;gap:14px;margin-bottom:48px;}
.tog-label{font-size:15px;font-weight:600;color:var(--s);}
.tog-label.act{color:var(--n);}
.tog-switch{width:52px;height:28px;border-radius:14px;background:var(--ac);cursor:pointer;position:relative;border:none;transition:.2s;}
.tog-knob{width:20px;height:20px;border-radius:50%;background:#fff;position:absolute;top:4px;left:4px;transition:left .22s cubic-bezier(.22,1,.36,1);box-shadow:0 2px 6px rgba(0,0,0,.2);}
.tog-switch.ann .tog-knob{left:28px;}
.save-chip{background:rgba(74,222,128,.1);border:1px solid rgba(74,222,128,.25);color:#16a34a;font-size:12px;font-weight:700;padding:3px 10px;border-radius:99px;}
/* Actual pricing cards */
.pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;align-items:start;}
.pc{background:#fff;border:1.5px solid var(--bdr);border-radius:22px;padding:32px 28px;position:relative;transition:.2s;}
.pc:hover{transform:translateY(-4px);}
.pc.popular{border-color:var(--ac);box-shadow:0 0 0 4px rgba(245,158,11,.08),0 24px 64px rgba(245,158,11,.12);}
.pc-badge{position:absolute;top:-14px;left:50%;transform:translateX(-50%);background:var(--ac);color:#fff;font-size:11px;font-weight:800;padding:5px 16px;border-radius:99px;white-space:nowrap;}
.pc-plan{font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--s);margin-bottom:8px;}
.pc.popular .pc-plan{color:var(--ac);}
.pc-price{font-size:42px;font-weight:900;color:var(--n);line-height:1;letter-spacing:-.04em;}
.pc-price sup{font-size:22px;vertical-align:super;letter-spacing:0;}
.pc-price sub{font-size:14px;font-weight:500;color:var(--s);letter-spacing:0;}
.pc-old{font-size:13px;color:var(--s);text-decoration:line-through;margin-top:4px;min-height:20px;}
.pc-desc{font-size:14px;color:var(--m);margin:14px 0 20px;line-height:1.6;}
.pc-cta{display:block;width:100%;padding:14px;border-radius:12px;font-size:14px;font-weight:800;text-align:center;border:none;cursor:pointer;transition:.18s;margin-bottom:24px;}
.pc-cta-outline{background:transparent;border:2px solid var(--bdr);color:var(--n);}
.pc-cta-outline:hover{border-color:var(--ac);color:var(--ac);}
.pc-cta-fill{background:var(--ac);color:#fff;box-shadow:0 6px 20px rgba(245,158,11,.3);}
.pc-cta-fill:hover{background:var(--ac2);transform:translateY(-2px);}
.pc-divider{height:1px;background:var(--bdr);margin-bottom:20px;}
.pc-feat-label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--s);margin-bottom:12px;}
.feat-list{display:flex;flex-direction:column;gap:9px;}
.feat-row{display:flex;align-items:flex-start;gap:10px;font-size:13.5px;color:var(--body);}
.feat-row.no{color:var(--s);}
.feat-check{width:18px;height:18px;border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:11px;flex-shrink:0;margin-top:1px;}
.feat-check.y{background:rgba(74,222,128,.12);border:1px solid rgba(74,222,128,.25);color:#16a34a;}
.feat-check.n{background:var(--bg);border:1px solid var(--bdr);color:var(--s);}
/* One-time section */
.onetime-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.ot-card{background:#fff;border:1.5px solid var(--bdr);border-radius:18px;padding:28px 24px;transition:.2s;}
.ot-card:hover{transform:translateY(-3px);box-shadow:0 12px 40px rgba(245,158,11,.1);border-color:rgba(245,158,11,.3);}
.ot-icon{font-size:28px;margin-bottom:12px;}
.ot-name{font-size:17px;font-weight:800;color:var(--n);margin-bottom:4px;}
.ot-price{font-size:22px;font-weight:900;color:var(--ac);margin-bottom:10px;}
.ot-price span{font-size:13px;font-weight:500;color:var(--s);}
.ot-card p{font-size:13.5px;color:var(--m);line-height:1.6;}
/* FAQ */
.faq-2col{display:grid;grid-template-columns:1fr 1fr;gap:0 28px;align-items:start;}
.fi{border:1px solid var(--bdr);border-radius:14px;margin-bottom:10px;overflow:hidden;background:#fff;transition:.15s;}
.fi.on{border-color:rgba(245,158,11,.3);box-shadow:0 4px 20px rgba(245,158,11,.08);}
.fi-q{width:100%;text-align:left;background:transparent;border:none;padding:20px 22px;font-size:14px;font-weight:700;color:var(--n);display:flex;justify-content:space-between;align-items:center;gap:12px;cursor:pointer;}
.fi-icon{width:26px;height:26px;border-radius:50%;flex-shrink:0;background:var(--bg);border:1px solid var(--bdr);display:flex;align-items:center;justify-content:center;color:var(--ac);font-size:18px;line-height:1;transition:transform .2s;}
.fi.on .fi-icon{transform:rotate(45deg);background:var(--ac);color:#fff;border-color:var(--ac);}
.fi-a{max-height:0;overflow:hidden;transition:.3s;color:var(--m);font-size:14px;line-height:1.75;}
.fi.on .fi-a{max-height:300px;padding:0 22px 22px;}
.bg-subtle{background:var(--bg);}
.dark-section{background:var(--n-dark);padding:88px 0;}
/* Trust strip */
.trust-row{display:flex;gap:20px;flex-wrap:wrap;justify-content:center;}
.trust-item{display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:16px 20px;}
.trust-icon{font-size:22px;}
.trust-text strong{display:block;font-size:14px;font-weight:700;color:#fff;}
.trust-text span{font-size:12px;color:rgba(255,255,255,.45);}
.cta-section{background:linear-gradient(155deg,#1a1000 0%,#2d1d00 100%);padding:96px 0;text-align:center;position:relative;overflow:hidden;}
.cta-section::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(245,158,11,.14) 0%,transparent 70%);}
.cta-section h2{color:#fff;font-size:44px;margin-bottom:16px;position:relative;z-index:1;}
.cta-section p{color:rgba(255,255,255,.6);font-size:17px;margin-bottom:36px;max-width:500px;margin-left:auto;margin-right:auto;line-height:1.65;position:relative;z-index:1;}
.cta-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;position:relative;z-index:1;}
.rv,.rv2,.rv3{opacity:0;transform:translateY(28px);transition:opacity .6s ease,transform .6s ease;}
.rv2{transition-delay:.1s;}.rv3{transition-delay:.2s;}
.rv.vis,.rv2.vis,.rv3.vis{opacity:1;transform:translateY(0);}
@media(max-width:960px){.pricing-grid,.onetime-grid{grid-template-columns:1fr;}.hero-grid{grid-template-columns:1fr;}.hero h1{font-size:36px;}.stats-inner{grid-template-columns:1fr 1fr;}.faq-2col{grid-template-columns:1fr;}}
@media(max-width:600px){section{padding:60px 0;}.hero{padding:64px 0 52px;}.stats-inner{grid-template-columns:1fr 1fr;}}
`

const ld0 = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why is ₹25,000/month the minimum?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Below ₹25,000/month, it's not possible to do meaningful, sustained digital marketing work — research, strategy, execution, and reporting all take real time. Agencies that charge ₹5,000–₹10,000/month are either cutting corners severely or running you on a template with no real attention. We set the minimum at a level where we can actually deliver results worth paying for."
          }
        },
        {
          "@type": "Question",
          "name": "Are ad spends included in the retainer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No — ad spend (Google Ads, Meta Ads, LinkedIn Ads budgets) is always billed directly to your own ad account. Our retainer covers management, strategy, copy, creative, and optimisation — not media buying. This ensures full transparency: you always see exactly where your money is going, and you own your ad accounts entirely."
          }
        },
        {
          "@type": "Question",
          "name": "What's included in the annual discount?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Paying annually upfront gives you 15% off your monthly rate — equivalent to getting about 1.8 months free. Annual plans also receive priority onboarding, a dedicated senior manager from Day 1, and are included in our quarterly brand review process. Annual billing is paid upfront as a single invoice."
          }
        },
        {
          "@type": "Question",
          "name": "Can I change plans mid-way?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — you can upgrade to a higher plan at any time effective the next billing cycle. Downgrades require 30 days notice. If you want to add a service that takes you into the next plan tier, we'll prorate the difference for the current month and move you to the new plan from next month. No penalties for changing plans."
          }
        },
        {
          "@type": "Question",
          "name": "How does the 30-day notice to exit work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you decide to stop, you give us written notice (email or WhatsApp) and your retainer continues for one final month — during which we wrap up active campaigns, prepare handoff documentation, transfer all assets and access back to you, and ensure there's no operational gap. After the 30 days, everything is cleanly handed over with no further obligation."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work with early-stage startups?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, as long as the ₹25,000/month minimum works for your stage. We have clients from pre-revenue startups to established enterprises — the retainer structure works for all of them. For very early startups, we often recommend starting with a single focused service (SEO or Google Ads) rather than spreading budget thin across multiple channels before product-market fit is clear."
          }
        },
        {
          "@type": "Question",
          "name": "Are there any onboarding fees?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No onboarding fees ever. The first month's retainer covers onboarding work — discovery sessions, account access, competitor analysis, strategy setup, and initial execution. You're paying for real work from Day 1, not paying extra for the privilege of starting."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get a custom plan not listed here?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely — many of our best client relationships are custom-scoped projects that don't fit neatly into Starter/Growth/Enterprise. If you have specific needs — a particular mix of services, a project-based engagement, or a phased plan that grows over 6 months — book a strategy call and we'll build a custom proposal that fits your exact requirements and budget."
          }
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
          "name": "Pricing",
          "item": "https://www.clickdecoded.com/pricing"
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
// Billing toggle
let isAnnual=false;
const mainToggle=document.getElementById('mainToggle');
const prices=[
  {mo:'25,000',an:'21,250',moRaw:'₹25K',anRaw:'₹21K',old:'₹25K'},
  {mo:'55,000',an:'46,750',moRaw:'₹55K',anRaw:'₹47K',old:'₹55K'},
  {mo:'1,20,000',an:'1,02,000',moRaw:'₹1.2L',anRaw:'₹1.02L',old:'₹1.2L'}
];
function applyPricing(annual){
  document.getElementById('togLabelM').classList.toggle('act',!annual);
  document.getElementById('togLabelA').classList.toggle('act',annual);
  mainToggle.classList.toggle('ann',annual);
  prices.forEach((p,i)=>{
    const n=i+1;
    document.getElementById('p'+n).textContent=annual?p.an:p.mo;
    document.getElementById('o'+n).textContent=annual?'Was ₹'+p.mo+'/mo':'';
    // hero mock
    if(document.getElementById('hP'+n)){
      document.getElementById('hP'+n).innerHTML=(annual?p.anRaw:p.moRaw)+' <span>/mo</span>';
      document.getElementById('hO'+n).textContent=annual?'Was '+p.moRaw+'/mo':'';
    }
  });
}
mainToggle.addEventListener('click',()=>{isAnnual=!isAnnual;applyPricing(isAnnual);});
// hero mock toggle (decorative)
document.getElementById('heroSwitch').addEventListener('click',()=>{isAnnual=!isAnnual;applyPricing(isAnnual);});
})();`

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld0 }} />
      <div className="breadcrumb"><div className="wrap"><div className="bc-list"><a href="/">Home</a><span style={{ opacity: '.4' }}>›</span><span>Pricing</span></div></div></div>
      <section className="hero">
<div className="wrap">
<div className="hero-grid">
<div>
<div className="hero-eyebrow">💰 Transparent · No Lock-In · No Surprises</div>
<h1>Honest Pricing for Work That <em>Actually Delivers</em> ROI.</h1>
<p className="hero-desc">No vague "custom quotes" hiding behind a form. Real starting prices, clear deliverables, and retainers that flex as you grow. Minimum engagement ₹25,000/month — no exceptions.</p>
<div className="hero-btns">
<a href="/contact" className="btn btn-ac">💬 Get a Custom Quote</a>
<a href="https://wa.me/919407000101" className="btn btn-ghost">📞 WhatsApp Us</a>
</div>
<div className="hero-proof">
<span className="proof-item"><strong>₹25K</strong> Minimum Retainer</span>
<span className="proof-item"><strong>No</strong> Long-Term Lock-In</span>
<span className="proof-item"><strong>30-Day</strong> Notice to Exit</span>
</div>
</div>

<div className="price-mock">
<div className="mock-browser">
<div className="mock-dots"><span></span><span></span><span></span></div>
<div className="mock-url">clickdecoded.com/pricing</div>
</div>
<div className="pm-toggle-row">
<span className="pm-toggle-label act">Monthly</span>
<div className="pm-switch annual" id="heroSwitch">
<div className="pm-switch-knob"></div>
</div>
<span className="pm-toggle-label act">Annual</span>
<span className="pm-save">Save 15%</span>
</div>
<div className="pm-cards">
<div className="pm-card">
<div className="pm-plan">Starter</div>
<div className="pm-price" id="hP1">₹25K <span>/mo</span></div>
<div className="pm-old" id="hO1"> </div>
<div className="pm-divider"></div>
<div className="pm-feat yes">1 Service</div>
<div className="pm-feat yes">Monthly Report</div>
<div className="pm-feat yes">Dedicated Manager</div>
<div className="pm-feat no">Multi-channel</div>
<div className="pm-btn pm-btn-outline">Get Started</div>
</div>
<div className="pm-card pop">
<div className="pop-badge">⭐ Most Popular</div>
<div className="pm-plan">Growth</div>
<div className="pm-price" id="hP2">₹55K <span>/mo</span></div>
<div className="pm-old" id="hO2"> </div>
<div className="pm-divider"></div>
<div className="pm-feat yes">3 Services</div>
<div className="pm-feat yes">Weekly Report</div>
<div className="pm-feat yes">Senior Manager</div>
<div className="pm-feat yes">Multi-channel</div>
<div className="pm-btn pm-btn-fill">Get Started</div>
</div>
<div className="pm-card">
<div className="pm-plan">Enterprise</div>
<div className="pm-price" id="hP3">₹1.2L <span>/mo</span></div>
<div className="pm-old" id="hO3"> </div>
<div className="pm-divider"></div>
<div className="pm-feat yes">Unlimited Services</div>
<div className="pm-feat yes">Daily Reporting</div>
<div className="pm-feat yes">Dedicated Team</div>
<div className="pm-feat yes">Strategy Director</div>
<div className="pm-btn pm-btn-outline">Contact Us</div>
</div>
</div>
<div className="pm-ticker">
<div className="tick-dot"></div>
<div className="tick-text"><strong>3 new clients</strong> onboarded this week · Next slot opens Monday</div>
</div>
</div>
</div>
</div>
</section>
      <div className="stats-strip">
<div className="stats-inner">
<div className="stat-box"><div className="stat-n">₹25K</div><div className="stat-l">Minimum Monthly</div></div>
<div className="stat-box"><div className="stat-n">30D</div><div className="stat-l">Notice to Exit</div></div>
<div className="stat-box"><div className="stat-n">0</div><div className="stat-l">Hidden Fees</div></div>
<div className="stat-box"><div className="stat-n">15%</div><div className="stat-l">Annual Discount</div></div>
</div>
</div>
      <section>
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag">Retainer Plans</div>
<h2>Pick a Plan. Scale When Ready.</h2>
<p>Monthly retainers with 30-day exit notice. No 6-month contracts, no onboarding fees, no surprises. All plans include a dedicated account manager and monthly strategy call.</p>
</div>
<div className="toggle-wrap rv">
<span className="tog-label act" id="togLabelM">Monthly</span>
<button className="tog-switch" id="mainToggle"><div className="tog-knob"></div></button>
<span className="tog-label" id="togLabelA">Annual <span className="save-chip">Save 15%</span></span>
</div>
<div className="pricing-grid">
<div className="pc rv">
<div className="pc-plan">Starter</div>
<div className="pc-price"><sup>₹</sup><span id="p1">25,000</span><sub>/month</sub></div>
<div className="pc-old" id="o1"> </div>
<p className="pc-desc">Perfect for businesses launching their first digital marketing channel and wanting expert management without a big team commitment.</p>
<a href="/contact" className="pc-cta pc-cta-outline">Get Started →</a>
<div className="pc-divider"></div>
<div className="pc-feat-label">What's included</div>
<div className="feat-list">
<div className="feat-row"><div className="feat-check y">✓</div>1 core service of your choice</div>
<div className="feat-row"><div className="feat-check y">✓</div>Dedicated account manager</div>
<div className="feat-row"><div className="feat-check y">✓</div>Monthly strategy call (60 min)</div>
<div className="feat-row"><div className="feat-check y">✓</div>Monthly performance report</div>
<div className="feat-row"><div className="feat-check y">✓</div>WhatsApp support (business hours)</div>
<div className="feat-row no"><div className="feat-check n">—</div>Multi-channel campaigns</div>
<div className="feat-row no"><div className="feat-check n">—</div>Weekly reporting</div>
<div className="feat-row no"><div className="feat-check n">—</div>Creative team access</div>
</div>
</div>
<div className="pc popular rv2">
<div className="pc-badge">⭐ Most Popular</div>
<div className="pc-plan">Growth</div>
<div className="pc-price"><sup>₹</sup><span id="p2">55,000</span><sub>/month</sub></div>
<div className="pc-old" id="o2"> </div>
<p className="pc-desc">For growing businesses ready to run coordinated multi-channel campaigns and see compounding results across SEO, Ads, and Content.</p>
<a href="/contact" className="pc-cta pc-cta-fill">Get Started →</a>
<div className="pc-divider"></div>
<div className="pc-feat-label">Everything in Starter, plus</div>
<div className="feat-list">
<div className="feat-row"><div className="feat-check y">✓</div>Up to 3 services combined</div>
<div className="feat-row"><div className="feat-check y">✓</div>Senior account manager</div>
<div className="feat-row"><div className="feat-check y">✓</div>Bi-weekly strategy calls</div>
<div className="feat-row"><div className="feat-check y">✓</div>Weekly performance dashboard</div>
<div className="feat-row"><div className="feat-check y">✓</div>Multi-channel coordination</div>
<div className="feat-row"><div className="feat-check y">✓</div>Creative team access (ads + content)</div>
<div className="feat-row"><div className="feat-check y">✓</div>Priority WhatsApp + email support</div>
<div className="feat-row no"><div className="feat-check n">—</div>Dedicated strategy director</div>
</div>
</div>
<div className="pc rv3">
<div className="pc-plan">Enterprise</div>
<div className="pc-price"><sup>₹</sup><span id="p3">1,20,000</span><sub>/month+</sub></div>
<div className="pc-old" id="o3"> </div>
<p className="pc-desc">For ambitious brands wanting a full-service marketing team — unlimited service scope, dedicated resources, and a senior strategist owning your growth.</p>
<a href="/contact" className="pc-cta pc-cta-outline">Contact Us →</a>
<div className="pc-divider"></div>
<div className="pc-feat-label">Everything in Growth, plus</div>
<div className="feat-list">
<div className="feat-row"><div className="feat-check y">✓</div>Unlimited services in scope</div>
<div className="feat-row"><div className="feat-check y">✓</div>Dedicated strategy director</div>
<div className="feat-row"><div className="feat-check y">✓</div>Dedicated execution team</div>
<div className="feat-row"><div className="feat-check y">✓</div>Daily reporting &amp; Slack channel</div>
<div className="feat-row"><div className="feat-check y">✓</div>Custom KPI dashboard (Looker Studio)</div>
<div className="feat-row"><div className="feat-check y">✓</div>Quarterly brand &amp; strategy review</div>
<div className="feat-row"><div className="feat-check y">✓</div>CRO &amp; landing page testing included</div>
<div className="feat-row"><div className="feat-check y">✓</div>SLA-backed response times</div>
</div>
</div>
</div>
</div>
</section>
      <section className="bg-subtle">
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag">One-Time Projects</div>
<h2>Need a Single Deliverable?<br />We Do That Too.</h2>
<p>Fixed-price one-time projects for when you need a specific output — not an ongoing retainer. All projects include one revision round and full file ownership.</p>
</div>
<div className="onetime-grid">
<div className="ot-card rv"><div className="ot-icon">💻</div><div className="ot-name">Website Design &amp; Dev</div><div className="ot-price">From ₹25,000 <span>one-time</span></div><p>Custom WordPress or Next.js website — up to 8 pages, mobile responsive, basic SEO setup, contact form, and 2-week turnaround. E-commerce stores from ₹45,000.</p></div>
<div className="ot-card rv2"><div className="ot-icon">🎨</div><div className="ot-name">UI/UX Design (Figma)</div><div className="ot-price">From ₹18,000 <span>one-time</span></div><p>High-fidelity Figma screens for web apps, mobile apps, or landing pages. Includes wireframes, visual design, interactive prototype, and developer handoff. Priced per screen count.</p></div>
<div className="ot-card rv3"><div className="ot-icon">🔍</div><div className="ot-name">SEO Audit</div><div className="ot-price">From ₹12,000 <span>one-time</span></div><p>Comprehensive technical SEO, on-page, and backlink audit with a prioritised action plan. Delivered as a 40+ point report with fixes ranked by impact and implementation effort.</p></div>
<div className="ot-card rv"><div className="ot-icon">📸</div><div className="ot-name">Product Photography</div><div className="ot-price">From ₹8,000 <span>per session</span></div><p>Professional product photography shoot — up to 10 SKUs, white background and lifestyle shots, full retouching, and delivery within 5 business days. Indore studio or on-location.</p></div>
<div className="ot-card rv2"><div className="ot-icon">🎬</div><div className="ot-name">Brand Video</div><div className="ot-price">From ₹20,000 <span>one-time</span></div><p>60–90 second brand or explainer video — scripting, shoot or motion graphics, professional edit, colour grade, and music. Delivered in formats for social, web, and ads.</p></div>
<div className="ot-card rv3"><div className="ot-icon">🤖</div><div className="ot-name">AI Chatbot Setup</div><div className="ot-price">From ₹22,000 <span>one-time</span></div><p>Custom AI chatbot for your website or WhatsApp — trained on your FAQs, products, and brand voice. Includes integration, testing, and 30 days of post-launch support.</p></div>
</div>
</div>
</section>
      <section className="dark-section">
<div className="wrap">
<div className="sec-h rv" style={{ marginBottom: '40px' }}>
<h2 style={{ color: '#fff' }}>Why Clients Choose<br />Click Decoded.</h2>
<p style={{ color: 'rgba(255,255,255,.55)' }}>No agency bullshit. Real work, real results, and pricing that makes sense for Indian businesses.</p>
</div>
<div className="trust-row">
<div className="trust-item rv"><div className="trust-icon">🔓</div><div className="trust-text"><strong>No Lock-In Contracts</strong><span>30-day notice to exit — always</span></div></div>
<div className="trust-item rv2"><div className="trust-icon">💸</div><div className="trust-text"><strong>No Hidden Fees</strong><span>Ad spend billed direct to your account</span></div></div>
<div className="trust-item rv3"><div className="trust-icon">📊</div><div className="trust-text"><strong>Transparent Reporting</strong><span>Live Looker Studio dashboard access</span></div></div>
<div className="trust-item rv"><div className="trust-icon">👤</div><div className="trust-text"><strong>Dedicated Manager</strong><span>One point of contact, always accountable</span></div></div>
<div className="trust-item rv2"><div className="trust-icon">🇮🇳</div><div className="trust-text"><strong>India-First Pricing</strong><span>Built for Indian business realities</span></div></div>
</div>
</div>
</section>
      <section>
<div className="wrap">
<div className="sec-h rv"><h2>Pricing FAQ</h2></div>
<div className="faq-2col">
<div>
<div className="fi"><button className="fi-q">Why is ₹25,000/month the minimum?<div className="fi-icon">+</div></button><div className="fi-a">Below ₹25,000/month, it's not possible to do meaningful, sustained digital marketing work — research, strategy, execution, and reporting all take real time. Agencies that charge ₹5,000–₹10,000/month are either cutting corners severely or running you on a template with no real attention. We set the minimum at a level where we can actually deliver results worth paying for.</div></div>
<div className="fi"><button className="fi-q">Are ad spends included in the retainer?<div className="fi-icon">+</div></button><div className="fi-a">No — ad spend (Google Ads, Meta Ads, LinkedIn Ads budgets) is always billed directly to your own ad account. Our retainer covers management, strategy, copy, creative, and optimisation — not media buying. This ensures full transparency: you always see exactly where your money is going, and you own your ad accounts entirely.</div></div>
<div className="fi"><button className="fi-q">What's included in the annual discount?<div className="fi-icon">+</div></button><div className="fi-a">Paying annually upfront gives you 15% off your monthly rate — equivalent to getting about 1.8 months free. Annual plans also receive priority onboarding, a dedicated senior manager from Day 1, and are included in our quarterly brand review process. Annual billing is paid upfront as a single invoice.</div></div>
<div className="fi"><button className="fi-q">Can I change plans mid-way?<div className="fi-icon">+</div></button><div className="fi-a">Yes — you can upgrade to a higher plan at any time effective the next billing cycle. Downgrades require 30 days notice. If you want to add a service that takes you into the next plan tier, we'll prorate the difference for the current month and move you to the new plan from next month. No penalties for changing plans.</div></div>
</div>
<div>
<div className="fi"><button className="fi-q">How does the 30-day notice to exit work?<div className="fi-icon">+</div></button><div className="fi-a">If you decide to stop, you give us written notice (email or WhatsApp) and your retainer continues for one final month — during which we wrap up active campaigns, prepare handoff documentation, transfer all assets and access back to you, and ensure there's no operational gap. After the 30 days, everything is cleanly handed over with no further obligation.</div></div>
<div className="fi"><button className="fi-q">Do you work with early-stage startups?<div className="fi-icon">+</div></button><div className="fi-a">Yes, as long as the ₹25,000/month minimum works for your stage. We have clients from pre-revenue startups to established enterprises — the retainer structure works for all of them. For very early startups, we often recommend starting with a single focused service (SEO or Google Ads) rather than spreading budget thin across multiple channels before product-market fit is clear.</div></div>
<div className="fi"><button className="fi-q">Are there any onboarding fees?<div className="fi-icon">+</div></button><div className="fi-a">No onboarding fees ever. The first month's retainer covers onboarding work — discovery sessions, account access, competitor analysis, strategy setup, and initial execution. You're paying for real work from Day 1, not paying extra for the privilege of starting.</div></div>
<div className="fi"><button className="fi-q">Can I get a custom plan not listed here?<div className="fi-icon">+</div></button><div className="fi-a">Absolutely — many of our best client relationships are custom-scoped projects that don't fit neatly into Starter/Growth/Enterprise. If you have specific needs — a particular mix of services, a project-based engagement, or a phased plan that grows over 6 months — book a strategy call and we'll build a custom proposal that fits your exact requirements and budget.</div></div>
</div>
</div>
</div>
</section>
      <section className="cta-section">
<div className="wrap">
<h2>Not Sure Which Plan<br />Fits Your Business?</h2>
<p>Book a free 30-minute strategy call. We'll look at your current situation, goals, and budget — and tell you exactly what we'd do and what it would cost. No sales pressure.</p>
<div className="cta-btns">
<a href="/contact" className="btn btn-ac">📞 Book Free Strategy Call</a>
<a href="https://wa.me/919407000101" className="btn btn-wa">💬 WhatsApp Us</a>
</div>
</div>
</section>
      <PageScript id="pricing-0" code={js0} />
    </>
  )
}
