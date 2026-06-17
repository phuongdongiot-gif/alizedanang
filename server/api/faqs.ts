import faqsData from '../data/faqs.json'

// Optimization: Directly import static JSON instead of fs.readFile. This allows Nuxt to bundle and cache the data in memory, making the API significantly faster.
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
