import data from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    // Optimization: Directly import JSON to enable caching and speed up response times
    return data
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
