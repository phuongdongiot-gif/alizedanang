// Optimization: Use static import to avoid disk I/O and JSON parsing per request
import projects from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    return projects
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
