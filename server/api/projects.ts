// ⚡ Bolt: Optimized by using direct JSON import which Nitro automatically caches in memory,
// avoiding synchronous fs.readFile and JSON.parse overhead on every request
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
