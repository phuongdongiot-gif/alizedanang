import postsData from '../../data/posts.json'

// ⚡ Bolt: Importing JSON directly caches it in memory via Nuxt/Nitro and avoids slow fs operations
export default defineEventHandler(async (event) => {
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
