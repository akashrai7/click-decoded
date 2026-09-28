// src/components/sections/IndustriesSection.tsx
'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FadeUp, StaggerChildren, StaggerItem } from './MotionDiv'
import { NAV } from '@/lib/constants'

const INDUSTRY_ICONS: Record<string, string> = {
  '/industry-real-estate':   '🏢', '/industry-healthcare':    '🏥',
  '/industry-education':     '🎓', '/industry-ecommerce':     '🛒',
  '/industry-manufacturing': '🏭', '/industry-it-saas':       '💡',
  '/industry-legal':         '⚖️', '/industry-hospitality':   '🏨',
}

export function IndustriesSection() {
  return (
    <section className="section-pad bg-neutral-900/50">
      <div className="container-custom">
        <FadeUp className="text-center mb-14">
          <p className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-3">Industries</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            We Speak Your<br /><em className="not-italic bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Industry&apos;s Language.</em>
          </h2>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto">
            Deep domain expertise across 8+ industries — we don&apos;t need onboarding, we already know your market.
          </p>
        </FadeUp>

        <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {NAV.industries.map(ind => (
            <StaggerItem key={ind.href}>
              <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link href={ind.href}
                  className="group card-dark p-5 flex items-center gap-3 hover:border-cyan-500/40
                             hover:shadow-[0_0_20px_rgba(6,182,212,.1)] transition-all duration-300">
                  <span className="text-2xl shrink-0">{INDUSTRY_ICONS[ind.href] ?? '🏢'}</span>
                  <span className="text-sm font-semibold text-neutral-300 group-hover:text-white transition-colors leading-snug">
                    {ind.label}
                  </span>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
