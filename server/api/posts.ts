// ⚡ Bolt: Using direct ES module import to cache JSON data in memory
// avoiding expensive fs.readFile operations on every request
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
