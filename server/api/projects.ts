import data from '../data/projects.json'

// ⚡ Optimize: Leverage Nuxt Nitro's memory caching and avoid disk I/O by importing JSON directly
export default defineEventHandler((event) => {
  try {
    return data
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
