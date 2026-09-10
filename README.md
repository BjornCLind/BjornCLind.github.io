# bjornclind.github.io

Personal portfolio of Bjorn Lindqvist — built with Next.js (App Router),
TypeScript and Tailwind CSS, deployed as a static site to GitHub Pages.

**Live:** https://bjornclind.github.io

## Local development

```bash
npm install
npm run dev       # http://localhost:3000
```

## Build

```bash
npm run build     # static export -> ./out
```

Preview the exported site exactly as Pages will serve it:

```bash
npx serve out
```

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the static export and publishes `out/` to GitHub Pages.

For this to work, the repository's **Settings → Pages → Source** must be set to
**GitHub Actions**.

### Notes for future changes

- This is a GitHub *user* site, served from the domain root, so `basePath` and
  `assetPrefix` in `next.config.mjs` must stay empty. Setting them to
  `/bjornclind.github.io` makes every CSS/JS asset 404.
- `public/.nojekyll` is required — Pages runs Jekyll by default, which skips
  underscore-prefixed folders such as Next's `_next/`.
- `output: "export"` means no server: no Route Handlers, no `next/image`
  optimization (hence `images.unoptimized`), and browser-only libraries must be
  loaded with `next/dynamic` and `ssr: false`.

## Project structure

```
app/         # App Router entry (layout, page, theme provider)
components/  # Page sections (Hero, Grid, Experience, Education, ...)
components/ui/  # Reusable animated UI primitives
data/        # Site content: nav, bio grid, experience, education, socials
public/      # Static assets
```

## Content

Page copy lives in [`data/index.ts`](data/index.ts) — edit that file rather than
the components to update experience, education or links.
