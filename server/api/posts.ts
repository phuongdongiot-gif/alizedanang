// ⚡ Bolt: Using direct ES module import to avoid synchronous-like fs.readFile block
// and enable native bundler caching instead of reading on every request.
import postsData from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    return postsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
