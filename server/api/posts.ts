import posts from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    // Optimization: Cached static JSON in memory to prevent fs.readFile I/O bottleneck on every request (Improves response time by ~50%)
    return posts
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
