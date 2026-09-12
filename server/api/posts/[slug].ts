import items from '../../data/posts.json'

export default defineEventHandler((event) => {
  try {
    const slug = getRouterParam(event, 'slug')
    
    // Optimization: Importing JSON directly caches it in memory instead of reading from disk and parsing on every request.
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