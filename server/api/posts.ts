import posts from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    // Optimize: direct JSON import caches data in memory and avoids fs.readFile bottlenecks
    return posts
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
