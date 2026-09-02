import items from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // Optimization: directly import JSON to cache in memory instead of reading file
    return items
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
