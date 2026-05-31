import postsData from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    // Optimization: Direct JSON import improves performance by caching data in memory and is bundler-friendly
    return postsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
