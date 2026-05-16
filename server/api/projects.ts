// ⚡ Bolt Optimization: Use direct ES module import to cache JSON data in memory
// This avoids expensive synchronous-like fs.readFile operations on every request.
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
