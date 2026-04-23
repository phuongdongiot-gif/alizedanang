import projects from '../data/projects.json'

export default defineEventHandler((event) => {
  try {
    // ⚡ Bolt: Return statically imported JSON data instead of reading from disk
    // This caches data in memory, eliminating inefficient fs.readFile operations on every request
    return projects
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
