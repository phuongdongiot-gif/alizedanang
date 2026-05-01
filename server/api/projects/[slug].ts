// ⚡ Bolt: Imported statically to cache JSON data in memory, avoiding blocking fs.readFile & JSON.parse on every request.
import items from '../../data/projects.json'

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug')

  const project = items.find((i: any) => i.slug === slug)
  if (!project) {
    throw createError({ statusCode: 404, message: 'Project not found' })
  }

  return project
})
