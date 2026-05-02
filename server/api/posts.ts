// ⚡ Bolt: Importing JSON directly allows Nuxt Nitro to bundle and cache the data in memory,
// avoiding expensive disk I/O and repeated JSON.parse calls on every request.
import postsData from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    return postsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
