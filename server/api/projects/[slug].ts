// ⚡ Bolt Optimization: Using ES module import for JSON to leverage Nitro's in-memory caching
// This eliminates synchronous file I/O blocking during requests and improves API response times.
import items from '../../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    const slug = getRouterParam(event, 'slug')
    
    // .find() is non-mutating, so it's safe to use on the cached items object
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
