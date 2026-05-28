import data from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // Optimization: Directly import JSON to leverage in-memory caching and avoid fs.readFile overhead
    return data
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
