import postsData from '../data/posts.json'

// Optimization: Cache static JSON data in memory via ES module import to avoid expensive disk I/O and JSON parsing on every request.

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
