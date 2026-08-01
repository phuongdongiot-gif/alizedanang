// ⚡ Bolt: Use direct JSON import for in-memory caching and better bundler compatibility
import posts from '../data/posts.json'

export default defineEventHandler((event) => {
  try {
    return posts
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})