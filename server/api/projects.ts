// ⚡ Bolt Optimization: Use direct ES module import for static JSON data.
// This allows Nuxt/Nitro to bundle and cache the data in memory,
// avoiding expensive fs.readFile and JSON.parse operations on every request.
import projectsData from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    return projectsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
