import faqsData from '../data/faqs.json'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    // ⚡ Bolt: Use direct JSON import for in-memory caching and better bundler compatibility, avoiding expensive file reads.
    let items = faqsData
    
    if (query.project_id) {
      // ⚡ Bolt: filter returns a new array, safely avoiding mutation of the cached JSON import.
      items = items.filter((i: any) => i.project_id === Number(query.project_id))
    }
    
    return items
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Failed to load faqs' })
  }
})
