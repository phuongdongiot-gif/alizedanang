import projects from '../../data/projects.json'

export default defineEventHandler((event) => {
  // ⚡ Bolt: Importing static JSON directly caches data in memory, avoiding slow fs disk I/O on every request
  const slug = getRouterParam(event, 'slug')

  const project = projects.find((i: any) => i.slug === slug)
  if (!project) {
    throw createError({ statusCode: 404, message: 'Project not found' })
  }

  return project
})
