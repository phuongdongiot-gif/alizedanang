// ⚡ Bolt Optimization: Using ES module import for JSON to leverage Nitro's in-memory caching
// This eliminates synchronous file I/O blocking during requests and improves API response times.
import projectsData from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    return projectsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
