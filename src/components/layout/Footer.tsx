// src/components/layout/Footer.tsx
import Link from 'next/link'
import Image from 'next/image'

const SERVICES = [
  { label:'SEO Services',        href:'/services/seo' },
  { label:'Google Ads',          href:'/services/google-ads' },
  { label:'Meta Ads',            href:'/services/meta-ads' },
  { label:'WhatsApp Automation', href:'/services/whatsapp-automation' },
  { label:'AI Chatbots',         href:'/services/ai-chatbots' },
  { label:'Web Development',     href:'/services/web-development' },
  { label:'GEO / AI Search',     href:'/services/geo' },
  { label:'White Label SEO',     href:'/services/white-label' },
]

const COMPANY = [
  { label:'About Us',        href:'/about' },
  { label:'Case Studies',    href:'/case-studies' },
  { label:'Blog',            href:'/blog' },
  { label:'Sitemap',         href:'/sitemap-html' },
  { label:'Contact',         href:'/contact' },
  { label:'Privacy Policy',  href:'/privacy' },
  { label:'Terms of Service',href:'/terms' },
]

const CONTACT = [
  { icon:'📧', text:'hello@clickdecoded.com', href:'mailto:hello@clickdecoded.com' },
  { icon:'📱', text:'+91 98765 43210',        href:'tel:+919876543210' },
  { icon:'📍', text:'Bhopal, Madhya Pradesh, India', href:'https://maps.google.com/?q=Bhopal' },
]

const SOCIALS = [
  { label:'in', href:'https://linkedin.com/company/click-decoded' },
  { label:'tw', href:'https://twitter.com/clickdecoded' },
  { label:'ig', href:'https://instagram.com/clickdecoded' },
  { label:'yt', href:'https://youtube.com/@clickdecoded' },
]

const AREAS = [
  'Bhopal','Indore','Delhi','Mumbai','Bangalore','Chennai','Hyderabad','Pune',
  'Ahmedabad','Jaipur','Lucknow','Surat','Kolkata','Nagpur','Vijayawada',
]

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="footer-main">
        <div className="wrap">
          <div className="fg">
            {/* Brand col */}
            <div>
              <Link href="/" style={{ display:'inline-block' }}>
                <Image src="/images/clickdecoded.png" alt="Click Decoded" width={160} height={44} style={{ height:40, width:'auto', filter:'brightness(0) invert(1)' }} />
              </Link>
              <p className="fb-desc">
                India&apos;s premier B2B digital growth agency. SEO, paid ads, AI automation, and white label fulfilment — 12 years, 500+ projects, zero fluff.
              </p>
              <div className="socials">
                {SOCIALS.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
                ))}
              </div>
            </div>

            {/* Services col */}
            <div>
              <h4>Services</h4>
              <ul className="fl">
                {SERVICES.map(s => (
                  <li key={s.label}><Link href={s.href}>{s.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Company col */}
            <div>
              <h4>Company</h4>
              <ul className="fl">
                {COMPANY.map(c => (
                  <li key={c.label}><Link href={c.href}>{c.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Contact col */}
            <div>
              <h4>Contact</h4>
              <ul className="fc">
                {CONTACT.map(c => (
                  <li key={c.text}>
                    <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                      <span>{c.icon}</span>{c.text}
                    </a>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop:24 }}>
                <Link href="/contact" className="btn btn-o btn-sm">
                  Get Free Strategy Call
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service areas */}
      <div className="wrap">
        <div className="footer-areas">
          <b>Service Areas:</b>{' '}
          {AREAS.map((a, i) => (
            <span key={a}>
              <Link href={`/areas/${a.toLowerCase()}`}>{a}</Link>
              {i < AREAS.length - 1 && ' · '}
            </span>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© {year} Click Decoded. All rights reserved. Crafted in Bhopal 🇮🇳</p>
          <div style={{ display:'flex', gap:16 }}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/sitemap.xml">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
