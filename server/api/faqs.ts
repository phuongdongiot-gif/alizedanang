// ⚡ Bolt Optimization: Using ES module import for JSON to leverage Nitro's in-memory caching
// This eliminates synchronous file I/O blocking during requests and improves API response times.
import faqsData from '../data/faqs.json'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    let items = faqsData
    
    if (query.project_id) {
      // .filter() is non-mutating, so it's safe to use on the cached faqsData object
      items = items.filter((i: any) => i.project_id === Number(query.project_id))
    }
    
    return items
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Failed to load faqs' })
  }
})
