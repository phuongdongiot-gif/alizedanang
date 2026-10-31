// Optimization: Cached static JSON in memory via ES module import
import faqsData from '../data/faqs.json' with { type: 'json' }

export default defineEventHandler((event) => {
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
