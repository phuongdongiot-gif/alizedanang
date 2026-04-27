// ⚡ Bolt Optimization: Use direct import instead of fs.readFile
// Nuxt's Nitro server natively supports ES module imports of JSON files.
// This bundles and caches the data in memory, avoiding inefficient filesystem reads on every request.
import data from '../../data/posts.json'

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug')

  const post = data.find((i: any) => i.slug === slug)
  if (!post) {
    throw createError({ statusCode: 404, message: 'Post not found' })
  }

  return post
})
