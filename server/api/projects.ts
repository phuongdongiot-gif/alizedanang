import projects from '../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    // ⚡ Bolt Optimization: Use ES module imports instead of fs.readFile
    // This allows Nuxt Nitro to bundle the static JSON and cache it in memory
    // automatically, avoiding process.cwd() issues in production.
    return projects
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load projects'
    })
  }
})
