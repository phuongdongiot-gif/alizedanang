// Optimization: Direct import caches JSON in memory and avoids blocking I/O
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
