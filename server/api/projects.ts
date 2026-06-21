import items from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // Optimization: Direct ES module import leverages Nitro's native JSON caching
    // and bundler optimization, avoiding process.cwd() path issues in production
    // and removing slow disk I/O per request.
    return items
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
