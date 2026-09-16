// ⚡ Bolt Optimization: Use direct ES module import to natively cache data in memory
// Bypasses fs.readFile disk I/O and JSON.parse overhead per request
import projects from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    return projects
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
