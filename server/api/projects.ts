import projectsData from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // ⚡ Bolt: Use direct JSON import for in-memory caching and faster response
    return projectsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
