import projects from '../data/projects.json'

// ⚡ Bolt: Leverage Nitro's memory caching and avoid fs.readFile by importing static JSON directly
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
