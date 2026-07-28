import projectsData from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // ⚡ Bolt: Replaced dynamic fs.readFile with static JSON import for better performance and reliability
    return projectsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
