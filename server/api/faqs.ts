// ⚡ Bolt: Optimized by using direct JSON import which Nitro automatically caches in memory,
// avoiding synchronous fs.readFile and JSON.parse overhead on every request
import data from '../data/faqs.json'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    let items = data
    
    if (query.project_id) {
      items = items.filter((i: any) => i.project_id === Number(query.project_id))
    }
    
    return items
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Failed to load faqs' })
  }
})
