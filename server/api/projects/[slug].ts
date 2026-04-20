// ⚡ Bolt Optimization: Replace slow per-request fs.readFile and JSON.parse
// with direct ES module import to cache data in memory at build time.
import projectsData from '../../data/projects.json'

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug')
  const project = projectsData.find((i: any) => i.slug === slug)

  if (!project) {
    throw createError({ statusCode: 404, message: 'Project not found' })
  }

  return project
})
