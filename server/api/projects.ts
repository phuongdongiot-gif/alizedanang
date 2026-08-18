// Optimization: Use ES module import to cache JSON data in memory instead of reading from disk on every request
import projects from '../data/projects.json'

export default defineEventHandler((event) => {
  try {
    return projects
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
