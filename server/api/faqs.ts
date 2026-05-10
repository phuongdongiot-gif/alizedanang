// Optimization: Import JSON directly. Nuxt Nitro natively supports ES module imports of JSON files,
// avoiding disk I/O and process.cwd() issues in production.
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
