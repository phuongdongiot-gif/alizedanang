import faqsData from '../data/faqs.json'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)

    // ⚡ Bolt Optimization: Use ES module import to cache JSON data in memory instead of reading from disk on every request
    let items = faqsData
    
    if (query.project_id) {
      // ⚡ Bolt Optimization: Use non-mutating array methods to filter cached data safely
      items = items.filter((i: any) => i.project_id === Number(query.project_id))
    }
    
    return items
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Failed to load faqs' })
  }
})