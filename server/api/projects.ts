import projectsData from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // ⚡ Bolt: Using direct JSON import automatically bundles the asset, caches the data in memory, and avoids inefficient file reads
    return projectsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
