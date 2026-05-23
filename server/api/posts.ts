// ⚡ Bolt Optimization: Using direct ES module import to cache JSON data in memory
// instead of dynamically reading and parsing the file on every request.
import data from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    return data
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
