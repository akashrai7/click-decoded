// ─────────────────────────────────────────────
// Global TypeScript types for Click Decoded
// ─────────────────────────────────────────────

export interface BlogPost {
  slug:        string
  title:       string
  description: string
  date:        string
  author:      string
  category:    string
  tags:        string[]
  readTime:    string
  ogImage?:    string
  published:   boolean
}

export interface BlogPostWithContent extends BlogPost {
  content: string
}

export interface ContactFormData {
  name:    string
  email:   string
  phone?:  string
  company?: string
  service: string
  message: string
}

export interface NavItem {
  label: string
  href:  string
  desc?: string
}

export interface Stat {
  value: string
  label: string
}

export interface Service {
  icon:  string
  title: string
  desc:  string
  href:  string
}

export interface Testimonial {
  name:    string
  company: string
  role:    string
  quote:   string
  rating:  number
}
