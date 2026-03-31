import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { getAllPublishedSlugs, getPostBySlug } from "@/lib/blog";

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
  };
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || post.status !== "published") {
    notFound();
  }

  return (
    <div className="min-h-screen text-slate-100">
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
              All posts
            </Link>
          </div>

          <article className="max-w-2xl">
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <time className="text-xs text-slate-500" dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
                {post.tags.map((tag) => (
                  <span key={tag} className="tag-pill px-2.5 py-0.5 text-xs text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl leading-snug mb-4">
                {post.title}
              </h1>

              <p className="text-base text-slate-400 leading-relaxed border-l-2 border-cyan-500/40 pl-4">
                {post.description}
              </p>

              {post.author && (
                <p className="mt-4 text-xs text-slate-500">By {post.author}</p>
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
