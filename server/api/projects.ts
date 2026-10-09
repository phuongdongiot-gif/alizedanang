import projects from '../data/projects.json'

export default defineEventHandler((event) => {
  try {
    // Optimization: Import static JSON directly to bundle it and cache in memory, avoiding fs.readFile overhead.
    return projects
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
