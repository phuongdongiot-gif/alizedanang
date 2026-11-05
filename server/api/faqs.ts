import faqsData from '../data/faqs.json' with { type: 'json' }

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    // Optimization: Import static JSON as ES module to cache in memory instead of reading from file system on every request.
    let items = faqsData;
    
    if (query.project_id) {
      items = items.filter((i: any) => i.project_id === Number(query.project_id))
    }
    
    return items
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Failed to load faqs' })
  }
})
