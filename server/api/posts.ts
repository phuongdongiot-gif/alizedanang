// ⚡ Bolt Optimization:
// Direct JSON import allows Nitro to cache the data in memory during build/startup,
// avoiding synchronous fs.readFile operations on every API request.
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
