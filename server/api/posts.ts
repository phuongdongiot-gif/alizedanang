// ⚡ Bolt: Importing JSON directly caches the static data in memory,
// avoiding inefficient dynamic fs.readFile operations on every request.
import posts from '../data/posts.json'

export default defineEventHandler((event) => {
  try {
    return posts
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
