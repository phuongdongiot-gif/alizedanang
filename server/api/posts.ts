// ⚡ Bolt: Using direct ES module import for static JSON data bundles and caches it in memory,
// avoiding slow fs.readFile operations on every request.
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
