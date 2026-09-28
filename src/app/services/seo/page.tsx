/* eslint-disable */
// src/app/services/seo/page.tsx — generated from seo-services.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "SEO Services India | Click Decoded",
  description: "Click Decoded delivers result-driven SEO services across India. Technical SEO, local SEO, link building, content strategy — proven to rank websites #1 on.",
  alternates: { canonical: "/services/seo" },
  openGraph: {
    title: "SEO Services India — Click Decoded",
    description: "Rank #1 on Google with proven SEO strategies. Technical SEO, content, and link building that drives real business revenue.",
    url: "/services/seo",
    type: "website",
  },
}

const css = `
:root {
  --n: #2A4573; --n2: #1e3460; --n-dark: #0f1e38;
  --o: #EE7E1A; --o2: #d46e12;
  --body: #1E293B; --m: #475569; --s: #64748b;
  --bg: #F4F7FC; --bdr: #E2E8F0;
  --seo: #2A4573; --seo2: #1e3460;
}
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; overflow-x: hidden; }
body { font-family: 'Inter', system-ui, sans-serif; color: var(--body); background: #fff; -webkit-font-smoothing: antialiased; }
a { text-decoration: none; color: inherit; } img, svg { display: block; } ul { list-style: none; } button { font-family: inherit; cursor: pointer; }
.wrap { max-width: 1200px; margin: 0 auto; padding: 0 28px; }
section { padding: 88px 0; }
h1, h2, h3, h4 { font-weight: 800; line-height: 1.1; letter-spacing: -.025em; color: var(--n); }

.pill { display: inline-flex; align-items: center; gap: 7px; padding: 6px 14px; border-radius: 99px; font-size: 11.5px; font-weight: 700; text-transform: uppercase; letter-spacing: .12em; }
.pill-o { background: rgba(238,126,26,.12); color: var(--o); }
.pill-b { background: rgba(42,69,115,.1); color: var(--n); }
.pill-seo { background: rgba(42,69,115,.15); color: #3b82f6; border: 1px solid rgba(59,130,246,.2); }

.sec-h { text-align: center; max-width: 640px; margin: 0 auto 52px; }
.sec-h h2 { font-size: 36px; margin-top: 12px; margin-bottom: 14px; }
.sec-h p { font-size: 16px; color: var(--m); }

.btn { display: inline-flex; align-items: center; gap: 8px; padding: 13px 26px; border-radius: 10px; font-weight: 700; font-size: 14px; border: none; transition: all .18s; white-space: nowrap; cursor: pointer; }
.btn-o { background: var(--o); color: #fff; box-shadow: 0 4px 18px rgba(238,126,26,.3); }
.btn-o:hover { background: var(--o2); transform: translateY(-2px); box-shadow: 0 8px 28px rgba(238,126,26,.4); }
.btn-n { background: var(--n); color: #fff; box-shadow: 0 4px 18px rgba(42,69,115,.25); }
.btn-n:hover { background: var(--n2); transform: translateY(-2px); }
.btn-ghost { background: transparent; color: #fff; border: 1.5px solid rgba(255,255,255,.35); }
.btn-ghost:hover { background: rgba(255,255,255,.08); }
.btn-sm { padding: 10px 20px; font-size: 13px; }
.btn svg { flex-shrink: 0; transition: transform .18s; }
.btn:hover svg { transform: translateX(3px); }

/* TOPBAR */
.topbar { background: var(--n-dark); height: 40px; display: flex; align-items: center; }
.topbar-inner { max-width: 1200px; margin: 0 auto; padding: 0 28px; display: flex; justify-content: space-between; align-items: center; width: 100%; }
.topbar-left { display: flex; gap: 20px; }
.topbar-left a { font-size: 12px; color: rgba(255,255,255,.6); display: flex; align-items: center; gap: 5px; }
.topbar-right { display: flex; gap: 8px; }
.tb-btn { display: inline-flex; align-items: center; gap: 6px; padding: 5px 12px; border-radius: 6px; font-size: 11.5px; font-weight: 700; transition: .15s; }
.tb-call { background: rgba(238,126,26,.15); color: var(--o); border: 1px solid rgba(238,126,26,.25); }
.tb-wa { background: rgba(37,211,102,.15); color: #25D366; border: 1px solid rgba(37,211,102,.25); }
.tb-call:hover { background: var(--o); color: #fff; }
.tb-wa:hover { background: #25D366; color: #fff; }

/* HEADER */
#hdr { background: rgba(255,255,255,.97); backdrop-filter: blur(14px); border-bottom: 1px solid var(--bdr); transition: box-shadow .2s; position: sticky; top: 0; z-index: 100; }
#hdr.up { box-shadow: 0 4px 32px rgba(13,27,42,.09); }
.nav { display: flex; align-items: center; justify-content: space-between; height: 70px; gap: 16px; }
.dmenu { display: flex; align-items: center; gap: 2px; }
.dmenu > li { position: relative; }
.dmenu > li > a { display: flex; align-items: center; gap: 5px; padding: 9px 12px; font-size: 13.5px; font-weight: 600; color: var(--n); border-radius: 8px; transition: .15s; }
.dmenu > li > a:hover { background: var(--bg); }
.dcar { width: 10px; height: 10px; opacity: .5; transition: transform .18s; flex-shrink: 0; }
.dmenu > li:hover .dcar { transform: rotate(180deg); }
.mega { position: absolute; top: calc(100% + 10px); left: 50%; transform: translateX(-50%) translateY(10px); background: #fff; border: 1px solid var(--bdr); border-radius: 18px; padding: 26px; box-shadow: 0 24px 64px rgba(13,27,42,.14); opacity: 0; visibility: hidden; pointer-events: none; transition: opacity .18s, transform .18s; }
.mega.wide { width: 940px; display: grid; grid-template-columns: repeat(5,1fr); gap: 22px; }
.mega.slim { width: 296px; left: auto; right: 0; transform: translateY(10px); }
.dmenu > li:hover .mega { opacity: 1; visibility: visible; pointer-events: all; transform: translateX(-50%) translateY(0); }
.dmenu > li:hover .mega.slim { transform: translateY(0); }
.dmenu>li::after{content:'';position:absolute;top:100%;left:-40px;right:-40px;height:14px;}
.mc h5 { font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: .1em; color: var(--n); margin-bottom: 11px; }
.mc a { display: block; position: relative; padding: 5px 0 5px 11px; font-size: 13px; font-weight: 500; color: var(--body); transition: color .14s, padding-left .14s; }
.mc a::before { content: ''; position: absolute; left: 0; top: 50%; transform: translateY(-50%); width: 2px; height: 0; border-radius: 1px; background: var(--o); transition: height .15s cubic-bezier(.22,1,.36,1); }
.mc a:hover { color: var(--o); padding-left: 14px; }
.mc a:hover::before { height: 13px; }
.mega.slim a { display: block; padding: 9px 12px; font-size: 13px; font-weight: 500; color: var(--body); border-radius: 8px; transition: .15s; }
.mega.slim a:hover { background: var(--bg); color: var(--o); }
.mega.slim a small { display: block; font-size: 11px; color: var(--s); font-weight: 400; margin-top: 1px; }
.navcta { display: flex; align-items: center; gap: 10px; }
.hb { background: none; border: none; display: none; flex-direction: column; gap: 5px; padding: 4px; }
.hb span { display: block; width: 22px; height: 2px; background: var(--n); border-radius: 1px; transition: .2s; }
.mnav { display: none; position: fixed; inset: 0; background: #fff; z-index: 200; overflow-y: auto; padding: 24px 22px 40px; }
.mnav.on { display: block; }
.ma { border-bottom: 1px solid var(--bdr); }
.ma > button { width: 100%; text-align: left; background: none; border: none; padding: 15px 0; font-size: 15px; font-weight: 600; color: var(--n); display: flex; justify-content: space-between; }
.ms { display: none; padding: 0 0 16px; }
.ma.on .ms { display: block; }
.ms a { display: block; padding: 7px 0; font-size: 14px; color: var(--m); }
.ms h6 { font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: .1em; color: var(--n); margin: 12px 0 4px; }

/* BREADCRUMB */
.breadcrumb { background: var(--bg); padding: 12px 0; border-bottom: 1px solid var(--bdr); }
.bc-list { display: flex; align-items: center; gap: 8px; font-size: 12.5px; color: var(--s); list-style: none; }
.bc-list a { color: var(--n); font-weight: 500; }
.bc-list a:hover { color: var(--o); }
.bc-sep { opacity: .4; }

/* ── HERO ── */
.seo-hero {
  background: linear-gradient(155deg, #080f1e 0%, #0d1a35 45%, #0a1628 100%);
  padding: 96px 0 80px; position: relative; overflow: hidden;
}
.seo-hero::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 60% 55% at 68% 30%, rgba(59,130,246,.08) 0%, transparent 65%),
    radial-gradient(ellipse 40% 50% at 15% 75%, rgba(238,126,26,.06) 0%, transparent 60%),
    radial-gradient(ellipse 25% 25% at 90% 85%, rgba(255,255,255,.02) 0%, transparent 60%);
}
.seo-hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; position: relative; z-index: 2; }
.seo-eyebrow { display: inline-flex; align-items: center; gap: 8px; padding: 6px 14px; background: rgba(59,130,246,.12); border: 1px solid rgba(59,130,246,.25); border-radius: 99px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .12em; color: #60a5fa; margin-bottom: 20px; }
.seo-hero h1 { font-size: 52px; color: #fff; line-height: 1.05; letter-spacing: -.04em; margin-bottom: 20px; }
.seo-hero h1 em { font-style: normal; background: linear-gradient(135deg, #f59e0b, var(--o)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.seo-hero-desc { font-size: 17px; color: rgba(255,255,255,.62); line-height: 1.7; margin-bottom: 32px; max-width: 480px; }
.seo-hero-btns { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 40px; }
.seo-hero-trust { display: flex; gap: 24px; flex-wrap: wrap; }
.seo-trust-item { display: flex; align-items: center; gap: 8px; font-size: 13px; color: rgba(255,255,255,.5); }
.seo-trust-item strong { color: #fff; font-weight: 700; }

/* ── SERP MOCKUP ── */
.serp-mock {
  background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.1);
  border-radius: 20px; overflow: hidden; backdrop-filter: blur(8px);
  box-shadow: 0 28px 70px rgba(0,0,0,.45);
}
.serp-browser-bar {
  background: rgba(255,255,255,.06); padding: 10px 14px;
  border-bottom: 1px solid rgba(255,255,255,.07);
  display: flex; align-items: center; gap: 10px;
}
.serp-dots { display: flex; gap: 5px; }
.serp-dots span { width: 9px; height: 9px; border-radius: 50%; }
.serp-dots span:nth-child(1) { background: #ff5f57; }
.serp-dots span:nth-child(2) { background: #ffbd2e; }
.serp-dots span:nth-child(3) { background: #28c840; }
.serp-url-bar {
  flex: 1; background: rgba(255,255,255,.08); border-radius: 6px;
  padding: 5px 12px; font-size: 11px; color: rgba(255,255,255,.45);
  display: flex; align-items: center; gap: 6px;
}
.serp-url-bar svg { flex-shrink: 0; }
.serp-body { padding: 16px; }
.serp-search-box {
  background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.12);
  border-radius: 24px; padding: 10px 18px;
  display: flex; align-items: center; gap: 10px; margin-bottom: 14px;
}
.serp-search-icon { font-size: 14px; opacity: .5; flex-shrink: 0; }
.serp-query { font-size: 13px; color: rgba(255,255,255,.8); font-weight: 500; min-height: 18px; }
.serp-cursor { display: inline-block; width: 1px; height: 14px; background: rgba(255,255,255,.7); margin-left: 1px; animation: blink .8s step-end infinite; vertical-align: middle; }
@keyframes blink { 0%,100%{ opacity:1; } 50%{ opacity:0; } }
.serp-results { display: flex; flex-direction: column; gap: 2px; }
.serp-row {
  display: flex; align-items: center; gap: 10px;
  padding: 8px 10px; border-radius: 10px;
  transition: all .6s cubic-bezier(.22,1,.36,1);
  position: relative;
}
.serp-row.highlight { background: rgba(238,126,26,.1); border: 1px solid rgba(238,126,26,.25); }
.serp-rank {
  width: 22px; height: 22px; border-radius: 6px;
  background: rgba(255,255,255,.08); color: rgba(255,255,255,.4);
  font-size: 11px; font-weight: 800; display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; transition: all .4s;
}
.serp-row.highlight .serp-rank { background: var(--o); color: #fff; }
.serp-content { flex: 1; min-width: 0; }
.serp-site { font-size: 10px; color: rgba(255,255,255,.3); margin-bottom: 2px; }
.serp-row.highlight .serp-site { color: rgba(238,126,26,.7); }
.serp-title { font-size: 12px; font-weight: 600; color: rgba(255,255,255,.6); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.serp-row.highlight .serp-title { color: #fff; }
.serp-badge {
  padding: 3px 8px; background: linear-gradient(135deg, var(--o), #f59e0b);
  border-radius: 5px; font-size: 9.5px; font-weight: 800; color: #fff;
  white-space: nowrap; flex-shrink: 0; opacity: 0; transition: opacity .4s .3s;
}
.serp-row.highlight .serp-badge { opacity: 1; }
.serp-stat-bar {
  margin-top: 12px; padding: 10px 12px;
  background: rgba(59,130,246,.08); border: 1px solid rgba(59,130,246,.15);
  border-radius: 10px; display: flex; align-items: center; justify-content: space-between;
}
.serp-stat-item { text-align: center; }
.serp-stat-val { font-size: 15px; font-weight: 900; color: #60a5fa; }
.serp-stat-lbl { font-size: 9px; color: rgba(255,255,255,.35); text-transform: uppercase; letter-spacing: .06em; margin-top: 2px; }

/* ── STATS STRIP ── */
.seo-stats-strip { background: var(--n-dark); padding: 0; }
.seo-stats-inner { display: grid; grid-template-columns: repeat(4,1fr); gap: 1px; background: rgba(255,255,255,.06); }
.seo-stat { padding: 32px 24px; text-align: center; background: var(--n-dark); }
.seo-stat-n { font-size: 40px; font-weight: 900; color: var(--o); line-height: 1; letter-spacing: -.03em; }
.seo-stat-l { font-size: 12px; color: rgba(255,255,255,.45); margin-top: 6px; font-weight: 500; text-transform: uppercase; letter-spacing: .06em; }

/* ── SERVICES GRID ── */
.services-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
.svc-card { background: #fff; border: 1px solid var(--bdr); border-radius: 18px; padding: 28px 24px; transition: transform .2s, box-shadow .2s, border-color .2s; }
.svc-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(42,69,115,.1); border-color: rgba(59,130,246,.3); }
.svc-icon { width: 50px; height: 50px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 22px; margin-bottom: 16px; background: linear-gradient(135deg, rgba(42,69,115,.1), rgba(42,69,115,.05)); border: 1px solid rgba(42,69,115,.15); }
.svc-card h3 { font-size: 17px; margin-bottom: 10px; }
.svc-card p { font-size: 13.5px; color: var(--m); line-height: 1.65; margin-bottom: 16px; }
.svc-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.svc-tag { padding: 4px 10px; background: var(--bg); border-radius: 6px; font-size: 11px; font-weight: 600; color: var(--s); }

/* ── PROCESS ── */
.process-section { background: var(--bg); }
.steps-grid { display: grid; grid-template-columns: repeat(5,1fr); gap: 0; position: relative; }
.steps-grid::before { content: ''; position: absolute; top: 34px; left: 10%; right: 10%; height: 2px; background: linear-gradient(90deg, var(--n), var(--o)); z-index: 0; }
.step { text-align: center; padding: 0 12px; position: relative; z-index: 1; }
.step-num { width: 68px; height: 68px; border-radius: 50%; background: linear-gradient(135deg, var(--n), var(--n2)); color: #fff; font-size: 22px; font-weight: 900; display: flex; align-items: center; justify-content: center; margin: 0 auto 18px; box-shadow: 0 8px 24px rgba(42,69,115,.3); }
.step h4 { font-size: 14px; margin-bottom: 7px; }
.step p { font-size: 12.5px; color: var(--m); line-height: 1.6; }

/* ── WHY SECTION ── */
.why-seo-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 52px; align-items: center; }
.why-seo-left { background: linear-gradient(135deg, var(--n-dark), #162d52); border-radius: 24px; padding: 40px; }
.seo-big-stat { background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1); border-radius: 16px; padding: 20px 24px; }
.seo-big-stat .num { font-size: 44px; font-weight: 900; color: var(--o); line-height: 1; letter-spacing: -.03em; }
.seo-big-stat .lbl { font-size: 12.5px; color: rgba(255,255,255,.5); margin-top: 6px; }
.why-points { display: flex; flex-direction: column; gap: 20px; }
.why-point { display: flex; gap: 16px; align-items: flex-start; }
.why-point-icon { width: 44px; height: 44px; flex-shrink: 0; border-radius: 12px; background: linear-gradient(135deg, rgba(42,69,115,.12), rgba(42,69,115,.06)); border: 1px solid rgba(42,69,115,.2); display: flex; align-items: center; justify-content: center; font-size: 18px; }
.why-point h4 { font-size: 15px; font-weight: 700; color: var(--n); margin-bottom: 5px; }
.why-point p { font-size: 13.5px; color: var(--m); line-height: 1.6; margin: 0; }

/* ── COMPARISON TABLE ── */
.compare-section { background: var(--bg); }
.compare-table { width: 100%; border-collapse: separate; border-spacing: 0; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 32px rgba(42,69,115,.08); }
.compare-table th { padding: 18px 24px; font-size: 13px; font-weight: 700; text-align: left; }
.compare-table th:first-child { background: #fff; color: var(--s); border-right: 1px solid var(--bdr); }
.compare-table th:nth-child(2) { background: var(--n-dark); color: rgba(255,255,255,.5); text-align: center; }
.compare-table th:nth-child(3) { background: linear-gradient(135deg, var(--n), #1e4a8a); color: #fff; text-align: center; }
.compare-table th:nth-child(3) .badge { display: block; font-size: 10px; font-weight: 600; color: var(--o); margin-top: 3px; }
.compare-table td { padding: 14px 24px; font-size: 13.5px; color: var(--m); border-top: 1px solid var(--bdr); background: #fff; }
.compare-table td:nth-child(2) { text-align: center; background: rgba(15,30,56,.03); }
.compare-table td:nth-child(3) { text-align: center; background: rgba(42,69,115,.04); font-weight: 600; color: var(--n); }
.compare-table tr:last-child td { border-bottom: none; }
.chk { color: #16a34a; font-size: 16px; }
.cross { color: #dc2626; font-size: 16px; }
.partial { color: #d97706; font-size: 13px; }

/* ── INDUSTRY TABS ── */
.industry-section { background: var(--n-dark); }
.industry-section .sec-h h2 { color: #fff; }
.industry-section .sec-h p { color: rgba(255,255,255,.5); }
.industry-tabs { display: flex; gap: 8px; justify-content: center; margin-bottom: 40px; flex-wrap: wrap; }
.ind-tab { padding: 9px 20px; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer; border: 1px solid rgba(255,255,255,.1); color: rgba(255,255,255,.5); background: transparent; transition: .2s; }
.ind-tab.on { background: var(--o); color: #fff; border-color: var(--o); }
.ind-content { display: none; animation: fadeUp .3s ease; }
.ind-content.on { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start; }
@keyframes fadeUp { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
.ind-info h3 { font-size: 26px; color: #fff; margin-bottom: 14px; }
.ind-info p { font-size: 15px; color: rgba(255,255,255,.6); line-height: 1.7; margin-bottom: 24px; }
.ind-results { display: flex; flex-direction: column; gap: 12px; }
.ind-result { display: flex; align-items: center; gap: 12px; background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.08); border-radius: 12px; padding: 14px 18px; }
.ind-result-val { font-size: 22px; font-weight: 900; color: var(--o); min-width: 60px; }
.ind-result-lbl { font-size: 13px; color: rgba(255,255,255,.6); }
.ind-flows { display: flex; flex-direction: column; gap: 10px; }
.ind-flow { background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08); border-radius: 12px; padding: 14px 18px; display: flex; gap: 12px; align-items: flex-start; }
.ind-flow-icon { font-size: 20px; flex-shrink: 0; margin-top: 2px; }
.ind-flow-title { font-size: 13.5px; font-weight: 700; color: #fff; margin-bottom: 3px; }
.ind-flow-desc { font-size: 12.5px; color: rgba(255,255,255,.5); }

/* ── TOOLS ── */
.tools-section { background: var(--bg); }
.tools-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }
.tool-card { background: #fff; border: 1px solid var(--bdr); border-radius: 14px; padding: 22px 18px; text-align: center; transition: .2s; }
.tool-card:hover { border-color: rgba(42,69,115,.25); box-shadow: 0 8px 24px rgba(42,69,115,.08); transform: translateY(-2px); }
.tool-icon { font-size: 30px; margin-bottom: 10px; }
.tool-name { font-size: 13px; font-weight: 700; color: var(--n); margin-bottom: 4px; }
.tool-desc { font-size: 11.5px; color: var(--s); }

/* ── FEATURES GRID ── */
.features-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.feat-item { background: #fff; border: 1px solid var(--bdr); border-radius: 14px; padding: 22px 20px; display: flex; gap: 14px; transition: .2s; }
.feat-item:hover { border-color: rgba(42,69,115,.2); box-shadow: 0 6px 20px rgba(42,69,115,.06); }
.feat-icon { font-size: 22px; flex-shrink: 0; margin-top: 2px; }
.feat-body h4 { font-size: 14.5px; font-weight: 700; color: var(--n); margin-bottom: 6px; }
.feat-body p { font-size: 13px; color: var(--m); line-height: 1.6; margin: 0; }

/* ── FAQ ── */
.faq-section { background: var(--bg); }
.faq-wrap-2col { display: grid; grid-template-columns: 1fr 1fr; gap: 0 28px; align-items: start; }
.faq-col { display: flex; flex-direction: column; }
.fi { border: 1px solid var(--bdr); border-radius: 14px; margin-bottom: 10px; overflow: hidden; background: #fff; transition: .15s; }
.fi:hover { border-color: rgba(42,69,115,.2); }
.fi.on { border-color: rgba(42,69,115,.4); box-shadow: 0 4px 20px rgba(42,69,115,.08); }
.fi-q { width: 100%; text-align: left; background: transparent; border: none; padding: 20px 22px; font-size: 14.5px; font-weight: 700; color: var(--n); display: flex; justify-content: space-between; align-items: center; gap: 12px; cursor: pointer; }
.fi-icon { width: 26px; height: 26px; border-radius: 50%; flex-shrink: 0; background: var(--bg); border: 1px solid var(--bdr); display: flex; align-items: center; justify-content: center; color: var(--n); font-size: 18px; font-weight: 900; line-height: 1; transition: transform .2s; }
.fi.on .fi-icon { transform: rotate(45deg); background: var(--n); color: #fff; border-color: var(--n); }
.fi-a { max-height: 0; overflow: hidden; transition: .3s; color: var(--m); font-size: 14px; line-height: 1.75; }
.fi.on .fi-a { max-height: 300px; padding: 0 22px 22px; }

/* ── CTA ── */
.seo-cta { background: linear-gradient(155deg, #080f1e 0%, #0d1a35 100%); padding: 96px 0; text-align: center; position: relative; overflow: hidden; }
.seo-cta::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 60% 60% at 50% 50%, rgba(59,130,246,.07) 0%, transparent 70%); }
.seo-cta h2 { color: #fff; font-size: 44px; margin-bottom: 16px; position: relative; z-index: 1; }
.seo-cta p { color: rgba(255,255,255,.6); font-size: 17px; margin-bottom: 36px; position: relative; z-index: 1; }
.seo-cta-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; position: relative; z-index: 1; }

/* FOOTER */
footer { background: var(--n-dark); padding: 64px 0 0; }
.footer-main { margin-bottom: 40px; }
.fg { display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr; gap: 40px; }
.fb-desc { font-size: 13.5px; color: rgba(255,255,255,.4); line-height: 1.7; margin: 16px 0 20px; }
.socials { display: flex; gap: 10px; }
.socials a { width: 34px; height: 34px; border-radius: 8px; background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.1); display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; color: rgba(255,255,255,.5); transition: .15s; }
.socials a:hover { background: var(--o); color: #fff; border-color: var(--o); }
footer h4 { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: .1em; color: rgba(255,255,255,.35); margin-bottom: 16px; }
.fl { display: flex; flex-direction: column; gap: 8px; }
.fl a, .fc a { font-size: 13.5px; color: rgba(255,255,255,.5); transition: .15s; }
.fl a:hover, .fc a:hover { color: #fff; }
.fc { display: flex; flex-direction: column; gap: 10px; }
.footer-bottom { border-top: 1px solid rgba(255,255,255,.07); padding: 20px 0; display: flex; justify-content: space-between; align-items: center; font-size: 12px; color: rgba(255,255,255,.3); flex-wrap: wrap; gap: 8px; }
.footer-areas { padding: 20px 0; border-top: 1px solid rgba(255,255,255,.06); font-size: 12px; color: rgba(255,255,255,.25); display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }
.footer-areas b { color: rgba(255,255,255,.4); }
.footer-areas a { color: rgba(255,255,255,.25); transition: .15s; }
.footer-areas a:hover { color: rgba(255,255,255,.6); }

/* REVEAL */
.rv, .rv2, .rv3 { opacity: 0; transform: translateY(28px); transition: opacity .6s ease, transform .6s ease; }
.rv2 { transition-delay: .1s; } .rv3 { transition-delay: .2s; }
.rv.vis, .rv2.vis, .rv3.vis { opacity: 1; transform: translateY(0); }

/* RESPONSIVE */
@media(max-width:1000px) {
  .steps-grid { grid-template-columns: repeat(3,1fr); gap: 32px; }
  .steps-grid::before { display: none; }
}
@media(max-width:900px) {
  .seo-hero-grid, .why-seo-grid, .ind-content.on, .faq-wrap-2col { grid-template-columns: 1fr; }
  .seo-hero h1 { font-size: 36px; }
  .services-grid, .features-grid, .tools-grid { grid-template-columns: 1fr 1fr; }
  .seo-stats-inner, .fg { grid-template-columns: 1fr 1fr; }
  .steps-grid { grid-template-columns: 1fr 1fr; }
  .hb { display: flex; }
  .dmenu, .navcta .btn:not(.show-m) { display: none; }
}
@media(max-width:600px) {
  .services-grid, .features-grid, .tools-grid, .steps-grid, .seo-stats-inner, .fg { grid-template-columns: 1fr; }
  section { padding: 60px 0; }
  .seo-hero { padding: 64px 0 52px; }
  .compare-table th:nth-child(2), .compare-table td:nth-child(2) { display: none; }
}
`

const ld0 = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "SEO Services India",
      "provider": {
        "@type": "Organization",
        "name": "Click Decoded",
        "url": "https://clickdecoded.com"
      },
      "description": "Comprehensive SEO services including technical audits, on-page optimization, link building, local SEO, and content strategy for B2B businesses across India.",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": "Search Engine Optimization",
      "url": "https://www.clickdecoded.com/services/seo"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does SEO take to show results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most clients see measurable ranking movement within 60–90 days. Significant traffic growth typically comes at the 4–6 month mark. SEO compounds over time — the longer you invest, the more dominant your rankings become."
          }
        },
        {
          "@type": "Question",
          "name": "Do you guarantee #1 rankings on Google?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No ethical SEO agency guarantees #1 rankings — Google's algorithm is not controlled by anyone. We do guarantee a documented, transparent process, monthly progress reports, and consistent improvement in rankings and organic traffic."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between on-page and off-page SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "On-page SEO refers to changes made on your website — content, metadata, internal linking, page speed. Off-page SEO refers to signals from outside your website, primarily backlinks from other authoritative sites. Both are essential for ranking."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work with small businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We work with businesses of all sizes — from local service providers wanting local SEO to enterprise B2B companies needing programmatic SEO at scale."
          }
        },
        {
          "@type": "Question",
          "name": "What tools do you use for SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use a combination of Ahrefs, SEMrush, Google Search Console, Screaming Frog, Surfer SEO, and custom scripts for technical audits and keyword research."
          }
        },
        {
          "@type": "Question",
          "name": "How do you measure SEO success?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We track keyword rankings, organic traffic growth, click-through rates, conversion rates from organic traffic, and ultimately revenue attributed to SEO — not just vanity metrics."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How SEO Services India Works — Our Process",
      "description": "Click Decoded delivers result-driven SEO services across India. Technical SEO, local SEO, link building, content strategy — proven to rank websites #1 on Google and drive qualified B2B leads.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Deep Audit",
          "text": "Full technical crawl, competitor gap analysis, and keyword opportunity mapping across your entire domain."
        },
        {
          "@type": "HowToStep",
          "name": "Strategy Blueprint",
          "text": "Custom 90-day SEO roadmap with priority fixes, content calendar, and link-building targets ranked by ROI."
        },
        {
          "@type": "HowToStep",
          "name": "On-Page & Technical",
          "text": "Implement technical fixes, optimize existing pages, and build the internal linking architecture Google rewards."
        },
        {
          "@type": "HowToStep",
          "name": "Content & Links",
          "text": "Publish targeted content and earn quality backlinks to build the authority needed to outrank competitors."
        },
        {
          "@type": "HowToStep",
          "name": "Track & Compound",
          "text": "Monthly reporting on rankings, traffic, and leads — then double down on what's working to accelerate growth."
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
          "name": "SEO Services",
          "item": "https://www.clickdecoded.com/services/seo"
        }
      ]
    }
  ]
}`

const js0 = `(function(){
/* Sticky header */
const hdr = document.getElementById('hdr');
window.addEventListener('scroll', () => hdr.classList.toggle('up', scrollY > 40), { passive: true });

/* Mobile nav */
const hb = document.getElementById('hb'), mn = document.getElementById('mnav');
if (hb) hb.onclick = () => { mn.classList.toggle('on'); document.body.style.overflow = mn.classList.contains('on') ? 'hidden' : ''; };
document.querySelectorAll('.ma > button').forEach(b => {
  b.onclick = () => { const a = b.parentElement, isOpen = a.classList.contains('on'); document.querySelectorAll('.ma').forEach(x => x.classList.remove('on')); if (!isOpen) a.classList.add('on'); };
});

/* FAQ accordion */
document.querySelectorAll('.fi').forEach(item => {
  item.querySelector('.fi-q').onclick = () => {
    const isOn = item.classList.contains('on');
    document.querySelectorAll('.fi').forEach(f => f.classList.remove('on'));
    if (!isOn) item.classList.add('on');
  };
});

/* Industry tabs */
document.querySelectorAll('.ind-tab').forEach(tab => {
  tab.onclick = () => {
    document.querySelectorAll('.ind-tab').forEach(t => t.classList.remove('on'));
    document.querySelectorAll('.ind-content').forEach(c => c.classList.remove('on'));
    tab.classList.add('on');
    const target = document.getElementById('ind-' + tab.dataset.ind);
    if (target) target.classList.add('on');
  };
});

/* Scroll reveal */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
}, { threshold: .1 });
document.querySelectorAll('.rv, .rv2, .rv3').forEach(el => obs.observe(el));

/* ── ANIMATED SERP MOCKUP ── */
(function () {
  const keywords = [
    {
      q: 'real estate agent Bhopal',
      results: [
        { site: 'housing.com', title: 'Properties in Bhopal — Buy/Rent', pos: 1 },
        { site: 'magicbricks.com', title: 'Bhopal Properties — MagicBricks', pos: 2 },
        { site: '99acres.com', title: 'Real Estate Bhopal — 99acres', pos: 3 },
        { site: 'sulekha.com', title: 'Top Agents in Bhopal — Sulekha', pos: 4 },
        { site: 'yourclient.in', title: 'Best Real Estate Agent in Bhopal', pos: 5, isClient: true },
      ],
      traffic: '4,200', kw: '120', dr: '38',
      finalPos: 1
    },
    {
      q: 'SEO agency India B2B',
      results: [
        { site: 'brandname.com', title: 'Top SEO Agency for B2B India', pos: 1 },
        { site: 'clutch.co', title: 'Best SEO Companies India — Clutch', pos: 2 },
        { site: 'webchutney.com', title: 'SEO Services India — Webchutney', pos: 3 },
        { site: 'youragency.in', title: 'B2B SEO Services India — YourBrand', pos: 4, isClient: true },
        { site: 'isobar.com', title: 'Isobar Digital — SEO India', pos: 5 },
      ],
      traffic: '8,900', kw: '340', dr: '52',
      finalPos: 1
    },
    {
      q: 'coaching institute Indore NEET',
      results: [
        { site: 'resonance.ac.in', title: 'Resonance NEET Coaching Indore', pos: 1 },
        { site: 'allenindore.com', title: 'Allen Career Institute — Indore', pos: 2 },
        { site: 'aakash.ac.in', title: 'Aakash NEET Indore Coaching', pos: 3 },
        { site: 'yourclient.edu.in', title: 'Best NEET Coaching Indore 2024', pos: 6, isClient: true },
        { site: 'vidyamandir.com', title: 'Vidyamandir NEET Classes Indore', pos: 5 },
      ],
      traffic: '2,800', kw: '85', dr: '29',
      finalPos: 2
    }
  ];

  let cycle = 0;
  const queryEl = document.getElementById('serpQuery');
  const resultsEl = document.getElementById('serpResults');
  const trafficEl = document.getElementById('serpTraffic');
  const kwEl = document.getElementById('serpKw');
  const drEl = document.getElementById('serpDr');

  if (!queryEl || !resultsEl) return;

  function animateCounter(el, target, suffix = '') {
    const num = parseInt(target.replace(/[^0-9]/g, ''));
    const prefix = target.replace(/[0-9,+]/g, '');
    let start = 0;
    const step = Math.ceil(num / 30);
    const timer = setInterval(() => {
      start = Math.min(start + step, num);
      el.textContent = prefix + start.toLocaleString() + (target.includes('+') ? '+' : '');
      if (start >= num) clearInterval(timer);
    }, 40);
  }

  function typeQuery(text, cb) {
    queryEl.innerHTML = '<span class="serp-cursor"></span>';
    let i = 0;
    const interval = setInterval(() => {
      queryEl.innerHTML = text.slice(0, i) + '<span class="serp-cursor"></span>';
      i++;
      if (i > text.length) { clearInterval(interval); setTimeout(cb, 400); }
    }, 60);
  }

  function renderResults(data, animate) {
    const sorted = [...data.results].sort((a, b) => a.pos - b.pos);
    resultsEl.innerHTML = '';
    sorted.forEach((r, idx) => {
      const row = document.createElement('div');
      row.className = 'serp-row' + (r.isClient ? ' highlight' : '');
      row.dataset.key = r.site;
      row.innerHTML = \`
        <div class="serp-rank">\${r.pos}</div>
        <div class="serp-content">
          <div class="serp-site">\${r.site}</div>
          <div class="serp-title">\${r.title}</div>
        </div>
        \${r.isClient ? \`<div class="serp-badge">📈 Climbing</div>\` : ''}
      \`;
      row.style.opacity = '0';
      row.style.transform = 'translateY(8px)';
      resultsEl.appendChild(row);
      setTimeout(() => {
        row.style.transition = 'opacity .3s ease, transform .3s ease';
        row.style.opacity = '1';
        row.style.transform = 'translateY(0)';
      }, idx * 100);
    });
  }

  function animateRankUp(data) {
    // After results appear, animate the client row to final position
    setTimeout(() => {
      const clientRow = resultsEl.querySelector('.highlight');
      if (!clientRow) return;

      const rankEl = clientRow.querySelector('.serp-rank');
      const badgeEl = clientRow.querySelector('.serp-badge');
      const clientData = data.results.find(r => r.isClient);
      const startPos = clientData.pos;
      const endPos = data.finalPos;

      // Animate rank number counting down
      let cur = startPos;
      const countdown = setInterval(() => {
        cur--;
        rankEl.textContent = cur;
        if (cur <= endPos) {
          clearInterval(countdown);
          rankEl.textContent = endPos;
          if (badgeEl) badgeEl.textContent = \`🏆 #\${endPos}\`;

          // Move the row visually to the top position
          const rows = Array.from(resultsEl.querySelectorAll('.serp-row'));
          const targetRow = rows[endPos - 1];
          if (targetRow && targetRow !== clientRow) {
            clientRow.style.transition = 'all .7s cubic-bezier(.22,1,.36,1)';
            resultsEl.insertBefore(clientRow, targetRow);
          }
          // Update stats
          animateCounter(trafficEl, data.traffic);
          animateCounter(kwEl, data.kw);
          animateCounter(drEl, data.dr);
        }
      }, 220);
    }, 1800);
  }

  function runCycle() {
    const data = keywords[cycle % keywords.length];
    cycle++;

    // Clear
    resultsEl.innerHTML = '';
    queryEl.innerHTML = '<span class="serp-cursor"></span>';

    typeQuery(data.q, () => {
      renderResults(data, true);
      animateRankUp(data);
    });

    // Next cycle
    setTimeout(runCycle, 7000);
  }

  setTimeout(runCycle, 600);
})();
})();`

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld0 }} />
      <div className="breadcrumb">
<div className="wrap">
<div className="bc-list">
<a href="/">Home</a><span className="bc-sep">›</span>
<a href="/services/seo">Services</a><span className="bc-sep">›</span>
<span>SEO Services</span>
</div>
</div>
</div>
      <section className="seo-hero">
<div className="wrap">
<div className="seo-hero-grid">
<div>
<div className="seo-eyebrow">🔍 Google-Certified SEO Specialists</div>
<h1>Rank #1 on Google.<br /><em>Grow Revenue.</em> Not Just Traffic.</h1>
<p className="seo-hero-desc">We build SEO strategies that put your business at the top of Google — and keep it there. Technical audits, content, and link building that converts visitors into paying clients.</p>
<div className="seo-hero-btns">
<a href="#contact" className="btn btn-o">🔍 Get Free SEO Audit <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
<a href="/services/seo" className="btn btn-ghost">See Our Services</a>
</div>
<div className="seo-hero-trust">
<div className="seo-trust-item"><strong>500+</strong> keywords ranked #1</div>
<div className="seo-trust-item"><strong>4.2×</strong> avg traffic growth</div>
<div className="seo-trust-item"><strong>12+</strong> industries served</div>
<div className="seo-trust-item"><strong>98%</strong> client retention</div>
</div>
</div>

<div className="serp-mock">
<div className="serp-browser-bar">
<div className="serp-dots"><span></span><span></span><span></span></div>
<div className="serp-url-bar">
<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1a4 4 0 100 8A4 4 0 005 1zm0 1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM5 7a3.5 3.5 0 01-2.5-1.06C2.82 5.45 3.84 5 5 5s2.18.45 2.5.94A3.5 3.5 0 015 7z" fill="rgba(255,255,255,.3)" /></svg>
            google.com/search
          </div>
</div>
<div className="serp-body">
<div className="serp-search-box">
<span className="serp-search-icon">🔍</span>
<span className="serp-query" id="serpQuery"><span className="serp-cursor"></span></span>
</div>
<div className="serp-results" id="serpResults"></div>
<div className="serp-stat-bar">
<div className="serp-stat-item"><div className="serp-stat-val" id="serpTraffic">0</div><div className="serp-stat-lbl">Monthly Visits</div></div>
<div className="serp-stat-item"><div className="serp-stat-val" id="serpKw">0</div><div className="serp-stat-lbl">Keywords Ranked</div></div>
<div className="serp-stat-item"><div className="serp-stat-val" id="serpDr">0</div><div className="serp-stat-lbl">Domain Rating</div></div>
</div>
</div>
</div>
</div>
</div>
</section>
      <div className="seo-stats-strip">
<div className="wrap">
<div className="seo-stats-inner">
<div className="seo-stat"><div className="seo-stat-n">500+</div><div className="seo-stat-l">Keywords Ranked #1</div></div>
<div className="seo-stat"><div className="seo-stat-n">4.2×</div><div className="seo-stat-l">Avg. Traffic Growth</div></div>
<div className="seo-stat"><div className="seo-stat-n">90 Days</div><div className="seo-stat-l">First Results Visible</div></div>
<div className="seo-stat"><div className="seo-stat-n">₹10Cr+</div><div className="seo-stat-l">Revenue Generated via SEO</div></div>
</div>
</div>
</div>
      <section>
<div className="wrap">
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }}>
<div className="rv">
<div className="pill pill-b" style={{ marginBottom: '16px' }}>What It Actually Means</div>
<h2 style={{ fontSize: '36px', marginBottom: '16px' }}>SEO That Pays for Itself — Month After Month</h2>
<p style={{ fontSize: '16px', color: 'var(--m)', lineHeight: '1.75', marginBottom: '20px' }}>Every day your competitors rank above you, they're taking customers who are actively searching for exactly what you offer. SEO closes that gap — permanently.</p>
<p style={{ fontSize: '16px', color: 'var(--m)', lineHeight: '1.75', marginBottom: '28px' }}>Unlike paid ads that stop the moment you stop paying, <strong>SEO builds a compounding asset</strong>. Rankings you earn today keep generating traffic, leads, and revenue for years — without paying per click.</p>
<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
<div style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--m)' }}><span style={{ color: 'var(--o)', fontWeight: '900', fontSize: '16px' }}>✓</span> 53% of all website traffic comes from organic search</div>
<div style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--m)' }}><span style={{ color: 'var(--o)', fontWeight: '900', fontSize: '16px' }}>✓</span> The #1 result gets 31% of all clicks on a keyword</div>
<div style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--m)' }}><span style={{ color: 'var(--o)', fontWeight: '900', fontSize: '16px' }}>✓</span> SEO leads convert 8× better than outbound marketing</div>
<div style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--m)' }}><span style={{ color: 'var(--o)', fontWeight: '900', fontSize: '16px' }}>✓</span> 75% of users never scroll past the first page of Google</div>
</div>
</div>
<div className="rv2" style={{ background: 'var(--bg)', borderRadius: '20px', padding: '36px', border: '1px solid var(--bdr)' }}>
<h4 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--s)', marginBottom: '20px' }}>Ads vs SEO — 12 Month Comparison</h4>
<div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '10px' }}>
<div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--s)', textTransform: 'uppercase', letterSpacing: '.06em' }}>Metric</div>
<div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--s)', textTransform: 'uppercase', letterSpacing: '.06em', textAlign: 'center' }}>Google Ads</div>
<div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--o)', textTransform: 'uppercase', letterSpacing: '.06em', textAlign: 'center' }}>SEO</div>
</div>
<div style={{ height: '1px', background: 'var(--bdr)', marginBottom: '12px' }}></div>
<div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', fontSize: '13px', color: 'var(--m)', alignItems: 'center' }}><span>Cost per lead</span><span style={{ textAlign: 'center' }}>₹800–2000</span><span style={{ textAlign: 'center', fontWeight: '700', color: 'var(--n)' }}>₹80–300</span></div>
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', fontSize: '13px', color: 'var(--m)', alignItems: 'center' }}><span>Stops when…</span><span style={{ textAlign: 'center' }}>Budget ends</span><span style={{ textAlign: 'center', fontWeight: '700', color: 'var(--n)' }}>Never stops</span></div>
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', fontSize: '13px', color: 'var(--m)', alignItems: 'center' }}><span>Trust signal</span><span style={{ textAlign: 'center' }}>Low (Ad label)</span><span style={{ textAlign: 'center', fontWeight: '700', color: 'var(--n)' }}>High (organic)</span></div>
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', fontSize: '13px', color: 'var(--m)', alignItems: 'center' }}><span>Compounding value</span><span style={{ textAlign: 'center' }}>❌ No</span><span style={{ textAlign: 'center', fontWeight: '700', color: 'var(--n)' }}>✅ Yes</span></div>
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', fontSize: '13px', color: 'var(--m)', alignItems: 'center' }}><span>12-month ROI</span><span style={{ textAlign: 'center' }}>1–2×</span><span style={{ textAlign: 'center', fontWeight: '700', color: 'var(--o)' }}>5–15×</span></div>
</div>
</div>
</div>
</div>
</div>
</section>
      <section style={{ background: 'var(--bg)' }} id="services">
<div className="wrap">
<div className="sec-h rv">
<div className="pill pill-b">Our SEO Services</div>
<h2>Every Type of SEO. One Expert Team.</h2>
<p>We cover the full SEO stack — technical foundations, content strategy, authority building, and local visibility — all under one roof.</p>
</div>
<div className="services-grid">
<div className="svc-card rv">
<div className="svc-icon">⚙️</div>
<h3>Technical SEO Audit &amp; Fix</h3>
<p>We crawl your entire website to uncover issues killing your rankings — broken links, slow pages, crawl errors, duplicate content, and Core Web Vitals failures. Then we fix them.</p>
<div className="svc-tags"><span className="svc-tag">Core Web Vitals</span><span className="svc-tag">Schema Markup</span><span className="svc-tag">Crawl Fix</span><span className="svc-tag">Site Speed</span></div>
</div>
<div className="svc-card rv2">
<div className="svc-icon">📝</div>
<h3>On-Page SEO Optimization</h3>
<p>Keyword-optimized titles, meta descriptions, headers, internal linking, and content structure — everything Google needs to understand, index, and rank every page of your site.</p>
<div className="svc-tags"><span className="svc-tag">Keyword Mapping</span><span className="svc-tag">Meta Optimization</span><span className="svc-tag">Content Structure</span></div>
</div>
<div className="svc-card rv3">
<div className="svc-icon">📍</div>
<h3>Local SEO &amp; Google Business</h3>
<p>Dominate your city. We optimize your Google Business Profile, build local citations, manage reviews, and rank you in the Local Pack — the most coveted real estate in local search.</p>
<div className="svc-tags"><span className="svc-tag">Google Business</span><span className="svc-tag">Local Pack</span><span className="svc-tag">Citations</span><span className="svc-tag">Reviews</span></div>
</div>
<div className="svc-card rv">
<div className="svc-icon">🔗</div>
<h3>Link Building &amp; Authority</h3>
<p>High-quality backlinks from relevant Indian and international publications. White-hat outreach, digital PR, and guest posts that build domain authority Google actually trusts.</p>
<div className="svc-tags"><span className="svc-tag">Guest Posts</span><span className="svc-tag">Digital PR</span><span className="svc-tag">DA Building</span><span className="svc-tag">Niche Links</span></div>
</div>
<div className="svc-card rv2">
<div className="svc-icon">✍️</div>
<h3>SEO Content Strategy</h3>
<p>Topic clusters, pillar pages, and long-form content that ranks. We research, write, and publish SEO content that captures demand at every stage of your buyer's journey.</p>
<div className="svc-tags"><span className="svc-tag">Topic Clusters</span><span className="svc-tag">Long-form Content</span><span className="svc-tag">Pillar Pages</span></div>
</div>
<div className="svc-card rv3">
<div className="svc-icon">🛒</div>
<h3>E-commerce &amp; Programmatic SEO</h3>
<p>Scale your rankings with programmatic SEO — templated pages that capture thousands of long-tail keywords simultaneously. Perfect for e-commerce, real estate, and SaaS businesses.</p>
<div className="svc-tags"><span className="svc-tag">Programmatic SEO</span><span className="svc-tag">Product Pages</span><span className="svc-tag">Category SEO</span></div>
</div>
</div>
</div>
</section>
      <section className="process-section">
<div className="wrap">
<div className="sec-h rv">
<div className="pill pill-b">Our Process</div>
<h2>How We Get You to Page One</h2>
<p>A proven, transparent 5-step SEO process built on data — not guesswork.</p>
</div>
<div className="steps-grid">
<div className="step rv">
<div className="step-num">1</div>
<h4>Deep Audit</h4>
<p>Full technical crawl, competitor gap analysis, and keyword opportunity mapping across your entire domain.</p>
</div>
<div className="step rv2">
<div className="step-num">2</div>
<h4>Strategy Blueprint</h4>
<p>Custom 90-day SEO roadmap with priority fixes, content calendar, and link-building targets ranked by ROI.</p>
</div>
<div className="step rv3">
<div className="step-num">3</div>
<h4>On-Page &amp; Technical</h4>
<p>Implement technical fixes, optimize existing pages, and build the internal linking architecture Google rewards.</p>
</div>
<div className="step rv">
<div className="step-num">4</div>
<h4>Content &amp; Links</h4>
<p>Publish targeted content and earn quality backlinks to build the authority needed to outrank competitors.</p>
</div>
<div className="step rv2">
<div className="step-num">5</div>
<h4>Track &amp; Compound</h4>
<p>Monthly reporting on rankings, traffic, and leads — then double down on what's working to accelerate growth.</p>
</div>
</div>
</div>
</section>
      <section>
<div className="wrap">
<div className="sec-h rv">
<div className="pill pill-o">Why Click Decoded</div>
<h2>We're Not a Typical SEO Agency</h2>
<p>Most agencies sell reports. We sell results. Here's what makes the difference.</p>
</div>
<div className="why-seo-grid">
<div className="why-seo-left rv">
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
<div className="seo-big-stat"><div className="num">4.2×</div><div className="lbl">Avg. traffic growth in 6 months</div></div>
<div className="seo-big-stat"><div className="num">90d</div><div className="lbl">Ranking movement visible</div></div>
<div className="seo-big-stat"><div className="num">500+</div><div className="lbl">Keywords ranked #1 across clients</div></div>
<div className="seo-big-stat"><div className="num">98%</div><div className="lbl">Client retention rate</div></div>
</div>
<div style={{ textAlign: 'center', padding: '16px 0 0', color: 'rgba(255,255,255,.25)', fontSize: '12px' }}>Measured across active client accounts · 2023–2024</div>
</div>
<div className="why-points rv2">
<div className="why-point">
<div className="why-point-icon">📊</div>
<div>
<h4>Revenue-Focused, Not Vanity Metrics</h4>
<p>We don't celebrate traffic spikes that don't convert. Every strategy is tied to leads, calls, and revenue — not just rankings for rankings' sake.</p>
</div>
</div>
<div className="why-point">
<div className="why-point-icon">🔍</div>
<div>
<h4>Full Technical Depth</h4>
<p>Most agencies outsource technical SEO. Our team handles Core Web Vitals, schema markup, crawl budget optimization, and JavaScript SEO in-house.</p>
</div>
</div>
<div className="why-point">
<div className="why-point-icon">🇮🇳</div>
<div>
<h4>Deep Indian Market Knowledge</h4>
<p>We understand India's search behavior — regional intent, Hindi-English code-switching, city-level competition, and what Indian buyers actually type into Google.</p>
</div>
</div>
<div className="why-point">
<div className="why-point-icon">📋</div>
<div>
<h4>Radical Transparency</h4>
<p>Monthly reports with real data — keyword positions, traffic, conversions. No smoke and mirrors. You always know exactly what we're doing and why.</p>
</div>
</div>
</div>
</div>
</div>
</section>
      <section className="compare-section">
<div className="wrap">
<div className="sec-h rv">
<div className="pill pill-b">Side by Side</div>
<h2>Click Decoded vs The Typical Agency</h2>
<p>Not all SEO agencies are equal. Here's how we compare on the things that actually matter.</p>
</div>
<div className="rv" style={{ overflowX: 'auto' }}>
<table className="compare-table">
<thead>
<tr>
<th>What You're Evaluating</th>
<th>Typical Agency</th>
<th>Click Decoded <span className="badge">Our Approach</span></th>
</tr>
</thead>
<tbody>
<tr><td>Dedicated account manager</td><td><span className="partial">Sometimes</span></td><td><span className="chk">✓</span> Always, with direct access</td></tr>
<tr><td>Technical SEO in-house</td><td><span className="cross">✗</span></td><td><span className="chk">✓</span> Full technical team</td></tr>
<tr><td>Monthly ranking reports</td><td><span className="chk">✓</span> Generic PDF</td><td><span className="chk">✓</span> Live dashboard + call</td></tr>
<tr><td>Content written by SEO experts</td><td><span className="cross">✗</span> Freelancers</td><td><span className="chk">✓</span> In-house SEO writers</td></tr>
<tr><td>Link building quality</td><td><span className="partial">PBNs / low DA</span></td><td><span className="chk">✓</span> White-hat, niche relevant</td></tr>
<tr><td>Strategy shared with client</td><td><span className="cross">✗</span> Black box</td><td><span className="chk">✓</span> Full roadmap shared</td></tr>
<tr><td>AI + automation in SEO</td><td><span className="cross">✗</span> Manual only</td><td><span className="chk">✓</span> AI-assisted + human review</td></tr>
<tr><td>Contract lock-in</td><td><span className="cross">✗</span> 12-month lock</td><td><span className="chk">✓</span> Monthly, no lock-in</td></tr>
</tbody>
</table>
</div>
</div>
</section>
      <section className="industry-section">
<div className="wrap">
<div className="sec-h rv">
<div className="pill pill-seo">Industry Results</div>
<h2>SEO Results Across Every Industry</h2>
<p>From real estate to SaaS — here's what our SEO delivers in your sector.</p>
</div>
<div className="industry-tabs">
<button className="ind-tab on" data-ind="realestate">🏠 Real Estate</button>
<button className="ind-tab" data-ind="education">🎓 Education</button>
<button className="ind-tab" data-ind="ecommerce">🛒 E-commerce</button>
<button className="ind-tab" data-ind="healthcare">🏥 Healthcare</button>
<button className="ind-tab" data-ind="b2b">🏢 B2B / SaaS</button>
</div>
<div className="ind-content on" id="ind-realestate">
<div className="ind-info">
<h3>Real Estate SEO That Fills Your Pipeline</h3>
<p>Homebuyers and investors research heavily online before ever calling an agent. We put your listings, projects, and brand at the top for every high-intent property search in your target city — from "2BHK in Bhopal" to "commercial property Pune."</p>
<div className="ind-results">
<div className="ind-result"><div className="ind-result-val">6.1×</div><div className="ind-result-lbl">Increase in organic enquiries in 5 months</div></div>
<div className="ind-result"><div className="ind-result-val">#1</div><div className="ind-result-lbl">Ranking for 120+ city-based property keywords</div></div>
<div className="ind-result"><div className="ind-result-val">74%</div><div className="ind-result-lbl">Reduction in paid ad spend after SEO matured</div></div>
</div>
</div>
<div className="ind-flows">
<div className="ind-flow"><div className="ind-flow-icon">📍</div><div><div className="ind-flow-title">Local Pack Domination</div><div className="ind-flow-desc">Rank in Google Maps for every "property dealer near me" and city-based search in your area.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">🗺️</div><div><div className="ind-flow-title">Locality Landing Pages</div><div className="ind-flow-desc">Individual optimized pages for every locality, society, and project type you serve.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">📊</div><div><div className="ind-flow-title">Programmatic Listing SEO</div><div className="ind-flow-desc">Auto-generated, SEO-optimized pages for each property listing to capture long-tail searches.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">⭐</div><div><div className="ind-flow-title">Review &amp; Trust Building</div><div className="ind-flow-desc">Structured review strategy that builds social proof and improves local ranking signals.</div></div></div>
</div>
</div>
<div className="ind-content" id="ind-education">
<div className="ind-info">
<h3>Education SEO That Fills Batches</h3>
<p>Students search Google before they call or visit. We rank your coaching institute or edtech platform for every course, exam, and city combination your ideal student is searching — driving enquiries directly to your admissions team.</p>
<div className="ind-results">
<div className="ind-result"><div className="ind-result-val">4.8×</div><div className="ind-result-lbl">Growth in organic admissions enquiries</div></div>
<div className="ind-result"><div className="ind-result-val">85+</div><div className="ind-result-lbl">Course and exam keywords on Page 1</div></div>
<div className="ind-result"><div className="ind-result-val">60%</div><div className="ind-result-lbl">Lower cost per admission vs paid ads</div></div>
</div>
</div>
<div className="ind-flows">
<div className="ind-flow"><div className="ind-flow-icon">📚</div><div><div className="ind-flow-title">Course &amp; Exam Page SEO</div><div className="ind-flow-desc">Optimized landing pages for every course and competitive exam you prepare students for.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">🎯</div><div><div className="ind-flow-title">City + Course Keywords</div><div className="ind-flow-desc">"CA coaching Indore," "NEET classes Bhopal" — we own every geo-intent variation.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">✍️</div><div><div className="ind-flow-title">Study Material Content</div><div className="ind-flow-desc">Free study guides, notes, and question papers that rank and capture student traffic.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">📈</div><div><div className="ind-flow-title">Alumni &amp; Result Stories</div><div className="ind-flow-desc">Structured case study pages that rank for "results" queries and build credibility.</div></div></div>
</div>
</div>
<div className="ind-content" id="ind-ecommerce">
<div className="ind-info">
<h3>E-commerce SEO That Drives Sales</h3>
<p>Paid ads are expensive and stop the moment you pause them. We build organic traffic that converts — ranking your product and category pages for every high-intent purchase keyword your buyers are searching.</p>
<div className="ind-results">
<div className="ind-result"><div className="ind-result-val">5.3×</div><div className="ind-result-lbl">Organic revenue growth in 6 months</div></div>
<div className="ind-result"><div className="ind-result-val">2,400+</div><div className="ind-result-lbl">Product keywords moved to Page 1</div></div>
<div className="ind-result"><div className="ind-result-val">3.2×</div><div className="ind-result-lbl">Improvement in organic conversion rate</div></div>
</div>
</div>
<div className="ind-flows">
<div className="ind-flow"><div className="ind-flow-icon">🛒</div><div><div className="ind-flow-title">Category Page Optimization</div><div className="ind-flow-desc">Deep keyword research and content for every category — the highest-value pages in e-commerce.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">📦</div><div><div className="ind-flow-title">Product Schema &amp; Rich Results</div><div className="ind-flow-desc">Schema markup that earns star ratings, prices, and availability directly in Google results.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">🔗</div><div><div className="ind-flow-title">Internal Link Architecture</div><div className="ind-flow-desc">Optimized crawl paths so Google indexes every product page and passes authority correctly.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">⚡</div><div><div className="ind-flow-title">Core Web Vitals Optimization</div><div className="ind-flow-desc">Page speed and UX improvements that reduce bounce rate and directly boost rankings.</div></div></div>
</div>
</div>
<div className="ind-content" id="ind-healthcare">
<div className="ind-info">
<h3>Healthcare SEO That Grows Your Practice</h3>
<p>Patients Google symptoms and doctors before booking. We ensure your clinic, hospital, or health brand ranks for the conditions you treat and the specialisations you offer — in every city you serve.</p>
<div className="ind-results">
<div className="ind-result"><div className="ind-result-val">3.9×</div><div className="ind-result-lbl">Increase in new patient appointments</div></div>
<div className="ind-result"><div className="ind-result-val">#1–3</div><div className="ind-result-lbl">Rankings for 60+ condition and speciality keywords</div></div>
<div className="ind-result"><div className="ind-result-val">55%</div><div className="ind-result-lbl">Of new patients now sourced from organic search</div></div>
</div>
</div>
<div className="ind-flows">
<div className="ind-flow"><div className="ind-flow-icon">🏥</div><div><div className="ind-flow-title">Doctor &amp; Speciality Pages</div><div className="ind-flow-desc">Schema-optimized pages for every doctor, department, and procedure you offer.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">💊</div><div><div className="ind-flow-title">Symptom &amp; Condition Content</div><div className="ind-flow-desc">Medically accurate, SEO-optimized content that ranks for symptom queries and builds trust.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">📍</div><div><div className="ind-flow-title">Multi-location Local SEO</div><div className="ind-flow-desc">Individual location pages and GBP optimization for every clinic branch.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">⭐</div><div><div className="ind-flow-title">Review &amp; Reputation Strategy</div><div className="ind-flow-desc">Systematic review generation that builds trust and improves local search rankings.</div></div></div>
</div>
</div>
<div className="ind-content" id="ind-b2b">
<div className="ind-info">
<h3>B2B &amp; SaaS SEO That Generates Pipeline</h3>
<p>B2B buyers research for weeks before contacting a vendor. We put your brand in front of decision-makers at every stage of that research — from awareness content to bottom-of-funnel comparison pages.</p>
<div className="ind-results">
<div className="ind-result"><div className="ind-result-val">7.2×</div><div className="ind-result-lbl">Increase in qualified inbound leads from organic</div></div>
<div className="ind-result"><div className="ind-result-val">4× lower</div><div className="ind-result-lbl">Cost per qualified lead vs paid channels</div></div>
<div className="ind-result"><div className="ind-result-val">180 days</div><div className="ind-result-lbl">Average time to dominant Page 1 presence</div></div>
</div>
</div>
<div className="ind-flows">
<div className="ind-flow"><div className="ind-flow-icon">🎯</div><div><div className="ind-flow-title">Intent-based Keyword Strategy</div><div className="ind-flow-desc">Mapping keywords by buyer stage — awareness, consideration, and decision — for full-funnel coverage.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">📑</div><div><div className="ind-flow-title">Comparison &amp; Alternative Pages</div><div className="ind-flow-desc">"Best [tool] alternatives" and "[Competitor] vs [You]" pages that capture high-intent comparison traffic.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">✍️</div><div><div className="ind-flow-title">Thought Leadership Content</div><div className="ind-flow-desc">In-depth guides and reports that rank for industry keywords and position you as the authority.</div></div></div>
<div className="ind-flow"><div className="ind-flow-icon">🔗</div><div><div className="ind-flow-title">B2B Link Building</div><div className="ind-flow-desc">Backlinks from industry publications, SaaS directories, and partner ecosystems that matter.</div></div></div>
</div>
</div>
</div>
</section>
      <section>
<div className="wrap">
<div className="sec-h rv">
<div className="pill pill-b">Full Deliverables</div>
<h2>Everything Included in Every Engagement</h2>
<p>No upsells. No "that's a separate package." Here's what every client gets from day one.</p>
</div>
<div className="features-grid">
<div className="feat-item rv"><div className="feat-icon">🔎</div><div className="feat-body"><h4>Complete Technical SEO Audit</h4><p>200-point audit covering crawlability, indexability, site speed, mobile, structured data, and Core Web Vitals with a prioritized fix list.</p></div></div>
<div className="feat-item rv2"><div className="feat-icon">🗝️</div><div className="feat-body"><h4>Keyword Research &amp; Mapping</h4><p>In-depth research of 500–2000 keywords, mapped to the right pages with search volume, difficulty, and revenue potential scores.</p></div></div>
<div className="feat-item rv"><div className="feat-icon">📄</div><div className="feat-body"><h4>On-Page Optimization</h4><p>Title tags, meta descriptions, header structure, content gaps, image alt text, and internal linking — optimized across your priority pages every month.</p></div></div>
<div className="feat-item rv2"><div className="feat-icon">🔗</div><div className="feat-body"><h4>Monthly Link Building</h4><p>Consistent acquisition of quality backlinks through guest posts, digital PR, and journalist outreach — zero spammy links, ever.</p></div></div>
<div className="feat-item rv"><div className="feat-icon">✍️</div><div className="feat-body"><h4>SEO Content Creation</h4><p>Expertly written, keyword-optimized blog posts, pillar pages, and landing pages that rank and convert — not generic AI fluff.</p></div></div>
<div className="feat-item rv2"><div className="feat-icon">📊</div><div className="feat-body"><h4>Monthly Reports &amp; Strategy Calls</h4><p>Transparent monthly ranking reports plus a strategy call to review what moved, what's next, and where your ROI is coming from.</p></div></div>
<div className="feat-item rv"><div className="feat-icon">🔄</div><div className="feat-body"><h4>Competitor Monitoring</h4><p>We track your top competitors' rankings, content, and backlinks every month — and use that intelligence to keep you ahead.</p></div></div>
<div className="feat-item rv2"><div className="feat-icon">🏷️</div><div className="feat-body"><h4>Schema &amp; Structured Data</h4><p>Rich snippets, FAQ schema, article schema, local business schema — we mark up your site so Google understands and features your content.</p></div></div>
</div>
</div>
</section>
      <section className="tools-section">
<div className="wrap">
<div className="sec-h rv">
<div className="pill pill-b">Our Toolkit</div>
<h2>Industry-Leading SEO Tools</h2>
<p>We invest in the best tools so our insights are faster, deeper, and more accurate than the competition.</p>
</div>
<div className="tools-grid">
<div className="tool-card rv"><div className="tool-icon">📊</div><div className="tool-name">Ahrefs</div><div className="tool-desc">Backlink analysis &amp; keyword research</div></div>
<div className="tool-card rv2"><div className="tool-icon">🔍</div><div className="tool-name">SEMrush</div><div className="tool-desc">Competitor intelligence &amp; tracking</div></div>
<div className="tool-card rv3"><div className="tool-icon">🕷️</div><div className="tool-name">Screaming Frog</div><div className="tool-desc">Full-site technical SEO crawl</div></div>
<div className="tool-card rv"><div className="tool-icon">📈</div><div className="tool-name">Google Search Console</div><div className="tool-desc">Direct Google performance data</div></div>
<div className="tool-card rv2"><div className="tool-icon">⚡</div><div className="tool-name">PageSpeed Insights</div><div className="tool-desc">Core Web Vitals optimization</div></div>
<div className="tool-card rv3"><div className="tool-icon">✍️</div><div className="tool-name">Surfer SEO</div><div className="tool-desc">Content optimization &amp; scoring</div></div>
<div className="tool-card rv"><div className="tool-icon">📍</div><div className="tool-name">BrightLocal</div><div className="tool-desc">Local SEO &amp; citation management</div></div>
<div className="tool-card rv2"><div className="tool-icon">🤖</div><div className="tool-name">AI + Custom Scripts</div><div className="tool-desc">Proprietary automation &amp; analysis</div></div>
</div>
</div>
</section>
      <section className="faq-section" id="faq">
<div className="wrap">
<div className="sec-h rv">
<div className="pill pill-b">Common Questions</div>
<h2>Frequently Asked Questions</h2>
<p>Straight answers to the questions every business asks before starting SEO.</p>
</div>
<div className="faq-wrap-2col">
<div className="faq-col">
<div className="fi">
<button className="fi-q">How long does SEO take to show results?<span className="fi-icon">+</span></button>
<div className="fi-a">Most clients see measurable keyword movement within 60–90 days. Significant organic traffic growth typically comes at the 4–6 month mark. SEO compounds — the longer you invest, the stronger and more defensible your rankings become.</div>
</div>
<div className="fi">
<button className="fi-q">Do you guarantee #1 rankings on Google?<span className="fi-icon">+</span></button>
<div className="fi-a">No ethical SEO agency can guarantee specific rankings — Google's algorithm is not controlled by anyone. What we do guarantee is a fully documented process, transparent monthly reporting, and consistent measurable improvement in your rankings and organic traffic.</div>
</div>
<div className="fi">
<button className="fi-q">What is the difference between on-page and off-page SEO?<span className="fi-icon">+</span></button>
<div className="fi-a">On-page SEO covers everything on your website — content, metadata, internal links, site speed. Off-page SEO covers signals from outside your site, primarily backlinks from other authoritative websites. Both are essential for sustainable top rankings.</div>
</div>
<div className="fi">
<button className="fi-q">Do you work with small businesses and startups?<span className="fi-icon">+</span></button>
<div className="fi-a">Yes. We work with businesses of all sizes — from local service businesses wanting local SEO to enterprise B2B companies needing programmatic SEO at scale. Our packages are designed to deliver ROI at every budget level.</div>
</div>
</div>
<div className="faq-col">
<div className="fi">
<button className="fi-q">What SEO tools do you use?<span className="fi-icon">+</span></button>
<div className="fi-a">We use Ahrefs, SEMrush, Google Search Console, Screaming Frog, Surfer SEO, BrightLocal, and custom AI-assisted scripts. We invest heavily in tooling so our insights are faster and more accurate than agencies relying on free tools.</div>
</div>
<div className="fi">
<button className="fi-q">How do you measure SEO success?<span className="fi-icon">+</span></button>
<div className="fi-a">We track keyword rankings, organic traffic, click-through rates, bounce rates, conversion rates from organic traffic, and ultimately revenue attributed to SEO. We report on business impact — not just vanity metrics like impressions.</div>
</div>
<div className="fi">
<button className="fi-q">Will SEO work for my industry?<span className="fi-icon">+</span></button>
<div className="fi-a">If your customers search on Google — and in India, virtually every buyer does — SEO will work for your business. We've delivered results across real estate, education, healthcare, e-commerce, B2B SaaS, legal, finance, and more.</div>
</div>
<div className="fi">
<button className="fi-q">Is there a contract or lock-in period?<span className="fi-icon">+</span></button>
<div className="fi-a">No long-term lock-in. We work on monthly retainers. We believe in earning your business every month through results, not contracts. Most clients stay because the results speak for themselves — not because they're trapped.</div>
</div>
</div>
</div>
</div>
</section>
      <section className="seo-cta" id="contact">
<div className="wrap">
<div className="pill pill-seo" style={{ marginBottom: '20px', display: 'inline-flex' }}>🔍 Free SEO Audit — No Commitment</div>
<h2>Ready to Own Page One of Google?</h2>
<p>Get a free, no-fluff SEO audit of your website. We'll show you exactly why you're not ranking, what your competitors are doing better, and what it'll take to overtake them — before you spend a rupee.</p>
<div className="seo-cta-btns">
<a href="/contact" className="btn btn-o">🔍 Get My Free SEO Audit <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
<a href="https://wa.me/919407000101?text=Hi!%20I'd%20like%20a%20free%20SEO%20audit%20for%20my%20website." target="_blank" rel="noopener" className="btn btn-ghost">💬 WhatsApp Us Instead</a>
</div>
<p style={{ fontSize: '13px', color: 'rgba(255,255,255,.3)', marginTop: '24px', position: 'relative', zIndex: '1' }}>✓ No commitment  ·  ✓ Delivered in 48 hours  ·  ✓ Real insights, not a sales pitch</p>
</div>
</section>
      <PageScript id="services-seo-0" code={js0} />
    </>
  )
}
