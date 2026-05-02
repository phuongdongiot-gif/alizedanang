// ⚡ Bolt: Importing JSON directly allows Nuxt Nitro to bundle and cache the data in memory,
// avoiding expensive disk I/O and repeated JSON.parse calls on every request.
import projectsData from '../../data/projects.json'

export default defineEventHandler(async (event) => {
  try {
    const slug = getRouterParam(event, 'slug')
    
    const project = projectsData.find((i: any) => i.slug === slug)
    if (!project) {
      throw createError({ statusCode: 404, message: 'Project not found' })
    }
    
    return project
  } catch (error: any) {
    if (error.statusCode === 404) throw error
    throw createError({ statusCode: 500, message: 'Failed to load project details' })
  }
})
