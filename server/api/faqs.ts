// Optimized by Bolt: Import JSON directly to allow Nitro to cache data in memory
// avoiding fs.readFile and JSON.parse on every request.
import faqs from '../data/faqs.json'

export default defineEventHandler((event) => {
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
