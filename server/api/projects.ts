import projectsData from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // Optimize by importing JSON directly to cache in memory and avoid runtime fs.readFile
    return projectsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
