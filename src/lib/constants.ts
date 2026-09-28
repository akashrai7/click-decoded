// ─────────────────────────────────────────────────────────────
// constants.ts — ALL site-wide constants live here.
// Never hardcode strings in components; import from here.
// ─────────────────────────────────────────────────────────────

// ── Company ──────────────────────────────────────────────────
export const COMPANY = {
  name:        'Click Decoded',
  legalName:   'Aharnish Infotech Pvt. Ltd.',
  tagline:     'India\'s #1 B2B Digital Growth Agency',
  founded:     2014,
  email:       'hello@clickdecoded.com',
  phone:       '+91 94070 00101',
  phoneRaw:    '+919407000101',
  whatsapp:    process.env.NEXT_PUBLIC_WA_NUMBER ?? '919407000101',
  address:     'Bhopal, Madhya Pradesh, India',
  siteUrl:     process.env.NEXT_PUBLIC_SITE_URL ?? 'https://clickdecoded.com',
} as const

// ── Social Links ─────────────────────────────────────────────
export const SOCIAL = {
  linkedin:  'https://linkedin.com/company/clickdecoded',
  instagram: 'https://instagram.com/clickdecoded',
  twitter:   'https://twitter.com/clickdecoded',
  youtube:   'https://youtube.com/@clickdecoded',
} as const

// ── Pricing (minimum floors) ──────────────────────────────────
export const PRICING = {
  retainerMin:    25000,   // ₹/month
  webDevMin:      25000,   // ₹ one-time
  currency:       'INR',
  currencySymbol: '₹',
} as const

// ── Stats ─────────────────────────────────────────────────────
export const STATS = [
  { value: '500+',  label: 'Projects Delivered' },
  { value: '12+',   label: 'Years Experience'   },
  { value: '98%',   label: 'Client Retention'   },
  { value: '₹50Cr', label: 'Ad Spend Managed'   },
] as const

// ── Service Areas ─────────────────────────────────────────────
export const SERVICE_AREAS = [
  'Bhopal', 'Indore', 'Dewas', 'Gwalior',
  'Raipur', 'Nagpur', 'Pune', 'Delhi NCR',
  'Mumbai', 'Bangalore',
] as const

// ── WhatsApp Offer Popups ─────────────────────────────────────
export const WA_OFFERS = [
  { label: 'Free Strategy Call',            icon: '📞', topic: 'a free strategy call'                     },
  { label: 'Free SEO Audit',                icon: '🔍', topic: 'a free SEO audit for my website'          },
  { label: 'Website Design Consultation',   icon: '💻', topic: 'website design & development'             },
  { label: 'Ad Budget Strategy Session',    icon: '📈', topic: 'my ad budget strategy'                    },
] as const

// ── Navigation ────────────────────────────────────────────────
export const NAV = {
  seo: [
    { label: 'SEO Services',       href: '/services/seo'       },
    { label: 'Local SEO',          href: '/services/local-seo'          },
    { label: 'Technical SEO Audit',href: '/services/technical-seo-audit'},
    { label: 'E-Commerce SEO',     href: '/services/ecommerce-seo'      },
    { label: 'Link Building',      href: '/services/link-building'      },
    { label: 'Programmatic SEO',   href: '/services/programmatic-seo'   },
    { label: 'Google My Business', href: '/services/gmb-marketing'      },
  ],
  paidAds: [
    { label: 'Google Ads',    href: '/services/google-ads'    },
    { label: 'Meta Ads',      href: '/services/meta-ads'      },
    { label: 'YouTube Ads',   href: '/services/youtube-ads'   },
    { label: 'LinkedIn Ads',  href: '/services/linkedin-ads'  },
    { label: 'Shopping Ads',  href: '/services/shopping-ads'  },
    { label: 'Retargeting',   href: '/services/retargeting'   },
  ],
  ai: [
    { label: 'AI Automation',      href: '/services/ai-automation'          },
    { label: 'WhatsApp Automation',href: '/services/whatsapp-automation'    },
    { label: 'n8n Workflows',      href: '/services/workflow-automation'    },
    { label: 'AI Chatbot Dev',     href: '/services/ai-chatbot-development' },
    { label: 'AI Ad Creatives',    href: '/services/ai-ad-creatives'        },
    { label: 'AI Content Gen',     href: '/services/ai-content'             },
  ],
  content: [
    { label: 'Virtual Tour',       href: '/services/virtual-tour'         },
    { label: 'HD Photography',     href: '/services/hd-photography'       },
    { label: 'Product Photography',href: '/services/product-photography'  },
    { label: 'Drone Video',        href: '/services/drone-video'          },
    { label: 'Email Marketing',    href: '/services/email-marketing'      },
    { label: 'WhatsApp Marketing', href: '/services/whatsapp-marketing'   },
    { label: 'Blogging & Content', href: '/services/blogging'             },
  ],
  web: [
    { label: 'Web Development',   href: '/services/web-development'      },
    { label: 'WordPress Dev',     href: '/services/wordpress-development' },
    { label: 'E-Commerce Dev',    href: '/services/ecommerce-development' },
    { label: 'Landing Pages',     href: '/services/landing-pages'        },
    { label: 'UI/UX Design',      href: '/services/ui-ux'                },
  ],
  geo: [
    { label: 'GEO Services',      href: '/services/generative-engine-optimization' },
    { label: 'Answer Engine Opt', href: '/services/answer-engine-optimization'     },
    { label: 'LLM Optimization',  href: '/services/ai-search-optimization'         },
    { label: 'AI Brand Visibility',href: '/services/ai-brand-visibility'           },
  ],
  industries: [
    { label: 'Real Estate & Builders',      href: '/industries/real-estate'   },
    { label: 'Healthcare & Clinics',        href: '/industries/healthcare'    },
    { label: 'Education & EdTech',          href: '/industries/education'     },
    { label: 'E-Commerce & Retail',         href: '/industries/ecommerce'     },
    { label: 'Manufacturing & Industrial',  href: '/industries/manufacturing' },
    { label: 'IT Services & SaaS',          href: '/industries/it-saas'       },
    { label: 'Legal & CA Firms',            href: '/industries/legal'         },
    { label: 'Hospitality & Travel',        href: '/industries/hospitality'   },
  ],
  company: [
    { label: 'About Us',          href: '/about'       },
    { label: 'The Honest Page',   href: '/honest'      },
    { label: 'How We Work',       href: '/how-we-work' },
    { label: 'Blog & Insights',   href: '/blog'        },
    { label: 'Pricing',           href: '/pricing'     },
    { label: 'Careers',           href: '/careers'     },
    { label: 'Contact Us',        href: '/contact'     },
  ],
} as const

// ── SEO Defaults ──────────────────────────────────────────────
export const SEO_DEFAULTS = {
  titleTemplate: '%s | Click Decoded',
  defaultTitle:  'Click Decoded — B2B Digital Marketing Agency India',
  description:   'India\'s trusted B2B growth partner. SEO, Google Ads, Web Development, AI Automation. 12 years. 500+ projects. Bhopal-based, pan-India.',
  ogImage:       '/images/og-default.jpg',
  twitterHandle: '@clickdecoded',
} as const
