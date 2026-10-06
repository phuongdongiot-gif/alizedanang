import items from '../../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    const slug = getRouterParam(event, 'slug')
    
    // Optimization: Use in-memory cached JSON data via static import instead of fs.readFile per request
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
