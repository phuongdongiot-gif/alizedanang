// ⚡ Bolt: Import JSON directly for memory caching and better bundler compatibility, avoiding expensive file reads.
import items from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    return items
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
