// ⚡ Bolt: Replaced dynamic fs.readFile with direct ES module JSON import for in-memory caching and bundler friendliness
import data from '../data/posts.json'

export default defineEventHandler((event) => {
  try {
    return data
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
