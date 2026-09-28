// src/components/whatsapp/WhatsAppButton.tsx
'use client'
import { useState, useEffect, useRef } from 'react'
import { X, ArrowLeft, Send } from 'lucide-react'
import { WA_OFFERS, COMPANY } from '@/lib/constants'
import { buildWaMessage, waUrl } from '@/lib/utils'

type Step = 'offers' | 'form'

export function WhatsAppButton() {
  const [open, setOpen]           = useState(false)
  const [step, setStep]           = useState<Step>('offers')
  const [selectedIdx, setSelected] = useState<number | null>(null)
  const [name, setName]           = useState('')
  const [email, setEmail]         = useState('')
  const [errors, setErrors]       = useState({ name: false, email: false })
  const [hlIdx, setHlIdx]         = useState(0)
  const nameRef                   = useRef<HTMLInputElement>(null)

  // Auto-open once per session
  useEffect(() => {
    if (sessionStorage.getItem('wa_opened')) return
    const t = setTimeout(() => {
      setOpen(true)
      sessionStorage.setItem('wa_opened', '1')
    }, 6000)
    return () => clearTimeout(t)
  }, [])

  // Cycle highlight
  useEffect(() => {
    if (!open || step !== 'offers') return
    const t = setInterval(() => setHlIdx(i => i + 1), 2200)
    return () => clearInterval(t)
  }, [open, step])

  // Focus name on step 2
  useEffect(() => {
    if (step === 'form') setTimeout(() => nameRef.current?.focus(), 80)
  }, [step])

  function selectOffer(idx: number) {
    setSelected(idx)
    setName(''); setEmail('')
    setErrors({ name: false, email: false })
    setStep('form')
  }

  function handleSend() {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    const err = { name: !name.trim(), email: !emailOk }
    setErrors(err)
    if (err.name || err.email) return

    const offer = WA_OFFERS[selectedIdx!]
    const msg   = buildWaMessage(name.trim(), email.trim(), offer.topic)
    window.open(waUrl(COMPANY.whatsapp, msg), '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="fixed bottom-7 right-7 z-50 flex flex-col items-end gap-3">
      {/* Card */}
      {open && (
        <div className="w-[300px] rounded-2xl overflow-hidden shadow-2xl bg-white text-neutral-900
                        animate-in slide-in-from-bottom-4 fade-in duration-300">

          {/* Header */}
          <div className="bg-gradient-to-br from-[#075e54] to-[#128c7e] p-4 flex items-center gap-3 relative">
            <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-xl shrink-0
                            ring-2 ring-white/30">💬</div>
            <div className="flex-1">
              <p className="text-sm font-bold text-white">Click Decoded</p>
              <p className="text-xs text-white/70 flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Typically replies in minutes
              </p>
            </div>
            <button onClick={() => setOpen(false)}
              className="absolute top-2.5 right-3 w-6 h-6 rounded-full bg-white/15 hover:bg-white/30
                         flex items-center justify-center text-white transition-colors">
              <X size={13} />
            </button>
          </div>

          {/* Step 1 — Offers */}
          {step === 'offers' && (
            <div className="p-3.5 bg-[#ece5dd] flex flex-col gap-2">
              <div className="bg-white rounded-tr-2xl rounded-b-2xl p-3 text-sm leading-relaxed shadow-sm">
                👋 Hi! Ready to grow your business?<br />
                Pick what you need — we'll chat on <strong className="text-[#075e54]">WhatsApp</strong>.
              </div>
              {WA_OFFERS.map((o, i) => (
                <button key={i} onClick={() => selectOffer(i)}
                  className={`flex items-center gap-2.5 p-2.5 bg-white rounded-xl border-[1.5px] w-full
                              text-left transition-all duration-150
                              ${hlIdx % WA_OFFERS.length === i
                                ? 'border-[#25D366] shadow-[0_0_0_3px_rgba(37,211,102,.15)]'
                                : 'border-neutral-200 hover:border-[#25D366] hover:bg-green-50'}`}>
                  <span className="text-base shrink-0">{o.icon}</span>
                  <span className="flex-1">
                    <span className="text-xs font-bold text-[#075e54] block">{o.label}</span>
                    <span className="text-[10.5px] text-neutral-500">Tap to get started ›</span>
                  </span>
                  <span className="text-[#25D366] font-bold text-sm">›</span>
                </button>
              ))}
            </div>
          )}

          {/* Step 2 — Name + Email form */}
          {step === 'form' && (
            <div className="p-3.5 bg-[#ece5dd] flex flex-col gap-2.5">
              <button onClick={() => setStep('offers')}
                className="flex items-center gap-1.5 text-xs font-semibold text-[#075e54] hover:text-[#128c7e] transition-colors">
                <ArrowLeft size={13} /> Back
              </button>
              <div className="bg-[#075e54] text-white text-xs font-semibold px-3 py-2 rounded-xl flex items-center gap-2">
                {selectedIdx !== null && WA_OFFERS[selectedIdx].icon} {selectedIdx !== null && WA_OFFERS[selectedIdx].label}
              </div>
              <div>
                <label className="text-[11px] font-bold text-neutral-500 block mb-1">Your Name</label>
                <input ref={nameRef} value={name} onChange={e => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className={`w-full px-3 py-2 rounded-xl text-sm border-[1.5px] outline-none bg-white
                              transition-colors ${errors.name ? 'border-red-400' : 'border-neutral-200 focus:border-[#25D366]'}`} />
              </div>
              <div>
                <label className="text-[11px] font-bold text-neutral-500 block mb-1">Email ID</label>
                <input value={email} onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSend()}
                  placeholder="e.g. rahul@company.com" type="email"
                  className={`w-full px-3 py-2 rounded-xl text-sm border-[1.5px] outline-none bg-white
                              transition-colors ${errors.email ? 'border-red-400' : 'border-neutral-200 focus:border-[#25D366]'}`} />
              </div>
              <button onClick={handleSend}
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#25D366] hover:bg-[#1ebe59]
                           text-white text-sm font-bold rounded-xl transition-all hover:-translate-y-0.5
                           hover:shadow-[0_6px_20px_rgba(37,211,102,.35)]">
                <Send size={14} /> Open WhatsApp
              </button>
            </div>
          )}

          <div className="bg-[#ece5dd] px-3.5 pb-3 flex justify-center">
            <span className="text-[10px] text-neutral-400">
              Powered by <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank"
                className="text-[#25D366] font-semibold">WhatsApp</a>
            </span>
          </div>
        </div>
      )}

      {/* FAB */}
      <button onClick={() => { setOpen(o => !o); setStep('offers') }}
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center
                   shadow-[0_6px_24px_rgba(37,211,102,.45)] hover:scale-110
                   hover:shadow-[0_10px_32px_rgba(37,211,102,.55)] transition-all relative">
        {!open && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white
                           text-[10px] font-black flex items-center justify-center border-2 border-white">1</span>
        )}
        {/* Pulse rings */}
        <span className="absolute inset-[-4px] rounded-full border-2 border-[#25D366]/50 animate-ping" />
        <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </button>
    </div>
  )
}
