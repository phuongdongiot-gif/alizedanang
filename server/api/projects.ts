import items from '../data/projects.json'

// Optimization: Import JSON directly to cache data in memory and avoid inefficient fs.readFile on every request.
export default defineEventHandler(async (event) => {
  try {
    return items
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
