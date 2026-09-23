import items from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // Performance: Importing static JSON directly caches data in memory, bypassing dynamic file system reads on every request.
    return items
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
