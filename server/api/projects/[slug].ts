// Import JSON directly to cache in memory and avoid disk read per request
import items from '../../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    const slug = getRouterParam(event, 'slug')
    
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
