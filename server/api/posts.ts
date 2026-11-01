import posts from '../data/posts.json' with { type: 'json' }
export default defineEventHandler(async (event) => {
  try {
    // Optimization: Read static data directly from ES module to eliminate fs.readFile and cache in memory
    return posts
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
