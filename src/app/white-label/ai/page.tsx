/* eslint-disable */
// src/app/white-label/ai/page.tsx — generated from whitelabel-ai.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "White Label AI & Automation Services India | Click Decoded",
  description: "Resell AI automation under your agency brand. Click Decoded builds WhatsApp bots, n8n workflows, AI chatbots, and CRM integrations — all white labeled.",
  alternates: { canonical: "/white-label/ai" },
  openGraph: {
    title: "White Label AI & Automation Services — Click Decoded",
    description: "White label AI automation for agencies — n8n workflows, WhatsApp bots, AI chatbots, CRM integrations. All delivered under your brand name. No attribution.",
    url: "/white-label/ai",
    type: "website",
  },
}

const css = `
:root{--n:#2A4573;--n2:#1e3460;--n-dark:#0f1e38;--b:#2A4573;--o:#EE7E1A;--o2:#d46e12;--id:#4f46e5;--id2:#4338ca;--id3:#e0e7ff;--w:#fff;--body:#1E293B;--m:#475569;--s:#64748b;--bg:#F4F7FC;--bdr:#E2E8F0;}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}html{scroll-behavior:smooth;overflow-x:hidden;}body{font-family:'Inter',system-ui,sans-serif;color:var(--body);background:#fff;-webkit-font-smoothing:antialiased;}a{text-decoration:none;color:inherit;}img,svg{display:block;}ul{list-style:none;}button{font-family:inherit;cursor:pointer;}
.wrap{max-width:1200px;margin:0 auto;padding:0 28px;}section{padding:88px 0;}h1,h2,h3,h4{font-weight:800;line-height:1.1;letter-spacing:-.025em;color:var(--n);}
.pill{display:inline-flex;align-items:center;gap:7px;padding:6px 14px;border-radius:99px;font-size:11.5px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;}
.pill-id{background:rgba(79,70,229,.12);color:var(--id);}
.sec-h{text-align:center;max-width:640px;margin:0 auto 52px;}.sec-h h2{font-size:36px;margin-top:12px;margin-bottom:14px;}.sec-h p{font-size:16px;color:var(--m);}
.btn{display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:10px;font-weight:700;font-size:14px;border:none;transition:all .18s;white-space:nowrap;cursor:pointer;}
.btn-id{background:var(--id);color:#fff;box-shadow:0 4px 18px rgba(79,70,229,.3);}.btn-id:hover{background:var(--id2);transform:translateY(-2px);}
.btn-ghost{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.4);}.btn-ghost:hover{background:rgba(255,255,255,.08);}
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
.breadcrumb{background:var(--bg);padding:12px 0;border-bottom:1px solid var(--bdr);}
.bc-list{display:flex;align-items:center;gap:8px;font-size:12.5px;color:var(--s);list-style:none;}.bc-list a{color:var(--n);font-weight:500;}.bc-list a:hover{color:var(--o);}
.wl-hero{background:linear-gradient(155deg,#080614 0%,#0d0a22 50%,#06040f 100%);padding:96px 0 80px;position:relative;overflow:hidden;}
.wl-hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 55% at 70% 40%,rgba(79,70,229,.1) 0%,transparent 65%),radial-gradient(ellipse 35% 40% at 10% 75%,rgba(79,70,229,.06) 0%,transparent 60%);}
.wl-hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;position:relative;z-index:2;}
.wl-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;background:rgba(79,70,229,.15);border:1px solid rgba(79,70,229,.3);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:var(--id);margin-bottom:20px;}
.wl-hero h1{font-size:52px;color:#fff;line-height:1.05;letter-spacing:-.04em;margin-bottom:20px;}.wl-hero h1 em{font-style:normal;color:var(--id);}
.wl-hero-desc{font-size:17px;color:rgba(255,255,255,.65);line-height:1.7;margin-bottom:32px;max-width:480px;}
.wl-hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:36px;}
.wl-trust{display:flex;gap:22px;flex-wrap:wrap;}.wl-trust-item{display:flex;align-items:center;gap:7px;font-size:13px;color:rgba(255,255,255,.5);}.wl-trust-item strong{color:#fff;}
.wl-hero-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:20px;overflow:hidden;}
.wl-card-header{background:rgba(79,70,229,.1);border-bottom:1px solid rgba(255,255,255,.07);padding:16px 20px;display:flex;align-items:center;gap:12px;}
.wl-card-icon{width:38px;height:38px;background:linear-gradient(135deg,var(--id),var(--id2));border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;}
.wl-card-title{font-size:14px;font-weight:700;color:#fff;}.wl-card-sub{font-size:11px;color:rgba(255,255,255,.45);}
.wl-deliverables{padding:20px;}
.wl-deliv-row{display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.05);}.wl-deliv-row:last-child{border:none;}
.wl-deliv-check{width:22px;height:22px;background:rgba(79,70,229,.15);border:1px solid rgba(79,70,229,.3);border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:11px;color:var(--id);}
.wl-deliv-text{font-size:13px;color:rgba(255,255,255,.75);}
.wl-deliv-badge{margin-left:auto;font-size:10px;font-weight:700;padding:3px 8px;border-radius:4px;background:rgba(79,70,229,.15);color:var(--id);}
.wl-stats{background:var(--id);padding:0;}
.wl-stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(0,0,0,.1);}
.wl-stat{padding:32px 24px;text-align:center;background:var(--id);}
.wl-stat-n{font-size:40px;font-weight:900;color:#fff;line-height:1;letter-spacing:-.03em;}
.wl-stat-l{font-size:12px;color:rgba(255,255,255,.75);margin-top:6px;font-weight:500;text-transform:uppercase;letter-spacing:.06em;}
.deliv-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.deliv-card{background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:28px 24px;transition:.2s;}
.deliv-card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(79,70,229,.1);border-color:rgba(79,70,229,.25);}
.deliv-icon{width:50px;height:50px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:16px;background:rgba(79,70,229,.1);border:1px solid rgba(79,70,229,.2);}
.deliv-card h3{font-size:17px;margin-bottom:10px;}.deliv-card p{font-size:13.5px;color:var(--m);line-height:1.65;margin-bottom:14px;}
.deliv-tags{display:flex;flex-wrap:wrap;gap:6px;}.tag{padding:4px 10px;background:var(--bg);border:1px solid var(--bdr);border-radius:6px;font-size:11.5px;font-weight:600;color:var(--s);}
.process-section{background:var(--bg);}
.steps-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin-top:52px;}
.step{text-align:center;}.step-num{width:52px;height:52px;background:linear-gradient(135deg,var(--id),var(--id2));border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff;margin:0 auto 18px;}
.step h4{font-size:15px;margin-bottom:8px;}.step p{font-size:13.5px;color:var(--m);line-height:1.6;}
.why-grid{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;}
.why-list{display:flex;flex-direction:column;gap:18px;margin-top:28px;}
.why-item{display:flex;gap:16px;align-items:flex-start;}
.why-icon{width:44px;height:44px;border-radius:11px;background:rgba(79,70,229,.1);border:1px solid rgba(79,70,229,.2);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;}
.why-item h4{font-size:15px;margin-bottom:4px;}.why-item p{font-size:13.5px;color:var(--m);line-height:1.6;}
.why-visual{background:linear-gradient(135deg,#080614,#0d0a22);border-radius:22px;padding:40px;color:#fff;}
.partner-badge{display:inline-flex;align-items:center;gap:8px;padding:8px 16px;background:rgba(79,70,229,.15);border:1px solid rgba(79,70,229,.3);border-radius:99px;font-size:12px;font-weight:700;color:var(--id);margin-bottom:24px;}
.partner-stats{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:28px;}
.ps-item{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.07);border-radius:14px;padding:20px;}
.ps-n{font-size:34px;font-weight:900;color:var(--id);line-height:1;}.ps-l{font-size:12px;color:rgba(255,255,255,.5);margin-top:4px;}
.faq-section{background:var(--bg);}
.faq-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:52px;}
.fi{background:#fff;border:1px solid var(--bdr);border-radius:14px;overflow:hidden;}
.fi-q{width:100%;text-align:left;background:none;border:none;padding:20px 22px;font-size:15px;font-weight:600;color:var(--n);display:flex;justify-content:space-between;align-items:center;cursor:pointer;}
.fi-q::after{content:'+';font-size:20px;font-weight:400;color:var(--s);transition:.2s;}.fi.on .fi-q::after{transform:rotate(45deg);color:var(--id);}
.fi-a{display:none;padding:0 22px 20px;font-size:14px;color:var(--m);line-height:1.7;}.fi.on .fi-a{display:block;}
.cta-section{background:linear-gradient(135deg,#080614,#0d0a22);padding:88px 0;text-align:center;position:relative;overflow:hidden;}
.cta-section::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(79,70,229,.08),transparent);}
.cta-section h2{color:#fff;font-size:40px;margin-bottom:14px;position:relative;}.cta-section p{color:rgba(255,255,255,.6);font-size:17px;margin-bottom:36px;position:relative;max-width:520px;margin-left:auto;margin-right:auto;}
.cta-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;position:relative;}
.tools-strip{background:var(--bg);padding:52px 0;border-top:1px solid var(--bdr);border-bottom:1px solid var(--bdr);}
.tools-inner{display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;}
.tool-chip{display:inline-flex;align-items:center;gap:7px;padding:8px 16px;background:#fff;border:1px solid var(--bdr);border-radius:99px;font-size:13px;font-weight:600;color:var(--body);}
@media(max-width:900px){.wl-hero-grid,.why-grid,.faq-grid{grid-template-columns:1fr;}.deliv-grid,.steps-grid{grid-template-columns:repeat(2,1fr);}.wl-stats-grid{grid-template-columns:repeat(2,1fr);}.wl-hero h1{font-size:38px;}}
@media(max-width:600px){.deliv-grid,.steps-grid,.partner-stats{grid-template-columns:1fr;}.wl-hero h1{font-size:32px;}.hb{display:flex;}.dmenu{display:none;}}

/* === FOOTER CSS === */
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
.footer-areas a{color:rgba(255,255,255,.25);transition:.15s;}
.footer-areas a:hover{color:rgba(255,255,255,.6);}
@media(max-width:900px){.fg{grid-template-columns:1fr 1fr;}}
@media(max-width:600px){.fg{grid-template-columns:1fr;}}
`

const ld0 = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "White Label AI & Automation Services",
      "provider": {
        "@type": "Organization",
        "name": "Click Decoded",
        "url": "https://clickdecoded.com"
      },
      "description": "White label AI automation services for digital marketing agencies — WhatsApp chatbots, n8n workflow automation, AI customer support, CRM integration, and lead automation — all delivered under your agency brand.",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": "White Label AI Automation",
      "url": "https://www.clickdecoded.com/white-label/ai"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What AI automation tools do you work with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We work with n8n, Make (Integromat), Zapier, OpenAI API, Anthropic Claude API, WhatsApp Business API, Twilio, and CRM platforms like HubSpot, Zoho, and Salesforce. All workflows are built for your clients, branded to your agency."
          }
        },
        {
          "@type": "Question",
          "name": "Can I resell AI chatbots to my clients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We build AI-powered WhatsApp bots, website chatbots, and support automation systems that you deliver as your own product. We handle the build, testing, and deployment. You handle client communication."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to build an automation workflow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Simple automations (lead capture, CRM sync, notification workflows) are delivered in 3–5 business days. Complex multi-step AI workflows with custom logic are delivered in 7–14 business days."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide support for the automations after delivery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. All automations come with 30 days of post-launch support. We offer ongoing maintenance retainers so your clients have continuous support — all handled by us, invisible to your client."
          }
        },
        {
          "@type": "Question",
          "name": "Is my client's data kept confidential?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We sign NDAs before any project begins. All client data, credentials, and business logic are treated as strictly confidential. We never contact your clients directly."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How White Label AI & Automation Services India Works — Our Process",
      "description": "Resell AI automation under your agency brand. Click Decoded builds WhatsApp bots, n8n workflows, AI chatbots, and CRM integrations — all white labeled. Launch without hiring an AI team.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Share the Brief",
          "text": "You send us the client's workflow requirement — what needs to happen, which tools are involved, and what the trigger should be."
        },
        {
          "@type": "HowToStep",
          "name": "We Scope & Build",
          "text": "We review and confirm scope within 24 hours. Simple automations delivered in 3–5 days. Complex AI pipelines in 7–14 days."
        },
        {
          "@type": "HowToStep",
          "name": "You Review & Approve",
          "text": "We hand over the working automation for you to test. You share feedback — we refine until it's perfect."
        },
        {
          "@type": "HowToStep",
          "name": "Deploy & Support",
          "text": "Live in your client's environment. We provide 30 days of post-launch support — invisible to your client, always available to you."
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
          "name": "White-Label AI Services",
          "item": "https://www.clickdecoded.com/white-label/ai"
        }
      ]
    }
  ]
}`

const js0 = `(function(){
document.querySelectorAll('.fi').forEach(item=>{item.querySelector('.fi-q').onclick=()=>{const on=item.classList.contains('on');document.querySelectorAll('.fi').forEach(f=>f.classList.remove('on'));if(!on)item.classList.add('on');};});
const hdr=document.getElementById('hdr');if(hdr)window.addEventListener('scroll',()=>hdr.classList.toggle('up',scrollY>40),{passive:true});
})();`

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld0 }} />
      <nav className="breadcrumb" aria-label="Breadcrumb"><div className="wrap"><ol className="bc-list"><li><a href="/">Home</a></li><li className="bc-sep">›</li><li><a href="/white-label/seo">White Label</a></li><li className="bc-sep">›</li><li>White Label AI &amp; Automation</li></ol></div></nav>
      <section className="wl-hero" aria-labelledby="hero-h1">
<div className="wrap">
<div className="wl-hero-grid">
<div>
<div className="wl-eyebrow">🤖 AI Automation Reseller Program</div>
<h1 id="hero-h1">Sell AI Automation.<br />No AI Team<br /><em>Required.</em></h1>
<p className="wl-hero-desc">We build the AI workflows, chatbots, and automations. You sell them under your brand. From WhatsApp bots to n8n pipelines — fully white labeled, zero attribution to us.</p>
<div className="wl-hero-btns">
<a href="#contact" className="btn btn-id">Start Reselling AI →</a>
<a href="#deliverables" className="btn btn-ghost">See Automation Types</a>
</div>
<div className="wl-trust">
<div className="wl-trust-item">✓ <strong>100% white labeled</strong></div>
<div className="wl-trust-item">✓ <strong>NDA signed upfront</strong></div>
<div className="wl-trust-item">✓ <strong>30-day post-launch support</strong></div>
</div>
</div>
<div>
<div className="wl-hero-card">
<div className="wl-card-header">
<div className="wl-card-icon">🤖</div>
<div><div className="wl-card-title">AI Automations We Build</div><div className="wl-card-sub">Delivered under your agency brand</div></div>
</div>
<div className="wl-deliverables">
<div className="wl-deliv-row"><div className="wl-deliv-check">✓</div><div className="wl-deliv-text">WhatsApp AI Chatbots</div><div className="wl-deliv-badge">Popular</div></div>
<div className="wl-deliv-row"><div className="wl-deliv-check">✓</div><div className="wl-deliv-text">n8n Workflow Automation</div><div className="wl-deliv-badge">Popular</div></div>
<div className="wl-deliv-row"><div className="wl-deliv-check">✓</div><div className="wl-deliv-text">Lead Capture &amp; CRM Sync</div><div className="wl-deliv-badge">Essential</div></div>
<div className="wl-deliv-row"><div className="wl-deliv-check">✓</div><div className="wl-deliv-text">AI Customer Support Bots</div><div className="wl-deliv-badge">New</div></div>
<div className="wl-deliv-row"><div className="wl-deliv-check">✓</div><div className="wl-deliv-text">Email &amp; Invoice Automation</div><div className="wl-deliv-badge">Essential</div></div>
<div className="wl-deliv-row"><div className="wl-deliv-check">✓</div><div className="wl-deliv-text">Custom AI Agent Pipelines</div><div className="wl-deliv-badge">Advanced</div></div>
</div>
</div>
</div>
</div>
</div>
</section>
      <div className="wl-stats">
<div className="wrap">
<div className="wl-stats-grid">
<div className="wl-stat"><div className="wl-stat-n">150+</div><div className="wl-stat-l">Workflows Built</div></div>
<div className="wl-stat"><div className="wl-stat-n">70%</div><div className="wl-stat-l">Avg Time Saved Per Task</div></div>
<div className="wl-stat"><div className="wl-stat-n">5 Days</div><div className="wl-stat-l">Simple Workflow Delivery</div></div>
<div className="wl-stat"><div className="wl-stat-n">100%</div><div className="wl-stat-l">White Labeled</div></div>
</div>
</div>
</div>
      <div className="tools-strip">
<div className="wrap">
<div style={{ textAlign: 'center', marginBottom: '22px', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--s)' }}>Tools &amp; Platforms We Automate</div>
<div className="tools-inner">
<span className="tool-chip">🔄 n8n</span>
<span className="tool-chip">⚙️ Make (Integromat)</span>
<span className="tool-chip">⚡ Zapier</span>
<span className="tool-chip">🤖 OpenAI API</span>
<span className="tool-chip">🧠 Claude API</span>
<span className="tool-chip">💬 WhatsApp Business API</span>
<span className="tool-chip">🟠 HubSpot</span>
<span className="tool-chip">🟦 Zoho CRM</span>
<span className="tool-chip">☁️ Salesforce</span>
<span className="tool-chip">📧 Gmail / Outlook</span>
<span className="tool-chip">📊 Google Sheets</span>
<span className="tool-chip">🟣 Twilio</span>
</div>
</div>
</div>
      <section id="deliverables" aria-labelledby="deliv-h2">
<div className="wrap">
<div className="sec-h">
<div className="pill pill-id">Automation Services</div>
<h2 id="deliv-h2">What You Can Resell to Clients</h2>
<p>High-demand AI automation services your clients need — built by us, sold by you.</p>
</div>
<div className="deliv-grid">
<article className="deliv-card"><div className="deliv-icon">💬</div><h3>WhatsApp AI Chatbots</h3><p>Intelligent WhatsApp bots that qualify leads, answer FAQs, book appointments, and send order updates — 24/7, without human intervention. Built on WhatsApp Business API + GPT.</p><div className="deliv-tags"><span className="tag">WhatsApp API</span><span className="tag">Lead Qual</span><span className="tag">GPT-4o</span></div></article>
<article className="deliv-card"><div className="deliv-icon">🔄</div><h3>n8n Workflow Automation</h3><p>End-to-end business process automation using n8n — connect any tool, automate data movement, trigger actions based on events. From CRM sync to invoice generation.</p><div className="deliv-tags"><span className="tag">n8n</span><span className="tag">No-Code Logic</span><span className="tag">API Integrations</span></div></article>
<article className="deliv-card"><div className="deliv-icon">🧲</div><h3>Lead Capture &amp; CRM Automation</h3><p>Website form → WhatsApp alert → CRM entry → follow-up email → done. Automated lead routing, deduplication, tagging, and nurture sequences — zero manual work.</p><div className="deliv-tags"><span className="tag">HubSpot</span><span className="tag">Zoho</span><span className="tag">Salesforce</span></div></article>
<article className="deliv-card"><div className="deliv-icon">🎧</div><h3>AI Customer Support Bots</h3><p>Website and WhatsApp support bots trained on your client's product knowledge base — answer queries, escalate complex issues to humans, and log every interaction to CRM.</p><div className="deliv-tags"><span className="tag">Claude API</span><span className="tag">Retrieval AI</span><span className="tag">Handoff Logic</span></div></article>
<article className="deliv-card"><div className="deliv-icon">📧</div><h3>Email &amp; Invoice Automation</h3><p>Automated email sequences, invoice generation, payment reminders, client onboarding emails, and reporting dispatch — all triggered from CRM status changes or calendar events.</p><div className="deliv-tags"><span className="tag">Gmail API</span><span className="tag">Razorpay</span><span className="tag">Google Docs</span></div></article>
<article className="deliv-card"><div className="deliv-icon">🤖</div><h3>Custom AI Agent Pipelines</h3><p>Multi-step AI agents for complex tasks — competitive research, content generation, data extraction, or internal knowledge Q&amp;A. Built with LangChain, Claude, or GPT-4o per requirement.</p><div className="deliv-tags"><span className="tag">LangChain</span><span className="tag">GPT-4o</span><span className="tag">Custom Logic</span></div></article>
</div>
</div>
</section>
      <section className="process-section" aria-labelledby="proc-h2">
<div className="wrap">
<div className="sec-h"><div className="pill pill-id">How It Works</div><h2 id="proc-h2">From Brief to Live Automation in Days</h2><p>You gather the client requirement. We build it. You deliver it. Simple.</p></div>
<div className="steps-grid">
<div className="step"><div className="step-num">1</div><h4>Share the Brief</h4><p>You send us the client's workflow requirement — what needs to happen, which tools are involved, and what the trigger should be.</p></div>
<div className="step"><div className="step-num">2</div><h4>We Scope &amp; Build</h4><p>We review and confirm scope within 24 hours. Simple automations delivered in 3–5 days. Complex AI pipelines in 7–14 days.</p></div>
<div className="step"><div className="step-num">3</div><h4>You Review &amp; Approve</h4><p>We hand over the working automation for you to test. You share feedback — we refine until it's perfect.</p></div>
<div className="step"><div className="step-num">4</div><h4>Deploy &amp; Support</h4><p>Live in your client's environment. We provide 30 days of post-launch support — invisible to your client, always available to you.</p></div>
</div>
</div>
</section>
      <section aria-labelledby="why-h2">
<div className="wrap">
<div className="why-grid">
<div>
<div className="pill pill-id">Why Partner With Us</div>
<h2 id="why-h2">Sell AI Without Building an AI Team</h2>
<div className="why-list">
<div className="why-item"><div className="why-icon">🚀</div><div><h4>Launch an AI Service in Days, Not Months</h4><p>No hiring, no training, no R&amp;D. We have the AI expertise — you focus on selling and client relationships.</p></div></div>
<div className="why-item"><div className="why-icon">💰</div><div><h4>High-Margin Reseller Opportunity</h4><p>AI automation commands premium pricing. Build a recurring revenue stream on top of your existing services with high perceived value.</p></div></div>
<div className="why-item"><div className="why-icon">🔒</div><div><h4>Zero Attribution, NDA Guaranteed</h4><p>We sign NDA before any project. No mention of Click Decoded in any deliverable, documentation, or system. Your clients see only your agency.</p></div></div>
<div className="why-item"><div className="why-icon">🛠️</div><div><h4>Ongoing Support Included</h4><p>30-day post-launch support on every automation. Monthly maintenance retainers available — giving your clients continuous coverage without you managing it.</p></div></div>
</div>
</div>
<div className="why-visual">
<div className="partner-badge">🤖 AI Partner Snapshot</div>
<h3 style={{ color: '#fff', fontSize: '24px', marginBottom: '8px' }}>Automate Your Clients. Scale Your Agency.</h3>
<p style={{ color: 'rgba(255,255,255,.55)', fontSize: '14px', lineHeight: '1.7' }}>Agencies that add AI automation to their service stack see higher average deal values, stickier clients, and lower churn. We're the team behind your AI offering.</p>
<div className="partner-stats">
<div className="ps-item"><div className="ps-n">150+</div><div className="ps-l">Automations Built</div></div>
<div className="ps-item"><div className="ps-n">5 days</div><div className="ps-l">Simple Workflow TAT</div></div>
<div className="ps-item"><div className="ps-n">70%</div><div className="ps-l">Avg Task Time Saved</div></div>
<div className="ps-item"><div className="ps-n">NDA</div><div className="ps-l">Signed on Day 1</div></div>
</div>
</div>
</div>
</div>
</section>
      <section className="faq-section" aria-labelledby="faq-h2">
<div className="wrap">
<div className="sec-h"><div className="pill pill-id">FAQ</div><h2 id="faq-h2">White Label AI Automation — Frequently Asked</h2></div>
<div className="faq-grid">
<div className="fi"><button className="fi-q">What AI tools and platforms do you work with?</button><div className="fi-a">We work with n8n, Make (Integromat), Zapier, OpenAI API (GPT-4o), Anthropic Claude API, WhatsApp Business API, Twilio, HubSpot, Zoho CRM, Salesforce, Google Workspace, and Razorpay — among others. We'll match the stack to your client's existing tools.</div></div>
<div className="fi"><button className="fi-q">Do I need technical knowledge to resell these services?</button><div className="fi-a">No. You just need to gather the client's requirement — what they want automated, which tools they use, and what the expected output should be. We handle all the technical architecture, building, and testing.</div></div>
<div className="fi"><button className="fi-q">How is the automation delivered — hosted by you or the client?</button><div className="fi-a">We deliver to wherever the client needs it. n8n workflows can be self-hosted on the client's server or cloud VPS. WhatsApp bots are deployed on WhatsApp Business API with the client's own number. We configure and hand over fully working setups.</div></div>
<div className="fi"><button className="fi-q">What if the automation breaks after delivery?</button><div className="fi-a">All automations include 30 days of post-launch support at no extra charge. After that, maintenance retainers are available so we handle ongoing fixes, updates, and additions as part of a monthly arrangement between you and us.</div></div>
<div className="fi"><button className="fi-q">Can you build AI agents that use our client's own data?</button><div className="fi-a">Yes. We build RAG (retrieval-augmented generation) pipelines that train AI agents on your client's documents, product catalogues, or knowledge bases. The agent can then answer questions, draft content, or make decisions using proprietary client data.</div></div>
<div className="fi"><button className="fi-q">What information do you need to get started?</button><div className="fi-a">A brief describing: what process should be automated, which tools are involved (CRM, email, WhatsApp, etc.), what triggers the automation, and what the expected output or action should be. We'll handle scoping, timeline, and pricing based on your brief.</div></div>
</div>
</div>
</section>
      <section className="cta-section" id="contact" aria-labelledby="cta-h2">
<div className="wrap">
<h2 id="cta-h2">Add AI Automation to Your Agency Services Today.</h2>
<p>We build it. You sell it. Your brand on everything. NDA signed before day one.</p>
<div className="cta-btns">
<a href="mailto:hello@clickdecoded.com?subject=White Label AI Automation Partnership" className="btn btn-id">📧 Email Us to Partner</a>
<a href="https://wa.me/919407000101?text=Hi, I'm interested in White Label AI &amp; Automation services for my agency" target="_blank" rel="noopener" className="btn btn-ghost">💬 WhatsApp Us</a>
</div>
</div>
</section>
      <PageScript id="white-label-ai-0" code={js0} />
    </>
  )
}
