// ⚡ Bolt: Importing JSON directly caches the static data in memory,
// avoiding inefficient dynamic fs.readFile operations on every request.
import projects from '../data/projects.json'

export default defineEventHandler((event) => {
  try {
    return projects
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
