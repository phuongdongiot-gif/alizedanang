import posts from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    // Optimization: Direct ES module import replaces fs.readFile to cache data in memory and improve response times.
    return posts
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
