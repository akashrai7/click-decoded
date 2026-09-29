import { NextResponse } from 'next/server'
import { getWordPressPosts } from '@/lib/wordpress'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const posts = await getWordPressPosts(5)

    return NextResponse.json({
      success: true,
      wordpress: process.env.WORDPRESS_URL,
      count: posts.length,
      posts: posts.map((post) => ({
        id: post.id,
        databaseId: post.databaseId,
        slug: post.slug,
        uri: post.uri,
        title: post.title,
        excerpt: post.excerpt,
        date: post.date,
        modified: post.modified,
        author: post.author?.name ?? null,
        categories: post.categories.nodes.map((category) => ({
          name: category.name,
          slug: category.slug,
        })),
        tags: post.tags.nodes.map((tag) => ({
          name: tag.name,
          slug: tag.slug,
        })),
        featuredImage: post.featuredImage?.node
          ? {
              sourceUrl: post.featuredImage.node.sourceUrl,
              altText: post.featuredImage.node.altText,
            }
          : null,
      })),
    })
  } catch (error) {
    console.error('WordPress posts test failed:', error)

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : 'Unknown WordPress connection error',
      },
      { status: 500 }
    )
  }
}