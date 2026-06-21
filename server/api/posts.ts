import items from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    // Optimization: Direct ES module static JSON import to cache in memory
    // and avoid inefficient disk I/O and process.cwd() production bugs.
    return items
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
