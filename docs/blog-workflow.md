# Blog Workflow

> **Idioma:** todos os posts do blog são escritos em **Português Brasileiro**. O restante do site é em inglês, mas o blog é exclusivamente em português. Isso está documentado no `CLAUDE.md`, no `automation/blog-prompt.md`, e no comando `/new-post`.

This document covers how the blog works, how to create posts, and how the AI draft generation pipeline operates.

---

## How blog posts are stored

Posts live as Markdown files in:

```
web/content/blog/
```

Each file has YAML frontmatter followed by the post body:

```markdown
---
title: "Your Post Title"
slug: "your-post-title"
description: "One or two sentences for SEO and preview cards."
date: "2025-11-10"
tags: ["engineering leadership", "software delivery"]
author: "Fabio Cirone"
status: published
---

Post content here...
```

| Field         | Required | Notes                                              |
|---------------|----------|----------------------------------------------------|
| `title`       | Yes      | Displayed as the post heading                      |
| `slug`        | Yes      | Used as the URL: `/blog/<slug>/`                   |
| `description` | Yes      | Used for SEO meta description and post cards       |
| `date`        | Yes      | ISO format: `YYYY-MM-DD`. Used for sorting         |
| `tags`        | No       | Array of strings. Displayed on index and post page |
| `author`      | No       | Displayed at bottom of post header                 |
| `status`      | Yes      | `draft` or `published`                             |

---

## Draft vs published

- Posts with `status: draft` are **excluded from the production build**. They will not appear on the site.
- Posts with `status: published` are included.
- This is enforced at build time — there is no runtime filtering.

To publish a draft, change `status: draft` to `status: published` and merge to `main`.

---

## Creating a post manually

1. Create a new file in `web/content/blog/your-slug.md`
2. Add frontmatter (see format above)
3. Write the post content in Markdown
4. Set `status: draft` while writing
5. When ready: set `status: published`, commit, and push/merge to `main`

---

## AI draft generation workflow

The GitHub Actions workflow at `.github/workflows/generate-blog-post.yml` automates draft creation.

### What it does

1. Picks a topic from `automation/blog-topics.yml` (or uses a manually provided topic)
2. Loads the prompt template from `automation/blog-prompt.md`
3. Calls the configured AI API via `curl`
4. Saves the generated Markdown file to `web/content/blog/`
5. Creates a new branch and opens a Pull Request
6. The generated post always has `status: draft` — it will not be published until manually reviewed and merged

### Triggering the workflow

**Scheduled:** Runs automatically every Monday at 08:00 UTC.

**Manual trigger:** Go to Actions → Generate Blog Post Draft → Run workflow.

Manual inputs:
| Input            | Description                                             | Default                  |
|------------------|---------------------------------------------------------|--------------------------|
| `topic`          | Specific topic to write about (overrides random pick)   | Random from topics list  |
| `title_override` | Optional title for the post                             | AI-generated             |
| `tags`           | Comma-separated tags                                    | AI-generated             |
| `language`       | Language for the post                                   | English                  |
| `dry_run`        | Generate and print the post without creating a PR       | false                    |

---

## Review and publish flow

```
AI generates draft
       ↓
Pull Request opened (status: draft)
       ↓
Human reviews: reads, edits, fact-checks
       ↓
Change status: draft → published
       ↓
Merge PR to main
       ↓
GitHub Actions builds and deploys to S3/CloudFront
       ↓
Post is live
```

The AI-generated draft **never reaches production** unless a human explicitly changes `status: published` and merges.

---

## Required GitHub Secrets and Variables

### Secrets (sensitive — set in repo Settings → Secrets)

| Secret                    | Required | Description                                |
|---------------------------|----------|--------------------------------------------|
| `AI_API_KEY`              | Yes      | API key for the AI provider                |
| `AWS_ACCESS_KEY_ID`       | Yes      | AWS credentials (for deploy)               |
| `AWS_SECRET_ACCESS_KEY`   | Yes      | AWS credentials (for deploy)               |
| `CLOUDFRONT_DISTRIBUTION_ID` | Yes   | CloudFront distribution (for cache invalidation) |

### Variables (non-sensitive — set in repo Settings → Variables)

| Variable             | Required | Default                            | Description                    |
|----------------------|----------|------------------------------------|--------------------------------|
| `AI_BASE_URL`        | No       | `https://api.anthropic.com`        | AI provider base URL           |
| `AI_MODEL`           | No       | `claude-opus-4-6`                 | AI model identifier            |
| `BLOG_AUTHOR_NAME`   | No       | `Fabio Cirone`                     | Default author name in posts   |

### Switching AI provider

The workflow detects Anthropic vs OpenAI-compatible endpoints by the base URL:

- If `AI_BASE_URL` contains `anthropic` → uses Anthropic Messages API format
- Otherwise → uses OpenAI chat completions format (works with OpenAI, Azure OpenAI, Groq, etc.)

---

## Adding topics to the pool

Edit `automation/blog-topics.yml` to add, remove, or adjust topics. Each entry:

```yaml
- topic: "The question or angle the AI should address"
  slug: "short-lowercase-slug"
  tags: ["tag1", "tag2"]
```

The generator picks randomly and prefers topics not recently written about (by checking existing filenames).

---

## Running locally

```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000/blog](http://localhost:3000/blog) to see the blog index.

To test the build (which enforces draft filtering):

```bash
cd web
npm run build
```

The output is in `web/out/`. Only `status: published` posts will appear in `web/out/blog/`.

---

## Troubleshooting

**Blog index shows no posts**
- Check that at least one post has `status: published`
- Check that `web/content/blog/` exists and has `.md` files

**Build fails with module not found**
- Run `npm install` in the `web/` directory to install `gray-matter`, `remark`, and `remark-html`

**AI workflow fails at "Call AI API" step**
- Verify `AI_API_KEY` is set in GitHub Secrets
- Check `AI_BASE_URL` and `AI_MODEL` variables match your provider
- Use `dry_run: true` to test without creating a PR

**PR is not created**
- Check that the workflow has `permissions: contents: write, pull-requests: write`
- Verify `GITHUB_TOKEN` has sufficient permissions (Settings → Actions → General)
