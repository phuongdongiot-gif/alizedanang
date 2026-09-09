import postsData from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    // Performance optimization: use cached ES module import instead of fs.readFile
    return postsData
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
