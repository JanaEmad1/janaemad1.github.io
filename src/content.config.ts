import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every visible text has an Arabic and an English version; the build fails if one is missing.
const t = z.object({ ar: z.string().min(1), en: z.string().min(1) });

const projects = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/projects' }),
  schema: z.object({
    order: z.number(),
    kind: z.enum(['demo', 'ai']),
    title: t,
    tagline: t,
    problem: t,
    solution: t,
    results: z.array(t).min(1),
    stack: z.array(z.string()),
    liveUrl: z.string().optional(),
    repoUrl: z.string().url().optional(),
    tone: z.enum(['teal', 'coffee', 'neutral']),
  }),
});

const services = defineCollection({
  loader: file('./src/content/home/services.json'),
  schema: z.object({ icon: z.string(), title: t, text: t }),
});

const packages = defineCollection({
  loader: file('./src/content/home/packages.json'),
  schema: z.object({ name: t, featured: z.boolean().default(false), features: z.array(t) }),
});

const process = defineCollection({
  loader: file('./src/content/home/process.json'),
  schema: z.object({ title: t, text: t }),
});

const faq = defineCollection({
  loader: file('./src/content/home/faq.json'),
  schema: z.object({ q: t, a: t }),
});

export const collections = { projects, services, packages, process, faq };
