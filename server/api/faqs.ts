import allFaqs from '../data/faqs.json'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)

    // Optimization: Direct JSON import improves performance by caching data in memory and is bundler-friendly
    let items = allFaqs
    
    if (query.project_id) {
      items = items.filter((i: any) => i.project_id === Number(query.project_id))
    }
    
    return items
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Failed to load faqs' })
  }
})
