import posts from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    // Optimization: Direct import caches JSON in memory and ensures inclusion in production builds
    return posts
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
