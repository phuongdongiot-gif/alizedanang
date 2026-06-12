// Direct JSON imports are natively supported by Nuxt Nitro, caching data in memory and avoiding disk I/O.
import data from '../data/posts.json'

export default defineEventHandler((event) => {
  try {
    return data
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
