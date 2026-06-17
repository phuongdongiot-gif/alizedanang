import postsData from '../../data/posts.json'

// Optimization: Directly import static JSON instead of fs.readFile. This allows Nuxt to bundle and cache the data in memory, making the API significantly faster.
export default defineEventHandler((event) => {
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
