import postsData from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    // ⚡ Bolt Optimization: Use direct ES module import to bundle JSON and leverage memory caching, avoiding dynamic fs.readFile overhead.
    return postsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
