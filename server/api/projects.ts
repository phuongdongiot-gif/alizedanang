import projects from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // Optimization: Directly import JSON to cache data in memory and avoid slow fs reads
    return projects
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
