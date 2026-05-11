// ⚡ Bolt Optimization: Use direct ES module import for static JSON data.
// This allows Nuxt/Nitro to bundle and cache the data in memory,
// avoiding expensive fs.readFile and JSON.parse operations on every request.
import projectsData from '../../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    const slug = getRouterParam(event, 'slug')
    const items = projectsData
    
    const project = items.find((i: any) => i.slug === slug)
    if (!project) {
      throw createError({ statusCode: 404, message: 'Project not found' })
    }
    
    return project
  } catch (error: any) {
    if (error.statusCode === 404) throw error
    throw createError({ statusCode: 500, message: 'Failed to load project details' })
  }
})
