// ⚡ Bolt Optimization: Replaced dynamic fs.readFile with static JSON import.
// This caches the parsed data in memory, eliminating disk I/O and JSON parsing overhead on every request.
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
