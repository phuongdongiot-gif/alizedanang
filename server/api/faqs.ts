// ⚡ Bolt Optimization: Using direct ES module import instead of fs.readFile
// This allows Nuxt Nitro to bundle and cache the JSON data in memory at build time.
import faqsData from '../data/faqs.json'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    let items = faqsData
    
    if (query.project_id) {
      // items is cached in memory. Using filter() returns a new array and is safe.
      items = items.filter((i: any) => i.project_id === Number(query.project_id))
    }
    
    return items
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Failed to load faqs' })
  }
})
