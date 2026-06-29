import posts from '../data/posts.json'

// ⚡ Bolt: Leverage Nitro's memory caching and avoid fs.readFile by importing static JSON directly
export default defineEventHandler(async (event) => {
  try {
    return posts
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
