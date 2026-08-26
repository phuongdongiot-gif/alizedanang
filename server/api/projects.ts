import projectsData from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // Performance optimization: Using direct JSON import to cache data in memory and avoid per-request fs.readFile
    return projectsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
