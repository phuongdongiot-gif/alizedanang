// Import JSON directly to cache in memory and avoid disk read per request
import allItems from '../data/faqs.json'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    let items = allItems
    
    if (query.project_id) {
      items = items.filter((i: any) => i.project_id === Number(query.project_id))
    }
    
    return items
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Failed to load faqs' })
  }
})
