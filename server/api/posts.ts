// Caching static JSON via ES imports to reduce I/O and parsing overhead
import posts from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    return posts
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
