import projectsData from '../../data/projects.json'

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug')

  // Direct static import caches data in memory, avoiding inefficient fs.readFile per request
  const project = projectsData.find((i: any) => i.slug === slug)

  if (!project) {
    throw createError({ statusCode: 404, message: 'Project not found' })
  }

  return project
})
