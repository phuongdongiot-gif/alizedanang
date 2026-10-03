import projects from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // Optimization: Import static JSON as ES module to cache in memory and avoid disk I/O
    return projects
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
