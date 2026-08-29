import projects from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // Optimization: Import JSON directly to bundle it and cache it in memory instead of dynamic fs.readFile and JSON.parse on every request.
    return projects
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
