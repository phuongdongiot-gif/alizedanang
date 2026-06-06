// ⚡ Bolt: Avoided dynamic fs.readFile and JSON.parse per request by utilizing static JSON imports.
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
