import data from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // ⚡ Bolt: Direct ES module JSON imports cache the data in memory,
    // avoiding disk I/O on every request and preventing path issues in production.
    return data
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
