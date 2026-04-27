// ⚡ Bolt Optimization: Use direct import instead of fs.readFile
// Nuxt's Nitro server natively supports ES module imports of JSON files.
// This bundles and caches the data in memory, avoiding inefficient filesystem reads on every request.
import data from '../../data/projects.json'

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug')

  const project = data.find((i: any) => i.slug === slug)
  if (!project) {
    throw createError({ statusCode: 404, message: 'Project not found' })
  }

  return project
})
