import postsData from '../data/posts.json'

// Direct ES module import for JSON data instead of fs.readFile.
// This allows the bundler to cache the data in memory, improving response times.
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
