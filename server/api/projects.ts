import projectsData from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // Optimization: Imported static data as ES module to cache in memory
    return projectsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
