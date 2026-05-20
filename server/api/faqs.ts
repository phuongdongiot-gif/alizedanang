import importedFaqs from '../data/faqs.json'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    // ⚡ Optimize: Use direct JSON import for in-memory caching and better bundler compatibility
    let items = [...importedFaqs] // clone to avoid mutating cached object if modified later
    
    if (query.project_id) {
      items = items.filter((i: any) => i.project_id === Number(query.project_id))
    }
    
    return items
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Failed to load faqs' })
  }
})
