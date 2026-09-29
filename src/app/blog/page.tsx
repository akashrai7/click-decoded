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


const chromeCss = `
:root{--n:#2A4573;--n2:#1e3460;--n-dark:#0f1e38;--b:#2A4573;--o:#EE7E1A;--o2:#d46e12;--w:#fff;--body:#1E293B;--m:#475569;--s:#64748b;--bg:#F4F7FC;--bdr:#E2E8F0;--gr:#25D366;--gr2:#1ebe59;}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}html{scroll-behavior:smooth;overflow-x:hidden;}body{font-family:'Inter',system-ui,sans-serif;color:var(--body);background:#fff;-webkit-font-smoothing:antialiased;}a{text-decoration:none;color:inherit;}img,svg{display:block;}ul{list-style:none;}button{font-family:inherit;cursor:pointer;}
.wrap{max-width:1200px;margin:0 auto;padding:0 28px;}h1,h2,h3,h4{font-weight:800;line-height:1.1;letter-spacing:-.025em;color:var(--n);}
.btn{display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:10px;font-weight:700;font-size:14px;border:none;transition:all .18s;white-space:nowrap;cursor:pointer;}
.btn-o{background:var(--o);color:#fff;box-shadow:0 4px 18px rgba(238,126,26,.3);}.btn-o:hover{background:var(--o2);transform:translateY(-2px);}
.btn-wa{background:var(--gr);color:#fff;box-shadow:0 4px 18px rgba(37,211,102,.25);}.btn-wa:hover{background:var(--gr2);transform:translateY(-2px);}
.btn-ghost{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.35);}.btn-ghost:hover{background:rgba(255,255,255,.08);}
.topbar{background:var(--n-dark);padding:0;height:40px;display:flex;align-items:center;}
.topbar-inner{max-width:1200px;margin:0 auto;padding:0 28px;display:flex;justify-content:space-between;align-items:center;width:100%;}
.topbar-left{display:flex;gap:20px;}.topbar-left a{font-size:12px;color:rgba(255,255,255,.6);display:flex;align-items:center;gap:5px;}
.topbar-right{display:flex;gap:8px;}.tb-btn{display:inline-flex;align-items:center;gap:6px;padding:5px 12px;border-radius:6px;font-size:11.5px;font-weight:700;transition:.15s;}
.tb-call{background:rgba(238,126,26,.15);color:var(--o);border:1px solid rgba(238,126,26,.25);}.tb-wa{background:rgba(37,211,102,.15);color:#25D366;border:1px solid rgba(37,211,102,.25);}
.tb-call:hover{background:var(--o);color:#fff;}.tb-wa:hover{background:#25D366;color:#fff;}
#hdr{background:rgba(255,255,255,.97);backdrop-filter:blur(14px);border-bottom:1px solid var(--bdr);transition:box-shadow .2s;}#hdr.up{box-shadow:0 4px 32px rgba(13,27,42,.09);}
.nav{display:flex;align-items:center;justify-content:space-between;height:70px;gap:16px;}
.dmenu{display:flex;align-items:center;gap:2px;}.dmenu>li{position:relative;}
.dmenu>li>a{display:flex;align-items:center;gap:5px;padding:9px 12px;font-size:13.5px;font-weight:600;color:var(--n);border-radius:8px;transition:.15s;}.dmenu>li>a:hover{background:var(--bg);color:var(--b);}
.dcar{width:10px;height:10px;opacity:.5;transition:transform .18s;flex-shrink:0;}.dmenu>li:hover .dcar{transform:rotate(180deg);}
.mega{position:absolute;top:calc(100% + 10px);left:50%;transform:translateX(-50%) translateY(10px);background:#fff;border:1px solid var(--bdr);border-radius:18px;padding:26px;box-shadow:0 24px 64px rgba(13,27,42,.14);opacity:0;visibility:hidden;pointer-events:none;transition:opacity .18s,transform .18s;z-index:9999;}
.mega.wide{width:940px;display:grid;grid-template-columns:repeat(5,1fr);gap:22px;}.mega.slim{width:296px;left:auto;right:0;transform:translateY(10px);}
.dmenu>li:hover .mega{opacity:1;visibility:visible;pointer-events:all;transform:translateX(-50%) translateY(0);}.dmenu>li:hover .mega.slim{transform:translateY(0);}
.dmenu>li::after{content:'';position:absolute;top:100%;left:-40px;right:-40px;height:14px;}
.mc h5{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--b);margin-bottom:11px;}
.mc a{display:block;position:relative;padding:5px 0 5px 11px;font-size:13px;font-weight:500;color:var(--body);transition:color .14s,padding-left .14s;}.mc a::before{content:'';position:absolute;left:0;top:50%;transform:translateY(-50%);width:2px;height:0;border-radius:1px;background:var(--o);transition:height .15s cubic-bezier(.22,1,.36,1);}.mc a:hover{color:var(--o);padding-left:14px;}.mc a:hover::before{height:13px;}
.mega.slim a{display:block;position:relative;padding:9px 36px 9px 12px;font-size:13px;font-weight:500;color:var(--body);border-radius:8px;transition:.15s;}.mega.slim a:hover{background:var(--bg);color:var(--o);}.mega.slim a small{display:block;font-size:11px;color:var(--s);font-weight:400;margin-top:1px;}
.navcta{display:flex;align-items:center;gap:10px;}.hb{background:none;border:none;display:none;flex-direction:column;gap:5px;padding:4px;}.hb span{display:block;width:22px;height:2px;background:var(--n);border-radius:1px;transition:.2s;}
.mnav{display:none;position:fixed;inset:0;background:#fff;z-index:200;overflow-y:auto;padding:24px 22px 40px;}.mnav.on{display:block;}.ma{border-bottom:1px solid var(--bdr);}.ma>button{width:100%;text-align:left;background:none;border:none;padding:15px 0;font-size:15px;font-weight:600;color:var(--n);display:flex;justify-content:space-between;}.ms{display:none;padding:0 0 16px;}.ma.on .ms{display:block;}.ms a{display:block;padding:7px 0;font-size:14px;color:var(--m);}.ms h6{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--b);margin:12px 0 4px;}
footer{background:var(--n-dark);padding:64px 0 0;}.fg{max-width:1200px;margin:0 auto;padding:0 28px;display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:40px;}.fb-desc{font-size:13.5px;color:rgba(255,255,255,.4);line-height:1.7;margin:16px 0 20px;}.socials{display:flex;gap:10px;}.socials a{width:34px;height:34px;border-radius:8px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:rgba(255,255,255,.5);transition:.15s;}.socials a:hover{background:var(--o);color:#fff;border-color:var(--o);}
footer h4{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.35);margin-bottom:16px;}.fl{display:flex;flex-direction:column;gap:8px;}.fl a,.fc a{font-size:13.5px;color:rgba(255,255,255,.5);transition:.15s;}.fl a:hover,.fc a:hover{color:#fff;}.fc{display:flex;flex-direction:column;gap:10px;}.footer-main{padding-bottom:40px;}.footer-bottom{border-top:1px solid rgba(255,255,255,.07);padding:20px 28px;display:flex;justify-content:space-between;align-items:center;font-size:12px;color:rgba(255,255,255,.3);flex-wrap:wrap;gap:8px;max-width:1200px;margin:0 auto;}.footer-areas{padding:20px 28px;border-top:1px solid rgba(255,255,255,.06);font-size:12px;color:rgba(255,255,255,.25);display:flex;gap:8px;flex-wrap:wrap;align-items:center;}.footer-areas b{color:rgba(255,255,255,.4);}.footer-areas a{color:rgba(255,255,255,.25);transition:.15s;}.footer-areas a:hover{color:rgba(255,255,255,.6);}
@media(max-width:900px){.hb{display:flex;}.dmenu{display:none;}.navcta .btn-o{display:none;}.fg{grid-template-columns:1fr 1fr;}}
@media(max-width:600px){.fg{grid-template-columns:1fr;}}
`;

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
      <style dangerouslySetInnerHTML={{ __html: chromeCss }} />
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