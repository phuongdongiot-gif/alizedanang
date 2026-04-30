// ⚡ Bolt Optimization: Import JSON directly to cache data in memory
// This avoids expensive disk I/O (fs.readFile) on every API request.
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
