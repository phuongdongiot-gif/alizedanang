import projects from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // Return imported projects directly for in-memory caching
    return projects
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
