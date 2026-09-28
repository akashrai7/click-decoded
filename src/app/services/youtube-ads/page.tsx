/* eslint-disable */
// src/app/services/youtube-ads/page.tsx — generated from youtube-ads.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "YouTube Ads Management India | Click Decoded",
  description: "YouTube Ads that go beyond views — targeted video campaigns that drive leads, calls, and purchases. Click Decoded manages end-to-end YouTube advertising.",
  alternates: { canonical: "/services/youtube-ads" },
}

const css = `
:root{
  --ac:#DC2626;--ac2:#b91c1c;--ac-rgb:220,38,38;
  --n:#1e3a5f;--n-dark:#0a1628;
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
.breadcrumb{background:var(--bg);padding:12px 0;border-bottom:1px solid var(--bdr);}
.bc-list{display:flex;align-items:center;gap:8px;font-size:12.5px;color:var(--s);}
.bc-list a{color:var(--n);font-weight:500;}.bc-list a:hover{color:var(--ac);}
/* HERO */
.hero{background:linear-gradient(155deg,#1a0505 0%,#2d0a0a 45%,#1a0505 100%);padding:96px 0 80px;position:relative;overflow:hidden;}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 55% at 68% 35%,rgba(220,38,38,.18) 0%,transparent 65%),radial-gradient(ellipse 35% 40% at 10% 80%,rgba(220,38,38,.07) 0%,transparent 60%);}
.hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;position:relative;z-index:2;}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;background:rgba(220,38,38,.12);border:1px solid rgba(220,38,38,.3);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#f87171;margin-bottom:20px;}
.hero h1{font-size:48px;color:#fff;line-height:1.06;letter-spacing:-.04em;margin-bottom:20px;}
.hero h1 em{font-style:normal;background:linear-gradient(135deg,#f87171,#dc2626);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-desc{font-size:17px;color:rgba(255,255,255,.62);line-height:1.7;margin-bottom:32px;max-width:460px;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:36px;}
.hero-proof{display:flex;gap:24px;flex-wrap:wrap;}
.proof-item{font-size:13px;color:rgba(255,255,255,.5);}
.proof-item strong{color:#fff;font-weight:700;}
/* MOCK */
.yt-mock{border-radius:20px;overflow:hidden;box-shadow:0 28px 70px rgba(0,0,0,.65);background:#0f0f0f;border:1px solid rgba(220,38,38,.2);}
.mock-browser{background:rgba(255,255,255,.05);padding:10px 14px;border-bottom:1px solid rgba(255,255,255,.07);display:flex;align-items:center;gap:10px;}
.mock-dots{display:flex;gap:5px;}
.mock-dots span{width:9px;height:9px;border-radius:50%;}
.mock-dots span:nth-child(1){background:#ff5f57;}
.mock-dots span:nth-child(2){background:#ffbd2e;}
.mock-dots span:nth-child(3){background:#28c840;}
.mock-url{flex:1;background:rgba(255,255,255,.07);border-radius:6px;padding:5px 12px;font-size:11px;color:rgba(255,255,255,.35);}
.video-player{position:relative;background:#000;aspect-ratio:16/7;overflow:hidden;}
.video-thumb{width:100%;height:100%;background:linear-gradient(135deg,#1a0505,#3d0808);display:flex;align-items:center;justify-content:center;position:relative;}
.video-thumb::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 40%,rgba(220,38,38,.25),transparent);}
.play-btn{width:60px;height:60px;background:rgba(220,38,38,.9);border-radius:50%;display:flex;align-items:center;justify-content:center;position:relative;z-index:1;box-shadow:0 0 0 8px rgba(220,38,38,.15);}
.ad-badge{position:absolute;top:10px;left:10px;background:rgba(0,0,0,.75);color:#fff;font-size:10px;font-weight:700;padding:3px 8px;border-radius:4px;z-index:2;}
.skip-btn{position:absolute;bottom:14px;right:10px;background:rgba(0,0,0,.7);color:rgba(255,255,255,.8);font-size:11px;font-weight:600;padding:5px 12px;border-radius:4px;z-index:2;border:1px solid rgba(255,255,255,.2);}
.progress-bar{position:absolute;bottom:0;left:0;right:0;height:3px;background:rgba(255,255,255,.15);}
.progress-fill{height:100%;width:42%;background:#dc2626;}
.camp-header{background:rgba(220,38,38,.08);border-bottom:1px solid rgba(220,38,38,.15);padding:10px 14px;display:flex;align-items:center;justify-content:space-between;}
.camp-title{font-size:12px;font-weight:700;color:rgba(255,255,255,.7);}
.camp-status{font-size:10px;font-weight:700;padding:3px 9px;border-radius:5px;background:rgba(74,222,128,.1);border:1px solid rgba(74,222,128,.2);color:#4ade80;}
.mock-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,.05);border-bottom:1px solid rgba(255,255,255,.05);}
.mock-metric{padding:12px 14px;background:#0f0f0f;}
.mm-icon{font-size:14px;margin-bottom:5px;}
.mm-val{font-size:19px;font-weight:900;color:#fff;letter-spacing:-.02em;line-height:1;}
.mm-label{font-size:9px;color:rgba(255,255,255,.35);margin-top:3px;text-transform:uppercase;letter-spacing:.06em;}
.mock-chart{padding:12px 14px 14px;}
.chart-label{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.25);margin-bottom:7px;}
.sparkline{display:flex;align-items:flex-end;gap:3px;height:40px;}
.spark-bar{flex:1;border-radius:2px 2px 0 0;background:linear-gradient(180deg,rgba(220,38,38,.9),rgba(220,38,38,.25));}
/* STATS */
.stats-strip{background:var(--ac);}
.stats-inner{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(0,0,0,.2);}
.stat-box{padding:32px 24px;text-align:center;background:var(--ac);}
.stat-n{font-size:40px;font-weight:900;color:#fff;line-height:1;letter-spacing:-.03em;}
.stat-l{font-size:12px;color:rgba(255,255,255,.75);margin-top:6px;font-weight:500;text-transform:uppercase;letter-spacing:.06em;}
/* SECTIONS */
.sec-h{text-align:center;max-width:640px;margin:0 auto 52px;}
.sec-tag{display:inline-flex;padding:5px 13px;border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:10px;background:rgba(220,38,38,.08);border:1px solid rgba(220,38,38,.18);color:var(--ac);}
.sec-h h2{font-size:36px;margin-bottom:14px;}
.sec-h p{font-size:16px;color:var(--m);line-height:1.65;}
.inc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.inc-card{background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:28px 24px;transition:.2s;}
.inc-card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(220,38,38,.08);border-color:rgba(220,38,38,.2);}
.inc-icon{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:16px;background:rgba(220,38,38,.07);border:1px solid rgba(220,38,38,.12);}
.inc-card h3{font-size:17px;margin-bottom:10px;}
.inc-card p{font-size:13.5px;color:var(--m);line-height:1.65;}
/* FORMATS */
.formats-section{background:var(--n-dark);padding:88px 0;}
.formats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:1000px;margin:0 auto;}
.fmt-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:24px;transition:.2s;}
.fmt-card:hover{border-color:rgba(220,38,38,.3);background:rgba(220,38,38,.06);transform:translateY(-2px);}
.fmt-top{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px;}
.fmt-icon{font-size:28px;}
.fmt-tag{font-size:10px;font-weight:700;padding:3px 8px;border-radius:5px;background:rgba(220,38,38,.15);border:1px solid rgba(220,38,38,.25);color:#f87171;}
.fmt-card h3{font-size:15px;font-weight:700;color:#fff;margin-bottom:6px;}
.fmt-card p{font-size:13px;color:rgba(255,255,255,.5);line-height:1.6;}
/* PROCESS */
.steps-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative;}
.steps-grid::before{content:'';position:absolute;top:34px;left:12%;right:12%;height:2px;background:linear-gradient(90deg,#dc2626,#b91c1c);z-index:0;opacity:.4;}
.step{text-align:center;padding:0 16px;position:relative;z-index:1;}
.step-num{width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,#dc2626,#b91c1c);color:#fff;font-size:20px;font-weight:900;display:flex;align-items:center;justify-content:center;margin:0 auto 18px;box-shadow:0 8px 24px rgba(220,38,38,.3);}
.step h4{font-size:15px;margin-bottom:7px;}
.step p{font-size:13px;color:var(--m);line-height:1.6;}
/* FAQ */
.faq-2col{display:grid;grid-template-columns:1fr 1fr;gap:0 28px;align-items:start;}
.fi{border:1px solid var(--bdr);border-radius:14px;margin-bottom:10px;overflow:hidden;background:#fff;transition:.15s;}
.fi.on{border-color:rgba(220,38,38,.3);box-shadow:0 4px 20px rgba(220,38,38,.07);}
.fi-q{width:100%;text-align:left;background:transparent;border:none;padding:20px 22px;font-size:14px;font-weight:700;color:var(--n);display:flex;justify-content:space-between;align-items:center;gap:12px;cursor:pointer;}
.fi-icon{width:26px;height:26px;border-radius:50%;flex-shrink:0;background:var(--bg);border:1px solid var(--bdr);display:flex;align-items:center;justify-content:center;color:var(--ac);font-size:18px;line-height:1;transition:transform .2s;}
.fi.on .fi-icon{transform:rotate(45deg);background:var(--ac);color:#fff;border-color:var(--ac);}
.fi-a{max-height:0;overflow:hidden;transition:.3s;color:var(--m);font-size:14px;line-height:1.75;}
.fi.on .fi-a{max-height:300px;padding:0 22px 22px;}
/* CTA */
.cta-section{background:linear-gradient(155deg,#1a0505 0%,#2d0a0a 100%);padding:96px 0;text-align:center;position:relative;overflow:hidden;}
.cta-section::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(220,38,38,.15) 0%,transparent 70%);}
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

/* ===== SHARED NAV CSS ===== */
.topbar{background:var(--n-dark);height:40px;display:flex;align-items:center;}
.topbar-inner{max-width:1200px;margin:0 auto;padding:0 28px;display:flex;justify-content:space-between;align-items:center;width:100%;}
.topbar-left{display:flex;gap:20px;}
.topbar-left a{font-size:12px;color:rgba(255,255,255,.6);}
.topbar-right{display:flex;gap:8px;}
.tb-btn{display:inline-flex;align-items:center;gap:6px;padding:5px 12px;border-radius:6px;font-size:11.5px;font-weight:700;transition:.15s;}
.tb-call{background:rgba(238,126,26,.15);color:#EE7E1A;border:1px solid rgba(238,126,26,.25);}
.tb-wa{background:rgba(37,211,102,.15);color:#25D366;border:1px solid rgba(37,211,102,.25);}
.tb-call:hover{background:#EE7E1A;color:#fff;}
.tb-wa:hover{background:#25D366;color:#fff;}
#hdr{background:rgba(255,255,255,.97);backdrop-filter:blur(14px);border-bottom:1px solid var(--bdr);transition:box-shadow .2s;}
#hdr.up{box-shadow:0 4px 32px rgba(10,22,40,.09);}
.nav{display:flex;align-items:center;justify-content:space-between;height:70px;gap:16px;}
.dmenu{display:flex;align-items:center;gap:2px;}
.dmenu>li{position:relative;}
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
.mc a:hover{color:var(--ac);padding-left:14px;}
.mc a:hover::before{height:13px;}
.mega.slim a{display:block;padding:9px 12px;font-size:13px;font-weight:500;color:var(--body);border-radius:8px;transition:.15s;}
.mega.slim a:hover{background:var(--bg);color:var(--ac);}
.mega.slim a small{display:block;font-size:11px;color:var(--s);font-weight:400;margin-top:1px;}
.navcta{display:flex;align-items:center;gap:10px;}
.btn-o{background:#EE7E1A;color:#fff;}.btn-o:hover{background:#d46e12;transform:translateY(-2px);}
.btn-sm{padding:10px 20px;font-size:13px;}
.hb{background:none;border:none;display:none;flex-direction:column;gap:5px;padding:4px;cursor:pointer;}
.hb span{display:block;width:22px;height:2px;background:var(--n);border-radius:1px;}
.mnav{display:none;position:fixed;inset:0;background:#fff;z-index:200;overflow-y:auto;padding:24px 22px 40px;}
.mnav.on{display:block;}
.ma{border-bottom:1px solid var(--bdr);}
.ma>button{width:100%;text-align:left;background:none;border:none;padding:15px 0;font-size:15px;font-weight:600;color:var(--n);display:flex;justify-content:space-between;cursor:pointer;}
.ms{display:none;padding:0 0 16px;}
.ma.on .ms{display:block;}
.ms a{display:block;padding:7px 0;font-size:14px;color:var(--m);}
.ms h6{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--n);margin:12px 0 4px;}
@media(max-width:960px){.hb{display:flex;}.dmenu,.navcta .btn-o{display:none;}}
/* ===== END NAV CSS ===== */

/* ===== FOOTER CSS ===== */
footer{background:var(--n-dark);padding:64px 0 0;}
.fg{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:40px;}
.fb-desc{font-size:13.5px;color:rgba(255,255,255,.4);line-height:1.7;margin:16px 0 20px;}
.socials{display:flex;gap:10px;}
.socials a{width:34px;height:34px;border-radius:8px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.5);transition:.15s;}
.socials a:hover{background:var(--o,#EE7E1A);color:#fff;border-color:var(--o,#EE7E1A);}
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
/* ===== END FOOTER CSS ===== */
`

const ld0 = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "YouTube Ads Management",
      "provider": {
        "@type": "Organization",
        "name": "Click Decoded",
        "url": "https://www.clickdecoded.com"
      },
      "description": "YouTube Ads that go beyond views — targeted video campaigns that drive leads, calls, and purchases. Click Decoded manages end-to-end YouTube advertising across India.",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": "YouTube Ads Management",
      "url": "https://www.clickdecoded.com/services/youtube-ads"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much should I spend on YouTube Ads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We recommend a minimum ad spend of ₹15,000–₹20,000/month to gather meaningful data. Brands seeing strong ROAS typically scale to ₹50,000–₹2,00,000/month. Our management fee starts at ₹25,000/month separately."
          }
        },
        {
          "@type": "Question",
          "name": "Do you produce the video creatives?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide detailed scripts, hook strategies, and creative briefs. If you don't have a video production team, we can connect you with trusted partners or edit your existing footage into ad-ready formats."
          }
        },
        {
          "@type": "Question",
          "name": "How long before I see results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Initial data (views, CTR, impressions) is visible within 48 hours of launch. Meaningful conversion data typically takes 3–4 weeks. Most clients see ROAS improvement by Month 2 as we optimise on real performance data."
          }
        },
        {
          "@type": "Question",
          "name": "What's the difference between YouTube Ads and Google Search Ads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Google Search Ads capture existing demand — people actively searching. YouTube Ads create demand — reaching people before they're searching, building awareness and intent. The strongest strategies use both in combination."
          }
        },
        {
          "@type": "Question",
          "name": "Can YouTube Ads work for local businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. YouTube allows geo-targeting down to a city or PIN code. Local service businesses — clinics, restaurants, real estate, education — all see strong results with well-targeted video campaigns."
          }
        },
        {
          "@type": "Question",
          "name": "What industries work best with YouTube Ads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "E-commerce, real estate, education, healthcare, automotive, and B2B SaaS all perform well. Essentially any business with a visual product or service that benefits from demonstration and storytelling."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle YouTube channel growth too?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our YouTube Ads service is focused on paid advertising. For organic channel growth and content strategy, that falls under our Blogging & Content service — we can combine both for maximum impact."
          }
        },
        {
          "@type": "Question",
          "name": "What reporting do I get?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Monthly visual reports covering Views, VTR, CTR, Conversions, CPA, and ROAS — with a written strategy summary and the plan for next month. Plus WhatsApp updates on significant campaign events."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How YouTube Ads Management India Works — Our Process",
      "description": "YouTube Ads that go beyond views — targeted video campaigns that drive leads, calls, and purchases. Click Decoded manages end-to-end YouTube advertising across India.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Audit & Strategy",
          "text": "We audit your current setup, competitors, and audience to build a campaign strategy with realistic ROAS projections."
        },
        {
          "@type": "HowToStep",
          "name": "Creative Briefing",
          "text": "Detailed scripts, hook frameworks, and thumbnail briefs engineered for the YouTube skip button and your target audience."
        },
        {
          "@type": "HowToStep",
          "name": "Launch & Track",
          "text": "Campaigns built with full conversion tracking, audience lists, and bid strategies. Live within 7–10 days of receiving creative."
        },
        {
          "@type": "HowToStep",
          "name": "Optimise & Scale",
          "text": "Weekly bid reviews, A/B test rotations, monthly strategy calls. Budget scaled to top-performing placements and creatives."
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
          "name": "YouTube Ads Management",
          "item": "https://www.clickdecoded.com/services/youtube-ads"
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
const heights=[18,25,22,32,40,36,48,55,62,70,78,92];
const sl=document.getElementById('sparkline');
if(sl){heights.forEach(h=>{const b=document.createElement('div');b.className='spark-bar';b.style.height=h+'%';sl.appendChild(b);});}
})();`

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld0 }} />
      <div className="breadcrumb"><div className="wrap"><div className="bc-list"><a href="/">Home</a><span style={{ opacity: '.4' }}>›</span><span>Paid Ads</span><span style={{ opacity: '.4' }}>›</span><span>YouTube Ads</span></div></div></div>
      <section className="hero">
<div className="wrap">
<div className="hero-grid">
<div>
<div className="hero-eyebrow">▶ Video Advertising · India's #1 Platform · 500M+ Users</div>
<h1>YouTube Ads That Drive <em>Real Results,</em> Not Just Views.</h1>
<p className="hero-desc">Most YouTube campaigns waste budget chasing vanity metrics. We build video ad systems that target real buyers, hold attention past the skip button, and convert views into leads and sales.</p>
<div className="hero-btns">
<a href="/contact" className="btn btn-ac">▶ Get Free Campaign Audit</a>
<a href="https://wa.me/919407000101" className="btn btn-ghost">💬 WhatsApp Us</a>
</div>
<div className="hero-proof" style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
<span className="proof-item"><strong>6.2×</strong> Average ROAS</span>
<span className="proof-item"><strong>4.8%</strong> Avg CTR</span>
<span className="proof-item"><strong>₹25K</strong> Starting / Month</span>
</div>
</div>
<div className="yt-mock">
<div className="mock-browser">
<div className="mock-dots"><span></span><span></span><span></span></div>
<div className="mock-url">ads.google.com — YouTube Campaign Dashboard</div>
</div>
<div className="video-player">
<div className="video-thumb">
<div className="play-btn">
<svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z" /></svg>
</div>
</div>
<div className="ad-badge">Ad</div>
<div className="skip-btn">Skip Ad ›› 3s</div>
<div className="progress-bar"><div className="progress-fill"></div></div>
</div>
<div className="camp-header">
<div className="camp-title">Campaign: Brand Awareness Q4 · In-Stream</div>
<div className="camp-status">● Active</div>
</div>
<div className="mock-metrics">
<div className="mock-metric"><div className="mm-icon">👁️</div><div className="mm-val">2.4M</div><div className="mm-label">Views</div></div>
<div className="mock-metric"><div className="mm-icon">🖱️</div><div className="mm-val">4.8%</div><div className="mm-label">CTR</div></div>
<div className="mock-metric"><div className="mm-icon">📈</div><div className="mm-val">6.2×</div><div className="mm-label">ROAS</div></div>
</div>
<div className="mock-chart">
<div className="chart-label">Views &amp; Conversions — Last 30 Days</div>
<div className="sparkline" id="sparkline"></div>
</div>
</div>
</div>
</div>
</section>
      <div className="stats-strip">
<div className="stats-inner">
<div className="stat-box"><div className="stat-n">2.4M+</div><div className="stat-l">Views Delivered</div></div>
<div className="stat-box"><div className="stat-n">6.2×</div><div className="stat-l">Average ROAS</div></div>
<div className="stat-box"><div className="stat-n">₹0.40</div><div className="stat-l">Avg Cost Per View</div></div>
<div className="stat-box"><div className="stat-n">₹25K</div><div className="stat-l">Starting / Month</div></div>
</div>
</div>
      <section>
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag">What's Included</div>
<h2>Full-Stack YouTube Ad Management.</h2>
<p>From creative strategy to bid optimisation — every element of your campaigns handled by specialists.</p>
</div>
<div className="inc-grid">
<div className="inc-card rv"><div className="inc-icon">🎯</div><h3>Audience Targeting &amp; Segmentation</h3><p>Custom intent audiences, remarketing lists, in-market segments, and demographic layering to reach buyers — not just scrollers.</p></div>
<div className="inc-card rv2"><div className="inc-icon">🎬</div><h3>Creative Strategy &amp; Direction</h3><p>Script briefs, hook strategies, and CTA frameworks built for the YouTube skip button. We engineer the first 5 seconds to keep viewers watching.</p></div>
<div className="inc-card rv3"><div className="inc-icon">📊</div><h3>Campaign Architecture &amp; Setup</h3><p>In-Stream, Discovery, Bumper, and Shorts configured with proper bid strategies, budgets, and conversion tracking from day one.</p></div>
<div className="inc-card rv"><div className="inc-icon">🔄</div><h3>A/B Testing &amp; Creative Rotation</h3><p>Systematic testing of thumbnails, hooks, CTAs, and audience segments to identify top performers and scale what converts.</p></div>
<div className="inc-card rv2"><div className="inc-icon">📈</div><h3>Bid &amp; Budget Optimisation</h3><p>CPV, Target CPA, and Maximise Conversions bid strategies managed weekly with spend shifted to highest-ROAS placements.</p></div>
<div className="inc-card rv3"><div className="inc-icon">📋</div><h3>Monthly Performance Reporting</h3><p>Clear visual reports covering Views, VTR, CTR, Conversions, CPA, and ROAS — with strategy commentary and next-month plan.</p></div>
</div>
</div>
</section>
      <section className="formats-section">
<div className="wrap">
<div className="sec-h rv" style={{ marginBottom: '40px' }}>
<h2 style={{ color: '#fff' }}>Every YouTube Ad Format,<br />Used Strategically.</h2>
<p style={{ color: 'rgba(255,255,255,.55)' }}>We don't just run one ad type — we choose the right format for each campaign objective.</p>
</div>
<div className="formats-grid">
<div className="fmt-card rv"><div className="fmt-top"><div className="fmt-icon">⏩</div><div className="fmt-tag">Skippable</div></div><h3>In-Stream Skippable</h3><p>Play before or during videos. You only pay when viewers watch 30s+ or click. Best for storytelling and awareness campaigns.</p></div>
<div className="fmt-card rv2"><div className="fmt-top"><div className="fmt-icon">🔒</div><div className="fmt-tag">Non-Skip</div></div><h3>Non-Skippable In-Stream</h3><p>15-second ads viewers must watch in full. Maximum message control — ideal for product launches and high-impact brand moments.</p></div>
<div className="fmt-card rv3"><div className="fmt-top"><div className="fmt-icon">⚡</div><div className="fmt-tag">6 Seconds</div></div><h3>Bumper Ads</h3><p>6-second non-skippable ads perfect for retargeting and brand recall. High-frequency, low-cost, ideal as part of a full-funnel strategy.</p></div>
<div className="fmt-card rv"><div className="fmt-top"><div className="fmt-icon">🔍</div><div className="fmt-tag">Discovery</div></div><h3>Video Discovery Ads</h3><p>Appear in YouTube search results and suggested feeds. Capture high-intent viewers actively searching for your category.</p></div>
<div className="fmt-card rv2"><div className="fmt-top"><div className="fmt-icon">📱</div><div className="fmt-tag">Shorts</div></div><h3>YouTube Shorts Ads</h3><p>Vertical, full-screen ads in the Shorts feed. Massive reach, low CPM — ideal for product demos and time-sensitive offers.</p></div>
<div className="fmt-card rv3"><div className="fmt-top"><div className="fmt-icon">🎯</div><div className="fmt-tag">Retargeting</div></div><h3>YouTube Remarketing</h3><p>Re-engage past website visitors and channel viewers with tailored messaging that brings warm audiences back to convert.</p></div>
</div>
</div>
</section>
      <section style={{ background: 'var(--bg)' }}>
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag">Our Process</div>
<h2>Live in 2 Weeks.<br />Optimised Every Month.</h2>
<p>A structured launch process gets your campaigns live fast, then continuous optimisation compounds results.</p>
</div>
<div className="steps-grid">
<div className="step rv"><div className="step-num">01</div><h4>Audit &amp; Strategy</h4><p>We audit your current setup, competitors, and audience to build a campaign strategy with realistic ROAS projections.</p></div>
<div className="step rv2"><div className="step-num">02</div><h4>Creative Briefing</h4><p>Detailed scripts, hook frameworks, and thumbnail briefs engineered for the YouTube skip button and your target audience.</p></div>
<div className="step rv3"><div className="step-num">03</div><h4>Launch &amp; Track</h4><p>Campaigns built with full conversion tracking, audience lists, and bid strategies. Live within 7–10 days of receiving creative.</p></div>
<div className="step rv3"><div className="step-num">04</div><h4>Optimise &amp; Scale</h4><p>Weekly bid reviews, A/B test rotations, monthly strategy calls. Budget scaled to top-performing placements and creatives.</p></div>
</div>
</div>
</section>
      <section style={{ background: '#fff' }}>
<div className="wrap">
<div className="sec-h rv"><h2>Frequently Asked Questions</h2></div>
<div className="faq-2col">
<div>
<div className="fi"><button className="fi-q">How much should I spend on YouTube Ads?<div className="fi-icon">+</div></button><div className="fi-a">We recommend a minimum ad spend of ₹15,000–₹20,000/month to gather meaningful data. Brands seeing strong ROAS typically scale to ₹50,000–₹2,00,000/month. Our management fee starts at ₹25,000/month separately.</div></div>
<div className="fi"><button className="fi-q">Do you produce the video creatives?<div className="fi-icon">+</div></button><div className="fi-a">We provide detailed scripts, hook strategies, and creative briefs. If you don't have a video production team, we can connect you with trusted partners or edit your existing footage into ad-ready formats.</div></div>
<div className="fi"><button className="fi-q">How long before I see results?<div className="fi-icon">+</div></button><div className="fi-a">Initial data (views, CTR, impressions) is visible within 48 hours of launch. Meaningful conversion data typically takes 3–4 weeks. Most clients see ROAS improvement by Month 2 as we optimise on real performance data.</div></div>
<div className="fi"><button className="fi-q">What's the difference between YouTube Ads and Google Search Ads?<div className="fi-icon">+</div></button><div className="fi-a">Google Search Ads capture existing demand — people actively searching. YouTube Ads create demand — reaching people before they're searching, building awareness and intent. The strongest strategies use both in combination.</div></div>
</div>
<div>
<div className="fi"><button className="fi-q">Can YouTube Ads work for local businesses?<div className="fi-icon">+</div></button><div className="fi-a">Yes. YouTube allows geo-targeting down to a city or PIN code. Local service businesses — clinics, restaurants, real estate, education — all see strong results with well-targeted video campaigns.</div></div>
<div className="fi"><button className="fi-q">What industries work best with YouTube Ads?<div className="fi-icon">+</div></button><div className="fi-a">E-commerce, real estate, education, healthcare, automotive, and B2B SaaS all perform well. Essentially any business with a visual product or service that benefits from demonstration and storytelling.</div></div>
<div className="fi"><button className="fi-q">Do you handle YouTube channel growth too?<div className="fi-icon">+</div></button><div className="fi-a">Our YouTube Ads service is focused on paid advertising. For organic channel growth and content strategy, that falls under our Blogging &amp; Content service — we can combine both for maximum impact.</div></div>
<div className="fi"><button className="fi-q">What reporting do I get?<div className="fi-icon">+</div></button><div className="fi-a">Monthly visual reports covering Views, VTR, CTR, Conversions, CPA, and ROAS — with a written strategy summary and the plan for next month. Plus WhatsApp updates on significant campaign events.</div></div>
</div>
</div>
</div>
</section>
      <div className="wrap" style={{ padding: '40px 28px', borderTop: '1px solid var(--bdr)' }}>
<div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--s)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '16px' }}>Related Services</div>
<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
<a href="/services/google-ads" className="rel-link">🔍 Google Search Ads</a>
<a href="/services/meta-ads" className="rel-link">📘 Meta / Facebook Ads</a>
<a href="/services/linkedin-ads" className="rel-link">💼 LinkedIn Ads</a>
<a href="/services/retargeting" className="rel-link">🔄 Retargeting Ads</a>
<a href="/services/ai-ad-creatives" className="rel-link">🤖 AI Ad Creatives</a>
<a href="/services/influencer-video" className="rel-link">🎬 Influencer Video</a>
</div>
</div>
      <section className="cta-section">
<div className="wrap">
<h2>Ready to Make YouTube<br />Your Best Sales Channel?</h2>
<p>Get a free audit of your current campaigns — or a strategy plan if you're starting from scratch.</p>
<div className="cta-btns">
<a href="/contact" className="btn btn-ac">▶ Get Free YouTube Audit</a>
<a href="https://wa.me/919407000101" className="btn btn-wa">💬 WhatsApp Now</a>
</div>
</div>
</section>
      <PageScript id="services-youtube-ads-0" code={js0} />
    </>
  )
}
