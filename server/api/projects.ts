import projectsData from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // Optimization: Avoid fs.readFile by importing JSON directly.
    // Nitro will bundle and cache this in memory.
    return projectsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
