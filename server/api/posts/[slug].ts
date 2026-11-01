import posts from '../../data/posts.json' with { type: 'json' }
export default defineEventHandler(async (event) => {
  try {
    const slug = getRouterParam(event, 'slug')
    // Optimization: Read static data directly from ES module to eliminate fs.readFile and cache in memory
    const items = posts
    
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
