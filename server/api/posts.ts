import posts from '../data/posts.json'

export default defineEventHandler((event) => {
  try {
    // Optimization: Import JSON directly to cache in memory and avoid fs.readFile on every request
    return posts
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
