// src/app/blog/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { COMPANY } from '@/lib/constants'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title:       post.title,
    description: post.description,
    openGraph: {
      type:        'article',
      publishedTime: post.date,
      authors:     [post.author],
      images:      post.ogImage ? [post.ogImage] : [],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <article className="section-pad">
      <div className="container-custom max-w-3xl">
        {/* Meta */}
        <div className="mb-8 text-center">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">{post.category}</span>
          <h1 className="text-3xl md:text-5xl font-black mt-3 mb-4 leading-tight">{post.title}</h1>
          <p className="text-neutral-400 text-lg mb-4">{post.description}</p>
          <div className="flex items-center justify-center gap-4 text-sm text-neutral-500">
            <span>By {post.author}</span>
            <span>·</span>
            <span>{new Date(post.date).toLocaleDateString('en-IN', { day:'numeric', month:'long', year:'numeric' })}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* MDX content */}
        <div className="prose prose-invert prose-neutral max-w-none
                        prose-headings:font-black prose-a:text-blue-400
                        prose-code:text-blue-300 prose-code:bg-neutral-800
                        prose-code:rounded prose-code:px-1">
          <MDXRemote source={post.content} />
        </div>

        {/* CTA */}
        <div className="mt-16 card-dark p-8 text-center">
          <h3 className="text-2xl font-black mb-2">Ready to grow your business?</h3>
          <p className="text-neutral-400 mb-6">Talk to Click Decoded — India&apos;s B2B growth partner since 2014.</p>
          <a href="/contact"
            className="inline-flex px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-colors">
            🚀 Get Free Strategy Call
          </a>
        </div>
      </div>
    </article>
  )
}
