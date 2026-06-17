import projectsData from '../data/projects.json'

// Optimization: Directly import static JSON instead of fs.readFile. This allows Nuxt to bundle and cache the data in memory, making the API significantly faster.
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
