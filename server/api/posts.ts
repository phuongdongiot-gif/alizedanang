import data from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    // Bolt: Use ES module import to cache JSON data in memory instead of reading file
    return data
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
