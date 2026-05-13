// ⚡ Bolt: Using direct ES module import to avoid synchronous-like fs.readFile block
// and enable native bundler caching instead of reading on every request.
import faqsData from '../data/faqs.json'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    let items = faqsData
    
    if (query.project_id) {
      items = items.filter((i: any) => i.project_id === Number(query.project_id))
    }
    
    return items
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Failed to load faqs' })
  }
})
