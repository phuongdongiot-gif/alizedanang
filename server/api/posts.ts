import postsData from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    // PERFORMANCE: Import static JSON directly to leverage Nuxt/Nitro in-memory caching instead of reading from disk on every request.
    return postsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
