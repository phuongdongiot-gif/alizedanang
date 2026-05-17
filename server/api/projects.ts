// ⚡ Bolt Optimization: Use direct ES module import to cache JSON data in memory, avoiding slow fs.readFile operations and process.cwd() issues.
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
