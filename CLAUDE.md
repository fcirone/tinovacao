# Claude Code instructions for this project

## Language

**All blog posts must be written in Brazilian Portuguese (Português Brasileiro).** This applies to the title, description, tags, and body. No exceptions. The rest of the site is in English, but the blog is exclusively in Portuguese.

## Generating a new blog post

When asked to generate a blog post (with phrases like "gera um post", "create a blog post", "new post about X"), follow this process:

1. Read `automation/blog-prompt.md` for the full editorial brief and output format
2. Read `automation/blog-topics.yml` to see available curated topics
3. Check existing files in `web/content/blog/` to avoid repeating recent topics
4. If the user provided a topic, use it. Otherwise, pick a suitable one from the topics list.
5. Generate the full post following the editorial direction in the prompt file
6. Write it directly to `web/content/blog/<slug>.md`
7. Always set `status: published` — merging the PR is the publishing approval
8. Report: filename created, title, slug, word count estimate

## Project structure

- `web/` — Next.js site (run `npm run dev` or `npm run build` here)
- `web/content/blog/` — blog posts as Markdown with YAML frontmatter
- `web/src/app/blog/` — blog pages (index + individual post)
- `web/src/lib/blog.ts` — blog utilities
- `automation/blog-prompt.md` — editorial brief for post generation
- `automation/blog-topics.yml` — curated topic pool
- `docs/blog-workflow.md` — full workflow documentation
- `infra/` — Terraform for AWS (S3 + CloudFront)
- `.github/workflows/` — CI/CD and blog generation automation

## Publishing a post

Merge the PR to `main`. The deploy workflow handles the rest.
