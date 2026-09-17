import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.mdx' }),
  schema: z.object({
    title: z.string(),
    repo: z.string(),
    repoUrl: z.string(),
    tagline: z.string(),
    period: z.string(),
    stack: z.array(z.string()),
    topics: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = { work };
