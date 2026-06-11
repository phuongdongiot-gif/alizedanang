import faqs from '../data/faqs.json'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)

    // ⚡ Bolt Optimization: Using direct ES module import for static JSON
    // This caches the data in memory for better performance and avoids
    // bundler issues with process.cwd() in production environments.
    let items = faqs
    
    if (query.project_id) {
      items = items.filter((i: any) => i.project_id === Number(query.project_id))
    }
    
    return items
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Failed to load faqs' })
  }
})
