/* eslint-disable */
// src/app/internship/page.tsx — generated from internship.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "Internship Program | Click Decoded",
  description: "Join Click Decoded's internship program in Bhopal. Learn real SEO, Google Ads, web development, AI automation with hands-on client projects — not just.",
  alternates: { canonical: "/internship" },
  openGraph: {
    title: "Internship Program — Click Decoded",
    description: "A real internship at a real AI agency. Work on live projects, get mentored by specialists, and build a portfolio that stands out.",
    url: "/internship",
    type: "website",
  },
}

const css = `
:root{--n:#2A4573;--n2:#1e3460;--n-dark:#0f1e38;--o:#EE7E1A;--o2:#d46e12;--w:#fff;--body:#1E293B;--m:#475569;--s:#64748b;--bg:#F4F7FC;--bdr:#E2E8F0;--gr:#10b981;}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}html{scroll-behavior:smooth;overflow-x:hidden;}body{font-family:'Inter',system-ui,sans-serif;color:var(--body);background:#fff;-webkit-font-smoothing:antialiased;}a{text-decoration:none;color:inherit;}img,svg{display:block;}ul{list-style:none;}button{font-family:inherit;cursor:pointer;}
.wrap{max-width:1200px;margin:0 auto;padding:0 28px;}section{padding:80px 0;}h1,h2,h3,h4{font-weight:800;line-height:1.1;letter-spacing:-.025em;color:var(--n);}
.pill{display:inline-flex;align-items:center;gap:7px;padding:6px 14px;border-radius:99px;font-size:11.5px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;}
.pill-g{background:rgba(16,185,129,.12);color:var(--gr);}
.pill-o{background:rgba(238,126,26,.12);color:var(--o);}
.btn{display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:10px;font-weight:700;font-size:14px;border:none;transition:all .18s;white-space:nowrap;cursor:pointer;}
.btn-o{background:var(--o);color:#fff;box-shadow:0 4px 18px rgba(238,126,26,.3);}.btn-o:hover{background:var(--o2);transform:translateY(-2px);}
.btn-ghost{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.35);}.btn-ghost:hover{background:rgba(255,255,255,.08);}
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
/* HERO */
.hero{background:linear-gradient(155deg,#0a1628,#0f1e38,#071a10);padding:88px 0 72px;position:relative;overflow:hidden;}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 50% 55% at 75% 25%,rgba(16,185,129,.08),transparent 65%),radial-gradient(ellipse 40% 40% at 20% 75%,rgba(42,69,115,.18),transparent 65%);}
.hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;position:relative;z-index:2;}
.hero-badge{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;background:rgba(16,185,129,.12);border:1px solid rgba(16,185,129,.25);border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:var(--gr);margin-bottom:20px;}
.hero h1{font-size:50px;color:#fff;line-height:1.05;letter-spacing:-.04em;margin-bottom:18px;}.hero h1 em{font-style:normal;color:var(--gr);}
.hero-desc{font-size:16.5px;color:rgba(255,255,255,.6);line-height:1.75;margin-bottom:28px;max-width:470px;}
.hero-chips{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:28px;}
.chip{display:inline-flex;align-items:center;gap:6px;padding:7px 14px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:99px;font-size:12.5px;color:rgba(255,255,255,.7);}
/* TRACKS */
.tracks-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.track-card{background:#fff;border:1px solid var(--bdr);border-radius:20px;overflow:hidden;transition:.2s;}
.track-card:hover{transform:translateY(-5px);box-shadow:0 20px 56px rgba(42,69,115,.1);}
.track-top{padding:24px 24px 18px;border-bottom:1px solid var(--bdr);}
.track-icon{font-size:30px;margin-bottom:12px;}
.track-card h3{font-size:18px;margin-bottom:8px;}.track-card .tag{display:inline-flex;padding:3px 10px;border-radius:6px;font-size:11px;font-weight:700;margin-bottom:12px;}
.tag-seo{background:rgba(59,130,246,.1);color:#3b82f6;}
.tag-ads{background:rgba(238,126,26,.1);color:var(--o);}
.tag-dev{background:rgba(124,58,237,.1);color:#7c3aed;}
.tag-ai{background:rgba(16,185,129,.1);color:var(--gr);}
.tag-con{background:rgba(239,68,68,.08);color:#ef4444;}
.tag-dm{background:rgba(42,69,115,.1);color:var(--n);}
.track-card p{font-size:13.5px;color:var(--m);line-height:1.7;}
.track-bottom{padding:16px 24px;}
.track-skills{display:flex;flex-direction:column;gap:7px;}
.skill-line{display:flex;align-items:center;gap:8px;font-size:12.5px;color:var(--m);}
.skill-dot{width:6px;height:6px;border-radius:50%;background:var(--gr);flex-shrink:0;}
/* PROGRAM DETAILS */
.program-section{background:var(--bg);}
.prog-grid{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start;}
.prog-detail-list{display:flex;flex-direction:column;gap:0;}
.prog-item{display:flex;gap:16px;padding:20px 0;border-bottom:1px solid var(--bdr);}
.prog-item:first-child{padding-top:0;}.prog-item:last-child{border-bottom:none;}
.prog-em{font-size:26px;flex-shrink:0;width:44px;text-align:center;}
.prog-item h4{font-size:15px;margin-bottom:5px;}.prog-item p{font-size:13.5px;color:var(--m);line-height:1.6;}
.prog-visual{background:#fff;border:1px solid var(--bdr);border-radius:20px;padding:30px;}
.prog-visual h3{font-size:20px;margin-bottom:8px;}.prog-visual .sub{font-size:13.5px;color:var(--m);margin-bottom:24px;line-height:1.6;}
.timeline{display:flex;flex-direction:column;gap:0;}
.tl-item{display:flex;gap:14px;padding:14px 0;border-left:2px solid var(--bdr);margin-left:14px;padding-left:18px;position:relative;}
.tl-item:last-child{border-left-color:transparent;}
.tl-dot{width:26px;height:26px;border-radius:50%;background:#fff;border:2px solid var(--o);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800;position:absolute;left:-14px;top:14px;color:var(--o);}
.tl-content h4{font-size:14px;margin-bottom:3px;}.tl-content p{font-size:12.5px;color:var(--m);line-height:1.6;}
/* ELIGIBILITY */
.elig-section{background:#fff;}
.elig-grid{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;}
.elig-list{display:flex;flex-direction:column;gap:14px;margin-top:20px;}
.elig-item{display:flex;gap:12px;align-items:flex-start;}
.elig-check{width:24px;height:24px;border-radius:7px;background:rgba(16,185,129,.12);border:1px solid rgba(16,185,129,.2);display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;color:var(--gr);}
.elig-item p{font-size:14px;color:var(--m);line-height:1.6;}
.elig-item p strong{color:var(--n);}
/* APPLY FORM */
.apply-section{background:var(--bg);}
.apply-form-wrap{max-width:700px;margin:0 auto;background:#fff;border:1px solid var(--bdr);border-radius:22px;padding:44px 40px;}
.apply-form-wrap h3{font-size:24px;margin-bottom:8px;}.apply-form-wrap .sub{font-size:14.5px;color:var(--m);margin-bottom:30px;line-height:1.6;}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
.form-group{margin-bottom:16px;}
.form-group label{display:block;font-size:13px;font-weight:600;color:var(--n);margin-bottom:7px;}
.form-group label span{color:var(--o);}
.form-group input,.form-group select,.form-group textarea{width:100%;padding:11px 15px;border:1.5px solid var(--bdr);border-radius:9px;font-size:14px;font-family:'Inter',sans-serif;color:var(--body);background:#fff;outline:none;transition:.18s;}
.form-group input:focus,.form-group select:focus,.form-group textarea:focus{border-color:var(--gr);box-shadow:0 0 0 3px rgba(16,185,129,.08);}
.form-group textarea{min-height:80px;resize:vertical;line-height:1.6;}
.form-group select{appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2394a3b8' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 14px center;padding-right:36px;}
.form-submit-btn{width:100%;padding:14px;background:var(--gr);color:#fff;border:none;border-radius:10px;font-size:15px;font-weight:700;cursor:pointer;transition:.18s;margin-top:4px;}
.form-submit-btn:hover{background:#0da271;transform:translateY(-2px);box-shadow:0 6px 24px rgba(16,185,129,.3);}
/* FOOTER */
footer{background:var(--n-dark);padding:64px 0 0;}
.fg{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:40px;}
.fb-desc{font-size:13.5px;color:rgba(255,255,255,.4);line-height:1.7;margin:16px 0 20px;}
.socials{display:flex;gap:10px;}
.socials a{width:34px;height:34px;border-radius:8px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:rgba(255,255,255,.5);transition:.15s;}
.socials a:hover{background:var(--o);color:#fff;border-color:var(--o);}
footer h4{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.35);margin-bottom:16px;}
.fl{display:flex;flex-direction:column;gap:8px;}.fl a,.fc a{font-size:13.5px;color:rgba(255,255,255,.5);transition:.15s;}.fl a:hover,.fc a:hover{color:#fff;}
.fc{display:flex;flex-direction:column;gap:10px;}
.footer-main{padding-bottom:40px;}
.footer-bottom{border-top:1px solid rgba(255,255,255,.07);padding:20px 0;display:flex;justify-content:space-between;align-items:center;font-size:12px;color:rgba(255,255,255,.3);flex-wrap:wrap;gap:8px;}
.footer-areas{padding:20px 0;border-top:1px solid rgba(255,255,255,.06);font-size:12px;color:rgba(255,255,255,.25);display:flex;gap:8px;flex-wrap:wrap;align-items:center;}
.footer-areas b{color:rgba(255,255,255,.4);}.footer-areas a{color:rgba(255,255,255,.25);transition:.15s;}.footer-areas a:hover{color:rgba(255,255,255,.6);}
.rv{opacity:0;transform:translateY(24px);transition:opacity .5s ease,transform .5s ease;}.rv.in{opacity:1;transform:none;}
.rv2{opacity:0;transform:translateY(24px);transition:opacity .5s ease .1s,transform .5s ease .1s;}.rv2.in{opacity:1;transform:none;}
.rv3{opacity:0;transform:translateY(24px);transition:opacity .5s ease .2s,transform .5s ease .2s;}.rv3.in{opacity:1;transform:none;}
@media(max-width:900px){.hero-grid,.prog-grid,.elig-grid{grid-template-columns:1fr;}.tracks-grid{grid-template-columns:1fr 1fr;}.fg{grid-template-columns:1fr 1fr;}.form-row{grid-template-columns:1fr;}.invest-grid{grid-template-columns:1fr 1fr !important;}}
@media(max-width:600px){.tracks-grid{grid-template-columns:1fr;}.hero h1{font-size:34px;}.apply-form-wrap{padding:28px 20px;}.hb{display:flex;}.dmenu{display:none;}.invest-grid{grid-template-columns:1fr !important;}}
`

const ld0 = `{"@context":"https://schema.org","@type":"EducationalOccupationalProgram","name":"Click Decoded Internship Program","description":"A 6-month hands-on internship at an AI-powered digital agency in Bhopal covering SEO, ads, web development, and AI automation. Interns work on live client projects with senior mentors and gain access to premium industry tools.","provider":{"@type":"Organization","name":"Click Decoded","legalName":"Aharnish Infotech Private Limited","url":"https://clickdecoded.com"},"occupationalCategory":"Digital Marketing, Web Development, AI Engineering","timeToComplete":"P6M","programType":"Internship","applicationDeadline":"2026-12-31","offers":{"@type":"Offer","price":"0","priceCurrency":"INR","description":"Unpaid internship with premium tool access, senior mentorship, industry certifications, and PPO opportunity for top performers"}}`

const js0 = `(function(){
const obs=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('in');});},{threshold:.1});
document.querySelectorAll('.rv,.rv2,.rv3').forEach(el=>obs.observe(el));
const hdr=document.getElementById('hdr');if(hdr)window.addEventListener('scroll',()=>hdr.classList.toggle('up',scrollY>40),{passive:true});
window.handleInternApply = function(e){e.preventDefault();e.target.innerHTML='<div style="text-align:center;padding:36px;"><div style="font-size:48px;margin-bottom:12px;">🎉</div><h3 style="font-size:22px;margin-bottom:10px;">Application Submitted!</h3><p style="font-size:14.5px;color:var(--m);line-height:1.8;">Thank you for applying! We review applications personally and respond within 5 working days.<br>Got questions? WhatsApp us at <strong>+91 94070 00101</strong>.</p></div>';}
})();`

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld0 }} />
      <nav className="breadcrumb"><div className="wrap"><ol className="bc-list"><li><a href="/">Home</a></li><li>›</li><li>Internship Program</li></ol></div></nav>
      <section className="hero">
<div className="wrap">
<div className="hero-grid">
<div>
<div className="hero-badge">🎓 Now Accepting Applications</div>
<h1>Learn. Build.<br /><em>Grow.</em><br />With Real Projects.</h1>
<p className="hero-desc">Not the internship where you make chai and update spreadsheets. At Click Decoded, you'll work on live campaigns, real automations, and actual client problems — from week one.</p>
<div className="hero-chips">
<div className="chip">📅 6-Month Program</div>
<div className="chip">🛠️ Premium Tools Access</div>
<div className="chip">📍 Bhopal + Hybrid</div>
<div className="chip">🏅 Certificate + PPO</div>
</div>
<div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
<a href="#apply" className="btn btn-o">Apply Now →</a>
<a href="#tracks" className="btn btn-ghost">Explore Tracks</a>
</div>
</div>
<div>
<div style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: '20px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
<div style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.1em', color: 'rgba(255,255,255,.4)' }}>What you'll walk away with</div>
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
<div style={{ background: 'rgba(16,185,129,.07)', border: '1px solid rgba(16,185,129,.15)', borderRadius: '12px', padding: '14px 12px', textAlign: 'center' }}>
<div style={{ fontSize: '28px', fontWeight: '800', color: 'var(--gr)' }}>5–8</div>
<div style={{ fontSize: '12px', color: 'rgba(255,255,255,.5)', marginTop: '3px' }}>Live projects in portfolio</div>
</div>
<div style={{ background: 'rgba(238,126,26,.07)', border: '1px solid rgba(238,126,26,.15)', borderRadius: '12px', padding: '14px 12px', textAlign: 'center' }}>
<div style={{ fontSize: '28px', fontWeight: '800', color: 'var(--o)' }}>2+</div>
<div style={{ fontSize: '12px', color: 'rgba(255,255,255,.5)', marginTop: '3px' }}>Industry certifications</div>
</div>
<div style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', borderRadius: '12px', padding: '14px 12px', textAlign: 'center' }}>
<div style={{ fontSize: '28px', fontWeight: '800', color: '#fff' }}>1:1</div>
<div style={{ fontSize: '12px', color: 'rgba(255,255,255,.5)', marginTop: '3px' }}>Senior mentor assigned</div>
</div>
<div style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', borderRadius: '12px', padding: '14px 12px', textAlign: 'center' }}>
<div style={{ fontSize: '28px', fontWeight: '800', color: '#fff' }}>PPO</div>
<div style={{ fontSize: '12px', color: 'rgba(255,255,255,.5)', marginTop: '3px' }}>Opportunity for top performers</div>
</div>
</div>
<div style={{ background: 'rgba(16,185,129,.08)', border: '1px solid rgba(16,185,129,.15)', borderRadius: '12px', padding: '14px 16px' }}>
<div style={{ fontSize: '13px', fontWeight: '700', color: '#fff', marginBottom: '3px' }}>💡 What makes this different?</div>
<div style={{ fontSize: '12.5px', color: 'rgba(255,255,255,.5)', lineHeight: '1.6' }}>You'll be assigned to actual client accounts — not sandbox demos. Real results, real stakes, real learning.</div>
</div>
</div>
</div>
</div>
</div>
</section>
      <section id="tracks"><div className="wrap">
<div className="sec-h rv" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}><div className="pill pill-g" style={{ marginBottom: '12px' }}>Internship Tracks</div><h2 style={{ fontSize: '36px', marginTop: '12px', marginBottom: '14px' }}>Choose Your Path</h2><p style={{ fontSize: '16px', color: 'var(--m)' }}>We offer specialised tracks so you go deep into one area — not wide and shallow across five.</p></div>
<div className="tracks-grid">
<div className="track-card rv">
<div className="track-top">
<div className="track-icon">🔍</div>
<span className="tag tag-seo">SEO Track</span>
<h3>Search Engine Optimisation</h3>
<p>Learn how to rank websites on Google — technically and strategically. Work on live audits, keyword strategies, and content briefs for real clients.</p>
</div>
<div className="track-bottom">
<div className="track-skills">
<div className="skill-line"><div className="skill-dot"></div>Technical SEO auditing</div>
<div className="skill-line"><div className="skill-dot"></div>Keyword research &amp; content strategy</div>
<div className="skill-line"><div className="skill-dot"></div>On-page optimisation</div>
<div className="skill-line"><div className="skill-dot"></div>GSC, Ahrefs, SEMrush</div>
</div>
</div>
</div>
<div className="track-card rv2">
<div className="track-top">
<div className="track-icon">📢</div>
<span className="tag tag-ads">Paid Ads Track</span>
<h3>Performance Marketing</h3>
<p>Run real Google Ads and Meta Ads campaigns. Learn bidding, targeting, A/B testing, and ROAS optimisation on actual budgets.</p>
</div>
<div className="track-bottom">
<div className="track-skills">
<div className="skill-line"><div className="skill-dot"></div>Google Ads campaign setup</div>
<div className="skill-line"><div className="skill-dot"></div>Meta Ads &amp; audience targeting</div>
<div className="skill-line"><div className="skill-dot"></div>Conversion tracking &amp; analytics</div>
<div className="skill-line"><div className="skill-dot"></div>Ad copy writing &amp; A/B testing</div>
</div>
</div>
</div>
<div className="track-card rv3">
<div className="track-top">
<div className="track-icon">💻</div>
<span className="tag tag-dev">Web Dev Track</span>
<h3>Web Development</h3>
<p>Build real websites and landing pages. Work with HTML/CSS/JS, WordPress, and Elementor. Focus on performance, UX, and conversion rate.</p>
</div>
<div className="track-bottom">
<div className="track-skills">
<div className="skill-line"><div className="skill-dot"></div>HTML, CSS, JavaScript basics</div>
<div className="skill-line"><div className="skill-dot"></div>WordPress &amp; WooCommerce</div>
<div className="skill-line"><div className="skill-dot"></div>Page speed &amp; Core Web Vitals</div>
<div className="skill-line"><div className="skill-dot"></div>Landing page design</div>
</div>
</div>
</div>
<div className="track-card rv">
<div className="track-top">
<div className="track-icon">🤖</div>
<span className="tag tag-ai">AI &amp; Automation Track</span>
<h3>AI Tools &amp; Automation</h3>
<p>Build actual n8n workflows, connect APIs, and automate business tasks. Learn GPT-4o prompting, chatbot development, and workflow design.</p>
</div>
<div className="track-bottom">
<div className="track-skills">
<div className="skill-line"><div className="skill-dot"></div>n8n workflow building</div>
<div className="skill-line"><div className="skill-dot"></div>OpenAI &amp; Claude API usage</div>
<div className="skill-line"><div className="skill-dot"></div>WhatsApp &amp; chatbot automation</div>
<div className="skill-line"><div className="skill-dot"></div>Prompt engineering</div>
</div>
</div>
</div>
<div className="track-card rv2">
<div className="track-top">
<div className="track-icon">✍️</div>
<span className="tag tag-con">Content Track</span>
<h3>Content &amp; Copywriting</h3>
<p>Write SEO-optimised blogs, service pages, ad copy, and email sequences that actually convert. Learn the craft of B2B content strategy.</p>
</div>
<div className="track-bottom">
<div className="track-skills">
<div className="skill-line"><div className="skill-dot"></div>SEO blog writing</div>
<div className="skill-line"><div className="skill-dot"></div>Service page copywriting</div>
<div className="skill-line"><div className="skill-dot"></div>Ad copy &amp; email sequences</div>
<div className="skill-line"><div className="skill-dot"></div>Content briefs &amp; strategy</div>
</div>
</div>
</div>
<div className="track-card rv3">
<div className="track-top">
<div className="track-icon">📊</div>
<span className="tag tag-dm">Analytics Track</span>
<h3>Analytics &amp; Reporting</h3>
<p>Learn to turn data into decisions. Set up GA4, Search Console, Looker Studio dashboards, and create reports that clients actually understand.</p>
</div>
<div className="track-bottom">
<div className="track-skills">
<div className="skill-line"><div className="skill-dot"></div>Google Analytics 4 setup</div>
<div className="skill-line"><div className="skill-dot"></div>Looker Studio dashboards</div>
<div className="skill-line"><div className="skill-dot"></div>GSC &amp; conversion tracking</div>
<div className="skill-line"><div className="skill-dot"></div>Client reporting &amp; storytelling</div>
</div>
</div>
</div>
</div>
</div></section>
      <section className="program-section"><div className="wrap">
<div className="prog-grid">
<div className="rv">
<div className="pill pill-o" style={{ marginBottom: '16px' }}>Program Details</div>
<h2 style={{ fontSize: '32px', marginBottom: '14px' }}>What 6 Months With Us Looks Like</h2>
<p style={{ fontSize: '15px', color: 'var(--m)', lineHeight: '1.8', marginBottom: '28px' }}>Our internship is structured but not rigid. You get a learning path, a mentor, real client exposure, and enough autonomy to actually grow.</p>
<div className="prog-detail-list">
<div className="prog-item"><div className="prog-em">📅</div><div><h4>Duration</h4><p>6 months, full-term. No shortcuts — the depth of real skill takes time to build.</p></div></div>
<div className="prog-item"><div className="prog-em">🛠️</div><div><h4>Premium Tool Access — Fully Covered</h4><p>Ahrefs, SEMrush, ChatGPT Pro, n8n, Google Ads Manager, Meta Business Suite — all provided by us. That's ₹20,000–₹40,000/month in tools, yours to use on real projects.</p></div></div>
<div className="prog-item"><div className="prog-em">📍</div><div><h4>Location</h4><p>Bhopal office (Amrit Complex, Raisen Road) with hybrid option from month 2 onwards.</p></div></div>
<div className="prog-item"><div className="prog-em">🏅</div><div><h4>Certificate + LinkedIn Letter</h4><p>Formal completion certificate and a personalised LinkedIn recommendation written by your senior mentor.</p></div></div>
<div className="prog-item"><div className="prog-em">🚀</div><div><h4>PPO for Top Performers</h4><p>Outstanding interns get Pre-Placement Offers for full-time roles — no extra interviews, just results.</p></div></div>
</div>
</div>
<div className="rv2">
<div className="prog-visual">
<h3>6-Month Learning Journey</h3>
<p className="sub">Structured growth, real milestones, and a mentor by your side every step.</p>
<div className="timeline">
<div className="tl-item"><div className="tl-dot">1</div><div className="tl-content"><h4>Month 1 — Foundation &amp; Onboarding</h4><p>Learn tools, get assigned to your track mentor, shadow live projects, and complete your first mini-task on a real client account.</p></div></div>
<div className="tl-item"><div className="tl-dot">2</div><div className="tl-content"><h4>Month 2 — First Independent Deliverable</h4><p>Take ownership of specific tasks within client accounts. Run your first fully independent deliverable with mentor review and feedback.</p></div></div>
<div className="tl-item"><div className="tl-dot">3</div><div className="tl-content"><h4>Month 3 — Go Deeper</h4><p>Move from task execution to strategy input. Contribute to client planning, keyword research, campaign direction, or automation architecture.</p></div></div>
<div className="tl-item"><div className="tl-dot">4</div><div className="tl-content"><h4>Month 4 — Own a Full Project</h4><p>Lead a mini project end-to-end — from brief to delivery. Mid-program review with your mentor to assess growth and adjust goals.</p></div></div>
<div className="tl-item"><div className="tl-dot">5</div><div className="tl-content"><h4>Month 5 — Advanced Execution</h4><p>Handle higher-complexity tasks independently. Build your portfolio case study from work done on real accounts — results, process, learnings.</p></div></div>
<div className="tl-item"><div className="tl-dot">✓</div><div className="tl-content"><h4>Month 6 — Completion &amp; PPO Review</h4><p>Final performance review, certificate, LinkedIn recommendation from your mentor, and PPO discussion if applicable. You leave job-ready.</p></div></div>
</div>
</div>
</div>
</div>
</div></section>
      <section style={{ background: '#fff', padding: '72px 0' }}><div className="wrap">
<div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }} className="rv">
<div className="pill pill-o" style={{ marginBottom: '16px', display: 'inline-flex' }}>Transparency First</div>
<h2 style={{ fontSize: '34px', marginBottom: '16px' }}>No Stipend. Here's What We Give Instead.</h2>
<p style={{ fontSize: '16px', color: 'var(--m)', lineHeight: '1.8', marginBottom: '40px' }}>We're upfront about it: this program does not pay a salary or stipend. What we do instead is invest something that's genuinely harder to find — our team's time, our paid tools, and access to real client work that most freshers never get.</p>
</div>
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '18px' }} className="invest-grid rv2">
<div style={{ background: 'var(--bg)', border: '1px solid var(--bdr)', borderRadius: '18px', padding: '24px 22px' }}>
<div style={{ fontSize: '28px', marginBottom: '12px' }}>🧠</div>
<h4 style={{ fontSize: '15px', marginBottom: '8px' }}>Senior Mentor's Time</h4>
<p style={{ fontSize: '13px', color: 'var(--m)', lineHeight: '1.7' }}>A senior specialist who earns market-rate will personally guide your work for 6 months. That's hundreds of hours of real expertise — freely invested in you.</p>
</div>
<div style={{ background: 'var(--bg)', border: '1px solid var(--bdr)', borderRadius: '18px', padding: '24px 22px' }}>
<div style={{ fontSize: '28px', marginBottom: '12px' }}>🛠️</div>
<h4 style={{ fontSize: '15px', marginBottom: '8px' }}>₹20K–40K/mo in Tools</h4>
<p style={{ fontSize: '13px', color: 'var(--m)', lineHeight: '1.7' }}>Ahrefs, SEMrush, ChatGPT Pro, n8n, Google Ads Manager — all paid for by us. These are the same tools professionals pay out of pocket to learn.</p>
</div>
<div style={{ background: 'var(--bg)', border: '1px solid var(--bdr)', borderRadius: '18px', padding: '24px 22px' }}>
<div style={{ fontSize: '28px', marginBottom: '12px' }}>📁</div>
<h4 style={{ fontSize: '15px', marginBottom: '8px' }}>Real Client Exposure</h4>
<p style={{ fontSize: '13px', color: 'var(--m)', lineHeight: '1.7' }}>You'll work on live accounts with real budgets. Experience that candidates spend 1–2 years trying to build elsewhere, compressed into 6 months here.</p>
</div>
<div style={{ background: 'var(--bg)', border: '1px solid var(--bdr)', borderRadius: '18px', padding: '24px 22px' }}>
<div style={{ fontSize: '28px', marginBottom: '12px' }}>🏅</div>
<h4 style={{ fontSize: '15px', marginBottom: '8px' }}>Certifications</h4>
<p style={{ fontSize: '13px', color: 'var(--m)', lineHeight: '1.7' }}>Guided prep for Google Ads, GA4, HubSpot, and track-specific certifications. Exam fees reimbursed for top performers.</p>
</div>
<div style={{ background: 'var(--bg)', border: '1px solid var(--bdr)', borderRadius: '18px', padding: '24px 22px' }}>
<div style={{ fontSize: '28px', marginBottom: '12px' }}>📄</div>
<h4 style={{ fontSize: '15px', marginBottom: '8px' }}>5–8 Portfolio Projects</h4>
<p style={{ fontSize: '13px', color: 'var(--m)', lineHeight: '1.7' }}>Not practice assignments — real deliverables from real accounts that you can show to any employer as proof of what you can do.</p>
</div>
<div style={{ background: 'var(--bg)', border: '1px solid var(--bdr)', borderRadius: '18px', padding: '24px 22px' }}>
<div style={{ fontSize: '28px', marginBottom: '12px' }}>🚀</div>
<h4 style={{ fontSize: '15px', marginBottom: '8px' }}>PPO — Skip the Queue</h4>
<p style={{ fontSize: '13px', color: 'var(--m)', lineHeight: '1.7' }}>Top performers get a Pre-Placement Offer for a full-time role. No fresh interviews — your 6 months of work is the interview.</p>
</div>
</div>
<div style={{ marginTop: '28px', background: 'linear-gradient(135deg,rgba(238,126,26,.06),rgba(42,69,115,.06))', border: '1px solid rgba(238,126,26,.2)', borderRadius: '16px', padding: '22px 28px', display: 'flex', alignItems: 'center', gap: '18px' }} className="rv3">
<div style={{ fontSize: '32px', flexShrink: '0' }}>💡</div>
<p style={{ fontSize: '14.5px', color: 'var(--body)', lineHeight: '1.75' }}><strong>The honest trade:</strong> You invest your time, effort, and commitment. We invest our team, tools, and trust. At the end of 6 months, you leave with the skills, portfolio, and proof of work that most graduates spend years trying to build — and a real shot at a full-time offer.</p>
</div>
</div></section>
      <section className="elig-section"><div className="wrap">
<div className="elig-grid">
<div className="rv">
<div className="pill pill-g" style={{ marginBottom: '16px' }}>Who Can Apply</div>
<h2 style={{ fontSize: '32px', marginBottom: '14px' }}>Degrees Don't<br />Get You In.<br /><em style={{ fontStyle: 'normal', color: 'var(--o)' }}>Passion Does.</em></h2>
<p style={{ fontSize: '15px', color: 'var(--m)', lineHeight: '1.8', marginBottom: '8px' }}>School dropout. College dropout. Graduate. Doesn't matter. If you're genuinely hungry to learn and willing to put in the work — you have a shot here. We've seen "qualified" people who couldn't be bothered, and dropouts who outworked everyone. We know which one we'd rather have.</p>
<div className="elig-list">
<div className="elig-item"><div className="elig-check">✓</div><p><strong>Any educational background</strong> — 10th pass, 12th pass, dropout, graduate, postgraduate. The certificate on your wall means nothing here. Your drive does.</p></div>
<div className="elig-item"><div className="elig-check">✓</div><p><strong>Basic computer comfort</strong> — you should be able to use a laptop, browse independently, and figure things out without hand-holding</p></div>
<div className="elig-item"><div className="elig-check">✓</div><p><strong>Proof of curiosity</strong> — tried starting a blog, ran Instagram for fun, watched tutorials late at night, tinkered with anything digital — that matters more than your marksheet</p></div>
<div className="elig-item"><div className="elig-check">✓</div><p><strong>Available 5 days a week</strong> — at least in month 1 for in-office onboarding at our Bhopal office</p></div>
<div className="elig-item"><div className="elig-check">✓</div><p><strong>Open to real feedback</strong> — you'll hear honest, direct feedback from working professionals. That's how growth happens. Fragile egos need not apply.</p></div>
</div>
</div>
<div className="rv2" style={{ background: 'var(--bg)', border: '1px solid var(--bdr)', borderRadius: '20px', padding: '36px 32px' }}>
<h3 style={{ fontSize: '22px', marginBottom: '20px' }}>Frequently Asked Questions</h3>
<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
<div style={{ paddingBottom: '16px', borderBottom: '1px solid var(--bdr)' }}>
<h4 style={{ fontSize: '14px', marginBottom: '6px' }}>Is there a stipend?</h4>
<p style={{ fontSize: '13.5px', color: 'var(--m)', lineHeight: '1.6' }}>No — and we're upfront about it. Instead, we invest ₹20K–₹40K/month in premium tools, senior mentor hours, real client exposure, and certification support. The value you take away is worth far more than a small monthly payment.</p>
</div>
<div style={{ paddingBottom: '16px', borderBottom: '1px solid var(--bdr)' }}>
<h4 style={{ fontSize: '14px', marginBottom: '6px' }}>Do I need a degree or prior experience?</h4>
<p style={{ fontSize: '13.5px', color: 'var(--m)', lineHeight: '1.6' }}>Neither. School dropout, college dropout, fresher, career switcher — we don't care about your paper trail. Show us your passion and willingness to learn, and you have a real shot.</p>
</div>
<div style={{ paddingBottom: '16px', borderBottom: '1px solid var(--bdr)' }}>
<h4 style={{ fontSize: '14px', marginBottom: '6px' }}>Can I intern remotely?</h4>
<p style={{ fontSize: '13.5px', color: 'var(--m)', lineHeight: '1.6' }}>First month is in-office at Bhopal for onboarding. After that, hybrid options are available by track.</p>
</div>
<div style={{ paddingBottom: '16px', borderBottom: '1px solid var(--bdr)' }}>
<h4 style={{ fontSize: '14px', marginBottom: '6px' }}>Will I get a certificate?</h4>
<p style={{ fontSize: '13.5px', color: 'var(--m)', lineHeight: '1.6' }}>Yes — a formal completion certificate and a LinkedIn recommendation letter from your mentor.</p>
</div>
<div>
<h4 style={{ fontSize: '14px', marginBottom: '6px' }}>What are my chances of a full-time offer?</h4>
<p style={{ fontSize: '13.5px', color: 'var(--m)', lineHeight: '1.6' }}>Real — we've converted multiple interns to full-time roles. It depends on performance and openings at the time.</p>
</div>
</div>
</div>
</div>
</div></section>
      <section className="apply-section" id="apply"><div className="wrap">
<div className="sec-h rv" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 40px' }}><div className="pill pill-g" style={{ marginBottom: '12px' }}>Apply Now</div><h2 style={{ fontSize: '34px', marginTop: '12px', marginBottom: '12px' }}>Ready to Start Your Journey?</h2><p style={{ fontSize: '15px', color: 'var(--m)' }}>Fill this in — we review every application personally. If you're a good fit, we'll reach out within 5 working days.</p></div>
<div className="apply-form-wrap rv2">
<h3>Internship Application</h3>
<p className="sub">Takes 3 minutes. No long essays. Just tell us who you are and what excites you.</p>
<form data-cd-submit="handleInternApply(event)">
<div className="form-row">
<div className="form-group"><label>Full Name <span>*</span></label><input type="text" placeholder="Your full name" required /></div>
<div className="form-group"><label>Email Address <span>*</span></label><input type="email" placeholder="you@email.com" required /></div>
</div>
<div className="form-row">
<div className="form-group"><label>WhatsApp Number <span>*</span></label><input type="tel" placeholder="+91 98765 00000" required /></div>
<div className="form-group"><label>City / Location</label><input type="text" placeholder="Bhopal, Indore, etc." /></div>
</div>
<div className="form-row">
<div className="form-group">
<label>Preferred Track <span>*</span></label>
<select required>
<option value="" disabled selected>— Select track —</option>
<option>SEO</option>
<option>Performance Marketing (Ads)</option>
<option>Web Development</option>
<option>AI &amp; Automation</option>
<option>Content &amp; Copywriting</option>
<option>Analytics &amp; Reporting</option>
</select>
</div>
<div className="form-group">
<label>Current Status <span>*</span></label>
<select required>
<option value="" disabled selected>— Select —</option>
<option>School dropout / 10th-12th pass</option>
<option>College dropout</option>
<option>Currently in college / final year</option>
<option>Recent graduate</option>
<option>Working professional seeking change</option>
<option>Other — I'll explain</option>
</select>
</div>
</div>
<div className="form-group"><label>LinkedIn or Portfolio URL</label><input type="url" placeholder="https://linkedin.com/in/yourprofile" /></div>
<div className="form-group"><label>Why do you want to intern at Click Decoded? <span>*</span></label><textarea placeholder="Keep it real. What drew you here and what do you want to learn?" required></textarea></div>
<button type="submit" className="form-submit-btn">Submit Application →</button>
</form>
</div>
</div></section>
      <PageScript id="internship-0" code={js0} />
    </>
  )
}
