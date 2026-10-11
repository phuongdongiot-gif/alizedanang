import projects from '../data/projects.json' with { type: 'json' }

export default defineEventHandler(async (event) => {
  try {
    // Optimization: Using ES module imports for static JSON caches it in memory, bypassing expensive fs.readFile and JSON.parse per request.
    return projects
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
