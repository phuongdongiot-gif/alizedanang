// OPTIMIZATION: Use static JSON import to cache data in memory and avoid inefficient fs.readFile operations per request.
import data from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    return data
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
