import posts from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    // ⚡ Bolt Optimization: Use ES module JSON import to avoid fs disk I/O and JSON parse overhead
    return posts
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
