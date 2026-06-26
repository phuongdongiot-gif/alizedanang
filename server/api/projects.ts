import projects from '../data/projects.json'

// Optimize: Use static JSON import for memory caching
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
