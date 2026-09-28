// src/components/chrome/PageScript.tsx
// Executes a page's legacy inline <script> (ported 1:1 from the HTML build)
// as a real classic script after mount, and removes it on route change.
'use client'

import { useEffect } from 'react'

export default function PageScript({ id, code }: { id: string; code: string }) {
  useEffect(() => {
    const s = document.createElement('script')
    s.setAttribute('data-cd-page-script', id)
    s.textContent = code
    document.body.appendChild(s)
    return () => {
      s.remove()
    }
  }, [id, code])
  return null
}
