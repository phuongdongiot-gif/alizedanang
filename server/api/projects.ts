import projects from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // Optimization: Direct ES module import replaces fs.readFile to cache data in memory and improve response times.
    return projects
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
