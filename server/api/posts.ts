import posts from '../data/posts.json'

// ⚡ Bolt: Cache posts in memory by directly importing the JSON module, avoiding inefficient fs.readFile and JSON.parse on every request.
export default defineEventHandler((event) => {
  try {
    return posts
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
