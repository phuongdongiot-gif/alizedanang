import faqsData from '../data/faqs.json'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    // Optimization: Use direct import instead of fs.readFile and JSON.parse
    // This avoids disk I/O per request and bundles the data into the server
    let items = faqsData
    
    if (query.project_id) {
      items = items.filter((i: any) => i.project_id === Number(query.project_id))
    }
    
    return items
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Failed to load faqs' })
  }
})
