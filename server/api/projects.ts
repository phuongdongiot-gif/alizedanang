import projectsData from '../data/projects.json'

export default defineEventHandler((event) => {
  try {
    // ⚡ Bolt: Replaced fs.readFile with direct JSON import to cache data in memory and avoid I/O bottlenecks.
    return projectsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
