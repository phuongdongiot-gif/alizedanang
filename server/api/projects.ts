// ⚡ Bolt Optimization: Use ES module import instead of fs.readFile to cache JSON data in memory
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
