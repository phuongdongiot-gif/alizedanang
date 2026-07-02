import faqs from '../data/faqs.json'

export default defineEventHandler((event) => {
  try {
    const query = getQuery(event)
    // ⚡ Bolt: Use direct JSON import to cache data in memory and avoid expensive filesystem reads per request
    let items = faqs
    
    if (query.project_id) {
      items = items.filter((i: any) => i.project_id === Number(query.project_id))
    }
    
    return items
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Failed to load faqs' })
  }
})
