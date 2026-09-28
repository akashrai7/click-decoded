// src/lib/blog.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import type { BlogPost, BlogPostWithContent } from '@/types'

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog')

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'))

  return files
    .map(file => {
      const raw  = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8')
      const { data, content } = matter(raw)
      return {
        slug:        file.replace('.mdx', ''),
        title:       data.title,
        description: data.description,
        date:        data.date,
        author:      data.author ?? 'Click Decoded',
        category:    data.category ?? 'SEO',
        tags:        data.tags ?? [],
        readTime:    readingTime(content).text,
        ogImage:     data.ogImage,
        published:   data.published ?? true,
      } as BlogPost
    })
    .filter(p => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPostWithContent | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  return {
    slug,
    title:       data.title,
    description: data.description,
    date:        data.date,
    author:      data.author ?? 'Click Decoded',
    category:    data.category ?? 'SEO',
    tags:        data.tags ?? [],
    readTime:    readingTime(content).text,
    ogImage:     data.ogImage,
    published:   data.published ?? true,
    content,
  }
}
