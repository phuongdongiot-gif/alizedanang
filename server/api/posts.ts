// ⚡ Bolt: Direct ES module import of static JSON instead of fs.readFile for faster startup, memory caching, and reliable bundling
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
