import { z, defineCollection } from 'astro:content'

const featuresCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    text: z.string(),
    image: z.string(),
    order: z.number()
  })
})

export const collections = {
  features: featuresCollection
}
