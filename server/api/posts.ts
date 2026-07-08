import postsData from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    // ⚡ Bolt: Using direct JSON import automatically bundles the asset, caches the data in memory, and avoids inefficient file reads
    return postsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
