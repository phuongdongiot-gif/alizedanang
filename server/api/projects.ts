import projects from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // Bolt: Use direct JSON import to cache in memory and avoid fs reads
    return projects
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
