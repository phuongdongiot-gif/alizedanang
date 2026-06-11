import projects from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // ⚡ Bolt Optimization: Using direct ES module import for static JSON
    // This caches the data in memory for better performance and avoids
    // bundler issues with process.cwd() in production environments.
    return projects
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
