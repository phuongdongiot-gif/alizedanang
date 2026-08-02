import items from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // Optimized: Use ES module import to cache JSON data in memory and avoid slow fs reads
    return items
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
