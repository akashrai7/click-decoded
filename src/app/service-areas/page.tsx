/* eslint-disable */
// src/app/service-areas/page.tsx — generated from service-areas.html (do not edit header/footer here)
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Areas We Work | Click Decoded",
  description: "Click Decoded serves businesses in Bhopal, Indore, and across India. Explore our local SEO, web development, Google Ads, and digital marketing services.",
  alternates: { canonical: "/service-areas" },
}

const css = `
:root{--n:#2A4573;--n2:#1e3460;--n-dark:#0f1e38;--o:#EE7E1A;--o2:#d46e12;--body:#1E293B;--m:#475569;--s:#64748b;--bg:#F4F7FC;--bdr:#E2E8F0;--gr:#25D366;}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;overflow-x:hidden;}
body{font-family:'Inter',system-ui,sans-serif;color:var(--body);background:#fff;-webkit-font-smoothing:antialiased;}
a{text-decoration:none;color:inherit;}img,svg{display:block;}ul{list-style:none;}button{font-family:inherit;cursor:pointer;}
.wrap{max-width:1200px;margin:0 auto;padding:0 28px;}
section{padding:80px 0;}
h1,h2,h3,h4{font-weight:800;line-height:1.1;letter-spacing:-.025em;color:var(--n);}

/* BUTTONS */
.btn{display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:10px;font-weight:700;font-size:14px;border:none;transition:all .18s;white-space:nowrap;cursor:pointer;}
.btn-o{background:var(--o);color:#fff;box-shadow:0 4px 18px rgba(238,126,26,.3);}.btn-o:hover{background:var(--o2);transform:translateY(-2px);}
.btn-wa{background:var(--gr);color:#fff;}.btn-wa:hover{background:#1ebe59;transform:translateY(-2px);}
.btn-ghost{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.3);}.btn-ghost:hover{background:rgba(255,255,255,.08);}
.btn-sm{padding:10px 20px;font-size:13px;}

/* TOPBAR */
.topbar{background:var(--n-dark);height:40px;display:flex;align-items:center;}
.topbar-inner{max-width:1200px;margin:0 auto;padding:0 28px;display:flex;justify-content:space-between;align-items:center;width:100%;}
.topbar-left{display:flex;gap:20px;}.topbar-left a{font-size:12px;color:rgba(255,255,255,.6);display:flex;align-items:center;gap:5px;}
.topbar-right{display:flex;gap:8px;}
.tb-btn{display:inline-flex;align-items:center;gap:6px;padding:5px 12px;border-radius:6px;font-size:11.5px;font-weight:700;transition:.15s;}
.tb-call{background:rgba(238,126,26,.15);color:var(--o);border:1px solid rgba(238,126,26,.25);}.tb-wa{background:rgba(37,211,102,.15);color:#25D366;border:1px solid rgba(37,211,102,.25);}
.tb-call:hover{background:var(--o);color:#fff;}.tb-wa:hover{background:#25D366;color:#fff;}

/* HEADER */
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

/* BREADCRUMB */
.breadcrumb{background:var(--bg);padding:12px 0;border-bottom:1px solid var(--bdr);}
.bc-list{display:flex;align-items:center;gap:8px;font-size:12.5px;color:var(--s);list-style:none;}
.bc-list a{color:var(--n);font-weight:500;}.bc-list a:hover{color:var(--o);}

/* FOOTER */
footer{background:var(--n-dark);padding:64px 0 0;}
.footer-main{margin-bottom:40px;}
.fg{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:40px;}
.fb-desc{font-size:13.5px;color:rgba(255,255,255,.4);line-height:1.7;margin:16px 0 20px;}
.socials{display:flex;gap:10px;}
.socials a{width:34px;height:34px;border-radius:8px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:rgba(255,255,255,.5);transition:.15s;}
.socials a:hover{background:var(--o);color:#fff;border-color:var(--o);}
footer h4{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.35);margin-bottom:16px;}
.fl{display:flex;flex-direction:column;gap:8px;}
.fl a,.fc a{font-size:13.5px;color:rgba(255,255,255,.5);transition:.15s;}.fl a:hover,.fc a:hover{color:#fff;}
.fc{display:flex;flex-direction:column;gap:10px;}
.footer-bottom{border-top:1px solid rgba(255,255,255,.07);padding:20px 0;display:flex;justify-content:space-between;align-items:center;font-size:12px;color:rgba(255,255,255,.3);flex-wrap:wrap;gap:8px;}
.footer-bottom a{color:rgba(255,255,255,.3);transition:.15s;}.footer-bottom a:hover{color:rgba(255,255,255,.6);}
.footer-areas{padding:20px 0;border-top:1px solid rgba(255,255,255,.06);font-size:12px;color:rgba(255,255,255,.25);display:flex;gap:8px;flex-wrap:wrap;align-items:center;}
.footer-areas b{color:rgba(255,255,255,.4);}.footer-areas a{color:rgba(255,255,255,.25);transition:.15s;}.footer-areas a:hover{color:rgba(255,255,255,.6);}

/* ═══════════════════════════════
   PAGE STYLES — AREAS WE WORK
═══════════════════════════════ */

/* HERO */
.sa-hero{background:linear-gradient(150deg,#0f1e38 0%,#162847 45%,#1a1040 100%);padding:80px 0 64px;position:relative;overflow:hidden;}
.sa-hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 70% 50% at 30% 50%,rgba(238,126,26,.07) 0%,transparent 65%);}
.sa-hero-inner{position:relative;z-index:1;display:grid;grid-template-columns:1fr 220px;align-items:center;gap:40px;}
.sa-eyebrow{display:inline-flex;align-items:center;gap:8px;background:rgba(238,126,26,.12);border:1px solid rgba(238,126,26,.25);color:var(--o);font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;padding:6px 16px;border-radius:99px;margin-bottom:18px;}
.sa-hero h1{font-size:clamp(28px,4vw,50px);font-weight:900;color:#fff;line-height:1.08;letter-spacing:-.03em;margin-bottom:14px;}
.sa-hero h1 em{font-style:normal;color:var(--o);}
.sa-hero p{font-size:15px;color:rgba(255,255,255,.6);max-width:500px;line-height:1.7;margin-bottom:28px;}
.sa-hero-ctas{display:flex;gap:12px;flex-wrap:wrap;}
.sa-india-box{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:20px;padding:24px 20px;text-align:center;position:relative;overflow:hidden;}
.sa-india-box::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at center,rgba(238,126,26,.08) 0%,transparent 70%);}
.sa-india-map{display:flex;align-items:center;justify-content:center;margin-bottom:14px;position:relative;z-index:1;}
.sa-india-label{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:rgba(255,255,255,.35);margin-bottom:6px;position:relative;z-index:1;}
.sa-india-val{font-size:22px;font-weight:900;color:#fff;letter-spacing:-.02em;position:relative;z-index:1;}
.sa-india-sub{font-size:11px;color:rgba(255,255,255,.3);margin-top:5px;position:relative;z-index:1;}
.sa-india-dots{display:flex;justify-content:center;gap:6px;margin-top:14px;flex-wrap:wrap;position:relative;z-index:1;}
.sa-dot{width:6px;height:6px;border-radius:50%;background:var(--o);opacity:.6;}
.sa-dot.active{opacity:1;width:8px;height:8px;}

/* FILTER TABS */
.sa-filter{background:#fff;border-bottom:2px solid var(--bdr);position:sticky;top:110px;z-index:50;}
.sa-tabs{display:flex;gap:8px;padding:14px 0;overflow-x:auto;scrollbar-width:none;}
.sa-tabs::-webkit-scrollbar{display:none;}
.sa-tab{display:inline-flex;align-items:center;gap:8px;padding:9px 22px;border-radius:99px;font-size:13px;font-weight:700;cursor:pointer;transition:.18s;border:1.5px solid var(--bdr);color:var(--m);background:#fff;white-space:nowrap;flex-shrink:0;}
.sa-tab:hover{border-color:var(--n);color:var(--n);background:var(--bg);}
.sa-tab.active{background:var(--n);color:#fff;border-color:var(--n);box-shadow:0 4px 14px rgba(42,69,115,.25);}
.sa-tab-flag{display:flex;align-items:center;justify-content:center;}
.sa-tab-count{font-size:10px;font-weight:800;background:rgba(255,255,255,.25);padding:1px 7px;border-radius:99px;}
.sa-tab:not(.active) .sa-tab-count{background:var(--bg);color:var(--s);}

/* CITY SECTIONS */
.sa-body{padding:52px 0 80px;background:#f8fafc;}
.sa-city,.sa-pan-india{display:none;margin-bottom:52px;}
.sa-city.show,.sa-pan-india.show{display:block;}

/* CITY HEADER CARD */
.city-header{display:flex;align-items:flex-start;gap:18px;padding:24px 28px;background:#fff;border:1px solid var(--bdr);border-radius:20px;box-shadow:0 2px 16px rgba(42,69,115,.06);margin-bottom:28px;}
.city-flag-wrap{width:64px;height:64px;border-radius:16px;background:var(--bg);border:1px solid var(--bdr);display:flex;align-items:center;justify-content:center;flex-shrink:0;padding:8px;}
.city-info{flex:1;min-width:0;}
.city-name{font-size:24px;font-weight:900;color:var(--n);letter-spacing:-.025em;margin-bottom:3px;}
.city-state{font-size:12.5px;color:var(--s);font-weight:600;margin-bottom:8px;display:flex;align-items:center;gap:8px;}
.city-hq-badge{background:rgba(238,126,26,.1);color:var(--o);font-size:10px;font-weight:800;padding:2px 8px;border-radius:99px;border:1px solid rgba(238,126,26,.2);}
.city-desc{font-size:13.5px;color:var(--m);line-height:1.65;max-width:560px;}
.city-meta{display:flex;gap:16px;margin-top:10px;flex-wrap:wrap;}
.city-meta-item{font-size:12px;font-weight:600;color:var(--s);display:flex;align-items:center;gap:5px;}
.city-cta-wrap{flex-shrink:0;display:flex;align-items:center;}

/* SERVICE GROUP */
.sa-service-group{margin-bottom:24px;}
.sg-label{font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:var(--s);margin-bottom:12px;display:flex;align-items:center;gap:10px;}
.sg-label::after{content:'';flex:1;height:1px;background:var(--bdr);}
.sg-pills{display:flex;flex-wrap:wrap;gap:10px;}

/* SERVICE PILLS */
.lp-pill{display:inline-flex;align-items:center;gap:8px;padding:10px 16px;border-radius:10px;font-size:13px;font-weight:600;border:1.5px solid var(--bdr);background:#fff;color:var(--body);transition:all .18s;position:relative;}
.lp-pill:hover{border-color:var(--n);background:var(--bg);color:var(--n);transform:translateY(-2px);box-shadow:0 6px 18px rgba(42,69,115,.1);}
.lp-pill.hot{border-color:rgba(238,126,26,.3);background:rgba(238,126,26,.04);}
.lp-pill.hot:hover{border-color:var(--o);background:rgba(238,126,26,.08);color:var(--o);}
.lp-icon{font-size:15px;}
.lp-badge{font-size:9px;font-weight:800;padding:2px 7px;border-radius:99px;background:rgba(16,185,129,.12);color:#059669;}
.lp-arr{opacity:0;font-size:12px;margin-left:1px;transition:.15s;color:var(--o);}
.lp-pill:hover .lp-arr{opacity:1;}
.master-pill{border-color:rgba(42,69,115,.25)!important;background:rgba(42,69,115,.04)!important;color:var(--n)!important;font-weight:700!important;}
.master-pill:hover{border-color:var(--n)!important;background:rgba(42,69,115,.1)!important;color:var(--n)!important;}

/* PAN INDIA CARD */
.sa-pan-india{background:linear-gradient(135deg,#0f1e38,#162847);border-radius:20px;padding:36px;}
.pan-top{display:flex;align-items:flex-start;gap:20px;margin-bottom:28px;flex-wrap:wrap;}
.pan-title{font-size:20px;font-weight:900;color:#fff;margin-bottom:6px;}
.pan-sub{font-size:13px;color:rgba(255,255,255,.5);line-height:1.65;}
.pan-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;}
.pan-card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:18px;}
.pan-card-title{font-size:12.5px;font-weight:800;color:#fff;margin-bottom:10px;display:flex;align-items:center;gap:8px;}
.pan-card-links{display:flex;flex-direction:column;gap:5px;}
.pan-card-links a{font-size:12.5px;color:rgba(255,255,255,.45);transition:.15s;padding:2px 0;}
.pan-card-links a:hover{color:rgba(255,255,255,.9);padding-left:4px;}

/* CTA STRIP */
.cta-strip{background:var(--n);padding:56px 0;text-align:center;}
.cta-strip h2{font-size:clamp(22px,3.5vw,36px);color:#fff;margin-bottom:12px;}
.cta-strip p{font-size:15px;color:rgba(255,255,255,.55);max-width:460px;margin:0 auto 28px;line-height:1.6;}
.cta-strip-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}

/* RESPONSIVE */
@media(max-width:900px){
  .hb{display:flex;}.dmenu,.navcta .btn-o{display:none;}
  .fg{grid-template-columns:1fr 1fr;}
}
@media(max-width:768px){
  .sa-hero-inner{grid-template-columns:1fr;}
  .sa-india-box{display:none;}
  .sa-filter{top:70px;}
  .pan-grid{grid-template-columns:1fr 1fr;}
  .city-cta-wrap{display:flex;flex-direction:column;gap:8px;align-items:flex-end;}
  .city-header{flex-wrap:wrap;}
}
@media(max-width:560px){
  .pan-grid{grid-template-columns:1fr;}
  .fg{grid-template-columns:1fr;}
  .sa-hero{padding:56px 0 44px;}
}
`

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <nav className="breadcrumb">
<div className="wrap">
<ol className="bc-list">
<li><a href="/">Home</a></li>
<li>›</li>
<li>Areas We Work</li>
</ol>
</div>
</nav>
      <section className="sa-hero">
<div className="wrap">
<div className="sa-hero-inner">
<div>
<div className="sa-eyebrow">📍 Service Locations</div>
<h1>Rank Anywhere.<br /><em>Grow Everywhere.</em></h1>
<p>We run campaigns across India. You just watch the leads come in.</p>
<div className="sa-hero-ctas">
<a href="/contact" className="btn btn-o">Start a Project →</a>
<a href="https://wa.me/919407000101" target="_blank" rel="noopener" className="btn btn-ghost">💬 WhatsApp Us</a>
</div>
</div>
<div className="sa-india-box">
<div className="sa-india-map">

<svg viewBox="0 0 200 220" width="140" height="154" fill="none" xmlns="http://www.w3.org/2000/svg">

<ellipse cx="100" cy="110" rx="80" ry="90" fill="rgba(238,126,26,0.06)" />

<path d="M78 8 L88 6 L100 10 L112 8 L122 14 L132 12 L140 20 L148 28 L152 38 L156 50 L158 62 L154 72 L160 82 L162 94 L158 104 L152 112 L148 122 L140 132 L134 144 L126 156 L118 166 L112 176 L108 186 L104 196 L100 206 L96 196 L92 186 L88 176 L82 166 L74 156 L66 144 L58 132 L50 120 L44 108 L40 96 L42 84 L46 74 L42 64 L44 52 L48 40 L54 30 L62 20 L70 14 Z" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

<path d="M100 10 L100 206" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4,4" />
<path d="M44 108 L158 104" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4,4" />

<circle cx="88" cy="88" r="5" fill="var(--o)" opacity="1" />
<circle cx="80" cy="96" r="3.5" fill="var(--o)" opacity="0.7" />
<circle cx="106" cy="76" r="3" fill="#fff" opacity="0.5" />
<circle cx="120" cy="136" r="3" fill="#fff" opacity="0.5" />
<circle cx="76" cy="148" r="3" fill="#fff" opacity="0.5" />
<circle cx="76" cy="156" r="3" fill="#fff" opacity="0.4" />
<circle cx="92" cy="60" r="3" fill="#fff" opacity="0.5" />
<circle cx="112" cy="172" r="3" fill="#fff" opacity="0.5" />

<text x="96" y="91" fontSize="8" fill="var(--o)" fontFamily="Inter,sans-serif" fontWeight="700">Bhopal HQ</text>

<circle cx="88" cy="88" r="10" stroke="var(--o)" strokeWidth="1" fill="none" opacity="0.4">
<animate attributeName="r" values="8;16;8" dur="2.5s" repeatCount="indefinite" />
<animate attributeName="opacity" values="0.5;0;0.5" dur="2.5s" repeatCount="indefinite" />
</circle>

<rect x="70" y="210" width="60" height="4" rx="2" fill="#FF9933" />
<rect x="70" y="214" width="60" height="4" rx="2" fill="white" opacity="0.9" />
<rect x="70" y="218" width="60" height="4" rx="2" fill="#138808" />
</svg>
</div>
<div className="sa-india-label">Serving</div>
<div className="sa-india-val">Pan India</div>
<div className="sa-india-sub">Remote-first. Results-first.</div>
<div className="sa-india-dots">
<div className="sa-dot active" title="Bhopal"></div>
<div className="sa-dot active" title="Indore"></div>
<div className="sa-dot" title="Delhi"></div>
<div className="sa-dot" title="Mumbai"></div>
<div className="sa-dot" title="Bangalore"></div>
<div className="sa-dot" title="Pune"></div>
<div className="sa-dot" title="Nagpur"></div>
<div className="sa-dot" title="Gwalior"></div>
<div className="sa-dot" title="Raipur"></div>
<div className="sa-dot" title="Dewas"></div>
</div>
</div>
</div>
</div>
</section>
      <div className="sa-filter">
<div className="wrap">
<div className="sa-tabs">
<button className="sa-tab active" data-city="all">
<span className="sa-tab-flag" style={{ display: 'flex' }}><svg viewBox="0 0 32 28" width="32" height="28" style={{ flexShrink: '0' }}><rect width="32" height="28" rx="7" fill="#1E293B" /><rect x="2" y="4" width="6" height="20" rx="3" fill="#EE7E1A" /><rect x="9" y="4" width="6" height="20" rx="3" fill="#8B5CF6" /><rect x="16" y="4" width="6" height="20" rx="3" fill="#10B981" /><rect x="23" y="4" width="7" height="20" rx="3" fill="#3B82F6" /></svg></span> All Cities <span className="sa-tab-count">10</span>
</button>
<button className="sa-tab" data-city="bhopal">
<span className="sa-tab-flag" style={{ display: 'flex' }}><svg viewBox="0 0 32 28" width="32" height="28" style={{ flexShrink: '0' }}><rect width="32" height="28" rx="7" fill="#EE7E1A" /><rect y="20" width="32" height="8" rx="4" fill="#B85C0A" opacity="0.45" /><text x="16" y="17" textAnchor="middle" fontSize="11" fontWeight="900" fill="white" fontFamily="system-ui,sans-serif" letterSpacing="-0.5">BH</text></svg></span> Bhopal
      </button>
<button className="sa-tab" data-city="indore">
<span className="sa-tab-flag" style={{ display: 'flex' }}><svg viewBox="0 0 32 28" width="32" height="28" style={{ flexShrink: '0' }}><rect width="32" height="28" rx="7" fill="#8B5CF6" /><rect y="20" width="32" height="8" rx="4" fill="#5B21B6" opacity="0.45" /><text x="16" y="17" textAnchor="middle" fontSize="11" fontWeight="900" fill="white" fontFamily="system-ui,sans-serif" letterSpacing="-0.5">IN</text></svg></span> Indore
      </button>
<button className="sa-tab" data-city="dewas">
<span className="sa-tab-flag" style={{ display: 'flex' }}><svg viewBox="0 0 32 28" width="32" height="28" style={{ flexShrink: '0' }}><rect width="32" height="28" rx="7" fill="#10B981" /><rect y="20" width="32" height="8" rx="4" fill="#065F46" opacity="0.45" /><text x="16" y="17" textAnchor="middle" fontSize="11" fontWeight="900" fill="white" fontFamily="system-ui,sans-serif" letterSpacing="-0.5">DW</text></svg></span> Dewas
      </button>
<button className="sa-tab" data-city="gwalior">
<span className="sa-tab-flag" style={{ display: 'flex' }}><svg viewBox="0 0 32 28" width="32" height="28" style={{ flexShrink: '0' }}><rect width="32" height="28" rx="7" fill="#EF4444" /><rect y="20" width="32" height="8" rx="4" fill="#991B1B" opacity="0.45" /><text x="16" y="17" textAnchor="middle" fontSize="11" fontWeight="900" fill="white" fontFamily="system-ui,sans-serif" letterSpacing="-0.5">GW</text></svg></span> Gwalior
      </button>
<button className="sa-tab" data-city="raipur">
<span className="sa-tab-flag" style={{ display: 'flex' }}><svg viewBox="0 0 32 28" width="32" height="28" style={{ flexShrink: '0' }}><rect width="32" height="28" rx="7" fill="#14B8A6" /><rect y="20" width="32" height="8" rx="4" fill="#0F766E" opacity="0.45" /><text x="16" y="17" textAnchor="middle" fontSize="11" fontWeight="900" fill="white" fontFamily="system-ui,sans-serif" letterSpacing="-0.5">RP</text></svg></span> Raipur
      </button>
<button className="sa-tab" data-city="nagpur">
<span className="sa-tab-flag" style={{ display: 'flex' }}><svg viewBox="0 0 32 28" width="32" height="28" style={{ flexShrink: '0' }}><rect width="32" height="28" rx="7" fill="#F97316" /><rect y="20" width="32" height="8" rx="4" fill="#C2410C" opacity="0.45" /><text x="16" y="17" textAnchor="middle" fontSize="11" fontWeight="900" fill="white" fontFamily="system-ui,sans-serif" letterSpacing="-0.5">NG</text></svg></span> Nagpur
      </button>
<button className="sa-tab" data-city="pune">
<span className="sa-tab-flag" style={{ display: 'flex' }}><svg viewBox="0 0 32 28" width="32" height="28" style={{ flexShrink: '0' }}><rect width="32" height="28" rx="7" fill="#3B82F6" /><rect y="20" width="32" height="8" rx="4" fill="#1D4ED8" opacity="0.45" /><text x="16" y="17" textAnchor="middle" fontSize="11" fontWeight="900" fill="white" fontFamily="system-ui,sans-serif" letterSpacing="-0.5">PN</text></svg></span> Pune
      </button>
<button className="sa-tab" data-city="delhi-ncr">
<span className="sa-tab-flag" style={{ display: 'flex' }}><svg viewBox="0 0 32 28" width="32" height="28" style={{ flexShrink: '0' }}><rect width="32" height="28" rx="7" fill="#DC2626" /><rect y="20" width="32" height="8" rx="4" fill="#7F1D1D" opacity="0.45" /><text x="16" y="17" textAnchor="middle" fontSize="11" fontWeight="900" fill="white" fontFamily="system-ui,sans-serif" letterSpacing="-0.5">DL</text></svg></span> Delhi NCR
      </button>
<button className="sa-tab" data-city="mumbai">
<span className="sa-tab-flag" style={{ display: 'flex' }}><svg viewBox="0 0 32 28" width="32" height="28" style={{ flexShrink: '0' }}><rect width="32" height="28" rx="7" fill="#0EA5E9" /><rect y="20" width="32" height="8" rx="4" fill="#075985" opacity="0.45" /><text x="16" y="17" textAnchor="middle" fontSize="11" fontWeight="900" fill="white" fontFamily="system-ui,sans-serif" letterSpacing="-0.5">MB</text></svg></span> Mumbai
      </button>
<button className="sa-tab" data-city="bangalore">
<span className="sa-tab-flag" style={{ display: 'flex' }}><svg viewBox="0 0 32 28" width="32" height="28" style={{ flexShrink: '0' }}><rect width="32" height="28" rx="7" fill="#7C3AED" /><rect y="20" width="32" height="8" rx="4" fill="#4C1D95" opacity="0.45" /><text x="16" y="17" textAnchor="middle" fontSize="11" fontWeight="900" fill="white" fontFamily="system-ui,sans-serif" letterSpacing="-0.5">BG</text></svg></span> Bangalore
      </button>
<button className="sa-tab" data-city="pan-india">
<span className="sa-tab-flag" style={{ display: 'flex' }}><svg viewBox="0 0 32 28" width="32" height="28" style={{ flexShrink: '0' }}><rect width="32" height="28" rx="7" fill="#1E3A8A" /><rect x="3" y="7" width="26" height="5" rx="2" fill="#FF9933" /><rect x="3" y="12" width="26" height="5" rx="2" fill="white" opacity="0.9" /><rect x="3" y="17" width="26" height="5" rx="2" fill="#138808" /></svg></span> Pan India
      </button>
</div>
</div>
</div>
      <section className="sa-body">
<div className="wrap">

<div className="sa-city show" data-city="bhopal" id="bhopal">
<div className="city-header">
<div className="city-flag-wrap"><svg viewBox="0 0 44 44" width="40" height="40" style={{ display: 'block' }}><rect width="44" height="44" rx="13" fill="#EE7E1A" /><rect y="30" width="44" height="14" rx="7" fill="#B85C0A" opacity="0.4" /><text x="22" y="30" textAnchor="middle" fontSize="22" fontWeight="900" fill="white" fontFamily="system-ui,sans-serif">B</text></svg></div>
<div className="city-info">
<div className="city-name">Bhopal</div>
<div className="city-state">
            Madhya Pradesh, India
            <span className="city-hq-badge">⭐ Our HQ City</span>
</div>
<div className="city-desc">Our home base. We know Bhopal's business landscape, local competitors, and consumer behaviour inside out — giving our Bhopal clients an unfair advantage in search and ads.</div>
<div className="city-meta">
<span className="city-meta-item">📍 Amrit Complex, Raisen Road</span>
<span className="city-meta-item">🤝 Walk-ins Welcome</span>
</div>
</div>
<div className="city-cta-wrap" style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
<a href="/locations/bhopal/digital-marketing" className="lp-pill master-pill"><span className="lp-icon">🏙️</span> Bhopal Master Page <span className="lp-arr">→</span></a>
<a href="/contact" className="btn btn-o btn-sm">Get Free Audit →</a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">🔍 SEO Services — Bhopal</div>
<div className="sg-pills">
<a href="/locations/bhopal/seo" className="lp-pill hot"><span className="lp-icon">🔍</span> SEO Services Bhopal <span className="lp-badge">Popular</span><span className="lp-arr">→</span></a>
<a href="/locations/bhopal/local-seo" className="lp-pill"><span className="lp-icon">📍</span> Local SEO Bhopal <span className="lp-arr">→</span></a>
<a href="/locations/bhopal/technical-seo-audit" className="lp-pill"><span className="lp-icon">⚙️</span> Technical SEO Audit Bhopal <span className="lp-arr">→</span></a>
<a href="/locations/bhopal/link-building" className="lp-pill"><span className="lp-icon">🔗</span> Link Building Bhopal <span className="lp-arr">→</span></a>
<a href="/locations/bhopal/ecommerce-seo" className="lp-pill"><span className="lp-icon">🛒</span> E-Commerce SEO Bhopal <span className="lp-arr">→</span></a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">📢 Digital Marketing — Bhopal</div>
<div className="sg-pills">
<a href="/locations/bhopal/google-ads" className="lp-pill hot"><span className="lp-icon">🎯</span> Google Ads Bhopal <span className="lp-badge">Popular</span><span className="lp-arr">→</span></a>
<a href="/locations/bhopal/meta-ads" className="lp-pill"><span className="lp-icon">📘</span> Meta Ads Bhopal <span className="lp-arr">→</span></a>
<a href="/locations/bhopal/social-media-marketing" className="lp-pill"><span className="lp-icon">📱</span> Social Media Marketing Bhopal <span className="lp-arr">→</span></a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">💻 Web Development — Bhopal</div>
<div className="sg-pills">
<a href="/locations/bhopal/web-development" className="lp-pill"><span className="lp-icon">💻</span> Web Development Bhopal <span className="lp-arr">→</span></a>
<a href="/locations/bhopal/wordpress-development" className="lp-pill"><span className="lp-icon">🔷</span> WordPress Development Bhopal <span className="lp-arr">→</span></a>
<a href="/locations/bhopal/ecommerce-development" className="lp-pill"><span className="lp-icon">🛍️</span> E-Commerce Development Bhopal <span className="lp-arr">→</span></a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">🤖 AI &amp; Automation — Bhopal</div>
<div className="sg-pills">
<a href="/locations/bhopal/ai-automation" className="lp-pill"><span className="lp-icon">🤖</span> AI Automation Bhopal <span className="lp-arr">→</span></a>
<a href="/locations/bhopal/whatsapp-automation" className="lp-pill"><span className="lp-icon">💬</span> WhatsApp Automation Bhopal <span className="lp-arr">→</span></a>
</div>
</div>
</div>

<div className="sa-city show" data-city="indore" id="indore">
<div className="city-header">
<div className="city-flag-wrap"><svg viewBox="0 0 44 44" width="40" height="40" style={{ display: 'block' }}><rect width="44" height="44" rx="13" fill="#8B5CF6" /><rect y="30" width="44" height="14" rx="7" fill="#5B21B6" opacity="0.4" /><text x="22" y="30" textAnchor="middle" fontSize="22" fontWeight="900" fill="white" fontFamily="system-ui,sans-serif">I</text></svg></div>
<div className="city-info">
<div className="city-name">Indore</div>
<div className="city-state">Madhya Pradesh, India</div>
<div className="city-desc">MP's commercial capital. We serve startups, MSMEs, and retail businesses across Vijay Nagar, Palasia, Scheme 54, and beyond — fully remote, fully accountable.</div>
<div className="city-meta">
<span className="city-meta-item">🚀 Remote Service</span>
<span className="city-meta-item">⚡ 24hr Response</span>
</div>
</div>
<div className="city-cta-wrap" style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
<a href="/locations/indore/digital-marketing" className="lp-pill master-pill"><span className="lp-icon">🌆</span> Indore Master Page <span className="lp-arr">→</span></a>
<a href="/contact" className="btn btn-o btn-sm">Get Free Audit →</a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">🔍 SEO Services — Indore</div>
<div className="sg-pills">
<a href="/locations/indore/seo" className="lp-pill hot"><span className="lp-icon">🔍</span> SEO Services Indore <span className="lp-badge">Popular</span><span className="lp-arr">→</span></a>
<a href="/locations/indore/local-seo" className="lp-pill"><span className="lp-icon">📍</span> Local SEO Indore <span className="lp-arr">→</span></a>
<a href="/locations/indore/technical-seo-audit" className="lp-pill"><span className="lp-icon">⚙️</span> Technical SEO Audit Indore <span className="lp-arr">→</span></a>
<a href="/locations/indore/link-building" className="lp-pill"><span className="lp-icon">🔗</span> Link Building Indore <span className="lp-arr">→</span></a>
<a href="/locations/indore/ecommerce-seo" className="lp-pill"><span className="lp-icon">🛒</span> E-Commerce SEO Indore <span className="lp-arr">→</span></a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">📢 Digital Marketing — Indore</div>
<div className="sg-pills">
<a href="/locations/indore/google-ads" className="lp-pill hot"><span className="lp-icon">🎯</span> Google Ads Indore <span className="lp-badge">Popular</span><span className="lp-arr">→</span></a>
<a href="/locations/indore/meta-ads" className="lp-pill"><span className="lp-icon">📘</span> Meta Ads Indore <span className="lp-arr">→</span></a>
<a href="/locations/indore/social-media-marketing" className="lp-pill"><span className="lp-icon">📱</span> Social Media Marketing Indore <span className="lp-arr">→</span></a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">💻 Web Development — Indore</div>
<div className="sg-pills">
<a href="/locations/indore/web-development" className="lp-pill"><span className="lp-icon">💻</span> Web Development Indore <span className="lp-arr">→</span></a>
<a href="/locations/indore/wordpress-development" className="lp-pill"><span className="lp-icon">🔷</span> WordPress Development Indore <span className="lp-arr">→</span></a>
<a href="/locations/indore/ecommerce-development" className="lp-pill"><span className="lp-icon">🛍️</span> E-Commerce Development Indore <span className="lp-arr">→</span></a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">🤖 AI &amp; Automation — Indore</div>
<div className="sg-pills">
<a href="/locations/indore/ai-automation" className="lp-pill"><span className="lp-icon">🤖</span> AI Automation Indore <span className="lp-arr">→</span></a>
<a href="/locations/indore/whatsapp-automation" className="lp-pill"><span className="lp-icon">💬</span> WhatsApp Automation Indore <span className="lp-arr">→</span></a>
</div>
</div>
</div>

<div className="sa-city show" data-city="dewas" id="dewas">
<div className="city-header">
<div className="city-flag-wrap"><svg viewBox="0 0 44 44" width="40" height="40" style={{ display: 'block' }}><rect width="44" height="44" rx="13" fill="#10B981" /><rect y="30" width="44" height="14" rx="7" fill="#065F46" opacity="0.4" /><text x="22" y="30" textAnchor="middle" fontSize="22" fontWeight="900" fill="white" fontFamily="system-ui,sans-serif">D</text></svg></div>
<div className="city-info">
<div className="city-name">Dewas</div>
<div className="city-state">Madhya Pradesh, India</div>
<div className="city-desc">MP's industrial powerhouse — pharmaceuticals, FMCG, and manufacturing. We help Dewas businesses build digital visibility to match their offline strength.</div>
<div className="city-meta">
<span className="city-meta-item">🚀 Remote Service</span>
<span className="city-meta-item">⚡ 24hr Response</span>
</div>
</div>
<div className="city-cta-wrap" style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
<a href="/dewas" className="lp-pill master-pill"><span className="lp-icon">🏭</span> Dewas Master Page <span className="lp-arr">→</span></a>
<a href="/contact" className="btn btn-o btn-sm">Get Free Audit →</a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">🔍 SEO Services — Dewas</div>
<div className="sg-pills">
<a href="#" className="lp-pill hot"><span className="lp-icon">🔍</span> SEO Services Dewas <span className="lp-badge">Popular</span><span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">📍</span> Local SEO Dewas <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">⚙️</span> Technical SEO Audit Dewas <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">🔗</span> Link Building Dewas <span className="lp-arr">→</span></a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">📢 Digital Marketing — Dewas</div>
<div className="sg-pills">
<a href="#" className="lp-pill hot"><span className="lp-icon">🎯</span> Google Ads Dewas <span className="lp-badge">Popular</span><span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">📘</span> Meta Ads Dewas <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">📱</span> Social Media Marketing Dewas <span className="lp-arr">→</span></a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">💻 Web Development — Dewas</div>
<div className="sg-pills">
<a href="#" className="lp-pill"><span className="lp-icon">💻</span> Web Development Dewas <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">🔷</span> WordPress Development Dewas <span className="lp-arr">→</span></a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">🤖 AI &amp; Automation — Dewas</div>
<div className="sg-pills">
<a href="#" className="lp-pill"><span className="lp-icon">🤖</span> AI Automation Dewas <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">💬</span> WhatsApp Automation Dewas <span className="lp-arr">→</span></a>
</div>
</div>
</div>

<div className="sa-city show" data-city="gwalior" id="gwalior">
<div className="city-header">
<div className="city-flag-wrap"><svg viewBox="0 0 44 44" width="40" height="40" style={{ display: 'block' }}><rect width="44" height="44" rx="13" fill="#EF4444" /><rect y="30" width="44" height="14" rx="7" fill="#991B1B" opacity="0.4" /><text x="22" y="30" textAnchor="middle" fontSize="22" fontWeight="900" fill="white" fontFamily="system-ui,sans-serif">G</text></svg></div>
<div className="city-info">
<div className="city-name">Gwalior</div>
<div className="city-state">Madhya Pradesh, India</div>
<div className="city-desc">A city of heritage, education, and growing commerce. We work with retail, healthcare, education, and real estate businesses across Gwalior to dominate local search.</div>
<div className="city-meta">
<span className="city-meta-item">🚀 Remote Service</span>
<span className="city-meta-item">⚡ 24hr Response</span>
</div>
</div>
<div className="city-cta-wrap" style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
<a href="/gwalior" className="lp-pill master-pill"><span className="lp-icon">🏰</span> Gwalior Master Page <span className="lp-arr">→</span></a>
<a href="/contact" className="btn btn-o btn-sm">Get Free Audit →</a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">🔍 SEO Services — Gwalior</div>
<div className="sg-pills">
<a href="#" className="lp-pill hot"><span className="lp-icon">🔍</span> SEO Services Gwalior <span className="lp-badge">Popular</span><span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">📍</span> Local SEO Gwalior <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">⚙️</span> Technical SEO Audit Gwalior <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">🔗</span> Link Building Gwalior <span className="lp-arr">→</span></a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">📢 Digital Marketing — Gwalior</div>
<div className="sg-pills">
<a href="#" className="lp-pill hot"><span className="lp-icon">🎯</span> Google Ads Gwalior <span className="lp-badge">Popular</span><span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">📘</span> Meta Ads Gwalior <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">📱</span> Social Media Marketing Gwalior <span className="lp-arr">→</span></a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">💻 Web Development — Gwalior</div>
<div className="sg-pills">
<a href="#" className="lp-pill"><span className="lp-icon">💻</span> Web Development Gwalior <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">🔷</span> WordPress Development Gwalior <span className="lp-arr">→</span></a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">🤖 AI &amp; Automation — Gwalior</div>
<div className="sg-pills">
<a href="#" className="lp-pill"><span className="lp-icon">🤖</span> AI Automation Gwalior <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">💬</span> WhatsApp Automation Gwalior <span className="lp-arr">→</span></a>
</div>
</div>
</div>

<div className="sa-city show" data-city="raipur" id="raipur">
<div className="city-header">
<div className="city-flag-wrap"><svg viewBox="0 0 44 44" width="40" height="40" style={{ display: 'block' }}><rect width="44" height="44" rx="13" fill="#14B8A6" /><rect y="30" width="44" height="14" rx="7" fill="#0F766E" opacity="0.4" /><text x="22" y="30" textAnchor="middle" fontSize="22" fontWeight="900" fill="white" fontFamily="system-ui,sans-serif">R</text></svg></div>
<div className="city-info">
<div className="city-name">Raipur</div>
<div className="city-state">Chhattisgarh, India</div>
<div className="city-desc">Chhattisgarh's booming capital — steel, construction, healthcare, and retail. Raipur businesses are hungry for digital growth and we're here to deliver it.</div>
<div className="city-meta">
<span className="city-meta-item">🚀 Remote Service</span>
<span className="city-meta-item">⚡ 24hr Response</span>
</div>
</div>
<div className="city-cta-wrap" style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
<a href="/raipur" className="lp-pill master-pill"><span className="lp-icon">🌿</span> Raipur Master Page <span className="lp-arr">→</span></a>
<a href="/contact" className="btn btn-o btn-sm">Get Free Audit →</a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">🔍 SEO Services — Raipur</div>
<div className="sg-pills">
<a href="#" className="lp-pill hot"><span className="lp-icon">🔍</span> SEO Services Raipur <span className="lp-badge">Popular</span><span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">📍</span> Local SEO Raipur <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">⚙️</span> Technical SEO Audit Raipur <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">🔗</span> Link Building Raipur <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">🛒</span> E-Commerce SEO Raipur <span className="lp-arr">→</span></a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">📢 Digital Marketing — Raipur</div>
<div className="sg-pills">
<a href="#" className="lp-pill hot"><span className="lp-icon">🎯</span> Google Ads Raipur <span className="lp-badge">Popular</span><span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">📘</span> Meta Ads Raipur <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">📱</span> Social Media Marketing Raipur <span className="lp-arr">→</span></a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">💻 Web Development — Raipur</div>
<div className="sg-pills">
<a href="#" className="lp-pill"><span className="lp-icon">💻</span> Web Development Raipur <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">🔷</span> WordPress Development Raipur <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">🛍️</span> E-Commerce Development Raipur <span className="lp-arr">→</span></a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">🤖 AI &amp; Automation — Raipur</div>
<div className="sg-pills">
<a href="#" className="lp-pill"><span className="lp-icon">🤖</span> AI Automation Raipur <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">💬</span> WhatsApp Automation Raipur <span className="lp-arr">→</span></a>
</div>
</div>
</div>

<div className="sa-city show" data-city="nagpur" id="nagpur">
<div className="city-header">
<div className="city-flag-wrap"><svg viewBox="0 0 44 44" width="40" height="40" style={{ display: 'block' }}><rect width="44" height="44" rx="13" fill="#F97316" /><rect y="30" width="44" height="14" rx="7" fill="#C2410C" opacity="0.4" /><text x="22" y="30" textAnchor="middle" fontSize="22" fontWeight="900" fill="white" fontFamily="system-ui,sans-serif">N</text></svg></div>
<div className="city-info">
<div className="city-name">Nagpur</div>
<div className="city-state">Maharashtra, India</div>
<div className="city-desc">The orange city at the geographic heart of India — a rising hub for logistics, retail, and B2B. Strong SEO here means visibility across central Maharashtra.</div>
<div className="city-meta">
<span className="city-meta-item">🚀 Remote Service</span>
<span className="city-meta-item">⚡ 24hr Response</span>
</div>
</div>
<div className="city-cta-wrap" style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
<a href="/nagpur" className="lp-pill master-pill"><span className="lp-icon">🍊</span> Nagpur Master Page <span className="lp-arr">→</span></a>
<a href="/contact" className="btn btn-o btn-sm">Get Free Audit →</a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">🔍 SEO Services — Nagpur</div>
<div className="sg-pills">
<a href="#" className="lp-pill hot"><span className="lp-icon">🔍</span> SEO Services Nagpur <span className="lp-badge">Popular</span><span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">📍</span> Local SEO Nagpur <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">⚙️</span> Technical SEO Audit Nagpur <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">🔗</span> Link Building Nagpur <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">🛒</span> E-Commerce SEO Nagpur <span className="lp-arr">→</span></a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">📢 Digital Marketing — Nagpur</div>
<div className="sg-pills">
<a href="#" className="lp-pill hot"><span className="lp-icon">🎯</span> Google Ads Nagpur <span className="lp-badge">Popular</span><span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">📘</span> Meta Ads Nagpur <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">📱</span> Social Media Marketing Nagpur <span className="lp-arr">→</span></a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">💻 Web Development — Nagpur</div>
<div className="sg-pills">
<a href="#" className="lp-pill"><span className="lp-icon">💻</span> Web Development Nagpur <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">🔷</span> WordPress Development Nagpur <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">🛍️</span> E-Commerce Development Nagpur <span className="lp-arr">→</span></a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">🤖 AI &amp; Automation — Nagpur</div>
<div className="sg-pills">
<a href="#" className="lp-pill"><span className="lp-icon">🤖</span> AI Automation Nagpur <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">💬</span> WhatsApp Automation Nagpur <span className="lp-arr">→</span></a>
</div>
</div>
</div>

<div className="sa-city show" data-city="pune" id="pune">
<div className="city-header">
<div className="city-flag-wrap"><svg viewBox="0 0 44 44" width="40" height="40" style={{ display: 'block' }}><rect width="44" height="44" rx="13" fill="#3B82F6" /><rect y="30" width="44" height="14" rx="7" fill="#1D4ED8" opacity="0.4" /><text x="22" y="30" textAnchor="middle" fontSize="22" fontWeight="900" fill="white" fontFamily="system-ui,sans-serif">P</text></svg></div>
<div className="city-info">
<div className="city-name">Pune</div>
<div className="city-state">Maharashtra, India</div>
<div className="city-desc">India's education and IT suburb — fierce competition, high search volume, smart buyers. We craft strategies built for Pune's discerning digital audience.</div>
<div className="city-meta">
<span className="city-meta-item">🚀 Remote Service</span>
<span className="city-meta-item">⚡ 24hr Response</span>
</div>
</div>
<div className="city-cta-wrap" style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
<a href="/pune" className="lp-pill master-pill"><span className="lp-icon">🎓</span> Pune Master Page <span className="lp-arr">→</span></a>
<a href="/contact" className="btn btn-o btn-sm">Get Free Audit →</a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">🔍 SEO Services — Pune</div>
<div className="sg-pills">
<a href="#" className="lp-pill hot"><span className="lp-icon">🔍</span> SEO Services Pune <span className="lp-badge">Popular</span><span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">📍</span> Local SEO Pune <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">⚙️</span> Technical SEO Audit Pune <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">🔗</span> Link Building Pune <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">🛒</span> E-Commerce SEO Pune <span className="lp-arr">→</span></a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">📢 Digital Marketing — Pune</div>
<div className="sg-pills">
<a href="#" className="lp-pill hot"><span className="lp-icon">🎯</span> Google Ads Pune <span className="lp-badge">Popular</span><span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">📘</span> Meta Ads Pune <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">📱</span> Social Media Marketing Pune <span className="lp-arr">→</span></a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">💻 Web Development — Pune</div>
<div className="sg-pills">
<a href="#" className="lp-pill"><span className="lp-icon">💻</span> Web Development Pune <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">🔷</span> WordPress Development Pune <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">🛍️</span> E-Commerce Development Pune <span className="lp-arr">→</span></a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">🤖 AI &amp; Automation — Pune</div>
<div className="sg-pills">
<a href="#" className="lp-pill"><span className="lp-icon">🤖</span> AI Automation Pune <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">💬</span> WhatsApp Automation Pune <span className="lp-arr">→</span></a>
</div>
</div>
</div>

<div className="sa-city show" data-city="delhi-ncr" id="delhi-ncr">
<div className="city-header">
<div className="city-flag-wrap"><svg viewBox="0 0 44 44" width="40" height="40" style={{ display: 'block' }}><rect width="44" height="44" rx="13" fill="#DC2626" /><rect y="30" width="44" height="14" rx="7" fill="#7F1D1D" opacity="0.4" /><text x="22" y="30" textAnchor="middle" fontSize="22" fontWeight="900" fill="white" fontFamily="system-ui,sans-serif">D</text></svg></div>
<div className="city-info">
<div className="city-name">Delhi NCR</div>
<div className="city-state">Delhi / Haryana / UP, India</div>
<div className="city-desc">India's biggest market. B2B, B2C, government, startup — if you want to win in Delhi NCR, you need SEO and ads that cut through the noise. That's exactly what we do.</div>
<div className="city-meta">
<span className="city-meta-item">🚀 Remote Service</span>
<span className="city-meta-item">⚡ 24hr Response</span>
</div>
</div>
<div className="city-cta-wrap" style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
<a href="/delhi-ncr" className="lp-pill master-pill"><span className="lp-icon">🏛️</span> Delhi NCR Master Page <span className="lp-arr">→</span></a>
<a href="/contact" className="btn btn-o btn-sm">Get Free Audit →</a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">🔍 SEO Services — Delhi NCR</div>
<div className="sg-pills">
<a href="#" className="lp-pill hot"><span className="lp-icon">🔍</span> SEO Services Delhi <span className="lp-badge">Popular</span><span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">📍</span> Local SEO Delhi NCR <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">⚙️</span> Technical SEO Audit Delhi <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">🔗</span> Link Building Delhi <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">🛒</span> E-Commerce SEO Delhi <span className="lp-arr">→</span></a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">📢 Digital Marketing — Delhi NCR</div>
<div className="sg-pills">
<a href="#" className="lp-pill hot"><span className="lp-icon">🎯</span> Google Ads Delhi NCR <span className="lp-badge">Popular</span><span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">📘</span> Meta Ads Delhi NCR <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">📱</span> Social Media Marketing Delhi <span className="lp-arr">→</span></a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">💻 Web Development — Delhi NCR</div>
<div className="sg-pills">
<a href="#" className="lp-pill"><span className="lp-icon">💻</span> Web Development Delhi <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">🔷</span> WordPress Development Delhi <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">🛍️</span> E-Commerce Development Delhi <span className="lp-arr">→</span></a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">🤖 AI &amp; Automation — Delhi NCR</div>
<div className="sg-pills">
<a href="#" className="lp-pill"><span className="lp-icon">🤖</span> AI Automation Delhi <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">💬</span> WhatsApp Automation Delhi <span className="lp-arr">→</span></a>
</div>
</div>
</div>

<div className="sa-city show" data-city="mumbai" id="mumbai">
<div className="city-header">
<div className="city-flag-wrap"><svg viewBox="0 0 44 44" width="40" height="40" style={{ display: 'block' }}><rect width="44" height="44" rx="13" fill="#0EA5E9" /><rect y="30" width="44" height="14" rx="7" fill="#075985" opacity="0.4" /><text x="22" y="30" textAnchor="middle" fontSize="22" fontWeight="900" fill="white" fontFamily="system-ui,sans-serif">M</text></svg></div>
<div className="city-info">
<div className="city-name">Mumbai</div>
<div className="city-state">Maharashtra, India</div>
<div className="city-desc">India's financial capital moves fast. Your competition in Mumbai is already running ads and investing in SEO — the only question is whether your brand shows up first or second.</div>
<div className="city-meta">
<span className="city-meta-item">🚀 Remote Service</span>
<span className="city-meta-item">⚡ 24hr Response</span>
</div>
</div>
<div className="city-cta-wrap" style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
<a href="/mumbai" className="lp-pill master-pill"><span className="lp-icon">🌊</span> Mumbai Master Page <span className="lp-arr">→</span></a>
<a href="/contact" className="btn btn-o btn-sm">Get Free Audit →</a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">🔍 SEO Services — Mumbai</div>
<div className="sg-pills">
<a href="#" className="lp-pill hot"><span className="lp-icon">🔍</span> SEO Services Mumbai <span className="lp-badge">Popular</span><span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">📍</span> Local SEO Mumbai <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">⚙️</span> Technical SEO Audit Mumbai <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">🔗</span> Link Building Mumbai <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">🛒</span> E-Commerce SEO Mumbai <span className="lp-arr">→</span></a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">📢 Digital Marketing — Mumbai</div>
<div className="sg-pills">
<a href="#" className="lp-pill hot"><span className="lp-icon">🎯</span> Google Ads Mumbai <span className="lp-badge">Popular</span><span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">📘</span> Meta Ads Mumbai <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">📱</span> Social Media Marketing Mumbai <span className="lp-arr">→</span></a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">💻 Web Development — Mumbai</div>
<div className="sg-pills">
<a href="#" className="lp-pill"><span className="lp-icon">💻</span> Web Development Mumbai <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">🔷</span> WordPress Development Mumbai <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">🛍️</span> E-Commerce Development Mumbai <span className="lp-arr">→</span></a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">🤖 AI &amp; Automation — Mumbai</div>
<div className="sg-pills">
<a href="#" className="lp-pill"><span className="lp-icon">🤖</span> AI Automation Mumbai <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">💬</span> WhatsApp Automation Mumbai <span className="lp-arr">→</span></a>
</div>
</div>
</div>

<div className="sa-city show" data-city="bangalore" id="bangalore">
<div className="city-header">
<div className="city-flag-wrap"><svg viewBox="0 0 44 44" width="40" height="40" style={{ display: 'block' }}><rect width="44" height="44" rx="13" fill="#7C3AED" /><rect y="30" width="44" height="14" rx="7" fill="#4C1D95" opacity="0.4" /><text x="22" y="30" textAnchor="middle" fontSize="22" fontWeight="900" fill="white" fontFamily="system-ui,sans-serif">B</text></svg></div>
<div className="city-info">
<div className="city-name">Bangalore</div>
<div className="city-state">Karnataka, India</div>
<div className="city-desc">India's Silicon Valley expects the best. Startups, SaaS, and tech companies in Bangalore need sophisticated SEO and performance marketing — we've built our entire stack for exactly that.</div>
<div className="city-meta">
<span className="city-meta-item">🚀 Remote Service</span>
<span className="city-meta-item">⚡ 24hr Response</span>
</div>
</div>
<div className="city-cta-wrap" style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
<a href="/bangalore" className="lp-pill master-pill"><span className="lp-icon">💻</span> Bangalore Master Page <span className="lp-arr">→</span></a>
<a href="/contact" className="btn btn-o btn-sm">Get Free Audit →</a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">🔍 SEO Services — Bangalore</div>
<div className="sg-pills">
<a href="#" className="lp-pill hot"><span className="lp-icon">🔍</span> SEO Services Bangalore <span className="lp-badge">Popular</span><span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">📍</span> Local SEO Bangalore <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">⚙️</span> Technical SEO Audit Bangalore <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">🔗</span> Link Building Bangalore <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">🛒</span> E-Commerce SEO Bangalore <span className="lp-arr">→</span></a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">📢 Digital Marketing — Bangalore</div>
<div className="sg-pills">
<a href="#" className="lp-pill hot"><span className="lp-icon">🎯</span> Google Ads Bangalore <span className="lp-badge">Popular</span><span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">📘</span> Meta Ads Bangalore <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">📱</span> Social Media Marketing Bangalore <span className="lp-arr">→</span></a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">💻 Web Development — Bangalore</div>
<div className="sg-pills">
<a href="#" className="lp-pill"><span className="lp-icon">💻</span> Web Development Bangalore <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">🔷</span> WordPress Development Bangalore <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"><span className="lp-icon">🛍️</span> E-Commerce Development Bangalore <span className="lp-arr">→</span></a>
</div>
</div>
<div className="sa-service-group">
<div className="sg-label">🤖 AI &amp; Automation — Bangalore</div>
<div className="sg-pills">
<a href="#" className="lp-pill"><span className="lp-icon">🤖</span> AI Automation Bangalore <span className="lp-arr">→</span></a>
<a href="#" className="lp-pill"></a></div></div></div></div></section>
    </>
  )
}
