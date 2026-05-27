import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { getAllPosts, getAllTags, tagToSlug } from "@/lib/blog";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#career", label: "Journey" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

interface Props {
  params: Promise<{ tag: string }>;
}

export function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag: tagToSlug(tag) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag: tagSlug } = await params;
  const allTags = getAllTags();
  const tag = allTags.find((t) => tagToSlug(t) === tagSlug) ?? tagSlug;

  return {
    title: `Posts sobre ${tag} | Fabio Cirone`,
    description: `Artigos sobre ${tag} — liderança de engenharia, IA, pagamentos e estratégia de tecnologia por Fabio Cirone.`,
    alternates: { canonical: `/blog/tag/${tagSlug}/` },
  };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function TagPage({ params }: Props) {
  const { tag: tagSlug } = await params;
  const allTags = getAllTags();
  const tag = allTags.find((t) => tagToSlug(t) === tagSlug) ?? tagSlug;
  const posts = getAllPosts().filter((p) => p.tags.some((t) => tagToSlug(t) === tagSlug));

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
              Todos os posts
            </Link>
          </div>

          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 mb-2">
              Tag
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
              {tag}
            </h1>
            <p className="mt-2 text-sm text-slate-400">
              {posts.length} {posts.length === 1 ? "post" : "posts"}
            </p>
          </div>

          {posts.length === 0 ? (
            <p className="text-slate-500 text-sm">Nenhum post publicado com essa tag.</p>
          ) : (
            <div className="flex flex-col gap-6">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="glass-panel p-6 sm:p-8 transition hover:-translate-y-0.5 hover:shadow-[0_32px_80px_rgba(15,23,42,0.95)]"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <time className="text-xs text-slate-500" dateTime={post.date}>
                      {formatDate(post.date)}
                    </time>
                    {post.tags.map((t) => (
                      <Link
                        key={t}
                        href={`/blog/tag/${tagToSlug(t)}/`}
                        className="tag-pill px-2.5 py-0.5 text-xs text-slate-400 hover:text-cyan-300 transition-colors"
                      >
                        {t}
                      </Link>
                    ))}
                  </div>

                  <h2 className="text-lg font-semibold text-slate-100 leading-snug mb-2">
                    <Link
                      href={`/blog/${post.slug}/`}
                      className="hover:text-cyan-300 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{post.description}</p>

                  <Link
                    href={`/blog/${post.slug}/`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Ler post
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6h8M7 3l3 3-3 3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
