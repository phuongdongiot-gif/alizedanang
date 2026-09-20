import items from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    // Return imported JSON directly. This avoids fs.readFile and JSON.parse on every request, caching the data in memory.
    return items
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
