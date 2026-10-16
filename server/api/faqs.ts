import faqsData from '../data/faqs.json'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    // Optimization: Replaced fs.readFile with ES module import to cache JSON data in memory
    let items = faqsData as any[]
    
    if (query.project_id) {
      items = items.filter((i: any) => i.project_id === Number(query.project_id))
    }
    
    return items
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Failed to load faqs' })
  }
})
