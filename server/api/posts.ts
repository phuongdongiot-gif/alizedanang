import items from '../data/posts.json'

export default defineEventHandler((event) => {
  try {
    // ⚡ Bolt: Implemented ES module JSON import to cache data in memory and eliminate fs.readFile overhead per request.
    return items
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
