// ⚡ Bolt: Direct ES module import of JSON to cache data in memory
// and avoid expensive fs.readFile hits per request.
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
