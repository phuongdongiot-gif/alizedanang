import projectsData from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // Optimization: Replaced fs.readFile with ES module import to cache JSON data in memory
    return projectsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
