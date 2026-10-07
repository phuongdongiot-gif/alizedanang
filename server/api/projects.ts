import items from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // Optimization: Importing JSON as an ES module caches it in memory and bundles it for production, avoiding repeated fs.readFile calls per request
    return items
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
