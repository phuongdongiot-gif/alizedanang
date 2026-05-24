import faqs from '../data/faqs.json'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    // ⚡ Bolt: Removed dynamic fs.readFile and JSON.parse in favor of static ES module import.
    // This allows Nuxt/Nitro to bundle and cache the data in memory.
    // Assigned to a new variable to safely use non-mutating operations like `.filter()`.
    let items = faqs
    
    if (query.project_id) {
      items = items.filter((i: any) => i.project_id === Number(query.project_id))
    }
    
    return items
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Failed to load faqs' })
  }
})
