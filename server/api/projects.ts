import projects from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // Using cached JSON import instead of reading from disk
    return projects
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
