/* eslint-disable */
// src/app/services/email-marketing/page.tsx — generated from email-marketing.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "Email Marketing India | Click Decoded",
  description: "Email marketing campaigns and automation sequences that nurture leads and drive repeat revenue. Click Decoded manages strategy, copywriting, design, and.",
  alternates: { canonical: "/services/email-marketing" },
}

const css = `
:root{
  --ac:#EA580C;--ac2:#c2410c;--ac-rgb:234,88,12;
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
.hero{background:linear-gradient(155deg,#1a0800 0%,#2d1200 45%,#1a0800 100%);padding:96px 0 80px;position:relative;overflow:hidden;}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 60% at 70% 30%,rgba(234,88,12,.2) 0%,transparent 65%),radial-gradient(ellipse 35% 40% at 5% 80%,rgba(234,88,12,.07) 0%,transparent 60%);}
.hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;position:relative;z-index:2;}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;background:rgba(234,88,12,.12);border:1px solid rgba(234,88,12,.3);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#fdba74;margin-bottom:20px;}
.hero h1{font-size:48px;color:#fff;line-height:1.06;letter-spacing:-.04em;margin-bottom:20px;}
.hero h1 em{font-style:normal;background:linear-gradient(135deg,#fdba74,#ea580c);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-desc{font-size:17px;color:rgba(255,255,255,.62);line-height:1.7;margin-bottom:32px;max-width:460px;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:36px;}
.hero-proof{display:flex;gap:24px;flex-wrap:wrap;}
.proof-item{font-size:13px;color:rgba(255,255,255,.5);}
.proof-item strong{color:#fff;font-weight:700;}
/* EMAIL DASHBOARD MOCK */
.em-mock{border-radius:20px;overflow:hidden;box-shadow:0 28px 70px rgba(0,0,0,.65);background:#100500;border:1px solid rgba(234,88,12,.22);}
.mock-browser{background:rgba(255,255,255,.05);padding:10px 14px;border-bottom:1px solid rgba(255,255,255,.07);display:flex;align-items:center;gap:10px;}
.mock-dots{display:flex;gap:5px;}
.mock-dots span{width:9px;height:9px;border-radius:50%;}
.mock-dots span:nth-child(1){background:#ff5f57;}
.mock-dots span:nth-child(2){background:#ffbd2e;}
.mock-dots span:nth-child(3){background:#28c840;}
.mock-url{flex:1;background:rgba(255,255,255,.07);border-radius:6px;padding:5px 12px;font-size:11px;color:rgba(255,255,255,.35);}
.em-header{background:rgba(234,88,12,.1);border-bottom:1px solid rgba(234,88,12,.2);padding:10px 16px;display:flex;align-items:center;justify-content:space-between;}
.em-title{font-size:12px;font-weight:700;color:rgba(255,255,255,.75);}
.em-badge{font-size:10px;font-weight:700;padding:3px 9px;border-radius:5px;background:rgba(234,88,12,.2);border:1px solid rgba(234,88,12,.35);color:#fdba74;}
/* Campaign stats */
.em-kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(255,255,255,.05);border-bottom:1px solid rgba(255,255,255,.06);}
.em-kpi{padding:10px 10px;background:#100500;text-align:center;}
.emkv{font-size:17px;font-weight:900;color:#fdba74;line-height:1;}
.emkl{font-size:8px;color:rgba(255,255,255,.3);margin-top:2px;text-transform:uppercase;letter-spacing:.05em;}
/* Sequence flow */
.em-sequence{padding:10px 14px;}
.seq-label{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:rgba(255,255,255,.25);margin-bottom:8px;}
.seq-flow{display:flex;flex-direction:column;gap:0;}
.seq-step{display:flex;align-items:center;gap:10px;padding:8px 0;}
.seq-line-wrap{display:flex;flex-direction:column;align-items:center;width:28px;flex-shrink:0;}
.seq-dot{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;border:2px solid;}
.seq-dot.sent{background:rgba(74,222,128,.1);border-color:rgba(74,222,128,.3);}
.seq-dot.active{background:rgba(234,88,12,.15);border-color:rgba(234,88,12,.4);animation:seqPulse 2s ease-in-out infinite;}
@keyframes seqPulse{0%,100%{border-color:rgba(234,88,12,.4)}50%{border-color:rgba(234,88,12,.9)}}
.seq-dot.wait{background:rgba(255,255,255,.04);border-color:rgba(255,255,255,.1);}
.seq-connector{width:1px;height:12px;background:rgba(255,255,255,.1);margin:2px 0;}
.seq-info{flex:1;}
.seq-name{font-size:11px;font-weight:700;color:rgba(255,255,255,.8);}
.seq-meta{display:flex;gap:10px;margin-top:2px;}
.seq-meta span{font-size:9px;color:rgba(255,255,255,.35);}
.seq-meta b{color:rgba(255,255,255,.55);font-weight:600;}
.seq-stat{text-align:right;flex-shrink:0;}
.seq-rate{font-size:13px;font-weight:800;color:#fff;}
.seq-rate-l{font-size:8px;color:rgba(255,255,255,.3);text-transform:uppercase;letter-spacing:.04em;}
/* Live send counter */
.em-live{padding:8px 14px;background:rgba(234,88,12,.06);border-top:1px solid rgba(234,88,12,.15);display:flex;align-items:center;justify-content:space-between;}
.em-live-dot{width:7px;height:7px;border-radius:50%;background:#ea580c;animation:livePulse 1s step-end infinite;margin-right:6px;}
@keyframes livePulse{0%,100%{opacity:1}50%{opacity:.2}}
.em-live-text{font-size:10px;color:rgba(255,255,255,.5);display:flex;align-items:center;}
.em-live-count{font-size:12px;font-weight:800;color:#fdba74;}
/* STATS */
.stats-strip{background:var(--ac);}
.stats-inner{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(0,0,0,.2);}
.stat-box{padding:32px 24px;text-align:center;background:var(--ac);}
.stat-n{font-size:40px;font-weight:900;color:#fff;line-height:1;letter-spacing:-.03em;}
.stat-l{font-size:12px;color:rgba(255,255,255,.8);margin-top:6px;font-weight:500;text-transform:uppercase;letter-spacing:.06em;}
/* SECTIONS */
.sec-h{text-align:center;max-width:640px;margin:0 auto 52px;}
.sec-tag{display:inline-flex;padding:5px 13px;border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:10px;background:rgba(234,88,12,.08);border:1px solid rgba(234,88,12,.18);color:var(--ac);}
.sec-h h2{font-size:36px;margin-bottom:14px;}
.sec-h p{font-size:16px;color:var(--m);line-height:1.65;}
.inc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.inc-card{background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:28px 24px;transition:.2s;}
.inc-card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(234,88,12,.1);border-color:rgba(234,88,12,.2);}
.inc-icon{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:16px;background:rgba(234,88,12,.07);border:1px solid rgba(234,88,12,.12);}
.inc-card h3{font-size:17px;margin-bottom:10px;}
.inc-card p{font-size:13.5px;color:var(--m);line-height:1.65;}
.dark-section{background:var(--n-dark);padding:88px 0;}
.formats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:1000px;margin:0 auto;}
.fmt-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:24px;transition:.2s;}
.fmt-card:hover{border-color:rgba(234,88,12,.35);background:rgba(234,88,12,.07);transform:translateY(-2px);}
.fmt-top{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px;}
.fmt-icon{font-size:26px;}
.fmt-tag{font-size:10px;font-weight:700;padding:3px 8px;border-radius:5px;background:rgba(234,88,12,.18);border:1px solid rgba(234,88,12,.3);color:#fdba74;}
.fmt-card h3{font-size:15px;font-weight:700;color:#fff;margin-bottom:6px;}
.fmt-card p{font-size:13px;color:rgba(255,255,255,.5);line-height:1.6;}
.bg-subtle{background:var(--bg);}
.steps-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative;}
.steps-grid::before{content:'';position:absolute;top:34px;left:12%;right:12%;height:2px;background:linear-gradient(90deg,var(--ac),var(--ac2));z-index:0;opacity:.4;}
.step{text-align:center;padding:0 16px;position:relative;z-index:1;}
.step-num{width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,var(--ac),var(--ac2));color:#fff;font-size:20px;font-weight:900;display:flex;align-items:center;justify-content:center;margin:0 auto 18px;box-shadow:0 8px 24px rgba(234,88,12,.3);}
.step h4{font-size:15px;margin-bottom:7px;}
.step p{font-size:13px;color:var(--m);line-height:1.6;}
.faq-2col{display:grid;grid-template-columns:1fr 1fr;gap:0 28px;align-items:start;}
.fi{border:1px solid var(--bdr);border-radius:14px;margin-bottom:10px;overflow:hidden;background:#fff;transition:.15s;}
.fi.on{border-color:rgba(234,88,12,.3);box-shadow:0 4px 20px rgba(234,88,12,.07);}
.fi-q{width:100%;text-align:left;background:transparent;border:none;padding:20px 22px;font-size:14px;font-weight:700;color:var(--n);display:flex;justify-content:space-between;align-items:center;gap:12px;cursor:pointer;}
.fi-icon{width:26px;height:26px;border-radius:50%;flex-shrink:0;background:var(--bg);border:1px solid var(--bdr);display:flex;align-items:center;justify-content:center;color:var(--ac);font-size:18px;line-height:1;transition:transform .2s;}
.fi.on .fi-icon{transform:rotate(45deg);background:var(--ac);color:#fff;border-color:var(--ac);}
.fi-a{max-height:0;overflow:hidden;transition:.3s;color:var(--m);font-size:14px;line-height:1.75;}
.fi.on .fi-a{max-height:300px;padding:0 22px 22px;}
.cta-section{background:linear-gradient(155deg,#1a0800 0%,#2d1200 100%);padding:96px 0;text-align:center;position:relative;overflow:hidden;}
.cta-section::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(234,88,12,.15) 0%,transparent 70%);}
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
      "name": "Email Marketing",
      "provider": {
        "@type": "Organization",
        "name": "Click Decoded",
        "url": "https://www.clickdecoded.com"
      },
      "description": "Email marketing campaigns and automation sequences that nurture leads and drive repeat revenue. Click Decoded manages strategy, copywriting, design, and performance for B2B and B2C email programs.",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": "Email Marketing",
      "url": "https://www.clickdecoded.com/services/email-marketing"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which email platforms do you work with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We work with Mailchimp, Klaviyo, ActiveCampaign, HubSpot, Brevo (Sendinblue), ConvertKit, and Zoho Campaigns — selecting or recommending the right ESP based on your business type, list size, and automation complexity. ESP subscription costs are billed separately to your account."
          }
        },
        {
          "@type": "Question",
          "name": "What open rate can we realistically expect?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Industry averages in India are 18–22%. Our managed campaigns consistently deliver 28–40% open rates through strong subject line writing, optimal send timing, proper list segmentation, and deliverability management. Automation sequences (welcome, cart abandonment) typically outperform broadcast campaigns by 15–20 percentage points."
          }
        },
        {
          "@type": "Question",
          "name": "Do you write the email copy or just manage campaigns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We write everything — subject line, preview text, body copy, and CTA. Our retainer includes full copywriting for all campaign and automation emails. We do request a brand voice brief, product information, and any promotional details from you — the strategy, writing, and execution are entirely our responsibility."
          }
        },
        {
          "@type": "Question",
          "name": "What if our list is old or hasn't been emailed in months?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Old lists require a warm-up and re-engagement process before full-volume sending — sending to a cold list at scale risks your domain reputation and deliverability. We run a structured list re-engagement campaign, remove non-responders, and warm up sending volume gradually to protect your sender score before scaling."
          }
        },
        {
          "@type": "Question",
          "name": "How many emails per month are included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our base retainer covers 4 campaign emails per month plus maintenance of up to 3 automation sequences. Higher tiers include 8–12 campaigns per month plus additional automation flows. Volumes are agreed at onboarding based on your list size and sending frequency requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help us grow our email list as well?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — list growth strategy is included in all retainers. We advise on lead magnet development, opt-in form placement, pop-up timing, and Meta Lead Ads integration to connect paid social directly into your email automation sequences. Organic and paid list growth strategies recommended based on your business model."
          }
        },
        {
          "@type": "Question",
          "name": "How do you ensure emails don't land in spam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We configure SPF, DKIM, and DMARC records on your sending domain, use a verified dedicated sending domain, warm up new domains gradually, maintain list hygiene to keep bounce rates below 2%, and monitor your domain reputation weekly through Google Postmaster Tools and MXToolbox. Deliverability is a managed process, not an afterthought."
          }
        },
        {
          "@type": "Question",
          "name": "Do you manage WhatsApp broadcast campaigns too?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — we offer WhatsApp marketing via the official WhatsApp Business API as a companion service. Many clients run coordinated email + WhatsApp campaigns for product launches and sales, significantly improving overall conversion rates compared to either channel alone. Ask about our combined email + WhatsApp package."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How Email Marketing India Works — Our Process",
      "description": "Email marketing campaigns and automation sequences that nurture leads and drive repeat revenue. Click Decoded manages strategy, copywriting, design, and performance for B2B and B2C email programs.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Audit & ESP Setup",
          "text": "We audit your existing email setup — deliverability health, existing sequences, list segmentation, and template quality. ESP configured (or migrated), domain authentication set up, and sender reputation assessed."
        },
        {
          "@type": "HowToStep",
          "name": "List Clean & Segment",
          "text": "Full list hygiene pass — removing invalid addresses, hard bounces, and spam traps. Remaining contacts segmented by engagement level, purchase history, and funnel stage for targeted sending from Day 1."
        },
        {
          "@type": "HowToStep",
          "name": "Build & Launch",
          "text": "Welcome sequence and first campaign written, designed, and tested across 40+ email clients. A/B subject line variants set up. Campaign scheduled and launched with optimal send time based on your audience data."
        },
        {
          "@type": "HowToStep",
          "name": "Optimise Monthly",
          "text": "Monthly performance review — what subject lines won, which segments engaged, which automations converted. Data used to plan the next month's calendar, refine copy angles, and expand automation coverage."
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
          "name": "Email Marketing",
          "item": "https://www.clickdecoded.com/services/email-marketing"
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
      <div className="breadcrumb"><div className="wrap"><div className="bc-list"><a href="/">Home</a><span style={{ opacity: '.4' }}>›</span><span>Content</span><span style={{ opacity: '.4' }}>›</span><span>Email Marketing</span></div></div></div>
      <section className="hero">
<div className="wrap">
<div className="hero-grid">
<div>
<div className="hero-eyebrow">📧 Campaigns · Sequences · Automation</div>
<h1>Email That <em>Nurtures Leads</em> and Turns Them Into Repeat Buyers.</h1>
<p className="hero-desc">Email marketing campaigns and automation sequences managed end-to-end — strategy, copywriting, design, list hygiene, and deliverability. The highest ROI channel in digital marketing, run properly.</p>
<div className="hero-btns">
<a href="/contact" className="btn btn-ac">📧 Get a Free Email Audit</a>
<a href="https://wa.me/919407000101" className="btn btn-ghost">💬 WhatsApp Us</a>
</div>
<div className="hero-proof">
<span className="proof-item"><strong>42×</strong> Avg Email ROI</span>
<span className="proof-item"><strong>34%</strong> Avg Open Rate</span>
<span className="proof-item"><strong>₹25K</strong> Starting / Month</span>
</div>
</div>

<div className="em-mock">
<div className="mock-browser">
<div className="mock-dots"><span></span><span></span><span></span></div>
<div className="mock-url">Email Campaign Dashboard — Click Decoded</div>
</div>
<div className="em-header">
<div className="em-title">📧 Welcome Sequence — E-Commerce Brand</div>
<div className="em-badge">Live · 5-Email Flow</div>
</div>
<div className="em-kpis">
<div className="em-kpi"><div className="emkv">34.2%</div><div className="emkl">Open Rate</div></div>
<div className="em-kpi"><div className="emkv">6.8%</div><div className="emkl">Click Rate</div></div>
<div className="em-kpi"><div className="emkv">₹4.2</div><div className="emkl">Rev / Email</div></div>
<div className="em-kpi"><div className="emkv">0.09%</div><div className="emkl">Unsubscribe</div></div>
</div>
<div className="em-sequence">
<div className="seq-label">Automation Sequence</div>
<div className="seq-flow">
<div className="seq-step">
<div className="seq-line-wrap">
<div className="seq-dot sent">✅</div>
<div className="seq-connector"></div>
</div>
<div className="seq-info">
<div className="seq-name">Email 1 · Welcome &amp; Brand Story</div>
<div className="seq-meta"><span>Sent: <b>Immediately</b></span><span>To: <b>2,840</b></span></div>
</div>
<div className="seq-stat"><div className="seq-rate">38.4%</div><div className="seq-rate-l">Open Rate</div></div>
</div>
<div className="seq-step">
<div className="seq-line-wrap">
<div className="seq-dot sent">✅</div>
<div className="seq-connector"></div>
</div>
<div className="seq-info">
<div className="seq-name">Email 2 · Best Sellers + 10% Off</div>
<div className="seq-meta"><span>Sent: <b>Day 2</b></span><span>To: <b>2,740</b></span></div>
</div>
<div className="seq-stat"><div className="seq-rate">34.2%</div><div className="seq-rate-l">Open Rate</div></div>
</div>
<div className="seq-step">
<div className="seq-line-wrap">
<div className="seq-dot active">⚡</div>
<div className="seq-connector"></div>
</div>
<div className="seq-info">
<div className="seq-name">Email 3 · Social Proof + Reviews</div>
<div className="seq-meta"><span>Sending: <b>Day 5</b></span><span>To: <b>2,680</b></span></div>
</div>
<div className="seq-stat"><div className="seq-rate">Live</div><div className="seq-rate-l">Sending Now</div></div>
</div>
<div className="seq-step">
<div className="seq-line-wrap">
<div className="seq-dot wait">4</div>
</div>
<div className="seq-info">
<div className="seq-name">Email 4 · Urgency — Offer Expires</div>
<div className="seq-meta"><span>Scheduled: <b>Day 8</b></span></div>
</div>
<div className="seq-stat"><div className="seq-rate">—</div><div className="seq-rate-l">Pending</div></div>
</div>
</div>
</div>
<div className="em-live">
<div className="em-live-text"><div className="em-live-dot"></div>Sending Email 3 now</div>
<div className="em-live-count">1,284 / 2,680 sent</div>
</div>
</div>
</div>
</div>
</section>
      <div className="stats-strip">
<div className="stats-inner">
<div className="stat-box"><div className="stat-n">42×</div><div className="stat-l">Average Email ROI</div></div>
<div className="stat-box"><div className="stat-n">34%</div><div className="stat-l">Avg Open Rate</div></div>
<div className="stat-box"><div className="stat-n">6.8%</div><div className="stat-l">Avg Click Rate</div></div>
<div className="stat-box"><div className="stat-n">₹25K</div><div className="stat-l">Starting / Month</div></div>
</div>
</div>
      <section>
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag">What's Included</div>
<h2>Strategy to Send — Every<br />Element Handled.</h2>
<p>List management, copy, design, automation, deliverability, and reporting — full-service email marketing with zero overhead on your team.</p>
</div>
<div className="inc-grid">
<div className="inc-card rv"><div className="inc-icon">🗺️</div><h3>Email Strategy &amp; Calendar</h3><p>Monthly email calendar built around your product launches, seasonal moments, and nurture objectives — each send mapped to a segment, a goal, and a measurable outcome before a single word is written.</p></div>
<div className="inc-card rv2"><div className="inc-icon">✍️</div><h3>Copywriting &amp; Design</h3><p>Email copy written by our team with subject line variants for A/B testing, mobile-optimised HTML templates designed to match your brand — and plain-text versions for deliverability on every send.</p></div>
<div className="inc-card rv3"><div className="inc-icon">⚡</div><h3>Automation Sequences</h3><p>Welcome flows, cart abandonment, post-purchase, win-back, and lead nurture sequences — fully built, tested, and live in your ESP. Automated emails that earn revenue while you sleep.</p></div>
<div className="inc-card rv"><div className="inc-icon">🧹</div><h3>List Hygiene &amp; Segmentation</h3><p>Regular list cleaning to remove hard bounces, inactive subscribers, and spam traps — protecting your sender reputation and ensuring campaigns reach real inboxes, not spam folders.</p></div>
<div className="inc-card rv2"><div className="inc-icon">📬</div><h3>Deliverability Management</h3><p>SPF, DKIM, DMARC configuration, warm-up protocols for new domains, and ongoing reputation monitoring — ensuring your emails land in the primary inbox, not promotions or spam.</p></div>
<div className="inc-card rv3"><div className="inc-icon">📊</div><h3>Monthly Performance Reports</h3><p>Open rate, click rate, revenue per email, list growth, unsubscribe trends, and deliverability scores — with actionable recommendations on what to optimise in the coming month's sends.</p></div>
</div>
</div>
</section>
      <section className="dark-section">
<div className="wrap">
<div className="sec-h rv" style={{ marginBottom: '40px' }}>
<h2 style={{ color: '#fff' }}>Every Email Type Your<br />Business Needs.</h2>
<p style={{ color: 'rgba(255,255,255,.55)' }}>From one-off campaign blasts to complex multi-branch automation trees — we build and manage the full spectrum of commercial email marketing.</p>
</div>
<div className="formats-grid">
<div className="fmt-card rv"><div className="fmt-top"><div className="fmt-icon">👋</div><div className="fmt-tag">Automation</div></div><h3>Welcome Sequences</h3><p>5–7 email onboarding flows that introduce new subscribers to your brand, deliver your best offer, and convert first-time sign-ups into first-time buyers — the most important automation sequence in any business.</p></div>
<div className="fmt-card rv2"><div className="fmt-top"><div className="fmt-icon">🛒</div><div className="fmt-tag">E-Commerce</div></div><h3>Cart Abandonment Flows</h3><p>3-email cart recovery sequences with progressively stronger incentives — recovering 10–15% of abandoned carts on average. Typically the single highest-ROI automation any e-commerce brand can deploy.</p></div>
<div className="fmt-card rv3"><div className="fmt-top"><div className="fmt-icon">📣</div><div className="fmt-tag">Campaign</div></div><h3>Promotional Campaigns</h3><p>Sale announcements, product launches, event invitations, and seasonal campaigns — designed for maximum open rate with subject line A/B testing, optimal send time scheduling, and clear conversion CTAs.</p></div>
<div className="fmt-card rv"><div className="fmt-top"><div className="fmt-icon">🤝</div><div className="fmt-tag">B2B</div></div><h3>B2B Lead Nurture</h3><p>Long-cycle nurture sequences for B2B leads — delivering educational content, case studies, and social proof over weeks and months, keeping your brand front-of-mind through a 3–6 month decision process.</p></div>
<div className="fmt-card rv2"><div className="fmt-top"><div className="fmt-icon">💔</div><div className="fmt-tag">Re-engagement</div></div><h3>Win-Back Campaigns</h3><p>Re-engagement sequences targeting inactive subscribers — 3-email flows with increasingly compelling offers designed to reactivate dormant lists before unsubscribing those who genuinely won't return.</p></div>
<div className="fmt-card rv3"><div className="fmt-top"><div className="fmt-icon">🗞️</div><div className="fmt-tag">Newsletter</div></div><h3>Newsletter &amp; Digest</h3><p>Weekly or monthly newsletters that build audience loyalty, establish thought leadership, and keep your brand relevant between purchase cycles — with content strategy, writing, and design fully managed.</p></div>
</div>
</div>
</section>
      <section className="bg-subtle">
<div className="wrap">
<div className="sec-h rv">
<div className="sec-tag">Our Process</div>
<h2>Audit to First Campaign<br />in 2 Weeks.</h2>
<p>A structured onboarding that sets up your infrastructure, cleans your list, and has your first campaign live before the end of Month 1.</p>
</div>
<div className="steps-grid">
<div className="step rv"><div className="step-num">01</div><h4>Audit &amp; ESP Setup</h4><p>We audit your existing email setup — deliverability health, existing sequences, list segmentation, and template quality. ESP configured (or migrated), domain authentication set up, and sender reputation assessed.</p></div>
<div className="step rv2"><div className="step-num">02</div><h4>List Clean &amp; Segment</h4><p>Full list hygiene pass — removing invalid addresses, hard bounces, and spam traps. Remaining contacts segmented by engagement level, purchase history, and funnel stage for targeted sending from Day 1.</p></div>
<div className="step rv3"><div className="step-num">03</div><h4>Build &amp; Launch</h4><p>Welcome sequence and first campaign written, designed, and tested across 40+ email clients. A/B subject line variants set up. Campaign scheduled and launched with optimal send time based on your audience data.</p></div>
<div className="step rv3"><div className="step-num">04</div><h4>Optimise Monthly</h4><p>Monthly performance review — what subject lines won, which segments engaged, which automations converted. Data used to plan the next month's calendar, refine copy angles, and expand automation coverage.</p></div>
</div>
</div>
</section>
      <section>
<div className="wrap">
<div className="sec-h rv"><h2>Frequently Asked Questions</h2></div>
<div className="faq-2col">
<div>
<div className="fi"><button className="fi-q">Which email platforms do you work with?<div className="fi-icon">+</div></button><div className="fi-a">We work with Mailchimp, Klaviyo, ActiveCampaign, HubSpot, Brevo (Sendinblue), ConvertKit, and Zoho Campaigns — selecting or recommending the right ESP based on your business type, list size, and automation complexity. ESP subscription costs are billed separately to your account.</div></div>
<div className="fi"><button className="fi-q">What open rate can we realistically expect?<div className="fi-icon">+</div></button><div className="fi-a">Industry averages in India are 18–22%. Our managed campaigns consistently deliver 28–40% open rates through strong subject line writing, optimal send timing, proper list segmentation, and deliverability management. Automation sequences (welcome, cart abandonment) typically outperform broadcast campaigns by 15–20 percentage points.</div></div>
<div className="fi"><button className="fi-q">Do you write the email copy or just manage campaigns?<div className="fi-icon">+</div></button><div className="fi-a">We write everything — subject line, preview text, body copy, and CTA. Our retainer includes full copywriting for all campaign and automation emails. We do request a brand voice brief, product information, and any promotional details from you — the strategy, writing, and execution are entirely our responsibility.</div></div>
<div className="fi"><button className="fi-q">What if our list is old or hasn't been emailed in months?<div className="fi-icon">+</div></button><div className="fi-a">Old lists require a warm-up and re-engagement process before full-volume sending — sending to a cold list at scale risks your domain reputation and deliverability. We run a structured list re-engagement campaign, remove non-responders, and warm up sending volume gradually to protect your sender score before scaling.</div></div>
</div>
<div>
<div className="fi"><button className="fi-q">How many emails per month are included?<div className="fi-icon">+</div></button><div className="fi-a">Our base retainer covers 4 campaign emails per month plus maintenance of up to 3 automation sequences. Higher tiers include 8–12 campaigns per month plus additional automation flows. Volumes are agreed at onboarding based on your list size and sending frequency requirements.</div></div>
<div className="fi"><button className="fi-q">Can you help us grow our email list as well?<div className="fi-icon">+</div></button><div className="fi-a">Yes — list growth strategy is included in all retainers. We advise on lead magnet development, opt-in form placement, pop-up timing, and Meta Lead Ads integration to connect paid social directly into your email automation sequences. Organic and paid list growth strategies recommended based on your business model.</div></div>
<div className="fi"><button className="fi-q">How do you ensure emails don't land in spam?<div className="fi-icon">+</div></button><div className="fi-a">We configure SPF, DKIM, and DMARC records on your sending domain, use a verified dedicated sending domain, warm up new domains gradually, maintain list hygiene to keep bounce rates below 2%, and monitor your domain reputation weekly through Google Postmaster Tools and MXToolbox. Deliverability is a managed process, not an afterthought.</div></div>
<div className="fi"><button className="fi-q">Do you manage WhatsApp broadcast campaigns too?<div className="fi-icon">+</div></button><div className="fi-a">Yes — we offer WhatsApp marketing via the official WhatsApp Business API as a companion service. Many clients run coordinated email + WhatsApp campaigns for product launches and sales, significantly improving overall conversion rates compared to either channel alone. Ask about our combined email + WhatsApp package.</div></div>
</div>
</div>
</div>
</section>
      <div className="wrap" style={{ padding: '40px 28px', borderTop: '1px solid var(--bdr)' }}>
<div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--s)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '16px' }}>Related Services</div>
<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
<a href="/services/whatsapp-marketing" className="rel-link">💬 WhatsApp Marketing</a>
<a href="/services/ai-content" className="rel-link">📝 AI Content</a>
<a href="/services/retargeting" className="rel-link">🔄 Retargeting</a>
<a href="/services/blogging" className="rel-link">✍️ Blogging</a>
<a href="/services/ai-automation" className="rel-link">🤖 AI Automation</a>
</div>
</div>
      <section className="cta-section">
<div className="wrap">
<h2>Your Email List Is Sitting on<br />Untapped Revenue.</h2>
<p>Get a free email audit — we'll review your current setup, deliverability health, and open rates, and show you exactly what's being left on the table.</p>
<div className="cta-btns">
<a href="/contact" className="btn btn-ac">📧 Get Free Email Audit</a>
<a href="https://wa.me/919407000101" className="btn btn-wa">💬 WhatsApp Now</a>
</div>
</div>
</section>
      <PageScript id="services-email-marketing-0" code={js0} />
    </>
  )
}
