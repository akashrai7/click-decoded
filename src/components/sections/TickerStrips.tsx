// src/components/sections/TickerStrips.tsx

const WORKING = [
  'Building n8n lead automation for a Bhopal logistics company',
  'Running Google Ads for a B2B SaaS client — ₹42 CPC, 6.8% CTR',
  'Technical SEO audit for a 4,000-page e-commerce store',
  'Deploying WhatsApp chatbot for a real estate developer in Indore',
  'White label SEO delivery for a Delhi digital agency',
  'Link building campaign — 38 DR60+ backlinks in 30 days',
  'GEO optimisation — getting client cited in ChatGPT responses',
  'Rebuilding a healthcare website on WordPress — 94 PageSpeed score',
  'Meta Ads for an e-commerce brand — 4.2× ROAS this month',
  'AI chatbot trained on client knowledge base — goes live Friday',
]

const RESULTS = [
  { badge:'SEO',           text:'+340% organic traffic in 4 months — B2B SaaS client' },
  { badge:'Google Ads',    text:'₹18 cost-per-lead — manufacturing company, Bhopal' },
  { badge:'WhatsApp',      text:'2-minute lead response time, 24/7 — zero manual effort' },
  { badge:'SEO',           text:'Ranked #1 for "digital agency Bhopal" — in 90 days' },
  { badge:'Meta Ads',      text:'4.2× ROAS — e-commerce brand, Indore' },
  { badge:'White Label',   text:'0 client contact in 12+ years of fulfilment' },
  { badge:'n8n',           text:'3-hour/week saved per sales rep — CRM + WhatsApp automation' },
  { badge:'Technical SEO', text:'0 Google penalties across 500+ projects' },
  { badge:'Web Dev',       text:'94 PageSpeed score — healthcare website rebuild' },
  { badge:'GEO',           text:'Client cited in ChatGPT, Gemini & Perplexity — same week' },
]

const TOOLS = [
  '📊 Google Ads','📘 Meta Business Suite','📈 Google Analytics 4','🔍 Search Console',
  '🔧 Semrush','🔗 Ahrefs','🏆 RankMath Pro','🔄 n8n','💬 WhatsApp Business API',
  '🌐 WordPress','🛒 WooCommerce','🎨 Elementor Pro','🐸 Screaming Frog','📋 Looker Studio',
]

export function WorkingStrip() {
  return (
    <div className="working-strip" aria-label="What the team is currently working on">
      <div className="ws-label">⚡ Currently Working On</div>
      <div className="ws-track-wrap">
        <div className="ws-track">
          {[...WORKING, ...WORKING].map((item, i) => (
            <div key={i} className="ws-item"><div className="ws-dot" />{item}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ResultsStrip() {
  return (
    <div className="results-strip" aria-label="Real results from client work">
      <div className="rs-label">📈 <span>Real Results</span></div>
      <div className="rs-track-wrap">
        <div className="rs-track">
          {[...RESULTS, ...RESULTS].map((r, i) => (
            <div key={i} className="rs-item">
              <span className="rs-badge">{r.badge}</span> {r.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ToolsStrip() {
  return (
    <div className="tools-section">
      <div className="tools-label">Powered by industry-leading tools</div>
      <div style={{ overflow:'hidden', whiteSpace:'nowrap' }}>
        <div className="tools-track">
          {[...TOOLS, ...TOOLS].map((t, i) => (
            <span key={i} className="tool-chip">{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
