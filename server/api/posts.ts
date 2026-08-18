// Optimization: Use ES module import to cache JSON data in memory instead of reading from disk on every request
import posts from '../data/posts.json'

export default defineEventHandler((event) => {
  try {
    return posts
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
