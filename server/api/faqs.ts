import faqsData from '../data/faqs.json'

export default defineEventHandler(async (event) => {
  try {
    // Optimization: Import static JSON data as ES module to cache in memory and avoid inefficient fs.readFile operations on every request.
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
