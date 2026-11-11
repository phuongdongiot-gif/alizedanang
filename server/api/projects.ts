import items from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // Optimization: Cache JSON data in memory using ES module import to avoid disk I/O on every request
    return items
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
