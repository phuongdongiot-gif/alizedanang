// Optimization: Direct JSON imports are natively supported by Nuxt/Nitro and cached in memory,
// avoiding expensive, synchronous-like fs.readFile operations at runtime.
import data from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    return data
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
