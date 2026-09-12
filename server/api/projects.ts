import items from '../data/projects.json'

export default defineEventHandler((event) => {
  try {
    // Optimization: Importing JSON directly caches it in memory instead of reading from disk and parsing on every request.
    return items
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})