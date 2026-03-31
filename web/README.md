# fabiocirone.com — Site

Personal portfolio and blog site for Fabio Cirone. Built with Next.js (App Router), static export, deployed to S3 + CloudFront.

## Stack

- **Framework**: Next.js 16 (App Router, `output: "export"`)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Blog content**: Markdown files with YAML frontmatter in `content/blog/`
- **Deploy**: GitHub Actions → S3 → CloudFront

## Running locally

```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Building

```bash
cd web
npm run build
```

Output is in `web/out/`. Only posts with `status: published` appear in the build.

## Blog

See [`docs/blog-workflow.md`](../docs/blog-workflow.md) for full documentation on:
- Creating and publishing posts
- AI draft generation workflow
- Required GitHub Secrets and Variables
- Review and publish flow

## Deploy

Pushes to `main` trigger the deploy workflow (`.github/workflows/deploy.yml`), which builds the site and syncs to S3.

Required secrets: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `CLOUDFRONT_DISTRIBUTION_ID`.
