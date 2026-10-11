import posts from '../data/posts.json' with { type: 'json' }

export default defineEventHandler(async (event) => {
  try {
    // Optimization: Using ES module imports for static JSON caches it in memory, bypassing expensive fs.readFile per request.
    return posts
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
