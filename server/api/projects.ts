// Optimization: Import JSON directly. Nuxt Nitro natively supports ES module imports of JSON files,
// avoiding disk I/O and process.cwd() issues in production.
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
