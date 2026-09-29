// src/lib/wordpress.ts

const WORDPRESS_URL =
  process.env.WORDPRESS_URL || 'https://akash.aharnish.com'

const WORDPRESS_GRAPHQL_URL = `${WORDPRESS_URL.replace(/\/$/, '')}/graphql`

export interface WordPressPost {
  id: string
  databaseId: number
  slug: string
  uri: string
  title: string
  excerpt: string
  content: string
  date: string
  modified: string

  author: {
    name: string
    slug: string
  } | null

  categories: {
    nodes: {
      id: string
      name: string
      slug: string
    }[]
  }

  tags: {
    nodes: {
      id: string
      name: string
      slug: string
    }[]
  }

  featuredImage: {
    node: {
      sourceUrl: string
      altText: string
      mediaDetails?: {
        width: number
        height: number
      }
    }
  } | null
}

interface PostsQueryResponse {
  data?: {
    posts: {
      nodes: WordPressPost[]
      pageInfo: {
        hasNextPage: boolean
        hasPreviousPage: boolean
        startCursor: string | null
        endCursor: string | null
      }
    }
  }
  errors?: {
    message: string
  }[]
}

interface PostQueryResponse {
  data?: {
    post: WordPressPost | null
  }
  errors?: {
    message: string
  }[]
}

const POST_FIELDS = `
  id
  databaseId
  slug
  uri
  title
  excerpt
  content
  date
  modified

  author {
    node {
      name
      slug
    }
  }

  categories {
    nodes {
      id
      name
      slug
    }
  }

  tags {
    nodes {
      id
      name
      slug
    }
  }

  featuredImage {
    node {
      sourceUrl
      altText
      mediaDetails {
        width
        height
      }
    }
  }
`

async function wordpressGraphQL<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
const response = await fetch(WORDPRESS_GRAPHQL_URL, {
  method: 'POST',
  cache: 'no-store',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'User-Agent': 'Click-Decoded-Next/1.0',
  },
  body: JSON.stringify({
    query,
    variables,
  }),
})

  if (!response.ok) {
    throw new Error(
      `WordPress GraphQL request failed: ${response.status} ${response.statusText}`
    )
  }

  const result = await response.json()

  if (result.errors?.length) {
    const message = result.errors
      .map((error: { message: string }) => error.message)
      .join(', ')

    throw new Error(`WordPress GraphQL error: ${message}`)
  }

  return result
}

export async function getWordPressPosts(
  first = 10
): Promise<WordPressPost[]> {
  const query = `
    query GetPosts($first: Int!) {
      posts(
        first: $first
        where: {
          status: PUBLISH
          orderby: {
            field: DATE
            order: DESC
          }
        }
      ) {
        nodes {
          ${POST_FIELDS}
        }

        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
      }
    }
  `

  const result = await wordpressGraphQL<PostsQueryResponse>(query, {
    first,
  })

  return result.data?.posts.nodes ?? []
}

export async function getWordPressPostBySlug(
  slug: string
): Promise<WordPressPost | null> {
  const query = `
    query GetPostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        ${POST_FIELDS}
      }
    }
  `

  const result = await wordpressGraphQL<PostQueryResponse>(query, {
    slug,
  })

  return result.data?.post ?? null
}

export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#039;/gi, "'")
    .replace(/\s+/g, ' ')
    .trim()
}

export function getReadingTime(content: string): string {
  const plainText = stripHtml(content)
  const words = plainText.split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.ceil(words / 200))

  return `${minutes} min read`
}