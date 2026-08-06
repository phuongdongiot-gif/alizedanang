// Optimization: Direct ES module import bundles and caches JSON in memory instead of dynamic fs.readFile
import items from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    return items
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
