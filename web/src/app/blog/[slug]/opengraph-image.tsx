import { ImageResponse } from "next/og";
import { getAllPublishedSlugs, getPostBySlug } from "@/lib/blog";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllPublishedSlugs().map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  const title = post?.title ?? "Fabio Cirone";
  const description = post?.description ?? "";
  const tags = post?.tags.slice(0, 3).join(" · ") ?? "";
  const date = post?.date
    ? new Date(post.date).toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" })
    : "";

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #020617 0%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22d3ee" }} />
          <span style={{ color: "#94a3b8", fontSize: 18, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            fabiocirone.com
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {tags ? (
            <p style={{ color: "#64748b", fontSize: 20, margin: 0 }}>{tags}</p>
          ) : null}
          <h1
            style={{
              color: "#f1f5f9",
              fontSize: title.length > 60 ? 44 : 52,
              fontWeight: 700,
              margin: 0,
              lineHeight: 1.2,
              maxWidth: 1000,
            }}
          >
            {title}
          </h1>
          {description ? (
            <p style={{ color: "#94a3b8", fontSize: 22, margin: 0, maxWidth: 900, lineHeight: 1.4 }}>
              {description.length > 120 ? description.slice(0, 120) + "…" : description}
            </p>
          ) : null}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ color: "#64748b", fontSize: 18 }}>Fabio Cirone</span>
          {date ? <span style={{ color: "#64748b", fontSize: 18 }}>{date}</span> : null}
        </div>
      </div>
    ),
    { ...size }
  );
}
