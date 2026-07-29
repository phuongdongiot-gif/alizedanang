import postsData from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    // OPTIMIZATION: Direct JSON import caches data in memory, avoiding fs.readFile on every request.
    return postsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
