Generate a new blog post draft for fabiocirone.com, commit it to a new branch, and provide the Pull Request link for review on GitHub.

**IMPORTANT: The post must be written entirely in Brazilian Portuguese (Português Brasileiro). Title, description, tags, body — everything in Portuguese.**

Follow these steps exactly:

## Step 1 — Gather context

- Read `automation/blog-prompt.md` (full editorial brief: tone, audience, format, frontmatter).
- Read `automation/blog-topics.yml` (curated topic pool).
- List files in `web/content/blog/` to see what has already been written and avoid repeating recent topics.

## Step 2 — Choose topic

- If the user provided a topic after the command (arguments: "$ARGUMENTS"), use that.
- Otherwise, pick the most suitable unused topic from blog-topics.yml.

## Step 3 — Generate the post

Write a complete blog post following the editorial brief:
- YAML frontmatter: title, slug, description, date (today, YYYY-MM-DD), tags, author ("Fabio Cirone"), status: draft
- `status` must always be `draft` — never `published`
- 700–1200 words, practical tone, well-structured sections

## Step 4 — Save the file

Save to `web/content/blog/<slug>.md`.

## Step 5 — Create branch and commit

Run these git commands:

```bash
git checkout main
git pull origin main
git checkout -b blog/draft-<slug>-<YYYYMMDD>
git add web/content/blog/<slug>.md
git commit -m "blog: add draft — <title>"
git push origin blog/draft-<slug>-<YYYYMMDD>
```

## Step 6 — Output the PR link

After pushing, print this message to the user:

---
**Draft created and pushed.**

Open this link to create the Pull Request on GitHub:

`https://github.com/fcirone/tinovacao/compare/blog/draft-<slug>-<YYYYMMDD>?expand=1`

**Review checklist before merging:**
- [ ] Read the full post
- [ ] Edit title, description, content as needed
- [ ] Update tags if necessary
- [ ] Change `status: draft` → `status: published` in the frontmatter
- [ ] Merge → site deploys automatically
---
