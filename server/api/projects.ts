// ⚡ Bolt: Import JSON directly to bundle it in memory, bypassing fs.readFile overhead on every request
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
