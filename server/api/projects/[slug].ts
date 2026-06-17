import projectsData from '../../data/projects.json'

// Optimization: Directly import static JSON instead of fs.readFile. This allows Nuxt to bundle and cache the data in memory, making the API significantly faster.
export default defineEventHandler((event) => {
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
