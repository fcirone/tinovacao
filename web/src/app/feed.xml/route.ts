import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

const BASE_URL = "https://tinovacao.com";

export function GET() {
  const posts = getAllPosts();

  const items = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${BASE_URL}/blog/${post.slug}/</link>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid isPermaLink="true">${BASE_URL}/blog/${post.slug}/</guid>
      ${post.tags.map((t) => `<category><![CDATA[${t}]]></category>`).join("\n      ")}
    </item>`
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Fabio Cirone — Blog</title>
    <link>${BASE_URL}/blog/</link>
    <description>Escrita prática sobre liderança de engenharia, arquitetura de software, IA, pagamentos e estratégia de tecnologia.</description>
    <language>pt-BR</language>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
