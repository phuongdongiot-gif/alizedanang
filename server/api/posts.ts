import posts from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    // Optimization: Imported static JSON to cache in memory
    return posts
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
