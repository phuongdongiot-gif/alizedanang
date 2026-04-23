import allFaqs from '../data/faqs.json'

export default defineEventHandler((event) => {
  try {
    const query = getQuery(event)

    // ⚡ Bolt: Use statically imported JSON data instead of reading from disk
    // This caches data in memory, eliminating inefficient fs.readFile operations on every request
    let items = [...allFaqs]
    
    if (query.project_id) {
      items = items.filter((i: any) => i.project_id === Number(query.project_id))
    }
    
    return items
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Failed to load faqs' })
  }
})
