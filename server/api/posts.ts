import postsData from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    // ⚡ Bolt: Cache static JSON data in memory via ES module import.
    // Avoids expensive disk I/O and JSON.parse on every request.
    return postsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
