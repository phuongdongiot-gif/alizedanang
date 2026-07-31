// ⚡ Bolt: Use ES module import instead of fs.readFile to cache static data in memory and ensure it's bundled in production
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
