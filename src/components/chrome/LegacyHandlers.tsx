// src/components/chrome/LegacyHandlers.tsx
// Delegates legacy inline handlers (onclick="..." etc. from the HTML build,
// converted to data-cd-* attributes) to their original expressions.
'use client'

import { useEffect } from 'react'

// bubbling events → normal delegation; non-bubbling → capture phase
const BUBBLING = ['click', 'submit', 'change', 'input', 'mouseover', 'mouseout', 'keydown', 'keyup', 'mousedown', 'mouseup'] as const
const CAPTURED = ['mouseenter', 'mouseleave', 'focus', 'blur'] as const

function makeHandler(ev: string) {
  return (e: Event) => {
    const target = e.target as Element | null
    if (!target || typeof target.closest !== 'function') return
    const el = target.closest(`[data-cd-${ev}]`)
    if (!el) return
    const code = el.getAttribute(`data-cd-${ev}`)
    if (!code) return
    try {
      // eslint-disable-next-line no-new-func
      new Function('event', code).call(el, e)
    } catch (err) {
      console.error('[cd-legacy-handler]', err)
    }
  }
}

export default function LegacyHandlers() {
  useEffect(() => {
    const bound: Array<{ ev: string; fn: (e: Event) => void; opts?: boolean }> = []
    BUBBLING.forEach((ev) => {
      const fn = makeHandler(ev)
      document.addEventListener(ev, fn)
      bound.push({ ev, fn })
    })
    CAPTURED.forEach((ev) => {
      const fn = makeHandler(ev)
      document.addEventListener(ev, fn, true)
      bound.push({ ev, fn, opts: true })
    })
    return () => bound.forEach(({ ev, fn, opts }) => document.removeEventListener(ev, fn, opts))
  }, [])
  return null
}
