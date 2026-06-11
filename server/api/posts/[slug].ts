import items from '../../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    const slug = getRouterParam(event, 'slug')
    
    // ⚡ Bolt Optimization: Using direct ES module import for static JSON
    // This caches the data in memory for better performance and avoids
    // bundler issues with process.cwd() in production environments.
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
