import { getWordPressPosts } from '@/lib/wordpress'

export default async function WordPressTestPage() {
  const posts = await getWordPressPosts(10)

  return (
    <main style={{ padding: '40px' }}>
      <h1>WordPress Posts</h1>

      <p>
        Total posts: <strong>{posts.length}</strong>
      </p>

      {posts.map((post) => (
        <article
          key={post.id}
          style={{
            border: '1px solid #ddd',
            padding: '20px',
            marginTop: '20px',
            borderRadius: '10px',
          }}
        >
          <h2>{post.title}</h2>

          <p>{post.excerpt}</p>

          <small>
            {post.date} · {post.slug}
          </small>
        </article>
      ))}
    </main>
  )
}