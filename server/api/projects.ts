import projects from '../data/projects.json' with { type: 'json' }
export default defineEventHandler(async (event) => {
  try {
    // Optimization: Read static data directly from ES module to eliminate fs.readFile and cache in memory
    return projects
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
