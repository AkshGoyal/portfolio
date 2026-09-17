# Portfolio — Aksh Goyal

Personal portfolio site: a home page, a case-study page per project, and a 404.
Static output, no server code and no database.

## Stack

- **Astro** (static output) with **TypeScript**
- **Tailwind CSS v4** via the `@tailwindcss/vite` plugin
- **MDX** for the project case studies, typed through a content collection
- Self-hosted fonts (Space Grotesk, Inter, JetBrains Mono) in `public/fonts`,
  with their licenses alongside them

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
```

Other commands:

```bash
npm run build    # static build into dist/
npm run preview  # serve the built site
npm run check    # astro check — type-checks .astro and .ts files
```

## Layout

```
src/content/work/   one MDX file per project — frontmatter drives the
                    home-page listing and the project page header
src/content.config.ts   the content-collection schema those files validate against
src/pages/          index, work/[...slug] (project pages), 404
src/layouts/        BaseLayout — head, fonts, header and footer
src/components/     Header, Footer, Tag, Todo
src/styles/         global.css — palette, @font-face rules, case-study prose styles
public/             fonts, resume.pdf, favicon
```

Adding a project means adding one MDX file to `src/content/work/`; the home page
picks it up automatically and orders by the `order` field.

## Deploying to Vercel

The site is a plain static Astro build, so Vercel needs no adapter and no
`vercel.json` — its Astro preset runs `astro build` and serves `dist/`.

1. Import the repository at [vercel.com/new](https://vercel.com/new).
2. Leave the detected framework preset (Astro) and build settings as they are.
3. Deploy. Every push to `main` then redeploys automatically.

When a custom domain is added, add it in the Vercel project settings and set
`site` in `astro.config.mjs` to the same URL so canonical URLs are correct.
