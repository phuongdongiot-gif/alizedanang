// Optimization: Directly import JSON to leverage Nitro's memory caching and avoid expensive fs.readFile and JSON.parse on every request.
import items from '../data/projects.json'

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
