// ⚡ Bolt: Use ES module import instead of fs.readFile to cache static data in memory and ensure it's bundled in production
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
