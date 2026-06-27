// ⚡ Bolt Optimization: Using ES module import for JSON to leverage Nitro's in-memory caching
// This eliminates synchronous file I/O blocking during requests and improves API response times.
import items from '../../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    const slug = getRouterParam(event, 'slug')
    
    // .find() is non-mutating, so it's safe to use on the cached items object
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
