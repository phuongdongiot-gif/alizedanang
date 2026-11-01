import faqsData from '../data/faqs.json' with { type: 'json' }
export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    // Optimization: Read static data directly from ES module to eliminate fs.readFile and cache in memory
    let items = [...faqsData]
    
    if (query.project_id) {
      items = items.filter((i: any) => i.project_id === Number(query.project_id))
    }
    
    return items
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Failed to load faqs' })
  }
})
