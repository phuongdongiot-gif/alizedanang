import postsData from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    // Optimization: Replace dynamic fs.readFile with static ES module import
    return postsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
