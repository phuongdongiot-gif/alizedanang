import faqsData from '../data/faqs.json'

// Optimization: Cache static JSON data in memory via ES module import to avoid expensive disk I/O and JSON parsing on every request.

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
