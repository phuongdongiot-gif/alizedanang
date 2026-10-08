import projectsData from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // Optimization: Import static JSON data as ES module to cache in memory and avoid inefficient fs.readFile operations
    return projectsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
