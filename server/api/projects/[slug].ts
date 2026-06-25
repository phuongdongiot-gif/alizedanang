import items from '../../data/projects.json'

// ⚡ Optimize: Leverage Nuxt Nitro's memory caching and avoid disk I/O by importing JSON directly
export default defineEventHandler((event) => {
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
