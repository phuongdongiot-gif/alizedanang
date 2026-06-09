// ⚡ Bolt: Cache static JSON data in memory instead of reading file per request
import data from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    return data
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
