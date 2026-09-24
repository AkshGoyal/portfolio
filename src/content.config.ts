import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.mdx' }),
  schema: z.object({
    title: z.string(),
    // `employment` entries are client work with no public repo; `project`
    // entries are things built outside work, with source anyone can read.
    kind: z.enum(['employment', 'project']).default('project'),
    org: z.string().optional(),
    repo: z.string().optional(),
    repoUrl: z.string().optional(),
    // A private repository gets no link — a visitor would only hit a 404 —
    // and the `access` line says why it is private and how to see the code.
    repoPrivate: z.boolean().default(false),
    tagline: z.string(),
    period: z.string(),
    stack: z.array(z.string()),
    topics: z.array(z.string()),
    // One line on where the running software lives, shown next to the links.
    // Deliberately explicit: "no public demo" with a reason reads better than
    // a missing button.
    access: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = { work };
