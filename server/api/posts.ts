import postsData from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    // Cache data in memory and avoid expensive fs operations by importing directly
    return postsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
