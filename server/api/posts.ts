import items from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    // Optimization: Use ES module import to cache JSON data in memory
    return items
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
