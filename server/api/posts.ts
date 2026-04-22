// ⚡ Bolt Performance Optimization:
// Import JSON directly to keep it in memory rather than reading from disk
// and parsing on every request, saving I/O operations and CPU time.
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
