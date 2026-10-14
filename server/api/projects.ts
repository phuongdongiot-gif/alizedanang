// Optimization: Import JSON directly to cache it in memory and avoid disk I/O per request
import projectsData from '../data/projects.json'

export default defineEventHandler((event) => {
  try {
    return projectsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
