// Optimization: Direct JSON imports are natively supported by Nuxt/Nitro and cached in memory,
// avoiding expensive, synchronous-like fs.readFile operations at runtime.
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
