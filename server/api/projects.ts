// ⚡ Bolt: Direct ES module import of static JSON instead of fs.readFile for faster startup, memory caching, and reliable bundling
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
