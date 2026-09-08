import projects from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // ⚡ Bolt: Optimize by importing static JSON directly instead of reading from file system.
    return projects
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
