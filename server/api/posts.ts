// Optimization: Imported static JSON data to cache in memory and avoid inefficient fs.readFile on every request.
import items from '../data/posts.json'

export default defineEventHandler((event) => {
  try {
    return items
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
