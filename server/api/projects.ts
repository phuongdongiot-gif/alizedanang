// ⚡ Bolt Optimization: Replaced dynamic fs.readFile with static JSON import.
// This caches the parsed data in memory, eliminating disk I/O and JSON parsing overhead on every request.
import projects from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    return projects
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
