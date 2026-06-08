import projects from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // ⚡ Bolt: Using direct JSON import to leverage Nitro's built-in memory caching
    // This avoids redundant fs.readFile and JSON.parse operations on every request
    return projects
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
