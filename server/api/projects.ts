// ⚡ Bolt Optimization: Use direct ES module import to cache JSON data in memory
// instead of dynamically reading and parsing the file on every request.
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
