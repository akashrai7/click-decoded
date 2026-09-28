/* eslint-disable */
// src/app/blog/page.tsx — generated from blog.html (do not edit header/footer here)
import type { Metadata } from 'next'
import PageScript from '@/components/chrome/PageScript'

export const metadata: Metadata = {
  title: "Blog — Digital Marketing Insights | Click Decoded",
  description: "Expert insights on SEO, Google Ads, web development, AI automation, and digital marketing. Actionable guides for Indian businesses by the Click Decoded team.",
  robots: "noindex, follow",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Click Decoded | Digital Marketing Insights",
    description: "SEO tips, Google Ads strategies, AI automation guides, and web development insights for Indian businesses.",
    url: "/blog",
    type: "website",
  },
}

const css = `
:root{--n:#2A4573;--n2:#1e3460;--n-dark:#0f1e38;--o:#EE7E1A;--o2:#d46e12;--body:#1E293B;--m:#475569;--s:#64748b;--bg:#F4F7FC;--bdr:#E2E8F0;--gr:#25D366;}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;overflow-x:hidden;}
body{font-family:'Inter',system-ui,sans-serif;color:var(--body);background:#fff;-webkit-font-smoothing:antialiased;}
a{text-decoration:none;color:inherit;}img,svg{display:block;}ul{list-style:none;}button{font-family:inherit;cursor:pointer;}
.wrap{max-width:1200px;margin:0 auto;padding:0 28px;}
h1,h2,h3,h4{font-weight:800;line-height:1.1;letter-spacing:-.025em;color:var(--n);}
.btn{display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:10px;font-weight:700;font-size:14px;border:none;transition:all .18s;white-space:nowrap;cursor:pointer;}
.btn-o{background:var(--o);color:#fff;box-shadow:0 4px 18px rgba(238,126,26,.3);}.btn-o:hover{background:var(--o2);transform:translateY(-2px);}
.btn-n{background:var(--n);color:#fff;}.btn-n:hover{background:var(--n2);transform:translateY(-2px);}
.btn-ghost{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.3);}.btn-ghost:hover{background:rgba(255,255,255,.08);}
.btn-wa{background:var(--gr);color:#fff;}.btn-wa:hover{background:#1ebe59;transform:translateY(-2px);}
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
.fg{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px;}
.fb-desc{font-size:13.5px;color:rgba(255,255,255,.4);line-height:1.7;margin:16px 0 20px;}
.socials{display:flex;gap:10px;}.socials a{width:34px;height:34px;border-radius:8px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:rgba(255,255,255,.5);transition:.15s;}.socials a:hover{background:var(--o);color:#fff;border-color:var(--o);}
footer h4{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.35);margin-bottom:16px;}
.fl{display:flex;flex-direction:column;gap:8px;}.fl a,.fc a{font-size:13.5px;color:rgba(255,255,255,.5);transition:.15s;}.fl a:hover,.fc a:hover{color:#fff;}
.fc{display:flex;flex-direction:column;gap:10px;}
.footer-bottom{border-top:1px solid rgba(255,255,255,.07);padding:20px 0;display:flex;justify-content:space-between;align-items:center;font-size:12px;color:rgba(255,255,255,.3);flex-wrap:wrap;gap:8px;}
.footer-bottom a{color:rgba(255,255,255,.3);}.footer-bottom a:hover{color:rgba(255,255,255,.6);}
.footer-areas{padding:20px 0;border-top:1px solid rgba(255,255,255,.06);font-size:12px;color:rgba(255,255,255,.25);display:flex;gap:8px;flex-wrap:wrap;align-items:center;}
.footer-areas b{color:rgba(255,255,255,.4);}.footer-areas a{color:rgba(255,255,255,.25);transition:.15s;}.footer-areas a:hover{color:rgba(255,255,255,.6);}

/* ════════════════════════════
   BLOG PAGE STYLES
════════════════════════════ */

/* BLOG HERO */
.blog-hero{background:linear-gradient(155deg,#0f1e38 0%,#162847 60%,#0f1e38 100%);padding:64px 0 56px;position:relative;overflow:hidden;}
.blog-hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 50% 70% at 80% 50%,rgba(238,126,26,.07) 0%,transparent 65%);}
.blog-hero-inner{position:relative;z-index:1;max-width:680px;}
.eyebrow{display:inline-flex;align-items:center;gap:8px;background:rgba(238,126,26,.12);border:1px solid rgba(238,126,26,.25);color:var(--o);font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;padding:6px 16px;border-radius:99px;margin-bottom:18px;}
.blog-hero h1{font-size:clamp(32px,4.5vw,54px);font-weight:900;color:#fff;line-height:1.06;letter-spacing:-.03em;margin-bottom:14px;}
.blog-hero h1 em{font-style:normal;color:var(--o);}
.blog-hero-sub{font-size:16px;color:rgba(255,255,255,.55);line-height:1.7;max-width:520px;margin-bottom:28px;}
.blog-search{display:flex;gap:0;max-width:440px;}
.blog-search input{flex:1;padding:13px 18px;border:none;border-radius:10px 0 0 10px;font-size:14px;font-family:inherit;outline:none;color:var(--body);}
.blog-search button{padding:13px 20px;background:var(--o);border:none;border-radius:0 10px 10px 0;cursor:pointer;display:flex;align-items:center;font-size:16px;}
.blog-search button:hover{background:var(--o2);}
.blog-hero-stats{display:flex;gap:24px;margin-top:28px;flex-wrap:wrap;}
.bhs{font-size:12.5px;color:rgba(255,255,255,.4);display:flex;align-items:center;gap:6px;}
.bhs strong{color:rgba(255,255,255,.75);}

/* CATEGORY FILTERS */
.cat-bar{background:#fff;border-bottom:1px solid var(--bdr);padding:0;position:sticky;top:110px;z-index:10;}
.cat-inner{display:flex;gap:4px;padding:12px 0;overflow-x:auto;scrollbar-width:none;}
.cat-inner::-webkit-scrollbar{display:none;}
.cat-btn{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;border-radius:8px;font-size:13px;font-weight:600;border:1.5px solid transparent;background:transparent;color:var(--m);cursor:pointer;transition:.15s;white-space:nowrap;}
.cat-btn:hover{background:var(--bg);color:var(--n);}
.cat-btn.active{background:var(--n);color:#fff;border-color:var(--n);}
.cat-count{font-size:10px;font-weight:800;background:rgba(255,255,255,.15);padding:2px 7px;border-radius:99px;}
.cat-btn:not(.active) .cat-count{background:var(--bg);color:var(--s);}

/* FEATURED POST */
.featured-section{padding:56px 0 0;}
.section-label{font-size:10.5px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:var(--s);margin-bottom:20px;display:flex;align-items:center;gap:10px;}
.section-label::after{content:'';flex:1;height:1px;background:var(--bdr);}
.featured-card{display:grid;grid-template-columns:1fr 420px;gap:0;border-radius:24px;overflow:hidden;border:1.5px solid var(--bdr);transition:all .2s;}
.featured-card:hover{box-shadow:0 12px 48px rgba(42,69,115,.1);transform:translateY(-2px);}
.featured-cover{position:relative;min-height:360px;background:linear-gradient(135deg,#0f1e38 0%,#1e3460 50%,#2d1b69 100%);display:flex;align-items:flex-end;padding:32px;overflow:hidden;}
.featured-cover::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 70% 70% at 30% 30%,rgba(238,126,26,.15) 0%,transparent 65%);}
.fc-art{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:120px;opacity:.07;}
.fc-label{position:relative;z-index:1;}
.fc-cat{display:inline-flex;align-items:center;gap:6px;background:var(--o);color:#fff;font-size:10px;font-weight:800;padding:4px 12px;border-radius:99px;letter-spacing:.08em;text-transform:uppercase;margin-bottom:12px;}
.fc-title{font-size:clamp(20px,2.5vw,28px);font-weight:900;color:#fff;line-height:1.15;letter-spacing:-.02em;}
.featured-body{padding:36px 32px;display:flex;flex-direction:column;justify-content:center;background:#fff;}
.post-meta{display:flex;align-items:center;gap:12px;margin-bottom:16px;flex-wrap:wrap;}
.post-author{display:flex;align-items:center;gap:8px;}
.author-avatar{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;color:#fff;flex-shrink:0;}
.author-name{font-size:13px;font-weight:600;color:var(--n);}
.post-date{font-size:12px;color:var(--s);}
.read-time{font-size:12px;color:var(--s);background:var(--bg);padding:3px 10px;border-radius:6px;border:1px solid var(--bdr);}
.featured-title{font-size:clamp(18px,2vw,24px);font-weight:900;color:var(--n);line-height:1.2;margin-bottom:12px;letter-spacing:-.02em;}
.featured-excerpt{font-size:14px;color:var(--m);line-height:1.7;margin-bottom:20px;}
.post-tags{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:20px;}
.tag{font-size:11px;font-weight:600;padding:4px 10px;border-radius:6px;border:1px solid var(--bdr);color:var(--m);background:var(--bg);}
.read-btn{display:inline-flex;align-items:center;gap:8px;font-size:13.5px;font-weight:700;color:var(--n);padding:10px 20px;border-radius:9px;border:1.5px solid var(--bdr);background:#fff;transition:.15s;cursor:pointer;}
.read-btn:hover{border-color:var(--n);background:var(--bg);}
.read-btn svg{transition:transform .2s;}
.read-btn:hover svg{transform:translateX(3px);}

/* POSTS GRID */
.posts-section{padding:48px 0 80px;}
.posts-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
.post-card{border:1.5px solid var(--bdr);border-radius:20px;overflow:hidden;background:#fff;transition:all .2s;display:flex;flex-direction:column;}
.post-card:hover{box-shadow:0 8px 32px rgba(42,69,115,.09);transform:translateY(-3px);border-color:var(--n);}
.post-cover{height:200px;position:relative;display:flex;align-items:flex-end;padding:18px;overflow:hidden;}
.cover-art{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:80px;opacity:.1;}
.post-cat{position:relative;z-index:1;display:inline-flex;align-items:center;gap:5px;font-size:10px;font-weight:800;padding:4px 12px;border-radius:99px;letter-spacing:.08em;text-transform:uppercase;color:#fff;}
.post-body{padding:22px;display:flex;flex-direction:column;flex:1;}
.post-title{font-size:15.5px;font-weight:800;color:var(--n);line-height:1.3;margin-bottom:10px;letter-spacing:-.01em;}
.post-excerpt{font-size:13px;color:var(--m);line-height:1.65;margin-bottom:14px;flex:1;}
.post-footer{display:flex;align-items:center;justify-content:space-between;padding-top:14px;border-top:1px solid var(--bdr);}
.pf-author{display:flex;align-items:center;gap:8px;}
.pf-name{font-size:12px;font-weight:600;color:var(--n);}
.pf-date{font-size:11px;color:var(--s);}
.pf-read{font-size:11.5px;font-weight:600;color:var(--s);background:var(--bg);padding:4px 10px;border-radius:6px;}
.post-card-link{display:flex;align-items:center;gap:6px;font-size:12.5px;font-weight:700;color:var(--n);margin-top:12px;transition:.15s;}
.post-card-link:hover{color:var(--o);}
.post-card-link svg{transition:transform .2s;}
.post-card-link:hover svg{transform:translateX(3px);}

/* COVER THEMES */
.cover-seo{background:linear-gradient(135deg,#0f1e38,#1e3460);}
.cover-ads{background:linear-gradient(135deg,#7c0000,#b91c1c);}
.cover-web{background:linear-gradient(135deg,#0c2340,#1e4080);}
.cover-ai{background:linear-gradient(135deg,#2d1b69,#4c1d95);}
.cover-social{background:linear-gradient(135deg,#831843,#be185d);}
.cover-growth{background:linear-gradient(135deg,#064e3b,#059669);}
.cover-geo{background:linear-gradient(135deg,#1e1b4b,#3730a3);}
.cover-content{background:linear-gradient(135deg,#78350f,#d97706);}
.cat-seo{background:#EE7E1A;}
.cat-ads{background:#EF4444;}
.cat-web{background:#2A4573;}
.cat-ai{background:#7C3AED;}
.cat-social{background:#EC4899;}
.cat-growth{background:#059669;}
.cat-geo{background:#4338CA;}
.cat-content{background:#D97706;}

/* SIDEBAR NEWSLETTER */
.blog-layout{display:grid;grid-template-columns:1fr 300px;gap:40px;align-items:start;padding:48px 0 80px;}
.sidebar{display:flex;flex-direction:column;gap:24px;}
.sidebar-box{background:var(--bg);border:1px solid var(--bdr);border-radius:18px;padding:24px;}
.sidebar-box h4{font-size:13px;font-weight:800;text-transform:uppercase;letter-spacing:.09em;color:var(--n);margin-bottom:16px;}
.newsletter-form input{width:100%;padding:11px 14px;border:1.5px solid var(--bdr);border-radius:10px;font-size:13px;font-family:inherit;outline:none;margin-bottom:10px;background:#fff;transition:.15s;}
.newsletter-form input:focus{border-color:var(--n);}
.newsletter-form button{width:100%;padding:12px;background:var(--o);color:#fff;font-weight:700;font-size:13.5px;border:none;border-radius:10px;cursor:pointer;transition:.18s;}
.newsletter-form button:hover{background:var(--o2);}
.nl-privacy{font-size:11px;color:var(--s);margin-top:8px;text-align:center;}
.topic-list{display:flex;flex-direction:column;gap:4px;}
.topic-item{display:flex;align-items:center;justify-content:space-between;padding:9px 12px;border-radius:9px;font-size:13px;font-weight:600;color:var(--body);background:#fff;border:1px solid var(--bdr);cursor:pointer;transition:.15s;}
.topic-item:hover{border-color:var(--n);color:var(--n);background:var(--bg);}
.topic-count{font-size:11px;color:var(--s);font-weight:500;}
.popular-list{display:flex;flex-direction:column;gap:14px;}
.pop-item{display:flex;gap:12px;align-items:flex-start;}
.pop-num{font-size:22px;font-weight:900;color:var(--bdr);line-height:1;flex-shrink:0;width:28px;}
.pop-title{font-size:13px;font-weight:700;color:var(--n);line-height:1.4;margin-bottom:4px;transition:.15s;cursor:pointer;}
.pop-title:hover{color:var(--o);}
.pop-meta{font-size:11px;color:var(--s);}

/* CTA STRIP */
.blog-cta{background:linear-gradient(135deg,#0f1e38,#162847);padding:56px 0;text-align:center;margin-top:0;}
.blog-cta h2{font-size:clamp(22px,3vw,34px);color:#fff;margin-bottom:10px;}
.blog-cta p{font-size:15px;color:rgba(255,255,255,.5);max-width:440px;margin:0 auto 24px;line-height:1.6;}
.cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}
.btn-white{background:#fff;color:var(--n);font-weight:800;}.btn-white:hover{background:#f1f5f9;}
.btn-outline-white{background:transparent;color:#fff;border:2px solid rgba(255,255,255,.3);}.btn-outline-white:hover{background:rgba(255,255,255,.08);}

/* PAGINATION */
.pagination{display:flex;justify-content:center;gap:8px;padding:24px 0 0;}
.page-btn{width:40px;height:40px;border-radius:10px;border:1.5px solid var(--bdr);background:#fff;font-size:13.5px;font-weight:700;color:var(--m);cursor:pointer;transition:.15s;display:flex;align-items:center;justify-content:center;}
.page-btn:hover{border-color:var(--n);color:var(--n);}
.page-btn.active{background:var(--n);color:#fff;border-color:var(--n);}
.page-btn.wide{width:auto;padding:0 14px;}

/* RESPONSIVE */
@media(max-width:1024px){
  .blog-layout{grid-template-columns:1fr;}
  .sidebar{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
}
@media(max-width:900px){
  .hb{display:flex;}.dmenu,.navcta .btn-o{display:none;}
  .featured-card{grid-template-columns:1fr;}
  .featured-cover{min-height:240px;}
  .posts-grid{grid-template-columns:1fr 1fr;}
  .fg{grid-template-columns:1fr 1fr;}
  .cat-bar{top:70px;}
}
@media(max-width:600px){
  .blog-hero{padding:48px 0 40px;}
  .posts-grid{grid-template-columns:1fr;}
  .sidebar{grid-template-columns:1fr;}
  .fg{grid-template-columns:1fr;}
  .blog-search{max-width:100%;}
}
`

const ld0 = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": "https://www.clickdecoded.com/blog",
      "name": "Blog",
      "description": "Expert insights on SEO, Google Ads, web development, AI automation, and digital marketing. Actionable guides for Indian businesses by the Click Decoded team.",
      "url": "https://www.clickdecoded.com/blog",
      "publisher": {
        "@type": "Organization",
        "name": "Click Decoded",
        "url": "https://www.clickdecoded.com"
      }
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
          "name": "Blog",
          "item": "https://www.clickdecoded.com/blog"
        }
      ]
    }
  ]
}`

const js0 = `(function(){
// Header scroll
const hdr=document.getElementById('hdr');
if(hdr)window.addEventListener('scroll',()=>hdr.classList.toggle('up',scrollY>40),{passive:true});

// Mobile nav
const hb=document.getElementById('hb'),mn=document.getElementById('mnav'),mc=document.getElementById('mnav-close');
function openMnav(){mn.classList.add('on');document.body.style.overflow='hidden';}
function closeMnav(){mn.classList.remove('on');document.body.style.overflow='';}
if(hb)hb.addEventListener('click',openMnav);
if(mc)mc.addEventListener('click',closeMnav);
document.querySelectorAll('.ma > button').forEach(b=>{
  b.addEventListener('click',()=>{
    const item=b.parentElement,isOpen=item.classList.contains('on');
    document.querySelectorAll('.ma').forEach(x=>x.classList.remove('on'));
    if(!isOpen)item.classList.add('on');
  });
});

// Category filter
window.filterCat = function(btn, cat) {
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const cards = document.querySelectorAll('#posts-grid .post-card');
  cards.forEach(card => {
    if (cat === 'all' || card.dataset.cat === cat) {
      card.style.display = 'flex';
      card.style.animation = 'fadeIn .25s ease';
    } else {
      card.style.display = 'none';
    }
  });
}

// Search focus
document.querySelector('.blog-search input').addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const q = e.target.value.trim();
    if (q) alert('Search for: ' + q + '\\n(Connect to a search backend to make this live)');
  }
});
})();`

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld0 }} />
      <nav className="breadcrumb">
<div className="wrap">
<ol className="bc-list">
<li><a href="/">Home</a></li>
<li>›</li>
<li>Blog</li>
</ol>
</div>
</nav>
      <section className="blog-hero">
<div className="wrap">
<div className="blog-hero-inner">
<div className="eyebrow">📖 Click Decoded Blog</div>
<h1>Digital Marketing<br /><em>Insights</em> That Work.</h1>
<p className="blog-hero-sub">No fluff. No guru talk. Just actionable guides on SEO, Google Ads, AI automation, and web development — written by practitioners for Indian businesses.</p>
<div className="blog-search">
<input type="text" placeholder="Search articles… e.g. 'local SEO tips'" />
<button>🔍</button>
</div>
<div className="blog-hero-stats">
<div className="bhs">📝 <strong>40+</strong> Articles Published</div>
<div className="bhs">👥 <strong>12,000+</strong> Monthly Readers</div>
<div className="bhs">🏷️ <strong>8</strong> Topic Categories</div>
</div>
</div>
</div>
</section>
      <div className="cat-bar">
<div className="wrap">
<div className="cat-inner">
<button className="cat-btn active" data-cd-click="filterCat(this,'all')">All Posts <span className="cat-count">40</span></button>
<button className="cat-btn" data-cd-click="filterCat(this,'seo')">🔍 SEO <span className="cat-count">12</span></button>
<button className="cat-btn" data-cd-click="filterCat(this,'ads')">🎯 Google Ads <span className="cat-count">8</span></button>
<button className="cat-btn" data-cd-click="filterCat(this,'ai')">🤖 AI &amp; Automation <span className="cat-count">7</span></button>
<button className="cat-btn" data-cd-click="filterCat(this,'web')">💻 Web Development <span className="cat-count">6</span></button>
<button className="cat-btn" data-cd-click="filterCat(this,'social')">📱 Social Media <span className="cat-count">4</span></button>
<button className="cat-btn" data-cd-click="filterCat(this,'geo')">🚀 GEO / AI Search <span className="cat-count">3</span></button>
</div>
</div>
</div>
      <section className="featured-section">
<div className="wrap">
<div className="section-label">⭐ Featured Article</div>
<a href="/blog/how-to-rank-on-google-in-2025" className="featured-card" style={{ display: 'grid' }}>
<div className="featured-cover cover-seo">
<div className="fc-art">🔍</div>
<div className="fc-label">
<div className="fc-cat">🔍 SEO</div>
<div className="fc-title">How to Rank on Google in 2025:<br />The Complete India Guide</div>
</div>
</div>
<div className="featured-body">
<div className="post-meta">
<div className="post-author">
<div className="author-avatar" style={{ background: 'var(--o)' }}>MK</div>
<div>
<div className="author-name">Mukteshwar Katre</div>
<div className="post-date">June 20, 2025</div>
</div>
</div>
<span className="read-time">⏱ 12 min read</span>
</div>
<div className="featured-title">How to Rank on Google in 2025: The Complete India SEO Guide</div>
<div className="featured-excerpt">Google's algorithm has changed more in the last 18 months than in the previous 5 years combined. AI Overviews, helpful content updates, and E-E-A-T signals have rewritten the rules. Here's exactly what's working right now for Indian businesses — with specific tactics, not generic advice.</div>
<div className="post-tags">
<span className="tag">SEO Strategy</span>
<span className="tag">Google Rankings</span>
<span className="tag">India SEO</span>
<span className="tag">2025 Guide</span>
</div>
<div className="read-btn">
          Read Full Article
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
</div>
</div>
</a>
</div>
</section>
      <div className="wrap">
<div className="blog-layout">

<div>
<div className="section-label">🗂️ Latest Articles</div>
<div className="posts-grid" id="posts-grid">

<article className="post-card" data-cat="ads">
<div className="post-cover cover-ads">
<div className="cover-art">🎯</div>
<span className="post-cat cat-ads">Google Ads</span>
</div>
<div className="post-body">
<div className="post-title">Why 80% of Indian Google Ads Accounts Are Wasting Budget (and How to Fix Yours)</div>
<div className="post-excerpt">Most Bhopal and Indore businesses are paying Google for clicks that will never convert. We audited 50 accounts and found the same 7 mistakes every time.</div>
<div className="post-footer">
<div className="pf-author">
<div className="author-avatar" style={{ width: '26px', height: '26px', fontSize: '10px', background: '#EF4444' }}>MK</div>
<div><div className="pf-name">Mukteshwar Katre</div><div className="pf-date">Jun 15, 2025</div></div>
</div>
<span className="pf-read">9 min</span>
</div>
<a href="/blog" className="post-card-link">Read Article <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
</div>
</article>

<article className="post-card" data-cat="ai">
<div className="post-cover cover-ai">
<div className="cover-art">🤖</div>
<span className="post-cat cat-ai">AI &amp; Automation</span>
</div>
<div className="post-body">
<div className="post-title">How We Saved a Bhopal Real Estate Firm 24 Hours Per Week Using n8n Automation</div>
<div className="post-excerpt">A case study in building a lead capture → WhatsApp follow-up → CRM pipeline that now runs without any human involvement. Full workflow breakdown included.</div>
<div className="post-footer">
<div className="pf-author">
<div className="author-avatar" style={{ width: '26px', height: '26px', fontSize: '10px', background: '#7C3AED' }}>RV</div>
<div><div className="pf-name">Rohit Verma</div><div className="pf-date">Jun 10, 2025</div></div>
</div>
<span className="pf-read">11 min</span>
</div>
<a href="/blog" className="post-card-link">Read Article <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
</div>
</article>

<article className="post-card" data-cat="seo">
<div className="post-cover cover-seo">
<div className="cover-art">📍</div>
<span className="post-cat cat-seo">SEO</span>
</div>
<div className="post-body">
<div className="post-title">Local SEO in 2025: The Definitive Guide for Indian Small Businesses</div>
<div className="post-excerpt">Google's local algorithm has three core signals — proximity, relevance, and prominence. Here's how to systematically dominate all three in your city.</div>
<div className="post-footer">
<div className="pf-author">
<div className="author-avatar" style={{ width: '26px', height: '26px', fontSize: '10px', background: 'var(--o)' }}>MK</div>
<div><div className="pf-name">Mukteshwar Katre</div><div className="pf-date">Jun 5, 2025</div></div>
</div>
<span className="pf-read">14 min</span>
</div>
<a href="/blog" className="post-card-link">Read Article <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
</div>
</article>

<article className="post-card" data-cat="web">
<div className="post-cover cover-web">
<div className="cover-art">⚡</div>
<span className="post-cat cat-web">Web Development</span>
</div>
<div className="post-body">
<div className="post-title">Core Web Vitals 2025: What Indian Business Websites Are Getting Wrong</div>
<div className="post-excerpt">We ran PageSpeed audits on 200 Indian business websites. Here are the most common LCP, CLS, and INP failures — and the exact fixes for each one.</div>
<div className="post-footer">
<div className="pf-author">
<div className="author-avatar" style={{ width: '26px', height: '26px', fontSize: '10px', background: '#21759B' }}>PS</div>
<div><div className="pf-name">Priya Sharma</div><div className="pf-date">May 28, 2025</div></div>
</div>
<span className="pf-read">8 min</span>
</div>
<a href="/blog" className="post-card-link">Read Article <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
</div>
</article>

<article className="post-card" data-cat="geo">
<div className="post-cover cover-geo">
<div className="cover-art">🚀</div>
<span className="post-cat cat-geo">GEO / AI Search</span>
</div>
<div className="post-body">
<div className="post-title">GEO vs SEO: What Is Generative Engine Optimization and Should Your Business Care?</div>
<div className="post-excerpt">ChatGPT, Gemini, and Perplexity are answering buying questions without sending users to websites. Here's how to make sure your brand appears in their answers.</div>
<div className="post-footer">
<div className="pf-author">
<div className="author-avatar" style={{ width: '26px', height: '26px', fontSize: '10px', background: '#4338CA' }}>MK</div>
<div><div className="pf-name">Mukteshwar Katre</div><div className="pf-date">May 22, 2025</div></div>
</div>
<span className="pf-read">10 min</span>
</div>
<a href="/blog" className="post-card-link">Read Article <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
</div>
</article>

<article className="post-card" data-cat="social">
<div className="post-cover cover-social">
<div className="cover-art">📘</div>
<span className="post-cat cat-social">Social Media</span>
</div>
<div className="post-body">
<div className="post-title">Meta Ads for Indian Lead Generation: The Setup That Actually Works in 2025</div>
<div className="post-excerpt">Facebook Lead Ads, Instant Forms, Conversion API — the landscape has changed. Here's the exact campaign structure we use for Tier 2 city B2B clients to get ₹150 CPL.</div>
<div className="post-footer">
<div className="pf-author">
<div className="author-avatar" style={{ width: '26px', height: '26px', fontSize: '10px', background: '#EC4899' }}>PS</div>
<div><div className="pf-name">Priya Sharma</div><div className="pf-date">May 18, 2025</div></div>
</div>
<span className="pf-read">7 min</span>
</div>
<a href="/blog" className="post-card-link">Read Article <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
</div>
</article>

<article className="post-card" data-cat="seo">
<div className="post-cover cover-growth">
<div className="cover-art">🔗</div>
<span className="post-cat cat-growth">SEO</span>
</div>
<div className="post-body">
<div className="post-title">Link Building in India: What Works, What's Dead, and What Will Get You Penalised</div>
<div className="post-excerpt">PBNs, link farms, and "DR 90" packages on Fiverr — the Indian link building market is full of landmines. Here's what's actually building rankings in 2025.</div>
<div className="post-footer">
<div className="pf-author">
<div className="author-avatar" style={{ width: '26px', height: '26px', fontSize: '10px', background: '#059669' }}>RV</div>
<div><div className="pf-name">Rohit Verma</div><div className="pf-date">May 12, 2025</div></div>
</div>
<span className="pf-read">9 min</span>
</div>
<a href="/blog" className="post-card-link">Read Article <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
</div>
</article>

<article className="post-card" data-cat="ai">
<div className="post-cover cover-ai">
<div className="cover-art">💬</div>
<span className="post-cat cat-ai">AI &amp; Automation</span>
</div>
<div className="post-body">
<div className="post-title">WhatsApp Business API vs. WhatsApp Business App: Which One Does Your Indian Business Actually Need?</div>
<div className="post-excerpt">The regular WhatsApp Business app is free but limited. The API costs money but unlocks automation. Here's the honest breakdown to help you decide.</div>
<div className="post-footer">
<div className="pf-author">
<div className="author-avatar" style={{ width: '26px', height: '26px', fontSize: '10px', background: '#7C3AED' }}>MK</div>
<div><div className="pf-name">Mukteshwar Katre</div><div className="pf-date">May 6, 2025</div></div>
</div>
<span className="pf-read">6 min</span>
</div>
<a href="/blog" className="post-card-link">Read Article <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
</div>
</article>

<article className="post-card" data-cat="web">
<div className="post-cover cover-web">
<div className="cover-art">🛒</div>
<span className="post-cat cat-web">Web Development</span>
</div>
<div className="post-body">
<div className="post-title">WooCommerce vs Shopify for Indian E-Commerce in 2025: An Honest Comparison</div>
<div className="post-excerpt">Payment gateways, GST invoicing, shipping integrations, hosting costs, SEO control — we compare both platforms on every metric that matters for Indian online stores.</div>
<div className="post-footer">
<div className="pf-author">
<div className="author-avatar" style={{ width: '26px', height: '26px', fontSize: '10px', background: '#21759B' }}>PS</div>
<div><div className="pf-name">Priya Sharma</div><div className="pf-date">Apr 28, 2025</div></div>
</div>
<span className="pf-read">13 min</span>
</div>
<a href="/blog" className="post-card-link">Read Article <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
</div>
</article>
</div>

<div className="pagination">
<button className="page-btn active">1</button>
<button className="page-btn">2</button>
<button className="page-btn">3</button>
<button className="page-btn">4</button>
<span style={{ display: 'flex', alignItems: 'center', padding: '0 4px', color: 'var(--s)', fontSize: '13px' }}>…</span>
<button className="page-btn">8</button>
<button className="page-btn wide">Next →</button>
</div>
</div>

<aside className="sidebar">

<div className="sidebar-box" style={{ background: 'var(--n)', borderColor: 'var(--n)' }}>
<h4 style={{ color: 'rgba(255,255,255,.4)' }}>📬 Weekly Digest</h4>
<div style={{ fontSize: '15px', fontWeight: '800', color: '#fff', marginBottom: '6px', lineHeight: '1.3' }}>Get the best insights, every week.</div>
<div style={{ fontSize: '12.5px', color: 'rgba(255,255,255,.45)', marginBottom: '16px', lineHeight: '1.6' }}>One email. No spam. Unsubscribe anytime. Joined by 3,200+ Indian marketers.</div>
<div className="newsletter-form">
<input type="email" placeholder="your@email.com" style={{ borderColor: 'rgba(255,255,255,.15)', background: 'rgba(255,255,255,.08)', color: '#fff' }} />
<button>Subscribe Free →</button>
</div>
<div className="nl-privacy" style={{ color: 'rgba(255,255,255,.3)' }}>🔒 No spam, ever. Unsubscribe in one click.</div>
</div>

<div className="sidebar-box">
<h4>🏷️ Browse by Topic</h4>
<div className="topic-list">
<div className="topic-item">🔍 SEO <span className="topic-count">12 articles</span></div>
<div className="topic-item">🎯 Google Ads <span className="topic-count">8 articles</span></div>
<div className="topic-item">🤖 AI &amp; Automation <span className="topic-count">7 articles</span></div>
<div className="topic-item">💻 Web Development <span className="topic-count">6 articles</span></div>
<div className="topic-item">📱 Social Media <span className="topic-count">4 articles</span></div>
<div className="topic-item">🚀 GEO / AI Search <span className="topic-count">3 articles</span></div>
</div>
</div>

<div className="sidebar-box">
<h4>🔥 Most Read</h4>
<div className="popular-list">
<div className="pop-item">
<div className="pop-num">01</div>
<div>
<div className="pop-title">How to Rank on Google in 2025: The Complete India Guide</div>
<div className="pop-meta">🔍 SEO · 12 min · 8.4k reads</div>
</div>
</div>
<div className="pop-item">
<div className="pop-num">02</div>
<div>
<div className="pop-title">Local SEO in 2025: The Definitive Guide for Indian Small Businesses</div>
<div className="pop-meta">📍 SEO · 14 min · 6.1k reads</div>
</div>
</div>
<div className="pop-item">
<div className="pop-num">03</div>
<div>
<div className="pop-title">WooCommerce vs Shopify for Indian E-Commerce in 2025</div>
<div className="pop-meta">💻 Web Dev · 13 min · 5.2k reads</div>
</div>
</div>
<div className="pop-item">
<div className="pop-num">04</div>
<div>
<div className="pop-title">GEO vs SEO: What Is Generative Engine Optimization?</div>
<div className="pop-meta">🚀 GEO · 10 min · 4.7k reads</div>
</div>
</div>
<div className="pop-item">
<div className="pop-num">05</div>
<div>
<div className="pop-title">n8n Automation Case Study: 24 Hours Saved Per Week</div>
<div className="pop-meta">🤖 AI · 11 min · 3.9k reads</div>
</div>
</div>
</div>
</div>

<div className="sidebar-box" style={{ background: 'linear-gradient(135deg,rgba(238,126,26,.06),rgba(238,126,26,.02))', borderColor: 'rgba(238,126,26,.2)' }}>
<h4 style={{ color: 'var(--o)' }}>🚀 Free Audit</h4>
<div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--n)', marginBottom: '8px', lineHeight: '1.3' }}>Is your website leaving money on the table?</div>
<div style={{ fontSize: '12.5px', color: 'var(--m)', marginBottom: '16px', lineHeight: '1.6' }}>Get a free SEO + performance audit. No obligation. We reply within 1 hour.</div>
<a href="/contact" className="btn btn-o btn-sm" style={{ width: '100%', justifyContent: 'center' }}>Get Free Audit →</a>
</div>
</aside>
</div>
</div>
      <section className="blog-cta">
<div className="wrap">
<div style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '.12em', color: 'rgba(255,255,255,.3)', marginBottom: '10px' }}>📖 Click Decoded Blog</div>
<h2>Want These Results for Your Business?</h2>
<p>Reading is great. But having experts implement it for you is better. Let's talk.</p>
<div className="cta-btns">
<a href="/contact" className="btn btn-o">🚀 Get Free Strategy Call</a>
<a href="https://wa.me/919407000101" target="_blank" rel="noopener" className="btn btn-wa">💬 WhatsApp Now</a>
<a href="/service-areas" className="btn btn-outline-white">🗺️ See Services by City</a>
</div>
</div>
</section>
      <style>
@keyframes fadeIn&#123;from&#123;opacity:0;transform:translateY(8px);&#125;to&#123;opacity:1;transform:translateY(0);&#125;&#125;
</style>
      <PageScript id="blog-0" code={js0} />
    </>
  )
}
