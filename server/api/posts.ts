import postsData from '../data/posts.json'

export default defineEventHandler((event) => {
  try {
    // ⚡ Bolt: Importing JSON directly bundles it and caches it in memory,
    // avoiding expensive fs.readFile and JSON.parse on every request.
    return postsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
