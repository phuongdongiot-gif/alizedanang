import items from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // Optimization: Use ES module import to cache JSON data in memory instead of reading from disk on every request
    return items
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
