// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// Absolute URLs (the og:image tag, mainly) need to know where the site lives.
// Vercel injects the production domain at build time, so this stays correct if
// the project is renamed. Set SITE_URL yourself once a custom domain is bought
// and it wins over both.
const site =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined);

export default defineConfig({
  site,
  integrations: [mdx()],
  markdown: {
    // The code blocks are plain ASCII architecture diagrams, not source code.
    // Shiki would paint them with its own dark theme, overriding the palette.
    syntaxHighlight: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
