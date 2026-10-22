import projects from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // Optimization: Imported static JSON to cache in memory
    return projects
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
