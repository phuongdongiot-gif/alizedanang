import projectsData from '../data/projects.json'

// ⚡ Bolt: Cache static JSON data in memory via ES module import to eliminate file I/O
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
