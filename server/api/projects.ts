// Optimized by Bolt: Import JSON directly to allow Nitro to cache data in memory
// avoiding fs.readFile and JSON.parse on every request.
import projects from '../data/projects.json'

export default defineEventHandler((event) => {
  try {
    return projects
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
