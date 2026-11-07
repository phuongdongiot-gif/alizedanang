import postsData from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    // Optimization: Import JSON directly to avoid fs.readFile and JSON.parse on every request
    return postsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
