import projectsData from '../../data/projects.json'

// ⚡ Bolt: Importing JSON directly caches it in memory via Nuxt/Nitro and avoids slow fs operations
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
