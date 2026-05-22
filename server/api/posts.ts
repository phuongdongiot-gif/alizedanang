// ⚡ Bolt: Optimize by directly importing JSON (caches in memory, avoids fs reads)
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
