import projects from '../data/projects.json'

// ⚡ Bolt: Cache projects in memory by directly importing the JSON module, avoiding inefficient fs.readFile and JSON.parse on every request.
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
