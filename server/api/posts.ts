// Optimization: Import JSON directly to cache it in memory and avoid disk I/O per request
import postsData from '../data/posts.json'

export default defineEventHandler((event) => {
  try {
    return postsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
