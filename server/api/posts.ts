import posts from '../data/posts.json'

export default defineEventHandler((event) => {
  try {
    // ⚡ Bolt: Return statically imported JSON data instead of reading from disk
    // This caches data in memory, eliminating inefficient fs.readFile operations on every request
    return posts
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
