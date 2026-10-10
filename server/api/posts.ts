import postsData from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    // Optimization: Import static data as ES module to cache in memory and avoid inefficient fs.readFile on every request
    return postsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
