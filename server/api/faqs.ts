// ⚡ Bolt: Optimize by directly importing JSON (caches in memory, avoids fs reads)
import data from '../data/faqs.json'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    // Clone cached array to prevent state mutation across requests
    let items = [...data]
    
    if (query.project_id) {
      items = items.filter((i: any) => i.project_id === Number(query.project_id))
    }
    
    return items
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Failed to load faqs' })
  }
})
