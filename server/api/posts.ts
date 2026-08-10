import items from '../data/posts.json'

export default defineEventHandler(async (event) => {
  try {
    // Return cached JSON data instead of fs.readFile for better performance
    return items
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
