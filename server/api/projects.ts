import projectsData from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // ⚡ Optimize: Use direct JSON import for in-memory caching and better bundler compatibility
    return projectsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
