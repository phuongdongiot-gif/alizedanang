import projectsData from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // OPTIMIZATION: Static ES module import caches JSON in memory and avoids per-request disk I/O and parsing
    return projectsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
