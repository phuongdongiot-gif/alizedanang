import projectsData from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // ⚡ Bolt: Direct JSON import caches data in memory, avoiding repeated slow fs.readFile calls.
    return projectsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
