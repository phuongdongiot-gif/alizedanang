import items from '../../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    // Optimization: Import static JSON data as ES module to cache in memory and avoid inefficient fs.readFile operations
    const slug = getRouterParam(event, 'slug')
    
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
