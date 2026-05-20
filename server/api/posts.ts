import postsData from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    // ⚡ Optimize: Use direct JSON import for in-memory caching and better bundler compatibility
    return postsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
