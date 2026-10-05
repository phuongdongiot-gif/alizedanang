import posts from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    // Optimization: Import JSON directly to avoid fs I/O and JSON parsing on every request, and to ensure bundler compatibility
    return posts
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
