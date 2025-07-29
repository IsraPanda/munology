import { defineCollection, z } from 'astro:content';

// 記事コレクションのスキーマ定義
const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.date(),
    category: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// 著者コレクションのスキーマ定義
const authors = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    bio: z.string(),
    avatar: z.string().optional(),
    social: z.object({
      twitter: z.string().optional(),
      github: z.string().optional(),
      website: z.string().optional(),
    }).optional(),
  }),
});

// サイト設定コレクションのスキーマ定義
const site = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string(),
    author: z.string(),
    social: z.object({
      twitter: z.string().optional(),
      github: z.string().optional(),
    }).optional(),
  }),
});

export const collections = {
  articles,
  authors,
  site,
}; 