import projectsData from '../../data/projects.json'

// Optimize: direct ES module JSON import caches data in memory, avoiding fs.readFile
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
