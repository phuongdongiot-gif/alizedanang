import items from '../data/posts.json' with { type: 'json' }

export default defineEventHandler(async (event) => {
  try {
    // Optimization: Import static JSON as ES module to cache in memory instead of reading from file system on every request.
    return items
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
