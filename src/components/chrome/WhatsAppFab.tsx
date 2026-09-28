// src/components/chrome/WhatsAppFab.tsx
// React port of the WhatsApp floating widget from components/footer.js (HTML build).
// Same markup, classes and behavior: offer picker → name/email → wa.me deep link.
'use client'

import { useEffect, useRef, useState } from 'react'
import { COMPANY, WA_OFFERS } from '@/lib/constants'

export default function WhatsAppFab() {
  const [open, setOpen] = useState(false)
  const [closing, setClosing] = useState(false)
  const [step, setStep] = useState<'offers' | 'details'>('offers')
  const [selected, setSelected] = useState<number | null>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [nameErr, setNameErr] = useState(false)
  const [emailErr, setEmailErr] = useState(false)
  const [notifSeen, setNotifSeen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [hlIdx, setHlIdx] = useState(0)
  const fabRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)

  function openCard() {
    setClosing(false)
    setStep('offers')
    setOpen(true)
    setNotifSeen(true)
  }
  function closeCard() {
    setClosing(true)
    setTimeout(() => {
      setOpen(false)
      setClosing(false)
    }, 240)
  }

  // Auto-open after 6s (once per session)
  useEffect(() => {
    if (sessionStorage.getItem('wa_opened')) return
    const t = setTimeout(() => {
      sessionStorage.setItem('wa_opened', '1')
      openCard()
    }, 6000)
    return () => clearTimeout(t)
  }, [])

  // Cycle highlight through offer buttons while open on step 1
  useEffect(() => {
    if (!open || step !== 'offers') return
    const t = setInterval(() => setHlIdx((i) => i + 1), 2200)
    return () => clearInterval(t)
  }, [open, step])

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    let lastY = 0
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > lastY && y > 300)
      lastY = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function pick(i: number) {
    setSelected(i)
    setStep('details')
    setName('')
    setEmail('')
    setNameErr(false)
    setEmailErr(false)
    setTimeout(() => nameRef.current?.focus(), 80)
  }

  function send() {
    const n = name.trim()
    const e = email.trim()
    let valid = true
    setNameErr(false)
    setEmailErr(false)
    if (!n) {
      setNameErr(true)
      valid = false
    }
    if (!e || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) {
      setEmailErr(true)
      valid = false
    }
    if (!valid || selected === null) return
    const offer = WA_OFFERS[selected]
    const msg =
      'Hi! ' + n + ' this side. I am willing to discuss about ' + offer.topic +
      '.\n\nFor future communication, my email ID is ' + e + '.'
    window.open(
      'https://wa.me/' + COMPANY.whatsapp + '?text=' + encodeURIComponent(msg),
      '_blank',
      'noopener,noreferrer',
    )
  }

  const waIcon = (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )

  return (
    <div id="cd-wa-fab" ref={fabRef} className={hidden ? 'hidden' : undefined}>
      {open && (
        <div id="cd-wa-card" className={closing ? 'closing' : undefined}>
          <div className="wa-card-head">
            <div className="wa-avatar">💬</div>
            <div className="wa-head-info">
              <div className="wa-head-name">Click Decoded</div>
              <div className="wa-head-status">
                <span className="wa-online-dot"></span>Typically replies in minutes
              </div>
            </div>
            <button className="wa-close" aria-label="Close" onClick={closeCard}>✕</button>
          </div>

          {step === 'offers' && (
            <div className="wa-card-body" id="cd-wa-step1">
              <div className="wa-intro-bubble">
                👋 Hi! Ready to grow your business?<br />
                Pick what you need — we&apos;ll connect on <b>WhatsApp</b>.
              </div>
              <div className="wa-offers" id="cd-wa-offers">
                {WA_OFFERS.map((o, i) => (
                  <button
                    key={o.label}
                    className={'wa-offer-btn' + (hlIdx % WA_OFFERS.length === i ? ' highlight' : '')}
                    onClick={() => pick(i)}
                  >
                    <span className="wa-offer-icon">{o.icon}</span>
                    <span className="wa-offer-text">
                      <span className="wa-offer-label">{o.label}</span>
                      <span className="wa-offer-sub">Tap to get started ›</span>
                    </span>
                    <span className="wa-offer-arr">›</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 'details' && selected !== null && (
            <div id="cd-wa-details" style={{ display: 'flex' }}>
              <button className="wa-back-btn" onClick={() => setStep('offers')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M19 12H5M12 5l-7 7 7 7" />
                </svg>
                Back
              </button>
              <div className="wa-selected-bubble">
                {WA_OFFERS[selected].icon} {WA_OFFERS[selected].label}
              </div>
              <div>
                <label className="wa-form-label" htmlFor="cd-wa-name">Your Name</label>
                <input
                  ref={nameRef}
                  className={'wa-input' + (nameErr ? ' error' : '')}
                  type="text" id="cd-wa-name" placeholder="e.g. Rahul Sharma" autoComplete="name"
                  value={name} onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="wa-form-label" htmlFor="cd-wa-email">Email ID</label>
                <input
                  className={'wa-input' + (emailErr ? ' error' : '')}
                  type="email" id="cd-wa-email" placeholder="e.g. rahul@company.com" autoComplete="email"
                  value={email} onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && send()}
                />
              </div>
              <button className="wa-send-btn" onClick={send}>
                {waIcon}
                Open WhatsApp
              </button>
            </div>
          )}

          <div className="wa-card-foot">
            <span className="wa-powered">
              Powered by{' '}
              <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </span>
          </div>
        </div>
      )}

      <button id="cd-wa-btn" aria-label="Chat on WhatsApp" onClick={() => (open ? closeCard() : openCard())}>
        {!notifSeen && <span className="wa-notif">1</span>}
        <span className="wa-tooltip">Chat with us!</span>
        <svg viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </button>
    </div>
  )
}
