import projectsData from '../data/projects.json'

// ES module import caches the JSON in memory and avoids dynamic fs.readFile calls
export default defineEventHandler(async (event) => {
  try {
    return projectsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
