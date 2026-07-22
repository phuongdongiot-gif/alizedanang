import projectsData from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // ⚡ Bolt Optimization: Use ES module import instead of fs.readFile to cache JSON in memory and eliminate I/O overhead.
    return projectsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
