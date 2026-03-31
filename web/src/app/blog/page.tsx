import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Fabio Cirone",
  description:
    "Practical writing on engineering leadership, software architecture, AI, payments, and technology strategy by Fabio Cirone.",
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#career", label: "Journey" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen text-slate-100">
      <div className="shell py-8 lg:py-10">
        <SiteHeader links={NAV_LINKS} />

        <main className="mt-12 pb-20">
          <div className="mb-10">
            <h1 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
              Blog
            </h1>
            <p className="mt-3 text-base text-slate-400 max-w-2xl">
              Practical thinking on engineering leadership, software architecture, AI, payments, and
              technology strategy.
            </p>
          </div>

          {posts.length === 0 ? (
            <p className="text-slate-500 text-sm">No posts published yet.</p>
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
                    {post.tags.map((tag) => (
                      <span key={tag} className="tag-pill px-2.5 py-0.5 text-xs text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-lg font-semibold text-slate-100 leading-snug mb-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-cyan-300 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{post.description}</p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Read post
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
