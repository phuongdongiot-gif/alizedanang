import posts from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    // Optimization: Directly import JSON to cache data in memory and avoid slow fs reads
    return posts
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
