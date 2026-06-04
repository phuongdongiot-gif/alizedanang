import projectsData from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // Direct JSON import leverages Nuxt/Nitro in-memory caching to boost performance
    return projectsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
