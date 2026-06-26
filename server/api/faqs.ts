import faqs from '../data/faqs.json'

// Optimize: Use static JSON import for memory caching
export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    let items = faqs
    
    if (query.project_id) {
      items = items.filter((i: any) => i.project_id === Number(query.project_id))
    }
    
    return items
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Failed to load faqs' })
  }
})
