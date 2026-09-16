// ⚡ Bolt Optimization: Use direct ES module import to natively cache data in memory
// Bypasses fs.readFile disk I/O and JSON.parse overhead per request
import posts from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    return posts
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
