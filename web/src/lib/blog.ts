import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  title: string;
  slug: string;
  description: string;
  date: string;
  tags: string[];
  author: string;
  status: "draft" | "published";
}

export interface Post extends PostMeta {
  contentHtml: string;
}

function parseMeta(filename: string, data: Record<string, unknown>): PostMeta {
  return {
    title: (data.title as string) ?? "",
    slug: (data.slug as string) ?? filename.replace(/\.md$/, ""),
    description: (data.description as string) ?? "",
    date: (data.date as string) ?? "",
    tags: (data.tags as string[]) ?? [],
    author: (data.author as string) ?? "",
    status: (data.status as "draft" | "published") ?? "draft",
  };
}

export function getAllPosts(includeDrafts = false): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const { data } = matter(fs.readFileSync(path.join(BLOG_DIR, filename), "utf8"));
    return parseMeta(filename, data);
  });

  return posts
    .filter((p) => includeDrafts || p.status === "published")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!fs.existsSync(BLOG_DIR)) return null;

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  for (const filename of files) {
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
    const { data, content } = matter(raw);
    const meta = parseMeta(filename, data);

    if (meta.slug !== slug) continue;

    const processed = await remark().use(html, { sanitize: false }).process(content);

    return { ...meta, contentHtml: processed.toString() };
  }

  return null;
}

export function getAllPublishedSlugs(): string[] {
  return getAllPosts(false).map((p) => p.slug);
}
