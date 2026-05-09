import postsData from '../data/posts.json'

// ⚡ Bolt: Importing JSON directly caches it in memory via Nuxt/Nitro and avoids slow fs operations
export default defineEventHandler(async (event) => {
  try {
    return postsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
