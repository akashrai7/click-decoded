import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "./blog.module.css";
import { getWordPressPosts } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Blog — Digital Marketing Insights | Click Decoded",
  description:
    "Expert insights on SEO, Google Ads, web development, AI automation, and digital marketing. Actionable guides for Indian businesses by the Click Decoded team.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog — Click Decoded | Digital Marketing Insights",
    description:
      "SEO tips, Google Ads strategies, AI automation guides, and web development insights for Indian businesses.",
    url: "/blog",
    type: "website",
  },
};

type WPPost = {
  id?: string;
  databaseId?: number;
  slug?: string;
  title?: string;
  excerpt?: string | null;
  date?: string | null;
  modified?: string | null;
  uri?: string | null;
  link?: string | null;
  content?: string | null;
  author?: {
    node?: {
      name?: string | null;
      firstName?: string | null;
      lastName?: string | null;
    } | null;
  } | null;
  featuredImage?: {
    node?: {
      sourceUrl?: string | null;
      altText?: string | null;
    } | null;
  } | null;
  categories?: {
    nodes?: Array<{
      id?: string;
      name?: string | null;
      slug?: string | null;
    }>;
  } | null;
};

const CATEGORY_META = [
  { key: "all", label: "All Posts", icon: "▣" },
  { key: "seo", label: "SEO", icon: "🔍" },
  { key: "google-ads", label: "Google Ads", icon: "🎯" },
  { key: "ai", label: "AI & Automation", icon: "🤖" },
  { key: "web", label: "Web Development", icon: "💻" },
  { key: "social", label: "Social Media", icon: "📱" },
  { key: "geo", label: "GEO / AI Search", icon: "🚀" },
];

function cleanText(value?: string | null) {
  if (!value) return "";

  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#039;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function makeExcerpt(post: WPPost) {
  const excerpt = cleanText(post.excerpt);

  if (excerpt) {
    return excerpt.length > 190
      ? `${excerpt.slice(0, 187).trim()}...`
      : excerpt;
  }

  const content = cleanText(post.content);

  if (!content) {
    return "Read the complete article on Click Decoded.";
  }

  return content.length > 190
    ? `${content.slice(0, 187).trim()}...`
    : content;
}

function getPostUrl(post: WPPost) {
  if (post.uri) return post.uri;

  if (post.slug) {
    return `/blog/${post.slug}`;
  }

  return "/blog";
}

function getCategory(post: WPPost) {
  const category = post.categories?.nodes?.[0];

  return {
    name: category?.name || "Digital Marketing",
    slug: category?.slug || "content",
  };
}

function getCategoryKey(slug: string) {
  const value = slug.toLowerCase();

  if (
    value.includes("seo") ||
    value.includes("search-engine-optimization")
  ) {
    return "seo";
  }

  if (
    value.includes("google-ads") ||
    value.includes("googleads") ||
    value.includes("ads")
  ) {
    return "google-ads";
  }

  if (
    value.includes("ai") ||
    value.includes("automation") ||
    value.includes("artificial-intelligence")
  ) {
    return "ai";
  }

  if (
    value.includes("web") ||
    value.includes("wordpress") ||
    value.includes("development") ||
    value.includes("woocommerce")
  ) {
    return "web";
  }

  if (
    value.includes("social") ||
    value.includes("instagram") ||
    value.includes("facebook")
  ) {
    return "social";
  }

  if (
    value.includes("geo") ||
    value.includes("generative") ||
    value.includes("ai-search")
  ) {
    return "geo";
  }

  return "content";
}

function getCategoryIcon(categorySlug: string) {
  const key = getCategoryKey(categorySlug);

  switch (key) {
    case "seo":
      return "🔍";
    case "google-ads":
      return "🎯";
    case "ai":
      return "🤖";
    case "web":
      return "💻";
    case "social":
      return "📱";
    case "geo":
      return "🚀";
    default:
      return "📝";
  }
}

function getCoverClass(categorySlug: string) {
  const key = getCategoryKey(categorySlug);

  switch (key) {
    case "seo":
      return styles.coverSeo;
    case "google-ads":
      return styles.coverAds;
    case "ai":
      return styles.coverAi;
    case "web":
      return styles.coverWeb;
    case "social":
      return styles.coverSocial;
    case "geo":
      return styles.coverGeo;
    default:
      return styles.coverContent;
  }
}

function getCategoryClass(categorySlug: string) {
  const key = getCategoryKey(categorySlug);

  switch (key) {
    case "seo":
      return styles.catSeo;
    case "google-ads":
      return styles.catAds;
    case "ai":
      return styles.catAi;
    case "web":
      return styles.catWeb;
    case "social":
      return styles.catSocial;
    case "geo":
      return styles.catGeo;
    default:
      return styles.catContent;
  }
}

function formatDate(date?: string | null) {
  if (!date) return "";

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) return "";

  return parsed.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function getAuthor(post: WPPost) {
  const node = post.author?.node;

  if (!node) return "Click Decoded";

  if (node.name) return node.name;

  return (
    [node.firstName, node.lastName].filter(Boolean).join(" ") ||
    "Click Decoded"
  );
}

function getInitials(name: string) {
  const parts = name
    .split(" ")
    .map((item) => item.trim())
    .filter(Boolean);

  if (!parts.length) return "CD";

  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }

  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

function getReadTime(post: WPPost) {
  const text = cleanText(post.content || post.excerpt);

  if (!text) return "3 min read";

  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));

  return `${minutes} min read`;
}

function getPostsArray(result: unknown): WPPost[] {
  if (Array.isArray(result)) {
    return result as WPPost[];
  }

  if (!result || typeof result !== "object") {
    return [];
  }

  const value = result as Record<string, unknown>;

  if (Array.isArray(value.posts)) {
    return value.posts as WPPost[];
  }

  if (
    value.posts &&
    typeof value.posts === "object" &&
    Array.isArray((value.posts as Record<string, unknown>).nodes)
  ) {
    return (value.posts as { nodes: WPPost[] }).nodes;
  }

  if (Array.isArray(value.nodes)) {
    return value.nodes as WPPost[];
  }

  if (
    value.data &&
    typeof value.data === "object" &&
    Array.isArray((value.data as Record<string, unknown>).posts)
  ) {
    return (value.data as { posts: WPPost[] }).posts;
  }

  return [];
}

export default async function BlogPage() {
  let posts: WPPost[] = [];

  try {
    const result = await getWordPressPosts();
    posts = getPostsArray(result);
  } catch {
    posts = [];
  }

  const publishedPosts = posts.filter((post) => post?.title?.trim());

  const featuredPost = publishedPosts[0] || null;
  const latestPosts = publishedPosts.slice(1);

  const categoryCounts = new Map<string, number>();

  for (const post of publishedPosts) {
    const category = getCategory(post);
    const key = getCategoryKey(category.slug);

    categoryCounts.set(key, (categoryCounts.get(key) || 0) + 1);
  }

  const categories = CATEGORY_META.map((category) => ({
    ...category,
    count:
      category.key === "all"
        ? publishedPosts.length
        : categoryCounts.get(category.key) || 0,
  }));

  return (
    <main className={styles.blogPage}>
      {/* Blog hero */}
      <section className={styles.blogHero}>
        <div className={styles.wrap}>
          <div className={styles.blogHeroInner}>
            <div className={styles.eyebrow}>
              <span>▣</span>
              CLICK DECODED BLOG
            </div>

            <h1>
              Digital Marketing
              <br />
              <em>Insights</em> That Work.
            </h1>

            <p className={styles.blogHeroSub}>
              No fluff. No guru talk. Just actionable guides on SEO, Google
              Ads, AI automation, and web development — written by
              practitioners for Indian businesses.
            </p>

            <div className={styles.blogSearch}>
              <input
                type="search"
                placeholder="Search articles... e.g. 'local SEO tips'"
                aria-label="Search articles"
              />

              <button type="button" aria-label="Search">
                🔍
              </button>
            </div>

            <div className={styles.blogHeroStats}>
              <div>
                📝 <strong>{publishedPosts.length}</strong>{" "}
                {publishedPosts.length === 1 ? "Article" : "Articles"} Published
              </div>

              <div>
                👥 <strong>12,000+</strong> Monthly Readers
              </div>

              <div>
                🏷️ <strong>{Math.max(categoryCounts.size, 1)}</strong> Topic
                Categories
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category bar */}
      <section className={styles.categoryBar} aria-label="Blog categories">
        <div className={styles.wrap}>
          <div className={styles.categoryInner}>
            {categories.map((category) => (
              <Link
                key={category.key}
                href={
                  category.key === "all"
                    ? "/blog"
                    : `/blog?category=${category.key}`
                }
                className={`${styles.categoryButton} ${
                  category.key === "all" ? styles.categoryActive : ""
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.label}</span>
                <span className={styles.categoryCount}>{category.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main blog content */}
      <div className={styles.wrap}>
        {featuredPost && (
          <section className={styles.featuredSection}>
            <div className={styles.sectionLabel}>
              <span>⭐</span>
              FEATURED ARTICLE
            </div>

            <Link
              href={getPostUrl(featuredPost)}
              className={styles.featuredCard}
            >
              <div
                className={`${styles.featuredCover} ${getCoverClass(
                  getCategory(featuredPost).slug,
                )}`}
              >
                {featuredPost.featuredImage?.node?.sourceUrl ? (
                  <Image
                    src={featuredPost.featuredImage.node.sourceUrl}
                    alt={
                      featuredPost.featuredImage.node.altText ||
                      featuredPost.title ||
                      "Featured article"
                    }
                    fill
                    className={styles.featuredImage}
                    sizes="(max-width: 900px) 100vw, 65vw"
                  />
                ) : (
                  <div className={styles.coverArt}>🔍</div>
                )}

                <div className={styles.featuredOverlay} />

                <div className={styles.featuredCoverContent}>
                  <span
                    className={`${styles.featuredCategory} ${getCategoryClass(
                      getCategory(featuredPost).slug,
                    )}`}
                  >
                    {getCategoryIcon(getCategory(featuredPost).slug)}{" "}
                    {getCategory(featuredPost).name}
                  </span>

                  <h2>{cleanText(featuredPost.title)}</h2>
                </div>
              </div>

              <div className={styles.featuredBody}>
                <div className={styles.postMeta}>
                  <div className={styles.postAuthor}>
                    <span className={styles.authorAvatar}>
                      {getInitials(getAuthor(featuredPost))}
                    </span>

                    <span>
                      <strong>{getAuthor(featuredPost)}</strong>
                      <small>{formatDate(featuredPost.date)}</small>
                    </span>
                  </div>

                  <span className={styles.readTime}>
                    ◷ {getReadTime(featuredPost)}
                  </span>
                </div>

                <h2 className={styles.featuredTitle}>
                  {cleanText(featuredPost.title)}
                </h2>

                <p className={styles.featuredExcerpt}>
                  {makeExcerpt(featuredPost)}
                </p>

                <div className={styles.postTags}>
                  {featuredPost.categories?.nodes
                    ?.slice(0, 3)
                    .map((category) => (
                      <span key={category.id || category.slug}>
                        {category.name}
                      </span>
                    ))}
                </div>

                <span className={styles.readButton}>
                  Read Full Article
                  <span>→</span>
                </span>
              </div>
            </Link>
          </section>
        )}

        {/* Latest posts */}
        <section className={styles.blogLayout}>
          <div>
            <div className={styles.sectionLabel}>
              <span>▣</span>
              LATEST ARTICLES
            </div>

            {latestPosts.length > 0 ? (
              <div className={styles.postsGrid}>
                {latestPosts.map((post) => {
                  const category = getCategory(post);
                  const author = getAuthor(post);

                  return (
                    <article
                      key={post.id || post.databaseId || post.slug}
                      className={styles.postCard}
                    >
                      <Link
                        href={getPostUrl(post)}
                        className={`${styles.postCover} ${getCoverClass(
                          category.slug,
                        )}`}
                      >
                        {post.featuredImage?.node?.sourceUrl ? (
                          <Image
                            src={post.featuredImage.node.sourceUrl}
                            alt={
                              post.featuredImage.node.altText ||
                              post.title ||
                              "Blog article"
                            }
                            fill
                            className={styles.postImage}
                            sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                          />
                        ) : (
                          <div className={styles.coverArt}>
                            {getCategoryIcon(category.slug)}
                          </div>
                        )}

                        <div className={styles.postCoverOverlay} />

                        <span
                          className={`${styles.postCategory} ${getCategoryClass(
                            category.slug,
                          )}`}
                        >
                          {getCategoryIcon(category.slug)} {category.name}
                        </span>
                      </Link>

                      <div className={styles.postBody}>
                        <Link
                          href={getPostUrl(post)}
                          className={styles.postTitle}
                        >
                          {cleanText(post.title)}
                        </Link>

                        <p className={styles.postExcerpt}>
                          {makeExcerpt(post)}
                        </p>

                        <div className={styles.postFooter}>
                          <div className={styles.postAuthor}>
                            <span className={styles.smallAvatar}>
                              {getInitials(author)}
                            </span>

                            <span>
                              <strong>{author}</strong>
                              <small>{formatDate(post.date)}</small>
                            </span>
                          </div>

                          <span className={styles.postRead}>
                            {getReadTime(post)}
                          </span>
                        </div>

                        <Link
                          href={getPostUrl(post)}
                          className={styles.postCardLink}
                        >
                          Read Article <span>→</span>
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : !featuredPost ? (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>📝</div>
                <h2>No WordPress posts found.</h2>
                <p>
                  WordPress returned no published posts at the moment. Once a
                  post is published, it will appear here automatically.
                </p>
              </div>
            ) : null}
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={`${styles.sidebarBox} ${styles.newsletterBox}`}>
              <div className={styles.sidebarEyebrow}>📬 WEEKLY DIGEST</div>

              <h3>Get the best insights, every week.</h3>

              <p>
                One email. No spam. Unsubscribe anytime. Joined by 3,200+
                Indian marketers.
              </p>

              <div className={styles.newsletterForm}>
                <input type="email" placeholder="your@email.com" />
                <button type="button">Subscribe Free →</button>
              </div>

              <small>🔒 No spam, ever. Unsubscribe in one click.</small>
            </div>

            <div className={styles.sidebarBox}>
              <div className={styles.sidebarEyebrow}>
                🏷️ BROWSE BY TOPIC
              </div>

              <div className={styles.topicList}>
                {categories
                  .filter((category) => category.key !== "all")
                  .map((category) => (
                    <Link
                      key={category.key}
                      href={`/blog?category=${category.key}`}
                      className={styles.topicItem}
                    >
                      <span>
                        {category.icon} {category.label}
                      </span>

                      <small>{category.count} articles</small>
                    </Link>
                  ))}
              </div>
            </div>

            <div className={styles.sidebarBox}>
              <div className={styles.sidebarEyebrow}>🔥 MOST READ</div>

              <div className={styles.popularList}>
                {publishedPosts.slice(0, 5).map((post, index) => (
                  <Link
                    key={post.id || post.databaseId || post.slug}
                    href={getPostUrl(post)}
                    className={styles.popularItem}
                  >
                    <span className={styles.popularNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>
                      <strong>{cleanText(post.title)}</strong>

                      <small>
                        {getCategoryIcon(getCategory(post).slug)}{" "}
                        {getCategory(post).name} · {getReadTime(post)}
                      </small>
                    </span>
                  </Link>
                ))}

                {!publishedPosts.length && (
                  <p className={styles.sidebarEmpty}>
                    Published posts will appear here.
                  </p>
                )}
              </div>
            </div>

            <div className={`${styles.sidebarBox} ${styles.auditBox}`}>
              <div className={styles.sidebarEyebrow}>🚀 FREE AUDIT</div>

              <h3>Is your website leaving money on the table?</h3>

              <p>
                Get a free SEO + performance audit. No obligation. We reply
                within 1 hour.
              </p>

              <Link href="/contact" className={styles.auditButton}>
                Get Free Audit →
              </Link>
            </div>
          </aside>
        </section>
      </div>

      {/* CTA */}
      <section className={styles.blogCta}>
        <div className={styles.wrap}>
          <h2>Ready to Put These Insights to Work?</h2>

          <p>
            Talk to Click Decoded about SEO, Google Ads, web development or AI
            automation for your business.
          </p>

          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.ctaPrimary}>
              🚀 Get Free Strategy Call
            </Link>

            <Link href="/services" className={styles.ctaSecondary}>
              Explore Services →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}