import items from '../data/posts.json'

export default defineEventHandler((event) => {
  try {
    // Optimization: Replace fs.readFile with static JSON import for better performance
    return items
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
