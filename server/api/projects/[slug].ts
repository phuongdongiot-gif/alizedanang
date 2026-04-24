// ⚡ Bolt: Importing JSON directly caches the static data in memory,
// avoiding inefficient dynamic fs.readFile operations on every request.
import projects from '../../data/projects.json'

export default defineEventHandler((event) => {
  try {
    const slug = getRouterParam(event, 'slug')
    
    const project = projects.find((i: any) => i.slug === slug)
    if (!project) {
      throw createError({ statusCode: 404, message: 'Project not found' })
    }
    
    return project
  } catch (error: any) {
    if (error.statusCode === 404) throw error
    throw createError({ statusCode: 500, message: 'Failed to load project details' })
  }
})
