// ⚡ Bolt Optimization: Using ES module import for JSON to leverage Nitro's in-memory caching
// This eliminates synchronous file I/O blocking during requests and improves API response times.
import postsData from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    return postsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
