// ⚡ Bolt Optimization: Using direct ES module import instead of fs.readFile
// This allows Nuxt Nitro to bundle and cache the JSON data in memory at build time,
// eliminating inefficient file system reads on every API request.
import posts from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    return posts
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
