// ⚡ Bolt Optimization: Import JSON directly to cache data in memory
// This avoids expensive disk I/O (fs.readFile) on every API request.
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
