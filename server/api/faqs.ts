import data from '../data/faqs.json'

// ⚡ Optimize: Leverage Nuxt Nitro's memory caching and avoid disk I/O by importing JSON directly
export default defineEventHandler((event) => {
  try {
    const query = getQuery(event)
    let items = data
    
    if (query.project_id) {
      items = items.filter((i: any) => i.project_id === Number(query.project_id))
    }
    
    return items
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Failed to load faqs' })
  }
})
