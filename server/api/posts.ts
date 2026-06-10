// ⚡ Bolt: Optimized by using direct JSON import which Nitro automatically caches in memory,
// avoiding synchronous fs.readFile and JSON.parse overhead on every request
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
