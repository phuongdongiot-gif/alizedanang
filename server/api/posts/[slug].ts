// ⚡ Bolt: Using direct ES module import to avoid synchronous-like fs.readFile block
// and enable native bundler caching instead of reading on every request.
import postsData from '../../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    const slug = getRouterParam(event, 'slug')
    const items = postsData
    
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
