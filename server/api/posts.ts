import postsData from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    // Optimize by importing JSON directly to cache in memory and avoid runtime fs.readFile
    return postsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
