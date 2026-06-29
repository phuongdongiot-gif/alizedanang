import faqsData from '../data/faqs.json'

// ⚡ Bolt: Leverage Nitro's memory caching and avoid fs.readFile by importing static JSON directly
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
