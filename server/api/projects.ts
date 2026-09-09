import projectsData from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // Performance optimization: use cached ES module import instead of fs.readFile
    return projectsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
