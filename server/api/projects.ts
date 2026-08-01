// ⚡ Bolt: Use direct JSON import for in-memory caching and better bundler compatibility
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