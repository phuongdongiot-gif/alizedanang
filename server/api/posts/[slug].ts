import items from '../../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    const slug = getRouterParam(event, 'slug')
    // ⚡ Bolt: Using direct JSON import automatically bundles the asset, caches the data in memory, and avoids inefficient file reads
    
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
