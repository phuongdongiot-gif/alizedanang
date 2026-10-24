import items from '../data/posts.json' with { type: 'json' }

export default defineEventHandler(async (event) => {
  try {
    return items
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to load posts'
    })
  }
})
