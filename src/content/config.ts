import { z, defineCollection } from 'astro:content';

const printsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    price: z.number(),
    image: z.string(),
    tags: z.array(z.string()),
    colors: z.array(z.object({
        name: z.string(),
        price: z.number(),
    })),
    size: z.array(z.object({
        name: z.string(),
        dimensions: z.string(),
        price: z.number(),
    })),
  }),
});

export const collections = {
  'prints': printsCollection,
};
