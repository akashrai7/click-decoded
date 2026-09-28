// src/components/sections/TabsSection.tsx
'use client'
import { useState } from 'react'
import Link from 'next/link'

const TABS = [
  {
    label: 'SEO',
    h: 'Search Engine Optimization',
    p: 'We build compounding organic visibility through technical audits, on-page strategy, content creation and quality link acquisition. No black hat. No penalties. Just sustainable growth that accelerates over time.',
    items: ['Full website technical audit','Keyword research & mapping','On-page SEO & content strategy','Local SEO & Google Maps','E-commerce & category SEO','Monthly ranking reports'],
    cta: 'Explore SEO Services',
    href: '/services/seo',
  },
  {
    label: 'Paid Ads',
    h: 'Paid Advertising',
    p: 'Google Ads, Meta Ads and Shopping campaigns run for ROI, not impressions. Every rupee tracked, every campaign A/B tested, every week reported with full transparency.',
    items: ['Search, Display, Shopping, YouTube','Facebook & Instagram lead ads','Landing page & A/B testing','Bid strategy optimisation','Audience & retargeting setup','Weekly performance reporting'],
    cta: 'Explore Ad Services',
    href: '/services/paid-ads',
  },
  {
    label: 'AI Automation',
    h: 'AI & Automation',
    p: 'We build WhatsApp workflows, n8n automation stacks and AI chatbots that respond instantly and follow up automatically — so you never lose a lead to slow response times again.',
    items: ['WhatsApp Business API setup','n8n workflow design & build','AI chatbot for web & WhatsApp','CRM integration & lead routing','Auto follow-up sequences','Pipeline & task automation'],
    cta: 'Explore Automation',
    href: '/services/whatsapp-automation',
  },
  {
    label: 'GEO / AI Search',
    h: 'GEO / AI Search',
    p: 'We make your brand the answer AI engines cite. Get found in ChatGPT, Gemini, Perplexity and Google AI Overviews — not just on the traditional results page.',
    items: ['Generative Engine Optimization','Answer Engine Optimization (AEO)','LLM optimization & entity markup','AI brand-mention tracking','Schema & structured data','Citation authority building'],
    cta: 'Explore GEO Services',
    href: '/services/geo',
  },
  {
    label: 'White Label',
    h: 'White Label Fulfilment',
    p: 'We are the invisible engine behind agencies across India. You sell, we deliver — SEO, PPC, web, GEO and reports — all under your brand. We never make contact with your clients. Ever.',
    items: ['White label SEO & PPC fulfilment','Branded client reports in 48h','NDA-backed confidentiality','No direct client contact, ever','Scalable capacity on demand','Partner agency dashboard'],
    cta: 'Become a Partner',
    href: '/contact',
  },
]

export function TabsSection() {
  const [active, setActive] = useState(0)
  const tab = TABS[active]

  return (
    <section className="tabs-section">
      <div className="wrap">
        <div className="sec-h">
          <h2 style={{ color: '#fff' }}>What We Actually Do</h2>
          <p style={{ color: 'rgba(255,255,255,.5)' }}>Deep-dive into each service — process, deliverables, and outcomes.</p>
        </div>

        <div className="tab-row">
          {TABS.map((t, i) => (
            <button key={t.label} className={`tb${i === active ? ' on' : ''}`} onClick={() => setActive(i)}>
              {t.label}
            </button>
          ))}
        </div>

        <div className="tp on">
          <div className="tp-inner">
            <h3>{tab.h}</h3>
            <p>{tab.p}</p>
            <ul className="tp-list">
              {tab.items.map(item => <li key={item}>{item}</li>)}
            </ul>
            <Link href={tab.href} className="btn btn-o btn-sm">{tab.cta}</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
