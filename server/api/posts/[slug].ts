// ⚡ Bolt Performance Optimization:
// Import JSON directly to keep it in memory rather than reading from disk
// and parsing on every request, saving I/O operations and CPU time.
import postsData from '../../data/posts.json'

export default defineEventHandler((event) => {
  try {
    const slug = getRouterParam(event, 'slug')
    
    const post = postsData.find((i: any) => i.slug === slug)
    if (!post) {
      throw createError({ statusCode: 404, message: 'Post not found' })
    }
    
    return post
  } catch (error: any) {
    if (error.statusCode === 404) throw error
    throw createError({ statusCode: 500, message: 'Failed to load post details' })
  }
})
