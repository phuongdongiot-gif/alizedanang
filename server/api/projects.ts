import projectsData from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // OPTIMIZATION: Direct JSON import caches data in memory, avoiding fs.readFile on every request.
    return projectsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
