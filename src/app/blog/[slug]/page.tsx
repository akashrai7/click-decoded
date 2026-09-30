import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getWordPressPosts } from "@/lib/wordpress";
import styles from "./article.module.css";


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

type Params = {
  slug: string;
};

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

  if (
    value.data &&
    typeof value.data === "object" &&
    typeof (value.data as Record<string, unknown>).posts === "object"
  ) {
    const posts = (value.data as Record<string, unknown>).posts;

    if (
      posts &&
      typeof posts === "object" &&
      Array.isArray((posts as Record<string, unknown>).nodes)
    ) {
      return (posts as { nodes: WPPost[] }).nodes;
    }
  }

  return [];
}

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

function getAuthor(post: WPPost) {
  const author = post.author?.node;

  if (!author) {
    return "Click Decoded";
  }

  if (author.name) {
    return author.name;
  }

  return (
    [author.firstName, author.lastName].filter(Boolean).join(" ") ||
    "Click Decoded"
  );
}

function getInitials(name: string) {
  const parts = name
    .split(" ")
    .map((item) => item.trim())
    .filter(Boolean);

  if (!parts.length) {
    return "CD";
  }

  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }

  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

function formatDate(date?: string | null) {
  if (!date) return "";

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return "";
  }

  return parsed.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function getReadTime(post: WPPost) {
  const text = cleanText(post.content || post.excerpt);

  if (!text) {
    return "3 min read";
  }

  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));

  return `${minutes} min read`;
}

function getCategory(post: WPPost) {
  const category = post.categories?.nodes?.[0];

  return {
    name: category?.name || "Digital Marketing",
    slug: category?.slug || "content",
  };
}

function getCategoryIcon(slug: string) {
  const value = slug.toLowerCase();

  if (value.includes("seo")) return "🔍";
  if (value.includes("google") || value.includes("ads")) return "🎯";
  if (value.includes("ai") || value.includes("automation")) return "🤖";
  if (value.includes("web") || value.includes("wordpress")) return "💻";
  if (value.includes("social")) return "📱";
  if (value.includes("geo")) return "🚀";

  return "📝";
}

async function getPostBySlug(slug: string) {
  const result = await getWordPressPosts();
  const posts = getPostsArray(result);

  return posts.find(
    (post) => post.slug?.toLowerCase() === slug.toLowerCase(),
  );
}

export async function generateStaticParams(): Promise<Params[]> {
  try {
    const result = await getWordPressPosts();
    const posts = getPostsArray(result);

    return posts
      .filter((post) => post.slug)
      .map((post) => ({
        slug: post.slug as string,
      }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Click Decoded",
    };
  }

  const title = cleanText(post.title) || "Click Decoded Blog";
  const description =
    cleanText(post.excerpt) ||
    cleanText(post.content).slice(0, 160) ||
    "Digital marketing insights from Click Decoded.";

  return {
    title: `${title} | Click Decoded`,
    description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date || undefined,
      modifiedTime: post.modified || undefined,
      authors: [getAuthor(post)],
      images: post.featuredImage?.node?.sourceUrl
        ? [
            {
              url: post.featuredImage.node.sourceUrl,
              alt: post.featuredImage.node.altText || title,
            },
          ]
        : undefined,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const title = cleanText(post.title);
  const author = getAuthor(post);
  const category = getCategory(post);
  const readTime = getReadTime(post);
  const featuredImage = post.featuredImage?.node?.sourceUrl;

  const relatedResult = await getWordPressPosts();
  const allPosts = getPostsArray(relatedResult);

  const relatedPosts = allPosts
    .filter(
      (item) =>
        item.slug &&
        item.slug !== post.slug &&
        item.title?.trim(),
    )
    .slice(0, 3);

  return (
    <main className={styles.articlePage}>
      <style dangerouslySetInnerHTML={{ __html: chromeCss }} />
      {/* Breadcrumb */}
      <div className={styles.breadcrumbWrap}>
        <div className={styles.wrap}>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/blog">Blog</Link>
            <span>›</span>
            <span>{title}</span>
          </div>
        </div>
      </div>

      {/* Article Hero */}
      <section className={styles.articleHero}>
        <div className={styles.wrap}>
          <div className={styles.heroInner}>
            <div className={styles.categoryBadge}>
              <span>{getCategoryIcon(category.slug)}</span>
              {category.name}
            </div>

            <h1>{title}</h1>

            {post.excerpt && (
              <p className={styles.heroExcerpt}>
                {cleanText(post.excerpt)}
              </p>
            )}

            <div className={styles.meta}>
              <div className={styles.author}>
                <span className={styles.avatar}>
                  {getInitials(author)}
                </span>

                <div>
                  <strong>{author}</strong>
                  <span>{formatDate(post.date)}</span>
                </div>
              </div>

              <span className={styles.readTime}>
                ◷ {readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Article */}
      <section className={styles.articleSection}>
        <div className={styles.wrap}>
          <div className={styles.articleLayout}>
            <article className={styles.articleCard}>
              {featuredImage && (
                <div className={styles.featuredImage}>
                  <Image
                    src={featuredImage}
                    alt={
                      post.featuredImage?.node?.altText ||
                      title ||
                      "Blog article"
                    }
                    fill
                    priority
                    sizes="(max-width: 900px) 100vw, 800px"
                  />
                </div>
              )}

              <div
                className={styles.articleContent}
                dangerouslySetInnerHTML={{
                  __html:
                    post.content ||
                    "<p>This article does not have any published content yet.</p>",
                }}
              />

              <div className={styles.articleBottom}>
                <Link href="/blog" className={styles.backButton}>
                  ← Back to Blog
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.sidebarBox}>
                <div className={styles.sidebarLabel}>
                  📚 BROWSE BY TOPIC
                </div>

                <Link href="/blog">
                  🔍 SEO
                </Link>

                <Link href="/blog">
                  🎯 Google Ads
                </Link>

                <Link href="/blog">
                  🤖 AI & Automation
                </Link>

                <Link href="/blog">
                  💻 Web Development
                </Link>

                <Link href="/blog">
                  📱 Social Media
                </Link>

                <Link href="/blog">
                  🚀 GEO / AI Search
                </Link>
              </div>

              <div className={`${styles.sidebarBox} ${styles.auditBox}`}>
                <div className={styles.sidebarLabel}>
                  🚀 FREE AUDIT
                </div>

                <h3>
                  Is your website leaving money on the table?
                </h3>

                <p>
                  Get a free SEO + performance audit. No obligation.
                </p>

                <Link href="/contact" className={styles.auditButton}>
                  Get Free Audit →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className={styles.relatedSection}>
          <div className={styles.wrap}>
            <div className={styles.sectionLabel}>
              <span>▣</span>
              RELATED ARTICLES
            </div>

            <div className={styles.relatedGrid}>
              {relatedPosts.map((related) => {
                const relatedCategory = getCategory(related);

                return (
                  <Link
                    key={related.id || related.slug}
                    href={`/blog/${related.slug}`}
                    className={styles.relatedCard}
                  >
                    <div
                      className={`${styles.relatedCover} ${
                        relatedCategory.slug.includes("seo")
                          ? styles.coverSeo
                          : relatedCategory.slug.includes("ads")
                            ? styles.coverAds
                            : relatedCategory.slug.includes("ai")
                              ? styles.coverAi
                              : relatedCategory.slug.includes("web")
                                ? styles.coverWeb
                                : styles.coverDefault
                      }`}
                    >
                      {related.featuredImage?.node?.sourceUrl ? (
                        <Image
                          src={
                            related.featuredImage.node.sourceUrl
                          }
                          alt={
                            related.featuredImage.node.altText ||
                            cleanText(related.title)
                          }
                          fill
                          sizes="(max-width: 700px) 100vw, 33vw"
                        />
                      ) : (
                        <span>
                          {getCategoryIcon(
                            relatedCategory.slug,
                          )}
                        </span>
                      )}

                      <div className={styles.relatedOverlay} />

                      <span className={styles.relatedCategory}>
                        {getCategoryIcon(relatedCategory.slug)}{" "}
                        {relatedCategory.name}
                      </span>
                    </div>

                    <div className={styles.relatedBody}>
                      <h3>{cleanText(related.title)}</h3>

                      <p>
                        {cleanText(
                          related.excerpt ||
                            related.content,
                        ).slice(0, 120)}
                        ...
                      </p>

                      <span>
                        Read Article →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className={styles.articleCta}>
        <div className={styles.wrap}>
          <h2>Ready to Grow Your Business?</h2>

          <p>
            Talk to Click Decoded about SEO, Google Ads,
            web development or AI automation.
          </p>

          <div className={styles.ctaButtons}>
            <Link
              href="/contact"
              className={styles.primaryButton}
            >
              Get Free Strategy Call →
            </Link>

            <Link
              href="/blog"
              className={styles.secondaryButton}
            >
              Explore More Articles
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}