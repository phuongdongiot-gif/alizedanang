import faqsData from '../data/faqs.json'

// ⚡ Bolt: Importing JSON directly caches it in memory via Nuxt/Nitro and avoids slow fs operations
export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)

    // Note: Since importing JSON caches it in memory, we shouldn't mutate it directly.
    // In this case, `filter` creates a new array, so it is safe.
    let items = faqsData
    
    if (query.project_id) {
      items = items.filter((i: any) => i.project_id === Number(query.project_id))
    }
    
    return items
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Failed to load faqs' })
  }
})
