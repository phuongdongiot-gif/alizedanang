import projectsData from '../data/projects.json'

export default defineEventHandler((event) => {
  try {
    // Return the pre-parsed JSON array
    return projectsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
