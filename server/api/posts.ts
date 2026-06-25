import data from '../data/posts.json'

// ⚡ Optimize: Leverage Nuxt Nitro's memory caching and avoid disk I/O by importing JSON directly
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
