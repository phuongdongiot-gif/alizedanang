// Optimization: Imported static JSON data to cache in memory and avoid inefficient fs.readFile on every request.
import items from '../../data/posts.json'

export default defineEventHandler((event) => {
  try {
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
