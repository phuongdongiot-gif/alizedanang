// Optimization: Import JSON directly. Nuxt Nitro natively supports ES module imports of JSON files,
// avoiding disk I/O and process.cwd() issues in production.
import data from '../../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    const slug = getRouterParam(event, 'slug')
    const items = data
    
    const post = items.find((i: any) => i.slug === slug)
    if (!post) {
      throw createError({ statusCode: 404, message: 'Post not found' })
    }
    
    return post
  } catch (error: any) {
    if (error.statusCode === 404) throw error
    throw createError({ statusCode: 500, message: 'Failed to load post details' })
  }
})
