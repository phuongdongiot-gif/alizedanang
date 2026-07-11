import postsData from '../../data/posts.json'

// Optimize: direct ES module JSON import caches data in memory, avoiding fs.readFile
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
