import postsData from '../data/posts.json'

// Optimize: direct ES module JSON import caches data in memory, avoiding fs.readFile
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
