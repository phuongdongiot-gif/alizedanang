import posts from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    // Using cached JSON import instead of reading from disk
    return posts
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
