// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// TODO: set `site` to the real domain once it's bought — needed for canonical URLs.
export default defineConfig({
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
