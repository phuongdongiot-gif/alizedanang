import projects from '../../data/projects.json'

// ⚡ Bolt: Cache projects in memory by directly importing the JSON module, avoiding inefficient fs.readFile and JSON.parse on every request.
export default defineEventHandler((event) => {
  try {
    const slug = getRouterParam(event, 'slug')
    const items = projects
    
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
