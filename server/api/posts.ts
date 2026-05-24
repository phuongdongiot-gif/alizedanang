import data from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    // ⚡ Bolt: Removed dynamic fs.readFile and JSON.parse in favor of static ES module import.
    // This allows Nuxt/Nitro to bundle and cache the data in memory, avoiding inefficient I/O operations per request.
    return data
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
