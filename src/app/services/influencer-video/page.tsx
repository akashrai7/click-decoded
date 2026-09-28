/* eslint-disable */
// src/app/services/influencer-video/page.tsx — generated from influencer-video.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "Influencer Video Marketing India | Click Decoded",
  description: "Influencer video marketing campaigns managed end-to-end. Click Decoded connects brands with the right creators on Instagram, YouTube, and Reels — from.",
  alternates: { canonical: "/services/influencer-video" },
}

const css = `
:root{
  --ac:#C026D3;--ac2:#a21caf;--ac-rgb:192,38,211;
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
.hero{background:linear-gradient(155deg,#160520 0%,#280a3a 45%,#160520 100%);padding:96px 0 80px;position:relative;overflow:hidden;}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 60% at 70% 30%,rgba(192,38,211,.2) 0%,transparent 65%),radial-gradient(ellipse 35% 40% at 5% 80%,rgba(192,38,211,.07) 0%,transparent 60%);}
.hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;position:relative;z-index:2;}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;background:rgba(192,38,211,.12);border:1px solid rgba(192,38,211,.3);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#e879f9;margin-bottom:20px;}
.hero h1{font-size:48px;color:#fff;line-height:1.06;letter-spacing:-.04em;margin-bottom:20px;}
.hero h1 em{font-style:normal;background:linear-gradient(135deg,#e879f9,#c026d3);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-desc{font-size:17px;color:rgba(255,255,255,.62);line-height:1.7;margin-bottom:32px;max-width:460px;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:36px;}
.hero-proof{display:flex;gap:24px;flex-wrap:wrap;}
.proof-item{font-size:13px;color:rgba(255,255,255,.5);}
.proof-item strong{color:#fff;font-weight:700;}
/* INFLUENCER CAMPAIGN MOCK */
.inf-mock{border-radius:20px;overflow:hidden;box-shadow:0 28px 70px rgba(0,0,0,.65);background:#100118;border:1px solid rgba(192,38,211,.22);}
.mock-browser{background:rgba(255,255,255,.05);padding:10px 14px;border-bottom:1px solid rgba(255,255,255,.07);display:flex;align-items:center;gap:10px;}
.mock-dots{display:flex;gap:5px;}
.mock-dots span{width:9px;height:9px;border-radius:50%;}
.mock-dots span:nth-child(1){background:#ff5f57;}
.mock-dots span:nth-child(2){background:#ffbd2e;}
.mock-dots span:nth-child(3){background:#28c840;}
.mock-url{flex:1;background:rgba(255,255,255,.07);border-radius:6px;padding:5px 12px;font-size:11px;color:rgba(255,255,255,.35);}
.inf-header{background:rgba(192,38,211,.1);border-bottom:1px solid rgba(192,38,211,.2);padding:10px 16px;display:flex;align-items:center;justify-content:space-between;}
.inf-title{font-size:12px;font-weight:700;color:rgba(255,255,255,.75);}
.inf-badge{font-size:10px;font-weight:700;padding:3px 9px;border-radius:5px;background:rgba(192,38,211,.2);border:1px solid rgba(192,38,211,.35);color:#e879f9;}
/* Campaign summary bar */
.inf-summary{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,.05);border-bottom:1px solid rgba(255,255,255,.06);}
.inf-sum-item{padding:10px 12px;background:#100118;text-align:center;}
.infsv{font-size:16px;font-weight:900;color:#e879f9;line-height:1;}
.infsl{font-size:9px;color:rgba(255,255,255,.3);margin-top:2px;text-transform:uppercase;letter-spacing:.05em;}
/* Creator cards */
.inf-creators{padding:10px 14px;display:flex;flex-direction:column;gap:7px;}
.creator-label{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:rgba(255,255,255,.25);margin-bottom:2px;}
.creator-card{display:flex;align-items:center;gap:10px;padding:9px 10px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:10px;}
.creator-card.live{border-color:rgba(192,38,211,.3);background:rgba(192,38,211,.05);}
.creator-avatar{width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;border:2px solid rgba(192,38,211,.3);}
.creator-info{flex:1;}
.creator-name{font-size:11px;font-weight:700;color:rgba(255,255,255,.85);}
.creator-meta{display:flex;gap:8px;margin-top:2px;}
.creator-meta span{font-size:9px;color:rgba(255,255,255,.35);}
.creator-meta b{color:rgba(255,255,255,.6);font-weight:600;}
.creator-right{text-align:right;}
.creator-views{font-size:12px;font-weight:800;color:#fff;}
.creator-eng{font-size:9px;color:rgba(255,255,255,.35);margin-top:1px;}
.creator-status{font-size:9px;font-weight:700;padding:2px 8px;border-radius:4px;margin-top:3px;display:inline-block;}
.cs-live{background:rgba(192,38,211,.15);border:1px solid rgba(192,38,211,.3);color:#e879f9;}
.cs-done{background:rgba(74,222,128,.1);border:1px solid rgba(74,222,128,.2);color:#4ade80;}
.cs-brief{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);color:rgba(255,255,255,.4);}
/* Bottom metrics */
.inf-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,.05);border-top:1px solid rgba(255,255,255,.06);}
.inf-metric{padding:11px 12px;background:#100118;text-align:center;}
.infmv{font-size:17px;font-weight:900;color:#fff;letter-spacing:-.02em;line-height:1;}
.infml{font-size:9px;color:rgba(255,255,255,.35);margin-top:3px;text-transform:uppercase;letter-spacing:.05em;}
/* STATS */
.stats-strip{background:var(--ac);}
.stats-inner{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(0,0,0,.2);}
.stat-box{padding:32px 24px;text-align:center;background:var(--ac);}
.stat-n{font-size:40px;font-weight:900;color:#fff;line-height:1;letter-spacing:-.03em;}
.stat-l{font-size:12px;color:rgba(255,255,255,.8);margin-top:6px;font-weight:500;text-transform:uppercase;letter-spacing:.06em;}
/* SECTIONS */
.sec-h{text-align:center;max-width:640px;margin:0 auto 52px;}
.sec-tag{display:inline-flex;padding:5px 13px;border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:10px;background:rgba(192,38,211,.08);border:1px solid rgba(192,38,211,.18);color:var(--ac);}
.sec-h h2{font-size:36px;margin-bottom:14px;}
.sec-h p{font-size:16px;color:var(--m);line-height:1.65;}
.inc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.inc-card{background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:28px 24px;transition:.2s;}
.inc-card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(192,38,211,.08);border-color:rgba(192,38,211,.2);}
.inc-icon{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:16px;background:rgba(192,38,211,.07);border:1px solid rgba(192,38,211,.12);}
.inc-card h3{font-size:17px;margin-bottom:10px;}
.inc-card p{font-size:13.5px;color:var(--m);line-height:1.65;}
.dark-section{background:var(--n-dark);padding:88px 0;}
.formats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:1000px;margin:0 auto;}
.fmt-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:24px;transition:.2s;}
.fmt-card:hover{border-color:rgba(192,38,211,.35);background:rgba(192,38,211,.06);transform:translateY(-2px);}
.fmt-top{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px;}
.fmt-icon{font-size:26px;}
.fmt-tag{font-size:10px;font-weight:700;padding:3px 8px;border-radius:5px;background:rgba(192,38,211,.18);border:1px solid rgba(192,38,211,.3);color:#e879f9;}
.fmt-card h3{font-size:15px;font-weight:700;color:#fff;margin-bottom:6px;}
.fmt-card p{font-size:13px;color:rgba(255,255,255,.5);line-height:1.6;}
.bg-subtle{background:var(--bg);}
.steps-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative;}
.steps-grid::before{content:'';position:absolute;top:34px;left:12%;right:12%;height:2px;background:linear-gradient(90deg,var(--ac),var(--ac2));z-index:0;opacity:.4;}
.step{text-align:center;padding:0 16px;position:relative;z-index:1;}
.step-num{width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,var(--ac),var(--ac2));color:#fff;font-size:20px;font-weight:900;display:flex;align-items:center;justify-content:center;margin:0 auto 18px;box-shadow:0 8px 24px rgba(192,38,211,.3);}
.step h4{font-size:15px;margin-bottom:7px;}
.step p{font-size:13px;color:var(--m);line-height:1.6;}
.faq-2col{display:grid;grid-template-columns:1fr 1fr;gap:0 28px;align-items:start;}
.fi{border:1px solid var(--bdr);border-radius:14px;margin-bottom:10px;overflow:hidden;background:#fff;transition:.15s;}
.fi.on{border-color:rgba(192,38,211,.3);box-shadow:0 4px 20px rgba(192,38,211,.07);}
.fi-q{width:100%;text-align:left;background:transparent;border:none;padding:20px 22px;font-size:14px;font-weight:700;color:var(--n);display:flex;justify-content:space-between;align-items:center;gap:12px;cursor:pointer;}
.fi-icon{width:26px;height:26px;border-radius:50%;flex-shrink:0;background:var(--bg);border:1px solid var(--bdr);display:flex;align-items:center;justify-content:center;color:var(--ac);font-size:18px;line-height:1;transition:transform .2s;}
.fi.on .fi-icon{transform:rotate(45deg);background:var(--ac);color:#fff;border-color:var(--ac);}
.fi-a{max-height:0;overflow:hidden;transition:.3s;color:var(--m);font-size:14px;line-height:1.75;}
.fi.on .fi-a{max-height:300px;padding:0 22px 22px;}
.cta-section{background:linear-gradient(155deg,#160520 0%,#280a3a 100%);padding:96px 0;text-align:center;position:relative;overflow:hidden;}
.cta-section::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(192,38,211,.15) 0%,transparent 70%);}
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
      "name": "Influencer & UGC Video",
      "provider": {
        "@type": "Organization",
        "name": "Click Decoded",
        "url": "https://www.clickdecoded.com"
      },
      "description": "Influencer video marketing campaigns managed end-to-end. Click Decoded connects brands with the right creators on Instagram, YouTube, and Reels — from brief to published content with full performance reporting.",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": "Influencer & UGC Video",
      "url": "https://www.clickdecoded.com/services/influencer-video"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do you ensure creators actually promote the brand correctly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Every creator receives a detailed brief with key messaging, mandatory inclusions, restricted phrases, and visual references. Content is reviewed and approved before publishing — we reject and request revisions on anything that doesn't meet the brief. The approval step is non-negotiable in our workflow."
          }
        },
        {
          "@type": "Question",
          "name": "How do you vet for fake followers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We run all shortlisted creators through HypeAuditor and Social Blade analysis — checking audience authenticity scores, follower growth patterns, engagement rate consistency, and geographic audience distribution. Any creator with suspicious metrics is removed from consideration before the client sees the shortlist."
          }
        },
        {
          "@type": "Question",
          "name": "What's the minimum campaign budget?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our minimum campaign engagement is ₹25,000 which covers our management fee plus creator fees for 2–3 micro-influencer collaborations. For mid-tier and macro campaigns, total budgets typically range from ₹75,000 to ₹5,00,000+ depending on creator tier, deliverable count, and platform mix."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle the influencer contracts and payments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — we draft and execute creator agreements, handle payment processing to creators, ensure GST compliance on influencer invoices, and manage product delivery or barter arrangements. You deal with us; we deal with the creators. Full legal and financial documentation provided for each engagement."
          }
        },
        {
          "@type": "Question",
          "name": "Can we use the creator content in our own ads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usage rights for paid amplification and brand-owned channel repurposing are included in our standard creator agreements. For broad or extended usage (TV, OOH, or long-term digital campaigns), we negotiate extended usage rights with the creator upfront — typically a modest additional fee agreed before the campaign begins."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to run a campaign?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "From brief to first content live is typically 10–14 days for micro and mid-tier campaigns. Macro influencer campaigns may require 3–4 weeks due to longer negotiation and approval timelines. We advise briefing at least 3 weeks ahead of any campaign launch date to allow sufficient time for creator selection, briefing, and content review."
          }
        },
        {
          "@type": "Question",
          "name": "Can you run campaigns for regulated industries like healthcare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — we've managed influencer campaigns for healthcare, finance, and legal brands with strict ASC and ASCI compliance requirements. All content for regulated industries is reviewed by our compliance checklist and, where required, routed through your legal team's approval process before being submitted to creators for filming."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work with regional/Tier 2 city creators?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely — our network includes strong creator representation in Indore, Bhopal, Jaipur, Lucknow, Nagpur, and Surat, as well as language-specific creators in Hindi, Marathi, Gujarati, Tamil, and Kannada. Regional creator campaigns often deliver 40–60% lower CPV than metro campaigns with comparable engagement quality."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How Influencer Video Marketing India Works — Our Process",
      "description": "Influencer video marketing campaigns managed end-to-end. Click Decoded connects brands with the right creators on Instagram, YouTube, and Reels — from brief to published content with full performance ",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Campaign Brief",
          "text": "We capture your brand objectives, target audience, key message, budget, and preferred creator aesthetic. A campaign strategy deck is presented within 48 hours with recommended creator tiers and platform mix."
        },
        {
          "@type": "HowToStep",
          "name": "Creator Matching",
          "text": "Shortlist of 8–15 vetted creators presented with audience analytics, engagement data, past brand work, and our team's qualitative assessment — you approve the final selection before any outreach begins."
        },
        {
          "@type": "HowToStep",
          "name": "Brief, Review & Approve",
          "text": "Creator briefs issued, content drafts collected and reviewed by our team, client approval sought on final content before publishing. Revision cycles handled by us — zero direct creator management on your side."
        },
        {
          "@type": "HowToStep",
          "name": "Publish & Report",
          "text": "Content goes live on agreed dates. Post-campaign performance data collected at 7 and 30 days. Full report delivered covering views, engagement, link clicks, and campaign ROAS with recommendations for future rounds."
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
          "name": "Influencer & UGC Video",
          "item": "https://www.clickdecoded.com/services/influencer-video"
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
      <div className="breadcrumb"><div className="wrap"><div className="bc-list"><a href="/">Home</a><span style={{ opacity: '.4' }}>›</span><span>Content</span><span style={{ opacity: '.4' }}>›</span><span>Influencer Video</span></div></div></div>
      <section className="hero">
<div className="wrap">
<div className="hero-grid">
<div>
<div className="hero-eyebrow">🎬 Creator Campaigns · Instagram · YouTube · Reels</div>
<h1>The Right Creator. The Right Audience. <em>Real Results.</em></h1>
<p className="hero-desc">Influencer campaigns managed end-to-end — creator sourcing, brief writing, content approval, publishing, and performance reporting. We match your brand with creators whose audiences actually buy, not just watch.</p>
<div className="hero-btns">
<a href="/contact" className="btn btn-ac">🎬 Start a Creator Campaign</a>
<a href="https://wa.me/919407000101" className="btn btn-ghost">💬 WhatsApp Us</a>
</div>
<div className="hero-proof">
<span className="proof-item"><strong>500+</strong> Creator Network</span>
<span className="proof-item"><strong>4.8%</strong> Avg Engagement Rate</span>
<span className="proof-item"><strong>₹25K</strong> Starting / Campaign</span>
</div>
</div>

<div className="inf-mock">
<div className="mock-browser">
<div className="mock-dots"><span></span><span></span><span></span></div>
<div className="mock-url">Campaign Dashboard — Click Decoded</div>
</div>
<div className="inf-header">
<div className="inf-title">🎬 Campaign: Festive Fashion Brand — Oct 2025</div>
<div className="inf-badge">6 Creators · Active</div>
</div>
<div className="inf-summary">
<div className="inf-sum-item"><div className="infsv">2.4M</div><div className="infsl">Total Views</div></div>
<div className="inf-sum-item"><div className="infsv">4.8%</div><div className="infsl">Avg Engagement</div></div>
<div className="inf-sum-item"><div className="infsv">₹1.2</div><div className="infsl">Cost Per View</div></div>
</div>
<div className="inf-creators">
<div className="creator-label">Creator Deliverables</div>
<div className="creator-card live">
<div className="creator-avatar">👩</div>
<div className="creator-info">
<div className="creator-name">@priya.styles</div>
<div className="creator-meta"><span>Followers: <b>284K</b></span><span>Niche: <b>Fashion</b></span></div>
</div>
<div className="creator-right">
<div className="creator-views">842K views</div>
<div className="creator-eng">5.2% eng rate</div>
<div className="creator-status cs-live">Live ✓</div>
</div>
</div>
<div className="creator-card live">
<div className="creator-avatar">🧑</div>
<div className="creator-info">
<div className="creator-name">@rahul.creates</div>
<div className="creator-meta"><span>Followers: <b>118K</b></span><span>Niche: <b>Lifestyle</b></span></div>
</div>
<div className="creator-right">
<div className="creator-views">394K views</div>
<div className="creator-eng">4.1% eng rate</div>
<div className="creator-status cs-done">Posted ✓</div>
</div>
</div>
<div className="creator-card">
<div className="creator-avatar">👩</div>
<div className="creator-info">
<div className="creator-name">@meera.looks</div>
<div className="creator-meta"><span>Followers: <b>67K</b></span><span>Niche: <b>Beauty</b></span></div>
</div>
<div className="creator-right">
<div className="creator-views">—</div>
<div className="creator-eng">Brief sent</div>
<div className="creator-status cs-brief">In Brief</div>
</div>
</div>
</div>
<div className="inf-metrics">
<div className="inf-metric"><div className="infmv">2.4M</div><div className="infml">Views Delivered</div></div>
<div className="inf-metric"><div className="infmv">6/6</div><div className="infml">Creators On Track</div></div>
<div className="inf-metric"><div className="infmv">₹25K</div><div className="infml">Campaign Budget</div></div>
</div>
</div>
</div>
</div>
</section>
      <div className="stats-strip">
<div className="stats-inner">
<div className="stat-box"><div className="stat-n">500+</div><div className="stat-l">Creator Network</div></div>
<div className="stat-box"><div className="stat-n">4.8%</div><div className="stat-l">Avg Engagement Rate</div></div>
<div className="stat-box"><div className="stat-n">₹1.2</div><div className="stat-l">Avg Cost Per View</div></div>
<div className="stat-box"><div className="stat-n">₹25K</div><div className="stat-l">Starting / Campaign</div></div>
</div>
</div>
      <section>
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag">What's Included</div>
<h2>Full-Campaign Management,<br />Not Just Creator Introductions.</h2>
<p>Most agencies stop at connecting brands with creators. We manage every step — brief to published content to performance report.</p>
</div>
<div className="inc-grid">
<div className="inc-card rv"><div className="inc-icon">🔍</div><h3>Creator Sourcing &amp; Vetting</h3><p>We identify creators from our 500+ network filtered by niche, audience demographics, engagement rate, and fake-follower audit. You only see creators whose real audiences match your target customer profile.</p></div>
<div className="inc-card rv2"><div className="inc-icon">📋</div><h3>Brief &amp; Script Writing</h3><p>Detailed creative briefs written for each creator — brand messaging, key points to cover, CTA requirements, and visual guidelines — structured to give creators creative freedom while hitting your brand objectives.</p></div>
<div className="inc-card rv3"><div className="inc-icon">✅</div><h3>Content Review &amp; Approval</h3><p>Every piece of content reviewed for brand compliance, accuracy, and messaging before it goes live. We manage the feedback loop with creators — no awkward client-creator conversations required on your end.</p></div>
<div className="inc-card rv"><div className="inc-icon">📅</div><h3>Publishing Coordination</h3><p>Creator posting schedules aligned with your campaign calendar — product launches, seasonal moments, and paid amplification windows coordinated across all creators for maximum simultaneous impact.</p></div>
<div className="inc-card rv2"><div className="inc-icon">📊</div><h3>Performance Reporting</h3><p>Post-campaign report covering views, reach, engagement rate, saves, story swipe-ups, and link clicks per creator — with ROAS analysis if campaign includes promo codes or UTM-tracked landing pages.</p></div>
<div className="inc-card rv3"><div className="inc-icon">⚡</div><h3>Paid Amplification</h3><p>Top-performing creator posts boosted as paid ads via Meta's partnership ad feature — converting organic viral content into a paid performance channel for a fraction of standard ad creative costs.</p></div>
</div>
</div>
</section>
      <section className="dark-section">
<div className="wrap">
<div className="sec-h rv" style={{ marginBottom: '40px' }}>
<h2 style={{ color: '#fff' }}>Every Creator Tier,<br />Every Platform.</h2>
<p style={{ color: 'rgba(255,255,255,.55)' }}>Nano to macro — we build campaigns mixing creator tiers strategically to maximise reach, authenticity, and conversion simultaneously.</p>
</div>
<div className="formats-grid">
<div className="fmt-card rv"><div className="fmt-top"><div className="fmt-icon">🌟</div><div className="fmt-tag">Macro</div></div><h3>Macro Influencers (500K+)</h3><p>High-reach brand awareness campaigns with creators who have 500K–5M followers — ideal for product launches, brand introductions, and moments where maximum eyeballs are the primary objective.</p></div>
<div className="fmt-card rv2"><div className="fmt-top"><div className="fmt-icon">⭐</div><div className="fmt-tag">Mid-Tier</div></div><h3>Mid-Tier Creators (50K–500K)</h3><p>The sweet spot for most brand campaigns — strong reach with above-average engagement rates (3–7%) and audiences that trust the creator's recommendations. Best ROI per rupee of creator spend.</p></div>
<div className="fmt-card rv3"><div className="fmt-top"><div className="fmt-icon">🎯</div><div className="fmt-tag">Micro</div></div><h3>Micro Influencers (5K–50K)</h3><p>Hyper-niche audiences with 8–15% engagement rates and high purchase intent. Ideal for B2B, local market campaigns, and products where niche credibility outweighs mass reach.</p></div>
<div className="fmt-card rv"><div className="fmt-top"><div className="fmt-icon">📸</div><div className="fmt-tag">Instagram</div></div><h3>Instagram Reels &amp; Stories</h3><p>Short-form video content on Reels for reach + Stories for conversion — the most common format combination for product campaigns, brand awareness, and direct-to-consumer launches in India.</p></div>
<div className="fmt-card rv2"><div className="fmt-top"><div className="fmt-icon">▶</div><div className="fmt-tag">YouTube</div></div><h3>YouTube Integrations</h3><p>Mid-roll brand integrations, dedicated product reviews, and unboxing videos — long-form YouTube content delivers the highest purchase intent of any influencer format, especially for tech and lifestyle products.</p></div>
<div className="fmt-card rv3"><div className="fmt-top"><div className="fmt-icon">🎵</div><div className="fmt-tag">Regional</div></div><h3>Regional &amp; Vernacular Creators</h3><p>Hindi, Marathi, Tamil, Kannada, and Gujarati language creator campaigns — reaching Tier 2 and Tier 3 Indian audiences with culturally native content that outperforms English-language campaigns in those markets.</p></div>
</div>
</div>
</section>
      <section className="bg-subtle">
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag">Our Process</div>
<h2>Brief to Published Content<br />in 10–14 Days.</h2>
<p>A structured campaign workflow that eliminates the chaos typically associated with influencer marketing — clear timelines, managed communications, on-brief content every time.</p>
</div>
<div className="steps-grid">
<div className="step rv"><div className="step-num">01</div><h4>Campaign Brief</h4><p>We capture your brand objectives, target audience, key message, budget, and preferred creator aesthetic. A campaign strategy deck is presented within 48 hours with recommended creator tiers and platform mix.</p></div>
<div className="step rv2"><div className="step-num">02</div><h4>Creator Matching</h4><p>Shortlist of 8–15 vetted creators presented with audience analytics, engagement data, past brand work, and our team's qualitative assessment — you approve the final selection before any outreach begins.</p></div>
<div className="step rv3"><div className="step-num">03</div><h4>Brief, Review &amp; Approve</h4><p>Creator briefs issued, content drafts collected and reviewed by our team, client approval sought on final content before publishing. Revision cycles handled by us — zero direct creator management on your side.</p></div>
<div className="step rv3"><div className="step-num">04</div><h4>Publish &amp; Report</h4><p>Content goes live on agreed dates. Post-campaign performance data collected at 7 and 30 days. Full report delivered covering views, engagement, link clicks, and campaign ROAS with recommendations for future rounds.</p></div>
</div>
</div>
</section>
      <section>
<div className="wrap">
<div className="sec-h rv"><h2>Frequently Asked Questions</h2></div>
<div className="faq-2col">
<div>
<div className="fi"><button className="fi-q">How do you ensure creators actually promote the brand correctly?<div className="fi-icon">+</div></button><div className="fi-a">Every creator receives a detailed brief with key messaging, mandatory inclusions, restricted phrases, and visual references. Content is reviewed and approved before publishing — we reject and request revisions on anything that doesn't meet the brief. The approval step is non-negotiable in our workflow.</div></div>
<div className="fi"><button className="fi-q">How do you vet for fake followers?<div className="fi-icon">+</div></button><div className="fi-a">We run all shortlisted creators through HypeAuditor and Social Blade analysis — checking audience authenticity scores, follower growth patterns, engagement rate consistency, and geographic audience distribution. Any creator with suspicious metrics is removed from consideration before the client sees the shortlist.</div></div>
<div className="fi"><button className="fi-q">What's the minimum campaign budget?<div className="fi-icon">+</div></button><div className="fi-a">Our minimum campaign engagement is ₹25,000 which covers our management fee plus creator fees for 2–3 micro-influencer collaborations. For mid-tier and macro campaigns, total budgets typically range from ₹75,000 to ₹5,00,000+ depending on creator tier, deliverable count, and platform mix.</div></div>
<div className="fi"><button className="fi-q">Do you handle the influencer contracts and payments?<div className="fi-icon">+</div></button><div className="fi-a">Yes — we draft and execute creator agreements, handle payment processing to creators, ensure GST compliance on influencer invoices, and manage product delivery or barter arrangements. You deal with us; we deal with the creators. Full legal and financial documentation provided for each engagement.</div></div>
</div>
<div>
<div className="fi"><button className="fi-q">Can we use the creator content in our own ads?<div className="fi-icon">+</div></button><div className="fi-a">Usage rights for paid amplification and brand-owned channel repurposing are included in our standard creator agreements. For broad or extended usage (TV, OOH, or long-term digital campaigns), we negotiate extended usage rights with the creator upfront — typically a modest additional fee agreed before the campaign begins.</div></div>
<div className="fi"><button className="fi-q">How long does it take to run a campaign?<div className="fi-icon">+</div></button><div className="fi-a">From brief to first content live is typically 10–14 days for micro and mid-tier campaigns. Macro influencer campaigns may require 3–4 weeks due to longer negotiation and approval timelines. We advise briefing at least 3 weeks ahead of any campaign launch date to allow sufficient time for creator selection, briefing, and content review.</div></div>
<div className="fi"><button className="fi-q">Can you run campaigns for regulated industries like healthcare?<div className="fi-icon">+</div></button><div className="fi-a">Yes — we've managed influencer campaigns for healthcare, finance, and legal brands with strict ASC and ASCI compliance requirements. All content for regulated industries is reviewed by our compliance checklist and, where required, routed through your legal team's approval process before being submitted to creators for filming.</div></div>
<div className="fi"><button className="fi-q">Do you work with regional/Tier 2 city creators?<div className="fi-icon">+</div></button><div className="fi-a">Absolutely — our network includes strong creator representation in Indore, Bhopal, Jaipur, Lucknow, Nagpur, and Surat, as well as language-specific creators in Hindi, Marathi, Gujarati, Tamil, and Kannada. Regional creator campaigns often deliver 40–60% lower CPV than metro campaigns with comparable engagement quality.</div></div>
</div>
</div>
</div>
</section>
      <div className="wrap" style={{ padding: '40px 28px', borderTop: '1px solid var(--bdr)' }}>
<div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--s)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '16px' }}>Related Services</div>
<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
<a href="/services/ai-video" className="rel-link">🤖 AI Video</a>
<a href="/services/drone-video" className="rel-link">🚁 Drone Video</a>
<a href="/services/meta-ads" className="rel-link">📘 Meta Ads</a>
<a href="/services/ai-ad-creatives" className="rel-link">🎨 AI Ad Creatives</a>
<a href="/services/blogging" className="rel-link">✍️ Content &amp; Blogging</a>
</div>
</div>
      <section className="cta-section">
<div className="wrap">
<h2>Find the Creators Your<br />Customers Already Trust.</h2>
<p>Share your brand brief — we'll send a shortlist of vetted creators with audience data, engagement rates, and a campaign strategy within 48 hours.</p>
<div className="cta-btns">
<a href="/contact" className="btn btn-ac">🎬 Get Creator Shortlist</a>
<a href="https://wa.me/919407000101" className="btn btn-wa">💬 WhatsApp Now</a>
</div>
</div>
</section>
      <PageScript id="services-influencer-video-0" code={js0} />
    </>
  )
}
