// ⚡ Bolt: Using direct ES module import to cache JSON data in memory
// avoiding expensive fs.readFile operations on every request
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
