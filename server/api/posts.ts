import postsData from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    // Return imported data directly to cache in memory and avoid inefficient fs.readFile operations
    return postsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
