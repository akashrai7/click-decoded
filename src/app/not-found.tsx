// src/app/not-found.tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-4">
      <div>
        <p className="text-8xl font-black gradient-text mb-4">404</p>
        <h1 className="text-3xl font-black mb-3">Page Not Found</h1>
        <p className="text-neutral-400 mb-8">This page doesn&apos;t exist or has moved.</p>
        <Link href="/" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-colors">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
