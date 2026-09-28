/* eslint-disable */
// src/app/services/workflow-automation/page.tsx — generated from workflow-automation.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "n8n Workflow Automation India | Click Decoded",
  description: "Expert n8n workflow automation services for Indian businesses. We build self-hosted, custom n8n workflows that connect your tools, automate data entry.",
  alternates: { canonical: "/services/workflow-automation" },
  openGraph: {
    title: "n8n Workflow Automation Services — Click Decoded",
    description: "Automate business processes with n8n — connect CRMs, WhatsApp, email, Google Sheets, and 300+ apps. Built and deployed by Click Decoded experts.",
    url: "/services/workflow-automation",
    type: "website",
  },
}

const css = `
:root{--n:#2A4573;--n2:#1e3460;--n-dark:#0f1e38;--b:#2A4573;--o:#EE7E1A;--o2:#d46e12;--am:#ea580c;--am2:#c2410c;--am3:#fff7ed;--w:#fff;--body:#1E293B;--m:#475569;--s:#64748b;--bg:#F4F7FC;--bdr:#E2E8F0;}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}html{scroll-behavior:smooth;overflow-x:hidden;}body{font-family:'Inter',system-ui,sans-serif;color:var(--body);background:#fff;-webkit-font-smoothing:antialiased;}a{text-decoration:none;color:inherit;}img,svg{display:block;}ul{list-style:none;}button{font-family:inherit;cursor:pointer;}
.wrap{max-width:1200px;margin:0 auto;padding:0 28px;}section{padding:88px 0;}h1,h2,h3,h4{font-weight:800;line-height:1.1;letter-spacing:-.025em;color:var(--n);}
.pill{display:inline-flex;align-items:center;gap:7px;padding:6px 14px;border-radius:99px;font-size:11.5px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;}
.pill-am{background:rgba(234,88,12,.1);color:var(--am);}
.sec-h{text-align:center;max-width:640px;margin:0 auto 52px;}.sec-h h2{font-size:36px;margin-top:12px;margin-bottom:14px;}.sec-h p{font-size:16px;color:var(--m);}
.btn{display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:10px;font-weight:700;font-size:14px;border:none;transition:all .18s;white-space:nowrap;cursor:pointer;}
.btn-am{background:var(--am);color:#fff;box-shadow:0 4px 18px rgba(234,88,12,.3);}.btn-am:hover{background:var(--am2);transform:translateY(-2px);}
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
.hero{background:linear-gradient(155deg,#1a0a00 0%,#200c00 50%,#120800 100%);padding:96px 0 80px;position:relative;overflow:hidden;}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 65% 55% at 70% 40%,rgba(234,88,12,.09) 0%,transparent 65%),radial-gradient(ellipse 40% 45% at 10% 80%,rgba(234,88,12,.05) 0%,transparent 60%);}
.hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;position:relative;z-index:2;}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;background:rgba(234,88,12,.15);border:1px solid rgba(234,88,12,.3);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:var(--am);margin-bottom:20px;}
.hero h1{font-size:52px;color:#fff;line-height:1.05;letter-spacing:-.04em;margin-bottom:20px;}.hero h1 em{font-style:normal;color:var(--am);}
.hero-desc{font-size:17px;color:rgba(255,255,255,.65);line-height:1.7;margin-bottom:32px;max-width:480px;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:36px;}
.hero-trust{display:flex;gap:22px;flex-wrap:wrap;}.hero-trust-item{display:flex;align-items:center;gap:7px;font-size:13px;color:rgba(255,255,255,.5);}.hero-trust-item strong{color:#fff;}
.hero-visual{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:20px;overflow:hidden;}
.hv-header{background:rgba(234,88,12,.1);border-bottom:1px solid rgba(255,255,255,.07);padding:16px 20px;display:flex;align-items:center;gap:12px;}
.hv-icon{width:36px;height:36px;background:linear-gradient(135deg,var(--am),var(--am2));border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:17px;}
.hv-title{font-size:14px;font-weight:700;color:#fff;}.hv-sub{font-size:11px;color:rgba(255,255,255,.4);}
.hv-body{padding:20px;}
.wf-node{display:flex;align-items:center;gap:12px;margin-bottom:10px;}
.wf-dot{width:36px;height:36px;border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0;}
.wf-dot.t{background:rgba(234,88,12,.15);border:1px solid rgba(234,88,12,.3);}
.wf-dot.a{background:rgba(59,130,246,.15);border:1px solid rgba(59,130,246,.3);}
.wf-dot.c{background:rgba(37,211,102,.12);border:1px solid rgba(37,211,102,.2);}
.wf-dot.e{background:rgba(239,68,68,.12);border:1px solid rgba(239,68,68,.2);}
.wf-info{flex:1;}.wf-info strong{display:block;font-size:12px;color:#fff;font-weight:600;}.wf-info span{font-size:11px;color:rgba(255,255,255,.5);}
.wf-arrow{width:2px;height:14px;background:rgba(255,255,255,.1);margin:0 0 10px 17px;}
.wf-row{display:flex;gap:10px;margin-top:14px;flex-wrap:wrap;}
.wf-tag{padding:4px 10px;border-radius:5px;font-size:11px;font-weight:600;}
.wf-tag.g{background:rgba(37,211,102,.12);color:#25D366;}.wf-tag.b{background:rgba(59,130,246,.15);color:#60a5fa;}.wf-tag.o{background:rgba(234,88,12,.15);color:var(--am);}
.stats-strip{background:var(--am);padding:0;}
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(0,0,0,.1);}
.stat-box{padding:32px 24px;text-align:center;background:var(--am);}
.stat-n{font-size:40px;font-weight:900;color:#fff;line-height:1;letter-spacing:-.03em;}
.stat-l{font-size:12px;color:rgba(255,255,255,.75);margin-top:6px;font-weight:500;text-transform:uppercase;letter-spacing:.06em;}
.services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.svc-card{background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:28px 24px;transition:.2s;}
.svc-card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(234,88,12,.1);border-color:rgba(234,88,12,.25);}
.svc-icon{width:50px;height:50px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:16px;background:rgba(234,88,12,.08);border:1px solid rgba(234,88,12,.2);}
.svc-card h3{font-size:17px;margin-bottom:10px;}.svc-card p{font-size:13.5px;color:var(--m);line-height:1.65;margin-bottom:14px;}
.tag-row{display:flex;flex-wrap:wrap;gap:6px;}.tag{padding:4px 10px;background:var(--bg);border:1px solid var(--bdr);border-radius:6px;font-size:11.5px;font-weight:600;color:var(--s);}
.integrations-section{background:var(--bg);}
.int-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:12px;margin-top:40px;}
.int-chip{background:#fff;border:1px solid var(--bdr);border-radius:12px;padding:14px 10px;text-align:center;font-size:12px;font-weight:600;color:var(--n);transition:.15s;}
.int-chip:hover{border-color:rgba(234,88,12,.3);box-shadow:0 4px 16px rgba(234,88,12,.08);}
.int-chip .ic-em{font-size:22px;display:block;margin-bottom:5px;}
.vs-section{background:var(--bg);}
.vs-table{width:100%;border-collapse:separate;border-spacing:0;border-radius:16px;overflow:hidden;margin-top:40px;box-shadow:0 4px 24px rgba(13,27,42,.07);}
.vs-table th,.vs-table td{padding:14px 18px;text-align:left;font-size:13.5px;border-bottom:1px solid var(--bdr);}
.vs-table thead th{background:var(--n);color:#fff;font-weight:700;font-size:12px;letter-spacing:.05em;text-transform:uppercase;}
.vs-table thead th:first-child{border-radius:0;}
.vs-table tbody tr:last-child td{border-bottom:none;}
.vs-table tbody tr:nth-child(even) td{background:var(--bg);}
.vs-table td:first-child{font-weight:600;color:var(--n);}
.c-yes{color:#16a34a;font-weight:700;}.c-no{color:#dc2626;font-weight:700;}.c-am{color:var(--am);font-weight:700;}
.process-section{background:#fff;}
.steps-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin-top:52px;}
.step{text-align:center;}.step-num{width:52px;height:52px;background:linear-gradient(135deg,var(--am),var(--am2));border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#fff;margin:0 auto 18px;}
.step h4{font-size:15px;margin-bottom:8px;}.step p{font-size:13.5px;color:var(--m);line-height:1.6;}
.faq-section{background:var(--bg);}
.faq-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:52px;}
.fi{background:#fff;border:1px solid var(--bdr);border-radius:14px;overflow:hidden;}
.fi-q{width:100%;text-align:left;background:none;border:none;padding:20px 22px;font-size:15px;font-weight:600;color:var(--n);display:flex;justify-content:space-between;align-items:center;cursor:pointer;}
.fi-q::after{content:'+';font-size:20px;font-weight:400;color:var(--s);transition:.2s;}.fi.on .fi-q::after{transform:rotate(45deg);color:var(--am);}
.fi-a{display:none;padding:0 22px 20px;font-size:14px;color:var(--m);line-height:1.7;}.fi.on .fi-a{display:block;}
.cta-section{background:linear-gradient(135deg,#1a0a00,#200c00);padding:88px 0;text-align:center;position:relative;overflow:hidden;}
.cta-section::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(234,88,12,.07),transparent);}
.cta-section h2{color:#fff;font-size:40px;margin-bottom:14px;position:relative;}.cta-section p{color:rgba(255,255,255,.6);font-size:17px;margin-bottom:36px;position:relative;max-width:540px;margin-left:auto;margin-right:auto;}
.cta-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;position:relative;}
@media(max-width:900px){.hero-grid{grid-template-columns:1fr;}.faq-grid,.services-grid{grid-template-columns:1fr 1fr;}.stats-grid{grid-template-columns:repeat(2,1fr);}.steps-grid{grid-template-columns:1fr 1fr;}.int-grid{grid-template-columns:repeat(3,1fr);}}
@media(max-width:600px){.services-grid,.faq-grid,.steps-grid,.int-grid{grid-template-columns:1fr 1fr;}.hero h1{font-size:36px;}.hb{display:flex;}.dmenu{display:none;}}

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
      "name": "n8n Workflow Automation Services",
      "provider": {
        "@type": "Organization",
        "name": "Click Decoded",
        "url": "https://clickdecoded.com"
      },
      "description": "Professional n8n workflow automation services for Indian businesses. We design, build, and host n8n automation workflows that connect business tools, automate repetitive tasks, and eliminate manual data entry.",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": "n8n Workflow Automation",
      "url": "https://www.clickdecoded.com/services/workflow-automation"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is n8n and why use it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "n8n is an open-source workflow automation tool that connects 300+ apps and services. Unlike Zapier or Make, n8n can be self-hosted (your data stays private), has no per-task pricing, and supports complex logic including AI integrations, loops, and conditional branching."
          }
        },
        {
          "@type": "Question",
          "name": "Is n8n better than Zapier or Make?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For most B2B businesses, yes. n8n offers self-hosting (data privacy), no per-execution fees at scale, advanced features like sub-workflows and AI nodes, and is far more customisable. Zapier is simpler but expensive at volume. n8n gives enterprise-grade power at a fraction of the cost."
          }
        },
        {
          "@type": "Question",
          "name": "Do you host and maintain the n8n instance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We can set up a self-hosted n8n instance on your own server or cloud (AWS, GCP, DigitalOcean), or you can use our managed n8n hosting. We handle updates, backups, and monitoring so you never need to touch the server."
          }
        },
        {
          "@type": "Question",
          "name": "Can n8n connect with Indian business tools?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. n8n integrates natively with WhatsApp Business API, Razorpay, Zoho CRM, Tally via API, IndiaMART, JustDial (webhook-based), Google Workspace, and via HTTP nodes with any Indian SaaS platform that has an API."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if a workflow fails?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "n8n has built-in error handling and retry logic. We configure error notifications via email or WhatsApp, and all failed executions are logged with full data for debugging. Our maintenance plans include monitoring and rapid response to any failures."
          }
        },
        {
          "@type": "Question",
          "name": "How much does n8n workflow automation cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A single workflow build starts at ₹6,000–12,000 depending on complexity. Full automation packages with 5–10 workflows, hosting setup, and 30-day support range from ₹20,000–60,000. Ongoing maintenance retainers are available from ₹3,000/month."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How n8n Workflow Automation India Works — Our Process",
      "description": "Expert n8n workflow automation services for Indian businesses. We build self-hosted, custom n8n workflows that connect your tools, automate data entry, and save 20+ hours per week.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Process Mapping (Day 1)",
          "text": "We document your current manual workflow step-by-step, identify inputs/outputs, and map every tool involved in the process."
        },
        {
          "@type": "HowToStep",
          "name": "Workflow Design",
          "text": "We design the n8n workflow canvas — nodes, conditions, error handlers — and share it for review before writing a single line of code."
        },
        {
          "@type": "HowToStep",
          "name": "Build, Test & Harden",
          "text": "We build the workflow, test with real data across 20+ edge cases, add error handling and retry logic, and document every node."
        },
        {
          "@type": "HowToStep",
          "name": "Deploy & Train",
          "text": "We deploy to your n8n instance, walk you through monitoring, and hand over a simple visual guide. 30-day support included."
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
          "name": "Workflow Automation",
          "item": "https://www.clickdecoded.com/services/workflow-automation"
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
      <nav className="breadcrumb"><div className="wrap"><ol className="bc-list"><li><a href="/">Home</a></li><li>›</li><li><a href="/services/seo">Services</a></li><li>›</li><li>n8n Workflows</li></ol></div></nav>
      <section className="hero" aria-labelledby="hero-h1">
<div className="wrap">
<div className="hero-grid">
<div>
<div className="hero-eyebrow">⚙️ n8n Workflow Automation</div>
<h1 id="hero-h1">Connect Every Tool.<br />Automate Every<br /><em>Process.</em></h1>
<p className="hero-desc">n8n is the most powerful open-source automation platform available — and we are one of India's few teams that builds production-grade n8n workflows for real businesses. Self-hosted, private, and infinitely scalable.</p>
<div className="hero-btns">
<a href="#contact" className="btn btn-am">Get a Free Workflow Consultation →</a>
<a href="/services/seo" className="btn btn-ghost">See Use Cases</a>
</div>
<div className="hero-trust">
<div className="hero-trust-item">✓ <strong>300+ app integrations</strong></div>
<div className="hero-trust-item">✓ <strong>Self-hosted / data stays private</strong></div>
<div className="hero-trust-item">✓ <strong>No per-run pricing</strong></div>
</div>
</div>
<div>
<div className="hero-visual">
<div className="hv-header">
<div className="hv-icon">⚙️</div>
<div><div className="hv-title">n8n Workflow: Lead-to-Sale Pipeline</div><div className="hv-sub">Active · 342 executions this week</div></div>
</div>
<div className="hv-body">
<div className="wf-node"><div className="wf-dot t">🌐</div><div className="wf-info"><strong>Webhook Trigger</strong><span>IndiaMART / Website form → fires on new inquiry</span></div></div>
<div className="wf-arrow"></div>
<div className="wf-node"><div className="wf-dot a">🗂️</div><div className="wf-info"><strong>Zoho CRM → Create Lead</strong><span>Maps fields, assigns to region-based sales rep</span></div></div>
<div className="wf-arrow"></div>
<div className="wf-node"><div className="wf-dot a">💬</div><div className="wf-info"><strong>WhatsApp: Send Welcome Message</strong><span>Template message sent within 60 seconds</span></div></div>
<div className="wf-arrow"></div>
<div className="wf-node"><div className="wf-dot c">🔀</div><div className="wf-info"><strong>IF: Lead score &gt; 70?</strong><span>Route hot leads for immediate call scheduling</span></div></div>
<div className="wf-arrow"></div>
<div className="wf-node"><div className="wf-dot a">📊</div><div className="wf-info"><strong>Google Sheets: Log + Sales Slack alert</strong><span>Full data captured, team notified instantly</span></div></div>
<div className="wf-row"><span className="wf-tag g">✓ Live</span><span className="wf-tag b">n8n Self-hosted</span><span className="wf-tag o">0 errors this week</span></div>
</div>
</div>
</div>
</div>
</div>
</section>
      <div className="stats-strip"><div className="wrap"><div className="stats-grid">
<div className="stat-box"><div className="stat-n">300+</div><div className="stat-l">n8n Integrations</div></div>
<div className="stat-box"><div className="stat-n">20h</div><div className="stat-l">Avg Hours Saved/Week</div></div>
<div className="stat-box"><div className="stat-n">3–7</div><div className="stat-l">Days to Go Live</div></div>
<div className="stat-box"><div className="stat-n">∞</div><div className="stat-l">Executions (No Limits)</div></div>
</div></div></div>
      <section id="services"><div className="wrap">
<div className="sec-h"><div className="pill pill-am">What We Automate</div><h2>n8n Workflows Built for Real Indian Businesses</h2><p>From lead capture to invoice generation — here are the most impactful workflows we build for our clients.</p></div>
<div className="services-grid">
<article className="svc-card"><div className="svc-icon">🧲</div><h3>Lead Capture &amp; Distribution</h3><p>Automatically capture leads from IndiaMART, JustDial, 99acres, website forms, and Facebook Ads — then route, score, and assign each lead to the right sales rep instantly via WhatsApp or CRM.</p><div className="tag-row"><span className="tag">IndiaMART</span><span className="tag">Webhook</span><span className="tag">Auto-assign</span></div></article>
<article className="svc-card"><div className="svc-icon">🔗</div><h3>CRM Sync &amp; Data Entry</h3><p>Eliminate all manual data entry. Any lead or event in one platform automatically creates/updates records in your CRM — HubSpot, Zoho, Salesforce — with no human touch required.</p><div className="tag-row"><span className="tag">HubSpot</span><span className="tag">Zoho CRM</span><span className="tag">Bi-directional</span></div></article>
<article className="svc-card"><div className="svc-icon">📄</div><h3>Invoice &amp; Document Automation</h3><p>New deal closed in CRM → PDF invoice generated → sent via email → logged in accounting software → payment link via WhatsApp. All in under 90 seconds with zero manual steps.</p><div className="tag-row"><span className="tag">Razorpay</span><span className="tag">PDF gen</span><span className="tag">Gmail API</span></div></article>
<article className="svc-card"><div className="svc-icon">📊</div><h3>Scheduled Reporting</h3><p>Pull data from Google Analytics, Google Ads, Meta Ads, or your database every Monday — format it into a branded report, and email it automatically to your clients or leadership team.</p><div className="tag-row"><span className="tag">GA4 API</span><span className="tag">Looker Studio</span><span className="tag">Cron trigger</span></div></article>
<article className="svc-card"><div className="svc-icon">🤖</div><h3>AI-Powered Workflows</h3><p>Add OpenAI, Claude, or Gemini nodes inside your n8n workflow to classify, summarise, translate, or generate content automatically — as part of any existing business process.</p><div className="tag-row"><span className="tag">OpenAI node</span><span className="tag">Classify</span><span className="tag">Summarise</span></div></article>
<article className="svc-card"><div className="svc-icon">🔔</div><h3>Alert &amp; Escalation Systems</h3><p>Set up intelligent monitoring workflows — if a Google Ads CTR drops, a review is posted, or a support ticket is unresolved for 2 hours, the right person is alerted immediately via WhatsApp or Slack.</p><div className="tag-row"><span className="tag">Monitoring</span><span className="tag">Escalation</span><span className="tag">Alerts</span></div></article>
</div>
</div></section>
      <section className="integrations-section"><div className="wrap">
<div className="sec-h"><div className="pill pill-am">Integrations</div><h2>300+ Tools. One Platform.</h2><p>n8n connects with virtually every business tool available in India and globally — without per-run fees.</p></div>
<div className="int-grid">
<div className="int-chip"><span className="ic-em">💬</span>WhatsApp API</div>
<div className="int-chip"><span className="ic-em">🗂️</span>Zoho CRM</div>
<div className="int-chip"><span className="ic-em">🎯</span>HubSpot</div>
<div className="int-chip"><span className="ic-em">📊</span>Google Sheets</div>
<div className="int-chip"><span className="ic-em">📧</span>Gmail / Outlook</div>
<div className="int-chip"><span className="ic-em">💳</span>Razorpay</div>
<div className="int-chip"><span className="ic-em">🔍</span>Google Ads</div>
<div className="int-chip"><span className="ic-em">📘</span>Meta Ads</div>
<div className="int-chip"><span className="ic-em">📈</span>GA4 / GSC</div>
<div className="int-chip"><span className="ic-em">🧠</span>OpenAI</div>
<div className="int-chip"><span className="ic-em">🛒</span>WooCommerce</div>
<div className="int-chip"><span className="ic-em">📋</span>Notion / Airtable</div>
<div className="int-chip"><span className="ic-em">💼</span>Salesforce</div>
<div className="int-chip"><span className="ic-em">📞</span>Twilio</div>
<div className="int-chip"><span className="ic-em">🗓️</span>Google Calendar</div>
<div className="int-chip"><span className="ic-em">🔔</span>Slack / Teams</div>
<div className="int-chip"><span className="ic-em">📦</span>Shiprocket</div>
<div className="int-chip"><span className="ic-em">🌐</span>Any API / Webhook</div>
</div>
</div></section>
      <section className="vs-section"><div className="wrap">
<div className="sec-h"><div className="pill pill-am">n8n vs Alternatives</div><h2>Why Businesses Choose n8n</h2><p>Not all automation tools are equal. Here's how n8n compares to the popular alternatives.</p></div>
<table className="vs-table">
<thead><tr><th>Feature</th><th>n8n (Self-hosted)</th><th>Zapier</th><th>Make (Integromat)</th></tr></thead>
<tbody>
<tr><td>Self-hosting (data privacy)</td><td className="c-yes">✓ Yes</td><td className="c-no">✗ No</td><td className="c-no">✗ No</td></tr>
<tr><td>Per-run pricing</td><td className="c-yes">✓ No limit</td><td className="c-no">✗ Paid per task</td><td className="c-no">✗ Paid per operation</td></tr>
<tr><td>Custom code support</td><td className="c-yes">✓ Full JS/Python</td><td className="c-no">✗ Very limited</td><td className="c-am">~ Partial</td></tr>
<tr><td>AI model integration</td><td className="c-yes">✓ Native nodes</td><td className="c-am">~ Limited</td><td className="c-am">~ Limited</td></tr>
<tr><td>Indian tool support (Razorpay, Zoho, etc.)</td><td className="c-yes">✓ Full via API</td><td className="c-am">~ Partial</td><td className="c-am">~ Partial</td></tr>
<tr><td>Cost at scale (500+ runs/day)</td><td className="c-yes">✓ Fixed hosting cost</td><td className="c-no">✗ Very expensive</td><td className="c-no">✗ Expensive</td></tr>
<tr><td>Sub-workflows &amp; complex logic</td><td className="c-yes">✓ Full support</td><td className="c-no">✗ Limited</td><td className="c-am">~ Partial</td></tr>
</tbody>
</table>
</div></section>
      <section className="process-section"><div className="wrap">
<div className="sec-h"><div className="pill pill-am">Our Process</div><h2>Your Workflow Goes Live in 4 Steps</h2></div>
<div className="steps-grid">
<div className="step"><div className="step-num">1</div><h4>Process Mapping (Day 1)</h4><p>We document your current manual workflow step-by-step, identify inputs/outputs, and map every tool involved in the process.</p></div>
<div className="step"><div className="step-num">2</div><h4>Workflow Design</h4><p>We design the n8n workflow canvas — nodes, conditions, error handlers — and share it for review before writing a single line of code.</p></div>
<div className="step"><div className="step-num">3</div><h4>Build, Test &amp; Harden</h4><p>We build the workflow, test with real data across 20+ edge cases, add error handling and retry logic, and document every node.</p></div>
<div className="step"><div className="step-num">4</div><h4>Deploy &amp; Train</h4><p>We deploy to your n8n instance, walk you through monitoring, and hand over a simple visual guide. 30-day support included.</p></div>
</div>
</div></section>
      <section className="faq-section"><div className="wrap">
<div className="sec-h"><div className="pill pill-am">FAQ</div><h2>n8n Automation — Common Questions</h2></div>
<div className="faq-grid">
<div className="fi"><button className="fi-q">What is n8n and why use it?</button><div className="fi-a">n8n is an open-source workflow automation tool that connects 300+ apps. Unlike Zapier or Make, it can be self-hosted (your data stays private), has no per-task pricing, and supports complex AI integrations, loops, and custom JavaScript — making it ideal for growing Indian businesses.</div></div>
<div className="fi"><button className="fi-q">Is n8n better than Zapier?</button><div className="fi-a">For most B2B businesses, yes. n8n offers self-hosting (complete data privacy), no per-execution fees at scale, full custom code support, and far more control over complex workflows. Zapier is simpler but becomes very expensive as your automation volume grows.</div></div>
<div className="fi"><button className="fi-q">Do you handle hosting and setup?</button><div className="fi-a">Yes. We set up a self-hosted n8n instance on your server or cloud (AWS, GCP, DigitalOcean, Hostinger VPS), handle all configuration, SSL, and backups. You get a fully running private n8n without touching any command line.</div></div>
<div className="fi"><button className="fi-q">Can n8n connect with Indian tools like Razorpay and Zoho?</button><div className="fi-a">Absolutely. n8n connects with WhatsApp Business API, Razorpay, Zoho CRM, Tally (via API), IndiaMART (via webhooks), JustDial, and virtually any Indian SaaS that has an API or webhook capability.</div></div>
<div className="fi"><button className="fi-q">What if a workflow stops working?</button><div className="fi-a">n8n has built-in error handling. We configure failure notifications to your WhatsApp or email, and all failed runs are logged for debugging. Our maintenance plans include proactive monitoring and rapid response.</div></div>
<div className="fi"><button className="fi-q">How much does n8n automation cost?</button><div className="fi-a">A single workflow build starts from ₹6,000–12,000. Full automation packages (5–10 workflows + hosting setup + 30-day support) typically range from ₹20,000–60,000 depending on complexity. Monthly maintenance is available from ₹3,000/month.</div></div>
</div>
</div></section>
      <section className="cta-section" id="contact"><div className="wrap">
<h2>Build Workflows That Work While You Don't.</h2>
<p>Tell us your most repetitive manual process. We'll design a free workflow map showing exactly how n8n can automate it for you — in your first consultation call.</p>
<div className="cta-btns">
<a href="mailto:hello@clickdecoded.com?subject=n8n Workflow Automation Inquiry" className="btn btn-am">📧 Book Free Workflow Consultation</a>
<a href="https://wa.me/919407000101?text=Hi, I want to automate my business workflows with n8n" target="_blank" rel="noopener" className="btn btn-ghost">💬 WhatsApp Us</a>
</div>
</div></section>
      <PageScript id="services-workflow-automation-0" code={js0} />
    </>
  )
}
