import projectsData from '../data/projects.json' with { type: 'json' }



export default defineEventHandler(async (event) => {
  try {
    // Optimization: use ES module import to cache static data in memory and avoid fs overhead
    return projectsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
