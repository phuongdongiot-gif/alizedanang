// ⚡ Bolt Optimization: Using direct ES module import instead of fs.readFile
// This allows Nuxt Nitro to bundle and cache the JSON data in memory at build time.
import items from '../../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    const slug = getRouterParam(event, 'slug')
    
    // items is cached in memory. Using find() does not mutate the array.
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
