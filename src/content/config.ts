import { z, defineCollection } from 'astro:content'

const featuresCollection = defineCollection({
  type: 'data',
  schmea: z.object({
    title: z.string(),
    text: z.string(),
    image: z.string(),
    order: z.number()
  })
})

export const collections = {
  features: featuresCollection
}
