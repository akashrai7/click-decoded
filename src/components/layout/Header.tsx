// src/components/layout/Header.tsx
'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV, COMPANY } from '@/lib/constants'

const CAR = (
  <svg className="w-2.5 h-2.5 opacity-50" viewBox="0 0 10 10" fill="none">
    <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const SERVICES_COLS = [
  { icon: '🔍', label: 'SEO',           links: NAV.seo      },
  { icon: '💰', label: 'Paid Ads',      links: NAV.paidAds  },
  { icon: '🤖', label: 'AI & Auto',     links: NAV.ai       },
  { icon: '🎬', label: 'Content',       links: NAV.content  },
  { icon: '💻', label: 'Web & Design',  links: NAV.web      },
  { icon: '🚀', label: 'GEO / AI',      links: NAV.geo      },
]
const SLIM_MENUS = [
  { label: 'Industries', links: NAV.industries.map((l,i) => ({
      ...l, desc: ['Property, developers & brokers','Hospitals, doctors & wellness','Coaching, schools & courses',
        'Online stores & D2C brands','B2B & factory businesses','Tech companies & startups',
        'Lawyers, CAs & consultants','Hotels, resorts & agencies'][i] ?? ''
    }))},
  { label: 'White Label', links: [
      { label:'White Label SEO',       href:'/whitelabel-seo',             desc:'Full SEO under your brand'    },
      { label:'White Label PPC',       href:'/whitelabel-ppc',             desc:'Google & Meta Ads reseller'   },
      { label:'White Label Web Dev',   href:'/whitelabel-web-development', desc:'WordPress & WooCommerce'      },
      { label:'White Label GEO',       href:'/whitelabel-geo',             desc:'AI-search visibility, resold' },
      { label:'White Label Reporting', href:'/whitelabel-reporting',       desc:'Branded client reports'       },
      { label:'White Label AI & Auto', href:'/whitelabel-ai',              desc:'n8n, chatbots & workflows'    },
    ]},
  { label: 'Company', links: NAV.company.map(l => ({ ...l, desc: '' })) },
]

function DesktopDropdown({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLLIElement>(null)
  useEffect(() => {
    const fn = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false) }
    document.addEventListener('mousedown', fn)
    return () => document.removeEventListener('mousedown', fn)
  }, [])
  return (
    <li ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button style={{ color:'var(--n)' }}
        className="flex items-center gap-1.5 px-3 py-2.5 text-[13.5px] font-semibold rounded-lg transition-colors hover:bg-[var(--bg)]"
        onClick={() => setOpen(o => !o)}>
        {label}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.18 }}>{CAR}</motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 z-50">
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

function ServicesMega() {
  return (
    <div className="w-[1100px] grid grid-cols-6 gap-4 p-6 bg-white border border-[var(--bdr)] rounded-[18px] shadow-[0_24px_64px_rgba(13,27,42,.14)]">
      {SERVICES_COLS.map(col => (
        <div key={col.label}>
          <p className="text-[10px] font-extrabold uppercase tracking-[.1em] mb-3" style={{ color:'var(--n)' }}>
            {col.icon} {col.label}
          </p>
          <ul className="space-y-0.5">
            {col.links.map(l => (
              <li key={l.href}>
                <Link href={l.href}
                  className="block relative pl-[11px] py-[5px] text-[13px] font-medium transition-all duration-150
                             hover:text-[var(--o)] hover:pl-[14px] group"
                  style={{ color:'var(--body)' }}>
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 rounded-sm bg-[var(--o)] transition-all duration-150 group-hover:h-[13px]" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

function SlimMega({ links }: { links: { label: string; href: string; desc: string }[] }) {
  return (
    <div className="w-[296px] p-3 bg-white border border-[var(--bdr)] rounded-[18px] shadow-[0_24px_64px_rgba(13,27,42,.14)]">
      {links.map(l => (
        <Link key={l.href} href={l.href}
          className="flex flex-col relative px-3 py-2.5 rounded-xl hover:bg-[var(--bg)] transition-colors group">
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--o)] text-xs opacity-0 group-hover:opacity-100 transition-all group-hover:right-2.5">→</span>
          <span className="text-[13px] font-semibold group-hover:text-[var(--o)] transition-colors" style={{ color:'var(--n)' }}>{l.label}</span>
          {l.desc && <span className="text-[11px] mt-0.5" style={{ color:'var(--s)' }}>{l.desc}</span>}
        </Link>
      ))}
    </div>
  )
}

function MobileAccordion({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[var(--bdr)]">
      <button onClick={() => setOpen(o => !o)}
        className="flex items-center justify-between w-full py-4 text-[15.5px] font-bold"
        style={{ color: 'var(--n)' }}>
        {label} <span>{open ? '−' : '+'}</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} className="overflow-hidden">
            <div className="pb-3 pl-2.5 space-y-0.5">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  useEffect(() => { document.body.style.overflow = mobileOpen ? 'hidden' : '' }, [mobileOpen])

  return (
    <>
      {/* Top bar */}
      <div style={{ background:'var(--n-dark)', borderBottom:'1px solid rgba(255,255,255,.06)' }}>
        <div className="wrap flex items-center justify-between h-[38px]">
          <div className="hidden sm:flex items-center gap-5">
            <a href={`tel:${COMPANY.phoneRaw}`} className="flex items-center gap-1.5 text-[12.5px] font-medium transition-colors hover:text-[var(--o)]" style={{color:'rgba(255,255,255,.55)'}}>
              📞 {COMPANY.phone}
            </a>
            <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-1.5 text-[12.5px] font-medium transition-colors hover:text-[var(--o)]" style={{color:'rgba(255,255,255,.55)'}}>
              ✉ {COMPANY.email}
            </a>
          </div>
          <div className="flex items-center gap-2.5 ml-auto">
            <a href={`tel:${COMPANY.phoneRaw}`} className="inline-flex items-center gap-1.5 px-3 py-[5px] rounded-md text-[11.5px] font-bold text-white transition-all hover:-translate-y-px" style={{background:'var(--o)'}}>
              📞 Call Now
            </a>
            <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-[5px] rounded-md text-[11.5px] font-bold text-white transition-all hover:-translate-y-px" style={{background:'#25D366'}}>
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Nav */}
      <header id="hdr" className="sticky top-0 z-50 transition-shadow duration-200"
        style={{ background:'rgba(255,255,255,.97)', backdropFilter:'blur(14px)', borderBottom:'1px solid var(--bdr)',
                 boxShadow: scrolled ? '0 4px 32px rgba(13,27,42,.09)' : 'none' }}>
        <div className="wrap flex items-center justify-between h-[70px] gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image src="/images/clickdecoded.png" alt="Click Decoded" width={140} height={36} className="h-9 w-auto" priority />
          </Link>

          {/* Desktop menu */}
          <ul className="hidden lg:flex items-center gap-0.5">
            <li>
              <Link href="/" className="px-3 py-2.5 text-[13.5px] font-semibold rounded-lg transition-colors hover:bg-[var(--bg)]" style={{color:'var(--n)'}}>
                Home
              </Link>
            </li>
            <DesktopDropdown label="Services"><ServicesMega /></DesktopDropdown>
            {SLIM_MENUS.map(m => (
              <DesktopDropdown key={m.label} label={m.label}>
                <SlimMega links={m.links as { label: string; href: string; desc: string }[]} />
              </DesktopDropdown>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex items-center gap-2.5">
            <Link href="/contact" className="btn btn-o btn-sm hidden sm:inline-flex">
              🚀 Get Free Strategy Call
            </Link>
            <button onClick={() => setMobileOpen(true)}
              className="lg:hidden flex flex-col gap-[5px] p-1.5 rounded-lg"
              aria-label="Open menu">
              <span className="block w-[22px] h-[2px] rounded-sm bg-[var(--n)]" />
              <span className="block w-[22px] h-[2px] rounded-sm bg-[var(--n)]" />
              <span className="block w-[22px] h-[2px] rounded-sm bg-[var(--n)]" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-50 lg:hidden" onClick={() => setMobileOpen(false)} />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 overflow-y-auto lg:hidden border-l border-[var(--bdr)]">
              <div className="flex items-center justify-between p-5 border-b border-[var(--bdr)]">
                <Image src="/images/clickdecoded.png" alt="Click Decoded" width={120} height={32} className="h-8 w-auto" />
                <button onClick={() => setMobileOpen(false)} className="text-2xl font-light" style={{color:'var(--n)'}}>✕</button>
              </div>
              <div className="p-4">
                <Link href="/" onClick={() => setMobileOpen(false)}
                  className="block py-3.5 text-[15.5px] font-bold border-b border-[var(--bdr)]" style={{color:'var(--n)'}}>
                  Home
                </Link>
                <MobileAccordion label="Services">
                  {SERVICES_COLS.map(col => (
                    <div key={col.label} className="mb-2">
                      <p className="text-[10px] font-extrabold uppercase tracking-[.07em] px-2 mb-1 mt-2" style={{color:'var(--n)'}}>
                        {col.icon} {col.label}
                      </p>
                      {col.links.map(l => (
                        <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                          className="block px-2 py-2 text-[14px] hover:text-[var(--o)] transition-colors" style={{color:'var(--body)'}}>
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </MobileAccordion>
                {SLIM_MENUS.map(m => (
                  <MobileAccordion key={m.label} label={m.label}>
                    {m.links.map(l => (
                      <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                        className="block px-2 py-2 text-[14px] hover:text-[var(--o)] transition-colors" style={{color:'var(--body)'}}>
                        {l.label}
                      </Link>
                    ))}
                  </MobileAccordion>
                ))}
                <div className="mt-5 flex flex-col gap-3">
                  <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn btn-o w-full justify-center">
                    🚀 Get Free Strategy Call
                  </Link>
                  <div className="flex gap-2.5">
                    <a href={`tel:${COMPANY.phoneRaw}`} className="btn flex-1 justify-center text-[13px] py-2.5 px-4" style={{background:'var(--bg)',color:'var(--n)'}}>📞 Call</a>
                    <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer"
                      className="btn flex-1 justify-center text-[13px] py-2.5 px-4 text-white" style={{background:'#25D366'}}>💬 WhatsApp</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
