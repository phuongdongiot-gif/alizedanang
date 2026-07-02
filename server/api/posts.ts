import items from '../data/posts.json'

export default defineEventHandler((event) => {
  try {
    // ⚡ Bolt: Use direct JSON import to cache data in memory and avoid expensive filesystem reads per request
    return items
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
