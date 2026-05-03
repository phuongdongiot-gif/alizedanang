import postsData from '../data/posts.json'

export default defineEventHandler((event) => {
  try {
    // Return the pre-parsed JSON array
    return postsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
