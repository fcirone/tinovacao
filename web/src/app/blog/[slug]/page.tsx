import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { getAllPublishedSlugs, getPostBySlug, tagToSlug } from "@/lib/blog";

const BASE_URL = "https://fabiocirone.com";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#career", label: "Journey" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPublishedSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post || post.status !== "published") return {};

  return {
    title: `${post.title} | Fabio Cirone`,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}/`,
    },
    openGraph: {
      type: "article",
      siteName: "Fabio Cirone",
      title: post.title,
      description: post.description,
      url: `${BASE_URL}/blog/${post.slug}/`,
      locale: "pt_BR",
      publishedTime: `${post.date}T00:00:00.000Z`,
      authors: ["Fabio Cirone"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function buildBlogPostingJsonLd(post: Awaited<ReturnType<typeof getPostBySlug>>) {
  if (!post) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: `${post.date}T00:00:00.000Z`,
    url: `${BASE_URL}/blog/${post.slug}/`,
    inLanguage: "pt-BR",
    author: {
      "@type": "Person",
      name: "Fabio Cirone",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Person",
      name: "Fabio Cirone",
      url: BASE_URL,
    },
    keywords: post.tags.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug}/`,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || post.status !== "published") {
    notFound();
  }

  const jsonLd = buildBlogPostingJsonLd(post);

  return (
    <div className="min-h-screen text-slate-100">
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <div className="shell py-8 lg:py-10">
        <SiteHeader links={NAV_LINKS} />

        <main className="mt-12 pb-20">
          <div className="mb-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-cyan-300 transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M10 6H2M5 3L2 6l3 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Todos os posts
            </Link>
          </div>

          <article className="max-w-2xl" lang="pt-BR">
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <time className="text-xs text-slate-500" dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tag/${tagToSlug(tag)}/`}
                    className="tag-pill px-2.5 py-0.5 text-xs text-slate-400 hover:text-cyan-300 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>

              <h1 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl leading-snug mb-4">
                {post.title}
              </h1>

              <p className="text-base text-slate-400 leading-relaxed border-l-2 border-cyan-500/40 pl-4">
                {post.description}
              </p>

              {post.author && (
                <p className="mt-4 text-xs text-slate-500">Por {post.author}</p>
              )}
            </header>

            <div
              className="prose-blog"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          </article>
        </main>
      </div>
    </div>
  );
}
