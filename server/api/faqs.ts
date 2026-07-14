import faqsData from '../data/faqs.json'

// Direct ES module import for JSON data instead of fs.readFile.
// This allows the bundler to cache the data in memory, improving response times.
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
