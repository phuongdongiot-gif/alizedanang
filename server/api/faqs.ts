import faqsData from '../data/faqs.json'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    // ⚡ Bolt Optimization: Use ES module imports instead of fs.readFile
    // This allows Nuxt Nitro to bundle the static JSON and cache it in memory
    // automatically, avoiding process.cwd() issues in production.
    let items = faqsData
    
    if (query.project_id) {
      items = items.filter((i: any) => i.project_id === Number(query.project_id))
    }
    
    return items
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Failed to load faqs' })
  }
})
