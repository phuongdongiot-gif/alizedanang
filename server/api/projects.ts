import items from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // Direct ES module JSON imports cache data in memory to avoid filesystem overhead
    return items
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
